            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_de_slisson_mps_richtext {
            
            export class L_de_slisson_mps_richtext extends GeneratedLanguage {
                public static INSTANCE: L_de_slisson_mps_richtext = new L_de_slisson_mps_richtext();
                constructor() {
                    super("de.slisson.mps.richtext")
                    
                    this.nodeWrappers.set("mps:92d2ea16-5a42-4fdf-a676-c7604efe3504/2557074442922380897", (node: INodeJS) => new Text(node))
this.nodeWrappers.set("mps:92d2ea16-5a42-4fdf-a676-c7604efe3504/2557074442922392300", (node: INodeJS) => new IWord(node))
this.nodeWrappers.set("mps:92d2ea16-5a42-4fdf-a676-c7604efe3504/2557074442922438156", (node: INodeJS) => new Word(node))
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
            
                        export class Text extends TypedNode {
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
                public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                public words: ChildListAccessor<L_de_slisson_mps_richtext.IWord> = new ChildListAccessor(this.node, "words")
                // feature: words 
                // super concept: jetbrains.mps.lang.core.BaseConcept 
            }
            
            export class IWord extends TypedNode {
                
                
                
            }
                        
                        export class Word extends TypedNode {
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set escapedValue(value: string | undefined) {
                                this.node.setPropertyValue("escapedValue", value)
                            }
                            public get escapedValue(): string | undefined {
                                return this.node.getPropertyValue("escapedValue")
                            }
                            // feature: escapedValue 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: de.slisson.mps.richtext.IWord 
                        }
            }