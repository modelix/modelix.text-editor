package org.modelix.editor.celltemplate

import org.modelix.editor.CaretPositionPolicy
import org.modelix.editor.CellActionProperties
import org.modelix.editor.CellCreationContext
import org.modelix.editor.CellData
import org.modelix.editor.CodeCompletionParameters
import org.modelix.editor.CommonCellProperties
import org.modelix.editor.EditorComponent
import org.modelix.editor.ExistingNode
import org.modelix.editor.IActionOrProvider
import org.modelix.editor.ICodeCompletionAction
import org.modelix.editor.ICodeCompletionActionProvider
import org.modelix.editor.INonExistingNode
import org.modelix.editor.NonExistingNode
import org.modelix.editor.ReferenceTargetActionProvider
import org.modelix.editor.ReferencedNodeCellReference
import org.modelix.editor.TemplateCellReference
import org.modelix.editor.TextCellData
import org.modelix.editor.after
import org.modelix.editor.replacement
import org.modelix.editor.toNonExisting
import org.modelix.editor.token.IParseTreeNode
import org.modelix.editor.token.LeafToken
import org.modelix.editor.token.ParseResult
import org.modelix.editor.token.ReferenceToken
import org.modelix.editor.token.descendentsAndSelf
import org.modelix.editor.token.diagonalFlatMap
import org.modelix.model.api.IConcept
import org.modelix.model.api.INode
import org.modelix.model.api.IReferenceLink
import org.modelix.scopes.ScopeAspect

class ReferenceCellTemplate(
    concept: IConcept,
    val link: IReferenceLink,
    val presentation: INode.() -> String?,
) : CellTemplate(concept), IGrammarSymbol {
    override fun createCell(context: CellCreationContext, node: INode): CellData {
        val text = getText(node)
        val data = TextCellData(text, "<no ${link.getSimpleName()}>")
        data.cellReferences += ReferencedNodeCellReference(node.reference, link)
        data.properties[CommonCellProperties.tabTarget] = true
        data.properties[CellActionProperties.substitute] =
            ReferenceTargetActionProvider(ExistingNode(node), link, { it.getNode()?.let(presentation) ?: "" }).after {
                context.editorState.substitutionPlaceholderPositions.remove(createCellReference(node))
            }
        data.properties[CommonCellProperties.token] = ReferenceToken(text, link, node)
        return data
    }
    private fun getText(node: INode): String = getTargetNode(node)?.let(presentation) ?: ""
    private fun getTargetNode(sourceNode: INode): INode? {
        return sourceNode.getReferenceTarget(link)
    }
    override fun getInstantiationActions(location: INonExistingNode, parameters: CodeCompletionParameters): List<IActionOrProvider> {
        return listOf(WrapReferenceTargetProvider(location.replacement(concept)))
    }

    override fun getSymbolTransformationAction(node: INode, optionalCell: TemplateCellReference): IActionOrProvider? {
        return WrapReferenceTargetProvider(node.toNonExisting())
    }

    override fun parse(input: IParseTreeNode, context: ParseContext): Sequence<ParseResult> {
        // TODO extract source node from parse tree if available
        val scope = ScopeAspect.getScope(NonExistingNode(concept), link)
        val targets = scope.getVisibleElements(NonExistingNode(concept), link)
        val inputText = input.descendentsAndSelf().map { it.node }.filterIsInstance<LeafToken>().joinToString("") { it.text }
        return targets.mapNotNull { it.getNode()?.let { it1 -> presentation(it1) } }.sortedBy {
            Levenshtein.distance(it, inputText, 3, 1, 3, 2)
        }.asSequence().diagonalFlatMap {
            findStringInParseTree(input, it)
        }
    }

    inner class WrapReferenceTargetProvider(val sourceNode: INonExistingNode) : ICodeCompletionActionProvider {
        override fun getApplicableActions(parameters: CodeCompletionParameters): List<IActionOrProvider> {
            val scope = ScopeAspect.getScope(sourceNode, link)
            val targets = scope.getVisibleElements(sourceNode, link)
            return targets.map { target ->
                val text = when (target) {
                    is ExistingNode -> presentation(target.getNode()) ?: ""
                    else -> "<create new target node>"
                }
                WrapReferenceTarget(sourceNode, target, text)
            }
        }
    }

    inner class WrapReferenceTarget(val location: INonExistingNode, val target: INonExistingNode, val presentation: String) :
        ICodeCompletionAction {
        override fun getMatchingText(): String {
            return presentation
        }

        override fun getDescription(): String {
            return concept.getShortName()
        }

        override fun execute(editor: EditorComponent): CaretPositionPolicy? {
            val sourceNode = location.getOrCreateNode(concept)
            sourceNode.setReferenceTarget(link, target.getOrCreateNode())
            return CaretPositionPolicy(createCellReference(sourceNode))
        }
    }
}
