            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
import {L_jetbrains_mps_lang_resources} from "./L_jetbrains_mps_lang_resources";
            
            export namespace L_jetbrains_mps_lang_structure {
            
            export class L_jetbrains_mps_lang_structure extends GeneratedLanguage {
                public static INSTANCE: L_jetbrains_mps_lang_structure = new L_jetbrains_mps_lang_structure();
                constructor() {
                    super("jetbrains.mps.lang.structure")
                    
                    this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/1071489288298", (node: INodeJS) => new LinkDeclaration(node))
this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/1071489288299", (node: INodeJS) => new PropertyDeclaration(node))
this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/1082978164218", (node: INodeJS) => new DataTypeDeclaration(node))
this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/1169125787135", (node: INodeJS) => new AbstractConceptDeclaration(node))
this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/1224848324737", (node: INodeJS) => new IStructureDeprecatable(node))
this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/7862711839422615214", (node: INodeJS) => new DocumentationObjective(node))
this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/1588368162880629653", (node: INodeJS) => new INamedStructureElement(node))
this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/1588368162880706270", (node: INodeJS) => new IStructureElement(node))
this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/7954147563045283296", (node: INodeJS) => new INamedAspect(node))
                }
                /*
                public getConcepts() {
                    return [this.LinkDeclaration, this.PropertyDeclaration, this.DataTypeDeclaration, this.AbstractConceptDeclaration, this.IStructureDeprecatable, this.DocumentationObjective, this.INamedStructureElement, this.IStructureElement, this.INamedAspect]
                }
                                public LinkDeclaration: _C_Impl_LinkDeclaration = _C_Impl_LinkDeclaration
                public PropertyDeclaration: _C_Impl_PropertyDeclaration = _C_Impl_PropertyDeclaration
                public DataTypeDeclaration: _C_Impl_DataTypeDeclaration = _C_Impl_DataTypeDeclaration
                public AbstractConceptDeclaration: _C_Impl_AbstractConceptDeclaration = _C_Impl_AbstractConceptDeclaration
                public IStructureDeprecatable: _C_Impl_IStructureDeprecatable = _C_Impl_IStructureDeprecatable
                public DocumentationObjective: _C_Impl_DocumentationObjective = _C_Impl_DocumentationObjective
                public INamedStructureElement: _C_Impl_INamedStructureElement = _C_Impl_INamedStructureElement
                public IStructureElement: _C_Impl_IStructureElement = _C_Impl_IStructureElement
                public INamedAspect: _C_Impl_INamedAspect = _C_Impl_INamedAspect
                */
            }
            export const INSTANCE = L_jetbrains_mps_lang_structure.INSTANCE
            
                                    export class LinkDeclaration extends TypedNode {
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
                            public set role(value: string | undefined) {
                                this.node.setPropertyValue("role", value)
                            }
                            public get role(): string | undefined {
                                return this.node.getPropertyValue("role")
                            }
                            public set metaClass(value: string | undefined) {
                                this.node.setPropertyValue("metaClass", value)
                            }
                            public get metaClass(): string | undefined {
                                return this.node.getPropertyValue("metaClass")
                            }
                            public set sourceCardinality(value: string | undefined) {
                                this.node.setPropertyValue("sourceCardinality", value)
                            }
                            public get sourceCardinality(): string | undefined {
                                return this.node.getPropertyValue("sourceCardinality")
                            }
                            public set unordered(value: string | undefined) {
                                this.node.setPropertyValue("unordered", value)
                            }
                            public get unordered(): string | undefined {
                                return this.node.getPropertyValue("unordered")
                            }
                            public set linkId(value: string | undefined) {
                                this.node.setPropertyValue("linkId", value)
                            }
                            public get linkId(): string | undefined {
                                return this.node.getPropertyValue("linkId")
                            }
                                                
                            // feature: role 
            // feature: metaClass 
            // feature: sourceCardinality 
            // feature: unordered 
            // feature: linkId 
            // feature: specializedLink 
            // feature: target 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.InterfacePart 
            // super concept: jetbrains.mps.lang.structure.IStructureDeprecatable 
            // super concept: jetbrains.mps.lang.core.IDeprecatable 
            // super concept: jetbrains.mps.lang.structure.INamedStructureElement 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.structure.IStructureElement 
            // super concept: jetbrains.mps.lang.structure.DocumentationObjective 
                        }
                        
                        export class PropertyDeclaration extends TypedNode {
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
                            public set propertyId(value: string | undefined) {
                                this.node.setPropertyValue("propertyId", value)
                            }
                            public get propertyId(): string | undefined {
                                return this.node.getPropertyValue("propertyId")
                            }
                            // feature: propertyId 
            // feature: dataType 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.InterfacePart 
            // super concept: jetbrains.mps.lang.structure.INamedStructureElement 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.structure.IStructureElement 
            // super concept: jetbrains.mps.lang.structure.IStructureDeprecatable 
            // super concept: jetbrains.mps.lang.core.IDeprecatable 
            // super concept: jetbrains.mps.lang.structure.DocumentationObjective 
                        }
                        
                        export class DataTypeDeclaration extends TypedNode {
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
                            public set datatypeId(value: string | undefined) {
                                this.node.setPropertyValue("datatypeId", value)
                            }
                            public get datatypeId(): string | undefined {
                                return this.node.getPropertyValue("datatypeId")
                            }
                            public set languageId(value: string | undefined) {
                                this.node.setPropertyValue("languageId", value)
                            }
                            public get languageId(): string | undefined {
                                return this.node.getPropertyValue("languageId")
                            }
                            // feature: datatypeId 
            // feature: languageId 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.structure.INamedStructureElement 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.structure.IStructureElement 
            // super concept: jetbrains.mps.lang.structure.IStructureDeprecatable 
            // super concept: jetbrains.mps.lang.core.IDeprecatable 
                        }
                        
                        export class AbstractConceptDeclaration extends TypedNode {
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
                            public set oldHelpURL(value: string | undefined) {
                                this.node.setPropertyValue("oldHelpURL", value)
                            }
                            public get oldHelpURL(): string | undefined {
                                return this.node.getPropertyValue("oldHelpURL")
                            }
                            public set conceptAlias(value: string | undefined) {
                                this.node.setPropertyValue("conceptAlias", value)
                            }
                            public get conceptAlias(): string | undefined {
                                return this.node.getPropertyValue("conceptAlias")
                            }
                            public set conceptShortDescription(value: string | undefined) {
                                this.node.setPropertyValue("conceptShortDescription", value)
                            }
                            public get conceptShortDescription(): string | undefined {
                                return this.node.getPropertyValue("conceptShortDescription")
                            }
                            public set abstract(value: string | undefined) {
                                this.node.setPropertyValue("abstract", value)
                            }
                            public get abstract(): string | undefined {
                                return this.node.getPropertyValue("abstract")
                            }
                            public set final(value: string | undefined) {
                                this.node.setPropertyValue("final", value)
                            }
                            public get final(): string | undefined {
                                return this.node.getPropertyValue("final")
                            }
                            public set intConceptId(value: string | undefined) {
                                this.node.setPropertyValue("intConceptId", value)
                            }
                            public get intConceptId(): string | undefined {
                                return this.node.getPropertyValue("intConceptId")
                            }
                            public set conceptId(value: string | undefined) {
                                this.node.setPropertyValue("conceptId", value)
                            }
                            public get conceptId(): string | undefined {
                                return this.node.getPropertyValue("conceptId")
                            }
                            public set languageId(value: string | undefined) {
                                this.node.setPropertyValue("languageId", value)
                            }
                            public get languageId(): string | undefined {
                                return this.node.getPropertyValue("languageId")
                            }
                            public linkDeclaration: ChildListAccessor<L_jetbrains_mps_lang_structure.LinkDeclaration> = new ChildListAccessor(this.node, "linkDeclaration")
                            public propertyDeclaration: ChildListAccessor<L_jetbrains_mps_lang_structure.PropertyDeclaration> = new ChildListAccessor(this.node, "propertyDeclaration")
                            public helpURL: SingleChildAccessor<L_jetbrains_mps_lang_resources.HelpURL> = new SingleChildAccessor(this.node, "helpURL")
                            // feature: oldHelpURL 
            // feature: conceptAlias 
            // feature: conceptShortDescription 
            // feature: abstract 
            // feature: final 
            // feature: intConceptId 
            // feature: conceptId 
            // feature: languageId 
            // feature: linkDeclaration 
            // feature: propertyDeclaration 
            // feature: helpURL 
            // feature: sourceNode 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.structure.INamedStructureElement 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.structure.IStructureElement 
            // super concept: jetbrains.mps.lang.core.InterfacePart 
            // super concept: jetbrains.mps.lang.structure.IStructureDeprecatable 
            // super concept: jetbrains.mps.lang.core.IDeprecatable 
            // super concept: jetbrains.mps.lang.structure.DocumentationObjective 
                        }
            
            export class IStructureDeprecatable extends TypedNode {
                
                
                // super concept: jetbrains.mps.lang.core.IDeprecatable 
            }
            
            export class DocumentationObjective extends TypedNode {
                
                
                
            }
                        
                        export class INamedStructureElement extends TypedNode {
                                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            // feature: name 
                            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.structure.IStructureElement 
                        }
            
            export class IStructureElement extends TypedNode {
                
                
                
            }
            
            export class INamedAspect extends TypedNode {
                                public set name(value: string | undefined) {
                    this.node.setPropertyValue("name", value)
                }
                public get name(): string | undefined {
                    return this.node.getPropertyValue("name")
                }
                
                // super concept: jetbrains.mps.lang.core.INamedConcept 
            }
            }