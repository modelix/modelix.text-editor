            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_org_modelix_model_metametamodel {
            
            export class L_org_modelix_model_metametamodel extends GeneratedLanguage {
                public static INSTANCE: L_org_modelix_model_metametamodel = new L_org_modelix_model_metametamodel();
                constructor() {
                    super("org.modelix.model.metametamodel")
                    
                    this.nodeWrappers.set("mps:bffdf123-0d7b-471b-a52b-fa3d3a024664/1156406402210392047", (node: INodeJS) => new Language(node))
this.nodeWrappers.set("mps:bffdf123-0d7b-471b-a52b-fa3d3a024664/1156406402210392048", (node: INodeJS) => new Concept(node))
this.nodeWrappers.set("mps:bffdf123-0d7b-471b-a52b-fa3d3a024664/1156406402210392049", (node: INodeJS) => new Property(node))
this.nodeWrappers.set("mps:bffdf123-0d7b-471b-a52b-fa3d3a024664/1156406402210392050", (node: INodeJS) => new ReferenceLink(node))
this.nodeWrappers.set("mps:bffdf123-0d7b-471b-a52b-fa3d3a024664/1156406402210392051", (node: INodeJS) => new ContainmentLink(node))
this.nodeWrappers.set("mps:bffdf123-0d7b-471b-a52b-fa3d3a024664/1156406402210392052", (node: INodeJS) => new IRole(node))
this.nodeWrappers.set("mps:bffdf123-0d7b-471b-a52b-fa3d3a024664/1156406402210392074", (node: INodeJS) => new ConceptReference(node))
this.nodeWrappers.set("mps:bffdf123-0d7b-471b-a52b-fa3d3a024664/6877684971379608804", (node: INodeJS) => new IHasUID(node))
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
            
                                    export class Language extends TypedNode {
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
                            public set uid(value: string | undefined) {
                                this.node.setPropertyValue("uid", value)
                            }
                            public get uid(): string | undefined {
                                return this.node.getPropertyValue("uid")
                            }
                            public concepts: ChildListAccessor<L_org_modelix_model_metametamodel.Concept> = new ChildListAccessor(this.node, "concepts")
                            // feature: concepts 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: uid 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: org.modelix.model.metametamodel.IHasUID 
                        }
                        
                        export class Concept extends TypedNode {
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
                            public properties: ChildListAccessor<L_org_modelix_model_metametamodel.Property> = new ChildListAccessor(this.node, "properties")
                            public containmentLinks: ChildListAccessor<L_org_modelix_model_metametamodel.ContainmentLink> = new ChildListAccessor(this.node, "containmentLinks")
                            public referenceLinks: SingleChildAccessor<L_org_modelix_model_metametamodel.ReferenceLink> = new SingleChildAccessor(this.node, "referenceLinks")
                            public superConcepts: ChildListAccessor<L_org_modelix_model_metametamodel.ConceptReference> = new ChildListAccessor(this.node, "superConcepts")
                            // feature: abstract 
            // feature: properties 
            // feature: containmentLinks 
            // feature: referenceLinks 
            // feature: superConcepts 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: uid 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: org.modelix.model.metametamodel.IHasUID 
                        }
                        
                        export class Property extends TypedNode {
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
                            public set uid(value: string | undefined) {
                                this.node.setPropertyValue("uid", value)
                            }
                            public get uid(): string | undefined {
                                return this.node.getPropertyValue("uid")
                            }
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: uid 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.modelix.model.metametamodel.IRole 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: org.modelix.model.metametamodel.IHasUID 
                        }
                        
                        export class ReferenceLink extends TypedNode {
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
                            public set uid(value: string | undefined) {
                                this.node.setPropertyValue("uid", value)
                            }
                            public get uid(): string | undefined {
                                return this.node.getPropertyValue("uid")
                            }
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: uid 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.modelix.model.metametamodel.IRole 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: org.modelix.model.metametamodel.IHasUID 
                        }
                        
                        export class ContainmentLink extends TypedNode {
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
                            public set uid(value: string | undefined) {
                                this.node.setPropertyValue("uid", value)
                            }
                            public get uid(): string | undefined {
                                return this.node.getPropertyValue("uid")
                            }
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: uid 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.modelix.model.metametamodel.IRole 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: org.modelix.model.metametamodel.IHasUID 
                        }
            
            export class IRole extends TypedNode {
                                public set name(value: string | undefined) {
                    this.node.setPropertyValue("name", value)
                }
                public get name(): string | undefined {
                    return this.node.getPropertyValue("name")
                }
                
                // super concept: jetbrains.mps.lang.core.INamedConcept 
            }
            
            export class ConceptReference extends TypedNode {
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
                // feature: concept 
                // super concept: jetbrains.mps.lang.core.BaseConcept 
            }
            
            export class IHasUID extends TypedNode {
                                public set uid(value: string | undefined) {
                    this.node.setPropertyValue("uid", value)
                }
                public get uid(): string | undefined {
                    return this.node.getPropertyValue("uid")
                }
                // feature: uid 
                
            }
            }