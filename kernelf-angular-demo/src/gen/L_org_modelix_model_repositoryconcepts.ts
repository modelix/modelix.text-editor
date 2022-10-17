import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode
} from "ts-model-api";

import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";

export namespace L_org_modelix_model_repositoryconcepts {

  export class L_org_modelix_model_repositoryconcepts extends GeneratedLanguage {
    public static INSTANCE: L_org_modelix_model_repositoryconcepts = new L_org_modelix_model_repositoryconcepts();

    constructor() {
      super("org.modelix.model.repositoryconcepts")

      this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/474657388638618892", (node: INodeJS) => new Model(node))
      this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/6402965165736932003", (node: INodeJS) => new ModelReference(node))
      this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/474657388638618895", (node: INodeJS) => new Module(node))
      this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/5782622473578468308", (node: INodeJS) => new ModuleReference(node))
      this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/4008363636171860313", (node: INodeJS) => new Project(node))
      this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/474657388638618902", (node: INodeJS) => new Repository(node))
      this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/7341098702109598211", (node: INodeJS) => new Solution(node))
      this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/7341098702109598212", (node: INodeJS) => new Language(node))
      this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/7341098702109598213", (node: INodeJS) => new DevKit(node))
      this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/2206727074858242403", (node: INodeJS) => new ModuleFacet(node))
      this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/2206727074858242406", (node: INodeJS) => new JavaModuleFacet(node))
      this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/2206727074858242415", (node: INodeJS) => new ModuleDependency(node))
      this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/2206727074858242429", (node: INodeJS) => new SingleLanguageDependency(node))
      this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/4201834143491306084", (node: INodeJS) => new ProjectModule(node))
      this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/8958347146611575311", (node: INodeJS) => new LanguageDependency(node))
      this.nodeWrappers.set("mps:0a7577d1-d4e5-431d-98b1-fae38f9aee80/8958347146611575318", (node: INodeJS) => new DevkitDependency(node))
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

  export const Language = L_org_modelix_model_repositoryconcepts.INSTANCE

  export class Model extends TypedNode {
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
  }

  export class ModelReference extends TypedNode {
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
  }

  export class Module extends TypedNode {
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
  }

  export class ModuleReference extends TypedNode {
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
  }

  export class Project extends TypedNode {
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
  }

  export class Repository extends TypedNode {
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
  }

  export class Solution extends TypedNode {
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

    public facets: ChildListAccessor<L_org_modelix_model_repositoryconcepts.ModuleFacet> = new ChildListAccessor(this.node, "facets")
    public models: ChildListAccessor<L_org_modelix_model_repositoryconcepts.Model> = new ChildListAccessor(this.node, "models")
    public dependencies: ChildListAccessor<L_org_modelix_model_repositoryconcepts.ModuleDependency> = new ChildListAccessor(this.node, "dependencies")
    public languageDependencies: ChildListAccessor<L_org_modelix_model_repositoryconcepts.LanguageDependency> = new ChildListAccessor(this.node, "languageDependencies")

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
  }

  export class Language extends TypedNode {
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

    public facets: ChildListAccessor<L_org_modelix_model_repositoryconcepts.ModuleFacet> = new ChildListAccessor(this.node, "facets")
    public models: ChildListAccessor<L_org_modelix_model_repositoryconcepts.Model> = new ChildListAccessor(this.node, "models")
    public dependencies: ChildListAccessor<L_org_modelix_model_repositoryconcepts.ModuleDependency> = new ChildListAccessor(this.node, "dependencies")
    public languageDependencies: ChildListAccessor<L_org_modelix_model_repositoryconcepts.LanguageDependency> = new ChildListAccessor(this.node, "languageDependencies")

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
  }

  export class DevKit extends TypedNode {
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

    public facets: ChildListAccessor<L_org_modelix_model_repositoryconcepts.ModuleFacet> = new ChildListAccessor(this.node, "facets")
    public models: ChildListAccessor<L_org_modelix_model_repositoryconcepts.Model> = new ChildListAccessor(this.node, "models")
    public dependencies: ChildListAccessor<L_org_modelix_model_repositoryconcepts.ModuleDependency> = new ChildListAccessor(this.node, "dependencies")
    public languageDependencies: ChildListAccessor<L_org_modelix_model_repositoryconcepts.LanguageDependency> = new ChildListAccessor(this.node, "languageDependencies")

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
  }

  export class ModuleFacet extends TypedNode {
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
  }

  export class JavaModuleFacet extends TypedNode {
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
  }

  export class ModuleDependency extends TypedNode {
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
  }

  export class SingleLanguageDependency extends TypedNode {
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

    public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
  }

  export class ProjectModule extends TypedNode {
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
  }

  export class LanguageDependency extends TypedNode {
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
  }

  export class DevkitDependency extends TypedNode {
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

    public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
  }
}
