package org.modelix.editor.kernelf

import org.iets3.core.expr.lambda.L_org_iets3_core_expr_lambda
import org.modelix.aspects.languageAspects
import org.modelix.editor.conceptEditor

val Editor_org_iets3_core_expr_lambda = languageAspects(L_org_iets3_core_expr_lambda) {
    conceptEditor(language.ArgRef) {
        concept.arg.cell({ name })
    }
    conceptEditor(language.AssertExpr) {
        "assert".constant {
            iets3keyword()
        }
        noSpace()
        parentheses {
            concept.expr.cell()
        }
    }
//    conceptEditor(language.AttachedConstraint) {
//        //TODO
//    }
    conceptEditor(language.BlockExpression) {
        foldable("{...}") {
            curlyBrackets {
                newLine()
                indented {
                    concept.expressions.vertical()
                }
                newLine()
            }
        }
    }
    conceptEditor(language.BindOp) {
        "bind".constant()
        noSpace()
        parentheses {
            concept.args.horizontal(",")
        }
    }
    conceptEditor(language.CapturedValue) {
        "!!!user objects are not supported!!!".constant()
    }
    conceptEditor(language.ExecOp) {
        "exec".constant()
        noSpace()
        parentheses {
            concept.args.horizontal(",")
        }
    }
    conceptEditor(language.FunctionArgument) {
        concept.name.cell()
        noSpace()
        optional {
            ":".constant()
            concept.type.cell()
        }
    }
    conceptEditor(language.FunctionStyleExecOp) {
        concept.`fun`.cell()
        noSpace()
        parentheses {
            concept.args.horizontal(",")
        }
    }
    conceptEditor(language.FunctionType) {
        parentheses {
            concept.argumentTypes.horizontal(",")
            "=>".constant()
            optional {
                concept.effect.cell()
            }
            concept.returnType.cell()
        }
    }
    conceptEditor(language.FunResExpr) {
        "res".constant {
            iets3keyword()
        }
    }
    conceptEditor(language.LambdaArg) {
        concept.name.cell()
        noSpace()
        optional {
            ":".constant()
            concept.type.cell()
        }
    }
    conceptEditor(language.LambdaArgRef) {
        concept.arg.cell({ name })
    }
    conceptEditor(language.LambdaExpression) {
        brackets(true, "|", "|") {
            concept.args.horizontal(",")
            "=>".constant()
            concept.expression.cell()
        }
    }
    conceptEditor(language.LocalVarDeclExpr) {
        "var".constant {
            iets3keyword()
        }
        optional {
            noSpace()
            ":".constant()
            concept.type.cell()
        }
        optional {
            concept.contract.cell()
        }
        "=".constant()
        concept.expr.cell()
    }
    conceptEditor(language.LocalVarRef) {
        concept.`var`.cell({ name })
    }
    conceptEditor(language.ShortLambdaExpression) {
        brackets(true, "|", "|") {
            concept.expression.cell()
        }
    }
    conceptEditor(language.ShortLambdaItExpression) {
        "it".constant()
    }
    conceptEditor(language.ValExpression) {
        "val".constant {
            iets3keyword()
        }
        concept.name.cell()
        optional {
            ":".constant()
            concept.type.cell()
        }
        optional {
            concept.contract.cell()
        }
        "=".constant()
        concept.expr.cell()
    }
    conceptEditor(language.ValRef) {
        concept.`val`.cell({ name })
    }
    conceptEditor(language.ValValueInContractExpr) {
        "it".constant()
    }
}