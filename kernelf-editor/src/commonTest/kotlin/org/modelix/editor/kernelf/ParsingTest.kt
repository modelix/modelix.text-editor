package org.modelix.editor.kernelf

import org.iets3.core.expr.base.L_org_iets3_core_expr_base
import org.modelix.editor.EditorEngine
import org.modelix.editor.celltemplate.ParseContext
import org.modelix.editor.token.UnclassifiedToken
import org.modelix.incremental.IncrementalEngine
import org.modelix.kernelf.KernelfLanguages
import kotlin.test.AfterTest
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertTrue

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

    private fun runExpressionTest(inputString: String) {
        val result = engine.parse(UnclassifiedToken(inputString), L_org_iets3_core_expr_base.Expression.untyped(), ParseContext(engine)).toList()
        result.forEach(::println)
        assertTrue(result.isNotEmpty())
    }
}
