import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode,
  ITypedNode
} from "ts-model-api";



export namespace L_com_mbeddr_mpsutil_jung {

export class L_com_mbeddr_mpsutil_jung extends GeneratedLanguage {
    public static INSTANCE: L_com_mbeddr_mpsutil_jung = new L_com_mbeddr_mpsutil_jung();
    constructor() {
        super("com.mbeddr.mpsutil.jung")
        
        this.nodeWrappers.set("mps:d09a16fb-1d68-4a92-a5a4-20b4b2f86a62/6388491840914066147", (node: INodeJS) => new _N_TypedImpl_IJGraphProvider(node))
    }
    /*
    public getConcepts() {
        return [this.IJGraphProvider]
    }
                    public IJGraphProvider: _C_Impl_IJGraphProvider = _C_Impl_IJGraphProvider
    */
}
export const INSTANCE = L_com_mbeddr_mpsutil_jung.INSTANCE

            export interface N_IJGraphProvider extends ITypedNode {
    _is_com_mbeddr_mpsutil_jung_IJGraphProvider: boolean
    
}

export namespace N_IJGraphProvider {
    export function isInstance(node: ITypedNode): node is N_IJGraphProvider {
        return '_is_com_mbeddr_mpsutil_jung_IJGraphProvider' in node;
    }
}

export class _N_TypedImpl_IJGraphProvider extends TypedNode implements N_IJGraphProvider {
    public _is_com_mbeddr_mpsutil_jung_IJGraphProvider: boolean = true
    
}
}