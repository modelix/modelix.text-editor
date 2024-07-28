package org.modelix.editor.celltemplate

import org.modelix.editor.CaretPositionPolicy
import org.modelix.editor.CellActionProperties
import org.modelix.editor.CellCreationContext
import org.modelix.editor.CellData
import org.modelix.editor.CellReference
import org.modelix.editor.ChildDataReference
import org.modelix.editor.ChildNodeCellReference
import org.modelix.editor.CodeCompletionParameters
import org.modelix.editor.CommonCellProperties
import org.modelix.editor.EditorComponent
import org.modelix.editor.ExistingNode
import org.modelix.editor.IActionOrProvider
import org.modelix.editor.ICaretPositionPolicy
import org.modelix.editor.ICellAction
import org.modelix.editor.ICellTemplateReference
import org.modelix.editor.ICodeCompletionAction
import org.modelix.editor.INonExistingNode
import org.modelix.editor.NonExistingChild
import org.modelix.editor.ReplaceNodeActionProvider
import org.modelix.editor.SavedCaretPosition
import org.modelix.editor.SeparatorCellReference
import org.modelix.editor.SeparatorCellTemplateReference
import org.modelix.editor.SubstitutionPlaceholderPosition
import org.modelix.editor.TemplateCellReference
import org.modelix.editor.TextCellData
import org.modelix.editor.after
import org.modelix.editor.ancestors
import org.modelix.editor.asProvider
import org.modelix.editor.replacement
import org.modelix.editor.toNonExisting
import org.modelix.editor.token.IParseTreeNode
import org.modelix.editor.token.ParseResult
import org.modelix.editor.token.UnclassifiedParseTreeNode
import org.modelix.editor.token.diagonalFlatMap
import org.modelix.editor.token.isBlank
import org.modelix.editor.token.orEmpty
import org.modelix.model.api.IChildLink
import org.modelix.model.api.IConcept
import org.modelix.model.api.INode
import org.modelix.model.api.remove

class ChildCellTemplate(
    concept: IConcept,
    val link: IChildLink,
) : CellTemplate(concept), IGrammarConditionSymbol {

    private var separatorCell: CellTemplate? = null

    /**
     * When pressing ENTER a new node of this concept is inserted.
     * If this concept is null, then a special placeholder cell is added to the editor and a node can be created using
     * the code completion menu.
     */
    var newLineConcept: IConcept? = null

    override fun toString(): String {
        return "child[${link.getSimpleName()}]"
    }

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
            placeholder.properties[CellActionProperties.delete] = object : ICellAction {
                override fun execute(editor: EditorComponent): ICaretPositionPolicy? {
                    return SavedCaretPosition.saveAndRun(editor) {
                        context.editorState.substitutionPlaceholderPositions.remove(createCellReference(node))
                    }
                }

                override fun isApplicable(): Boolean = true
            }
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
        fun addSeparator(before: CellReference) {
            separatorCell?.let {
                cell.addChild(
                    it.apply(context, node).also {
                        it.cellReferences += SeparatorCellReference(before)
                    },
                )
            }
        }
        if (childNodes.isEmpty()) {
            addSubstitutionPlaceholder(0)
        } else {
            val separatorText = separatorCell?.getGrammarSymbols()?.filterIsInstance<ConstantCellTemplate>()
                ?.firstOrNull()?.text
            val childCells = childNodes.map { ChildDataReference(it) }
            childCells.forEachIndexed { index, child ->
                val childCellReference = ChildNodeCellReference(node.reference, link, index)
                if (index != 0) {
                    addSeparator(childCellReference)
                }

                if (substitutionPlaceholder != null && placeholderIndex == index) {
                    addSubstitutionPlaceholder(placeholderIndex)
                    addSeparator(PlaceholderCellReference(createCellReference(node)))
                } else {
                    addInsertActionCell(index)
                }

                // child.parent?.removeChild(child) // child may be cached and is still attached to the old parent
                val wrapper = CellData() // allow setting properties by the parent, because the cell is already frozen
                wrapper.addChild(child)
                wrapper.cellReferences += childCellReference

                if (separatorText != null) {
                    wrapper.properties[CellActionProperties.transformBefore] = InsertSubstitutionPlaceholderCompletionAction(
                        index,
                        separatorText,
                        createCellReference(node),
                    ).asProvider()
                    wrapper.properties[CellActionProperties.transformAfter] = InsertSubstitutionPlaceholderCompletionAction(
                        index + 1,
                        separatorText,
                        createCellReference(node),
                    ).asProvider()
                }

                cell.addChild(wrapper)
            }
            if (substitutionPlaceholder != null && placeholderIndex == childNodes.size) {
                if (childCells.isNotEmpty()) {
                    addSeparator(PlaceholderCellReference(createCellReference(node)))
                }
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

    override fun getSymbolConditionState(node: INode): Boolean {
        return node.getChildren(link).iterator().hasNext()
    }

    override fun setSymbolConditionFalse(node: INode) {
        node.getChildren(link).toList().forEach { it.remove() }
    }

    override fun getSymbolTransformationAction(node: INode, optionalCell: TemplateCellReference): IActionOrProvider? {
        return ReplaceNodeActionProvider(NonExistingChild(node.toNonExisting(), link))
    }

    override fun parse(input: IParseTreeNode, context: ParseContext): Sequence<ParseResult> {
        return if (link.isMultiple) {
            val separatorSymbols = separatorCell?.getGrammarSymbols()?.toList() ?: emptyList()
            if (separatorSymbols.isNotEmpty()) {
                parseSublist(input, separatorSymbols, context)
            } else {
                TODO("Lists without separator")
            }
        } else {
            parseSingleChild(input, context)
        }
    }

    private fun parseSublist(input: IParseTreeNode, separatorSymbols: List<IGrammarSymbol>, context: ParseContext): Sequence<ParseResult> {
        return parseSymbolList(separatorSymbols, input, context).diagonalFlatMap { separatorMatch ->
            parseSublist(separatorMatch.before.orEmpty(), separatorSymbols, context)
                .mapNotNull { if (it.after.isBlank()) it + separatorMatch.dropBefore() else null }
                .diagonalFlatMap { leftAndSeparator ->
                    parseSublist(leftAndSeparator.after.orEmpty(), separatorSymbols, context).mapNotNull { right ->
                        if (right.before.isBlank()) leftAndSeparator.dropAfter() + right else null
                    }
                }
                .recordParseResults(context, input)
        } + parseSingleChild(input, context)
    }

    private fun parseSingleChild(input: IParseTreeNode, context: ParseContext): Sequence<ParseResult> {
        return context.getEngine().parse(input, link.targetConcept, context)
    }

    inner class InsertSubstitutionPlaceholderCompletionAction(
        val index: Int,
        val separatorText: String,
        val ref: TemplateCellReference,
    ) : ICodeCompletionAction {
        override fun getDescription(): String {
            return "Add new node to ${link.getSimpleName()}"
        }

        override fun getMatchingText(): String {
            return separatorText
        }

        override fun execute(editor: EditorComponent): CaretPositionPolicy? {
            editor.state.substitutionPlaceholderPositions[ref] = SubstitutionPlaceholderPosition(index)
            editor.state.textReplacements.remove(PlaceholderCellReference(ref))
            return CaretPositionPolicy(PlaceholderCellReference(ref))
        }
    }
}
