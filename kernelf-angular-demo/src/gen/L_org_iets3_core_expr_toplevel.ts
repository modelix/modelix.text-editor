            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_org_iets3_core_base} from "./L_org_iets3_core_base";
import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
import {L_org_iets3_analysis_base} from "./L_org_iets3_analysis_base";
import {L_org_iets3_core_expr_path} from "./L_org_iets3_core_expr_path";
import {L_com_mbeddr_core_base} from "./L_com_mbeddr_core_base";
import {L_com_mbeddr_mpsutil_interpreter} from "./L_com_mbeddr_mpsutil_interpreter";
import {L_org_iets3_core_expr_base} from "./L_org_iets3_core_expr_base";
import {L_org_iets3_core_expr_collections} from "./L_org_iets3_core_expr_collections";
import {L_org_iets3_core_expr_lambda} from "./L_org_iets3_core_expr_lambda";
            
            export namespace L_org_iets3_core_expr_toplevel {
            
            export class L_org_iets3_core_expr_toplevel extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_expr_toplevel = new L_org_iets3_core_expr_toplevel();
                constructor() {
                    super("org.iets3.core.expr.toplevel")
                    
                    this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/4790956042240148643", (node: INodeJS) => new _N_TypedImpl_Function(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/4790956042240570348", (node: INodeJS) => new _N_TypedImpl_FunctionCall(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/4790956042240790396", (node: INodeJS) => new _N_TypedImpl_FunRef(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/2861782275883406867", (node: INodeJS) => new _N_TypedImpl_IFunctionScopeProvider(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/2861782275883475449", (node: INodeJS) => new _N_TypedImpl_IToplevelExprContent(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/2861782275883762391", (node: INodeJS) => new _N_TypedImpl_ExtensionFunctionCall(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7089558164906249676", (node: INodeJS) => new _N_TypedImpl_Constant(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7089558164907769200", (node: INodeJS) => new _N_TypedImpl_IConstantScopeProvider(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/543569365051789113", (node: INodeJS) => new _N_TypedImpl_ConstantRef(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/543569365052765011", (node: INodeJS) => new _N_TypedImpl_EmptyToplevelContent(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8811147530084018358", (node: INodeJS) => new _N_TypedImpl_RecordDeclaration(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8811147530084018361", (node: INodeJS) => new _N_TypedImpl_RecordMember(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8811147530084018370", (node: INodeJS) => new _N_TypedImpl_RecordType(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8811147530084261867", (node: INodeJS) => new _N_TypedImpl_IRecordScopeProvider(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8811147530085329320", (node: INodeJS) => new _N_TypedImpl_RecordLiteral(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7740953487933794886", (node: INodeJS) => new _N_TypedImpl_SectionMarker(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7740953487936183912", (node: INodeJS) => new _N_TypedImpl_Typedef(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7740953487936183984", (node: INodeJS) => new _N_TypedImpl_ITypedefScopeProvider(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7740953487936184022", (node: INodeJS) => new _N_TypedImpl_TypedefType(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/3315773615451992747", (node: INodeJS) => new _N_TypedImpl_TypedefContractValExpr(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/1024425597324739336", (node: INodeJS) => new _N_TypedImpl_RecordMemberRefInConstraint(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/1249392911699110107", (node: INodeJS) => new _N_TypedImpl_RecordChangeTarget(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/1249392911699110134", (node: INodeJS) => new _N_TypedImpl_NewValueSetter(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/820361861852634100", (node: INodeJS) => new _N_TypedImpl_OldValueExpr(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/820361861853869169", (node: INodeJS) => new _N_TypedImpl_OldMemberRef(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7061117989422575278", (node: INodeJS) => new _N_TypedImpl_EnumDeclaration(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7061117989422575313", (node: INodeJS) => new _N_TypedImpl_EnumLiteral(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7061117989422575803", (node: INodeJS) => new _N_TypedImpl_EnumType(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7061117989422575939", (node: INodeJS) => new _N_TypedImpl_IEnumScopeProvider(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7061117989422577349", (node: INodeJS) => new _N_TypedImpl_EnumLiteralRef(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/4577412849441593498", (node: INodeJS) => new _N_TypedImpl_EnumValueAccessor(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/602952467876375079", (node: INodeJS) => new _N_TypedImpl_IRecordMember(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/602952467877559919", (node: INodeJS) => new _N_TypedImpl_IRecordDeclaration(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8718374282852222512", (node: INodeJS) => new _N_TypedImpl_AbstractTypeDeclaration(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7849023854690216373", (node: INodeJS) => new _N_TypedImpl_IRecordMemberScopeProvider(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/6527211908667934109", (node: INodeJS) => new _N_TypedImpl_EnumIsTarget(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/543569365052711055", (node: INodeJS) => new _N_TypedImpl_Library(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7782108600709718604", (node: INodeJS) => new _N_TypedImpl_ReferenceableFlag(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266727747051", (node: INodeJS) => new _N_TypedImpl_GroupType(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266727773586", (node: INodeJS) => new _N_TypedImpl_GroupByOp(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266728974042", (node: INodeJS) => new _N_TypedImpl_GroupKeyTarget(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266729562040", (node: INodeJS) => new _N_TypedImpl_GroupMembersTarget(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266741050575", (node: INodeJS) => new _N_TypedImpl_InlineRecordType(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266741050660", (node: INodeJS) => new _N_TypedImpl_ProjectOp(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266741050664", (node: INodeJS) => new _N_TypedImpl_ProjectMember(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266742524311", (node: INodeJS) => new _N_TypedImpl_ProjectIt(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266746101180", (node: INodeJS) => new _N_TypedImpl_InlineRecordMemberAccess(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/5070313213710413779", (node: INodeJS) => new _N_TypedImpl_BuilderExpression(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/5070313213710413791", (node: INodeJS) => new _N_TypedImpl_BuilderElement(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/5070313213710413804", (node: INodeJS) => new _N_TypedImpl_FieldSetter(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/5070313213710414376", (node: INodeJS) => new _N_TypedImpl_BuilderAdapter(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/5070313213710414386", (node: INodeJS) => new _N_TypedImpl_RecordTypeAdapter(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/411710798111758079", (node: INodeJS) => new _N_TypedImpl_IFunctionContainer(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/411710798111762102", (node: INodeJS) => new _N_TypedImpl_AbstractFunctionAdapter(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/1665826838185532528", (node: INodeJS) => new _N_TypedImpl_ITopLevelContainer(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/4328199741083502486", (node: INodeJS) => new _N_TypedImpl_IRecordType(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/3788552209995580869", (node: INodeJS) => new _N_TypedImpl_IToplevelExprContentContainer(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/3788552209995580872", (node: INodeJS) => new _N_TypedImpl_AbstractToplevelExprAdapter(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/336196204780206752", (node: INodeJS) => new _N_TypedImpl_IFunctionLikeContainer(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/336196204780206756", (node: INodeJS) => new _N_TypedImpl_AbstractFunctionLikeAdapter(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/5912816019932129331", (node: INodeJS) => new _N_TypedImpl_EmptyMember(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8006404979731136903", (node: INodeJS) => new _N_TypedImpl_EnumIsInTarget(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8006404979731140557", (node: INodeJS) => new _N_TypedImpl_EnumIsInSelector(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/438389604712151896", (node: INodeJS) => new _N_TypedImpl_IDeclarationExtensionContext(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/5250171600077389559", (node: INodeJS) => new _N_TypedImpl_QualifierRef(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/2945473592442820328", (node: INodeJS) => new _N_TypedImpl_AllLitList(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/217046401488995528", (node: INodeJS) => new _N_TypedImpl_EnumIndexOp(node))
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
            export const INSTANCE = L_org_iets3_core_expr_toplevel.INSTANCE
            
                                    export interface N_Function extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_lambda.N_IFunctionLike, N_IToplevelExprContent, L_org_iets3_core_expr_base.N_IDocumentableWordProvider, L_com_mbeddr_mpsutil_interpreter.N_ITracerFrame, L_org_iets3_core_expr_base.N_ITraceRoot, L_org_iets3_core_expr_lambda.N_IJoinedBlockContext, L_org_iets3_core_expr_base.N_IMayAllowEffect, L_org_iets3_core_expr_base.N_IVoidContext, L_org_iets3_analysis_base.N_ISolvable, L_org_iets3_core_expr_lambda.N_IAllowLocalVariables, L_org_iets3_core_expr_base.N_IProgramLocationProvider {
                            _is_org_iets3_core_expr_toplevel_Function: boolean
                            ext_old: string | undefined
                        }
                        
                        export namespace N_Function {
                            export function isInstance(node: ITypedNode): node is N_Function {
                                return '_is_org_iets3_core_expr_toplevel_Function' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Function extends TypedNode implements N_Function {
                            public _is_org_iets3_core_expr_toplevel_Function: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_lambda_IFunctionLike: boolean = true
            public _is_com_mbeddr_core_base_IContainerOfUniqueNames: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_IOptionallyTyped: boolean = true
            public _is_org_iets3_core_expr_base_IContextAssistantTypeProvider: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ICanHaveTestCoverage: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_org_iets3_core_expr_base_IContracted: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_com_mbeddr_core_base_IDetectCycle: boolean = true
            public _is_org_iets3_core_expr_base_IDocumentableWordProvider: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_ITreeViewRoot: boolean = true
            public _is_com_mbeddr_core_base_ITreeViewable: boolean = true
            public _is_org_iets3_core_expr_toplevel_IToplevelExprContent: boolean = true
            public _is_com_mbeddr_core_base_IHasQualifiedName: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_ITraceRoot: boolean = true
            public _is_org_iets3_core_expr_lambda_IJoinedBlockContext: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_org_iets3_core_expr_base_IVoidContext: boolean = true
            public _is_org_iets3_analysis_base_ISolvable: boolean = true
            public _is_org_iets3_core_base_IDetectNeedToRunManually: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
            public _is_org_iets3_core_expr_lambda_IAllowLocalVariables: boolean = true
            public _is_org_iets3_core_expr_base_IProgramLocationProvider: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set ext(value: string | undefined) {
                                this.node.setPropertyValue("ext", value)
                            }
                            public get ext(): string | undefined {
                                return this.node.getPropertyValue("ext")
                            }
                            public args: ChildListAccessor<L_org_iets3_core_expr_lambda.N_FunctionArgument> = new ChildListAccessor(this.node, "args")
                            public body: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "body")
                            public effect: SingleChildAccessor<L_org_iets3_core_expr_lambda.N_EffectTag> = new SingleChildAccessor(this.node, "effect")
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
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "type")
                            public contract: SingleChildAccessor<L_org_iets3_core_expr_base.N_Contract> = new SingleChildAccessor(this.node, "contract")
                            public set __hash(value: string | undefined) {
                                this.node.setPropertyValue("__hash", value)
                            }
                            public get __hash(): string | undefined {
                                return this.node.getPropertyValue("__hash")
                            }
                            public set ext_old(value: string | undefined) {
                                this.node.setPropertyValue("ext_old", value)
                            }
                            public get ext_old(): string | undefined {
                                return this.node.getPropertyValue("ext_old")
                            }
                        }
                        
                        
                        export interface N_FunctionCall extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_ISSConstrainedValueRef, L_org_iets3_core_expr_base.N_ISSConstrainedValue, L_org_iets3_core_expr_lambda.N_IFunctionCall, L_com_mbeddr_mpsutil_interpreter.N_ITracerFrame, L_org_iets3_core_expr_base.N_ITraceRoot, L_org_iets3_analysis_base.N_ISolvable {
                            _is_org_iets3_core_expr_toplevel_FunctionCall: boolean
                            
                        }
                        
                        export namespace N_FunctionCall {
                            export function isInstance(node: ITypedNode): node is N_FunctionCall {
                                return '_is_org_iets3_core_expr_toplevel_FunctionCall' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FunctionCall extends TypedNode implements N_FunctionCall {
                            public _is_org_iets3_core_expr_toplevel_FunctionCall: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ISSConstrainedValueRef: boolean = true
            public _is_org_iets3_core_expr_base_ISSConstrainedValue: boolean = true
            public _is_org_iets3_core_expr_lambda_IFunctionCall: boolean = true
            public _is_org_iets3_core_expr_base_IRef: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_ITraceRoot: boolean = true
            public _is_org_iets3_analysis_base_ISolvable: boolean = true
            public _is_org_iets3_core_base_IDetectNeedToRunManually: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public args: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression> = new ChildListAccessor(this.node, "args")
                                                
                            public set __hash(value: string | undefined) {
                                this.node.setPropertyValue("__hash", value)
                            }
                            public get __hash(): string | undefined {
                                return this.node.getPropertyValue("__hash")
                            }
                        }
                        
                        
                        export interface N_FunRef extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_lambda.N_IFunctionRef {
                            _is_org_iets3_core_expr_toplevel_FunRef: boolean
                            
                        }
                        
                        export namespace N_FunRef {
                            export function isInstance(node: ITypedNode): node is N_FunRef {
                                return '_is_org_iets3_core_expr_toplevel_FunRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FunRef extends TypedNode implements N_FunRef {
                            public _is_org_iets3_core_expr_toplevel_FunRef: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_lambda_IFunctionRef: boolean = true
            public _is_org_iets3_core_expr_base_IRef: boolean = true
            public _is_org_iets3_core_expr_lambda_ILambdaLike: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
            
            export interface N_IFunctionScopeProvider extends ITypedNode {
                _is_org_iets3_core_expr_toplevel_IFunctionScopeProvider: boolean
                
            }
            
            export namespace N_IFunctionScopeProvider {
                export function isInstance(node: ITypedNode): node is N_IFunctionScopeProvider {
                    return '_is_org_iets3_core_expr_toplevel_IFunctionScopeProvider' in node;
                }
            }
            
            export class _N_TypedImpl_IFunctionScopeProvider extends TypedNode implements N_IFunctionScopeProvider {
                public _is_org_iets3_core_expr_toplevel_IFunctionScopeProvider: boolean = true
                
            }
            
                        
                        export interface N_IToplevelExprContent extends L_org_iets3_core_base.N_IValidNamedConcept, L_org_iets3_core_expr_base.N_IContainmentStackMember, L_com_mbeddr_core_base.N_IDocumentable, L_com_mbeddr_core_base.N_ICommentable, L_com_mbeddr_core_base.N_IHasQualifiedName {
                            _is_org_iets3_core_expr_toplevel_IToplevelExprContent: boolean
                            
                        }
                        
                        export namespace N_IToplevelExprContent {
                            export function isInstance(node: ITypedNode): node is N_IToplevelExprContent {
                                return '_is_org_iets3_core_expr_toplevel_IToplevelExprContent' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IToplevelExprContent extends TypedNode implements N_IToplevelExprContent {
                            public _is_org_iets3_core_expr_toplevel_IToplevelExprContent: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IHasQualifiedName: boolean = true
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
                        
                        
                        export interface N_ExtensionFunctionCall extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget, L_org_iets3_core_expr_base.N_IMayHaveEffect, L_org_iets3_core_expr_base.N_ISSConstrainedValue, L_org_iets3_analysis_base.N_ISolvable {
                            _is_org_iets3_core_expr_toplevel_ExtensionFunctionCall: boolean
                            args: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression>
                                
                        }
                        
                        export namespace N_ExtensionFunctionCall {
                            export function isInstance(node: ITypedNode): node is N_ExtensionFunctionCall {
                                return '_is_org_iets3_core_expr_toplevel_ExtensionFunctionCall' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ExtensionFunctionCall extends TypedNode implements N_ExtensionFunctionCall {
                            public _is_org_iets3_core_expr_toplevel_ExtensionFunctionCall: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_core_expr_base_ISSConstrainedValue: boolean = true
            public _is_org_iets3_analysis_base_ISolvable: boolean = true
            public _is_org_iets3_core_base_IDetectNeedToRunManually: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set __hash(value: string | undefined) {
                                this.node.setPropertyValue("__hash", value)
                            }
                            public get __hash(): string | undefined {
                                return this.node.getPropertyValue("__hash")
                            }
                            public args: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression> = new ChildListAccessor(this.node, "args")
                        }
                        
                        
                        export interface N_Constant extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IToplevelExprContent, L_org_iets3_core_expr_base.N_IOptionallyTyped, L_org_iets3_core_expr_base.N_ISSConstrainedValue, L_com_mbeddr_mpsutil_interpreter.N_ICanHaveTestCoverage, L_com_mbeddr_core_base.N_IDetectCycle, L_org_iets3_core_expr_base.N_ITraceRoot, L_org_iets3_core_expr_base.N_IMayAllowEffect, L_org_iets3_analysis_base.N_ISolvable, L_jetbrains_mps_lang_core.N_ISmartReferent {
                            _is_org_iets3_core_expr_toplevel_Constant: boolean
                            value: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_Constant {
                            export function isInstance(node: ITypedNode): node is N_Constant {
                                return '_is_org_iets3_core_expr_toplevel_Constant' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Constant extends TypedNode implements N_Constant {
                            public _is_org_iets3_core_expr_toplevel_Constant: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_toplevel_IToplevelExprContent: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IHasQualifiedName: boolean = true
            public _is_org_iets3_core_expr_base_IOptionallyTyped: boolean = true
            public _is_org_iets3_core_expr_base_IContextAssistantTypeProvider: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ICanHaveTestCoverage: boolean = true
            public _is_org_iets3_core_expr_base_ISSConstrainedValue: boolean = true
            public _is_com_mbeddr_core_base_IDetectCycle: boolean = true
            public _is_org_iets3_core_expr_base_ITraceRoot: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_org_iets3_analysis_base_ISolvable: boolean = true
            public _is_org_iets3_core_base_IDetectNeedToRunManually: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
            public _is_jetbrains_mps_lang_core_ISmartReferent: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "type")
                            public set __hash(value: string | undefined) {
                                this.node.setPropertyValue("__hash", value)
                            }
                            public get __hash(): string | undefined {
                                return this.node.getPropertyValue("__hash")
                            }
                            public value: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "value")
                        }
                        
            
            export interface N_IConstantScopeProvider extends ITypedNode {
                _is_org_iets3_core_expr_toplevel_IConstantScopeProvider: boolean
                
            }
            
            export namespace N_IConstantScopeProvider {
                export function isInstance(node: ITypedNode): node is N_IConstantScopeProvider {
                    return '_is_org_iets3_core_expr_toplevel_IConstantScopeProvider' in node;
                }
            }
            
            export class _N_TypedImpl_IConstantScopeProvider extends TypedNode implements N_IConstantScopeProvider {
                public _is_org_iets3_core_expr_toplevel_IConstantScopeProvider: boolean = true
                
            }
            
                        
                        export interface N_ConstantRef extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_IIsSingleSymbol, L_org_iets3_core_expr_base.N_ISSConstrainedValueRef, L_com_mbeddr_mpsutil_interpreter.N_ITracerFrame, L_org_iets3_core_expr_base.N_IRef {
                            _is_org_iets3_core_expr_toplevel_ConstantRef: boolean
                                                
                        }
                        
                        export namespace N_ConstantRef {
                            export function isInstance(node: ITypedNode): node is N_ConstantRef {
                                return '_is_org_iets3_core_expr_toplevel_ConstantRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ConstantRef extends TypedNode implements N_ConstantRef {
                            public _is_org_iets3_core_expr_toplevel_ConstantRef: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IIsSingleSymbol: boolean = true
            public _is_org_iets3_core_expr_base_ISSConstrainedValueRef: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_IRef: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_EmptyToplevelContent extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IToplevelExprContent, L_com_mbeddr_core_base.N_IEmpty {
                            _is_org_iets3_core_expr_toplevel_EmptyToplevelContent: boolean
                            
                        }
                        
                        export namespace N_EmptyToplevelContent {
                            export function isInstance(node: ITypedNode): node is N_EmptyToplevelContent {
                                return '_is_org_iets3_core_expr_toplevel_EmptyToplevelContent' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EmptyToplevelContent extends TypedNode implements N_EmptyToplevelContent {
                            public _is_org_iets3_core_expr_toplevel_EmptyToplevelContent: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_toplevel_IToplevelExprContent: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IHasQualifiedName: boolean = true
            public _is_com_mbeddr_core_base_IEmpty: boolean = true
            public _is_jetbrains_mps_lang_core_ISuppressErrors: boolean = true
            public _is_com_mbeddr_core_base_IHideFromOutline: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                        
                        
                        export interface N_RecordDeclaration extends N_AbstractTypeDeclaration, N_IRecordDeclaration {
                            _is_org_iets3_core_expr_toplevel_RecordDeclaration: boolean
                            members_old: ChildListAccessor<N_IRecordMember>
            refFlag: SingleChildAccessor<N_ReferenceableFlag>
                        }
                        
                        export namespace N_RecordDeclaration {
                            export function isInstance(node: ITypedNode): node is N_RecordDeclaration {
                                return '_is_org_iets3_core_expr_toplevel_RecordDeclaration' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RecordDeclaration extends TypedNode implements N_RecordDeclaration {
                            public _is_org_iets3_core_expr_toplevel_RecordDeclaration: boolean = true
            public _is_org_iets3_core_expr_toplevel_AbstractTypeDeclaration: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_toplevel_IToplevelExprContent: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IHasQualifiedName: boolean = true
            public _is_org_iets3_core_expr_base_IDocumentableWordProvider: boolean = true
            public _is_org_iets3_core_expr_toplevel_IRecordDeclaration: boolean = true
            public _is_com_mbeddr_core_base_IContainerOfUniqueNames: boolean = true
            public _is_org_iets3_core_expr_base_IContracted: boolean = true
            public _is_org_iets3_core_expr_toplevel_IRecordMemberScopeProvider: boolean = true
            public _is_com_mbeddr_core_base_IVisibleElementProvider: boolean = true
            public _is_com_mbeddr_core_base_IDetectCycle: boolean = true
            public _is_org_iets3_core_expr_base_IProgramLocationProvider: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                            public members: ChildListAccessor<N_IRecordMember> = new ChildListAccessor(this.node, "members")
                            public contract: SingleChildAccessor<L_org_iets3_core_expr_base.N_Contract> = new SingleChildAccessor(this.node, "contract")
                            public members_old: ChildListAccessor<N_IRecordMember> = new ChildListAccessor(this.node, "members_old")
                            public refFlag: SingleChildAccessor<N_ReferenceableFlag> = new SingleChildAccessor(this.node, "refFlag")
                        }
                        
                        
                        export interface N_RecordMember extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IRecordMember, L_org_iets3_core_expr_base.N_ITyped, L_com_mbeddr_core_base.N_IDocumentable {
                            _is_org_iets3_core_expr_toplevel_RecordMember: boolean
                            
                        }
                        
                        export namespace N_RecordMember {
                            export function isInstance(node: ITypedNode): node is N_RecordMember {
                                return '_is_org_iets3_core_expr_toplevel_RecordMember' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RecordMember extends TypedNode implements N_RecordMember {
                            public _is_org_iets3_core_expr_toplevel_RecordMember: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_toplevel_IRecordMember: boolean = true
            public _is_org_iets3_core_expr_path_IMember: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_ITypeable: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IContracted: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IProgramLocationProvider: boolean = true
            public _is_org_iets3_core_expr_base_ITyped: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                            public contract: SingleChildAccessor<L_org_iets3_core_expr_base.N_Contract> = new SingleChildAccessor(this.node, "contract")
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "type")
                        }
                        
                        
                        export interface N_RecordType extends L_org_iets3_core_expr_base.N_Type, N_IRecordType, L_org_iets3_core_expr_base.N_ITypeSupportsDefaultValue {
                            _is_org_iets3_core_expr_toplevel_RecordType: boolean
                                                
                        }
                        
                        export namespace N_RecordType {
                            export function isInstance(node: ITypedNode): node is N_RecordType {
                                return '_is_org_iets3_core_expr_toplevel_RecordType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RecordType extends TypedNode implements N_RecordType {
                            public _is_org_iets3_core_expr_toplevel_RecordType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_toplevel_IRecordType: boolean = true
            public _is_org_iets3_core_expr_path_ICanHaveMembersType: boolean = true
            public _is_org_iets3_core_expr_base_IReferenceableType: boolean = true
            public _is_org_iets3_core_expr_base_IComplexTypeSupportsEquals: boolean = true
            public _is_org_iets3_core_expr_base_ITypeSupportsDefaultValue: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
            
            export interface N_IRecordScopeProvider extends ITypedNode {
                _is_org_iets3_core_expr_toplevel_IRecordScopeProvider: boolean
                
            }
            
            export namespace N_IRecordScopeProvider {
                export function isInstance(node: ITypedNode): node is N_IRecordScopeProvider {
                    return '_is_org_iets3_core_expr_toplevel_IRecordScopeProvider' in node;
                }
            }
            
            export class _N_TypedImpl_IRecordScopeProvider extends TypedNode implements N_IRecordScopeProvider {
                public _is_org_iets3_core_expr_toplevel_IRecordScopeProvider: boolean = true
                
            }
            
                        
                        export interface N_RecordLiteral extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_IStructuredSyntax, L_org_iets3_core_expr_base.N_ITyped, L_com_mbeddr_mpsutil_interpreter.N_ICanHaveTestCoverage, L_org_iets3_core_expr_base.N_ILiteral, L_com_mbeddr_mpsutil_interpreter.N_ITracerFrame, L_org_iets3_core_expr_base.N_IMayAllowEffect, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_toplevel_RecordLiteral: boolean
                            memberValues: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_RecordLiteral {
                            export function isInstance(node: ITypedNode): node is N_RecordLiteral {
                                return '_is_org_iets3_core_expr_toplevel_RecordLiteral' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RecordLiteral extends TypedNode implements N_RecordLiteral {
                            public _is_org_iets3_core_expr_toplevel_RecordLiteral: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IStructuredSyntax: boolean = true
            public _is_org_iets3_core_expr_base_IWantNewLine: boolean = true
            public _is_org_iets3_core_expr_base_ITyped: boolean = true
            public _is_org_iets3_core_expr_base_ITypeable: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ICanHaveTestCoverage: boolean = true
            public _is_org_iets3_core_expr_base_ILiteral: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITrivialNode: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "type")
                            public memberValues: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression> = new ChildListAccessor(this.node, "memberValues")
                        }
                        
                        
                        export interface N_SectionMarker extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IToplevelExprContent {
                            _is_org_iets3_core_expr_toplevel_SectionMarker: boolean
                            label: string | undefined
                        }
                        
                        export namespace N_SectionMarker {
                            export function isInstance(node: ITypedNode): node is N_SectionMarker {
                                return '_is_org_iets3_core_expr_toplevel_SectionMarker' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SectionMarker extends TypedNode implements N_SectionMarker {
                            public _is_org_iets3_core_expr_toplevel_SectionMarker: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_toplevel_IToplevelExprContent: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IHasQualifiedName: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                            public set label(value: string | undefined) {
                                this.node.setPropertyValue("label", value)
                            }
                            public get label(): string | undefined {
                                return this.node.getPropertyValue("label")
                            }
                        }
                        
                        
                        export interface N_Typedef extends N_AbstractTypeDeclaration, L_org_iets3_core_expr_base.N_IContracted, L_com_mbeddr_core_base.N_IDetectCycle, N_IRecordMemberScopeProvider, L_com_mbeddr_core_base.N_IVisibleElementProvider, L_org_iets3_analysis_base.N_ISolvable {
                            _is_org_iets3_core_expr_toplevel_Typedef: boolean
                            originalType: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
                        }
                        
                        export namespace N_Typedef {
                            export function isInstance(node: ITypedNode): node is N_Typedef {
                                return '_is_org_iets3_core_expr_toplevel_Typedef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Typedef extends TypedNode implements N_Typedef {
                            public _is_org_iets3_core_expr_toplevel_Typedef: boolean = true
            public _is_org_iets3_core_expr_toplevel_AbstractTypeDeclaration: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_toplevel_IToplevelExprContent: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IHasQualifiedName: boolean = true
            public _is_org_iets3_core_expr_base_IDocumentableWordProvider: boolean = true
            public _is_org_iets3_core_expr_base_IContracted: boolean = true
            public _is_com_mbeddr_core_base_IDetectCycle: boolean = true
            public _is_org_iets3_core_expr_toplevel_IRecordMemberScopeProvider: boolean = true
            public _is_com_mbeddr_core_base_IVisibleElementProvider: boolean = true
            public _is_org_iets3_analysis_base_ISolvable: boolean = true
            public _is_org_iets3_core_base_IDetectNeedToRunManually: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                            public contract: SingleChildAccessor<L_org_iets3_core_expr_base.N_Contract> = new SingleChildAccessor(this.node, "contract")
                            public set __hash(value: string | undefined) {
                                this.node.setPropertyValue("__hash", value)
                            }
                            public get __hash(): string | undefined {
                                return this.node.getPropertyValue("__hash")
                            }
                            public originalType: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "originalType")
                        }
                        
            
            export interface N_ITypedefScopeProvider extends ITypedNode {
                _is_org_iets3_core_expr_toplevel_ITypedefScopeProvider: boolean
                
            }
            
            export namespace N_ITypedefScopeProvider {
                export function isInstance(node: ITypedNode): node is N_ITypedefScopeProvider {
                    return '_is_org_iets3_core_expr_toplevel_ITypedefScopeProvider' in node;
                }
            }
            
            export class _N_TypedImpl_ITypedefScopeProvider extends TypedNode implements N_ITypedefScopeProvider {
                public _is_org_iets3_core_expr_toplevel_ITypedefScopeProvider: boolean = true
                
            }
            
                        
                        export interface N_TypedefType extends L_org_iets3_core_expr_base.N_Type, L_org_iets3_core_expr_base.N_ISSDelegatingType {
                            _is_org_iets3_core_expr_toplevel_TypedefType: boolean
                                                
                        }
                        
                        export namespace N_TypedefType {
                            export function isInstance(node: ITypedNode): node is N_TypedefType {
                                return '_is_org_iets3_core_expr_toplevel_TypedefType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TypedefType extends TypedNode implements N_TypedefType {
                            public _is_org_iets3_core_expr_toplevel_TypedefType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_ISSDelegatingType: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_TypedefContractValExpr extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_ISSItValueRef {
                            _is_org_iets3_core_expr_toplevel_TypedefContractValExpr: boolean
                            
                        }
                        
                        export namespace N_TypedefContractValExpr {
                            export function isInstance(node: ITypedNode): node is N_TypedefContractValExpr {
                                return '_is_org_iets3_core_expr_toplevel_TypedefContractValExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TypedefContractValExpr extends TypedNode implements N_TypedefContractValExpr {
                            public _is_org_iets3_core_expr_toplevel_TypedefContractValExpr: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ISSItValueRef: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_RecordMemberRefInConstraint extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_toplevel_RecordMemberRefInConstraint: boolean
                                                
                        }
                        
                        export namespace N_RecordMemberRefInConstraint {
                            export function isInstance(node: ITypedNode): node is N_RecordMemberRefInConstraint {
                                return '_is_org_iets3_core_expr_toplevel_RecordMemberRefInConstraint' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RecordMemberRefInConstraint extends TypedNode implements N_RecordMemberRefInConstraint {
                            public _is_org_iets3_core_expr_toplevel_RecordMemberRefInConstraint: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_RecordChangeTarget extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_toplevel_RecordChangeTarget: boolean
                            setters: ChildListAccessor<N_NewValueSetter>
                        }
                        
                        export namespace N_RecordChangeTarget {
                            export function isInstance(node: ITypedNode): node is N_RecordChangeTarget {
                                return '_is_org_iets3_core_expr_toplevel_RecordChangeTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RecordChangeTarget extends TypedNode implements N_RecordChangeTarget {
                            public _is_org_iets3_core_expr_toplevel_RecordChangeTarget: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public setters: ChildListAccessor<N_NewValueSetter> = new ChildListAccessor(this.node, "setters")
                        }
                        
                        
                        export interface N_NewValueSetter extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_toplevel_NewValueSetter: boolean
                            newValue: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                                
                        }
                        
                        export namespace N_NewValueSetter {
                            export function isInstance(node: ITypedNode): node is N_NewValueSetter {
                                return '_is_org_iets3_core_expr_toplevel_NewValueSetter' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NewValueSetter extends TypedNode implements N_NewValueSetter {
                            public _is_org_iets3_core_expr_toplevel_NewValueSetter: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public newValue: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "newValue")
                        }
                        
                        
                        export interface N_OldValueExpr extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_toplevel_OldValueExpr: boolean
                            
                        }
                        
                        export namespace N_OldValueExpr {
                            export function isInstance(node: ITypedNode): node is N_OldValueExpr {
                                return '_is_org_iets3_core_expr_toplevel_OldValueExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_OldValueExpr extends TypedNode implements N_OldValueExpr {
                            public _is_org_iets3_core_expr_toplevel_OldValueExpr: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_OldMemberRef extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_toplevel_OldMemberRef: boolean
                                                
                        }
                        
                        export namespace N_OldMemberRef {
                            export function isInstance(node: ITypedNode): node is N_OldMemberRef {
                                return '_is_org_iets3_core_expr_toplevel_OldMemberRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_OldMemberRef extends TypedNode implements N_OldMemberRef {
                            public _is_org_iets3_core_expr_toplevel_OldMemberRef: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_EnumDeclaration extends N_AbstractTypeDeclaration, L_com_mbeddr_core_base.N_IContainerOfUniqueNames, L_jetbrains_mps_lang_core.N_ISmartReferent {
                            _is_org_iets3_core_expr_toplevel_EnumDeclaration: boolean
                            qualified: string | undefined
            type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
            literals: ChildListAccessor<N_EnumLiteral>
                        }
                        
                        export namespace N_EnumDeclaration {
                            export function isInstance(node: ITypedNode): node is N_EnumDeclaration {
                                return '_is_org_iets3_core_expr_toplevel_EnumDeclaration' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EnumDeclaration extends TypedNode implements N_EnumDeclaration {
                            public _is_org_iets3_core_expr_toplevel_EnumDeclaration: boolean = true
            public _is_org_iets3_core_expr_toplevel_AbstractTypeDeclaration: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_toplevel_IToplevelExprContent: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IHasQualifiedName: boolean = true
            public _is_org_iets3_core_expr_base_IDocumentableWordProvider: boolean = true
            public _is_com_mbeddr_core_base_IContainerOfUniqueNames: boolean = true
            public _is_jetbrains_mps_lang_core_ISmartReferent: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                            public set qualified(value: string | undefined) {
                                this.node.setPropertyValue("qualified", value)
                            }
                            public get qualified(): string | undefined {
                                return this.node.getPropertyValue("qualified")
                            }
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "type")
                            public literals: ChildListAccessor<N_EnumLiteral> = new ChildListAccessor(this.node, "literals")
                        }
                        
                        
                        export interface N_EnumLiteral extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_base.N_IValidNamedConcept {
                            _is_org_iets3_core_expr_toplevel_EnumLiteral: boolean
                            value: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_EnumLiteral {
                            export function isInstance(node: ITypedNode): node is N_EnumLiteral {
                                return '_is_org_iets3_core_expr_toplevel_EnumLiteral' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EnumLiteral extends TypedNode implements N_EnumLiteral {
                            public _is_org_iets3_core_expr_toplevel_EnumLiteral: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                            public value: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "value")
                        }
                        
                        
                        export interface N_EnumType extends L_org_iets3_core_expr_base.N_Type, L_org_iets3_core_expr_base.N_ITypeSupportsDefaultValue, L_org_iets3_core_expr_base.N_ITypeSupportsProposals {
                            _is_org_iets3_core_expr_toplevel_EnumType: boolean
                                                
                        }
                        
                        export namespace N_EnumType {
                            export function isInstance(node: ITypedNode): node is N_EnumType {
                                return '_is_org_iets3_core_expr_toplevel_EnumType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EnumType extends TypedNode implements N_EnumType {
                            public _is_org_iets3_core_expr_toplevel_EnumType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_ITypeSupportsDefaultValue: boolean = true
            public _is_org_iets3_core_expr_base_ITypeSupportsProposals: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
            
            export interface N_IEnumScopeProvider extends ITypedNode {
                _is_org_iets3_core_expr_toplevel_IEnumScopeProvider: boolean
                
            }
            
            export namespace N_IEnumScopeProvider {
                export function isInstance(node: ITypedNode): node is N_IEnumScopeProvider {
                    return '_is_org_iets3_core_expr_toplevel_IEnumScopeProvider' in node;
                }
            }
            
            export class _N_TypedImpl_IEnumScopeProvider extends TypedNode implements N_IEnumScopeProvider {
                public _is_org_iets3_core_expr_toplevel_IEnumScopeProvider: boolean = true
                
            }
            
                        
                        export interface N_EnumLiteralRef extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_toplevel_EnumLiteralRef: boolean
                                                
                        }
                        
                        export namespace N_EnumLiteralRef {
                            export function isInstance(node: ITypedNode): node is N_EnumLiteralRef {
                                return '_is_org_iets3_core_expr_toplevel_EnumLiteralRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EnumLiteralRef extends TypedNode implements N_EnumLiteralRef {
                            public _is_org_iets3_core_expr_toplevel_EnumLiteralRef: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_EnumValueAccessor extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget {
                            _is_org_iets3_core_expr_toplevel_EnumValueAccessor: boolean
                            
                        }
                        
                        export namespace N_EnumValueAccessor {
                            export function isInstance(node: ITypedNode): node is N_EnumValueAccessor {
                                return '_is_org_iets3_core_expr_toplevel_EnumValueAccessor' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EnumValueAccessor extends TypedNode implements N_EnumValueAccessor {
                            public _is_org_iets3_core_expr_toplevel_EnumValueAccessor: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_IRecordMember extends L_org_iets3_core_expr_path.N_IMember, L_org_iets3_core_base.N_IValidNamedConcept, L_org_iets3_core_expr_base.N_ITypeable, L_com_mbeddr_core_base.N_ICommentable, L_org_iets3_core_expr_base.N_IContracted, L_com_mbeddr_core_base.N_IDocumentable, L_org_iets3_core_expr_base.N_IProgramLocationProvider {
                            _is_org_iets3_core_expr_toplevel_IRecordMember: boolean
                            
                        }
                        
                        export namespace N_IRecordMember {
                            export function isInstance(node: ITypedNode): node is N_IRecordMember {
                                return '_is_org_iets3_core_expr_toplevel_IRecordMember' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IRecordMember extends TypedNode implements N_IRecordMember {
                            public _is_org_iets3_core_expr_toplevel_IRecordMember: boolean = true
            public _is_org_iets3_core_expr_path_IMember: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_ITypeable: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IContracted: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IProgramLocationProvider: boolean = true
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
                            public contract: SingleChildAccessor<L_org_iets3_core_expr_base.N_Contract> = new SingleChildAccessor(this.node, "contract")
                        }
                        
                        
                        export interface N_IRecordDeclaration extends N_IToplevelExprContent, L_com_mbeddr_core_base.N_IContainerOfUniqueNames, L_org_iets3_core_expr_base.N_IContracted, N_IRecordMemberScopeProvider, L_com_mbeddr_core_base.N_IVisibleElementProvider, L_com_mbeddr_core_base.N_IDetectCycle, L_org_iets3_core_expr_base.N_IDocumentableWordProvider, L_org_iets3_core_expr_base.N_IProgramLocationProvider {
                            _is_org_iets3_core_expr_toplevel_IRecordDeclaration: boolean
                            members: ChildListAccessor<N_IRecordMember>
                        }
                        
                        export namespace N_IRecordDeclaration {
                            export function isInstance(node: ITypedNode): node is N_IRecordDeclaration {
                                return '_is_org_iets3_core_expr_toplevel_IRecordDeclaration' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IRecordDeclaration extends TypedNode implements N_IRecordDeclaration {
                            public _is_org_iets3_core_expr_toplevel_IRecordDeclaration: boolean = true
            public _is_org_iets3_core_expr_toplevel_IToplevelExprContent: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IHasQualifiedName: boolean = true
            public _is_com_mbeddr_core_base_IContainerOfUniqueNames: boolean = true
            public _is_org_iets3_core_expr_base_IContracted: boolean = true
            public _is_org_iets3_core_expr_toplevel_IRecordMemberScopeProvider: boolean = true
            public _is_com_mbeddr_core_base_IVisibleElementProvider: boolean = true
            public _is_com_mbeddr_core_base_IDetectCycle: boolean = true
            public _is_org_iets3_core_expr_base_IDocumentableWordProvider: boolean = true
            public _is_org_iets3_core_expr_base_IProgramLocationProvider: boolean = true
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
                            public contract: SingleChildAccessor<L_org_iets3_core_expr_base.N_Contract> = new SingleChildAccessor(this.node, "contract")
                            public members: ChildListAccessor<N_IRecordMember> = new ChildListAccessor(this.node, "members")
                        }
                        
                        
                        export interface N_AbstractTypeDeclaration extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IToplevelExprContent, L_org_iets3_core_expr_base.N_IDocumentableWordProvider {
                            _is_org_iets3_core_expr_toplevel_AbstractTypeDeclaration: boolean
                            
                        }
                        
                        export namespace N_AbstractTypeDeclaration {
                            export function isInstance(node: ITypedNode): node is N_AbstractTypeDeclaration {
                                return '_is_org_iets3_core_expr_toplevel_AbstractTypeDeclaration' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractTypeDeclaration extends TypedNode implements N_AbstractTypeDeclaration {
                            public _is_org_iets3_core_expr_toplevel_AbstractTypeDeclaration: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_toplevel_IToplevelExprContent: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IHasQualifiedName: boolean = true
            public _is_org_iets3_core_expr_base_IDocumentableWordProvider: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                        
            
            export interface N_IRecordMemberScopeProvider extends ITypedNode {
                _is_org_iets3_core_expr_toplevel_IRecordMemberScopeProvider: boolean
                
            }
            
            export namespace N_IRecordMemberScopeProvider {
                export function isInstance(node: ITypedNode): node is N_IRecordMemberScopeProvider {
                    return '_is_org_iets3_core_expr_toplevel_IRecordMemberScopeProvider' in node;
                }
            }
            
            export class _N_TypedImpl_IRecordMemberScopeProvider extends TypedNode implements N_IRecordMemberScopeProvider {
                public _is_org_iets3_core_expr_toplevel_IRecordMemberScopeProvider: boolean = true
                
            }
            
                        
                        export interface N_EnumIsTarget extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget {
                            _is_org_iets3_core_expr_toplevel_EnumIsTarget: boolean
                                                
                        }
                        
                        export namespace N_EnumIsTarget {
                            export function isInstance(node: ITypedNode): node is N_EnumIsTarget {
                                return '_is_org_iets3_core_expr_toplevel_EnumIsTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EnumIsTarget extends TypedNode implements N_EnumIsTarget {
                            public _is_org_iets3_core_expr_toplevel_EnumIsTarget: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_Library extends L_com_mbeddr_core_base.N_Chunk, L_com_mbeddr_core_base.N_IContainerOfUniqueNames, L_org_iets3_core_expr_base.N_IContainmentStackMember, L_org_iets3_core_expr_base.N_IDocumentableWordContainer, L_com_mbeddr_core_base.N_IVisibleElementProvider, L_org_iets3_core_expr_base.N_IMayAllowEffect, L_org_iets3_analysis_base.N_IUseSolver {
                            _is_org_iets3_core_expr_toplevel_Library: boolean
                            contents: ChildListAccessor<N_IToplevelExprContent>
            imports: ChildListAccessor<L_com_mbeddr_core_base.N_DefaultGenericChunkDependency>
                        }
                        
                        export namespace N_Library {
                            export function isInstance(node: ITypedNode): node is N_Library {
                                return '_is_org_iets3_core_expr_toplevel_Library' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Library extends TypedNode implements N_Library {
                            public _is_org_iets3_core_expr_toplevel_Library: boolean = true
            public _is_com_mbeddr_core_base_Chunk: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_IIdentifierNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_com_mbeddr_core_base_IVisibleElementProvider: boolean = true
            public _is_com_mbeddr_core_base_ILOCCountProvider: boolean = true
            public _is_com_mbeddr_core_base_ITreeViewRoot: boolean = true
            public _is_com_mbeddr_core_base_ITreeViewable: boolean = true
            public _is_com_mbeddr_core_base_IDetectCycle: boolean = true
            public _is_com_mbeddr_mpsutil_jung_IJGraphProvider: boolean = true
            public _is_com_mbeddr_core_base_IContainerOfUniqueNames: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_org_iets3_core_expr_base_IDocumentableWordContainer: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_org_iets3_analysis_base_IUseSolver: boolean = true
                                            public constraints: ChildListAccessor<L_com_mbeddr_core_base.N_ChunkDependencyConstraint> = new ChildListAccessor(this.node, "constraints")
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                            public contents: ChildListAccessor<N_IToplevelExprContent> = new ChildListAccessor(this.node, "contents")
                            public imports: ChildListAccessor<L_com_mbeddr_core_base.N_DefaultGenericChunkDependency> = new ChildListAccessor(this.node, "imports")
                        }
                        
                        
                        export interface N_ReferenceableFlag extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_toplevel_ReferenceableFlag: boolean
                                                
                        }
                        
                        export namespace N_ReferenceableFlag {
                            export function isInstance(node: ITypedNode): node is N_ReferenceableFlag {
                                return '_is_org_iets3_core_expr_toplevel_ReferenceableFlag' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ReferenceableFlag extends TypedNode implements N_ReferenceableFlag {
                            public _is_org_iets3_core_expr_toplevel_ReferenceableFlag: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_GroupType extends L_org_iets3_core_expr_base.N_Type {
                            _is_org_iets3_core_expr_toplevel_GroupType: boolean
                            keyType: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
            memberType: SingleChildAccessor<N_IRecordType>
                        }
                        
                        export namespace N_GroupType {
                            export function isInstance(node: ITypedNode): node is N_GroupType {
                                return '_is_org_iets3_core_expr_toplevel_GroupType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_GroupType extends TypedNode implements N_GroupType {
                            public _is_org_iets3_core_expr_toplevel_GroupType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public keyType: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "keyType")
                            public memberType: SingleChildAccessor<N_IRecordType> = new SingleChildAccessor(this.node, "memberType")
                        }
                        
                        
                        export interface N_GroupByOp extends L_org_iets3_core_expr_collections.N_OneArgCollectionOp, L_org_iets3_core_expr_lambda.N_IShortLambdaContainer, L_org_iets3_core_expr_base.N_IMayAllowEffect {
                            _is_org_iets3_core_expr_toplevel_GroupByOp: boolean
                            
                        }
                        
                        export namespace N_GroupByOp {
                            export function isInstance(node: ITypedNode): node is N_GroupByOp {
                                return '_is_org_iets3_core_expr_toplevel_GroupByOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_GroupByOp extends TypedNode implements N_GroupByOp {
                            public _is_org_iets3_core_expr_toplevel_GroupByOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_lambda_IShortLambdaContainer: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
                                            public arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "arg")
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_GroupKeyTarget extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget {
                            _is_org_iets3_core_expr_toplevel_GroupKeyTarget: boolean
                            
                        }
                        
                        export namespace N_GroupKeyTarget {
                            export function isInstance(node: ITypedNode): node is N_GroupKeyTarget {
                                return '_is_org_iets3_core_expr_toplevel_GroupKeyTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_GroupKeyTarget extends TypedNode implements N_GroupKeyTarget {
                            public _is_org_iets3_core_expr_toplevel_GroupKeyTarget: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_GroupMembersTarget extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget {
                            _is_org_iets3_core_expr_toplevel_GroupMembersTarget: boolean
                            
                        }
                        
                        export namespace N_GroupMembersTarget {
                            export function isInstance(node: ITypedNode): node is N_GroupMembersTarget {
                                return '_is_org_iets3_core_expr_toplevel_GroupMembersTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_GroupMembersTarget extends TypedNode implements N_GroupMembersTarget {
                            public _is_org_iets3_core_expr_toplevel_GroupMembersTarget: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_InlineRecordType extends L_org_iets3_core_expr_base.N_Type {
                            _is_org_iets3_core_expr_toplevel_InlineRecordType: boolean
                            members: ChildListAccessor<N_IRecordMember>
                        }
                        
                        export namespace N_InlineRecordType {
                            export function isInstance(node: ITypedNode): node is N_InlineRecordType {
                                return '_is_org_iets3_core_expr_toplevel_InlineRecordType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_InlineRecordType extends TypedNode implements N_InlineRecordType {
                            public _is_org_iets3_core_expr_toplevel_InlineRecordType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public members: ChildListAccessor<N_IRecordMember> = new ChildListAccessor(this.node, "members")
                        }
                        
                        
                        export interface N_ProjectOp extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_collections.N_ICollectionOp {
                            _is_org_iets3_core_expr_toplevel_ProjectOp: boolean
                            members: ChildListAccessor<N_ProjectMember>
                        }
                        
                        export namespace N_ProjectOp {
                            export function isInstance(node: ITypedNode): node is N_ProjectOp {
                                return '_is_org_iets3_core_expr_toplevel_ProjectOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ProjectOp extends TypedNode implements N_ProjectOp {
                            public _is_org_iets3_core_expr_toplevel_ProjectOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public members: ChildListAccessor<N_ProjectMember> = new ChildListAccessor(this.node, "members")
                        }
                        
                        
                        export interface N_ProjectMember extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_base.N_IValidNamedConcept {
                            _is_org_iets3_core_expr_toplevel_ProjectMember: boolean
                            expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_ProjectMember {
                            export function isInstance(node: ITypedNode): node is N_ProjectMember {
                                return '_is_org_iets3_core_expr_toplevel_ProjectMember' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ProjectMember extends TypedNode implements N_ProjectMember {
                            public _is_org_iets3_core_expr_toplevel_ProjectMember: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "expr")
                        }
                        
                        
                        export interface N_ProjectIt extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_toplevel_ProjectIt: boolean
                            
                        }
                        
                        export namespace N_ProjectIt {
                            export function isInstance(node: ITypedNode): node is N_ProjectIt {
                                return '_is_org_iets3_core_expr_toplevel_ProjectIt' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ProjectIt extends TypedNode implements N_ProjectIt {
                            public _is_org_iets3_core_expr_toplevel_ProjectIt: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_InlineRecordMemberAccess extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget, L_org_iets3_core_base.N_IValidNamedConcept {
                            _is_org_iets3_core_expr_toplevel_InlineRecordMemberAccess: boolean
                            
                        }
                        
                        export namespace N_InlineRecordMemberAccess {
                            export function isInstance(node: ITypedNode): node is N_InlineRecordMemberAccess {
                                return '_is_org_iets3_core_expr_toplevel_InlineRecordMemberAccess' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_InlineRecordMemberAccess extends TypedNode implements N_InlineRecordMemberAccess {
                            public _is_org_iets3_core_expr_toplevel_InlineRecordMemberAccess: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                        
                        
                        export interface N_BuilderExpression extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_toplevel_BuilderExpression: boolean
                            adapted: SingleChildAccessor<N_BuilderAdapter>
            elements: ChildListAccessor<N_BuilderElement>
                        }
                        
                        export namespace N_BuilderExpression {
                            export function isInstance(node: ITypedNode): node is N_BuilderExpression {
                                return '_is_org_iets3_core_expr_toplevel_BuilderExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BuilderExpression extends TypedNode implements N_BuilderExpression {
                            public _is_org_iets3_core_expr_toplevel_BuilderExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public adapted: SingleChildAccessor<N_BuilderAdapter> = new SingleChildAccessor(this.node, "adapted")
                            public elements: ChildListAccessor<N_BuilderElement> = new ChildListAccessor(this.node, "elements")
                        }
                        
                        
                        export interface N_BuilderElement extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_toplevel_BuilderElement: boolean
                            
                        }
                        
                        export namespace N_BuilderElement {
                            export function isInstance(node: ITypedNode): node is N_BuilderElement {
                                return '_is_org_iets3_core_expr_toplevel_BuilderElement' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BuilderElement extends TypedNode implements N_BuilderElement {
                            public _is_org_iets3_core_expr_toplevel_BuilderElement: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_FieldSetter extends N_BuilderElement {
                            _is_org_iets3_core_expr_toplevel_FieldSetter: boolean
                            value: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                                
                        }
                        
                        export namespace N_FieldSetter {
                            export function isInstance(node: ITypedNode): node is N_FieldSetter {
                                return '_is_org_iets3_core_expr_toplevel_FieldSetter' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FieldSetter extends TypedNode implements N_FieldSetter {
                            public _is_org_iets3_core_expr_toplevel_FieldSetter: boolean = true
            public _is_org_iets3_core_expr_toplevel_BuilderElement: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public value: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "value")
                        }
                        
                        
                        export interface N_BuilderAdapter extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_toplevel_BuilderAdapter: boolean
                            
                        }
                        
                        export namespace N_BuilderAdapter {
                            export function isInstance(node: ITypedNode): node is N_BuilderAdapter {
                                return '_is_org_iets3_core_expr_toplevel_BuilderAdapter' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BuilderAdapter extends TypedNode implements N_BuilderAdapter {
                            public _is_org_iets3_core_expr_toplevel_BuilderAdapter: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
                        
                        export interface N_RecordTypeAdapter extends N_BuilderAdapter, L_com_mbeddr_mpsutil_interpreter.N_ICanHaveTestCoverage {
                            _is_org_iets3_core_expr_toplevel_RecordTypeAdapter: boolean
                            type: SingleChildAccessor<N_IRecordType>
                        }
                        
                        export namespace N_RecordTypeAdapter {
                            export function isInstance(node: ITypedNode): node is N_RecordTypeAdapter {
                                return '_is_org_iets3_core_expr_toplevel_RecordTypeAdapter' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RecordTypeAdapter extends TypedNode implements N_RecordTypeAdapter {
                            public _is_org_iets3_core_expr_toplevel_RecordTypeAdapter: boolean = true
            public _is_org_iets3_core_expr_toplevel_BuilderAdapter: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ICanHaveTestCoverage: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public type: SingleChildAccessor<N_IRecordType> = new SingleChildAccessor(this.node, "type")
                        }
                        
                        
                        export interface N_IFunctionContainer extends L_com_mbeddr_core_base.N_IVisibleElementProvider {
                            _is_org_iets3_core_expr_toplevel_IFunctionContainer: boolean
                            
                        }
                        
                        export namespace N_IFunctionContainer {
                            export function isInstance(node: ITypedNode): node is N_IFunctionContainer {
                                return '_is_org_iets3_core_expr_toplevel_IFunctionContainer' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IFunctionContainer extends TypedNode implements N_IFunctionContainer {
                            public _is_org_iets3_core_expr_toplevel_IFunctionContainer: boolean = true
            public _is_com_mbeddr_core_base_IVisibleElementProvider: boolean = true
                            
                        }
                        
                        
                        export interface N_AbstractFunctionAdapter extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IMayAllowEffect {
                            _is_org_iets3_core_expr_toplevel_AbstractFunctionAdapter: boolean
                            fun: SingleChildAccessor<N_Function>
                        }
                        
                        export namespace N_AbstractFunctionAdapter {
                            export function isInstance(node: ITypedNode): node is N_AbstractFunctionAdapter {
                                return '_is_org_iets3_core_expr_toplevel_AbstractFunctionAdapter' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractFunctionAdapter extends TypedNode implements N_AbstractFunctionAdapter {
                            public _is_org_iets3_core_expr_toplevel_AbstractFunctionAdapter: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public fun: SingleChildAccessor<N_Function> = new SingleChildAccessor(this.node, "fun")
                        }
                        
                        
                        export interface N_ITopLevelContainer extends N_IToplevelExprContent {
                            _is_org_iets3_core_expr_toplevel_ITopLevelContainer: boolean
                            
                        }
                        
                        export namespace N_ITopLevelContainer {
                            export function isInstance(node: ITypedNode): node is N_ITopLevelContainer {
                                return '_is_org_iets3_core_expr_toplevel_ITopLevelContainer' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ITopLevelContainer extends TypedNode implements N_ITopLevelContainer {
                            public _is_org_iets3_core_expr_toplevel_ITopLevelContainer: boolean = true
            public _is_org_iets3_core_expr_toplevel_IToplevelExprContent: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IHasQualifiedName: boolean = true
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
                        
                        
                        export interface N_IRecordType extends L_org_iets3_core_expr_path.N_ICanHaveMembersType, L_org_iets3_core_expr_base.N_IReferenceableType, L_org_iets3_core_expr_base.N_IComplexTypeSupportsEquals {
                            _is_org_iets3_core_expr_toplevel_IRecordType: boolean
                            
                        }
                        
                        export namespace N_IRecordType {
                            export function isInstance(node: ITypedNode): node is N_IRecordType {
                                return '_is_org_iets3_core_expr_toplevel_IRecordType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IRecordType extends TypedNode implements N_IRecordType {
                            public _is_org_iets3_core_expr_toplevel_IRecordType: boolean = true
            public _is_org_iets3_core_expr_path_ICanHaveMembersType: boolean = true
            public _is_org_iets3_core_expr_base_IReferenceableType: boolean = true
            public _is_org_iets3_core_expr_base_IComplexTypeSupportsEquals: boolean = true
                            
                        }
                        
                        
                        export interface N_IToplevelExprContentContainer extends L_com_mbeddr_core_base.N_IVisibleElementProvider {
                            _is_org_iets3_core_expr_toplevel_IToplevelExprContentContainer: boolean
                            
                        }
                        
                        export namespace N_IToplevelExprContentContainer {
                            export function isInstance(node: ITypedNode): node is N_IToplevelExprContentContainer {
                                return '_is_org_iets3_core_expr_toplevel_IToplevelExprContentContainer' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IToplevelExprContentContainer extends TypedNode implements N_IToplevelExprContentContainer {
                            public _is_org_iets3_core_expr_toplevel_IToplevelExprContentContainer: boolean = true
            public _is_com_mbeddr_core_base_IVisibleElementProvider: boolean = true
                            
                        }
                        
                        
                        export interface N_AbstractToplevelExprAdapter extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IMayAllowEffect {
                            _is_org_iets3_core_expr_toplevel_AbstractToplevelExprAdapter: boolean
                            toplevelExprContent: SingleChildAccessor<N_IToplevelExprContent>
                        }
                        
                        export namespace N_AbstractToplevelExprAdapter {
                            export function isInstance(node: ITypedNode): node is N_AbstractToplevelExprAdapter {
                                return '_is_org_iets3_core_expr_toplevel_AbstractToplevelExprAdapter' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractToplevelExprAdapter extends TypedNode implements N_AbstractToplevelExprAdapter {
                            public _is_org_iets3_core_expr_toplevel_AbstractToplevelExprAdapter: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public toplevelExprContent: SingleChildAccessor<N_IToplevelExprContent> = new SingleChildAccessor(this.node, "toplevelExprContent")
                        }
                        
                        
                        export interface N_IFunctionLikeContainer extends L_com_mbeddr_core_base.N_IVisibleElementProvider {
                            _is_org_iets3_core_expr_toplevel_IFunctionLikeContainer: boolean
                            
                        }
                        
                        export namespace N_IFunctionLikeContainer {
                            export function isInstance(node: ITypedNode): node is N_IFunctionLikeContainer {
                                return '_is_org_iets3_core_expr_toplevel_IFunctionLikeContainer' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IFunctionLikeContainer extends TypedNode implements N_IFunctionLikeContainer {
                            public _is_org_iets3_core_expr_toplevel_IFunctionLikeContainer: boolean = true
            public _is_com_mbeddr_core_base_IVisibleElementProvider: boolean = true
                            
                        }
                        
                        
                        export interface N_AbstractFunctionLikeAdapter extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IMayAllowEffect {
                            _is_org_iets3_core_expr_toplevel_AbstractFunctionLikeAdapter: boolean
                            functionLike: SingleChildAccessor<L_org_iets3_core_expr_lambda.N_IFunctionLike>
                        }
                        
                        export namespace N_AbstractFunctionLikeAdapter {
                            export function isInstance(node: ITypedNode): node is N_AbstractFunctionLikeAdapter {
                                return '_is_org_iets3_core_expr_toplevel_AbstractFunctionLikeAdapter' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractFunctionLikeAdapter extends TypedNode implements N_AbstractFunctionLikeAdapter {
                            public _is_org_iets3_core_expr_toplevel_AbstractFunctionLikeAdapter: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public functionLike: SingleChildAccessor<L_org_iets3_core_expr_lambda.N_IFunctionLike> = new SingleChildAccessor(this.node, "functionLike")
                        }
                        
                        
                        export interface N_EmptyMember extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IRecordMember, L_jetbrains_mps_lang_core.N_ISuppressErrors, L_com_mbeddr_core_base.N_IEmpty {
                            _is_org_iets3_core_expr_toplevel_EmptyMember: boolean
                            
                        }
                        
                        export namespace N_EmptyMember {
                            export function isInstance(node: ITypedNode): node is N_EmptyMember {
                                return '_is_org_iets3_core_expr_toplevel_EmptyMember' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EmptyMember extends TypedNode implements N_EmptyMember {
                            public _is_org_iets3_core_expr_toplevel_EmptyMember: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_toplevel_IRecordMember: boolean = true
            public _is_org_iets3_core_expr_path_IMember: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_org_iets3_core_expr_base_ITypeable: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IContracted: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IProgramLocationProvider: boolean = true
            public _is_jetbrains_mps_lang_core_ISuppressErrors: boolean = true
            public _is_com_mbeddr_core_base_IEmpty: boolean = true
            public _is_com_mbeddr_core_base_IHideFromOutline: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
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
                            public contract: SingleChildAccessor<L_org_iets3_core_expr_base.N_Contract> = new SingleChildAccessor(this.node, "contract")
                        }
                        
                        
                        export interface N_EnumIsInTarget extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget {
                            _is_org_iets3_core_expr_toplevel_EnumIsInTarget: boolean
                            selectors: ChildListAccessor<N_EnumIsInSelector>
                        }
                        
                        export namespace N_EnumIsInTarget {
                            export function isInstance(node: ITypedNode): node is N_EnumIsInTarget {
                                return '_is_org_iets3_core_expr_toplevel_EnumIsInTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EnumIsInTarget extends TypedNode implements N_EnumIsInTarget {
                            public _is_org_iets3_core_expr_toplevel_EnumIsInTarget: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public selectors: ChildListAccessor<N_EnumIsInSelector> = new ChildListAccessor(this.node, "selectors")
                        }
                        
                        
                        export interface N_EnumIsInSelector extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_toplevel_EnumIsInSelector: boolean
                                                
                        }
                        
                        export namespace N_EnumIsInSelector {
                            export function isInstance(node: ITypedNode): node is N_EnumIsInSelector {
                                return '_is_org_iets3_core_expr_toplevel_EnumIsInSelector' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EnumIsInSelector extends TypedNode implements N_EnumIsInSelector {
                            public _is_org_iets3_core_expr_toplevel_EnumIsInSelector: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
                        
            
            export interface N_IDeclarationExtensionContext extends ITypedNode {
                _is_org_iets3_core_expr_toplevel_IDeclarationExtensionContext: boolean
                
            }
            
            export namespace N_IDeclarationExtensionContext {
                export function isInstance(node: ITypedNode): node is N_IDeclarationExtensionContext {
                    return '_is_org_iets3_core_expr_toplevel_IDeclarationExtensionContext' in node;
                }
            }
            
            export class _N_TypedImpl_IDeclarationExtensionContext extends TypedNode implements N_IDeclarationExtensionContext {
                public _is_org_iets3_core_expr_toplevel_IDeclarationExtensionContext: boolean = true
                
            }
            
                        
                        export interface N_QualifierRef extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_toplevel_QualifierRef: boolean
                                                
                                
                        }
                        
                        export namespace N_QualifierRef {
                            export function isInstance(node: ITypedNode): node is N_QualifierRef {
                                return '_is_org_iets3_core_expr_toplevel_QualifierRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_QualifierRef extends TypedNode implements N_QualifierRef {
                            public _is_org_iets3_core_expr_toplevel_QualifierRef: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                                                
                        }
                        
                        
                        export interface N_AllLitList extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_toplevel_AllLitList: boolean
                            enumType: SingleChildAccessor<N_EnumType>
                        }
                        
                        export namespace N_AllLitList {
                            export function isInstance(node: ITypedNode): node is N_AllLitList {
                                return '_is_org_iets3_core_expr_toplevel_AllLitList' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AllLitList extends TypedNode implements N_AllLitList {
                            public _is_org_iets3_core_expr_toplevel_AllLitList: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public enumType: SingleChildAccessor<N_EnumType> = new SingleChildAccessor(this.node, "enumType")
                        }
                        
                        
                        export interface N_EnumIndexOp extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget {
                            _is_org_iets3_core_expr_toplevel_EnumIndexOp: boolean
                            
                        }
                        
                        export namespace N_EnumIndexOp {
                            export function isInstance(node: ITypedNode): node is N_EnumIndexOp {
                                return '_is_org_iets3_core_expr_toplevel_EnumIndexOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EnumIndexOp extends TypedNode implements N_EnumIndexOp {
                            public _is_org_iets3_core_expr_toplevel_EnumIndexOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.N_Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                        }
            }