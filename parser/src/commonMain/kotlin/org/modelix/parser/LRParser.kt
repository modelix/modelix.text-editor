package org.modelix.parser

import org.modelix.model.api.IConcept

interface IParser {
    fun parse(input: String, complete: Boolean): IParseTreeNode
    fun parse(input: String): IParseTreeNode = parse(input, complete = false)
    fun parseCompleting(input: String): IParseTreeNode = parse(input, complete = true)
    fun tryParse(input: String, complete: Boolean): IParseTreeNode?
    fun parseForest(input: String) : Sequence<IParseTreeNode> = parseForest(input, false)
    fun parseForest(input: String, complete: Boolean) : Sequence<IParseTreeNode>
}

class LRParser(val table: LRTable, private val defaultDisambiguator: IDisambiguator) : IParser {
    var stepLimit = 10_000
    private var disambiguator = defaultDisambiguator

    override fun parse(input: String, complete: Boolean): IParseTreeNode {
        return tryParse(input, complete) ?: error("Invalid input: $input\nCurrent stack: ???")
    }

    override fun tryParse(input: String, complete: Boolean): IParseTreeNode? {
        return doParse(input, complete).firstOrNull()
    }

    override fun parseForest(input: String, complete: Boolean): Sequence<IParseTreeNode> {
        return doParse(input, complete).asSequence()
    }

    private fun doParse(input: String, complete: Boolean): List<IParseTreeNode> {
        val acceptedForks = ArrayList<Fork>()

        fun List<Fork>.filterAccepted() = filter {
            if (it.accepted) {
                acceptedForks.add(it)
            }
            !it.accepted
        }

        val scanner = Scanner(input)
        val initialStack: IGSStack<StackElement> = EmptyGSS<StackElement>().push(StackElement(0))
        var step: Int = 2
        var forks: List<Fork> = listOf(Fork(initialStack, null))

        // scan first token
        forks.forEach { it.loadNextTerminals(scanner) }
        var lookaheadTokens = scanner.next().toList()
        forks = forks.flatMap { it.forksForNextActions(lookaheadTokens) }

        fun List<Fork>.applyActions() = flatMap { it.applyAction(lookaheadTokens) }.filterAccepted().merge()

        while (step++ < stepLimit) {
            // shift all forks
            check(forks.all { it.readyToShift() })
            forks = forks.applyActions()
            if (forks.isEmpty()) {
                break
            }

            // scan next token
            forks.forEach { it.loadNextTerminals(scanner) }
            lookaheadTokens = scanner.next().toList()
            forks = forks.flatMap { it.forksForNextActions(lookaheadTokens) }

            // run reductions
            while (step++ < stepLimit) {
                val readyToShift = forks.filter { it.readyToShift() }
                val notReadyToShift = forks.filter { !it.readyToShift() }
                if (notReadyToShift.isEmpty()) break
                forks = readyToShift +
                        notReadyToShift
                            .applyActions()
                            .flatMap { it.forksForNextActions(lookaheadTokens) }
            }
            if (forks.isEmpty()) {
                break
            }
            forks = forks.merge()
        }
        return acceptedForks.flatMap { it.output!! }
    }

    private fun List<Fork>.merge() = mergeForks(this)

    private fun mergeForks(forks: List<Fork>): List<Fork> {
        check(forks.size <= 100) { "Too many forks" }

        val mergedForks = forks.filter { !it.stack.peek().isState() } +
                forks.filter { it.stack.peek().isState() }.groupBy { it.stack.peek().getState() to it.actionToApply }
                    .map { group ->
                        if (group.value.size == 1) return@map group.value.first()

                        val mergedStack = group.value
                            .map { it.stack }
                            .reduce { acc, it ->
                                checkNotNull(acc.tryMerge(it)) { "Merge failed" }
                            }

                        Fork(mergedStack, group.key.second)
                    }
        if (forks.size != mergedForks.size) println("forks ${forks.size} -> ${mergedForks.size}")
        return mergedForks
    }

    private inner class Fork(val stack: IGSStack<StackElement>, val actionToApply: LRAction?) {
        var accepted: Boolean = false
        var output: List<IParseTreeNode>? = null

        fun stateIndex(): Int = (stack.peek().takeIf { it.isState() } ?: stack.elementAt(1)).getState()
        fun state() = table.states[stateIndex()]

        fun readyToShift() = actionToApply is ShiftAction

        fun forksForNextActions(lookaheadTokens: List<IToken>): List<Fork> {
            check(!accepted) { "Already accepted" }

            if (actionToApply != null) return listOf(this)

            val lastStackElement = stack.peek()
            if (lastStackElement.isNode()) {
                val tokenOnStack = lastStackElement.getToken()
                val actions: Array<out LRAction>? =
                    state().getSymbolsAndActions().firstOrNull { it.first.matches(tokenOnStack) }?.second
                return actions?.map { Fork(stack, it) } ?: emptyList()
            } else {
                val applicableActions = state().getSymbolsAndActions().filter {
                    val symbol = it.first
                    lookaheadTokens.any { symbol.matches(it) }
                }.flatMap { it.second.asSequence() }.toList()
                return applicableActions.map { Fork(stack, it) }
            }
        }

        fun loadNextTerminals(scanner: Scanner) {
            check(!accepted) { "Already accepted" }
            state().getSymbols().filterIsInstance<ITerminalSymbol>().forEach { scanner.addPossibleNextTerminal(it) }
        }

        fun applyAction(tokensForShift: List<IToken>): List<Fork> {
            check(!accepted) { "Already accepted" }
            return when (val action = actionToApply) {
                null -> error("No action applicable. Fork should have been discarded.")
                is SkipAction -> listOf(Fork(stack, null))
                is ShiftAction -> {
                    var newStack = stack
                    val matchingTokens = tokensForShift.filter { action.symbol.matches(it) }
                    val matchingToken = when (matchingTokens.size) {
                        0 -> error("None of the tokens matches ${action.symbol}: $tokensForShift")
                        1 -> matchingTokens.single()
                        else -> error("Multiple of the tokens matches ${action.symbol}: $matchingTokens")
                    }
                    if (matchingToken !is EmptyToken) {
                        newStack = newStack.push(StackElement(matchingToken))
                    }
                    newStack = newStack.push(StackElement(action.nextState))
                    listOf(Fork(newStack, null))
                }
                is ReduceAction -> {
                    val rule = action.rule
                    if (rule.isGoal()) error("Should be an AcceptAction")
                    val removeCount = rule.symbols.size * 2

                    return stack.pop(removeCount).map { popped: Pair<List<StackElement>, IGSStack<StackElement>> ->
                        val removedTokens = popped.first.filter { it.isNode() }.map { it.getToken() }
                        val newStack = popped.second.push(StackElement(ParseTreeNode(rule, removedTokens.reversed())))
                        Fork(newStack, null)
                    }
                }
                is GotoAction -> {
                    listOf(Fork(stack.push(StackElement(action.nextState)), null))
                }
                AcceptAction -> {
                    output = (if (stack.peek().isState()) stack.pop().second else listOf(stack)).map { it.peek().getToken() }
                    accepted = true
                    listOf(this)
                }
            }
        }
    }

    private data class StackElement private constructor(private val node: IParseTreeNode? = null, private val state: Int? = null) : IGSSElement {
        constructor(token: IParseTreeNode) : this(token, null)
        constructor(state: Int) : this(null, state)
        fun isNode() = node != null
        fun isState() = state != null
        fun getToken() = checkNotNull(node) { "Not a token" }
        fun getState() = checkNotNull(state) { "Not a state" }
        override fun toString(): String {
            return if (isNode()) getToken().toString() else "[" + getState().toString() + "]"
        }
        override fun merge(other: IGSSElement): IGSSElement? {
            check(other is StackElement)
            if (this == other) return this
            if (isState() != other.isState()) return null
            if (isState()) return if (getState() == other.getState()) this else null

            val t1 = getToken()
            val t2 = other.getToken()
            if (t1 !is INonTerminalToken) return null
            if (t2 !is INonTerminalToken) return null
            if (t1.getNonTerminalSymbol() != t2.getNonTerminalSymbol()) return null
            return StackElement(ParseForestNode.create(listOf(t1, t2)))
        }
    }
}

fun Grammar.createParser(startConcept: IConcept, disambiguator: IDisambiguator = IDisambiguator.default()): LRParser {
    return LRParser(createParseTable(startConcept), disambiguator)
}

fun Grammar.createParseTable(startConcept: IConcept): LRTable {
    val closureTable = LRClosureTable(grammar = this, startConcept = startConcept).also { it.load() }
    return LRTable().also { it.load(closureTable) }
}

inline fun <K, V : Any> Sequence<K>.associateWithNotNull(valueSelector: (K) -> V?): Map<K, V> {
    return associateWith { valueSelector(it) }.filterValues { it != null } as Map<K, V>
}
