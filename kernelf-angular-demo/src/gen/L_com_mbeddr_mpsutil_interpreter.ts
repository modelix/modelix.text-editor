            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_com_mbeddr_mpsutil_interpreter {
            
            export class L_com_mbeddr_mpsutil_interpreter extends GeneratedLanguage {
                public static INSTANCE: L_com_mbeddr_mpsutil_interpreter = new L_com_mbeddr_mpsutil_interpreter();
                constructor() {
                    super("com.mbeddr.mpsutil.interpreter")
                    
                    this.nodeWrappers.set("mps:47f075a6-558e-4640-a606-7ce0236c8023/6606989268198784203", (node: INodeJS) => new ICanHaveTestCoverage(node))
this.nodeWrappers.set("mps:47f075a6-558e-4640-a606-7ce0236c8023/7128102176011739820", (node: INodeJS) => new IInterpreterWrapperType(node))
this.nodeWrappers.set("mps:47f075a6-558e-4640-a606-7ce0236c8023/4486714422203343935", (node: INodeJS) => new ITrivialNode(node))
this.nodeWrappers.set("mps:47f075a6-558e-4640-a606-7ce0236c8023/8505972469205113887", (node: INodeJS) => new ITracerFrame(node))
this.nodeWrappers.set("mps:47f075a6-558e-4640-a606-7ce0236c8023/4934857995791833872", (node: INodeJS) => new IReveal(node))
this.nodeWrappers.set("mps:47f075a6-558e-4640-a606-7ce0236c8023/2850607030357647830", (node: INodeJS) => new ValueInspector(node))
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
            
                        export class ICanHaveTestCoverage extends TypedNode {
                
                
                
            }
            
            export class IInterpreterWrapperType extends TypedNode {
                
                
                
            }
            
            export class ITrivialNode extends TypedNode {
                
                
                
            }
            
            export class ITracerFrame extends TypedNode {
                
                
                
            }
            
            export class IReveal extends TypedNode {
                
                
                
            }
                        
                        export class ValueInspector extends TypedNode {
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
                            
                            // super concept: jetbrains.mps.lang.core.NodeAttribute 
            // super concept: jetbrains.mps.lang.core.Attribute 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
            }