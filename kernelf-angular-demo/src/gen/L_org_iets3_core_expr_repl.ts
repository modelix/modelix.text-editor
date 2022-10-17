import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode
} from "ts-model-api";

import {L_org_iets3_core_base} from "./L_org_iets3_core_base";
import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
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

  export const Language = L_org_iets3_core_expr_repl.INSTANCE

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
  }

  export class IReplEntry extends TypedNode {

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
  }
}
