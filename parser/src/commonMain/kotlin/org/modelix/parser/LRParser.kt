package org.modelix.parser

import org.modelix.model.api.IConcept

class LRParser(val table: LRTable, val disambiguator: IDisambiguator) {
    private val stack = ArrayList<StackElement>()
    private var unconsumedInput: String = ""
    var stepLimit = 10_000

    private fun stateIndex(): Int = stack.last { it.isState() }.getState()

    fun parse(input: String, complete: Boolean = false): IParseTreeNode {
        unconsumedInput = input
        stack.clear()
        stack.add(StackElement(0))
        var state = table.states[stateIndex()]
        var nextAction: LRAction? = null
        var step = 2
        var tokenToShift: IToken? = null
        var lookahead: IToken? = null
        chooseActionForTrimmedInput(state)?.let { nextAction = it.first; tokenToShift = it.second }
        main@ while (step < stepLimit) {
            when (val action = nextAction) {
                null -> break
                is ShiftAction -> {
                    val token = checkNotNull(tokenToShift) { "No token provided for shift action" }
                    if (lookahead != null) {
                        check(lookahead == token)
                        stack.add(StackElement(token = lookahead))
                        lookahead = null
                    } else {
                        unconsumedInput = unconsumedInput.substring(token.textLength())
                        stack.add(StackElement(token))
                    }
                    stack.add(StackElement(action.nextState))
                }
                is ReduceAction -> {
                    val rule = action.rule
                    if (rule.isGoal()) break@main
                    val removeCount = rule.symbols.size * 2
                    val removedTokens = stack.takeLast(removeCount).filter { it.isNode() }.map { it.getToken() }
                    repeat(removeCount) { stack.removeLast() }
                    stack.add(StackElement(ParseTreeNode(rule, removedTokens)))
                }
                is GotoAction -> {
                    stack.add(StackElement(action.nextState))
                }
                AcceptAction -> return stack[1].getToken()
            }

            state = table.states[stateIndex()]
            val lastStackElement = stack.last()
            if (lastStackElement.isNode()) {
                // choose action by element on the stack
                val token = lastStackElement.getToken()
                val actions: Array<out LRAction>? = state.getSymbolsAndActions().firstOrNull { it.first.matches(token) }?.second
                nextAction = actions?.let { disambiguator.chooseAction(it.toList()) }
            } else {
                // choose action by pending input
                val actionAndToken = chooseActionForTrimmedInput(state)
                nextAction = actionAndToken?.first
                tokenToShift = actionAndToken?.second
            }

            // completion
            if (nextAction == null && complete) {
                val candidates = state.getSymbolsAndActions()
                    .sortedBy {
                        when (it.first) {
                            EndOfInputSymbol -> 0
                            EmptySymbol -> 1
                            is NodeSymbol -> 2
                            is ListSymbol -> 3
                            is ConstantSymbol -> 4
                            is PropertySymbol -> 5
                            is ReferenceSymbol -> 6
                            is OptionalSymbol -> 7
                            GoalSymbol -> error("Not expected on the right hand side of a rule")
                        }
                    }
                    .flatMap { symbolAndActions -> symbolAndActions.second.map { symbolAndActions.first to it } }
                    .sortedBy { table.getDistanceToAccept(it.second) }
                    .toList()
                val candidate = candidates[disambiguator.chooseActionIndex(candidates.map { it.second })]
                val completionToken = when (val symbol = candidate.first) {
                    EmptySymbol -> EmptyToken
                    EndOfInputSymbol -> EndOfInputToken
                    is ConstantSymbol -> ConstantToken(symbol.text)
                    is PropertySymbol -> PropertyToken("")
                    is ReferenceSymbol -> ReferenceToken("")
                    is INonTerminalSymbol -> CompletedNode(symbol)
                    GoalSymbol -> error("Not expected on the right hand side of a rule")
                }
                val action = candidate.second
                when (action) {
                    AcceptAction -> {
                        if (lastStackElement.isState()) {
                            stack.add(StackElement(completionToken))
                        }
                    }
                    is GotoAction -> {
                        if (lastStackElement.isState()) {
                            stack.add(StackElement(completionToken))
                        }
                        nextAction = action
                    }
                    is ReduceAction -> {
                        lookahead = completionToken as IToken // it were a non-terminal, it would be a GotoAction
                        nextAction = action
                    }
                    is ShiftAction -> {
                        lookahead = completionToken as IToken
                        nextAction = action
                        tokenToShift = completionToken
                    }
                }
            }

            step++
        }

        error("Invalid input: $input\nCurrent stack: $stack")
    }

    private fun chooseActionForTrimmedInput(state: LRState): Pair<LRAction, IToken>? {
        chooseActionForInput(state)?.takeIf { it.second !is EmptyToken }?.let { return it }
        unconsumedInput = unconsumedInput.trimStart()
        return chooseActionForInput(state)
    }

    private fun chooseActionForInput(state: LRState): Pair<LRAction, IToken>? {
        val applicableActions: Map<Pair<ISymbol, Array<out LRAction>>, IToken> =
            state.getSymbolsAndActions().associateWithNotNull { action ->
                val followingStates = action.second.asSequence()
                    .filterIsInstance<ShiftAction>()
                    .map { it.nextState }
                    .map { table.states[it] }
                    .toList()
                matchInput(action.first, followingStates)
            }

        // TODO resolve conflicts based on operator precedence
        return applicableActions.entries
            .flatMap { entry -> entry.key.second.map { it to entry.value } }
            .sortedByDescending { it.second.textLength() }
            .sortedBy {
                when (it.second) {
                    is ConstantToken -> 0
                    is PropertyToken -> 1
                    is ReferenceToken -> 2
                    EndOfInputToken -> 3
                    EmptyToken -> 4
                }
            }
            .takeIf { it.isNotEmpty() }
            ?.let { it[disambiguator.chooseActionIndex(it.map { it.first })] }
    }

    private fun matchInput(symbol: ISymbol, followingStates: List<LRState>): IToken? {
        return when (symbol) {
            is ConstantSymbol -> {
                if (unconsumedInput.startsWith(symbol.text)) {
                    ConstantToken(symbol.text)
                } else {
                    null
                }
            }
            EmptySymbol -> EmptyToken
            EndOfInputSymbol -> {
                if (unconsumedInput.isEmpty()) EndOfInputToken else null
            }
            is PropertySymbol -> {
                matchRegex(symbol.regex, followingStates) { PropertyToken(it) }
            }
            is ReferenceSymbol -> {
                val regex = Regex("""[_a-zA-Z][_a-zA-Z0-9]*""")
                matchRegex(regex, followingStates) { ReferenceToken(it) }
            }
            is INonTerminalSymbol -> null
            is OptionalSymbol -> error("Should have been expanded into multiple rules")
            GoalSymbol -> TODO()
        }
    }

    private fun matchRegex(regex: Regex?, followingStates: List<LRState>, createToken: (String) -> IToken): IToken? {
        return if (regex != null) {
            val match = regex.matchAt(unconsumedInput, 0)
            if (match != null) {
                check(match.range.first == 0)
                createToken(match.value)
            } else {
                null
            }
        } else if (followingStates.isNotEmpty()) {
            val followingConstants = followingStates.asSequence().flatMap { it.getSymbols() }.filterIsInstance<ConstantSymbol>().map { it.text }
            val nextConstantPos = followingConstants.map { unconsumedInput.indexOf(it) }.filter { it != -1 }.minOrNull()
            if (nextConstantPos != null) {
                createToken(unconsumedInput.substring(0, nextConstantPos))
            } else {
                null
            }
        } else {
            val firstSpace = unconsumedInput.indexOf(" ")
            if (firstSpace < 1) null else createToken(unconsumedInput.substring(0, firstSpace))
        }
    }

    private class StackElement private constructor(private val node: IParseTreeNode? = null, private val state: Int? = null) {
        constructor(token: IParseTreeNode) : this(token, null)
        constructor(state: Int) : this(null, state)
        fun isNode() = node != null
        fun isState() = state != null
        fun getToken() = checkNotNull(node) { "Not a token" }
        fun getState() = checkNotNull(state) { "Not a state" }
        override fun toString(): String {
            return if (isNode()) getToken().toString() else "[" + getState().toString() + "]"
        }
    }
}

fun Grammar.createParser(startConcept: IConcept, disambiguator: IDisambiguator = ChooseFirstDisambiguator()): LRParser {
    return LRParser(createParseTable(startConcept), disambiguator)
}

fun Grammar.createParseTable(startConcept: IConcept): LRTable {
    val closureTable = LRClosureTable(grammar = this, startConcept = startConcept).also { it.load() }
    return LRTable().also { it.load(closureTable) }
}

inline fun <K, V : Any> Sequence<K>.associateWithNotNull(valueSelector: (K) -> V?): Map<K, V> {
    return associateWith { valueSelector(it) }.filterValues { it != null } as Map<K, V>
}
