package org.modelix.editor.kernelf

import jetbrains.mps.lang.core.N_INamedConcept
import org.iets3.core.expr.base.CN_BinaryExpression
import org.iets3.core.expr.base.L_org_iets3_core_expr_base
import org.iets3.core.expr.lambda.L_org_iets3_core_expr_lambda
import org.modelix.editor.languageEditors

val Editor_org_iets3_core_expr_base = languageEditors(L_org_iets3_core_expr_base) {
    val binaryExpressionSymbols = mapOf<CN_BinaryExpression, String>(
        language.AssignmentExpr to ":=",

        language.DivExpression to "/",
        language.MinusExpression to "-",
        language.ModExpression to "%",
        language.MulExpression to "*",
        language.PlusExpression to "+",

        language.GreaterEqualsExpression to ">=",
        language.GreaterExpression to ">",
        language.LessEqualsExpression to "<=",
        language.LessExpression to "<",

        language.EqualsExpression to "==",
        language.NonStrictEqualsExpression to "===",
        language.NotEqualsExpression to "!=",

        language.LogicalAndExpression to "&&",
        language.LogicalIffExpression to "<=>",
        language.LogicalImpliesExpression to "=>",
        language.LogicalOrExpression to "||",

        language.OptionOrExpression to "?:",

        L_org_iets3_core_expr_lambda.FunCompose to ":o:",
    )
    conceptEditor(language.BinaryExpression) {
        val symbol = binaryExpressionSymbols[concept]
            ?: "Operator symbol for ${concept.untyped().getLongName()} not specified"
        concept.left.cell()
        symbol.constant()
        concept.right.cell()
    }
    conceptEditor(language.DefaultValueExpression) {
        "default".constant()
        noSpace()
        parentheses {
            concept.type.cell()
        }
    }
    conceptEditor(language.DotExpression) {
        concept.expr.cell()
        noSpace()
        ".".constant()
        noSpace()
        concept.target.cell()
    }
    conceptEditor(language.IfElseSection) {
        "else".constant {
            iets3keyword()
        }
        concept.expr.cell()
    }
    conceptEditor(language.IfExpression) {
        "if".constant {
            iets3keyword()
        }
        concept.condition.cell()
        "then".constant {
            iets3keyword()
        }
        concept.thenPart.cell()
        optional {
            concept.elseSection.cell()
        }
    }
    conceptEditor(language.IsSomeExpression) {
        "isSome".constant()
        noSpace()
        parentheses {
            concept.expr.cell()
        }
        optional {
            "as".constant()
            concept.optionalName.cell()
        }
    }
    conceptEditor(language.NoneLiteral) {
        "none".constant()
        optional {
            noSpace()
            angleBrackets {
                concept.optionalBaseType.cell()
            }
        }
    }
    conceptEditor(language.ParensExpression) {
        parentheses {
            concept.expr.cell()
        }
    }
    conceptEditor(language.SomeValExpr) {
        concept.someQuery.cell(presentation = {
            expr.read {exprNode ->
                if (exprNode == null) {
                    null
                } else {
                    exprNode.unwrap().getReferenceRoles()
                        .map { exprNode.unwrap().getReferenceTarget(it) }
                        .filterIsInstance<N_INamedConcept>()
                        .map { it.name }
                        .firstOrNull()
                }
            }
        })
    }
    conceptEditor(language.UnaryMinusExpression) {
        "-".constant()
        noSpace()
        concept.expr.cell()
    }
}