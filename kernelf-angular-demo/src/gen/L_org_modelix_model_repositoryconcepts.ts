import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  TypedNode
} from "ts-model-api";

export class L_org_modelix_model_repositoryconcepts extends GeneratedLanguage {
  constructor() {
    super("org.modelix.model.repositoryconcepts")
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

  public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")

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

  public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
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

  public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")

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

  public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
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

  public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")

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

  public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
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

  public facets: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "facets")
  public models: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "models")
  public dependencies: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "dependencies")
  public languageDependencies: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "languageDependencies")

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

  public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")

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

  public facets: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "facets")
  public models: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "models")
  public dependencies: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "dependencies")
  public languageDependencies: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "languageDependencies")

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

  public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")

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

  public facets: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "facets")
  public models: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "models")
  public dependencies: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "dependencies")
  public languageDependencies: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "languageDependencies")

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

  public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")

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

  public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
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

  public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
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

  public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
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

  public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
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

  public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
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

  public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
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

  public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}
