import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  TypedNode
} from "ts-model-api";

export class L_com_mbeddr_core_base extends GeneratedLanguage {
    constructor() {
        super("com.mbeddr.core.base")
    }
    /*
    public getConcepts() {
        return [this.IIdentifierNamedConcept, this.ICommentable, this.IDocumentable, this.IContainerOfUniqueNames, this.IEmpty, this.ILOCCountProvider, this.IHideFromOutline, this.AssessmentQuery, this.AssessmentResult, this.AssessmentSummary, this.IMbeddrIDERoot, this.IVisibleElementProvider, this.Chunk, this.IChunkDependency, this.DefaultGenericChunkDependency, this.ChunkDependencyConstraint, this.ITreeViewable, this.ITreeViewRoot, this.IDetectCycle, this.AssessmentScope, this.IHasQualifiedName]
    }
                    public IIdentifierNamedConcept: _C_Impl_IIdentifierNamedConcept = _C_Impl_IIdentifierNamedConcept
    public ICommentable: _C_Impl_ICommentable = _C_Impl_ICommentable
    public IDocumentable: _C_Impl_IDocumentable = _C_Impl_IDocumentable
    public IContainerOfUniqueNames: _C_Impl_IContainerOfUniqueNames = _C_Impl_IContainerOfUniqueNames
    public IEmpty: _C_Impl_IEmpty = _C_Impl_IEmpty
    public ILOCCountProvider: _C_Impl_ILOCCountProvider = _C_Impl_ILOCCountProvider
    public IHideFromOutline: _C_Impl_IHideFromOutline = _C_Impl_IHideFromOutline
    public AssessmentQuery: _C_Impl_AssessmentQuery = _C_Impl_AssessmentQuery
    public AssessmentResult: _C_Impl_AssessmentResult = _C_Impl_AssessmentResult
    public AssessmentSummary: _C_Impl_AssessmentSummary = _C_Impl_AssessmentSummary
    public IMbeddrIDERoot: _C_Impl_IMbeddrIDERoot = _C_Impl_IMbeddrIDERoot
    public IVisibleElementProvider: _C_Impl_IVisibleElementProvider = _C_Impl_IVisibleElementProvider
    public Chunk: _C_Impl_Chunk = _C_Impl_Chunk
    public IChunkDependency: _C_Impl_IChunkDependency = _C_Impl_IChunkDependency
    public DefaultGenericChunkDependency: _C_Impl_DefaultGenericChunkDependency = _C_Impl_DefaultGenericChunkDependency
    public ChunkDependencyConstraint: _C_Impl_ChunkDependencyConstraint = _C_Impl_ChunkDependencyConstraint
    public ITreeViewable: _C_Impl_ITreeViewable = _C_Impl_ITreeViewable
    public ITreeViewRoot: _C_Impl_ITreeViewRoot = _C_Impl_ITreeViewRoot
    public IDetectCycle: _C_Impl_IDetectCycle = _C_Impl_IDetectCycle
    public AssessmentScope: _C_Impl_AssessmentScope = _C_Impl_AssessmentScope
    public IHasQualifiedName: _C_Impl_IHasQualifiedName = _C_Impl_IHasQualifiedName
    */
}

            export class IIdentifierNamedConcept extends TypedNode {
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

export class ICommentable extends TypedNode {
    
}

export class IDocumentable extends TypedNode {
    
}

export class IContainerOfUniqueNames extends TypedNode {
    
}

export class IEmpty extends TypedNode {
    
}

export class ILOCCountProvider extends TypedNode {
    
}

export class IHideFromOutline extends TypedNode {
    
}

export class AssessmentQuery extends TypedNode {
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

export class AssessmentResult extends TypedNode {
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

export class AssessmentSummary extends TypedNode {
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

export class IMbeddrIDERoot extends TypedNode {
                    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
}

export class IVisibleElementProvider extends TypedNode {
    
}

export class Chunk extends TypedNode {
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
    public set resolveInfo(value: string | undefined) {
        this.node.setPropertyValue("resolveInfo", value)
    }
    public get resolveInfo(): string | undefined {
        return this.node.getPropertyValue("resolveInfo")
    }
}

export class IChunkDependency extends TypedNode {
    
}

export class DefaultGenericChunkDependency extends TypedNode {
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

export class ChunkDependencyConstraint extends TypedNode {
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

export class ITreeViewable extends TypedNode {
    
}

export class ITreeViewRoot extends TypedNode {
    
}

export class IDetectCycle extends TypedNode {
                    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
}

export class AssessmentScope extends TypedNode {
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

export class IHasQualifiedName extends TypedNode {
                    public set name(value: string | undefined) {
        this.node.setPropertyValue("name", value)
    }
    public get name(): string | undefined {
        return this.node.getPropertyValue("name")
    }
}