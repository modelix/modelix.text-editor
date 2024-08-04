package org.modelix.parser

class Grammar(originalRules: List<ProductionRule> = emptyList()) {
    private val rules = LinkedHashSet<ProductionRule>()
    private val existingLists = HashSet<ListSymbol>()
    private val existingOptionals = HashSet<OptionalSymbol>()

    init {
        originalRules.forEach { addRule(it) }
    }

    fun addRule(rule: ProductionRule) {
        val filteredSymbols = filterSymbols(rule.symbols)
        if (filteredSymbols.isEmpty()) return

        val newRule = ProductionRule(rule.head, filteredSymbols)
        rules += newRule

        loadRulesFromSymbols(newRule.symbols)
    }

    private fun loadRulesFromSymbols(symbols: List<ISymbol>) {
        symbols.filterIsInstance<ListSymbol>().forEach { addListRules(it) }
        symbols.filterIsInstance<OptionalSymbol>().forEach { addOptionalRules(it) }
    }

    private fun addListRules(listSymbol: ListSymbol) {
        if (existingLists.contains(listSymbol)) return
        existingLists.add(listSymbol)
        rules += ProductionRule(listSymbol, listSymbol.item)
        rules += ProductionRule(listSymbol, listOfNotNull(listSymbol.item, listSymbol.separator, listSymbol))
    }

    private fun addOptionalRules(optionalSymbol: OptionalSymbol) {
        if (existingOptionals.contains(optionalSymbol)) return
        existingOptionals.add(optionalSymbol)
        rules += ProductionRule(optionalSymbol, optionalSymbol.children)
        rules += ProductionRule(optionalSymbol, EmptySymbol)
        loadRulesFromSymbols(optionalSymbol.children)
    }

    private fun filterSymbols(symbols: List<ISymbol>): List<ISymbol> {
        return symbols.mapNotNull { symbol ->
            when (symbol) {
                is ConstantSymbol -> symbol.takeIf { it.text.isNotBlank() }
                is OptionalSymbol -> OptionalSymbol(filterSymbols(symbol.children))
                else -> symbol
            }
        }
    }

    private val possibleFirstTokensCache = HashMap<INonTerminalSymbol, Set<ITerminalSymbol>>()
    fun getPossibleFirstTerminalSymbols(concept: INonTerminalSymbol): Set<ITerminalSymbol> {
        return possibleFirstTokensCache.getOrPut(concept) {
            LinkedHashSet<ITerminalSymbol>().also { collectPossibleFirstTerminalSymbols(concept, HashSet(), it, HashSet()) }
        }
    }

    fun collectPossibleFirstTerminalSymbols(
        concept: INonTerminalSymbol,
        visited: MutableSet<INonTerminalSymbol>,
        firstSymbols: MutableSet<ITerminalSymbol>,
        firstRules: MutableSet<ProductionRule>,
    ) {
        if (visited.contains(concept)) return
        visited.add(concept)

        fun collectFromSymbolList(symbols: List<ISymbol>) {
            for (firstSymbol in symbols) {
                when (firstSymbol) {
                    is ITerminalSymbol -> {
                        firstSymbols.add(firstSymbol)
                        break
                    }
                    is INonTerminalSymbol -> {
                        collectPossibleFirstTerminalSymbols(firstSymbol, visited, firstSymbols, firstRules)
                        break
                    }
                    is OptionalSymbol -> error("Should have been expanded into multiple rules")
                    GoalSymbol -> error("Not expected to be part of the grammar")
                    is ListSymbol -> TODO()
                }
            }
        }

        for (rule in getRulesOfSubConcepts(concept)) {
            firstRules.add(rule)
            collectFromSymbolList(rule.symbols)
        }
    }

    private val rulesOfSubConceptsCache = HashMap<INonTerminalSymbol, List<ProductionRule>>()
    fun getRulesOfSubConcepts(superConcept: INonTerminalSymbol): List<ProductionRule> {
        return rulesOfSubConceptsCache.getOrPut(superConcept) {
            rules.filter { it.head.isSubtypeOf(superConcept) }
        }
    }
}
