package org.modelix.editor.kernelf

import jetbrains.mps.lang.core.N_BaseConcept
import jetbrains.mps.lang.core.N_INamedConcept
import org.iets3.core.expr.base.CN_BinaryExpression
import org.iets3.core.expr.base.CN_IRef
import org.iets3.core.expr.base.CN_ISingleSymbolRef
import org.iets3.core.expr.base.L_org_iets3_core_expr_base
import org.iets3.core.expr.base.N_IRef
import org.iets3.core.expr.base.N_ISingleSymbolRef
import org.iets3.core.expr.lambda.L_org_iets3_core_expr_lambda
import org.modelix.aspects.behavior.polymorphicFunction
import org.modelix.aspects.languageAspects
import org.modelix.editor.conceptEditor

//val binaryExpressionSymbols by polymorphicValue<String?>(null)
val binaryExpressionSymbols by polymorphicFunction().forConcept<CN_BinaryExpression>().returns<String>()
val ISingleSymbolRef_getSymbolName by polymorphicFunction().forNode(CN_ISingleSymbolRef).returns<String>()
fun N_ISingleSymbolRef.getSymbolName() = ISingleSymbolRef_getSymbolName(this)
val IRef_target by polymorphicFunction().forNode(CN_IRef).returns<N_BaseConcept>()
fun N_IRef.target() = IRef_target(this)

val Editor_org_iets3_core_expr_base = languageAspects(L_org_iets3_core_expr_base) {
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

    binaryExpressionSymbols.implement(language.BinaryExpression) { ":${it.untyped().getShortName()}:" }
    binaryExpressionSymbols.implement(language.AssignmentExpr) { ":=" }

    binaryExpressionSymbols.implement(language.DivExpression) { "/" }
    binaryExpressionSymbols.implement(language.MinusExpression) { "-" }
    binaryExpressionSymbols.implement(language.ModExpression) { "%" }
    binaryExpressionSymbols.implement(language.MulExpression) { "*" }
    binaryExpressionSymbols.implement(language.PlusExpression) { "+" }

    binaryExpressionSymbols.implement(language.GreaterEqualsExpression) { ">=" }
    binaryExpressionSymbols.implement(language.GreaterExpression) { ">" }
    binaryExpressionSymbols.implement(language.LessEqualsExpression) { "<=>" }
    binaryExpressionSymbols.implement(language.LessExpression) { "<" }

    binaryExpressionSymbols.implement(language.EqualsExpression) { "==" }
    binaryExpressionSymbols.implement(language.NonStrictEqualsExpression) { "===" }
    binaryExpressionSymbols.implement(language.NotEqualsExpression) { "!=" }

    binaryExpressionSymbols.implement(language.LogicalAndExpression) { "&&" }
    binaryExpressionSymbols.implement(language.LogicalIffExpression) { "<=>" }
    binaryExpressionSymbols.implement(language.LogicalImpliesExpression) { "=>" }
    binaryExpressionSymbols.implement(language.LogicalOrExpression) { "||" }

    binaryExpressionSymbols.implement(language.OptionOrExpression) { "?:" }
    binaryExpressionSymbols.implement(L_org_iets3_core_expr_lambda.FunCompose) { ":o:" }

    conceptEditor(language.BinaryExpression) {
        val symbol = binaryExpressionSymbols(concept)
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
    ISingleSymbolRef_getSymbolName.implement(CN_ISingleSymbolRef) { node ->
        ((node as? N_IRef)?.target() as? N_INamedConcept)?.name ?: "<unnamed>"
    }
    conceptEditor(language.ISingleSymbolRef) {
        withNode {
            node.getSymbolName().constant()
        }
    }
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
    conceptEditor(language.PrimitiveType) {
        "alias".constant {
            iets3type()
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