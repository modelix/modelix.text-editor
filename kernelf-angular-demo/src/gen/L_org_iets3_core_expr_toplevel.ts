import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  TypedNode
} from "ts-model-api";

export class L_org_iets3_core_expr_toplevel extends GeneratedLanguage {
    constructor() {
        super("org.iets3.core.expr.toplevel")
    }
    /*
    public getConcepts() {
        return [this.Function, this.FunctionCall, this.FunRef, this.IFunctionScopeProvider, this.IToplevelExprContent, this.ExtensionFunctionCall, this.Constant, this.IConstantScopeProvider, this.ConstantRef, this.EmptyToplevelContent, this.RecordDeclaration, this.RecordMember, this.RecordType, this.IRecordScopeProvider, this.RecordLiteral, this.SectionMarker, this.Typedef, this.ITypedefScopeProvider, this.TypedefType, this.TypedefContractValExpr, this.RecordMemberRefInConstraint, this.RecordChangeTarget, this.NewValueSetter, this.OldValueExpr, this.OldMemberRef, this.EnumDeclaration, this.EnumLiteral, this.EnumType, this.IEnumScopeProvider, this.EnumLiteralRef, this.EnumValueAccessor, this.IRecordMember, this.IRecordDeclaration, this.AbstractTypeDeclaration, this.IRecordMemberScopeProvider, this.EnumIsTarget, this.Library, this.ReferenceableFlag, this.GroupType, this.GroupByOp, this.GroupKeyTarget, this.GroupMembersTarget, this.InlineRecordType, this.ProjectOp, this.ProjectMember, this.ProjectIt, this.InlineRecordMemberAccess, this.BuilderExpression, this.BuilderElement, this.FieldSetter, this.BuilderAdapter, this.RecordTypeAdapter, this.IFunctionContainer, this.AbstractFunctionAdapter, this.ITopLevelContainer, this.IRecordType, this.IToplevelExprContentContainer, this.AbstractToplevelExprAdapter, this.IFunctionLikeContainer, this.AbstractFunctionLikeAdapter, this.EmptyMember, this.EnumIsInTarget, this.EnumIsInSelector, this.IDeclarationExtensionContext, this.QualifierRef, this.AllLitList, this.EnumIndexOp]
    }
                    public Function: _C_Impl_Function = _C_Impl_Function
    public FunctionCall: _C_Impl_FunctionCall = _C_Impl_FunctionCall
    public FunRef: _C_Impl_FunRef = _C_Impl_FunRef
    public IFunctionScopeProvider: _C_Impl_IFunctionScopeProvider = _C_Impl_IFunctionScopeProvider
    public IToplevelExprContent: _C_Impl_IToplevelExprContent = _C_Impl_IToplevelExprContent
    public ExtensionFunctionCall: _C_Impl_ExtensionFunctionCall = _C_Impl_ExtensionFunctionCall
    public Constant: _C_Impl_Constant = _C_Impl_Constant
    public IConstantScopeProvider: _C_Impl_IConstantScopeProvider = _C_Impl_IConstantScopeProvider
    public ConstantRef: _C_Impl_ConstantRef = _C_Impl_ConstantRef
    public EmptyToplevelContent: _C_Impl_EmptyToplevelContent = _C_Impl_EmptyToplevelContent
    public RecordDeclaration: _C_Impl_RecordDeclaration = _C_Impl_RecordDeclaration
    public RecordMember: _C_Impl_RecordMember = _C_Impl_RecordMember
    public RecordType: _C_Impl_RecordType = _C_Impl_RecordType
    public IRecordScopeProvider: _C_Impl_IRecordScopeProvider = _C_Impl_IRecordScopeProvider
    public RecordLiteral: _C_Impl_RecordLiteral = _C_Impl_RecordLiteral
    public SectionMarker: _C_Impl_SectionMarker = _C_Impl_SectionMarker
    public Typedef: _C_Impl_Typedef = _C_Impl_Typedef
    public ITypedefScopeProvider: _C_Impl_ITypedefScopeProvider = _C_Impl_ITypedefScopeProvider
    public TypedefType: _C_Impl_TypedefType = _C_Impl_TypedefType
    public TypedefContractValExpr: _C_Impl_TypedefContractValExpr = _C_Impl_TypedefContractValExpr
    public RecordMemberRefInConstraint: _C_Impl_RecordMemberRefInConstraint = _C_Impl_RecordMemberRefInConstraint
    public RecordChangeTarget: _C_Impl_RecordChangeTarget = _C_Impl_RecordChangeTarget
    public NewValueSetter: _C_Impl_NewValueSetter = _C_Impl_NewValueSetter
    public OldValueExpr: _C_Impl_OldValueExpr = _C_Impl_OldValueExpr
    public OldMemberRef: _C_Impl_OldMemberRef = _C_Impl_OldMemberRef
    public EnumDeclaration: _C_Impl_EnumDeclaration = _C_Impl_EnumDeclaration
    public EnumLiteral: _C_Impl_EnumLiteral = _C_Impl_EnumLiteral
    public EnumType: _C_Impl_EnumType = _C_Impl_EnumType
    public IEnumScopeProvider: _C_Impl_IEnumScopeProvider = _C_Impl_IEnumScopeProvider
    public EnumLiteralRef: _C_Impl_EnumLiteralRef = _C_Impl_EnumLiteralRef
    public EnumValueAccessor: _C_Impl_EnumValueAccessor = _C_Impl_EnumValueAccessor
    public IRecordMember: _C_Impl_IRecordMember = _C_Impl_IRecordMember
    public IRecordDeclaration: _C_Impl_IRecordDeclaration = _C_Impl_IRecordDeclaration
    public AbstractTypeDeclaration: _C_Impl_AbstractTypeDeclaration = _C_Impl_AbstractTypeDeclaration
    public IRecordMemberScopeProvider: _C_Impl_IRecordMemberScopeProvider = _C_Impl_IRecordMemberScopeProvider
    public EnumIsTarget: _C_Impl_EnumIsTarget = _C_Impl_EnumIsTarget
    public Library: _C_Impl_Library = _C_Impl_Library
    public ReferenceableFlag: _C_Impl_ReferenceableFlag = _C_Impl_ReferenceableFlag
    public GroupType: _C_Impl_GroupType = _C_Impl_GroupType
    public GroupByOp: _C_Impl_GroupByOp = _C_Impl_GroupByOp
    public GroupKeyTarget: _C_Impl_GroupKeyTarget = _C_Impl_GroupKeyTarget
    public GroupMembersTarget: _C_Impl_GroupMembersTarget = _C_Impl_GroupMembersTarget
    public InlineRecordType: _C_Impl_InlineRecordType = _C_Impl_InlineRecordType
    public ProjectOp: _C_Impl_ProjectOp = _C_Impl_ProjectOp
    public ProjectMember: _C_Impl_ProjectMember = _C_Impl_ProjectMember
    public ProjectIt: _C_Impl_ProjectIt = _C_Impl_ProjectIt
    public InlineRecordMemberAccess: _C_Impl_InlineRecordMemberAccess = _C_Impl_InlineRecordMemberAccess
    public BuilderExpression: _C_Impl_BuilderExpression = _C_Impl_BuilderExpression
    public BuilderElement: _C_Impl_BuilderElement = _C_Impl_BuilderElement
    public FieldSetter: _C_Impl_FieldSetter = _C_Impl_FieldSetter
    public BuilderAdapter: _C_Impl_BuilderAdapter = _C_Impl_BuilderAdapter
    public RecordTypeAdapter: _C_Impl_RecordTypeAdapter = _C_Impl_RecordTypeAdapter
    public IFunctionContainer: _C_Impl_IFunctionContainer = _C_Impl_IFunctionContainer
    public AbstractFunctionAdapter: _C_Impl_AbstractFunctionAdapter = _C_Impl_AbstractFunctionAdapter
    public ITopLevelContainer: _C_Impl_ITopLevelContainer = _C_Impl_ITopLevelContainer
    public IRecordType: _C_Impl_IRecordType = _C_Impl_IRecordType
    public IToplevelExprContentContainer: _C_Impl_IToplevelExprContentContainer = _C_Impl_IToplevelExprContentContainer
    public AbstractToplevelExprAdapter: _C_Impl_AbstractToplevelExprAdapter = _C_Impl_AbstractToplevelExprAdapter
    public IFunctionLikeContainer: _C_Impl_IFunctionLikeContainer = _C_Impl_IFunctionLikeContainer
    public AbstractFunctionLikeAdapter: _C_Impl_AbstractFunctionLikeAdapter = _C_Impl_AbstractFunctionLikeAdapter
    public EmptyMember: _C_Impl_EmptyMember = _C_Impl_EmptyMember
    public EnumIsInTarget: _C_Impl_EnumIsInTarget = _C_Impl_EnumIsInTarget
    public EnumIsInSelector: _C_Impl_EnumIsInSelector = _C_Impl_EnumIsInSelector
    public IDeclarationExtensionContext: _C_Impl_IDeclarationExtensionContext = _C_Impl_IDeclarationExtensionContext
    public QualifierRef: _C_Impl_QualifierRef = _C_Impl_QualifierRef
    public AllLitList: _C_Impl_AllLitList = _C_Impl_AllLitList
    public EnumIndexOp: _C_Impl_EnumIndexOp = _C_Impl_EnumIndexOp
    */
}

            export class Function extends TypedNode {
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
    public set ext(value: string | undefined) {
        this.node.setPropertyValue("ext", value)
    }
    public get ext(): string | undefined {
        return this.node.getPropertyValue("ext")
    }
    public args: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "args")
    public body: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "body")
    public effect: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "effect")
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
    public type: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "type")
    public contract: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "contract")
    public set __hash(value: string | undefined) {
        this.node.setPropertyValue("__hash", value)
    }
    public get __hash(): string | undefined {
        return this.node.getPropertyValue("__hash")
    }
}

export class FunctionCall extends TypedNode {
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
    public args: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "args")
                        
    public set __hash(value: string | undefined) {
        this.node.setPropertyValue("__hash", value)
    }
    public get __hash(): string | undefined {
        return this.node.getPropertyValue("__hash")
    }
}

export class FunRef extends TypedNode {
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

export class IFunctionScopeProvider extends TypedNode {
    
}

export class IToplevelExprContent extends TypedNode {
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

export class ExtensionFunctionCall extends TypedNode {
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
    public set __hash(value: string | undefined) {
        this.node.setPropertyValue("__hash", value)
    }
    public get __hash(): string | undefined {
        return this.node.getPropertyValue("__hash")
    }
}

export class Constant extends TypedNode {
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
    public type: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "type")
    public set __hash(value: string | undefined) {
        this.node.setPropertyValue("__hash", value)
    }
    public get __hash(): string | undefined {
        return this.node.getPropertyValue("__hash")
    }
}

export class IConstantScopeProvider extends TypedNode {
    
}

export class ConstantRef extends TypedNode {
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

export class EmptyToplevelContent extends TypedNode {
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

export class RecordDeclaration extends TypedNode {
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
    public members: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "members")
    public contract: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "contract")
}

export class RecordMember extends TypedNode {
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
    public contract: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "contract")
    public type: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "type")
}

export class RecordType extends TypedNode {
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

export class IRecordScopeProvider extends TypedNode {
    
}

export class RecordLiteral extends TypedNode {
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
    public type: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "type")
}

export class SectionMarker extends TypedNode {
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

export class Typedef extends TypedNode {
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
    public contract: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "contract")
    public set __hash(value: string | undefined) {
        this.node.setPropertyValue("__hash", value)
    }
    public get __hash(): string | undefined {
        return this.node.getPropertyValue("__hash")
    }
}

export class ITypedefScopeProvider extends TypedNode {
    
}

export class TypedefType extends TypedNode {
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

export class TypedefContractValExpr extends TypedNode {
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

export class RecordMemberRefInConstraint extends TypedNode {
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

export class RecordChangeTarget extends TypedNode {
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

export class NewValueSetter extends TypedNode {
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

export class OldValueExpr extends TypedNode {
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

export class OldMemberRef extends TypedNode {
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

export class EnumDeclaration extends TypedNode {
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

export class EnumLiteral extends TypedNode {
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

export class EnumType extends TypedNode {
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

export class IEnumScopeProvider extends TypedNode {
    
}

export class EnumLiteralRef extends TypedNode {
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

export class EnumValueAccessor extends TypedNode {
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

export class IRecordMember extends TypedNode {
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
    public contract: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "contract")
}

export class IRecordDeclaration extends TypedNode {
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
    public contract: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "contract")
}

export class AbstractTypeDeclaration extends TypedNode {
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

export class IRecordMemberScopeProvider extends TypedNode {
    
}

export class EnumIsTarget extends TypedNode {
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

export class Library extends TypedNode {
                    public constraints: ChildListAccessor<TypedNode> = new ChildListAccessor(this.node, "constraints")
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

export class ReferenceableFlag extends TypedNode {
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

export class GroupType extends TypedNode {
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

export class GroupByOp extends TypedNode {
                    public arg: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "arg")
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

export class GroupKeyTarget extends TypedNode {
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

export class GroupMembersTarget extends TypedNode {
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

export class InlineRecordType extends TypedNode {
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

export class ProjectOp extends TypedNode {
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

export class ProjectMember extends TypedNode {
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

export class ProjectIt extends TypedNode {
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

export class InlineRecordMemberAccess extends TypedNode {
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

export class BuilderExpression extends TypedNode {
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

export class BuilderElement extends TypedNode {
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

export class FieldSetter extends TypedNode {
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

export class BuilderAdapter extends TypedNode {
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

export class RecordTypeAdapter extends TypedNode {
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

export class IFunctionContainer extends TypedNode {
    
}

export class AbstractFunctionAdapter extends TypedNode {
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

export class ITopLevelContainer extends TypedNode {
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

export class IRecordType extends TypedNode {
    
}

export class IToplevelExprContentContainer extends TypedNode {
    
}

export class AbstractToplevelExprAdapter extends TypedNode {
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

export class IFunctionLikeContainer extends TypedNode {
    
}

export class AbstractFunctionLikeAdapter extends TypedNode {
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

export class EmptyMember extends TypedNode {
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
    public contract: SingleChildAccessor<TypedNode> = new SingleChildAccessor(this.node, "contract")
}

export class EnumIsInTarget extends TypedNode {
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

export class EnumIsInSelector extends TypedNode {
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

export class IDeclarationExtensionContext extends TypedNode {
    
}

export class QualifierRef extends TypedNode {
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

export class AllLitList extends TypedNode {
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

export class EnumIndexOp extends TypedNode {
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