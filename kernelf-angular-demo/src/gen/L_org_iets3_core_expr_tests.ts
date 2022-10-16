import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  TypedNode
} from "ts-model-api";

export class L_org_iets3_core_expr_tests extends GeneratedLanguage {
    constructor() {
        super("org.iets3.core.expr.tests")
    }
    /*
    public getConcepts() {
        return [this.TestOp, this.EqualsTestOp, this.TestCase, this.AssertTestItem, this.TestSuite, this.NamedAssertRef, this.AbstractTestItem, this.ConstraintFailedTestItem, this.RealEqualsTestOp, this.EmptyTestItem, this.InterpreterCoverageAssQuery, this.InterpreterCoverageAssResult, this.LanguageRef, this.IgnoredConcept, this.InterpreterCoverageAssSummary, this.AbstractCoverageQuery, this.StructuralCoverageAssQuery, this.StructuralCoverageAssResult, this.InterpreterValueSummary, this.InterpreterValueStat, this.StackTraceElement, this.ModelsCoverageAssResult, this.TestCoverageAssQuery, this.InvalidValueTestItem, this.StructuralCoverageNodesFilter, this.ModelsCoverageAssSummary, this.OptExpression, this.NoneExpr, this.AssertOptionTestItem, this.TestVector, this.AbstractVectorCollection, this.InputValue, this.TestDataProducer, this.EmptyProducer, this.Outcome, this.ValidOutcome, this.InvalidInputOutcome, this.TestSubjectAdapter, this.FunctionSubjectAdapter, this.OutputValue, this.VectorTestItem, this.TestItemVectorCollection, this.MutationEngine, this.MutationLog, this.OldNodeAnnotation, this.MuteEffect, this.AllExpressionsFilter, this.NotEqualsTestOp, this.ForceCastExpr, this.ReportTestItem, this.AssertThatTestItem, this.AbstractValueMatcher, this.IsValidRecord, this.IsInvalid, this.ContainsString, this.MatcherType, this.MatcherForAnyType, this.MatcherForAnyRecordType, this.AbstractMatcherType, this.AndMatcher, this.AllNodesFilter, this.StructuralCoverageAssSummary, this.MeasureCoverageFor, this.EvalAnythingExpr, this.ITestItemContainer]
    }
                    public TestOp: _C_Impl_TestOp = _C_Impl_TestOp
    public EqualsTestOp: _C_Impl_EqualsTestOp = _C_Impl_EqualsTestOp
    public TestCase: _C_Impl_TestCase = _C_Impl_TestCase
    public AssertTestItem: _C_Impl_AssertTestItem = _C_Impl_AssertTestItem
    public TestSuite: _C_Impl_TestSuite = _C_Impl_TestSuite
    public NamedAssertRef: _C_Impl_NamedAssertRef = _C_Impl_NamedAssertRef
    public AbstractTestItem: _C_Impl_AbstractTestItem = _C_Impl_AbstractTestItem
    public ConstraintFailedTestItem: _C_Impl_ConstraintFailedTestItem = _C_Impl_ConstraintFailedTestItem
    public RealEqualsTestOp: _C_Impl_RealEqualsTestOp = _C_Impl_RealEqualsTestOp
    public EmptyTestItem: _C_Impl_EmptyTestItem = _C_Impl_EmptyTestItem
    public InterpreterCoverageAssQuery: _C_Impl_InterpreterCoverageAssQuery = _C_Impl_InterpreterCoverageAssQuery
    public InterpreterCoverageAssResult: _C_Impl_InterpreterCoverageAssResult = _C_Impl_InterpreterCoverageAssResult
    public LanguageRef: _C_Impl_LanguageRef = _C_Impl_LanguageRef
    public IgnoredConcept: _C_Impl_IgnoredConcept = _C_Impl_IgnoredConcept
    public InterpreterCoverageAssSummary: _C_Impl_InterpreterCoverageAssSummary = _C_Impl_InterpreterCoverageAssSummary
    public AbstractCoverageQuery: _C_Impl_AbstractCoverageQuery = _C_Impl_AbstractCoverageQuery
    public StructuralCoverageAssQuery: _C_Impl_StructuralCoverageAssQuery = _C_Impl_StructuralCoverageAssQuery
    public StructuralCoverageAssResult: _C_Impl_StructuralCoverageAssResult = _C_Impl_StructuralCoverageAssResult
    public InterpreterValueSummary: _C_Impl_InterpreterValueSummary = _C_Impl_InterpreterValueSummary
    public InterpreterValueStat: _C_Impl_InterpreterValueStat = _C_Impl_InterpreterValueStat
    public StackTraceElement: _C_Impl_StackTraceElement = _C_Impl_StackTraceElement
    public ModelsCoverageAssResult: _C_Impl_ModelsCoverageAssResult = _C_Impl_ModelsCoverageAssResult
    public TestCoverageAssQuery: _C_Impl_TestCoverageAssQuery = _C_Impl_TestCoverageAssQuery
    public InvalidValueTestItem: _C_Impl_InvalidValueTestItem = _C_Impl_InvalidValueTestItem
    public StructuralCoverageNodesFilter: _C_Impl_StructuralCoverageNodesFilter = _C_Impl_StructuralCoverageNodesFilter
    public ModelsCoverageAssSummary: _C_Impl_ModelsCoverageAssSummary = _C_Impl_ModelsCoverageAssSummary
    public OptExpression: _C_Impl_OptExpression = _C_Impl_OptExpression
    public NoneExpr: _C_Impl_NoneExpr = _C_Impl_NoneExpr
    public AssertOptionTestItem: _C_Impl_AssertOptionTestItem = _C_Impl_AssertOptionTestItem
    public TestVector: _C_Impl_TestVector = _C_Impl_TestVector
    public AbstractVectorCollection: _C_Impl_AbstractVectorCollection = _C_Impl_AbstractVectorCollection
    public InputValue: _C_Impl_InputValue = _C_Impl_InputValue
    public TestDataProducer: _C_Impl_TestDataProducer = _C_Impl_TestDataProducer
    public EmptyProducer: _C_Impl_EmptyProducer = _C_Impl_EmptyProducer
    public Outcome: _C_Impl_Outcome = _C_Impl_Outcome
    public ValidOutcome: _C_Impl_ValidOutcome = _C_Impl_ValidOutcome
    public InvalidInputOutcome: _C_Impl_InvalidInputOutcome = _C_Impl_InvalidInputOutcome
    public TestSubjectAdapter: _C_Impl_TestSubjectAdapter = _C_Impl_TestSubjectAdapter
    public FunctionSubjectAdapter: _C_Impl_FunctionSubjectAdapter = _C_Impl_FunctionSubjectAdapter
    public OutputValue: _C_Impl_OutputValue = _C_Impl_OutputValue
    public VectorTestItem: _C_Impl_VectorTestItem = _C_Impl_VectorTestItem
    public TestItemVectorCollection: _C_Impl_TestItemVectorCollection = _C_Impl_TestItemVectorCollection
    public MutationEngine: _C_Impl_MutationEngine = _C_Impl_MutationEngine
    public MutationLog: _C_Impl_MutationLog = _C_Impl_MutationLog
    public OldNodeAnnotation: _C_Impl_OldNodeAnnotation = _C_Impl_OldNodeAnnotation
    public MuteEffect: _C_Impl_MuteEffect = _C_Impl_MuteEffect
    public AllExpressionsFilter: _C_Impl_AllExpressionsFilter = _C_Impl_AllExpressionsFilter
    public NotEqualsTestOp: _C_Impl_NotEqualsTestOp = _C_Impl_NotEqualsTestOp
    public ForceCastExpr: _C_Impl_ForceCastExpr = _C_Impl_ForceCastExpr
    public ReportTestItem: _C_Impl_ReportTestItem = _C_Impl_ReportTestItem
    public AssertThatTestItem: _C_Impl_AssertThatTestItem = _C_Impl_AssertThatTestItem
    public AbstractValueMatcher: _C_Impl_AbstractValueMatcher = _C_Impl_AbstractValueMatcher
    public IsValidRecord: _C_Impl_IsValidRecord = _C_Impl_IsValidRecord
    public IsInvalid: _C_Impl_IsInvalid = _C_Impl_IsInvalid
    public ContainsString: _C_Impl_ContainsString = _C_Impl_ContainsString
    public MatcherType: _C_Impl_MatcherType = _C_Impl_MatcherType
    public MatcherForAnyType: _C_Impl_MatcherForAnyType = _C_Impl_MatcherForAnyType
    public MatcherForAnyRecordType: _C_Impl_MatcherForAnyRecordType = _C_Impl_MatcherForAnyRecordType
    public AbstractMatcherType: _C_Impl_AbstractMatcherType = _C_Impl_AbstractMatcherType
    public AndMatcher: _C_Impl_AndMatcher = _C_Impl_AndMatcher
    public AllNodesFilter: _C_Impl_AllNodesFilter = _C_Impl_AllNodesFilter
    public StructuralCoverageAssSummary: _C_Impl_StructuralCoverageAssSummary = _C_Impl_StructuralCoverageAssSummary
    public MeasureCoverageFor: _C_Impl_MeasureCoverageFor = _C_Impl_MeasureCoverageFor
    public EvalAnythingExpr: _C_Impl_EvalAnythingExpr = _C_Impl_EvalAnythingExpr
    public ITestItemContainer: _C_Impl_ITestItemContainer = _C_Impl_ITestItemContainer
    */
}

            export class TestOp extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class EqualsTestOp extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class TestCase extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
    public set resolveInfo(value: string | undefined) {
        this.node.setPropertyValue("resolveInfo", value)
    }
    public get resolveInfo(): string | undefined {
        return this.node.getPropertyValue("resolveInfo")
    }
}

export class AssertTestItem extends TypedNode {
                    public set isIgnored(value: string | undefined) {
        this.node.setPropertyValue("isIgnored", value)
    }
    public get isIgnored(): string | undefined {
        return this.node.getPropertyValue("isIgnored")
    }
    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
    public optionalName: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "optionalName")
    public set resolveInfo(value: string | undefined) {
        this.node.setPropertyValue("resolveInfo", value)
    }
    public get resolveInfo(): string | undefined {
        return this.node.getPropertyValue("resolveInfo")
    }
}

export class TestSuite extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
    public set resolveInfo(value: string | undefined) {
        this.node.setPropertyValue("resolveInfo", value)
    }
    public get resolveInfo(): string | undefined {
        return this.node.getPropertyValue("resolveInfo")
    }
    public set canNotRunInProcess(value: string | undefined) {
        this.node.setPropertyValue("canNotRunInProcess", value)
    }
    public get canNotRunInProcess(): string | undefined {
        return this.node.getPropertyValue("canNotRunInProcess")
    }
}

export class NamedAssertRef extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class AbstractTestItem extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
    public optionalName: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "optionalName")
    public set resolveInfo(value: string | undefined) {
        this.node.setPropertyValue("resolveInfo", value)
    }
    public get resolveInfo(): string | undefined {
        return this.node.getPropertyValue("resolveInfo")
    }
}

export class ConstraintFailedTestItem extends TypedNode {
                    public set isIgnored(value: string | undefined) {
        this.node.setPropertyValue("isIgnored", value)
    }
    public get isIgnored(): string | undefined {
        return this.node.getPropertyValue("isIgnored")
    }
    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
    public optionalName: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "optionalName")
    public set resolveInfo(value: string | undefined) {
        this.node.setPropertyValue("resolveInfo", value)
    }
    public get resolveInfo(): string | undefined {
        return this.node.getPropertyValue("resolveInfo")
    }
}

export class RealEqualsTestOp extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class EmptyTestItem extends TypedNode {
                    public set isIgnored(value: string | undefined) {
        this.node.setPropertyValue("isIgnored", value)
    }
    public get isIgnored(): string | undefined {
        return this.node.getPropertyValue("isIgnored")
    }
    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
    public optionalName: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "optionalName")
    public set resolveInfo(value: string | undefined) {
        this.node.setPropertyValue("resolveInfo", value)
    }
    public get resolveInfo(): string | undefined {
        return this.node.getPropertyValue("resolveInfo")
    }
}

export class InterpreterCoverageAssQuery extends TypedNode {
                    public set hideOK(value: string | undefined) {
        this.node.setPropertyValue("hideOK", value)
    }
    public get hideOK(): string | undefined {
        return this.node.getPropertyValue("hideOK")
    }
    public languages: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "languages")
    public scope: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "scope")
    public ignoredConcepts: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "ignoredConcepts")
    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class InterpreterCoverageAssResult extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class LanguageRef extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class IgnoredConcept extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class InterpreterCoverageAssSummary extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class AbstractCoverageQuery extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class StructuralCoverageAssQuery extends TypedNode {
                    public set hideOK(value: string | undefined) {
        this.node.setPropertyValue("hideOK", value)
    }
    public get hideOK(): string | undefined {
        return this.node.getPropertyValue("hideOK")
    }
    public languages: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "languages")
    public scope: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "scope")
    public ignoredConcepts: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "ignoredConcepts")
    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class StructuralCoverageAssResult extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class InterpreterValueSummary extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class InterpreterValueStat extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class StackTraceElement extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class ModelsCoverageAssResult extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class TestCoverageAssQuery extends TypedNode {
                    public set hideOK(value: string | undefined) {
        this.node.setPropertyValue("hideOK", value)
    }
    public get hideOK(): string | undefined {
        return this.node.getPropertyValue("hideOK")
    }
    public languages: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "languages")
    public scope: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "scope")
    public ignoredConcepts: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "ignoredConcepts")
    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class InvalidValueTestItem extends TypedNode {
                    public set isIgnored(value: string | undefined) {
        this.node.setPropertyValue("isIgnored", value)
    }
    public get isIgnored(): string | undefined {
        return this.node.getPropertyValue("isIgnored")
    }
    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
    public optionalName: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "optionalName")
    public set resolveInfo(value: string | undefined) {
        this.node.setPropertyValue("resolveInfo", value)
    }
    public get resolveInfo(): string | undefined {
        return this.node.getPropertyValue("resolveInfo")
    }
}

export class StructuralCoverageNodesFilter extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class ModelsCoverageAssSummary extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class OptExpression extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class NoneExpr extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class AssertOptionTestItem extends TypedNode {
                    public set isIgnored(value: string | undefined) {
        this.node.setPropertyValue("isIgnored", value)
    }
    public get isIgnored(): string | undefined {
        return this.node.getPropertyValue("isIgnored")
    }
    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
    public optionalName: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "optionalName")
    public set resolveInfo(value: string | undefined) {
        this.node.setPropertyValue("resolveInfo", value)
    }
    public get resolveInfo(): string | undefined {
        return this.node.getPropertyValue("resolveInfo")
    }
}

export class TestVector extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class AbstractVectorCollection extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class InputValue extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class TestDataProducer extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class EmptyProducer extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class Outcome extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class ValidOutcome extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class InvalidInputOutcome extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class TestSubjectAdapter extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class FunctionSubjectAdapter extends TypedNode {
                    public set internalUniqueID(value: string | undefined) {
        this.node.setPropertyValue("internalUniqueID", value)
    }
    public get internalUniqueID(): string | undefined {
        return this.node.getPropertyValue("internalUniqueID")
    }
    public mutator: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "mutator")
    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class OutputValue extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class VectorTestItem extends TypedNode {
                    public set isIgnored(value: string | undefined) {
        this.node.setPropertyValue("isIgnored", value)
    }
    public get isIgnored(): string | undefined {
        return this.node.getPropertyValue("isIgnored")
    }
    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
    public optionalName: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "optionalName")
    public set resolveInfo(value: string | undefined) {
        this.node.setPropertyValue("resolveInfo", value)
    }
    public get resolveInfo(): string | undefined {
        return this.node.getPropertyValue("resolveInfo")
    }
}

export class TestItemVectorCollection extends TypedNode {
                    public vectors: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "vectors")
    public producer: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "producer")
    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class MutationEngine extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class MutationLog extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class OldNodeAnnotation extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class MuteEffect extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class AllExpressionsFilter extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class NotEqualsTestOp extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class ForceCastExpr extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class ReportTestItem extends TypedNode {
                    public set isIgnored(value: string | undefined) {
        this.node.setPropertyValue("isIgnored", value)
    }
    public get isIgnored(): string | undefined {
        return this.node.getPropertyValue("isIgnored")
    }
    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
    public optionalName: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "optionalName")
    public set resolveInfo(value: string | undefined) {
        this.node.setPropertyValue("resolveInfo", value)
    }
    public get resolveInfo(): string | undefined {
        return this.node.getPropertyValue("resolveInfo")
    }
}

export class AssertThatTestItem extends TypedNode {
                    public set isIgnored(value: string | undefined) {
        this.node.setPropertyValue("isIgnored", value)
    }
    public get isIgnored(): string | undefined {
        return this.node.getPropertyValue("isIgnored")
    }
    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
    public optionalName: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "optionalName")
    public set resolveInfo(value: string | undefined) {
        this.node.setPropertyValue("resolveInfo", value)
    }
    public get resolveInfo(): string | undefined {
        return this.node.getPropertyValue("resolveInfo")
    }
}

export class AbstractValueMatcher extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class IsValidRecord extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class IsInvalid extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class ContainsString extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class MatcherType extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class MatcherForAnyType extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class MatcherForAnyRecordType extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class AbstractMatcherType extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class AndMatcher extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class AllNodesFilter extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class StructuralCoverageAssSummary extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class MeasureCoverageFor extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class EvalAnythingExpr extends TypedNode {
                    public set shortDescription(value: string | undefined) {
        this.node.setPropertyValue("shortDescription", value)
    }
    public get shortDescription(): string | undefined {
        return this.node.getPropertyValue("shortDescription")
    }
    public set virtualPackage(value: string | undefined) {
        this.node.setPropertyValue("virtualPackage", value)
    }
    public get virtualPackage(): string | undefined {
        return this.node.getPropertyValue("virtualPackage")
    }
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class ITestItemContainer extends TypedNode {
    
}