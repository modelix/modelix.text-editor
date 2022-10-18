            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_org_iets3_core_base} from "./L_org_iets3_core_base";
import {L_jetbrains_mps_baseLanguage_unitTest} from "./L_jetbrains_mps_baseLanguage_unitTest";
import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
import {L_org_iets3_analysis_base} from "./L_org_iets3_analysis_base";
import {L_org_iets3_core_expr_toplevel} from "./L_org_iets3_core_expr_toplevel";
import {L_com_mbeddr_core_base} from "./L_com_mbeddr_core_base";
import {L_jetbrains_mps_lang_structure} from "./L_jetbrains_mps_lang_structure";
import {L_jetbrains_mps_lang_smodel} from "./L_jetbrains_mps_lang_smodel";
import {L_org_iets3_core_expr_base} from "./L_org_iets3_core_expr_base";
import {L_jetbrains_mps_lang_test} from "./L_jetbrains_mps_lang_test";
import {L_org_iets3_core_expr_lambda} from "./L_org_iets3_core_expr_lambda";
            
            export namespace L_org_iets3_core_expr_tests {
            
            export class L_org_iets3_core_expr_tests extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_expr_tests = new L_org_iets3_core_expr_tests();
                constructor() {
                    super("org.iets3.core.expr.tests")
                    
                    this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/543569365052056272", (node: INodeJS) => new _N_TypedImpl_TestOp(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/543569365052056273", (node: INodeJS) => new _N_TypedImpl_EqualsTestOp(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/543569365052056263", (node: INodeJS) => new _N_TypedImpl_TestCase(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/543569365052056266", (node: INodeJS) => new _N_TypedImpl_AssertTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/543569365052711055", (node: INodeJS) => new _N_TypedImpl_TestSuite(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/7740953487929753437", (node: INodeJS) => new _N_TypedImpl_NamedAssertRef(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/8219602584783477664", (node: INodeJS) => new _N_TypedImpl_AbstractTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/8219602584783477663", (node: INodeJS) => new _N_TypedImpl_ConstraintFailedTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4988624180052598016", (node: INodeJS) => new _N_TypedImpl_RealEqualsTestOp(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/5285810042889815162", (node: INodeJS) => new _N_TypedImpl_EmptyTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4137027550720478450", (node: INodeJS) => new _N_TypedImpl_InterpreterCoverageAssQuery(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4137027550720482705", (node: INodeJS) => new _N_TypedImpl_InterpreterCoverageAssResult(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4137027550727647612", (node: INodeJS) => new _N_TypedImpl_LanguageRef(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4137027550728847170", (node: INodeJS) => new _N_TypedImpl_IgnoredConcept(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1307222191605829984", (node: INodeJS) => new _N_TypedImpl_InterpreterCoverageAssSummary(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/5716711712470882681", (node: INodeJS) => new _N_TypedImpl_AbstractCoverageQuery(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/5716711712471163978", (node: INodeJS) => new _N_TypedImpl_StructuralCoverageAssQuery(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4372229961985642578", (node: INodeJS) => new _N_TypedImpl_StructuralCoverageAssResult(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/993724751390561555", (node: INodeJS) => new _N_TypedImpl_InterpreterValueSummary(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/993724751390561556", (node: INodeJS) => new _N_TypedImpl_InterpreterValueStat(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/3989687176984501316", (node: INodeJS) => new _N_TypedImpl_StackTraceElement(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6606989268199297429", (node: INodeJS) => new _N_TypedImpl_ModelsCoverageAssResult(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6606989268199275200", (node: INodeJS) => new _N_TypedImpl_TestCoverageAssQuery(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4874335060898975312", (node: INodeJS) => new _N_TypedImpl_InvalidValueTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/728332068654183158", (node: INodeJS) => new _N_TypedImpl_StructuralCoverageNodesFilter(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/8348727679346857616", (node: INodeJS) => new _N_TypedImpl_ModelsCoverageAssSummary(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1801842150043102459", (node: INodeJS) => new _N_TypedImpl_OptExpression(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1801842150043820356", (node: INodeJS) => new _N_TypedImpl_NoneExpr(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/3822903164827733126", (node: INodeJS) => new _N_TypedImpl_AssertOptionTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727216854047", (node: INodeJS) => new _N_TypedImpl_TestVector(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727216854050", (node: INodeJS) => new _N_TypedImpl_AbstractVectorCollection(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727219460885", (node: INodeJS) => new _N_TypedImpl_InputValue(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727229759527", (node: INodeJS) => new _N_TypedImpl_TestDataProducer(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727229780144", (node: INodeJS) => new _N_TypedImpl_EmptyProducer(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727231624715", (node: INodeJS) => new _N_TypedImpl_Outcome(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727231624728", (node: INodeJS) => new _N_TypedImpl_ValidOutcome(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727231624741", (node: INodeJS) => new _N_TypedImpl_InvalidInputOutcome(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727233042952", (node: INodeJS) => new _N_TypedImpl_TestSubjectAdapter(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727233043025", (node: INodeJS) => new _N_TypedImpl_FunctionSubjectAdapter(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1360296727240295837", (node: INodeJS) => new _N_TypedImpl_OutputValue(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4173623957598806298", (node: INodeJS) => new _N_TypedImpl_VectorTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4173623957598806325", (node: INodeJS) => new _N_TypedImpl_TestItemVectorCollection(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4134712908315838151", (node: INodeJS) => new _N_TypedImpl_MutationEngine(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1626696085383418901", (node: INodeJS) => new _N_TypedImpl_MutationLog(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1626696085384423453", (node: INodeJS) => new _N_TypedImpl_OldNodeAnnotation(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/4255172619711696022", (node: INodeJS) => new _N_TypedImpl_MuteEffect(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/3601476982607563045", (node: INodeJS) => new _N_TypedImpl_AllExpressionsFilter(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1927432956093755937", (node: INodeJS) => new _N_TypedImpl_NotEqualsTestOp(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6137388456558201473", (node: INodeJS) => new _N_TypedImpl_ForceCastExpr(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/8255774724000586868", (node: INodeJS) => new _N_TypedImpl_ReportTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381143750170", (node: INodeJS) => new _N_TypedImpl_AssertThatTestItem(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381143776832", (node: INodeJS) => new _N_TypedImpl_AbstractValueMatcher(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381145448848", (node: INodeJS) => new _N_TypedImpl_IsValidRecord(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381145831383", (node: INodeJS) => new _N_TypedImpl_IsInvalid(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381150106591", (node: INodeJS) => new _N_TypedImpl_ContainsString(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381152811617", (node: INodeJS) => new _N_TypedImpl_MatcherType(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381153134660", (node: INodeJS) => new _N_TypedImpl_MatcherForAnyType(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381153137279", (node: INodeJS) => new _N_TypedImpl_MatcherForAnyRecordType(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6723982381153800385", (node: INodeJS) => new _N_TypedImpl_AbstractMatcherType(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/1925389232535425850", (node: INodeJS) => new _N_TypedImpl_AndMatcher(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6400069481669081765", (node: INodeJS) => new _N_TypedImpl_AllNodesFilter(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/6515169867106129814", (node: INodeJS) => new _N_TypedImpl_StructuralCoverageAssSummary(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/26846226075438262", (node: INodeJS) => new _N_TypedImpl_MeasureCoverageFor(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/8435714728545531793", (node: INodeJS) => new _N_TypedImpl_EvalAnythingExpr(node))
this.nodeWrappers.set("mps:d441fba0-f46b-43cd-b723-dad7b65da615/5943749602768641284", (node: INodeJS) => new _N_TypedImpl_ITestItemContainer(node))
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
            
                                    export interface N_TestOp extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_tests_TestOp: boolean
                            
                        }
                        
                        export namespace N_TestOp {
                            export function isInstance(node: ITypedNode): node is N_TestOp {
                                return '_is_org_iets3_core_expr_tests_TestOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TestOp extends TypedNode implements N_TestOp {
                            public _is_org_iets3_core_expr_tests_TestOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_EqualsTestOp extends N_TestOp {
                            _is_org_iets3_core_expr_tests_EqualsTestOp: boolean
                            
                        }
                        
                        export namespace N_EqualsTestOp {
                            export function isInstance(node: ITypedNode): node is N_EqualsTestOp {
                                return '_is_org_iets3_core_expr_tests_EqualsTestOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EqualsTestOp extends TypedNode implements N_EqualsTestOp {
                            public _is_org_iets3_core_expr_tests_EqualsTestOp: boolean = true
            public _is_org_iets3_core_expr_tests_TestOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_TestCase extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_base.N_IContainsStuffToRunManually, L_org_iets3_core_expr_toplevel.N_IToplevelExprContent, L_com_mbeddr_core_base.N_IContainerOfUniqueNames, N_ITestItemContainer {
                            _is_org_iets3_core_expr_tests_TestCase: boolean
                            setup: SingleChildAccessor<L_org_iets3_core_expr_lambda.N_BlockExpression>
            items: ChildListAccessor<N_AbstractTestItem>
                        }
                        
                        export namespace N_TestCase {
                            export function isInstance(node: ITypedNode): node is N_TestCase {
                                return '_is_org_iets3_core_expr_tests_TestCase' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TestCase extends TypedNode implements N_TestCase {
                            public _is_org_iets3_core_expr_tests_TestCase: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_base_IContainsStuffToRunManually: boolean = true
            public _is_org_iets3_core_expr_toplevel_IToplevelExprContent: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IHasQualifiedName: boolean = true
            public _is_com_mbeddr_core_base_IContainerOfUniqueNames: boolean = true
            public _is_org_iets3_core_expr_tests_ITestItemContainer: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                            public setup: SingleChildAccessor<L_org_iets3_core_expr_lambda.N_BlockExpression> = new SingleChildAccessor(this.node, "setup")
                            public items: ChildListAccessor<N_AbstractTestItem> = new ChildListAccessor(this.node, "items")
                        }
                        
                        
                        export interface N_AssertTestItem extends N_AbstractTestItem {
                            _is_org_iets3_core_expr_tests_AssertTestItem: boolean
                            strict: string | undefined
            actual: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
            expected: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
            op: SingleChildAccessor<N_TestOp>
                        }
                        
                        export namespace N_AssertTestItem {
                            export function isInstance(node: ITypedNode): node is N_AssertTestItem {
                                return '_is_org_iets3_core_expr_tests_AssertTestItem' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AssertTestItem extends TypedNode implements N_AssertTestItem {
                            public _is_org_iets3_core_expr_tests_AssertTestItem: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractTestItem: boolean = true
            public _is_jetbrains_mps_lang_test_NodeCheckOperation: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_test_INodesTestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestable: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
            public _is_org_iets3_core_base_IOptionallyNamed: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_jetbrains_mps_lang_core_ISmartReferent: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ITraceRoot: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.N_OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
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
                            public actual: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "actual")
                            public expected: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "expected")
                            public op: SingleChildAccessor<N_TestOp> = new SingleChildAccessor(this.node, "op")
                        }
                        
                        
                        export interface N_TestSuite extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_base.N_IValidNamedConcept, L_com_mbeddr_core_base.N_IContainerOfUniqueNames, L_org_iets3_core_expr_base.N_IContainmentStackMember, L_org_iets3_core_expr_base.N_IIgnoreTrivialErrorsContext, L_org_iets3_core_expr_base.N_IDocumentableWordContainer, L_com_mbeddr_core_base.N_IVisibleElementProvider, L_org_iets3_core_expr_base.N_IMayAllowEffect, L_jetbrains_mps_baseLanguage_unitTest.N_ITestCase, L_org_iets3_analysis_base.N_IUseSolver, L_org_iets3_core_expr_base.N_ITypeOverridingContext, N_ITestItemContainer, L_com_mbeddr_core_base.N_IMbeddrIDERoot {
                            _is_org_iets3_core_expr_tests_TestSuite: boolean
                            executeAutomatically: string | undefined
            referenceOnlyLocalStuff: string | undefined
            showTypes: string | undefined
            contents: ChildListAccessor<L_org_iets3_core_expr_toplevel.N_IToplevelExprContent>
                                
                        }
                        
                        export namespace N_TestSuite {
                            export function isInstance(node: ITypedNode): node is N_TestSuite {
                                return '_is_org_iets3_core_expr_tests_TestSuite' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TestSuite extends TypedNode implements N_TestSuite {
                            public _is_org_iets3_core_expr_tests_TestSuite: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_com_mbeddr_core_base_IContainerOfUniqueNames: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_org_iets3_core_expr_base_IIgnoreTrivialErrorsContext: boolean = true
            public _is_org_iets3_core_expr_base_IDocumentableWordContainer: boolean = true
            public _is_com_mbeddr_core_base_IVisibleElementProvider: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestCase: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestable: boolean = true
            public _is_jetbrains_mps_baseLanguage_IValidIdentifier: boolean = true
            public _is_org_iets3_analysis_base_IUseSolver: boolean = true
            public _is_org_iets3_core_expr_base_ITypeOverridingContext: boolean = true
            public _is_org_iets3_core_expr_tests_ITestItemContainer: boolean = true
            public _is_com_mbeddr_core_base_IMbeddrIDERoot: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                            public contents: ChildListAccessor<L_org_iets3_core_expr_toplevel.N_IToplevelExprContent> = new ChildListAccessor(this.node, "contents")
                        }
                        
                        
                        export interface N_NamedAssertRef extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_tests_NamedAssertRef: boolean
                                                
                        }
                        
                        export namespace N_NamedAssertRef {
                            export function isInstance(node: ITypedNode): node is N_NamedAssertRef {
                                return '_is_org_iets3_core_expr_tests_NamedAssertRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NamedAssertRef extends TypedNode implements N_NamedAssertRef {
                            public _is_org_iets3_core_expr_tests_NamedAssertRef: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_AbstractTestItem extends L_jetbrains_mps_lang_test.N_NodeCheckOperation, L_org_iets3_core_base.N_ICanRunCheckManually, L_org_iets3_core_base.N_IOptionallyNamed, L_org_iets3_core_expr_base.N_IContainmentStackMember, L_com_mbeddr_core_base.N_IDocumentable, L_org_iets3_core_expr_base.N_ITraceRoot, L_com_mbeddr_core_base.N_ICommentable, L_org_iets3_core_expr_base.N_IMayAllowEffect {
                            _is_org_iets3_core_expr_tests_AbstractTestItem: boolean
                            isIgnored: string | undefined
                        }
                        
                        export namespace N_AbstractTestItem {
                            export function isInstance(node: ITypedNode): node is N_AbstractTestItem {
                                return '_is_org_iets3_core_expr_tests_AbstractTestItem' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractTestItem extends TypedNode implements N_AbstractTestItem {
                            public _is_org_iets3_core_expr_tests_AbstractTestItem: boolean = true
            public _is_jetbrains_mps_lang_test_NodeCheckOperation: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_test_INodesTestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestable: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
            public _is_org_iets3_core_base_IOptionallyNamed: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_jetbrains_mps_lang_core_ISmartReferent: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ITraceRoot: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.N_OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
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
                        }
                        
                        
                        export interface N_ConstraintFailedTestItem extends N_AbstractTestItem, L_jetbrains_mps_lang_core.N_ICanSuppressErrors {
                            _is_org_iets3_core_expr_tests_ConstraintFailedTestItem: boolean
                            errmsg: string | undefined
            actual: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_ConstraintFailedTestItem {
                            export function isInstance(node: ITypedNode): node is N_ConstraintFailedTestItem {
                                return '_is_org_iets3_core_expr_tests_ConstraintFailedTestItem' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ConstraintFailedTestItem extends TypedNode implements N_ConstraintFailedTestItem {
                            public _is_org_iets3_core_expr_tests_ConstraintFailedTestItem: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractTestItem: boolean = true
            public _is_jetbrains_mps_lang_test_NodeCheckOperation: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_test_INodesTestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestable: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
            public _is_org_iets3_core_base_IOptionallyNamed: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_jetbrains_mps_lang_core_ISmartReferent: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ITraceRoot: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_jetbrains_mps_lang_core_ICanSuppressErrors: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.N_OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
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
                            public actual: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "actual")
                        }
                        
                        
                        export interface N_RealEqualsTestOp extends N_TestOp {
                            _is_org_iets3_core_expr_tests_RealEqualsTestOp: boolean
                            decimals: string | undefined
                        }
                        
                        export namespace N_RealEqualsTestOp {
                            export function isInstance(node: ITypedNode): node is N_RealEqualsTestOp {
                                return '_is_org_iets3_core_expr_tests_RealEqualsTestOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RealEqualsTestOp extends TypedNode implements N_RealEqualsTestOp {
                            public _is_org_iets3_core_expr_tests_RealEqualsTestOp: boolean = true
            public _is_org_iets3_core_expr_tests_TestOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set decimals(value: string | undefined) {
                                this.node.setPropertyValue("decimals", value)
                            }
                            public get decimals(): string | undefined {
                                return this.node.getPropertyValue("decimals")
                            }
                        }
                        
                        
                        export interface N_EmptyTestItem extends N_AbstractTestItem, L_com_mbeddr_core_base.N_IEmpty {
                            _is_org_iets3_core_expr_tests_EmptyTestItem: boolean
                            
                        }
                        
                        export namespace N_EmptyTestItem {
                            export function isInstance(node: ITypedNode): node is N_EmptyTestItem {
                                return '_is_org_iets3_core_expr_tests_EmptyTestItem' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EmptyTestItem extends TypedNode implements N_EmptyTestItem {
                            public _is_org_iets3_core_expr_tests_EmptyTestItem: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractTestItem: boolean = true
            public _is_jetbrains_mps_lang_test_NodeCheckOperation: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_test_INodesTestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestable: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
            public _is_org_iets3_core_base_IOptionallyNamed: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_jetbrains_mps_lang_core_ISmartReferent: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ITraceRoot: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_com_mbeddr_core_base_IEmpty: boolean = true
            public _is_jetbrains_mps_lang_core_ISuppressErrors: boolean = true
            public _is_com_mbeddr_core_base_IHideFromOutline: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.N_OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                        }
                        
                        
                        export interface N_InterpreterCoverageAssQuery extends N_AbstractCoverageQuery {
                            _is_org_iets3_core_expr_tests_InterpreterCoverageAssQuery: boolean
                            
                        }
                        
                        export namespace N_InterpreterCoverageAssQuery {
                            export function isInstance(node: ITypedNode): node is N_InterpreterCoverageAssQuery {
                                return '_is_org_iets3_core_expr_tests_InterpreterCoverageAssQuery' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_InterpreterCoverageAssQuery extends TypedNode implements N_InterpreterCoverageAssQuery {
                            public _is_org_iets3_core_expr_tests_InterpreterCoverageAssQuery: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractCoverageQuery: boolean = true
            public _is_com_mbeddr_core_base_AssessmentQuery: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
                                            public set hideOK(value: string | undefined) {
                                this.node.setPropertyValue("hideOK", value)
                            }
                            public get hideOK(): string | undefined {
                                return this.node.getPropertyValue("hideOK")
                            }
                            public languages: ChildListAccessor<N_LanguageRef> = new ChildListAccessor(this.node, "languages")
                            public scope: SingleChildAccessor<L_com_mbeddr_core_base.N_AssessmentScope> = new SingleChildAccessor(this.node, "scope")
                            public ignoredConcepts: ChildListAccessor<N_IgnoredConcept> = new ChildListAccessor(this.node, "ignoredConcepts")
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_InterpreterCoverageAssResult extends L_com_mbeddr_core_base.N_AssessmentResult, L_jetbrains_mps_lang_core.N_ISuppressErrors {
                            _is_org_iets3_core_expr_tests_InterpreterCoverageAssResult: boolean
                            comment: string | undefined
                                
                        }
                        
                        export namespace N_InterpreterCoverageAssResult {
                            export function isInstance(node: ITypedNode): node is N_InterpreterCoverageAssResult {
                                return '_is_org_iets3_core_expr_tests_InterpreterCoverageAssResult' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_InterpreterCoverageAssResult extends TypedNode implements N_InterpreterCoverageAssResult {
                            public _is_org_iets3_core_expr_tests_InterpreterCoverageAssResult: boolean = true
            public _is_com_mbeddr_core_base_AssessmentResult: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_ISuppressErrors: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set comment(value: string | undefined) {
                                this.node.setPropertyValue("comment", value)
                            }
                            public get comment(): string | undefined {
                                return this.node.getPropertyValue("comment")
                            }
                        }
                        
                        
                        export interface N_LanguageRef extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_tests_LanguageRef: boolean
                            lang: SingleChildAccessor<L_jetbrains_mps_lang_smodel.N_LanguageIdentity>
                        }
                        
                        export namespace N_LanguageRef {
                            export function isInstance(node: ITypedNode): node is N_LanguageRef {
                                return '_is_org_iets3_core_expr_tests_LanguageRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LanguageRef extends TypedNode implements N_LanguageRef {
                            public _is_org_iets3_core_expr_tests_LanguageRef: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public lang: SingleChildAccessor<L_jetbrains_mps_lang_smodel.N_LanguageIdentity> = new SingleChildAccessor(this.node, "lang")
                        }
                        
                        
                        export interface N_IgnoredConcept extends L_jetbrains_mps_lang_core.N_BaseConcept, L_com_mbeddr_core_base.N_IDocumentable {
                            _is_org_iets3_core_expr_tests_IgnoredConcept: boolean
                                                
                        }
                        
                        export namespace N_IgnoredConcept {
                            export function isInstance(node: ITypedNode): node is N_IgnoredConcept {
                                return '_is_org_iets3_core_expr_tests_IgnoredConcept' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IgnoredConcept extends TypedNode implements N_IgnoredConcept {
                            public _is_org_iets3_core_expr_tests_IgnoredConcept: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_InterpreterCoverageAssSummary extends L_com_mbeddr_core_base.N_AssessmentSummary {
                            _is_org_iets3_core_expr_tests_InterpreterCoverageAssSummary: boolean
                            coverageRatio: string | undefined
                        }
                        
                        export namespace N_InterpreterCoverageAssSummary {
                            export function isInstance(node: ITypedNode): node is N_InterpreterCoverageAssSummary {
                                return '_is_org_iets3_core_expr_tests_InterpreterCoverageAssSummary' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_InterpreterCoverageAssSummary extends TypedNode implements N_InterpreterCoverageAssSummary {
                            public _is_org_iets3_core_expr_tests_InterpreterCoverageAssSummary: boolean = true
            public _is_com_mbeddr_core_base_AssessmentSummary: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set coverageRatio(value: string | undefined) {
                                this.node.setPropertyValue("coverageRatio", value)
                            }
                            public get coverageRatio(): string | undefined {
                                return this.node.getPropertyValue("coverageRatio")
                            }
                        }
                        
                        
                        export interface N_AbstractCoverageQuery extends L_com_mbeddr_core_base.N_AssessmentQuery {
                            _is_org_iets3_core_expr_tests_AbstractCoverageQuery: boolean
                            hideOK: string | undefined
            languages: ChildListAccessor<N_LanguageRef>
            scope: SingleChildAccessor<L_com_mbeddr_core_base.N_AssessmentScope>
            ignoredConcepts: ChildListAccessor<N_IgnoredConcept>
                        }
                        
                        export namespace N_AbstractCoverageQuery {
                            export function isInstance(node: ITypedNode): node is N_AbstractCoverageQuery {
                                return '_is_org_iets3_core_expr_tests_AbstractCoverageQuery' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractCoverageQuery extends TypedNode implements N_AbstractCoverageQuery {
                            public _is_org_iets3_core_expr_tests_AbstractCoverageQuery: boolean = true
            public _is_com_mbeddr_core_base_AssessmentQuery: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set hideOK(value: string | undefined) {
                                this.node.setPropertyValue("hideOK", value)
                            }
                            public get hideOK(): string | undefined {
                                return this.node.getPropertyValue("hideOK")
                            }
                            public languages: ChildListAccessor<N_LanguageRef> = new ChildListAccessor(this.node, "languages")
                            public scope: SingleChildAccessor<L_com_mbeddr_core_base.N_AssessmentScope> = new SingleChildAccessor(this.node, "scope")
                            public ignoredConcepts: ChildListAccessor<N_IgnoredConcept> = new ChildListAccessor(this.node, "ignoredConcepts")
                        }
                        
                        
                        export interface N_StructuralCoverageAssQuery extends N_AbstractCoverageQuery {
                            _is_org_iets3_core_expr_tests_StructuralCoverageAssQuery: boolean
                            highlightErrors: string | undefined
            minTestCount: string | undefined
            minTestVolume: string | undefined
            maximalMinHetero: string | undefined
            minimumMaxHetero: string | undefined
            lookOutsideTestSuites: string | undefined
            trackProperties: string | undefined
            nodesFilter: SingleChildAccessor<N_StructuralCoverageNodesFilter>
                        }
                        
                        export namespace N_StructuralCoverageAssQuery {
                            export function isInstance(node: ITypedNode): node is N_StructuralCoverageAssQuery {
                                return '_is_org_iets3_core_expr_tests_StructuralCoverageAssQuery' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_StructuralCoverageAssQuery extends TypedNode implements N_StructuralCoverageAssQuery {
                            public _is_org_iets3_core_expr_tests_StructuralCoverageAssQuery: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractCoverageQuery: boolean = true
            public _is_com_mbeddr_core_base_AssessmentQuery: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
                                            public set hideOK(value: string | undefined) {
                                this.node.setPropertyValue("hideOK", value)
                            }
                            public get hideOK(): string | undefined {
                                return this.node.getPropertyValue("hideOK")
                            }
                            public languages: ChildListAccessor<N_LanguageRef> = new ChildListAccessor(this.node, "languages")
                            public scope: SingleChildAccessor<L_com_mbeddr_core_base.N_AssessmentScope> = new SingleChildAccessor(this.node, "scope")
                            public ignoredConcepts: ChildListAccessor<N_IgnoredConcept> = new ChildListAccessor(this.node, "ignoredConcepts")
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                            public nodesFilter: SingleChildAccessor<N_StructuralCoverageNodesFilter> = new SingleChildAccessor(this.node, "nodesFilter")
                        }
                        
                        
                        export interface N_StructuralCoverageAssResult extends L_com_mbeddr_core_base.N_AssessmentResult {
                            _is_org_iets3_core_expr_tests_StructuralCoverageAssResult: boolean
                            comment: string | undefined
            testCount: string | undefined
            testVolume: string | undefined
            minH: string | undefined
            maxH: string | undefined
                                
                        }
                        
                        export namespace N_StructuralCoverageAssResult {
                            export function isInstance(node: ITypedNode): node is N_StructuralCoverageAssResult {
                                return '_is_org_iets3_core_expr_tests_StructuralCoverageAssResult' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_StructuralCoverageAssResult extends TypedNode implements N_StructuralCoverageAssResult {
                            public _is_org_iets3_core_expr_tests_StructuralCoverageAssResult: boolean = true
            public _is_com_mbeddr_core_base_AssessmentResult: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                        }
                        
                        
                        export interface N_InterpreterValueSummary extends L_com_mbeddr_core_base.N_AssessmentSummary {
                            _is_org_iets3_core_expr_tests_InterpreterValueSummary: boolean
                            valueStats: ChildListAccessor<N_InterpreterValueStat>
                        }
                        
                        export namespace N_InterpreterValueSummary {
                            export function isInstance(node: ITypedNode): node is N_InterpreterValueSummary {
                                return '_is_org_iets3_core_expr_tests_InterpreterValueSummary' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_InterpreterValueSummary extends TypedNode implements N_InterpreterValueSummary {
                            public _is_org_iets3_core_expr_tests_InterpreterValueSummary: boolean = true
            public _is_com_mbeddr_core_base_AssessmentSummary: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public valueStats: ChildListAccessor<N_InterpreterValueStat> = new ChildListAccessor(this.node, "valueStats")
                        }
                        
                        
                        export interface N_InterpreterValueStat extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_tests_InterpreterValueStat: boolean
                            label: string | undefined
            value: string | undefined
                        }
                        
                        export namespace N_InterpreterValueStat {
                            export function isInstance(node: ITypedNode): node is N_InterpreterValueStat {
                                return '_is_org_iets3_core_expr_tests_InterpreterValueStat' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_InterpreterValueStat extends TypedNode implements N_InterpreterValueStat {
                            public _is_org_iets3_core_expr_tests_InterpreterValueStat: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                        }
                        
                        
                        export interface N_StackTraceElement extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_tests_StackTraceElement: boolean
                                                
                        }
                        
                        export namespace N_StackTraceElement {
                            export function isInstance(node: ITypedNode): node is N_StackTraceElement {
                                return '_is_org_iets3_core_expr_tests_StackTraceElement' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_StackTraceElement extends TypedNode implements N_StackTraceElement {
                            public _is_org_iets3_core_expr_tests_StackTraceElement: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_ModelsCoverageAssResult extends L_com_mbeddr_core_base.N_AssessmentResult {
                            _is_org_iets3_core_expr_tests_ModelsCoverageAssResult: boolean
                            comment: string | undefined
                                
                        }
                        
                        export namespace N_ModelsCoverageAssResult {
                            export function isInstance(node: ITypedNode): node is N_ModelsCoverageAssResult {
                                return '_is_org_iets3_core_expr_tests_ModelsCoverageAssResult' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ModelsCoverageAssResult extends TypedNode implements N_ModelsCoverageAssResult {
                            public _is_org_iets3_core_expr_tests_ModelsCoverageAssResult: boolean = true
            public _is_com_mbeddr_core_base_AssessmentResult: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set comment(value: string | undefined) {
                                this.node.setPropertyValue("comment", value)
                            }
                            public get comment(): string | undefined {
                                return this.node.getPropertyValue("comment")
                            }
                        }
                        
                        
                        export interface N_TestCoverageAssQuery extends N_AbstractCoverageQuery {
                            _is_org_iets3_core_expr_tests_TestCoverageAssQuery: boolean
                            measureFor: ChildListAccessor<N_MeasureCoverageFor>
                        }
                        
                        export namespace N_TestCoverageAssQuery {
                            export function isInstance(node: ITypedNode): node is N_TestCoverageAssQuery {
                                return '_is_org_iets3_core_expr_tests_TestCoverageAssQuery' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TestCoverageAssQuery extends TypedNode implements N_TestCoverageAssQuery {
                            public _is_org_iets3_core_expr_tests_TestCoverageAssQuery: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractCoverageQuery: boolean = true
            public _is_com_mbeddr_core_base_AssessmentQuery: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
                                            public set hideOK(value: string | undefined) {
                                this.node.setPropertyValue("hideOK", value)
                            }
                            public get hideOK(): string | undefined {
                                return this.node.getPropertyValue("hideOK")
                            }
                            public languages: ChildListAccessor<N_LanguageRef> = new ChildListAccessor(this.node, "languages")
                            public scope: SingleChildAccessor<L_com_mbeddr_core_base.N_AssessmentScope> = new SingleChildAccessor(this.node, "scope")
                            public ignoredConcepts: ChildListAccessor<N_IgnoredConcept> = new ChildListAccessor(this.node, "ignoredConcepts")
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public measureFor: ChildListAccessor<N_MeasureCoverageFor> = new ChildListAccessor(this.node, "measureFor")
                        }
                        
                        
                        export interface N_InvalidValueTestItem extends N_AbstractTestItem {
                            _is_org_iets3_core_expr_tests_InvalidValueTestItem: boolean
                            errmsg: string | undefined
            actual: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_InvalidValueTestItem {
                            export function isInstance(node: ITypedNode): node is N_InvalidValueTestItem {
                                return '_is_org_iets3_core_expr_tests_InvalidValueTestItem' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_InvalidValueTestItem extends TypedNode implements N_InvalidValueTestItem {
                            public _is_org_iets3_core_expr_tests_InvalidValueTestItem: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractTestItem: boolean = true
            public _is_jetbrains_mps_lang_test_NodeCheckOperation: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_test_INodesTestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestable: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
            public _is_org_iets3_core_base_IOptionallyNamed: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_jetbrains_mps_lang_core_ISmartReferent: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ITraceRoot: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.N_OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
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
                            public actual: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "actual")
                        }
                        
                        
                        export interface N_StructuralCoverageNodesFilter extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_tests_StructuralCoverageNodesFilter: boolean
                            
                        }
                        
                        export namespace N_StructuralCoverageNodesFilter {
                            export function isInstance(node: ITypedNode): node is N_StructuralCoverageNodesFilter {
                                return '_is_org_iets3_core_expr_tests_StructuralCoverageNodesFilter' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_StructuralCoverageNodesFilter extends TypedNode implements N_StructuralCoverageNodesFilter {
                            public _is_org_iets3_core_expr_tests_StructuralCoverageNodesFilter: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_ModelsCoverageAssSummary extends L_com_mbeddr_core_base.N_AssessmentSummary {
                            _is_org_iets3_core_expr_tests_ModelsCoverageAssSummary: boolean
                            coverageRatio: string | undefined
                        }
                        
                        export namespace N_ModelsCoverageAssSummary {
                            export function isInstance(node: ITypedNode): node is N_ModelsCoverageAssSummary {
                                return '_is_org_iets3_core_expr_tests_ModelsCoverageAssSummary' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ModelsCoverageAssSummary extends TypedNode implements N_ModelsCoverageAssSummary {
                            public _is_org_iets3_core_expr_tests_ModelsCoverageAssSummary: boolean = true
            public _is_com_mbeddr_core_base_AssessmentSummary: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set coverageRatio(value: string | undefined) {
                                this.node.setPropertyValue("coverageRatio", value)
                            }
                            public get coverageRatio(): string | undefined {
                                return this.node.getPropertyValue("coverageRatio")
                            }
                        }
                        
                        
                        export interface N_OptExpression extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_tests_OptExpression: boolean
                            expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_OptExpression {
                            export function isInstance(node: ITypedNode): node is N_OptExpression {
                                return '_is_org_iets3_core_expr_tests_OptExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_OptExpression extends TypedNode implements N_OptExpression {
                            public _is_org_iets3_core_expr_tests_OptExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "expr")
                        }
                        
                        
                        export interface N_NoneExpr extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_tests_NoneExpr: boolean
                            expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_NoneExpr {
                            export function isInstance(node: ITypedNode): node is N_NoneExpr {
                                return '_is_org_iets3_core_expr_tests_NoneExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NoneExpr extends TypedNode implements N_NoneExpr {
                            public _is_org_iets3_core_expr_tests_NoneExpr: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "expr")
                        }
                        
                        
                        export interface N_AssertOptionTestItem extends N_AbstractTestItem {
                            _is_org_iets3_core_expr_tests_AssertOptionTestItem: boolean
                            what: string | undefined
            actual: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_AssertOptionTestItem {
                            export function isInstance(node: ITypedNode): node is N_AssertOptionTestItem {
                                return '_is_org_iets3_core_expr_tests_AssertOptionTestItem' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AssertOptionTestItem extends TypedNode implements N_AssertOptionTestItem {
                            public _is_org_iets3_core_expr_tests_AssertOptionTestItem: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractTestItem: boolean = true
            public _is_jetbrains_mps_lang_test_NodeCheckOperation: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_test_INodesTestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestable: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
            public _is_org_iets3_core_base_IOptionallyNamed: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_jetbrains_mps_lang_core_ISmartReferent: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ITraceRoot: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.N_OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
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
                            public actual: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "actual")
                        }
                        
                        
                        export interface N_TestVector extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_base.N_ICanStoreCheckResult {
                            _is_org_iets3_core_expr_tests_TestVector: boolean
                            values: ChildListAccessor<N_InputValue>
            results: ChildListAccessor<N_OutputValue>
            outcome: SingleChildAccessor<N_Outcome>
                        }
                        
                        export namespace N_TestVector {
                            export function isInstance(node: ITypedNode): node is N_TestVector {
                                return '_is_org_iets3_core_expr_tests_TestVector' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TestVector extends TypedNode implements N_TestVector {
                            public _is_org_iets3_core_expr_tests_TestVector: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public values: ChildListAccessor<N_InputValue> = new ChildListAccessor(this.node, "values")
                            public results: ChildListAccessor<N_OutputValue> = new ChildListAccessor(this.node, "results")
                            public outcome: SingleChildAccessor<N_Outcome> = new SingleChildAccessor(this.node, "outcome")
                        }
                        
                        
                        export interface N_AbstractVectorCollection extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_tests_AbstractVectorCollection: boolean
                            vectors: ChildListAccessor<N_TestVector>
            producer: SingleChildAccessor<N_TestDataProducer>
                        }
                        
                        export namespace N_AbstractVectorCollection {
                            export function isInstance(node: ITypedNode): node is N_AbstractVectorCollection {
                                return '_is_org_iets3_core_expr_tests_AbstractVectorCollection' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractVectorCollection extends TypedNode implements N_AbstractVectorCollection {
                            public _is_org_iets3_core_expr_tests_AbstractVectorCollection: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public vectors: ChildListAccessor<N_TestVector> = new ChildListAccessor(this.node, "vectors")
                            public producer: SingleChildAccessor<N_TestDataProducer> = new SingleChildAccessor(this.node, "producer")
                        }
                        
                        
                        export interface N_InputValue extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_tests_InputValue: boolean
                            value: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                                
                        }
                        
                        export namespace N_InputValue {
                            export function isInstance(node: ITypedNode): node is N_InputValue {
                                return '_is_org_iets3_core_expr_tests_InputValue' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_InputValue extends TypedNode implements N_InputValue {
                            public _is_org_iets3_core_expr_tests_InputValue: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public value: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "value")
                        }
                        
                        
                        export interface N_TestDataProducer extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_tests_TestDataProducer: boolean
                            
                        }
                        
                        export namespace N_TestDataProducer {
                            export function isInstance(node: ITypedNode): node is N_TestDataProducer {
                                return '_is_org_iets3_core_expr_tests_TestDataProducer' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TestDataProducer extends TypedNode implements N_TestDataProducer {
                            public _is_org_iets3_core_expr_tests_TestDataProducer: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_EmptyProducer extends N_TestDataProducer {
                            _is_org_iets3_core_expr_tests_EmptyProducer: boolean
                            
                        }
                        
                        export namespace N_EmptyProducer {
                            export function isInstance(node: ITypedNode): node is N_EmptyProducer {
                                return '_is_org_iets3_core_expr_tests_EmptyProducer' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EmptyProducer extends TypedNode implements N_EmptyProducer {
                            public _is_org_iets3_core_expr_tests_EmptyProducer: boolean = true
            public _is_org_iets3_core_expr_tests_TestDataProducer: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_Outcome extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_tests_Outcome: boolean
                            
                        }
                        
                        export namespace N_Outcome {
                            export function isInstance(node: ITypedNode): node is N_Outcome {
                                return '_is_org_iets3_core_expr_tests_Outcome' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Outcome extends TypedNode implements N_Outcome {
                            public _is_org_iets3_core_expr_tests_Outcome: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_ValidOutcome extends N_Outcome {
                            _is_org_iets3_core_expr_tests_ValidOutcome: boolean
                            
                        }
                        
                        export namespace N_ValidOutcome {
                            export function isInstance(node: ITypedNode): node is N_ValidOutcome {
                                return '_is_org_iets3_core_expr_tests_ValidOutcome' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ValidOutcome extends TypedNode implements N_ValidOutcome {
                            public _is_org_iets3_core_expr_tests_ValidOutcome: boolean = true
            public _is_org_iets3_core_expr_tests_Outcome: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_InvalidInputOutcome extends N_Outcome {
                            _is_org_iets3_core_expr_tests_InvalidInputOutcome: boolean
                            
                        }
                        
                        export namespace N_InvalidInputOutcome {
                            export function isInstance(node: ITypedNode): node is N_InvalidInputOutcome {
                                return '_is_org_iets3_core_expr_tests_InvalidInputOutcome' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_InvalidInputOutcome extends TypedNode implements N_InvalidInputOutcome {
                            public _is_org_iets3_core_expr_tests_InvalidInputOutcome: boolean = true
            public _is_org_iets3_core_expr_tests_Outcome: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_TestSubjectAdapter extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_tests_TestSubjectAdapter: boolean
                            internalUniqueID: string | undefined
            mutator: SingleChildAccessor<N_MutationEngine>
                        }
                        
                        export namespace N_TestSubjectAdapter {
                            export function isInstance(node: ITypedNode): node is N_TestSubjectAdapter {
                                return '_is_org_iets3_core_expr_tests_TestSubjectAdapter' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TestSubjectAdapter extends TypedNode implements N_TestSubjectAdapter {
                            public _is_org_iets3_core_expr_tests_TestSubjectAdapter: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set internalUniqueID(value: string | undefined) {
                                this.node.setPropertyValue("internalUniqueID", value)
                            }
                            public get internalUniqueID(): string | undefined {
                                return this.node.getPropertyValue("internalUniqueID")
                            }
                            public mutator: SingleChildAccessor<N_MutationEngine> = new SingleChildAccessor(this.node, "mutator")
                        }
                        
                        
                        export interface N_FunctionSubjectAdapter extends N_TestSubjectAdapter {
                            _is_org_iets3_core_expr_tests_FunctionSubjectAdapter: boolean
                            checkResults: string | undefined
                                
                        }
                        
                        export namespace N_FunctionSubjectAdapter {
                            export function isInstance(node: ITypedNode): node is N_FunctionSubjectAdapter {
                                return '_is_org_iets3_core_expr_tests_FunctionSubjectAdapter' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FunctionSubjectAdapter extends TypedNode implements N_FunctionSubjectAdapter {
                            public _is_org_iets3_core_expr_tests_FunctionSubjectAdapter: boolean = true
            public _is_org_iets3_core_expr_tests_TestSubjectAdapter: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
                                            public set internalUniqueID(value: string | undefined) {
                                this.node.setPropertyValue("internalUniqueID", value)
                            }
                            public get internalUniqueID(): string | undefined {
                                return this.node.getPropertyValue("internalUniqueID")
                            }
                            public mutator: SingleChildAccessor<N_MutationEngine> = new SingleChildAccessor(this.node, "mutator")
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set checkResults(value: string | undefined) {
                                this.node.setPropertyValue("checkResults", value)
                            }
                            public get checkResults(): string | undefined {
                                return this.node.getPropertyValue("checkResults")
                            }
                        }
                        
                        
                        export interface N_OutputValue extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_tests_OutputValue: boolean
                            value: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                                
                        }
                        
                        export namespace N_OutputValue {
                            export function isInstance(node: ITypedNode): node is N_OutputValue {
                                return '_is_org_iets3_core_expr_tests_OutputValue' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_OutputValue extends TypedNode implements N_OutputValue {
                            public _is_org_iets3_core_expr_tests_OutputValue: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public value: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "value")
                        }
                        
                        
                        export interface N_VectorTestItem extends N_AbstractTestItem {
                            _is_org_iets3_core_expr_tests_VectorTestItem: boolean
                            subject: SingleChildAccessor<N_TestSubjectAdapter>
            vectors: SingleChildAccessor<N_TestItemVectorCollection>
                        }
                        
                        export namespace N_VectorTestItem {
                            export function isInstance(node: ITypedNode): node is N_VectorTestItem {
                                return '_is_org_iets3_core_expr_tests_VectorTestItem' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_VectorTestItem extends TypedNode implements N_VectorTestItem {
                            public _is_org_iets3_core_expr_tests_VectorTestItem: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractTestItem: boolean = true
            public _is_jetbrains_mps_lang_test_NodeCheckOperation: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_test_INodesTestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestable: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
            public _is_org_iets3_core_base_IOptionallyNamed: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_jetbrains_mps_lang_core_ISmartReferent: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ITraceRoot: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.N_OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                            public subject: SingleChildAccessor<N_TestSubjectAdapter> = new SingleChildAccessor(this.node, "subject")
                            public vectors: SingleChildAccessor<N_TestItemVectorCollection> = new SingleChildAccessor(this.node, "vectors")
                        }
                        
                        
                        export interface N_TestItemVectorCollection extends N_AbstractVectorCollection {
                            _is_org_iets3_core_expr_tests_TestItemVectorCollection: boolean
                            
                        }
                        
                        export namespace N_TestItemVectorCollection {
                            export function isInstance(node: ITypedNode): node is N_TestItemVectorCollection {
                                return '_is_org_iets3_core_expr_tests_TestItemVectorCollection' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TestItemVectorCollection extends TypedNode implements N_TestItemVectorCollection {
                            public _is_org_iets3_core_expr_tests_TestItemVectorCollection: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractVectorCollection: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
                                            public vectors: ChildListAccessor<N_TestVector> = new ChildListAccessor(this.node, "vectors")
                            public producer: SingleChildAccessor<N_TestDataProducer> = new SingleChildAccessor(this.node, "producer")
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_MutationEngine extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_tests_MutationEngine: boolean
                            numberOfMutations: string | undefined
            keepAll: string | undefined
            logs: ChildListAccessor<N_MutationLog>
                        }
                        
                        export namespace N_MutationEngine {
                            export function isInstance(node: ITypedNode): node is N_MutationEngine {
                                return '_is_org_iets3_core_expr_tests_MutationEngine' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MutationEngine extends TypedNode implements N_MutationEngine {
                            public _is_org_iets3_core_expr_tests_MutationEngine: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                            public logs: ChildListAccessor<N_MutationLog> = new ChildListAccessor(this.node, "logs")
                        }
                        
                        
                        export interface N_MutationLog extends L_jetbrains_mps_lang_core.N_BaseConcept, L_jetbrains_mps_lang_core.N_ISuppressErrors {
                            _is_org_iets3_core_expr_tests_MutationLog: boolean
                                                
                        }
                        
                        export namespace N_MutationLog {
                            export function isInstance(node: ITypedNode): node is N_MutationLog {
                                return '_is_org_iets3_core_expr_tests_MutationLog' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MutationLog extends TypedNode implements N_MutationLog {
                            public _is_org_iets3_core_expr_tests_MutationLog: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_ISuppressErrors: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_OldNodeAnnotation extends L_jetbrains_mps_lang_core.N_NodeAttribute {
                            _is_org_iets3_core_expr_tests_OldNodeAnnotation: boolean
                            oldNode: SingleChildAccessor<L_jetbrains_mps_lang_core.N_BaseConcept>
                        }
                        
                        export namespace N_OldNodeAnnotation {
                            export function isInstance(node: ITypedNode): node is N_OldNodeAnnotation {
                                return '_is_org_iets3_core_expr_tests_OldNodeAnnotation' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_OldNodeAnnotation extends TypedNode implements N_OldNodeAnnotation {
                            public _is_org_iets3_core_expr_tests_OldNodeAnnotation: boolean = true
            public _is_jetbrains_mps_lang_core_NodeAttribute: boolean = true
            public _is_jetbrains_mps_lang_core_Attribute: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public oldNode: SingleChildAccessor<L_jetbrains_mps_lang_core.N_BaseConcept> = new SingleChildAccessor(this.node, "oldNode")
                        }
                        
                        
                        export interface N_MuteEffect extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_IMayAllowEffect, L_org_iets3_core_expr_base.N_IMainSlot {
                            _is_org_iets3_core_expr_tests_MuteEffect: boolean
                            expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_MuteEffect {
                            export function isInstance(node: ITypedNode): node is N_MuteEffect {
                                return '_is_org_iets3_core_expr_tests_MuteEffect' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MuteEffect extends TypedNode implements N_MuteEffect {
                            public _is_org_iets3_core_expr_tests_MuteEffect: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "expr")
                        }
                        
                        
                        export interface N_AllExpressionsFilter extends N_StructuralCoverageNodesFilter {
                            _is_org_iets3_core_expr_tests_AllExpressionsFilter: boolean
                            
                        }
                        
                        export namespace N_AllExpressionsFilter {
                            export function isInstance(node: ITypedNode): node is N_AllExpressionsFilter {
                                return '_is_org_iets3_core_expr_tests_AllExpressionsFilter' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AllExpressionsFilter extends TypedNode implements N_AllExpressionsFilter {
                            public _is_org_iets3_core_expr_tests_AllExpressionsFilter: boolean = true
            public _is_org_iets3_core_expr_tests_StructuralCoverageNodesFilter: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_NotEqualsTestOp extends N_TestOp {
                            _is_org_iets3_core_expr_tests_NotEqualsTestOp: boolean
                            
                        }
                        
                        export namespace N_NotEqualsTestOp {
                            export function isInstance(node: ITypedNode): node is N_NotEqualsTestOp {
                                return '_is_org_iets3_core_expr_tests_NotEqualsTestOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NotEqualsTestOp extends TypedNode implements N_NotEqualsTestOp {
                            public _is_org_iets3_core_expr_tests_NotEqualsTestOp: boolean = true
            public _is_org_iets3_core_expr_tests_TestOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_ForceCastExpr extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_tests_ForceCastExpr: boolean
                            targetType: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
            expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_ForceCastExpr {
                            export function isInstance(node: ITypedNode): node is N_ForceCastExpr {
                                return '_is_org_iets3_core_expr_tests_ForceCastExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ForceCastExpr extends TypedNode implements N_ForceCastExpr {
                            public _is_org_iets3_core_expr_tests_ForceCastExpr: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public targetType: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "targetType")
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "expr")
                        }
                        
                        
                        export interface N_ReportTestItem extends N_AbstractTestItem {
                            _is_org_iets3_core_expr_tests_ReportTestItem: boolean
                            actual: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_ReportTestItem {
                            export function isInstance(node: ITypedNode): node is N_ReportTestItem {
                                return '_is_org_iets3_core_expr_tests_ReportTestItem' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ReportTestItem extends TypedNode implements N_ReportTestItem {
                            public _is_org_iets3_core_expr_tests_ReportTestItem: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractTestItem: boolean = true
            public _is_jetbrains_mps_lang_test_NodeCheckOperation: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_test_INodesTestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestable: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
            public _is_org_iets3_core_base_IOptionallyNamed: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_jetbrains_mps_lang_core_ISmartReferent: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ITraceRoot: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.N_OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                            public actual: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "actual")
                        }
                        
                        
                        export interface N_AssertThatTestItem extends N_AbstractTestItem {
                            _is_org_iets3_core_expr_tests_AssertThatTestItem: boolean
                            value: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
            matcher: SingleChildAccessor<N_AbstractValueMatcher>
                        }
                        
                        export namespace N_AssertThatTestItem {
                            export function isInstance(node: ITypedNode): node is N_AssertThatTestItem {
                                return '_is_org_iets3_core_expr_tests_AssertThatTestItem' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AssertThatTestItem extends TypedNode implements N_AssertThatTestItem {
                            public _is_org_iets3_core_expr_tests_AssertThatTestItem: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractTestItem: boolean = true
            public _is_jetbrains_mps_lang_test_NodeCheckOperation: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_test_INodesTestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestable: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
            public _is_org_iets3_core_base_IOptionallyNamed: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_jetbrains_mps_lang_core_ISmartReferent: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ITraceRoot: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.N_OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                            public value: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "value")
                            public matcher: SingleChildAccessor<N_AbstractValueMatcher> = new SingleChildAccessor(this.node, "matcher")
                        }
                        
                        
                        export interface N_AbstractValueMatcher extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_tests_AbstractValueMatcher: boolean
                            
                        }
                        
                        export namespace N_AbstractValueMatcher {
                            export function isInstance(node: ITypedNode): node is N_AbstractValueMatcher {
                                return '_is_org_iets3_core_expr_tests_AbstractValueMatcher' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractValueMatcher extends TypedNode implements N_AbstractValueMatcher {
                            public _is_org_iets3_core_expr_tests_AbstractValueMatcher: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_IsValidRecord extends N_AbstractValueMatcher {
                            _is_org_iets3_core_expr_tests_IsValidRecord: boolean
                            
                        }
                        
                        export namespace N_IsValidRecord {
                            export function isInstance(node: ITypedNode): node is N_IsValidRecord {
                                return '_is_org_iets3_core_expr_tests_IsValidRecord' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IsValidRecord extends TypedNode implements N_IsValidRecord {
                            public _is_org_iets3_core_expr_tests_IsValidRecord: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractValueMatcher: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_IsInvalid extends N_AbstractValueMatcher {
                            _is_org_iets3_core_expr_tests_IsInvalid: boolean
                            messageMatcher: SingleChildAccessor<N_AbstractValueMatcher>
                        }
                        
                        export namespace N_IsInvalid {
                            export function isInstance(node: ITypedNode): node is N_IsInvalid {
                                return '_is_org_iets3_core_expr_tests_IsInvalid' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IsInvalid extends TypedNode implements N_IsInvalid {
                            public _is_org_iets3_core_expr_tests_IsInvalid: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractValueMatcher: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public messageMatcher: SingleChildAccessor<N_AbstractValueMatcher> = new SingleChildAccessor(this.node, "messageMatcher")
                        }
                        
                        
                        export interface N_ContainsString extends N_AbstractValueMatcher {
                            _is_org_iets3_core_expr_tests_ContainsString: boolean
                            text: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_ContainsString {
                            export function isInstance(node: ITypedNode): node is N_ContainsString {
                                return '_is_org_iets3_core_expr_tests_ContainsString' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ContainsString extends TypedNode implements N_ContainsString {
                            public _is_org_iets3_core_expr_tests_ContainsString: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractValueMatcher: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public text: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "text")
                        }
                        
                        
                        export interface N_MatcherType extends N_AbstractMatcherType {
                            _is_org_iets3_core_expr_tests_MatcherType: boolean
                            forType: SingleChildAccessor<L_jetbrains_mps_lang_core.N_BaseConcept>
                        }
                        
                        export namespace N_MatcherType {
                            export function isInstance(node: ITypedNode): node is N_MatcherType {
                                return '_is_org_iets3_core_expr_tests_MatcherType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MatcherType extends TypedNode implements N_MatcherType {
                            public _is_org_iets3_core_expr_tests_MatcherType: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractMatcherType: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public forType: SingleChildAccessor<L_jetbrains_mps_lang_core.N_BaseConcept> = new SingleChildAccessor(this.node, "forType")
                        }
                        
                        
                        export interface N_MatcherForAnyType extends N_AbstractMatcherType {
                            _is_org_iets3_core_expr_tests_MatcherForAnyType: boolean
                            
                        }
                        
                        export namespace N_MatcherForAnyType {
                            export function isInstance(node: ITypedNode): node is N_MatcherForAnyType {
                                return '_is_org_iets3_core_expr_tests_MatcherForAnyType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MatcherForAnyType extends TypedNode implements N_MatcherForAnyType {
                            public _is_org_iets3_core_expr_tests_MatcherForAnyType: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractMatcherType: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_MatcherForAnyRecordType extends N_AbstractMatcherType {
                            _is_org_iets3_core_expr_tests_MatcherForAnyRecordType: boolean
                            
                        }
                        
                        export namespace N_MatcherForAnyRecordType {
                            export function isInstance(node: ITypedNode): node is N_MatcherForAnyRecordType {
                                return '_is_org_iets3_core_expr_tests_MatcherForAnyRecordType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MatcherForAnyRecordType extends TypedNode implements N_MatcherForAnyRecordType {
                            public _is_org_iets3_core_expr_tests_MatcherForAnyRecordType: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractMatcherType: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_AbstractMatcherType extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_tests_AbstractMatcherType: boolean
                            
                        }
                        
                        export namespace N_AbstractMatcherType {
                            export function isInstance(node: ITypedNode): node is N_AbstractMatcherType {
                                return '_is_org_iets3_core_expr_tests_AbstractMatcherType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractMatcherType extends TypedNode implements N_AbstractMatcherType {
                            public _is_org_iets3_core_expr_tests_AbstractMatcherType: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_AndMatcher extends N_AbstractValueMatcher {
                            _is_org_iets3_core_expr_tests_AndMatcher: boolean
                            left: SingleChildAccessor<N_AbstractValueMatcher>
            right: SingleChildAccessor<N_AbstractValueMatcher>
                        }
                        
                        export namespace N_AndMatcher {
                            export function isInstance(node: ITypedNode): node is N_AndMatcher {
                                return '_is_org_iets3_core_expr_tests_AndMatcher' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AndMatcher extends TypedNode implements N_AndMatcher {
                            public _is_org_iets3_core_expr_tests_AndMatcher: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractValueMatcher: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public left: SingleChildAccessor<N_AbstractValueMatcher> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_AbstractValueMatcher> = new SingleChildAccessor(this.node, "right")
                        }
                        
                        
                        export interface N_AllNodesFilter extends N_StructuralCoverageNodesFilter {
                            _is_org_iets3_core_expr_tests_AllNodesFilter: boolean
                            
                        }
                        
                        export namespace N_AllNodesFilter {
                            export function isInstance(node: ITypedNode): node is N_AllNodesFilter {
                                return '_is_org_iets3_core_expr_tests_AllNodesFilter' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AllNodesFilter extends TypedNode implements N_AllNodesFilter {
                            public _is_org_iets3_core_expr_tests_AllNodesFilter: boolean = true
            public _is_org_iets3_core_expr_tests_StructuralCoverageNodesFilter: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_StructuralCoverageAssSummary extends L_com_mbeddr_core_base.N_AssessmentSummary {
                            _is_org_iets3_core_expr_tests_StructuralCoverageAssSummary: boolean
                            coverageRatio: string | undefined
                        }
                        
                        export namespace N_StructuralCoverageAssSummary {
                            export function isInstance(node: ITypedNode): node is N_StructuralCoverageAssSummary {
                                return '_is_org_iets3_core_expr_tests_StructuralCoverageAssSummary' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_StructuralCoverageAssSummary extends TypedNode implements N_StructuralCoverageAssSummary {
                            public _is_org_iets3_core_expr_tests_StructuralCoverageAssSummary: boolean = true
            public _is_com_mbeddr_core_base_AssessmentSummary: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set coverageRatio(value: string | undefined) {
                                this.node.setPropertyValue("coverageRatio", value)
                            }
                            public get coverageRatio(): string | undefined {
                                return this.node.getPropertyValue("coverageRatio")
                            }
                        }
                        
                        
                        export interface N_MeasureCoverageFor extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_tests_MeasureCoverageFor: boolean
                            completeSubtree: string | undefined
                                
                        }
                        
                        export namespace N_MeasureCoverageFor {
                            export function isInstance(node: ITypedNode): node is N_MeasureCoverageFor {
                                return '_is_org_iets3_core_expr_tests_MeasureCoverageFor' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MeasureCoverageFor extends TypedNode implements N_MeasureCoverageFor {
                            public _is_org_iets3_core_expr_tests_MeasureCoverageFor: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set completeSubtree(value: string | undefined) {
                                this.node.setPropertyValue("completeSubtree", value)
                            }
                            public get completeSubtree(): string | undefined {
                                return this.node.getPropertyValue("completeSubtree")
                            }
                        }
                        
                        
                        export interface N_EvalAnythingExpr extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_tests_EvalAnythingExpr: boolean
                            anything: SingleChildAccessor<L_jetbrains_mps_lang_core.N_BaseConcept>
                        }
                        
                        export namespace N_EvalAnythingExpr {
                            export function isInstance(node: ITypedNode): node is N_EvalAnythingExpr {
                                return '_is_org_iets3_core_expr_tests_EvalAnythingExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EvalAnythingExpr extends TypedNode implements N_EvalAnythingExpr {
                            public _is_org_iets3_core_expr_tests_EvalAnythingExpr: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public anything: SingleChildAccessor<L_jetbrains_mps_lang_core.N_BaseConcept> = new SingleChildAccessor(this.node, "anything")
                        }
                        
            
            export interface N_ITestItemContainer extends ITypedNode {
                _is_org_iets3_core_expr_tests_ITestItemContainer: boolean
                
            }
            
            export namespace N_ITestItemContainer {
                export function isInstance(node: ITypedNode): node is N_ITestItemContainer {
                    return '_is_org_iets3_core_expr_tests_ITestItemContainer' in node;
                }
            }
            
            export class _N_TypedImpl_ITestItemContainer extends TypedNode implements N_ITestItemContainer {
                public _is_org_iets3_core_expr_tests_ITestItemContainer: boolean = true
                
            }
            }