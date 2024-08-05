package org.modelix.parser

class Scanner(
    private val input: CharSequence,
    private var position: Int = 0,
    private var knownConstants: Set<String> = emptySet(),
) {

    private val whitespaceRegex = Regex("\\s+")
    private val expectedNextTerminals: MutableSet<ITerminalSymbol> = HashSet()

    fun next(): List<IToken> {
        if (isAtEnd()) return listOf(EndOfInputToken)
        check(expectedNextTerminals.isNotEmpty()) { "Possible terminal symbols unknown" }
        val nextTokens: List<IToken> = expectedNextTerminals.asSequence()
            .map { matchInput(it) }
            .plus(matchRegex(whitespaceRegex) { WhitespaceToken(it) })
            .filterNotNull()
            .groupBy { it.textLength() }
            .maxByOrNull { it.key }
            ?.value
            ?.distinct()
            ?: emptyList()
        expectedNextTerminals.clear()
        check(nextTokens.isNotEmpty()) { "None of the terminals matches the input" }
        position += nextTokens.first().textLength()
        return nextTokens
    }

    fun isAtEnd() = !hasMore()

    fun hasMore() = this.position < this.input.length

    fun copy() = Scanner(input, position, knownConstants)

    fun addKnownConstants(constants: Iterable<String>) {
        knownConstants += constants
    }

    fun addPossibleNextTerminal(terminal: ITerminalSymbol) {
        expectedNextTerminals.add(terminal)
    }

    private fun matchInput(symbol: ISymbol): IToken? {
        return when (symbol) {
            is ConstantSymbol -> {
                if (input.startsWith(symbol.text, position)) {
                    ConstantToken(symbol.text)
                } else {
                    null
                }
            }
            EmptySymbol -> EmptyToken
            EndOfInputSymbol -> {
                if (isAtEnd()) EndOfInputToken else null
            }
            is PropertySymbol -> {
                matchRegex(symbol.regex) { PropertyToken(it) }
            }
            is ReferenceSymbol -> {
                val regex = Regex("""[_a-zA-Z][_a-zA-Z0-9]*""")
                matchRegex(regex) { ReferenceToken(it) }
            }
            is INonTerminalSymbol -> null
            GoalSymbol -> TODO()
        }
    }

    private fun matchRegex(regex: Regex?, createToken: (String) -> IToken): IToken? {
        return if (regex != null) {
            val match = regex.matchAt(input, position)
            if (match != null) {
                check(match.range.first == position)
                createToken(match.value)
            } else {
                null
            }
        } else {
            val nextConstants = findNextConstants()
            val nextConstantPos = nextConstants.firstOrNull()?.second
            if (nextConstantPos != null && nextConstantPos > position) {
                createToken(input.substring(position, position + nextConstantPos))
            } else {
                null
            }
        }
    }

    private fun findNextConstants(): List<Pair<String, Int>> {
        return knownConstants.asSequence().plus(" ")
            .map { it to input.indexOf(it, position) }
            .filter { it.second != -1 }
            .toList()
            .sortedBy { it.second }
    }
}
