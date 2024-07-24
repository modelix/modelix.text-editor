package org.modelix.editor.kernelf

import org.iets3.core.expr.base.C_BinaryExpression
import org.iets3.core.expr.base.L_org_iets3_core_expr_base
import org.iets3.core.expr.simpleTypes.C_NumberLiteral
import org.modelix.editor.ChildCellTemplate
import org.modelix.editor.ConstantCellTemplate
import org.modelix.editor.EditorEngine
import org.modelix.editor.FlagCellTemplate
import org.modelix.editor.PropertyCellTemplate
import org.modelix.editor.ReferenceCellTemplate
import org.modelix.editor.defaultConceptEditor
import org.modelix.incremental.IncrementalEngine
import org.modelix.kernelf.KernelfLanguages
import org.modelix.parser.Associativity
import org.modelix.parser.ChildLinkSymbol
import org.modelix.parser.ConstantSymbol
import org.modelix.parser.Grammar
import org.modelix.parser.ISymbol
import org.modelix.parser.OptionalSymbol
import org.modelix.parser.Parser
import org.modelix.parser.ProductionRule
import org.modelix.parser.PropertySymbol
import org.modelix.parser.ReferenceLinkSymbol
import org.modelix.parser.SymbolList
import kotlin.test.AfterTest
import kotlin.test.BeforeTest
import kotlin.test.Test

class ParserTest {
    private lateinit var editorEngine: EditorEngine

    @BeforeTest
    fun beforeTest() {
        KernelfLanguages.registerAll()
        editorEngine = EditorEngine(IncrementalEngine())
        KernelfEditor.register(editorEngine)
    }

    @AfterTest
    fun afterTest() {
        KernelfLanguages.languages.forEach { it.unregister() }
    }


    @Test
    fun test() {
        val rules = ArrayList<ProductionRule>()
        val allConcepts = KernelfLanguages.languages.flatMap { it.getConcepts() }
        for (concept in allConcepts) {
            if (concept.isAbstract()) continue
            if (!concept.isSubConceptOf(C_BinaryExpression.untyped()) && !concept.isExactly(C_NumberLiteral.untyped())) continue
            val conceptEditor = editorEngine.resolveConceptEditor(concept).first()
            if (conceptEditor == defaultConceptEditor) continue
            val cellTemplate = conceptEditor.apply(concept)
            val symbols = cellTemplate.getGrammarSymbols()
            val converted: List<ISymbol> = symbols.map { symbol ->
                when (symbol) {
                    is ConstantCellTemplate -> ConstantSymbol(symbol.text)
                    is FlagCellTemplate -> OptionalSymbol(ConstantSymbol(symbol.text))
                    is ChildCellTemplate -> ChildLinkSymbol(symbol.link)
                    is PropertyCellTemplate -> PropertySymbol(symbol.property, symbol.regex ?: Regex("[a-zA-Z_][a-zA-Z0-9_]*")) // TODO use correct pattern
                    is ReferenceCellTemplate -> ReferenceLinkSymbol(symbol.link)
                    // TODO handle optional cells
                }
            }.toList()
            val rhs = if (converted.size == 1) converted.single() else SymbolList(converted)
            rules += ProductionRule(concept, rhs, Associativity.LEFT, 0)
        }
        val grammar = Grammar(rules)
        val parser = Parser(grammar)
        val parseTree = parser.parse("10 + 20 * 30 - 40", L_org_iets3_core_expr_base.Expression.untyped())
        println(parseTree)
    }

}
