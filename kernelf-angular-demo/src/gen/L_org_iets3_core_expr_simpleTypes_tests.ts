            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
import {L_org_iets3_core_expr_tests} from "./L_org_iets3_core_expr_tests";
            
            export namespace L_org_iets3_core_expr_simpleTypes_tests {
            
            export class L_org_iets3_core_expr_simpleTypes_tests extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_expr_simpleTypes_tests = new L_org_iets3_core_expr_simpleTypes_tests();
                constructor() {
                    super("org.iets3.core.expr.simpleTypes.tests")
                    
                    this.nodeWrappers.set("mps:7bcf9284-ca29-484f-a3b3-2855bdd813ad/1360296727230407275", (node: INodeJS) => new _N_TypedImpl_RandomVectorProducer(node))
this.nodeWrappers.set("mps:7bcf9284-ca29-484f-a3b3-2855bdd813ad/543046448977223537", (node: INodeJS) => new _N_TypedImpl_EqClassProducer(node))
                }
                /*
                public getConcepts() {
                    return [this.RandomVectorProducer, this.EqClassProducer]
                }
                                public RandomVectorProducer: _C_Impl_RandomVectorProducer = _C_Impl_RandomVectorProducer
                public EqClassProducer: _C_Impl_EqClassProducer = _C_Impl_EqClassProducer
                */
            }
            export const INSTANCE = L_org_iets3_core_expr_simpleTypes_tests.INSTANCE
            
                                    export interface N_RandomVectorProducer extends L_org_iets3_core_expr_tests.N_TestDataProducer {
                            _is_org_iets3_core_expr_simpleTypes_tests_RandomVectorProducer: boolean
                            count: string | undefined
            onlyInteresing: string | undefined
                        }
                        
                        export namespace N_RandomVectorProducer {
                            export function isInstance(node: ITypedNode): node is N_RandomVectorProducer {
                                return '_is_org_iets3_core_expr_simpleTypes_tests_RandomVectorProducer' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RandomVectorProducer extends TypedNode implements N_RandomVectorProducer {
                            public _is_org_iets3_core_expr_simpleTypes_tests_RandomVectorProducer: boolean = true
            public _is_org_iets3_core_expr_tests_TestDataProducer: boolean = true
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
                            public set count(value: string | undefined) {
                                this.node.setPropertyValue("count", value)
                            }
                            public get count(): string | undefined {
                                return this.node.getPropertyValue("count")
                            }
                            public set onlyInteresing(value: string | undefined) {
                                this.node.setPropertyValue("onlyInteresing", value)
                            }
                            public get onlyInteresing(): string | undefined {
                                return this.node.getPropertyValue("onlyInteresing")
                            }
                        }
                        
                        
                        export interface N_EqClassProducer extends L_org_iets3_core_expr_tests.N_TestDataProducer {
                            _is_org_iets3_core_expr_simpleTypes_tests_EqClassProducer: boolean
                            
                        }
                        
                        export namespace N_EqClassProducer {
                            export function isInstance(node: ITypedNode): node is N_EqClassProducer {
                                return '_is_org_iets3_core_expr_simpleTypes_tests_EqClassProducer' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EqClassProducer extends TypedNode implements N_EqClassProducer {
                            public _is_org_iets3_core_expr_simpleTypes_tests_EqClassProducer: boolean = true
            public _is_org_iets3_core_expr_tests_TestDataProducer: boolean = true
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
                        }
            }