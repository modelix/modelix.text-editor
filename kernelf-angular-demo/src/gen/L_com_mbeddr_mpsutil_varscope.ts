import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode
} from "ts-model-api";


export namespace L_com_mbeddr_mpsutil_varscope {

  export class L_com_mbeddr_mpsutil_varscope extends GeneratedLanguage {
    public static INSTANCE: L_com_mbeddr_mpsutil_varscope = new L_com_mbeddr_mpsutil_varscope();

    constructor() {
      super("com.mbeddr.mpsutil.varscope")

      this.nodeWrappers.set("mps:3819ba36-98f4-49ac-b779-34f3a458c09b/926589859261493016", (node: INodeJS) => new IScopeProvider(node))
      this.nodeWrappers.set("mps:3819ba36-98f4-49ac-b779-34f3a458c09b/926589859261521036", (node: INodeJS) => new IScopeElement(node))
    }

    /*
    public getConcepts() {
        return [this.IScopeProvider, this.IScopeElement]
    }
                    public IScopeProvider: _C_Impl_IScopeProvider = _C_Impl_IScopeProvider
    public IScopeElement: _C_Impl_IScopeElement = _C_Impl_IScopeElement
    */
  }

  export const Language = L_com_mbeddr_mpsutil_varscope.INSTANCE

  export class IScopeProvider extends TypedNode {

  }

  export class IScopeElement extends TypedNode {
    public set name(value: string | undefined) {
      this.node.setPropertyValue("name", value)
    }

    public get name(): string | undefined {
      return this.node.getPropertyValue("name")
    }
  }
}
