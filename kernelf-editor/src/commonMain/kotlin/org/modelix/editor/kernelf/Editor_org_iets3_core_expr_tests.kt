package org.modelix.editor.kernelf

import org.iets3.core.expr.tests.L_org_iets3_core_expr_tests
import org.modelix.editor.languageEditors

val Editor__org_iets3_core_expr_tests = languageEditors(L_org_iets3_core_expr_tests) {
    conceptEditor(language.TestSuite) {
        "test suite".cell()
        concept.name.cell()
        emptyLine()
        "-----------------------------------".cell()
        emptyLine()
        concept.contents.vertical()
    }
    conceptEditor(language.TestCase) {
        "test case".cell {
            iets3keyword()
        }
        concept.name.cell()
        foldable("{...}") {
            // TODO test status
            optional {
                "setup".cell()
                concept.setup.cell()
            }
            ifEmpty(concept.setup) {
                newLine()
            }
            curlyBrackets {
                concept.items.vertical()
            }
        }
    }
    conceptEditor(language.AssertTestItem) {
        optional {
            concept.optionalName.cell()
            "=".cell()
        }
        "assert".cell {
            iets3keyword()
        }
        concept.actual.cell()
        concept.strict.flagCell()
        concept.op.cell()
        concept.expected.cell()
        withNode {
            if (node.isIgnored == "true") {
                "[ignored]".cell {
                    textColor("red")
                    backgroundColor("orange")
                }
            }
        }

    }
    conceptEditor(language.EqualsTestOp) {
        "equals".cell {
            iets3keyword()
        }
    }
    conceptEditor(language.NoneExpr) {
        "none".cell()
        noSpace()
        angleBrackets {
            concept.expr.cell()
        }
    }
    conceptEditor(language.OptExpression) {
        "some".cell()
        noSpace()
        angleBrackets {
            concept.expr.cell()
        }
    }
}