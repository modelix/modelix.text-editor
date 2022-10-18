            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_com_mbeddr_mpsutil_varscope {
            
            export class L_com_mbeddr_mpsutil_varscope extends GeneratedLanguage {
                public static INSTANCE: L_com_mbeddr_mpsutil_varscope = new L_com_mbeddr_mpsutil_varscope();
                constructor() {
                    super("com.mbeddr.mpsutil.varscope")
                    
                    this.nodeWrappers.set("mps:3819ba36-98f4-49ac-b779-34f3a458c09b/926589859261493016", (node: INodeJS) => new _N_TypedImpl_IScopeProvider(node))
this.nodeWrappers.set("mps:3819ba36-98f4-49ac-b779-34f3a458c09b/926589859261521036", (node: INodeJS) => new _N_TypedImpl_IScopeElement(node))
                }
                /*
                public getConcepts() {
                    return [this.IScopeProvider, this.IScopeElement]
                }
                                public IScopeProvider: _C_Impl_IScopeProvider = _C_Impl_IScopeProvider
                public IScopeElement: _C_Impl_IScopeElement = _C_Impl_IScopeElement
                */
            }
            export const INSTANCE = L_com_mbeddr_mpsutil_varscope.INSTANCE
            
                        export interface N_IScopeProvider extends ITypedNode {
                _is_com_mbeddr_mpsutil_varscope_IScopeProvider: boolean
                
            }
            
            export namespace N_IScopeProvider {
                export function isInstance(node: ITypedNode): node is N_IScopeProvider {
                    return '_is_com_mbeddr_mpsutil_varscope_IScopeProvider' in node;
                }
            }
            
            export class _N_TypedImpl_IScopeProvider extends TypedNode implements N_IScopeProvider {
                public _is_com_mbeddr_mpsutil_varscope_IScopeProvider: boolean = true
                
            }
            
                        
                        export interface N_IScopeElement extends L_jetbrains_mps_lang_core.N_INamedConcept {
                            _is_com_mbeddr_mpsutil_varscope_IScopeElement: boolean
                            
                        }
                        
                        export namespace N_IScopeElement {
                            export function isInstance(node: ITypedNode): node is N_IScopeElement {
                                return '_is_com_mbeddr_mpsutil_varscope_IScopeElement' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IScopeElement extends TypedNode implements N_IScopeElement {
                            public _is_com_mbeddr_mpsutil_varscope_IScopeElement: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
                                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                        }
            }