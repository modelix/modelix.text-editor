import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode
} from "ts-model-api";

import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";

export namespace L_org_modelix_model_runtimelang {

  export class L_org_modelix_model_runtimelang extends GeneratedLanguage {
    public static INSTANCE: L_org_modelix_model_runtimelang = new L_org_modelix_model_runtimelang();

    constructor() {
      super("org.modelix.model.runtimelang")

      this.nodeWrappers.set("mps:b6980ebd-f01d-459d-a952-38740f6313b4/7113393488488348863", (node: INodeJS) => new ModelServerInfo(node))
      this.nodeWrappers.set("mps:b6980ebd-f01d-459d-a952-38740f6313b4/7113393488488348864", (node: INodeJS) => new RepositoryInfo(node))
      this.nodeWrappers.set("mps:b6980ebd-f01d-459d-a952-38740f6313b4/7113393488488348865", (node: INodeJS) => new BranchInfo(node))
    }

    /*
    public getConcepts() {
        return [this.ModelServerInfo, this.RepositoryInfo, this.BranchInfo]
    }
                    public ModelServerInfo: _C_Impl_ModelServerInfo = _C_Impl_ModelServerInfo
    public RepositoryInfo: _C_Impl_RepositoryInfo = _C_Impl_RepositoryInfo
    public BranchInfo: _C_Impl_BranchInfo = _C_Impl_BranchInfo
    */
  }

  export const Language = L_org_modelix_model_runtimelang.INSTANCE

  export class ModelServerInfo extends TypedNode {
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

  export class RepositoryInfo extends TypedNode {
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

  export class BranchInfo extends TypedNode {
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
}
