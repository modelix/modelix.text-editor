            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
import {L_de_slisson_mps_richtext} from "./L_de_slisson_mps_richtext";
import {L_org_iets3_core_expr_base} from "./L_org_iets3_core_expr_base";
            
            export namespace L_org_iets3_core_expr_simpleTypes {
            
            export class L_org_iets3_core_expr_simpleTypes extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_expr_simpleTypes = new L_org_iets3_core_expr_simpleTypes();
                constructor() {
                    super("org.iets3.core.expr.simpleTypes")
                    
                    this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/7425695345928349207", (node: INodeJS) => new BooleanType(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/7425695345928358742", (node: INodeJS) => new BooleanLiteral(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/7425695345928358745", (node: INodeJS) => new TrueLiteral(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/7425695345928358774", (node: INodeJS) => new FalseLiteral(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157054168", (node: INodeJS) => new NumericType(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157054169", (node: INodeJS) => new IntegerType(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157054170", (node: INodeJS) => new NumberLiteral(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157054284", (node: INodeJS) => new RealType(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157252551", (node: INodeJS) => new StringType(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157252552", (node: INodeJS) => new StringLiteral(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/7971844778467001950", (node: INodeJS) => new OtherwiseLiteral(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/1330041117646892901", (node: INodeJS) => new NumberRangeSpec(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8219602584782245544", (node: INodeJS) => new NumberType(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/1330041117646892924", (node: INodeJS) => new NumberPrecSpec(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8825352096209502465", (node: INodeJS) => new ConvertPrecisionNumberExpression(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8825352096209502736", (node: INodeJS) => new RoundingMode(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8825352096209507273", (node: INodeJS) => new TruncateRoundingMode(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8825352096210456368", (node: INodeJS) => new RoundDownRoundingMode(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8825352096210458329", (node: INodeJS) => new RoundUpRoundingMode(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/4723261570619513260", (node: INodeJS) => new LimitExpression(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5994308065090560488", (node: INodeJS) => new StringLengthTarget(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5994308065090560489", (node: INodeJS) => new AbstractStringDotTarget(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/842813880843519728", (node: INodeJS) => new StringContainsTarget(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8293738266739942474", (node: INodeJS) => new StringInterpolationExpr(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8293738266739943650", (node: INodeJS) => new InterpolExprWord(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5880303268806840041", (node: INodeJS) => new StringStartsWithTarget(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/4880743667108569396", (node: INodeJS) => new BoundsExpression(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/4513425716319387765", (node: INodeJS) => new StringToIntTarget(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/4668305294413323442", (node: INodeJS) => new ToleranceExpr(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/2524315536761142456", (node: INodeJS) => new RoundHalfUpRoundingMode(node))
this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5971688866943282227", (node: INodeJS) => new StringEndsWithTarget(node))
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
            
                                    export class BooleanType extends TypedNode {
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
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.base.PrimitiveType 
            // super concept: org.iets3.core.expr.base.Type 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.IType 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.ITypeSupportsDefaultValue 
                        }
                        
                        export class BooleanLiteral extends TypedNode {
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
                            
                            // super concept: org.iets3.core.expr.base.PrimitiveLiteral 
            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ILiteral 
            // super concept: com.mbeddr.mpsutil.interpreter.ITrivialNode 
                        }
                        
                        export class TrueLiteral extends TypedNode {
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
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.simpleTypes.BooleanLiteral 
            // super concept: org.iets3.core.expr.base.PrimitiveLiteral 
            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ILiteral 
            // super concept: com.mbeddr.mpsutil.interpreter.ITrivialNode 
            // super concept: org.iets3.analysis.base.ICanBeMappedToSolver 
                        }
                        
                        export class FalseLiteral extends TypedNode {
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
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.simpleTypes.BooleanLiteral 
            // super concept: org.iets3.core.expr.base.PrimitiveLiteral 
            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ILiteral 
            // super concept: com.mbeddr.mpsutil.interpreter.ITrivialNode 
            // super concept: org.iets3.analysis.base.ICanBeMappedToSolver 
                        }
                        
                        export class NumericType extends TypedNode {
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
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.base.PrimitiveType 
            // super concept: org.iets3.core.expr.base.Type 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.IType 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.ITypeSupportsDefaultValue 
                        }
                        
                        export class IntegerType extends TypedNode {
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
                            
                            // super concept: org.iets3.core.expr.simpleTypes.NumericType 
            // super concept: org.iets3.core.expr.base.PrimitiveType 
            // super concept: org.iets3.core.expr.base.Type 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.IType 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.ITypeSupportsDefaultValue 
                        }
                        
                        export class NumberLiteral extends TypedNode {
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
                            public set value(value: string | undefined) {
                                this.node.setPropertyValue("value", value)
                            }
                            public get value(): string | undefined {
                                return this.node.getPropertyValue("value")
                            }
                            // feature: value 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.base.PrimitiveLiteral 
            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ILiteral 
            // super concept: com.mbeddr.mpsutil.interpreter.ITrivialNode 
            // super concept: org.iets3.analysis.base.ICanBeMappedToSolver 
            // super concept: org.iets3.core.expr.base.INeverAllowDot 
                        }
                        
                        export class RealType extends TypedNode {
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
                            
                            // super concept: org.iets3.core.expr.simpleTypes.NumericType 
            // super concept: org.iets3.core.expr.base.PrimitiveType 
            // super concept: org.iets3.core.expr.base.Type 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.IType 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.ITypeSupportsDefaultValue 
                        }
                        
                        export class StringType extends TypedNode {
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
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.base.PrimitiveType 
            // super concept: org.iets3.core.expr.base.Type 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.IType 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.ITypeSupportsDefaultValue 
                        }
                        
                        export class StringLiteral extends TypedNode {
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
                            public set value(value: string | undefined) {
                                this.node.setPropertyValue("value", value)
                            }
                            public get value(): string | undefined {
                                return this.node.getPropertyValue("value")
                            }
                            // feature: value 
                            // super concept: org.iets3.core.expr.base.PrimitiveLiteral 
            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ILiteral 
            // super concept: com.mbeddr.mpsutil.interpreter.ITrivialNode 
                        }
                        
                        export class OtherwiseLiteral extends TypedNode {
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
                            
                            // super concept: org.iets3.core.expr.simpleTypes.BooleanLiteral 
            // super concept: org.iets3.core.expr.base.PrimitiveLiteral 
            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ILiteral 
            // super concept: com.mbeddr.mpsutil.interpreter.ITrivialNode 
                        }
                        
                        export class NumberRangeSpec extends TypedNode {
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
                            // feature: min 
            // feature: max 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class NumberType extends TypedNode {
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
                            public range: SingleChildAccessor<L_org_iets3_core_expr_simpleTypes.NumberRangeSpec> = new SingleChildAccessor(this.node, "range")
                            public prec: SingleChildAccessor<L_org_iets3_core_expr_simpleTypes.NumberPrecSpec> = new SingleChildAccessor(this.node, "prec")
                            // feature: range 
            // feature: prec 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.base.PrimitiveType 
            // super concept: org.iets3.core.expr.base.Type 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.IType 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.ITypeSupportsDefaultValue 
                        }
            
            export class NumberPrecSpec extends TypedNode {
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
                public set prec(value: string | undefined) {
                    this.node.setPropertyValue("prec", value)
                }
                public get prec(): string | undefined {
                    return this.node.getPropertyValue("prec")
                }
                // feature: prec 
                // super concept: jetbrains.mps.lang.core.BaseConcept 
            }
                        
                        export class ConvertPrecisionNumberExpression extends TypedNode {
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
                            public set targetPrecision(value: string | undefined) {
                                this.node.setPropertyValue("targetPrecision", value)
                            }
                            public get targetPrecision(): string | undefined {
                                return this.node.getPropertyValue("targetPrecision")
                            }
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expr")
                            public rounding: SingleChildAccessor<L_org_iets3_core_expr_simpleTypes.RoundingMode> = new SingleChildAccessor(this.node, "rounding")
                            // feature: targetPrecision 
            // feature: expr 
            // feature: rounding 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: com.mbeddr.mpsutil.interpreter.ICanHaveTestCoverage 
                        }
            
            export class RoundingMode extends TypedNode {
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
                        
                        export class TruncateRoundingMode extends TypedNode {
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
                            
                            // super concept: org.iets3.core.expr.simpleTypes.RoundingMode 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class RoundDownRoundingMode extends TypedNode {
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
                            
                            // super concept: org.iets3.core.expr.simpleTypes.RoundingMode 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class RoundUpRoundingMode extends TypedNode {
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
                            
                            // super concept: org.iets3.core.expr.simpleTypes.RoundingMode 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class LimitExpression extends TypedNode {
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
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.Type> = new SingleChildAccessor(this.node, "type")
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expr")
                            // feature: type 
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
                        
                        export class StringLengthTarget extends TypedNode {
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
                            
                            // super concept: org.iets3.core.expr.simpleTypes.AbstractStringDotTarget 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
                        }
                        
                        export class AbstractStringDotTarget extends TypedNode {
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
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
                        }
                        
                        export class StringContainsTarget extends TypedNode {
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
                            // super concept: org.iets3.core.expr.simpleTypes.AbstractStringDotTarget 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
                        }
                        
                        export class StringInterpolationExpr extends TypedNode {
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
                            public text: SingleChildAccessor<L_de_slisson_mps_richtext.Text> = new SingleChildAccessor(this.node, "text")
                            // feature: text 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.IMayHaveEffect 
            // super concept: org.iets3.core.expr.base.IReducableExpression 
                        }
                        
                        export class InterpolExprWord extends TypedNode {
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
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: de.slisson.mps.richtext.IWord 
            // super concept: org.iets3.core.expr.base.IMayHaveEffect 
                        }
                        
                        export class StringStartsWithTarget extends TypedNode {
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
                            // super concept: org.iets3.core.expr.simpleTypes.AbstractStringDotTarget 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
                        }
                        
                        export class BoundsExpression extends TypedNode {
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
                            public lower: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "lower")
                            public upper: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "upper")
                            // feature: expr 
            // feature: lower 
            // feature: upper 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
                        }
                        
                        export class StringToIntTarget extends TypedNode {
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
                            
                            // super concept: org.iets3.core.expr.simpleTypes.AbstractStringDotTarget 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
                        }
                        
                        export class ToleranceExpr extends TypedNode {
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
                            public tolerance: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "tolerance")
                            // feature: value 
            // feature: tolerance 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
                        }
                        
                        export class RoundHalfUpRoundingMode extends TypedNode {
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
                            
                            // super concept: org.iets3.core.expr.simpleTypes.RoundingMode 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class StringEndsWithTarget extends TypedNode {
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
                            // super concept: org.iets3.core.expr.simpleTypes.AbstractStringDotTarget 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
                        }
            }