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
import {L_de_slisson_mps_richtext} from "./L_de_slisson_mps_richtext";
import {L_com_mbeddr_core_base} from "./L_com_mbeddr_core_base";
import {L_com_mbeddr_mpsutil_interpreter} from "./L_com_mbeddr_mpsutil_interpreter";
            
            export namespace L_org_iets3_core_expr_base {
            
            export class L_org_iets3_core_expr_base extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_expr_base = new L_org_iets3_core_expr_base();
                constructor() {
                    super("org.iets3.core.expr.base")
                    
                    this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7425695345928347719", (node: INodeJS) => new _N_TypedImpl_Expression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7425695345928349204", (node: INodeJS) => new _N_TypedImpl_Type(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7425695345928515123", (node: INodeJS) => new _N_TypedImpl_PrimitiveType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156576277", (node: INodeJS) => new _N_TypedImpl_BinaryExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156578546", (node: INodeJS) => new _N_TypedImpl_PlusExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156578671", (node: INodeJS) => new _N_TypedImpl_MulExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156652453", (node: INodeJS) => new _N_TypedImpl_MinusExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156652603", (node: INodeJS) => new _N_TypedImpl_DivExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156687762", (node: INodeJS) => new _N_TypedImpl_BinaryArithmeticExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156687763", (node: INodeJS) => new _N_TypedImpl_BinaryComparisonExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156687764", (node: INodeJS) => new _N_TypedImpl_GreaterExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156687889", (node: INodeJS) => new _N_TypedImpl_GreaterEqualsExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156687890", (node: INodeJS) => new _N_TypedImpl_LessExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156687891", (node: INodeJS) => new _N_TypedImpl_LessEqualsExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156723687", (node: INodeJS) => new _N_TypedImpl_BinaryLogicalExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156723899", (node: INodeJS) => new _N_TypedImpl_LogicalOrExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156724025", (node: INodeJS) => new _N_TypedImpl_LogicalAndExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156760985", (node: INodeJS) => new _N_TypedImpl_BinaryEqualityExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156761033", (node: INodeJS) => new _N_TypedImpl_EqualsExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156761034", (node: INodeJS) => new _N_TypedImpl_NotEqualsExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156802409", (node: INodeJS) => new _N_TypedImpl_UnaryExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156802410", (node: INodeJS) => new _N_TypedImpl_LogicalNotExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156855227", (node: INodeJS) => new _N_TypedImpl_UnaryMinusExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837157187871", (node: INodeJS) => new _N_TypedImpl_ParensExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1514143479005139333", (node: INodeJS) => new _N_TypedImpl_LogicalImpliesExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/9002563722476995145", (node: INodeJS) => new _N_TypedImpl_DotExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/9002563722476995146", (node: INodeJS) => new _N_TypedImpl_IDotTarget(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8379605524044170035", (node: INodeJS) => new _N_TypedImpl_PrimitiveLiteral(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7416522108621683377", (node: INodeJS) => new _N_TypedImpl_IRef(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7849560302565679722", (node: INodeJS) => new _N_TypedImpl_IfExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7849560302565692340", (node: INodeJS) => new _N_TypedImpl_IBigExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8092372783983747124", (node: INodeJS) => new _N_TypedImpl_IReducableExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8092372783983858717", (node: INodeJS) => new _N_TypedImpl_ReductionInspector(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8092372783984279054", (node: INodeJS) => new _N_TypedImpl_TracerExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2807135271608265973", (node: INodeJS) => new _N_TypedImpl_NoneLiteral(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2807135271607940261", (node: INodeJS) => new _N_TypedImpl_NoneType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1059200196223309235", (node: INodeJS) => new _N_TypedImpl_SomeValExpr(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2807135271607939856", (node: INodeJS) => new _N_TypedImpl_OptionType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2807135271608145920", (node: INodeJS) => new _N_TypedImpl_IsSomeExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8448265401162061756", (node: INodeJS) => new _N_TypedImpl_LogicalIffExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/125444643124876487", (node: INodeJS) => new _N_TypedImpl_IIsSingleSymbol(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1919538606559981270", (node: INodeJS) => new _N_TypedImpl_ErrorLiteral(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1919538606560895472", (node: INodeJS) => new _N_TypedImpl_ErrorExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1919538606561852052", (node: INodeJS) => new _N_TypedImpl_SuccessType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1919538606561852365", (node: INodeJS) => new _N_TypedImpl_GenericErrorType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1919538606561852396", (node: INodeJS) => new _N_TypedImpl_SpecificErrorType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1919538606562038159", (node: INodeJS) => new _N_TypedImpl_IAttemptType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6481804410366698223", (node: INodeJS) => new _N_TypedImpl_AttemptType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6481804410367226920", (node: INodeJS) => new _N_TypedImpl_TryExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6481804410367607231", (node: INodeJS) => new _N_TypedImpl_TrySuccessClause(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7089558164905593724", (node: INodeJS) => new _N_TypedImpl_IOptionallyTyped(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7089558164908491660", (node: INodeJS) => new _N_TypedImpl_EmptyExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7089558164909884363", (node: INodeJS) => new _N_TypedImpl_TryErrorClause(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7089558164910719190", (node: INodeJS) => new _N_TypedImpl_SuccessValueExpr(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1206081519717706522", (node: INodeJS) => new _N_TypedImpl_ITypeFromMultiple(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3281846772293355652", (node: INodeJS) => new _N_TypedImpl_CastExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8811147530087029174", (node: INodeJS) => new _N_TypedImpl_IStructuredSyntax(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/867786408877888703", (node: INodeJS) => new _N_TypedImpl_ExprInContract(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/867786408877810851", (node: INodeJS) => new _N_TypedImpl_IContracted(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7249175668709475545", (node: INodeJS) => new _N_TypedImpl_IContainmentStackMember(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/867786408877811180", (node: INodeJS) => new _N_TypedImpl_Postcondition(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/867786408877811181", (node: INodeJS) => new _N_TypedImpl_Invariant(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/867786408877811041", (node: INodeJS) => new _N_TypedImpl_Contract(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/867786408877811036", (node: INodeJS) => new _N_TypedImpl_ContractItem(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/867786408877811037", (node: INodeJS) => new _N_TypedImpl_Precondition(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/867786408882279828", (node: INodeJS) => new _N_TypedImpl_PlainConstraint(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3352322994211036342", (node: INodeJS) => new _N_TypedImpl_OneOfTarget(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2245119349904068784", (node: INodeJS) => new _N_TypedImpl_RangeTarget(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1019070541450015930", (node: INodeJS) => new _N_TypedImpl_TupleType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1019070541450016346", (node: INodeJS) => new _N_TypedImpl_TupleValue(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2527679671886479690", (node: INodeJS) => new _N_TypedImpl_TupleAccessExpr(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7971844778466793028", (node: INodeJS) => new _N_TypedImpl_AlternativesExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7971844778466793051", (node: INodeJS) => new _N_TypedImpl_AltOption(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6381079423399017846", (node: INodeJS) => new _N_TypedImpl_IOptionDerefContext(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3829047245302399306", (node: INodeJS) => new _N_TypedImpl_ISingleSymbolRef(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3829047245302401610", (node: INodeJS) => new _N_TypedImpl_IScopeFilterer(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3829047245309363370", (node: INodeJS) => new _N_TypedImpl_OptionOrExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7791618349053901166", (node: INodeJS) => new _N_TypedImpl_IMayHaveEffect(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/508719611255975992", (node: INodeJS) => new _N_TypedImpl_IBlockLike(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8219602584757553931", (node: INodeJS) => new _N_TypedImpl_CheckTypeConstraintsExpr(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8219602584757554015", (node: INodeJS) => new _N_TypedImpl_ValidityType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8219602584758209317", (node: INodeJS) => new _N_TypedImpl_OkTarget(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8219602584758531613", (node: INodeJS) => new _N_TypedImpl_ErrorTarget(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8219602584770724049", (node: INodeJS) => new _N_TypedImpl_ImplicitValidityValExpr(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5822258191940088521", (node: INodeJS) => new _N_TypedImpl_IValidOtherwiseContainer(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7071042522334260296", (node: INodeJS) => new _N_TypedImpl_ITyped(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3913100176250796213", (node: INodeJS) => new _N_TypedImpl_IIgnoreTrivialErrorsContext(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/543855896735511983", (node: INodeJS) => new _N_TypedImpl_IDeclarativelyInterpretable(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6527211908668936592", (node: INodeJS) => new _N_TypedImpl_IDocumentableWordProvider(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6527211908668938616", (node: INodeJS) => new _N_TypedImpl_DocWordRef(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6527211908672525240", (node: INodeJS) => new _N_TypedImpl_IDocumentableWordContainer(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3908189377504169836", (node: INodeJS) => new _N_TypedImpl_IHasBaseType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6571046568849029819", (node: INodeJS) => new _N_TypedImpl_ISSConstrainedValue(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6571046568849029820", (node: INodeJS) => new _N_TypedImpl_ISSConstrainedValueRef(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7093020903919699057", (node: INodeJS) => new _N_TypedImpl_ISSItValueRef(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7093020903927062949", (node: INodeJS) => new _N_TypedImpl_ISSDelegatingType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6859926652464625057", (node: INodeJS) => new _N_TypedImpl_ICollectionType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1813872364117842299", (node: INodeJS) => new _N_TypedImpl_ConstraintAndErrorNode(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7782108600708168956", (node: INodeJS) => new _N_TypedImpl_ReferenceType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7782108600708210942", (node: INodeJS) => new _N_TypedImpl_IReferenceableType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7782108600709141067", (node: INodeJS) => new _N_TypedImpl_MakeRefTarget(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7782108600710395780", (node: INodeJS) => new _N_TypedImpl_ILiteral(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7782108600712067692", (node: INodeJS) => new _N_TypedImpl_DeRefTarget(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/9142018459473556821", (node: INodeJS) => new _N_TypedImpl_JoinType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6095949300264944876", (node: INodeJS) => new _N_TypedImpl_IJoinTypeContext(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8505972469205863874", (node: INodeJS) => new _N_TypedImpl_ITraceRoot(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1102067954003609289", (node: INodeJS) => new _N_TypedImpl_IMultiTraceRoot(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/4934857995792117654", (node: INodeJS) => new _N_TypedImpl_Revealer(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7631603674206286466", (node: INodeJS) => new _N_TypedImpl_IControlAdvancedFeatures_old(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/952298261448780116", (node: INodeJS) => new _N_TypedImpl_IMayAllowEffect(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/162522551948891781", (node: INodeJS) => new _N_TypedImpl_IMainSlot(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3878179565988505489", (node: INodeJS) => new _N_TypedImpl_IMayReadMutableState(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1134276681297127890", (node: INodeJS) => new _N_TypedImpl_IWantNewLine(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3878179565981658347", (node: INodeJS) => new _N_TypedImpl_IAllowsDocInChildExpressions(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8237981399425912554", (node: INodeJS) => new _N_TypedImpl_IVoidContext(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5571545316364799282", (node: INodeJS) => new _N_TypedImpl_PragmaExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5571545316364803538", (node: INodeJS) => new _N_TypedImpl_PragmaDisableCaching(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5043470053404793105", (node: INodeJS) => new _N_TypedImpl_IRunningInterpreterContext(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6932772747669876272", (node: INodeJS) => new _N_TypedImpl_DefaultValueExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6932772747669856399", (node: INodeJS) => new _N_TypedImpl_ITypeSupportsDefaultValue(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/4886573260948603548", (node: INodeJS) => new _N_TypedImpl_IContextTypeProvider(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/411710798114972602", (node: INodeJS) => new _N_TypedImpl_FailExpr(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/4886573260948604727", (node: INodeJS) => new _N_TypedImpl_ThisExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/606861080870797309", (node: INodeJS) => new _N_TypedImpl_IfElseSection(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8237981399425912525", (node: INodeJS) => new _N_TypedImpl_VoidType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/195141004745586068", (node: INodeJS) => new _N_TypedImpl_ICanBeLValue(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5227231181400542768", (node: INodeJS) => new _N_TypedImpl_INameQualifier(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2850607030358693529", (node: INodeJS) => new _N_TypedImpl_SimpleExpressionValueInspector(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/4443886968505207936", (node: INodeJS) => new _N_TypedImpl_IProvidePathConstraints(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6044555027808714586", (node: INodeJS) => new _N_TypedImpl_ModExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1185099853503726569", (node: INodeJS) => new _N_TypedImpl_IAssertConstraints(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5955298286257997823", (node: INodeJS) => new _N_TypedImpl_ColonCast(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5974679004769488538", (node: INodeJS) => new _N_TypedImpl_SuccessExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8266215269008046728", (node: INodeJS) => new _N_TypedImpl_INeverAllowDot(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2152957725070409762", (node: INodeJS) => new _N_TypedImpl_AbstractMinMaxExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2152957725070518938", (node: INodeJS) => new _N_TypedImpl_MinExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2152957725070518937", (node: INodeJS) => new _N_TypedImpl_MaxExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/369777186288917319", (node: INodeJS) => new _N_TypedImpl_ITypeOverridingContext(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3593191807001111860", (node: INodeJS) => new _N_TypedImpl_NonStrictEqualsExpression(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/195141004745644975", (node: INodeJS) => new _N_TypedImpl_AssignmentExpr(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5299123466384889590", (node: INodeJS) => new _N_TypedImpl_IProgramLocationProvider(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5299123466385888301", (node: INodeJS) => new _N_TypedImpl_ProgramLocationType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5299123466385889548", (node: INodeJS) => new _N_TypedImpl_ProgramLocationOp(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5299123466385900735", (node: INodeJS) => new _N_TypedImpl_ProgramLocationUrlOp(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5299123466384402682", (node: INodeJS) => new _N_TypedImpl_MessageValueType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5299123466398246930", (node: INodeJS) => new _N_TypedImpl_InlineMessage(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/672388678113750644", (node: INodeJS) => new _N_TypedImpl_ITypeSupportsProposals(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/672388678117471179", (node: INodeJS) => new _N_TypedImpl_IContextAssistantTypeProvider(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8006404979729416973", (node: INodeJS) => new _N_TypedImpl_OrTag(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8560722270290706287", (node: INodeJS) => new _N_TypedImpl_MulTag(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8560722270289800014", (node: INodeJS) => new _N_TypedImpl_PlusTag(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5338017450510303355", (node: INodeJS) => new _N_TypedImpl_OperatorGroup(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5338017450510303356", (node: INodeJS) => new _N_TypedImpl_OperatorTag(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5338017450510309031", (node: INodeJS) => new _N_TypedImpl_AndTag(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2390066428848651932", (node: INodeJS) => new _N_TypedImpl_BangOp(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5706483968284528352", (node: INodeJS) => new _N_TypedImpl_ITypeable(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8435714728543612220", (node: INodeJS) => new _N_TypedImpl_ConvenientBoolean(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8435714728543612221", (node: INodeJS) => new _N_TypedImpl_ConvenientBooleanValue(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8435714728543612222", (node: INodeJS) => new _N_TypedImpl_AlwaysValue(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8435714728543612253", (node: INodeJS) => new _N_TypedImpl_NeverValue(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8435714728543612284", (node: INodeJS) => new _N_TypedImpl_ConvenientValueCond(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8946943035394495000", (node: INodeJS) => new _N_TypedImpl_IParameterizedTypeSupportsEquals(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7549708508605912547", (node: INodeJS) => new _N_TypedImpl_IContextTypedOp(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/9078496479923905756", (node: INodeJS) => new _N_TypedImpl_RevealerThis(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5032482955836171565", (node: INodeJS) => new _N_TypedImpl_IAllowDeletionOfDot(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5032482955834438679", (node: INodeJS) => new _N_TypedImpl_IAllowDotOnLeft(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3889855429449957987", (node: INodeJS) => new _N_TypedImpl_HasValueOp(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3889855429450038473", (node: INodeJS) => new _N_TypedImpl_EmptyValue(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2417394483940924214", (node: INodeJS) => new _N_TypedImpl_ITargetThatCanDealWithNix(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3984696641266738408", (node: INodeJS) => new _N_TypedImpl_EmptyType(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/915344943735946072", (node: INodeJS) => new _N_TypedImpl_IEmptyLiteral(node))
this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7520958096812440715", (node: INodeJS) => new _N_TypedImpl_IComplexTypeSupportsEquals(node))
                }
                /*
                public getConcepts() {
                    return [this.Expression, this.Type, this.PrimitiveType, this.BinaryExpression, this.PlusExpression, this.MulExpression, this.MinusExpression, this.DivExpression, this.BinaryArithmeticExpression, this.BinaryComparisonExpression, this.GreaterExpression, this.GreaterEqualsExpression, this.LessExpression, this.LessEqualsExpression, this.BinaryLogicalExpression, this.LogicalOrExpression, this.LogicalAndExpression, this.BinaryEqualityExpression, this.EqualsExpression, this.NotEqualsExpression, this.UnaryExpression, this.LogicalNotExpression, this.UnaryMinusExpression, this.ParensExpression, this.LogicalImpliesExpression, this.DotExpression, this.IDotTarget, this.PrimitiveLiteral, this.IRef, this.IfExpression, this.IBigExpression, this.IReducableExpression, this.ReductionInspector, this.TracerExpression, this.NoneLiteral, this.NoneType, this.SomeValExpr, this.OptionType, this.IsSomeExpression, this.LogicalIffExpression, this.IIsSingleSymbol, this.ErrorLiteral, this.ErrorExpression, this.SuccessType, this.GenericErrorType, this.SpecificErrorType, this.IAttemptType, this.AttemptType, this.TryExpression, this.TrySuccessClause, this.IOptionallyTyped, this.EmptyExpression, this.TryErrorClause, this.SuccessValueExpr, this.ITypeFromMultiple, this.CastExpression, this.IStructuredSyntax, this.ExprInContract, this.IContracted, this.IContainmentStackMember, this.Postcondition, this.Invariant, this.Contract, this.ContractItem, this.Precondition, this.PlainConstraint, this.OneOfTarget, this.RangeTarget, this.TupleType, this.TupleValue, this.TupleAccessExpr, this.AlternativesExpression, this.AltOption, this.IOptionDerefContext, this.ISingleSymbolRef, this.IScopeFilterer, this.OptionOrExpression, this.IMayHaveEffect, this.IBlockLike, this.CheckTypeConstraintsExpr, this.ValidityType, this.OkTarget, this.ErrorTarget, this.ImplicitValidityValExpr, this.IValidOtherwiseContainer, this.ITyped, this.IIgnoreTrivialErrorsContext, this.IDeclarativelyInterpretable, this.IDocumentableWordProvider, this.DocWordRef, this.IDocumentableWordContainer, this.IHasBaseType, this.ISSConstrainedValue, this.ISSConstrainedValueRef, this.ISSItValueRef, this.ISSDelegatingType, this.ICollectionType, this.ConstraintAndErrorNode, this.ReferenceType, this.IReferenceableType, this.MakeRefTarget, this.ILiteral, this.DeRefTarget, this.JoinType, this.IJoinTypeContext, this.ITraceRoot, this.IMultiTraceRoot, this.Revealer, this.IControlAdvancedFeatures_old, this.IMayAllowEffect, this.IMainSlot, this.IMayReadMutableState, this.IWantNewLine, this.IAllowsDocInChildExpressions, this.IVoidContext, this.PragmaExpression, this.PragmaDisableCaching, this.IRunningInterpreterContext, this.DefaultValueExpression, this.ITypeSupportsDefaultValue, this.IContextTypeProvider, this.FailExpr, this.ThisExpression, this.IfElseSection, this.VoidType, this.ICanBeLValue, this.INameQualifier, this.SimpleExpressionValueInspector, this.IProvidePathConstraints, this.ModExpression, this.IAssertConstraints, this.ColonCast, this.SuccessExpression, this.INeverAllowDot, this.AbstractMinMaxExpression, this.MinExpression, this.MaxExpression, this.ITypeOverridingContext, this.NonStrictEqualsExpression, this.AssignmentExpr, this.IProgramLocationProvider, this.ProgramLocationType, this.ProgramLocationOp, this.ProgramLocationUrlOp, this.MessageValueType, this.InlineMessage, this.ITypeSupportsProposals, this.IContextAssistantTypeProvider, this.OrTag, this.MulTag, this.PlusTag, this.OperatorGroup, this.OperatorTag, this.AndTag, this.BangOp, this.ITypeable, this.ConvenientBoolean, this.ConvenientBooleanValue, this.AlwaysValue, this.NeverValue, this.ConvenientValueCond, this.IParameterizedTypeSupportsEquals, this.IContextTypedOp, this.RevealerThis, this.IAllowDeletionOfDot, this.IAllowDotOnLeft, this.HasValueOp, this.EmptyValue, this.ITargetThatCanDealWithNix, this.EmptyType, this.IEmptyLiteral, this.IComplexTypeSupportsEquals]
                }
                                public Expression: _C_Impl_Expression = _C_Impl_Expression
                public Type: _C_Impl_Type = _C_Impl_Type
                public PrimitiveType: _C_Impl_PrimitiveType = _C_Impl_PrimitiveType
                public BinaryExpression: _C_Impl_BinaryExpression = _C_Impl_BinaryExpression
                public PlusExpression: _C_Impl_PlusExpression = _C_Impl_PlusExpression
                public MulExpression: _C_Impl_MulExpression = _C_Impl_MulExpression
                public MinusExpression: _C_Impl_MinusExpression = _C_Impl_MinusExpression
                public DivExpression: _C_Impl_DivExpression = _C_Impl_DivExpression
                public BinaryArithmeticExpression: _C_Impl_BinaryArithmeticExpression = _C_Impl_BinaryArithmeticExpression
                public BinaryComparisonExpression: _C_Impl_BinaryComparisonExpression = _C_Impl_BinaryComparisonExpression
                public GreaterExpression: _C_Impl_GreaterExpression = _C_Impl_GreaterExpression
                public GreaterEqualsExpression: _C_Impl_GreaterEqualsExpression = _C_Impl_GreaterEqualsExpression
                public LessExpression: _C_Impl_LessExpression = _C_Impl_LessExpression
                public LessEqualsExpression: _C_Impl_LessEqualsExpression = _C_Impl_LessEqualsExpression
                public BinaryLogicalExpression: _C_Impl_BinaryLogicalExpression = _C_Impl_BinaryLogicalExpression
                public LogicalOrExpression: _C_Impl_LogicalOrExpression = _C_Impl_LogicalOrExpression
                public LogicalAndExpression: _C_Impl_LogicalAndExpression = _C_Impl_LogicalAndExpression
                public BinaryEqualityExpression: _C_Impl_BinaryEqualityExpression = _C_Impl_BinaryEqualityExpression
                public EqualsExpression: _C_Impl_EqualsExpression = _C_Impl_EqualsExpression
                public NotEqualsExpression: _C_Impl_NotEqualsExpression = _C_Impl_NotEqualsExpression
                public UnaryExpression: _C_Impl_UnaryExpression = _C_Impl_UnaryExpression
                public LogicalNotExpression: _C_Impl_LogicalNotExpression = _C_Impl_LogicalNotExpression
                public UnaryMinusExpression: _C_Impl_UnaryMinusExpression = _C_Impl_UnaryMinusExpression
                public ParensExpression: _C_Impl_ParensExpression = _C_Impl_ParensExpression
                public LogicalImpliesExpression: _C_Impl_LogicalImpliesExpression = _C_Impl_LogicalImpliesExpression
                public DotExpression: _C_Impl_DotExpression = _C_Impl_DotExpression
                public IDotTarget: _C_Impl_IDotTarget = _C_Impl_IDotTarget
                public PrimitiveLiteral: _C_Impl_PrimitiveLiteral = _C_Impl_PrimitiveLiteral
                public IRef: _C_Impl_IRef = _C_Impl_IRef
                public IfExpression: _C_Impl_IfExpression = _C_Impl_IfExpression
                public IBigExpression: _C_Impl_IBigExpression = _C_Impl_IBigExpression
                public IReducableExpression: _C_Impl_IReducableExpression = _C_Impl_IReducableExpression
                public ReductionInspector: _C_Impl_ReductionInspector = _C_Impl_ReductionInspector
                public TracerExpression: _C_Impl_TracerExpression = _C_Impl_TracerExpression
                public NoneLiteral: _C_Impl_NoneLiteral = _C_Impl_NoneLiteral
                public NoneType: _C_Impl_NoneType = _C_Impl_NoneType
                public SomeValExpr: _C_Impl_SomeValExpr = _C_Impl_SomeValExpr
                public OptionType: _C_Impl_OptionType = _C_Impl_OptionType
                public IsSomeExpression: _C_Impl_IsSomeExpression = _C_Impl_IsSomeExpression
                public LogicalIffExpression: _C_Impl_LogicalIffExpression = _C_Impl_LogicalIffExpression
                public IIsSingleSymbol: _C_Impl_IIsSingleSymbol = _C_Impl_IIsSingleSymbol
                public ErrorLiteral: _C_Impl_ErrorLiteral = _C_Impl_ErrorLiteral
                public ErrorExpression: _C_Impl_ErrorExpression = _C_Impl_ErrorExpression
                public SuccessType: _C_Impl_SuccessType = _C_Impl_SuccessType
                public GenericErrorType: _C_Impl_GenericErrorType = _C_Impl_GenericErrorType
                public SpecificErrorType: _C_Impl_SpecificErrorType = _C_Impl_SpecificErrorType
                public IAttemptType: _C_Impl_IAttemptType = _C_Impl_IAttemptType
                public AttemptType: _C_Impl_AttemptType = _C_Impl_AttemptType
                public TryExpression: _C_Impl_TryExpression = _C_Impl_TryExpression
                public TrySuccessClause: _C_Impl_TrySuccessClause = _C_Impl_TrySuccessClause
                public IOptionallyTyped: _C_Impl_IOptionallyTyped = _C_Impl_IOptionallyTyped
                public EmptyExpression: _C_Impl_EmptyExpression = _C_Impl_EmptyExpression
                public TryErrorClause: _C_Impl_TryErrorClause = _C_Impl_TryErrorClause
                public SuccessValueExpr: _C_Impl_SuccessValueExpr = _C_Impl_SuccessValueExpr
                public ITypeFromMultiple: _C_Impl_ITypeFromMultiple = _C_Impl_ITypeFromMultiple
                public CastExpression: _C_Impl_CastExpression = _C_Impl_CastExpression
                public IStructuredSyntax: _C_Impl_IStructuredSyntax = _C_Impl_IStructuredSyntax
                public ExprInContract: _C_Impl_ExprInContract = _C_Impl_ExprInContract
                public IContracted: _C_Impl_IContracted = _C_Impl_IContracted
                public IContainmentStackMember: _C_Impl_IContainmentStackMember = _C_Impl_IContainmentStackMember
                public Postcondition: _C_Impl_Postcondition = _C_Impl_Postcondition
                public Invariant: _C_Impl_Invariant = _C_Impl_Invariant
                public Contract: _C_Impl_Contract = _C_Impl_Contract
                public ContractItem: _C_Impl_ContractItem = _C_Impl_ContractItem
                public Precondition: _C_Impl_Precondition = _C_Impl_Precondition
                public PlainConstraint: _C_Impl_PlainConstraint = _C_Impl_PlainConstraint
                public OneOfTarget: _C_Impl_OneOfTarget = _C_Impl_OneOfTarget
                public RangeTarget: _C_Impl_RangeTarget = _C_Impl_RangeTarget
                public TupleType: _C_Impl_TupleType = _C_Impl_TupleType
                public TupleValue: _C_Impl_TupleValue = _C_Impl_TupleValue
                public TupleAccessExpr: _C_Impl_TupleAccessExpr = _C_Impl_TupleAccessExpr
                public AlternativesExpression: _C_Impl_AlternativesExpression = _C_Impl_AlternativesExpression
                public AltOption: _C_Impl_AltOption = _C_Impl_AltOption
                public IOptionDerefContext: _C_Impl_IOptionDerefContext = _C_Impl_IOptionDerefContext
                public ISingleSymbolRef: _C_Impl_ISingleSymbolRef = _C_Impl_ISingleSymbolRef
                public IScopeFilterer: _C_Impl_IScopeFilterer = _C_Impl_IScopeFilterer
                public OptionOrExpression: _C_Impl_OptionOrExpression = _C_Impl_OptionOrExpression
                public IMayHaveEffect: _C_Impl_IMayHaveEffect = _C_Impl_IMayHaveEffect
                public IBlockLike: _C_Impl_IBlockLike = _C_Impl_IBlockLike
                public CheckTypeConstraintsExpr: _C_Impl_CheckTypeConstraintsExpr = _C_Impl_CheckTypeConstraintsExpr
                public ValidityType: _C_Impl_ValidityType = _C_Impl_ValidityType
                public OkTarget: _C_Impl_OkTarget = _C_Impl_OkTarget
                public ErrorTarget: _C_Impl_ErrorTarget = _C_Impl_ErrorTarget
                public ImplicitValidityValExpr: _C_Impl_ImplicitValidityValExpr = _C_Impl_ImplicitValidityValExpr
                public IValidOtherwiseContainer: _C_Impl_IValidOtherwiseContainer = _C_Impl_IValidOtherwiseContainer
                public ITyped: _C_Impl_ITyped = _C_Impl_ITyped
                public IIgnoreTrivialErrorsContext: _C_Impl_IIgnoreTrivialErrorsContext = _C_Impl_IIgnoreTrivialErrorsContext
                public IDeclarativelyInterpretable: _C_Impl_IDeclarativelyInterpretable = _C_Impl_IDeclarativelyInterpretable
                public IDocumentableWordProvider: _C_Impl_IDocumentableWordProvider = _C_Impl_IDocumentableWordProvider
                public DocWordRef: _C_Impl_DocWordRef = _C_Impl_DocWordRef
                public IDocumentableWordContainer: _C_Impl_IDocumentableWordContainer = _C_Impl_IDocumentableWordContainer
                public IHasBaseType: _C_Impl_IHasBaseType = _C_Impl_IHasBaseType
                public ISSConstrainedValue: _C_Impl_ISSConstrainedValue = _C_Impl_ISSConstrainedValue
                public ISSConstrainedValueRef: _C_Impl_ISSConstrainedValueRef = _C_Impl_ISSConstrainedValueRef
                public ISSItValueRef: _C_Impl_ISSItValueRef = _C_Impl_ISSItValueRef
                public ISSDelegatingType: _C_Impl_ISSDelegatingType = _C_Impl_ISSDelegatingType
                public ICollectionType: _C_Impl_ICollectionType = _C_Impl_ICollectionType
                public ConstraintAndErrorNode: _C_Impl_ConstraintAndErrorNode = _C_Impl_ConstraintAndErrorNode
                public ReferenceType: _C_Impl_ReferenceType = _C_Impl_ReferenceType
                public IReferenceableType: _C_Impl_IReferenceableType = _C_Impl_IReferenceableType
                public MakeRefTarget: _C_Impl_MakeRefTarget = _C_Impl_MakeRefTarget
                public ILiteral: _C_Impl_ILiteral = _C_Impl_ILiteral
                public DeRefTarget: _C_Impl_DeRefTarget = _C_Impl_DeRefTarget
                public JoinType: _C_Impl_JoinType = _C_Impl_JoinType
                public IJoinTypeContext: _C_Impl_IJoinTypeContext = _C_Impl_IJoinTypeContext
                public ITraceRoot: _C_Impl_ITraceRoot = _C_Impl_ITraceRoot
                public IMultiTraceRoot: _C_Impl_IMultiTraceRoot = _C_Impl_IMultiTraceRoot
                public Revealer: _C_Impl_Revealer = _C_Impl_Revealer
                public IControlAdvancedFeatures_old: _C_Impl_IControlAdvancedFeatures_old = _C_Impl_IControlAdvancedFeatures_old
                public IMayAllowEffect: _C_Impl_IMayAllowEffect = _C_Impl_IMayAllowEffect
                public IMainSlot: _C_Impl_IMainSlot = _C_Impl_IMainSlot
                public IMayReadMutableState: _C_Impl_IMayReadMutableState = _C_Impl_IMayReadMutableState
                public IWantNewLine: _C_Impl_IWantNewLine = _C_Impl_IWantNewLine
                public IAllowsDocInChildExpressions: _C_Impl_IAllowsDocInChildExpressions = _C_Impl_IAllowsDocInChildExpressions
                public IVoidContext: _C_Impl_IVoidContext = _C_Impl_IVoidContext
                public PragmaExpression: _C_Impl_PragmaExpression = _C_Impl_PragmaExpression
                public PragmaDisableCaching: _C_Impl_PragmaDisableCaching = _C_Impl_PragmaDisableCaching
                public IRunningInterpreterContext: _C_Impl_IRunningInterpreterContext = _C_Impl_IRunningInterpreterContext
                public DefaultValueExpression: _C_Impl_DefaultValueExpression = _C_Impl_DefaultValueExpression
                public ITypeSupportsDefaultValue: _C_Impl_ITypeSupportsDefaultValue = _C_Impl_ITypeSupportsDefaultValue
                public IContextTypeProvider: _C_Impl_IContextTypeProvider = _C_Impl_IContextTypeProvider
                public FailExpr: _C_Impl_FailExpr = _C_Impl_FailExpr
                public ThisExpression: _C_Impl_ThisExpression = _C_Impl_ThisExpression
                public IfElseSection: _C_Impl_IfElseSection = _C_Impl_IfElseSection
                public VoidType: _C_Impl_VoidType = _C_Impl_VoidType
                public ICanBeLValue: _C_Impl_ICanBeLValue = _C_Impl_ICanBeLValue
                public INameQualifier: _C_Impl_INameQualifier = _C_Impl_INameQualifier
                public SimpleExpressionValueInspector: _C_Impl_SimpleExpressionValueInspector = _C_Impl_SimpleExpressionValueInspector
                public IProvidePathConstraints: _C_Impl_IProvidePathConstraints = _C_Impl_IProvidePathConstraints
                public ModExpression: _C_Impl_ModExpression = _C_Impl_ModExpression
                public IAssertConstraints: _C_Impl_IAssertConstraints = _C_Impl_IAssertConstraints
                public ColonCast: _C_Impl_ColonCast = _C_Impl_ColonCast
                public SuccessExpression: _C_Impl_SuccessExpression = _C_Impl_SuccessExpression
                public INeverAllowDot: _C_Impl_INeverAllowDot = _C_Impl_INeverAllowDot
                public AbstractMinMaxExpression: _C_Impl_AbstractMinMaxExpression = _C_Impl_AbstractMinMaxExpression
                public MinExpression: _C_Impl_MinExpression = _C_Impl_MinExpression
                public MaxExpression: _C_Impl_MaxExpression = _C_Impl_MaxExpression
                public ITypeOverridingContext: _C_Impl_ITypeOverridingContext = _C_Impl_ITypeOverridingContext
                public NonStrictEqualsExpression: _C_Impl_NonStrictEqualsExpression = _C_Impl_NonStrictEqualsExpression
                public AssignmentExpr: _C_Impl_AssignmentExpr = _C_Impl_AssignmentExpr
                public IProgramLocationProvider: _C_Impl_IProgramLocationProvider = _C_Impl_IProgramLocationProvider
                public ProgramLocationType: _C_Impl_ProgramLocationType = _C_Impl_ProgramLocationType
                public ProgramLocationOp: _C_Impl_ProgramLocationOp = _C_Impl_ProgramLocationOp
                public ProgramLocationUrlOp: _C_Impl_ProgramLocationUrlOp = _C_Impl_ProgramLocationUrlOp
                public MessageValueType: _C_Impl_MessageValueType = _C_Impl_MessageValueType
                public InlineMessage: _C_Impl_InlineMessage = _C_Impl_InlineMessage
                public ITypeSupportsProposals: _C_Impl_ITypeSupportsProposals = _C_Impl_ITypeSupportsProposals
                public IContextAssistantTypeProvider: _C_Impl_IContextAssistantTypeProvider = _C_Impl_IContextAssistantTypeProvider
                public OrTag: _C_Impl_OrTag = _C_Impl_OrTag
                public MulTag: _C_Impl_MulTag = _C_Impl_MulTag
                public PlusTag: _C_Impl_PlusTag = _C_Impl_PlusTag
                public OperatorGroup: _C_Impl_OperatorGroup = _C_Impl_OperatorGroup
                public OperatorTag: _C_Impl_OperatorTag = _C_Impl_OperatorTag
                public AndTag: _C_Impl_AndTag = _C_Impl_AndTag
                public BangOp: _C_Impl_BangOp = _C_Impl_BangOp
                public ITypeable: _C_Impl_ITypeable = _C_Impl_ITypeable
                public ConvenientBoolean: _C_Impl_ConvenientBoolean = _C_Impl_ConvenientBoolean
                public ConvenientBooleanValue: _C_Impl_ConvenientBooleanValue = _C_Impl_ConvenientBooleanValue
                public AlwaysValue: _C_Impl_AlwaysValue = _C_Impl_AlwaysValue
                public NeverValue: _C_Impl_NeverValue = _C_Impl_NeverValue
                public ConvenientValueCond: _C_Impl_ConvenientValueCond = _C_Impl_ConvenientValueCond
                public IParameterizedTypeSupportsEquals: _C_Impl_IParameterizedTypeSupportsEquals = _C_Impl_IParameterizedTypeSupportsEquals
                public IContextTypedOp: _C_Impl_IContextTypedOp = _C_Impl_IContextTypedOp
                public RevealerThis: _C_Impl_RevealerThis = _C_Impl_RevealerThis
                public IAllowDeletionOfDot: _C_Impl_IAllowDeletionOfDot = _C_Impl_IAllowDeletionOfDot
                public IAllowDotOnLeft: _C_Impl_IAllowDotOnLeft = _C_Impl_IAllowDotOnLeft
                public HasValueOp: _C_Impl_HasValueOp = _C_Impl_HasValueOp
                public EmptyValue: _C_Impl_EmptyValue = _C_Impl_EmptyValue
                public ITargetThatCanDealWithNix: _C_Impl_ITargetThatCanDealWithNix = _C_Impl_ITargetThatCanDealWithNix
                public EmptyType: _C_Impl_EmptyType = _C_Impl_EmptyType
                public IEmptyLiteral: _C_Impl_IEmptyLiteral = _C_Impl_IEmptyLiteral
                public IComplexTypeSupportsEquals: _C_Impl_IComplexTypeSupportsEquals = _C_Impl_IComplexTypeSupportsEquals
                */
            }
            export const INSTANCE = L_org_iets3_core_expr_base.INSTANCE
            
                                    export interface N_Expression extends L_jetbrains_mps_lang_core.N_BaseConcept, L_com_mbeddr_core_base.N_ICommentable, L_com_mbeddr_core_base.N_IDocumentable {
                            _is_org_iets3_core_expr_base_Expression: boolean
                            
                        }
                        
                        export namespace N_Expression {
                            export function isInstance(node: ITypedNode): node is N_Expression {
                                return '_is_org_iets3_core_expr_base_Expression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Expression extends TypedNode implements N_Expression {
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
                        
                        
                        export interface N_Type extends L_jetbrains_mps_lang_core.N_BaseConcept, L_jetbrains_mps_lang_core.N_IType, L_com_mbeddr_core_base.N_ICommentable {
                            _is_org_iets3_core_expr_base_Type: boolean
                            
                        }
                        
                        export namespace N_Type {
                            export function isInstance(node: ITypedNode): node is N_Type {
                                return '_is_org_iets3_core_expr_base_Type' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Type extends TypedNode implements N_Type {
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
                        }
                        
                        
                        export interface N_PrimitiveType extends N_Type {
                            _is_org_iets3_core_expr_base_PrimitiveType: boolean
                            
                        }
                        
                        export namespace N_PrimitiveType {
                            export function isInstance(node: ITypedNode): node is N_PrimitiveType {
                                return '_is_org_iets3_core_expr_base_PrimitiveType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_PrimitiveType extends TypedNode implements N_PrimitiveType {
                            public _is_org_iets3_core_expr_base_PrimitiveType: boolean = true
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
                        }
                        
                        
                        export interface N_BinaryExpression extends N_Expression, N_IMainSlot, N_IMayHaveEffect {
                            _is_org_iets3_core_expr_base_BinaryExpression: boolean
                            left: SingleChildAccessor<N_Expression>
            right: SingleChildAccessor<N_Expression>
                        }
                        
                        export namespace N_BinaryExpression {
                            export function isInstance(node: ITypedNode): node is N_BinaryExpression {
                                return '_is_org_iets3_core_expr_base_BinaryExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BinaryExpression extends TypedNode implements N_BinaryExpression {
                            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
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
                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
                        }
                        
                        
                        export interface N_PlusExpression extends N_BinaryArithmeticExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_PlusExpression: boolean
                            
                        }
                        
                        export namespace N_PlusExpression {
                            export function isInstance(node: ITypedNode): node is N_PlusExpression {
                                return '_is_org_iets3_core_expr_base_PlusExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_PlusExpression extends TypedNode implements N_PlusExpression {
                            public _is_org_iets3_core_expr_base_PlusExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryArithmeticExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_MulExpression extends N_BinaryArithmeticExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_MulExpression: boolean
                            
                        }
                        
                        export namespace N_MulExpression {
                            export function isInstance(node: ITypedNode): node is N_MulExpression {
                                return '_is_org_iets3_core_expr_base_MulExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MulExpression extends TypedNode implements N_MulExpression {
                            public _is_org_iets3_core_expr_base_MulExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryArithmeticExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_MinusExpression extends N_BinaryArithmeticExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_MinusExpression: boolean
                            
                        }
                        
                        export namespace N_MinusExpression {
                            export function isInstance(node: ITypedNode): node is N_MinusExpression {
                                return '_is_org_iets3_core_expr_base_MinusExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MinusExpression extends TypedNode implements N_MinusExpression {
                            public _is_org_iets3_core_expr_base_MinusExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryArithmeticExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_DivExpression extends N_BinaryArithmeticExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_DivExpression: boolean
                            
                        }
                        
                        export namespace N_DivExpression {
                            export function isInstance(node: ITypedNode): node is N_DivExpression {
                                return '_is_org_iets3_core_expr_base_DivExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_DivExpression extends TypedNode implements N_DivExpression {
                            public _is_org_iets3_core_expr_base_DivExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryArithmeticExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_BinaryArithmeticExpression extends N_BinaryExpression {
                            _is_org_iets3_core_expr_base_BinaryArithmeticExpression: boolean
                            
                        }
                        
                        export namespace N_BinaryArithmeticExpression {
                            export function isInstance(node: ITypedNode): node is N_BinaryArithmeticExpression {
                                return '_is_org_iets3_core_expr_base_BinaryArithmeticExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BinaryArithmeticExpression extends TypedNode implements N_BinaryArithmeticExpression {
                            public _is_org_iets3_core_expr_base_BinaryArithmeticExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_BinaryComparisonExpression extends N_BinaryExpression {
                            _is_org_iets3_core_expr_base_BinaryComparisonExpression: boolean
                            
                        }
                        
                        export namespace N_BinaryComparisonExpression {
                            export function isInstance(node: ITypedNode): node is N_BinaryComparisonExpression {
                                return '_is_org_iets3_core_expr_base_BinaryComparisonExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BinaryComparisonExpression extends TypedNode implements N_BinaryComparisonExpression {
                            public _is_org_iets3_core_expr_base_BinaryComparisonExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_GreaterExpression extends N_BinaryComparisonExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_GreaterExpression: boolean
                            
                        }
                        
                        export namespace N_GreaterExpression {
                            export function isInstance(node: ITypedNode): node is N_GreaterExpression {
                                return '_is_org_iets3_core_expr_base_GreaterExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_GreaterExpression extends TypedNode implements N_GreaterExpression {
                            public _is_org_iets3_core_expr_base_GreaterExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryComparisonExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_GreaterEqualsExpression extends N_BinaryComparisonExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_GreaterEqualsExpression: boolean
                            
                        }
                        
                        export namespace N_GreaterEqualsExpression {
                            export function isInstance(node: ITypedNode): node is N_GreaterEqualsExpression {
                                return '_is_org_iets3_core_expr_base_GreaterEqualsExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_GreaterEqualsExpression extends TypedNode implements N_GreaterEqualsExpression {
                            public _is_org_iets3_core_expr_base_GreaterEqualsExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryComparisonExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_LessExpression extends N_BinaryComparisonExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_LessExpression: boolean
                            
                        }
                        
                        export namespace N_LessExpression {
                            export function isInstance(node: ITypedNode): node is N_LessExpression {
                                return '_is_org_iets3_core_expr_base_LessExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LessExpression extends TypedNode implements N_LessExpression {
                            public _is_org_iets3_core_expr_base_LessExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryComparisonExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_LessEqualsExpression extends N_BinaryComparisonExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_LessEqualsExpression: boolean
                            
                        }
                        
                        export namespace N_LessEqualsExpression {
                            export function isInstance(node: ITypedNode): node is N_LessEqualsExpression {
                                return '_is_org_iets3_core_expr_base_LessEqualsExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LessEqualsExpression extends TypedNode implements N_LessEqualsExpression {
                            public _is_org_iets3_core_expr_base_LessEqualsExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryComparisonExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_BinaryLogicalExpression extends N_BinaryExpression {
                            _is_org_iets3_core_expr_base_BinaryLogicalExpression: boolean
                            
                        }
                        
                        export namespace N_BinaryLogicalExpression {
                            export function isInstance(node: ITypedNode): node is N_BinaryLogicalExpression {
                                return '_is_org_iets3_core_expr_base_BinaryLogicalExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BinaryLogicalExpression extends TypedNode implements N_BinaryLogicalExpression {
                            public _is_org_iets3_core_expr_base_BinaryLogicalExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_LogicalOrExpression extends N_BinaryLogicalExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_LogicalOrExpression: boolean
                            
                        }
                        
                        export namespace N_LogicalOrExpression {
                            export function isInstance(node: ITypedNode): node is N_LogicalOrExpression {
                                return '_is_org_iets3_core_expr_base_LogicalOrExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LogicalOrExpression extends TypedNode implements N_LogicalOrExpression {
                            public _is_org_iets3_core_expr_base_LogicalOrExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryLogicalExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_LogicalAndExpression extends N_BinaryLogicalExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_LogicalAndExpression: boolean
                            
                        }
                        
                        export namespace N_LogicalAndExpression {
                            export function isInstance(node: ITypedNode): node is N_LogicalAndExpression {
                                return '_is_org_iets3_core_expr_base_LogicalAndExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LogicalAndExpression extends TypedNode implements N_LogicalAndExpression {
                            public _is_org_iets3_core_expr_base_LogicalAndExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryLogicalExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_BinaryEqualityExpression extends N_BinaryExpression {
                            _is_org_iets3_core_expr_base_BinaryEqualityExpression: boolean
                            
                        }
                        
                        export namespace N_BinaryEqualityExpression {
                            export function isInstance(node: ITypedNode): node is N_BinaryEqualityExpression {
                                return '_is_org_iets3_core_expr_base_BinaryEqualityExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BinaryEqualityExpression extends TypedNode implements N_BinaryEqualityExpression {
                            public _is_org_iets3_core_expr_base_BinaryEqualityExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_EqualsExpression extends N_BinaryEqualityExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_EqualsExpression: boolean
                            
                        }
                        
                        export namespace N_EqualsExpression {
                            export function isInstance(node: ITypedNode): node is N_EqualsExpression {
                                return '_is_org_iets3_core_expr_base_EqualsExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EqualsExpression extends TypedNode implements N_EqualsExpression {
                            public _is_org_iets3_core_expr_base_EqualsExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryEqualityExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_NotEqualsExpression extends N_BinaryEqualityExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_NotEqualsExpression: boolean
                            
                        }
                        
                        export namespace N_NotEqualsExpression {
                            export function isInstance(node: ITypedNode): node is N_NotEqualsExpression {
                                return '_is_org_iets3_core_expr_base_NotEqualsExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NotEqualsExpression extends TypedNode implements N_NotEqualsExpression {
                            public _is_org_iets3_core_expr_base_NotEqualsExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryEqualityExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_UnaryExpression extends N_Expression, N_IMayHaveEffect {
                            _is_org_iets3_core_expr_base_UnaryExpression: boolean
                            expr: SingleChildAccessor<N_Expression>
                        }
                        
                        export namespace N_UnaryExpression {
                            export function isInstance(node: ITypedNode): node is N_UnaryExpression {
                                return '_is_org_iets3_core_expr_base_UnaryExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_UnaryExpression extends TypedNode implements N_UnaryExpression {
                            public _is_org_iets3_core_expr_base_UnaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                        }
                        
                        
                        export interface N_LogicalNotExpression extends N_UnaryExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_LogicalNotExpression: boolean
                            
                        }
                        
                        export namespace N_LogicalNotExpression {
                            export function isInstance(node: ITypedNode): node is N_LogicalNotExpression {
                                return '_is_org_iets3_core_expr_base_LogicalNotExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LogicalNotExpression extends TypedNode implements N_LogicalNotExpression {
                            public _is_org_iets3_core_expr_base_LogicalNotExpression: boolean = true
            public _is_org_iets3_core_expr_base_UnaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
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
                        
                        
                        export interface N_UnaryMinusExpression extends N_UnaryExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_UnaryMinusExpression: boolean
                            
                        }
                        
                        export namespace N_UnaryMinusExpression {
                            export function isInstance(node: ITypedNode): node is N_UnaryMinusExpression {
                                return '_is_org_iets3_core_expr_base_UnaryMinusExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_UnaryMinusExpression extends TypedNode implements N_UnaryMinusExpression {
                            public _is_org_iets3_core_expr_base_UnaryMinusExpression: boolean = true
            public _is_org_iets3_core_expr_base_UnaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
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
                        
                        
                        export interface N_ParensExpression extends N_Expression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver, N_IMayHaveEffect {
                            _is_org_iets3_core_expr_base_ParensExpression: boolean
                            expr: SingleChildAccessor<N_Expression>
                        }
                        
                        export namespace N_ParensExpression {
                            export function isInstance(node: ITypedNode): node is N_ParensExpression {
                                return '_is_org_iets3_core_expr_base_ParensExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ParensExpression extends TypedNode implements N_ParensExpression {
                            public _is_org_iets3_core_expr_base_ParensExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
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
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                        }
                        
                        
                        export interface N_LogicalImpliesExpression extends N_BinaryLogicalExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_LogicalImpliesExpression: boolean
                            
                        }
                        
                        export namespace N_LogicalImpliesExpression {
                            export function isInstance(node: ITypedNode): node is N_LogicalImpliesExpression {
                                return '_is_org_iets3_core_expr_base_LogicalImpliesExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LogicalImpliesExpression extends TypedNode implements N_LogicalImpliesExpression {
                            public _is_org_iets3_core_expr_base_LogicalImpliesExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryLogicalExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_DotExpression extends N_UnaryExpression, N_IMayHaveEffect, L_com_mbeddr_mpsutil_interpreter.N_ITracerFrame, N_ICanBeLValue, N_ISSConstrainedValueRef {
                            _is_org_iets3_core_expr_base_DotExpression: boolean
                            target: SingleChildAccessor<N_IDotTarget>
                        }
                        
                        export namespace N_DotExpression {
                            export function isInstance(node: ITypedNode): node is N_DotExpression {
                                return '_is_org_iets3_core_expr_base_DotExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_DotExpression extends TypedNode implements N_DotExpression {
                            public _is_org_iets3_core_expr_base_DotExpression: boolean = true
            public _is_org_iets3_core_expr_base_UnaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_ICanBeLValue: boolean = true
            public _is_org_iets3_core_expr_base_ISSConstrainedValueRef: boolean = true
                                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
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
                            public target: SingleChildAccessor<N_IDotTarget> = new SingleChildAccessor(this.node, "target")
                        }
                        
                        
                        export interface N_IDotTarget extends L_com_mbeddr_mpsutil_interpreter.N_ITracerFrame {
                            _is_org_iets3_core_expr_base_IDotTarget: boolean
                            
                        }
                        
                        export namespace N_IDotTarget {
                            export function isInstance(node: ITypedNode): node is N_IDotTarget {
                                return '_is_org_iets3_core_expr_base_IDotTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IDotTarget extends TypedNode implements N_IDotTarget {
                            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
                            
                        }
                        
                        
                        export interface N_PrimitiveLiteral extends N_Expression, N_ILiteral {
                            _is_org_iets3_core_expr_base_PrimitiveLiteral: boolean
                            
                        }
                        
                        export namespace N_PrimitiveLiteral {
                            export function isInstance(node: ITypedNode): node is N_PrimitiveLiteral {
                                return '_is_org_iets3_core_expr_base_PrimitiveLiteral' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_PrimitiveLiteral extends TypedNode implements N_PrimitiveLiteral {
                            public _is_org_iets3_core_expr_base_PrimitiveLiteral: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_ILiteral: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITrivialNode: boolean = true
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
                        
            
            export interface N_IRef extends ITypedNode {
                _is_org_iets3_core_expr_base_IRef: boolean
                
            }
            
            export namespace N_IRef {
                export function isInstance(node: ITypedNode): node is N_IRef {
                    return '_is_org_iets3_core_expr_base_IRef' in node;
                }
            }
            
            export class _N_TypedImpl_IRef extends TypedNode implements N_IRef {
                public _is_org_iets3_core_expr_base_IRef: boolean = true
                
            }
            
                        
                        export interface N_IfExpression extends N_Expression, N_IBigExpression, N_ITypeFromMultiple, N_IOptionDerefContext, L_com_mbeddr_mpsutil_interpreter.N_ITracerFrame, N_IMainSlot, N_IMayHaveEffect, N_IMayAllowEffect, L_org_iets3_analysis_base.N_ICanBeMappedToSolver, N_IProvidePathConstraints {
                            _is_org_iets3_core_expr_base_IfExpression: boolean
                            condition: SingleChildAccessor<N_Expression>
            thenPart: SingleChildAccessor<N_Expression>
            elsePart: SingleChildAccessor<N_Expression>
            elseSection: SingleChildAccessor<N_IfElseSection>
                        }
                        
                        export namespace N_IfExpression {
                            export function isInstance(node: ITypedNode): node is N_IfExpression {
                                return '_is_org_iets3_core_expr_base_IfExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IfExpression extends TypedNode implements N_IfExpression {
                            public _is_org_iets3_core_expr_base_IfExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IBigExpression: boolean = true
            public _is_org_iets3_core_expr_base_IWantNewLine: boolean = true
            public _is_org_iets3_core_expr_base_ITypeFromMultiple: boolean = true
            public _is_org_iets3_core_expr_base_IOptionDerefContext: boolean = true
            public _is_org_iets3_core_expr_base_IScopeFilterer: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
            public _is_org_iets3_core_expr_base_IProvidePathConstraints: boolean = true
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
                            public condition: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "condition")
                            public thenPart: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "thenPart")
                            public elsePart: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "elsePart")
                            public elseSection: SingleChildAccessor<N_IfElseSection> = new SingleChildAccessor(this.node, "elseSection")
                        }
                        
                        
                        export interface N_IBigExpression extends N_IWantNewLine {
                            _is_org_iets3_core_expr_base_IBigExpression: boolean
                            
                        }
                        
                        export namespace N_IBigExpression {
                            export function isInstance(node: ITypedNode): node is N_IBigExpression {
                                return '_is_org_iets3_core_expr_base_IBigExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IBigExpression extends TypedNode implements N_IBigExpression {
                            public _is_org_iets3_core_expr_base_IBigExpression: boolean = true
            public _is_org_iets3_core_expr_base_IWantNewLine: boolean = true
                            
                        }
                        
            
            export interface N_IReducableExpression extends ITypedNode {
                _is_org_iets3_core_expr_base_IReducableExpression: boolean
                
            }
            
            export namespace N_IReducableExpression {
                export function isInstance(node: ITypedNode): node is N_IReducableExpression {
                    return '_is_org_iets3_core_expr_base_IReducableExpression' in node;
                }
            }
            
            export class _N_TypedImpl_IReducableExpression extends TypedNode implements N_IReducableExpression {
                public _is_org_iets3_core_expr_base_IReducableExpression: boolean = true
                
            }
            
                        
                        export interface N_ReductionInspector extends L_jetbrains_mps_lang_core.N_NodeAttribute {
                            _is_org_iets3_core_expr_base_ReductionInspector: boolean
                            reduced: SingleChildAccessor<N_Expression>
                        }
                        
                        export namespace N_ReductionInspector {
                            export function isInstance(node: ITypedNode): node is N_ReductionInspector {
                                return '_is_org_iets3_core_expr_base_ReductionInspector' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ReductionInspector extends TypedNode implements N_ReductionInspector {
                            public _is_org_iets3_core_expr_base_ReductionInspector: boolean = true
            public _is_jetbrains_mps_lang_core_NodeAttribute: boolean = true
            public _is_jetbrains_mps_lang_core_Attribute: boolean = true
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
                            public reduced: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "reduced")
                        }
                        
                        
                        export interface N_TracerExpression extends N_Expression {
                            _is_org_iets3_core_expr_base_TracerExpression: boolean
                            traceLabel: string | undefined
            traced: SingleChildAccessor<N_Expression>
                                
                        }
                        
                        export namespace N_TracerExpression {
                            export function isInstance(node: ITypedNode): node is N_TracerExpression {
                                return '_is_org_iets3_core_expr_base_TracerExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TracerExpression extends TypedNode implements N_TracerExpression {
                            public _is_org_iets3_core_expr_base_TracerExpression: boolean = true
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
                            public set traceLabel(value: string | undefined) {
                                this.node.setPropertyValue("traceLabel", value)
                            }
                            public get traceLabel(): string | undefined {
                                return this.node.getPropertyValue("traceLabel")
                            }
                            public traced: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "traced")
                        }
                        
                        
                        export interface N_NoneLiteral extends N_Expression {
                            _is_org_iets3_core_expr_base_NoneLiteral: boolean
                            optionalBaseType: SingleChildAccessor<N_Type>
                        }
                        
                        export namespace N_NoneLiteral {
                            export function isInstance(node: ITypedNode): node is N_NoneLiteral {
                                return '_is_org_iets3_core_expr_base_NoneLiteral' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NoneLiteral extends TypedNode implements N_NoneLiteral {
                            public _is_org_iets3_core_expr_base_NoneLiteral: boolean = true
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
                            public optionalBaseType: SingleChildAccessor<N_Type> = new SingleChildAccessor(this.node, "optionalBaseType")
                        }
                        
                        
                        export interface N_NoneType extends N_Type {
                            _is_org_iets3_core_expr_base_NoneType: boolean
                            
                        }
                        
                        export namespace N_NoneType {
                            export function isInstance(node: ITypedNode): node is N_NoneType {
                                return '_is_org_iets3_core_expr_base_NoneType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NoneType extends TypedNode implements N_NoneType {
                            public _is_org_iets3_core_expr_base_NoneType: boolean = true
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
                        }
                        
                        
                        export interface N_SomeValExpr extends N_Expression {
                            _is_org_iets3_core_expr_base_SomeValExpr: boolean
                                                
                        }
                        
                        export namespace N_SomeValExpr {
                            export function isInstance(node: ITypedNode): node is N_SomeValExpr {
                                return '_is_org_iets3_core_expr_base_SomeValExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SomeValExpr extends TypedNode implements N_SomeValExpr {
                            public _is_org_iets3_core_expr_base_SomeValExpr: boolean = true
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
                        
                        
                        export interface N_OptionType extends N_Type, L_com_mbeddr_mpsutil_interpreter.N_IInterpreterWrapperType, N_ITypeSupportsDefaultValue {
                            _is_org_iets3_core_expr_base_OptionType: boolean
                            baseType: SingleChildAccessor<N_Type>
                        }
                        
                        export namespace N_OptionType {
                            export function isInstance(node: ITypedNode): node is N_OptionType {
                                return '_is_org_iets3_core_expr_base_OptionType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_OptionType extends TypedNode implements N_OptionType {
                            public _is_org_iets3_core_expr_base_OptionType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_IInterpreterWrapperType: boolean = true
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
                            public baseType: SingleChildAccessor<N_Type> = new SingleChildAccessor(this.node, "baseType")
                        }
                        
                        
                        export interface N_IsSomeExpression extends N_Expression, L_org_iets3_core_base.N_IOptionallyNamed, N_IMayHaveEffect, N_IMayAllowEffect, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_IsSomeExpression: boolean
                            expr: SingleChildAccessor<N_Expression>
                        }
                        
                        export namespace N_IsSomeExpression {
                            export function isInstance(node: ITypedNode): node is N_IsSomeExpression {
                                return '_is_org_iets3_core_expr_base_IsSomeExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IsSomeExpression extends TypedNode implements N_IsSomeExpression {
                            public _is_org_iets3_core_expr_base_IsSomeExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_base_IOptionallyNamed: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_jetbrains_mps_lang_core_ISmartReferent: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
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
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.N_OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
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
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                        }
                        
                        
                        export interface N_LogicalIffExpression extends N_BinaryLogicalExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_LogicalIffExpression: boolean
                            
                        }
                        
                        export namespace N_LogicalIffExpression {
                            export function isInstance(node: ITypedNode): node is N_LogicalIffExpression {
                                return '_is_org_iets3_core_expr_base_LogicalIffExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LogicalIffExpression extends TypedNode implements N_LogicalIffExpression {
                            public _is_org_iets3_core_expr_base_LogicalIffExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryLogicalExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
            
            export interface N_IIsSingleSymbol extends ITypedNode {
                _is_org_iets3_core_expr_base_IIsSingleSymbol: boolean
                
            }
            
            export namespace N_IIsSingleSymbol {
                export function isInstance(node: ITypedNode): node is N_IIsSingleSymbol {
                    return '_is_org_iets3_core_expr_base_IIsSingleSymbol' in node;
                }
            }
            
            export class _N_TypedImpl_IIsSingleSymbol extends TypedNode implements N_IIsSingleSymbol {
                public _is_org_iets3_core_expr_base_IIsSingleSymbol: boolean = true
                
            }
            
                        
                        export interface N_ErrorLiteral extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_base.N_IValidNamedConcept {
                            _is_org_iets3_core_expr_base_ErrorLiteral: boolean
                            
                        }
                        
                        export namespace N_ErrorLiteral {
                            export function isInstance(node: ITypedNode): node is N_ErrorLiteral {
                                return '_is_org_iets3_core_expr_base_ErrorLiteral' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ErrorLiteral extends TypedNode implements N_ErrorLiteral {
                            public _is_org_iets3_core_expr_base_ErrorLiteral: boolean = true
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
                        }
                        
                        
                        export interface N_ErrorExpression extends N_Expression {
                            _is_org_iets3_core_expr_base_ErrorExpression: boolean
                            error: SingleChildAccessor<N_ErrorLiteral>
                        }
                        
                        export namespace N_ErrorExpression {
                            export function isInstance(node: ITypedNode): node is N_ErrorExpression {
                                return '_is_org_iets3_core_expr_base_ErrorExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ErrorExpression extends TypedNode implements N_ErrorExpression {
                            public _is_org_iets3_core_expr_base_ErrorExpression: boolean = true
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
                            public error: SingleChildAccessor<N_ErrorLiteral> = new SingleChildAccessor(this.node, "error")
                        }
                        
                        
                        export interface N_SuccessType extends N_Type, N_IAttemptType {
                            _is_org_iets3_core_expr_base_SuccessType: boolean
                            baseType: SingleChildAccessor<N_Type>
                        }
                        
                        export namespace N_SuccessType {
                            export function isInstance(node: ITypedNode): node is N_SuccessType {
                                return '_is_org_iets3_core_expr_base_SuccessType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SuccessType extends TypedNode implements N_SuccessType {
                            public _is_org_iets3_core_expr_base_SuccessType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IAttemptType: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_IInterpreterWrapperType: boolean = true
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
                            public baseType: SingleChildAccessor<N_Type> = new SingleChildAccessor(this.node, "baseType")
                        }
                        
                        
                        export interface N_GenericErrorType extends N_Type, N_IAttemptType {
                            _is_org_iets3_core_expr_base_GenericErrorType: boolean
                            
                        }
                        
                        export namespace N_GenericErrorType {
                            export function isInstance(node: ITypedNode): node is N_GenericErrorType {
                                return '_is_org_iets3_core_expr_base_GenericErrorType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_GenericErrorType extends TypedNode implements N_GenericErrorType {
                            public _is_org_iets3_core_expr_base_GenericErrorType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IAttemptType: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_IInterpreterWrapperType: boolean = true
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
                        
                        
                        export interface N_SpecificErrorType extends N_Type, N_IAttemptType {
                            _is_org_iets3_core_expr_base_SpecificErrorType: boolean
                            error: SingleChildAccessor<N_ErrorLiteral>
                        }
                        
                        export namespace N_SpecificErrorType {
                            export function isInstance(node: ITypedNode): node is N_SpecificErrorType {
                                return '_is_org_iets3_core_expr_base_SpecificErrorType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SpecificErrorType extends TypedNode implements N_SpecificErrorType {
                            public _is_org_iets3_core_expr_base_SpecificErrorType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IAttemptType: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_IInterpreterWrapperType: boolean = true
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
                            public error: SingleChildAccessor<N_ErrorLiteral> = new SingleChildAccessor(this.node, "error")
                        }
                        
                        
                        export interface N_IAttemptType extends L_com_mbeddr_mpsutil_interpreter.N_IInterpreterWrapperType {
                            _is_org_iets3_core_expr_base_IAttemptType: boolean
                            
                        }
                        
                        export namespace N_IAttemptType {
                            export function isInstance(node: ITypedNode): node is N_IAttemptType {
                                return '_is_org_iets3_core_expr_base_IAttemptType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IAttemptType extends TypedNode implements N_IAttemptType {
                            public _is_org_iets3_core_expr_base_IAttemptType: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_IInterpreterWrapperType: boolean = true
                            
                        }
                        
                        
                        export interface N_AttemptType extends N_Type, N_IAttemptType {
                            _is_org_iets3_core_expr_base_AttemptType: boolean
                            successType: SingleChildAccessor<N_Type>
            errorLiterals: ChildListAccessor<N_ErrorLiteral>
                        }
                        
                        export namespace N_AttemptType {
                            export function isInstance(node: ITypedNode): node is N_AttemptType {
                                return '_is_org_iets3_core_expr_base_AttemptType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AttemptType extends TypedNode implements N_AttemptType {
                            public _is_org_iets3_core_expr_base_AttemptType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IAttemptType: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_IInterpreterWrapperType: boolean = true
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
                            public successType: SingleChildAccessor<N_Type> = new SingleChildAccessor(this.node, "successType")
                            public errorLiterals: ChildListAccessor<N_ErrorLiteral> = new ChildListAccessor(this.node, "errorLiterals")
                        }
                        
                        
                        export interface N_TryExpression extends N_Expression, L_org_iets3_core_base.N_IOptionallyNamed, N_ITypeFromMultiple, N_IMainSlot, N_IStructuredSyntax, N_IMayHaveEffect {
                            _is_org_iets3_core_expr_base_TryExpression: boolean
                            complete: string | undefined
            expr: SingleChildAccessor<N_Expression>
            successClause: SingleChildAccessor<N_TrySuccessClause>
            errorClauses: ChildListAccessor<N_TryErrorClause>
                        }
                        
                        export namespace N_TryExpression {
                            export function isInstance(node: ITypedNode): node is N_TryExpression {
                                return '_is_org_iets3_core_expr_base_TryExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TryExpression extends TypedNode implements N_TryExpression {
                            public _is_org_iets3_core_expr_base_TryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_base_IOptionallyNamed: boolean = true
            public _is_org_iets3_core_base_IValidNamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IResolveInfo: boolean = true
            public _is_jetbrains_mps_lang_core_ISmartReferent: boolean = true
            public _is_org_iets3_core_expr_base_ITypeFromMultiple: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IStructuredSyntax: boolean = true
            public _is_org_iets3_core_expr_base_IWantNewLine: boolean = true
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
                            public optionalName: SingleChildAccessor<L_org_iets3_core_base.N_OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")
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
                            public set complete(value: string | undefined) {
                                this.node.setPropertyValue("complete", value)
                            }
                            public get complete(): string | undefined {
                                return this.node.getPropertyValue("complete")
                            }
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                            public successClause: SingleChildAccessor<N_TrySuccessClause> = new SingleChildAccessor(this.node, "successClause")
                            public errorClauses: ChildListAccessor<N_TryErrorClause> = new ChildListAccessor(this.node, "errorClauses")
                        }
                        
                        
                        export interface N_TrySuccessClause extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_base_TrySuccessClause: boolean
                            expr: SingleChildAccessor<N_Expression>
                        }
                        
                        export namespace N_TrySuccessClause {
                            export function isInstance(node: ITypedNode): node is N_TrySuccessClause {
                                return '_is_org_iets3_core_expr_base_TrySuccessClause' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TrySuccessClause extends TypedNode implements N_TrySuccessClause {
                            public _is_org_iets3_core_expr_base_TrySuccessClause: boolean = true
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
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                        }
                        
                        
                        export interface N_IOptionallyTyped extends N_IContextAssistantTypeProvider, L_com_mbeddr_mpsutil_interpreter.N_ICanHaveTestCoverage {
                            _is_org_iets3_core_expr_base_IOptionallyTyped: boolean
                            type: SingleChildAccessor<N_Type>
                        }
                        
                        export namespace N_IOptionallyTyped {
                            export function isInstance(node: ITypedNode): node is N_IOptionallyTyped {
                                return '_is_org_iets3_core_expr_base_IOptionallyTyped' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IOptionallyTyped extends TypedNode implements N_IOptionallyTyped {
                            public _is_org_iets3_core_expr_base_IOptionallyTyped: boolean = true
            public _is_org_iets3_core_expr_base_IContextAssistantTypeProvider: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ICanHaveTestCoverage: boolean = true
                                            public type: SingleChildAccessor<N_Type> = new SingleChildAccessor(this.node, "type")
                        }
                        
                        
                        export interface N_EmptyExpression extends N_Expression, L_com_mbeddr_core_base.N_IEmpty, N_IWantNewLine {
                            _is_org_iets3_core_expr_base_EmptyExpression: boolean
                            
                        }
                        
                        export namespace N_EmptyExpression {
                            export function isInstance(node: ITypedNode): node is N_EmptyExpression {
                                return '_is_org_iets3_core_expr_base_EmptyExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EmptyExpression extends TypedNode implements N_EmptyExpression {
                            public _is_org_iets3_core_expr_base_EmptyExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_core_base_IEmpty: boolean = true
            public _is_jetbrains_mps_lang_core_ISuppressErrors: boolean = true
            public _is_com_mbeddr_core_base_IHideFromOutline: boolean = true
            public _is_org_iets3_core_expr_base_IWantNewLine: boolean = true
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
                        
                        
                        export interface N_TryErrorClause extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IMayHaveEffect {
                            _is_org_iets3_core_expr_base_TryErrorClause: boolean
                            expr: SingleChildAccessor<N_Expression>
            errorLiteral: SingleChildAccessor<N_ErrorLiteral>
                        }
                        
                        export namespace N_TryErrorClause {
                            export function isInstance(node: ITypedNode): node is N_TryErrorClause {
                                return '_is_org_iets3_core_expr_base_TryErrorClause' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TryErrorClause extends TypedNode implements N_TryErrorClause {
                            public _is_org_iets3_core_expr_base_TryErrorClause: boolean = true
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
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                            public errorLiteral: SingleChildAccessor<N_ErrorLiteral> = new SingleChildAccessor(this.node, "errorLiteral")
                        }
                        
                        
                        export interface N_SuccessValueExpr extends N_Expression {
                            _is_org_iets3_core_expr_base_SuccessValueExpr: boolean
                                                
                        }
                        
                        export namespace N_SuccessValueExpr {
                            export function isInstance(node: ITypedNode): node is N_SuccessValueExpr {
                                return '_is_org_iets3_core_expr_base_SuccessValueExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SuccessValueExpr extends TypedNode implements N_SuccessValueExpr {
                            public _is_org_iets3_core_expr_base_SuccessValueExpr: boolean = true
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
                        
            
            export interface N_ITypeFromMultiple extends ITypedNode {
                _is_org_iets3_core_expr_base_ITypeFromMultiple: boolean
                
            }
            
            export namespace N_ITypeFromMultiple {
                export function isInstance(node: ITypedNode): node is N_ITypeFromMultiple {
                    return '_is_org_iets3_core_expr_base_ITypeFromMultiple' in node;
                }
            }
            
            export class _N_TypedImpl_ITypeFromMultiple extends TypedNode implements N_ITypeFromMultiple {
                public _is_org_iets3_core_expr_base_ITypeFromMultiple: boolean = true
                
            }
            
                        
                        export interface N_CastExpression extends N_Expression, L_com_mbeddr_mpsutil_interpreter.N_ICanHaveTestCoverage, N_IMayHaveEffect, L_org_iets3_analysis_base.N_ISolvable, N_ISSConstrainedValueRef, N_ISSConstrainedValue {
                            _is_org_iets3_core_expr_base_CastExpression: boolean
                            expr: SingleChildAccessor<N_Expression>
            expectedType: SingleChildAccessor<N_Type>
                        }
                        
                        export namespace N_CastExpression {
                            export function isInstance(node: ITypedNode): node is N_CastExpression {
                                return '_is_org_iets3_core_expr_base_CastExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_CastExpression extends TypedNode implements N_CastExpression {
                            public _is_org_iets3_core_expr_base_CastExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ICanHaveTestCoverage: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ISolvable: boolean = true
            public _is_org_iets3_core_base_IDetectNeedToRunManually: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
            public _is_org_iets3_core_expr_base_ISSConstrainedValueRef: boolean = true
            public _is_org_iets3_core_expr_base_ISSConstrainedValue: boolean = true
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
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                            public expectedType: SingleChildAccessor<N_Type> = new SingleChildAccessor(this.node, "expectedType")
                        }
                        
                        
                        export interface N_IStructuredSyntax extends N_IWantNewLine {
                            _is_org_iets3_core_expr_base_IStructuredSyntax: boolean
                            
                        }
                        
                        export namespace N_IStructuredSyntax {
                            export function isInstance(node: ITypedNode): node is N_IStructuredSyntax {
                                return '_is_org_iets3_core_expr_base_IStructuredSyntax' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IStructuredSyntax extends TypedNode implements N_IStructuredSyntax {
                            public _is_org_iets3_core_expr_base_IStructuredSyntax: boolean = true
            public _is_org_iets3_core_expr_base_IWantNewLine: boolean = true
                            
                        }
                        
                        
                        export interface N_ExprInContract extends N_Expression {
                            _is_org_iets3_core_expr_base_ExprInContract: boolean
                            
                        }
                        
                        export namespace N_ExprInContract {
                            export function isInstance(node: ITypedNode): node is N_ExprInContract {
                                return '_is_org_iets3_core_expr_base_ExprInContract' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ExprInContract extends TypedNode implements N_ExprInContract {
                            public _is_org_iets3_core_expr_base_ExprInContract: boolean = true
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
                        
            
            export interface N_IContracted extends ITypedNode {
                _is_org_iets3_core_expr_base_IContracted: boolean
                contract: SingleChildAccessor<N_Contract>
            }
            
            export namespace N_IContracted {
                export function isInstance(node: ITypedNode): node is N_IContracted {
                    return '_is_org_iets3_core_expr_base_IContracted' in node;
                }
            }
            
            export class _N_TypedImpl_IContracted extends TypedNode implements N_IContracted {
                public _is_org_iets3_core_expr_base_IContracted: boolean = true
                                public contract: SingleChildAccessor<N_Contract> = new SingleChildAccessor(this.node, "contract")
            }
            
                        
                        export interface N_IContainmentStackMember extends L_jetbrains_mps_lang_core.N_INamedConcept {
                            _is_org_iets3_core_expr_base_IContainmentStackMember: boolean
                            
                        }
                        
                        export namespace N_IContainmentStackMember {
                            export function isInstance(node: ITypedNode): node is N_IContainmentStackMember {
                                return '_is_org_iets3_core_expr_base_IContainmentStackMember' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IContainmentStackMember extends TypedNode implements N_IContainmentStackMember {
                            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
                                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                        }
                        
                        
                        export interface N_Postcondition extends N_ContractItem {
                            _is_org_iets3_core_expr_base_Postcondition: boolean
                            
                        }
                        
                        export namespace N_Postcondition {
                            export function isInstance(node: ITypedNode): node is N_Postcondition {
                                return '_is_org_iets3_core_expr_base_Postcondition' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Postcondition extends TypedNode implements N_Postcondition {
                            public _is_org_iets3_core_expr_base_Postcondition: boolean = true
            public _is_org_iets3_core_expr_base_ContractItem: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                                            public set warning(value: string | undefined) {
                                this.node.setPropertyValue("warning", value)
                            }
                            public get warning(): string | undefined {
                                return this.node.getPropertyValue("warning")
                            }
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                            public err: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "err")
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
                        
                        
                        export interface N_Invariant extends N_ContractItem {
                            _is_org_iets3_core_expr_base_Invariant: boolean
                            
                        }
                        
                        export namespace N_Invariant {
                            export function isInstance(node: ITypedNode): node is N_Invariant {
                                return '_is_org_iets3_core_expr_base_Invariant' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Invariant extends TypedNode implements N_Invariant {
                            public _is_org_iets3_core_expr_base_Invariant: boolean = true
            public _is_org_iets3_core_expr_base_ContractItem: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                                            public set warning(value: string | undefined) {
                                this.node.setPropertyValue("warning", value)
                            }
                            public get warning(): string | undefined {
                                return this.node.getPropertyValue("warning")
                            }
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                            public err: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "err")
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
                        
                        
                        export interface N_Contract extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IMayAllowEffect {
                            _is_org_iets3_core_expr_base_Contract: boolean
                            items: ChildListAccessor<N_ContractItem>
                        }
                        
                        export namespace N_Contract {
                            export function isInstance(node: ITypedNode): node is N_Contract {
                                return '_is_org_iets3_core_expr_base_Contract' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Contract extends TypedNode implements N_Contract {
                            public _is_org_iets3_core_expr_base_Contract: boolean = true
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
                            public items: ChildListAccessor<N_ContractItem> = new ChildListAccessor(this.node, "items")
                        }
                        
                        
                        export interface N_ContractItem extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IMayHaveEffect {
                            _is_org_iets3_core_expr_base_ContractItem: boolean
                            warning: string | undefined
            expr: SingleChildAccessor<N_Expression>
            err: SingleChildAccessor<N_Expression>
                        }
                        
                        export namespace N_ContractItem {
                            export function isInstance(node: ITypedNode): node is N_ContractItem {
                                return '_is_org_iets3_core_expr_base_ContractItem' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ContractItem extends TypedNode implements N_ContractItem {
                            public _is_org_iets3_core_expr_base_ContractItem: boolean = true
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
                            public set warning(value: string | undefined) {
                                this.node.setPropertyValue("warning", value)
                            }
                            public get warning(): string | undefined {
                                return this.node.getPropertyValue("warning")
                            }
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                            public err: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "err")
                        }
                        
                        
                        export interface N_Precondition extends N_ContractItem {
                            _is_org_iets3_core_expr_base_Precondition: boolean
                            
                        }
                        
                        export namespace N_Precondition {
                            export function isInstance(node: ITypedNode): node is N_Precondition {
                                return '_is_org_iets3_core_expr_base_Precondition' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Precondition extends TypedNode implements N_Precondition {
                            public _is_org_iets3_core_expr_base_Precondition: boolean = true
            public _is_org_iets3_core_expr_base_ContractItem: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                                            public set warning(value: string | undefined) {
                                this.node.setPropertyValue("warning", value)
                            }
                            public get warning(): string | undefined {
                                return this.node.getPropertyValue("warning")
                            }
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                            public err: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "err")
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
                        
                        
                        export interface N_PlainConstraint extends N_ContractItem {
                            _is_org_iets3_core_expr_base_PlainConstraint: boolean
                            
                        }
                        
                        export namespace N_PlainConstraint {
                            export function isInstance(node: ITypedNode): node is N_PlainConstraint {
                                return '_is_org_iets3_core_expr_base_PlainConstraint' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_PlainConstraint extends TypedNode implements N_PlainConstraint {
                            public _is_org_iets3_core_expr_base_PlainConstraint: boolean = true
            public _is_org_iets3_core_expr_base_ContractItem: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                                            public set warning(value: string | undefined) {
                                this.node.setPropertyValue("warning", value)
                            }
                            public get warning(): string | undefined {
                                return this.node.getPropertyValue("warning")
                            }
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                            public err: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "err")
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
                        
                        
                        export interface N_OneOfTarget extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IDotTarget, N_IDeclarativelyInterpretable {
                            _is_org_iets3_core_expr_base_OneOfTarget: boolean
                            values: ChildListAccessor<N_Expression>
                        }
                        
                        export namespace N_OneOfTarget {
                            export function isInstance(node: ITypedNode): node is N_OneOfTarget {
                                return '_is_org_iets3_core_expr_base_OneOfTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_OneOfTarget extends TypedNode implements N_OneOfTarget {
                            public _is_org_iets3_core_expr_base_OneOfTarget: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_IDeclarativelyInterpretable: boolean = true
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
                            public values: ChildListAccessor<N_Expression> = new ChildListAccessor(this.node, "values")
                        }
                        
                        
                        export interface N_RangeTarget extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IDotTarget, N_IDeclarativelyInterpretable, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_RangeTarget: boolean
                            upperExcluding: string | undefined
            lowerExcluding: string | undefined
            min: SingleChildAccessor<N_Expression>
            max: SingleChildAccessor<N_Expression>
                        }
                        
                        export namespace N_RangeTarget {
                            export function isInstance(node: ITypedNode): node is N_RangeTarget {
                                return '_is_org_iets3_core_expr_base_RangeTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RangeTarget extends TypedNode implements N_RangeTarget {
                            public _is_org_iets3_core_expr_base_RangeTarget: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_IDeclarativelyInterpretable: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
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
                            public set upperExcluding(value: string | undefined) {
                                this.node.setPropertyValue("upperExcluding", value)
                            }
                            public get upperExcluding(): string | undefined {
                                return this.node.getPropertyValue("upperExcluding")
                            }
                            public set lowerExcluding(value: string | undefined) {
                                this.node.setPropertyValue("lowerExcluding", value)
                            }
                            public get lowerExcluding(): string | undefined {
                                return this.node.getPropertyValue("lowerExcluding")
                            }
                            public min: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "min")
                            public max: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "max")
                        }
                        
                        
                        export interface N_TupleType extends N_Type {
                            _is_org_iets3_core_expr_base_TupleType: boolean
                            elementTypes: ChildListAccessor<N_Type>
                        }
                        
                        export namespace N_TupleType {
                            export function isInstance(node: ITypedNode): node is N_TupleType {
                                return '_is_org_iets3_core_expr_base_TupleType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TupleType extends TypedNode implements N_TupleType {
                            public _is_org_iets3_core_expr_base_TupleType: boolean = true
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
                            public elementTypes: ChildListAccessor<N_Type> = new ChildListAccessor(this.node, "elementTypes")
                        }
                        
                        
                        export interface N_TupleValue extends N_Expression, N_IMayHaveEffect, N_ICanBeLValue {
                            _is_org_iets3_core_expr_base_TupleValue: boolean
                            values: ChildListAccessor<N_Expression>
                        }
                        
                        export namespace N_TupleValue {
                            export function isInstance(node: ITypedNode): node is N_TupleValue {
                                return '_is_org_iets3_core_expr_base_TupleValue' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TupleValue extends TypedNode implements N_TupleValue {
                            public _is_org_iets3_core_expr_base_TupleValue: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_core_expr_base_ICanBeLValue: boolean = true
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
                            public values: ChildListAccessor<N_Expression> = new ChildListAccessor(this.node, "values")
                        }
                        
                        
                        export interface N_TupleAccessExpr extends N_Expression, N_IMayHaveEffect {
                            _is_org_iets3_core_expr_base_TupleAccessExpr: boolean
                            index: string | undefined
            tuple: SingleChildAccessor<N_Expression>
                        }
                        
                        export namespace N_TupleAccessExpr {
                            export function isInstance(node: ITypedNode): node is N_TupleAccessExpr {
                                return '_is_org_iets3_core_expr_base_TupleAccessExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TupleAccessExpr extends TypedNode implements N_TupleAccessExpr {
                            public _is_org_iets3_core_expr_base_TupleAccessExpr: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public set index(value: string | undefined) {
                                this.node.setPropertyValue("index", value)
                            }
                            public get index(): string | undefined {
                                return this.node.getPropertyValue("index")
                            }
                            public tuple: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "tuple")
                        }
                        
                        
                        export interface N_AlternativesExpression extends N_Expression, N_IBigExpression, N_IReducableExpression, N_ITypeFromMultiple, N_IContainmentStackMember, L_com_mbeddr_mpsutil_interpreter.N_ICanHaveTestCoverage, L_org_iets3_analysis_base.N_ISolvable, L_com_mbeddr_mpsutil_interpreter.N_ITracerFrame, N_IMayHaveEffect, N_IMayAllowEffect, L_org_iets3_analysis_base.N_ICanBeMappedToSolver, N_IProvidePathConstraints, N_IValidOtherwiseContainer, N_IOptionDerefContext {
                            _is_org_iets3_core_expr_base_AlternativesExpression: boolean
                            alternatives: ChildListAccessor<N_AltOption>
                        }
                        
                        export namespace N_AlternativesExpression {
                            export function isInstance(node: ITypedNode): node is N_AlternativesExpression {
                                return '_is_org_iets3_core_expr_base_AlternativesExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AlternativesExpression extends TypedNode implements N_AlternativesExpression {
                            public _is_org_iets3_core_expr_base_AlternativesExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IBigExpression: boolean = true
            public _is_org_iets3_core_expr_base_IWantNewLine: boolean = true
            public _is_org_iets3_core_expr_base_IReducableExpression: boolean = true
            public _is_org_iets3_core_expr_base_ITypeFromMultiple: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ICanHaveTestCoverage: boolean = true
            public _is_org_iets3_analysis_base_ISolvable: boolean = true
            public _is_org_iets3_core_base_IDetectNeedToRunManually: boolean = true
            public _is_org_iets3_core_base_ICanRunCheckManually: boolean = true
            public _is_org_iets3_core_base_ICanStoreCheckResult: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
            public _is_org_iets3_core_expr_base_IProvidePathConstraints: boolean = true
            public _is_org_iets3_core_expr_base_IValidOtherwiseContainer: boolean = true
            public _is_org_iets3_core_expr_base_IOptionDerefContext: boolean = true
            public _is_org_iets3_core_expr_base_IScopeFilterer: boolean = true
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
                            public set __hash(value: string | undefined) {
                                this.node.setPropertyValue("__hash", value)
                            }
                            public get __hash(): string | undefined {
                                return this.node.getPropertyValue("__hash")
                            }
                            public alternatives: ChildListAccessor<N_AltOption> = new ChildListAccessor(this.node, "alternatives")
                        }
                        
                        
                        export interface N_AltOption extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IContainmentStackMember, N_IValidOtherwiseContainer, L_com_mbeddr_core_base.N_IDocumentable, L_com_mbeddr_mpsutil_interpreter.N_ITracerFrame, L_com_mbeddr_core_base.N_ICommentable, N_IMayHaveEffect, N_IMayAllowEffect {
                            _is_org_iets3_core_expr_base_AltOption: boolean
                            when: SingleChildAccessor<N_Expression>
            then: SingleChildAccessor<N_Expression>
                        }
                        
                        export namespace N_AltOption {
                            export function isInstance(node: ITypedNode): node is N_AltOption {
                                return '_is_org_iets3_core_expr_base_AltOption' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AltOption extends TypedNode implements N_AltOption {
                            public _is_org_iets3_core_expr_base_AltOption: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IContainmentStackMember: boolean = true
            public _is_jetbrains_mps_lang_core_INamedConcept: boolean = true
            public _is_org_iets3_core_expr_base_IValidOtherwiseContainer: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
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
                            public set name(value: string | undefined) {
                                this.node.setPropertyValue("name", value)
                            }
                            public get name(): string | undefined {
                                return this.node.getPropertyValue("name")
                            }
                            public when: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "when")
                            public then: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "then")
                        }
                        
                        
                        export interface N_IOptionDerefContext extends N_IScopeFilterer {
                            _is_org_iets3_core_expr_base_IOptionDerefContext: boolean
                            
                        }
                        
                        export namespace N_IOptionDerefContext {
                            export function isInstance(node: ITypedNode): node is N_IOptionDerefContext {
                                return '_is_org_iets3_core_expr_base_IOptionDerefContext' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IOptionDerefContext extends TypedNode implements N_IOptionDerefContext {
                            public _is_org_iets3_core_expr_base_IOptionDerefContext: boolean = true
            public _is_org_iets3_core_expr_base_IScopeFilterer: boolean = true
                            
                        }
                        
                        
                        export interface N_ISingleSymbolRef extends N_IIsSingleSymbol, N_IRef {
                            _is_org_iets3_core_expr_base_ISingleSymbolRef: boolean
                            
                        }
                        
                        export namespace N_ISingleSymbolRef {
                            export function isInstance(node: ITypedNode): node is N_ISingleSymbolRef {
                                return '_is_org_iets3_core_expr_base_ISingleSymbolRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ISingleSymbolRef extends TypedNode implements N_ISingleSymbolRef {
                            public _is_org_iets3_core_expr_base_ISingleSymbolRef: boolean = true
            public _is_org_iets3_core_expr_base_IIsSingleSymbol: boolean = true
            public _is_org_iets3_core_expr_base_IRef: boolean = true
                            
                        }
                        
            
            export interface N_IScopeFilterer extends ITypedNode {
                _is_org_iets3_core_expr_base_IScopeFilterer: boolean
                
            }
            
            export namespace N_IScopeFilterer {
                export function isInstance(node: ITypedNode): node is N_IScopeFilterer {
                    return '_is_org_iets3_core_expr_base_IScopeFilterer' in node;
                }
            }
            
            export class _N_TypedImpl_IScopeFilterer extends TypedNode implements N_IScopeFilterer {
                public _is_org_iets3_core_expr_base_IScopeFilterer: boolean = true
                
            }
            
                        
                        export interface N_OptionOrExpression extends N_BinaryExpression {
                            _is_org_iets3_core_expr_base_OptionOrExpression: boolean
                            
                        }
                        
                        export namespace N_OptionOrExpression {
                            export function isInstance(node: ITypedNode): node is N_OptionOrExpression {
                                return '_is_org_iets3_core_expr_base_OptionOrExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_OptionOrExpression extends TypedNode implements N_OptionOrExpression {
                            public _is_org_iets3_core_expr_base_OptionOrExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
            
            export interface N_IMayHaveEffect extends ITypedNode {
                _is_org_iets3_core_expr_base_IMayHaveEffect: boolean
                
            }
            
            export namespace N_IMayHaveEffect {
                export function isInstance(node: ITypedNode): node is N_IMayHaveEffect {
                    return '_is_org_iets3_core_expr_base_IMayHaveEffect' in node;
                }
            }
            
            export class _N_TypedImpl_IMayHaveEffect extends TypedNode implements N_IMayHaveEffect {
                public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                
            }
            
            
            export interface N_IBlockLike extends ITypedNode {
                _is_org_iets3_core_expr_base_IBlockLike: boolean
                
            }
            
            export namespace N_IBlockLike {
                export function isInstance(node: ITypedNode): node is N_IBlockLike {
                    return '_is_org_iets3_core_expr_base_IBlockLike' in node;
                }
            }
            
            export class _N_TypedImpl_IBlockLike extends TypedNode implements N_IBlockLike {
                public _is_org_iets3_core_expr_base_IBlockLike: boolean = true
                
            }
            
                        
                        export interface N_CheckTypeConstraintsExpr extends N_Expression, N_IMayHaveEffect {
                            _is_org_iets3_core_expr_base_CheckTypeConstraintsExpr: boolean
                            failIfInvalid: string | undefined
            expr: SingleChildAccessor<N_Expression>
            tp: SingleChildAccessor<N_Type>
                        }
                        
                        export namespace N_CheckTypeConstraintsExpr {
                            export function isInstance(node: ITypedNode): node is N_CheckTypeConstraintsExpr {
                                return '_is_org_iets3_core_expr_base_CheckTypeConstraintsExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_CheckTypeConstraintsExpr extends TypedNode implements N_CheckTypeConstraintsExpr {
                            public _is_org_iets3_core_expr_base_CheckTypeConstraintsExpr: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public set failIfInvalid(value: string | undefined) {
                                this.node.setPropertyValue("failIfInvalid", value)
                            }
                            public get failIfInvalid(): string | undefined {
                                return this.node.getPropertyValue("failIfInvalid")
                            }
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                            public tp: SingleChildAccessor<N_Type> = new SingleChildAccessor(this.node, "tp")
                        }
                        
                        
                        export interface N_ValidityType extends N_Type {
                            _is_org_iets3_core_expr_base_ValidityType: boolean
                            
                        }
                        
                        export namespace N_ValidityType {
                            export function isInstance(node: ITypedNode): node is N_ValidityType {
                                return '_is_org_iets3_core_expr_base_ValidityType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ValidityType extends TypedNode implements N_ValidityType {
                            public _is_org_iets3_core_expr_base_ValidityType: boolean = true
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
                        }
                        
                        
                        export interface N_OkTarget extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IDotTarget {
                            _is_org_iets3_core_expr_base_OkTarget: boolean
                            
                        }
                        
                        export namespace N_OkTarget {
                            export function isInstance(node: ITypedNode): node is N_OkTarget {
                                return '_is_org_iets3_core_expr_base_OkTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_OkTarget extends TypedNode implements N_OkTarget {
                            public _is_org_iets3_core_expr_base_OkTarget: boolean = true
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
                        
                        
                        export interface N_ErrorTarget extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IDotTarget {
                            _is_org_iets3_core_expr_base_ErrorTarget: boolean
                            
                        }
                        
                        export namespace N_ErrorTarget {
                            export function isInstance(node: ITypedNode): node is N_ErrorTarget {
                                return '_is_org_iets3_core_expr_base_ErrorTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ErrorTarget extends TypedNode implements N_ErrorTarget {
                            public _is_org_iets3_core_expr_base_ErrorTarget: boolean = true
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
                        
                        
                        export interface N_ImplicitValidityValExpr extends N_Expression, N_ISSItValueRef {
                            _is_org_iets3_core_expr_base_ImplicitValidityValExpr: boolean
                            type: SingleChildAccessor<N_Type>
                        }
                        
                        export namespace N_ImplicitValidityValExpr {
                            export function isInstance(node: ITypedNode): node is N_ImplicitValidityValExpr {
                                return '_is_org_iets3_core_expr_base_ImplicitValidityValExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ImplicitValidityValExpr extends TypedNode implements N_ImplicitValidityValExpr {
                            public _is_org_iets3_core_expr_base_ImplicitValidityValExpr: boolean = true
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
                            public type: SingleChildAccessor<N_Type> = new SingleChildAccessor(this.node, "type")
                        }
                        
            
            export interface N_IValidOtherwiseContainer extends ITypedNode {
                _is_org_iets3_core_expr_base_IValidOtherwiseContainer: boolean
                
            }
            
            export namespace N_IValidOtherwiseContainer {
                export function isInstance(node: ITypedNode): node is N_IValidOtherwiseContainer {
                    return '_is_org_iets3_core_expr_base_IValidOtherwiseContainer' in node;
                }
            }
            
            export class _N_TypedImpl_IValidOtherwiseContainer extends TypedNode implements N_IValidOtherwiseContainer {
                public _is_org_iets3_core_expr_base_IValidOtherwiseContainer: boolean = true
                
            }
            
                        
                        export interface N_ITyped extends N_ITypeable {
                            _is_org_iets3_core_expr_base_ITyped: boolean
                            type: SingleChildAccessor<N_Type>
                        }
                        
                        export namespace N_ITyped {
                            export function isInstance(node: ITypedNode): node is N_ITyped {
                                return '_is_org_iets3_core_expr_base_ITyped' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ITyped extends TypedNode implements N_ITyped {
                            public _is_org_iets3_core_expr_base_ITyped: boolean = true
            public _is_org_iets3_core_expr_base_ITypeable: boolean = true
                                            public type: SingleChildAccessor<N_Type> = new SingleChildAccessor(this.node, "type")
                        }
                        
            
            export interface N_IIgnoreTrivialErrorsContext extends ITypedNode {
                _is_org_iets3_core_expr_base_IIgnoreTrivialErrorsContext: boolean
                
            }
            
            export namespace N_IIgnoreTrivialErrorsContext {
                export function isInstance(node: ITypedNode): node is N_IIgnoreTrivialErrorsContext {
                    return '_is_org_iets3_core_expr_base_IIgnoreTrivialErrorsContext' in node;
                }
            }
            
            export class _N_TypedImpl_IIgnoreTrivialErrorsContext extends TypedNode implements N_IIgnoreTrivialErrorsContext {
                public _is_org_iets3_core_expr_base_IIgnoreTrivialErrorsContext: boolean = true
                
            }
            
            
            export interface N_IDeclarativelyInterpretable extends ITypedNode {
                _is_org_iets3_core_expr_base_IDeclarativelyInterpretable: boolean
                
            }
            
            export namespace N_IDeclarativelyInterpretable {
                export function isInstance(node: ITypedNode): node is N_IDeclarativelyInterpretable {
                    return '_is_org_iets3_core_expr_base_IDeclarativelyInterpretable' in node;
                }
            }
            
            export class _N_TypedImpl_IDeclarativelyInterpretable extends TypedNode implements N_IDeclarativelyInterpretable {
                public _is_org_iets3_core_expr_base_IDeclarativelyInterpretable: boolean = true
                
            }
            
                        
                        export interface N_IDocumentableWordProvider extends L_com_mbeddr_core_base.N_IDocumentable {
                            _is_org_iets3_core_expr_base_IDocumentableWordProvider: boolean
                            
                        }
                        
                        export namespace N_IDocumentableWordProvider {
                            export function isInstance(node: ITypedNode): node is N_IDocumentableWordProvider {
                                return '_is_org_iets3_core_expr_base_IDocumentableWordProvider' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IDocumentableWordProvider extends TypedNode implements N_IDocumentableWordProvider {
                            public _is_org_iets3_core_expr_base_IDocumentableWordProvider: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
                            
                        }
                        
                        
                        export interface N_DocWordRef extends L_jetbrains_mps_lang_core.N_BaseConcept, L_de_slisson_mps_richtext.N_IWord {
                            _is_org_iets3_core_expr_base_DocWordRef: boolean
                                                
                        }
                        
                        export namespace N_DocWordRef {
                            export function isInstance(node: ITypedNode): node is N_DocWordRef {
                                return '_is_org_iets3_core_expr_base_DocWordRef' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_DocWordRef extends TypedNode implements N_DocWordRef {
                            public _is_org_iets3_core_expr_base_DocWordRef: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_de_slisson_mps_richtext_IWord: boolean = true
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
                        
            
            export interface N_IDocumentableWordContainer extends ITypedNode {
                _is_org_iets3_core_expr_base_IDocumentableWordContainer: boolean
                
            }
            
            export namespace N_IDocumentableWordContainer {
                export function isInstance(node: ITypedNode): node is N_IDocumentableWordContainer {
                    return '_is_org_iets3_core_expr_base_IDocumentableWordContainer' in node;
                }
            }
            
            export class _N_TypedImpl_IDocumentableWordContainer extends TypedNode implements N_IDocumentableWordContainer {
                public _is_org_iets3_core_expr_base_IDocumentableWordContainer: boolean = true
                
            }
            
            
            export interface N_IHasBaseType extends ITypedNode {
                _is_org_iets3_core_expr_base_IHasBaseType: boolean
                
            }
            
            export namespace N_IHasBaseType {
                export function isInstance(node: ITypedNode): node is N_IHasBaseType {
                    return '_is_org_iets3_core_expr_base_IHasBaseType' in node;
                }
            }
            
            export class _N_TypedImpl_IHasBaseType extends TypedNode implements N_IHasBaseType {
                public _is_org_iets3_core_expr_base_IHasBaseType: boolean = true
                
            }
            
            
            export interface N_ISSConstrainedValue extends ITypedNode {
                _is_org_iets3_core_expr_base_ISSConstrainedValue: boolean
                
            }
            
            export namespace N_ISSConstrainedValue {
                export function isInstance(node: ITypedNode): node is N_ISSConstrainedValue {
                    return '_is_org_iets3_core_expr_base_ISSConstrainedValue' in node;
                }
            }
            
            export class _N_TypedImpl_ISSConstrainedValue extends TypedNode implements N_ISSConstrainedValue {
                public _is_org_iets3_core_expr_base_ISSConstrainedValue: boolean = true
                
            }
            
            
            export interface N_ISSConstrainedValueRef extends ITypedNode {
                _is_org_iets3_core_expr_base_ISSConstrainedValueRef: boolean
                
            }
            
            export namespace N_ISSConstrainedValueRef {
                export function isInstance(node: ITypedNode): node is N_ISSConstrainedValueRef {
                    return '_is_org_iets3_core_expr_base_ISSConstrainedValueRef' in node;
                }
            }
            
            export class _N_TypedImpl_ISSConstrainedValueRef extends TypedNode implements N_ISSConstrainedValueRef {
                public _is_org_iets3_core_expr_base_ISSConstrainedValueRef: boolean = true
                
            }
            
            
            export interface N_ISSItValueRef extends ITypedNode {
                _is_org_iets3_core_expr_base_ISSItValueRef: boolean
                
            }
            
            export namespace N_ISSItValueRef {
                export function isInstance(node: ITypedNode): node is N_ISSItValueRef {
                    return '_is_org_iets3_core_expr_base_ISSItValueRef' in node;
                }
            }
            
            export class _N_TypedImpl_ISSItValueRef extends TypedNode implements N_ISSItValueRef {
                public _is_org_iets3_core_expr_base_ISSItValueRef: boolean = true
                
            }
            
            
            export interface N_ISSDelegatingType extends ITypedNode {
                _is_org_iets3_core_expr_base_ISSDelegatingType: boolean
                
            }
            
            export namespace N_ISSDelegatingType {
                export function isInstance(node: ITypedNode): node is N_ISSDelegatingType {
                    return '_is_org_iets3_core_expr_base_ISSDelegatingType' in node;
                }
            }
            
            export class _N_TypedImpl_ISSDelegatingType extends TypedNode implements N_ISSDelegatingType {
                public _is_org_iets3_core_expr_base_ISSDelegatingType: boolean = true
                
            }
            
                        
                        export interface N_ICollectionType extends N_IHasBaseType {
                            _is_org_iets3_core_expr_base_ICollectionType: boolean
                            
                        }
                        
                        export namespace N_ICollectionType {
                            export function isInstance(node: ITypedNode): node is N_ICollectionType {
                                return '_is_org_iets3_core_expr_base_ICollectionType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ICollectionType extends TypedNode implements N_ICollectionType {
                            public _is_org_iets3_core_expr_base_ICollectionType: boolean = true
            public _is_org_iets3_core_expr_base_IHasBaseType: boolean = true
                            
                        }
                        
                        
                        export interface N_ConstraintAndErrorNode extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_base_ConstraintAndErrorNode: boolean
                                                
                                
                        }
                        
                        export namespace N_ConstraintAndErrorNode {
                            export function isInstance(node: ITypedNode): node is N_ConstraintAndErrorNode {
                                return '_is_org_iets3_core_expr_base_ConstraintAndErrorNode' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ConstraintAndErrorNode extends TypedNode implements N_ConstraintAndErrorNode {
                            public _is_org_iets3_core_expr_base_ConstraintAndErrorNode: boolean = true
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
                        
                        
                        export interface N_ReferenceType extends N_Type {
                            _is_org_iets3_core_expr_base_ReferenceType: boolean
                            baseType: SingleChildAccessor<N_Type>
                        }
                        
                        export namespace N_ReferenceType {
                            export function isInstance(node: ITypedNode): node is N_ReferenceType {
                                return '_is_org_iets3_core_expr_base_ReferenceType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ReferenceType extends TypedNode implements N_ReferenceType {
                            public _is_org_iets3_core_expr_base_ReferenceType: boolean = true
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
                            public baseType: SingleChildAccessor<N_Type> = new SingleChildAccessor(this.node, "baseType")
                        }
                        
            
            export interface N_IReferenceableType extends ITypedNode {
                _is_org_iets3_core_expr_base_IReferenceableType: boolean
                
            }
            
            export namespace N_IReferenceableType {
                export function isInstance(node: ITypedNode): node is N_IReferenceableType {
                    return '_is_org_iets3_core_expr_base_IReferenceableType' in node;
                }
            }
            
            export class _N_TypedImpl_IReferenceableType extends TypedNode implements N_IReferenceableType {
                public _is_org_iets3_core_expr_base_IReferenceableType: boolean = true
                
            }
            
                        
                        export interface N_MakeRefTarget extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IDotTarget {
                            _is_org_iets3_core_expr_base_MakeRefTarget: boolean
                            
                        }
                        
                        export namespace N_MakeRefTarget {
                            export function isInstance(node: ITypedNode): node is N_MakeRefTarget {
                                return '_is_org_iets3_core_expr_base_MakeRefTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MakeRefTarget extends TypedNode implements N_MakeRefTarget {
                            public _is_org_iets3_core_expr_base_MakeRefTarget: boolean = true
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
                        
                        
                        export interface N_ILiteral extends L_com_mbeddr_mpsutil_interpreter.N_ITrivialNode {
                            _is_org_iets3_core_expr_base_ILiteral: boolean
                            
                        }
                        
                        export namespace N_ILiteral {
                            export function isInstance(node: ITypedNode): node is N_ILiteral {
                                return '_is_org_iets3_core_expr_base_ILiteral' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ILiteral extends TypedNode implements N_ILiteral {
                            public _is_org_iets3_core_expr_base_ILiteral: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITrivialNode: boolean = true
                            
                        }
                        
                        
                        export interface N_DeRefTarget extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IDotTarget {
                            _is_org_iets3_core_expr_base_DeRefTarget: boolean
                            
                        }
                        
                        export namespace N_DeRefTarget {
                            export function isInstance(node: ITypedNode): node is N_DeRefTarget {
                                return '_is_org_iets3_core_expr_base_DeRefTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_DeRefTarget extends TypedNode implements N_DeRefTarget {
                            public _is_org_iets3_core_expr_base_DeRefTarget: boolean = true
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
                        
                        
                        export interface N_JoinType extends N_Type {
                            _is_org_iets3_core_expr_base_JoinType: boolean
                            types: ChildListAccessor<N_Type>
                        }
                        
                        export namespace N_JoinType {
                            export function isInstance(node: ITypedNode): node is N_JoinType {
                                return '_is_org_iets3_core_expr_base_JoinType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_JoinType extends TypedNode implements N_JoinType {
                            public _is_org_iets3_core_expr_base_JoinType: boolean = true
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
                            public types: ChildListAccessor<N_Type> = new ChildListAccessor(this.node, "types")
                        }
                        
            
            export interface N_IJoinTypeContext extends ITypedNode {
                _is_org_iets3_core_expr_base_IJoinTypeContext: boolean
                
            }
            
            export namespace N_IJoinTypeContext {
                export function isInstance(node: ITypedNode): node is N_IJoinTypeContext {
                    return '_is_org_iets3_core_expr_base_IJoinTypeContext' in node;
                }
            }
            
            export class _N_TypedImpl_IJoinTypeContext extends TypedNode implements N_IJoinTypeContext {
                public _is_org_iets3_core_expr_base_IJoinTypeContext: boolean = true
                
            }
            
                        
                        export interface N_ITraceRoot extends L_com_mbeddr_mpsutil_interpreter.N_ITracerFrame {
                            _is_org_iets3_core_expr_base_ITraceRoot: boolean
                            
                        }
                        
                        export namespace N_ITraceRoot {
                            export function isInstance(node: ITypedNode): node is N_ITraceRoot {
                                return '_is_org_iets3_core_expr_base_ITraceRoot' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ITraceRoot extends TypedNode implements N_ITraceRoot {
                            public _is_org_iets3_core_expr_base_ITraceRoot: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
                            
                        }
                        
                        
                        export interface N_IMultiTraceRoot extends L_com_mbeddr_mpsutil_interpreter.N_ITracerFrame {
                            _is_org_iets3_core_expr_base_IMultiTraceRoot: boolean
                            
                        }
                        
                        export namespace N_IMultiTraceRoot {
                            export function isInstance(node: ITypedNode): node is N_IMultiTraceRoot {
                                return '_is_org_iets3_core_expr_base_IMultiTraceRoot' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IMultiTraceRoot extends TypedNode implements N_IMultiTraceRoot {
                            public _is_org_iets3_core_expr_base_IMultiTraceRoot: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
                            
                        }
                        
                        
                        export interface N_Revealer extends L_jetbrains_mps_lang_core.N_NodeAttribute, L_com_mbeddr_mpsutil_interpreter.N_IReveal {
                            _is_org_iets3_core_expr_base_Revealer: boolean
                            condition: SingleChildAccessor<N_Expression>
                        }
                        
                        export namespace N_Revealer {
                            export function isInstance(node: ITypedNode): node is N_Revealer {
                                return '_is_org_iets3_core_expr_base_Revealer' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_Revealer extends TypedNode implements N_Revealer {
                            public _is_org_iets3_core_expr_base_Revealer: boolean = true
            public _is_jetbrains_mps_lang_core_NodeAttribute: boolean = true
            public _is_jetbrains_mps_lang_core_Attribute: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_IReveal: boolean = true
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
                            public condition: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "condition")
                        }
                        
            
            export interface N_IControlAdvancedFeatures_old extends ITypedNode {
                _is_org_iets3_core_expr_base_IControlAdvancedFeatures_old: boolean
                
            }
            
            export namespace N_IControlAdvancedFeatures_old {
                export function isInstance(node: ITypedNode): node is N_IControlAdvancedFeatures_old {
                    return '_is_org_iets3_core_expr_base_IControlAdvancedFeatures_old' in node;
                }
            }
            
            export class _N_TypedImpl_IControlAdvancedFeatures_old extends TypedNode implements N_IControlAdvancedFeatures_old {
                public _is_org_iets3_core_expr_base_IControlAdvancedFeatures_old: boolean = true
                
            }
            
            
            export interface N_IMayAllowEffect extends ITypedNode {
                _is_org_iets3_core_expr_base_IMayAllowEffect: boolean
                
            }
            
            export namespace N_IMayAllowEffect {
                export function isInstance(node: ITypedNode): node is N_IMayAllowEffect {
                    return '_is_org_iets3_core_expr_base_IMayAllowEffect' in node;
                }
            }
            
            export class _N_TypedImpl_IMayAllowEffect extends TypedNode implements N_IMayAllowEffect {
                public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
                
            }
            
            
            export interface N_IMainSlot extends ITypedNode {
                _is_org_iets3_core_expr_base_IMainSlot: boolean
                
            }
            
            export namespace N_IMainSlot {
                export function isInstance(node: ITypedNode): node is N_IMainSlot {
                    return '_is_org_iets3_core_expr_base_IMainSlot' in node;
                }
            }
            
            export class _N_TypedImpl_IMainSlot extends TypedNode implements N_IMainSlot {
                public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
                
            }
            
            
            export interface N_IMayReadMutableState extends ITypedNode {
                _is_org_iets3_core_expr_base_IMayReadMutableState: boolean
                
            }
            
            export namespace N_IMayReadMutableState {
                export function isInstance(node: ITypedNode): node is N_IMayReadMutableState {
                    return '_is_org_iets3_core_expr_base_IMayReadMutableState' in node;
                }
            }
            
            export class _N_TypedImpl_IMayReadMutableState extends TypedNode implements N_IMayReadMutableState {
                public _is_org_iets3_core_expr_base_IMayReadMutableState: boolean = true
                
            }
            
            
            export interface N_IWantNewLine extends ITypedNode {
                _is_org_iets3_core_expr_base_IWantNewLine: boolean
                
            }
            
            export namespace N_IWantNewLine {
                export function isInstance(node: ITypedNode): node is N_IWantNewLine {
                    return '_is_org_iets3_core_expr_base_IWantNewLine' in node;
                }
            }
            
            export class _N_TypedImpl_IWantNewLine extends TypedNode implements N_IWantNewLine {
                public _is_org_iets3_core_expr_base_IWantNewLine: boolean = true
                
            }
            
            
            export interface N_IAllowsDocInChildExpressions extends ITypedNode {
                _is_org_iets3_core_expr_base_IAllowsDocInChildExpressions: boolean
                
            }
            
            export namespace N_IAllowsDocInChildExpressions {
                export function isInstance(node: ITypedNode): node is N_IAllowsDocInChildExpressions {
                    return '_is_org_iets3_core_expr_base_IAllowsDocInChildExpressions' in node;
                }
            }
            
            export class _N_TypedImpl_IAllowsDocInChildExpressions extends TypedNode implements N_IAllowsDocInChildExpressions {
                public _is_org_iets3_core_expr_base_IAllowsDocInChildExpressions: boolean = true
                
            }
            
            
            export interface N_IVoidContext extends ITypedNode {
                _is_org_iets3_core_expr_base_IVoidContext: boolean
                
            }
            
            export namespace N_IVoidContext {
                export function isInstance(node: ITypedNode): node is N_IVoidContext {
                    return '_is_org_iets3_core_expr_base_IVoidContext' in node;
                }
            }
            
            export class _N_TypedImpl_IVoidContext extends TypedNode implements N_IVoidContext {
                public _is_org_iets3_core_expr_base_IVoidContext: boolean = true
                
            }
            
                        
                        export interface N_PragmaExpression extends N_Expression, N_IMayHaveEffect {
                            _is_org_iets3_core_expr_base_PragmaExpression: boolean
                            expr: SingleChildAccessor<N_Expression>
                        }
                        
                        export namespace N_PragmaExpression {
                            export function isInstance(node: ITypedNode): node is N_PragmaExpression {
                                return '_is_org_iets3_core_expr_base_PragmaExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_PragmaExpression extends TypedNode implements N_PragmaExpression {
                            public _is_org_iets3_core_expr_base_PragmaExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                        }
                        
                        
                        export interface N_PragmaDisableCaching extends N_PragmaExpression {
                            _is_org_iets3_core_expr_base_PragmaDisableCaching: boolean
                            
                        }
                        
                        export namespace N_PragmaDisableCaching {
                            export function isInstance(node: ITypedNode): node is N_PragmaDisableCaching {
                                return '_is_org_iets3_core_expr_base_PragmaDisableCaching' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_PragmaDisableCaching extends TypedNode implements N_PragmaDisableCaching {
                            public _is_org_iets3_core_expr_base_PragmaDisableCaching: boolean = true
            public _is_org_iets3_core_expr_base_PragmaExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
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
                        
            
            export interface N_IRunningInterpreterContext extends ITypedNode {
                _is_org_iets3_core_expr_base_IRunningInterpreterContext: boolean
                
            }
            
            export namespace N_IRunningInterpreterContext {
                export function isInstance(node: ITypedNode): node is N_IRunningInterpreterContext {
                    return '_is_org_iets3_core_expr_base_IRunningInterpreterContext' in node;
                }
            }
            
            export class _N_TypedImpl_IRunningInterpreterContext extends TypedNode implements N_IRunningInterpreterContext {
                public _is_org_iets3_core_expr_base_IRunningInterpreterContext: boolean = true
                
            }
            
                        
                        export interface N_DefaultValueExpression extends N_Expression {
                            _is_org_iets3_core_expr_base_DefaultValueExpression: boolean
                            type: SingleChildAccessor<N_Type>
                        }
                        
                        export namespace N_DefaultValueExpression {
                            export function isInstance(node: ITypedNode): node is N_DefaultValueExpression {
                                return '_is_org_iets3_core_expr_base_DefaultValueExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_DefaultValueExpression extends TypedNode implements N_DefaultValueExpression {
                            public _is_org_iets3_core_expr_base_DefaultValueExpression: boolean = true
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
                            public type: SingleChildAccessor<N_Type> = new SingleChildAccessor(this.node, "type")
                        }
                        
            
            export interface N_ITypeSupportsDefaultValue extends ITypedNode {
                _is_org_iets3_core_expr_base_ITypeSupportsDefaultValue: boolean
                
            }
            
            export namespace N_ITypeSupportsDefaultValue {
                export function isInstance(node: ITypedNode): node is N_ITypeSupportsDefaultValue {
                    return '_is_org_iets3_core_expr_base_ITypeSupportsDefaultValue' in node;
                }
            }
            
            export class _N_TypedImpl_ITypeSupportsDefaultValue extends TypedNode implements N_ITypeSupportsDefaultValue {
                public _is_org_iets3_core_expr_base_ITypeSupportsDefaultValue: boolean = true
                
            }
            
            
            export interface N_IContextTypeProvider extends ITypedNode {
                _is_org_iets3_core_expr_base_IContextTypeProvider: boolean
                
            }
            
            export namespace N_IContextTypeProvider {
                export function isInstance(node: ITypedNode): node is N_IContextTypeProvider {
                    return '_is_org_iets3_core_expr_base_IContextTypeProvider' in node;
                }
            }
            
            export class _N_TypedImpl_IContextTypeProvider extends TypedNode implements N_IContextTypeProvider {
                public _is_org_iets3_core_expr_base_IContextTypeProvider: boolean = true
                
            }
            
                        
                        export interface N_FailExpr extends N_Expression {
                            _is_org_iets3_core_expr_base_FailExpr: boolean
                            message: SingleChildAccessor<N_Expression>
            contextExpression: SingleChildAccessor<N_Expression>
            type: SingleChildAccessor<N_Type>
                        }
                        
                        export namespace N_FailExpr {
                            export function isInstance(node: ITypedNode): node is N_FailExpr {
                                return '_is_org_iets3_core_expr_base_FailExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FailExpr extends TypedNode implements N_FailExpr {
                            public _is_org_iets3_core_expr_base_FailExpr: boolean = true
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
                            public message: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "message")
                            public contextExpression: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "contextExpression")
                            public type: SingleChildAccessor<N_Type> = new SingleChildAccessor(this.node, "type")
                        }
                        
                        
                        export interface N_ThisExpression extends N_Expression {
                            _is_org_iets3_core_expr_base_ThisExpression: boolean
                            
                        }
                        
                        export namespace N_ThisExpression {
                            export function isInstance(node: ITypedNode): node is N_ThisExpression {
                                return '_is_org_iets3_core_expr_base_ThisExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ThisExpression extends TypedNode implements N_ThisExpression {
                            public _is_org_iets3_core_expr_base_ThisExpression: boolean = true
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
                        
                        
                        export interface N_IfElseSection extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_base_IfElseSection: boolean
                            expr: SingleChildAccessor<N_Expression>
                        }
                        
                        export namespace N_IfElseSection {
                            export function isInstance(node: ITypedNode): node is N_IfElseSection {
                                return '_is_org_iets3_core_expr_base_IfElseSection' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IfElseSection extends TypedNode implements N_IfElseSection {
                            public _is_org_iets3_core_expr_base_IfElseSection: boolean = true
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
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                        }
                        
                        
                        export interface N_VoidType extends N_Type {
                            _is_org_iets3_core_expr_base_VoidType: boolean
                            
                        }
                        
                        export namespace N_VoidType {
                            export function isInstance(node: ITypedNode): node is N_VoidType {
                                return '_is_org_iets3_core_expr_base_VoidType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_VoidType extends TypedNode implements N_VoidType {
                            public _is_org_iets3_core_expr_base_VoidType: boolean = true
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
                        }
                        
            
            export interface N_ICanBeLValue extends ITypedNode {
                _is_org_iets3_core_expr_base_ICanBeLValue: boolean
                
            }
            
            export namespace N_ICanBeLValue {
                export function isInstance(node: ITypedNode): node is N_ICanBeLValue {
                    return '_is_org_iets3_core_expr_base_ICanBeLValue' in node;
                }
            }
            
            export class _N_TypedImpl_ICanBeLValue extends TypedNode implements N_ICanBeLValue {
                public _is_org_iets3_core_expr_base_ICanBeLValue: boolean = true
                
            }
            
            
            export interface N_INameQualifier extends ITypedNode {
                _is_org_iets3_core_expr_base_INameQualifier: boolean
                
            }
            
            export namespace N_INameQualifier {
                export function isInstance(node: ITypedNode): node is N_INameQualifier {
                    return '_is_org_iets3_core_expr_base_INameQualifier' in node;
                }
            }
            
            export class _N_TypedImpl_INameQualifier extends TypedNode implements N_INameQualifier {
                public _is_org_iets3_core_expr_base_INameQualifier: boolean = true
                
            }
            
                        
                        export interface N_SimpleExpressionValueInspector extends L_com_mbeddr_mpsutil_interpreter.N_ValueInspector {
                            _is_org_iets3_core_expr_base_SimpleExpressionValueInspector: boolean
                            onlyLast: string | undefined
            showOnTop: string | undefined
            showOnConsole: string | undefined
            optionalLabel: string | undefined
                        }
                        
                        export namespace N_SimpleExpressionValueInspector {
                            export function isInstance(node: ITypedNode): node is N_SimpleExpressionValueInspector {
                                return '_is_org_iets3_core_expr_base_SimpleExpressionValueInspector' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SimpleExpressionValueInspector extends TypedNode implements N_SimpleExpressionValueInspector {
                            public _is_org_iets3_core_expr_base_SimpleExpressionValueInspector: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ValueInspector: boolean = true
            public _is_jetbrains_mps_lang_core_NodeAttribute: boolean = true
            public _is_jetbrains_mps_lang_core_Attribute: boolean = true
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
                            public set onlyLast(value: string | undefined) {
                                this.node.setPropertyValue("onlyLast", value)
                            }
                            public get onlyLast(): string | undefined {
                                return this.node.getPropertyValue("onlyLast")
                            }
                            public set showOnTop(value: string | undefined) {
                                this.node.setPropertyValue("showOnTop", value)
                            }
                            public get showOnTop(): string | undefined {
                                return this.node.getPropertyValue("showOnTop")
                            }
                            public set showOnConsole(value: string | undefined) {
                                this.node.setPropertyValue("showOnConsole", value)
                            }
                            public get showOnConsole(): string | undefined {
                                return this.node.getPropertyValue("showOnConsole")
                            }
                            public set optionalLabel(value: string | undefined) {
                                this.node.setPropertyValue("optionalLabel", value)
                            }
                            public get optionalLabel(): string | undefined {
                                return this.node.getPropertyValue("optionalLabel")
                            }
                        }
                        
            
            export interface N_IProvidePathConstraints extends ITypedNode {
                _is_org_iets3_core_expr_base_IProvidePathConstraints: boolean
                
            }
            
            export namespace N_IProvidePathConstraints {
                export function isInstance(node: ITypedNode): node is N_IProvidePathConstraints {
                    return '_is_org_iets3_core_expr_base_IProvidePathConstraints' in node;
                }
            }
            
            export class _N_TypedImpl_IProvidePathConstraints extends TypedNode implements N_IProvidePathConstraints {
                public _is_org_iets3_core_expr_base_IProvidePathConstraints: boolean = true
                
            }
            
                        
                        export interface N_ModExpression extends N_BinaryArithmeticExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_ModExpression: boolean
                            
                        }
                        
                        export namespace N_ModExpression {
                            export function isInstance(node: ITypedNode): node is N_ModExpression {
                                return '_is_org_iets3_core_expr_base_ModExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ModExpression extends TypedNode implements N_ModExpression {
                            public _is_org_iets3_core_expr_base_ModExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryArithmeticExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
            
            export interface N_IAssertConstraints extends ITypedNode {
                _is_org_iets3_core_expr_base_IAssertConstraints: boolean
                
            }
            
            export namespace N_IAssertConstraints {
                export function isInstance(node: ITypedNode): node is N_IAssertConstraints {
                    return '_is_org_iets3_core_expr_base_IAssertConstraints' in node;
                }
            }
            
            export class _N_TypedImpl_IAssertConstraints extends TypedNode implements N_IAssertConstraints {
                public _is_org_iets3_core_expr_base_IAssertConstraints: boolean = true
                
            }
            
                        
                        export interface N_ColonCast extends N_Expression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver, N_ISSConstrainedValueRef, N_ISSConstrainedValue, L_org_iets3_analysis_base.N_ISolvable {
                            _is_org_iets3_core_expr_base_ColonCast: boolean
                            expr: SingleChildAccessor<N_Expression>
            type: SingleChildAccessor<N_Type>
                        }
                        
                        export namespace N_ColonCast {
                            export function isInstance(node: ITypedNode): node is N_ColonCast {
                                return '_is_org_iets3_core_expr_base_ColonCast' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ColonCast extends TypedNode implements N_ColonCast {
                            public _is_org_iets3_core_expr_base_ColonCast: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
            public _is_org_iets3_core_expr_base_ISSConstrainedValueRef: boolean = true
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
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                            public type: SingleChildAccessor<N_Type> = new SingleChildAccessor(this.node, "type")
                        }
                        
                        
                        export interface N_SuccessExpression extends N_Expression {
                            _is_org_iets3_core_expr_base_SuccessExpression: boolean
                            expr: SingleChildAccessor<N_Expression>
                        }
                        
                        export namespace N_SuccessExpression {
                            export function isInstance(node: ITypedNode): node is N_SuccessExpression {
                                return '_is_org_iets3_core_expr_base_SuccessExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SuccessExpression extends TypedNode implements N_SuccessExpression {
                            public _is_org_iets3_core_expr_base_SuccessExpression: boolean = true
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
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                        }
                        
            
            export interface N_INeverAllowDot extends ITypedNode {
                _is_org_iets3_core_expr_base_INeverAllowDot: boolean
                
            }
            
            export namespace N_INeverAllowDot {
                export function isInstance(node: ITypedNode): node is N_INeverAllowDot {
                    return '_is_org_iets3_core_expr_base_INeverAllowDot' in node;
                }
            }
            
            export class _N_TypedImpl_INeverAllowDot extends TypedNode implements N_INeverAllowDot {
                public _is_org_iets3_core_expr_base_INeverAllowDot: boolean = true
                
            }
            
                        
                        export interface N_AbstractMinMaxExpression extends N_Expression {
                            _is_org_iets3_core_expr_base_AbstractMinMaxExpression: boolean
                            values: ChildListAccessor<N_Expression>
                        }
                        
                        export namespace N_AbstractMinMaxExpression {
                            export function isInstance(node: ITypedNode): node is N_AbstractMinMaxExpression {
                                return '_is_org_iets3_core_expr_base_AbstractMinMaxExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractMinMaxExpression extends TypedNode implements N_AbstractMinMaxExpression {
                            public _is_org_iets3_core_expr_base_AbstractMinMaxExpression: boolean = true
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
                            public values: ChildListAccessor<N_Expression> = new ChildListAccessor(this.node, "values")
                        }
                        
                        
                        export interface N_MinExpression extends N_AbstractMinMaxExpression {
                            _is_org_iets3_core_expr_base_MinExpression: boolean
                            
                        }
                        
                        export namespace N_MinExpression {
                            export function isInstance(node: ITypedNode): node is N_MinExpression {
                                return '_is_org_iets3_core_expr_base_MinExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MinExpression extends TypedNode implements N_MinExpression {
                            public _is_org_iets3_core_expr_base_MinExpression: boolean = true
            public _is_org_iets3_core_expr_base_AbstractMinMaxExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
                                            public values: ChildListAccessor<N_Expression> = new ChildListAccessor(this.node, "values")
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
                        
                        
                        export interface N_MaxExpression extends N_AbstractMinMaxExpression {
                            _is_org_iets3_core_expr_base_MaxExpression: boolean
                            
                        }
                        
                        export namespace N_MaxExpression {
                            export function isInstance(node: ITypedNode): node is N_MaxExpression {
                                return '_is_org_iets3_core_expr_base_MaxExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MaxExpression extends TypedNode implements N_MaxExpression {
                            public _is_org_iets3_core_expr_base_MaxExpression: boolean = true
            public _is_org_iets3_core_expr_base_AbstractMinMaxExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
                                            public values: ChildListAccessor<N_Expression> = new ChildListAccessor(this.node, "values")
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
                        
            
            export interface N_ITypeOverridingContext extends ITypedNode {
                _is_org_iets3_core_expr_base_ITypeOverridingContext: boolean
                
            }
            
            export namespace N_ITypeOverridingContext {
                export function isInstance(node: ITypedNode): node is N_ITypeOverridingContext {
                    return '_is_org_iets3_core_expr_base_ITypeOverridingContext' in node;
                }
            }
            
            export class _N_TypedImpl_ITypeOverridingContext extends TypedNode implements N_ITypeOverridingContext {
                public _is_org_iets3_core_expr_base_ITypeOverridingContext: boolean = true
                
            }
            
                        
                        export interface N_NonStrictEqualsExpression extends N_BinaryEqualityExpression, L_org_iets3_analysis_base.N_ICanBeMappedToSolver {
                            _is_org_iets3_core_expr_base_NonStrictEqualsExpression: boolean
                            
                        }
                        
                        export namespace N_NonStrictEqualsExpression {
                            export function isInstance(node: ITypedNode): node is N_NonStrictEqualsExpression {
                                return '_is_org_iets3_core_expr_base_NonStrictEqualsExpression' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NonStrictEqualsExpression extends TypedNode implements N_NonStrictEqualsExpression {
                            public _is_org_iets3_core_expr_base_NonStrictEqualsExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryEqualityExpression: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_analysis_base_ICanBeMappedToSolver: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
                        
                        export interface N_AssignmentExpr extends N_BinaryExpression, N_IMayHaveEffect, L_com_mbeddr_mpsutil_interpreter.N_ITracerFrame, N_IWantNewLine, N_IContextAssistantTypeProvider {
                            _is_org_iets3_core_expr_base_AssignmentExpr: boolean
                            
                        }
                        
                        export namespace N_AssignmentExpr {
                            export function isInstance(node: ITypedNode): node is N_AssignmentExpr {
                                return '_is_org_iets3_core_expr_base_AssignmentExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AssignmentExpr extends TypedNode implements N_AssignmentExpr {
                            public _is_org_iets3_core_expr_base_AssignmentExpr: boolean = true
            public _is_org_iets3_core_expr_base_BinaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMainSlot: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_IWantNewLine: boolean = true
            public _is_org_iets3_core_expr_base_IContextAssistantTypeProvider: boolean = true
                                            public left: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "left")
                            public right: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "right")
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
                        
            
            export interface N_IProgramLocationProvider extends ITypedNode {
                _is_org_iets3_core_expr_base_IProgramLocationProvider: boolean
                
            }
            
            export namespace N_IProgramLocationProvider {
                export function isInstance(node: ITypedNode): node is N_IProgramLocationProvider {
                    return '_is_org_iets3_core_expr_base_IProgramLocationProvider' in node;
                }
            }
            
            export class _N_TypedImpl_IProgramLocationProvider extends TypedNode implements N_IProgramLocationProvider {
                public _is_org_iets3_core_expr_base_IProgramLocationProvider: boolean = true
                
            }
            
                        
                        export interface N_ProgramLocationType extends N_Type {
                            _is_org_iets3_core_expr_base_ProgramLocationType: boolean
                            
                        }
                        
                        export namespace N_ProgramLocationType {
                            export function isInstance(node: ITypedNode): node is N_ProgramLocationType {
                                return '_is_org_iets3_core_expr_base_ProgramLocationType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ProgramLocationType extends TypedNode implements N_ProgramLocationType {
                            public _is_org_iets3_core_expr_base_ProgramLocationType: boolean = true
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
                        }
                        
                        
                        export interface N_ProgramLocationOp extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IDotTarget {
                            _is_org_iets3_core_expr_base_ProgramLocationOp: boolean
                            
                        }
                        
                        export namespace N_ProgramLocationOp {
                            export function isInstance(node: ITypedNode): node is N_ProgramLocationOp {
                                return '_is_org_iets3_core_expr_base_ProgramLocationOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ProgramLocationOp extends TypedNode implements N_ProgramLocationOp {
                            public _is_org_iets3_core_expr_base_ProgramLocationOp: boolean = true
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
                        
                        
                        export interface N_ProgramLocationUrlOp extends N_ProgramLocationOp {
                            _is_org_iets3_core_expr_base_ProgramLocationUrlOp: boolean
                            
                        }
                        
                        export namespace N_ProgramLocationUrlOp {
                            export function isInstance(node: ITypedNode): node is N_ProgramLocationUrlOp {
                                return '_is_org_iets3_core_expr_base_ProgramLocationUrlOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ProgramLocationUrlOp extends TypedNode implements N_ProgramLocationUrlOp {
                            public _is_org_iets3_core_expr_base_ProgramLocationUrlOp: boolean = true
            public _is_org_iets3_core_expr_base_ProgramLocationOp: boolean = true
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
                        
                        
                        export interface N_MessageValueType extends N_Type {
                            _is_org_iets3_core_expr_base_MessageValueType: boolean
                            
                        }
                        
                        export namespace N_MessageValueType {
                            export function isInstance(node: ITypedNode): node is N_MessageValueType {
                                return '_is_org_iets3_core_expr_base_MessageValueType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MessageValueType extends TypedNode implements N_MessageValueType {
                            public _is_org_iets3_core_expr_base_MessageValueType: boolean = true
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
                        }
                        
                        
                        export interface N_InlineMessage extends N_Expression {
                            _is_org_iets3_core_expr_base_InlineMessage: boolean
                            text: SingleChildAccessor<N_Expression>
                        }
                        
                        export namespace N_InlineMessage {
                            export function isInstance(node: ITypedNode): node is N_InlineMessage {
                                return '_is_org_iets3_core_expr_base_InlineMessage' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_InlineMessage extends TypedNode implements N_InlineMessage {
                            public _is_org_iets3_core_expr_base_InlineMessage: boolean = true
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
                            public text: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "text")
                        }
                        
            
            export interface N_ITypeSupportsProposals extends ITypedNode {
                _is_org_iets3_core_expr_base_ITypeSupportsProposals: boolean
                
            }
            
            export namespace N_ITypeSupportsProposals {
                export function isInstance(node: ITypedNode): node is N_ITypeSupportsProposals {
                    return '_is_org_iets3_core_expr_base_ITypeSupportsProposals' in node;
                }
            }
            
            export class _N_TypedImpl_ITypeSupportsProposals extends TypedNode implements N_ITypeSupportsProposals {
                public _is_org_iets3_core_expr_base_ITypeSupportsProposals: boolean = true
                
            }
            
            
            export interface N_IContextAssistantTypeProvider extends ITypedNode {
                _is_org_iets3_core_expr_base_IContextAssistantTypeProvider: boolean
                
            }
            
            export namespace N_IContextAssistantTypeProvider {
                export function isInstance(node: ITypedNode): node is N_IContextAssistantTypeProvider {
                    return '_is_org_iets3_core_expr_base_IContextAssistantTypeProvider' in node;
                }
            }
            
            export class _N_TypedImpl_IContextAssistantTypeProvider extends TypedNode implements N_IContextAssistantTypeProvider {
                public _is_org_iets3_core_expr_base_IContextAssistantTypeProvider: boolean = true
                
            }
            
                        
                        export interface N_OrTag extends N_OperatorTag {
                            _is_org_iets3_core_expr_base_OrTag: boolean
                            
                        }
                        
                        export namespace N_OrTag {
                            export function isInstance(node: ITypedNode): node is N_OrTag {
                                return '_is_org_iets3_core_expr_base_OrTag' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_OrTag extends TypedNode implements N_OrTag {
                            public _is_org_iets3_core_expr_base_OrTag: boolean = true
            public _is_org_iets3_core_expr_base_OperatorTag: boolean = true
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
                        
                        
                        export interface N_MulTag extends N_OperatorTag {
                            _is_org_iets3_core_expr_base_MulTag: boolean
                            
                        }
                        
                        export namespace N_MulTag {
                            export function isInstance(node: ITypedNode): node is N_MulTag {
                                return '_is_org_iets3_core_expr_base_MulTag' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MulTag extends TypedNode implements N_MulTag {
                            public _is_org_iets3_core_expr_base_MulTag: boolean = true
            public _is_org_iets3_core_expr_base_OperatorTag: boolean = true
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
                        
                        
                        export interface N_PlusTag extends N_OperatorTag {
                            _is_org_iets3_core_expr_base_PlusTag: boolean
                            
                        }
                        
                        export namespace N_PlusTag {
                            export function isInstance(node: ITypedNode): node is N_PlusTag {
                                return '_is_org_iets3_core_expr_base_PlusTag' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_PlusTag extends TypedNode implements N_PlusTag {
                            public _is_org_iets3_core_expr_base_PlusTag: boolean = true
            public _is_org_iets3_core_expr_base_OperatorTag: boolean = true
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
                        
                        
                        export interface N_OperatorGroup extends N_Expression {
                            _is_org_iets3_core_expr_base_OperatorGroup: boolean
                            expressions: ChildListAccessor<N_Expression>
            tag: SingleChildAccessor<N_OperatorTag>
                        }
                        
                        export namespace N_OperatorGroup {
                            export function isInstance(node: ITypedNode): node is N_OperatorGroup {
                                return '_is_org_iets3_core_expr_base_OperatorGroup' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_OperatorGroup extends TypedNode implements N_OperatorGroup {
                            public _is_org_iets3_core_expr_base_OperatorGroup: boolean = true
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
                            public expressions: ChildListAccessor<N_Expression> = new ChildListAccessor(this.node, "expressions")
                            public tag: SingleChildAccessor<N_OperatorTag> = new SingleChildAccessor(this.node, "tag")
                        }
                        
                        
                        export interface N_OperatorTag extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_base_OperatorTag: boolean
                            
                        }
                        
                        export namespace N_OperatorTag {
                            export function isInstance(node: ITypedNode): node is N_OperatorTag {
                                return '_is_org_iets3_core_expr_base_OperatorTag' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_OperatorTag extends TypedNode implements N_OperatorTag {
                            public _is_org_iets3_core_expr_base_OperatorTag: boolean = true
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
                        
                        
                        export interface N_AndTag extends N_OperatorTag {
                            _is_org_iets3_core_expr_base_AndTag: boolean
                            
                        }
                        
                        export namespace N_AndTag {
                            export function isInstance(node: ITypedNode): node is N_AndTag {
                                return '_is_org_iets3_core_expr_base_AndTag' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AndTag extends TypedNode implements N_AndTag {
                            public _is_org_iets3_core_expr_base_AndTag: boolean = true
            public _is_org_iets3_core_expr_base_OperatorTag: boolean = true
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
                        
                        
                        export interface N_BangOp extends N_UnaryExpression {
                            _is_org_iets3_core_expr_base_BangOp: boolean
                            optionValue: SingleChildAccessor<N_Expression>
                        }
                        
                        export namespace N_BangOp {
                            export function isInstance(node: ITypedNode): node is N_BangOp {
                                return '_is_org_iets3_core_expr_base_BangOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BangOp extends TypedNode implements N_BangOp {
                            public _is_org_iets3_core_expr_base_BangOp: boolean = true
            public _is_org_iets3_core_expr_base_UnaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
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
                            public optionValue: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "optionValue")
                        }
                        
            
            export interface N_ITypeable extends ITypedNode {
                _is_org_iets3_core_expr_base_ITypeable: boolean
                
            }
            
            export namespace N_ITypeable {
                export function isInstance(node: ITypedNode): node is N_ITypeable {
                    return '_is_org_iets3_core_expr_base_ITypeable' in node;
                }
            }
            
            export class _N_TypedImpl_ITypeable extends TypedNode implements N_ITypeable {
                public _is_org_iets3_core_expr_base_ITypeable: boolean = true
                
            }
            
                        
                        export interface N_ConvenientBoolean extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_base_ConvenientBoolean: boolean
                            value: SingleChildAccessor<N_ConvenientBooleanValue>
                        }
                        
                        export namespace N_ConvenientBoolean {
                            export function isInstance(node: ITypedNode): node is N_ConvenientBoolean {
                                return '_is_org_iets3_core_expr_base_ConvenientBoolean' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ConvenientBoolean extends TypedNode implements N_ConvenientBoolean {
                            public _is_org_iets3_core_expr_base_ConvenientBoolean: boolean = true
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
                            public value: SingleChildAccessor<N_ConvenientBooleanValue> = new SingleChildAccessor(this.node, "value")
                        }
                        
                        
                        export interface N_ConvenientBooleanValue extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_base_ConvenientBooleanValue: boolean
                            
                        }
                        
                        export namespace N_ConvenientBooleanValue {
                            export function isInstance(node: ITypedNode): node is N_ConvenientBooleanValue {
                                return '_is_org_iets3_core_expr_base_ConvenientBooleanValue' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ConvenientBooleanValue extends TypedNode implements N_ConvenientBooleanValue {
                            public _is_org_iets3_core_expr_base_ConvenientBooleanValue: boolean = true
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
                        
                        
                        export interface N_AlwaysValue extends N_ConvenientBooleanValue {
                            _is_org_iets3_core_expr_base_AlwaysValue: boolean
                            
                        }
                        
                        export namespace N_AlwaysValue {
                            export function isInstance(node: ITypedNode): node is N_AlwaysValue {
                                return '_is_org_iets3_core_expr_base_AlwaysValue' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AlwaysValue extends TypedNode implements N_AlwaysValue {
                            public _is_org_iets3_core_expr_base_AlwaysValue: boolean = true
            public _is_org_iets3_core_expr_base_ConvenientBooleanValue: boolean = true
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
                        
                        
                        export interface N_NeverValue extends N_ConvenientBooleanValue {
                            _is_org_iets3_core_expr_base_NeverValue: boolean
                            
                        }
                        
                        export namespace N_NeverValue {
                            export function isInstance(node: ITypedNode): node is N_NeverValue {
                                return '_is_org_iets3_core_expr_base_NeverValue' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NeverValue extends TypedNode implements N_NeverValue {
                            public _is_org_iets3_core_expr_base_NeverValue: boolean = true
            public _is_org_iets3_core_expr_base_ConvenientBooleanValue: boolean = true
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
                        
                        
                        export interface N_ConvenientValueCond extends N_ConvenientBooleanValue {
                            _is_org_iets3_core_expr_base_ConvenientValueCond: boolean
                            expr: SingleChildAccessor<N_Expression>
                        }
                        
                        export namespace N_ConvenientValueCond {
                            export function isInstance(node: ITypedNode): node is N_ConvenientValueCond {
                                return '_is_org_iets3_core_expr_base_ConvenientValueCond' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ConvenientValueCond extends TypedNode implements N_ConvenientValueCond {
                            public _is_org_iets3_core_expr_base_ConvenientValueCond: boolean = true
            public _is_org_iets3_core_expr_base_ConvenientBooleanValue: boolean = true
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
                            public expr: SingleChildAccessor<N_Expression> = new SingleChildAccessor(this.node, "expr")
                        }
                        
            
            export interface N_IParameterizedTypeSupportsEquals extends ITypedNode {
                _is_org_iets3_core_expr_base_IParameterizedTypeSupportsEquals: boolean
                
            }
            
            export namespace N_IParameterizedTypeSupportsEquals {
                export function isInstance(node: ITypedNode): node is N_IParameterizedTypeSupportsEquals {
                    return '_is_org_iets3_core_expr_base_IParameterizedTypeSupportsEquals' in node;
                }
            }
            
            export class _N_TypedImpl_IParameterizedTypeSupportsEquals extends TypedNode implements N_IParameterizedTypeSupportsEquals {
                public _is_org_iets3_core_expr_base_IParameterizedTypeSupportsEquals: boolean = true
                
            }
            
                        
                        export interface N_IContextTypedOp extends N_IDotTarget {
                            _is_org_iets3_core_expr_base_IContextTypedOp: boolean
                            
                        }
                        
                        export namespace N_IContextTypedOp {
                            export function isInstance(node: ITypedNode): node is N_IContextTypedOp {
                                return '_is_org_iets3_core_expr_base_IContextTypedOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IContextTypedOp extends TypedNode implements N_IContextTypedOp {
                            public _is_org_iets3_core_expr_base_IContextTypedOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
                            
                        }
                        
                        
                        export interface N_RevealerThis extends N_Expression {
                            _is_org_iets3_core_expr_base_RevealerThis: boolean
                            
                        }
                        
                        export namespace N_RevealerThis {
                            export function isInstance(node: ITypedNode): node is N_RevealerThis {
                                return '_is_org_iets3_core_expr_base_RevealerThis' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_RevealerThis extends TypedNode implements N_RevealerThis {
                            public _is_org_iets3_core_expr_base_RevealerThis: boolean = true
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
                        
            
            export interface N_IAllowDeletionOfDot extends ITypedNode {
                _is_org_iets3_core_expr_base_IAllowDeletionOfDot: boolean
                
            }
            
            export namespace N_IAllowDeletionOfDot {
                export function isInstance(node: ITypedNode): node is N_IAllowDeletionOfDot {
                    return '_is_org_iets3_core_expr_base_IAllowDeletionOfDot' in node;
                }
            }
            
            export class _N_TypedImpl_IAllowDeletionOfDot extends TypedNode implements N_IAllowDeletionOfDot {
                public _is_org_iets3_core_expr_base_IAllowDeletionOfDot: boolean = true
                
            }
            
            
            export interface N_IAllowDotOnLeft extends ITypedNode {
                _is_org_iets3_core_expr_base_IAllowDotOnLeft: boolean
                
            }
            
            export namespace N_IAllowDotOnLeft {
                export function isInstance(node: ITypedNode): node is N_IAllowDotOnLeft {
                    return '_is_org_iets3_core_expr_base_IAllowDotOnLeft' in node;
                }
            }
            
            export class _N_TypedImpl_IAllowDotOnLeft extends TypedNode implements N_IAllowDotOnLeft {
                public _is_org_iets3_core_expr_base_IAllowDotOnLeft: boolean = true
                
            }
            
                        
                        export interface N_HasValueOp extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IDotTarget, N_ITargetThatCanDealWithNix {
                            _is_org_iets3_core_expr_base_HasValueOp: boolean
                            
                        }
                        
                        export namespace N_HasValueOp {
                            export function isInstance(node: ITypedNode): node is N_HasValueOp {
                                return '_is_org_iets3_core_expr_base_HasValueOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_HasValueOp extends TypedNode implements N_HasValueOp {
                            public _is_org_iets3_core_expr_base_HasValueOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_ITargetThatCanDealWithNix: boolean = true
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
                        
                        
                        export interface N_EmptyValue extends N_Expression, N_IEmptyLiteral {
                            _is_org_iets3_core_expr_base_EmptyValue: boolean
                            type: SingleChildAccessor<N_Type>
                        }
                        
                        export namespace N_EmptyValue {
                            export function isInstance(node: ITypedNode): node is N_EmptyValue {
                                return '_is_org_iets3_core_expr_base_EmptyValue' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EmptyValue extends TypedNode implements N_EmptyValue {
                            public _is_org_iets3_core_expr_base_EmptyValue: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IEmptyLiteral: boolean = true
            public _is_org_iets3_core_expr_base_ILiteral: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITrivialNode: boolean = true
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
                            public type: SingleChildAccessor<N_Type> = new SingleChildAccessor(this.node, "type")
                        }
                        
            
            export interface N_ITargetThatCanDealWithNix extends ITypedNode {
                _is_org_iets3_core_expr_base_ITargetThatCanDealWithNix: boolean
                
            }
            
            export namespace N_ITargetThatCanDealWithNix {
                export function isInstance(node: ITypedNode): node is N_ITargetThatCanDealWithNix {
                    return '_is_org_iets3_core_expr_base_ITargetThatCanDealWithNix' in node;
                }
            }
            
            export class _N_TypedImpl_ITargetThatCanDealWithNix extends TypedNode implements N_ITargetThatCanDealWithNix {
                public _is_org_iets3_core_expr_base_ITargetThatCanDealWithNix: boolean = true
                
            }
            
                        
                        export interface N_EmptyType extends N_Type {
                            _is_org_iets3_core_expr_base_EmptyType: boolean
                            
                        }
                        
                        export namespace N_EmptyType {
                            export function isInstance(node: ITypedNode): node is N_EmptyType {
                                return '_is_org_iets3_core_expr_base_EmptyType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_EmptyType extends TypedNode implements N_EmptyType {
                            public _is_org_iets3_core_expr_base_EmptyType: boolean = true
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
                        }
                        
                        
                        export interface N_IEmptyLiteral extends N_ILiteral {
                            _is_org_iets3_core_expr_base_IEmptyLiteral: boolean
                            
                        }
                        
                        export namespace N_IEmptyLiteral {
                            export function isInstance(node: ITypedNode): node is N_IEmptyLiteral {
                                return '_is_org_iets3_core_expr_base_IEmptyLiteral' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IEmptyLiteral extends TypedNode implements N_IEmptyLiteral {
                            public _is_org_iets3_core_expr_base_IEmptyLiteral: boolean = true
            public _is_org_iets3_core_expr_base_ILiteral: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITrivialNode: boolean = true
                            
                        }
                        
            
            export interface N_IComplexTypeSupportsEquals extends ITypedNode {
                _is_org_iets3_core_expr_base_IComplexTypeSupportsEquals: boolean
                
            }
            
            export namespace N_IComplexTypeSupportsEquals {
                export function isInstance(node: ITypedNode): node is N_IComplexTypeSupportsEquals {
                    return '_is_org_iets3_core_expr_base_IComplexTypeSupportsEquals' in node;
                }
            }
            
            export class _N_TypedImpl_IComplexTypeSupportsEquals extends TypedNode implements N_IComplexTypeSupportsEquals {
                public _is_org_iets3_core_expr_base_IComplexTypeSupportsEquals: boolean = true
                
            }
            }