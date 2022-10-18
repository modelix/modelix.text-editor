            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_org_iets3_core_base} from "./L_org_iets3_core_base";
import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
import {L_org_iets3_core_expr_toplevel} from "./L_org_iets3_core_expr_toplevel";
import {L_com_mbeddr_core_base} from "./L_com_mbeddr_core_base";
import {L_org_iets3_core_expr_tests} from "./L_org_iets3_core_expr_tests";
import {L_org_iets3_core_expr_base} from "./L_org_iets3_core_expr_base";
            
            export namespace L_org_iets3_core_expr_repl {
            
            export class L_org_iets3_core_expr_repl extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_expr_repl = new L_org_iets3_core_expr_repl();
                constructor() {
                    super("org.iets3.core.expr.repl")
                    
                    this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/1240669143552786952", (node: INodeJS) => new _N_TypedImpl_REPL(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/1240669143552786953", (node: INodeJS) => new _N_TypedImpl_DefaultEntry(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/1240669143552786993", (node: INodeJS) => new _N_TypedImpl_IReplEntry(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/3123720608935236577", (node: INodeJS) => new _N_TypedImpl_ReplEntryRef(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6190913826144637839", (node: INodeJS) => new _N_TypedImpl_ReplEntryRefByName(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425758826184", (node: INodeJS) => new _N_TypedImpl_LeftBorderCellStyle(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425758826185", (node: INodeJS) => new _N_TypedImpl_BottomBorderCellStyle(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425758826186", (node: INodeJS) => new _N_TypedImpl_RightBorderCellStyle(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/8891169595166788142", (node: INodeJS) => new _N_TypedImpl_QuoteExpr(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425758826112", (node: INodeJS) => new _N_TypedImpl_BorderCellStyle(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/4139771920858263103", (node: INodeJS) => new _N_TypedImpl_CellConstraint(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425755970864", (node: INodeJS) => new _N_TypedImpl_SheetTestItem(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425758826183", (node: INodeJS) => new _N_TypedImpl_TopBorderCellStyle(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5733544478070852422", (node: INodeJS) => new _N_TypedImpl_AbstractRangeExpr(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6371013116349123787", (node: INodeJS) => new _N_TypedImpl_Sheet(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6371013116354333364", (node: INodeJS) => new _N_TypedImpl_AbstractCellRef(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425759772067", (node: INodeJS) => new _N_TypedImpl_LabelExpression(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6371013116349131336", (node: INodeJS) => new _N_TypedImpl_Cell(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/4139771920860714255", (node: INodeJS) => new _N_TypedImpl_SheetType(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6371013116352759184", (node: INodeJS) => new _N_TypedImpl_CellArg(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/4139771920862372713", (node: INodeJS) => new _N_TypedImpl_FontStyle(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425750226845", (node: INodeJS) => new _N_TypedImpl_MakeListExpr(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6371013116353424003", (node: INodeJS) => new _N_TypedImpl_CellArgRef(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/4767524222579030357", (node: INodeJS) => new _N_TypedImpl_SheetEmbedExpr(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/4139771920862372717", (node: INodeJS) => new _N_TypedImpl_FontBoldStyle(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/3922243018845679935", (node: INodeJS) => new _N_TypedImpl_NamedSheetFinder(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/4139771920860714356", (node: INodeJS) => new _N_TypedImpl_TopLevelSheet(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425750226999", (node: INodeJS) => new _N_TypedImpl_AbstractSheetExpr(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6371013116351589322", (node: INodeJS) => new _N_TypedImpl_NamedCellRef(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/4139771920858269574", (node: INodeJS) => new _N_TypedImpl_CellConstraintIt(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/3922243018843111815", (node: INodeJS) => new _N_TypedImpl_AbstractSheetFinder(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5953575425758826111", (node: INodeJS) => new _N_TypedImpl_CellStyle(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6371013116350380243", (node: INodeJS) => new _N_TypedImpl_CoordCellRef(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/3922243018843111816", (node: INodeJS) => new _N_TypedImpl_UpwardsSheetFinder(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/5733544478071884828", (node: INodeJS) => new _N_TypedImpl_MakeRecordExpr(node))
this.nodeWrappers.set("mps:18001c94-33a7-4f68-a7c1-ffddc4b39be1/6371013116350760968", (node: INodeJS) => new _N_TypedImpl_CellLabel(node))
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
            
                                    export interface N_REPL extends L_com_mbeddr_core_base.N_Chunk, L_org_iets3_core_base.N_IValidNamedConcept, L_org_iets3_core_expr_base.N_IRunningInterpreterContext {
                            _is_org_iets3_core_expr_repl_REPL: boolean
                            updateDownstream: string | undefined
            showDiffs: string | undefined
            entries: ChildListAccessor<N_IReplEntry>
                                
                                
                        }
                        
                        export namespace N_REPL {
                            export function isInstance(node: ITypedNode): node is N_REPL {
                                return '_is_org_iets3_core_expr_repl_REPL' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_REPL extends TypedNode implements N_REPL {
                            public _is_org_iets3_core_expr_repl_REPL: boolean = true
            public _is_com_mbeddr_core_base_Chunk: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_IIdentifierNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_com_mbeddr_core_base_IVisibleElementProvider: boolean = true
            public _is_com_mbeddr_core_base_ILOCCountProvider: boolean = true
            public _is_com_mbeddr_core_base_ITreeViewRoot: boolean = true
            public _is_com_mbeddr_core_base_ITreeViewable: boolean = true
            public _is_com_mbeddr_core_base_IDetectCycle: boolean = true
            public _is_com_mbeddr_mpsutil_jung_IJGraphProvider: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_org_iets3_core_expr_base_IRunningInterpreterContext: boolean = true
                                            public constraints: ChildListAccessor<L_com_mbeddr_core_base.N_ChunkDependencyConstraint> = new ChildListAccessor(this.node, "constraints")
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
                            public entries: ChildListAccessor<N_IReplEntry> = new ChildListAccessor(this.node, "entries")
                                                
                        }
                        
                        
                        export interface N_DefaultEntry extends L_jetbrains_mps_lang_core.N_BaseConcept, L_jetbrains_mps_lang_core.N_INamedConcept, N_IReplEntry, L_org_iets3_core_base.N_ICanRunCheckManually, L_org_iets3_core_expr_base.N_IMayAllowEffect {
                            _is_org_iets3_core_expr_repl_DefaultEntry: boolean
                            hasBeenEvaled: string | undefined
            hasError: string | undefined
            referenceable: string | undefined
            expression: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_DefaultEntry {
                            export function isInstance(node: ITypedNode): node is N_DefaultEntry {
                                return '_is_org_iets3_core_expr_repl_DefaultEntry' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_DefaultEntry extends TypedNode implements N_DefaultEntry {
                            public _is_org_iets3_core_expr_repl_DefaultEntry: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_org_iets3_core_expr_repl_IReplEntry: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
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
                            public expression: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "expression")
                        }
                        
            
            export interface N_IReplEntry extends ITypedNode {
                _is_org_iets3_core_expr_repl_IReplEntry: boolean
                optionalName: string | undefined
            }
            
            export namespace N_IReplEntry {
                export function isInstance(node: ITypedNode): node is N_IReplEntry {
                    return '_is_org_iets3_core_expr_repl_IReplEntry' in node;
                }
            }
            
            export class _N_TypedImpl_IReplEntry extends TypedNode implements N_IReplEntry {
                public _is_org_iets3_core_expr_repl_IReplEntry: boolean = true
                                public set optionalName(value: string | undefined) {
                    this.node.setPropertyValue("optionalName", value)
                }
                public get optionalName(): string | undefined {
                    return this.node.getPropertyValue("optionalName")
                }
            }
            
                        
                        export interface N_ReplEntryRef extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_IRef {
                            _is_org_iets3_core_expr_repl_ReplEntryRef: boolean
                                                
                        }
                        
                        export namespace N_ReplEntryRef {
                            export function isInstance(node: ITypedNode): node is N_ReplEntryRef {
                                return '_is_org_iets3_core_expr_repl_ReplEntryRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ReplEntryRef extends TypedNode implements N_ReplEntryRef {
                            public _is_org_iets3_core_expr_repl_ReplEntryRef: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IRef: boolean = true
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
                        
                        
                        export interface N_ReplEntryRefByName extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_IRef {
                            _is_org_iets3_core_expr_repl_ReplEntryRefByName: boolean
                                                
                        }
                        
                        export namespace N_ReplEntryRefByName {
                            export function isInstance(node: ITypedNode): node is N_ReplEntryRefByName {
                                return '_is_org_iets3_core_expr_repl_ReplEntryRefByName' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ReplEntryRefByName extends TypedNode implements N_ReplEntryRefByName {
                            public _is_org_iets3_core_expr_repl_ReplEntryRefByName: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IRef: boolean = true
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
                        
                        
                        export interface N_LeftBorderCellStyle extends N_BorderCellStyle {
                            _is_org_iets3_core_expr_repl_LeftBorderCellStyle: boolean
                            
                        }
                        
                        export namespace N_LeftBorderCellStyle {
                            export function isInstance(node: ITypedNode): node is N_LeftBorderCellStyle {
                                return '_is_org_iets3_core_expr_repl_LeftBorderCellStyle' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LeftBorderCellStyle extends TypedNode implements N_LeftBorderCellStyle {
                            public _is_org_iets3_core_expr_repl_LeftBorderCellStyle: boolean = true
            public _is_org_iets3_core_expr_repl_BorderCellStyle: boolean = true
            public _is_org_iets3_core_expr_repl_CellStyle: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_BottomBorderCellStyle extends N_BorderCellStyle {
                            _is_org_iets3_core_expr_repl_BottomBorderCellStyle: boolean
                            
                        }
                        
                        export namespace N_BottomBorderCellStyle {
                            export function isInstance(node: ITypedNode): node is N_BottomBorderCellStyle {
                                return '_is_org_iets3_core_expr_repl_BottomBorderCellStyle' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BottomBorderCellStyle extends TypedNode implements N_BottomBorderCellStyle {
                            public _is_org_iets3_core_expr_repl_BottomBorderCellStyle: boolean = true
            public _is_org_iets3_core_expr_repl_BorderCellStyle: boolean = true
            public _is_org_iets3_core_expr_repl_CellStyle: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_RightBorderCellStyle extends N_BorderCellStyle {
                            _is_org_iets3_core_expr_repl_RightBorderCellStyle: boolean
                            
                        }
                        
                        export namespace N_RightBorderCellStyle {
                            export function isInstance(node: ITypedNode): node is N_RightBorderCellStyle {
                                return '_is_org_iets3_core_expr_repl_RightBorderCellStyle' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RightBorderCellStyle extends TypedNode implements N_RightBorderCellStyle {
                            public _is_org_iets3_core_expr_repl_RightBorderCellStyle: boolean = true
            public _is_org_iets3_core_expr_repl_BorderCellStyle: boolean = true
            public _is_org_iets3_core_expr_repl_CellStyle: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_QuoteExpr extends N_AbstractSheetExpr {
                            _is_org_iets3_core_expr_repl_QuoteExpr: boolean
                            cell: SingleChildAccessor<N_AbstractCellRef>
                        }
                        
                        export namespace N_QuoteExpr {
                            export function isInstance(node: ITypedNode): node is N_QuoteExpr {
                                return '_is_org_iets3_core_expr_repl_QuoteExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_QuoteExpr extends TypedNode implements N_QuoteExpr {
                            public _is_org_iets3_core_expr_repl_QuoteExpr: boolean = true
            public _is_org_iets3_core_expr_repl_AbstractSheetExpr: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public cell: SingleChildAccessor<N_AbstractCellRef> = new SingleChildAccessor(this.node, "cell")
                        }
                        
                        
                        export interface N_BorderCellStyle extends N_CellStyle {
                            _is_org_iets3_core_expr_repl_BorderCellStyle: boolean
                            width: string | undefined
                        }
                        
                        export namespace N_BorderCellStyle {
                            export function isInstance(node: ITypedNode): node is N_BorderCellStyle {
                                return '_is_org_iets3_core_expr_repl_BorderCellStyle' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BorderCellStyle extends TypedNode implements N_BorderCellStyle {
                            public _is_org_iets3_core_expr_repl_BorderCellStyle: boolean = true
            public _is_org_iets3_core_expr_repl_CellStyle: boolean = true
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
                            public set width(value: string | undefined) {
                                this.node.setPropertyValue("width", value)
                            }
                            public get width(): string | undefined {
                                return this.node.getPropertyValue("width")
                            }
                        }
                        
                        
                        export interface N_CellConstraint extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_repl_CellConstraint: boolean
                            type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
            constraint: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_CellConstraint {
                            export function isInstance(node: ITypedNode): node is N_CellConstraint {
                                return '_is_org_iets3_core_expr_repl_CellConstraint' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_CellConstraint extends TypedNode implements N_CellConstraint {
                            public _is_org_iets3_core_expr_repl_CellConstraint: boolean = true
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
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "type")
                            public constraint: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "constraint")
                        }
                        
                        
                        export interface N_SheetTestItem extends L_org_iets3_core_expr_tests.N_AbstractTestItem {
                            _is_org_iets3_core_expr_repl_SheetTestItem: boolean
                            cols: string | undefined
            rows: string | undefined
            sheet: SingleChildAccessor<N_Sheet>
                        }
                        
                        export namespace N_SheetTestItem {
                            export function isInstance(node: ITypedNode): node is N_SheetTestItem {
                                return '_is_org_iets3_core_expr_repl_SheetTestItem' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SheetTestItem extends TypedNode implements N_SheetTestItem {
                            public _is_org_iets3_core_expr_repl_SheetTestItem: boolean = true
            public _is_org_iets3_core_expr_tests_AbstractTestItem: boolean = true
            public _is_jetbrains_mps_lang_test_NodeCheckOperation: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_test_INodesTestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestMethod: boolean = true
            public _is_jetbrains_mps_baseLanguage_unitTest_ITestable: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
            public _is_org_iets3_core_base_IOptionallyNamed: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_jetbrains_mps_lang_core_ISmartReferent: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ITraceRoot: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.N_OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
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
                            public sheet: SingleChildAccessor<N_Sheet> = new SingleChildAccessor(this.node, "sheet")
                        }
                        
                        
                        export interface N_TopBorderCellStyle extends N_BorderCellStyle {
                            _is_org_iets3_core_expr_repl_TopBorderCellStyle: boolean
                            
                        }
                        
                        export namespace N_TopBorderCellStyle {
                            export function isInstance(node: ITypedNode): node is N_TopBorderCellStyle {
                                return '_is_org_iets3_core_expr_repl_TopBorderCellStyle' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TopBorderCellStyle extends TypedNode implements N_TopBorderCellStyle {
                            public _is_org_iets3_core_expr_repl_TopBorderCellStyle: boolean = true
            public _is_org_iets3_core_expr_repl_BorderCellStyle: boolean = true
            public _is_org_iets3_core_expr_repl_CellStyle: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_AbstractRangeExpr extends N_AbstractSheetExpr {
                            _is_org_iets3_core_expr_repl_AbstractRangeExpr: boolean
                            from: SingleChildAccessor<N_AbstractCellRef>
            to: SingleChildAccessor<N_AbstractCellRef>
                        }
                        
                        export namespace N_AbstractRangeExpr {
                            export function isInstance(node: ITypedNode): node is N_AbstractRangeExpr {
                                return '_is_org_iets3_core_expr_repl_AbstractRangeExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractRangeExpr extends TypedNode implements N_AbstractRangeExpr {
                            public _is_org_iets3_core_expr_repl_AbstractRangeExpr: boolean = true
            public _is_org_iets3_core_expr_repl_AbstractSheetExpr: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public from: SingleChildAccessor<N_AbstractCellRef> = new SingleChildAccessor(this.node, "from")
                            public to: SingleChildAccessor<N_AbstractCellRef> = new SingleChildAccessor(this.node, "to")
                        }
                        
                        
                        export interface N_Sheet extends L_jetbrains_mps_lang_core.N_BaseConcept, L_com_mbeddr_core_base.N_IContainerOfUniqueNames, L_org_iets3_core_base.N_ICanRunCheckManually, L_org_iets3_core_base.N_IValidNamedConcept {
                            _is_org_iets3_core_expr_repl_Sheet: boolean
                            NUM_COLS: string | undefined
            NUM_ROWS: string | undefined
            booleansAreChecks: string | undefined
            showValues: string | undefined
            templateMode: string | undefined
            cells: ChildListAccessor<N_Cell>
                                
                        }
                        
                        export namespace N_Sheet {
                            export function isInstance(node: ITypedNode): node is N_Sheet {
                                return '_is_org_iets3_core_expr_repl_Sheet' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Sheet extends TypedNode implements N_Sheet {
                            public _is_org_iets3_core_expr_repl_Sheet: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_IContainerOfUniqueNames: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
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
                            public cells: ChildListAccessor<N_Cell> = new ChildListAccessor(this.node, "cells")
                        }
                        
                        
                        export interface N_AbstractCellRef extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_repl_AbstractCellRef: boolean
                            finder: SingleChildAccessor<N_AbstractSheetFinder>
            actuals: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_AbstractCellRef {
                            export function isInstance(node: ITypedNode): node is N_AbstractCellRef {
                                return '_is_org_iets3_core_expr_repl_AbstractCellRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractCellRef extends TypedNode implements N_AbstractCellRef {
                            public _is_org_iets3_core_expr_repl_AbstractCellRef: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public finder: SingleChildAccessor<N_AbstractSheetFinder> = new SingleChildAccessor(this.node, "finder")
                            public actuals: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression> = new ChildListAccessor(this.node, "actuals")
                        }
                        
                        
                        export interface N_LabelExpression extends N_AbstractSheetExpr {
                            _is_org_iets3_core_expr_repl_LabelExpression: boolean
                            text: string | undefined
                        }
                        
                        export namespace N_LabelExpression {
                            export function isInstance(node: ITypedNode): node is N_LabelExpression {
                                return '_is_org_iets3_core_expr_repl_LabelExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LabelExpression extends TypedNode implements N_LabelExpression {
                            public _is_org_iets3_core_expr_repl_LabelExpression: boolean = true
            public _is_org_iets3_core_expr_repl_AbstractSheetExpr: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public set text(value: string | undefined) {
                                this.node.setPropertyValue("text", value)
                            }
                            public get text(): string | undefined {
                                return this.node.getPropertyValue("text")
                            }
                        }
                        
                        
                        export interface N_Cell extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_repl_Cell: boolean
                            result: string | undefined
            locked: string | undefined
            template: string | undefined
            internal: string | undefined
            constraint: SingleChildAccessor<N_CellConstraint>
            expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
            label: SingleChildAccessor<N_CellLabel>
            args: ChildListAccessor<N_CellArg>
            styles: ChildListAccessor<N_CellStyle>
                        }
                        
                        export namespace N_Cell {
                            export function isInstance(node: ITypedNode): node is N_Cell {
                                return '_is_org_iets3_core_expr_repl_Cell' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Cell extends TypedNode implements N_Cell {
                            public _is_org_iets3_core_expr_repl_Cell: boolean = true
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
                            public constraint: SingleChildAccessor<N_CellConstraint> = new SingleChildAccessor(this.node, "constraint")
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "expr")
                            public label: SingleChildAccessor<N_CellLabel> = new SingleChildAccessor(this.node, "label")
                            public args: ChildListAccessor<N_CellArg> = new ChildListAccessor(this.node, "args")
                            public styles: ChildListAccessor<N_CellStyle> = new ChildListAccessor(this.node, "styles")
                        }
                        
                        
                        export interface N_SheetType extends L_org_iets3_core_expr_base.N_Type {
                            _is_org_iets3_core_expr_repl_SheetType: boolean
                                                
                        }
                        
                        export namespace N_SheetType {
                            export function isInstance(node: ITypedNode): node is N_SheetType {
                                return '_is_org_iets3_core_expr_repl_SheetType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SheetType extends TypedNode implements N_SheetType {
                            public _is_org_iets3_core_expr_repl_SheetType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
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
                        
                        
                        export interface N_CellArg extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_base.N_IValidNamedConcept {
                            _is_org_iets3_core_expr_repl_CellArg: boolean
                            type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
                        }
                        
                        export namespace N_CellArg {
                            export function isInstance(node: ITypedNode): node is N_CellArg {
                                return '_is_org_iets3_core_expr_repl_CellArg' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_CellArg extends TypedNode implements N_CellArg {
                            public _is_org_iets3_core_expr_repl_CellArg: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
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
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "type")
                        }
                        
                        
                        export interface N_FontStyle extends N_CellStyle {
                            _is_org_iets3_core_expr_repl_FontStyle: boolean
                            
                        }
                        
                        export namespace N_FontStyle {
                            export function isInstance(node: ITypedNode): node is N_FontStyle {
                                return '_is_org_iets3_core_expr_repl_FontStyle' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FontStyle extends TypedNode implements N_FontStyle {
                            public _is_org_iets3_core_expr_repl_FontStyle: boolean = true
            public _is_org_iets3_core_expr_repl_CellStyle: boolean = true
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
                        
                        
                        export interface N_MakeListExpr extends N_AbstractRangeExpr {
                            _is_org_iets3_core_expr_repl_MakeListExpr: boolean
                            
                        }
                        
                        export namespace N_MakeListExpr {
                            export function isInstance(node: ITypedNode): node is N_MakeListExpr {
                                return '_is_org_iets3_core_expr_repl_MakeListExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MakeListExpr extends TypedNode implements N_MakeListExpr {
                            public _is_org_iets3_core_expr_repl_MakeListExpr: boolean = true
            public _is_org_iets3_core_expr_repl_AbstractRangeExpr: boolean = true
            public _is_org_iets3_core_expr_repl_AbstractSheetExpr: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
                                            public from: SingleChildAccessor<N_AbstractCellRef> = new SingleChildAccessor(this.node, "from")
                            public to: SingleChildAccessor<N_AbstractCellRef> = new SingleChildAccessor(this.node, "to")
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
                        
                        
                        export interface N_CellArgRef extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_repl_CellArgRef: boolean
                                                
                        }
                        
                        export namespace N_CellArgRef {
                            export function isInstance(node: ITypedNode): node is N_CellArgRef {
                                return '_is_org_iets3_core_expr_repl_CellArgRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_CellArgRef extends TypedNode implements N_CellArgRef {
                            public _is_org_iets3_core_expr_repl_CellArgRef: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                        
                        
                        export interface N_SheetEmbedExpr extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_repl_SheetEmbedExpr: boolean
                            cols: string | undefined
            rows: string | undefined
            sheet: SingleChildAccessor<N_Sheet>
                                
                        }
                        
                        export namespace N_SheetEmbedExpr {
                            export function isInstance(node: ITypedNode): node is N_SheetEmbedExpr {
                                return '_is_org_iets3_core_expr_repl_SheetEmbedExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SheetEmbedExpr extends TypedNode implements N_SheetEmbedExpr {
                            public _is_org_iets3_core_expr_repl_SheetEmbedExpr: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public sheet: SingleChildAccessor<N_Sheet> = new SingleChildAccessor(this.node, "sheet")
                        }
                        
                        
                        export interface N_FontBoldStyle extends N_FontStyle {
                            _is_org_iets3_core_expr_repl_FontBoldStyle: boolean
                            
                        }
                        
                        export namespace N_FontBoldStyle {
                            export function isInstance(node: ITypedNode): node is N_FontBoldStyle {
                                return '_is_org_iets3_core_expr_repl_FontBoldStyle' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FontBoldStyle extends TypedNode implements N_FontBoldStyle {
                            public _is_org_iets3_core_expr_repl_FontBoldStyle: boolean = true
            public _is_org_iets3_core_expr_repl_FontStyle: boolean = true
            public _is_org_iets3_core_expr_repl_CellStyle: boolean = true
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
                        
                        
                        export interface N_NamedSheetFinder extends N_AbstractSheetFinder {
                            _is_org_iets3_core_expr_repl_NamedSheetFinder: boolean
                                                
                        }
                        
                        export namespace N_NamedSheetFinder {
                            export function isInstance(node: ITypedNode): node is N_NamedSheetFinder {
                                return '_is_org_iets3_core_expr_repl_NamedSheetFinder' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NamedSheetFinder extends TypedNode implements N_NamedSheetFinder {
                            public _is_org_iets3_core_expr_repl_NamedSheetFinder: boolean = true
            public _is_org_iets3_core_expr_repl_AbstractSheetFinder: boolean = true
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
                        
                        
                        export interface N_TopLevelSheet extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_toplevel.N_IToplevelExprContent {
                            _is_org_iets3_core_expr_repl_TopLevelSheet: boolean
                            template: string | undefined
            hideTitle: string | undefined
            sheet: SingleChildAccessor<N_SheetEmbedExpr>
                        }
                        
                        export namespace N_TopLevelSheet {
                            export function isInstance(node: ITypedNode): node is N_TopLevelSheet {
                                return '_is_org_iets3_core_expr_repl_TopLevelSheet' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TopLevelSheet extends TypedNode implements N_TopLevelSheet {
                            public _is_org_iets3_core_expr_repl_TopLevelSheet: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_toplevel_IToplevelExprContent: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IHasQualifiedName: boolean = true
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
                            public sheet: SingleChildAccessor<N_SheetEmbedExpr> = new SingleChildAccessor(this.node, "sheet")
                        }
                        
                        
                        export interface N_AbstractSheetExpr extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_repl_AbstractSheetExpr: boolean
                            
                        }
                        
                        export namespace N_AbstractSheetExpr {
                            export function isInstance(node: ITypedNode): node is N_AbstractSheetExpr {
                                return '_is_org_iets3_core_expr_repl_AbstractSheetExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractSheetExpr extends TypedNode implements N_AbstractSheetExpr {
                            public _is_org_iets3_core_expr_repl_AbstractSheetExpr: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                        
                        
                        export interface N_NamedCellRef extends N_AbstractCellRef {
                            _is_org_iets3_core_expr_repl_NamedCellRef: boolean
                                                
                        }
                        
                        export namespace N_NamedCellRef {
                            export function isInstance(node: ITypedNode): node is N_NamedCellRef {
                                return '_is_org_iets3_core_expr_repl_NamedCellRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NamedCellRef extends TypedNode implements N_NamedCellRef {
                            public _is_org_iets3_core_expr_repl_NamedCellRef: boolean = true
            public _is_org_iets3_core_expr_repl_AbstractCellRef: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
                                            public finder: SingleChildAccessor<N_AbstractSheetFinder> = new SingleChildAccessor(this.node, "finder")
                            public actuals: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression> = new ChildListAccessor(this.node, "actuals")
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
                        
                        
                        export interface N_CellConstraintIt extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_repl_CellConstraintIt: boolean
                            
                        }
                        
                        export namespace N_CellConstraintIt {
                            export function isInstance(node: ITypedNode): node is N_CellConstraintIt {
                                return '_is_org_iets3_core_expr_repl_CellConstraintIt' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_CellConstraintIt extends TypedNode implements N_CellConstraintIt {
                            public _is_org_iets3_core_expr_repl_CellConstraintIt: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                        
                        
                        export interface N_AbstractSheetFinder extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_repl_AbstractSheetFinder: boolean
                            
                        }
                        
                        export namespace N_AbstractSheetFinder {
                            export function isInstance(node: ITypedNode): node is N_AbstractSheetFinder {
                                return '_is_org_iets3_core_expr_repl_AbstractSheetFinder' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractSheetFinder extends TypedNode implements N_AbstractSheetFinder {
                            public _is_org_iets3_core_expr_repl_AbstractSheetFinder: boolean = true
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
                        
                        
                        export interface N_CellStyle extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_repl_CellStyle: boolean
                            
                        }
                        
                        export namespace N_CellStyle {
                            export function isInstance(node: ITypedNode): node is N_CellStyle {
                                return '_is_org_iets3_core_expr_repl_CellStyle' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_CellStyle extends TypedNode implements N_CellStyle {
                            public _is_org_iets3_core_expr_repl_CellStyle: boolean = true
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
                        
                        
                        export interface N_CoordCellRef extends N_AbstractCellRef {
                            _is_org_iets3_core_expr_repl_CoordCellRef: boolean
                            cell: string | undefined
                        }
                        
                        export namespace N_CoordCellRef {
                            export function isInstance(node: ITypedNode): node is N_CoordCellRef {
                                return '_is_org_iets3_core_expr_repl_CoordCellRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_CoordCellRef extends TypedNode implements N_CoordCellRef {
                            public _is_org_iets3_core_expr_repl_CoordCellRef: boolean = true
            public _is_org_iets3_core_expr_repl_AbstractCellRef: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
                                            public finder: SingleChildAccessor<N_AbstractSheetFinder> = new SingleChildAccessor(this.node, "finder")
                            public actuals: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression> = new ChildListAccessor(this.node, "actuals")
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
                            public set cell(value: string | undefined) {
                                this.node.setPropertyValue("cell", value)
                            }
                            public get cell(): string | undefined {
                                return this.node.getPropertyValue("cell")
                            }
                        }
                        
                        
                        export interface N_UpwardsSheetFinder extends N_AbstractSheetFinder {
                            _is_org_iets3_core_expr_repl_UpwardsSheetFinder: boolean
                            
                        }
                        
                        export namespace N_UpwardsSheetFinder {
                            export function isInstance(node: ITypedNode): node is N_UpwardsSheetFinder {
                                return '_is_org_iets3_core_expr_repl_UpwardsSheetFinder' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_UpwardsSheetFinder extends TypedNode implements N_UpwardsSheetFinder {
                            public _is_org_iets3_core_expr_repl_UpwardsSheetFinder: boolean = true
            public _is_org_iets3_core_expr_repl_AbstractSheetFinder: boolean = true
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
                        
                        
                        export interface N_MakeRecordExpr extends N_AbstractRangeExpr {
                            _is_org_iets3_core_expr_repl_MakeRecordExpr: boolean
                            record: SingleChildAccessor<L_org_iets3_core_expr_toplevel.N_RecordType>
                        }
                        
                        export namespace N_MakeRecordExpr {
                            export function isInstance(node: ITypedNode): node is N_MakeRecordExpr {
                                return '_is_org_iets3_core_expr_repl_MakeRecordExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MakeRecordExpr extends TypedNode implements N_MakeRecordExpr {
                            public _is_org_iets3_core_expr_repl_MakeRecordExpr: boolean = true
            public _is_org_iets3_core_expr_repl_AbstractRangeExpr: boolean = true
            public _is_org_iets3_core_expr_repl_AbstractSheetExpr: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
                                            public from: SingleChildAccessor<N_AbstractCellRef> = new SingleChildAccessor(this.node, "from")
                            public to: SingleChildAccessor<N_AbstractCellRef> = new SingleChildAccessor(this.node, "to")
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
                            public record: SingleChildAccessor<L_org_iets3_core_expr_toplevel.N_RecordType> = new SingleChildAccessor(this.node, "record")
                        }
                        
                        
                        export interface N_CellLabel extends L_jetbrains_mps_lang_core.N_BaseConcept, L_jetbrains_mps_lang_core.N_INamedConcept {
                            _is_org_iets3_core_expr_repl_CellLabel: boolean
                            
                        }
                        
                        export namespace N_CellLabel {
                            export function isInstance(node: ITypedNode): node is N_CellLabel {
                                return '_is_org_iets3_core_expr_repl_CellLabel' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_CellLabel extends TypedNode implements N_CellLabel {
                            public _is_org_iets3_core_expr_repl_CellLabel: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
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
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                        }
            }