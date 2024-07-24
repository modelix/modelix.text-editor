package org.modelix.editor.kernelf

import org.iets3.core.expr.simpleTypes.L_org_iets3_core_expr_simpleTypes
import org.modelix.aspects.languageAspects
import org.modelix.editor.editor

val Editor_org_iets3_core_expr_simpleTypes = languageAspects(L_org_iets3_core_expr_simpleTypes) {
    editor(language.StringLiteral) {
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
    editor(language.NumberLiteral) {
        concept.value.cell {
            textColor("DarkMagenta")
            regex("""[0-9]+([.][0-9]+)?""")
            validateValue { it.toDoubleOrNull() != null }
        }
    }
    editor(language.TrueLiteral) {
        "true".constant()
    }
    editor(language.FalseLiteral) {
        "false".constant()
    }
    editor(language.InterpolExprWord) {
        brackets(singleLine = true, leftSymbol = "$(", rightSymbol = ")") {
            concept.expr.cell()
        }
    }
    editor(language.NumberRangeSpec) {
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
    editor(language.NumberType) {
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
    editor(language.StringContainsTarget) {
        "contains".constant()
        noSpace()
        parentheses {
            concept.value.cell()
        }
    }
    editor(language.StringEndsWithTarget) {
        "endsWith".constant()
        noSpace()
        parentheses {
            concept.value.cell()
        }
    }
    editor(language.StringInterpolationExpr) {
        brackets(singleLine = true, leftSymbol = "'''", rightSymbol = "'''") {
            concept.text.cell()
        }
    }
    editor(language.StringLengthTarget) {
        "length".constant()
    }
    editor(language.StringStartsWithTarget) {
        "startsWith".constant()
        noSpace()
        parentheses {
            concept.value.cell()
        }
    }
    editor(language.StringToIntTarget) {
        "toInt".constant()
    }
    editor(language.StringType) {
        "string".constant()
    }
    editor(language.BoundsExpression) {
        "bounds".constant {
            iets3keyword()
        }
        parentheses {
            concept.expr.cell()
            "⎵".constant()
            concept.lower.cell()
            "⎴".constant()
            concept.upper.cell()
        }
    }
    editor(language.LimitExpression) {
        "limit".constant {
            iets3keyword()
        }
        noSpace()
        angleBrackets {
            concept.type.cell()
        }
        noSpace()
        parentheses {
            concept.expr.cell()
        }
    }
    editor(language.ConvertPrecisionNumberExpression) {
        "precision".constant {
            iets3keyword()
        }
        noSpace()
        angleBrackets {
            concept.rounding.cell()
            "to".constant()
            concept.targetPrecision.cell()
        }
        noSpace()
        parentheses {
            concept.expr.cell()
        }
    }
    val roundingModes = mapOf(
        language.RoundDownRoundingMode to "round down",
        language.RoundHalfUpRoundingMode to "round half up",
        language.RoundUpRoundingMode to "round up",
        language.TruncateRoundingMode to "truncate",
    )
    editor(language.RoundingMode, applicableToSubConcepts = true) {
        val mode = roundingModes[concept]
            ?: "Unknown rounding mode ${concept.untyped().getLongName()}"
        mode.constant()
    }
    editor(language.NumberPrecSpec) {
        noSpace()
        curlyBrackets {
            concept.prec.cell()
        }
    }
    editor(language.ToleranceExpr) {
        concept.value.cell()
        noSpace()
        "±".constant()
        noSpace()
        concept.tolerance.cell()
    }
}
