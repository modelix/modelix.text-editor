package org.modelix.editor

import org.modelix.constraints.ConstraintsAspect
import org.modelix.metamodel.ITypedNode
import org.modelix.metamodel.untyped
import org.modelix.model.api.IChildLink
import org.modelix.model.api.IConcept
import org.modelix.model.api.INode
import org.modelix.model.api.INodeReference
import org.modelix.model.api.IProperty
import org.modelix.model.api.IReferenceLink
import org.modelix.scopes.ScopeAspect
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
        return children.asSequence().mapNotNull { it.getInstantiationActions(location, parameters) }.firstOrNull()
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

interface IGrammarSymbol {
    fun createWrapperAction(nodeToWrap: INode, wrappingLink: IChildLink): List<ICodeCompletionAction> {
        return emptyList()
    }
}

class OverrideText(val cell: TextCellData, val delegate: ITextChangeAction?) : ITextChangeAction {
    override fun isValid(value: String?): Boolean {
        return true
    }

    override fun replaceText(editor: EditorComponent, range: IntRange, replacement: String, newText: String): Boolean {
        val cellRef = cell.cellReferences.first()
        if (delegate != null && delegate.isValid(newText)) {
            editor.state.textReplacements.remove(cellRef)
            return delegate.replaceText(editor, range, replacement, newText)
        }

        if (cell.text == newText) {
            editor.state.textReplacements.remove(cellRef)
        } else {
            editor.state.textReplacements[cellRef] = newText
        }
        return true
    }
}

class ConstantCellTemplate(concept: IConcept, val text: String) :
    CellTemplate(concept), IGrammarSymbol {
    override fun createCell(context: CellCreationContext, node: INode) = TextCellData(text, "")
    override fun getInstantiationActions(location: INonExistingNode, parameters: CodeCompletionParameters): List<IActionOrProvider>? {
        return listOf(InstantiateNodeCompletionAction(text, concept, location))
    }

    override fun createWrapperAction(nodeToWrap: INode, wrappingLink: IChildLink): List<ICodeCompletionAction> {
        return listOf(SideTransformWrapper(nodeToWrap.toNonExisting(), wrappingLink))
    }

    inner class SideTransformWrapper(val nodeToWrap: INonExistingNode, val wrappingLink: IChildLink) : ICodeCompletionAction {
        override fun getMatchingText(): String = text
        override fun getDescription(): String = concept.getShortName()
        override fun execute(editor: EditorComponent) {
            val wrapper = nodeToWrap.getParent()!!.getOrCreateNode(null).addNewChild(nodeToWrap.getContainmentLink()!!, nodeToWrap.index(), concept)
            wrapper.moveChild(wrappingLink, 0, nodeToWrap.getOrCreateNode(null))
            editor.selectAfterUpdate {
                CaretPositionPolicy(wrapper)
                    .avoid(ChildNodeCellReference(wrapper.reference, wrappingLink))
                    .avoid(createCellReference(wrapper))
                    .getBestSelection(editor)
            }
        }

        override fun shadows(shadowed: ICodeCompletionAction): Boolean {
            if (shadowed !is ConstantCellTemplate.SideTransformWrapper) return false
            if (shadowed.getTemplate().concept != concept) return false
            val commonAncestor = nodeToWrap.commonAncestor(shadowed.nodeToWrap)
            val ownDepth = nodeToWrap.ancestors(true).takeWhile { it != commonAncestor }.count()
            val otherDepth = shadowed.nodeToWrap.ancestors(true).takeWhile { it != commonAncestor }.count()
            if (ownDepth > otherDepth) return true
            return false
        }

        fun getTemplate() = this@ConstantCellTemplate
    }
}

class InstantiateNodeCompletionAction(
    private val matchingText: String,
    val concept: IConcept,
    val location: INonExistingNode,
) : ICodeCompletionAction {
    private val description = let {
        fun wrapperText(innerText: String, wrapper: INonExistingNode?): String = if (wrapper != null && wrapper.getNode() == null) {
            wrapperText("${wrapper.expectedConcept()?.getShortName()}[$innerText]", wrapper.getParent())
        } else {
            innerText
        }
        wrapperText(concept.getShortName(), location.getParent())
    }

    override fun getMatchingText(): String {
        return matchingText
    }

    override fun getDescription(): String = description

    override fun execute(editor: EditorComponent) {
        val newNode = location.getExistingAncestor()!!.getArea().executeWrite {
            location.replaceNode(concept)
        }
        editor.selectAfterUpdate {
            CaretPositionPolicy(newNode)
                .getBestSelection(editor)
        }
    }
}

/**
 * A label is some text shown in the editor that has no effect on its behavior.
 * It is not part of the grammar of the language.
 * It is ignored when generating transformation action.
 * A constant is part of the grammar.
 */
class LabelCellTemplate(concept: IConcept, val text: String) :
    CellTemplate(concept) {
    override fun createCell(context: CellCreationContext, node: INode): TextCellData {
        return TextCellData(text, "").also {
            if (!it.properties.isSet(CommonCellProperties.textColor)) {
                it.properties[CommonCellProperties.textColor] = "LightGray"
            }
        }
    }
    override fun getInstantiationActions(location: INonExistingNode, parameters: CodeCompletionParameters): List<IActionOrProvider>? {
        return emptyList()
    }
}

class NewLineCellTemplate(concept: IConcept) :
    CellTemplate(concept) {
    override fun createCell(context: CellCreationContext, node: INode): CellData {
        return CellData().also { cell -> cell.properties[CommonCellProperties.onNewLine] = true }
    }
}
class NoSpaceCellTemplate(concept: IConcept) :
    CellTemplate(concept) {
    override fun createCell(context: CellCreationContext, node: INode): CellData {
        return CellData().also { cell -> cell.properties[CommonCellProperties.noSpace] = true }
    }
}
class CollectionCellTemplate(concept: IConcept) :
    CellTemplate(concept) {
    override fun createCell(context: CellCreationContext, node: INode) = CellData()
}
class NotationRootCellTemplate(concept: IConcept) :
    CellTemplate(concept) {
    var condition: ((INode) -> Boolean)? = null
    override fun createCell(context: CellCreationContext, node: INode) = CellData()
}
class OptionalCellTemplate(concept: IConcept) :
    CellTemplate(concept) {
    override fun createCell(context: CellCreationContext, node: INode): CellData {
        return CellData()
    }

    override fun applyChildren(context: CellCreationContext, node: INode, cell: CellData): List<CellData> {
        // TODO support other cell types as condition for the optional
        val childLinkCell = descendants().filterIsInstance<ChildCellTemplate>().firstOrNull()
        if (childLinkCell == null || childLinkCell.getChildNodes(node).isNotEmpty()) {
            return super.applyChildren(context, node, cell)
        } else {
            return emptyList()
        }
    }

    override fun getInstantiationActions(location: INonExistingNode, parameters: CodeCompletionParameters): List<IActionOrProvider>? {
        return null // skip optional. Don't search in children.
    }

    override fun getGrammarSymbols(): Sequence<IGrammarSymbol> {
        return emptySequence()
    }
}

open class PropertyCellTemplate(concept: IConcept, val property: IProperty) :
    CellTemplate(concept), IGrammarSymbol {
    var placeholderText: String = "<no ${property.getSimpleName()}>"
    var validator: ((String) -> Boolean)? = null
    override fun createCell(context: CellCreationContext, node: INode): CellData {
        val value = node.getPropertyValue(property)
        val data = TextCellData(value ?: "", if (value == null) placeholderText else "")
        data.properties[CellActionProperties.replaceText] = ChangePropertyAction(node)
        data.properties[CommonCellProperties.tabTarget] = true
        data.cellReferences += PropertyCellReference(property, node.reference)
        return data
    }
    override fun getInstantiationActions(location: INonExistingNode, parameters: CodeCompletionParameters): List<IActionOrProvider>? {
        return listOf(WrapPropertyValueProvider(location))
    }

    inner class WrapPropertyValueProvider(val location: INonExistingNode) : ICodeCompletionActionProvider {
        override fun getApplicableActions(parameters: CodeCompletionParameters): List<IActionOrProvider> {
            return if (validateValue(location.replacement(concept), parameters.pattern)) {
                listOf(WrapPropertyValue(location, parameters.pattern))
            } else {
                emptyList()
            }
        }
    }

    private fun validateValue(node: INonExistingNode, value: String): Boolean {
        return validator?.invoke(value)
            ?: ConstraintsAspect.checkPropertyValue(node, property, value).isEmpty()
    }

    inner class WrapPropertyValue(val location: INonExistingNode, val value: String) : ICodeCompletionAction {
        override fun getMatchingText(): String {
            return value
        }

        override fun getDescription(): String {
            return concept.getShortName()
        }

        override fun execute(editor: EditorComponent) {
            val node = location.getOrCreateNode(concept)
            node.setPropertyValue(property, value)
            editor.selectAfterUpdate {
                CaretPositionPolicy(createCellReference(node))
                    .getBestSelection(editor)
            }
        }
    }

    inner class ChangePropertyAction(val node: INode) : ITextChangeAction {
        override fun isValid(value: String?): Boolean {
            if (value == null) return true
            return validateValue(node.toNonExisting(), value)
        }

        override fun replaceText(editor: EditorComponent, range: IntRange, replacement: String, newText: String): Boolean {
            node.getArea().executeWrite {
                node.setPropertyValue(property, newText)
            }
            return true
        }
    }
}

class ReferenceCellTemplate(
    concept: IConcept,
    val link: IReferenceLink,
    val presentation: INode.() -> String?,
) : CellTemplate(concept), IGrammarSymbol {
    override fun createCell(context: CellCreationContext, node: INode): CellData {
        val data = TextCellData(getText(node), "<no ${link.getSimpleName()}>")
        data.cellReferences += ReferencedNodeCellReference(node.reference, link)
        data.properties[CommonCellProperties.tabTarget] = true
        data.properties[CellActionProperties.substitute] =
            ReferenceTargetActionProvider(ExistingNode(node), link, { it.getNode()?.let(presentation) ?: "" }).after {
                context.editorState.substitutionPlaceholderPositions.remove(createCellReference(node))
            }
        return data
    }
    private fun getText(node: INode): String = getTargetNode(node)?.let(presentation) ?: ""
    private fun getTargetNode(sourceNode: INode): INode? {
        return sourceNode.getReferenceTarget(link)
    }
    override fun getInstantiationActions(location: INonExistingNode, parameters: CodeCompletionParameters): List<IActionOrProvider> {
        val sourceNode = location.replacement(concept)
        val scope = ScopeAspect.getScope(sourceNode, link)
        val targets = scope.getVisibleElements(sourceNode, link)
        return targets.map { target ->
            val text = when (target) {
                is ExistingNode -> presentation(target.getNode()) ?: ""
                else -> "<create new target node>"
            }
            WrapReferenceTarget(location, target, text)
        }
    }

    inner class WrapReferenceTarget(val location: INonExistingNode, val target: INonExistingNode, val presentation: String) : ICodeCompletionAction {
        override fun getMatchingText(): String {
            return presentation
        }

        override fun getDescription(): String {
            return concept.getShortName()
        }

        override fun execute(editor: EditorComponent) {
            val sourceNode = location.getOrCreateNode(concept)
            sourceNode.setReferenceTarget(link, target.getOrCreateNode())
            editor.selectAfterUpdate {
                CaretPositionPolicy(createCellReference(sourceNode)).getBestSelection(editor)
            }
        }
    }
}

class FlagCellTemplate(
    concept: IConcept,
    property: IProperty,
    val text: String,
) : PropertyCellTemplate(concept, property), IGrammarSymbol {
    override fun createCell(context: CellCreationContext, node: INode) = if (node.getPropertyValue(property) == "true") TextCellData(text, "") else CellData()
    override fun getInstantiationActions(location: INonExistingNode, parameters: CodeCompletionParameters): List<IActionOrProvider>? {
        // TODO
        return listOf()
    }
}

class ChildCellTemplate(
    concept: IConcept,
    val link: IChildLink,
) : CellTemplate(concept), IGrammarSymbol {

    private var separatorCell: CellTemplate? = null

    /**
     * When pressing ENTER a new node of this concept is inserted.
     * If this concept is null, then a special placeholder cell is added to the editor and a node can be created using
     * the code completion menu.
     */
    var newLineConcept: IConcept? = null

    fun setSeparator(newSeparator: CellTemplate) {
        this.separatorCell = newSeparator
        reference?.let { newSeparator.setReference(SeparatorCellTemplateReference(it)) }
    }

    override fun setReference(ref: ICellTemplateReference) {
        super.setReference(ref)
        separatorCell?.setReference(SeparatorCellTemplateReference(ref))
    }

    override fun createCell(context: CellCreationContext, node: INode) = CellData().also { cell ->
        val childNodes = getChildNodes(node)
        val substitutionPlaceholder = context.editorState.substitutionPlaceholderPositions[createCellReference(node)]
        val placeholderIndex = substitutionPlaceholder?.index?.coerceIn(0..childNodes.size) ?: 0
        fun addSubstitutionPlaceholder(index: Int) {
            val isDefaultPlaceholder = childNodes.isEmpty()
            val placeholderText = if (isDefaultPlaceholder) "<no ${link.getSimpleName()}>" else "<choose ${link.getSimpleName()}>"
            val placeholder = TextCellData("", placeholderText)
            placeholder.properties[CellActionProperties.substitute] =
                ReplaceNodeActionProvider(NonExistingChild(node.toNonExisting(), link, index)).after {
                    context.editorState.substitutionPlaceholderPositions.remove(createCellReference(node))
                }
            placeholder.cellReferences.add(PlaceholderCellReference(createCellReference(node)))
            if (isDefaultPlaceholder) {
                placeholder.cellReferences += ChildNodeCellReference(node.reference, link, index)
            }
            placeholder.properties[CommonCellProperties.tabTarget] = true
            cell.addChild(placeholder)
        }
        fun addInsertActionCell(index: Int) {
            if (link.isMultiple) {
                val actionCell = CellData()
                val action = newLineConcept?.let {
                    InstantiateNodeCellAction(NonExistingChild(ExistingNode(node), link, index), it)
                } ?: InsertSubstitutionPlaceholderAction(context.editorState, createCellReference(node), index)
                actionCell.properties[CellActionProperties.insert] = action
                cell.addChild(actionCell)
            }
        }
        if (childNodes.isEmpty()) {
            addSubstitutionPlaceholder(0)
        } else {
            val childCells = childNodes.map { ChildDataReference(it) }
            childCells.forEachIndexed { index, child ->
                val childCellReference = ChildNodeCellReference(node.reference, link, index)
                if (index != 0) {
                    separatorCell?.let {
                        cell.addChild(
                            it.apply(context, node).also {
                                it.cellReferences += SeparatorCellReference(childCellReference)
                            },
                        )
                    }
                }

                if (substitutionPlaceholder != null && placeholderIndex == index) {
                    addSubstitutionPlaceholder(placeholderIndex)
                } else {
                    addInsertActionCell(index)
                }

                // child.parent?.removeChild(child) // child may be cached and is still attached to the old parent
                val wrapper = CellData() // allow setting properties by the parent, because the cell is already frozen
                wrapper.addChild(child)
                wrapper.cellReferences += childCellReference
                cell.addChild(wrapper)
            }
            if (substitutionPlaceholder != null && placeholderIndex == childNodes.size) {
                addSubstitutionPlaceholder(placeholderIndex)
            } else {
                addInsertActionCell(childNodes.size)
            }
        }
    }

    fun getChildNodes(node: INode) = node.getChildren(link).toList()

    override fun getInstantiationActions(location: INonExistingNode, parameters: CodeCompletionParameters): List<IActionOrProvider>? {
        // This cell produces "wrappers".
        // For example, in MPS baseLanguage you can type "int" (which is a Type) where a Statement is expected,
        // and it is automatically wrapped with a LocalVariableDeclarationStatement.
        // If the to-be-wrapped concept is already allowed without the wrapper, then it's not necessary to generate
        // such an action.
        if (link.targetConcept.isSubConceptOf(location.expectedConcept())) {
            return emptyList()
        }

        // prevent endless nesting
        if (location.ancestors(true).takeWhile { it.getNode() == null }.count() > 10) return emptyList()

        val childNode = NonExistingChild(location.replacement(concept), link)
        return listOf(ReplaceNodeActionProvider(childNode))
    }
}
data class PlaceholderCellReference(val childCellRef: TemplateCellReference) : CellReference()

class InsertSubstitutionPlaceholderAction(
    val editorState: EditorState,
    val ref: TemplateCellReference,
    val index: Int,
) : ICellAction {
    override fun isApplicable(): Boolean = true

    override fun execute(editor: EditorComponent) {
        editorState.substitutionPlaceholderPositions[ref] = SubstitutionPlaceholderPosition(index)
        editorState.textReplacements.remove(PlaceholderCellReference(ref))
        editor.selectAfterUpdate {
            editor.resolveCell(PlaceholderCellReference(ref))
                .firstOrNull()?.layoutable()?.let { CaretSelection(it, 0) }
        }
    }
}

class InstantiateNodeCellAction(val location: INonExistingNode, val concept: IConcept) : ICellAction {
    override fun isApplicable(): Boolean = true

    override fun execute(editor: EditorComponent) {
        val newNode = location.getExistingAncestor()!!.getArea().executeWrite {
            location.replaceNode(concept)
        }
        editor.selectAfterUpdate {
            CaretPositionPolicy(newNode).getBestSelection(editor)
        }
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
