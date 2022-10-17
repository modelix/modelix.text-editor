            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode
            } from "ts-model-api";
            
            import {L_org_iets3_core_base} from "./L_org_iets3_core_base";
import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
import {L_org_iets3_core_expr_toplevel} from "./L_org_iets3_core_expr_toplevel";
import {L_com_mbeddr_core_base} from "./L_com_mbeddr_core_base";
import {L_org_iets3_core_expr_base} from "./L_org_iets3_core_expr_base";
            
            export namespace L_org_iets3_core_expr_repl {
            
            export class L_org_iets3_core_expr_repl extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_expr_repl = new L_org_iets3_core_expr_repl();
                constructor() {
                    super("org.iets3.core.expr.repl")
                    
                    this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/1240669143552786952", (node: INodeJS) => new REPL(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/1240669143552786953", (node: INodeJS) => new DefaultEntry(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/1240669143552786993", (node: INodeJS) => new IReplEntry(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/3123720608935236577", (node: INodeJS) => new ReplEntryRef(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6190913826144637839", (node: INodeJS) => new ReplEntryRefByName(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425758826184", (node: INodeJS) => new LeftBorderCellStyle(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425758826185", (node: INodeJS) => new BottomBorderCellStyle(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425758826186", (node: INodeJS) => new RightBorderCellStyle(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/8891169595166788142", (node: INodeJS) => new QuoteExpr(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425758826112", (node: INodeJS) => new BorderCellStyle(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/4139771920858263103", (node: INodeJS) => new CellConstraint(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425755970864", (node: INodeJS) => new SheetTestItem(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425758826183", (node: INodeJS) => new TopBorderCellStyle(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5733544478070852422", (node: INodeJS) => new AbstractRangeExpr(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6371013116349123787", (node: INodeJS) => new Sheet(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6371013116354333364", (node: INodeJS) => new AbstractCellRef(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425759772067", (node: INodeJS) => new LabelExpression(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6371013116349131336", (node: INodeJS) => new Cell(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/4139771920860714255", (node: INodeJS) => new SheetType(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6371013116352759184", (node: INodeJS) => new CellArg(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/4139771920862372713", (node: INodeJS) => new FontStyle(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425750226845", (node: INodeJS) => new MakeListExpr(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6371013116353424003", (node: INodeJS) => new CellArgRef(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/4767524222579030357", (node: INodeJS) => new SheetEmbedExpr(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/4139771920862372717", (node: INodeJS) => new FontBoldStyle(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/3922243018845679935", (node: INodeJS) => new NamedSheetFinder(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/4139771920860714356", (node: INodeJS) => new TopLevelSheet(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425750226999", (node: INodeJS) => new AbstractSheetExpr(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6371013116351589322", (node: INodeJS) => new NamedCellRef(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/4139771920858269574", (node: INodeJS) => new CellConstraintIt(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/3922243018843111815", (node: INodeJS) => new AbstractSheetFinder(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425758826111", (node: INodeJS) => new CellStyle(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6371013116350380243", (node: INodeJS) => new CoordCellRef(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/3922243018843111816", (node: INodeJS) => new UpwardsSheetFinder(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5733544478071884828", (node: INodeJS) => new MakeRecordExpr(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6371013116350760968", (node: INodeJS) => new CellLabel(node))
                }
                /*
                public getConcepts() {
                    return [this.REPL, this.DefaultEntry, this.IReplEntry, this.ReplEntryRef, this.ReplEntryRefByName, this.LeftBorderCellStyle, this.BottomBorderCellStyle, this.RightBorderCellStyle, this.QuoteExpr, this.BorderCellStyle, this.CellConstraint, this.SheetTestItem, this.TopBorderCellStyle, this.AbstractRangeExpr, this.Sheet, this.AbstractCellRef, this.LabelExpression, this.Cell, this.SheetType, this.CellArg, this.FontStyle, this.MakeListExpr, this.CellArgRef, this.SheetEmbedExpr, this.FontBoldStyle, this.NamedSheetFinder, this.TopLevelSheet, this.AbstractSheetExpr, this.NamedCellRef, this.CellConstraintIt, this.AbstractSheetFinder, this.CellStyle, this.CoordCellRef, this.UpwardsSheetFinder, this.MakeRecordExpr, this.CellLabel]
                }
                                public REPL: _C_Impl_REPL = _C_Impl_REPL
                public DefaultEntry: _C_Impl_DefaultEntry = _C_Impl_DefaultEntry
                public IReplEntry: _C_Impl_IReplEntry = _C_Impl_IReplEntry
                public ReplEntryRef: _C_Impl_ReplEntryRef = _C_Impl_ReplEntryRef
                public ReplEntryRefByName: _C_Impl_ReplEntryRefByName = _C_Impl_ReplEntryRefByName
                public LeftBorderCellStyle: _C_Impl_LeftBorderCellStyle = _C_Impl_LeftBorderCellStyle
                public BottomBorderCellStyle: _C_Impl_BottomBorderCellStyle = _C_Impl_BottomBorderCellStyle
                public RightBorderCellStyle: _C_Impl_RightBorderCellStyle = _C_Impl_RightBorderCellStyle
                public QuoteExpr: _C_Impl_QuoteExpr = _C_Impl_QuoteExpr
                public BorderCellStyle: _C_Impl_BorderCellStyle = _C_Impl_BorderCellStyle
                public CellConstraint: _C_Impl_CellConstraint = _C_Impl_CellConstraint
                public SheetTestItem: _C_Impl_SheetTestItem = _C_Impl_SheetTestItem
                public TopBorderCellStyle: _C_Impl_TopBorderCellStyle = _C_Impl_TopBorderCellStyle
                public AbstractRangeExpr: _C_Impl_AbstractRangeExpr = _C_Impl_AbstractRangeExpr
                public Sheet: _C_Impl_Sheet = _C_Impl_Sheet
                public AbstractCellRef: _C_Impl_AbstractCellRef = _C_Impl_AbstractCellRef
                public LabelExpression: _C_Impl_LabelExpression = _C_Impl_LabelExpression
                public Cell: _C_Impl_Cell = _C_Impl_Cell
                public SheetType: _C_Impl_SheetType = _C_Impl_SheetType
                public CellArg: _C_Impl_CellArg = _C_Impl_CellArg
                public FontStyle: _C_Impl_FontStyle = _C_Impl_FontStyle
                public MakeListExpr: _C_Impl_MakeListExpr = _C_Impl_MakeListExpr
                public CellArgRef: _C_Impl_CellArgRef = _C_Impl_CellArgRef
                public SheetEmbedExpr: _C_Impl_SheetEmbedExpr = _C_Impl_SheetEmbedExpr
                public FontBoldStyle: _C_Impl_FontBoldStyle = _C_Impl_FontBoldStyle
                public NamedSheetFinder: _C_Impl_NamedSheetFinder = _C_Impl_NamedSheetFinder
                public TopLevelSheet: _C_Impl_TopLevelSheet = _C_Impl_TopLevelSheet
                public AbstractSheetExpr: _C_Impl_AbstractSheetExpr = _C_Impl_AbstractSheetExpr
                public NamedCellRef: _C_Impl_NamedCellRef = _C_Impl_NamedCellRef
                public CellConstraintIt: _C_Impl_CellConstraintIt = _C_Impl_CellConstraintIt
                public AbstractSheetFinder: _C_Impl_AbstractSheetFinder = _C_Impl_AbstractSheetFinder
                public CellStyle: _C_Impl_CellStyle = _C_Impl_CellStyle
                public CoordCellRef: _C_Impl_CoordCellRef = _C_Impl_CoordCellRef
                public UpwardsSheetFinder: _C_Impl_UpwardsSheetFinder = _C_Impl_UpwardsSheetFinder
                public MakeRecordExpr: _C_Impl_MakeRecordExpr = _C_Impl_MakeRecordExpr
                public CellLabel: _C_Impl_CellLabel = _C_Impl_CellLabel
                */
            }
            export const INSTANCE = L_org_iets3_core_expr_repl.INSTANCE
            
                                    export class REPL extends TypedNode {
                                            public constraints: ChildListAccessor<L_com_mbeddr_core_base.ChunkDependencyConstraint> = new ChildListAccessor(this.node, "constraints")
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
                            public set updateDownstream(value: string | undefined) {
                                this.node.setPropertyValue("updateDownstream", value)
                            }
                            public get updateDownstream(): string | undefined {
                                return this.node.getPropertyValue("updateDownstream")
                            }
                            public set showDiffs(value: string | undefined) {
                                this.node.setPropertyValue("showDiffs", value)
                            }
                            public get showDiffs(): string | undefined {
                                return this.node.getPropertyValue("showDiffs")
                            }
                            public entries: ChildListAccessor<L_org_iets3_core_expr_repl.IReplEntry> = new ChildListAccessor(this.node, "entries")
                                                
                            // feature: updateDownstream 
            // feature: showDiffs 
            // feature: entries 
            // feature: sourceNode 
            // feature: sourceScope 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
            // feature: constraints 
                            // super concept: com.mbeddr.core.base.Chunk 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.IIdentifierNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: com.mbeddr.core.base.IVisibleElementProvider 
            // super concept: com.mbeddr.core.base.ILOCCountProvider 
            // super concept: com.mbeddr.core.base.ITreeViewRoot 
            // super concept: com.mbeddr.core.base.ITreeViewable 
            // super concept: com.mbeddr.core.base.IDetectCycle 
            // super concept: com.mbeddr.mpsutil.jung.IJGraphProvider 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: org.iets3.core.expr.base.IRunningInterpreterContext 
                        }
                        
                        export class DefaultEntry extends TypedNode {
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
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public set optionalName(value: string | undefined) {
                                this.node.setPropertyValue("optionalName", value)
                            }
                            public get optionalName(): string | undefined {
                                return this.node.getPropertyValue("optionalName")
                            }
                            public set hasBeenEvaled(value: string | undefined) {
                                this.node.setPropertyValue("hasBeenEvaled", value)
                            }
                            public get hasBeenEvaled(): string | undefined {
                                return this.node.getPropertyValue("hasBeenEvaled")
                            }
                            public set hasError(value: string | undefined) {
                                this.node.setPropertyValue("hasError", value)
                            }
                            public get hasError(): string | undefined {
                                return this.node.getPropertyValue("hasError")
                            }
                            public set referenceable(value: string | undefined) {
                                this.node.setPropertyValue("referenceable", value)
                            }
                            public get referenceable(): string | undefined {
                                return this.node.getPropertyValue("referenceable")
                            }
                            public expression: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expression")
                            // feature: hasBeenEvaled 
            // feature: hasError 
            // feature: referenceable 
            // feature: expression 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: optionalName 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: org.iets3.core.expr.repl.IReplEntry 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
                        }
            
            export class IReplEntry extends TypedNode {
                                public set optionalName(value: string | undefined) {
                    this.node.setPropertyValue("optionalName", value)
                }
                public get optionalName(): string | undefined {
                    return this.node.getPropertyValue("optionalName")
                }
                // feature: optionalName 
                
            }
                        
                        export class ReplEntryRef extends TypedNode {
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
                            // feature: entry 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.IRef 
                        }
                        
                        export class ReplEntryRefByName extends TypedNode {
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
                            // feature: entry 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.IRef 
                        }
                        
                        export class LeftBorderCellStyle extends TypedNode {
                                            public set width(value: string | undefined) {
                                this.node.setPropertyValue("width", value)
                            }
                            public get width(): string | undefined {
                                return this.node.getPropertyValue("width")
                            }
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
                            
                            // super concept: org.iets3.core.expr.repl.BorderCellStyle 
            // super concept: org.iets3.core.expr.repl.CellStyle 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class BottomBorderCellStyle extends TypedNode {
                                            public set width(value: string | undefined) {
                                this.node.setPropertyValue("width", value)
                            }
                            public get width(): string | undefined {
                                return this.node.getPropertyValue("width")
                            }
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
                            
                            // super concept: org.iets3.core.expr.repl.BorderCellStyle 
            // super concept: org.iets3.core.expr.repl.CellStyle 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class RightBorderCellStyle extends TypedNode {
                                            public set width(value: string | undefined) {
                                this.node.setPropertyValue("width", value)
                            }
                            public get width(): string | undefined {
                                return this.node.getPropertyValue("width")
                            }
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
                            
                            // super concept: org.iets3.core.expr.repl.BorderCellStyle 
            // super concept: org.iets3.core.expr.repl.CellStyle 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class QuoteExpr extends TypedNode {
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
                            public cell: SingleChildAccessor<L_org_iets3_core_expr_repl.AbstractCellRef> = new SingleChildAccessor(this.node, "cell")
                            // feature: cell 
                            // super concept: org.iets3.core.expr.repl.AbstractSheetExpr 
            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
                        }
                        
                        export class BorderCellStyle extends TypedNode {
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
                            public set width(value: string | undefined) {
                                this.node.setPropertyValue("width", value)
                            }
                            public get width(): string | undefined {
                                return this.node.getPropertyValue("width")
                            }
                            // feature: width 
                            // super concept: org.iets3.core.expr.repl.CellStyle 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class CellConstraint extends TypedNode {
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
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.Type> = new SingleChildAccessor(this.node, "type")
                            public constraint: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "constraint")
                            // feature: type 
            // feature: constraint 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class SheetTestItem extends TypedNode {
                                            public set isIgnored(value: string | undefined) {
                                this.node.setPropertyValue("isIgnored", value)
                            }
                            public get isIgnored(): string | undefined {
                                return this.node.getPropertyValue("isIgnored")
                            }
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
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
                            public set resolveInfo(value: string | undefined) {
                                this.node.setPropertyValue("resolveInfo", value)
                            }
                            public get resolveInfo(): string | undefined {
                                return this.node.getPropertyValue("resolveInfo")
                            }
                            public set cols(value: string | undefined) {
                                this.node.setPropertyValue("cols", value)
                            }
                            public get cols(): string | undefined {
                                return this.node.getPropertyValue("cols")
                            }
                            public set rows(value: string | undefined) {
                                this.node.setPropertyValue("rows", value)
                            }
                            public get rows(): string | undefined {
                                return this.node.getPropertyValue("rows")
                            }
                            public sheet: SingleChildAccessor<L_org_iets3_core_expr_repl.Sheet> = new SingleChildAccessor(this.node, "sheet")
                            // feature: cols 
            // feature: rows 
            // feature: sheet 
                            // super concept: org.iets3.core.expr.tests.AbstractTestItem 
            // super concept: jetbrains.mps.lang.test.NodeCheckOperation 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.test.INodesTestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestMethod 
            // super concept: jetbrains.mps.baseLanguage.unitTest.ITestable 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
            // super concept: org.iets3.core.base.IOptionallyNamed 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: jetbrains.mps.lang.core.ISmartReferent 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ITraceRoot 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
                        }
                        
                        export class TopBorderCellStyle extends TypedNode {
                                            public set width(value: string | undefined) {
                                this.node.setPropertyValue("width", value)
                            }
                            public get width(): string | undefined {
                                return this.node.getPropertyValue("width")
                            }
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
                            
                            // super concept: org.iets3.core.expr.repl.BorderCellStyle 
            // super concept: org.iets3.core.expr.repl.CellStyle 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class AbstractRangeExpr extends TypedNode {
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
                            public from: SingleChildAccessor<L_org_iets3_core_expr_repl.AbstractCellRef> = new SingleChildAccessor(this.node, "from")
                            public to: SingleChildAccessor<L_org_iets3_core_expr_repl.AbstractCellRef> = new SingleChildAccessor(this.node, "to")
                            // feature: from 
            // feature: to 
                            // super concept: org.iets3.core.expr.repl.AbstractSheetExpr 
            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
                        }
                        
                        export class Sheet extends TypedNode {
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
                            public set NUM_COLS(value: string | undefined) {
                                this.node.setPropertyValue("NUM_COLS", value)
                            }
                            public get NUM_COLS(): string | undefined {
                                return this.node.getPropertyValue("NUM_COLS")
                            }
                            public set NUM_ROWS(value: string | undefined) {
                                this.node.setPropertyValue("NUM_ROWS", value)
                            }
                            public get NUM_ROWS(): string | undefined {
                                return this.node.getPropertyValue("NUM_ROWS")
                            }
                            public set booleansAreChecks(value: string | undefined) {
                                this.node.setPropertyValue("booleansAreChecks", value)
                            }
                            public get booleansAreChecks(): string | undefined {
                                return this.node.getPropertyValue("booleansAreChecks")
                            }
                            public set showValues(value: string | undefined) {
                                this.node.setPropertyValue("showValues", value)
                            }
                            public get showValues(): string | undefined {
                                return this.node.getPropertyValue("showValues")
                            }
                            public set templateMode(value: string | undefined) {
                                this.node.setPropertyValue("templateMode", value)
                            }
                            public get templateMode(): string | undefined {
                                return this.node.getPropertyValue("templateMode")
                            }
                            public cells: ChildListAccessor<L_org_iets3_core_expr_repl.Cell> = new ChildListAccessor(this.node, "cells")
                            // feature: NUM_COLS 
            // feature: NUM_ROWS 
            // feature: booleansAreChecks 
            // feature: showValues 
            // feature: templateMode 
            // feature: cells 
            // feature: template 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.IContainerOfUniqueNames 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
                        }
                        
                        export class AbstractCellRef extends TypedNode {
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
                            public finder: SingleChildAccessor<L_org_iets3_core_expr_repl.AbstractSheetFinder> = new SingleChildAccessor(this.node, "finder")
                            public actuals: ChildListAccessor<L_org_iets3_core_expr_base.Expression> = new ChildListAccessor(this.node, "actuals")
                            // feature: finder 
            // feature: actuals 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
                        }
                        
                        export class LabelExpression extends TypedNode {
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
                            public set text(value: string | undefined) {
                                this.node.setPropertyValue("text", value)
                            }
                            public get text(): string | undefined {
                                return this.node.getPropertyValue("text")
                            }
                            // feature: text 
                            // super concept: org.iets3.core.expr.repl.AbstractSheetExpr 
            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
                        }
                        
                        export class Cell extends TypedNode {
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
                            public set result(value: string | undefined) {
                                this.node.setPropertyValue("result", value)
                            }
                            public get result(): string | undefined {
                                return this.node.getPropertyValue("result")
                            }
                            public set locked(value: string | undefined) {
                                this.node.setPropertyValue("locked", value)
                            }
                            public get locked(): string | undefined {
                                return this.node.getPropertyValue("locked")
                            }
                            public set template(value: string | undefined) {
                                this.node.setPropertyValue("template", value)
                            }
                            public get template(): string | undefined {
                                return this.node.getPropertyValue("template")
                            }
                            public set internal(value: string | undefined) {
                                this.node.setPropertyValue("internal", value)
                            }
                            public get internal(): string | undefined {
                                return this.node.getPropertyValue("internal")
                            }
                            public constraint: SingleChildAccessor<L_org_iets3_core_expr_repl.CellConstraint> = new SingleChildAccessor(this.node, "constraint")
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expr")
                            public label: SingleChildAccessor<L_org_iets3_core_expr_repl.CellLabel> = new SingleChildAccessor(this.node, "label")
                            public args: ChildListAccessor<L_org_iets3_core_expr_repl.CellArg> = new ChildListAccessor(this.node, "args")
                            public styles: ChildListAccessor<L_org_iets3_core_expr_repl.CellStyle> = new ChildListAccessor(this.node, "styles")
                            // feature: result 
            // feature: locked 
            // feature: template 
            // feature: internal 
            // feature: constraint 
            // feature: expr 
            // feature: label 
            // feature: args 
            // feature: styles 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class SheetType extends TypedNode {
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
                            // feature: template 
                            // super concept: org.iets3.core.expr.base.Type 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.IType 
            // super concept: com.mbeddr.core.base.ICommentable 
                        }
                        
                        export class CellArg extends TypedNode {
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
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.Type> = new SingleChildAccessor(this.node, "type")
                            // feature: type 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
                        }
                        
                        export class FontStyle extends TypedNode {
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
                            
                            // super concept: org.iets3.core.expr.repl.CellStyle 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class MakeListExpr extends TypedNode {
                                            public from: SingleChildAccessor<L_org_iets3_core_expr_repl.AbstractCellRef> = new SingleChildAccessor(this.node, "from")
                            public to: SingleChildAccessor<L_org_iets3_core_expr_repl.AbstractCellRef> = new SingleChildAccessor(this.node, "to")
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
                            
                            // super concept: org.iets3.core.expr.repl.AbstractRangeExpr 
            // super concept: org.iets3.core.expr.repl.AbstractSheetExpr 
            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
                        }
                        
                        export class CellArgRef extends TypedNode {
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
                            // feature: arg 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
                        }
                        
                        export class SheetEmbedExpr extends TypedNode {
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
                            public set cols(value: string | undefined) {
                                this.node.setPropertyValue("cols", value)
                            }
                            public get cols(): string | undefined {
                                return this.node.getPropertyValue("cols")
                            }
                            public set rows(value: string | undefined) {
                                this.node.setPropertyValue("rows", value)
                            }
                            public get rows(): string | undefined {
                                return this.node.getPropertyValue("rows")
                            }
                            public sheet: SingleChildAccessor<L_org_iets3_core_expr_repl.Sheet> = new SingleChildAccessor(this.node, "sheet")
                            // feature: cols 
            // feature: rows 
            // feature: sheet 
            // feature: template 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
                        }
                        
                        export class FontBoldStyle extends TypedNode {
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
                            
                            // super concept: org.iets3.core.expr.repl.FontStyle 
            // super concept: org.iets3.core.expr.repl.CellStyle 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class NamedSheetFinder extends TypedNode {
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
                            // feature: sheet 
                            // super concept: org.iets3.core.expr.repl.AbstractSheetFinder 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class TopLevelSheet extends TypedNode {
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
                            public set template(value: string | undefined) {
                                this.node.setPropertyValue("template", value)
                            }
                            public get template(): string | undefined {
                                return this.node.getPropertyValue("template")
                            }
                            public set hideTitle(value: string | undefined) {
                                this.node.setPropertyValue("hideTitle", value)
                            }
                            public get hideTitle(): string | undefined {
                                return this.node.getPropertyValue("hideTitle")
                            }
                            public sheet: SingleChildAccessor<L_org_iets3_core_expr_repl.SheetEmbedExpr> = new SingleChildAccessor(this.node, "sheet")
                            // feature: template 
            // feature: hideTitle 
            // feature: sheet 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.toplevel.IToplevelExprContent 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IHasQualifiedName 
                        }
                        
                        export class AbstractSheetExpr extends TypedNode {
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
                            
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
                        }
                        
                        export class NamedCellRef extends TypedNode {
                                            public finder: SingleChildAccessor<L_org_iets3_core_expr_repl.AbstractSheetFinder> = new SingleChildAccessor(this.node, "finder")
                            public actuals: ChildListAccessor<L_org_iets3_core_expr_base.Expression> = new ChildListAccessor(this.node, "actuals")
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
                            // feature: label 
                            // super concept: org.iets3.core.expr.repl.AbstractCellRef 
            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
                        }
                        
                        export class CellConstraintIt extends TypedNode {
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
                            
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
                        }
            
            export class AbstractSheetFinder extends TypedNode {
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
                
                // super concept: jetbrains.mps.lang.core.BaseConcept 
            }
            
            export class CellStyle extends TypedNode {
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
                
                // super concept: jetbrains.mps.lang.core.BaseConcept 
            }
                        
                        export class CoordCellRef extends TypedNode {
                                            public finder: SingleChildAccessor<L_org_iets3_core_expr_repl.AbstractSheetFinder> = new SingleChildAccessor(this.node, "finder")
                            public actuals: ChildListAccessor<L_org_iets3_core_expr_base.Expression> = new ChildListAccessor(this.node, "actuals")
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
                            public set cell(value: string | undefined) {
                                this.node.setPropertyValue("cell", value)
                            }
                            public get cell(): string | undefined {
                                return this.node.getPropertyValue("cell")
                            }
                            // feature: cell 
                            // super concept: org.iets3.core.expr.repl.AbstractCellRef 
            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
                        }
                        
                        export class UpwardsSheetFinder extends TypedNode {
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
                            
                            // super concept: org.iets3.core.expr.repl.AbstractSheetFinder 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
                        }
                        
                        export class MakeRecordExpr extends TypedNode {
                                            public from: SingleChildAccessor<L_org_iets3_core_expr_repl.AbstractCellRef> = new SingleChildAccessor(this.node, "from")
                            public to: SingleChildAccessor<L_org_iets3_core_expr_repl.AbstractCellRef> = new SingleChildAccessor(this.node, "to")
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
                            public record: SingleChildAccessor<L_org_iets3_core_expr_toplevel.RecordType> = new SingleChildAccessor(this.node, "record")
                            // feature: record 
                            // super concept: org.iets3.core.expr.repl.AbstractRangeExpr 
            // super concept: org.iets3.core.expr.repl.AbstractSheetExpr 
            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
                        }
                        
                        export class CellLabel extends TypedNode {
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
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
                        }
            }