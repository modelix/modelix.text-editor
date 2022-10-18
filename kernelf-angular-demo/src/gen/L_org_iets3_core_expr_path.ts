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
import {L_org_iets3_core_expr_base} from "./L_org_iets3_core_expr_base";
            
            export namespace L_org_iets3_core_expr_path {
            
            export class L_org_iets3_core_expr_path extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_expr_path = new L_org_iets3_core_expr_path();
                constructor() {
                    super("org.iets3.core.expr.path")
                    
                    this.nodeWrappers.set("mps:f3eafff0-30d2-46d6-9150-f0f3b880ce27/7814222126785170799", (node: INodeJS) => new _N_TypedImpl_ICanHaveMembersType(node))
this.nodeWrappers.set("mps:f3eafff0-30d2-46d6-9150-f0f3b880ce27/7814222126785170970", (node: INodeJS) => new _N_TypedImpl_IMember(node))
this.nodeWrappers.set("mps:f3eafff0-30d2-46d6-9150-f0f3b880ce27/7814222126786013807", (node: INodeJS) => new _N_TypedImpl_PathElement(node))
this.nodeWrappers.set("mps:f3eafff0-30d2-46d6-9150-f0f3b880ce27/5046612484462007436", (node: INodeJS) => new _N_TypedImpl_IComparablePathPart(node))
this.nodeWrappers.set("mps:f3eafff0-30d2-46d6-9150-f0f3b880ce27/4886573260946854791", (node: INodeJS) => new _N_TypedImpl_IPathPart(node))
                }
                /*
                public getConcepts() {
                    return [this.ICanHaveMembersType, this.IMember, this.PathElement, this.IComparablePathPart, this.IPathPart]
                }
                                public ICanHaveMembersType: _C_Impl_ICanHaveMembersType = _C_Impl_ICanHaveMembersType
                public IMember: _C_Impl_IMember = _C_Impl_IMember
                public PathElement: _C_Impl_PathElement = _C_Impl_PathElement
                public IComparablePathPart: _C_Impl_IComparablePathPart = _C_Impl_IComparablePathPart
                public IPathPart: _C_Impl_IPathPart = _C_Impl_IPathPart
                */
            }
            export const INSTANCE = L_org_iets3_core_expr_path.INSTANCE
            
                        export interface N_ICanHaveMembersType extends ITypedNode {
                _is_org_iets3_core_expr_path_ICanHaveMembersType: boolean
                
            }
            
            export namespace N_ICanHaveMembersType {
                export function isInstance(node: ITypedNode): node is N_ICanHaveMembersType {
                    return '_is_org_iets3_core_expr_path_ICanHaveMembersType' in node;
                }
            }
            
            export class _N_TypedImpl_ICanHaveMembersType extends TypedNode implements N_ICanHaveMembersType {
                public _is_org_iets3_core_expr_path_ICanHaveMembersType: boolean = true
                
            }
            
                        
                        export interface N_IMember extends L_org_iets3_core_base.N_IValidNamedConcept {
                            _is_org_iets3_core_expr_path_IMember: boolean
                            
                        }
                        
                        export namespace N_IMember {
                            export function isInstance(node: ITypedNode): node is N_IMember {
                                return '_is_org_iets3_core_expr_path_IMember' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IMember extends TypedNode implements N_IMember {
                            public _is_org_iets3_core_expr_path_IMember: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
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
                        
                        
                        export interface N_PathElement extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget, L_org_iets3_core_expr_base.N_IRef, N_IComparablePathPart, L_org_iets3_core_expr_base.N_ICanBeLValue {
                            _is_org_iets3_core_expr_path_PathElement: boolean
                                                
                        }
                        
                        export namespace N_PathElement {
                            export function isInstance(node: ITypedNode): node is N_PathElement {
                                return '_is_org_iets3_core_expr_path_PathElement' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_PathElement extends TypedNode implements N_PathElement {
                            public _is_org_iets3_core_expr_path_PathElement: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_IRef: boolean = true
            public _is_org_iets3_core_expr_path_IComparablePathPart: boolean = true
            public _is_org_iets3_core_expr_path_IPathPart: boolean = true
            public _is_org_iets3_core_expr_base_ICanBeLValue: boolean = true
                                            public set shortDescription(value: string | undefined) {
                                this.node.setPropertyValue("shortDescription", value)
                            }
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
                        
                        
                        export interface N_IComparablePathPart extends N_IPathPart {
                            _is_org_iets3_core_expr_path_IComparablePathPart: boolean
                            
                        }
                        
                        export namespace N_IComparablePathPart {
                            export function isInstance(node: ITypedNode): node is N_IComparablePathPart {
                                return '_is_org_iets3_core_expr_path_IComparablePathPart' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IComparablePathPart extends TypedNode implements N_IComparablePathPart {
                            public _is_org_iets3_core_expr_path_IComparablePathPart: boolean = true
            public _is_org_iets3_core_expr_path_IPathPart: boolean = true
                            
                        }
                        
            
            export interface N_IPathPart extends ITypedNode {
                _is_org_iets3_core_expr_path_IPathPart: boolean
                
            }
            
            export namespace N_IPathPart {
                export function isInstance(node: ITypedNode): node is N_IPathPart {
                    return '_is_org_iets3_core_expr_path_IPathPart' in node;
                }
            }
            
            export class _N_TypedImpl_IPathPart extends TypedNode implements N_IPathPart {
                public _is_org_iets3_core_expr_path_IPathPart: boolean = true
                
            }
            }