package org.modelix.editor.kernelf

import org.iets3.core.expr.base.L_org_iets3_core_expr_base
import org.iets3.core.expr.collections.L_org_iets3_core_expr_collections
import org.iets3.core.expr.simpleTypes.L_org_iets3_core_expr_simpleTypes
import org.modelix.editor.EditorEngine
import org.modelix.editor.celltemplate.ChildCellTemplate
import org.modelix.editor.celltemplate.leafSymbols
import org.modelix.incremental.IncrementalEngine
import org.modelix.kernelf.KernelfLanguages
import org.modelix.model.api.IConcept
import org.modelix.model.api.getInstantiatableSubConcepts
import org.modelix.parser.Grammar
import org.modelix.parser.NodeSymbol
import org.modelix.parser.ProductionRule
import org.modelix.parser.createParser
import kotlin.test.AfterTest
import kotlin.test.BeforeTest
import kotlin.test.Ignore
import kotlin.test.Test
import kotlin.time.measureTime

class ParsingTest {

    lateinit var engine: EditorEngine

    @BeforeTest
    fun beforeTest() {
        KernelfLanguages.registerAll()

        engine = EditorEngine(IncrementalEngine())
        KernelfEditor.register(engine)
    }

    @AfterTest
    fun afterTest() {
        KernelfLanguages.languages.forEach { it.unregister() }
    }

    @Test fun test() = runExpressionTest("1+2")

    @Test fun test2() = runExpressionTest("1 + 2")

    @Test fun test3() = runExpressionTest("11 + 22")

    @Test fun test4() = runExpressionTest("11 + 22 * 33")

    @Test fun test5() = runExpressionTest("(11 + 22) * 33")

    @Test fun test6() = runExpressionTest("(11+22)*33")

    @Test fun test7() = runExpressionTest("( 11+22 )*33")

    @Test fun test8() = runExpressionTest("(11+22)*-33")

    @Test fun test9() = runExpressionTest("(11 + 22) * -33")

    @Test fun test10() = runExpressionTest("(11 + 22) *- 33")

    @Test fun test11() = runExpressionTest("123.456 + true")

    @Test fun test12() = runExpressionTest(""""abc" + "def"""")

    @Ignore
    @Test
    fun test13() = runExpressionTest(""""abc\" + \"def"""")

    @Test fun test14() = runExpressionTest(""""abc" + " """")

    @Test fun test15() = runExpressionTest(""""abc" + """"")

    @Test fun test16() = runExpressionTest("""isSome(10)""")

    @Test fun test17() = runExpressionTest("""if 10 > 20 then 15""")

    @Test fun test18() = runExpressionTest("""if 10 > 20 then 15 else 900""")

    @Test fun test19() = runExpressionTest("""list(10, 20, 30)""")

    @Test fun test20() = runExpressionTest("""list(10)""")

    @Test fun test21() = runExpressionTest("""list<number>(10, 20, 30)""")

    @Test fun test22() = runExpressionTest("""list(10, 20)""")

    @Test fun test23() = runExpressionTest("""[10, 20]""")

    @Test fun test24() = runExpressionTest("""[10, 20, 30]""")

    private fun runExpressionTest(inputString: String) {
        val startConcept = L_org_iets3_core_expr_base.Expression.untyped()
        val grammar = Grammar()
        loadRulesFromSubconcepts(grammar, startConcept, HashSet())
        val parser = grammar.createParser(startConcept)
        val parseTree = parser.parse(inputString)
        println(measureTime { parser.parse(inputString) })
        println(parseTree)
    }

    private val includedConcepts = setOf<IConcept>(
        L_org_iets3_core_expr_base.Expression.untyped(),
        L_org_iets3_core_expr_base.PlusExpression.untyped(),
        L_org_iets3_core_expr_base.MinusExpression.untyped(),
        L_org_iets3_core_expr_base.MulExpression.untyped(),
        L_org_iets3_core_expr_base.DivExpression.untyped(),
        L_org_iets3_core_expr_base.ParensExpression.untyped(),
        L_org_iets3_core_expr_base.UnaryMinusExpression.untyped(),
        L_org_iets3_core_expr_base.IsSomeExpression.untyped(),
        L_org_iets3_core_expr_base.IfExpression.untyped(),
        L_org_iets3_core_expr_base.IfElseSection.untyped(),
        L_org_iets3_core_expr_base.GreaterExpression.untyped(),
        L_org_iets3_core_expr_base.GreaterEqualsExpression.untyped(),
        L_org_iets3_core_expr_base.LessExpression.untyped(),
        L_org_iets3_core_expr_base.LessEqualsExpression.untyped(),
        L_org_iets3_core_expr_collections.ListLiteral.untyped(),
        L_org_iets3_core_expr_collections.ElementTypeConstraintSingle.untyped(),
        L_org_iets3_core_expr_base.TupleValue.untyped(),
        L_org_iets3_core_expr_simpleTypes.NumberLiteral.untyped(),
        L_org_iets3_core_expr_simpleTypes.TrueLiteral.untyped(),
        L_org_iets3_core_expr_simpleTypes.FalseLiteral.untyped(),
        L_org_iets3_core_expr_simpleTypes.StringLiteral.untyped(),
        L_org_iets3_core_expr_simpleTypes.NumberType.untyped(),
    )

    private fun loadRulesFromSubconcepts(grammar: Grammar, concept: IConcept, visited: MutableSet<IConcept>) {
        if (visited.contains(concept)) return
        for (subConcept in concept.getInstantiatableSubConcepts()) {
            loadRules(grammar, subConcept, visited)
        }
        visited.add(concept)
    }

    private fun loadRules(grammar: Grammar, concept: IConcept, visited: MutableSet<IConcept>) {
        if (visited.contains(concept)) return
        visited.add(concept)

        if (!includedConcepts.contains(concept)) return

        val cellModel = engine.createCellModelExcludingDefault(concept) ?: return
        val symbols = cellModel.getGrammarSymbols().map { it.toParserSymbol() }.toList()
        if (symbols.isNotEmpty()) {
            val rule = ProductionRule(NodeSymbol(concept), symbols)
            grammar.addRule(rule)
        }

        val childConcepts = cellModel.getGrammarSymbols().leafSymbols().filterIsInstance<ChildCellTemplate>().map { it.link.targetConcept }
        for (childConcept in childConcepts) {
            loadRulesFromSubconcepts(grammar, childConcept, visited)
        }
    }
}
