            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_org_modelix_model_metametamodel {
            
            export class L_org_modelix_model_metametamodel extends GeneratedLanguage {
                public static INSTANCE: L_org_modelix_model_metametamodel = new L_org_modelix_model_metametamodel();
                constructor() {
                    super("org.modelix.model.metametamodel")
                    
                    this.nodeWrappers.set("mps:bffdf123-0d7b-471b-a52b-fa3d3a024664/1156406402210392047", (node: INodeJS) => new _N_TypedImpl_Language(node))
this.nodeWrappers.set("mps:bffdf123-0d7b-471b-a52b-fa3d3a024664/1156406402210392048", (node: INodeJS) => new _N_TypedImpl_Concept(node))
this.nodeWrappers.set("mps:bffdf123-0d7b-471b-a52b-fa3d3a024664/1156406402210392049", (node: INodeJS) => new _N_TypedImpl_Property(node))
this.nodeWrappers.set("mps:bffdf123-0d7b-471b-a52b-fa3d3a024664/1156406402210392050", (node: INodeJS) => new _N_TypedImpl_ReferenceLink(node))
this.nodeWrappers.set("mps:bffdf123-0d7b-471b-a52b-fa3d3a024664/1156406402210392051", (node: INodeJS) => new _N_TypedImpl_ContainmentLink(node))
this.nodeWrappers.set("mps:bffdf123-0d7b-471b-a52b-fa3d3a024664/1156406402210392052", (node: INodeJS) => new _N_TypedImpl_IRole(node))
this.nodeWrappers.set("mps:bffdf123-0d7b-471b-a52b-fa3d3a024664/1156406402210392074", (node: INodeJS) => new _N_TypedImpl_ConceptReference(node))
this.nodeWrappers.set("mps:bffdf123-0d7b-471b-a52b-fa3d3a024664/6877684971379608804", (node: INodeJS) => new _N_TypedImpl_IHasUID(node))
                }
                /*
                public getConcepts() {
                    return [this.Language, this.Concept, this.Property, this.ReferenceLink, this.ContainmentLink, this.IRole, this.ConceptReference, this.IHasUID]
                }
                                public Language: _C_Impl_Language = _C_Impl_Language
                public Concept: _C_Impl_Concept = _C_Impl_Concept
                public Property: _C_Impl_Property = _C_Impl_Property
                public ReferenceLink: _C_Impl_ReferenceLink = _C_Impl_ReferenceLink
                public ContainmentLink: _C_Impl_ContainmentLink = _C_Impl_ContainmentLink
                public IRole: _C_Impl_IRole = _C_Impl_IRole
                public ConceptReference: _C_Impl_ConceptReference = _C_Impl_ConceptReference
                public IHasUID: _C_Impl_IHasUID = _C_Impl_IHasUID
                */
            }
            export const INSTANCE = L_org_modelix_model_metametamodel.INSTANCE
            
                                    export interface N_Language extends L_jetbrains_mps_lang_core.N_BaseConcept, L_jetbrains_mps_lang_core.N_INamedConcept, N_IHasUID {
                            _is_org_modelix_model_metametamodel_Language: boolean
                            concepts: ChildListAccessor<N_Concept>
                        }
                        
                        export namespace N_Language {
                            export function isInstance(node: ITypedNode): node is N_Language {
                                return '_is_org_modelix_model_metametamodel_Language' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Language extends TypedNode implements N_Language {
                            public _is_org_modelix_model_metametamodel_Language: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_org_modelix_model_metametamodel_IHasUID: boolean = true
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
                            public set uid(value: string | undefined) {
                                this.node.setPropertyValue("uid", value)
                            }
                            public get uid(): string | undefined {
                                return this.node.getPropertyValue("uid")
                            }
                            public concepts: ChildListAccessor<N_Concept> = new ChildListAccessor(this.node, "concepts")
                        }
                        
                        
                        export interface N_Concept extends L_jetbrains_mps_lang_core.N_BaseConcept, L_jetbrains_mps_lang_core.N_INamedConcept, N_IHasUID {
                            _is_org_modelix_model_metametamodel_Concept: boolean
                            abstract: string | undefined
            properties: ChildListAccessor<N_Property>
            containmentLinks: ChildListAccessor<N_ContainmentLink>
            referenceLinks: SingleChildAccessor<N_ReferenceLink>
            superConcepts: ChildListAccessor<N_ConceptReference>
                        }
                        
                        export namespace N_Concept {
                            export function isInstance(node: ITypedNode): node is N_Concept {
                                return '_is_org_modelix_model_metametamodel_Concept' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Concept extends TypedNode implements N_Concept {
                            public _is_org_modelix_model_metametamodel_Concept: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_org_modelix_model_metametamodel_IHasUID: boolean = true
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
                            public set uid(value: string | undefined) {
                                this.node.setPropertyValue("uid", value)
                            }
                            public get uid(): string | undefined {
                                return this.node.getPropertyValue("uid")
                            }
                            public set abstract(value: string | undefined) {
                                this.node.setPropertyValue("abstract", value)
                            }
                            public get abstract(): string | undefined {
                                return this.node.getPropertyValue("abstract")
                            }
                            public properties: ChildListAccessor<N_Property> = new ChildListAccessor(this.node, "properties")
                            public containmentLinks: ChildListAccessor<N_ContainmentLink> = new ChildListAccessor(this.node, "containmentLinks")
                            public referenceLinks: SingleChildAccessor<N_ReferenceLink> = new SingleChildAccessor(this.node, "referenceLinks")
                            public superConcepts: ChildListAccessor<N_ConceptReference> = new ChildListAccessor(this.node, "superConcepts")
                        }
                        
                        
                        export interface N_Property extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IRole, N_IHasUID {
                            _is_org_modelix_model_metametamodel_Property: boolean
                            
                        }
                        
                        export namespace N_Property {
                            export function isInstance(node: ITypedNode): node is N_Property {
                                return '_is_org_modelix_model_metametamodel_Property' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Property extends TypedNode implements N_Property {
                            public _is_org_modelix_model_metametamodel_Property: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_modelix_model_metametamodel_IRole: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_org_modelix_model_metametamodel_IHasUID: boolean = true
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
                            public set uid(value: string | undefined) {
                                this.node.setPropertyValue("uid", value)
                            }
                            public get uid(): string | undefined {
                                return this.node.getPropertyValue("uid")
                            }
                        }
                        
                        
                        export interface N_ReferenceLink extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IRole, N_IHasUID {
                            _is_org_modelix_model_metametamodel_ReferenceLink: boolean
                            
                        }
                        
                        export namespace N_ReferenceLink {
                            export function isInstance(node: ITypedNode): node is N_ReferenceLink {
                                return '_is_org_modelix_model_metametamodel_ReferenceLink' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ReferenceLink extends TypedNode implements N_ReferenceLink {
                            public _is_org_modelix_model_metametamodel_ReferenceLink: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_modelix_model_metametamodel_IRole: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_org_modelix_model_metametamodel_IHasUID: boolean = true
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
                            public set uid(value: string | undefined) {
                                this.node.setPropertyValue("uid", value)
                            }
                            public get uid(): string | undefined {
                                return this.node.getPropertyValue("uid")
                            }
                        }
                        
                        
                        export interface N_ContainmentLink extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IRole, N_IHasUID {
                            _is_org_modelix_model_metametamodel_ContainmentLink: boolean
                            
                        }
                        
                        export namespace N_ContainmentLink {
                            export function isInstance(node: ITypedNode): node is N_ContainmentLink {
                                return '_is_org_modelix_model_metametamodel_ContainmentLink' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ContainmentLink extends TypedNode implements N_ContainmentLink {
                            public _is_org_modelix_model_metametamodel_ContainmentLink: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_modelix_model_metametamodel_IRole: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_org_modelix_model_metametamodel_IHasUID: boolean = true
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
                            public set uid(value: string | undefined) {
                                this.node.setPropertyValue("uid", value)
                            }
                            public get uid(): string | undefined {
                                return this.node.getPropertyValue("uid")
                            }
                        }
                        
                        
                        export interface N_IRole extends L_jetbrains_mps_lang_core.N_INamedConcept {
                            _is_org_modelix_model_metametamodel_IRole: boolean
                            
                        }
                        
                        export namespace N_IRole {
                            export function isInstance(node: ITypedNode): node is N_IRole {
                                return '_is_org_modelix_model_metametamodel_IRole' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IRole extends TypedNode implements N_IRole {
                            public _is_org_modelix_model_metametamodel_IRole: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
                                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                        }
                        
                        
                        export interface N_ConceptReference extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_modelix_model_metametamodel_ConceptReference: boolean
                                                
                        }
                        
                        export namespace N_ConceptReference {
                            export function isInstance(node: ITypedNode): node is N_ConceptReference {
                                return '_is_org_modelix_model_metametamodel_ConceptReference' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ConceptReference extends TypedNode implements N_ConceptReference {
                            public _is_org_modelix_model_metametamodel_ConceptReference: boolean = true
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
                        
            
            export interface N_IHasUID extends ITypedNode {
                _is_org_modelix_model_metametamodel_IHasUID: boolean
                uid: string | undefined
            }
            
            export namespace N_IHasUID {
                export function isInstance(node: ITypedNode): node is N_IHasUID {
                    return '_is_org_modelix_model_metametamodel_IHasUID' in node;
                }
            }
            
            export class _N_TypedImpl_IHasUID extends TypedNode implements N_IHasUID {
                public _is_org_modelix_model_metametamodel_IHasUID: boolean = true
                                public set uid(value: string | undefined) {
                    this.node.setPropertyValue("uid", value)
                }
                public get uid(): string | undefined {
                    return this.node.getPropertyValue("uid")
                }
            }
            }