package org.modelix.parser

import org.modelix.model.api.IConcept

class LRClosureTable(val grammar: Grammar, val startConcept: IConcept) {
    val kernels = KernelsList()

    fun load() {
        val goal = ProductionRule(GoalSymbol, listOf(NodeSymbol(startConcept)))
        kernels.newKernel(mutableSetOf(RuleItem(goal, 0, setOf(EndOfInputSymbol).toLookaheadSet())))

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

            kernel.closure.values.asSequence()
                .map {
                    Triple(
                        it.nextSymbol() as? INonTerminalSymbol,
                        it.nextNextSymbol(),
                        it.lookaheadSet
                    )
                }
                .filter { it.first != null }
                .groupBy { it.first }
                .forEach { group ->
                    val rules = grammar.getRulesOfSubConcepts(group.key!!)
                    val lookaheads = group.value.asSequence().flatMap { triple ->
                        val nextNextSymbol = triple.second
                        var newLookaheads: Set<ITerminalSymbol> = when (nextNextSymbol) {
                            null -> setOf(EmptySymbol)
                            is ITerminalSymbol -> setOf<ITerminalSymbol>(nextNextSymbol)
                            is INonTerminalSymbol -> grammar.getPossibleFirstTerminalSymbols(nextNextSymbol)
                            is OptionalSymbol -> error("Should have been expanded into multiple rules")
                            GoalSymbol -> TODO()
                            else -> TODO()
                        }
                        if (newLookaheads.contains(EmptySymbol)) {
                            newLookaheads = newLookaheads - EmptySymbol + triple.third.terminals
                        }
                        newLookaheads
                    }.toSet()

                    for (rule in rules) {
                        val positionInRule = PositionInRule(0, rule)
                        val existing = kernel.closure[positionInRule]
                        kernel.closure[positionInRule] = if (existing == null) {
                            RuleItem(positionInRule, LookaheadSet(lookaheads).deduplicate())
                        } else {
                            RuleItem(existing.positionInRule, (existing.lookaheadSet + lookaheads).deduplicate())
                        }
                    }
                }
        }
    }

    private fun addGotos(kernel: Kernel): Boolean {
        var lookAheadsPropagated = false
        val newKernels = LinkedHashMap<ISymbol, Set<RuleItem>>()

        for (item in kernel.closure.values) {
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

    private val lookaheadSetInstances = ObjectInterning<LookaheadSet>()
    private fun Set<ITerminalSymbol>.toLookaheadSet() = LookaheadSet(this).deduplicate()
    private fun LookaheadSet.deduplicate() = lookaheadSetInstances.deduplicate(this)

    private fun Sequence<RuleItem>.mergeLookaheads(): Set<RuleItem> {
        return this.groupBy { it.positionInRule }.map { group ->
            if (group.value.size == 1) {
                group.value.first()
            } else {
                RuleItem(group.key, group.value.asSequence().flatMap { it.lookaheadSet.terminals }.toSet().toLookaheadSet())
            }
        }.toSet()
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
            val kernel = Kernel(kernelsList.size, items)
            kernelsList.add(kernel)
            kernelsMap[items] = kernel
            return kernel
        }

        fun size() = kernelsList.size

        fun getByIndex(index: Int) = kernelsList[index]

        fun getByItems(items: Set<RuleItem>) = kernelsMap[items]
    }

    class Kernel(val index: Int, var items: Set<RuleItem>) {
        var closure: MutableMap<PositionInRule, RuleItem> = items.associateBy { it.positionInRule }.toMutableMap()
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
