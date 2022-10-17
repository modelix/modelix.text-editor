            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode
            } from "ts-model-api";
            
            import {L_org_iets3_core_base} from "./L_org_iets3_core_base";
import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
import {L_org_iets3_core_expr_toplevel} from "./L_org_iets3_core_expr_toplevel";
import {L_com_mbeddr_core_base} from "./L_com_mbeddr_core_base";
import {L_jetbrains_mps_lang_structure} from "./L_jetbrains_mps_lang_structure";
import {L_jetbrains_mps_lang_smodel} from "./L_jetbrains_mps_lang_smodel";
import {L_org_iets3_core_expr_base} from "./L_org_iets3_core_expr_base";
import {L_org_iets3_core_expr_lambda} from "./L_org_iets3_core_expr_lambda";
            
            export namespace L_org_iets3_core_expr_tests {
            
            export class L_org_iets3_core_expr_tests extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_expr_tests = new L_org_iets3_core_expr_tests();
                constructor() {
                    super("org.iets3.core.expr.tests")
                    
                    this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/543569365052056272", (node: INodeJS) => new TestOp(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/543569365052056273", (node: INodeJS) => new EqualsTestOp(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/543569365052056263", (node: INodeJS) => new TestCase(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/543569365052056266", (node: INodeJS) => new AssertTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/543569365052711055", (node: INodeJS) => new TestSuite(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/7740953487929753437", (node: INodeJS) => new NamedAssertRef(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/8219602584783477664", (node: INodeJS) => new AbstractTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/8219602584783477663", (node: INodeJS) => new ConstraintFailedTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4988624180052598016", (node: INodeJS) => new RealEqualsTestOp(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/5285810042889815162", (node: INodeJS) => new EmptyTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4137027550720478450", (node: INodeJS) => new InterpreterCoverageAssQuery(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4137027550720482705", (node: INodeJS) => new InterpreterCoverageAssResult(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4137027550727647612", (node: INodeJS) => new LanguageRef(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4137027550728847170", (node: INodeJS) => new IgnoredConcept(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1307222191605829984", (node: INodeJS) => new InterpreterCoverageAssSummary(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/5716711712470882681", (node: INodeJS) => new AbstractCoverageQuery(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/5716711712471163978", (node: INodeJS) => new StructuralCoverageAssQuery(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4372229961985642578", (node: INodeJS) => new StructuralCoverageAssResult(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/993724751390561555", (node: INodeJS) => new InterpreterValueSummary(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/993724751390561556", (node: INodeJS) => new InterpreterValueStat(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/3989687176984501316", (node: INodeJS) => new StackTraceElement(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6606989268199297429", (node: INodeJS) => new ModelsCoverageAssResult(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6606989268199275200", (node: INodeJS) => new TestCoverageAssQuery(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4874335060898975312", (node: INodeJS) => new InvalidValueTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/728332068654183158", (node: INodeJS) => new StructuralCoverageNodesFilter(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/8348727679346857616", (node: INodeJS) => new ModelsCoverageAssSummary(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1801842150043102459", (node: INodeJS) => new OptExpression(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1801842150043820356", (node: INodeJS) => new NoneExpr(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/3822903164827733126", (node: INodeJS) => new AssertOptionTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727216854047", (node: INodeJS) => new TestVector(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727216854050", (node: INodeJS) => new AbstractVectorCollection(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727219460885", (node: INodeJS) => new InputValue(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727229759527", (node: INodeJS) => new TestDataProducer(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727229780144", (node: INodeJS) => new EmptyProducer(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727231624715", (node: INodeJS) => new Outcome(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727231624728", (node: INodeJS) => new ValidOutcome(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727231624741", (node: INodeJS) => new InvalidInputOutcome(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727233042952", (node: INodeJS) => new TestSubjectAdapter(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727233043025", (node: INodeJS) => new FunctionSubjectAdapter(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727240295837", (node: INodeJS) => new OutputValue(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4173623957598806298", (node: INodeJS) => new VectorTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4173623957598806325", (node: INodeJS) => new TestItemVectorCollection(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4134712908315838151", (node: INodeJS) => new MutationEngine(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1626696085383418901", (node: INodeJS) => new MutationLog(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1626696085384423453", (node: INodeJS) => new OldNodeAnnotation(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4255172619711696022", (node: INodeJS) => new MuteEffect(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/3601476982607563045", (node: INodeJS) => new AllExpressionsFilter(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1927432956093755937", (node: INodeJS) => new NotEqualsTestOp(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6137388456558201473", (node: INodeJS) => new ForceCastExpr(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/8255774724000586868", (node: INodeJS) => new ReportTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381143750170", (node: INodeJS) => new AssertThatTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381143776832", (node: INodeJS) => new AbstractValueMatcher(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381145448848", (node: INodeJS) => new IsValidRecord(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381145831383", (node: INodeJS) => new IsInvalid(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381150106591", (node: INodeJS) => new ContainsString(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381152811617", (node: INodeJS) => new MatcherType(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381153134660", (node: INodeJS) => new MatcherForAnyType(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381153137279", (node: INodeJS) => new MatcherForAnyRecordType(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381153800385", (node: INodeJS) => new AbstractMatcherType(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1925389232535425850", (node: INodeJS) => new AndMatcher(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6400069481669081765", (node: INodeJS) => new AllNodesFilter(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6515169867106129814", (node: INodeJS) => new StructuralCoverageAssSummary(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/26846226075438262", (node: INodeJS) => new MeasureCoverageFor(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/8435714728545531793", (node: INodeJS) => new EvalAnythingExpr(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/5943749602768641284", (node: INodeJS) => new ITestItemContainer(node))
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
            export const INSTANCE = L_org_iets3_core_expr_tests.INSTANCE
            
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
                public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                
                // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            
                            // super concept: org.iets3.core.expr.tests.TestOp 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                            public setup: SingleChildAccessor<L_org_iets3_core_expr_lambda.BlockExpression> = new SingleChildAccessor(this.node, "setup")
                            public items: ChildListAccessor<L_org_iets3_core_expr_tests.AbstractTestItem> = new ChildListAccessor(this.node, "items")
                            // feature: setup 
            // feature: items 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.base.IContainsStuffToRunManually 
            // super concept: org.iets3.core.expr.toplevel.IToplevelExprContent 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IHasQualifiedName 
            // super concept: com.mbeddr.core.base.IContainerOfUniqueNames 
            // super concept: org.iets3.core.expr.tests.ITestItemContainer 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                            public set strict(value: string | undefined) {
                                this.node.setPropertyValue("strict", value)
                            }
                            public get strict(): string | undefined {
                                return this.node.getPropertyValue("strict")
                            }
                            public actual: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "actual")
                            public expected: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expected")
                            public op: SingleChildAccessor<L_org_iets3_core_expr_tests.TestOp> = new SingleChildAccessor(this.node, "op")
                            // feature: strict 
            // feature: actual 
            // feature: expected 
            // feature: op 
                            // super concept: org.iets3.core.expr.tests.AbstractTestItem 
            // super concept: jetbrains.mps.lang.test.NodeCheckOperation 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.test.INodesTestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestable 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
            // super concept: org.iets3.core.base.IOptionallyNamed 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: jetbrains.mps.lang.core.ISmartReferent 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ITraceRoot 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                            public set executeAutomatically(value: string | undefined) {
                                this.node.setPropertyValue("executeAutomatically", value)
                            }
                            public get executeAutomatically(): string | undefined {
                                return this.node.getPropertyValue("executeAutomatically")
                            }
                            public set referenceOnlyLocalStuff(value: string | undefined) {
                                this.node.setPropertyValue("referenceOnlyLocalStuff", value)
                            }
                            public get referenceOnlyLocalStuff(): string | undefined {
                                return this.node.getPropertyValue("referenceOnlyLocalStuff")
                            }
                            public set showTypes(value: string | undefined) {
                                this.node.setPropertyValue("showTypes", value)
                            }
                            public get showTypes(): string | undefined {
                                return this.node.getPropertyValue("showTypes")
                            }
                            public contents: ChildListAccessor<L_org_iets3_core_expr_toplevel.IToplevelExprContent> = new ChildListAccessor(this.node, "contents")
                            // feature: executeAutomatically 
            // feature: referenceOnlyLocalStuff 
            // feature: showTypes 
            // feature: contents 
            // feature: scoper 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
            // feature: canNotRunInProcess 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: com.mbeddr.core.base.IContainerOfUniqueNames 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: org.iets3.core.expr.base.IIgnoreTrivialErrorsContext 
            // super concept: org.iets3.core.expr.base.IDocumentableWordContainer 
            // super concept: com.mbeddr.core.base.IVisibleElementProvider 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestCase 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestable 
            // super concept: jetbrains.mps.baseLanguage.IValidIdentifier 
            // super concept: org.iets3.analysis.base.IUseSolver 
            // super concept: org.iets3.core.expr.base.ITypeOverridingContext 
            // super concept: org.iets3.core.expr.tests.ITestItemContainer 
            // super concept: com.mbeddr.core.base.IMbeddrIDERoot 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            // feature: item 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                            public set isIgnored(value: string | undefined) {
                                this.node.setPropertyValue("isIgnored", value)
                            }
                            public get isIgnored(): string | undefined {
                                return this.node.getPropertyValue("isIgnored")
                            }
                            // feature: isIgnored 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
            // feature: optionalName 
                            // super concept: jetbrains.mps.lang.test.NodeCheckOperation 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.test.INodesTestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestable 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
            // super concept: org.iets3.core.base.IOptionallyNamed 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: jetbrains.mps.lang.core.ISmartReferent 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ITraceRoot 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                            public set errmsg(value: string | undefined) {
                                this.node.setPropertyValue("errmsg", value)
                            }
                            public get errmsg(): string | undefined {
                                return this.node.getPropertyValue("errmsg")
                            }
                            public actual: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "actual")
                            // feature: errmsg 
            // feature: actual 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: optionalName 
            // feature: resolveInfo 
            // feature: isIgnored 
                            // super concept: org.iets3.core.expr.tests.AbstractTestItem 
            // super concept: jetbrains.mps.lang.test.NodeCheckOperation 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.test.INodesTestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestable 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
            // super concept: org.iets3.core.base.IOptionallyNamed 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: jetbrains.mps.lang.core.ISmartReferent 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ITraceRoot 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
            // super concept: jetbrains.mps.lang.core.ICanSuppressErrors 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set decimals(value: string | undefined) {
                                this.node.setPropertyValue("decimals", value)
                            }
                            public get decimals(): string | undefined {
                                return this.node.getPropertyValue("decimals")
                            }
                            // feature: decimals 
                            // super concept: org.iets3.core.expr.tests.TestOp 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: optionalName 
            // feature: resolveInfo 
            // feature: isIgnored 
                            // super concept: org.iets3.core.expr.tests.AbstractTestItem 
            // super concept: jetbrains.mps.lang.test.NodeCheckOperation 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.test.INodesTestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestable 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
            // super concept: org.iets3.core.base.IOptionallyNamed 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: jetbrains.mps.lang.core.ISmartReferent 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ITraceRoot 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
            // super concept: com.mbeddr.core.base.IEmpty 
            // super concept: jetbrains.mps.lang.core.ISuppressErrors 
            // super concept: com.mbeddr.core.base.IHideFromOutline 
                        }
                        
                        export class InterpreterCoverageAssQuery extends TypedNode {
                                            public set hideOK(value: string | undefined) {
                                this.node.setPropertyValue("hideOK", value)
                            }
                            public get hideOK(): string | undefined {
                                return this.node.getPropertyValue("hideOK")
                            }
                            public languages: ChildListAccessor<L_org_iets3_core_expr_tests.LanguageRef> = new ChildListAccessor(this.node, "languages")
                            public scope: SingleChildAccessor<L_com_mbeddr_core_base.AssessmentScope> = new SingleChildAccessor(this.node, "scope")
                            public ignoredConcepts: ChildListAccessor<L_org_iets3_core_expr_tests.IgnoredConcept> = new ChildListAccessor(this.node, "ignoredConcepts")
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            
                            // super concept: org.iets3.core.expr.tests.AbstractCoverageQuery 
            // super concept: com.mbeddr.core.base.AssessmentQuery 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set comment(value: string | undefined) {
                                this.node.setPropertyValue("comment", value)
                            }
                            public get comment(): string | undefined {
                                return this.node.getPropertyValue("comment")
                            }
                            // feature: comment 
            // feature: concept 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: com.mbeddr.core.base.AssessmentResult 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.ISuppressErrors 
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
                public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                public lang: SingleChildAccessor<L_jetbrains_mps_lang_smodel.LanguageIdentity> = new SingleChildAccessor(this.node, "lang")
                // feature: lang 
                // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            // feature: concept 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.IDocumentable 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set coverageRatio(value: string | undefined) {
                                this.node.setPropertyValue("coverageRatio", value)
                            }
                            public get coverageRatio(): string | undefined {
                                return this.node.getPropertyValue("coverageRatio")
                            }
                            // feature: coverageRatio 
                            // super concept: com.mbeddr.core.base.AssessmentSummary 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set hideOK(value: string | undefined) {
                                this.node.setPropertyValue("hideOK", value)
                            }
                            public get hideOK(): string | undefined {
                                return this.node.getPropertyValue("hideOK")
                            }
                            public languages: ChildListAccessor<L_org_iets3_core_expr_tests.LanguageRef> = new ChildListAccessor(this.node, "languages")
                            public scope: SingleChildAccessor<L_com_mbeddr_core_base.AssessmentScope> = new SingleChildAccessor(this.node, "scope")
                            public ignoredConcepts: ChildListAccessor<L_org_iets3_core_expr_tests.IgnoredConcept> = new ChildListAccessor(this.node, "ignoredConcepts")
                            // feature: hideOK 
            // feature: languages 
            // feature: scope 
            // feature: ignoredConcepts 
                            // super concept: com.mbeddr.core.base.AssessmentQuery 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class StructuralCoverageAssQuery extends TypedNode {
                                            public set hideOK(value: string | undefined) {
                                this.node.setPropertyValue("hideOK", value)
                            }
                            public get hideOK(): string | undefined {
                                return this.node.getPropertyValue("hideOK")
                            }
                            public languages: ChildListAccessor<L_org_iets3_core_expr_tests.LanguageRef> = new ChildListAccessor(this.node, "languages")
                            public scope: SingleChildAccessor<L_com_mbeddr_core_base.AssessmentScope> = new SingleChildAccessor(this.node, "scope")
                            public ignoredConcepts: ChildListAccessor<L_org_iets3_core_expr_tests.IgnoredConcept> = new ChildListAccessor(this.node, "ignoredConcepts")
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set highlightErrors(value: string | undefined) {
                                this.node.setPropertyValue("highlightErrors", value)
                            }
                            public get highlightErrors(): string | undefined {
                                return this.node.getPropertyValue("highlightErrors")
                            }
                            public set minTestCount(value: string | undefined) {
                                this.node.setPropertyValue("minTestCount", value)
                            }
                            public get minTestCount(): string | undefined {
                                return this.node.getPropertyValue("minTestCount")
                            }
                            public set minTestVolume(value: string | undefined) {
                                this.node.setPropertyValue("minTestVolume", value)
                            }
                            public get minTestVolume(): string | undefined {
                                return this.node.getPropertyValue("minTestVolume")
                            }
                            public set maximalMinHetero(value: string | undefined) {
                                this.node.setPropertyValue("maximalMinHetero", value)
                            }
                            public get maximalMinHetero(): string | undefined {
                                return this.node.getPropertyValue("maximalMinHetero")
                            }
                            public set minimumMaxHetero(value: string | undefined) {
                                this.node.setPropertyValue("minimumMaxHetero", value)
                            }
                            public get minimumMaxHetero(): string | undefined {
                                return this.node.getPropertyValue("minimumMaxHetero")
                            }
                            public set lookOutsideTestSuites(value: string | undefined) {
                                this.node.setPropertyValue("lookOutsideTestSuites", value)
                            }
                            public get lookOutsideTestSuites(): string | undefined {
                                return this.node.getPropertyValue("lookOutsideTestSuites")
                            }
                            public set trackProperties(value: string | undefined) {
                                this.node.setPropertyValue("trackProperties", value)
                            }
                            public get trackProperties(): string | undefined {
                                return this.node.getPropertyValue("trackProperties")
                            }
                            public nodesFilter: SingleChildAccessor<L_org_iets3_core_expr_tests.StructuralCoverageNodesFilter> = new SingleChildAccessor(this.node, "nodesFilter")
                            // feature: highlightErrors 
            // feature: minTestCount 
            // feature: minTestVolume 
            // feature: maximalMinHetero 
            // feature: minimumMaxHetero 
            // feature: lookOutsideTestSuites 
            // feature: trackProperties 
            // feature: nodesFilter 
                            // super concept: org.iets3.core.expr.tests.AbstractCoverageQuery 
            // super concept: com.mbeddr.core.base.AssessmentQuery 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set comment(value: string | undefined) {
                                this.node.setPropertyValue("comment", value)
                            }
                            public get comment(): string | undefined {
                                return this.node.getPropertyValue("comment")
                            }
                            public set testCount(value: string | undefined) {
                                this.node.setPropertyValue("testCount", value)
                            }
                            public get testCount(): string | undefined {
                                return this.node.getPropertyValue("testCount")
                            }
                            public set testVolume(value: string | undefined) {
                                this.node.setPropertyValue("testVolume", value)
                            }
                            public get testVolume(): string | undefined {
                                return this.node.getPropertyValue("testVolume")
                            }
                            public set minH(value: string | undefined) {
                                this.node.setPropertyValue("minH", value)
                            }
                            public get minH(): string | undefined {
                                return this.node.getPropertyValue("minH")
                            }
                            public set maxH(value: string | undefined) {
                                this.node.setPropertyValue("maxH", value)
                            }
                            public get maxH(): string | undefined {
                                return this.node.getPropertyValue("maxH")
                            }
                            // feature: comment 
            // feature: testCount 
            // feature: testVolume 
            // feature: minH 
            // feature: maxH 
            // feature: concept 
                            // super concept: com.mbeddr.core.base.AssessmentResult 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public valueStats: ChildListAccessor<L_org_iets3_core_expr_tests.InterpreterValueStat> = new ChildListAccessor(this.node, "valueStats")
                            // feature: valueStats 
                            // super concept: com.mbeddr.core.base.AssessmentSummary 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set label(value: string | undefined) {
                                this.node.setPropertyValue("label", value)
                            }
                            public get label(): string | undefined {
                                return this.node.getPropertyValue("label")
                            }
                            public set value(value: string | undefined) {
                                this.node.setPropertyValue("value", value)
                            }
                            public get value(): string | undefined {
                                return this.node.getPropertyValue("value")
                            }
                            // feature: label 
            // feature: value 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                // feature: node 
                // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set comment(value: string | undefined) {
                                this.node.setPropertyValue("comment", value)
                            }
                            public get comment(): string | undefined {
                                return this.node.getPropertyValue("comment")
                            }
                            // feature: comment 
            // feature: coveredNode 
                            // super concept: com.mbeddr.core.base.AssessmentResult 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class TestCoverageAssQuery extends TypedNode {
                                            public set hideOK(value: string | undefined) {
                                this.node.setPropertyValue("hideOK", value)
                            }
                            public get hideOK(): string | undefined {
                                return this.node.getPropertyValue("hideOK")
                            }
                            public languages: ChildListAccessor<L_org_iets3_core_expr_tests.LanguageRef> = new ChildListAccessor(this.node, "languages")
                            public scope: SingleChildAccessor<L_com_mbeddr_core_base.AssessmentScope> = new SingleChildAccessor(this.node, "scope")
                            public ignoredConcepts: ChildListAccessor<L_org_iets3_core_expr_tests.IgnoredConcept> = new ChildListAccessor(this.node, "ignoredConcepts")
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public measureFor: ChildListAccessor<L_org_iets3_core_expr_tests.MeasureCoverageFor> = new ChildListAccessor(this.node, "measureFor")
                            // feature: measureFor 
                            // super concept: org.iets3.core.expr.tests.AbstractCoverageQuery 
            // super concept: com.mbeddr.core.base.AssessmentQuery 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                            public set errmsg(value: string | undefined) {
                                this.node.setPropertyValue("errmsg", value)
                            }
                            public get errmsg(): string | undefined {
                                return this.node.getPropertyValue("errmsg")
                            }
                            public actual: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "actual")
                            // feature: errmsg 
            // feature: actual 
                            // super concept: org.iets3.core.expr.tests.AbstractTestItem 
            // super concept: jetbrains.mps.lang.test.NodeCheckOperation 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.test.INodesTestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestable 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
            // super concept: org.iets3.core.base.IOptionallyNamed 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: jetbrains.mps.lang.core.ISmartReferent 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ITraceRoot 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
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
                public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                
                // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set coverageRatio(value: string | undefined) {
                                this.node.setPropertyValue("coverageRatio", value)
                            }
                            public get coverageRatio(): string | undefined {
                                return this.node.getPropertyValue("coverageRatio")
                            }
                            // feature: coverageRatio 
                            // super concept: com.mbeddr.core.base.AssessmentSummary 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expr")
                            // feature: expr 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.IMayHaveEffect 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expr")
                            // feature: expr 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                            public set what(value: string | undefined) {
                                this.node.setPropertyValue("what", value)
                            }
                            public get what(): string | undefined {
                                return this.node.getPropertyValue("what")
                            }
                            public actual: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "actual")
                            // feature: what 
            // feature: actual 
                            // super concept: org.iets3.core.expr.tests.AbstractTestItem 
            // super concept: jetbrains.mps.lang.test.NodeCheckOperation 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.test.INodesTestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestable 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
            // super concept: org.iets3.core.base.IOptionallyNamed 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: jetbrains.mps.lang.core.ISmartReferent 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ITraceRoot 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public values: ChildListAccessor<L_org_iets3_core_expr_tests.InputValue> = new ChildListAccessor(this.node, "values")
                            public results: ChildListAccessor<L_org_iets3_core_expr_tests.OutputValue> = new ChildListAccessor(this.node, "results")
                            public outcome: SingleChildAccessor<L_org_iets3_core_expr_tests.Outcome> = new SingleChildAccessor(this.node, "outcome")
                            // feature: values 
            // feature: results 
            // feature: outcome 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public vectors: ChildListAccessor<L_org_iets3_core_expr_tests.TestVector> = new ChildListAccessor(this.node, "vectors")
                            public producer: SingleChildAccessor<L_org_iets3_core_expr_tests.TestDataProducer> = new SingleChildAccessor(this.node, "producer")
                            // feature: vectors 
            // feature: producer 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public value: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "value")
                            // feature: value 
            // feature: argument 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                
                // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            
                            // super concept: org.iets3.core.expr.tests.TestDataProducer 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                
                // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            
                            // super concept: org.iets3.core.expr.tests.Outcome 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            
                            // super concept: org.iets3.core.expr.tests.Outcome 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set internalUniqueID(value: string | undefined) {
                                this.node.setPropertyValue("internalUniqueID", value)
                            }
                            public get internalUniqueID(): string | undefined {
                                return this.node.getPropertyValue("internalUniqueID")
                            }
                            public mutator: SingleChildAccessor<L_org_iets3_core_expr_tests.MutationEngine> = new SingleChildAccessor(this.node, "mutator")
                            // feature: internalUniqueID 
            // feature: mutator 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class FunctionSubjectAdapter extends TypedNode {
                                            public set internalUniqueID(value: string | undefined) {
                                this.node.setPropertyValue("internalUniqueID", value)
                            }
                            public get internalUniqueID(): string | undefined {
                                return this.node.getPropertyValue("internalUniqueID")
                            }
                            public mutator: SingleChildAccessor<L_org_iets3_core_expr_tests.MutationEngine> = new SingleChildAccessor(this.node, "mutator")
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set checkResults(value: string | undefined) {
                                this.node.setPropertyValue("checkResults", value)
                            }
                            public get checkResults(): string | undefined {
                                return this.node.getPropertyValue("checkResults")
                            }
                            // feature: checkResults 
            // feature: fun 
                            // super concept: org.iets3.core.expr.tests.TestSubjectAdapter 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public value: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "value")
                            // feature: value 
            // feature: out 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                            public subject: SingleChildAccessor<L_org_iets3_core_expr_tests.TestSubjectAdapter> = new SingleChildAccessor(this.node, "subject")
                            public vectors: SingleChildAccessor<L_org_iets3_core_expr_tests.TestItemVectorCollection> = new SingleChildAccessor(this.node, "vectors")
                            // feature: subject 
            // feature: vectors 
                            // super concept: org.iets3.core.expr.tests.AbstractTestItem 
            // super concept: jetbrains.mps.lang.test.NodeCheckOperation 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.test.INodesTestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestable 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
            // super concept: org.iets3.core.base.IOptionallyNamed 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: jetbrains.mps.lang.core.ISmartReferent 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ITraceRoot 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
                        }
                        
                        export class TestItemVectorCollection extends TypedNode {
                                            public vectors: ChildListAccessor<L_org_iets3_core_expr_tests.TestVector> = new ChildListAccessor(this.node, "vectors")
                            public producer: SingleChildAccessor<L_org_iets3_core_expr_tests.TestDataProducer> = new SingleChildAccessor(this.node, "producer")
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            
                            // super concept: org.iets3.core.expr.tests.AbstractVectorCollection 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set numberOfMutations(value: string | undefined) {
                                this.node.setPropertyValue("numberOfMutations", value)
                            }
                            public get numberOfMutations(): string | undefined {
                                return this.node.getPropertyValue("numberOfMutations")
                            }
                            public set keepAll(value: string | undefined) {
                                this.node.setPropertyValue("keepAll", value)
                            }
                            public get keepAll(): string | undefined {
                                return this.node.getPropertyValue("keepAll")
                            }
                            public logs: ChildListAccessor<L_org_iets3_core_expr_tests.MutationLog> = new ChildListAccessor(this.node, "logs")
                            // feature: numberOfMutations 
            // feature: keepAll 
            // feature: logs 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            // feature: newNode 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.ISuppressErrors 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public oldNode: SingleChildAccessor<L_jetbrains_mps_lang_core.BaseConcept> = new SingleChildAccessor(this.node, "oldNode")
                            // feature: oldNode 
                            // super concept: jetbrains.mps.lang.core.NodeAttribute 
            // super concept: jetbrains.mps.lang.core.Attribute 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expr")
                            // feature: expr 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
            // super concept: org.iets3.core.expr.base.IMainSlot 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            
                            // super concept: org.iets3.core.expr.tests.StructuralCoverageNodesFilter 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            
                            // super concept: org.iets3.core.expr.tests.TestOp 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public targetType: SingleChildAccessor<L_org_iets3_core_expr_base.Type> = new SingleChildAccessor(this.node, "targetType")
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expr")
                            // feature: targetType 
            // feature: expr 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                            public actual: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "actual")
                            // feature: actual 
                            // super concept: org.iets3.core.expr.tests.AbstractTestItem 
            // super concept: jetbrains.mps.lang.test.NodeCheckOperation 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.test.INodesTestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestable 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
            // super concept: org.iets3.core.base.IOptionallyNamed 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: jetbrains.mps.lang.core.ISmartReferent 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ITraceRoot 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                            public value: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "value")
                            public matcher: SingleChildAccessor<L_org_iets3_core_expr_tests.AbstractValueMatcher> = new SingleChildAccessor(this.node, "matcher")
                            // feature: value 
            // feature: matcher 
                            // super concept: org.iets3.core.expr.tests.AbstractTestItem 
            // super concept: jetbrains.mps.lang.test.NodeCheckOperation 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.test.INodesTestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestable 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
            // super concept: org.iets3.core.base.IOptionallyNamed 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: jetbrains.mps.lang.core.ISmartReferent 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ITraceRoot 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
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
                public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                
                // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            
                            // super concept: org.iets3.core.expr.tests.AbstractValueMatcher 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public messageMatcher: SingleChildAccessor<L_org_iets3_core_expr_tests.AbstractValueMatcher> = new SingleChildAccessor(this.node, "messageMatcher")
                            // feature: messageMatcher 
                            // super concept: org.iets3.core.expr.tests.AbstractValueMatcher 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public text: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "text")
                            // feature: text 
                            // super concept: org.iets3.core.expr.tests.AbstractValueMatcher 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public forType: SingleChildAccessor<L_jetbrains_mps_lang_core.BaseConcept> = new SingleChildAccessor(this.node, "forType")
                            // feature: forType 
                            // super concept: org.iets3.core.expr.tests.AbstractMatcherType 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            
                            // super concept: org.iets3.core.expr.tests.AbstractMatcherType 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            
                            // super concept: org.iets3.core.expr.tests.AbstractMatcherType 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                
                // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public left: SingleChildAccessor<L_org_iets3_core_expr_tests.AbstractValueMatcher> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<L_org_iets3_core_expr_tests.AbstractValueMatcher> = new SingleChildAccessor(this.node, "right")
                            // feature: left 
            // feature: right 
                            // super concept: org.iets3.core.expr.tests.AbstractValueMatcher 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            
                            // super concept: org.iets3.core.expr.tests.StructuralCoverageNodesFilter 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set coverageRatio(value: string | undefined) {
                                this.node.setPropertyValue("coverageRatio", value)
                            }
                            public get coverageRatio(): string | undefined {
                                return this.node.getPropertyValue("coverageRatio")
                            }
                            // feature: coverageRatio 
                            // super concept: com.mbeddr.core.base.AssessmentSummary 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set completeSubtree(value: string | undefined) {
                                this.node.setPropertyValue("completeSubtree", value)
                            }
                            public get completeSubtree(): string | undefined {
                                return this.node.getPropertyValue("completeSubtree")
                            }
                            // feature: completeSubtree 
            // feature: concept 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public anything: SingleChildAccessor<L_jetbrains_mps_lang_core.BaseConcept> = new SingleChildAccessor(this.node, "anything")
                            // feature: anything 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
                        }
            
            export class ITestItemContainer extends TypedNode {
                
                
                
            }
            }