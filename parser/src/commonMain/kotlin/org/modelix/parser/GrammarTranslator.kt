package org.modelix.parser

import net.akehurst.language.agl.grammar.grammar.asm.ChoiceLongestDefault
import net.akehurst.language.agl.grammar.grammar.asm.ConcatenationDefault
import net.akehurst.language.agl.grammar.grammar.asm.GrammarBuilderDefault
import net.akehurst.language.agl.grammar.grammar.asm.NamespaceDefault
import net.akehurst.language.agl.grammar.grammar.asm.NonTerminalDefault
import net.akehurst.language.agl.grammar.grammar.asm.OptionalItemDefault
import net.akehurst.language.api.grammar.RuleItem
import org.modelix.model.api.ConceptReference
import org.modelix.model.api.IConcept
import org.modelix.model.api.getAllConcepts

class GrammarTranslator() {
    private val conceptIds = UniqueIdentifiers<ConceptReference>()
    private val conceptHierarchy = ConceptHierarchy()
    private val gb = GrammarBuilderDefault(NamespaceDefault("org.modelix"), "autoGeneratedFromNotation")

    fun aglGrammar() = gb.grammar

    fun conceptRuleName(concept: IConcept) = conceptIds.get(concept.getReference().upcast()) { concept.getShortName() }
    fun conceptChoiceName(concept: IConcept) = "CHOICE_" + conceptRuleName(concept)
    fun conceptReferenceName(concept: IConcept) = if (conceptHierarchy.getDirectSubConcepts(concept).isEmpty()) conceptRuleName(concept) else conceptChoiceName(concept)

    fun load(grammar: Grammar) {
        gb.skip("WHITESPACE", true).concatenation(gb.terminalPattern("""\s+"""))

        grammar.rules.asSequence().flatMap { it.rhs.getAllSymbols() }.filterIsInstance<ChildLinkSymbol>().map { it.link.targetConcept }.forEach { conceptHierarchy.isReferenced(it) }
        grammar.rules.asSequence().map { it.outputConcept }.forEach { conceptHierarchy.hasRule(it) }

        for (rule in grammar.rules) {
            load(rule)
        }

        for (superConcept in conceptHierarchy.referencedConcepts) {
            if (conceptHierarchy.getDirectSubConcepts(superConcept).isEmpty()) continue
            val alternatives = collectChoiceAlternatives(superConcept).map { NonTerminalDefault(null, it) }
            gb.rule(conceptChoiceName(superConcept)).rule.rhs =
                if (alternatives.size == 1) alternatives.single() else ChoiceLongestDefault(alternatives)
        }
    }

    fun load(rule: ProductionRule) {
        val isLeaf = !rule.rhs.getAllSymbols().filterIsInstance<ChildLinkSymbol>().any()
        val name = conceptRuleName(rule.outputConcept)
        (if (isLeaf) gb.leaf(name) else gb.rule(name)).rule.rhs = translate(rule.rhs)
    }

    fun translate(symbol: ISymbol): RuleItem {
        return when (symbol) {
            is OptionalSymbol -> OptionalItemDefault(translate(symbol.symbol))
            is SymbolList -> ConcatenationDefault(symbol.symbols.map { translate(it) })
            is ConstantSymbol -> gb.terminalLiteral(symbol.constant)
            is PropertySymbol -> gb.terminalPattern(symbol.pattern.pattern)
            is ReferenceLinkSymbol -> gb.terminalPattern("[a-zA-Z_][a-zA-Z_0-9]*") // TODO handle references with non-standard names
            is ChildLinkSymbol -> NonTerminalDefault(null, conceptReferenceName(symbol.link.targetConcept))
        }
    }

    fun collectChoiceAlternatives(superConcept: IConcept): Set<String> {
        val visited = HashSet<IConcept>()
        visited.add(superConcept)
        val result = LinkedHashSet<String>()
        if (conceptHierarchy.conceptsWithRules.contains(superConcept)) {
            result.add(conceptRuleName(superConcept))
        }
        for (subConcept in conceptHierarchy.getDirectSubConcepts(superConcept)) {
            collectChoiceAlternatives(subConcept, visited, result)
        }
        return result
    }

    fun collectChoiceAlternatives(concept: IConcept, visited: MutableSet<IConcept>, result: MutableSet<String>) {
        if (visited.contains(concept)) return
        visited.add(concept)

        if (conceptHierarchy.referencedConcepts.contains(concept)) {
            result.add(conceptReferenceName(concept))
        } else {
            if (conceptHierarchy.conceptsWithRules.contains(concept)) {
                result.add(conceptRuleName(concept))
            }
            for (subConcept in conceptHierarchy.getDirectSubConcepts(concept)) {
                collectChoiceAlternatives(subConcept, visited, result)
            }
        }
    }
}
