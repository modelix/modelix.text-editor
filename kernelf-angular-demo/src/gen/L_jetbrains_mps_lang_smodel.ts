import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode
} from "ts-model-api";


export namespace L_jetbrains_mps_lang_smodel {

  export class L_jetbrains_mps_lang_smodel extends GeneratedLanguage {
    public static INSTANCE: L_jetbrains_mps_lang_smodel = new L_jetbrains_mps_lang_smodel();

    constructor() {
      super("jetbrains.mps.lang.smodel")

      this.nodeWrappers.set("mps:7866978e-a0f0-4cc7-81bc-4d213d9375e1/3542851458883437336", (node: INodeJS) => new LanguageIdentity(node))
      this.nodeWrappers.set("mps:7866978e-a0f0-4cc7-81bc-4d213d9375e1/5769081855527239153", (node: INodeJS) => new AbstractLanguageIdentity(node))
    }

    /*
    public getConcepts() {
        return [this.LanguageIdentity, this.AbstractLanguageIdentity]
    }
                    public LanguageIdentity: _C_Impl_LanguageIdentity = _C_Impl_LanguageIdentity
    public AbstractLanguageIdentity: _C_Impl_AbstractLanguageIdentity = _C_Impl_AbstractLanguageIdentity
    */
  }

  export const Language = L_jetbrains_mps_lang_smodel.INSTANCE

  export class LanguageIdentity extends TypedNode {

  }

  export class AbstractLanguageIdentity extends TypedNode {

  }
}
