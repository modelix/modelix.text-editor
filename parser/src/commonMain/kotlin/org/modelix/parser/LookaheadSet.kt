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
}
