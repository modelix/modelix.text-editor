package org.modelix.parser

class LookaheadSet(val terminals: Set<ITerminalSymbol>) {
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
        val newSet = terminals + additional
        if (newSet.size == terminals.size) return this
        return LookaheadSet(newSet)
    }
}
