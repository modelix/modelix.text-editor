package org.modelix.parser

data class RuleItem(val rule: ProductionRule, val cursor: Int, val lookaheads: Set<ITerminalSymbol>) {
    fun nextSymbol(): ISymbol? = rule.symbols.getOrNull(cursor)
    fun nextNextSymbol(): ISymbol? = rule.symbols.getOrNull(cursor + 1)
    fun forward() = RuleItem(rule, cursor + 1, lookaheads).takeIf { cursor < rule.symbols.size }
    fun isComplete() = nextSymbol() == null
    fun size() = rule.symbols.size
    fun withAdditionalLookaheads(additional: Iterable<ITerminalSymbol>) = RuleItem(rule, cursor, lookaheads + additional)

    fun isSameIgnoringLookaheads(other: RuleItem) = other.rule == rule && other.cursor == cursor

    override fun toString(): String {
        return rule.head.toString() +
            " -> " +
            rule.symbols.take(cursor).joinToString(" ") +
            " # " +
            rule.symbols.drop(cursor).joinToString(" ") +
            " /" +
            lookaheads.joinToString("/")
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as RuleItem

        if (rule != other.rule) return false
        if (cursor != other.cursor) return false
        if (lookaheads != other.lookaheads) return false

        return true
    }

    private val cachedHashCode = arrayOf(rule, cursor, lookaheads).contentHashCode()
    override fun hashCode(): Int = cachedHashCode
}
