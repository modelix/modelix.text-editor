package org.modelix.parser

import net.akehurst.language.agl.processor.Agl
import org.modelix.model.api.ConceptReference
import org.modelix.model.api.IConcept
import org.modelix.model.api.IConceptReference

class Parser(grammar: Grammar) {
    private val grammar = GrammarTranslator().also { it.load(grammar) }

    fun parse(text: String, goalConcept: IConcept): ParseTreeNode {
        val config = Agl.configuration(Agl.configurationDefault()) {
            this.defaultGoalRuleName(grammar.conceptChoiceName(goalConcept))
        }
        val processor = Agl.processorFromGrammar(grammar.aglGrammar(), config)
        val result = processor.parse(text)
        val tree = result.sppt ?: throw IllegalArgumentException("Failed to parse $text: " + result.issues)
        val converter = ParseTreeConverter()
        tree.treeData.traverseTreeDepthFirst(converter, skipDataAsTree = false)
        return converter.root!!
    }

}

fun IConceptReference.upcast(): ConceptReference = this as ConceptReference
