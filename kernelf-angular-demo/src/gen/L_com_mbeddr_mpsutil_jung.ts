import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode
} from "ts-model-api";



export namespace L_com_mbeddr_mpsutil_jung {

export class L_com_mbeddr_mpsutil_jung extends GeneratedLanguage {
    public static INSTANCE: L_com_mbeddr_mpsutil_jung = new L_com_mbeddr_mpsutil_jung();
    constructor() {
        super("com.mbeddr.mpsutil.jung")
        
        this.nodeWrappers.set("mps:d09a16fb-1d68-4a92-a5a4-20b4b2f86a62/6388491840914066147", (node: INodeJS) => new IJGraphProvider(node))
    }
    /*
    public getConcepts() {
        return [this.IJGraphProvider]
    }
                    public IJGraphProvider: _C_Impl_IJGraphProvider = _C_Impl_IJGraphProvider
    */
}
export const INSTANCE = L_com_mbeddr_mpsutil_jung.INSTANCE

            export class IJGraphProvider extends TypedNode {
    
    
    
}
}