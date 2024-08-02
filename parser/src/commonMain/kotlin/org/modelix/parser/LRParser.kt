package org.modelix.parser

import org.modelix.model.api.IConcept
import org.modelix.model.data.associateWithNotNull

class LRParser(val table: LRTable) {
    private val stack = ArrayList<StackElement>()
    private var unconsumedInput: String = ""
    var stepLimit = 1000

    private fun stateIndex(): Int = stack.reversed().asSequence().filter { it.isState() }.map { it.getState() }.first()

    fun parse(input: String): IParseTreeNode {
        unconsumedInput = input
        stack.clear()
        stack.add(StackElement(0))
        var state = table.states[stateIndex()]
        var actionAndToken: Pair<LRAction, IParseTreeNode>? = chooseActionForTrimmedInput(state)
        var step = 2
        main@ while (step < stepLimit && actionAndToken != null && (actionAndToken.first as? ReduceAction)?.rule?.isGoal() != true) {
            val action = actionAndToken.first
            when (action) {
                is ShiftAction -> {
                    val token = actionAndToken.second
                    // check(!tokenAlreadyConsumed && token is IToken) { "Can't shift token that was read from stack" }
                    check(token is IToken) { "Not a terminal: $token" }
                    unconsumedInput = unconsumedInput.substring(token.textLength())
                    stack.add(StackElement(token))
                    stack.add(StackElement(action.nextState))
                }
                is ReduceAction -> {
                    val rule = action.rule
                    if (rule.isGoal()) break@main
                    val removeCount = rule.symbols.size * 2
                    val removedTokens = stack.takeLast(removeCount).filter { it.isToken() }.map { it.getToken() }
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
            if (lastStackElement.isToken()) {
                val token = lastStackElement.getToken()
                val actions: MutableSet<LRAction>? = state.actions.entries.firstOrNull { it.key.matches(token) }?.value
                actionAndToken = actions?.firstOrNull()?.let { it to token }
            } else {
                actionAndToken = chooseActionForTrimmedInput(state)
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

    private class StackElement private constructor(private val token: IParseTreeNode? = null, private val state: Int? = null) {
        constructor(token: IParseTreeNode) : this(token, null)
        constructor(state: Int) : this(null, state)
        fun isToken() = token != null
        fun isState() = state != null
        fun getToken() = checkNotNull(token) { "Not a token" }
        fun getState() = checkNotNull(state) { "Not a state" }
        override fun toString(): String {
            return if (isToken()) getToken().toString() else "[" + getState().toString() + "]"
        }
    }
}

fun Grammar.createParser(startConcept: IConcept): LRParser {
    val closureTable = LRClosureTable(grammar = this, startConcept = startConcept).also { it.load() }
    val parsingTable = LRTable().also { it.load(closureTable) }
    return LRParser(parsingTable)
}
