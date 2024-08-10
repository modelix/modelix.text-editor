package org.modelix.parser

sealed interface IToken : IParseTreeNode {
    fun textLength(): Int
}

data class WhitespaceToken(val text: String, val startPos: Int) : IToken {
    override fun textLength() = text.length
}
data class ConstantToken(val text: String, val startPos: Int) : IToken {
    override fun textLength() = text.length
}
data class PropertyToken(val text: String, val startPos: Int) : IToken {
    override fun textLength() = text.length
}
data class ReferenceToken(val text: String, val startPos: Int) : IToken {
    override fun textLength() = text.length
}
data object EmptyToken : IToken {
    override fun textLength(): Int = 0
}
data object EndOfInputToken : IToken {
    override fun textLength(): Int = 0
}

interface IParseTreeNode
interface INonTerminalToken : IParseTreeNode {
    fun getNonTerminalSymbol(): INonTerminalSymbol
}

class ParseTreeNode(val rule: ProductionRule, val children: List<IParseTreeNode>) : IParseTreeNode, INonTerminalToken {
    override fun toString(): String {
        if (children.size > 1) {
            return "${rule.head} {\n${children.joinToString("\n").prependIndent()}\n}"
        } else {
            return "${rule.head} { ${children.joinToString(" ")} }"
        }
    }

    override fun getNonTerminalSymbol(): INonTerminalSymbol {
        return rule.head
    }
}

class CompletedNode(val symbol: INonTerminalSymbol) : IParseTreeNode, INonTerminalToken {
    override fun toString(): String {
        return "completed[$symbol]"
    }

    override fun getNonTerminalSymbol(): INonTerminalSymbol {
        return symbol
    }
}

class ParseForestNode(val symbol: INonTerminalSymbol, val trees: List<INonTerminalToken>) : IParseTreeNode, INonTerminalToken {
    override fun toString(): String {
        return "forest:$symbol {\n${trees.joinToString("\n---\n").prependIndent()}\n}"
    }

    override fun getNonTerminalSymbol(): INonTerminalSymbol {
        return symbol
    }

    fun flatten(): ParseForestNode {
        val newChildren = trees.flatMap {
            if (it is ParseForestNode && it.symbol == symbol) it.trees else listOf(it)
        }
        return if (newChildren.size == trees.size) this else ParseForestNode(symbol, newChildren)
    }

    companion object {
        fun create(trees: List<INonTerminalToken>): INonTerminalToken? {
            return when (trees.size) {
                0 -> null
                1 -> trees.first()
                else -> {
                    val symbol = trees.first().getNonTerminalSymbol()
                    check(trees.asSequence().drop(1).all { it.getNonTerminalSymbol() == symbol }) {
                        "Cannot merge trees for different non-terminal symbols: $trees"
                    }
                    ParseForestNode(symbol, trees).flatten()
                }
            }
        }
    }
}

class SPPF(val roots: List<IParseTreeNode>) {

    private var sequence = 0
    private val nonSharedNodes = LinkedHashSet<IParseTreeNode>()
    private val sharedNodes = LinkedHashSet<IParseTreeNode>()
    private val nodeIds = LinkedHashMap<IParseTreeNode, Int>()

    init {
        roots.forEach { load(it) }
    }

    private fun id(node: IParseTreeNode) = nodeIds.getOrPut(node) { sequence++ }

    private fun load(node: IParseTreeNode) {
        if (sharedNodes.contains(node)) return
        if (node is INonTerminalToken && nonSharedNodes.contains(node)) {
            nonSharedNodes.remove(node)
            sharedNodes.add(node)
            return
        } else {
            nonSharedNodes.add(node)
        }
        when (node) {
            is ParseForestNode -> node.trees.forEach { load(it) }
            is ParseTreeNode -> node.children.forEach { load(it) }
            else -> {}
        }
    }

    override fun toString(): String {
        return (sharedNodes + nonSharedNodes).joinToString("\n") {
            toString(it)
        }
    }

    private fun toString(node: IParseTreeNode): String {
        return when (node) {
            is ParseForestNode -> {
                "n${id(node)} [label=\"${node.symbol}\", shape=diamond]\n" + node.trees.joinToString("\n") { "n${id(node)} -> n${id(it)}" }
            }
            is ParseTreeNode -> {
                "n${id(node)} [label=\"${node.rule.head}\", shape=box]\n" + node.children.joinToString("\n") { "n${id(node)} -> n${id(it)}" }
            }
            else -> "n${id(node)} [label=\"${node}\", shape=oval]"
        }
    }
}
