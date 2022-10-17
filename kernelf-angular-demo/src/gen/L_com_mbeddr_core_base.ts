            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_com_mbeddr_core_base {
            
            export class L_com_mbeddr_core_base extends GeneratedLanguage {
                public static INSTANCE: L_com_mbeddr_core_base = new L_com_mbeddr_core_base();
                constructor() {
                    super("com.mbeddr.core.base")
                    
                    this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/7024921229555594291", (node: INodeJS) => new IIdentifierNamedConcept(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/7024921229556133800", (node: INodeJS) => new ICommentable(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/3857533489766146432", (node: INodeJS) => new IDocumentable(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/5095889050031055796", (node: INodeJS) => new IContainerOfUniqueNames(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/1049346859912912067", (node: INodeJS) => new IEmpty(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/7123462210702867708", (node: INodeJS) => new ILOCCountProvider(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/1908346841499937386", (node: INodeJS) => new IHideFromOutline(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/865293814733115675", (node: INodeJS) => new AssessmentQuery(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/865293814733133833", (node: INodeJS) => new AssessmentResult(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/671216505796427448", (node: INodeJS) => new AssessmentSummary(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/13085436577882829", (node: INodeJS) => new IMbeddrIDERoot(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/7139820346881179811", (node: INodeJS) => new IVisibleElementProvider(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/7139820346881560230", (node: INodeJS) => new Chunk(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/7139820346881807063", (node: INodeJS) => new IChunkDependency(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/747084250476811597", (node: INodeJS) => new DefaultGenericChunkDependency(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/143519404622828937", (node: INodeJS) => new ChunkDependencyConstraint(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/8998906896747633114", (node: INodeJS) => new ITreeViewable(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/176285146686936640", (node: INodeJS) => new ITreeViewRoot(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/5939454523704167063", (node: INodeJS) => new IDetectCycle(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/8490595898229124356", (node: INodeJS) => new AssessmentScope(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/5227231181399633032", (node: INodeJS) => new IHasQualifiedName(node))
                }
                /*
                public getConcepts() {
                    return [this.IIdentifierNamedConcept, this.ICommentable, this.IDocumentable, this.IContainerOfUniqueNames, this.IEmpty, this.ILOCCountProvider, this.IHideFromOutline, this.AssessmentQuery, this.AssessmentResult, this.AssessmentSummary, this.IMbeddrIDERoot, this.IVisibleElementProvider, this.Chunk, this.IChunkDependency, this.DefaultGenericChunkDependency, this.ChunkDependencyConstraint, this.ITreeViewable, this.ITreeViewRoot, this.IDetectCycle, this.AssessmentScope, this.IHasQualifiedName]
                }
                                public IIdentifierNamedConcept: _C_Impl_IIdentifierNamedConcept = _C_Impl_IIdentifierNamedConcept
                public ICommentable: _C_Impl_ICommentable = _C_Impl_ICommentable
                public IDocumentable: _C_Impl_IDocumentable = _C_Impl_IDocumentable
                public IContainerOfUniqueNames: _C_Impl_IContainerOfUniqueNames = _C_Impl_IContainerOfUniqueNames
                public IEmpty: _C_Impl_IEmpty = _C_Impl_IEmpty
                public ILOCCountProvider: _C_Impl_ILOCCountProvider = _C_Impl_ILOCCountProvider
                public IHideFromOutline: _C_Impl_IHideFromOutline = _C_Impl_IHideFromOutline
                public AssessmentQuery: _C_Impl_AssessmentQuery = _C_Impl_AssessmentQuery
                public AssessmentResult: _C_Impl_AssessmentResult = _C_Impl_AssessmentResult
                public AssessmentSummary: _C_Impl_AssessmentSummary = _C_Impl_AssessmentSummary
                public IMbeddrIDERoot: _C_Impl_IMbeddrIDERoot = _C_Impl_IMbeddrIDERoot
                public IVisibleElementProvider: _C_Impl_IVisibleElementProvider = _C_Impl_IVisibleElementProvider
                public Chunk: _C_Impl_Chunk = _C_Impl_Chunk
                public IChunkDependency: _C_Impl_IChunkDependency = _C_Impl_IChunkDependency
                public DefaultGenericChunkDependency: _C_Impl_DefaultGenericChunkDependency = _C_Impl_DefaultGenericChunkDependency
                public ChunkDependencyConstraint: _C_Impl_ChunkDependencyConstraint = _C_Impl_ChunkDependencyConstraint
                public ITreeViewable: _C_Impl_ITreeViewable = _C_Impl_ITreeViewable
                public ITreeViewRoot: _C_Impl_ITreeViewRoot = _C_Impl_ITreeViewRoot
                public IDetectCycle: _C_Impl_IDetectCycle = _C_Impl_IDetectCycle
                public AssessmentScope: _C_Impl_AssessmentScope = _C_Impl_AssessmentScope
                public IHasQualifiedName: _C_Impl_IHasQualifiedName = _C_Impl_IHasQualifiedName
                */
            }
            export const INSTANCE = L_com_mbeddr_core_base.INSTANCE
            
                                    export class IIdentifierNamedConcept extends TypedNode {
                                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                            // feature: name 
            // feature: resolveInfo 
                            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
                        }
            
            export class ICommentable extends TypedNode {
                
                
                
            }
            
            export class IDocumentable extends TypedNode {
                
                
                
            }
            
            export class IContainerOfUniqueNames extends TypedNode {
                
                
                
            }
                        
                        export class IEmpty extends TypedNode {
                            
                            
                            // super concept: jetbrains.mps.lang.core.ISuppressErrors 
            // super concept: com.mbeddr.core.base.IHideFromOutline 
                        }
            
            export class ILOCCountProvider extends TypedNode {
                
                
                
            }
            
            export class IHideFromOutline extends TypedNode {
                
                
                
            }
            
            export class AssessmentQuery extends TypedNode {
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
            
            export class AssessmentResult extends TypedNode {
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
            
            export class AssessmentSummary extends TypedNode {
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
            
            export class IMbeddrIDERoot extends TypedNode {
                                public set name(value: string | undefined) {
                    this.node.setPropertyValue("name", value)
                }
                public get name(): string | undefined {
                    return this.node.getPropertyValue("name")
                }
                
                // super concept: jetbrains.mps.lang.core.INamedConcept 
            }
            
            export class IVisibleElementProvider extends TypedNode {
                
                
                
            }
                        
                        export class Chunk extends TypedNode {
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
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                            public constraints: ChildListAccessor<L_com_mbeddr_core_base.ChunkDependencyConstraint> = new ChildListAccessor(this.node, "constraints")
                            // feature: constraints 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.IIdentifierNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: com.mbeddr.core.base.IVisibleElementProvider 
            // super concept: com.mbeddr.core.base.ILOCCountProvider 
            // super concept: com.mbeddr.core.base.ITreeViewRoot 
            // super concept: com.mbeddr.core.base.ITreeViewable 
            // super concept: com.mbeddr.core.base.IDetectCycle 
            // super concept: com.mbeddr.mpsutil.jung.IJGraphProvider 
                        }
            
            export class IChunkDependency extends TypedNode {
                
                
                // super concept: com.mbeddr.core.base.ILOCCountProvider 
            }
                        
                        export class DefaultGenericChunkDependency extends TypedNode {
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
                            public set reexport(value: string | undefined) {
                                this.node.setPropertyValue("reexport", value)
                            }
                            public get reexport(): string | undefined {
                                return this.node.getPropertyValue("reexport")
                            }
                            // feature: reexport 
            // feature: chunk 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.IChunkDependency 
            // super concept: com.mbeddr.core.base.ILOCCountProvider 
                        }
            
            export class ChunkDependencyConstraint extends TypedNode {
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
            
            export class ITreeViewable extends TypedNode {
                
                
                
            }
            
            export class ITreeViewRoot extends TypedNode {
                
                
                // super concept: com.mbeddr.core.base.ITreeViewable 
            }
            
            export class IDetectCycle extends TypedNode {
                                public set name(value: string | undefined) {
                    this.node.setPropertyValue("name", value)
                }
                public get name(): string | undefined {
                    return this.node.getPropertyValue("name")
                }
                
                // super concept: jetbrains.mps.lang.core.INamedConcept 
            }
            
            export class AssessmentScope extends TypedNode {
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
            
            export class IHasQualifiedName extends TypedNode {
                                public set name(value: string | undefined) {
                    this.node.setPropertyValue("name", value)
                }
                public get name(): string | undefined {
                    return this.node.getPropertyValue("name")
                }
                
                // super concept: jetbrains.mps.lang.core.INamedConcept 
            }
            }