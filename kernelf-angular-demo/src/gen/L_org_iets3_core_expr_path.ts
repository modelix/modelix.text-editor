            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
            
            export namespace L_org_iets3_core_expr_path {
            
            export class L_org_iets3_core_expr_path extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_expr_path = new L_org_iets3_core_expr_path();
                constructor() {
                    super("org.iets3.core.expr.path")
                    
                    this.nodeWrappers.set("mps:f3eafff0-30d2-46d6-9150-f0f3b880ce27/7814222126785170799", (node: INodeJS) => new ICanHaveMembersType(node))
this.nodeWrappers.set("mps:f3eafff0-30d2-46d6-9150-f0f3b880ce27/7814222126785170970", (node: INodeJS) => new IMember(node))
this.nodeWrappers.set("mps:f3eafff0-30d2-46d6-9150-f0f3b880ce27/7814222126786013807", (node: INodeJS) => new PathElement(node))
this.nodeWrappers.set("mps:f3eafff0-30d2-46d6-9150-f0f3b880ce27/5046612484462007436", (node: INodeJS) => new IComparablePathPart(node))
this.nodeWrappers.set("mps:f3eafff0-30d2-46d6-9150-f0f3b880ce27/4886573260946854791", (node: INodeJS) => new IPathPart(node))
                }
                /*
                public getConcepts() {
                    return [this.ICanHaveMembersType, this.IMember, this.PathElement, this.IComparablePathPart, this.IPathPart]
                }
                                public ICanHaveMembersType: _C_Impl_ICanHaveMembersType = _C_Impl_ICanHaveMembersType
                public IMember: _C_Impl_IMember = _C_Impl_IMember
                public PathElement: _C_Impl_PathElement = _C_Impl_PathElement
                public IComparablePathPart: _C_Impl_IComparablePathPart = _C_Impl_IComparablePathPart
                public IPathPart: _C_Impl_IPathPart = _C_Impl_IPathPart
                */
            }
            export const INSTANCE = L_org_iets3_core_expr_path.INSTANCE
            
                        export class ICanHaveMembersType extends TypedNode {
                
                
                
            }
                        
                        export class IMember extends TypedNode {
                                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                            
                            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
                        }
                        
                        export class PathElement extends TypedNode {
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
                            // feature: member 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: org.iets3.core.expr.base.IRef 
            // super concept: org.iets3.core.expr.path.IComparablePathPart 
            // super concept: org.iets3.core.expr.path.IPathPart 
            // super concept: org.iets3.core.expr.base.ICanBeLValue 
                        }
            
            export class IComparablePathPart extends TypedNode {
                
                
                // super concept: org.iets3.core.expr.path.IPathPart 
            }
            
            export class IPathPart extends TypedNode {
                
                
                
            }
            }