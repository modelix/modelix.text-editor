import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  TypedNode
} from "ts-model-api";

export class L_org_modelix_model_metametamodel extends GeneratedLanguage {
    constructor() {
        super("org.modelix.model.metametamodel")
    }
    /*
    public getConcepts() {
        return [this.Language, this.Concept, this.Property, this.ReferenceLink, this.ContainmentLink, this.IRole, this.ConceptReference, this.IHasUID]
    }
                    public Language: _C_Impl_Language = _C_Impl_Language
    public Concept: _C_Impl_Concept = _C_Impl_Concept
    public Property: _C_Impl_Property = _C_Impl_Property
    public ReferenceLink: _C_Impl_ReferenceLink = _C_Impl_ReferenceLink
    public ContainmentLink: _C_Impl_ContainmentLink = _C_Impl_ContainmentLink
    public IRole: _C_Impl_IRole = _C_Impl_IRole
    public ConceptReference: _C_Impl_ConceptReference = _C_Impl_ConceptReference
    public IHasUID: _C_Impl_IHasUID = _C_Impl_IHasUID
    */
}

            export class Language extends TypedNode {
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
    public set uid(value: string | undefined) {
        this.node.setPropertyValue("uid", value)
    }
    public get uid(): string | undefined {
        return this.node.getPropertyValue("uid")
    }
}

export class Concept extends TypedNode {
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
    public set uid(value: string | undefined) {
        this.node.setPropertyValue("uid", value)
    }
    public get uid(): string | undefined {
        return this.node.getPropertyValue("uid")
    }
}

export class Property extends TypedNode {
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
    public set uid(value: string | undefined) {
        this.node.setPropertyValue("uid", value)
    }
    public get uid(): string | undefined {
        return this.node.getPropertyValue("uid")
    }
}

export class ReferenceLink extends TypedNode {
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
    public set uid(value: string | undefined) {
        this.node.setPropertyValue("uid", value)
    }
    public get uid(): string | undefined {
        return this.node.getPropertyValue("uid")
    }
}

export class ContainmentLink extends TypedNode {
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
    public set uid(value: string | undefined) {
        this.node.setPropertyValue("uid", value)
    }
    public get uid(): string | undefined {
        return this.node.getPropertyValue("uid")
    }
}

export class IRole extends TypedNode {
                    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
}

export class ConceptReference extends TypedNode {
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

export class IHasUID extends TypedNode {
    
}