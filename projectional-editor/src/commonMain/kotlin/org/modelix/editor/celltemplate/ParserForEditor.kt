package org.modelix.editor.celltemplate

import org.modelix.editor.EditorEngine
import org.modelix.model.api.IConcept
import org.modelix.model.api.getInstantiatableSubConcepts
import org.modelix.model.api.runSynchronized
import org.modelix.parser.Grammar
import org.modelix.parser.LRParser
import org.modelix.parser.LRTable
import org.modelix.parser.NodeSymbol
import org.modelix.parser.ProductionRule
import org.modelix.parser.createParseTable

class ParserForEditor(val engine: EditorEngine){
    private var parseTables = HashMap<IConcept, LRTable>()

    private fun getParseTable(startConcept: IConcept): LRTable {
        return runSynchronized(parseTables) {
            parseTables.getOrPut(startConcept) {
                val grammar = Grammar()
                loadRulesFromSubconcepts(grammar, startConcept, HashSet(), engine)
                grammar.createParseTable(startConcept)
            }
        }
    }

    fun getParser(startConcept: IConcept) = LRParser(getParseTable(startConcept))

    private fun loadRulesFromSubconcepts(grammar: Grammar, concept: IConcept, visited: MutableSet<IConcept>, engine: EditorEngine) {
        if (visited.contains(concept)) return
        for (subConcept in concept.getInstantiatableSubConcepts()) {
            loadRules(grammar, subConcept, visited, engine)
        }
        visited.add(concept)
    }

    private fun loadRules(grammar: Grammar, concept: IConcept, visited: MutableSet<IConcept>, engine: EditorEngine) {
        if (visited.contains(concept)) return
        visited.add(concept)

        val cellModel = engine.createCellModelExcludingDefault(concept) ?: return

        val canContainBaseConcept = cellModel.getGrammarSymbols().leafSymbols().filterIsInstance<ChildCellTemplate>()
            .any { it.link.targetConcept.getDirectSuperConcepts().isEmpty() }
        if (canContainBaseConcept) {
            // The parsing table will be too big
            return
        }

        val symbols = cellModel.getGrammarSymbols().map { it.toParserSymbol() }.toList()
        if (symbols.isNotEmpty()) {
            val rule = ProductionRule(NodeSymbol(concept), symbols)
            grammar.addRule(rule)
        }

        val childConcepts = cellModel.getGrammarSymbols().leafSymbols().filterIsInstance<ChildCellTemplate>().map { it.link.targetConcept }
        for (childConcept in childConcepts) {
            loadRulesFromSubconcepts(grammar, childConcept, visited, engine)
        }
    }
}
