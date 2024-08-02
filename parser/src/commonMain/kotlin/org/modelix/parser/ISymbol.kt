package org.modelix.parser

import org.modelix.model.api.IConcept

sealed interface ISymbol {
    fun leafSymbols(): Sequence<ISymbol> = sequenceOf(this)
    fun matches(token: IParseTreeNode): Boolean
    fun isSubtypeOf(superType: ISymbol): Boolean
}
sealed interface ITerminalSymbol : ISymbol
sealed interface INonTerminalSymbol : ISymbol

data class OptionalSymbol(val children: List<ISymbol>) : ISymbol {
    constructor(vararg symbol: ISymbol) : this(symbol.toList())

    override fun leafSymbols(): Sequence<ISymbol> {
        return children.asSequence().flatMap { it.leafSymbols() }
    }

    override fun matches(token: IParseTreeNode): Boolean {
        error("Should have been expanded into multiple rules")
    }

    override fun isSubtypeOf(superType: ISymbol): Boolean {
        error("Should have been expanded into multiple rules")
    }
}
data class ConstantSymbol(val text: String) : ITerminalSymbol {
    override fun toString(): String {
        return "constant[$text]"
    }

    override fun matches(token: IParseTreeNode): Boolean {
        return token is ConstantToken && token.text == text
    }

    override fun isSubtypeOf(superType: ISymbol): Boolean = superType == this
}
data class NodeSymbol(val concept: IConcept) : INonTerminalSymbol {
    override fun toString(): String {
        return concept.getShortName()
    }

    override fun matches(token: IParseTreeNode): Boolean {
        return token is ParseTreeNode && token.rule.head.isSubtypeOf(this)
    }

    override fun isSubtypeOf(superType: ISymbol): Boolean {
        return superType is NodeSymbol && concept.isSubConceptOf(superType.concept)
    }
}
data class ReferenceSymbol(val targetConcept: IConcept) : ITerminalSymbol {
    override fun toString(): String {
        return "reference[->${targetConcept.getShortName()}]"
    }

    override fun matches(token: IParseTreeNode): Boolean {
        TODO("Not yet implemented")
    }

    override fun isSubtypeOf(superType: ISymbol): Boolean = superType == this
}
data class PropertySymbol(val regex: Regex?) : ITerminalSymbol {
    override fun toString(): String {
        return "property[$regex]"
    }

    override fun matches(token: IParseTreeNode): Boolean {
        return token is PropertyToken && regex?.matches(token.text) != false
    }

    override fun isSubtypeOf(superType: ISymbol): Boolean = superType == this
}
data object EndOfInputSymbol : ITerminalSymbol {
    override fun matches(token: IParseTreeNode): Boolean {
        return token == EndOfInputToken
    }

    override fun toString(): String {
        return "$"
    }

    override fun isSubtypeOf(superType: ISymbol): Boolean = superType == this
}

data object EmptySymbol : ITerminalSymbol {
    override fun matches(token: IParseTreeNode): Boolean {
        return token == EmptyToken
    }

    override fun toString(): String {
        return "ε"
    }

    override fun isSubtypeOf(superType: ISymbol): Boolean = superType == this
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

class ProductionRule(val head: ISymbol, val symbols: List<ISymbol>) {
    constructor(head: ISymbol, vararg symbols: ISymbol) : this(head, symbols.toList())
    fun expandOptionals() = symbols.expandOptionals().map { ProductionRule(head, it) }

    override fun toString(): String {
        return "$head -> ${symbols.joinToString(" ")}"
    }

    fun isGoal() = head == GoalSymbol
}

data object GoalSymbol : ISymbol {
    override fun toString(): String = "goal"
    override fun isSubtypeOf(superType: ISymbol) = superType == this
    override fun matches(token: IParseTreeNode): Boolean = false
}

data class ListSymbol(val item: ISymbol, val separator: ITerminalSymbol?) : INonTerminalSymbol {
    override fun toString(): String = "list<$item>"
    override fun isSubtypeOf(superType: ISymbol): Boolean {
        return superType == this
    }
    override fun matches(token: IParseTreeNode): Boolean {
        return token is ParseTreeNode && token.rule.head == this
    }
}
