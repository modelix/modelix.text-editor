package org.modelix.parser

sealed interface IToken : IParseTreeNode {
    fun textLength(): Int
}

data class ConstantToken(val text: String) : IToken {
    override fun textLength() = text.length
}
data class PropertyToken(val text: String) : IToken {
    override fun textLength() = text.length
}
data class ReferenceToken(val text: String) : IToken {
    override fun textLength() = text.length
}
data object EmptyToken : IToken {
    override fun textLength(): Int = 0
}
data object EndOfInputToken : IToken {
    override fun textLength(): Int = 0
}

interface IParseTreeNode
class ParseTreeNode(val rule: ProductionRule, val children: List<IParseTreeNode>) : IParseTreeNode {
    override fun toString(): String {
        if (children.size > 1) {
            return "${rule.head} {\n${children.joinToString("\n").prependIndent()}\n}"
        } else {
            return "${rule.head} { ${children.joinToString(" ")} }"
        }
    }
}

class CompletedNode(val symbol: INonTerminalSymbol) : IParseTreeNode {
    override fun toString(): String {
        return "completed[$symbol]"
    }
}

class ParseForestNode(val trees: List<IParseTreeNode>) : IParseTreeNode {

    override fun toString(): String {
        return "forest {\n${trees.joinToString("\n").prependIndent()}\n}"
    }

    companion object {
        fun create(trees: List<IParseTreeNode>): IParseTreeNode? {
            return when (trees.size) {
                0 -> null
                1 -> trees.first()
                else -> ParseForestNode(trees)
            }
        }
    }
}
