package org.modelix.editor

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.cancel
import org.modelix.editor.celltemplate.CellTemplate
import org.modelix.editor.celltemplate.ParserForEditor
import org.modelix.incremental.IncrementalEngine
import org.modelix.incremental.incrementalFunction
import org.modelix.metamodel.ITypedNode
import org.modelix.model.api.IConcept
import org.modelix.model.api.IConceptReference
import org.modelix.model.api.INode
import org.modelix.model.api.getAllConcepts
import org.modelix.model.api.remove
import org.modelix.parser.IParseTreeNode

class EditorEngine(incrementalEngine: IncrementalEngine? = null) {

    private val incrementalEngine: IncrementalEngine
    private val ownsIncrementalEngine: Boolean
    private val editorsForConcept: MutableMap<IConceptReference, MutableList<ConceptEditor>> = LinkedHashMap()
    private val conceptEditorRegistries = ArrayList<IConceptEditorRegistry>()
    private val coroutineScope = CoroutineScope(Dispatchers.Default)
    private val parser = ParserForEditor(this)

    init {
        if (incrementalEngine == null) {
            this.incrementalEngine = IncrementalEngine(100_000)
            this.ownsIncrementalEngine = true
        } else {
            this.incrementalEngine = incrementalEngine
            this.ownsIncrementalEngine = false
        }
    }

    private val createCellIncremental: (EditorState, INode) -> Cell = this.incrementalEngine.incrementalFunction("createCell") { _, editorState, node ->
        val cell = doCreateCell(editorState, node)
        cell.freeze()
        LOG.trace { "Cell created for $node: $cell" }
        cell
    }
    private val createCellDataIncremental: (EditorState, INode) -> CellData = this.incrementalEngine.incrementalFunction("createCellData") { _, editorState, node ->
        val cellData = doCreateCellData(editorState, node)
        cellData.properties[CommonCellProperties.node] = node.toNonExisting()
        cellData.freeze()
        LOG.trace { "Cell created for $node: $cellData" }
        cellData
    }

    fun addRegistry(registry: IConceptEditorRegistry) {
        conceptEditorRegistries += registry
    }

    fun removeRegistry(registry: IConceptEditorRegistry) {
        conceptEditorRegistries.remove(registry)
    }

    fun registerEditors(editorAspect: EditorAspect) {
        editorAspect.conceptEditors.forEach {
            val declaredConcept = it.declaredConcept ?: return@forEach
            editorsForConcept.getOrPut(declaredConcept.getReference()) { ArrayList() }.add(it)
        }
    }

    fun createCell(editorState: EditorState, node: INode): Cell {
        return createCellIncremental(editorState, node)
    }

    fun createCellModel(concept: IConcept): CellTemplate {
        val editor: ConceptEditor = resolveConceptEditor(concept).first()
        val template: CellTemplate = editor.apply(concept)
        return template
    }

    fun createCellModelExcludingDefault(concept: IConcept): CellTemplate? {
        return resolveConceptEditor(concept).minus(defaultConceptEditor).firstOrNull()?.apply(concept)
    }

    fun editNode(node: INode, virtualDom: IVirtualDom = IVirtualDom.newInstance()): EditorComponent {
        return EditorComponent(this, virtualDom = virtualDom, transactionManager = node.getArea()) { editorState ->
            node.getArea().executeRead { createCell(editorState, node) }
        }
    }

    @Deprecated("provide an untyped node", ReplaceWith("editorNode(node.unwrap(), virtualDom)"))
    fun editNode(node: ITypedNode, virtualDom: IVirtualDom = IVirtualDom.newInstance()) = editNode(node.unwrap(), virtualDom)

    private fun doCreateCell(editorState: EditorState, node: INode): Cell {
        return dataToCell(editorState, createCellDataIncremental(editorState, node))
    }

    private fun dataToCell(editorState: EditorState, data: CellData): Cell {
        val cell = Cell(data)
        for (childData in data.children) {
            val childCell: Cell = when (childData) {
                is CellData -> {
                    dataToCell(editorState, childData)
                }
                is ChildDataReference -> {
                    createCell(editorState, childData.childNode).also { it.parent?.removeChild(it) }
                }
                else -> throw RuntimeException("Unsupported: $childData")
            }
            cell.addChild(childCell)
        }
        return cell
    }

    private fun doCreateCellData(editorState: EditorState, node: INode): CellData {
        try {
            val editor = resolveConceptEditor(node.concept)
            val context = CellCreationContext(this, editorState)

            // TODO do some proper conflict resolution between multiple applicable editors instead of just taking the first one.
            val data = editor.asSequence().mapNotNull { it.applyIfApplicable(context, node) }.first()

            data.properties[CellActionProperties.substitute] = ReplaceNodeActionProvider(ExistingNode(node))
            data.cellReferences += NodeCellReference(node.reference)
            data.properties[CellActionProperties.transformBefore] = SideTransformNode(true, node)
            data.properties[CellActionProperties.transformAfter] = SideTransformNode(false, node)
            data.properties[CommonCellProperties.selectable] = true
            data.properties[CellActionProperties.delete] = DeleteNodeCellAction(node)
            return data
        } catch (ex: Exception) {
            LOG.error(ex) { "Failed to create cell for $node" }
            return TextCellData("<ERROR: ${ex.message}>", "").apply {
                properties[CommonCellProperties.textColor] = "red"
            }
        }
    }

    fun resolveConceptEditor(concept: IConcept?): List<ConceptEditor> {
        if (concept == null) return listOf(defaultConceptEditor)
        val editors = concept.getAllConcepts().firstNotNullOfOrNull { superConcept ->
            val conceptReference = superConcept.getReference()
            val allEditors = (editorsForConcept[conceptReference] ?: emptyList()) +
                conceptEditorRegistries.flatMap { it.getConceptEditors(conceptReference) }
            allEditors
                .filter { it.declaredConcept == null || it.applicableToSubConcepts || concept.isExactly(it.declaredConcept) }
                .takeIf { it.isNotEmpty() }
        }
        return (editors ?: emptyList()) + defaultConceptEditor
    }

    fun parse(input: String, outputConcept: IConcept, complete: Boolean): List<IParseTreeNode> {
        return parser.getParser(startConcept = outputConcept, forCodeCompletion = complete).parseForest(input, complete).toList()
    }

    fun dispose() {
        coroutineScope.cancel("EditorEngine disposed")
        if (ownsIncrementalEngine) incrementalEngine.dispose()
    }

    companion object {
        private val LOG = io.github.oshai.kotlinlogging.KotlinLogging.logger {}
    }
}

class DeleteNodeCellAction(val node: INode) : ICellAction {
    override fun isApplicable(): Boolean = true

    override fun execute(editor: EditorComponent): ICaretPositionPolicy? {
        return SavedCaretPosition.saveAndRun(editor) {
            editor.runWrite {
                node.remove()
            }
        }
    }
}
