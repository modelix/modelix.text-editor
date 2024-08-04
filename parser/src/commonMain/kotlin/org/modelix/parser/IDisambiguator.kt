package org.modelix.parser

interface IDisambiguator {
    fun chooseActionIndex(actions: List<LRAction>): Int
    fun withLastDisambiguator(newLast: IDisambiguator): IDisambiguator
    companion object {
        fun default() = PreferReduceDisambiguator(ChooseFirstDisambiguator())
    }
}

fun IDisambiguator.chooseActionIndexIfNecessary(actions: List<LRAction>): Int {
    return if (actions.size == 1) 0 else chooseActionIndex(actions)
}

fun IDisambiguator.chooseAction(actions: List<LRAction>): LRAction {
    return if (actions.size == 1) actions[0] else actions[chooseActionIndex(actions)]
}

class IteratingDisambiguator : IDisambiguator {
    private val nextIndices = mutableListOf<Int>()
    private val isDone = mutableListOf<Boolean>()
    private var currentDepth = 0
    override fun chooseActionIndex(actions: List<LRAction>): Int {
        if (currentDepth > nextIndices.lastIndex) {
            nextIndices.add(0)
            isDone.add(false)
        }
        val result = nextIndices[currentDepth]
        isDone[currentDepth] = result >= actions.lastIndex
        currentDepth++
        return result
    }
    fun next(): Boolean {
        if (isDone.isEmpty()) return false
        while (isDone.last()) {
            nextIndices.removeLast()
            isDone.removeLast()
            if (nextIndices.isEmpty()) return false
        }
        nextIndices[nextIndices.lastIndex]++
        currentDepth = 0
        return true
    }

    override fun withLastDisambiguator(newLast: IDisambiguator): IDisambiguator = newLast
}

class ChooseFirstDisambiguator : IDisambiguator {
    override fun chooseActionIndex(actions: List<LRAction>): Int {
        return 0
    }
    override fun withLastDisambiguator(newLast: IDisambiguator): IDisambiguator = newLast
}

class PreferShiftDisambiguator(val next: IDisambiguator) : IDisambiguator {
    override fun chooseActionIndex(actions: List<LRAction>): Int {
        if (actions.size == 2) {
            if (actions[0] is ShiftAction && actions[1] is ReduceAction) return 0
            if (actions[1] is ShiftAction && actions[0] is ReduceAction) return 1
        }
        return next.chooseActionIndex(actions)
    }

    override fun withLastDisambiguator(newLast: IDisambiguator): IDisambiguator {
        return PreferShiftDisambiguator(next.withLastDisambiguator(newLast))
    }
}

class PreferReduceDisambiguator(val next: IDisambiguator) : IDisambiguator {
    override fun chooseActionIndex(actions: List<LRAction>): Int {
        if (actions.size == 2) {
            if (actions[0] is ShiftAction && actions[1] is ReduceAction) return 1
            if (actions[1] is ShiftAction && actions[0] is ReduceAction) return 0
        }
        return next.chooseActionIndex(actions)
    }

    override fun withLastDisambiguator(newLast: IDisambiguator): IDisambiguator {
        return PreferReduceDisambiguator(next.withLastDisambiguator(newLast))
    }
}
