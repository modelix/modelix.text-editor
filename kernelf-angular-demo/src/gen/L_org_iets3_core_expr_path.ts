import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  TypedNode
} from "ts-model-api";

export class L_org_iets3_core_expr_path extends GeneratedLanguage {
    constructor() {
        super("org.iets3.core.expr.path")
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
    public smodelAttribute: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "smodelAttribute")
}

export class IComparablePathPart extends TypedNode {
    
}

export class IPathPart extends TypedNode {
    
}