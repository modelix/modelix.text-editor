            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            
            
            export namespace L_jetbrains_mps_lang_smodel {
            
            export class L_jetbrains_mps_lang_smodel extends GeneratedLanguage {
                public static INSTANCE: L_jetbrains_mps_lang_smodel = new L_jetbrains_mps_lang_smodel();
                constructor() {
                    super("jetbrains.mps.lang.smodel")
                    
                    this.nodeWrappers.set("mps:7866978e-a0f0-4cc7-81bc-4d213d9375e1/3542851458883437336", (node: INodeJS) => new _N_TypedImpl_LanguageIdentity(node))
this.nodeWrappers.set("mps:7866978e-a0f0-4cc7-81bc-4d213d9375e1/5769081855527239153", (node: INodeJS) => new _N_TypedImpl_AbstractLanguageIdentity(node))
                }
                /*
                public getConcepts() {
                    return [this.LanguageIdentity, this.AbstractLanguageIdentity]
                }
                                public LanguageIdentity: _C_Impl_LanguageIdentity = _C_Impl_LanguageIdentity
                public AbstractLanguageIdentity: _C_Impl_AbstractLanguageIdentity = _C_Impl_AbstractLanguageIdentity
                */
            }
            export const INSTANCE = L_jetbrains_mps_lang_smodel.INSTANCE
            
                                    export interface N_LanguageIdentity extends N_AbstractLanguageIdentity {
                            _is_jetbrains_mps_lang_smodel_LanguageIdentity: boolean
                            
                        }
                        
                        export namespace N_LanguageIdentity {
                            export function isInstance(node: ITypedNode): node is N_LanguageIdentity {
                                return '_is_jetbrains_mps_lang_smodel_LanguageIdentity' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LanguageIdentity extends TypedNode implements N_LanguageIdentity {
                            public _is_jetbrains_mps_lang_smodel_LanguageIdentity: boolean = true
            public _is_jetbrains_mps_lang_smodel_AbstractLanguageIdentity: boolean = true
                            
                        }
                        
            
            export interface N_AbstractLanguageIdentity extends ITypedNode {
                _is_jetbrains_mps_lang_smodel_AbstractLanguageIdentity: boolean
                
            }
            
            export namespace N_AbstractLanguageIdentity {
                export function isInstance(node: ITypedNode): node is N_AbstractLanguageIdentity {
                    return '_is_jetbrains_mps_lang_smodel_AbstractLanguageIdentity' in node;
                }
            }
            
            export class _N_TypedImpl_AbstractLanguageIdentity extends TypedNode implements N_AbstractLanguageIdentity {
                public _is_jetbrains_mps_lang_smodel_AbstractLanguageIdentity: boolean = true
                
            }
            }