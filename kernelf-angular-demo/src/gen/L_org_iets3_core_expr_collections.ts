import {
  ChildListAccessor,
  SingleChildAccessor,
  GeneratedLanguage,
  INodeJS,
  TypedNode
} from "ts-model-api";

import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
import {L_org_iets3_core_expr_base} from "./L_org_iets3_core_expr_base";

export namespace L_org_iets3_core_expr_collections {

  export class L_org_iets3_core_expr_collections extends GeneratedLanguage {
    public static INSTANCE: L_org_iets3_core_expr_collections = new L_org_iets3_core_expr_collections();

    constructor() {
      super("org.iets3.core.expr.collections")

      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339749509", (node: INodeJS) => new CollectionType(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339757344", (node: INodeJS) => new ListType(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339759319", (node: INodeJS) => new ListLiteral(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339790458", (node: INodeJS) => new ICollectionOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339795488", (node: INodeJS) => new NoArgCollectionOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339796915", (node: INodeJS) => new SizeOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339840476", (node: INodeJS) => new IsEmptyOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339848519", (node: INodeJS) => new IOrderedCollection(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339848559", (node: INodeJS) => new IOrderedCollectionOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339850572", (node: INodeJS) => new FirstOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339850588", (node: INodeJS) => new IElementTyped(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339853806", (node: INodeJS) => new LastOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283340004826", (node: INodeJS) => new AtOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283340020764", (node: INodeJS) => new OneArgCollectionOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283340021069", (node: INodeJS) => new IContextTypedCollOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283340640412", (node: INodeJS) => new MapOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283340715406", (node: INodeJS) => new WhereOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265511400449", (node: INodeJS) => new DistinctOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265513219132", (node: INodeJS) => new AsImmutableListOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265514323710", (node: INodeJS) => new ContainsOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265514351708", (node: INodeJS) => new OneCollBaseTypedArgCollectionOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265515327232", (node: INodeJS) => new OneArgPredicateCollectionOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265515619803", (node: INodeJS) => new AnyOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265518788050", (node: INodeJS) => new AllOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265520080263", (node: INodeJS) => new SetType(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265520081293", (node: INodeJS) => new SetLiteral(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265522211270", (node: INodeJS) => new AsImmutableSetOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5849458724932670346", (node: INodeJS) => new BracketOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8448265401163110902", (node: INodeJS) => new MapType(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8448265401163111272", (node: INodeJS) => new MapLiteral(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8448265401163111273", (node: INodeJS) => new KeyValuePair(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8448265401163555724", (node: INodeJS) => new MapWithOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8448265401163714133", (node: INodeJS) => new MapWithoutOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5585772046587930249", (node: INodeJS) => new MaxOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5585772046594451299", (node: INodeJS) => new SumOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5585772046596642164", (node: INodeJS) => new FirstNOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5585772046597818717", (node: INodeJS) => new LastNOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/890435239346753529", (node: INodeJS) => new SimpleSortOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7740953487940081584", (node: INodeJS) => new MinOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/2156530943179783739", (node: INodeJS) => new ListWithOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/2156530943179855331", (node: INodeJS) => new SetWithOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8694548031077039769", (node: INodeJS) => new ElementTypeConstraintSingle(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8694548031078300776", (node: INodeJS) => new ElementTypeConstraintMap(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/1330041117646892901", (node: INodeJS) => new CollectionSizeSpec(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/3989687177013570767", (node: INodeJS) => new UpToTarget(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/4618483580248255217", (node: INodeJS) => new UnpackOptionsOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/75413091695536841", (node: INodeJS) => new IndexExpr(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/9097157441616112342", (node: INodeJS) => new IProvideIndex(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/9097157441620016186", (node: INodeJS) => new ForeachOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/2554784455264825928", (node: INodeJS) => new FlattenOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/6414340278546763815", (node: INodeJS) => new AsSingletonList(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5070313213698520477", (node: INodeJS) => new AbstractStringListJoiner(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5070313213695398904", (node: INodeJS) => new StringJoinOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5070313213697900736", (node: INodeJS) => new StringTerminateOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/3831047747134047985", (node: INodeJS) => new SetWithoutOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/6095949300270588116", (node: INodeJS) => new IsNotEmptyOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/4931785860342338319", (node: INodeJS) => new FoldLeftOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/4931785860342338320", (node: INodeJS) => new FoldOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/24388123213992448", (node: INodeJS) => new AsMapOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/24388123215615666", (node: INodeJS) => new MapSizeOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/24388123216554083", (node: INodeJS) => new FindFirstOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/362871314062739301", (node: INodeJS) => new ListWithAllOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5291952221899372124", (node: INodeJS) => new MapLikeType(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/890442848561707151", (node: INodeJS) => new ListInsertOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7757419675876255273", (node: INodeJS) => new MapKeysOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7757419675876240958", (node: INodeJS) => new MapValuesOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/890442848561696122", (node: INodeJS) => new ListWithoutOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7757419675876236259", (node: INodeJS) => new MapContainsKeyOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7757419675865128281", (node: INodeJS) => new IMapOneArgOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/527291771330968213", (node: INodeJS) => new ISetOneArgOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5291952221900249273", (node: INodeJS) => new IListOneArgOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/444732437356043012", (node: INodeJS) => new AllWithIndexOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/444732437356045611", (node: INodeJS) => new TwoArgPredicateCollectionOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/4481921169623440367", (node: INodeJS) => new AnyWithIndexOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/393796118209799325", (node: INodeJS) => new TailOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5396945261017737777", (node: INodeJS) => new ReverseOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5396945261030611861", (node: INodeJS) => new SetUnionOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5396945261038438968", (node: INodeJS) => new SetDiffOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/531692237848496057", (node: INodeJS) => new ListPickOp(node))
      this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/1406572792884327605", (node: INodeJS) => new IndexOfOp(node))
    }

    /*
    public getConcepts() {
        return [this.CollectionType, this.ListType, this.ListLiteral, this.ICollectionOp, this.NoArgCollectionOp, this.SizeOp, this.IsEmptyOp, this.IOrderedCollection, this.IOrderedCollectionOp, this.FirstOp, this.IElementTyped, this.LastOp, this.AtOp, this.OneArgCollectionOp, this.IContextTypedCollOp, this.MapOp, this.WhereOp, this.DistinctOp, this.AsImmutableListOp, this.ContainsOp, this.OneCollBaseTypedArgCollectionOp, this.OneArgPredicateCollectionOp, this.AnyOp, this.AllOp, this.SetType, this.SetLiteral, this.AsImmutableSetOp, this.BracketOp, this.MapType, this.MapLiteral, this.KeyValuePair, this.MapWithOp, this.MapWithoutOp, this.MaxOp, this.SumOp, this.FirstNOp, this.LastNOp, this.SimpleSortOp, this.MinOp, this.ListWithOp, this.SetWithOp, this.ElementTypeConstraintSingle, this.ElementTypeConstraintMap, this.CollectionSizeSpec, this.UpToTarget, this.UnpackOptionsOp, this.IndexExpr, this.IProvideIndex, this.ForeachOp, this.FlattenOp, this.AsSingletonList, this.AbstractStringListJoiner, this.StringJoinOp, this.StringTerminateOp, this.SetWithoutOp, this.IsNotEmptyOp, this.FoldLeftOp, this.FoldOp, this.AsMapOp, this.MapSizeOp, this.FindFirstOp, this.ListWithAllOp, this.MapLikeType, this.ListInsertOp, this.MapKeysOp, this.MapValuesOp, this.ListWithoutOp, this.MapContainsKeyOp, this.IMapOneArgOp, this.ISetOneArgOp, this.IListOneArgOp, this.AllWithIndexOp, this.TwoArgPredicateCollectionOp, this.AnyWithIndexOp, this.TailOp, this.ReverseOp, this.SetUnionOp, this.SetDiffOp, this.ListPickOp, this.IndexOfOp]
    }
                    public CollectionType: _C_Impl_CollectionType = _C_Impl_CollectionType
    public ListType: _C_Impl_ListType = _C_Impl_ListType
    public ListLiteral: _C_Impl_ListLiteral = _C_Impl_ListLiteral
    public ICollectionOp: _C_Impl_ICollectionOp = _C_Impl_ICollectionOp
    public NoArgCollectionOp: _C_Impl_NoArgCollectionOp = _C_Impl_NoArgCollectionOp
    public SizeOp: _C_Impl_SizeOp = _C_Impl_SizeOp
    public IsEmptyOp: _C_Impl_IsEmptyOp = _C_Impl_IsEmptyOp
    public IOrderedCollection: _C_Impl_IOrderedCollection = _C_Impl_IOrderedCollection
    public IOrderedCollectionOp: _C_Impl_IOrderedCollectionOp = _C_Impl_IOrderedCollectionOp
    public FirstOp: _C_Impl_FirstOp = _C_Impl_FirstOp
    public IElementTyped: _C_Impl_IElementTyped = _C_Impl_IElementTyped
    public LastOp: _C_Impl_LastOp = _C_Impl_LastOp
    public AtOp: _C_Impl_AtOp = _C_Impl_AtOp
    public OneArgCollectionOp: _C_Impl_OneArgCollectionOp = _C_Impl_OneArgCollectionOp
    public IContextTypedCollOp: _C_Impl_IContextTypedCollOp = _C_Impl_IContextTypedCollOp
    public MapOp: _C_Impl_MapOp = _C_Impl_MapOp
    public WhereOp: _C_Impl_WhereOp = _C_Impl_WhereOp
    public DistinctOp: _C_Impl_DistinctOp = _C_Impl_DistinctOp
    public AsImmutableListOp: _C_Impl_AsImmutableListOp = _C_Impl_AsImmutableListOp
    public ContainsOp: _C_Impl_ContainsOp = _C_Impl_ContainsOp
    public OneCollBaseTypedArgCollectionOp: _C_Impl_OneCollBaseTypedArgCollectionOp = _C_Impl_OneCollBaseTypedArgCollectionOp
    public OneArgPredicateCollectionOp: _C_Impl_OneArgPredicateCollectionOp = _C_Impl_OneArgPredicateCollectionOp
    public AnyOp: _C_Impl_AnyOp = _C_Impl_AnyOp
    public AllOp: _C_Impl_AllOp = _C_Impl_AllOp
    public SetType: _C_Impl_SetType = _C_Impl_SetType
    public SetLiteral: _C_Impl_SetLiteral = _C_Impl_SetLiteral
    public AsImmutableSetOp: _C_Impl_AsImmutableSetOp = _C_Impl_AsImmutableSetOp
    public BracketOp: _C_Impl_BracketOp = _C_Impl_BracketOp
    public MapType: _C_Impl_MapType = _C_Impl_MapType
    public MapLiteral: _C_Impl_MapLiteral = _C_Impl_MapLiteral
    public KeyValuePair: _C_Impl_KeyValuePair = _C_Impl_KeyValuePair
    public MapWithOp: _C_Impl_MapWithOp = _C_Impl_MapWithOp
    public MapWithoutOp: _C_Impl_MapWithoutOp = _C_Impl_MapWithoutOp
    public MaxOp: _C_Impl_MaxOp = _C_Impl_MaxOp
    public SumOp: _C_Impl_SumOp = _C_Impl_SumOp
    public FirstNOp: _C_Impl_FirstNOp = _C_Impl_FirstNOp
    public LastNOp: _C_Impl_LastNOp = _C_Impl_LastNOp
    public SimpleSortOp: _C_Impl_SimpleSortOp = _C_Impl_SimpleSortOp
    public MinOp: _C_Impl_MinOp = _C_Impl_MinOp
    public ListWithOp: _C_Impl_ListWithOp = _C_Impl_ListWithOp
    public SetWithOp: _C_Impl_SetWithOp = _C_Impl_SetWithOp
    public ElementTypeConstraintSingle: _C_Impl_ElementTypeConstraintSingle = _C_Impl_ElementTypeConstraintSingle
    public ElementTypeConstraintMap: _C_Impl_ElementTypeConstraintMap = _C_Impl_ElementTypeConstraintMap
    public CollectionSizeSpec: _C_Impl_CollectionSizeSpec = _C_Impl_CollectionSizeSpec
    public UpToTarget: _C_Impl_UpToTarget = _C_Impl_UpToTarget
    public UnpackOptionsOp: _C_Impl_UnpackOptionsOp = _C_Impl_UnpackOptionsOp
    public IndexExpr: _C_Impl_IndexExpr = _C_Impl_IndexExpr
    public IProvideIndex: _C_Impl_IProvideIndex = _C_Impl_IProvideIndex
    public ForeachOp: _C_Impl_ForeachOp = _C_Impl_ForeachOp
    public FlattenOp: _C_Impl_FlattenOp = _C_Impl_FlattenOp
    public AsSingletonList: _C_Impl_AsSingletonList = _C_Impl_AsSingletonList
    public AbstractStringListJoiner: _C_Impl_AbstractStringListJoiner = _C_Impl_AbstractStringListJoiner
    public StringJoinOp: _C_Impl_StringJoinOp = _C_Impl_StringJoinOp
    public StringTerminateOp: _C_Impl_StringTerminateOp = _C_Impl_StringTerminateOp
    public SetWithoutOp: _C_Impl_SetWithoutOp = _C_Impl_SetWithoutOp
    public IsNotEmptyOp: _C_Impl_IsNotEmptyOp = _C_Impl_IsNotEmptyOp
    public FoldLeftOp: _C_Impl_FoldLeftOp = _C_Impl_FoldLeftOp
    public FoldOp: _C_Impl_FoldOp = _C_Impl_FoldOp
    public AsMapOp: _C_Impl_AsMapOp = _C_Impl_AsMapOp
    public MapSizeOp: _C_Impl_MapSizeOp = _C_Impl_MapSizeOp
    public FindFirstOp: _C_Impl_FindFirstOp = _C_Impl_FindFirstOp
    public ListWithAllOp: _C_Impl_ListWithAllOp = _C_Impl_ListWithAllOp
    public MapLikeType: _C_Impl_MapLikeType = _C_Impl_MapLikeType
    public ListInsertOp: _C_Impl_ListInsertOp = _C_Impl_ListInsertOp
    public MapKeysOp: _C_Impl_MapKeysOp = _C_Impl_MapKeysOp
    public MapValuesOp: _C_Impl_MapValuesOp = _C_Impl_MapValuesOp
    public ListWithoutOp: _C_Impl_ListWithoutOp = _C_Impl_ListWithoutOp
    public MapContainsKeyOp: _C_Impl_MapContainsKeyOp = _C_Impl_MapContainsKeyOp
    public IMapOneArgOp: _C_Impl_IMapOneArgOp = _C_Impl_IMapOneArgOp
    public ISetOneArgOp: _C_Impl_ISetOneArgOp = _C_Impl_ISetOneArgOp
    public IListOneArgOp: _C_Impl_IListOneArgOp = _C_Impl_IListOneArgOp
    public AllWithIndexOp: _C_Impl_AllWithIndexOp = _C_Impl_AllWithIndexOp
    public TwoArgPredicateCollectionOp: _C_Impl_TwoArgPredicateCollectionOp = _C_Impl_TwoArgPredicateCollectionOp
    public AnyWithIndexOp: _C_Impl_AnyWithIndexOp = _C_Impl_AnyWithIndexOp
    public TailOp: _C_Impl_TailOp = _C_Impl_TailOp
    public ReverseOp: _C_Impl_ReverseOp = _C_Impl_ReverseOp
    public SetUnionOp: _C_Impl_SetUnionOp = _C_Impl_SetUnionOp
    public SetDiffOp: _C_Impl_SetDiffOp = _C_Impl_SetDiffOp
    public ListPickOp: _C_Impl_ListPickOp = _C_Impl_ListPickOp
    public IndexOfOp: _C_Impl_IndexOfOp = _C_Impl_IndexOfOp
    */
  }

  export const Language = L_org_iets3_core_expr_collections.INSTANCE

  export class CollectionType extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class ListType extends TypedNode {
    public sizeConstraint: SingleChildAccessor<L_org_iets3_core_expr_collections.CollectionSizeSpec> = new SingleChildAccessor(this.node, "sizeConstraint")
    public baseType: SingleChildAccessor<L_org_iets3_core_expr_base.Type> = new SingleChildAccessor(this.node, "baseType")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class ListLiteral extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class ICollectionOp extends TypedNode {

  }

  export class NoArgCollectionOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class SizeOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class IsEmptyOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class IOrderedCollection extends TypedNode {

  }

  export class IOrderedCollectionOp extends TypedNode {

  }

  export class FirstOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class IElementTyped extends TypedNode {

  }

  export class LastOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class AtOp extends TypedNode {
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
  }

  export class OneArgCollectionOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class IContextTypedCollOp extends TypedNode {

  }

  export class MapOp extends TypedNode {
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
  }

  export class WhereOp extends TypedNode {
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
  }

  export class DistinctOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class AsImmutableListOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class ContainsOp extends TypedNode {
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
  }

  export class OneCollBaseTypedArgCollectionOp extends TypedNode {
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
  }

  export class OneArgPredicateCollectionOp extends TypedNode {
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
  }

  export class AnyOp extends TypedNode {
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
  }

  export class AllOp extends TypedNode {
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
  }

  export class SetType extends TypedNode {
    public sizeConstraint: SingleChildAccessor<L_org_iets3_core_expr_collections.CollectionSizeSpec> = new SingleChildAccessor(this.node, "sizeConstraint")
    public baseType: SingleChildAccessor<L_org_iets3_core_expr_base.Type> = new SingleChildAccessor(this.node, "baseType")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class SetLiteral extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class AsImmutableSetOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class BracketOp extends TypedNode {
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

  export class MapType extends TypedNode {
    public keyType_DEPRECATED: SingleChildAccessor<L_org_iets3_core_expr_base.Type> = new SingleChildAccessor(this.node, "keyType_DEPRECATED")
    public valueType_DEPRECATED: SingleChildAccessor<L_org_iets3_core_expr_base.Type> = new SingleChildAccessor(this.node, "valueType_DEPRECATED")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class MapLiteral extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class KeyValuePair extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class MapWithOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
    public arg: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "arg")
  }

  export class MapWithoutOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
    public arg: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "arg")
  }

  export class MaxOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class SumOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class FirstNOp extends TypedNode {
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
  }

  export class LastNOp extends TypedNode {
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
  }

  export class SimpleSortOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class MinOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class ListWithOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
    public arg: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "arg")
  }

  export class SetWithOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
    public arg: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "arg")
  }

  export class ElementTypeConstraintSingle extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class ElementTypeConstraintMap extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class CollectionSizeSpec extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class UpToTarget extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class UnpackOptionsOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class IndexExpr extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class IProvideIndex extends TypedNode {

  }

  export class ForeachOp extends TypedNode {
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
  }

  export class FlattenOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class AsSingletonList extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class AbstractStringListJoiner extends TypedNode {
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
  }

  export class StringJoinOp extends TypedNode {
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
  }

  export class StringTerminateOp extends TypedNode {
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
  }

  export class SetWithoutOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
    public arg: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "arg")
  }

  export class IsNotEmptyOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class FoldLeftOp extends TypedNode {
    public seed: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "seed")
    public combiner: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "combiner")

    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class FoldOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class AsMapOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class MapSizeOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class FindFirstOp extends TypedNode {
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
  }

  export class ListWithAllOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
    public arg: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "arg")
  }

  export class MapLikeType extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class ListInsertOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class MapKeysOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class MapValuesOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class ListWithoutOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
    public arg: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "arg")
  }

  export class MapContainsKeyOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
    public arg: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "arg")
  }

  export class IMapOneArgOp extends TypedNode {

  }

  export class ISetOneArgOp extends TypedNode {

  }

  export class IListOneArgOp extends TypedNode {

  }

  export class AllWithIndexOp extends TypedNode {
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
  }

  export class TwoArgPredicateCollectionOp extends TypedNode {
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
  }

  export class AnyWithIndexOp extends TypedNode {
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
  }

  export class TailOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class ReverseOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class SetUnionOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
    public arg: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "arg")
  }

  export class SetDiffOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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
    public arg: SingleChildAccessor<L_org_iets3_core_expr_base.Expression> = new SingleChildAccessor(this.node, "arg")
  }

  export class ListPickOp extends TypedNode {
    public set shortDescription(value: string | undefined) {
      this.node.setPropertyValue("shortDescription", value)
    }

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

  export class IndexOfOp extends TypedNode {
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
  }
}
