package org.modelix.parser

import org.modelix.model.api.IConcept
import org.modelix.model.api.getAllConcepts

class Grammar(originalRules: List<ProductionRule> = emptyList()) {
    private val rules = ArrayList<ProductionRule>()
    private val existingLists = HashSet<ListSymbol>()
    private val existingOptionals = HashSet<OptionalSymbol>()
    private val loadedSubConceptRules = HashSet<IConcept>()

    init {
        originalRules.forEach { addRule(it) }
    }

    fun addRule(rule: ProductionRule) {
        require(rule.head !is SubConceptsSymbol) { "${rule.head} is only allowed on the right hand side of a rule. Invalid rule: $rule" }
        val filteredSymbols = filterSymbols(rule.symbols)
        if (filteredSymbols.isEmpty()) return

        val newRule = ProductionRule(rule.head, filteredSymbols)
        rules += newRule

        loadRulesFromSymbols(newRule.symbols)
        (rule.head as? ExactConceptSymbol)?.let { loadSubConceptRules(it.concept) }
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
        loadRulesFromSymbols(listOfNotNull(listSymbol.item, listSymbol.separator))
    }

    private fun addOptionalRules(optionalSymbol: OptionalSymbol) {
        if (existingOptionals.contains(optionalSymbol)) return
        existingOptionals.add(optionalSymbol)
        rules += ProductionRule(optionalSymbol, optionalSymbol.children)
        rules += ProductionRule(optionalSymbol, EmptySymbol)
        loadRulesFromSymbols(optionalSymbol.children)
    }

    private fun loadSubConceptRules(subConcept: IConcept) {
        if (loadedSubConceptRules.contains(subConcept)) return
        loadedSubConceptRules.add(subConcept)

        for (superConcept in subConcept.getAllConcepts()) {
            rules += ProductionRule(SubConceptsSymbol(superConcept), ExactConceptSymbol(subConcept))
        }
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
    fun getPossibleFirstTerminalSymbols(nonTerminal: INonTerminalSymbol): Set<ITerminalSymbol> {
        return possibleFirstTokensCache.getOrPut(nonTerminal) {
            LinkedHashSet<ITerminalSymbol>().also { collectPossibleFirstTerminalSymbols(nonTerminal, HashSet(), it, HashSet()) }
        }
    }

    fun collectPossibleFirstTerminalSymbols(
        nonTerminal: INonTerminalSymbol,
        visited: MutableSet<INonTerminalSymbol>,
        firstSymbols: MutableSet<ITerminalSymbol>,
        firstRules: MutableSet<ProductionRule>,
    ) {
        if (visited.contains(nonTerminal)) return
        visited.add(nonTerminal)

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

        for (rule in getRulesForNonTerminal(nonTerminal)) {
            firstRules.add(rule)
            collectFromSymbolList(rule.symbols)
        }
    }

    private val getRulesForNonTerminalCache = HashMap<INonTerminalSymbol, List<ProductionRule>>()
    fun getRulesForNonTerminal(nonTerminal: INonTerminalSymbol): List<ProductionRule> {
        return getRulesForNonTerminalCache.getOrPut(nonTerminal) {
            rules.filter {
                it.head == nonTerminal
            }
        }
    }
}
