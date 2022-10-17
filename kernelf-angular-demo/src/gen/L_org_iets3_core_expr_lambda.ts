import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode
} from "ts-model-api";

import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
import {L_org_iets3_core_expr_base} from "./L_org_iets3_core_expr_base";

export namespace L_org_iets3_core_expr_lambda {

  export class L_org_iets3_core_expr_lambda extends GeneratedLanguage {
    public static INSTANCE: L_org_iets3_core_expr_lambda = new L_org_iets3_core_expr_lambda();

    constructor() {
      super("org.iets3.core.expr.lambda")

      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340107702", (node: INodeJS) => new FunctionType(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340318470", (node: INodeJS) => new LambdaExpression(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340318473", (node: INodeJS) => new IArgument(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340318478", (node: INodeJS) => new LambdaArg(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340370581", (node: INodeJS) => new LambdaArgRef(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340538608", (node: INodeJS) => new ILambdaDotTarget(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340542342", (node: INodeJS) => new ExecOp(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340741775", (node: INodeJS) => new IShortLambdaContainer(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340741814", (node: INodeJS) => new ShortLambdaExpression(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7554398283340826520", (node: INodeJS) => new ShortLambdaItExpression(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4790956042240100911", (node: INodeJS) => new IFunctionLike(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4790956042240100929", (node: INodeJS) => new FunctionArgument(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4790956042240407469", (node: INodeJS) => new ArgRef(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4790956042240522396", (node: INodeJS) => new IFunctionCall(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4790956042240745578", (node: INodeJS) => new IFunctionRef(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4790956042240983401", (node: INodeJS) => new BlockExpression(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4790956042241053102", (node: INodeJS) => new ValExpression(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4790956042241105569", (node: INodeJS) => new ValRef(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/2807135271606959809", (node: INodeJS) => new BindOp(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/2346756181080333959", (node: INodeJS) => new CapturedValue(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/867786408878526214", (node: INodeJS) => new ValValueInContractExpr(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/867786408880429238", (node: INodeJS) => new FunResExpr(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/7791618349055796936", (node: INodeJS) => new EffectTag(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/3045596896722162595", (node: INodeJS) => new ILambdaLike(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/6095949300269462258", (node: INodeJS) => new IJoinedBlockContext(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/6850639405181398762", (node: INodeJS) => new FunCompose(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/6850639405182115289", (node: INodeJS) => new GenericFunctionType(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/6100571306011111439", (node: INodeJS) => new FunctionStyleExecOp(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/8237981399438528802", (node: INodeJS) => new AssertExpr(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/5096753237482793708", (node: INodeJS) => new ReadEffectTag(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/5096753237482793709", (node: INodeJS) => new ModifyEffectTag(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/5096753237482793710", (node: INodeJS) => new ReadModifyEffectTag(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4457827545956437641", (node: INodeJS) => new AttachedConstraint(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/2222228766292974329", (node: INodeJS) => new LocalVarDeclExpr(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/2222228766292974328", (node: INodeJS) => new IAllowLocalVariables(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/2222228766293363750", (node: INodeJS) => new LocalVarRef(node))
      this.nodeWrappers.set("mps:9464fa06-5ab9-409b-9274-64ab29588457/4226105675302315262", (node: INodeJS) => new IDeclaration(node))
    }

    /*
    public getConcepts() {
        return [this.FunctionType, this.LambdaExpression, this.IArgument, this.LambdaArg, this.LambdaArgRef, this.ILambdaDotTarget, this.ExecOp, this.IShortLambdaContainer, this.ShortLambdaExpression, this.ShortLambdaItExpression, this.IFunctionLike, this.FunctionArgument, this.ArgRef, this.IFunctionCall, this.IFunctionRef, this.BlockExpression, this.ValExpression, this.ValRef, this.BindOp, this.CapturedValue, this.ValValueInContractExpr, this.FunResExpr, this.EffectTag, this.ILambdaLike, this.IJoinedBlockContext, this.FunCompose, this.GenericFunctionType, this.FunctionStyleExecOp, this.AssertExpr, this.ReadEffectTag, this.ModifyEffectTag, this.ReadModifyEffectTag, this.AttachedConstraint, this.LocalVarDeclExpr, this.IAllowLocalVariables, this.LocalVarRef, this.IDeclaration]
    }
                    public FunctionType: _C_Impl_FunctionType = _C_Impl_FunctionType
    public LambdaExpression: _C_Impl_LambdaExpression = _C_Impl_LambdaExpression
    public IArgument: _C_Impl_IArgument = _C_Impl_IArgument
    public LambdaArg: _C_Impl_LambdaArg = _C_Impl_LambdaArg
    public LambdaArgRef: _C_Impl_LambdaArgRef = _C_Impl_LambdaArgRef
    public ILambdaDotTarget: _C_Impl_ILambdaDotTarget = _C_Impl_ILambdaDotTarget
    public ExecOp: _C_Impl_ExecOp = _C_Impl_ExecOp
    public IShortLambdaContainer: _C_Impl_IShortLambdaContainer = _C_Impl_IShortLambdaContainer
    public ShortLambdaExpression: _C_Impl_ShortLambdaExpression = _C_Impl_ShortLambdaExpression
    public ShortLambdaItExpression: _C_Impl_ShortLambdaItExpression = _C_Impl_ShortLambdaItExpression
    public IFunctionLike: _C_Impl_IFunctionLike = _C_Impl_IFunctionLike
    public FunctionArgument: _C_Impl_FunctionArgument = _C_Impl_FunctionArgument
    public ArgRef: _C_Impl_ArgRef = _C_Impl_ArgRef
    public IFunctionCall: _C_Impl_IFunctionCall = _C_Impl_IFunctionCall
    public IFunctionRef: _C_Impl_IFunctionRef = _C_Impl_IFunctionRef
    public BlockExpression: _C_Impl_BlockExpression = _C_Impl_BlockExpression
    public ValExpression: _C_Impl_ValExpression = _C_Impl_ValExpression
    public ValRef: _C_Impl_ValRef = _C_Impl_ValRef
    public BindOp: _C_Impl_BindOp = _C_Impl_BindOp
    public CapturedValue: _C_Impl_CapturedValue = _C_Impl_CapturedValue
    public ValValueInContractExpr: _C_Impl_ValValueInContractExpr = _C_Impl_ValValueInContractExpr
    public FunResExpr: _C_Impl_FunResExpr = _C_Impl_FunResExpr
    public EffectTag: _C_Impl_EffectTag = _C_Impl_EffectTag
    public ILambdaLike: _C_Impl_ILambdaLike = _C_Impl_ILambdaLike
    public IJoinedBlockContext: _C_Impl_IJoinedBlockContext = _C_Impl_IJoinedBlockContext
    public FunCompose: _C_Impl_FunCompose = _C_Impl_FunCompose
    public GenericFunctionType: _C_Impl_GenericFunctionType = _C_Impl_GenericFunctionType
    public FunctionStyleExecOp: _C_Impl_FunctionStyleExecOp = _C_Impl_FunctionStyleExecOp
    public AssertExpr: _C_Impl_AssertExpr = _C_Impl_AssertExpr
    public ReadEffectTag: _C_Impl_ReadEffectTag = _C_Impl_ReadEffectTag
    public ModifyEffectTag: _C_Impl_ModifyEffectTag = _C_Impl_ModifyEffectTag
    public ReadModifyEffectTag: _C_Impl_ReadModifyEffectTag = _C_Impl_ReadModifyEffectTag
    public AttachedConstraint: _C_Impl_AttachedConstraint = _C_Impl_AttachedConstraint
    public LocalVarDeclExpr: _C_Impl_LocalVarDeclExpr = _C_Impl_LocalVarDeclExpr
    public IAllowLocalVariables: _C_Impl_IAllowLocalVariables = _C_Impl_IAllowLocalVariables
    public LocalVarRef: _C_Impl_LocalVarRef = _C_Impl_LocalVarRef
    public IDeclaration: _C_Impl_IDeclaration = _C_Impl_IDeclaration
    */
  }

  export const Language = L_org_iets3_core_expr_lambda.INSTANCE

  export class FunctionType extends TypedNode {
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

  export class LambdaExpression extends TypedNode {
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

  export class IArgument extends TypedNode {
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

  export class LambdaArg extends TypedNode {
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

  export class LambdaArgRef extends TypedNode {
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

  export class ILambdaDotTarget extends TypedNode {

  }

  export class ExecOp extends TypedNode {
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

  export class IShortLambdaContainer extends TypedNode {

  }

  export class ShortLambdaExpression extends TypedNode {
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

  export class ShortLambdaItExpression extends TypedNode {
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

  export class IFunctionLike extends TypedNode {
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
    public contract: SingleChildAccessor<L_org_iets3_core_expr_base.Contract> = new SingleChildAccessor(this.node, "contract")
  }

  export class FunctionArgument extends TypedNode {
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

  export class ArgRef extends TypedNode {
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

  export class IFunctionCall extends TypedNode {

  }

  export class IFunctionRef extends TypedNode {

  }

  export class BlockExpression extends TypedNode {
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

  export class ValExpression extends TypedNode {
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
    public contract: SingleChildAccessor<L_org_iets3_core_expr_base.Contract> = new SingleChildAccessor(this.node, "contract")

    public set __hash(value: string | undefined) {
      this.node.setPropertyValue("__hash", value)
    }

    public get __hash(): string | undefined {
      return this.node.getPropertyValue("__hash")
    }
  }

  export class ValRef extends TypedNode {
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

  export class BindOp extends TypedNode {
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

  export class CapturedValue extends TypedNode {
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

  export class ValValueInContractExpr extends TypedNode {
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

  export class FunResExpr extends TypedNode {
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

  export class EffectTag extends TypedNode {
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

  export class ILambdaLike extends TypedNode {

  }

  export class IJoinedBlockContext extends TypedNode {

  }

  export class FunCompose extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

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

  export class GenericFunctionType extends TypedNode {
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

  export class FunctionStyleExecOp extends TypedNode {
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

  export class AssertExpr extends TypedNode {
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

  export class ReadEffectTag extends TypedNode {
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

  export class ModifyEffectTag extends TypedNode {
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

  export class ReadModifyEffectTag extends TypedNode {
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

  export class AttachedConstraint extends TypedNode {
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

  export class LocalVarDeclExpr extends TypedNode {
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
    public contract: SingleChildAccessor<L_org_iets3_core_expr_base.Contract> = new SingleChildAccessor(this.node, "contract")
  }

  export class IAllowLocalVariables extends TypedNode {

  }

  export class LocalVarRef extends TypedNode {
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

  export class IDeclaration extends TypedNode {

  }
}
