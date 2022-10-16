import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  TypedNode
} from "ts-model-api";

export class L_com_mbeddr_mpsutil_varscope extends GeneratedLanguage {
    constructor() {
        super("com.mbeddr.mpsutil.varscope")
    }
    /*
    public getConcepts() {
        return [this.IScopeProvider, this.IScopeElement]
    }
                    public IScopeProvider: _C_Impl_IScopeProvider = _C_Impl_IScopeProvider
    public IScopeElement: _C_Impl_IScopeElement = _C_Impl_IScopeElement
    */
}

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