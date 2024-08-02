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

    fun updateClosure(kernel: KernelsList.Kernel) {
        for (item in kernel.closure.iterateGrowingSet()) {
            for (newItem in item.newItemsFromSymbolAfterDot(grammar)) {
                newItem.addUniqueTo(kernel.closure)
            }
        }
    }

    fun addGotos(kernel: KernelsList.Kernel): Boolean {
        var lookAheadsPropagated = false
        val newKernels = LinkedHashMap<ISymbol, MutableSet<RuleItem>>()

        for (item in kernel.closure) {
            val newItem: RuleItem? = item.forward()
            if (newItem != null) {
                val symbolAfterDot = item.nextSymbol()
                kernel.keys.add(symbolAfterDot!!)
                val items = newKernels.getOrPut(symbolAfterDot) { LinkedHashSet() }
                newItem.addUniqueTo(items)
            }
        }

        for (key in kernel.keys) {
            val newItems = newKernels[key]!!.toMutableSet()
            var targetKernel = kernels.getByItems(newItems)
            if (targetKernel == null) {
                val newKernel = kernels.newKernel(newItems)
                targetKernel = newKernel
            } else {
                for (item in newItems) {
                    lookAheadsPropagated = lookAheadsPropagated || item.addUniqueTo(targetKernel.items, { _, item, lookaheads ->
                        kernels.addLookaheads(targetKernel, item, lookaheads)
                    })
                }
            }
            kernel.gotos[key] = targetKernel.index
        }

        return lookAheadsPropagated
    }
}

fun RuleItem.addUniqueTo(
    items: MutableSet<RuleItem>,
    updateLookaheads: (MutableSet<RuleItem>, RuleItem, Set<ITerminalSymbol>) -> Unit = { items, item, lookaheads ->
        items.remove(item)
        items.add(item.withAdditionalLookaheads(this.lookaheads))
    },
): Boolean {
    for (item in items.toList()) {
        if (this.withoutLookaheads() == item.withoutLookaheads()) {
            if (item.lookaheads != this.lookaheads) {
                updateLookaheads(items, item, this.lookaheads)
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
        is INonTerminalSymbol -> grammar.getPossibleFirstTerminalSymbols(nextNextSymbol).filterIsInstance<ITerminalSymbol>().toSet()
        is OptionalSymbol -> error("Should have been expanded into multiple rules")
        GoalSymbol -> TODO()
        else -> TODO()
    }
    if (newLookaheads.contains(EmptySymbol)) {
        newLookaheads = newLookaheads - EmptySymbol + this.lookaheads
    }
    return grammar.getRulesOfSubConcepts(nextConcept).map { RuleItem(it, 0, newLookaheads) }
}

class KernelsList : Iterable<KernelsList.Kernel> {
    private val kernelsList = ArrayList<Kernel>()
    private val kernelsMap: MutableMap<Set<RuleItem>, Kernel> = LinkedHashMap()

    override fun iterator(): Iterator<Kernel> = kernelsList.iterator()

    fun addLookaheads(kernel: Kernel, item: RuleItem, additionalLookaheads: Set<ITerminalSymbol>) {
        if (additionalLookaheads.minus(item.lookaheads).isEmpty()) return
        kernelsMap.remove(kernel.items)
        kernel.items.remove(item)
        kernel.items.add(item.withAdditionalLookaheads(additionalLookaheads))
        kernelsMap[kernel.items] = kernel
    }

    fun newKernel(items: MutableSet<RuleItem>): Kernel {
        val kernel = Kernel(kernelsList.size, items)
        kernelsList.add(kernel)
        kernelsMap[items] = kernel
        return kernel
    }

    fun size() = kernelsList.size

    fun getByIndex(index: Int) = kernelsList[index]

    fun getByItems(items: Set<RuleItem>) = kernelsMap[items]

    class Kernel(val index: Int, val items: MutableSet<RuleItem>) {
        val closure: MutableSet<RuleItem> = items.toMutableSet()
        val gotos: MutableMap<ISymbol, Int> = LinkedHashMap()
        val keys: MutableSet<ISymbol> = LinkedHashSet()
    }
}

fun <T> List<T>.iterateGrowingList(): Iterator<T> = GrowingListIterator<T>(this)
fun <T> Set<T>.iterateGrowingSet(): Iterator<T> = GrowingSetIterator<T>(this)

class GrowingListIterator<E>(private val list: List<E>) : Iterator<E> {
    private var i = 0
    override fun hasNext(): Boolean {
        return i < list.size
    }

    override fun next(): E {
        return list[i++]
    }
}

class GrowingSetIterator<E>(private val set: Set<E>) : Iterator<E> {
    private var i = 0
    override fun hasNext(): Boolean {
        return i < set.size
    }

    override fun next(): E {
        return set.asSequence().drop(i++).first()
    }
}
