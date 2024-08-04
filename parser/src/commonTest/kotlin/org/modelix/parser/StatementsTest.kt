package org.modelix.parser

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.time.measureTime

class StatementsTest {

    @Test fun localVarDeclWithoutInitializer() = runTest(
        "int a;",
        """
        LocalVariableDeclarationStatement {
            LocalVariableDeclaration {
                IntegerType { ConstantToken(text=int) }
                PropertyToken(text=a)
                optional(constant[=] Expression) { EmptyToken }
            }
            ConstantToken(text=;)
        }
        """.trimIndent()
    )

    @Test fun localVarDeclWithInitializer() = runTest(
        "int a = 10 + 20;",
        """
        LocalVariableDeclarationStatement {
            LocalVariableDeclaration {
                IntegerType { ConstantToken(text=int) }
                PropertyToken(text=a)
                optional(constant[=] Expression) {
                    ConstantToken(text==)
                    PlusExpression {
                        IntegerLiteral { PropertyToken(text=10) }
                        ConstantToken(text=+)
                        IntegerLiteral { PropertyToken(text=20) }
                    }
                }
            }
            ConstantToken(text=;)
        }
        """.trimIndent()
    )

    fun runTest(input: String, expected: String) {
        val parser = TestGrammar.getParser(TestGrammar.statement)
        val parseTree = parser.parse(input)
        println(measureTime { parser.parse(input) })
        println(parseTree)
        assertEquals(expected, parseTree.toString())
    }
}
