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

            state.distanceToAccept = state.actions.asSequence()
                .flatMap { it.value }.minOf { getDistanceToAccept(it, pathLength + 1) }
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
                state.actions.getOrPut(key) { LinkedHashSet() }.add(action)
            }

            for (item in kernel.closure.values) {
                if (item.isComplete()) {
                    for (lookahead in item.lookaheadSet.terminals) {
                        state.actions.getOrPut(lookahead) { LinkedHashSet() }
                            .add(if (item.rule.isGoal()) AcceptAction else ReduceAction(item.rule))
                    }
                }
            }
        }
    }
}

class LRState {
    var distanceToAccept: Int = -1
    val actions: MutableMap<ISymbol, MutableSet<LRAction>> = HashMap()
}

sealed class LRAction
data class ShiftAction(val nextState: Int) : LRAction()
data class ReduceAction(val rule: ProductionRule) : LRAction()
data class GotoAction(val nextState: Int) : LRAction()
data object AcceptAction : LRAction()
