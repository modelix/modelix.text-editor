package org.modelix.editor.kernelf

import org.iets3.core.expr.base.L_org_iets3_core_expr_base
import org.modelix.editor.EditorEngine
import org.modelix.editor.celltemplate.ParseContext
import org.modelix.editor.token.ConstantToken
import org.modelix.incremental.IncrementalEngine
import org.modelix.kernelf.KernelfLanguages
import kotlin.test.AfterTest
import kotlin.test.BeforeTest
import kotlin.test.Test

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

    @Test
    fun test() {
        val result = engine.parse(ConstantToken("1+1"), L_org_iets3_core_expr_base.Expression.untyped(), ParseContext(engine)).toList()
        println(result)
    }
}
