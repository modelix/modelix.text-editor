import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode
} from "ts-model-api";

import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";

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

  export const Language = L_jetbrains_mps_lang_structure.INSTANCE

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
  }

  export class IStructureDeprecatable extends TypedNode {

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
  }
}
