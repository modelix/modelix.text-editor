            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_org_iets3_core_expr_tracing {
            
            export class L_org_iets3_core_expr_tracing extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_expr_tracing = new L_org_iets3_core_expr_tracing();
                constructor() {
                    super("org.iets3.core.expr.tracing")
                    
                    this.nodeWrappers.set("mps:63c1aad1-e2db-439c-a30a-02b5e0bc80f3/6471155861876691283", (node: INodeJS) => new TracerIconConcept(node))
this.nodeWrappers.set("mps:63c1aad1-e2db-439c-a30a-02b5e0bc80f3/6000180787849836022", (node: INodeJS) => new GhostIconConcept(node))
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
            
                        export class TracerIconConcept extends TypedNode {
                                public set shortDescription(value: string | undefined) {
                    this.node.setPropertyValue("shortDescription", value)
                }
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
            
            export class GhostIconConcept extends TypedNode {
                                public set shortDescription(value: string | undefined) {
                    this.node.setPropertyValue("shortDescription", value)
                }
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
            }