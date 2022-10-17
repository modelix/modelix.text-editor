            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_org_iets3_core_base {
            
            export class L_org_iets3_core_base extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_base = new L_org_iets3_core_base();
                constructor() {
                    super("org.iets3.core.base")
                    
                    this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/7804632404594256696", (node: INodeJS) => new ISpecRoot(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/7804632404594264610", (node: INodeJS) => new IETS3DummyIcon16(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/229512757698888199", (node: INodeJS) => new IOptionallyNamed(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/229512757698888202", (node: INodeJS) => new OptionalNameSpecifier(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/229512757699383348", (node: INodeJS) => new IValidNamedConcept(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/2284842052710344783", (node: INodeJS) => new ICustomRemoteCreateSupport(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/4450571177438206000", (node: INodeJS) => new ICanStoreCheckResult(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/4450571177430728250", (node: INodeJS) => new ICanRunCheckManually(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/7831630342157089621", (node: INodeJS) => new IDetectNeedToRunManually(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/3123621951123082572", (node: INodeJS) => new ICanStorePersistentResult(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/4289279775467320677", (node: INodeJS) => new ICanReadPersistentResult(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/5625970993689964025", (node: INodeJS) => new IETS3DummyIcon32(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/5625970993690477211", (node: INodeJS) => new IETS3DummyIcon24(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/1035519324650834501", (node: INodeJS) => new IContainsStuffToRunManually(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/4448734902938990045", (node: INodeJS) => new ITypeWithTarget(node))
this.nodeWrappers.set("mps:7b68d745-a7b8-48b9-bd9c-05c0f8725a35/7631603674206286466", (node: INodeJS) => new IControlAdvancedFeatures(node))
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
            
                                    export class ISpecRoot extends TypedNode {
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
                            
                            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
                        }
            
            export class IETS3DummyIcon16 extends TypedNode {
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
                        
                        export class IOptionallyNamed extends TypedNode {
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
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
                            // feature: optionalName 
            // feature: name 
            // feature: resolveInfo 
                            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: jetbrains.mps.lang.core.ISmartReferent 
                        }
            
            export class OptionalNameSpecifier extends TypedNode {
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
                public set optionalName(value: string | undefined) {
                    this.node.setPropertyValue("optionalName", value)
                }
                public get optionalName(): string | undefined {
                    return this.node.getPropertyValue("optionalName")
                }
                // feature: optionalName 
                // super concept: jetbrains.mps.lang.core.BaseConcept 
            }
                        
                        export class IValidNamedConcept extends TypedNode {
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
            
            export class ICustomRemoteCreateSupport extends TypedNode {
                
                
                
            }
            
            export class ICanStoreCheckResult extends TypedNode {
                
                
                
            }
            
            export class ICanRunCheckManually extends TypedNode {
                
                
                // super concept: org.iets3.core.base.ICanStoreCheckResult 
            }
                        
                        export class IDetectNeedToRunManually extends TypedNode {
                                            public set __hash(value: string | undefined) {
                                this.node.setPropertyValue("__hash", value)
                            }
                            public get __hash(): string | undefined {
                                return this.node.getPropertyValue("__hash")
                            }
                            // feature: __hash 
                            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
                        }
            
            export class ICanStorePersistentResult extends TypedNode {
                
                
                // super concept: org.iets3.core.base.ICanReadPersistentResult 
            }
            
            export class ICanReadPersistentResult extends TypedNode {
                
                
                
            }
            
            export class IETS3DummyIcon32 extends TypedNode {
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
            
            export class IETS3DummyIcon24 extends TypedNode {
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
            
            export class IContainsStuffToRunManually extends TypedNode {
                
                
                
            }
            
            export class ITypeWithTarget extends TypedNode {
                
                
                
            }
            
            export class IControlAdvancedFeatures extends TypedNode {
                
                
                
            }
            }