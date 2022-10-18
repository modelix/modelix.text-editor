            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_org_modelix_model_repositoryconcepts {
            
            export class L_org_modelix_model_repositoryconcepts extends GeneratedLanguage {
                public static INSTANCE: L_org_modelix_model_repositoryconcepts = new L_org_modelix_model_repositoryconcepts();
                constructor() {
                    super("org.modelix.model.repositoryconcepts")
                    
                    this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/474657388638618892", (node: INodeJS) => new _N_TypedImpl_Model(node))
this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/6402965165736932003", (node: INodeJS) => new _N_TypedImpl_ModelReference(node))
this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/474657388638618895", (node: INodeJS) => new _N_TypedImpl_Module(node))
this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/5782622473578468308", (node: INodeJS) => new _N_TypedImpl_ModuleReference(node))
this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/4008363636171860313", (node: INodeJS) => new _N_TypedImpl_Project(node))
this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/474657388638618902", (node: INodeJS) => new _N_TypedImpl_Repository(node))
this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/7341098702109598211", (node: INodeJS) => new _N_TypedImpl_Solution(node))
this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/7341098702109598212", (node: INodeJS) => new _N_TypedImpl_Language(node))
this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/7341098702109598213", (node: INodeJS) => new _N_TypedImpl_DevKit(node))
this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/2206727074858242403", (node: INodeJS) => new _N_TypedImpl_ModuleFacet(node))
this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/2206727074858242406", (node: INodeJS) => new _N_TypedImpl_JavaModuleFacet(node))
this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/2206727074858242415", (node: INodeJS) => new _N_TypedImpl_ModuleDependency(node))
this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/2206727074858242429", (node: INodeJS) => new _N_TypedImpl_SingleLanguageDependency(node))
this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/4201834143491306084", (node: INodeJS) => new _N_TypedImpl_ProjectModule(node))
this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/8958347146611575311", (node: INodeJS) => new _N_TypedImpl_LanguageDependency(node))
this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/8958347146611575318", (node: INodeJS) => new _N_TypedImpl_DevkitDependency(node))
                }
                /*
                public getConcepts() {
                    return [this.Model, this.ModelReference, this.Module, this.ModuleReference, this.Project, this.Repository, this.Solution, this.Language, this.DevKit, this.ModuleFacet, this.JavaModuleFacet, this.ModuleDependency, this.SingleLanguageDependency, this.ProjectModule, this.LanguageDependency, this.DevkitDependency]
                }
                                public Model: _C_Impl_Model = _C_Impl_Model
                public ModelReference: _C_Impl_ModelReference = _C_Impl_ModelReference
                public Module: _C_Impl_Module = _C_Impl_Module
                public ModuleReference: _C_Impl_ModuleReference = _C_Impl_ModuleReference
                public Project: _C_Impl_Project = _C_Impl_Project
                public Repository: _C_Impl_Repository = _C_Impl_Repository
                public Solution: _C_Impl_Solution = _C_Impl_Solution
                public Language: _C_Impl_Language = _C_Impl_Language
                public DevKit: _C_Impl_DevKit = _C_Impl_DevKit
                public ModuleFacet: _C_Impl_ModuleFacet = _C_Impl_ModuleFacet
                public JavaModuleFacet: _C_Impl_JavaModuleFacet = _C_Impl_JavaModuleFacet
                public ModuleDependency: _C_Impl_ModuleDependency = _C_Impl_ModuleDependency
                public SingleLanguageDependency: _C_Impl_SingleLanguageDependency = _C_Impl_SingleLanguageDependency
                public ProjectModule: _C_Impl_ProjectModule = _C_Impl_ProjectModule
                public LanguageDependency: _C_Impl_LanguageDependency = _C_Impl_LanguageDependency
                public DevkitDependency: _C_Impl_DevkitDependency = _C_Impl_DevkitDependency
                */
            }
            export const INSTANCE = L_org_modelix_model_repositoryconcepts.INSTANCE
            
                                    export interface N_Model extends L_jetbrains_mps_lang_core.N_BaseConcept, L_jetbrains_mps_lang_core.N_INamedConcept {
                            _is_org_modelix_model_repositoryconcepts_Model: boolean
                            id: string | undefined
            rootNodes: ChildListAccessor<L_jetbrains_mps_lang_core.N_BaseConcept>
            modelImports: ChildListAccessor<N_ModelReference>
            usedLanguages: ChildListAccessor<N_SingleLanguageDependency>
                        }
                        
                        export namespace N_Model {
                            export function isInstance(node: ITypedNode): node is N_Model {
                                return '_is_org_modelix_model_repositoryconcepts_Model' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Model extends TypedNode implements N_Model {
                            public _is_org_modelix_model_repositoryconcepts_Model: boolean = true
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
                            public set id(value: string | undefined) {
                                this.node.setPropertyValue("id", value)
                            }
                            public get id(): string | undefined {
                                return this.node.getPropertyValue("id")
                            }
                            public rootNodes: ChildListAccessor<L_jetbrains_mps_lang_core.N_BaseConcept> = new ChildListAccessor(this.node, "rootNodes")
                            public modelImports: ChildListAccessor<N_ModelReference> = new ChildListAccessor(this.node, "modelImports")
                            public usedLanguages: ChildListAccessor<N_SingleLanguageDependency> = new ChildListAccessor(this.node, "usedLanguages")
                        }
                        
                        
                        export interface N_ModelReference extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_modelix_model_repositoryconcepts_ModelReference: boolean
                                                
                        }
                        
                        export namespace N_ModelReference {
                            export function isInstance(node: ITypedNode): node is N_ModelReference {
                                return '_is_org_modelix_model_repositoryconcepts_ModelReference' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ModelReference extends TypedNode implements N_ModelReference {
                            public _is_org_modelix_model_repositoryconcepts_ModelReference: boolean = true
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
                        
                        
                        export interface N_Module extends L_jetbrains_mps_lang_core.N_BaseConcept, L_jetbrains_mps_lang_core.N_INamedConcept {
                            _is_org_modelix_model_repositoryconcepts_Module: boolean
                            id: string | undefined
            moduleVersion: string | undefined
            compileInMPS: string | undefined
            facets: ChildListAccessor<N_ModuleFacet>
            models: ChildListAccessor<N_Model>
            dependencies: ChildListAccessor<N_ModuleDependency>
            languageDependencies: ChildListAccessor<N_LanguageDependency>
                        }
                        
                        export namespace N_Module {
                            export function isInstance(node: ITypedNode): node is N_Module {
                                return '_is_org_modelix_model_repositoryconcepts_Module' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Module extends TypedNode implements N_Module {
                            public _is_org_modelix_model_repositoryconcepts_Module: boolean = true
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
                            public set id(value: string | undefined) {
                                this.node.setPropertyValue("id", value)
                            }
                            public get id(): string | undefined {
                                return this.node.getPropertyValue("id")
                            }
                            public set moduleVersion(value: string | undefined) {
                                this.node.setPropertyValue("moduleVersion", value)
                            }
                            public get moduleVersion(): string | undefined {
                                return this.node.getPropertyValue("moduleVersion")
                            }
                            public set compileInMPS(value: string | undefined) {
                                this.node.setPropertyValue("compileInMPS", value)
                            }
                            public get compileInMPS(): string | undefined {
                                return this.node.getPropertyValue("compileInMPS")
                            }
                            public facets: ChildListAccessor<N_ModuleFacet> = new ChildListAccessor(this.node, "facets")
                            public models: ChildListAccessor<N_Model> = new ChildListAccessor(this.node, "models")
                            public dependencies: ChildListAccessor<N_ModuleDependency> = new ChildListAccessor(this.node, "dependencies")
                            public languageDependencies: ChildListAccessor<N_LanguageDependency> = new ChildListAccessor(this.node, "languageDependencies")
                        }
                        
                        
                        export interface N_ModuleReference extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_modelix_model_repositoryconcepts_ModuleReference: boolean
                                                
                        }
                        
                        export namespace N_ModuleReference {
                            export function isInstance(node: ITypedNode): node is N_ModuleReference {
                                return '_is_org_modelix_model_repositoryconcepts_ModuleReference' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ModuleReference extends TypedNode implements N_ModuleReference {
                            public _is_org_modelix_model_repositoryconcepts_ModuleReference: boolean = true
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
                        
                        
                        export interface N_Project extends L_jetbrains_mps_lang_core.N_BaseConcept, L_jetbrains_mps_lang_core.N_INamedConcept {
                            _is_org_modelix_model_repositoryconcepts_Project: boolean
                            modules: ChildListAccessor<N_Module>
            projectModules: ChildListAccessor<N_ProjectModule>
                        }
                        
                        export namespace N_Project {
                            export function isInstance(node: ITypedNode): node is N_Project {
                                return '_is_org_modelix_model_repositoryconcepts_Project' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Project extends TypedNode implements N_Project {
                            public _is_org_modelix_model_repositoryconcepts_Project: boolean = true
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
                            public modules: ChildListAccessor<N_Module> = new ChildListAccessor(this.node, "modules")
                            public projectModules: ChildListAccessor<N_ProjectModule> = new ChildListAccessor(this.node, "projectModules")
                        }
                        
                        
                        export interface N_Repository extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_modelix_model_repositoryconcepts_Repository: boolean
                            modules: ChildListAccessor<N_Module>
            projects: ChildListAccessor<N_Project>
            tempModules: ChildListAccessor<N_Module>
                        }
                        
                        export namespace N_Repository {
                            export function isInstance(node: ITypedNode): node is N_Repository {
                                return '_is_org_modelix_model_repositoryconcepts_Repository' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Repository extends TypedNode implements N_Repository {
                            public _is_org_modelix_model_repositoryconcepts_Repository: boolean = true
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
                            public modules: ChildListAccessor<N_Module> = new ChildListAccessor(this.node, "modules")
                            public projects: ChildListAccessor<N_Project> = new ChildListAccessor(this.node, "projects")
                            public tempModules: ChildListAccessor<N_Module> = new ChildListAccessor(this.node, "tempModules")
                        }
                        
                        
                        export interface N_Solution extends N_Module {
                            _is_org_modelix_model_repositoryconcepts_Solution: boolean
                            
                        }
                        
                        export namespace N_Solution {
                            export function isInstance(node: ITypedNode): node is N_Solution {
                                return '_is_org_modelix_model_repositoryconcepts_Solution' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Solution extends TypedNode implements N_Solution {
                            public _is_org_modelix_model_repositoryconcepts_Solution: boolean = true
            public _is_org_modelix_model_repositoryconcepts_Module: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
                                            public set id(value: string | undefined) {
                                this.node.setPropertyValue("id", value)
                            }
                            public get id(): string | undefined {
                                return this.node.getPropertyValue("id")
                            }
                            public set moduleVersion(value: string | undefined) {
                                this.node.setPropertyValue("moduleVersion", value)
                            }
                            public get moduleVersion(): string | undefined {
                                return this.node.getPropertyValue("moduleVersion")
                            }
                            public set compileInMPS(value: string | undefined) {
                                this.node.setPropertyValue("compileInMPS", value)
                            }
                            public get compileInMPS(): string | undefined {
                                return this.node.getPropertyValue("compileInMPS")
                            }
                            public facets: ChildListAccessor<N_ModuleFacet> = new ChildListAccessor(this.node, "facets")
                            public models: ChildListAccessor<N_Model> = new ChildListAccessor(this.node, "models")
                            public dependencies: ChildListAccessor<N_ModuleDependency> = new ChildListAccessor(this.node, "dependencies")
                            public languageDependencies: ChildListAccessor<N_LanguageDependency> = new ChildListAccessor(this.node, "languageDependencies")
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
                        
                        
                        export interface N_Language extends N_Module {
                            _is_org_modelix_model_repositoryconcepts_Language: boolean
                            
                        }
                        
                        export namespace N_Language {
                            export function isInstance(node: ITypedNode): node is N_Language {
                                return '_is_org_modelix_model_repositoryconcepts_Language' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Language extends TypedNode implements N_Language {
                            public _is_org_modelix_model_repositoryconcepts_Language: boolean = true
            public _is_org_modelix_model_repositoryconcepts_Module: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
                                            public set id(value: string | undefined) {
                                this.node.setPropertyValue("id", value)
                            }
                            public get id(): string | undefined {
                                return this.node.getPropertyValue("id")
                            }
                            public set moduleVersion(value: string | undefined) {
                                this.node.setPropertyValue("moduleVersion", value)
                            }
                            public get moduleVersion(): string | undefined {
                                return this.node.getPropertyValue("moduleVersion")
                            }
                            public set compileInMPS(value: string | undefined) {
                                this.node.setPropertyValue("compileInMPS", value)
                            }
                            public get compileInMPS(): string | undefined {
                                return this.node.getPropertyValue("compileInMPS")
                            }
                            public facets: ChildListAccessor<N_ModuleFacet> = new ChildListAccessor(this.node, "facets")
                            public models: ChildListAccessor<N_Model> = new ChildListAccessor(this.node, "models")
                            public dependencies: ChildListAccessor<N_ModuleDependency> = new ChildListAccessor(this.node, "dependencies")
                            public languageDependencies: ChildListAccessor<N_LanguageDependency> = new ChildListAccessor(this.node, "languageDependencies")
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
                        
                        
                        export interface N_DevKit extends N_Module {
                            _is_org_modelix_model_repositoryconcepts_DevKit: boolean
                            
                        }
                        
                        export namespace N_DevKit {
                            export function isInstance(node: ITypedNode): node is N_DevKit {
                                return '_is_org_modelix_model_repositoryconcepts_DevKit' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_DevKit extends TypedNode implements N_DevKit {
                            public _is_org_modelix_model_repositoryconcepts_DevKit: boolean = true
            public _is_org_modelix_model_repositoryconcepts_Module: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
                                            public set id(value: string | undefined) {
                                this.node.setPropertyValue("id", value)
                            }
                            public get id(): string | undefined {
                                return this.node.getPropertyValue("id")
                            }
                            public set moduleVersion(value: string | undefined) {
                                this.node.setPropertyValue("moduleVersion", value)
                            }
                            public get moduleVersion(): string | undefined {
                                return this.node.getPropertyValue("moduleVersion")
                            }
                            public set compileInMPS(value: string | undefined) {
                                this.node.setPropertyValue("compileInMPS", value)
                            }
                            public get compileInMPS(): string | undefined {
                                return this.node.getPropertyValue("compileInMPS")
                            }
                            public facets: ChildListAccessor<N_ModuleFacet> = new ChildListAccessor(this.node, "facets")
                            public models: ChildListAccessor<N_Model> = new ChildListAccessor(this.node, "models")
                            public dependencies: ChildListAccessor<N_ModuleDependency> = new ChildListAccessor(this.node, "dependencies")
                            public languageDependencies: ChildListAccessor<N_LanguageDependency> = new ChildListAccessor(this.node, "languageDependencies")
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
                        
                        
                        export interface N_ModuleFacet extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_modelix_model_repositoryconcepts_ModuleFacet: boolean
                            
                        }
                        
                        export namespace N_ModuleFacet {
                            export function isInstance(node: ITypedNode): node is N_ModuleFacet {
                                return '_is_org_modelix_model_repositoryconcepts_ModuleFacet' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ModuleFacet extends TypedNode implements N_ModuleFacet {
                            public _is_org_modelix_model_repositoryconcepts_ModuleFacet: boolean = true
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
                        
                        
                        export interface N_JavaModuleFacet extends N_ModuleFacet {
                            _is_org_modelix_model_repositoryconcepts_JavaModuleFacet: boolean
                            generated: string | undefined
            path: string | undefined
                        }
                        
                        export namespace N_JavaModuleFacet {
                            export function isInstance(node: ITypedNode): node is N_JavaModuleFacet {
                                return '_is_org_modelix_model_repositoryconcepts_JavaModuleFacet' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_JavaModuleFacet extends TypedNode implements N_JavaModuleFacet {
                            public _is_org_modelix_model_repositoryconcepts_JavaModuleFacet: boolean = true
            public _is_org_modelix_model_repositoryconcepts_ModuleFacet: boolean = true
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
                            public set generated(value: string | undefined) {
                                this.node.setPropertyValue("generated", value)
                            }
                            public get generated(): string | undefined {
                                return this.node.getPropertyValue("generated")
                            }
                            public set path(value: string | undefined) {
                                this.node.setPropertyValue("path", value)
                            }
                            public get path(): string | undefined {
                                return this.node.getPropertyValue("path")
                            }
                        }
                        
                        
                        export interface N_ModuleDependency extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_modelix_model_repositoryconcepts_ModuleDependency: boolean
                            reexport: string | undefined
            uuid: string | undefined
            name: string | undefined
            explicit: string | undefined
            version: string | undefined
            scope: string | undefined
                        }
                        
                        export namespace N_ModuleDependency {
                            export function isInstance(node: ITypedNode): node is N_ModuleDependency {
                                return '_is_org_modelix_model_repositoryconcepts_ModuleDependency' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ModuleDependency extends TypedNode implements N_ModuleDependency {
                            public _is_org_modelix_model_repositoryconcepts_ModuleDependency: boolean = true
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
                            public set reexport(value: string | undefined) {
                                this.node.setPropertyValue("reexport", value)
                            }
                            public get reexport(): string | undefined {
                                return this.node.getPropertyValue("reexport")
                            }
                            public set uuid(value: string | undefined) {
                                this.node.setPropertyValue("uuid", value)
                            }
                            public get uuid(): string | undefined {
                                return this.node.getPropertyValue("uuid")
                            }
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public set explicit(value: string | undefined) {
                                this.node.setPropertyValue("explicit", value)
                            }
                            public get explicit(): string | undefined {
                                return this.node.getPropertyValue("explicit")
                            }
                            public set version(value: string | undefined) {
                                this.node.setPropertyValue("version", value)
                            }
                            public get version(): string | undefined {
                                return this.node.getPropertyValue("version")
                            }
                            public set scope(value: string | undefined) {
                                this.node.setPropertyValue("scope", value)
                            }
                            public get scope(): string | undefined {
                                return this.node.getPropertyValue("scope")
                            }
                        }
                        
                        
                        export interface N_SingleLanguageDependency extends N_LanguageDependency {
                            _is_org_modelix_model_repositoryconcepts_SingleLanguageDependency: boolean
                            version: string | undefined
                        }
                        
                        export namespace N_SingleLanguageDependency {
                            export function isInstance(node: ITypedNode): node is N_SingleLanguageDependency {
                                return '_is_org_modelix_model_repositoryconcepts_SingleLanguageDependency' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SingleLanguageDependency extends TypedNode implements N_SingleLanguageDependency {
                            public _is_org_modelix_model_repositoryconcepts_SingleLanguageDependency: boolean = true
            public _is_org_modelix_model_repositoryconcepts_LanguageDependency: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
                                            public set uuid(value: string | undefined) {
                                this.node.setPropertyValue("uuid", value)
                            }
                            public get uuid(): string | undefined {
                                return this.node.getPropertyValue("uuid")
                            }
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
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
                            public set version(value: string | undefined) {
                                this.node.setPropertyValue("version", value)
                            }
                            public get version(): string | undefined {
                                return this.node.getPropertyValue("version")
                            }
                        }
                        
                        
                        export interface N_ProjectModule extends N_ModuleReference {
                            _is_org_modelix_model_repositoryconcepts_ProjectModule: boolean
                            virtualFolder: string | undefined
                        }
                        
                        export namespace N_ProjectModule {
                            export function isInstance(node: ITypedNode): node is N_ProjectModule {
                                return '_is_org_modelix_model_repositoryconcepts_ProjectModule' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ProjectModule extends TypedNode implements N_ProjectModule {
                            public _is_org_modelix_model_repositoryconcepts_ProjectModule: boolean = true
            public _is_org_modelix_model_repositoryconcepts_ModuleReference: boolean = true
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
                            public set virtualFolder(value: string | undefined) {
                                this.node.setPropertyValue("virtualFolder", value)
                            }
                            public get virtualFolder(): string | undefined {
                                return this.node.getPropertyValue("virtualFolder")
                            }
                        }
                        
                        
                        export interface N_LanguageDependency extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_modelix_model_repositoryconcepts_LanguageDependency: boolean
                            uuid: string | undefined
            name: string | undefined
                        }
                        
                        export namespace N_LanguageDependency {
                            export function isInstance(node: ITypedNode): node is N_LanguageDependency {
                                return '_is_org_modelix_model_repositoryconcepts_LanguageDependency' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LanguageDependency extends TypedNode implements N_LanguageDependency {
                            public _is_org_modelix_model_repositoryconcepts_LanguageDependency: boolean = true
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
                            public set uuid(value: string | undefined) {
                                this.node.setPropertyValue("uuid", value)
                            }
                            public get uuid(): string | undefined {
                                return this.node.getPropertyValue("uuid")
                            }
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                        }
                        
                        
                        export interface N_DevkitDependency extends N_LanguageDependency {
                            _is_org_modelix_model_repositoryconcepts_DevkitDependency: boolean
                            
                        }
                        
                        export namespace N_DevkitDependency {
                            export function isInstance(node: ITypedNode): node is N_DevkitDependency {
                                return '_is_org_modelix_model_repositoryconcepts_DevkitDependency' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_DevkitDependency extends TypedNode implements N_DevkitDependency {
                            public _is_org_modelix_model_repositoryconcepts_DevkitDependency: boolean = true
            public _is_org_modelix_model_repositoryconcepts_LanguageDependency: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
                                            public set uuid(value: string | undefined) {
                                this.node.setPropertyValue("uuid", value)
                            }
                            public get uuid(): string | undefined {
                                return this.node.getPropertyValue("uuid")
                            }
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
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
            }