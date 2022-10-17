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

  export const Language = L_org_modelix_model_metametamodel.INSTANCE

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
  }

  export class IRole extends TypedNode {
    public set name(value: string | undefined) {
      this.node.setPropertyValue("name", value)
    }

    public get name(): string | undefined {
      return this.node.getPropertyValue("name")
    }
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
  }

  export class IHasUID extends TypedNode {

  }
}
