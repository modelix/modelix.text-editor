            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_de_slisson_mps_richtext {
            
            export class L_de_slisson_mps_richtext extends GeneratedLanguage {
                public static INSTANCE: L_de_slisson_mps_richtext = new L_de_slisson_mps_richtext();
                constructor() {
                    super("de.slisson.mps.richtext")
                    
                    this.nodeWrappers.set("mps:92d2ea16-5a42-4fdf-a676-c7604efe3504/2557074442922380897", (node: INodeJS) => new _N_TypedImpl_Text(node))
this.nodeWrappers.set("mps:92d2ea16-5a42-4fdf-a676-c7604efe3504/2557074442922392300", (node: INodeJS) => new _N_TypedImpl_IWord(node))
this.nodeWrappers.set("mps:92d2ea16-5a42-4fdf-a676-c7604efe3504/2557074442922438156", (node: INodeJS) => new _N_TypedImpl_Word(node))
                }
                /*
                public getConcepts() {
                    return [this.Text, this.IWord, this.Word]
                }
                                public Text: _C_Impl_Text = _C_Impl_Text
                public IWord: _C_Impl_IWord = _C_Impl_IWord
                public Word: _C_Impl_Word = _C_Impl_Word
                */
            }
            export const INSTANCE = L_de_slisson_mps_richtext.INSTANCE
            
                                    export interface N_Text extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_de_slisson_mps_richtext_Text: boolean
                            words: ChildListAccessor<N_IWord>
                        }
                        
                        export namespace N_Text {
                            export function isInstance(node: ITypedNode): node is N_Text {
                                return '_is_de_slisson_mps_richtext_Text' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Text extends TypedNode implements N_Text {
                            public _is_de_slisson_mps_richtext_Text: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public words: ChildListAccessor<N_IWord> = new ChildListAccessor(this.node, "words")
                        }
                        
            
            export interface N_IWord extends ITypedNode {
                _is_de_slisson_mps_richtext_IWord: boolean
                
            }
            
            export namespace N_IWord {
                export function isInstance(node: ITypedNode): node is N_IWord {
                    return '_is_de_slisson_mps_richtext_IWord' in node;
                }
            }
            
            export class _N_TypedImpl_IWord extends TypedNode implements N_IWord {
                public _is_de_slisson_mps_richtext_IWord: boolean = true
                
            }
            
                        
                        export interface N_Word extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IWord {
                            _is_de_slisson_mps_richtext_Word: boolean
                            escapedValue: string | undefined
                        }
                        
                        export namespace N_Word {
                            export function isInstance(node: ITypedNode): node is N_Word {
                                return '_is_de_slisson_mps_richtext_Word' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Word extends TypedNode implements N_Word {
                            public _is_de_slisson_mps_richtext_Word: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_de_slisson_mps_richtext_IWord: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set escapedValue(value: string | undefined) {
                                this.node.setPropertyValue("escapedValue", value)
                            }
                            public get escapedValue(): string | undefined {
                                return this.node.getPropertyValue("escapedValue")
                            }
                        }
            }