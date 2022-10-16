import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  TypedNode
} from "ts-model-api";

export class L_com_mbeddr_mpsutil_interpreter extends GeneratedLanguage {
    constructor() {
        super("com.mbeddr.mpsutil.interpreter")
    }
    /*
    public getConcepts() {
        return [this.ICanHaveTestCoverage, this.IInterpreterWrapperType, this.ITrivialNode, this.ITracerFrame, this.IReveal, this.ValueInspector]
    }
                    public ICanHaveTestCoverage: _C_Impl_ICanHaveTestCoverage = _C_Impl_ICanHaveTestCoverage
    public IInterpreterWrapperType: _C_Impl_IInterpreterWrapperType = _C_Impl_IInterpreterWrapperType
    public ITrivialNode: _C_Impl_ITrivialNode = _C_Impl_ITrivialNode
    public ITracerFrame: _C_Impl_ITracerFrame = _C_Impl_ITracerFrame
    public IReveal: _C_Impl_IReveal = _C_Impl_IReveal
    public ValueInspector: _C_Impl_ValueInspector = _C_Impl_ValueInspector
    */
}

            export class ICanHaveTestCoverage extends TypedNode {
    
}

export class IInterpreterWrapperType extends TypedNode {
    
}

export class ITrivialNode extends TypedNode {
    
}

export class ITracerFrame extends TypedNode {
    
}

export class IReveal extends TypedNode {
    
}

export class ValueInspector extends TypedNode {
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