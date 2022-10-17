import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode
} from "ts-model-api";

import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";

export namespace L_jetbrains_mps_lang_test {

  export class L_jetbrains_mps_lang_test extends GeneratedLanguage {
    public static INSTANCE: L_jetbrains_mps_lang_test = new L_jetbrains_mps_lang_test();

    constructor() {
      super("jetbrains.mps.lang.test")

      this.nodeWrappers.set("mps:8585453e-6bfb-4d80-98de-b16074f1d86c/1215601147424", (node: INodeJS) => new NodeCheckOperation(node))
      this.nodeWrappers.set("mps:8585453e-6bfb-4d80-98de-b16074f1d86c/5097124989038916362", (node: INodeJS) => new TestInfo(node))
      this.nodeWrappers.set("mps:8585453e-6bfb-4d80-98de-b16074f1d86c/1517788251554588461", (node: INodeJS) => new INodesTestMethod(node))
    }

    /*
    public getConcepts() {
        return [this.NodeCheckOperation, this.TestInfo, this.INodesTestMethod]
    }
                    public NodeCheckOperation: _C_Impl_NodeCheckOperation = _C_Impl_NodeCheckOperation
    public TestInfo: _C_Impl_TestInfo = _C_Impl_TestInfo
    public INodesTestMethod: _C_Impl_INodesTestMethod = _C_Impl_INodesTestMethod
    */
  }

  export const Language = L_jetbrains_mps_lang_test.INSTANCE

  export class NodeCheckOperation extends TypedNode {
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

  export class TestInfo extends TypedNode {
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

  export class INodesTestMethod extends TypedNode {

  }
}
