package org.modelix.editor

import kotlinx.coroutines.flow.Flow
import org.modelix.model.api.IChildLink
import org.modelix.model.api.IConcept
import org.modelix.model.api.IConceptReference
import org.modelix.model.api.INode
import org.modelix.model.api.INodeReference
import org.modelix.model.api.IProperty
import org.modelix.model.api.IReferenceLink
import org.modelix.model.area.IArea
import org.modelix.parser.AmbiguousNode
import org.modelix.parser.EmptyToken
import org.modelix.parser.EndOfInputToken
import org.modelix.parser.ExactConceptSymbol
import org.modelix.parser.GoalSymbol
import org.modelix.parser.INonTerminalSymbol
import org.modelix.parser.IParseTreeNode
import org.modelix.parser.ListSymbol
import org.modelix.parser.OptionalSymbol
import org.modelix.parser.ParseTreeNode
import org.modelix.parser.PropertySymbol
import org.modelix.parser.ReferenceSymbol
import org.modelix.parser.SubConceptsSymbol
import org.modelix.parser.Token
import org.modelix.parser.WhitespaceToken

interface IPendingNode : INode {
    fun commit(location: INonExistingNode): INode
}

abstract class PendingNodeBase : IPendingNode {
    override fun addNewChild(role: String?, index: Int, concept: IConcept?): INode = TODO("Not yet implemented")
    override val allChildren: Iterable<INode> get() = TODO("Not yet implemented")
    override val concept: IConcept? get() = TODO("Not yet implemented")
    override val isValid: Boolean get() = TODO("Not yet implemented")
    override val parent: INode? get() = TODO("Not yet implemented")
    override val reference: INodeReference get() = TODO("Not yet implemented")
    override val roleInParent: String? get() = TODO("Not yet implemented")
    override fun getArea(): IArea = TODO("Not yet implemented")
    override fun getChildren(role: String?): Iterable<INode> = TODO("Not yet implemented")
    override fun getConceptReference(): IConceptReference? = TODO("Not yet implemented")
    override fun getPropertyRoles(): List<String> = TODO("Not yet implemented")
    override fun getPropertyValue(role: String): String? = TODO("Not yet implemented")
    override fun getReferenceRoles(): List<String> = TODO("Not yet implemented")
    override fun getReferenceTarget(role: String): INode? = TODO("Not yet implemented")
    override fun moveChild(role: String?, index: Int, child: INode): Unit = TODO("Not yet implemented")
    override fun removeChild(child: INode): Unit = TODO("Not yet implemented")
    override fun setPropertyValue(role: String, value: String?): Unit = TODO("Not yet implemented")
    override fun setReferenceTarget(role: String, target: INode?): Unit = TODO("Not yet implemented")
    override fun addNewChild(role: IChildLink, index: Int, concept: IConcept?): INode = TODO("Not yet implemented")
    override fun addNewChild(role: IChildLink, index: Int, concept: IConceptReference?): INode = TODO("Not yet implemented")
    override fun addNewChild(role: String?, index: Int, concept: IConceptReference?): INode = TODO("Not yet implemented")
    override fun addNewChildren(link: IChildLink, index: Int, concepts: List<IConceptReference?>): List<INode> = TODO("Not yet implemented")
    override fun addNewChildren(role: String?, index: Int, concepts: List<IConceptReference?>): List<INode> = TODO("Not yet implemented")
    override fun getAllChildrenAsFlow(): Flow<INode> = TODO("Not yet implemented")
    override fun getAllProperties(): List<Pair<IProperty, String>> = TODO("Not yet implemented")
    override fun getAllReferenceTargetRefs(): List<Pair<IReferenceLink, INodeReference>> = TODO("Not yet implemented")
    override fun getAllReferenceTargetRefsAsFlow(): Flow<Pair<IReferenceLink, INodeReference>> = TODO("Not yet implemented")
    override fun getAllReferenceTargets(): List<Pair<IReferenceLink, INode>> = TODO("Not yet implemented")
    override fun getAllReferenceTargetsAsFlow(): Flow<Pair<IReferenceLink, INode>> = TODO("Not yet implemented")
    override fun getChildren(link: IChildLink): Iterable<INode> = TODO("Not yet implemented")
    override fun getChildrenAsFlow(role: IChildLink): Flow<INode> = TODO("Not yet implemented")
    override fun getContainmentLink(): IChildLink? = TODO("Not yet implemented")
    override fun getDescendantsAsFlow(includeSelf: Boolean): Flow<INode> = TODO("Not yet implemented")
    override fun getOriginalReference(): String? = TODO("Not yet implemented")
    override fun getParentAsFlow(): Flow<INode> = TODO("Not yet implemented")
    override fun getPropertyLinks(): List<IProperty> = TODO("Not yet implemented")
    override fun getPropertyValue(property: IProperty): String? = TODO("Not yet implemented")
    override fun getPropertyValueAsFlow(role: IProperty): Flow<String?> = TODO("Not yet implemented")
    override fun getReferenceLinks(): List<IReferenceLink> = TODO("Not yet implemented")
    override fun getReferenceTarget(link: IReferenceLink): INode? = TODO("Not yet implemented")
    override fun getReferenceTargetAsFlow(role: IReferenceLink): Flow<INode> = TODO("Not yet implemented")
    override fun getReferenceTargetRef(role: IReferenceLink): INodeReference? = TODO("Not yet implemented")
    override fun getReferenceTargetRef(role: String): INodeReference? = TODO("Not yet implemented")
    override fun getReferenceTargetRefAsFlow(role: IReferenceLink): Flow<INodeReference> = TODO("Not yet implemented")
    override fun moveChild(role: IChildLink, index: Int, child: INode): Unit = TODO("Not yet implemented")
    override fun removeReference(role: IReferenceLink): Unit = TODO("Not yet implemented")
    override fun setPropertyValue(property: IProperty, value: String?): Unit = TODO("Not yet implemented")
    override fun setReferenceTarget(link: IReferenceLink, target: INode?): Unit = TODO("Not yet implemented")
    override fun setReferenceTarget(role: IReferenceLink, target: INodeReference?): Unit = TODO("Not yet implemented")
    override fun setReferenceTarget(role: String, target: INodeReference?): Unit = TODO("Not yet implemented")
    override fun tryGetConcept(): IConcept? = TODO("Not yet implemented")
    override fun usesRoleIds(): Boolean = TODO("Not yet implemented")
}

class PendingNode(
    override val concept: IConcept,
    val children: MutableMap<IChildLink, MutableList<PendingNode>> = LinkedHashMap(),
    val properties: MutableMap<IProperty, String> = LinkedHashMap(),
    val references: MutableMap<IReferenceLink, INode> = LinkedHashMap()
) : PendingNodeBase(), INodeReference {
    fun applyContent(node: INode) {
        for (property in properties) {
            node.setPropertyValue(property.key, property.value)
        }
        for (entry in references) {
            node.setReferenceTarget(entry.key, entry.value)
        }
        for (entry in children) {
            for (pendingChild in entry.value) {
                val childNode = node.addNewChild(entry.key, -1, pendingChild.concept)
                pendingChild.applyContent(childNode)
            }
        }
    }

    override fun commit(location: INonExistingNode): INode {
        val newNode = location.replaceNode(concept)
        applyContent(newNode)
        return newNode
    }

    override fun getChildren(link: IChildLink): Iterable<INode> {
        return children[link] ?: emptyList()
    }

    override val reference: INodeReference get() = this

    override fun setPropertyValue(property: IProperty, value: String?) {
        if (value == null) {
            properties.remove(property)
        } else {
            properties[property] = value
        }
    }

    override fun getPropertyValue(property: IProperty): String? {
        return properties[property]
    }

    override fun getReferenceTarget(link: IReferenceLink): INode? {
        return references[link]
    }
}


private fun IParseTreeNode.toAst(location: INonExistingNode?, node: INode?) {
    val parseNode = this
    when (parseNode) {
        is AmbiguousNode -> TODO()
        is ParseTreeNode -> {
            val outputType: INonTerminalSymbol = parseNode.rule.head
            when (outputType) {
                is ExactConceptSymbol -> {
                    PendingNode(outputType.concept)
                }
                is SubConceptsSymbol -> TODO()
                is ListSymbol -> TODO()
                is GoalSymbol -> TODO()
                is OptionalSymbol -> TODO()
                else -> TODO()
            }
        }
        is Token -> {
            val symbol = parseNode.symbol
            when (symbol) {
                null -> {}
                is PropertySymbol -> {
                    node!!.setPropertyValue(symbol.role, parseNode.text)
                }
                is ReferenceSymbol -> TODO()
                else -> TODO()
            }
        }
        is WhitespaceToken -> TODO()
        EndOfInputToken -> TODO()
        EmptyToken -> TODO()
    }
}

interface IParseTreeToAstBuilder {
    fun currentNode(): INode
    fun buildNode(parseTreeNode: IParseTreeNode): INode
    fun consumeNextToken(predicate: (IParseTreeNode) -> Boolean): IParseTreeNode?
    fun buildChild(role: IChildLink, childParseTree: ParseTreeNode)
    fun consumeTokens(tokens: List<IParseTreeNode>)
}

class ParseTreeToAstBuilder(val editorEngine: EditorEngine, val node: PendingNode, val unconsumedTokens: MutableList<IParseTreeNode>) : IParseTreeToAstBuilder {
    override fun buildChild(role: IChildLink, childParseTree: ParseTreeNode) {
        node.children.getOrPut(role) { ArrayList() }.add(buildNode(childParseTree) as PendingNode)
    }

    override fun currentNode(): INode {
        return node
    }

    override fun buildNode(parseTreeNode: IParseTreeNode): INode {
        return Companion.buildNode(editorEngine, parseTreeNode)
    }

    override fun consumeNextToken(predicate: (IParseTreeNode) -> Boolean): IParseTreeNode? {
        val index = unconsumedTokens.indexOfFirst(predicate)
        return if (index == -1) null else unconsumedTokens.removeAt(index)
    }

    override fun consumeTokens(tokens: List<IParseTreeNode>) {
        ParseTreeToAstBuilder(editorEngine, node, tokens.toMutableList())
    }

    companion object {
        fun buildNode(editorEngine: EditorEngine, parseTreeNode: IParseTreeNode): INode {
            return when (parseTreeNode) {
                is ParseTreeNode -> {
                    val nonTerminal = parseTreeNode.rule.head
                    when (nonTerminal) {
                        is ExactConceptSymbol -> {
                            val childNode = PendingNode(nonTerminal.concept)
                            val childSymbols = editorEngine.createCellModelExcludingDefault(nonTerminal.concept)!!.getGrammarSymbols()
                            val childBuilder = ParseTreeToAstBuilder(editorEngine, childNode, parseTreeNode.children.toMutableList())
                            for (symbol in childSymbols) {
                                symbol.consumeTokens(childBuilder)
                            }
                            childNode
                        }
                        is SubConceptsSymbol -> {
                            buildNode(editorEngine, parseTreeNode.children.single())
                        }
                        else -> throw NotImplementedError("$nonTerminal")
                    }
                }
                else -> throw NotImplementedError("$parseTreeNode")
            }
        }
    }
}
