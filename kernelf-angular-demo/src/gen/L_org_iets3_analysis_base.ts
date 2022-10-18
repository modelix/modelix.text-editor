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
            
            export namespace L_org_iets3_analysis_base {
            
            export class L_org_iets3_analysis_base extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_analysis_base = new L_org_iets3_analysis_base();
                constructor() {
                    super("org.iets3.analysis.base")
                    
                    this.nodeWrappers.set("mps:db8bd035-3f51-41d8-8fed-954c202d18be/5067755556171617239", (node: INodeJS) => new _N_TypedImpl_ISolvable(node))
this.nodeWrappers.set("mps:db8bd035-3f51-41d8-8fed-954c202d18be/8571724170506775997", (node: INodeJS) => new _N_TypedImpl_AbstractSolverTask(node))
this.nodeWrappers.set("mps:db8bd035-3f51-41d8-8fed-954c202d18be/4214990435119232757", (node: INodeJS) => new _N_TypedImpl_SolveControl(node))
this.nodeWrappers.set("mps:db8bd035-3f51-41d8-8fed-954c202d18be/5553107600697040451", (node: INodeJS) => new _N_TypedImpl_ICanBeMappedToSolver(node))
this.nodeWrappers.set("mps:db8bd035-3f51-41d8-8fed-954c202d18be/1103723565300550875", (node: INodeJS) => new _N_TypedImpl_ErrorMessage(node))
this.nodeWrappers.set("mps:db8bd035-3f51-41d8-8fed-954c202d18be/1103723565300541528", (node: INodeJS) => new _N_TypedImpl_ErrorSolverTask(node))
this.nodeWrappers.set("mps:db8bd035-3f51-41d8-8fed-954c202d18be/9051170899708928820", (node: INodeJS) => new _N_TypedImpl_IUseSolver(node))
this.nodeWrappers.set("mps:db8bd035-3f51-41d8-8fed-954c202d18be/2165212223089852935", (node: INodeJS) => new _N_TypedImpl_ISolverCollectionType(node))
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
            
                                    export interface N_ISolvable extends L_org_iets3_core_base.N_IDetectNeedToRunManually {
                            _is_org_iets3_analysis_base_ISolvable: boolean
                            
                        }
                        
                        export namespace N_ISolvable {
                            export function isInstance(node: ITypedNode): node is N_ISolvable {
                                return '_is_org_iets3_analysis_base_ISolvable' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ISolvable extends TypedNode implements N_ISolvable {
                            public _is_org_iets3_analysis_base_ISolvable: boolean = true
            public _is_org_iets3_core_base_IDetectNeedToRunManually: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
                                            public set __hash(value: string | undefined) {
                                this.node.setPropertyValue("__hash", value)
                            }
                            public get __hash(): string | undefined {
                                return this.node.getPropertyValue("__hash")
                            }
                        }
                        
                        
                        export interface N_AbstractSolverTask extends L_jetbrains_mps_lang_core.N_BaseConcept, L_jetbrains_mps_lang_core.N_INamedConcept {
                            _is_org_iets3_analysis_base_AbstractSolverTask: boolean
                            
                        }
                        
                        export namespace N_AbstractSolverTask {
                            export function isInstance(node: ITypedNode): node is N_AbstractSolverTask {
                                return '_is_org_iets3_analysis_base_AbstractSolverTask' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractSolverTask extends TypedNode implements N_AbstractSolverTask {
                            public _is_org_iets3_analysis_base_AbstractSolverTask: boolean = true
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
                        
                        
                        export interface N_SolveControl extends L_jetbrains_mps_lang_core.N_NodeAttribute {
                            _is_org_iets3_analysis_base_SolveControl: boolean
                            mode: string | undefined
            timeout: string | undefined
                        }
                        
                        export namespace N_SolveControl {
                            export function isInstance(node: ITypedNode): node is N_SolveControl {
                                return '_is_org_iets3_analysis_base_SolveControl' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SolveControl extends TypedNode implements N_SolveControl {
                            public _is_org_iets3_analysis_base_SolveControl: boolean = true
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
                        }
                        
            
            export interface N_ICanBeMappedToSolver extends ITypedNode {
                _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean
                
            }
            
            export namespace N_ICanBeMappedToSolver {
                export function isInstance(node: ITypedNode): node is N_ICanBeMappedToSolver {
                    return '_is_org_iets3_analysis_base_ICanBeMappedToSolver' in node;
                }
            }
            
            export class _N_TypedImpl_ICanBeMappedToSolver extends TypedNode implements N_ICanBeMappedToSolver {
                public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                
            }
            
                        
                        export interface N_ErrorMessage extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_analysis_base_ErrorMessage: boolean
                            msg: string | undefined
                        }
                        
                        export namespace N_ErrorMessage {
                            export function isInstance(node: ITypedNode): node is N_ErrorMessage {
                                return '_is_org_iets3_analysis_base_ErrorMessage' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ErrorMessage extends TypedNode implements N_ErrorMessage {
                            public _is_org_iets3_analysis_base_ErrorMessage: boolean = true
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
                            public set msg(value: string | undefined) {
                                this.node.setPropertyValue("msg", value)
                            }
                            public get msg(): string | undefined {
                                return this.node.getPropertyValue("msg")
                            }
                        }
                        
                        
                        export interface N_ErrorSolverTask extends N_AbstractSolverTask {
                            _is_org_iets3_analysis_base_ErrorSolverTask: boolean
                            errors: ChildListAccessor<N_ErrorMessage>
                        }
                        
                        export namespace N_ErrorSolverTask {
                            export function isInstance(node: ITypedNode): node is N_ErrorSolverTask {
                                return '_is_org_iets3_analysis_base_ErrorSolverTask' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ErrorSolverTask extends TypedNode implements N_ErrorSolverTask {
                            public _is_org_iets3_analysis_base_ErrorSolverTask: boolean = true
            public _is_org_iets3_analysis_base_AbstractSolverTask: boolean = true
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
                            public errors: ChildListAccessor<N_ErrorMessage> = new ChildListAccessor(this.node, "errors")
                        }
                        
            
            export interface N_IUseSolver extends ITypedNode {
                _is_org_iets3_analysis_base_IUseSolver: boolean
                
            }
            
            export namespace N_IUseSolver {
                export function isInstance(node: ITypedNode): node is N_IUseSolver {
                    return '_is_org_iets3_analysis_base_IUseSolver' in node;
                }
            }
            
            export class _N_TypedImpl_IUseSolver extends TypedNode implements N_IUseSolver {
                public _is_org_iets3_analysis_base_IUseSolver: boolean = true
                
            }
            
            
            export interface N_ISolverCollectionType extends ITypedNode {
                _is_org_iets3_analysis_base_ISolverCollectionType: boolean
                
            }
            
            export namespace N_ISolverCollectionType {
                export function isInstance(node: ITypedNode): node is N_ISolverCollectionType {
                    return '_is_org_iets3_analysis_base_ISolverCollectionType' in node;
                }
            }
            
            export class _N_TypedImpl_ISolverCollectionType extends TypedNode implements N_ISolverCollectionType {
                public _is_org_iets3_analysis_base_ISolverCollectionType: boolean = true
                
            }
            }