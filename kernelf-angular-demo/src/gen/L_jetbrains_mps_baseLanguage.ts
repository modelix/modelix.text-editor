import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  TypedNode
} from "ts-model-api";

export class L_jetbrains_mps_baseLanguage extends GeneratedLanguage {
    constructor() {
        super("jetbrains.mps.baseLanguage")
    }
    /*
    public getConcepts() {
        return [this.IValidIdentifier]
    }
                    public IValidIdentifier: _C_Impl_IValidIdentifier = _C_Impl_IValidIdentifier
    */
}

            export class IValidIdentifier extends TypedNode {
                    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
}