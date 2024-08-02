package org.modelix.parser

import org.modelix.model.api.IConcept

class LRClosureTable(val grammar: Grammar, val startConcept: IConcept) {
    val kernels = KernelsList()

    fun load() {
        val goal = ProductionRule(GoalSymbol, listOf(NodeSymbol(startConcept)))
        kernels.newKernel(mutableSetOf(RuleItem(goal, 0, setOf(EndOfInputSymbol))))

        var i = 0
        while (i < kernels.size()) {
            val kernel = kernels.getByIndex(i)

            updateClosure(kernel)

            if (addGotos(kernel)) {
                i = 0
            } else {
                i++
            }
        }

        i = 0
        while (i < kernels.size()) {
            updateClosure(kernels.getByIndex(i))
            i++
        }
    }

    private fun updateClosure(kernel: Kernel) {
        var oldSize: Int = -1

        while (kernel.closure.size > oldSize) {
            oldSize = kernel.closure.size
            val newItems = kernel.closure.flatMap { it.newItemsFromSymbolAfterDot(grammar) }
            if (newItems.isEmpty()) break
            val newClosure = kernel.closure.asSequence().plus(newItems).mergeLookaheads()
            kernel.closure = newClosure
        }
    }

    private fun addGotos(kernel: Kernel): Boolean {
        var lookAheadsPropagated = false
        val newKernels = LinkedHashMap<ISymbol, Set<RuleItem>>()

        for (item in kernel.closure) {
            val newItem: RuleItem? = item.forward()
            if (newItem != null) {
                val symbolAfterDot = item.nextSymbol()!!
                kernel.keys.add(symbolAfterDot)
                newKernels[symbolAfterDot] = (newKernels[symbolAfterDot]?.asSequence() ?: emptySequence()).plus(newItem).mergeLookaheads()
            }
        }

        for (key in kernel.keys) {
            val newItems = newKernels[key]!!
            var targetKernel = kernels.getByItems(newItems)
            if (targetKernel == null) {
                val newKernel = kernels.newKernel(newItems)
                targetKernel = newKernel
            } else {
                lookAheadsPropagated = lookAheadsPropagated || kernels.mergeLookaheads(targetKernel, newItems.asSequence())
            }
            kernel.gotos[key] = targetKernel.index
        }

        return lookAheadsPropagated
    }

    private val ruleItemInstances = ObjectInterning<RuleItem>()
    private fun RuleItem.deduplicate() = ruleItemInstances.deduplicate(this)

    private val ruleItemSetInstances = ObjectInterning<Set<RuleItem>>()
    private fun Set<RuleItem>.deduplicate() = ruleItemSetInstances.deduplicate(this)

    private val lookaheadSetInstances = ObjectInterning<Set<ITerminalSymbol>>()
    private fun Set<ITerminalSymbol>.deduplicateLookahead() = lookaheadSetInstances.deduplicate(this)

    private fun Sequence<RuleItem>.mergeLookaheads(): Set<RuleItem> {
        return this.groupBy { it.positionInRule }.map { group ->
            if (group.value.size == 1) {
                group.value.first()
            } else {
                RuleItem(group.key, group.value.asSequence().flatMap { it.lookaheads }.toSet().deduplicateLookahead())
            }
        }.toSet().deduplicate()
    }

    private fun RuleItem.newItemsFromSymbolAfterDot(grammar: Grammar): List<RuleItem> {
        val nextConcept = this.nextSymbol() as? INonTerminalSymbol ?: return emptyList()
        val nextNextSymbol = nextNextSymbol()
        var newLookaheads: Set<ITerminalSymbol> = when (nextNextSymbol) {
            null -> setOf(EmptySymbol)
            is ITerminalSymbol -> setOf<ITerminalSymbol>(nextNextSymbol)
            is INonTerminalSymbol -> grammar.getPossibleFirstTerminalSymbols(nextNextSymbol).filterIsInstance<ITerminalSymbol>().toSet()
            is OptionalSymbol -> error("Should have been expanded into multiple rules")
            GoalSymbol -> TODO()
            else -> TODO()
        }
        if (newLookaheads.contains(EmptySymbol)) {
            newLookaheads = newLookaheads - EmptySymbol + this.lookaheads
        }
        return grammar.getRulesOfSubConcepts(nextConcept).map { RuleItem(it, 0, newLookaheads.deduplicateLookahead()).deduplicate() }
    }

    inner class KernelsList : Iterable<Kernel> {
        private val kernelsList = ArrayList<Kernel>()
        private val kernelsMap: MutableMap<Set<RuleItem>, Kernel> = LinkedHashMap()

        override fun iterator(): Iterator<Kernel> = kernelsList.iterator()

        fun mergeLookaheads(kernel: Kernel, newItems: Sequence<RuleItem>): Boolean {
            val merged = kernel.items.asSequence().plus(newItems).mergeLookaheads()
            if (merged == kernel.items) return false
            kernelsMap.remove(kernel.items)
            kernel.items = merged
            kernelsMap[kernel.items] = kernel
            return true
        }

        fun newKernel(items: Set<RuleItem>): Kernel {
            val kernel = Kernel(kernelsList.size, items.deduplicate())
            kernelsList.add(kernel)
            kernelsMap[items] = kernel
            return kernel
        }

        fun size() = kernelsList.size

        fun getByIndex(index: Int) = kernelsList[index]

        fun getByItems(items: Set<RuleItem>) = kernelsMap[items]
    }

    class Kernel(val index: Int, var items: Set<RuleItem>) {
        var closure: Set<RuleItem> = items
        val gotos: MutableMap<ISymbol, Int> = LinkedHashMap()
        val keys: MutableSet<ISymbol> = LinkedHashSet()
    }
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
