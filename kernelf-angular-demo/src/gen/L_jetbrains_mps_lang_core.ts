import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode
} from "ts-model-api";


export namespace L_jetbrains_mps_lang_core {

  export class L_jetbrains_mps_lang_core extends GeneratedLanguage {
    public static INSTANCE: L_jetbrains_mps_lang_core = new L_jetbrains_mps_lang_core();

    constructor() {
      super("jetbrains.mps.lang.core")

      this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/1133920641626", (node: INodeJS) => new BaseConcept(node))
      this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/1169194658468", (node: INodeJS) => new INamedConcept(node))
      this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/1196978630214", (node: INodeJS) => new IResolveInfo(node))
      this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/1224608834445", (node: INodeJS) => new IDeprecatable(node))
      this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/1234971358450", (node: INodeJS) => new IType(node))
      this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/5169995583184591161", (node: INodeJS) => new Attribute(node))
      this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/3364660638048049748", (node: INodeJS) => new NodeAttribute(node))
      this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/3393165121846091586", (node: INodeJS) => new ICanSuppressErrors(node))
      this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/3393165121846091587", (node: INodeJS) => new ISuppressErrors(node))
      this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/1319728274784973096", (node: INodeJS) => new InterfacePart(node))
      this.nodeWrappers.set("mps:ceab5195-25ea-4f22-9b92-103b95ca8c0c/7094926192234036184", (node: INodeJS) => new ISmartReferent(node))
    }

    /*
    public getConcepts() {
        return [this.BaseConcept, this.INamedConcept, this.IResolveInfo, this.IDeprecatable, this.IType, this.Attribute, this.NodeAttribute, this.ICanSuppressErrors, this.ISuppressErrors, this.InterfacePart, this.ISmartReferent]
    }
                    public BaseConcept: _C_Impl_BaseConcept = _C_Impl_BaseConcept
    public INamedConcept: _C_Impl_INamedConcept = _C_Impl_INamedConcept
    public IResolveInfo: _C_Impl_IResolveInfo = _C_Impl_IResolveInfo
    public IDeprecatable: _C_Impl_IDeprecatable = _C_Impl_IDeprecatable
    public IType: _C_Impl_IType = _C_Impl_IType
    public Attribute: _C_Impl_Attribute = _C_Impl_Attribute
    public NodeAttribute: _C_Impl_NodeAttribute = _C_Impl_NodeAttribute
    public ICanSuppressErrors: _C_Impl_ICanSuppressErrors = _C_Impl_ICanSuppressErrors
    public ISuppressErrors: _C_Impl_ISuppressErrors = _C_Impl_ISuppressErrors
    public InterfacePart: _C_Impl_InterfacePart = _C_Impl_InterfacePart
    public ISmartReferent: _C_Impl_ISmartReferent = _C_Impl_ISmartReferent
    */
  }

  export const Language = L_jetbrains_mps_lang_core.INSTANCE

  export class BaseConcept extends TypedNode {

  }

  export class INamedConcept extends TypedNode {

  }

  export class IResolveInfo extends TypedNode {

  }

  export class IDeprecatable extends TypedNode {

  }

  export class IType extends TypedNode {

  }

  export class Attribute extends TypedNode {
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

  export class NodeAttribute extends TypedNode {
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

  export class ICanSuppressErrors extends TypedNode {

  }

  export class ISuppressErrors extends TypedNode {

  }

  export class InterfacePart extends TypedNode {

  }

  export class ISmartReferent extends TypedNode {

  }
}
