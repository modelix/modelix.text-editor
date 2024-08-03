package org.modelix.parser

import org.modelix.model.api.IConcept
import org.modelix.model.data.associateWithNotNull

class LRParser(val table: LRTable) {
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
                val actions: MutableSet<LRAction>? = state.actions.entries.firstOrNull { it.key.matches(token) }?.value
                nextAction = actions?.firstOrNull()
            } else {
                // choose action by pending input
                val actionAndToken = chooseActionForTrimmedInput(state)
                nextAction = actionAndToken?.first
                tokenToShift = actionAndToken?.second
            }

            // completion
            if (nextAction == null && complete) {
                val candidates = state.actions.entries.sortedBy {
                    when (it.key) {
                        EndOfInputSymbol -> 0
                        EmptySymbol -> 1
                        is NodeSymbol -> 2
                        is ListSymbol -> 3
                        is ConstantSymbol -> 4
                        is PropertySymbol -> 5
                        is ReferenceSymbol -> 6
                        GoalSymbol -> error("Not expected on the right hand side of a rule")
                        is OptionalSymbol -> error("Should have been expanded into multiple rules")
                    }
                }.sortedBy { it.value.minOf { table.getDistanceToAccept(it) } }
                for (candidate in candidates) {
                    val completionToken = when (val symbol = candidate.key) {
                        EmptySymbol -> EmptyToken
                        EndOfInputSymbol -> EndOfInputToken
                        is NodeSymbol -> CompletedNode(symbol)
                        is ConstantSymbol -> ConstantToken(symbol.text)
                        is PropertySymbol -> PropertyToken("")
                        is ReferenceSymbol -> ReferenceToken("")
                        is ListSymbol -> CompletedNode(symbol)
                        is OptionalSymbol -> error("Should have been expanded into multiple rules")
                        GoalSymbol -> error("Not expected on the right hand side of a rule")
                    }
                    val action = candidate.value.minBy { table.getDistanceToAccept(it) }
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
                    break
                }
            }

            step++
        }

        error("Invalid input: $input")
    }

    private fun chooseActionForTrimmedInput(state: LRState): Pair<LRAction, IToken>? {
        chooseActionForInput(state)?.let { return it }
        unconsumedInput = unconsumedInput.trimStart()
        return chooseActionForInput(state)
    }

    private fun chooseActionForInput(state: LRState): Pair<LRAction, IToken>? {
        val applicableActions: Map<MutableMap.MutableEntry<ISymbol, MutableSet<LRAction>>, IToken> =
            state.actions.entries.filter { it.value.isNotEmpty() }.associateWithNotNull { action ->
                val followingState = action.value.asSequence()
                    .filterIsInstance<ShiftAction>()
                    .map { it.nextState }
                    .map { table.states[it] }
                    .firstOrNull()
                matchInput(action.key, followingState)
            }

        // TODO resolve conflicts based on operator precedence
        return applicableActions.entries
            .flatMap { entry -> entry.key.value.map { it to entry.value } }
            .sortedBy {
                when (it.second) {
                    is ConstantToken -> 0
                    is PropertyToken -> 1
                    is ReferenceToken -> 2
                    EndOfInputToken -> 3
                    EmptyToken -> 4
                }
            }
            .firstOrNull()
    }

    private fun matchInput(symbol: ISymbol, followingState: LRState?): IToken? {
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
                matchRegex(symbol.regex, followingState) { PropertyToken(it) }
            }
            is ReferenceSymbol -> {
                val regex = Regex("""[_a-zA-Z][_a-zA-Z0-9]*""")
                matchRegex(regex, followingState) { ReferenceToken(it) }
            }
            is INonTerminalSymbol -> null
            is OptionalSymbol -> error("Should have been expanded into multiple rules")
            GoalSymbol -> TODO()
        }
    }

    private fun matchRegex(regex: Regex?, followingState: LRState?, createToken: (String) -> IToken): IToken? {
        return if (regex != null) {
            val match = regex.matchAt(unconsumedInput, 0)
            if (match != null) {
                check(match.range.first == 0)
                createToken(match.value)
            } else {
                null
            }
        } else if (followingState != null) {
            val followingConstants = followingState.actions.keys.filterIsInstance<ConstantSymbol>().map { it.text }
            val nextConstantPos = followingConstants.map { unconsumedInput.indexOf(it) }.filter { it != -1 }.minOrNull()
            if (nextConstantPos != null) {
                createToken(unconsumedInput.substring(0, nextConstantPos))
            } else {
                null
            }
        } else {
            null
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

fun Grammar.createParser(startConcept: IConcept): LRParser {
    val closureTable = LRClosureTable(grammar = this, startConcept = startConcept).also { it.load() }
    val parsingTable = LRTable().also { it.load(closureTable) }
    return LRParser(parsingTable)
}
