package org.modelix.editor.kernelf

import org.iets3.core.expr.base.L_org_iets3_core_expr_base
import org.modelix.editor.EditorEngine
import org.modelix.editor.celltemplate.ConstantCellTemplate
import org.modelix.editor.celltemplate.RootParseContext
import org.modelix.editor.celltemplate.leafSymbols
import org.modelix.editor.token.AmbiguityParseTreeNode
import org.modelix.editor.token.IParseTreeNode
import org.modelix.editor.token.UnclassifiedToken
import org.modelix.incremental.IncrementalEngine
import org.modelix.kernelf.KernelfLanguages
import org.modelix.model.api.getAllSubConcepts
import kotlin.test.AfterTest
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertTrue
import kotlin.time.TimeSource

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

    @Test fun test13() = runExpressionTest(""""abc\" + \"def"""")

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

    @Test
    fun allExpressionConstants() {
        val expressionConcepts = L_org_iets3_core_expr_base.Expression.untyped().getAllSubConcepts(true).toList()
        expressionConcepts.asSequence()
            .mapNotNull { engine.createCellModelExcludingDefault(it) }
            .flatMap { it.getGrammarSymbols().take(1).leafSymbols().take(1) }
            .filterIsInstance<ConstantCellTemplate>()
            .groupBy { it.text }
            .entries
            .sortedBy { it.key }
            .forEach { println("${it.key} - " + it.value.map { it.concept.getShortName() }) }
    }

    @Test
    fun leafs() {
        val outputConcept = L_org_iets3_core_expr_base.Expression.untyped()
        val context = RootParseContext(engine)
        context.getTransitiveLeafSymbols(outputConcept).forEach { println(it) }
    }

    private fun runExpressionTest(inputString: String) {
        val outputConcept = L_org_iets3_core_expr_base.Expression.untyped()
        val context = RootParseContext(engine)
        context.traceEnabled = false
        fun computeResult(): List<IParseTreeNode> {
            val start = TimeSource.Monotonic.markNow()
            var first = true
            return context.parse(input, outputConcept).let { AmbiguityParseTreeNode.unwrap(it) }
                .onEach {
                    if (first) {
                        first = false
                        println("First received after " + start.elapsedNow())
                    }
                    println(it)
                }.also { println("Done after " + start.elapsedNow()) }
        }

        val result = computeResult()
        assertTrue(result.isNotEmpty())

        computeResult()
    }
}
