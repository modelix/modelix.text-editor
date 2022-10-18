            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_org_iets3_core_expr_tracing {
            
            export class L_org_iets3_core_expr_tracing extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_expr_tracing = new L_org_iets3_core_expr_tracing();
                constructor() {
                    super("org.iets3.core.expr.tracing")
                    
                    this.nodeWrappers.set("mps:63c1aad1-e2db-439c-a30a-02b5e0bc80f3/6471155861876691283", (node: INodeJS) => new _N_TypedImpl_TracerIconConcept(node))
this.nodeWrappers.set("mps:63c1aad1-e2db-439c-a30a-02b5e0bc80f3/6000180787849836022", (node: INodeJS) => new _N_TypedImpl_GhostIconConcept(node))
                }
                /*
                public getConcepts() {
                    return [this.TracerIconConcept, this.GhostIconConcept]
                }
                                public TracerIconConcept: _C_Impl_TracerIconConcept = _C_Impl_TracerIconConcept
                public GhostIconConcept: _C_Impl_GhostIconConcept = _C_Impl_GhostIconConcept
                */
            }
            export const INSTANCE = L_org_iets3_core_expr_tracing.INSTANCE
            
                                    export interface N_TracerIconConcept extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_tracing_TracerIconConcept: boolean
                            
                        }
                        
                        export namespace N_TracerIconConcept {
                            export function isInstance(node: ITypedNode): node is N_TracerIconConcept {
                                return '_is_org_iets3_core_expr_tracing_TracerIconConcept' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TracerIconConcept extends TypedNode implements N_TracerIconConcept {
                            public _is_org_iets3_core_expr_tracing_TracerIconConcept: boolean = true
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
                        
                        
                        export interface N_GhostIconConcept extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_tracing_GhostIconConcept: boolean
                            
                        }
                        
                        export namespace N_GhostIconConcept {
                            export function isInstance(node: ITypedNode): node is N_GhostIconConcept {
                                return '_is_org_iets3_core_expr_tracing_GhostIconConcept' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_GhostIconConcept extends TypedNode implements N_GhostIconConcept {
                            public _is_org_iets3_core_expr_tracing_GhostIconConcept: boolean = true
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
            }