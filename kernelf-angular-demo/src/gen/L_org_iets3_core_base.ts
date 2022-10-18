            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_org_iets3_core_base {
            
            export class L_org_iets3_core_base extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_base = new L_org_iets3_core_base();
                constructor() {
                    super("org.iets3.core.base")
                    
                    this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/7804632404594256696", (node: INodeJS) => new _N_TypedImpl_ISpecRoot(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/7804632404594264610", (node: INodeJS) => new _N_TypedImpl_IETS3DummyIcon16(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/229512757698888199", (node: INodeJS) => new _N_TypedImpl_IOptionallyNamed(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/229512757698888202", (node: INodeJS) => new _N_TypedImpl_OptionalNameSpecifier(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/229512757699383348", (node: INodeJS) => new _N_TypedImpl_IValidNamedConcept(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/2284842052710344783", (node: INodeJS) => new _N_TypedImpl_ICustomRemoteCreateSupport(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/4450571177438206000", (node: INodeJS) => new _N_TypedImpl_ICanStoreCheckResult(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/4450571177430728250", (node: INodeJS) => new _N_TypedImpl_ICanRunCheckManually(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/7831630342157089621", (node: INodeJS) => new _N_TypedImpl_IDetectNeedToRunManually(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/3123621951123082572", (node: INodeJS) => new _N_TypedImpl_ICanStorePersistentResult(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/4289279775467320677", (node: INodeJS) => new _N_TypedImpl_ICanReadPersistentResult(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/5625970993689964025", (node: INodeJS) => new _N_TypedImpl_IETS3DummyIcon32(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/5625970993690477211", (node: INodeJS) => new _N_TypedImpl_IETS3DummyIcon24(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/1035519324650834501", (node: INodeJS) => new _N_TypedImpl_IContainsStuffToRunManually(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/4448734902938990045", (node: INodeJS) => new _N_TypedImpl_ITypeWithTarget(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/7631603674206286466", (node: INodeJS) => new _N_TypedImpl_IControlAdvancedFeatures(node))
                }
                /*
                public getConcepts() {
                    return [this.ISpecRoot, this.IETS3DummyIcon16, this.IOptionallyNamed, this.OptionalNameSpecifier, this.IValidNamedConcept, this.ICustomRemoteCreateSupport, this.ICanStoreCheckResult, this.ICanRunCheckManually, this.IDetectNeedToRunManually, this.ICanStorePersistentResult, this.ICanReadPersistentResult, this.IETS3DummyIcon32, this.IETS3DummyIcon24, this.IContainsStuffToRunManually, this.ITypeWithTarget, this.IControlAdvancedFeatures]
                }
                                public ISpecRoot: _C_Impl_ISpecRoot = _C_Impl_ISpecRoot
                public IETS3DummyIcon16: _C_Impl_IETS3DummyIcon16 = _C_Impl_IETS3DummyIcon16
                public IOptionallyNamed: _C_Impl_IOptionallyNamed = _C_Impl_IOptionallyNamed
                public OptionalNameSpecifier: _C_Impl_OptionalNameSpecifier = _C_Impl_OptionalNameSpecifier
                public IValidNamedConcept: _C_Impl_IValidNamedConcept = _C_Impl_IValidNamedConcept
                public ICustomRemoteCreateSupport: _C_Impl_ICustomRemoteCreateSupport = _C_Impl_ICustomRemoteCreateSupport
                public ICanStoreCheckResult: _C_Impl_ICanStoreCheckResult = _C_Impl_ICanStoreCheckResult
                public ICanRunCheckManually: _C_Impl_ICanRunCheckManually = _C_Impl_ICanRunCheckManually
                public IDetectNeedToRunManually: _C_Impl_IDetectNeedToRunManually = _C_Impl_IDetectNeedToRunManually
                public ICanStorePersistentResult: _C_Impl_ICanStorePersistentResult = _C_Impl_ICanStorePersistentResult
                public ICanReadPersistentResult: _C_Impl_ICanReadPersistentResult = _C_Impl_ICanReadPersistentResult
                public IETS3DummyIcon32: _C_Impl_IETS3DummyIcon32 = _C_Impl_IETS3DummyIcon32
                public IETS3DummyIcon24: _C_Impl_IETS3DummyIcon24 = _C_Impl_IETS3DummyIcon24
                public IContainsStuffToRunManually: _C_Impl_IContainsStuffToRunManually = _C_Impl_IContainsStuffToRunManually
                public ITypeWithTarget: _C_Impl_ITypeWithTarget = _C_Impl_ITypeWithTarget
                public IControlAdvancedFeatures: _C_Impl_IControlAdvancedFeatures = _C_Impl_IControlAdvancedFeatures
                */
            }
            export const INSTANCE = L_org_iets3_core_base.INSTANCE
            
                                    export interface N_ISpecRoot extends N_IValidNamedConcept {
                            _is_org_iets3_core_base_ISpecRoot: boolean
                            
                        }
                        
                        export namespace N_ISpecRoot {
                            export function isInstance(node: ITypedNode): node is N_ISpecRoot {
                                return '_is_org_iets3_core_base_ISpecRoot' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ISpecRoot extends TypedNode implements N_ISpecRoot {
                            public _is_org_iets3_core_base_ISpecRoot: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
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
                        
                        
                        export interface N_IETS3DummyIcon16 extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_base_IETS3DummyIcon16: boolean
                            
                        }
                        
                        export namespace N_IETS3DummyIcon16 {
                            export function isInstance(node: ITypedNode): node is N_IETS3DummyIcon16 {
                                return '_is_org_iets3_core_base_IETS3DummyIcon16' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IETS3DummyIcon16 extends TypedNode implements N_IETS3DummyIcon16 {
                            public _is_org_iets3_core_base_IETS3DummyIcon16: boolean = true
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
                        
                        
                        export interface N_IOptionallyNamed extends N_IValidNamedConcept, L_jetbrains_mps_lang_core.N_ISmartReferent {
                            _is_org_iets3_core_base_IOptionallyNamed: boolean
                            optionalName: SingleChildAccessor<N_OptionalNameSpecifier>
                        }
                        
                        export namespace N_IOptionallyNamed {
                            export function isInstance(node: ITypedNode): node is N_IOptionallyNamed {
                                return '_is_org_iets3_core_base_IOptionallyNamed' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IOptionallyNamed extends TypedNode implements N_IOptionallyNamed {
                            public _is_org_iets3_core_base_IOptionallyNamed: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_jetbrains_mps_lang_core_ISmartReferent: boolean = true
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
                            public optionalName: SingleChildAccessor<N_OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
                        }
                        
                        
                        export interface N_OptionalNameSpecifier extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_base_OptionalNameSpecifier: boolean
                            optionalName: string | undefined
                        }
                        
                        export namespace N_OptionalNameSpecifier {
                            export function isInstance(node: ITypedNode): node is N_OptionalNameSpecifier {
                                return '_is_org_iets3_core_base_OptionalNameSpecifier' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_OptionalNameSpecifier extends TypedNode implements N_OptionalNameSpecifier {
                            public _is_org_iets3_core_base_OptionalNameSpecifier: boolean = true
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
                            public set optionalName(value: string | undefined) {
                                this.node.setPropertyValue("optionalName", value)
                            }
                            public get optionalName(): string | undefined {
                                return this.node.getPropertyValue("optionalName")
                            }
                        }
                        
                        
                        export interface N_IValidNamedConcept extends L_jetbrains_mps_lang_core.N_INamedConcept, L_jetbrains_mps_lang_core.N_IResolveInfo {
                            _is_org_iets3_core_base_IValidNamedConcept: boolean
                            
                        }
                        
                        export namespace N_IValidNamedConcept {
                            export function isInstance(node: ITypedNode): node is N_IValidNamedConcept {
                                return '_is_org_iets3_core_base_IValidNamedConcept' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IValidNamedConcept extends TypedNode implements N_IValidNamedConcept {
                            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
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
                        
            
            export interface N_ICustomRemoteCreateSupport extends ITypedNode {
                _is_org_iets3_core_base_ICustomRemoteCreateSupport: boolean
                
            }
            
            export namespace N_ICustomRemoteCreateSupport {
                export function isInstance(node: ITypedNode): node is N_ICustomRemoteCreateSupport {
                    return '_is_org_iets3_core_base_ICustomRemoteCreateSupport' in node;
                }
            }
            
            export class _N_TypedImpl_ICustomRemoteCreateSupport extends TypedNode implements N_ICustomRemoteCreateSupport {
                public _is_org_iets3_core_base_ICustomRemoteCreateSupport: boolean = true
                
            }
            
            
            export interface N_ICanStoreCheckResult extends ITypedNode {
                _is_org_iets3_core_base_ICanStoreCheckResult: boolean
                
            }
            
            export namespace N_ICanStoreCheckResult {
                export function isInstance(node: ITypedNode): node is N_ICanStoreCheckResult {
                    return '_is_org_iets3_core_base_ICanStoreCheckResult' in node;
                }
            }
            
            export class _N_TypedImpl_ICanStoreCheckResult extends TypedNode implements N_ICanStoreCheckResult {
                public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
                
            }
            
                        
                        export interface N_ICanRunCheckManually extends N_ICanStoreCheckResult {
                            _is_org_iets3_core_base_ICanRunCheckManually: boolean
                            
                        }
                        
                        export namespace N_ICanRunCheckManually {
                            export function isInstance(node: ITypedNode): node is N_ICanRunCheckManually {
                                return '_is_org_iets3_core_base_ICanRunCheckManually' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ICanRunCheckManually extends TypedNode implements N_ICanRunCheckManually {
                            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
                            
                        }
                        
                        
                        export interface N_IDetectNeedToRunManually extends N_ICanRunCheckManually {
                            _is_org_iets3_core_base_IDetectNeedToRunManually: boolean
                            __hash: string | undefined
                        }
                        
                        export namespace N_IDetectNeedToRunManually {
                            export function isInstance(node: ITypedNode): node is N_IDetectNeedToRunManually {
                                return '_is_org_iets3_core_base_IDetectNeedToRunManually' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IDetectNeedToRunManually extends TypedNode implements N_IDetectNeedToRunManually {
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
                        
                        
                        export interface N_ICanStorePersistentResult extends N_ICanReadPersistentResult {
                            _is_org_iets3_core_base_ICanStorePersistentResult: boolean
                            
                        }
                        
                        export namespace N_ICanStorePersistentResult {
                            export function isInstance(node: ITypedNode): node is N_ICanStorePersistentResult {
                                return '_is_org_iets3_core_base_ICanStorePersistentResult' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ICanStorePersistentResult extends TypedNode implements N_ICanStorePersistentResult {
                            public _is_org_iets3_core_base_ICanStorePersistentResult: boolean = true
            public _is_org_iets3_core_base_ICanReadPersistentResult: boolean = true
                            
                        }
                        
            
            export interface N_ICanReadPersistentResult extends ITypedNode {
                _is_org_iets3_core_base_ICanReadPersistentResult: boolean
                
            }
            
            export namespace N_ICanReadPersistentResult {
                export function isInstance(node: ITypedNode): node is N_ICanReadPersistentResult {
                    return '_is_org_iets3_core_base_ICanReadPersistentResult' in node;
                }
            }
            
            export class _N_TypedImpl_ICanReadPersistentResult extends TypedNode implements N_ICanReadPersistentResult {
                public _is_org_iets3_core_base_ICanReadPersistentResult: boolean = true
                
            }
            
                        
                        export interface N_IETS3DummyIcon32 extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_base_IETS3DummyIcon32: boolean
                            
                        }
                        
                        export namespace N_IETS3DummyIcon32 {
                            export function isInstance(node: ITypedNode): node is N_IETS3DummyIcon32 {
                                return '_is_org_iets3_core_base_IETS3DummyIcon32' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IETS3DummyIcon32 extends TypedNode implements N_IETS3DummyIcon32 {
                            public _is_org_iets3_core_base_IETS3DummyIcon32: boolean = true
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
                        
                        
                        export interface N_IETS3DummyIcon24 extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_base_IETS3DummyIcon24: boolean
                            
                        }
                        
                        export namespace N_IETS3DummyIcon24 {
                            export function isInstance(node: ITypedNode): node is N_IETS3DummyIcon24 {
                                return '_is_org_iets3_core_base_IETS3DummyIcon24' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IETS3DummyIcon24 extends TypedNode implements N_IETS3DummyIcon24 {
                            public _is_org_iets3_core_base_IETS3DummyIcon24: boolean = true
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
                        
            
            export interface N_IContainsStuffToRunManually extends ITypedNode {
                _is_org_iets3_core_base_IContainsStuffToRunManually: boolean
                
            }
            
            export namespace N_IContainsStuffToRunManually {
                export function isInstance(node: ITypedNode): node is N_IContainsStuffToRunManually {
                    return '_is_org_iets3_core_base_IContainsStuffToRunManually' in node;
                }
            }
            
            export class _N_TypedImpl_IContainsStuffToRunManually extends TypedNode implements N_IContainsStuffToRunManually {
                public _is_org_iets3_core_base_IContainsStuffToRunManually: boolean = true
                
            }
            
            
            export interface N_ITypeWithTarget extends ITypedNode {
                _is_org_iets3_core_base_ITypeWithTarget: boolean
                
            }
            
            export namespace N_ITypeWithTarget {
                export function isInstance(node: ITypedNode): node is N_ITypeWithTarget {
                    return '_is_org_iets3_core_base_ITypeWithTarget' in node;
                }
            }
            
            export class _N_TypedImpl_ITypeWithTarget extends TypedNode implements N_ITypeWithTarget {
                public _is_org_iets3_core_base_ITypeWithTarget: boolean = true
                
            }
            
            
            export interface N_IControlAdvancedFeatures extends ITypedNode {
                _is_org_iets3_core_base_IControlAdvancedFeatures: boolean
                
            }
            
            export namespace N_IControlAdvancedFeatures {
                export function isInstance(node: ITypedNode): node is N_IControlAdvancedFeatures {
                    return '_is_org_iets3_core_base_IControlAdvancedFeatures' in node;
                }
            }
            
            export class _N_TypedImpl_IControlAdvancedFeatures extends TypedNode implements N_IControlAdvancedFeatures {
                public _is_org_iets3_core_base_IControlAdvancedFeatures: boolean = true
                
            }
            }