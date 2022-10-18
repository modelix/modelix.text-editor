            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
import {L_jetbrains_mps_lang_resources} from "./L_jetbrains_mps_lang_resources";
            
            export namespace L_jetbrains_mps_lang_structure {
            
            export class L_jetbrains_mps_lang_structure extends GeneratedLanguage {
                public static INSTANCE: L_jetbrains_mps_lang_structure = new L_jetbrains_mps_lang_structure();
                constructor() {
                    super("jetbrains.mps.lang.structure")
                    
                    this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/1071489288298", (node: INodeJS) => new _N_TypedImpl_LinkDeclaration(node))
this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/1071489288299", (node: INodeJS) => new _N_TypedImpl_PropertyDeclaration(node))
this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/1082978164218", (node: INodeJS) => new _N_TypedImpl_DataTypeDeclaration(node))
this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/1169125787135", (node: INodeJS) => new _N_TypedImpl_AbstractConceptDeclaration(node))
this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/1224848324737", (node: INodeJS) => new _N_TypedImpl_IStructureDeprecatable(node))
this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/7862711839422615214", (node: INodeJS) => new _N_TypedImpl_DocumentationObjective(node))
this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/1588368162880629653", (node: INodeJS) => new _N_TypedImpl_INamedStructureElement(node))
this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/1588368162880706270", (node: INodeJS) => new _N_TypedImpl_IStructureElement(node))
this.nodeWrappers.set("mps:c72da2b9-7cce-4447-8389-f407dc1158b7/7954147563045283296", (node: INodeJS) => new _N_TypedImpl_INamedAspect(node))
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
            
                                    export interface N_LinkDeclaration extends L_jetbrains_mps_lang_core.N_BaseConcept, L_jetbrains_mps_lang_core.N_InterfacePart, N_IStructureDeprecatable, N_INamedStructureElement, N_DocumentationObjective {
                            _is_jetbrains_mps_lang_structure_LinkDeclaration: boolean
                            role: string | undefined
            metaClass: string | undefined
            sourceCardinality: string | undefined
            unordered: string | undefined
            linkId: string | undefined
                                
                                
                        }
                        
                        export namespace N_LinkDeclaration {
                            export function isInstance(node: ITypedNode): node is N_LinkDeclaration {
                                return '_is_jetbrains_mps_lang_structure_LinkDeclaration' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LinkDeclaration extends TypedNode implements N_LinkDeclaration {
                            public _is_jetbrains_mps_lang_structure_LinkDeclaration: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_InterfacePart: boolean = true
            public _is_jetbrains_mps_lang_structure_IStructureDeprecatable: boolean = true
            public _is_jetbrains_mps_lang_core_IDeprecatable: boolean = true
            public _is_jetbrains_mps_lang_structure_INamedStructureElement: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_structure_IStructureElement: boolean = true
            public _is_jetbrains_mps_lang_structure_DocumentationObjective: boolean = true
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
                                                
                        }
                        
                        
                        export interface N_PropertyDeclaration extends L_jetbrains_mps_lang_core.N_BaseConcept, L_jetbrains_mps_lang_core.N_InterfacePart, N_INamedStructureElement, N_IStructureDeprecatable, N_DocumentationObjective {
                            _is_jetbrains_mps_lang_structure_PropertyDeclaration: boolean
                            propertyId: string | undefined
                                
                        }
                        
                        export namespace N_PropertyDeclaration {
                            export function isInstance(node: ITypedNode): node is N_PropertyDeclaration {
                                return '_is_jetbrains_mps_lang_structure_PropertyDeclaration' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_PropertyDeclaration extends TypedNode implements N_PropertyDeclaration {
                            public _is_jetbrains_mps_lang_structure_PropertyDeclaration: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_InterfacePart: boolean = true
            public _is_jetbrains_mps_lang_structure_INamedStructureElement: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_structure_IStructureElement: boolean = true
            public _is_jetbrains_mps_lang_structure_IStructureDeprecatable: boolean = true
            public _is_jetbrains_mps_lang_core_IDeprecatable: boolean = true
            public _is_jetbrains_mps_lang_structure_DocumentationObjective: boolean = true
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
                            public set propertyId(value: string | undefined) {
                                this.node.setPropertyValue("propertyId", value)
                            }
                            public get propertyId(): string | undefined {
                                return this.node.getPropertyValue("propertyId")
                            }
                        }
                        
                        
                        export interface N_DataTypeDeclaration extends L_jetbrains_mps_lang_core.N_BaseConcept, N_INamedStructureElement, N_IStructureDeprecatable {
                            _is_jetbrains_mps_lang_structure_DataTypeDeclaration: boolean
                            datatypeId: string | undefined
            languageId: string | undefined
                        }
                        
                        export namespace N_DataTypeDeclaration {
                            export function isInstance(node: ITypedNode): node is N_DataTypeDeclaration {
                                return '_is_jetbrains_mps_lang_structure_DataTypeDeclaration' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_DataTypeDeclaration extends TypedNode implements N_DataTypeDeclaration {
                            public _is_jetbrains_mps_lang_structure_DataTypeDeclaration: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_structure_INamedStructureElement: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_structure_IStructureElement: boolean = true
            public _is_jetbrains_mps_lang_structure_IStructureDeprecatable: boolean = true
            public _is_jetbrains_mps_lang_core_IDeprecatable: boolean = true
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
                        }
                        
                        
                        export interface N_AbstractConceptDeclaration extends L_jetbrains_mps_lang_core.N_BaseConcept, N_INamedStructureElement, L_jetbrains_mps_lang_core.N_InterfacePart, N_IStructureDeprecatable, N_DocumentationObjective {
                            _is_jetbrains_mps_lang_structure_AbstractConceptDeclaration: boolean
                            oldHelpURL: string | undefined
            conceptAlias: string | undefined
            conceptShortDescription: string | undefined
            abstract: string | undefined
            final: string | undefined
            intConceptId: string | undefined
            conceptId: string | undefined
            languageId: string | undefined
            linkDeclaration: ChildListAccessor<N_LinkDeclaration>
            propertyDeclaration: ChildListAccessor<N_PropertyDeclaration>
            helpURL: SingleChildAccessor<L_jetbrains_mps_lang_resources.N_HelpURL>
                                
                        }
                        
                        export namespace N_AbstractConceptDeclaration {
                            export function isInstance(node: ITypedNode): node is N_AbstractConceptDeclaration {
                                return '_is_jetbrains_mps_lang_structure_AbstractConceptDeclaration' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractConceptDeclaration extends TypedNode implements N_AbstractConceptDeclaration {
                            public _is_jetbrains_mps_lang_structure_AbstractConceptDeclaration: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_structure_INamedStructureElement: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_structure_IStructureElement: boolean = true
            public _is_jetbrains_mps_lang_core_InterfacePart: boolean = true
            public _is_jetbrains_mps_lang_structure_IStructureDeprecatable: boolean = true
            public _is_jetbrains_mps_lang_core_IDeprecatable: boolean = true
            public _is_jetbrains_mps_lang_structure_DocumentationObjective: boolean = true
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
                            public linkDeclaration: ChildListAccessor<N_LinkDeclaration> = new ChildListAccessor(this.node, "linkDeclaration")
                            public propertyDeclaration: ChildListAccessor<N_PropertyDeclaration> = new ChildListAccessor(this.node, "propertyDeclaration")
                            public helpURL: SingleChildAccessor<L_jetbrains_mps_lang_resources.N_HelpURL> = new SingleChildAccessor(this.node, "helpURL")
                        }
                        
                        
                        export interface N_IStructureDeprecatable extends L_jetbrains_mps_lang_core.N_IDeprecatable {
                            _is_jetbrains_mps_lang_structure_IStructureDeprecatable: boolean
                            
                        }
                        
                        export namespace N_IStructureDeprecatable {
                            export function isInstance(node: ITypedNode): node is N_IStructureDeprecatable {
                                return '_is_jetbrains_mps_lang_structure_IStructureDeprecatable' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IStructureDeprecatable extends TypedNode implements N_IStructureDeprecatable {
                            public _is_jetbrains_mps_lang_structure_IStructureDeprecatable: boolean = true
            public _is_jetbrains_mps_lang_core_IDeprecatable: boolean = true
                            
                        }
                        
            
            export interface N_DocumentationObjective extends ITypedNode {
                _is_jetbrains_mps_lang_structure_DocumentationObjective: boolean
                
            }
            
            export namespace N_DocumentationObjective {
                export function isInstance(node: ITypedNode): node is N_DocumentationObjective {
                    return '_is_jetbrains_mps_lang_structure_DocumentationObjective' in node;
                }
            }
            
            export class _N_TypedImpl_DocumentationObjective extends TypedNode implements N_DocumentationObjective {
                public _is_jetbrains_mps_lang_structure_DocumentationObjective: boolean = true
                
            }
            
                        
                        export interface N_INamedStructureElement extends L_jetbrains_mps_lang_core.N_INamedConcept, N_IStructureElement {
                            _is_jetbrains_mps_lang_structure_INamedStructureElement: boolean
                            
                        }
                        
                        export namespace N_INamedStructureElement {
                            export function isInstance(node: ITypedNode): node is N_INamedStructureElement {
                                return '_is_jetbrains_mps_lang_structure_INamedStructureElement' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_INamedStructureElement extends TypedNode implements N_INamedStructureElement {
                            public _is_jetbrains_mps_lang_structure_INamedStructureElement: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_structure_IStructureElement: boolean = true
                                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                        }
                        
            
            export interface N_IStructureElement extends ITypedNode {
                _is_jetbrains_mps_lang_structure_IStructureElement: boolean
                
            }
            
            export namespace N_IStructureElement {
                export function isInstance(node: ITypedNode): node is N_IStructureElement {
                    return '_is_jetbrains_mps_lang_structure_IStructureElement' in node;
                }
            }
            
            export class _N_TypedImpl_IStructureElement extends TypedNode implements N_IStructureElement {
                public _is_jetbrains_mps_lang_structure_IStructureElement: boolean = true
                
            }
            
                        
                        export interface N_INamedAspect extends L_jetbrains_mps_lang_core.N_INamedConcept {
                            _is_jetbrains_mps_lang_structure_INamedAspect: boolean
                            
                        }
                        
                        export namespace N_INamedAspect {
                            export function isInstance(node: ITypedNode): node is N_INamedAspect {
                                return '_is_jetbrains_mps_lang_structure_INamedAspect' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_INamedAspect extends TypedNode implements N_INamedAspect {
                            public _is_jetbrains_mps_lang_structure_INamedAspect: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
                                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                        }
            }