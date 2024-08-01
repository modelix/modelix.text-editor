package org.modelix.parser

class Grammar(val originalRules: List<ProductionRule>) {
    private val rulesWithoutOptionals = originalRules.flatMap { it.expandOptionals() }.toMutableList()

    init {
        val listSymbols = rulesWithoutOptionals.asSequence().flatMap { it.symbols }.filterIsInstance<ListSymbol>().toSet()
        for (listSymbol in listSymbols) {
            rulesWithoutOptionals += ProductionRule(listSymbol, listSymbol.item)
            rulesWithoutOptionals += ProductionRule(listSymbol, listSymbol.item, listSymbol.separator, listSymbol)
        }
    }

    private val possibleFirstTokensCache = HashMap<INonTerminalSymbol, Set<ISymbol>>()
    fun getPossibleFirstTerminalSymbols(concept: INonTerminalSymbol): Set<ISymbol> {
        return possibleFirstTokensCache.getOrPut(concept) {
            LinkedHashSet<ISymbol>().also { collectPossibleFirstTerminalSymbols(concept, HashSet(), it, HashSet()) }
        }
    }

    fun collectPossibleFirstTerminalSymbols(
        concept: INonTerminalSymbol,
        visited: MutableSet<INonTerminalSymbol>,
        firstSymbols: MutableSet<ISymbol>,
        firstRules: MutableSet<ProductionRule>,
    ) {
        if (visited.contains(concept)) return
        visited.add(concept)

        fun collectFromSymbolList(symbols: List<ISymbol>) {
            for (firstSymbol in symbols) {
                when (firstSymbol) {
                    is ConstantSymbol, is PropertySymbol, is ReferenceSymbol, is EndOfInputSymbol -> {
                        firstSymbols.add(firstSymbol)
                        break
                    }
                    is INonTerminalSymbol -> {
                        collectPossibleFirstTerminalSymbols(firstSymbol, visited, firstSymbols, firstRules)
                        break
                    }
                    is OptionalSymbol -> error("Should have been expanded into multiple rules")
                    EmptySymbol -> TODO()
                    GoalSymbol -> TODO()
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
            rulesWithoutOptionals.filter { it.head.isSubtypeOf(superConcept) }
        }
    }
}
