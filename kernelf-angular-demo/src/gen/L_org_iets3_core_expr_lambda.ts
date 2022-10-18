            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_org_iets3_core_base} from "./L_org_iets3_core_base";
import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
import {L_org_iets3_analysis_base} from "./L_org_iets3_analysis_base";
import {L_com_mbeddr_mpsutil_varscope} from "./L_com_mbeddr_mpsutil_varscope";
import {L_com_mbeddr_core_base} from "./L_com_mbeddr_core_base";
import {L_com_mbeddr_mpsutil_interpreter} from "./L_com_mbeddr_mpsutil_interpreter";
import {L_org_iets3_core_expr_base} from "./L_org_iets3_core_expr_base";
            
            export namespace L_org_iets3_core_expr_lambda {
            
            export class L_org_iets3_core_expr_lambda extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_expr_lambda = new L_org_iets3_core_expr_lambda();
                constructor() {
                    super("org.iets3.core.expr.lambda")
                    
                    this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340107702", (node: INodeJS) => new _N_TypedImpl_FunctionType(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340318470", (node: INodeJS) => new _N_TypedImpl_LambdaExpression(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340318473", (node: INodeJS) => new _N_TypedImpl_IArgument(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340318478", (node: INodeJS) => new _N_TypedImpl_LambdaArg(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340370581", (node: INodeJS) => new _N_TypedImpl_LambdaArgRef(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340538608", (node: INodeJS) => new _N_TypedImpl_ILambdaDotTarget(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340542342", (node: INodeJS) => new _N_TypedImpl_ExecOp(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340741775", (node: INodeJS) => new _N_TypedImpl_IShortLambdaContainer(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340741814", (node: INodeJS) => new _N_TypedImpl_ShortLambdaExpression(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340826520", (node: INodeJS) => new _N_TypedImpl_ShortLambdaItExpression(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4790956042240100911", (node: INodeJS) => new _N_TypedImpl_IFunctionLike(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4790956042240100929", (node: INodeJS) => new _N_TypedImpl_FunctionArgument(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4790956042240407469", (node: INodeJS) => new _N_TypedImpl_ArgRef(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4790956042240522396", (node: INodeJS) => new _N_TypedImpl_IFunctionCall(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4790956042240745578", (node: INodeJS) => new _N_TypedImpl_IFunctionRef(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4790956042240983401", (node: INodeJS) => new _N_TypedImpl_BlockExpression(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4790956042241053102", (node: INodeJS) => new _N_TypedImpl_ValExpression(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4790956042241105569", (node: INodeJS) => new _N_TypedImpl_ValRef(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/2807135271606959809", (node: INodeJS) => new _N_TypedImpl_BindOp(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/2346756181080333959", (node: INodeJS) => new _N_TypedImpl_CapturedValue(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/867786408878526214", (node: INodeJS) => new _N_TypedImpl_ValValueInContractExpr(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/867786408880429238", (node: INodeJS) => new _N_TypedImpl_FunResExpr(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7791618349055796936", (node: INodeJS) => new _N_TypedImpl_EffectTag(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/3045596896722162595", (node: INodeJS) => new _N_TypedImpl_ILambdaLike(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/6095949300269462258", (node: INodeJS) => new _N_TypedImpl_IJoinedBlockContext(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/6850639405181398762", (node: INodeJS) => new _N_TypedImpl_FunCompose(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/6850639405182115289", (node: INodeJS) => new _N_TypedImpl_GenericFunctionType(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/6100571306011111439", (node: INodeJS) => new _N_TypedImpl_FunctionStyleExecOp(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/8237981399438528802", (node: INodeJS) => new _N_TypedImpl_AssertExpr(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/5096753237482793708", (node: INodeJS) => new _N_TypedImpl_ReadEffectTag(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/5096753237482793709", (node: INodeJS) => new _N_TypedImpl_ModifyEffectTag(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/5096753237482793710", (node: INodeJS) => new _N_TypedImpl_ReadModifyEffectTag(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4457827545956437641", (node: INodeJS) => new _N_TypedImpl_AttachedConstraint(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/2222228766292974329", (node: INodeJS) => new _N_TypedImpl_LocalVarDeclExpr(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/2222228766292974328", (node: INodeJS) => new _N_TypedImpl_IAllowLocalVariables(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/2222228766293363750", (node: INodeJS) => new _N_TypedImpl_LocalVarRef(node))
this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4226105675302315262", (node: INodeJS) => new _N_TypedImpl_IDeclaration(node))
                }
                /*
                public getConcepts() {
                    return [this.FunctionType, this.LambdaExpression, this.IArgument, this.LambdaArg, this.LambdaArgRef, this.ILambdaDotTarget, this.ExecOp, this.IShortLambdaContainer, this.ShortLambdaExpression, this.ShortLambdaItExpression, this.IFunctionLike, this.FunctionArgument, this.ArgRef, this.IFunctionCall, this.IFunctionRef, this.BlockExpression, this.ValExpression, this.ValRef, this.BindOp, this.CapturedValue, this.ValValueInContractExpr, this.FunResExpr, this.EffectTag, this.ILambdaLike, this.IJoinedBlockContext, this.FunCompose, this.GenericFunctionType, this.FunctionStyleExecOp, this.AssertExpr, this.ReadEffectTag, this.ModifyEffectTag, this.ReadModifyEffectTag, this.AttachedConstraint, this.LocalVarDeclExpr, this.IAllowLocalVariables, this.LocalVarRef, this.IDeclaration]
                }
                                public FunctionType: _C_Impl_FunctionType = _C_Impl_FunctionType
                public LambdaExpression: _C_Impl_LambdaExpression = _C_Impl_LambdaExpression
                public IArgument: _C_Impl_IArgument = _C_Impl_IArgument
                public LambdaArg: _C_Impl_LambdaArg = _C_Impl_LambdaArg
                public LambdaArgRef: _C_Impl_LambdaArgRef = _C_Impl_LambdaArgRef
                public ILambdaDotTarget: _C_Impl_ILambdaDotTarget = _C_Impl_ILambdaDotTarget
                public ExecOp: _C_Impl_ExecOp = _C_Impl_ExecOp
                public IShortLambdaContainer: _C_Impl_IShortLambdaContainer = _C_Impl_IShortLambdaContainer
                public ShortLambdaExpression: _C_Impl_ShortLambdaExpression = _C_Impl_ShortLambdaExpression
                public ShortLambdaItExpression: _C_Impl_ShortLambdaItExpression = _C_Impl_ShortLambdaItExpression
                public IFunctionLike: _C_Impl_IFunctionLike = _C_Impl_IFunctionLike
                public FunctionArgument: _C_Impl_FunctionArgument = _C_Impl_FunctionArgument
                public ArgRef: _C_Impl_ArgRef = _C_Impl_ArgRef
                public IFunctionCall: _C_Impl_IFunctionCall = _C_Impl_IFunctionCall
                public IFunctionRef: _C_Impl_IFunctionRef = _C_Impl_IFunctionRef
                public BlockExpression: _C_Impl_BlockExpression = _C_Impl_BlockExpression
                public ValExpression: _C_Impl_ValExpression = _C_Impl_ValExpression
                public ValRef: _C_Impl_ValRef = _C_Impl_ValRef
                public BindOp: _C_Impl_BindOp = _C_Impl_BindOp
                public CapturedValue: _C_Impl_CapturedValue = _C_Impl_CapturedValue
                public ValValueInContractExpr: _C_Impl_ValValueInContractExpr = _C_Impl_ValValueInContractExpr
                public FunResExpr: _C_Impl_FunResExpr = _C_Impl_FunResExpr
                public EffectTag: _C_Impl_EffectTag = _C_Impl_EffectTag
                public ILambdaLike: _C_Impl_ILambdaLike = _C_Impl_ILambdaLike
                public IJoinedBlockContext: _C_Impl_IJoinedBlockContext = _C_Impl_IJoinedBlockContext
                public FunCompose: _C_Impl_FunCompose = _C_Impl_FunCompose
                public GenericFunctionType: _C_Impl_GenericFunctionType = _C_Impl_GenericFunctionType
                public FunctionStyleExecOp: _C_Impl_FunctionStyleExecOp = _C_Impl_FunctionStyleExecOp
                public AssertExpr: _C_Impl_AssertExpr = _C_Impl_AssertExpr
                public ReadEffectTag: _C_Impl_ReadEffectTag = _C_Impl_ReadEffectTag
                public ModifyEffectTag: _C_Impl_ModifyEffectTag = _C_Impl_ModifyEffectTag
                public ReadModifyEffectTag: _C_Impl_ReadModifyEffectTag = _C_Impl_ReadModifyEffectTag
                public AttachedConstraint: _C_Impl_AttachedConstraint = _C_Impl_AttachedConstraint
                public LocalVarDeclExpr: _C_Impl_LocalVarDeclExpr = _C_Impl_LocalVarDeclExpr
                public IAllowLocalVariables: _C_Impl_IAllowLocalVariables = _C_Impl_IAllowLocalVariables
                public LocalVarRef: _C_Impl_LocalVarRef = _C_Impl_LocalVarRef
                public IDeclaration: _C_Impl_IDeclaration = _C_Impl_IDeclaration
                */
            }
            export const INSTANCE = L_org_iets3_core_expr_lambda.INSTANCE
            
                                    export interface N_FunctionType extends N_GenericFunctionType {
                            _is_org_iets3_core_expr_lambda_FunctionType: boolean
                            argumentTypes: ChildListAccessor<L_org_iets3_core_expr_base.N_Type>
            returnType: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
            effect: SingleChildAccessor<N_EffectTag>
                        }
                        
                        export namespace N_FunctionType {
                            export function isInstance(node: ITypedNode): node is N_FunctionType {
                                return '_is_org_iets3_core_expr_lambda_FunctionType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FunctionType extends TypedNode implements N_FunctionType {
                            public _is_org_iets3_core_expr_lambda_FunctionType: boolean = true
            public _is_org_iets3_core_expr_lambda_GenericFunctionType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
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
                            public argumentTypes: ChildListAccessor<L_org_iets3_core_expr_base.N_Type> = new ChildListAccessor(this.node, "argumentTypes")
                            public returnType: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "returnType")
                            public effect: SingleChildAccessor<N_EffectTag> = new SingleChildAccessor(this.node, "effect")
                        }
                        
                        
                        export interface N_LambdaExpression extends L_org_iets3_core_expr_base.N_Expression, L_com_mbeddr_core_base.N_IContainerOfUniqueNames, L_com_mbeddr_mpsutil_interpreter.N_ICanHaveTestCoverage, N_ILambdaLike, L_org_iets3_core_expr_base.N_IMayAllowEffect {
                            _is_org_iets3_core_expr_lambda_LambdaExpression: boolean
                            args: ChildListAccessor<N_LambdaArg>
            expression: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_LambdaExpression {
                            export function isInstance(node: ITypedNode): node is N_LambdaExpression {
                                return '_is_org_iets3_core_expr_lambda_LambdaExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LambdaExpression extends TypedNode implements N_LambdaExpression {
                            public _is_org_iets3_core_expr_lambda_LambdaExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_core_base_IContainerOfUniqueNames: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ICanHaveTestCoverage: boolean = true
            public _is_org_iets3_core_expr_lambda_ILambdaLike: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                            public args: ChildListAccessor<N_LambdaArg> = new ChildListAccessor(this.node, "args")
                            public expression: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "expression")
                        }
                        
                        
                        export interface N_IArgument extends L_org_iets3_core_base.N_IValidNamedConcept, L_org_iets3_core_expr_base.N_ISSConstrainedValue {
                            _is_org_iets3_core_expr_lambda_IArgument: boolean
                            type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
                        }
                        
                        export namespace N_IArgument {
                            export function isInstance(node: ITypedNode): node is N_IArgument {
                                return '_is_org_iets3_core_expr_lambda_IArgument' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IArgument extends TypedNode implements N_IArgument {
                            public _is_org_iets3_core_expr_lambda_IArgument: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_ISSConstrainedValue: boolean = true
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
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "type")
                        }
                        
                        
                        export interface N_LambdaArg extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IArgument {
                            _is_org_iets3_core_expr_lambda_LambdaArg: boolean
                            
                        }
                        
                        export namespace N_LambdaArg {
                            export function isInstance(node: ITypedNode): node is N_LambdaArg {
                                return '_is_org_iets3_core_expr_lambda_LambdaArg' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LambdaArg extends TypedNode implements N_LambdaArg {
                            public _is_org_iets3_core_expr_lambda_LambdaArg: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_lambda_IArgument: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_ISSConstrainedValue: boolean = true
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
                        
                        
                        export interface N_LambdaArgRef extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_ISingleSymbolRef {
                            _is_org_iets3_core_expr_lambda_LambdaArgRef: boolean
                                                
                        }
                        
                        export namespace N_LambdaArgRef {
                            export function isInstance(node: ITypedNode): node is N_LambdaArgRef {
                                return '_is_org_iets3_core_expr_lambda_LambdaArgRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LambdaArgRef extends TypedNode implements N_LambdaArgRef {
                            public _is_org_iets3_core_expr_lambda_LambdaArgRef: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ISingleSymbolRef: boolean = true
            public _is_org_iets3_core_expr_base_IIsSingleSymbol: boolean = true
            public _is_org_iets3_core_expr_base_IRef: boolean = true
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
                        
                        
                        export interface N_ILambdaDotTarget extends L_org_iets3_core_expr_base.N_IDotTarget {
                            _is_org_iets3_core_expr_lambda_ILambdaDotTarget: boolean
                            
                        }
                        
                        export namespace N_ILambdaDotTarget {
                            export function isInstance(node: ITypedNode): node is N_ILambdaDotTarget {
                                return '_is_org_iets3_core_expr_lambda_ILambdaDotTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ILambdaDotTarget extends TypedNode implements N_ILambdaDotTarget {
                            public _is_org_iets3_core_expr_lambda_ILambdaDotTarget: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
                            
                        }
                        
                        
                        export interface N_ExecOp extends L_jetbrains_mps_lang_core.N_BaseConcept, N_ILambdaDotTarget, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_lambda_ExecOp: boolean
                            args: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_ExecOp {
                            export function isInstance(node: ITypedNode): node is N_ExecOp {
                                return '_is_org_iets3_core_expr_lambda_ExecOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ExecOp extends TypedNode implements N_ExecOp {
                            public _is_org_iets3_core_expr_lambda_ExecOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_lambda_ILambdaDotTarget: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                            public args: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression> = new ChildListAccessor(this.node, "args")
                        }
                        
                        
                        export interface N_IShortLambdaContainer extends L_org_iets3_core_expr_base.N_IDotTarget {
                            _is_org_iets3_core_expr_lambda_IShortLambdaContainer: boolean
                            
                        }
                        
                        export namespace N_IShortLambdaContainer {
                            export function isInstance(node: ITypedNode): node is N_IShortLambdaContainer {
                                return '_is_org_iets3_core_expr_lambda_IShortLambdaContainer' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IShortLambdaContainer extends TypedNode implements N_IShortLambdaContainer {
                            public _is_org_iets3_core_expr_lambda_IShortLambdaContainer: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
                            
                        }
                        
                        
                        export interface N_ShortLambdaExpression extends L_org_iets3_core_expr_base.N_Expression, N_ILambdaLike {
                            _is_org_iets3_core_expr_lambda_ShortLambdaExpression: boolean
                            expression: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_ShortLambdaExpression {
                            export function isInstance(node: ITypedNode): node is N_ShortLambdaExpression {
                                return '_is_org_iets3_core_expr_lambda_ShortLambdaExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ShortLambdaExpression extends TypedNode implements N_ShortLambdaExpression {
                            public _is_org_iets3_core_expr_lambda_ShortLambdaExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_lambda_ILambdaLike: boolean = true
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
                            public expression: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "expression")
                        }
                        
                        
                        export interface N_ShortLambdaItExpression extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_lambda_ShortLambdaItExpression: boolean
                            
                        }
                        
                        export namespace N_ShortLambdaItExpression {
                            export function isInstance(node: ITypedNode): node is N_ShortLambdaItExpression {
                                return '_is_org_iets3_core_expr_lambda_ShortLambdaItExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ShortLambdaItExpression extends TypedNode implements N_ShortLambdaItExpression {
                            public _is_org_iets3_core_expr_lambda_ShortLambdaItExpression: boolean = true
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
                        
                        
                        export interface N_IFunctionLike extends L_com_mbeddr_core_base.N_IContainerOfUniqueNames, L_org_iets3_core_base.N_IValidNamedConcept, L_org_iets3_core_expr_base.N_IOptionallyTyped, L_org_iets3_core_expr_base.N_IContainmentStackMember, L_org_iets3_core_expr_base.N_IContracted, L_org_iets3_core_expr_base.N_IMayHaveEffect, L_com_mbeddr_core_base.N_IDetectCycle, L_org_iets3_core_expr_base.N_IDocumentableWordProvider, L_com_mbeddr_core_base.N_ICommentable, L_com_mbeddr_mpsutil_interpreter.N_ICanHaveTestCoverage, L_com_mbeddr_core_base.N_ITreeViewRoot {
                            _is_org_iets3_core_expr_lambda_IFunctionLike: boolean
                            ext: string | undefined
            args: ChildListAccessor<N_FunctionArgument>
            body: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
            effect: SingleChildAccessor<N_EffectTag>
                        }
                        
                        export namespace N_IFunctionLike {
                            export function isInstance(node: ITypedNode): node is N_IFunctionLike {
                                return '_is_org_iets3_core_expr_lambda_IFunctionLike' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IFunctionLike extends TypedNode implements N_IFunctionLike {
                            public _is_org_iets3_core_expr_lambda_IFunctionLike: boolean = true
            public _is_com_mbeddr_core_base_IContainerOfUniqueNames: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_IOptionallyTyped: boolean = true
            public _is_org_iets3_core_expr_base_IContextAssistantTypeProvider: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ICanHaveTestCoverage: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_org_iets3_core_expr_base_IContracted: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_com_mbeddr_core_base_IDetectCycle: boolean = true
            public _is_org_iets3_core_expr_base_IDocumentableWordProvider: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_ITreeViewRoot: boolean = true
            public _is_com_mbeddr_core_base_ITreeViewable: boolean = true
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
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "type")
                            public contract: SingleChildAccessor<L_org_iets3_core_expr_base.N_Contract> = new SingleChildAccessor(this.node, "contract")
                            public set ext(value: string | undefined) {
                                this.node.setPropertyValue("ext", value)
                            }
                            public get ext(): string | undefined {
                                return this.node.getPropertyValue("ext")
                            }
                            public args: ChildListAccessor<N_FunctionArgument> = new ChildListAccessor(this.node, "args")
                            public body: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "body")
                            public effect: SingleChildAccessor<N_EffectTag> = new SingleChildAccessor(this.node, "effect")
                        }
                        
                        
                        export interface N_FunctionArgument extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IArgument {
                            _is_org_iets3_core_expr_lambda_FunctionArgument: boolean
                            
                        }
                        
                        export namespace N_FunctionArgument {
                            export function isInstance(node: ITypedNode): node is N_FunctionArgument {
                                return '_is_org_iets3_core_expr_lambda_FunctionArgument' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FunctionArgument extends TypedNode implements N_FunctionArgument {
                            public _is_org_iets3_core_expr_lambda_FunctionArgument: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_lambda_IArgument: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_ISSConstrainedValue: boolean = true
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
                        
                        
                        export interface N_ArgRef extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_ISingleSymbolRef, L_org_iets3_core_expr_base.N_ISSConstrainedValueRef {
                            _is_org_iets3_core_expr_lambda_ArgRef: boolean
                                                
                        }
                        
                        export namespace N_ArgRef {
                            export function isInstance(node: ITypedNode): node is N_ArgRef {
                                return '_is_org_iets3_core_expr_lambda_ArgRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ArgRef extends TypedNode implements N_ArgRef {
                            public _is_org_iets3_core_expr_lambda_ArgRef: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ISingleSymbolRef: boolean = true
            public _is_org_iets3_core_expr_base_IIsSingleSymbol: boolean = true
            public _is_org_iets3_core_expr_base_IRef: boolean = true
            public _is_org_iets3_core_expr_base_ISSConstrainedValueRef: boolean = true
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
                        
                        
                        export interface N_IFunctionCall extends L_org_iets3_core_expr_base.N_IRef, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_lambda_IFunctionCall: boolean
                            args: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression>
                                
                        }
                        
                        export namespace N_IFunctionCall {
                            export function isInstance(node: ITypedNode): node is N_IFunctionCall {
                                return '_is_org_iets3_core_expr_lambda_IFunctionCall' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IFunctionCall extends TypedNode implements N_IFunctionCall {
                            public _is_org_iets3_core_expr_lambda_IFunctionCall: boolean = true
            public _is_org_iets3_core_expr_base_IRef: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                                            public args: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression> = new ChildListAccessor(this.node, "args")
                        }
                        
                        
                        export interface N_IFunctionRef extends L_org_iets3_core_expr_base.N_IRef, N_ILambdaLike {
                            _is_org_iets3_core_expr_lambda_IFunctionRef: boolean
                                                
                        }
                        
                        export namespace N_IFunctionRef {
                            export function isInstance(node: ITypedNode): node is N_IFunctionRef {
                                return '_is_org_iets3_core_expr_lambda_IFunctionRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IFunctionRef extends TypedNode implements N_IFunctionRef {
                            public _is_org_iets3_core_expr_lambda_IFunctionRef: boolean = true
            public _is_org_iets3_core_expr_base_IRef: boolean = true
            public _is_org_iets3_core_expr_lambda_ILambdaLike: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
                            
                        }
                        
                        
                        export interface N_BlockExpression extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_IMayHaveEffect, L_org_iets3_core_expr_base.N_IBlockLike, L_com_mbeddr_core_base.N_IContainerOfUniqueNames, L_com_mbeddr_mpsutil_interpreter.N_ITracerFrame, L_org_iets3_core_expr_base.N_IAllowsDocInChildExpressions, L_org_iets3_core_expr_base.N_ISSConstrainedValue, L_org_iets3_core_expr_base.N_ISSConstrainedValueRef, L_com_mbeddr_mpsutil_varscope.N_IScopeProvider, L_org_iets3_core_expr_base.N_IBigExpression {
                            _is_org_iets3_core_expr_lambda_BlockExpression: boolean
                            expressions: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_BlockExpression {
                            export function isInstance(node: ITypedNode): node is N_BlockExpression {
                                return '_is_org_iets3_core_expr_lambda_BlockExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BlockExpression extends TypedNode implements N_BlockExpression {
                            public _is_org_iets3_core_expr_lambda_BlockExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_core_expr_base_IBlockLike: boolean = true
            public _is_com_mbeddr_core_base_IContainerOfUniqueNames: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_IAllowsDocInChildExpressions: boolean = true
            public _is_org_iets3_core_expr_base_ISSConstrainedValue: boolean = true
            public _is_org_iets3_core_expr_base_ISSConstrainedValueRef: boolean = true
            public _is_com_mbeddr_mpsutil_varscope_IScopeProvider: boolean = true
            public _is_org_iets3_core_expr_base_IBigExpression: boolean = true
            public _is_org_iets3_core_expr_base_IWantNewLine: boolean = true
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
                            public expressions: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression> = new ChildListAccessor(this.node, "expressions")
                        }
                        
                        
                        export interface N_ValExpression extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_base.N_IValidNamedConcept, L_org_iets3_core_expr_base.N_IOptionallyTyped, L_org_iets3_core_expr_base.N_IContracted, L_org_iets3_core_expr_base.N_IDocumentableWordProvider, L_org_iets3_core_expr_base.N_IContainmentStackMember, L_com_mbeddr_mpsutil_interpreter.N_ITracerFrame, L_org_iets3_core_expr_base.N_ISSConstrainedValue, L_com_mbeddr_mpsutil_varscope.N_IScopeElement, L_org_iets3_analysis_base.N_ISolvable, L_org_iets3_core_expr_base.N_IMayAllowEffect, N_IDeclaration {
                            _is_org_iets3_core_expr_lambda_ValExpression: boolean
                            expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_ValExpression {
                            export function isInstance(node: ITypedNode): node is N_ValExpression {
                                return '_is_org_iets3_core_expr_lambda_ValExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ValExpression extends TypedNode implements N_ValExpression {
                            public _is_org_iets3_core_expr_lambda_ValExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_IOptionallyTyped: boolean = true
            public _is_org_iets3_core_expr_base_IContextAssistantTypeProvider: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ICanHaveTestCoverage: boolean = true
            public _is_org_iets3_core_expr_base_IContracted: boolean = true
            public _is_org_iets3_core_expr_base_IDocumentableWordProvider: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_ISSConstrainedValue: boolean = true
            public _is_com_mbeddr_mpsutil_varscope_IScopeElement: boolean = true
            public _is_org_iets3_analysis_base_ISolvable: boolean = true
            public _is_org_iets3_core_base_IDetectNeedToRunManually: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_org_iets3_core_expr_lambda_IDeclaration: boolean = true
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
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "type")
                            public contract: SingleChildAccessor<L_org_iets3_core_expr_base.N_Contract> = new SingleChildAccessor(this.node, "contract")
                            public set __hash(value: string | undefined) {
                                this.node.setPropertyValue("__hash", value)
                            }
                            public get __hash(): string | undefined {
                                return this.node.getPropertyValue("__hash")
                            }
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "expr")
                        }
                        
                        
                        export interface N_ValRef extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_ISingleSymbolRef, L_org_iets3_core_expr_base.N_ISSConstrainedValueRef {
                            _is_org_iets3_core_expr_lambda_ValRef: boolean
                                                
                        }
                        
                        export namespace N_ValRef {
                            export function isInstance(node: ITypedNode): node is N_ValRef {
                                return '_is_org_iets3_core_expr_lambda_ValRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ValRef extends TypedNode implements N_ValRef {
                            public _is_org_iets3_core_expr_lambda_ValRef: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ISingleSymbolRef: boolean = true
            public _is_org_iets3_core_expr_base_IIsSingleSymbol: boolean = true
            public _is_org_iets3_core_expr_base_IRef: boolean = true
            public _is_org_iets3_core_expr_base_ISSConstrainedValueRef: boolean = true
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
                        
                        
                        export interface N_BindOp extends L_jetbrains_mps_lang_core.N_BaseConcept, N_ILambdaDotTarget {
                            _is_org_iets3_core_expr_lambda_BindOp: boolean
                            args: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_BindOp {
                            export function isInstance(node: ITypedNode): node is N_BindOp {
                                return '_is_org_iets3_core_expr_lambda_BindOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BindOp extends TypedNode implements N_BindOp {
                            public _is_org_iets3_core_expr_lambda_BindOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_lambda_ILambdaDotTarget: boolean = true
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
                            public args: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression> = new ChildListAccessor(this.node, "args")
                        }
                        
                        
                        export interface N_CapturedValue extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_lambda_CapturedValue: boolean
                            type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
                        }
                        
                        export namespace N_CapturedValue {
                            export function isInstance(node: ITypedNode): node is N_CapturedValue {
                                return '_is_org_iets3_core_expr_lambda_CapturedValue' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_CapturedValue extends TypedNode implements N_CapturedValue {
                            public _is_org_iets3_core_expr_lambda_CapturedValue: boolean = true
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
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "type")
                        }
                        
                        
                        export interface N_ValValueInContractExpr extends L_org_iets3_core_expr_base.N_ExprInContract, L_org_iets3_core_expr_base.N_ISSItValueRef {
                            _is_org_iets3_core_expr_lambda_ValValueInContractExpr: boolean
                            
                        }
                        
                        export namespace N_ValValueInContractExpr {
                            export function isInstance(node: ITypedNode): node is N_ValValueInContractExpr {
                                return '_is_org_iets3_core_expr_lambda_ValValueInContractExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ValValueInContractExpr extends TypedNode implements N_ValValueInContractExpr {
                            public _is_org_iets3_core_expr_lambda_ValValueInContractExpr: boolean = true
            public _is_org_iets3_core_expr_base_ExprInContract: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ISSItValueRef: boolean = true
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
                        
                        
                        export interface N_FunResExpr extends L_org_iets3_core_expr_base.N_ExprInContract {
                            _is_org_iets3_core_expr_lambda_FunResExpr: boolean
                            
                        }
                        
                        export namespace N_FunResExpr {
                            export function isInstance(node: ITypedNode): node is N_FunResExpr {
                                return '_is_org_iets3_core_expr_lambda_FunResExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FunResExpr extends TypedNode implements N_FunResExpr {
                            public _is_org_iets3_core_expr_lambda_FunResExpr: boolean = true
            public _is_org_iets3_core_expr_base_ExprInContract: boolean = true
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
                        
                        
                        export interface N_EffectTag extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_lambda_EffectTag: boolean
                            
                        }
                        
                        export namespace N_EffectTag {
                            export function isInstance(node: ITypedNode): node is N_EffectTag {
                                return '_is_org_iets3_core_expr_lambda_EffectTag' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EffectTag extends TypedNode implements N_EffectTag {
                            public _is_org_iets3_core_expr_lambda_EffectTag: boolean = true
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
                        
                        
                        export interface N_ILambdaLike extends L_com_mbeddr_mpsutil_interpreter.N_ITracerFrame {
                            _is_org_iets3_core_expr_lambda_ILambdaLike: boolean
                            
                        }
                        
                        export namespace N_ILambdaLike {
                            export function isInstance(node: ITypedNode): node is N_ILambdaLike {
                                return '_is_org_iets3_core_expr_lambda_ILambdaLike' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ILambdaLike extends TypedNode implements N_ILambdaLike {
                            public _is_org_iets3_core_expr_lambda_ILambdaLike: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
                            
                        }
                        
            
            export interface N_IJoinedBlockContext extends ITypedNode {
                _is_org_iets3_core_expr_lambda_IJoinedBlockContext: boolean
                
            }
            
            export namespace N_IJoinedBlockContext {
                export function isInstance(node: ITypedNode): node is N_IJoinedBlockContext {
                    return '_is_org_iets3_core_expr_lambda_IJoinedBlockContext' in node;
                }
            }
            
            export class _N_TypedImpl_IJoinedBlockContext extends TypedNode implements N_IJoinedBlockContext {
                public _is_org_iets3_core_expr_lambda_IJoinedBlockContext: boolean = true
                
            }
            
                        
                        export interface N_FunCompose extends L_org_iets3_core_expr_base.N_BinaryExpression {
                            _is_org_iets3_core_expr_lambda_FunCompose: boolean
                            
                        }
                        
                        export namespace N_FunCompose {
                            export function isInstance(node: ITypedNode): node is N_FunCompose {
                                return '_is_org_iets3_core_expr_lambda_FunCompose' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FunCompose extends TypedNode implements N_FunCompose {
                            public _is_org_iets3_core_expr_lambda_FunCompose: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                                            public left: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_GenericFunctionType extends L_org_iets3_core_expr_base.N_Type {
                            _is_org_iets3_core_expr_lambda_GenericFunctionType: boolean
                            
                        }
                        
                        export namespace N_GenericFunctionType {
                            export function isInstance(node: ITypedNode): node is N_GenericFunctionType {
                                return '_is_org_iets3_core_expr_lambda_GenericFunctionType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_GenericFunctionType extends TypedNode implements N_GenericFunctionType {
                            public _is_org_iets3_core_expr_lambda_GenericFunctionType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
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
                        
                        
                        export interface N_FunctionStyleExecOp extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_lambda_FunctionStyleExecOp: boolean
                            fun: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
            args: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_FunctionStyleExecOp {
                            export function isInstance(node: ITypedNode): node is N_FunctionStyleExecOp {
                                return '_is_org_iets3_core_expr_lambda_FunctionStyleExecOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FunctionStyleExecOp extends TypedNode implements N_FunctionStyleExecOp {
                            public _is_org_iets3_core_expr_lambda_FunctionStyleExecOp: boolean = true
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
                            public fun: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "fun")
                            public args: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression> = new ChildListAccessor(this.node, "args")
                        }
                        
                        
                        export interface N_AssertExpr extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_IMayHaveEffect, L_org_iets3_core_expr_base.N_IAssertConstraints {
                            _is_org_iets3_core_expr_lambda_AssertExpr: boolean
                            expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_AssertExpr {
                            export function isInstance(node: ITypedNode): node is N_AssertExpr {
                                return '_is_org_iets3_core_expr_lambda_AssertExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AssertExpr extends TypedNode implements N_AssertExpr {
                            public _is_org_iets3_core_expr_lambda_AssertExpr: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_core_expr_base_IAssertConstraints: boolean = true
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
                        
                        
                        export interface N_ReadEffectTag extends N_EffectTag {
                            _is_org_iets3_core_expr_lambda_ReadEffectTag: boolean
                            
                        }
                        
                        export namespace N_ReadEffectTag {
                            export function isInstance(node: ITypedNode): node is N_ReadEffectTag {
                                return '_is_org_iets3_core_expr_lambda_ReadEffectTag' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ReadEffectTag extends TypedNode implements N_ReadEffectTag {
                            public _is_org_iets3_core_expr_lambda_ReadEffectTag: boolean = true
            public _is_org_iets3_core_expr_lambda_EffectTag: boolean = true
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
                        
                        
                        export interface N_ModifyEffectTag extends N_EffectTag {
                            _is_org_iets3_core_expr_lambda_ModifyEffectTag: boolean
                            
                        }
                        
                        export namespace N_ModifyEffectTag {
                            export function isInstance(node: ITypedNode): node is N_ModifyEffectTag {
                                return '_is_org_iets3_core_expr_lambda_ModifyEffectTag' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ModifyEffectTag extends TypedNode implements N_ModifyEffectTag {
                            public _is_org_iets3_core_expr_lambda_ModifyEffectTag: boolean = true
            public _is_org_iets3_core_expr_lambda_EffectTag: boolean = true
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
                        
                        
                        export interface N_ReadModifyEffectTag extends N_EffectTag {
                            _is_org_iets3_core_expr_lambda_ReadModifyEffectTag: boolean
                            
                        }
                        
                        export namespace N_ReadModifyEffectTag {
                            export function isInstance(node: ITypedNode): node is N_ReadModifyEffectTag {
                                return '_is_org_iets3_core_expr_lambda_ReadModifyEffectTag' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ReadModifyEffectTag extends TypedNode implements N_ReadModifyEffectTag {
                            public _is_org_iets3_core_expr_lambda_ReadModifyEffectTag: boolean = true
            public _is_org_iets3_core_expr_lambda_EffectTag: boolean = true
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
                        
                        
                        export interface N_AttachedConstraint extends L_jetbrains_mps_lang_core.N_NodeAttribute {
                            _is_org_iets3_core_expr_lambda_AttachedConstraint: boolean
                            constraints: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_AttachedConstraint {
                            export function isInstance(node: ITypedNode): node is N_AttachedConstraint {
                                return '_is_org_iets3_core_expr_lambda_AttachedConstraint' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AttachedConstraint extends TypedNode implements N_AttachedConstraint {
                            public _is_org_iets3_core_expr_lambda_AttachedConstraint: boolean = true
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
                            public constraints: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression> = new ChildListAccessor(this.node, "constraints")
                        }
                        
                        
                        export interface N_LocalVarDeclExpr extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_base.N_IValidNamedConcept, L_org_iets3_core_expr_base.N_IOptionallyTyped, L_org_iets3_core_expr_base.N_IContracted, L_jetbrains_mps_lang_core.N_ISmartReferent, L_org_iets3_core_expr_base.N_IMayAllowEffect, N_IDeclaration {
                            _is_org_iets3_core_expr_lambda_LocalVarDeclExpr: boolean
                            expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_LocalVarDeclExpr {
                            export function isInstance(node: ITypedNode): node is N_LocalVarDeclExpr {
                                return '_is_org_iets3_core_expr_lambda_LocalVarDeclExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LocalVarDeclExpr extends TypedNode implements N_LocalVarDeclExpr {
                            public _is_org_iets3_core_expr_lambda_LocalVarDeclExpr: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_IOptionallyTyped: boolean = true
            public _is_org_iets3_core_expr_base_IContextAssistantTypeProvider: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ICanHaveTestCoverage: boolean = true
            public _is_org_iets3_core_expr_base_IContracted: boolean = true
            public _is_jetbrains_mps_lang_core_ISmartReferent: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_org_iets3_core_expr_lambda_IDeclaration: boolean = true
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
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "type")
                            public contract: SingleChildAccessor<L_org_iets3_core_expr_base.N_Contract> = new SingleChildAccessor(this.node, "contract")
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "expr")
                        }
                        
            
            export interface N_IAllowLocalVariables extends ITypedNode {
                _is_org_iets3_core_expr_lambda_IAllowLocalVariables: boolean
                
            }
            
            export namespace N_IAllowLocalVariables {
                export function isInstance(node: ITypedNode): node is N_IAllowLocalVariables {
                    return '_is_org_iets3_core_expr_lambda_IAllowLocalVariables' in node;
                }
            }
            
            export class _N_TypedImpl_IAllowLocalVariables extends TypedNode implements N_IAllowLocalVariables {
                public _is_org_iets3_core_expr_lambda_IAllowLocalVariables: boolean = true
                
            }
            
                        
                        export interface N_LocalVarRef extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_ICanBeLValue, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_lambda_LocalVarRef: boolean
                                                
                        }
                        
                        export namespace N_LocalVarRef {
                            export function isInstance(node: ITypedNode): node is N_LocalVarRef {
                                return '_is_org_iets3_core_expr_lambda_LocalVarRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LocalVarRef extends TypedNode implements N_LocalVarRef {
                            public _is_org_iets3_core_expr_lambda_LocalVarRef: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ICanBeLValue: boolean = true
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
                        }
                        
            
            export interface N_IDeclaration extends ITypedNode {
                _is_org_iets3_core_expr_lambda_IDeclaration: boolean
                
            }
            
            export namespace N_IDeclaration {
                export function isInstance(node: ITypedNode): node is N_IDeclaration {
                    return '_is_org_iets3_core_expr_lambda_IDeclaration' in node;
                }
            }
            
            export class _N_TypedImpl_IDeclaration extends TypedNode implements N_IDeclaration {
                public _is_org_iets3_core_expr_lambda_IDeclaration: boolean = true
                
            }
            }