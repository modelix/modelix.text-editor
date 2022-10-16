import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  TypedNode
} from "ts-model-api";

export class L_jetbrains_mps_lang_core extends GeneratedLanguage {
    constructor() {
        super("jetbrains.mps.lang.core")
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
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
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
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class ICanSuppressErrors extends TypedNode {
    
}

export class ISuppressErrors extends TypedNode {
    
}

export class InterfacePart extends TypedNode {
    
}

export class ISmartReferent extends TypedNode {
    
}