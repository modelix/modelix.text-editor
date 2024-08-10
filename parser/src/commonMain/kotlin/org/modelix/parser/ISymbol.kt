package org.modelix.parser

import org.modelix.model.api.IConcept

sealed interface ISymbol {
    fun leafSymbols(): Sequence<ISymbol> = sequenceOf(this)
    fun matches(token: IParseTreeNode): Boolean
}
sealed interface ITerminalSymbol : ISymbol
sealed interface INonTerminalSymbol : ISymbol

data class OptionalSymbol(val children: List<ISymbol>) : INonTerminalSymbol {
    constructor(vararg symbol: ISymbol) : this(symbol.toList())

    override fun leafSymbols(): Sequence<ISymbol> {
        return children.asSequence().flatMap { it.leafSymbols() }
    }

    override fun matches(token: IParseTreeNode): Boolean {
        return token is ParseTreeNode && token.rule.head == this
    }

    override fun toString(): String {
        return "optional(${children.joinToString(" ")})"
    }
}
data class ConstantSymbol(val text: String) : ITerminalSymbol {
    override fun toString(): String {
        return "constant[$text]"
    }

    override fun matches(token: IParseTreeNode): Boolean {
        return token is ConstantToken && token.text == text
    }

    companion object {
        val CARET = ConstantSymbol("\u16B9") // ᚹ
    }
}
data class ExactConceptSymbol(val concept: IConcept) : INonTerminalSymbol {
    override fun toString(): String {
        return concept.getShortName()
    }

    override fun matches(token: IParseTreeNode): Boolean {
        return token is INonTerminalToken && token.getNonTerminalSymbol() == this
    }
}
data class SubConceptsSymbol(val concept: IConcept) : INonTerminalSymbol {
    override fun toString(): String {
        return concept.getShortName()+"+"
    }

    override fun matches(token: IParseTreeNode): Boolean {
        return token is INonTerminalToken && token.getNonTerminalSymbol() == this
    }
}
data class ReferenceSymbol(val targetConcept: IConcept) : ITerminalSymbol {
    override fun toString(): String {
        return "reference[->${targetConcept.getShortName()}]"
    }

    override fun matches(token: IParseTreeNode): Boolean {
        return token is ReferenceToken
    }
}
data class PropertySymbol(val pattern: String?) : ITerminalSymbol {
    constructor(regex: Regex?) : this(regex?.pattern)

    val regex: Regex? = pattern?.let { Regex(it) }

    override fun toString(): String {
        return "property/$regex/"
    }

    override fun matches(token: IParseTreeNode): Boolean {
        return token is PropertyToken && regex?.matches(token.text) != false
    }
}
data object EndOfInputSymbol : ITerminalSymbol {
    override fun matches(token: IParseTreeNode): Boolean {
        return token == EndOfInputToken
    }

    override fun toString(): String {
        return "$"
    }
}

data object EmptySymbol : ITerminalSymbol {
    override fun matches(token: IParseTreeNode): Boolean {
        return token == EmptyToken
    }

    override fun toString(): String {
        return "ε"
    }
}

fun List<ISymbol>.expandOptionals(): List<List<ISymbol>> {
    val symbols = this
    val index = symbols.indexOfLast { it is OptionalSymbol }
    if (index == -1) return listOf(this)

    val after = symbols.drop(index + 1)
    return symbols.take(index).expandOptionals().flatMap { before ->
        (symbols[index] as OptionalSymbol).children
            .expandOptionals().map { before + it + after } + listOf(before + after)
    }
}

class ProductionRule(val head: INonTerminalSymbol, val symbols: List<ISymbol>) {
    constructor(head: INonTerminalSymbol, vararg symbols: ISymbol) : this(head, symbols.toList())

    init {
        require(!symbols.contains(EmptySymbol)) {
            "Symbol list should be empty instead"
        }
    }

    fun expandOptionals() = symbols.expandOptionals().map { ProductionRule(head, it) }

    override fun toString(): String {
        return "$head -> ${symbols.ifEmpty { listOf(EmptySymbol) }.joinToString(" ")}"
    }

    fun isGoal() = head == GoalSymbol
    fun isEmpty() = symbols.isEmpty()
}

data object GoalSymbol : INonTerminalSymbol {
    override fun toString(): String = "goal"
    override fun matches(token: IParseTreeNode): Boolean = false
}

data class ListSymbol(val item: ISymbol, val separator: ITerminalSymbol?) : INonTerminalSymbol {
    override fun toString(): String = "list<$item>"
    override fun matches(token: IParseTreeNode): Boolean {
        return token is INonTerminalToken && token.getNonTerminalSymbol() == this
    }
}
