package org.modelix.parser

class Parser {

}


interface IOutputType {
    fun getSuperTypes(): List<IOutputType>
    fun isSameType(other: IOutputType): Boolean
}
interface ISymbol
interface IRule {
    fun getOutputType(): IOutputType
    fun getSymbols(): List<ISymbol>
    fun isLeftAssociative(): Boolean
    /**
     * A higher value means a stronger binding of an operator.
     * Smaller numbers will be closer to the root, bigger number closer to the leafs.
     */
    fun getPriority(): Int
}

interface IToken


class Grammar(val rules: Map<String, List<ProductionRule>>)
class ProductionRule(val name: String, val symbols: List<Symbol>)

sealed class Symbol
data class ConstantSymbol(val constant: String)
