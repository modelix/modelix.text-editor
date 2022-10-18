            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_org_modelix_model_runtimelang {
            
            export class L_org_modelix_model_runtimelang extends GeneratedLanguage {
                public static INSTANCE: L_org_modelix_model_runtimelang = new L_org_modelix_model_runtimelang();
                constructor() {
                    super("org.modelix.model.runtimelang")
                    
                    this.nodeWrappers.set("mps:b6980ebd-f01d-459d-a952-38740f6313b4/7113393488488348863", (node: INodeJS) => new _N_TypedImpl_ModelServerInfo(node))
this.nodeWrappers.set("mps:b6980ebd-f01d-459d-a952-38740f6313b4/7113393488488348864", (node: INodeJS) => new _N_TypedImpl_RepositoryInfo(node))
this.nodeWrappers.set("mps:b6980ebd-f01d-459d-a952-38740f6313b4/7113393488488348865", (node: INodeJS) => new _N_TypedImpl_BranchInfo(node))
                }
                /*
                public getConcepts() {
                    return [this.ModelServerInfo, this.RepositoryInfo, this.BranchInfo]
                }
                                public ModelServerInfo: _C_Impl_ModelServerInfo = _C_Impl_ModelServerInfo
                public RepositoryInfo: _C_Impl_RepositoryInfo = _C_Impl_RepositoryInfo
                public BranchInfo: _C_Impl_BranchInfo = _C_Impl_BranchInfo
                */
            }
            export const INSTANCE = L_org_modelix_model_runtimelang.INSTANCE
            
                                    export interface N_ModelServerInfo extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_modelix_model_runtimelang_ModelServerInfo: boolean
                            repositories: ChildListAccessor<N_RepositoryInfo>
                        }
                        
                        export namespace N_ModelServerInfo {
                            export function isInstance(node: ITypedNode): node is N_ModelServerInfo {
                                return '_is_org_modelix_model_runtimelang_ModelServerInfo' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ModelServerInfo extends TypedNode implements N_ModelServerInfo {
                            public _is_org_modelix_model_runtimelang_ModelServerInfo: boolean = true
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
                            public repositories: ChildListAccessor<N_RepositoryInfo> = new ChildListAccessor(this.node, "repositories")
                        }
                        
                        
                        export interface N_RepositoryInfo extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_modelix_model_runtimelang_RepositoryInfo: boolean
                            id: string | undefined
            branches: ChildListAccessor<N_BranchInfo>
                        }
                        
                        export namespace N_RepositoryInfo {
                            export function isInstance(node: ITypedNode): node is N_RepositoryInfo {
                                return '_is_org_modelix_model_runtimelang_RepositoryInfo' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RepositoryInfo extends TypedNode implements N_RepositoryInfo {
                            public _is_org_modelix_model_runtimelang_RepositoryInfo: boolean = true
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
                            public set id(value: string | undefined) {
                                this.node.setPropertyValue("id", value)
                            }
                            public get id(): string | undefined {
                                return this.node.getPropertyValue("id")
                            }
                            public branches: ChildListAccessor<N_BranchInfo> = new ChildListAccessor(this.node, "branches")
                        }
                        
                        
                        export interface N_BranchInfo extends L_jetbrains_mps_lang_core.N_BaseConcept, L_jetbrains_mps_lang_core.N_INamedConcept {
                            _is_org_modelix_model_runtimelang_BranchInfo: boolean
                            
                        }
                        
                        export namespace N_BranchInfo {
                            export function isInstance(node: ITypedNode): node is N_BranchInfo {
                                return '_is_org_modelix_model_runtimelang_BranchInfo' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BranchInfo extends TypedNode implements N_BranchInfo {
                            public _is_org_modelix_model_runtimelang_BranchInfo: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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