            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            
            
            export namespace L_jetbrains_mps_lang_core {
            
            export class L_jetbrains_mps_lang_core extends GeneratedLanguage {
                public static INSTANCE: L_jetbrains_mps_lang_core = new L_jetbrains_mps_lang_core();
                constructor() {
                    super("jetbrains.mps.lang.core")
                    
                    this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/1133920641626", (node: INodeJS) => new _N_TypedImpl_BaseConcept(node))
this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/1169194658468", (node: INodeJS) => new _N_TypedImpl_INamedConcept(node))
this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/1196978630214", (node: INodeJS) => new _N_TypedImpl_IResolveInfo(node))
this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/1224608834445", (node: INodeJS) => new _N_TypedImpl_IDeprecatable(node))
this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/1234971358450", (node: INodeJS) => new _N_TypedImpl_IType(node))
this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/5169995583184591161", (node: INodeJS) => new _N_TypedImpl_Attribute(node))
this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/3364660638048049748", (node: INodeJS) => new _N_TypedImpl_NodeAttribute(node))
this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/3393165121846091586", (node: INodeJS) => new _N_TypedImpl_ICanSuppressErrors(node))
this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/3393165121846091587", (node: INodeJS) => new _N_TypedImpl_ISuppressErrors(node))
this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/1319728274784973096", (node: INodeJS) => new _N_TypedImpl_InterfacePart(node))
this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/7094926192234036184", (node: INodeJS) => new _N_TypedImpl_ISmartReferent(node))
                }
                /*
                public getConcepts() {
                    return [this.BaseConcept, this.INamedConcept, this.IResolveInfo, this.IDeprecatable, this.IType, this.Attribute, this.NodeAttribute, this.ICanSuppressErrors, this.ISuppressErrors, this.InterfacePart, this.ISmartReferent]
                }
                                public BaseConcept: _C_Impl_BaseConcept = _C_Impl_BaseConcept
                public INamedConcept: _C_Impl_INamedConcept = _C_Impl_INamedConcept
                public IResolveInfo: _C_Impl_IResolveInfo = _C_Impl_IResolveInfo
                public IDeprecatable: _C_Impl_IDeprecatable = _C_Impl_IDeprecatable
                public IType: _C_Impl_IType = _C_Impl_IType
                public Attribute: _C_Impl_Attribute = _C_Impl_Attribute
                public NodeAttribute: _C_Impl_NodeAttribute = _C_Impl_NodeAttribute
                public ICanSuppressErrors: _C_Impl_ICanSuppressErrors = _C_Impl_ICanSuppressErrors
                public ISuppressErrors: _C_Impl_ISuppressErrors = _C_Impl_ISuppressErrors
                public InterfacePart: _C_Impl_InterfacePart = _C_Impl_InterfacePart
                public ISmartReferent: _C_Impl_ISmartReferent = _C_Impl_ISmartReferent
                */
            }
            export const INSTANCE = L_jetbrains_mps_lang_core.INSTANCE
            
                                    export interface N_BaseConcept extends ITypedNode {
                            _is_jetbrains_mps_lang_core_BaseConcept: boolean
                            shortDescription: string | undefined
            virtualPackage: string | undefined
            smodelAttribute: ChildListAccessor<N_Attribute>
                        }
                        
                        export namespace N_BaseConcept {
                            export function isInstance(node: ITypedNode): node is N_BaseConcept {
                                return '_is_jetbrains_mps_lang_core_BaseConcept' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BaseConcept extends TypedNode implements N_BaseConcept {
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
                            public smodelAttribute: ChildListAccessor<N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
            
            export interface N_INamedConcept extends ITypedNode {
                _is_jetbrains_mps_lang_core_INamedConcept: boolean
                name: string | undefined
            }
            
            export namespace N_INamedConcept {
                export function isInstance(node: ITypedNode): node is N_INamedConcept {
                    return '_is_jetbrains_mps_lang_core_INamedConcept' in node;
                }
            }
            
            export class _N_TypedImpl_INamedConcept extends TypedNode implements N_INamedConcept {
                public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
                                public set name(value: string | undefined) {
                    this.node.setPropertyValue("name", value)
                }
                public get name(): string | undefined {
                    return this.node.getPropertyValue("name")
                }
            }
            
            
            export interface N_IResolveInfo extends ITypedNode {
                _is_jetbrains_mps_lang_core_IResolveInfo: boolean
                resolveInfo: string | undefined
            }
            
            export namespace N_IResolveInfo {
                export function isInstance(node: ITypedNode): node is N_IResolveInfo {
                    return '_is_jetbrains_mps_lang_core_IResolveInfo' in node;
                }
            }
            
            export class _N_TypedImpl_IResolveInfo extends TypedNode implements N_IResolveInfo {
                public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
                                public set resolveInfo(value: string | undefined) {
                    this.node.setPropertyValue("resolveInfo", value)
                }
                public get resolveInfo(): string | undefined {
                    return this.node.getPropertyValue("resolveInfo")
                }
            }
            
            
            export interface N_IDeprecatable extends ITypedNode {
                _is_jetbrains_mps_lang_core_IDeprecatable: boolean
                
            }
            
            export namespace N_IDeprecatable {
                export function isInstance(node: ITypedNode): node is N_IDeprecatable {
                    return '_is_jetbrains_mps_lang_core_IDeprecatable' in node;
                }
            }
            
            export class _N_TypedImpl_IDeprecatable extends TypedNode implements N_IDeprecatable {
                public _is_jetbrains_mps_lang_core_IDeprecatable: boolean = true
                
            }
            
            
            export interface N_IType extends ITypedNode {
                _is_jetbrains_mps_lang_core_IType: boolean
                
            }
            
            export namespace N_IType {
                export function isInstance(node: ITypedNode): node is N_IType {
                    return '_is_jetbrains_mps_lang_core_IType' in node;
                }
            }
            
            export class _N_TypedImpl_IType extends TypedNode implements N_IType {
                public _is_jetbrains_mps_lang_core_IType: boolean = true
                
            }
            
                        
                        export interface N_Attribute extends N_BaseConcept {
                            _is_jetbrains_mps_lang_core_Attribute: boolean
                            
                        }
                        
                        export namespace N_Attribute {
                            export function isInstance(node: ITypedNode): node is N_Attribute {
                                return '_is_jetbrains_mps_lang_core_Attribute' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Attribute extends TypedNode implements N_Attribute {
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
                            public smodelAttribute: ChildListAccessor<N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_NodeAttribute extends N_Attribute {
                            _is_jetbrains_mps_lang_core_NodeAttribute: boolean
                            
                        }
                        
                        export namespace N_NodeAttribute {
                            export function isInstance(node: ITypedNode): node is N_NodeAttribute {
                                return '_is_jetbrains_mps_lang_core_NodeAttribute' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NodeAttribute extends TypedNode implements N_NodeAttribute {
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
                            public smodelAttribute: ChildListAccessor<N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
            
            export interface N_ICanSuppressErrors extends ITypedNode {
                _is_jetbrains_mps_lang_core_ICanSuppressErrors: boolean
                
            }
            
            export namespace N_ICanSuppressErrors {
                export function isInstance(node: ITypedNode): node is N_ICanSuppressErrors {
                    return '_is_jetbrains_mps_lang_core_ICanSuppressErrors' in node;
                }
            }
            
            export class _N_TypedImpl_ICanSuppressErrors extends TypedNode implements N_ICanSuppressErrors {
                public _is_jetbrains_mps_lang_core_ICanSuppressErrors: boolean = true
                
            }
            
            
            export interface N_ISuppressErrors extends ITypedNode {
                _is_jetbrains_mps_lang_core_ISuppressErrors: boolean
                
            }
            
            export namespace N_ISuppressErrors {
                export function isInstance(node: ITypedNode): node is N_ISuppressErrors {
                    return '_is_jetbrains_mps_lang_core_ISuppressErrors' in node;
                }
            }
            
            export class _N_TypedImpl_ISuppressErrors extends TypedNode implements N_ISuppressErrors {
                public _is_jetbrains_mps_lang_core_ISuppressErrors: boolean = true
                
            }
            
            
            export interface N_InterfacePart extends ITypedNode {
                _is_jetbrains_mps_lang_core_InterfacePart: boolean
                
            }
            
            export namespace N_InterfacePart {
                export function isInstance(node: ITypedNode): node is N_InterfacePart {
                    return '_is_jetbrains_mps_lang_core_InterfacePart' in node;
                }
            }
            
            export class _N_TypedImpl_InterfacePart extends TypedNode implements N_InterfacePart {
                public _is_jetbrains_mps_lang_core_InterfacePart: boolean = true
                
            }
            
            
            export interface N_ISmartReferent extends ITypedNode {
                _is_jetbrains_mps_lang_core_ISmartReferent: boolean
                
            }
            
            export namespace N_ISmartReferent {
                export function isInstance(node: ITypedNode): node is N_ISmartReferent {
                    return '_is_jetbrains_mps_lang_core_ISmartReferent' in node;
                }
            }
            
            export class _N_TypedImpl_ISmartReferent extends TypedNode implements N_ISmartReferent {
                public _is_jetbrains_mps_lang_core_ISmartReferent: boolean = true
                
            }
            }