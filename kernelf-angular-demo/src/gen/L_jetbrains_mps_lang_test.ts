import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  TypedNode
} from "ts-model-api";

export class L_jetbrains_mps_lang_test extends GeneratedLanguage {
    constructor() {
        super("jetbrains.mps.lang.test")
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
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
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
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class INodesTestMethod extends TypedNode {
    
}