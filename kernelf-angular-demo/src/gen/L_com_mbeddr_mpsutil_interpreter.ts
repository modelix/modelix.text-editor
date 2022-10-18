            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_com_mbeddr_mpsutil_interpreter {
            
            export class L_com_mbeddr_mpsutil_interpreter extends GeneratedLanguage {
                public static INSTANCE: L_com_mbeddr_mpsutil_interpreter = new L_com_mbeddr_mpsutil_interpreter();
                constructor() {
                    super("com.mbeddr.mpsutil.interpreter")
                    
                    this.nodeWrappers.set("mps:47f075a6-558e-4640-a606-7ce0236c8023/6606989268198784203", (node: INodeJS) => new _N_TypedImpl_ICanHaveTestCoverage(node))
this.nodeWrappers.set("mps:47f075a6-558e-4640-a606-7ce0236c8023/7128102176011739820", (node: INodeJS) => new _N_TypedImpl_IInterpreterWrapperType(node))
this.nodeWrappers.set("mps:47f075a6-558e-4640-a606-7ce0236c8023/4486714422203343935", (node: INodeJS) => new _N_TypedImpl_ITrivialNode(node))
this.nodeWrappers.set("mps:47f075a6-558e-4640-a606-7ce0236c8023/8505972469205113887", (node: INodeJS) => new _N_TypedImpl_ITracerFrame(node))
this.nodeWrappers.set("mps:47f075a6-558e-4640-a606-7ce0236c8023/4934857995791833872", (node: INodeJS) => new _N_TypedImpl_IReveal(node))
this.nodeWrappers.set("mps:47f075a6-558e-4640-a606-7ce0236c8023/2850607030357647830", (node: INodeJS) => new _N_TypedImpl_ValueInspector(node))
                }
                /*
                public getConcepts() {
                    return [this.ICanHaveTestCoverage, this.IInterpreterWrapperType, this.ITrivialNode, this.ITracerFrame, this.IReveal, this.ValueInspector]
                }
                                public ICanHaveTestCoverage: _C_Impl_ICanHaveTestCoverage = _C_Impl_ICanHaveTestCoverage
                public IInterpreterWrapperType: _C_Impl_IInterpreterWrapperType = _C_Impl_IInterpreterWrapperType
                public ITrivialNode: _C_Impl_ITrivialNode = _C_Impl_ITrivialNode
                public ITracerFrame: _C_Impl_ITracerFrame = _C_Impl_ITracerFrame
                public IReveal: _C_Impl_IReveal = _C_Impl_IReveal
                public ValueInspector: _C_Impl_ValueInspector = _C_Impl_ValueInspector
                */
            }
            export const INSTANCE = L_com_mbeddr_mpsutil_interpreter.INSTANCE
            
                        export interface N_ICanHaveTestCoverage extends ITypedNode {
                _is_com_mbeddr_mpsutil_interpreter_ICanHaveTestCoverage: boolean
                
            }
            
            export namespace N_ICanHaveTestCoverage {
                export function isInstance(node: ITypedNode): node is N_ICanHaveTestCoverage {
                    return '_is_com_mbeddr_mpsutil_interpreter_ICanHaveTestCoverage' in node;
                }
            }
            
            export class _N_TypedImpl_ICanHaveTestCoverage extends TypedNode implements N_ICanHaveTestCoverage {
                public _is_com_mbeddr_mpsutil_interpreter_ICanHaveTestCoverage: boolean = true
                
            }
            
            
            export interface N_IInterpreterWrapperType extends ITypedNode {
                _is_com_mbeddr_mpsutil_interpreter_IInterpreterWrapperType: boolean
                
            }
            
            export namespace N_IInterpreterWrapperType {
                export function isInstance(node: ITypedNode): node is N_IInterpreterWrapperType {
                    return '_is_com_mbeddr_mpsutil_interpreter_IInterpreterWrapperType' in node;
                }
            }
            
            export class _N_TypedImpl_IInterpreterWrapperType extends TypedNode implements N_IInterpreterWrapperType {
                public _is_com_mbeddr_mpsutil_interpreter_IInterpreterWrapperType: boolean = true
                
            }
            
            
            export interface N_ITrivialNode extends ITypedNode {
                _is_com_mbeddr_mpsutil_interpreter_ITrivialNode: boolean
                
            }
            
            export namespace N_ITrivialNode {
                export function isInstance(node: ITypedNode): node is N_ITrivialNode {
                    return '_is_com_mbeddr_mpsutil_interpreter_ITrivialNode' in node;
                }
            }
            
            export class _N_TypedImpl_ITrivialNode extends TypedNode implements N_ITrivialNode {
                public _is_com_mbeddr_mpsutil_interpreter_ITrivialNode: boolean = true
                
            }
            
            
            export interface N_ITracerFrame extends ITypedNode {
                _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean
                
            }
            
            export namespace N_ITracerFrame {
                export function isInstance(node: ITypedNode): node is N_ITracerFrame {
                    return '_is_com_mbeddr_mpsutil_interpreter_ITracerFrame' in node;
                }
            }
            
            export class _N_TypedImpl_ITracerFrame extends TypedNode implements N_ITracerFrame {
                public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
                
            }
            
            
            export interface N_IReveal extends ITypedNode {
                _is_com_mbeddr_mpsutil_interpreter_IReveal: boolean
                
            }
            
            export namespace N_IReveal {
                export function isInstance(node: ITypedNode): node is N_IReveal {
                    return '_is_com_mbeddr_mpsutil_interpreter_IReveal' in node;
                }
            }
            
            export class _N_TypedImpl_IReveal extends TypedNode implements N_IReveal {
                public _is_com_mbeddr_mpsutil_interpreter_IReveal: boolean = true
                
            }
            
                        
                        export interface N_ValueInspector extends L_jetbrains_mps_lang_core.N_NodeAttribute {
                            _is_com_mbeddr_mpsutil_interpreter_ValueInspector: boolean
                            
                        }
                        
                        export namespace N_ValueInspector {
                            export function isInstance(node: ITypedNode): node is N_ValueInspector {
                                return '_is_com_mbeddr_mpsutil_interpreter_ValueInspector' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ValueInspector extends TypedNode implements N_ValueInspector {
                            public _is_com_mbeddr_mpsutil_interpreter_ValueInspector: boolean = true
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
                        }
            }