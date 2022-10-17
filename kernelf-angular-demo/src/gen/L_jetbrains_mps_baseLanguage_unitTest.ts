import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode
} from "ts-model-api";


export namespace L_jetbrains_mps_baseLanguage_unitTest {

  export class L_jetbrains_mps_baseLanguage_unitTest extends GeneratedLanguage {
    public static INSTANCE: L_jetbrains_mps_baseLanguage_unitTest = new L_jetbrains_mps_baseLanguage_unitTest();

    constructor() {
      super("jetbrains.mps.baseLanguage.unitTest")

      this.nodeWrappers.set("mps:f61473f9-130f-42f6-b98d-6c438812c2f6/1215620452633", (node: INodeJS) => new ITestable(node))
      this.nodeWrappers.set("mps:f61473f9-130f-42f6-b98d-6c438812c2f6/1216130694486", (node: INodeJS) => new ITestCase(node))
      this.nodeWrappers.set("mps:f61473f9-130f-42f6-b98d-6c438812c2f6/1216134482493", (node: INodeJS) => new ITestMethod(node))
    }

    /*
    public getConcepts() {
        return [this.ITestable, this.ITestCase, this.ITestMethod]
    }
                    public ITestable: _C_Impl_ITestable = _C_Impl_ITestable
    public ITestCase: _C_Impl_ITestCase = _C_Impl_ITestCase
    public ITestMethod: _C_Impl_ITestMethod = _C_Impl_ITestMethod
    */
  }

  export const Language = L_jetbrains_mps_baseLanguage_unitTest.INSTANCE

  export class ITestable extends TypedNode {

  }

  export class ITestCase extends TypedNode {
    public set name(value: string | undefined) {
      this.node.setPropertyValue("name", value)
    }

    public get name(): string | undefined {
      return this.node.getPropertyValue("name")
    }
  }

  export class ITestMethod extends TypedNode {

  }
}
