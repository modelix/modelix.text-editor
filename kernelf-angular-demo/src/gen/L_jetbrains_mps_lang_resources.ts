            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
import {L_jetbrains_mps_lang_structure} from "./L_jetbrains_mps_lang_structure";
            
            export namespace L_jetbrains_mps_lang_resources {
            
            export class L_jetbrains_mps_lang_resources extends GeneratedLanguage {
                public static INSTANCE: L_jetbrains_mps_lang_resources = new L_jetbrains_mps_lang_resources();
                constructor() {
                    super("jetbrains.mps.lang.resources")
                    
                    this.nodeWrappers.set("mps:982eb8df-2c96-4bd7-9963-11712ea622e5/5177162104569058199", (node: INodeJS) => new _N_TypedImpl_HelpURL(node))
this.nodeWrappers.set("mps:982eb8df-2c96-4bd7-9963-11712ea622e5/4726480899534370999", (node: INodeJS) => new _N_TypedImpl_BaseURL(node))
                }
                /*
                public getConcepts() {
                    return [this.HelpURL, this.BaseURL]
                }
                                public HelpURL: _C_Impl_HelpURL = _C_Impl_HelpURL
                public BaseURL: _C_Impl_BaseURL = _C_Impl_BaseURL
                */
            }
            export const INSTANCE = L_jetbrains_mps_lang_resources.INSTANCE
            
                                    export interface N_HelpURL extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_jetbrains_mps_lang_resources_HelpURL: boolean
                            url: string | undefined
                                
                        }
                        
                        export namespace N_HelpURL {
                            export function isInstance(node: ITypedNode): node is N_HelpURL {
                                return '_is_jetbrains_mps_lang_resources_HelpURL' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_HelpURL extends TypedNode implements N_HelpURL {
                            public _is_jetbrains_mps_lang_resources_HelpURL: boolean = true
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
                            public set url(value: string | undefined) {
                                this.node.setPropertyValue("url", value)
                            }
                            public get url(): string | undefined {
                                return this.node.getPropertyValue("url")
                            }
                        }
                        
                        
                        export interface N_BaseURL extends L_jetbrains_mps_lang_core.N_BaseConcept, L_jetbrains_mps_lang_structure.N_INamedAspect {
                            _is_jetbrains_mps_lang_resources_BaseURL: boolean
                            
                        }
                        
                        export namespace N_BaseURL {
                            export function isInstance(node: ITypedNode): node is N_BaseURL {
                                return '_is_jetbrains_mps_lang_resources_BaseURL' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BaseURL extends TypedNode implements N_BaseURL {
                            public _is_jetbrains_mps_lang_resources_BaseURL: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_structure_INamedAspect: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
                                            public set shortDescription(value: string | undefined) {
                                this.node.setPropertyValue("shortDescription", value)
                            }
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
                        }
            }