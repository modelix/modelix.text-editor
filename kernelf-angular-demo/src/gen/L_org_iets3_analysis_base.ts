            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_org_iets3_analysis_base {
            
            export class L_org_iets3_analysis_base extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_analysis_base = new L_org_iets3_analysis_base();
                constructor() {
                    super("org.iets3.analysis.base")
                    
                    this.nodeWrappers.set("mps:db8bd035-3f51-41d8-8fed-954c202d18be/5067755556171617239", (node: INodeJS) => new ISolvable(node))
this.nodeWrappers.set("mps:db8bd035-3f51-41d8-8fed-954c202d18be/8571724170506775997", (node: INodeJS) => new AbstractSolverTask(node))
this.nodeWrappers.set("mps:db8bd035-3f51-41d8-8fed-954c202d18be/4214990435119232757", (node: INodeJS) => new SolveControl(node))
this.nodeWrappers.set("mps:db8bd035-3f51-41d8-8fed-954c202d18be/5553107600697040451", (node: INodeJS) => new ICanBeMappedToSolver(node))
this.nodeWrappers.set("mps:db8bd035-3f51-41d8-8fed-954c202d18be/1103723565300550875", (node: INodeJS) => new ErrorMessage(node))
this.nodeWrappers.set("mps:db8bd035-3f51-41d8-8fed-954c202d18be/1103723565300541528", (node: INodeJS) => new ErrorSolverTask(node))
this.nodeWrappers.set("mps:db8bd035-3f51-41d8-8fed-954c202d18be/9051170899708928820", (node: INodeJS) => new IUseSolver(node))
this.nodeWrappers.set("mps:db8bd035-3f51-41d8-8fed-954c202d18be/2165212223089852935", (node: INodeJS) => new ISolverCollectionType(node))
                }
                /*
                public getConcepts() {
                    return [this.ISolvable, this.AbstractSolverTask, this.SolveControl, this.ICanBeMappedToSolver, this.ErrorMessage, this.ErrorSolverTask, this.IUseSolver, this.ISolverCollectionType]
                }
                                public ISolvable: _C_Impl_ISolvable = _C_Impl_ISolvable
                public AbstractSolverTask: _C_Impl_AbstractSolverTask = _C_Impl_AbstractSolverTask
                public SolveControl: _C_Impl_SolveControl = _C_Impl_SolveControl
                public ICanBeMappedToSolver: _C_Impl_ICanBeMappedToSolver = _C_Impl_ICanBeMappedToSolver
                public ErrorMessage: _C_Impl_ErrorMessage = _C_Impl_ErrorMessage
                public ErrorSolverTask: _C_Impl_ErrorSolverTask = _C_Impl_ErrorSolverTask
                public IUseSolver: _C_Impl_IUseSolver = _C_Impl_IUseSolver
                public ISolverCollectionType: _C_Impl_ISolverCollectionType = _C_Impl_ISolverCollectionType
                */
            }
            export const INSTANCE = L_org_iets3_analysis_base.INSTANCE
            
                                    export class ISolvable extends TypedNode {
                                            public set __hash(value: string | undefined) {
                                this.node.setPropertyValue("__hash", value)
                            }
                            public get __hash(): string | undefined {
                                return this.node.getPropertyValue("__hash")
                            }
                            
                            // super concept: org.iets3.core.base.IDetectNeedToRunManually 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
                        }
                        
                        export class AbstractSolverTask extends TypedNode {
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
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
                        }
                        
                        export class SolveControl extends TypedNode {
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
                            public set mode(value: string | undefined) {
                                this.node.setPropertyValue("mode", value)
                            }
                            public get mode(): string | undefined {
                                return this.node.getPropertyValue("mode")
                            }
                            public set timeout(value: string | undefined) {
                                this.node.setPropertyValue("timeout", value)
                            }
                            public get timeout(): string | undefined {
                                return this.node.getPropertyValue("timeout")
                            }
                            // feature: mode 
            // feature: timeout 
                            // super concept: jetbrains.mps.lang.core.NodeAttribute 
            // super concept: jetbrains.mps.lang.core.Attribute 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
            
            export class ICanBeMappedToSolver extends TypedNode {
                
                
                
            }
            
            export class ErrorMessage extends TypedNode {
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
                public set msg(value: string | undefined) {
                    this.node.setPropertyValue("msg", value)
                }
                public get msg(): string | undefined {
                    return this.node.getPropertyValue("msg")
                }
                // feature: msg 
                // super concept: jetbrains.mps.lang.core.BaseConcept 
            }
                        
                        export class ErrorSolverTask extends TypedNode {
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
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public errors: ChildListAccessor<L_org_iets3_analysis_base.ErrorMessage> = new ChildListAccessor(this.node, "errors")
                            // feature: errors 
                            // super concept: org.iets3.analysis.base.AbstractSolverTask 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
                        }
            
            export class IUseSolver extends TypedNode {
                
                
                
            }
            
            export class ISolverCollectionType extends TypedNode {
                
                
                
            }
            }