            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
import {L_com_mbeddr_core_base} from "./L_com_mbeddr_core_base";
import {L_org_iets3_core_expr_base} from "./L_org_iets3_core_expr_base";
import {L_org_iets3_core_expr_lambda} from "./L_org_iets3_core_expr_lambda";
            
            export namespace L_org_iets3_core_expr_toplevel {
            
            export class L_org_iets3_core_expr_toplevel extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_expr_toplevel = new L_org_iets3_core_expr_toplevel();
                constructor() {
                    super("org.iets3.core.expr.toplevel")
                    
                    this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/4790956042240148643", (node: INodeJS) => new Function(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/4790956042240570348", (node: INodeJS) => new FunctionCall(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/4790956042240790396", (node: INodeJS) => new FunRef(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/2861782275883406867", (node: INodeJS) => new IFunctionScopeProvider(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/2861782275883475449", (node: INodeJS) => new IToplevelExprContent(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/2861782275883762391", (node: INodeJS) => new ExtensionFunctionCall(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7089558164906249676", (node: INodeJS) => new Constant(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7089558164907769200", (node: INodeJS) => new IConstantScopeProvider(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/543569365051789113", (node: INodeJS) => new ConstantRef(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/543569365052765011", (node: INodeJS) => new EmptyToplevelContent(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8811147530084018358", (node: INodeJS) => new RecordDeclaration(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8811147530084018361", (node: INodeJS) => new RecordMember(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8811147530084018370", (node: INodeJS) => new RecordType(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8811147530084261867", (node: INodeJS) => new IRecordScopeProvider(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8811147530085329320", (node: INodeJS) => new RecordLiteral(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7740953487933794886", (node: INodeJS) => new SectionMarker(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7740953487936183912", (node: INodeJS) => new Typedef(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7740953487936183984", (node: INodeJS) => new ITypedefScopeProvider(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7740953487936184022", (node: INodeJS) => new TypedefType(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/3315773615451992747", (node: INodeJS) => new TypedefContractValExpr(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/1024425597324739336", (node: INodeJS) => new RecordMemberRefInConstraint(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/1249392911699110107", (node: INodeJS) => new RecordChangeTarget(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/1249392911699110134", (node: INodeJS) => new NewValueSetter(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/820361861852634100", (node: INodeJS) => new OldValueExpr(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/820361861853869169", (node: INodeJS) => new OldMemberRef(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7061117989422575278", (node: INodeJS) => new EnumDeclaration(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7061117989422575313", (node: INodeJS) => new EnumLiteral(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7061117989422575803", (node: INodeJS) => new EnumType(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7061117989422575939", (node: INodeJS) => new IEnumScopeProvider(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7061117989422577349", (node: INodeJS) => new EnumLiteralRef(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/4577412849441593498", (node: INodeJS) => new EnumValueAccessor(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/602952467876375079", (node: INodeJS) => new IRecordMember(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/602952467877559919", (node: INodeJS) => new IRecordDeclaration(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8718374282852222512", (node: INodeJS) => new AbstractTypeDeclaration(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7849023854690216373", (node: INodeJS) => new IRecordMemberScopeProvider(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/6527211908667934109", (node: INodeJS) => new EnumIsTarget(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/543569365052711055", (node: INodeJS) => new Library(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/7782108600709718604", (node: INodeJS) => new ReferenceableFlag(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266727747051", (node: INodeJS) => new GroupType(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266727773586", (node: INodeJS) => new GroupByOp(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266728974042", (node: INodeJS) => new GroupKeyTarget(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266729562040", (node: INodeJS) => new GroupMembersTarget(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266741050575", (node: INodeJS) => new InlineRecordType(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266741050660", (node: INodeJS) => new ProjectOp(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266741050664", (node: INodeJS) => new ProjectMember(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266742524311", (node: INodeJS) => new ProjectIt(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8293738266746101180", (node: INodeJS) => new InlineRecordMemberAccess(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/5070313213710413779", (node: INodeJS) => new BuilderExpression(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/5070313213710413791", (node: INodeJS) => new BuilderElement(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/5070313213710413804", (node: INodeJS) => new FieldSetter(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/5070313213710414376", (node: INodeJS) => new BuilderAdapter(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/5070313213710414386", (node: INodeJS) => new RecordTypeAdapter(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/411710798111758079", (node: INodeJS) => new IFunctionContainer(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/411710798111762102", (node: INodeJS) => new AbstractFunctionAdapter(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/1665826838185532528", (node: INodeJS) => new ITopLevelContainer(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/4328199741083502486", (node: INodeJS) => new IRecordType(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/3788552209995580869", (node: INodeJS) => new IToplevelExprContentContainer(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/3788552209995580872", (node: INodeJS) => new AbstractToplevelExprAdapter(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/336196204780206752", (node: INodeJS) => new IFunctionLikeContainer(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/336196204780206756", (node: INodeJS) => new AbstractFunctionLikeAdapter(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/5912816019932129331", (node: INodeJS) => new EmptyMember(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8006404979731136903", (node: INodeJS) => new EnumIsInTarget(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/8006404979731140557", (node: INodeJS) => new EnumIsInSelector(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/438389604712151896", (node: INodeJS) => new IDeclarationExtensionContext(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/5250171600077389559", (node: INodeJS) => new QualifierRef(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/2945473592442820328", (node: INodeJS) => new AllLitList(node))
this.nodeWrappers.set("mps:71934284-d7d1-45ee-a054-8c072591085f/217046401488995528", (node: INodeJS) => new EnumIndexOp(node))
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set ext(value: string | undefined) {
                                this.node.setPropertyValue("ext", value)
                            }
                            public get ext(): string | undefined {
                                return this.node.getPropertyValue("ext")
                            }
                            public args: ChildListAccessor<L_org_iets3_core_expr_lambda.FunctionArgument> = new ChildListAccessor(this.node, "args")
                            public body: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "body")
                            public effect: SingleChildAccessor<L_org_iets3_core_expr_lambda.EffectTag> = new SingleChildAccessor(this.node, "effect")
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
                            public set ext_old(value: string | undefined) {
                                this.node.setPropertyValue("ext_old", value)
                            }
                            public get ext_old(): string | undefined {
                                return this.node.getPropertyValue("ext_old")
                            }
                            // feature: ext_old 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
            // feature: type 
            // feature: contract 
            // feature: ext 
            // feature: args 
            // feature: body 
            // feature: effect 
            // feature: __hash 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.lambda.IFunctionLike 
            // super concept: com.mbeddr.core.base.IContainerOfUniqueNames 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: org.iets3.core.expr.base.IOptionallyTyped 
            // super concept: org.iets3.core.expr.base.IContextAssistantTypeProvider 
            // super concept: com.mbeddr.mpsutil.interpreter.ICanHaveTestCoverage 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: org.iets3.core.expr.base.IContracted 
            // super concept: org.iets3.core.expr.base.IMayHaveEffect 
            // super concept: com.mbeddr.core.base.IDetectCycle 
            // super concept: org.iets3.core.expr.base.IDocumentableWordProvider 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.ITreeViewRoot 
            // super concept: com.mbeddr.core.base.ITreeViewable 
            // super concept: org.iets3.core.expr.toplevel.IToplevelExprContent 
            // super concept: com.mbeddr.core.base.IHasQualifiedName 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: org.iets3.core.expr.base.ITraceRoot 
            // super concept: org.iets3.core.expr.lambda.IJoinedBlockContext 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
            // super concept: org.iets3.core.expr.base.IVoidContext 
            // super concept: org.iets3.analysis.base.ISolvable 
            // super concept: org.iets3.core.base.IDetectNeedToRunManually 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
            // super concept: org.iets3.core.expr.lambda.IAllowLocalVariables 
            // super concept: org.iets3.core.expr.base.IProgramLocationProvider 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public args: ChildListAccessor<L_org_iets3_core_expr_base.Expression> = new ChildListAccessor(this.node, "args")
                                                
                            public set __hash(value: string | undefined) {
                                this.node.setPropertyValue("__hash", value)
                            }
                            public get __hash(): string | undefined {
                                return this.node.getPropertyValue("__hash")
                            }
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: args 
            // feature: function 
            // feature: __hash 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ISSConstrainedValueRef 
            // super concept: org.iets3.core.expr.base.ISSConstrainedValue 
            // super concept: org.iets3.core.expr.lambda.IFunctionCall 
            // super concept: org.iets3.core.expr.base.IRef 
            // super concept: org.iets3.core.expr.base.IMayHaveEffect 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: org.iets3.core.expr.base.ITraceRoot 
            // super concept: org.iets3.analysis.base.ISolvable 
            // super concept: org.iets3.core.base.IDetectNeedToRunManually 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: fun 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.lambda.IFunctionRef 
            // super concept: org.iets3.core.expr.base.IRef 
            // super concept: org.iets3.core.expr.lambda.ILambdaLike 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
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
                            // feature: name 
            // feature: resolveInfo 
                            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IHasQualifiedName 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public set __hash(value: string | undefined) {
                                this.node.setPropertyValue("__hash", value)
                            }
                            public get __hash(): string | undefined {
                                return this.node.getPropertyValue("__hash")
                            }
                            public args: ChildListAccessor<L_org_iets3_core_expr_base.Expression> = new ChildListAccessor(this.node, "args")
                            // feature: args 
            // feature: extFun 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: __hash 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: org.iets3.core.expr.base.IMayHaveEffect 
            // super concept: org.iets3.core.expr.base.ISSConstrainedValue 
            // super concept: org.iets3.analysis.base.ISolvable 
            // super concept: org.iets3.core.base.IDetectNeedToRunManually 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
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
                            public set __hash(value: string | undefined) {
                                this.node.setPropertyValue("__hash", value)
                            }
                            public get __hash(): string | undefined {
                                return this.node.getPropertyValue("__hash")
                            }
                            public value: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "value")
                            // feature: value 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
            // feature: type 
            // feature: __hash 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.toplevel.IToplevelExprContent 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IHasQualifiedName 
            // super concept: org.iets3.core.expr.base.IOptionallyTyped 
            // super concept: org.iets3.core.expr.base.IContextAssistantTypeProvider 
            // super concept: com.mbeddr.mpsutil.interpreter.ICanHaveTestCoverage 
            // super concept: org.iets3.core.expr.base.ISSConstrainedValue 
            // super concept: com.mbeddr.core.base.IDetectCycle 
            // super concept: org.iets3.core.expr.base.ITraceRoot 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
            // super concept: org.iets3.analysis.base.ISolvable 
            // super concept: org.iets3.core.base.IDetectNeedToRunManually 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
            // super concept: jetbrains.mps.lang.core.ISmartReferent 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            // feature: constant 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.IIsSingleSymbol 
            // super concept: org.iets3.core.expr.base.ISSConstrainedValueRef 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: org.iets3.core.expr.base.IRef 
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
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.toplevel.IToplevelExprContent 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IHasQualifiedName 
            // super concept: com.mbeddr.core.base.IEmpty 
            // super concept: jetbrains.mps.lang.core.ISuppressErrors 
            // super concept: com.mbeddr.core.base.IHideFromOutline 
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
                            public members: ChildListAccessor<L_org_iets3_core_expr_toplevel.IRecordMember> = new ChildListAccessor(this.node, "members")
                            public contract: SingleChildAccessor<L_org_iets3_core_expr_base.Contract> = new SingleChildAccessor(this.node, "contract")
                            public members_old: ChildListAccessor<L_org_iets3_core_expr_toplevel.IRecordMember> = new ChildListAccessor(this.node, "members_old")
                            public refFlag: SingleChildAccessor<L_org_iets3_core_expr_toplevel.ReferenceableFlag> = new SingleChildAccessor(this.node, "refFlag")
                            // feature: members_old 
            // feature: refFlag 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
            // feature: contract 
            // feature: members 
                            // super concept: org.iets3.core.expr.toplevel.AbstractTypeDeclaration 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.toplevel.IToplevelExprContent 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IHasQualifiedName 
            // super concept: org.iets3.core.expr.base.IDocumentableWordProvider 
            // super concept: org.iets3.core.expr.toplevel.IRecordDeclaration 
            // super concept: com.mbeddr.core.base.IContainerOfUniqueNames 
            // super concept: org.iets3.core.expr.base.IContracted 
            // super concept: org.iets3.core.expr.toplevel.IRecordMemberScopeProvider 
            // super concept: com.mbeddr.core.base.IVisibleElementProvider 
            // super concept: com.mbeddr.core.base.IDetectCycle 
            // super concept: org.iets3.core.expr.base.IProgramLocationProvider 
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
                            public contract: SingleChildAccessor<L_org_iets3_core_expr_base.Contract> = new SingleChildAccessor(this.node, "contract")
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.Type> = new SingleChildAccessor(this.node, "type")
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
            // feature: contract 
            // feature: type 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.toplevel.IRecordMember 
            // super concept: org.iets3.core.expr.path.IMember 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: org.iets3.core.expr.base.ITypeable 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.IContracted 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.IProgramLocationProvider 
            // super concept: org.iets3.core.expr.base.ITyped 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            // feature: record 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.base.Type 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.IType 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.toplevel.IRecordType 
            // super concept: org.iets3.core.expr.path.ICanHaveMembersType 
            // super concept: org.iets3.core.expr.base.IReferenceableType 
            // super concept: org.iets3.core.expr.base.IComplexTypeSupportsEquals 
            // super concept: org.iets3.core.expr.base.ITypeSupportsDefaultValue 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.Type> = new SingleChildAccessor(this.node, "type")
                            public memberValues: ChildListAccessor<L_org_iets3_core_expr_base.Expression> = new ChildListAccessor(this.node, "memberValues")
                            // feature: memberValues 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: type 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.IStructuredSyntax 
            // super concept: org.iets3.core.expr.base.IWantNewLine 
            // super concept: org.iets3.core.expr.base.ITyped 
            // super concept: org.iets3.core.expr.base.ITypeable 
            // super concept: com.mbeddr.mpsutil.interpreter.ICanHaveTestCoverage 
            // super concept: org.iets3.core.expr.base.ILiteral 
            // super concept: com.mbeddr.mpsutil.interpreter.ITrivialNode 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
            // super concept: org.iets3.core.expr.base.IMayHaveEffect 
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
                            public set label(value: string | undefined) {
                                this.node.setPropertyValue("label", value)
                            }
                            public get label(): string | undefined {
                                return this.node.getPropertyValue("label")
                            }
                            // feature: label 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.toplevel.IToplevelExprContent 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IHasQualifiedName 
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
                            public contract: SingleChildAccessor<L_org_iets3_core_expr_base.Contract> = new SingleChildAccessor(this.node, "contract")
                            public set __hash(value: string | undefined) {
                                this.node.setPropertyValue("__hash", value)
                            }
                            public get __hash(): string | undefined {
                                return this.node.getPropertyValue("__hash")
                            }
                            public originalType: SingleChildAccessor<L_org_iets3_core_expr_base.Type> = new SingleChildAccessor(this.node, "originalType")
                            // feature: originalType 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
            // feature: contract 
            // feature: __hash 
                            // super concept: org.iets3.core.expr.toplevel.AbstractTypeDeclaration 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.toplevel.IToplevelExprContent 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IHasQualifiedName 
            // super concept: org.iets3.core.expr.base.IDocumentableWordProvider 
            // super concept: org.iets3.core.expr.base.IContracted 
            // super concept: com.mbeddr.core.base.IDetectCycle 
            // super concept: org.iets3.core.expr.toplevel.IRecordMemberScopeProvider 
            // super concept: com.mbeddr.core.base.IVisibleElementProvider 
            // super concept: org.iets3.analysis.base.ISolvable 
            // super concept: org.iets3.core.base.IDetectNeedToRunManually 
            // super concept: org.iets3.core.base.ICanRunCheckManually 
            // super concept: org.iets3.core.base.ICanStoreCheckResult 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            // feature: typedef 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.base.Type 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.IType 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.ISSDelegatingType 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.ISSItValueRef 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            // feature: member 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public setters: ChildListAccessor<L_org_iets3_core_expr_toplevel.NewValueSetter> = new ChildListAccessor(this.node, "setters")
                            // feature: setters 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: org.iets3.core.expr.base.IMayHaveEffect 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public newValue: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "newValue")
                            // feature: newValue 
            // feature: member 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IMayHaveEffect 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            // feature: member 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
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
                            public set qualified(value: string | undefined) {
                                this.node.setPropertyValue("qualified", value)
                            }
                            public get qualified(): string | undefined {
                                return this.node.getPropertyValue("qualified")
                            }
                            public type: SingleChildAccessor<L_org_iets3_core_expr_base.Type> = new SingleChildAccessor(this.node, "type")
                            public literals: ChildListAccessor<L_org_iets3_core_expr_toplevel.EnumLiteral> = new ChildListAccessor(this.node, "literals")
                            // feature: qualified 
            // feature: type 
            // feature: literals 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
                            // super concept: org.iets3.core.expr.toplevel.AbstractTypeDeclaration 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.toplevel.IToplevelExprContent 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IHasQualifiedName 
            // super concept: org.iets3.core.expr.base.IDocumentableWordProvider 
            // super concept: com.mbeddr.core.base.IContainerOfUniqueNames 
            // super concept: jetbrains.mps.lang.core.ISmartReferent 
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
                            public value: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "value")
                            // feature: value 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            // feature: enum 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.base.Type 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.IType 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.ITypeSupportsDefaultValue 
            // super concept: org.iets3.core.expr.base.ITypeSupportsProposals 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            // feature: literal 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
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
                            public contract: SingleChildAccessor<L_org_iets3_core_expr_base.Contract> = new SingleChildAccessor(this.node, "contract")
                            // feature: name 
            // feature: resolveInfo 
            // feature: contract 
                            // super concept: org.iets3.core.expr.path.IMember 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: org.iets3.core.expr.base.ITypeable 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.IContracted 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.IProgramLocationProvider 
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
                            public contract: SingleChildAccessor<L_org_iets3_core_expr_base.Contract> = new SingleChildAccessor(this.node, "contract")
                            public members: ChildListAccessor<L_org_iets3_core_expr_toplevel.IRecordMember> = new ChildListAccessor(this.node, "members")
                            // feature: members 
            // feature: name 
            // feature: resolveInfo 
            // feature: contract 
                            // super concept: org.iets3.core.expr.toplevel.IToplevelExprContent 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IHasQualifiedName 
            // super concept: com.mbeddr.core.base.IContainerOfUniqueNames 
            // super concept: org.iets3.core.expr.base.IContracted 
            // super concept: org.iets3.core.expr.toplevel.IRecordMemberScopeProvider 
            // super concept: com.mbeddr.core.base.IVisibleElementProvider 
            // super concept: com.mbeddr.core.base.IDetectCycle 
            // super concept: org.iets3.core.expr.base.IDocumentableWordProvider 
            // super concept: org.iets3.core.expr.base.IProgramLocationProvider 
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
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.toplevel.IToplevelExprContent 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IHasQualifiedName 
            // super concept: org.iets3.core.expr.base.IDocumentableWordProvider 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            // feature: literal 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
                        }
                        
                        export class Library extends TypedNode {
                                            public constraints: ChildListAccessor<L_com_mbeddr_core_base.ChunkDependencyConstraint> = new ChildListAccessor(this.node, "constraints")
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
                            public contents: ChildListAccessor<L_org_iets3_core_expr_toplevel.IToplevelExprContent> = new ChildListAccessor(this.node, "contents")
                            public imports: ChildListAccessor<L_com_mbeddr_core_base.DefaultGenericChunkDependency> = new ChildListAccessor(this.node, "imports")
                            // feature: contents 
            // feature: imports 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
            // feature: constraints 
                            // super concept: com.mbeddr.core.base.Chunk 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.IIdentifierNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: com.mbeddr.core.base.IVisibleElementProvider 
            // super concept: com.mbeddr.core.base.ILOCCountProvider 
            // super concept: com.mbeddr.core.base.ITreeViewRoot 
            // super concept: com.mbeddr.core.base.ITreeViewable 
            // super concept: com.mbeddr.core.base.IDetectCycle 
            // super concept: com.mbeddr.mpsutil.jung.IJGraphProvider 
            // super concept: com.mbeddr.core.base.IContainerOfUniqueNames 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: org.iets3.core.expr.base.IDocumentableWordContainer 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
            // super concept: org.iets3.analysis.base.IUseSolver 
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
                public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                // feature: idMember 
                // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public keyType: SingleChildAccessor<L_org_iets3_core_expr_base.Type> = new SingleChildAccessor(this.node, "keyType")
                            public memberType: SingleChildAccessor<L_org_iets3_core_expr_toplevel.IRecordType> = new SingleChildAccessor(this.node, "memberType")
                            // feature: keyType 
            // feature: memberType 
                            // super concept: org.iets3.core.expr.base.Type 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.IType 
            // super concept: com.mbeddr.core.base.ICommentable 
                        }
                        
                        export class GroupByOp extends TypedNode {
                                            public arg: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "arg")
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
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: arg 
                            // super concept: org.iets3.core.expr.collections.OneArgCollectionOp 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.collections.ICollectionOp 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: org.iets3.core.expr.lambda.IShortLambdaContainer 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public members: ChildListAccessor<L_org_iets3_core_expr_toplevel.IRecordMember> = new ChildListAccessor(this.node, "members")
                            // feature: members 
                            // super concept: org.iets3.core.expr.base.Type 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: jetbrains.mps.lang.core.IType 
            // super concept: com.mbeddr.core.base.ICommentable 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public members: ChildListAccessor<L_org_iets3_core_expr_toplevel.ProjectMember> = new ChildListAccessor(this.node, "members")
                            // feature: members 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.collections.ICollectionOp 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
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
                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expr")
                            // feature: expr 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
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
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public adapted: SingleChildAccessor<L_org_iets3_core_expr_toplevel.BuilderAdapter> = new SingleChildAccessor(this.node, "adapted")
                            public elements: ChildListAccessor<L_org_iets3_core_expr_toplevel.BuilderElement> = new ChildListAccessor(this.node, "elements")
                            // feature: adapted 
            // feature: elements 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
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
                public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                
                // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public value: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "value")
                            // feature: value 
            // feature: field 
                            // super concept: org.iets3.core.expr.toplevel.BuilderElement 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                
                // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public type: SingleChildAccessor<L_org_iets3_core_expr_toplevel.IRecordType> = new SingleChildAccessor(this.node, "type")
                            // feature: type 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: org.iets3.core.expr.toplevel.BuilderAdapter 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.mpsutil.interpreter.ICanHaveTestCoverage 
                        }
            
            export class IFunctionContainer extends TypedNode {
                
                
                // super concept: com.mbeddr.core.base.IVisibleElementProvider 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public fun: SingleChildAccessor<L_org_iets3_core_expr_toplevel.Function> = new SingleChildAccessor(this.node, "fun")
                            // feature: fun 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
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
                            
                            // super concept: org.iets3.core.expr.toplevel.IToplevelExprContent 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: org.iets3.core.expr.base.IContainmentStackMember 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IHasQualifiedName 
                        }
                        
                        export class IRecordType extends TypedNode {
                            
                            
                            // super concept: org.iets3.core.expr.path.ICanHaveMembersType 
            // super concept: org.iets3.core.expr.base.IReferenceableType 
            // super concept: org.iets3.core.expr.base.IComplexTypeSupportsEquals 
                        }
            
            export class IToplevelExprContentContainer extends TypedNode {
                
                
                // super concept: com.mbeddr.core.base.IVisibleElementProvider 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public toplevelExprContent: SingleChildAccessor<L_org_iets3_core_expr_toplevel.IToplevelExprContent> = new SingleChildAccessor(this.node, "toplevelExprContent")
                            // feature: toplevelExprContent 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
                        }
            
            export class IFunctionLikeContainer extends TypedNode {
                
                
                // super concept: com.mbeddr.core.base.IVisibleElementProvider 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public functionLike: SingleChildAccessor<L_org_iets3_core_expr_lambda.IFunctionLike> = new SingleChildAccessor(this.node, "functionLike")
                            // feature: functionLike 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IMayAllowEffect 
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
                            public contract: SingleChildAccessor<L_org_iets3_core_expr_base.Contract> = new SingleChildAccessor(this.node, "contract")
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
            // feature: name 
            // feature: resolveInfo 
            // feature: contract 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.toplevel.IRecordMember 
            // super concept: org.iets3.core.expr.path.IMember 
            // super concept: org.iets3.core.base.IValidNamedConcept 
            // super concept: jetbrains.mps.lang.core.INamedConcept 
            // super concept: jetbrains.mps.lang.core.IResolveInfo 
            // super concept: org.iets3.core.expr.base.ITypeable 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: org.iets3.core.expr.base.IContracted 
            // super concept: com.mbeddr.core.base.IDocumentable 
            // super concept: org.iets3.core.expr.base.IProgramLocationProvider 
            // super concept: jetbrains.mps.lang.core.ISuppressErrors 
            // super concept: com.mbeddr.core.base.IEmpty 
            // super concept: com.mbeddr.core.base.IHideFromOutline 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public selectors: ChildListAccessor<L_org_iets3_core_expr_toplevel.EnumIsInSelector> = new ChildListAccessor(this.node, "selectors")
                            // feature: selectors 
            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
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
                public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                // feature: literal 
                // super concept: jetbrains.mps.lang.core.BaseConcept 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                                                
                            // feature: enum 
            // feature: lit 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            public enumType: SingleChildAccessor<L_org_iets3_core_expr_toplevel.EnumType> = new SingleChildAccessor(this.node, "enumType")
                            // feature: enumType 
                            // super concept: org.iets3.core.expr.base.Expression 
            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: com.mbeddr.core.base.ICommentable 
            // super concept: com.mbeddr.core.base.IDocumentable 
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
                            public smodelAttribute: ChildListAccessor<L_jetbrains_mps_lang_core.Attribute> = new ChildListAccessor(this.node, "smodelAttribute")
                            // feature: shortDescription 
            // feature: virtualPackage 
            // feature: smodelAttribute 
                            // super concept: jetbrains.mps.lang.core.BaseConcept 
            // super concept: org.iets3.core.expr.base.IDotTarget 
            // super concept: com.mbeddr.mpsutil.interpreter.ITracerFrame 
                        }
            }