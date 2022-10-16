import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  TypedNode
} from "ts-model-api";

export class L_org_iets3_analysis_base extends GeneratedLanguage {
    constructor() {
        super("org.iets3.analysis.base")
    }
    /*
    public getConcepts() {
        return [this.ISolvable, this.AbstractSolverTask, this.SolveControl, this.ICanBeMappedToSolver, this.ErrorMessage, this.ErrorSolverTask, this.IUseSolver, this.ISolverCollectionType]
    }
                    public ISolvable: _C_Impl_ISolvable = _C_Impl_ISolvable
    public AbstractSolverTask: _C_Impl_AbstractSolverTask = _C_Impl_AbstractSolverTask
    public SolveControl: _C_Impl_SolveControl = _C_Impl_SolveControl
    public ICanBeMappedToSolver: _C_Impl_ICanBeMappedToSolver = _C_Impl_ICanBeMappedToSolver
    public ErrorMessage: _C_Impl_ErrorMessage = _C_Impl_ErrorMessage
    public ErrorSolverTask: _C_Impl_ErrorSolverTask = _C_Impl_ErrorSolverTask
    public IUseSolver: _C_Impl_IUseSolver = _C_Impl_IUseSolver
    public ISolverCollectionType: _C_Impl_ISolverCollectionType = _C_Impl_ISolverCollectionType
    */
}

            export class ISolvable extends TypedNode {
                    public set __hash(value: string | undefined) {
        this.node.setPropertyValue("__hash", value)
    }
    public get __hash(): string | undefined {
        return this.node.getPropertyValue("__hash")
    }
}

export class AbstractSolverTask extends TypedNode {
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

export class SolveControl extends TypedNode {
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

export class ICanBeMappedToSolver extends TypedNode {
    
}

export class ErrorMessage extends TypedNode {
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

export class ErrorSolverTask extends TypedNode {
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

export class IUseSolver extends TypedNode {
    
}

export class ISolverCollectionType extends TypedNode {
    
}