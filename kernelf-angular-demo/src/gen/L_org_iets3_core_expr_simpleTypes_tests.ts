import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode
} from "ts-model-api";

import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";

export namespace L_org_iets3_core_expr_simpleTypes_tests {

  export class L_org_iets3_core_expr_simpleTypes_tests extends GeneratedLanguage {
    public static INSTANCE: L_org_iets3_core_expr_simpleTypes_tests = new L_org_iets3_core_expr_simpleTypes_tests();

    constructor() {
      super("org.iets3.core.expr.simpleTypes.tests")

      this.nodeWrappers.set("mps:7bcf9284-ca29-484f-a3b3-2855bdd813ad/1360296727230407275", (node: INodeJS) => new RandomVectorProducer(node))
      this.nodeWrappers.set("mps:7bcf9284-ca29-484f-a3b3-2855bdd813ad/543046448977223537", (node: INodeJS) => new EqClassProducer(node))
    }

    /*
    public getConcepts() {
        return [this.RandomVectorProducer, this.EqClassProducer]
    }
                    public RandomVectorProducer: _C_Impl_RandomVectorProducer = _C_Impl_RandomVectorProducer
    public EqClassProducer: _C_Impl_EqClassProducer = _C_Impl_EqClassProducer
    */
  }

  export const Language = L_org_iets3_core_expr_simpleTypes_tests.INSTANCE

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

    public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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

    public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
  }
}
