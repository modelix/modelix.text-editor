package org.modelix.editor.celltemplate

import org.modelix.editor.CaretPositionPolicy
import org.modelix.editor.CellCreationContext
import org.modelix.editor.ChildNodeCellReference
import org.modelix.editor.CodeCompletionParameters
import org.modelix.editor.CommonCellProperties
import org.modelix.editor.EditorComponent
import org.modelix.editor.IActionOrProvider
import org.modelix.editor.ICodeCompletionAction
import org.modelix.editor.INonExistingNode
import org.modelix.editor.TemplateCellReference
import org.modelix.editor.TextCellData
import org.modelix.editor.ancestors
import org.modelix.editor.commonAncestor
import org.modelix.editor.toNonExisting
import org.modelix.editor.token.ConstantToken
import org.modelix.editor.token.IParseTreeNode
import org.modelix.editor.token.LeafToken
import org.modelix.editor.token.ParseResult
import org.modelix.editor.token.UnclassifiedParseTreeNode
import org.modelix.editor.token.UnclassifiedToken
import org.modelix.editor.token.descendentsAndSelf
import org.modelix.editor.withCaretPolicy
import org.modelix.editor.withMatchingText
import org.modelix.model.api.IChildLink
import org.modelix.model.api.IConcept
import org.modelix.model.api.INode

class ConstantCellTemplate(concept: IConcept, val text: String) :
    CellTemplate(concept), IGrammarSymbol {
    override fun createCell(context: CellCreationContext, node: INode): TextCellData {
        return TextCellData(text, "").also {
            it.properties[CommonCellProperties.token] = ConstantToken(text)
        }
    }

    override fun toString(): String {
        return "constant[$text]"
    }

    override fun getInstantiationActions(location: INonExistingNode, parameters: CodeCompletionParameters): List<IActionOrProvider>? {
        return listOf(InstantiateNodeCompletionAction(text, concept, location))
    }

    override fun createWrapperAction(nodeToWrap: INode, wrappingLink: IChildLink): List<ICodeCompletionAction> {
        return listOf(SideTransformWrapper(nodeToWrap.toNonExisting(), wrappingLink))
    }

    override fun getSymbolTransformationAction(node: INode, optionalCell: TemplateCellReference): IActionOrProvider? {
        return ForceShowOptionalCellAction(optionalCell)
            .withCaretPolicy {
                when (it) {
                    is CaretPositionPolicy -> it.avoid(createCellReference(node))
                    else -> it
                }
            }
            .withMatchingText(text)
    }

    override fun parse(input: IParseTreeNode, context: ParseContext): Sequence<ParseResult> {
        return findStringInParseTree(input, text)
    }

    override fun getGrammarSymbols(): Sequence<IGrammarSymbol> {
        return if (text.isEmpty()) emptySequence() else sequenceOf(this)
    }

    inner class SideTransformWrapper(val nodeToWrap: INonExistingNode, val wrappingLink: IChildLink) :
        ICodeCompletionAction {
        override fun getMatchingText(): String = text
        override fun getDescription(): String = concept.getShortName()
        override fun execute(editor: EditorComponent): CaretPositionPolicy? {
            val wrapper = nodeToWrap.getParent()!!.getOrCreateNode(null).addNewChild(nodeToWrap.getContainmentLink()!!, nodeToWrap.index(), concept)
            wrapper.moveChild(wrappingLink, 0, nodeToWrap.getOrCreateNode(null))
            return CaretPositionPolicy(wrapper)
                .avoid(ChildNodeCellReference(wrapper.reference, wrappingLink))
                .avoid(createCellReference(wrapper))
        }

        override fun shadows(shadowed: ICodeCompletionAction): Boolean {
            if (shadowed !is SideTransformWrapper) return false
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

fun findStringInParseTree(input: IParseTreeNode, text: String): Sequence<ParseResult> = sequence {
    require(text.isNotEmpty())

    // exact match of a token
    for (descendantPath in input.descendentsAndSelf()) {
        val descendantNode = descendantPath.node
        if (descendantNode !is LeafToken) continue
        if (descendantNode.text == text) {
            yield(descendantPath.split3())
        }
    }

    // split tokens that contain the constant
    for (descendantPath in input.descendentsAndSelf()) {
        val descendantNode = descendantPath.node
        if (descendantNode !is LeafToken) continue

        var index = descendantNode.text.indexOf(text)
        while (index != -1) {
            val prefix = descendantNode.text.substring(0, index)
            val suffix = descendantNode.text.substring(index + text.length)
            val split = descendantPath.split3()
            yield(
                ParseResult(
                    UnclassifiedParseTreeNode.createTree(
                        split.before,
                        prefix.takeIf { it.isNotEmpty() }?.let { UnclassifiedToken(it) }
                    ),
                    ConstantToken(text),
                    UnclassifiedParseTreeNode.createTree(
                        suffix.takeIf { it.isNotEmpty() }?.let { UnclassifiedToken(it) },
                        split.after
                    )
                )
            )
            index = descendantNode.text.indexOf(text, index + 1)
        }
    }
}
