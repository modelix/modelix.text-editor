import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode
} from "ts-model-api";

import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";

export namespace L_org_iets3_core_expr_simpleTypes {

  export class L_org_iets3_core_expr_simpleTypes extends GeneratedLanguage {
    public static INSTANCE: L_org_iets3_core_expr_simpleTypes = new L_org_iets3_core_expr_simpleTypes();

    constructor() {
      super("org.iets3.core.expr.simpleTypes")

      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/7425695345928349207", (node: INodeJS) => new BooleanType(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/7425695345928358742", (node: INodeJS) => new BooleanLiteral(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/7425695345928358745", (node: INodeJS) => new TrueLiteral(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/7425695345928358774", (node: INodeJS) => new FalseLiteral(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157054168", (node: INodeJS) => new NumericType(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157054169", (node: INodeJS) => new IntegerType(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157054170", (node: INodeJS) => new NumberLiteral(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157054284", (node: INodeJS) => new RealType(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157252551", (node: INodeJS) => new StringType(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5115872837157252552", (node: INodeJS) => new StringLiteral(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/7971844778467001950", (node: INodeJS) => new OtherwiseLiteral(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/1330041117646892901", (node: INodeJS) => new NumberRangeSpec(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8219602584782245544", (node: INodeJS) => new NumberType(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/1330041117646892924", (node: INodeJS) => new NumberPrecSpec(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8825352096209502465", (node: INodeJS) => new ConvertPrecisionNumberExpression(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8825352096209502736", (node: INodeJS) => new RoundingMode(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8825352096209507273", (node: INodeJS) => new TruncateRoundingMode(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8825352096210456368", (node: INodeJS) => new RoundDownRoundingMode(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8825352096210458329", (node: INodeJS) => new RoundUpRoundingMode(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/4723261570619513260", (node: INodeJS) => new LimitExpression(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5994308065090560488", (node: INodeJS) => new StringLengthTarget(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5994308065090560489", (node: INodeJS) => new AbstractStringDotTarget(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/842813880843519728", (node: INodeJS) => new StringContainsTarget(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8293738266739942474", (node: INodeJS) => new StringInterpolationExpr(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/8293738266739943650", (node: INodeJS) => new InterpolExprWord(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5880303268806840041", (node: INodeJS) => new StringStartsWithTarget(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/4880743667108569396", (node: INodeJS) => new BoundsExpression(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/4513425716319387765", (node: INodeJS) => new StringToIntTarget(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/4668305294413323442", (node: INodeJS) => new ToleranceExpr(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/2524315536761142456", (node: INodeJS) => new RoundHalfUpRoundingMode(node))
      this.nodeWrappers.set("mps:6b277d9a-d52d-416f-a209-1919bd737f50/5971688866943282227", (node: INodeJS) => new StringEndsWithTarget(node))
    }

    /*
    public getConcepts() {
        return [this.BooleanType, this.BooleanLiteral, this.TrueLiteral, this.FalseLiteral, this.NumericType, this.IntegerType, this.NumberLiteral, this.RealType, this.StringType, this.StringLiteral, this.OtherwiseLiteral, this.NumberRangeSpec, this.NumberType, this.NumberPrecSpec, this.ConvertPrecisionNumberExpression, this.RoundingMode, this.TruncateRoundingMode, this.RoundDownRoundingMode, this.RoundUpRoundingMode, this.LimitExpression, this.StringLengthTarget, this.AbstractStringDotTarget, this.StringContainsTarget, this.StringInterpolationExpr, this.InterpolExprWord, this.StringStartsWithTarget, this.BoundsExpression, this.StringToIntTarget, this.ToleranceExpr, this.RoundHalfUpRoundingMode, this.StringEndsWithTarget]
    }
                    public BooleanType: _C_Impl_BooleanType = _C_Impl_BooleanType
    public BooleanLiteral: _C_Impl_BooleanLiteral = _C_Impl_BooleanLiteral
    public TrueLiteral: _C_Impl_TrueLiteral = _C_Impl_TrueLiteral
    public FalseLiteral: _C_Impl_FalseLiteral = _C_Impl_FalseLiteral
    public NumericType: _C_Impl_NumericType = _C_Impl_NumericType
    public IntegerType: _C_Impl_IntegerType = _C_Impl_IntegerType
    public NumberLiteral: _C_Impl_NumberLiteral = _C_Impl_NumberLiteral
    public RealType: _C_Impl_RealType = _C_Impl_RealType
    public StringType: _C_Impl_StringType = _C_Impl_StringType
    public StringLiteral: _C_Impl_StringLiteral = _C_Impl_StringLiteral
    public OtherwiseLiteral: _C_Impl_OtherwiseLiteral = _C_Impl_OtherwiseLiteral
    public NumberRangeSpec: _C_Impl_NumberRangeSpec = _C_Impl_NumberRangeSpec
    public NumberType: _C_Impl_NumberType = _C_Impl_NumberType
    public NumberPrecSpec: _C_Impl_NumberPrecSpec = _C_Impl_NumberPrecSpec
    public ConvertPrecisionNumberExpression: _C_Impl_ConvertPrecisionNumberExpression = _C_Impl_ConvertPrecisionNumberExpression
    public RoundingMode: _C_Impl_RoundingMode = _C_Impl_RoundingMode
    public TruncateRoundingMode: _C_Impl_TruncateRoundingMode = _C_Impl_TruncateRoundingMode
    public RoundDownRoundingMode: _C_Impl_RoundDownRoundingMode = _C_Impl_RoundDownRoundingMode
    public RoundUpRoundingMode: _C_Impl_RoundUpRoundingMode = _C_Impl_RoundUpRoundingMode
    public LimitExpression: _C_Impl_LimitExpression = _C_Impl_LimitExpression
    public StringLengthTarget: _C_Impl_StringLengthTarget = _C_Impl_StringLengthTarget
    public AbstractStringDotTarget: _C_Impl_AbstractStringDotTarget = _C_Impl_AbstractStringDotTarget
    public StringContainsTarget: _C_Impl_StringContainsTarget = _C_Impl_StringContainsTarget
    public StringInterpolationExpr: _C_Impl_StringInterpolationExpr = _C_Impl_StringInterpolationExpr
    public InterpolExprWord: _C_Impl_InterpolExprWord = _C_Impl_InterpolExprWord
    public StringStartsWithTarget: _C_Impl_StringStartsWithTarget = _C_Impl_StringStartsWithTarget
    public BoundsExpression: _C_Impl_BoundsExpression = _C_Impl_BoundsExpression
    public StringToIntTarget: _C_Impl_StringToIntTarget = _C_Impl_StringToIntTarget
    public ToleranceExpr: _C_Impl_ToleranceExpr = _C_Impl_ToleranceExpr
    public RoundHalfUpRoundingMode: _C_Impl_RoundHalfUpRoundingMode = _C_Impl_RoundHalfUpRoundingMode
    public StringEndsWithTarget: _C_Impl_StringEndsWithTarget = _C_Impl_StringEndsWithTarget
    */
  }

  export const Language = L_org_iets3_core_expr_simpleTypes.INSTANCE

  export class BooleanType extends TypedNode {
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

  export class BooleanLiteral extends TypedNode {
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

  export class TrueLiteral extends TypedNode {
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

  export class FalseLiteral extends TypedNode {
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

  export class NumericType extends TypedNode {
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

  export class IntegerType extends TypedNode {
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

  export class NumberLiteral extends TypedNode {
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

  export class RealType extends TypedNode {
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

  export class StringType extends TypedNode {
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

  export class StringLiteral extends TypedNode {
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

  export class OtherwiseLiteral extends TypedNode {
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

  export class NumberRangeSpec extends TypedNode {
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

  export class NumberType extends TypedNode {
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

  export class NumberPrecSpec extends TypedNode {
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

  export class ConvertPrecisionNumberExpression extends TypedNode {
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

  export class RoundingMode extends TypedNode {
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

  export class TruncateRoundingMode extends TypedNode {
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

  export class RoundDownRoundingMode extends TypedNode {
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

  export class RoundUpRoundingMode extends TypedNode {
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

  export class LimitExpression extends TypedNode {
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

  export class StringLengthTarget extends TypedNode {
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

  export class AbstractStringDotTarget extends TypedNode {
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

  export class StringContainsTarget extends TypedNode {
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

  export class StringInterpolationExpr extends TypedNode {
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

  export class InterpolExprWord extends TypedNode {
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

  export class StringStartsWithTarget extends TypedNode {
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

  export class BoundsExpression extends TypedNode {
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

  export class StringToIntTarget extends TypedNode {
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

  export class ToleranceExpr extends TypedNode {
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

  export class RoundHalfUpRoundingMode extends TypedNode {
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

  export class StringEndsWithTarget extends TypedNode {
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
}
