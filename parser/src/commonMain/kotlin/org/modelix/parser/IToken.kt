package org.modelix.parser

sealed interface IToken : IParseTreeNode {
    fun textLength(): Int
}

data class WhitespaceToken(val text: String) : IToken {
    override fun textLength() = text.length
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
        return "forest {\n${trees.joinToString("\n---\n").prependIndent()}\n}"
    }

    override fun getNonTerminalSymbol(): INonTerminalSymbol {
        return symbol
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
                    ParseForestNode(symbol, trees)
                }
            }
        }
    }
}
