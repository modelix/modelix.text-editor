package org.modelix.parser

class LookaheadSet private constructor(
    val terminals: Set<ITerminalSymbol>,
    val interning: MutableMap<Set<ITerminalSymbol>, LookaheadSet>
) {
    private val _hashCode = terminals.hashCode()
    override fun hashCode(): Int = _hashCode

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other == null || this::class != other::class) return false

        other as LookaheadSet

        return terminals == other.terminals
    }

    operator fun plus(additional: LookaheadSet): LookaheadSet {
        return plus(additional.terminals)
    }

    operator fun plus(additional: Set<ITerminalSymbol>): LookaheadSet {
        if (this.terminals == additional) return this
        if (additional.isEmpty()) return this
        if (this.terminals.isEmpty()) return interning.getOrPut(additional) { LookaheadSet(additional, interning) }
        val combined = terminals + additional
        return interning.getOrPut(combined) { LookaheadSet(combined, interning) }
    }

    companion object {
        fun empty(objectInterning: MutableMap<Set<ITerminalSymbol>, LookaheadSet>): LookaheadSet {
            val set = emptySet<ITerminalSymbol>()
            return objectInterning.getOrPut(set) { LookaheadSet(set, objectInterning) }
        }
    }
}
