            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_baseLanguage} from "./L_jetbrains_mps_baseLanguage";
            
            export namespace L_jetbrains_mps_baseLanguage_unitTest {
            
            export class L_jetbrains_mps_baseLanguage_unitTest extends GeneratedLanguage {
                public static INSTANCE: L_jetbrains_mps_baseLanguage_unitTest = new L_jetbrains_mps_baseLanguage_unitTest();
                constructor() {
                    super("jetbrains.mps.baseLanguage.unitTest")
                    
                    this.nodeWrappers.set("mps:f61473f9-130f-42f6-b98d-6c438812c2f6/1215620452633", (node: INodeJS) => new _N_TypedImpl_ITestable(node))
this.nodeWrappers.set("mps:f61473f9-130f-42f6-b98d-6c438812c2f6/1216130694486", (node: INodeJS) => new _N_TypedImpl_ITestCase(node))
this.nodeWrappers.set("mps:f61473f9-130f-42f6-b98d-6c438812c2f6/1216134482493", (node: INodeJS) => new _N_TypedImpl_ITestMethod(node))
                }
                /*
                public getConcepts() {
                    return [this.ITestable, this.ITestCase, this.ITestMethod]
                }
                                public ITestable: _C_Impl_ITestable = _C_Impl_ITestable
                public ITestCase: _C_Impl_ITestCase = _C_Impl_ITestCase
                public ITestMethod: _C_Impl_ITestMethod = _C_Impl_ITestMethod
                */
            }
            export const INSTANCE = L_jetbrains_mps_baseLanguage_unitTest.INSTANCE
            
                        export interface N_ITestable extends ITypedNode {
                _is_jetbrains_mps_baseLanguage_unitTest_ITestable: boolean
                
            }
            
            export namespace N_ITestable {
                export function isInstance(node: ITypedNode): node is N_ITestable {
                    return '_is_jetbrains_mps_baseLanguage_unitTest_ITestable' in node;
                }
            }
            
            export class _N_TypedImpl_ITestable extends TypedNode implements N_ITestable {
                public _is_jetbrains_mps_baseLanguage_unitTest_ITestable: boolean = true
                
            }
            
                        
                        export interface N_ITestCase extends N_ITestable, L_jetbrains_mps_baseLanguage.N_IValidIdentifier {
                            _is_jetbrains_mps_baseLanguage_unitTest_ITestCase: boolean
                            canNotRunInProcess: string | undefined
                        }
                        
                        export namespace N_ITestCase {
                            export function isInstance(node: ITypedNode): node is N_ITestCase {
                                return '_is_jetbrains_mps_baseLanguage_unitTest_ITestCase' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ITestCase extends TypedNode implements N_ITestCase {
                            public _is_jetbrains_mps_baseLanguage_unitTest_ITestCase: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestable: boolean = true
            public _is_jetbrains_mps_baseLanguage_IValidIdentifier: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
                                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public set canNotRunInProcess(value: string | undefined) {
                                this.node.setPropertyValue("canNotRunInProcess", value)
                            }
                            public get canNotRunInProcess(): string | undefined {
                                return this.node.getPropertyValue("canNotRunInProcess")
                            }
                        }
                        
                        
                        export interface N_ITestMethod extends N_ITestable {
                            _is_jetbrains_mps_baseLanguage_unitTest_ITestMethod: boolean
                            
                        }
                        
                        export namespace N_ITestMethod {
                            export function isInstance(node: ITypedNode): node is N_ITestMethod {
                                return '_is_jetbrains_mps_baseLanguage_unitTest_ITestMethod' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ITestMethod extends TypedNode implements N_ITestMethod {
                            public _is_jetbrains_mps_baseLanguage_unitTest_ITestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestable: boolean = true
                            
                        }
            }