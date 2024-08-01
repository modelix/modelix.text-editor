package org.modelix.parser

data class RuleItem(val rule: ProductionRule, val cursor: Int, val lookaheads: Set<ITerminalSymbol>) {
    init {
        require(rule.symbols.none { it is OptionalSymbol })
    }
    fun nextSymbol(): ISymbol? = rule.symbols.getOrNull(cursor)
    fun nextNextSymbol(): ISymbol? = rule.symbols.getOrNull(cursor + 1)
    fun forward() = RuleItem(rule, cursor + 1, lookaheads).takeIf { cursor < rule.symbols.size }
    fun isComplete() = nextSymbol() == null
    fun size() = rule.symbols.size
    fun withoutLookaheads() = RuleItem(rule, cursor, emptySet())
    fun withAdditionalLookaheads(additional: Iterable<ITerminalSymbol>) = RuleItem(rule, cursor, lookaheads + additional)
    override fun toString(): String {
        return rule.head.toString() +
            " -> " +
            rule.symbols.take(cursor).joinToString(" ") +
            " # " +
            rule.symbols.drop(cursor).joinToString(" ") +
            " /" +
            lookaheads.joinToString("/")
    }
}
