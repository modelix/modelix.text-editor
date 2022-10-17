import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode
} from "ts-model-api";

import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";

export namespace L_jetbrains_mps_lang_resources {

  export class L_jetbrains_mps_lang_resources extends GeneratedLanguage {
    public static INSTANCE: L_jetbrains_mps_lang_resources = new L_jetbrains_mps_lang_resources();

    constructor() {
      super("jetbrains.mps.lang.resources")

      this.nodeWrappers.set("mps:982eb8df-2c96-4bd7-9963-11712ea622e5/5177162104569058199", (node: INodeJS) => new HelpURL(node))
      this.nodeWrappers.set("mps:982eb8df-2c96-4bd7-9963-11712ea622e5/4726480899534370999", (node: INodeJS) => new BaseURL(node))
    }

    /*
    public getConcepts() {
        return [this.HelpURL, this.BaseURL]
    }
                    public HelpURL: _C_Impl_HelpURL = _C_Impl_HelpURL
    public BaseURL: _C_Impl_BaseURL = _C_Impl_BaseURL
    */
  }

  export const Language = L_jetbrains_mps_lang_resources.INSTANCE

  export class HelpURL extends TypedNode {
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

  export class BaseURL extends TypedNode {
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
