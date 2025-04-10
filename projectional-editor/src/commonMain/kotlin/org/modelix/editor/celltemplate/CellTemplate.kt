package org.modelix.editor.celltemplate

import org.modelix.editor.CellActionProperties
import org.modelix.editor.CellCreationContext
import org.modelix.editor.CellData
import org.modelix.editor.CellProperties
import org.modelix.editor.ChildCellTemplateReference
import org.modelix.editor.CodeCompletionParameters
import org.modelix.editor.CommonCellProperties
import org.modelix.editor.ECellLayout
import org.modelix.editor.EditorState
import org.modelix.editor.IActionOrProvider
import org.modelix.editor.ICellTemplateReference
import org.modelix.editor.ICodeCompletionAction
import org.modelix.editor.ICompletionTokenOrList
import org.modelix.editor.INonExistingNode
import org.modelix.editor.TemplateCellReference
import org.modelix.editor.TextCellData
import org.modelix.editor.asProvider
import org.modelix.editor.asTokenList
import org.modelix.editor.withTokens
import org.modelix.metamodel.ITypedNode
import org.modelix.metamodel.untyped
import org.modelix.model.api.IConcept
import org.modelix.model.api.INode
import org.modelix.model.api.INodeReference
import org.modelix.model.api.IWritableNode
import kotlin.jvm.JvmName

abstract class CellTemplate(val concept: IConcept) {
    val properties = CellProperties()
    private val children: MutableList<CellTemplate> = ArrayList()

    @get:JvmName("getReferenceField")
    @set:JvmName("setReferenceField")
    protected var reference: ICellTemplateReference? = null
    val withNode: MutableList<(node: INode) -> Unit> = ArrayList()
    fun apply(context: CellCreationContext, node: INode): CellData {
        val cellData = createCell(context, node)
        cellData.properties.addAll(properties)
        cellData.children.addAll(applyChildren(context, node, cellData))
        if (properties[CommonCellProperties.layout] == ECellLayout.VERTICAL) {
            cellData.children.drop(1).forEach { (it as CellData).properties[CommonCellProperties.onNewLine] = true }
        }
        withNode.forEach { it(node) }
        val cellReference: TemplateCellReference = createCellReference(node)
        cellData.cellReferences.add(cellReference)
        applyTextReplacement(cellData, context.editorState)
        return cellData
    }
    protected open fun applyChildren(context: CellCreationContext, node: INode, cell: CellData): List<CellData> {
        return children.map { it.apply(context, node) }
    }
    protected abstract fun createCell(context: CellCreationContext, node: INode): CellData

    open fun getInstantiationActions(location: INonExistingNode, parameters: CodeCompletionParameters): List<IActionOrProvider>? {
        val completionText = properties[CommonCellProperties.codeCompletionText]
        if (completionText != null) {
            return listOf(InstantiateNodeCompletionAction(completionText, concept, location))
        }

        for ((index, child) in children.withIndex()) {
            val actions = child.getInstantiationActions(location, parameters)
            if (actions != null) {
                val nextTokens = children.drop(index + 1).mapNotNull { it.toCompletionToken() }.asTokenList()
                if (!nextTokens.isEmpty()) {
                    return actions.map { it.asProvider().withTokens { innerTokens -> listOf(innerTokens, nextTokens).asTokenList().normalize() } }
                }
                return actions
            }
        }

        return null
    }

    fun getSideTransformActions(before: Boolean, nodeToReplace: INode): List<ICodeCompletionAction>? {
        val symbols = getGrammarSymbols().toList()
        val conceptToReplace = nodeToReplace.concept ?: return null
        return symbols.mapIndexedNotNull { index, symbol ->
            if (symbol is ChildCellTemplate && conceptToReplace.isSubConceptOf(symbol.link.targetConcept)) {
                val prevNextIndex = if (before)index - 1 else index + 1
                val prevNextSymbol = symbols.getOrNull(prevNextIndex) ?: return@mapIndexedNotNull null
                return@mapIndexedNotNull prevNextSymbol.createWrapperAction(nodeToReplace, symbol.link)
            }
            return@mapIndexedNotNull null
        }.flatten()
    }

    open fun getGrammarSymbols(): Sequence<IGrammarSymbol> {
        return if (this is IGrammarSymbol) {
            sequenceOf(this)
        } else {
            children.asSequence().flatMap { it.getGrammarSymbols() }
        }
    }

    open fun toCompletionToken(): ICompletionTokenOrList? = children.mapNotNull { it.toCompletionToken() }.asTokenList().takeIf { !it.isEmpty() }

    fun addChild(child: CellTemplate) {
        children.add(child)
        reference?.let { child.setReference(ChildCellTemplateReference(it, children.size - 1)) }
    }

    fun getChildren(): List<CellTemplate> = children

    open fun setReference(ref: ICellTemplateReference) {
        if (reference != null) throw IllegalStateException("reference is already set")
        reference = ref
        children.forEachIndexed { index, child -> child.setReference(ChildCellTemplateReference(ref, index)) }
    }

    fun getReference() = reference ?: throw IllegalStateException("reference isn't set yet")

    fun createCellReference(node: Any) = when (node) {
        is INodeReference -> createCellReference(node)
        is INode -> createCellReference(node)
        is ITypedNode -> createCellReference(node)
        is IWritableNode -> createCellReference(node.asLegacyNode())
        else -> throw IllegalArgumentException("Unsupported node type: $node")
    }
    fun createCellReference(nodeRef: INodeReference) = TemplateCellReference(getReference(), nodeRef)
    fun createCellReference(node: INode) = createCellReference(node.reference)
    fun createCellReference(node: ITypedNode) = createCellReference(node.untyped())

    private fun applyTextReplacement(cellData: CellData, editorState: EditorState) {
        if (cellData is TextCellData) {
            val cellRef = cellData.cellReferences.firstOrNull()
            if (cellRef != null) {
                editorState.textReplacements[cellRef]
                    ?.let { cellData.properties[CommonCellProperties.textReplacement] = it }
                cellData.properties[CellActionProperties.replaceText] =
                    OverrideText(cellData, cellData.properties[CellActionProperties.replaceText])
            }
        }
        cellData.children.filterIsInstance<CellData>().forEach { applyTextReplacement(it, editorState) }
    }
}

fun CellTemplate.firstLeaf(): CellTemplate = if (getChildren().isEmpty()) this else getChildren().first().firstLeaf()
fun CellTemplate.descendants(includeSelf: Boolean = false): Sequence<CellTemplate> {
    return if (includeSelf) {
        sequenceOf(this) + descendants(false)
    } else {
        getChildren().asSequence().flatMap { it.descendants(true) }
    }
}
