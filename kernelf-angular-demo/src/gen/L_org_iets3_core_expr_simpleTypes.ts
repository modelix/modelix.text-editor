            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
import {L_org_iets3_analysis_base} from "./L_org_iets3_analysis_base";
import {L_de_slisson_mps_richtext} from "./L_de_slisson_mps_richtext";
import {L_com_mbeddr_mpsutil_interpreter} from "./L_com_mbeddr_mpsutil_interpreter";
import {L_org_iets3_core_expr_base} from "./L_org_iets3_core_expr_base";
            
            export namespace L_org_iets3_core_expr_simpleTypes {
            
            export class L_org_iets3_core_expr_simpleTypes extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_expr_simpleTypes = new L_org_iets3_core_expr_simpleTypes();
                constructor() {
                    super("org.iets3.core.expr.simpleTypes")
                    
                    this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/7425695345928349207", (node: INodeJS) => new _N_TypedImpl_BooleanType(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/7425695345928358742", (node: INodeJS) => new _N_TypedImpl_BooleanLiteral(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/7425695345928358745", (node: INodeJS) => new _N_TypedImpl_TrueLiteral(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/7425695345928358774", (node: INodeJS) => new _N_TypedImpl_FalseLiteral(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157054168", (node: INodeJS) => new _N_TypedImpl_NumericType(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157054169", (node: INodeJS) => new _N_TypedImpl_IntegerType(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157054170", (node: INodeJS) => new _N_TypedImpl_NumberLiteral(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157054284", (node: INodeJS) => new _N_TypedImpl_RealType(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157252551", (node: INodeJS) => new _N_TypedImpl_StringType(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157252552", (node: INodeJS) => new _N_TypedImpl_StringLiteral(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/7971844778467001950", (node: INodeJS) => new _N_TypedImpl_OtherwiseLiteral(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/1330041117646892901", (node: INodeJS) => new _N_TypedImpl_NumberRangeSpec(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8219602584782245544", (node: INodeJS) => new _N_TypedImpl_NumberType(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/1330041117646892924", (node: INodeJS) => new _N_TypedImpl_NumberPrecSpec(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8825352096209502465", (node: INodeJS) => new _N_TypedImpl_ConvertPrecisionNumberExpression(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8825352096209502736", (node: INodeJS) => new _N_TypedImpl_RoundingMode(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8825352096209507273", (node: INodeJS) => new _N_TypedImpl_TruncateRoundingMode(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8825352096210456368", (node: INodeJS) => new _N_TypedImpl_RoundDownRoundingMode(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8825352096210458329", (node: INodeJS) => new _N_TypedImpl_RoundUpRoundingMode(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/4723261570619513260", (node: INodeJS) => new _N_TypedImpl_LimitExpression(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5994308065090560488", (node: INodeJS) => new _N_TypedImpl_StringLengthTarget(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5994308065090560489", (node: INodeJS) => new _N_TypedImpl_AbstractStringDotTarget(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/842813880843519728", (node: INodeJS) => new _N_TypedImpl_StringContainsTarget(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8293738266739942474", (node: INodeJS) => new _N_TypedImpl_StringInterpolationExpr(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8293738266739943650", (node: INodeJS) => new _N_TypedImpl_InterpolExprWord(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5880303268806840041", (node: INodeJS) => new _N_TypedImpl_StringStartsWithTarget(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/4880743667108569396", (node: INodeJS) => new _N_TypedImpl_BoundsExpression(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/4513425716319387765", (node: INodeJS) => new _N_TypedImpl_StringToIntTarget(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/4668305294413323442", (node: INodeJS) => new _N_TypedImpl_ToleranceExpr(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/2524315536761142456", (node: INodeJS) => new _N_TypedImpl_RoundHalfUpRoundingMode(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5971688866943282227", (node: INodeJS) => new _N_TypedImpl_StringEndsWithTarget(node))
                }
                /*
                public getConcepts() {
                    return [this.BooleanType, this.BooleanLiteral, this.TrueLiteral, this.FalseLiteral, this.NumericType, this.IntegerType, this.NumberLiteral, this.RealType, this.StringType, this.StringLiteral, this.OtherwiseLiteral, this.NumberRangeSpec, this.NumberType, this.NumberPrecSpec, this.ConvertPrecisionNumberExpression, this.RoundingMode, this.TruncateRoundingMode, this.RoundDownRoundingMode, this.RoundUpRoundingMode, this.LimitExpression, this.StringLengthTarget, this.AbstractStringDotTarget, this.StringContainsTarget, this.StringInterpolationExpr, this.InterpolExprWord, this.StringStartsWithTarget, this.BoundsExpression, this.StringToIntTarget, this.ToleranceExpr, this.RoundHalfUpRoundingMode, this.StringEndsWithTarget]
                }
                                public BooleanType: _C_Impl_BooleanType = _C_Impl_BooleanType
                public BooleanLiteral: _C_Impl_BooleanLiteral = _C_Impl_BooleanLiteral
                public TrueLiteral: _C_Impl_TrueLiteral = _C_Impl_TrueLiteral
                public FalseLiteral: _C_Impl_FalseLiteral = _C_Impl_FalseLiteral
                public NumericType: _C_Impl_NumericType = _C_Impl_NumericType
                public IntegerType: _C_Impl_IntegerType = _C_Impl_IntegerType
                public NumberLiteral: _C_Impl_NumberLiteral = _C_Impl_NumberLiteral
                public RealType: _C_Impl_RealType = _C_Impl_RealType
                public StringType: _C_Impl_StringType = _C_Impl_StringType
                public StringLiteral: _C_Impl_StringLiteral = _C_Impl_StringLiteral
                public OtherwiseLiteral: _C_Impl_OtherwiseLiteral = _C_Impl_OtherwiseLiteral
                public NumberRangeSpec: _C_Impl_NumberRangeSpec = _C_Impl_NumberRangeSpec
                public NumberType: _C_Impl_NumberType = _C_Impl_NumberType
                public NumberPrecSpec: _C_Impl_NumberPrecSpec = _C_Impl_NumberPrecSpec
                public ConvertPrecisionNumberExpression: _C_Impl_ConvertPrecisionNumberExpression = _C_Impl_ConvertPrecisionNumberExpression
                public RoundingMode: _C_Impl_RoundingMode = _C_Impl_RoundingMode
                public TruncateRoundingMode: _C_Impl_TruncateRoundingMode = _C_Impl_TruncateRoundingMode
                public RoundDownRoundingMode: _C_Impl_RoundDownRoundingMode = _C_Impl_RoundDownRoundingMode
                public RoundUpRoundingMode: _C_Impl_RoundUpRoundingMode = _C_Impl_RoundUpRoundingMode
                public LimitExpression: _C_Impl_LimitExpression = _C_Impl_LimitExpression
                public StringLengthTarget: _C_Impl_StringLengthTarget = _C_Impl_StringLengthTarget
                public AbstractStringDotTarget: _C_Impl_AbstractStringDotTarget = _C_Impl_AbstractStringDotTarget
                public StringContainsTarget: _C_Impl_StringContainsTarget = _C_Impl_StringContainsTarget
                public StringInterpolationExpr: _C_Impl_StringInterpolationExpr = _C_Impl_StringInterpolationExpr
                public InterpolExprWord: _C_Impl_InterpolExprWord = _C_Impl_InterpolExprWord
                public StringStartsWithTarget: _C_Impl_StringStartsWithTarget = _C_Impl_StringStartsWithTarget
                public BoundsExpression: _C_Impl_BoundsExpression = _C_Impl_BoundsExpression
                public StringToIntTarget: _C_Impl_StringToIntTarget = _C_Impl_StringToIntTarget
                public ToleranceExpr: _C_Impl_ToleranceExpr = _C_Impl_ToleranceExpr
                public RoundHalfUpRoundingMode: _C_Impl_RoundHalfUpRoundingMode = _C_Impl_RoundHalfUpRoundingMode
                public StringEndsWithTarget: _C_Impl_StringEndsWithTarget = _C_Impl_StringEndsWithTarget
                */
            }
            export const INSTANCE = L_org_iets3_core_expr_simpleTypes.INSTANCE
            
                                    export interface N_BooleanType extends L_org_iets3_core_expr_base.N_PrimitiveType, L_org_iets3_core_expr_base.N_ITypeSupportsDefaultValue {
                            _is_org_iets3_core_expr_simpleTypes_BooleanType: boolean
                            
                        }
                        
                        export namespace N_BooleanType {
                            export function isInstance(node: ITypedNode): node is N_BooleanType {
                                return '_is_org_iets3_core_expr_simpleTypes_BooleanType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BooleanType extends TypedNode implements N_BooleanType {
                            public _is_org_iets3_core_expr_simpleTypes_BooleanType: boolean = true
            public _is_org_iets3_core_expr_base_PrimitiveType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_ITypeSupportsDefaultValue: boolean = true
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
                        
                        
                        export interface N_BooleanLiteral extends L_org_iets3_core_expr_base.N_PrimitiveLiteral {
                            _is_org_iets3_core_expr_simpleTypes_BooleanLiteral: boolean
                            
                        }
                        
                        export namespace N_BooleanLiteral {
                            export function isInstance(node: ITypedNode): node is N_BooleanLiteral {
                                return '_is_org_iets3_core_expr_simpleTypes_BooleanLiteral' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BooleanLiteral extends TypedNode implements N_BooleanLiteral {
                            public _is_org_iets3_core_expr_simpleTypes_BooleanLiteral: boolean = true
            public _is_org_iets3_core_expr_base_PrimitiveLiteral: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ILiteral: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITrivialNode: boolean = true
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
                        
                        
                        export interface N_TrueLiteral extends N_BooleanLiteral, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_simpleTypes_TrueLiteral: boolean
                            
                        }
                        
                        export namespace N_TrueLiteral {
                            export function isInstance(node: ITypedNode): node is N_TrueLiteral {
                                return '_is_org_iets3_core_expr_simpleTypes_TrueLiteral' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TrueLiteral extends TypedNode implements N_TrueLiteral {
                            public _is_org_iets3_core_expr_simpleTypes_TrueLiteral: boolean = true
            public _is_org_iets3_core_expr_simpleTypes_BooleanLiteral: boolean = true
            public _is_org_iets3_core_expr_base_PrimitiveLiteral: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ILiteral: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITrivialNode: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
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
                        
                        
                        export interface N_FalseLiteral extends N_BooleanLiteral, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_simpleTypes_FalseLiteral: boolean
                            
                        }
                        
                        export namespace N_FalseLiteral {
                            export function isInstance(node: ITypedNode): node is N_FalseLiteral {
                                return '_is_org_iets3_core_expr_simpleTypes_FalseLiteral' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FalseLiteral extends TypedNode implements N_FalseLiteral {
                            public _is_org_iets3_core_expr_simpleTypes_FalseLiteral: boolean = true
            public _is_org_iets3_core_expr_simpleTypes_BooleanLiteral: boolean = true
            public _is_org_iets3_core_expr_base_PrimitiveLiteral: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ILiteral: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITrivialNode: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
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
                        
                        
                        export interface N_NumericType extends L_org_iets3_core_expr_base.N_PrimitiveType, L_org_iets3_core_expr_base.N_ITypeSupportsDefaultValue {
                            _is_org_iets3_core_expr_simpleTypes_NumericType: boolean
                            
                        }
                        
                        export namespace N_NumericType {
                            export function isInstance(node: ITypedNode): node is N_NumericType {
                                return '_is_org_iets3_core_expr_simpleTypes_NumericType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NumericType extends TypedNode implements N_NumericType {
                            public _is_org_iets3_core_expr_simpleTypes_NumericType: boolean = true
            public _is_org_iets3_core_expr_base_PrimitiveType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_ITypeSupportsDefaultValue: boolean = true
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
                        
                        
                        export interface N_IntegerType extends N_NumericType {
                            _is_org_iets3_core_expr_simpleTypes_IntegerType: boolean
                            
                        }
                        
                        export namespace N_IntegerType {
                            export function isInstance(node: ITypedNode): node is N_IntegerType {
                                return '_is_org_iets3_core_expr_simpleTypes_IntegerType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IntegerType extends TypedNode implements N_IntegerType {
                            public _is_org_iets3_core_expr_simpleTypes_IntegerType: boolean = true
            public _is_org_iets3_core_expr_simpleTypes_NumericType: boolean = true
            public _is_org_iets3_core_expr_base_PrimitiveType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_ITypeSupportsDefaultValue: boolean = true
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
                        
                        
                        export interface N_NumberLiteral extends L_org_iets3_core_expr_base.N_PrimitiveLiteral, L_org_iets3_analysis_base.N_ICanBeMappedToSolver, L_org_iets3_core_expr_base.N_INeverAllowDot {
                            _is_org_iets3_core_expr_simpleTypes_NumberLiteral: boolean
                            value: string | undefined
                        }
                        
                        export namespace N_NumberLiteral {
                            export function isInstance(node: ITypedNode): node is N_NumberLiteral {
                                return '_is_org_iets3_core_expr_simpleTypes_NumberLiteral' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NumberLiteral extends TypedNode implements N_NumberLiteral {
                            public _is_org_iets3_core_expr_simpleTypes_NumberLiteral: boolean = true
            public _is_org_iets3_core_expr_base_PrimitiveLiteral: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ILiteral: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITrivialNode: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
            public _is_org_iets3_core_expr_base_INeverAllowDot: boolean = true
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
                            public set value(value: string | undefined) {
                                this.node.setPropertyValue("value", value)
                            }
                            public get value(): string | undefined {
                                return this.node.getPropertyValue("value")
                            }
                        }
                        
                        
                        export interface N_RealType extends N_NumericType {
                            _is_org_iets3_core_expr_simpleTypes_RealType: boolean
                            
                        }
                        
                        export namespace N_RealType {
                            export function isInstance(node: ITypedNode): node is N_RealType {
                                return '_is_org_iets3_core_expr_simpleTypes_RealType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RealType extends TypedNode implements N_RealType {
                            public _is_org_iets3_core_expr_simpleTypes_RealType: boolean = true
            public _is_org_iets3_core_expr_simpleTypes_NumericType: boolean = true
            public _is_org_iets3_core_expr_base_PrimitiveType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_ITypeSupportsDefaultValue: boolean = true
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
                        
                        
                        export interface N_StringType extends L_org_iets3_core_expr_base.N_PrimitiveType, L_org_iets3_core_expr_base.N_ITypeSupportsDefaultValue {
                            _is_org_iets3_core_expr_simpleTypes_StringType: boolean
                            
                        }
                        
                        export namespace N_StringType {
                            export function isInstance(node: ITypedNode): node is N_StringType {
                                return '_is_org_iets3_core_expr_simpleTypes_StringType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_StringType extends TypedNode implements N_StringType {
                            public _is_org_iets3_core_expr_simpleTypes_StringType: boolean = true
            public _is_org_iets3_core_expr_base_PrimitiveType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_ITypeSupportsDefaultValue: boolean = true
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
                        
                        
                        export interface N_StringLiteral extends L_org_iets3_core_expr_base.N_PrimitiveLiteral {
                            _is_org_iets3_core_expr_simpleTypes_StringLiteral: boolean
                            value: string | undefined
                        }
                        
                        export namespace N_StringLiteral {
                            export function isInstance(node: ITypedNode): node is N_StringLiteral {
                                return '_is_org_iets3_core_expr_simpleTypes_StringLiteral' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_StringLiteral extends TypedNode implements N_StringLiteral {
                            public _is_org_iets3_core_expr_simpleTypes_StringLiteral: boolean = true
            public _is_org_iets3_core_expr_base_PrimitiveLiteral: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ILiteral: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITrivialNode: boolean = true
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
                            public set value(value: string | undefined) {
                                this.node.setPropertyValue("value", value)
                            }
                            public get value(): string | undefined {
                                return this.node.getPropertyValue("value")
                            }
                        }
                        
                        
                        export interface N_OtherwiseLiteral extends N_BooleanLiteral {
                            _is_org_iets3_core_expr_simpleTypes_OtherwiseLiteral: boolean
                            
                        }
                        
                        export namespace N_OtherwiseLiteral {
                            export function isInstance(node: ITypedNode): node is N_OtherwiseLiteral {
                                return '_is_org_iets3_core_expr_simpleTypes_OtherwiseLiteral' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_OtherwiseLiteral extends TypedNode implements N_OtherwiseLiteral {
                            public _is_org_iets3_core_expr_simpleTypes_OtherwiseLiteral: boolean = true
            public _is_org_iets3_core_expr_simpleTypes_BooleanLiteral: boolean = true
            public _is_org_iets3_core_expr_base_PrimitiveLiteral: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ILiteral: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITrivialNode: boolean = true
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
                        
                        
                        export interface N_NumberRangeSpec extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_simpleTypes_NumberRangeSpec: boolean
                            min: string | undefined
            max: string | undefined
                        }
                        
                        export namespace N_NumberRangeSpec {
                            export function isInstance(node: ITypedNode): node is N_NumberRangeSpec {
                                return '_is_org_iets3_core_expr_simpleTypes_NumberRangeSpec' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NumberRangeSpec extends TypedNode implements N_NumberRangeSpec {
                            public _is_org_iets3_core_expr_simpleTypes_NumberRangeSpec: boolean = true
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
                            public set min(value: string | undefined) {
                                this.node.setPropertyValue("min", value)
                            }
                            public get min(): string | undefined {
                                return this.node.getPropertyValue("min")
                            }
                            public set max(value: string | undefined) {
                                this.node.setPropertyValue("max", value)
                            }
                            public get max(): string | undefined {
                                return this.node.getPropertyValue("max")
                            }
                        }
                        
                        
                        export interface N_NumberType extends L_org_iets3_core_expr_base.N_PrimitiveType, L_org_iets3_core_expr_base.N_ITypeSupportsDefaultValue {
                            _is_org_iets3_core_expr_simpleTypes_NumberType: boolean
                            range: SingleChildAccessor<N_NumberRangeSpec>
            prec: SingleChildAccessor<N_NumberPrecSpec>
                        }
                        
                        export namespace N_NumberType {
                            export function isInstance(node: ITypedNode): node is N_NumberType {
                                return '_is_org_iets3_core_expr_simpleTypes_NumberType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NumberType extends TypedNode implements N_NumberType {
                            public _is_org_iets3_core_expr_simpleTypes_NumberType: boolean = true
            public _is_org_iets3_core_expr_base_PrimitiveType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_ITypeSupportsDefaultValue: boolean = true
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
                            public range: SingleChildAccessor<N_NumberRangeSpec> = new SingleChildAccessor(this.node, "range")
                            public prec: SingleChildAccessor<N_NumberPrecSpec> = new SingleChildAccessor(this.node, "prec")
                        }
                        
                        
                        export interface N_NumberPrecSpec extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_simpleTypes_NumberPrecSpec: boolean
                            prec: string | undefined
                        }
                        
                        export namespace N_NumberPrecSpec {
                            export function isInstance(node: ITypedNode): node is N_NumberPrecSpec {
                                return '_is_org_iets3_core_expr_simpleTypes_NumberPrecSpec' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NumberPrecSpec extends TypedNode implements N_NumberPrecSpec {
                            public _is_org_iets3_core_expr_simpleTypes_NumberPrecSpec: boolean = true
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
                            public set prec(value: string | undefined) {
                                this.node.setPropertyValue("prec", value)
                            }
                            public get prec(): string | undefined {
                                return this.node.getPropertyValue("prec")
                            }
                        }
                        
                        
                        export interface N_ConvertPrecisionNumberExpression extends L_org_iets3_core_expr_base.N_Expression, L_com_mbeddr_mpsutil_interpreter.N_ICanHaveTestCoverage {
                            _is_org_iets3_core_expr_simpleTypes_ConvertPrecisionNumberExpression: boolean
                            targetPrecision: string | undefined
            expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
            rounding: SingleChildAccessor<N_RoundingMode>
                        }
                        
                        export namespace N_ConvertPrecisionNumberExpression {
                            export function isInstance(node: ITypedNode): node is N_ConvertPrecisionNumberExpression {
                                return '_is_org_iets3_core_expr_simpleTypes_ConvertPrecisionNumberExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ConvertPrecisionNumberExpression extends TypedNode implements N_ConvertPrecisionNumberExpression {
                            public _is_org_iets3_core_expr_simpleTypes_ConvertPrecisionNumberExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ICanHaveTestCoverage: boolean = true
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
                            public set targetPrecision(value: string | undefined) {
                                this.node.setPropertyValue("targetPrecision", value)
                            }
                            public get targetPrecision(): string | undefined {
                                return this.node.getPropertyValue("targetPrecision")
                            }
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "expr")
                            public rounding: SingleChildAccessor<N_RoundingMode> = new SingleChildAccessor(this.node, "rounding")
                        }
                        
                        
                        export interface N_RoundingMode extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_simpleTypes_RoundingMode: boolean
                            
                        }
                        
                        export namespace N_RoundingMode {
                            export function isInstance(node: ITypedNode): node is N_RoundingMode {
                                return '_is_org_iets3_core_expr_simpleTypes_RoundingMode' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RoundingMode extends TypedNode implements N_RoundingMode {
                            public _is_org_iets3_core_expr_simpleTypes_RoundingMode: boolean = true
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
                        
                        
                        export interface N_TruncateRoundingMode extends N_RoundingMode {
                            _is_org_iets3_core_expr_simpleTypes_TruncateRoundingMode: boolean
                            
                        }
                        
                        export namespace N_TruncateRoundingMode {
                            export function isInstance(node: ITypedNode): node is N_TruncateRoundingMode {
                                return '_is_org_iets3_core_expr_simpleTypes_TruncateRoundingMode' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TruncateRoundingMode extends TypedNode implements N_TruncateRoundingMode {
                            public _is_org_iets3_core_expr_simpleTypes_TruncateRoundingMode: boolean = true
            public _is_org_iets3_core_expr_simpleTypes_RoundingMode: boolean = true
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
                        
                        
                        export interface N_RoundDownRoundingMode extends N_RoundingMode {
                            _is_org_iets3_core_expr_simpleTypes_RoundDownRoundingMode: boolean
                            
                        }
                        
                        export namespace N_RoundDownRoundingMode {
                            export function isInstance(node: ITypedNode): node is N_RoundDownRoundingMode {
                                return '_is_org_iets3_core_expr_simpleTypes_RoundDownRoundingMode' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RoundDownRoundingMode extends TypedNode implements N_RoundDownRoundingMode {
                            public _is_org_iets3_core_expr_simpleTypes_RoundDownRoundingMode: boolean = true
            public _is_org_iets3_core_expr_simpleTypes_RoundingMode: boolean = true
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
                        
                        
                        export interface N_RoundUpRoundingMode extends N_RoundingMode {
                            _is_org_iets3_core_expr_simpleTypes_RoundUpRoundingMode: boolean
                            
                        }
                        
                        export namespace N_RoundUpRoundingMode {
                            export function isInstance(node: ITypedNode): node is N_RoundUpRoundingMode {
                                return '_is_org_iets3_core_expr_simpleTypes_RoundUpRoundingMode' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RoundUpRoundingMode extends TypedNode implements N_RoundUpRoundingMode {
                            public _is_org_iets3_core_expr_simpleTypes_RoundUpRoundingMode: boolean = true
            public _is_org_iets3_core_expr_simpleTypes_RoundingMode: boolean = true
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
                        
                        
                        export interface N_LimitExpression extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_simpleTypes_LimitExpression: boolean
                            type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
            expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_LimitExpression {
                            export function isInstance(node: ITypedNode): node is N_LimitExpression {
                                return '_is_org_iets3_core_expr_simpleTypes_LimitExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LimitExpression extends TypedNode implements N_LimitExpression {
                            public _is_org_iets3_core_expr_simpleTypes_LimitExpression: boolean = true
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
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "type")
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "expr")
                        }
                        
                        
                        export interface N_StringLengthTarget extends N_AbstractStringDotTarget {
                            _is_org_iets3_core_expr_simpleTypes_StringLengthTarget: boolean
                            
                        }
                        
                        export namespace N_StringLengthTarget {
                            export function isInstance(node: ITypedNode): node is N_StringLengthTarget {
                                return '_is_org_iets3_core_expr_simpleTypes_StringLengthTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_StringLengthTarget extends TypedNode implements N_StringLengthTarget {
                            public _is_org_iets3_core_expr_simpleTypes_StringLengthTarget: boolean = true
            public _is_org_iets3_core_expr_simpleTypes_AbstractStringDotTarget: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                        
                        
                        export interface N_AbstractStringDotTarget extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget {
                            _is_org_iets3_core_expr_simpleTypes_AbstractStringDotTarget: boolean
                            
                        }
                        
                        export namespace N_AbstractStringDotTarget {
                            export function isInstance(node: ITypedNode): node is N_AbstractStringDotTarget {
                                return '_is_org_iets3_core_expr_simpleTypes_AbstractStringDotTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractStringDotTarget extends TypedNode implements N_AbstractStringDotTarget {
                            public _is_org_iets3_core_expr_simpleTypes_AbstractStringDotTarget: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                        
                        
                        export interface N_StringContainsTarget extends N_AbstractStringDotTarget {
                            _is_org_iets3_core_expr_simpleTypes_StringContainsTarget: boolean
                            value: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_StringContainsTarget {
                            export function isInstance(node: ITypedNode): node is N_StringContainsTarget {
                                return '_is_org_iets3_core_expr_simpleTypes_StringContainsTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_StringContainsTarget extends TypedNode implements N_StringContainsTarget {
                            public _is_org_iets3_core_expr_simpleTypes_StringContainsTarget: boolean = true
            public _is_org_iets3_core_expr_simpleTypes_AbstractStringDotTarget: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                        
                        
                        export interface N_StringInterpolationExpr extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_IMayHaveEffect, L_org_iets3_core_expr_base.N_IReducableExpression {
                            _is_org_iets3_core_expr_simpleTypes_StringInterpolationExpr: boolean
                            text: SingleChildAccessor<L_de_slisson_mps_richtext.N_Text>
                        }
                        
                        export namespace N_StringInterpolationExpr {
                            export function isInstance(node: ITypedNode): node is N_StringInterpolationExpr {
                                return '_is_org_iets3_core_expr_simpleTypes_StringInterpolationExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_StringInterpolationExpr extends TypedNode implements N_StringInterpolationExpr {
                            public _is_org_iets3_core_expr_simpleTypes_StringInterpolationExpr: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_core_expr_base_IReducableExpression: boolean = true
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
                            public text: SingleChildAccessor<L_de_slisson_mps_richtext.N_Text> = new SingleChildAccessor(this.node, "text")
                        }
                        
                        
                        export interface N_InterpolExprWord extends L_jetbrains_mps_lang_core.N_BaseConcept, L_de_slisson_mps_richtext.N_IWord, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_simpleTypes_InterpolExprWord: boolean
                            expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_InterpolExprWord {
                            export function isInstance(node: ITypedNode): node is N_InterpolExprWord {
                                return '_is_org_iets3_core_expr_simpleTypes_InterpolExprWord' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_InterpolExprWord extends TypedNode implements N_InterpolExprWord {
                            public _is_org_iets3_core_expr_simpleTypes_InterpolExprWord: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_de_slisson_mps_richtext_IWord: boolean = true
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
                        
                        
                        export interface N_StringStartsWithTarget extends N_AbstractStringDotTarget {
                            _is_org_iets3_core_expr_simpleTypes_StringStartsWithTarget: boolean
                            value: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_StringStartsWithTarget {
                            export function isInstance(node: ITypedNode): node is N_StringStartsWithTarget {
                                return '_is_org_iets3_core_expr_simpleTypes_StringStartsWithTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_StringStartsWithTarget extends TypedNode implements N_StringStartsWithTarget {
                            public _is_org_iets3_core_expr_simpleTypes_StringStartsWithTarget: boolean = true
            public _is_org_iets3_core_expr_simpleTypes_AbstractStringDotTarget: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                        
                        
                        export interface N_BoundsExpression extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_simpleTypes_BoundsExpression: boolean
                            expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
            lower: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
            upper: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_BoundsExpression {
                            export function isInstance(node: ITypedNode): node is N_BoundsExpression {
                                return '_is_org_iets3_core_expr_simpleTypes_BoundsExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BoundsExpression extends TypedNode implements N_BoundsExpression {
                            public _is_org_iets3_core_expr_simpleTypes_BoundsExpression: boolean = true
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
                            public lower: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "lower")
                            public upper: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "upper")
                        }
                        
                        
                        export interface N_StringToIntTarget extends N_AbstractStringDotTarget {
                            _is_org_iets3_core_expr_simpleTypes_StringToIntTarget: boolean
                            
                        }
                        
                        export namespace N_StringToIntTarget {
                            export function isInstance(node: ITypedNode): node is N_StringToIntTarget {
                                return '_is_org_iets3_core_expr_simpleTypes_StringToIntTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_StringToIntTarget extends TypedNode implements N_StringToIntTarget {
                            public _is_org_iets3_core_expr_simpleTypes_StringToIntTarget: boolean = true
            public _is_org_iets3_core_expr_simpleTypes_AbstractStringDotTarget: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                        
                        
                        export interface N_ToleranceExpr extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_simpleTypes_ToleranceExpr: boolean
                            value: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
            tolerance: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_ToleranceExpr {
                            export function isInstance(node: ITypedNode): node is N_ToleranceExpr {
                                return '_is_org_iets3_core_expr_simpleTypes_ToleranceExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ToleranceExpr extends TypedNode implements N_ToleranceExpr {
                            public _is_org_iets3_core_expr_simpleTypes_ToleranceExpr: boolean = true
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
                            public value: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "value")
                            public tolerance: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "tolerance")
                        }
                        
                        
                        export interface N_RoundHalfUpRoundingMode extends N_RoundingMode {
                            _is_org_iets3_core_expr_simpleTypes_RoundHalfUpRoundingMode: boolean
                            
                        }
                        
                        export namespace N_RoundHalfUpRoundingMode {
                            export function isInstance(node: ITypedNode): node is N_RoundHalfUpRoundingMode {
                                return '_is_org_iets3_core_expr_simpleTypes_RoundHalfUpRoundingMode' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RoundHalfUpRoundingMode extends TypedNode implements N_RoundHalfUpRoundingMode {
                            public _is_org_iets3_core_expr_simpleTypes_RoundHalfUpRoundingMode: boolean = true
            public _is_org_iets3_core_expr_simpleTypes_RoundingMode: boolean = true
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
                        
                        
                        export interface N_StringEndsWithTarget extends N_AbstractStringDotTarget {
                            _is_org_iets3_core_expr_simpleTypes_StringEndsWithTarget: boolean
                            value: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_StringEndsWithTarget {
                            export function isInstance(node: ITypedNode): node is N_StringEndsWithTarget {
                                return '_is_org_iets3_core_expr_simpleTypes_StringEndsWithTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_StringEndsWithTarget extends TypedNode implements N_StringEndsWithTarget {
                            public _is_org_iets3_core_expr_simpleTypes_StringEndsWithTarget: boolean = true
            public _is_org_iets3_core_expr_simpleTypes_AbstractStringDotTarget: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
            }