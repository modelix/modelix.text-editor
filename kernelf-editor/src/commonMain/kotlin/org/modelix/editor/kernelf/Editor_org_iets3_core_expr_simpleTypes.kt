package org.modelix.editor.kernelf

import org.iets3.core.expr.simpleTypes.L_org_iets3_core_expr_simpleTypes
import org.modelix.editor.languageEditors

val Editor_org_iets3_core_expr_simpleTypes = languageEditors(L_org_iets3_core_expr_simpleTypes) {
    conceptEditor(language.StringLiteral) {
        horizontal {
            textColor("DarkGreen")
            "\"".cell()
            noSpace()
            concept.value.cell {
                placeholderText("")
            }
            noSpace()
            "\"".cell()
        }
    }
    conceptEditor(language.NumberLiteral) {
        concept.value.cell {
            textColor("DarkMagenta")
            validateValue { it.toDoubleOrNull() != null }
        }
    }
    conceptEditor(language.TrueLiteral) {
        "true".cell()
    }
    conceptEditor(language.FalseLiteral) {
        "false".cell()
    }
    conceptEditor(language.InterpolExprWord) {
        brackets(singleLine = true, leftSymbol = "$(", rightSymbol = ")") {
            concept.expr.cell()
        }
    }
    conceptEditor(language.NumberRangeSpec) {
        "[".cell()
        noSpace()
        concept.min.cell {
            validateValue { it.toDoubleOrNull() != null }
            writeReplace { if (it.equals("-inf", ignoreCase = true)) "∞" else it.replace(",", ".") }
        }
        noSpace()
        "|".cell()
        noSpace()
        concept.max.cell {
            writeReplace { if (it.equals("inf", ignoreCase = true)) "∞" else it.replace(",", ".") }
        }
        noSpace()
        "]".cell()
    }
    conceptEditor(language.NumberType) {
        "number".cell()
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
        "contains".cell()
        noSpace()
        parentheses {
            concept.value.cell()
        }
    }
    conceptEditor(language.StringEndsWithTarget) {
        "endsWith".cell()
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
        "length".cell()
    }
    conceptEditor(language.StringStartsWithTarget) {
        "startsWith".cell()
        noSpace()
        parentheses {
            concept.value.cell()
        }
    }
    conceptEditor(language.StringToIntTarget) {
        "toInt".cell()
    }
    conceptEditor(language.StringType) {
        "string".cell()
    }
}