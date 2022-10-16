import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  TypedNode
} from "ts-model-api";

export class L_jetbrains_mps_baseLanguage_unitTest extends GeneratedLanguage {
    constructor() {
        super("jetbrains.mps.baseLanguage.unitTest")
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