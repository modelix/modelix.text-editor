package org.modelix.parser

data class RuleItem(val positionInRule: PositionInRule, val lookaheads: Set<ITerminalSymbol>) {
    constructor(rule: ProductionRule, cursor: Int, lookaheads: Set<ITerminalSymbol>) : this(PositionInRule(cursor, rule), lookaheads)
    val rule: ProductionRule get() = positionInRule.rule
    val cursor: Int get() = positionInRule.position

    fun nextSymbol(): ISymbol? = rule.symbols.getOrNull(cursor)
    fun nextNextSymbol(): ISymbol? = rule.symbols.getOrNull(cursor + 1)
    fun forward() = if (cursor < rule.symbols.size) RuleItem(rule, cursor + 1, lookaheads) else null
    fun isComplete() = nextSymbol() == null
    fun size() = rule.symbols.size
    fun withAdditionalLookaheads(additional: Collection<ITerminalSymbol>): RuleItem {
        if (additional.isEmpty()) return this
        return RuleItem(rule, cursor, lookaheads + additional)
    }

    fun isSameIgnoringLookaheads(other: RuleItem) = other.positionInRule == positionInRule

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

        if (positionInRule != other.positionInRule) return false
        if (lookaheads != other.lookaheads) return false

        return true
    }

    private val cachedHashCode = arrayOf(positionInRule, lookaheads).contentHashCode()
    override fun hashCode(): Int = cachedHashCode
}

data class PositionInRule(val position: Int, val rule: ProductionRule)
