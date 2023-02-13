package org.modelix.editor.kernelf

import jetbrains.mps.lang.core.N_INamedConcept
import org.iets3.core.expr.base.CN_BinaryExpression
import org.iets3.core.expr.base.L_org_iets3_core_expr_base
import org.iets3.core.expr.lambda.L_org_iets3_core_expr_lambda
import org.modelix.editor.languageEditors

val Editor_org_iets3_core_expr_base = languageEditors(L_org_iets3_core_expr_base) {
    val abstractMinMaxAliases = mapOf(
        language.MinExpression to "min",
        language.MaxExpression to "max"
    )
    conceptEditor(language.AbstractMinMaxExpression) {
        val alias = abstractMinMaxAliases[concept]
            ?: "Unknown MinMaxExpression ${concept.untyped().getLongName()}"
        alias.constant()
        noSpace()
        parentheses {
            concept.values.horizontal(",")
        }
    }
    conceptEditor(language.AlternativesExpression) {
        "alt".constant{
            iets3keyword()
        }
        //TODO custom OpeningBracketCell
        concept.alternatives.vertical()
    }
    conceptEditor(language.AltOption) {
        concept.`when`.cell()
        "=>".constant()
        concept.then.cell()
    }
    conceptEditor(language.AlwaysValue) {
        "always".constant()
    }
    conceptEditor(language.AttemptType) {
        "attempt".constant {
            iets3keyword()
        }
        noSpace()
        angleBrackets {
            concept.successType.cell()
            noSpace()
            optional {
                "|".constant()
                concept.errorLiterals.horizontal(",")
            }
        }
    }
    conceptEditor(language.BangOp) {
        concept.expr.cell()
        noSpace()
        "!".constant()
    }
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
    conceptEditor(language.CastExpression) {
        "cast".constant {
            iets3keyword()
        }
        noSpace()
        angleBrackets {
            concept.expectedType.cell()
        }
        noSpace()
        parentheses {
            concept.expr.cell()
        }
    }
    conceptEditor(language.CheckTypeConstraintsExpr) {
        "check".constant {
            iets3keyword()
        }
        concept.failIfInvalid.flagCell("failIfInvalid")
        noSpace()
        angleBrackets {
            concept.tp.cell()
        }
        noSpace()
        parentheses {
            concept.expr.cell()
        }
    }
    conceptEditor(language.ColonCast) {
        concept.expr.cell()
        noSpace()
        ":".constant()
        noSpace()
        concept.type.cell()
    }
    conceptEditor(language.Contract) {
        "where".constant {
            iets3keyword()
        }
        concept.items.vertical()
    }
    conceptEditor(language.ContractItem) {
        "".constant()
    }
    conceptEditor(language.ConvenientBoolean) {
        concept.value.cell()
    }
    conceptEditor(language.ConvenientValueCond) {
        "if".constant()
        concept.expr.cell()
    }
    conceptEditor(language.DefaultValueExpression) {
        "default".constant {
            iets3keyword()
        }
        noSpace()
        parentheses {
            concept.type.cell()
        }
    }
    conceptEditor(language.DeRefTarget) {
        "deref".constant()
    }
    conceptEditor(language.DotExpression) {
        concept.expr.cell()
        noSpace()
        ".".constant()
        noSpace()
        concept.target.cell()
    }
    conceptEditor(language.EmptyExpression) {
        "".constant()
    }
    conceptEditor(language.EmptyType) {
        "emptytype".constant()
    }
    conceptEditor(language.EmptyValue) {
        "empty".constant()
        noSpace()
        optional {
            angleBrackets {
                concept.type.cell()
            }
        }
    }
    conceptEditor(language.ErrorExpression) {
        "error".constant {
            iets3keyword()
        }
        noSpace()
        parentheses {
            concept.error.cell()
        }
    }
    conceptEditor(language.ErrorLiteral) {
        concept.name.cell()
    }
    conceptEditor(language.ErrorTarget) {
        "err".constant()
    }
    conceptEditor(language.FailExpr) {
        "fail".constant {
            iets3keyword()
        }
        noSpace()
        optional {
            angleBrackets {
                concept.type.cell()
            }
        }
        noSpace()
        squareBrackets {
            concept.message.cell()
        }
        noSpace()
        optional {
            ",".constant()
            concept.contextExpression.cell()
        }
    }
    conceptEditor(language.GenericErrorType) {
        "error".constant {
            iets3keyword()
        }
    }
    conceptEditor(language.HasValueOp) {
        "hasValue".constant()
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
    conceptEditor(language.ImplicitValidityValExpr) {
        "it".constant()
    }
    conceptEditor(language.InlineMessage) {
        "message".constant()
        noSpace()
        squareBrackets {
            concept.text.cell()
        }
    }
    conceptEditor(language.Invariant) {
        "inv".constant {
            iets3keyword()
        }
        concept.warning.flagCell("warning")
        concept.expr.cell()
        optional {
            indented {
                ":".constant()
                concept.err.cell()
            }
        }
    }
//    conceptEditor(language.ISingleSymbolRef) {
//        //TODO
//    }
    conceptEditor(language.IsSomeExpression) {
        "isSome".constant {
            iets3keyword()
        }
        noSpace()
        parentheses {
            concept.expr.cell()
        }
        optional {
            "as".constant()
            concept.optionalName.cell()
        }
    }
    conceptEditor(language.JoinType) {
        "join".constant()
        noSpace()
        angleBrackets {
            concept.types.horizontal(",")
        }
    }
    conceptEditor(language.LogicalNotExpression) {
        "!".constant()
        noSpace()
        concept.expr.cell()
    }
    conceptEditor(language.MakeRefTarget) {
        "ref".constant()
    }
    conceptEditor(language.MessageValueType) {
        "message".constant()
    }
    conceptEditor(language.NeverValue) {
        "never".constant()
    }
    conceptEditor(language.NoneLiteral) {
        "none".constant {
            iets3keyword()
        }
        optional {
            noSpace()
            angleBrackets {
                concept.optionalBaseType.cell()
            }
        }
    }
    conceptEditor(language.NoneType) {
        "none".constant {
            iets3keyword()
        }
    }
    conceptEditor(language.OkTarget) {
        "ok".constant()
    }
    conceptEditor(language.OneOfTarget) {
        "oneOf".constant()
        noSpace()
        squareBrackets {
            concept.values.horizontal(",")
        }
    }
//    conceptEditor(language.OperatorGroup) {
//        //TODO
//    }
    val operatorTagSymbols = mapOf(
        language.AndTag to "&&",
        language.MulTag to "*",
        language.OrTag to "||",
        language.PlusTag to "+"
    )
    conceptEditor(language.OperatorTag) {
        val symbol = operatorTagSymbols[concept]
            ?: "Unknown operator tag ${concept.untyped().getLongName()}"
        symbol.constant()
    }
    conceptEditor(language.OptionType) {
        "opt".constant {
            iets3keyword()
        }
        noSpace()
        angleBrackets {
            concept.baseType.cell()
        }
    }
    conceptEditor(language.ParensExpression) {
        parentheses {
            concept.expr.cell()
        }
    }
    conceptEditor(language.PlainConstraint) {
        concept.warning.flagCell("warning")
        concept.expr.cell()
        optional {
            ":".constant()
            concept.err.cell()
        }
    }
    conceptEditor(language.Postcondition) {
        "post".constant {
            iets3keyword()
        }
        concept.warning.flagCell("warning")
        concept.expr.cell()
        optional {
            ":".constant()
            concept.err.cell()
        }
    }
    conceptEditor(language.Precondition) {
        "pre".constant {
            iets3keyword()
        }
        concept.warning.flagCell("warning")
        concept.expr.cell()
        optional {
            ":".constant()
            concept.err.cell()
        }
    }
    conceptEditor(language.ProgramLocationOp) {
        "url".constant()
    }
    conceptEditor(language.ProgramLocationType) {
        "loc".constant()
    }
    conceptEditor(language.RangeTarget) {
        "inRange".constant()
        //TODO lower exclusive
        squareBrackets {
           concept.min.cell()
           "..".constant()
           concept.max.cell()
        }
        //TODO upper exclusive
    }
//    conceptEditor(language.ReductionInspector) {
//        //TODO
//    }
    conceptEditor(language.ReferenceType) {
        "ref".constant {
            iets3keyword()
        }
        noSpace()
        angleBrackets {
            concept.baseType.cell()
        }
    }
//    conceptEditor(language.Revealer) {
//        //TODO
//    }
    conceptEditor(language.RevealerThis) {
        "revealed".constant()
    }
//    conceptEditor(language.SimpleExpressionValueInspector) {
//        //TODO
//    }
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
    conceptEditor(language.SpecificErrorType) {
        "error".constant()
        noSpace()
        angleBrackets {
            concept.error.cell()
        }
    }
    conceptEditor(language.SuccessExpression) {
        "success".constant {
            iets3keyword()
        }
        noSpace()
        parentheses {
            concept.expr.cell()
        }
    }
    conceptEditor(language.SuccessType) {
        "success".constant()
        noSpace()
        angleBrackets {
            concept.baseType.cell()
        }
    }
    conceptEditor(language.SuccessValueExpr) {
        concept.`try`.cell({name})
    }
    conceptEditor(language.ThisExpression) {
        "this".constant {
            iets3keyword()
        }
    }
    conceptEditor(language.TracerExpression) {
        squareBrackets {
            concept.traced.cell()
        }
    }
    conceptEditor(language.TryErrorClause) {
        "error".constant {
            iets3keyword()
        }
        noSpace()
        optional {
            angleBrackets {
                concept.errorLiteral.cell()
                "=>".constant()
                concept.expr.cell()
            }
        }
    }
    conceptEditor(language.TryExpression) {
        "try".constant {
            iets3keyword()
        }
        concept.complete.flagCell("complete")
        concept.expr.cell()
        optional {
            "as".constant()
            concept.optionalName.cell()
        }
        concept.successClause.cell()
        newLine()
        indented {
            concept.errorClauses.vertical()
        }
    }
    conceptEditor(language.TrySuccessClause) {
        "=>".constant()
        concept.expr.cell()
    }
    conceptEditor(language.TupleAccessExpr) {
        concept.tuple.cell()
        noSpace()
        squareBrackets {
            concept.index.cell()
        }
    }
    conceptEditor(language.TupleType) {
        squareBrackets {
            concept.elementTypes.horizontal(",")
        }
    }
    conceptEditor(language.TupleValue) {
        squareBrackets {
            concept.values.horizontal(",")
        }
    }
    conceptEditor(language.UnaryMinusExpression) {
        "-".constant()
        noSpace()
        concept.expr.cell()
    }
    conceptEditor(language.ValidityType) {
        "validity".constant()
    }
    conceptEditor(language.VoidType) {
        "void".constant()
    }
}