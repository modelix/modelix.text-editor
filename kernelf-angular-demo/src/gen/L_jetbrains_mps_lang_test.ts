            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_baseLanguage_unitTest} from "./L_jetbrains_mps_baseLanguage_unitTest";
import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_jetbrains_mps_lang_test {
            
            export class L_jetbrains_mps_lang_test extends GeneratedLanguage {
                public static INSTANCE: L_jetbrains_mps_lang_test = new L_jetbrains_mps_lang_test();
                constructor() {
                    super("jetbrains.mps.lang.test")
                    
                    this.nodeWrappers.set("mps:8585453e-6bfb-4d80-98de-b16074f1d86c/1215601147424", (node: INodeJS) => new _N_TypedImpl_NodeCheckOperation(node))
this.nodeWrappers.set("mps:8585453e-6bfb-4d80-98de-b16074f1d86c/5097124989038916362", (node: INodeJS) => new _N_TypedImpl_TestInfo(node))
this.nodeWrappers.set("mps:8585453e-6bfb-4d80-98de-b16074f1d86c/1517788251554588461", (node: INodeJS) => new _N_TypedImpl_INodesTestMethod(node))
                }
                /*
                public getConcepts() {
                    return [this.NodeCheckOperation, this.TestInfo, this.INodesTestMethod]
                }
                                public NodeCheckOperation: _C_Impl_NodeCheckOperation = _C_Impl_NodeCheckOperation
                public TestInfo: _C_Impl_TestInfo = _C_Impl_TestInfo
                public INodesTestMethod: _C_Impl_INodesTestMethod = _C_Impl_INodesTestMethod
                */
            }
            export const INSTANCE = L_jetbrains_mps_lang_test.INSTANCE
            
                                    export interface N_NodeCheckOperation extends L_jetbrains_mps_lang_core.N_BaseConcept, N_INodesTestMethod, L_jetbrains_mps_lang_core.N_INamedConcept {
                            _is_jetbrains_mps_lang_test_NodeCheckOperation: boolean
                            
                        }
                        
                        export namespace N_NodeCheckOperation {
                            export function isInstance(node: ITypedNode): node is N_NodeCheckOperation {
                                return '_is_jetbrains_mps_lang_test_NodeCheckOperation' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NodeCheckOperation extends TypedNode implements N_NodeCheckOperation {
                            public _is_jetbrains_mps_lang_test_NodeCheckOperation: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_test_INodesTestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestable: boolean = true
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
                        
                        
                        export interface N_TestInfo extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_jetbrains_mps_lang_test_TestInfo: boolean
                            projectPath: string | undefined
            reOpenProject: string | undefined
                        }
                        
                        export namespace N_TestInfo {
                            export function isInstance(node: ITypedNode): node is N_TestInfo {
                                return '_is_jetbrains_mps_lang_test_TestInfo' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TestInfo extends TypedNode implements N_TestInfo {
                            public _is_jetbrains_mps_lang_test_TestInfo: boolean = true
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
                            public set projectPath(value: string | undefined) {
                                this.node.setPropertyValue("projectPath", value)
                            }
                            public get projectPath(): string | undefined {
                                return this.node.getPropertyValue("projectPath")
                            }
                            public set reOpenProject(value: string | undefined) {
                                this.node.setPropertyValue("reOpenProject", value)
                            }
                            public get reOpenProject(): string | undefined {
                                return this.node.getPropertyValue("reOpenProject")
                            }
                        }
                        
                        
                        export interface N_INodesTestMethod extends L_jetbrains_mps_baseLanguage_unitTest.N_ITestMethod {
                            _is_jetbrains_mps_lang_test_INodesTestMethod: boolean
                            
                        }
                        
                        export namespace N_INodesTestMethod {
                            export function isInstance(node: ITypedNode): node is N_INodesTestMethod {
                                return '_is_jetbrains_mps_lang_test_INodesTestMethod' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_INodesTestMethod extends TypedNode implements N_INodesTestMethod {
                            public _is_jetbrains_mps_lang_test_INodesTestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestable: boolean = true
                            
                        }
            }