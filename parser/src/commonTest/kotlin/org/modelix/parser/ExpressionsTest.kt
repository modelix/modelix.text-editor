package org.modelix.parser

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.time.measureTime

class ExpressionsTest {

    @Test fun test1() = runTest(
        "1+2",
        """
        PlusExpression {
            IntegerLiteral { PropertyToken(text=1) }
            ConstantToken(text=+)
            IntegerLiteral { PropertyToken(text=2) }
        }
        """.trimIndent()
    )

    @Test fun testWithSpaces1() = runTest(
        "1 + 2",
        """
        PlusExpression {
            IntegerLiteral { PropertyToken(text=1) }
            ConstantToken(text=+)
            IntegerLiteral { PropertyToken(text=2) }
        }
        """.trimIndent()
    )

    @Test fun test2() = runTest(
        "1+2+3",
        """
        PlusExpression {
            IntegerLiteral { PropertyToken(text=1) }
            ConstantToken(text=+)
            PlusExpression {
                IntegerLiteral { PropertyToken(text=2) }
                ConstantToken(text=+)
                IntegerLiteral { PropertyToken(text=3) }
            }
        }
        """.trimIndent()
    )

    @Test fun test3() = runTest(
        "1+2+3+4+5+6+7+8+9+10+11+12+13",
        """
        PlusExpression {
            IntegerLiteral { PropertyToken(text=1) }
            ConstantToken(text=+)
            PlusExpression {
                IntegerLiteral { PropertyToken(text=2) }
                ConstantToken(text=+)
                PlusExpression {
                    IntegerLiteral { PropertyToken(text=3) }
                    ConstantToken(text=+)
                    PlusExpression {
                        IntegerLiteral { PropertyToken(text=4) }
                        ConstantToken(text=+)
                        PlusExpression {
                            IntegerLiteral { PropertyToken(text=5) }
                            ConstantToken(text=+)
                            PlusExpression {
                                IntegerLiteral { PropertyToken(text=6) }
                                ConstantToken(text=+)
                                PlusExpression {
                                    IntegerLiteral { PropertyToken(text=7) }
                                    ConstantToken(text=+)
                                    PlusExpression {
                                        IntegerLiteral { PropertyToken(text=8) }
                                        ConstantToken(text=+)
                                        PlusExpression {
                                            IntegerLiteral { PropertyToken(text=9) }
                                            ConstantToken(text=+)
                                            PlusExpression {
                                                IntegerLiteral { PropertyToken(text=10) }
                                                ConstantToken(text=+)
                                                PlusExpression {
                                                    IntegerLiteral { PropertyToken(text=11) }
                                                    ConstantToken(text=+)
                                                    PlusExpression {
                                                        IntegerLiteral { PropertyToken(text=12) }
                                                        ConstantToken(text=+)
                                                        IntegerLiteral { PropertyToken(text=13) }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        """.trimIndent()
    )

    @Test fun test4() = runTest(
        "1+2*3+4",
        """
        PlusExpression {
            IntegerLiteral { PropertyToken(text=1) }
            ConstantToken(text=+)
            MulExpression {
                IntegerLiteral { PropertyToken(text=2) }
                ConstantToken(text=*)
                PlusExpression {
                    IntegerLiteral { PropertyToken(text=3) }
                    ConstantToken(text=+)
                    IntegerLiteral { PropertyToken(text=4) }
                }
            }
        }
        """.trimIndent()
    )

    @Test fun test5() = runTest(
        "1+(2*3)+4",
        """
        PlusExpression {
            IntegerLiteral { PropertyToken(text=1) }
            ConstantToken(text=+)
            PlusExpression {
                ParensExpression {
                    ConstantToken(text=()
                    MulExpression {
                        IntegerLiteral { PropertyToken(text=2) }
                        ConstantToken(text=*)
                        IntegerLiteral { PropertyToken(text=3) }
                    }
                    ConstantToken(text=))
                }
                ConstantToken(text=+)
                IntegerLiteral { PropertyToken(text=4) }
            }
        }
        """.trimIndent()
    )

    @Test fun test6() = runTest(
        "((1+2)*3)+(((4+5)+(6*7))*(8+9))",
        """
        PlusExpression {
            ParensExpression {
                ConstantToken(text=()
                MulExpression {
                    ParensExpression {
                        ConstantToken(text=()
                        PlusExpression {
                            IntegerLiteral { PropertyToken(text=1) }
                            ConstantToken(text=+)
                            IntegerLiteral { PropertyToken(text=2) }
                        }
                        ConstantToken(text=))
                    }
                    ConstantToken(text=*)
                    IntegerLiteral { PropertyToken(text=3) }
                }
                ConstantToken(text=))
            }
            ConstantToken(text=+)
            ParensExpression {
                ConstantToken(text=()
                MulExpression {
                    ParensExpression {
                        ConstantToken(text=()
                        PlusExpression {
                            ParensExpression {
                                ConstantToken(text=()
                                PlusExpression {
                                    IntegerLiteral { PropertyToken(text=4) }
                                    ConstantToken(text=+)
                                    IntegerLiteral { PropertyToken(text=5) }
                                }
                                ConstantToken(text=))
                            }
                            ConstantToken(text=+)
                            ParensExpression {
                                ConstantToken(text=()
                                MulExpression {
                                    IntegerLiteral { PropertyToken(text=6) }
                                    ConstantToken(text=*)
                                    IntegerLiteral { PropertyToken(text=7) }
                                }
                                ConstantToken(text=))
                            }
                        }
                        ConstantToken(text=))
                    }
                    ConstantToken(text=*)
                    ParensExpression {
                        ConstantToken(text=()
                        PlusExpression {
                            IntegerLiteral { PropertyToken(text=8) }
                            ConstantToken(text=+)
                            IntegerLiteral { PropertyToken(text=9) }
                        }
                        ConstantToken(text=))
                    }
                }
                ConstantToken(text=))
            }
        }
        """.trimIndent()
    )

    @Test fun testParentheses1() = runTest(
        "(1)",
        """
        ParensExpression {
            ConstantToken(text=()
            IntegerLiteral { PropertyToken(text=1) }
            ConstantToken(text=))
        }
        """.trimIndent()
    )

    @Test fun testParentheses2() = runTest(
        "(1+2)",
        """
        ParensExpression {
            ConstantToken(text=()
            PlusExpression {
                IntegerLiteral { PropertyToken(text=1) }
                ConstantToken(text=+)
                IntegerLiteral { PropertyToken(text=2) }
            }
            ConstantToken(text=))
        }
        """.trimIndent()
    )

    @Test fun testParentheses3() = runTest(
        "(1+2)+3",
        """
        PlusExpression {
            ParensExpression {
                ConstantToken(text=()
                PlusExpression {
                    IntegerLiteral { PropertyToken(text=1) }
                    ConstantToken(text=+)
                    IntegerLiteral { PropertyToken(text=2) }
                }
                ConstantToken(text=))
            }
            ConstantToken(text=+)
            IntegerLiteral { PropertyToken(text=3) }
        }
        """.trimIndent()
    )

    @Test fun testParentheses4() = runTest(
        "(1+2)+(3+4)",
        """
        PlusExpression {
            ParensExpression {
                ConstantToken(text=()
                PlusExpression {
                    IntegerLiteral { PropertyToken(text=1) }
                    ConstantToken(text=+)
                    IntegerLiteral { PropertyToken(text=2) }
                }
                ConstantToken(text=))
            }
            ConstantToken(text=+)
            ParensExpression {
                ConstantToken(text=()
                PlusExpression {
                    IntegerLiteral { PropertyToken(text=3) }
                    ConstantToken(text=+)
                    IntegerLiteral { PropertyToken(text=4) }
                }
                ConstantToken(text=))
            }
        }
        """.trimIndent()
    )

    @Test fun testParentheses5() = runTest(
        "((1+2)+3)+4",
        """
        PlusExpression {
            ParensExpression {
                ConstantToken(text=()
                PlusExpression {
                    ParensExpression {
                        ConstantToken(text=()
                        PlusExpression {
                            IntegerLiteral { PropertyToken(text=1) }
                            ConstantToken(text=+)
                            IntegerLiteral { PropertyToken(text=2) }
                        }
                        ConstantToken(text=))
                    }
                    ConstantToken(text=+)
                    IntegerLiteral { PropertyToken(text=3) }
                }
                ConstantToken(text=))
            }
            ConstantToken(text=+)
            IntegerLiteral { PropertyToken(text=4) }
        }
        """.trimIndent()
    )

    @Test fun testTernary() = runTest(
        "1*2 ? 3+4 : 5+6",
        """
        MulExpression {
            IntegerLiteral { PropertyToken(text=1) }
            ConstantToken(text=*)
            TernaryExpression {
                IntegerLiteral { PropertyToken(text=2) }
                ConstantToken(text=?)
                PlusExpression {
                    IntegerLiteral { PropertyToken(text=3) }
                    ConstantToken(text=+)
                    IntegerLiteral { PropertyToken(text=4) }
                }
                ConstantToken(text=:)
                PlusExpression {
                    IntegerLiteral { PropertyToken(text=5) }
                    ConstantToken(text=+)
                    IntegerLiteral { PropertyToken(text=6) }
                }
            }
        }
        """.trimIndent()
    )

    @Test fun testListLiteral1() = runTest(
        "list[1]",
        """
        ListLiteral {
            ConstantToken(text=list)
            ConstantToken(text=[)
            list<Expression> { IntegerLiteral { PropertyToken(text=1) } }
            ConstantToken(text=])
        }
        """.trimIndent()
    )

    @Test fun testListLiteral2() = runTest(
        "list[1, 2]",
        """
        ListLiteral {
            ConstantToken(text=list)
            ConstantToken(text=[)
            list<Expression> {
                IntegerLiteral { PropertyToken(text=1) }
                ConstantToken(text=,)
                list<Expression> { IntegerLiteral { PropertyToken(text=2) } }
            }
            ConstantToken(text=])
        }
        """.trimIndent()
    )

    @Test fun testListLiteral3() = runTest(
        "list[1, 2, 3]",
        """
        ListLiteral {
            ConstantToken(text=list)
            ConstantToken(text=[)
            list<Expression> {
                IntegerLiteral { PropertyToken(text=1) }
                ConstantToken(text=,)
                list<Expression> {
                    IntegerLiteral { PropertyToken(text=2) }
                    ConstantToken(text=,)
                    list<Expression> { IntegerLiteral { PropertyToken(text=3) } }
                }
            }
            ConstantToken(text=])
        }
        """.trimIndent()
    )

    @Test fun testStringLiteral() = runTest(
        """"abc"""",
        """
        StringLiteral {
            ConstantToken(text=")
            PropertyToken(text=abc)
            ConstantToken(text=")
        }
        """.trimIndent()
    )

    @Test fun testStringLiteral2() = runTest(
        """ "abc" """,
        """
        StringLiteral {
            ConstantToken(text=")
            PropertyToken(text=abc)
            ConstantToken(text=")
        }
        """.trimIndent()
    )

    @Test fun testStringLiteral3() = runTest(
        """ " abc " """,
        """
        StringLiteral {
            ConstantToken(text=")
            PropertyToken(text= abc )
            ConstantToken(text=")
        }
        """.trimIndent()
    )

    @Test fun testStringLiteral4() = runTest(
        """ " abc " + " def " """,
        """
        PlusExpression {
            StringLiteral {
                ConstantToken(text=")
                PropertyToken(text= abc )
                ConstantToken(text=")
            }
            ConstantToken(text=+)
            StringLiteral {
                ConstantToken(text=")
                PropertyToken(text= def )
                ConstantToken(text=")
            }
        }
        """.trimIndent()
    )

    fun runTest(input: String, expected: String) {
        val parser = TestGrammar.getParser(TestGrammar.expression)
        val parseTree = parser.parse(input)
        println(measureTime { parser.parse(input) })
        println(parseTree)
        assertEquals(expected, parseTree.toString())
    }
}
