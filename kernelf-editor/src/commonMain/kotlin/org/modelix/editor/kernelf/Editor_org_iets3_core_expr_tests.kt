package org.modelix.editor.kernelf

import org.iets3.core.expr.tests.L_org_iets3_core_expr_tests
import org.modelix.editor.languageEditors

val Editor__org_iets3_core_expr_tests = languageEditors(L_org_iets3_core_expr_tests) {
    conceptEditor(language.TestSuite) {
        "test suite".constant()
        concept.name.cell()
        emptyLine()
        "-----------------------------------".constant()
        emptyLine()
        concept.contents.vertical()
    }
    conceptEditor(language.TestCase) {
        "test case".constant {
            iets3keyword()
        }
        concept.name.cell()
        foldable("{...}") {
            // TODO test status
            optional {
                "setup".constant()
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
            "=".constant()
        }
        "assert".constant {
            iets3keyword()
        }
        concept.actual.cell()
        concept.strict.flagCell()
        concept.op.cell()
        concept.expected.cell()
        withNode {
            if (node.isIgnored == "true") {
                "[ignored]".constant {
                    textColor("red")
                    backgroundColor("orange")
                }
            }
        }

    }
    conceptEditor(language.EqualsTestOp) {
        "equals".constant {
            iets3keyword()
        }
    }
    conceptEditor(language.NoneExpr) {
        "none".constant()
        noSpace()
        angleBrackets {
            concept.expr.cell()
        }
    }
    conceptEditor(language.OptExpression) {
        "some".constant()
        noSpace()
        angleBrackets {
            concept.expr.cell()
        }
    }
}