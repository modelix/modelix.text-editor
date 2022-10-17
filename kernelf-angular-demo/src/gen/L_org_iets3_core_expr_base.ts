import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode
} from "ts-model-api";

import {L_org_iets3_core_base} from "./L_org_iets3_core_base";
import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";

export namespace L_org_iets3_core_expr_base {

  export class L_org_iets3_core_expr_base extends GeneratedLanguage {
    public static INSTANCE: L_org_iets3_core_expr_base = new L_org_iets3_core_expr_base();

    constructor() {
      super("org.iets3.core.expr.base")

      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7425695345928347719", (node: INodeJS) => new Expression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7425695345928349204", (node: INodeJS) => new Type(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7425695345928515123", (node: INodeJS) => new PrimitiveType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156576277", (node: INodeJS) => new BinaryExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156578546", (node: INodeJS) => new PlusExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156578671", (node: INodeJS) => new MulExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156652453", (node: INodeJS) => new MinusExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156652603", (node: INodeJS) => new DivExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156687762", (node: INodeJS) => new BinaryArithmeticExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156687763", (node: INodeJS) => new BinaryComparisonExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156687764", (node: INodeJS) => new GreaterExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156687889", (node: INodeJS) => new GreaterEqualsExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156687890", (node: INodeJS) => new LessExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156687891", (node: INodeJS) => new LessEqualsExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156723687", (node: INodeJS) => new BinaryLogicalExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156723899", (node: INodeJS) => new LogicalOrExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156724025", (node: INodeJS) => new LogicalAndExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156760985", (node: INodeJS) => new BinaryEqualityExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156761033", (node: INodeJS) => new EqualsExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156761034", (node: INodeJS) => new NotEqualsExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156802409", (node: INodeJS) => new UnaryExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156802410", (node: INodeJS) => new LogicalNotExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837156855227", (node: INodeJS) => new UnaryMinusExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5115872837157187871", (node: INodeJS) => new ParensExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1514143479005139333", (node: INodeJS) => new LogicalImpliesExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/9002563722476995145", (node: INodeJS) => new DotExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/9002563722476995146", (node: INodeJS) => new IDotTarget(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8379605524044170035", (node: INodeJS) => new PrimitiveLiteral(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7416522108621683377", (node: INodeJS) => new IRef(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7849560302565679722", (node: INodeJS) => new IfExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7849560302565692340", (node: INodeJS) => new IBigExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8092372783983747124", (node: INodeJS) => new IReducableExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8092372783983858717", (node: INodeJS) => new ReductionInspector(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8092372783984279054", (node: INodeJS) => new TracerExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2807135271608265973", (node: INodeJS) => new NoneLiteral(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2807135271607940261", (node: INodeJS) => new NoneType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1059200196223309235", (node: INodeJS) => new SomeValExpr(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2807135271607939856", (node: INodeJS) => new OptionType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2807135271608145920", (node: INodeJS) => new IsSomeExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8448265401162061756", (node: INodeJS) => new LogicalIffExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/125444643124876487", (node: INodeJS) => new IIsSingleSymbol(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1919538606559981270", (node: INodeJS) => new ErrorLiteral(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1919538606560895472", (node: INodeJS) => new ErrorExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1919538606561852052", (node: INodeJS) => new SuccessType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1919538606561852365", (node: INodeJS) => new GenericErrorType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1919538606561852396", (node: INodeJS) => new SpecificErrorType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1919538606562038159", (node: INodeJS) => new IAttemptType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6481804410366698223", (node: INodeJS) => new AttemptType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6481804410367226920", (node: INodeJS) => new TryExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6481804410367607231", (node: INodeJS) => new TrySuccessClause(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7089558164905593724", (node: INodeJS) => new IOptionallyTyped(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7089558164908491660", (node: INodeJS) => new EmptyExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7089558164909884363", (node: INodeJS) => new TryErrorClause(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7089558164910719190", (node: INodeJS) => new SuccessValueExpr(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1206081519717706522", (node: INodeJS) => new ITypeFromMultiple(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3281846772293355652", (node: INodeJS) => new CastExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8811147530087029174", (node: INodeJS) => new IStructuredSyntax(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/867786408877888703", (node: INodeJS) => new ExprInContract(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/867786408877810851", (node: INodeJS) => new IContracted(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7249175668709475545", (node: INodeJS) => new IContainmentStackMember(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/867786408877811180", (node: INodeJS) => new Postcondition(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/867786408877811181", (node: INodeJS) => new Invariant(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/867786408877811041", (node: INodeJS) => new Contract(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/867786408877811036", (node: INodeJS) => new ContractItem(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/867786408877811037", (node: INodeJS) => new Precondition(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/867786408882279828", (node: INodeJS) => new PlainConstraint(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3352322994211036342", (node: INodeJS) => new OneOfTarget(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2245119349904068784", (node: INodeJS) => new RangeTarget(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1019070541450015930", (node: INodeJS) => new TupleType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1019070541450016346", (node: INodeJS) => new TupleValue(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2527679671886479690", (node: INodeJS) => new TupleAccessExpr(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7971844778466793028", (node: INodeJS) => new AlternativesExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7971844778466793051", (node: INodeJS) => new AltOption(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6381079423399017846", (node: INodeJS) => new IOptionDerefContext(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3829047245302399306", (node: INodeJS) => new ISingleSymbolRef(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3829047245302401610", (node: INodeJS) => new IScopeFilterer(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3829047245309363370", (node: INodeJS) => new OptionOrExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7791618349053901166", (node: INodeJS) => new IMayHaveEffect(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/508719611255975992", (node: INodeJS) => new IBlockLike(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8219602584757553931", (node: INodeJS) => new CheckTypeConstraintsExpr(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8219602584757554015", (node: INodeJS) => new ValidityType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8219602584758209317", (node: INodeJS) => new OkTarget(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8219602584758531613", (node: INodeJS) => new ErrorTarget(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8219602584770724049", (node: INodeJS) => new ImplicitValidityValExpr(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5822258191940088521", (node: INodeJS) => new IValidOtherwiseContainer(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7071042522334260296", (node: INodeJS) => new ITyped(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3913100176250796213", (node: INodeJS) => new IIgnoreTrivialErrorsContext(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/543855896735511983", (node: INodeJS) => new IDeclarativelyInterpretable(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6527211908668936592", (node: INodeJS) => new IDocumentableWordProvider(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6527211908668938616", (node: INodeJS) => new DocWordRef(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6527211908672525240", (node: INodeJS) => new IDocumentableWordContainer(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3908189377504169836", (node: INodeJS) => new IHasBaseType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6571046568849029819", (node: INodeJS) => new ISSConstrainedValue(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6571046568849029820", (node: INodeJS) => new ISSConstrainedValueRef(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7093020903919699057", (node: INodeJS) => new ISSItValueRef(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7093020903927062949", (node: INodeJS) => new ISSDelegatingType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6859926652464625057", (node: INodeJS) => new ICollectionType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1813872364117842299", (node: INodeJS) => new ConstraintAndErrorNode(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7782108600708168956", (node: INodeJS) => new ReferenceType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7782108600708210942", (node: INodeJS) => new IReferenceableType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7782108600709141067", (node: INodeJS) => new MakeRefTarget(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7782108600710395780", (node: INodeJS) => new ILiteral(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7782108600712067692", (node: INodeJS) => new DeRefTarget(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/9142018459473556821", (node: INodeJS) => new JoinType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6095949300264944876", (node: INodeJS) => new IJoinTypeContext(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8505972469205863874", (node: INodeJS) => new ITraceRoot(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1102067954003609289", (node: INodeJS) => new IMultiTraceRoot(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/4934857995792117654", (node: INodeJS) => new Revealer(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7631603674206286466", (node: INodeJS) => new IControlAdvancedFeatures_old(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/952298261448780116", (node: INodeJS) => new IMayAllowEffect(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/162522551948891781", (node: INodeJS) => new IMainSlot(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3878179565988505489", (node: INodeJS) => new IMayReadMutableState(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1134276681297127890", (node: INodeJS) => new IWantNewLine(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3878179565981658347", (node: INodeJS) => new IAllowsDocInChildExpressions(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8237981399425912554", (node: INodeJS) => new IVoidContext(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5571545316364799282", (node: INodeJS) => new PragmaExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5571545316364803538", (node: INodeJS) => new PragmaDisableCaching(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5043470053404793105", (node: INodeJS) => new IRunningInterpreterContext(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6932772747669876272", (node: INodeJS) => new DefaultValueExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6932772747669856399", (node: INodeJS) => new ITypeSupportsDefaultValue(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/4886573260948603548", (node: INodeJS) => new IContextTypeProvider(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/411710798114972602", (node: INodeJS) => new FailExpr(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/4886573260948604727", (node: INodeJS) => new ThisExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/606861080870797309", (node: INodeJS) => new IfElseSection(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8237981399425912525", (node: INodeJS) => new VoidType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/195141004745586068", (node: INodeJS) => new ICanBeLValue(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5227231181400542768", (node: INodeJS) => new INameQualifier(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2850607030358693529", (node: INodeJS) => new SimpleExpressionValueInspector(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/4443886968505207936", (node: INodeJS) => new IProvidePathConstraints(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/6044555027808714586", (node: INodeJS) => new ModExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/1185099853503726569", (node: INodeJS) => new IAssertConstraints(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5955298286257997823", (node: INodeJS) => new ColonCast(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5974679004769488538", (node: INodeJS) => new SuccessExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8266215269008046728", (node: INodeJS) => new INeverAllowDot(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2152957725070409762", (node: INodeJS) => new AbstractMinMaxExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2152957725070518938", (node: INodeJS) => new MinExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2152957725070518937", (node: INodeJS) => new MaxExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/369777186288917319", (node: INodeJS) => new ITypeOverridingContext(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3593191807001111860", (node: INodeJS) => new NonStrictEqualsExpression(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/195141004745644975", (node: INodeJS) => new AssignmentExpr(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5299123466384889590", (node: INodeJS) => new IProgramLocationProvider(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5299123466385888301", (node: INodeJS) => new ProgramLocationType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5299123466385889548", (node: INodeJS) => new ProgramLocationOp(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5299123466385900735", (node: INodeJS) => new ProgramLocationUrlOp(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5299123466384402682", (node: INodeJS) => new MessageValueType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5299123466398246930", (node: INodeJS) => new InlineMessage(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/672388678113750644", (node: INodeJS) => new ITypeSupportsProposals(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/672388678117471179", (node: INodeJS) => new IContextAssistantTypeProvider(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8006404979729416973", (node: INodeJS) => new OrTag(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8560722270290706287", (node: INodeJS) => new MulTag(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8560722270289800014", (node: INodeJS) => new PlusTag(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5338017450510303355", (node: INodeJS) => new OperatorGroup(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5338017450510303356", (node: INodeJS) => new OperatorTag(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5338017450510309031", (node: INodeJS) => new AndTag(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2390066428848651932", (node: INodeJS) => new BangOp(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5706483968284528352", (node: INodeJS) => new ITypeable(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8435714728543612220", (node: INodeJS) => new ConvenientBoolean(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8435714728543612221", (node: INodeJS) => new ConvenientBooleanValue(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8435714728543612222", (node: INodeJS) => new AlwaysValue(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8435714728543612253", (node: INodeJS) => new NeverValue(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8435714728543612284", (node: INodeJS) => new ConvenientValueCond(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/8946943035394495000", (node: INodeJS) => new IParameterizedTypeSupportsEquals(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7549708508605912547", (node: INodeJS) => new IContextTypedOp(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/9078496479923905756", (node: INodeJS) => new RevealerThis(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5032482955836171565", (node: INodeJS) => new IAllowDeletionOfDot(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/5032482955834438679", (node: INodeJS) => new IAllowDotOnLeft(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3889855429449957987", (node: INodeJS) => new HasValueOp(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3889855429450038473", (node: INodeJS) => new EmptyValue(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/2417394483940924214", (node: INodeJS) => new ITargetThatCanDealWithNix(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/3984696641266738408", (node: INodeJS) => new EmptyType(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/915344943735946072", (node: INodeJS) => new IEmptyLiteral(node))
      this.nodeWrappers.set("mps:cfaa4966-b7d5-4b69-b66a-309a6e1a7290/7520958096812440715", (node: INodeJS) => new IComplexTypeSupportsEquals(node))
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

  export const Language = L_org_iets3_core_expr_base.INSTANCE

  export class Expression extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class Type extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class PrimitiveType extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class BinaryExpression extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class PlusExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class MulExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class MinusExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class DivExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class BinaryArithmeticExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class BinaryComparisonExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class GreaterExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class GreaterEqualsExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class LessExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class LessEqualsExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class BinaryLogicalExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class LogicalOrExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class LogicalAndExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class BinaryEqualityExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class EqualsExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class NotEqualsExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class UnaryExpression extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class LogicalNotExpression extends TypedNode {
    public expr: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expr")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class UnaryMinusExpression extends TypedNode {
    public expr: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expr")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ParensExpression extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class LogicalImpliesExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class DotExpression extends TypedNode {
    public expr: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expr")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IDotTarget extends TypedNode {

  }

  export class PrimitiveLiteral extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IRef extends TypedNode {

  }

  export class IfExpression extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IBigExpression extends TypedNode {

  }

  export class IReducableExpression extends TypedNode {

  }

  export class ReductionInspector extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class TracerExpression extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class NoneLiteral extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class NoneType extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class SomeValExpr extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class OptionType extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IsSomeExpression extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
    public optionalName: SingleChildAccessor<L_org_iets3_core_base.OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")

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

  export class LogicalIffExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IIsSingleSymbol extends TypedNode {

  }

  export class ErrorLiteral extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ErrorExpression extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class SuccessType extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class GenericErrorType extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class SpecificErrorType extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IAttemptType extends TypedNode {

  }

  export class AttemptType extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class TryExpression extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
    public optionalName: SingleChildAccessor<L_org_iets3_core_base.OptionalNameSpecifier> = new SingleChildAccessor(this.node, "optionalName")

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

  export class TrySuccessClause extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IOptionallyTyped extends TypedNode {

  }

  export class EmptyExpression extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class TryErrorClause extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class SuccessValueExpr extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ITypeFromMultiple extends TypedNode {

  }

  export class CastExpression extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IStructuredSyntax extends TypedNode {

  }

  export class ExprInContract extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IContracted extends TypedNode {

  }

  export class IContainmentStackMember extends TypedNode {
    public set name(value: string | undefined) {
      this.node.setPropertyValue("name", value)
    }

    public get name(): string | undefined {
      return this.node.getPropertyValue("name")
    }
  }

  export class Postcondition extends TypedNode {
    public set warning(value: string | undefined) {
      this.node.setPropertyValue("warning", value)
    }

    public get warning(): string | undefined {
      return this.node.getPropertyValue("warning")
    }

    public expr: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expr")
    public err: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "err")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class Invariant extends TypedNode {
    public set warning(value: string | undefined) {
      this.node.setPropertyValue("warning", value)
    }

    public get warning(): string | undefined {
      return this.node.getPropertyValue("warning")
    }

    public expr: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expr")
    public err: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "err")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class Contract extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ContractItem extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class Precondition extends TypedNode {
    public set warning(value: string | undefined) {
      this.node.setPropertyValue("warning", value)
    }

    public get warning(): string | undefined {
      return this.node.getPropertyValue("warning")
    }

    public expr: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expr")
    public err: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "err")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class PlainConstraint extends TypedNode {
    public set warning(value: string | undefined) {
      this.node.setPropertyValue("warning", value)
    }

    public get warning(): string | undefined {
      return this.node.getPropertyValue("warning")
    }

    public expr: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expr")
    public err: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "err")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class OneOfTarget extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class RangeTarget extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class TupleType extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class TupleValue extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class TupleAccessExpr extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class AlternativesExpression extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

    public set __hash(value: string | undefined) {
      this.node.setPropertyValue("__hash", value)
    }

    public get __hash(): string | undefined {
      return this.node.getPropertyValue("__hash")
    }
  }

  export class AltOption extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IOptionDerefContext extends TypedNode {

  }

  export class ISingleSymbolRef extends TypedNode {

  }

  export class IScopeFilterer extends TypedNode {

  }

  export class OptionOrExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IMayHaveEffect extends TypedNode {

  }

  export class IBlockLike extends TypedNode {

  }

  export class CheckTypeConstraintsExpr extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ValidityType extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class OkTarget extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ErrorTarget extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ImplicitValidityValExpr extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IValidOtherwiseContainer extends TypedNode {

  }

  export class ITyped extends TypedNode {

  }

  export class IIgnoreTrivialErrorsContext extends TypedNode {

  }

  export class IDeclarativelyInterpretable extends TypedNode {

  }

  export class IDocumentableWordProvider extends TypedNode {

  }

  export class DocWordRef extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IDocumentableWordContainer extends TypedNode {

  }

  export class IHasBaseType extends TypedNode {

  }

  export class ISSConstrainedValue extends TypedNode {

  }

  export class ISSConstrainedValueRef extends TypedNode {

  }

  export class ISSItValueRef extends TypedNode {

  }

  export class ISSDelegatingType extends TypedNode {

  }

  export class ICollectionType extends TypedNode {

  }

  export class ConstraintAndErrorNode extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ReferenceType extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IReferenceableType extends TypedNode {

  }

  export class MakeRefTarget extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ILiteral extends TypedNode {

  }

  export class DeRefTarget extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class JoinType extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IJoinTypeContext extends TypedNode {

  }

  export class ITraceRoot extends TypedNode {

  }

  export class IMultiTraceRoot extends TypedNode {

  }

  export class Revealer extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IControlAdvancedFeatures_old extends TypedNode {

  }

  export class IMayAllowEffect extends TypedNode {

  }

  export class IMainSlot extends TypedNode {

  }

  export class IMayReadMutableState extends TypedNode {

  }

  export class IWantNewLine extends TypedNode {

  }

  export class IAllowsDocInChildExpressions extends TypedNode {

  }

  export class IVoidContext extends TypedNode {

  }

  export class PragmaExpression extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class PragmaDisableCaching extends TypedNode {
    public expr: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expr")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IRunningInterpreterContext extends TypedNode {

  }

  export class DefaultValueExpression extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ITypeSupportsDefaultValue extends TypedNode {

  }

  export class IContextTypeProvider extends TypedNode {

  }

  export class FailExpr extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ThisExpression extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IfElseSection extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class VoidType extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ICanBeLValue extends TypedNode {

  }

  export class INameQualifier extends TypedNode {

  }

  export class SimpleExpressionValueInspector extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IProvidePathConstraints extends TypedNode {

  }

  export class ModExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IAssertConstraints extends TypedNode {

  }

  export class ColonCast extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class SuccessExpression extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class INeverAllowDot extends TypedNode {

  }

  export class AbstractMinMaxExpression extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class MinExpression extends TypedNode {
    public values: ChildListAccessor<L_org_iets3_core_expr_base.Expression> = new ChildListAccessor(this.node, "values")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class MaxExpression extends TypedNode {
    public values: ChildListAccessor<L_org_iets3_core_expr_base.Expression> = new ChildListAccessor(this.node, "values")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ITypeOverridingContext extends TypedNode {

  }

  export class NonStrictEqualsExpression extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class AssignmentExpr extends TypedNode {
    public left: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "left")
    public right: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "right")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IProgramLocationProvider extends TypedNode {

  }

  export class ProgramLocationType extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ProgramLocationOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ProgramLocationUrlOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class MessageValueType extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class InlineMessage extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ITypeSupportsProposals extends TypedNode {

  }

  export class IContextAssistantTypeProvider extends TypedNode {

  }

  export class OrTag extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class MulTag extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class PlusTag extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class OperatorGroup extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class OperatorTag extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class AndTag extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class BangOp extends TypedNode {
    public expr: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "expr")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ITypeable extends TypedNode {

  }

  export class ConvenientBoolean extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ConvenientBooleanValue extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class AlwaysValue extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class NeverValue extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ConvenientValueCond extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IParameterizedTypeSupportsEquals extends TypedNode {

  }

  export class IContextTypedOp extends TypedNode {

  }

  export class RevealerThis extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IAllowDeletionOfDot extends TypedNode {

  }

  export class IAllowDotOnLeft extends TypedNode {

  }

  export class HasValueOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class EmptyValue extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class ITargetThatCanDealWithNix extends TypedNode {

  }

  export class EmptyType extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
  }

  export class IEmptyLiteral extends TypedNode {

  }

  export class IComplexTypeSupportsEquals extends TypedNode {

  }
}
