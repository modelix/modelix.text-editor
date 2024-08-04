package org.modelix.parser

class LRTable() {
    val states: MutableList<LRState> = ArrayList()

    fun getDistanceToAccept(action: LRAction, pathLength: Int = 0): Int {
        return when (action) {
            AcceptAction -> 0
            is GotoAction -> 1 + getDistanceToAccept(states[action.nextState], pathLength + 1)
            is ReduceAction -> -action.rule.symbols.size
            is ShiftAction -> 1 + getDistanceToAccept(states[action.nextState], pathLength + 1)
        }
    }

    fun getDistanceToAccept(state: LRState, pathLength: Int): Int {
        if (state.distanceToAccept == -1) {
            if (pathLength > 100) return Int.MAX_VALUE / 2
            state.distanceToAccept = Int.MAX_VALUE / 2 // also avoid endless recursion

            state.distanceToAccept = state.getAllActions().minOf { getDistanceToAccept(it, pathLength + 1) }
        }
        return state.distanceToAccept
    }

    fun load(closureTable: LRClosureTable) {
        for (kernel in closureTable.kernels) {
            val state = LRState()
            states.add(state)

            for (key in kernel.keys) {
                val nextStateIndex = kernel.gotos[key]!!
                val action = if (key is INonTerminalSymbol) GotoAction(nextStateIndex) else ShiftAction(nextStateIndex)
                state.addAction(key, action)
            }

            for (item in kernel.closure.values) {
                if (item.isComplete()) {
                    for (lookahead in item.lookaheadSet.terminals) {
                        state.addAction(lookahead, if (item.rule.isGoal()) AcceptAction else ReduceAction(item.rule))
                    }
                }
            }
        }
    }
}

class LRState {
    var distanceToAccept: Int = -1
    private var actions: Map<ISymbol, Any>? = null

    fun addAction(symbol: ISymbol, action: LRAction) {
        val oldMap = actions
        if (oldMap == null) {
            actions = SingleEntryMap(symbol, action)
        } else {
            val newMap: MutableMap<ISymbol, Any>
            if (oldMap is SingleEntryMap) {
                newMap = HashMap(6)
                newMap[oldMap.key] = oldMap.value
            } else {
                newMap = oldMap as MutableMap<ISymbol, Any>
            }
            newMap[symbol] = (getActions(symbol) as Array<LRAction>) + action
            actions = newMap
        }
    }

    fun getActions(symbol: ISymbol): Array<out LRAction> {
        return valueToArray(actions?.get(symbol))
    }

    private fun valueToArray(value: Any?): Array<LRAction> {
        return when (value) {
            null -> emptyArray()
            is LRAction -> arrayOf(value)
            else -> (value as Array<LRAction>)
        }
    }

    fun getAllActions(): Sequence<LRAction> {
        return actions?.values?.asSequence()?.flatMap { valueToArray(it).asSequence() } ?: emptySequence()
    }

    fun getSymbols(): Sequence<ISymbol> = actions?.keys?.asSequence() ?: emptySequence()

    fun getSymbolsAndActions(): Sequence<Pair<ISymbol, Array<out LRAction>>> {
        return actions?.asSequence()?.map { it.key to valueToArray(it.value) } ?: emptySequence()
    }
}

sealed class LRAction
data class ShiftAction(val nextState: Int) : LRAction()
data class ReduceAction(val rule: ProductionRule) : LRAction()
data class GotoAction(val nextState: Int) : LRAction()
data object AcceptAction : LRAction()

private class SingleEntryMap<K, V>(val key: K, val value: V): Map<K, V> {
    override val entries: MutableSet<MutableMap.MutableEntry<K, V>>
        get() = mutableMapOf(key to value).entries
    override val keys: MutableSet<K>
        get() = mutableSetOf(key)
    override val size: Int
        get() = 1
    override val values: MutableCollection<V>
        get() = mutableMapOf(key to value).values

    override fun containsKey(key: K): Boolean = this.key == key

    override fun containsValue(value: V): Boolean = throw UnsupportedOperationException()

    override fun get(key: K): V? = if (key == this.key) value else null

    override fun isEmpty(): Boolean = false
}
