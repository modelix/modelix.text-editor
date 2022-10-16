import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  TypedNode
} from "ts-model-api";

export class L_jetbrains_mps_lang_structure extends GeneratedLanguage {
    constructor() {
        super("jetbrains.mps.lang.structure")
    }
    /*
    public getConcepts() {
        return [this.LinkDeclaration, this.PropertyDeclaration, this.DataTypeDeclaration, this.AbstractConceptDeclaration, this.IStructureDeprecatable, this.DocumentationObjective, this.INamedStructureElement, this.IStructureElement, this.INamedAspect]
    }
                    public LinkDeclaration: _C_Impl_LinkDeclaration = _C_Impl_LinkDeclaration
    public PropertyDeclaration: _C_Impl_PropertyDeclaration = _C_Impl_PropertyDeclaration
    public DataTypeDeclaration: _C_Impl_DataTypeDeclaration = _C_Impl_DataTypeDeclaration
    public AbstractConceptDeclaration: _C_Impl_AbstractConceptDeclaration = _C_Impl_AbstractConceptDeclaration
    public IStructureDeprecatable: _C_Impl_IStructureDeprecatable = _C_Impl_IStructureDeprecatable
    public DocumentationObjective: _C_Impl_DocumentationObjective = _C_Impl_DocumentationObjective
    public INamedStructureElement: _C_Impl_INamedStructureElement = _C_Impl_INamedStructureElement
    public IStructureElement: _C_Impl_IStructureElement = _C_Impl_IStructureElement
    public INamedAspect: _C_Impl_INamedAspect = _C_Impl_INamedAspect
    */
}

            export class LinkDeclaration extends TypedNode {
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
    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
}

export class PropertyDeclaration extends TypedNode {
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
    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
}

export class DataTypeDeclaration extends TypedNode {
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
    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
}

export class AbstractConceptDeclaration extends TypedNode {
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
    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
}

export class IStructureDeprecatable extends TypedNode {
    
}

export class DocumentationObjective extends TypedNode {
    
}

export class INamedStructureElement extends TypedNode {
                    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
}

export class IStructureElement extends TypedNode {
    
}

export class INamedAspect extends TypedNode {
                    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
}