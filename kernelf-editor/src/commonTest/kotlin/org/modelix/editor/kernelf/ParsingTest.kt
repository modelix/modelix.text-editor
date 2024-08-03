package org.modelix.editor.kernelf

import org.iets3.core.expr.base.L_org_iets3_core_expr_base
import org.iets3.core.expr.collections.L_org_iets3_core_expr_collections
import org.iets3.core.expr.lambda.L_org_iets3_core_expr_lambda
import org.iets3.core.expr.path.L_org_iets3_core_expr_path
import org.iets3.core.expr.repl.L_org_iets3_core_expr_repl
import org.iets3.core.expr.simpleTypes.L_org_iets3_core_expr_simpleTypes
import org.iets3.core.expr.simpleTypes.tests.L_org_iets3_core_expr_simpleTypes_tests
import org.iets3.core.expr.tests.L_org_iets3_core_expr_tests
import org.iets3.core.expr.toplevel.L_org_iets3_core_expr_toplevel
import org.modelix.editor.EditorEngine
import org.modelix.editor.celltemplate.ChildCellTemplate
import org.modelix.editor.celltemplate.leafSymbols
import org.modelix.incremental.IncrementalEngine
import org.modelix.kernelf.KernelfLanguages
import org.modelix.model.api.IConcept
import org.modelix.model.api.getInstantiatableSubConcepts
import org.modelix.parser.Grammar
import org.modelix.parser.LRParser
import org.modelix.parser.NodeSymbol
import org.modelix.parser.ProductionRule
import org.modelix.parser.createParser
import kotlin.test.Ignore
import kotlin.test.Test
import kotlin.time.measureTime

class ParsingTest {

    @Test fun test() = runExpressionTest("1+2")

    @Test fun test2() = runExpressionTest("1 + 2")

    @Test fun test3() = runExpressionTest("11 + 22")

    @Test fun test4() = runExpressionTest("11 + 22 * 33")

    @Test fun test5() = runExpressionTest("(11 + 22) * 33")

    @Test fun test6() = runExpressionTest("(11+22)*33")

    @Test fun test7() = runExpressionTest("( 11+22 )*33")

    @Test fun test8() = runExpressionTest("(11+22)*-33")

    @Test fun test9() = runExpressionTest("(11 + 22) * -33")

    @Test fun test10() = runExpressionTest("(11 + 22) *- 33")

    @Test fun test11() = runExpressionTest("123.456 + true")

    @Test fun test12() = runExpressionTest(""""abc" + "def"""")

    @Ignore
    @Test
    fun test13() = runExpressionTest(""""abc\" + \"def"""")

    @Test fun test14() = runExpressionTest(""""abc" + " """")

    @Test fun test15() = runExpressionTest(""""abc" + """"")

    @Test fun test16() = runExpressionTest("""isSome(10)""")

    @Test fun test17() = runExpressionTest("""if 10 > 20 then 15""")

    @Test fun test18() = runExpressionTest("""if 10 > 20 then 15 else 900""")

    @Test fun test19() = runExpressionTest("""list(10, 20, 30)""")

    @Test fun test20() = runExpressionTest("""list(10)""")

    @Test fun test21() = runExpressionTest("""list<number>(10, 20, 30)""")

    @Test fun test22() = runExpressionTest("""list(10, 20)""")

    @Test fun test23() = runExpressionTest("""[10, 20]""")

    @Test fun test24() = runExpressionTest("""[10, 20, 30]""")

    @Test fun test25() = runExpressionTest("""val abc: opt<number> = none""")
    @Test fun test26() = runExpressionTest("""val abc: (number, string => number) = none""")


    @Test fun completion1() = runExpressionTest("""1 + """, complete = true)
    @Test fun completion2() = runExpressionTest("""if """, complete = true)
    @Test fun completion3() = runExpressionTest("""list(10,""", complete = true)

    @Test fun printExcludedConcepts() {
        runExpressionTest("1")
        excludedConcepts.forEach { println("""L_${it.language!!.getName().replace(".", "_")}.${it.getShortName()}.untyped(),""") }
    }

    private fun runExpressionTest(inputString: String, complete: Boolean = false) {
        val parseTree = parser.parse(inputString, complete)
        println(measureTime { parser.parse(inputString, complete) })
        println(parseTree)
    }


    companion object {
        var parser: LRParser

        private val includedConcepts = setOf<IConcept>(
            L_org_iets3_core_expr_base.Expression.untyped(),
            L_org_iets3_core_expr_base.PlusExpression.untyped(),
            L_org_iets3_core_expr_base.MinusExpression.untyped(),
            L_org_iets3_core_expr_base.MulExpression.untyped(),
            L_org_iets3_core_expr_base.DivExpression.untyped(),
            L_org_iets3_core_expr_base.ParensExpression.untyped(),
            L_org_iets3_core_expr_base.UnaryMinusExpression.untyped(),
            L_org_iets3_core_expr_base.IsSomeExpression.untyped(),
            L_org_iets3_core_expr_base.IfExpression.untyped(),
            L_org_iets3_core_expr_base.IfElseSection.untyped(),
            L_org_iets3_core_expr_base.GreaterExpression.untyped(),
            L_org_iets3_core_expr_base.GreaterEqualsExpression.untyped(),
            L_org_iets3_core_expr_base.LessExpression.untyped(),
            L_org_iets3_core_expr_base.LessEqualsExpression.untyped(),
            L_org_iets3_core_expr_collections.ListLiteral.untyped(),
            L_org_iets3_core_expr_collections.ElementTypeConstraintSingle.untyped(),
            L_org_iets3_core_expr_base.TupleValue.untyped(),
            L_org_iets3_core_expr_simpleTypes.NumberLiteral.untyped(),
            L_org_iets3_core_expr_simpleTypes.TrueLiteral.untyped(),
            L_org_iets3_core_expr_simpleTypes.FalseLiteral.untyped(),
            L_org_iets3_core_expr_simpleTypes.StringLiteral.untyped(),
            L_org_iets3_core_expr_simpleTypes.NumberType.untyped(),

            L_org_iets3_core_expr_base.AltOption.untyped(),
            L_org_iets3_core_expr_base.AlternativesExpression.untyped(),
            L_org_iets3_core_expr_base.AlwaysValue.untyped(),
            L_org_iets3_core_expr_base.AndTag.untyped(),
            L_org_iets3_core_expr_base.AssignmentExpr.untyped(),
            L_org_iets3_core_expr_base.AttemptType.untyped(),
            L_org_iets3_core_expr_base.BangOp.untyped(),
            L_org_iets3_core_expr_base.CastExpression.untyped(),
            L_org_iets3_core_expr_base.CheckTypeConstraintsExpr.untyped(),
            L_org_iets3_core_expr_base.ColonCast.untyped(),
            L_org_iets3_core_expr_base.Contract.untyped(),
            L_org_iets3_core_expr_base.ConvenientBoolean.untyped(),
            L_org_iets3_core_expr_base.ConvenientValueCond.untyped(),
            L_org_iets3_core_expr_base.DeRefTarget.untyped(),
            L_org_iets3_core_expr_base.DefaultValueExpression.untyped(),
            L_org_iets3_core_expr_base.DotExpression.untyped(),
            L_org_iets3_core_expr_base.EmptyExpression.untyped(),
            L_org_iets3_core_expr_base.EmptyType.untyped(),
            L_org_iets3_core_expr_base.EmptyValue.untyped(),
            L_org_iets3_core_expr_base.EqualsExpression.untyped(),
            L_org_iets3_core_expr_base.ErrorExpression.untyped(),
            L_org_iets3_core_expr_base.ErrorLiteral.untyped(),
            L_org_iets3_core_expr_base.ErrorTarget.untyped(),
            L_org_iets3_core_expr_base.FailExpr.untyped(),
            L_org_iets3_core_expr_base.GenericErrorType.untyped(),
            L_org_iets3_core_expr_base.HasValueOp.untyped(),
            L_org_iets3_core_expr_base.ImplicitValidityValExpr.untyped(),
            L_org_iets3_core_expr_base.InlineMessage.untyped(),
            L_org_iets3_core_expr_base.Invariant.untyped(),
            L_org_iets3_core_expr_base.JoinType.untyped(),
            L_org_iets3_core_expr_base.LogicalAndExpression.untyped(),
            L_org_iets3_core_expr_base.LogicalIffExpression.untyped(),
            L_org_iets3_core_expr_base.LogicalImpliesExpression.untyped(),
            L_org_iets3_core_expr_base.LogicalNotExpression.untyped(),
            L_org_iets3_core_expr_base.LogicalOrExpression.untyped(),
            L_org_iets3_core_expr_base.MakeRefTarget.untyped(),
            L_org_iets3_core_expr_base.MessageValueType.untyped(),
            L_org_iets3_core_expr_base.ModExpression.untyped(),
            L_org_iets3_core_expr_base.MulTag.untyped(),
            L_org_iets3_core_expr_base.NeverValue.untyped(),
            L_org_iets3_core_expr_base.NonStrictEqualsExpression.untyped(),
            L_org_iets3_core_expr_base.NoneLiteral.untyped(),
            L_org_iets3_core_expr_base.NoneType.untyped(),
            L_org_iets3_core_expr_base.NotEqualsExpression.untyped(),
            L_org_iets3_core_expr_base.OkTarget.untyped(),
            L_org_iets3_core_expr_base.OneOfTarget.untyped(),
            L_org_iets3_core_expr_base.OperatorGroup.untyped(),
            L_org_iets3_core_expr_base.OptionOrExpression.untyped(),
            L_org_iets3_core_expr_base.OptionType.untyped(),
            L_org_iets3_core_expr_base.OrTag.untyped(),
            L_org_iets3_core_expr_base.PlainConstraint.untyped(),
            L_org_iets3_core_expr_base.PlusTag.untyped(),
            L_org_iets3_core_expr_base.Postcondition.untyped(),
            L_org_iets3_core_expr_base.Precondition.untyped(),
            L_org_iets3_core_expr_base.ProgramLocationType.untyped(),
            L_org_iets3_core_expr_base.RangeTarget.untyped(),
            L_org_iets3_core_expr_base.ReferenceType.untyped(),
            L_org_iets3_core_expr_base.RevealerThis.untyped(),
            L_org_iets3_core_expr_base.SomeValExpr.untyped(),
            L_org_iets3_core_expr_base.SpecificErrorType.untyped(),
            L_org_iets3_core_expr_base.SuccessExpression.untyped(),
            L_org_iets3_core_expr_base.SuccessType.untyped(),
            L_org_iets3_core_expr_base.SuccessValueExpr.untyped(),
            L_org_iets3_core_expr_base.ThisExpression.untyped(),
            L_org_iets3_core_expr_base.TracerExpression.untyped(),
            L_org_iets3_core_expr_base.TryErrorClause.untyped(),
            L_org_iets3_core_expr_base.TryExpression.untyped(),
            L_org_iets3_core_expr_base.TrySuccessClause.untyped(),
            L_org_iets3_core_expr_base.TupleAccessExpr.untyped(),
            L_org_iets3_core_expr_base.TupleType.untyped(),
            L_org_iets3_core_expr_base.ValidityType.untyped(),
            L_org_iets3_core_expr_base.VoidType.untyped(),
            L_org_iets3_core_expr_collections.AsSingletonList.untyped(),
            L_org_iets3_core_expr_collections.BracketOp.untyped(),
            L_org_iets3_core_expr_collections.CollectionSizeSpec.untyped(),
            L_org_iets3_core_expr_collections.CollectionType.untyped(),
            L_org_iets3_core_expr_collections.ElementTypeConstraintMap.untyped(),
            L_org_iets3_core_expr_collections.IndexExpr.untyped(),
            L_org_iets3_core_expr_collections.KeyValuePair.untyped(),
            L_org_iets3_core_expr_collections.ListInsertOp.untyped(),
            L_org_iets3_core_expr_collections.ListPickOp.untyped(),
            L_org_iets3_core_expr_collections.ListType.untyped(),
            L_org_iets3_core_expr_collections.MapKeysOp.untyped(),
            L_org_iets3_core_expr_collections.MapLiteral.untyped(),
            L_org_iets3_core_expr_collections.MapSizeOp.untyped(),
            L_org_iets3_core_expr_collections.MapType.untyped(),
            L_org_iets3_core_expr_collections.MapValuesOp.untyped(),
            L_org_iets3_core_expr_collections.MaxOp.untyped(),
            L_org_iets3_core_expr_collections.MinOp.untyped(),
            L_org_iets3_core_expr_collections.SetLiteral.untyped(),
            L_org_iets3_core_expr_collections.SetType.untyped(),
            L_org_iets3_core_expr_collections.SimpleSortOp.untyped(),
            L_org_iets3_core_expr_collections.UpToTarget.untyped(),
            L_org_iets3_core_expr_lambda.ArgRef.untyped(),
            L_org_iets3_core_expr_lambda.AssertExpr.untyped(),
            L_org_iets3_core_expr_lambda.BindOp.untyped(),
            L_org_iets3_core_expr_lambda.BlockExpression.untyped(),
            L_org_iets3_core_expr_lambda.CapturedValue.untyped(),
            L_org_iets3_core_expr_lambda.ExecOp.untyped(),
            L_org_iets3_core_expr_lambda.FunCompose.untyped(),
            L_org_iets3_core_expr_lambda.FunResExpr.untyped(),
            L_org_iets3_core_expr_lambda.FunctionArgument.untyped(),
            L_org_iets3_core_expr_lambda.FunctionStyleExecOp.untyped(),
            L_org_iets3_core_expr_lambda.FunctionType.untyped(),
            L_org_iets3_core_expr_lambda.LambdaArg.untyped(),
            L_org_iets3_core_expr_lambda.LambdaArgRef.untyped(),
            L_org_iets3_core_expr_lambda.LambdaExpression.untyped(),
            L_org_iets3_core_expr_lambda.LocalVarDeclExpr.untyped(),
            L_org_iets3_core_expr_lambda.LocalVarRef.untyped(),
            L_org_iets3_core_expr_lambda.ShortLambdaExpression.untyped(),
            L_org_iets3_core_expr_lambda.ShortLambdaItExpression.untyped(),
            L_org_iets3_core_expr_lambda.ValExpression.untyped(),
            L_org_iets3_core_expr_lambda.ValRef.untyped(),
            L_org_iets3_core_expr_lambda.ValValueInContractExpr.untyped(),
            L_org_iets3_core_expr_simpleTypes.BoundsExpression.untyped(),
            L_org_iets3_core_expr_simpleTypes.ConvertPrecisionNumberExpression.untyped(),
            L_org_iets3_core_expr_simpleTypes.InterpolExprWord.untyped(),
            L_org_iets3_core_expr_simpleTypes.LimitExpression.untyped(),
            L_org_iets3_core_expr_simpleTypes.NumberPrecSpec.untyped(),
            L_org_iets3_core_expr_simpleTypes.NumberRangeSpec.untyped(),
            L_org_iets3_core_expr_simpleTypes.RoundDownRoundingMode.untyped(),
            L_org_iets3_core_expr_simpleTypes.RoundHalfUpRoundingMode.untyped(),
            L_org_iets3_core_expr_simpleTypes.RoundUpRoundingMode.untyped(),
            L_org_iets3_core_expr_simpleTypes.StringContainsTarget.untyped(),
            L_org_iets3_core_expr_simpleTypes.StringEndsWithTarget.untyped(),
            L_org_iets3_core_expr_simpleTypes.StringInterpolationExpr.untyped(),
            L_org_iets3_core_expr_simpleTypes.StringLengthTarget.untyped(),
            L_org_iets3_core_expr_simpleTypes.StringStartsWithTarget.untyped(),
            L_org_iets3_core_expr_simpleTypes.StringToIntTarget.untyped(),
            L_org_iets3_core_expr_simpleTypes.StringType.untyped(),
            L_org_iets3_core_expr_simpleTypes.ToleranceExpr.untyped(),
            L_org_iets3_core_expr_simpleTypes.TruncateRoundingMode.untyped(),
//            L_de_slisson_mps_richtext.Text.untyped(),
//            L_de_slisson_mps_richtext.Word.untyped(),
//            L_jetbrains_mps_lang_test.TestInfo.untyped(),
//            L_org_iets3_core_expr_mutable.AssignmentExpr_old.untyped(),
            L_org_iets3_core_expr_path.PathElement.untyped(),
            L_org_iets3_core_expr_repl.CellArg.untyped(),
            L_org_iets3_core_expr_repl.CellArgRef.untyped(),
            L_org_iets3_core_expr_repl.CellConstraint.untyped(),
            L_org_iets3_core_expr_repl.CellConstraintIt.untyped(),
            L_org_iets3_core_expr_repl.CellLabel.untyped(),
            L_org_iets3_core_expr_repl.CoordCellRef.untyped(),
            L_org_iets3_core_expr_repl.LabelExpression.untyped(),
            L_org_iets3_core_expr_repl.MakeListExpr.untyped(),
            L_org_iets3_core_expr_repl.MakeRecordExpr.untyped(),
            L_org_iets3_core_expr_repl.NamedCellRef.untyped(),
            L_org_iets3_core_expr_repl.NamedSheetFinder.untyped(),
            L_org_iets3_core_expr_repl.QuoteExpr.untyped(),
            L_org_iets3_core_expr_repl.ReplEntryRefByName.untyped(),
            L_org_iets3_core_expr_repl.SheetEmbedExpr.untyped(),
            L_org_iets3_core_expr_repl.SheetTestItem.untyped(),
            L_org_iets3_core_expr_repl.SheetType.untyped(),
            L_org_iets3_core_expr_repl.UpwardsSheetFinder.untyped(),
            L_org_iets3_core_expr_simpleTypes_tests.EqClassProducer.untyped(),
            L_org_iets3_core_expr_simpleTypes_tests.RandomVectorProducer.untyped(),
            L_org_iets3_core_expr_tests.AllExpressionsFilter.untyped(),
            L_org_iets3_core_expr_tests.AllNodesFilter.untyped(),
            L_org_iets3_core_expr_tests.AndMatcher.untyped(),
            L_org_iets3_core_expr_tests.AssertOptionTestItem.untyped(),
            L_org_iets3_core_expr_tests.AssertTestItem.untyped(),
            L_org_iets3_core_expr_tests.AssertThatTestItem.untyped(),
            L_org_iets3_core_expr_tests.ConstraintFailedTestItem.untyped(),
            L_org_iets3_core_expr_tests.ContainsString.untyped(),
            L_org_iets3_core_expr_tests.EmptyProducer.untyped(),

            L_org_iets3_core_expr_tests.EmptyTestItem.untyped(),
            L_org_iets3_core_expr_tests.EqualsTestOp.untyped(),
            L_org_iets3_core_expr_tests.EvalAnythingExpr.untyped(),

            L_org_iets3_core_expr_tests.ForceCastExpr.untyped(),
            L_org_iets3_core_expr_tests.FunctionSubjectAdapter.untyped(),
            L_org_iets3_core_expr_tests.IgnoredConcept.untyped(),

            L_org_iets3_core_expr_tests.InputValue.untyped(),
            L_org_iets3_core_expr_tests.InterpreterCoverageAssResult.untyped(),
            L_org_iets3_core_expr_tests.InterpreterCoverageAssSummary.untyped(),
            L_org_iets3_core_expr_tests.InterpreterValueStat.untyped(),
            L_org_iets3_core_expr_tests.InterpreterValueSummary.untyped(),
            L_org_iets3_core_expr_tests.InvalidInputOutcome.untyped(),
            L_org_iets3_core_expr_tests.InvalidValueTestItem.untyped(),

            L_org_iets3_core_expr_tests.IsInvalid.untyped(),
            L_org_iets3_core_expr_tests.IsValidRecord.untyped(),
            L_org_iets3_core_expr_tests.LanguageRef.untyped(),
            L_org_iets3_core_expr_tests.MatcherForAnyRecordType.untyped(),
            L_org_iets3_core_expr_tests.MatcherForAnyType.untyped(),
            L_org_iets3_core_expr_tests.MatcherType.untyped(),
            L_org_iets3_core_expr_tests.MeasureCoverageFor.untyped(),
            L_org_iets3_core_expr_tests.ModelsCoverageAssSummary.untyped(),
            L_org_iets3_core_expr_tests.MutationEngine.untyped(),
            L_org_iets3_core_expr_tests.MutationLog.untyped(),
            L_org_iets3_core_expr_tests.MuteEffect.untyped(),
            L_org_iets3_core_expr_tests.NamedAssertRef.untyped(),
            L_org_iets3_core_expr_tests.NoneExpr.untyped(),
            L_org_iets3_core_expr_tests.OptExpression.untyped(),
            L_org_iets3_core_expr_tests.OutputValue.untyped(),
            L_org_iets3_core_expr_tests.RealEqualsTestOp.untyped(),
            L_org_iets3_core_expr_tests.ReportTestItem.untyped(),
            L_org_iets3_core_expr_tests.StructuralCoverageAssQuery.untyped(),
            L_org_iets3_core_expr_tests.StructuralCoverageAssResult.untyped(),
            L_org_iets3_core_expr_tests.StructuralCoverageAssSummary.untyped(),
            L_org_iets3_core_expr_tests.TestCase.untyped(),
            L_org_iets3_core_expr_tests.TestCoverageAssQuery.untyped(),
            L_org_iets3_core_expr_tests.TestSuite.untyped(),
            L_org_iets3_core_expr_tests.ValidOutcome.untyped(),
            L_org_iets3_core_expr_tests.VectorTestItem.untyped(),
            L_org_iets3_core_expr_toplevel.AllLitList.untyped(),
            L_org_iets3_core_expr_toplevel.Constant.untyped(),
            L_org_iets3_core_expr_toplevel.ConstantRef.untyped(),
            L_org_iets3_core_expr_toplevel.EmptyMember.untyped(),
            L_org_iets3_core_expr_toplevel.EmptyToplevelContent.untyped(),
            L_org_iets3_core_expr_toplevel.EnumIndexOp.untyped(),
            L_org_iets3_core_expr_toplevel.EnumIsInSelector.untyped(),
            L_org_iets3_core_expr_toplevel.EnumIsInTarget.untyped(),
            L_org_iets3_core_expr_toplevel.EnumIsTarget.untyped(),
            L_org_iets3_core_expr_toplevel.EnumLiteral.untyped(),
            L_org_iets3_core_expr_toplevel.EnumLiteralRef.untyped(),
            L_org_iets3_core_expr_toplevel.EnumType.untyped(),
            L_org_iets3_core_expr_toplevel.EnumValueAccessor.untyped(),
            L_org_iets3_core_expr_toplevel.ExtensionFunctionCall.untyped(),
            L_org_iets3_core_expr_toplevel.FieldSetter.untyped(),
            L_org_iets3_core_expr_toplevel.FunRef.untyped(),
            L_org_iets3_core_expr_toplevel.Function.untyped(),
            L_org_iets3_core_expr_toplevel.FunctionCall.untyped(),
            L_org_iets3_core_expr_toplevel.GroupKeyTarget.untyped(),
            L_org_iets3_core_expr_toplevel.GroupMembersTarget.untyped(),
            L_org_iets3_core_expr_toplevel.GroupType.untyped(),
            L_org_iets3_core_expr_toplevel.InlineRecordMemberAccess.untyped(),
            L_org_iets3_core_expr_toplevel.InlineRecordType.untyped(),
            L_org_iets3_core_expr_toplevel.Library.untyped(),
            L_org_iets3_core_expr_toplevel.NewValueSetter.untyped(),
            L_org_iets3_core_expr_toplevel.OldMemberRef.untyped(),
            L_org_iets3_core_expr_toplevel.OldValueExpr.untyped(),
            L_org_iets3_core_expr_toplevel.ProjectIt.untyped(),
            L_org_iets3_core_expr_toplevel.ProjectMember.untyped(),
            L_org_iets3_core_expr_toplevel.ProjectOp.untyped(),
            L_org_iets3_core_expr_toplevel.QualifierRef.untyped(),
            L_org_iets3_core_expr_toplevel.RecordChangeTarget.untyped(),
            L_org_iets3_core_expr_toplevel.RecordDeclaration.untyped(),
            L_org_iets3_core_expr_toplevel.RecordLiteral.untyped(),
            L_org_iets3_core_expr_toplevel.RecordMember.untyped(),
            L_org_iets3_core_expr_toplevel.RecordMemberRefInConstraint.untyped(),
            L_org_iets3_core_expr_toplevel.RecordType.untyped(),
            L_org_iets3_core_expr_toplevel.RecordTypeAdapter.untyped(),
            L_org_iets3_core_expr_toplevel.ReferenceableFlag.untyped(),
            L_org_iets3_core_expr_toplevel.SectionMarker.untyped(),
            L_org_iets3_core_expr_toplevel.Typedef.untyped(),
            L_org_iets3_core_expr_toplevel.TypedefContractValExpr.untyped(),
            L_org_iets3_core_expr_toplevel.TypedefType.untyped(),
        )
        private val excludedConcepts = mutableSetOf<IConcept>()

        init {
            KernelfLanguages.registerAll()

            val engine = EditorEngine(IncrementalEngine())
            KernelfEditor.register(engine)

            val startConcept = L_org_iets3_core_expr_base.Expression.untyped()
            val grammar = Grammar()
            loadRulesFromSubconcepts(grammar, startConcept, HashSet(), engine)
            parser = grammar.createParser(startConcept)

            KernelfLanguages.languages.forEach { it.unregister() }
        }

        private fun loadRulesFromSubconcepts(grammar: Grammar, concept: IConcept, visited: MutableSet<IConcept>, engine: EditorEngine) {
            if (visited.contains(concept)) return
            for (subConcept in concept.getInstantiatableSubConcepts()) {
                loadRules(grammar, subConcept, visited, engine)
            }
            visited.add(concept)
        }

        private fun loadRules(grammar: Grammar, concept: IConcept, visited: MutableSet<IConcept>, engine: EditorEngine) {
            if (visited.contains(concept)) return
            visited.add(concept)

            val cellModel = engine.createCellModelExcludingDefault(concept) ?: return

//            if (!includedConcepts.contains(concept)) {
//                excludedConcepts.add(concept)
//                return
//            }

            val canContainBaseConcept = cellModel.getGrammarSymbols().leafSymbols().filterIsInstance<ChildCellTemplate>()
                .any { it.link.targetConcept.getDirectSuperConcepts().isEmpty() }
            if (canContainBaseConcept) {
                // The parsing table will be too big
                return
            }

            val symbols = cellModel.getGrammarSymbols().map { it.toParserSymbol() }.toList()
            if (symbols.isNotEmpty()) {
                val rule = ProductionRule(NodeSymbol(concept), symbols)
                grammar.addRule(rule)
            }

            val childConcepts = cellModel.getGrammarSymbols().leafSymbols().filterIsInstance<ChildCellTemplate>().map { it.link.targetConcept }
            for (childConcept in childConcepts) {
                loadRulesFromSubconcepts(grammar, childConcept, visited, engine)
            }
        }
    }
}
