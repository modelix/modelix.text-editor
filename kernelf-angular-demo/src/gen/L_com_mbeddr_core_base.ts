            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_com_mbeddr_mpsutil_jung} from "./L_com_mbeddr_mpsutil_jung";
import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_com_mbeddr_core_base {
            
            export class L_com_mbeddr_core_base extends GeneratedLanguage {
                public static INSTANCE: L_com_mbeddr_core_base = new L_com_mbeddr_core_base();
                constructor() {
                    super("com.mbeddr.core.base")
                    
                    this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/7024921229555594291", (node: INodeJS) => new _N_TypedImpl_IIdentifierNamedConcept(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/7024921229556133800", (node: INodeJS) => new _N_TypedImpl_ICommentable(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/3857533489766146432", (node: INodeJS) => new _N_TypedImpl_IDocumentable(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/5095889050031055796", (node: INodeJS) => new _N_TypedImpl_IContainerOfUniqueNames(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/1049346859912912067", (node: INodeJS) => new _N_TypedImpl_IEmpty(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/7123462210702867708", (node: INodeJS) => new _N_TypedImpl_ILOCCountProvider(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/1908346841499937386", (node: INodeJS) => new _N_TypedImpl_IHideFromOutline(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/865293814733115675", (node: INodeJS) => new _N_TypedImpl_AssessmentQuery(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/865293814733133833", (node: INodeJS) => new _N_TypedImpl_AssessmentResult(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/671216505796427448", (node: INodeJS) => new _N_TypedImpl_AssessmentSummary(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/13085436577882829", (node: INodeJS) => new _N_TypedImpl_IMbeddrIDERoot(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/7139820346881179811", (node: INodeJS) => new _N_TypedImpl_IVisibleElementProvider(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/7139820346881560230", (node: INodeJS) => new _N_TypedImpl_Chunk(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/7139820346881807063", (node: INodeJS) => new _N_TypedImpl_IChunkDependency(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/747084250476811597", (node: INodeJS) => new _N_TypedImpl_DefaultGenericChunkDependency(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/143519404622828937", (node: INodeJS) => new _N_TypedImpl_ChunkDependencyConstraint(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/8998906896747633114", (node: INodeJS) => new _N_TypedImpl_ITreeViewable(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/176285146686936640", (node: INodeJS) => new _N_TypedImpl_ITreeViewRoot(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/5939454523704167063", (node: INodeJS) => new _N_TypedImpl_IDetectCycle(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/8490595898229124356", (node: INodeJS) => new _N_TypedImpl_AssessmentScope(node))
this.nodeWrappers.set("mps:d4280a54-f6df-4383-aa41-d1b2bffa7eb1/5227231181399633032", (node: INodeJS) => new _N_TypedImpl_IHasQualifiedName(node))
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
            
                                    export interface N_IIdentifierNamedConcept extends L_jetbrains_mps_lang_core.N_INamedConcept, L_jetbrains_mps_lang_core.N_IResolveInfo {
                            _is_com_mbeddr_core_base_IIdentifierNamedConcept: boolean
                            
                        }
                        
                        export namespace N_IIdentifierNamedConcept {
                            export function isInstance(node: ITypedNode): node is N_IIdentifierNamedConcept {
                                return '_is_com_mbeddr_core_base_IIdentifierNamedConcept' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IIdentifierNamedConcept extends TypedNode implements N_IIdentifierNamedConcept {
                            public _is_com_mbeddr_core_base_IIdentifierNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
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
                        }
                        
            
            export interface N_ICommentable extends ITypedNode {
                _is_com_mbeddr_core_base_ICommentable: boolean
                
            }
            
            export namespace N_ICommentable {
                export function isInstance(node: ITypedNode): node is N_ICommentable {
                    return '_is_com_mbeddr_core_base_ICommentable' in node;
                }
            }
            
            export class _N_TypedImpl_ICommentable extends TypedNode implements N_ICommentable {
                public _is_com_mbeddr_core_base_ICommentable: boolean = true
                
            }
            
            
            export interface N_IDocumentable extends ITypedNode {
                _is_com_mbeddr_core_base_IDocumentable: boolean
                
            }
            
            export namespace N_IDocumentable {
                export function isInstance(node: ITypedNode): node is N_IDocumentable {
                    return '_is_com_mbeddr_core_base_IDocumentable' in node;
                }
            }
            
            export class _N_TypedImpl_IDocumentable extends TypedNode implements N_IDocumentable {
                public _is_com_mbeddr_core_base_IDocumentable: boolean = true
                
            }
            
            
            export interface N_IContainerOfUniqueNames extends ITypedNode {
                _is_com_mbeddr_core_base_IContainerOfUniqueNames: boolean
                
            }
            
            export namespace N_IContainerOfUniqueNames {
                export function isInstance(node: ITypedNode): node is N_IContainerOfUniqueNames {
                    return '_is_com_mbeddr_core_base_IContainerOfUniqueNames' in node;
                }
            }
            
            export class _N_TypedImpl_IContainerOfUniqueNames extends TypedNode implements N_IContainerOfUniqueNames {
                public _is_com_mbeddr_core_base_IContainerOfUniqueNames: boolean = true
                
            }
            
                        
                        export interface N_IEmpty extends L_jetbrains_mps_lang_core.N_ISuppressErrors, N_IHideFromOutline {
                            _is_com_mbeddr_core_base_IEmpty: boolean
                            
                        }
                        
                        export namespace N_IEmpty {
                            export function isInstance(node: ITypedNode): node is N_IEmpty {
                                return '_is_com_mbeddr_core_base_IEmpty' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IEmpty extends TypedNode implements N_IEmpty {
                            public _is_com_mbeddr_core_base_IEmpty: boolean = true
            public _is_jetbrains_mps_lang_core_ISuppressErrors: boolean = true
            public _is_com_mbeddr_core_base_IHideFromOutline: boolean = true
                            
                        }
                        
            
            export interface N_ILOCCountProvider extends ITypedNode {
                _is_com_mbeddr_core_base_ILOCCountProvider: boolean
                
            }
            
            export namespace N_ILOCCountProvider {
                export function isInstance(node: ITypedNode): node is N_ILOCCountProvider {
                    return '_is_com_mbeddr_core_base_ILOCCountProvider' in node;
                }
            }
            
            export class _N_TypedImpl_ILOCCountProvider extends TypedNode implements N_ILOCCountProvider {
                public _is_com_mbeddr_core_base_ILOCCountProvider: boolean = true
                
            }
            
            
            export interface N_IHideFromOutline extends ITypedNode {
                _is_com_mbeddr_core_base_IHideFromOutline: boolean
                
            }
            
            export namespace N_IHideFromOutline {
                export function isInstance(node: ITypedNode): node is N_IHideFromOutline {
                    return '_is_com_mbeddr_core_base_IHideFromOutline' in node;
                }
            }
            
            export class _N_TypedImpl_IHideFromOutline extends TypedNode implements N_IHideFromOutline {
                public _is_com_mbeddr_core_base_IHideFromOutline: boolean = true
                
            }
            
                        
                        export interface N_AssessmentQuery extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_com_mbeddr_core_base_AssessmentQuery: boolean
                            
                        }
                        
                        export namespace N_AssessmentQuery {
                            export function isInstance(node: ITypedNode): node is N_AssessmentQuery {
                                return '_is_com_mbeddr_core_base_AssessmentQuery' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AssessmentQuery extends TypedNode implements N_AssessmentQuery {
                            public _is_com_mbeddr_core_base_AssessmentQuery: boolean = true
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
                        
                        
                        export interface N_AssessmentResult extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_com_mbeddr_core_base_AssessmentResult: boolean
                            
                        }
                        
                        export namespace N_AssessmentResult {
                            export function isInstance(node: ITypedNode): node is N_AssessmentResult {
                                return '_is_com_mbeddr_core_base_AssessmentResult' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AssessmentResult extends TypedNode implements N_AssessmentResult {
                            public _is_com_mbeddr_core_base_AssessmentResult: boolean = true
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
                        
                        
                        export interface N_AssessmentSummary extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_com_mbeddr_core_base_AssessmentSummary: boolean
                            
                        }
                        
                        export namespace N_AssessmentSummary {
                            export function isInstance(node: ITypedNode): node is N_AssessmentSummary {
                                return '_is_com_mbeddr_core_base_AssessmentSummary' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AssessmentSummary extends TypedNode implements N_AssessmentSummary {
                            public _is_com_mbeddr_core_base_AssessmentSummary: boolean = true
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
                        
                        
                        export interface N_IMbeddrIDERoot extends L_jetbrains_mps_lang_core.N_INamedConcept {
                            _is_com_mbeddr_core_base_IMbeddrIDERoot: boolean
                            
                        }
                        
                        export namespace N_IMbeddrIDERoot {
                            export function isInstance(node: ITypedNode): node is N_IMbeddrIDERoot {
                                return '_is_com_mbeddr_core_base_IMbeddrIDERoot' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IMbeddrIDERoot extends TypedNode implements N_IMbeddrIDERoot {
                            public _is_com_mbeddr_core_base_IMbeddrIDERoot: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
                                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                        }
                        
            
            export interface N_IVisibleElementProvider extends ITypedNode {
                _is_com_mbeddr_core_base_IVisibleElementProvider: boolean
                
            }
            
            export namespace N_IVisibleElementProvider {
                export function isInstance(node: ITypedNode): node is N_IVisibleElementProvider {
                    return '_is_com_mbeddr_core_base_IVisibleElementProvider' in node;
                }
            }
            
            export class _N_TypedImpl_IVisibleElementProvider extends TypedNode implements N_IVisibleElementProvider {
                public _is_com_mbeddr_core_base_IVisibleElementProvider: boolean = true
                
            }
            
                        
                        export interface N_Chunk extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IIdentifierNamedConcept, N_IVisibleElementProvider, N_ILOCCountProvider, N_ITreeViewRoot, N_IDetectCycle, L_com_mbeddr_mpsutil_jung.N_IJGraphProvider {
                            _is_com_mbeddr_core_base_Chunk: boolean
                            constraints: ChildListAccessor<N_ChunkDependencyConstraint>
                        }
                        
                        export namespace N_Chunk {
                            export function isInstance(node: ITypedNode): node is N_Chunk {
                                return '_is_com_mbeddr_core_base_Chunk' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Chunk extends TypedNode implements N_Chunk {
                            public _is_com_mbeddr_core_base_Chunk: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_IIdentifierNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_com_mbeddr_core_base_IVisibleElementProvider: boolean = true
            public _is_com_mbeddr_core_base_ILOCCountProvider: boolean = true
            public _is_com_mbeddr_core_base_ITreeViewRoot: boolean = true
            public _is_com_mbeddr_core_base_ITreeViewable: boolean = true
            public _is_com_mbeddr_core_base_IDetectCycle: boolean = true
            public _is_com_mbeddr_mpsutil_jung_IJGraphProvider: boolean = true
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
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                            public constraints: ChildListAccessor<N_ChunkDependencyConstraint> = new ChildListAccessor(this.node, "constraints")
                        }
                        
                        
                        export interface N_IChunkDependency extends N_ILOCCountProvider {
                            _is_com_mbeddr_core_base_IChunkDependency: boolean
                            
                        }
                        
                        export namespace N_IChunkDependency {
                            export function isInstance(node: ITypedNode): node is N_IChunkDependency {
                                return '_is_com_mbeddr_core_base_IChunkDependency' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IChunkDependency extends TypedNode implements N_IChunkDependency {
                            public _is_com_mbeddr_core_base_IChunkDependency: boolean = true
            public _is_com_mbeddr_core_base_ILOCCountProvider: boolean = true
                            
                        }
                        
                        
                        export interface N_DefaultGenericChunkDependency extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IChunkDependency {
                            _is_com_mbeddr_core_base_DefaultGenericChunkDependency: boolean
                            reexport: string | undefined
                                
                        }
                        
                        export namespace N_DefaultGenericChunkDependency {
                            export function isInstance(node: ITypedNode): node is N_DefaultGenericChunkDependency {
                                return '_is_com_mbeddr_core_base_DefaultGenericChunkDependency' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_DefaultGenericChunkDependency extends TypedNode implements N_DefaultGenericChunkDependency {
                            public _is_com_mbeddr_core_base_DefaultGenericChunkDependency: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_IChunkDependency: boolean = true
            public _is_com_mbeddr_core_base_ILOCCountProvider: boolean = true
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
                            public set reexport(value: string | undefined) {
                                this.node.setPropertyValue("reexport", value)
                            }
                            public get reexport(): string | undefined {
                                return this.node.getPropertyValue("reexport")
                            }
                        }
                        
                        
                        export interface N_ChunkDependencyConstraint extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_com_mbeddr_core_base_ChunkDependencyConstraint: boolean
                            
                        }
                        
                        export namespace N_ChunkDependencyConstraint {
                            export function isInstance(node: ITypedNode): node is N_ChunkDependencyConstraint {
                                return '_is_com_mbeddr_core_base_ChunkDependencyConstraint' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ChunkDependencyConstraint extends TypedNode implements N_ChunkDependencyConstraint {
                            public _is_com_mbeddr_core_base_ChunkDependencyConstraint: boolean = true
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
                        
            
            export interface N_ITreeViewable extends ITypedNode {
                _is_com_mbeddr_core_base_ITreeViewable: boolean
                
            }
            
            export namespace N_ITreeViewable {
                export function isInstance(node: ITypedNode): node is N_ITreeViewable {
                    return '_is_com_mbeddr_core_base_ITreeViewable' in node;
                }
            }
            
            export class _N_TypedImpl_ITreeViewable extends TypedNode implements N_ITreeViewable {
                public _is_com_mbeddr_core_base_ITreeViewable: boolean = true
                
            }
            
                        
                        export interface N_ITreeViewRoot extends N_ITreeViewable {
                            _is_com_mbeddr_core_base_ITreeViewRoot: boolean
                            
                        }
                        
                        export namespace N_ITreeViewRoot {
                            export function isInstance(node: ITypedNode): node is N_ITreeViewRoot {
                                return '_is_com_mbeddr_core_base_ITreeViewRoot' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ITreeViewRoot extends TypedNode implements N_ITreeViewRoot {
                            public _is_com_mbeddr_core_base_ITreeViewRoot: boolean = true
            public _is_com_mbeddr_core_base_ITreeViewable: boolean = true
                            
                        }
                        
                        
                        export interface N_IDetectCycle extends L_jetbrains_mps_lang_core.N_INamedConcept {
                            _is_com_mbeddr_core_base_IDetectCycle: boolean
                            
                        }
                        
                        export namespace N_IDetectCycle {
                            export function isInstance(node: ITypedNode): node is N_IDetectCycle {
                                return '_is_com_mbeddr_core_base_IDetectCycle' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IDetectCycle extends TypedNode implements N_IDetectCycle {
                            public _is_com_mbeddr_core_base_IDetectCycle: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
                                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                        }
                        
                        
                        export interface N_AssessmentScope extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_com_mbeddr_core_base_AssessmentScope: boolean
                            
                        }
                        
                        export namespace N_AssessmentScope {
                            export function isInstance(node: ITypedNode): node is N_AssessmentScope {
                                return '_is_com_mbeddr_core_base_AssessmentScope' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AssessmentScope extends TypedNode implements N_AssessmentScope {
                            public _is_com_mbeddr_core_base_AssessmentScope: boolean = true
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
                        
                        
                        export interface N_IHasQualifiedName extends L_jetbrains_mps_lang_core.N_INamedConcept {
                            _is_com_mbeddr_core_base_IHasQualifiedName: boolean
                            
                        }
                        
                        export namespace N_IHasQualifiedName {
                            export function isInstance(node: ITypedNode): node is N_IHasQualifiedName {
                                return '_is_com_mbeddr_core_base_IHasQualifiedName' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IHasQualifiedName extends TypedNode implements N_IHasQualifiedName {
                            public _is_com_mbeddr_core_base_IHasQualifiedName: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
                                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                        }
            }