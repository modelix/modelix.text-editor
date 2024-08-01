package org.modelix.parser

import org.modelix.model.api.IConcept

class LRClosureTable(val grammar: Grammar, val startConcept: IConcept) {
    val kernels: MutableList<Kernel> = ArrayList()

    fun load() {
        val goal = ProductionRule(GoalSymbol, listOf(NodeSymbol(startConcept)))
        kernels.add(Kernel(0, mutableListOf(RuleItem(goal, 0, setOf(EndOfInputSymbol)))))

        var i = 0
        while (i < kernels.size) {
            val kernel = kernels[i]

            updateClosure(kernel)

            if (addGotos(kernel)) {
                i = 0
            } else {
                i++
            }
        }

        for (kernel in kernels.iterateGrowingList()) {
            updateClosure(kernel)
        }
    }

    fun updateClosure(kernel: Kernel) {
        for (item in kernel.closure.iterateGrowingList()) {
            for (newItem in item.newItemsFromSymbolAfterDot(grammar)) {
                newItem.addUniqueTo(kernel.closure)
            }
        }
    }

    fun addGotos(kernel: Kernel): Boolean {
        var lookAheadsPropagated = false
        val newKernels = LinkedHashMap<ISymbol, MutableList<RuleItem>>()

        for (item in kernel.closure) {
            val newItem: RuleItem? = item.forward()
            if (newItem != null) {
                val symbolAfterDot = item.nextSymbol()
                kernel.keys.add(symbolAfterDot!!)
                val items = newKernels.getOrPut(symbolAfterDot) { ArrayList() }
                newItem.addUniqueTo(items)
            }
        }

        for (key in kernel.keys) {
            val newKernel = Kernel(kernels.size, newKernels[key]!!.toSet().toMutableList())
            var targetKernelIndex = kernels.indexOfFirst { newKernel.items.toSet() == it.items.toSet() }
            if (targetKernelIndex < 0) {
                kernels.add(newKernel)
                targetKernelIndex = newKernel.index
            } else {
                for (item in newKernel.items) {
                    lookAheadsPropagated = lookAheadsPropagated || item.addUniqueTo(kernels[targetKernelIndex].items)
                }
            }
            kernel.gotos[key] = targetKernelIndex
        }

        return lookAheadsPropagated
    }
}

fun RuleItem.addUniqueTo(items: MutableList<RuleItem>): Boolean {
    for ((index, item) in items.withIndex()) {
        if (this.withoutLookaheads() == item.withoutLookaheads()) {
            if (item.lookaheads != this.lookaheads) {
                items[index] = item.withAdditionalLookaheads(this.lookaheads)
                return true
            } else {
                return false
            }
        }
    }
    items.add(this)
    return true
}

fun RuleItem.newItemsFromSymbolAfterDot(grammar: Grammar): List<RuleItem> {
    val nextConcept = this.nextSymbol() as? INonTerminalSymbol ?: return emptyList()
    val nextNextSymbol = nextNextSymbol()
    var newLookaheads: Set<ITerminalSymbol> = when (nextNextSymbol) {
        null -> setOf(EmptySymbol)
        is ITerminalSymbol -> setOf<ITerminalSymbol>(nextNextSymbol)
        is INonTerminalSymbol -> grammar.getPossibleFirstTerminalSymbols(nextConcept).filterIsInstance<ITerminalSymbol>().toSet()
        is OptionalSymbol -> error("Should have been expanded into multiple rules")
        GoalSymbol -> TODO()
        else -> TODO()
    }
    if (newLookaheads.contains(EmptySymbol)) {
        newLookaheads = newLookaheads - EmptySymbol + this.lookaheads
    }
    return grammar.getRulesOfSubConcepts(nextConcept).map { RuleItem(it, 0, newLookaheads) }
}

class Kernel(val index: Int, val items: MutableList<RuleItem>) {
    val closure: MutableList<RuleItem> = items.toMutableList()
    val gotos: MutableMap<ISymbol, Int> = LinkedHashMap()
    val keys: MutableSet<ISymbol> = LinkedHashSet()
}

fun <T> List<T>.iterateGrowingList(): Iterator<T> = GrowingListIterator<T>(this)

class GrowingListIterator<E>(private val list: List<E>) : Iterator<E> {
    private var i = 0
    override fun hasNext(): Boolean {
        return i < list.size
    }

    override fun next(): E {
        return list[i++]
    }
}
