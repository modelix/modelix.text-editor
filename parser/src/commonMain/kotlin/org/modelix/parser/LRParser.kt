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
    private val gss = GraphStructuredStack<StackElement>()
    private val stack = gss.newStack()
    private var unconsumedInput: String = ""
    var stepLimit = 10_000
    private var disambiguator = defaultDisambiguator

    private fun stateIndex(): Int = stack.first { it.isState() }.getState()

    override fun parse(input: String, complete: Boolean): IParseTreeNode {
        return tryParse(input, complete) ?: error("Invalid input: $input\nCurrent stack: $stack")
    }

    override fun tryParse(input: String, complete: Boolean): IParseTreeNode? {
        return if (complete) {
            doParse(input, complete)
        } else {
            parseForest(input, complete, 100, 1).firstOrNull()
        }
    }

    override fun parseForest(input: String, complete: Boolean): Sequence<IParseTreeNode> {
        return parseForest(input, complete, 100, 1)
    }

    private fun parseForest(input: String, complete: Boolean, maxIterations: Int, maxSize: Int): Sequence<IParseTreeNode> {
        val iteratingDisambiguator = BreadthFirstSearchDisambiguator()
        disambiguator = defaultDisambiguator.withLastDisambiguator(iteratingDisambiguator)
        try {
            val parseTrees = ArrayList<IParseTreeNode>()
            var i = maxIterations
            do {
                doParse(input, complete)?.let { parseTrees.add(it) }
            } while (i-- > 0 && parseTrees.size < maxSize && iteratingDisambiguator.next())
            return parseTrees.asSequence()
        } finally {
            disambiguator = defaultDisambiguator
        }
    }

    private fun doParse(input: String, complete: Boolean): IParseTreeNode? {
        unconsumedInput = input
        stack.clear()
        stack.push(StackElement(0))
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
                    if (token !is EmptyToken) {
                        if (lookahead != null) {
                            check(lookahead == token) { "Next token is $lookahead, but expected $token" }
                            stack.push(StackElement(token = lookahead))
                            lookahead = null
                        } else {
                            unconsumedInput = unconsumedInput.substring(token.textLength())
                            stack.push(StackElement(token))
                        }
                    }
                    stack.push(StackElement(action.nextState))
                }
                is ReduceAction -> {
                    val rule = action.rule
                    if (rule.isGoal()) break@main
                    val removeCount = rule.symbols.size * 2
                    val removedTokens = ArrayList<IParseTreeNode>()
                    repeat(removeCount) {
                        stack.pop().takeIf { it.isNode() }?.getToken()?.let { removedTokens.add(it) }
                    }
                    stack.push(StackElement(ParseTreeNode(rule, removedTokens.reversed())))
                }
                is GotoAction -> {
                    stack.push(StackElement(action.nextState))
                }
                AcceptAction -> return stack.toList().asReversed()[1].getToken()
            }

            state = table.states[stateIndex()]
            val lastStackElement = stack.peek()
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
                val candidate = candidates.first()
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
                            stack.push(StackElement(completionToken))
                        }
                    }
                    is GotoAction -> {
                        if (lastStackElement.isState()) {
                            stack.push(StackElement(completionToken))
                        }
                        nextAction = action
                    }
                    is ReduceAction -> {
                        lookahead = completionToken as IToken // if it were a non-terminal, it would be a GotoAction
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

        return null
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
            ?.let { it[disambiguator.chooseActionIndexIfNecessary(it.map { it.first })] }
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
