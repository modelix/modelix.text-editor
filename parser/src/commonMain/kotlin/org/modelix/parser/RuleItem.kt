package org.modelix.parser

data class RuleItem(val positionInRule: PositionInRule, val lookaheadSet: LookaheadSet) {
    constructor(rule: ProductionRule, cursor: Int, lookaheads: LookaheadSet) : this(PositionInRule(cursor, rule), lookaheads)
    val rule: ProductionRule get() = positionInRule.rule
    val cursor: Int get() = positionInRule.position

    fun nextSymbol(): ISymbol? = rule.symbols.getOrNull(cursor)
    fun nextNextSymbol(): ISymbol? = rule.symbols.getOrNull(cursor + 1)
    fun forward() = if (cursor < rule.symbols.size) RuleItem(rule, cursor + 1, lookaheadSet) else null
    fun isComplete() = nextSymbol() == null
    fun size() = rule.symbols.size

    override fun toString(): String {
        return rule.head.toString() +
            " -> " +
            rule.symbols.take(cursor).joinToString(" ") +
            " # " +
            rule.symbols.drop(cursor).joinToString(" ") +
            " /" +
            lookaheadSet.terminals.joinToString("/")
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as RuleItem

        if (positionInRule != other.positionInRule) return false
        if (lookaheadSet != other.lookaheadSet) return false

        return true
    }

    private val _hashCode = arrayOf(positionInRule, lookaheadSet).contentHashCode()
    override fun hashCode(): Int = _hashCode
}

data class PositionInRule(val position: Int, val rule: ProductionRule)
