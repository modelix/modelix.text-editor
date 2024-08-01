package org.modelix.parser

class LRTable() {
    val states: MutableList<LRState> = ArrayList()

    fun load(closureTable: LRClosureTable) {
        for (kernel in closureTable.kernels) {
            val state = LRState()
            states.add(state)

            for (key in kernel.keys) {
                val nextStateIndex = kernel.gotos[key]!!
                val action = if (key is INonTerminalSymbol) GotoAction(nextStateIndex) else ShiftAction(nextStateIndex)
                state.actions.getOrPut(key) { LinkedHashSet() }.add(action)
            }

            for (item in kernel.closure) {
                if (item.isComplete()) {
                    for (lookahead in item.lookaheads) {
                        state.actions.getOrPut(lookahead) { LinkedHashSet() }.add(ReduceAction(item.rule))
                    }
                }
            }
        }
    }
}

class LRState {
    val actions: MutableMap<ISymbol, MutableSet<LRAction>> = HashMap()
}

sealed class LRAction
data class ShiftAction(val nextState: Int) : LRAction()
data class ReduceAction(val rule: ProductionRule) : LRAction()
data class GotoAction(val nextState: Int) : LRAction()
data object AcceptAction : LRAction()
