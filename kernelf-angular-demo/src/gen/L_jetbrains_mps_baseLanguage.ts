import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode,
  ITypedNode
} from "ts-model-api";

import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";

export namespace L_jetbrains_mps_baseLanguage {

export class L_jetbrains_mps_baseLanguage extends GeneratedLanguage {
    public static INSTANCE: L_jetbrains_mps_baseLanguage = new L_jetbrains_mps_baseLanguage();
    constructor() {
        super("jetbrains.mps.baseLanguage")
        
        this.nodeWrappers.set("mps:f3061a53-9226-4cc5-a443-f952ceaf5816/1212170275853", (node: INodeJS) => new _N_TypedImpl_IValidIdentifier(node))
    }
    /*
    public getConcepts() {
        return [this.IValidIdentifier]
    }
                    public IValidIdentifier: _C_Impl_IValidIdentifier = _C_Impl_IValidIdentifier
    */
}
export const INSTANCE = L_jetbrains_mps_baseLanguage.INSTANCE

                        export interface N_IValidIdentifier extends L_jetbrains_mps_lang_core.N_INamedConcept {
                _is_jetbrains_mps_baseLanguage_IValidIdentifier: boolean
                
            }
            
            export namespace N_IValidIdentifier {
                export function isInstance(node: ITypedNode): node is N_IValidIdentifier {
                    return '_is_jetbrains_mps_baseLanguage_IValidIdentifier' in node;
                }
            }
            
            export class _N_TypedImpl_IValidIdentifier extends TypedNode implements N_IValidIdentifier {
                public _is_jetbrains_mps_baseLanguage_IValidIdentifier: boolean = true
public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
                                public set name(value: string | undefined) {
                    this.node.setPropertyValue("name", value)
                }
                public get name(): string | undefined {
                    return this.node.getPropertyValue("name")
                }
            }
}