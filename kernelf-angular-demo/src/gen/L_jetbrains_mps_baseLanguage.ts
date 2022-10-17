import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode
} from "ts-model-api";



export namespace L_jetbrains_mps_baseLanguage {

export class L_jetbrains_mps_baseLanguage extends GeneratedLanguage {
    public static INSTANCE: L_jetbrains_mps_baseLanguage = new L_jetbrains_mps_baseLanguage();
    constructor() {
        super("jetbrains.mps.baseLanguage")
        
        this.nodeWrappers.set("mps:f3061a53-9226-4cc5-a443-f952ceaf5816/1212170275853", (node: INodeJS) => new IValidIdentifier(node))
    }
    /*
    public getConcepts() {
        return [this.IValidIdentifier]
    }
                    public IValidIdentifier: _C_Impl_IValidIdentifier = _C_Impl_IValidIdentifier
    */
}
export const INSTANCE = L_jetbrains_mps_baseLanguage.INSTANCE

            export class IValidIdentifier extends TypedNode {
                    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
    
    // super concept: jetbrains.mps.lang.core.INamedConcept 
}
}