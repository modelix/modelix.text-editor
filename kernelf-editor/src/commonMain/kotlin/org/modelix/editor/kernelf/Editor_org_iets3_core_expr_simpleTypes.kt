package org.modelix.editor.kernelf

import org.iets3.core.expr.simpleTypes.L_org_iets3_core_expr_simpleTypes
import org.modelix.editor.languageEditors

val Editor_org_iets3_core_expr_simpleTypes = languageEditors(L_org_iets3_core_expr_simpleTypes) {
    conceptEditor(language.StringLiteral) {
        horizontal {
            textColor("DarkGreen")
            "\"".constant()
            noSpace()
            concept.value.cell {
                placeholderText("")
            }
            noSpace()
            "\"".constant()
        }
    }
    conceptEditor(language.NumberLiteral) {
        concept.value.cell {
            textColor("DarkMagenta")
            validateValue { it.toDoubleOrNull() != null }
        }
    }
    conceptEditor(language.TrueLiteral) {
        "true".constant()
    }
    conceptEditor(language.FalseLiteral) {
        "false".constant()
    }
    conceptEditor(language.InterpolExprWord) {
        brackets(singleLine = true, leftSymbol = "$(", rightSymbol = ")") {
            concept.expr.cell()
        }
    }
    conceptEditor(language.NumberRangeSpec) {
        "[".constant()
        noSpace()
        concept.min.cell {
            validateValue { it.toDoubleOrNull() != null }
            writeReplace { if (it.equals("-inf", ignoreCase = true)) "∞" else it.replace(",", ".") }
        }
        noSpace()
        "|".constant()
        noSpace()
        concept.max.cell {
            writeReplace { if (it.equals("inf", ignoreCase = true)) "∞" else it.replace(",", ".") }
        }
        noSpace()
        "]".constant()
    }
    conceptEditor(language.NumberType) {
        "number".constant()
        optional {
            noSpace()
            concept.range.cell()
        }
        optional {
            noSpace()
            concept.prec.cell()
        }
    }
    conceptEditor(language.StringContainsTarget) {
        "contains".constant()
        noSpace()
        parentheses {
            concept.value.cell()
        }
    }
    conceptEditor(language.StringEndsWithTarget) {
        "endsWith".constant()
        noSpace()
        parentheses {
            concept.value.cell()
        }
    }
    conceptEditor(language.StringInterpolationExpr) {
        brackets(singleLine = true, leftSymbol = "'''", rightSymbol = "'''") {
            concept.text.cell()
        }
    }
    conceptEditor(language.StringLengthTarget) {
        "length".constant()
    }
    conceptEditor(language.StringStartsWithTarget) {
        "startsWith".constant()
        noSpace()
        parentheses {
            concept.value.cell()
        }
    }
    conceptEditor(language.StringToIntTarget) {
        "toInt".constant()
    }
    conceptEditor(language.StringType) {
        "string".constant()
    }
}