import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  TypedNode
} from "ts-model-api";

export class L_org_iets3_core_expr_simpleTypes_tests extends GeneratedLanguage {
    constructor() {
        super("org.iets3.core.expr.simpleTypes.tests")
    }
    /*
    public getConcepts() {
        return [this.RandomVectorProducer, this.EqClassProducer]
    }
                    public RandomVectorProducer: _C_Impl_RandomVectorProducer = _C_Impl_RandomVectorProducer
    public EqClassProducer: _C_Impl_EqClassProducer = _C_Impl_EqClassProducer
    */
}

            export class RandomVectorProducer extends TypedNode {
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

export class EqClassProducer extends TypedNode {
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