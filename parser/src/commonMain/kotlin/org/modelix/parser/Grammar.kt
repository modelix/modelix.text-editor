package org.modelix.parser

import org.modelix.model.api.IChildLink
import org.modelix.model.api.IConcept
import org.modelix.model.api.IProperty
import org.modelix.model.api.IReferenceLink


class Grammar(val rules: List<ProductionRule>)

sealed interface ISymbol {
    fun getAllSymbols(): Sequence<ISymbol> = sequenceOf(this)
}
sealed interface ITerminal : ISymbol
sealed interface INonTerminal : ISymbol

enum class Associativity {
    NONE,
    LEFT,
    RIGHT
}

class ProductionRule(
    val outputConcept: IConcept,
    val rhs: ISymbol,
    val associativity: Associativity,
    /**
     * A higher value means a stronger binding of an operator.
     * Smaller numbers will be closer to the root, bigger number closer to the leafs.
     */
    val priority: Int
) {
    override fun toString(): String {
        return outputConcept.getShortName() + " = " + rhs
    }
}

data class ChildLinkSymbol(val link: IChildLink) : INonTerminal
data class ConstantSymbol(val constant: String) : ITerminal
data class PropertySymbol(val property: IProperty, val pattern: Regex) : ITerminal
data class ReferenceLinkSymbol(val link: IReferenceLink) : ITerminal
data class OptionalSymbol(val symbol: ISymbol) : ISymbol
data class SymbolList(val symbols: List<ISymbol>): ISymbol {
    override fun getAllSymbols(): Sequence<ISymbol> = sequenceOf(this) + symbols.asSequence().flatMap { it.getAllSymbols() }
}

