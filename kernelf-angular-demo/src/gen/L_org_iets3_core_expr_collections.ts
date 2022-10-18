            import {
              ChildListAccessor,
              SingleChildAccessor,
              GeneratedLanguage,
              INodeJS,
              TypedNode,
              ITypedNode
            } from "ts-model-api";
            
            import {L_jetbrains_mps_lang_core} from "./L_jetbrains_mps_lang_core";
import {L_com_mbeddr_mpsutil_interpreter} from "./L_com_mbeddr_mpsutil_interpreter";
import {L_org_iets3_core_expr_base} from "./L_org_iets3_core_expr_base";
import {L_org_iets3_core_expr_lambda} from "./L_org_iets3_core_expr_lambda";
            
            export namespace L_org_iets3_core_expr_collections {
            
            export class L_org_iets3_core_expr_collections extends GeneratedLanguage {
                public static INSTANCE: L_org_iets3_core_expr_collections = new L_org_iets3_core_expr_collections();
                constructor() {
                    super("org.iets3.core.expr.collections")
                    
                    this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339749509", (node: INodeJS) => new _N_TypedImpl_CollectionType(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339757344", (node: INodeJS) => new _N_TypedImpl_ListType(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339759319", (node: INodeJS) => new _N_TypedImpl_ListLiteral(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339790458", (node: INodeJS) => new _N_TypedImpl_ICollectionOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339795488", (node: INodeJS) => new _N_TypedImpl_NoArgCollectionOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339796915", (node: INodeJS) => new _N_TypedImpl_SizeOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339840476", (node: INodeJS) => new _N_TypedImpl_IsEmptyOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339848519", (node: INodeJS) => new _N_TypedImpl_IOrderedCollection(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339848559", (node: INodeJS) => new _N_TypedImpl_IOrderedCollectionOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339850572", (node: INodeJS) => new _N_TypedImpl_FirstOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339850588", (node: INodeJS) => new _N_TypedImpl_IElementTyped(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283339853806", (node: INodeJS) => new _N_TypedImpl_LastOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283340004826", (node: INodeJS) => new _N_TypedImpl_AtOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283340020764", (node: INodeJS) => new _N_TypedImpl_OneArgCollectionOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283340021069", (node: INodeJS) => new _N_TypedImpl_IContextTypedCollOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283340640412", (node: INodeJS) => new _N_TypedImpl_MapOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7554398283340715406", (node: INodeJS) => new _N_TypedImpl_WhereOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265511400449", (node: INodeJS) => new _N_TypedImpl_DistinctOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265513219132", (node: INodeJS) => new _N_TypedImpl_AsImmutableListOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265514323710", (node: INodeJS) => new _N_TypedImpl_ContainsOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265514351708", (node: INodeJS) => new _N_TypedImpl_OneCollBaseTypedArgCollectionOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265515327232", (node: INodeJS) => new _N_TypedImpl_OneArgPredicateCollectionOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265515619803", (node: INodeJS) => new _N_TypedImpl_AnyOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265518788050", (node: INodeJS) => new _N_TypedImpl_AllOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265520080263", (node: INodeJS) => new _N_TypedImpl_SetType(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265520081293", (node: INodeJS) => new _N_TypedImpl_SetLiteral(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8872269265522211270", (node: INodeJS) => new _N_TypedImpl_AsImmutableSetOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5849458724932670346", (node: INodeJS) => new _N_TypedImpl_BracketOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8448265401163110902", (node: INodeJS) => new _N_TypedImpl_MapType(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8448265401163111272", (node: INodeJS) => new _N_TypedImpl_MapLiteral(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8448265401163111273", (node: INodeJS) => new _N_TypedImpl_KeyValuePair(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8448265401163555724", (node: INodeJS) => new _N_TypedImpl_MapWithOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8448265401163714133", (node: INodeJS) => new _N_TypedImpl_MapWithoutOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5585772046587930249", (node: INodeJS) => new _N_TypedImpl_MaxOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5585772046594451299", (node: INodeJS) => new _N_TypedImpl_SumOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5585772046596642164", (node: INodeJS) => new _N_TypedImpl_FirstNOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5585772046597818717", (node: INodeJS) => new _N_TypedImpl_LastNOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/890435239346753529", (node: INodeJS) => new _N_TypedImpl_SimpleSortOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7740953487940081584", (node: INodeJS) => new _N_TypedImpl_MinOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/2156530943179783739", (node: INodeJS) => new _N_TypedImpl_ListWithOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/2156530943179855331", (node: INodeJS) => new _N_TypedImpl_SetWithOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8694548031077039769", (node: INodeJS) => new _N_TypedImpl_ElementTypeConstraintSingle(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/8694548031078300776", (node: INodeJS) => new _N_TypedImpl_ElementTypeConstraintMap(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/1330041117646892901", (node: INodeJS) => new _N_TypedImpl_CollectionSizeSpec(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/3989687177013570767", (node: INodeJS) => new _N_TypedImpl_UpToTarget(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/4618483580248255217", (node: INodeJS) => new _N_TypedImpl_UnpackOptionsOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/75413091695536841", (node: INodeJS) => new _N_TypedImpl_IndexExpr(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/9097157441616112342", (node: INodeJS) => new _N_TypedImpl_IProvideIndex(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/9097157441620016186", (node: INodeJS) => new _N_TypedImpl_ForeachOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/2554784455264825928", (node: INodeJS) => new _N_TypedImpl_FlattenOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/6414340278546763815", (node: INodeJS) => new _N_TypedImpl_AsSingletonList(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5070313213698520477", (node: INodeJS) => new _N_TypedImpl_AbstractStringListJoiner(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5070313213695398904", (node: INodeJS) => new _N_TypedImpl_StringJoinOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5070313213697900736", (node: INodeJS) => new _N_TypedImpl_StringTerminateOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/3831047747134047985", (node: INodeJS) => new _N_TypedImpl_SetWithoutOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/6095949300270588116", (node: INodeJS) => new _N_TypedImpl_IsNotEmptyOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/4931785860342338319", (node: INodeJS) => new _N_TypedImpl_FoldLeftOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/4931785860342338320", (node: INodeJS) => new _N_TypedImpl_FoldOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/24388123213992448", (node: INodeJS) => new _N_TypedImpl_AsMapOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/24388123215615666", (node: INodeJS) => new _N_TypedImpl_MapSizeOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/24388123216554083", (node: INodeJS) => new _N_TypedImpl_FindFirstOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/362871314062739301", (node: INodeJS) => new _N_TypedImpl_ListWithAllOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5291952221899372124", (node: INodeJS) => new _N_TypedImpl_MapLikeType(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/890442848561707151", (node: INodeJS) => new _N_TypedImpl_ListInsertOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7757419675876255273", (node: INodeJS) => new _N_TypedImpl_MapKeysOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7757419675876240958", (node: INodeJS) => new _N_TypedImpl_MapValuesOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/890442848561696122", (node: INodeJS) => new _N_TypedImpl_ListWithoutOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7757419675876236259", (node: INodeJS) => new _N_TypedImpl_MapContainsKeyOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/7757419675865128281", (node: INodeJS) => new _N_TypedImpl_IMapOneArgOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/527291771330968213", (node: INodeJS) => new _N_TypedImpl_ISetOneArgOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5291952221900249273", (node: INodeJS) => new _N_TypedImpl_IListOneArgOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/444732437356043012", (node: INodeJS) => new _N_TypedImpl_AllWithIndexOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/444732437356045611", (node: INodeJS) => new _N_TypedImpl_TwoArgPredicateCollectionOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/4481921169623440367", (node: INodeJS) => new _N_TypedImpl_AnyWithIndexOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/393796118209799325", (node: INodeJS) => new _N_TypedImpl_TailOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5396945261017737777", (node: INodeJS) => new _N_TypedImpl_ReverseOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5396945261030611861", (node: INodeJS) => new _N_TypedImpl_SetUnionOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/5396945261038438968", (node: INodeJS) => new _N_TypedImpl_SetDiffOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/531692237848496057", (node: INodeJS) => new _N_TypedImpl_ListPickOp(node))
this.nodeWrappers.set("mps:2f7e2e35-6e74-4c43-9fa5-2465d68f5996/1406572792884327605", (node: INodeJS) => new _N_TypedImpl_IndexOfOp(node))
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
            export const INSTANCE = L_org_iets3_core_expr_collections.INSTANCE
            
                                    export interface N_CollectionType extends L_org_iets3_core_expr_base.N_Type, L_org_iets3_core_expr_base.N_ICollectionType, L_org_iets3_core_expr_base.N_ITypeSupportsDefaultValue {
                            _is_org_iets3_core_expr_collections_CollectionType: boolean
                            sizeConstraint: SingleChildAccessor<N_CollectionSizeSpec>
            baseType: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
                        }
                        
                        export namespace N_CollectionType {
                            export function isInstance(node: ITypedNode): node is N_CollectionType {
                                return '_is_org_iets3_core_expr_collections_CollectionType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_CollectionType extends TypedNode implements N_CollectionType {
                            public _is_org_iets3_core_expr_collections_CollectionType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_ICollectionType: boolean = true
            public _is_org_iets3_core_expr_base_IHasBaseType: boolean = true
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
                            public sizeConstraint: SingleChildAccessor<N_CollectionSizeSpec> = new SingleChildAccessor(this.node, "sizeConstraint")
                            public baseType: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "baseType")
                        }
                        
                        
                        export interface N_ListType extends N_CollectionType, N_IOrderedCollection, L_org_iets3_core_expr_base.N_IParameterizedTypeSupportsEquals {
                            _is_org_iets3_core_expr_collections_ListType: boolean
                            
                        }
                        
                        export namespace N_ListType {
                            export function isInstance(node: ITypedNode): node is N_ListType {
                                return '_is_org_iets3_core_expr_collections_ListType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ListType extends TypedNode implements N_ListType {
                            public _is_org_iets3_core_expr_collections_ListType: boolean = true
            public _is_org_iets3_core_expr_collections_CollectionType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_ICollectionType: boolean = true
            public _is_org_iets3_core_expr_base_IHasBaseType: boolean = true
            public _is_org_iets3_core_expr_base_ITypeSupportsDefaultValue: boolean = true
            public _is_org_iets3_core_expr_collections_IOrderedCollection: boolean = true
            public _is_org_iets3_core_expr_base_IParameterizedTypeSupportsEquals: boolean = true
                                            public sizeConstraint: SingleChildAccessor<N_CollectionSizeSpec> = new SingleChildAccessor(this.node, "sizeConstraint")
                            public baseType: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "baseType")
                            public set shortDescription(value: string | undefined) {
                                this.node.setPropertyValue("shortDescription", value)
                            }
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
                        
                        
                        export interface N_ListLiteral extends L_org_iets3_core_expr_base.N_Expression, L_com_mbeddr_mpsutil_interpreter.N_ICanHaveTestCoverage, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_collections_ListLiteral: boolean
                            typeConstraint: SingleChildAccessor<N_ElementTypeConstraintSingle>
            elements: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_ListLiteral {
                            export function isInstance(node: ITypedNode): node is N_ListLiteral {
                                return '_is_org_iets3_core_expr_collections_ListLiteral' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ListLiteral extends TypedNode implements N_ListLiteral {
                            public _is_org_iets3_core_expr_collections_ListLiteral: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ICanHaveTestCoverage: boolean = true
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
                            public typeConstraint: SingleChildAccessor<N_ElementTypeConstraintSingle> = new SingleChildAccessor(this.node, "typeConstraint")
                            public elements: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression> = new ChildListAccessor(this.node, "elements")
                        }
                        
                        
                        export interface N_ICollectionOp extends L_org_iets3_core_expr_base.N_IDotTarget {
                            _is_org_iets3_core_expr_collections_ICollectionOp: boolean
                            
                        }
                        
                        export namespace N_ICollectionOp {
                            export function isInstance(node: ITypedNode): node is N_ICollectionOp {
                                return '_is_org_iets3_core_expr_collections_ICollectionOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ICollectionOp extends TypedNode implements N_ICollectionOp {
                            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
                            
                        }
                        
                        
                        export interface N_NoArgCollectionOp extends L_jetbrains_mps_lang_core.N_BaseConcept, N_ICollectionOp {
                            _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean
                            
                        }
                        
                        export namespace N_NoArgCollectionOp {
                            export function isInstance(node: ITypedNode): node is N_NoArgCollectionOp {
                                return '_is_org_iets3_core_expr_collections_NoArgCollectionOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_NoArgCollectionOp extends TypedNode implements N_NoArgCollectionOp {
                            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
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
                        }
                        
                        
                        export interface N_SizeOp extends N_NoArgCollectionOp {
                            _is_org_iets3_core_expr_collections_SizeOp: boolean
                            
                        }
                        
                        export namespace N_SizeOp {
                            export function isInstance(node: ITypedNode): node is N_SizeOp {
                                return '_is_org_iets3_core_expr_collections_SizeOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SizeOp extends TypedNode implements N_SizeOp {
                            public _is_org_iets3_core_expr_collections_SizeOp: boolean = true
            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
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
                        }
                        
                        
                        export interface N_IsEmptyOp extends N_NoArgCollectionOp {
                            _is_org_iets3_core_expr_collections_IsEmptyOp: boolean
                            
                        }
                        
                        export namespace N_IsEmptyOp {
                            export function isInstance(node: ITypedNode): node is N_IsEmptyOp {
                                return '_is_org_iets3_core_expr_collections_IsEmptyOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IsEmptyOp extends TypedNode implements N_IsEmptyOp {
                            public _is_org_iets3_core_expr_collections_IsEmptyOp: boolean = true
            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
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
                        }
                        
                        
                        export interface N_IOrderedCollection extends L_org_iets3_core_expr_base.N_ICollectionType {
                            _is_org_iets3_core_expr_collections_IOrderedCollection: boolean
                            
                        }
                        
                        export namespace N_IOrderedCollection {
                            export function isInstance(node: ITypedNode): node is N_IOrderedCollection {
                                return '_is_org_iets3_core_expr_collections_IOrderedCollection' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IOrderedCollection extends TypedNode implements N_IOrderedCollection {
                            public _is_org_iets3_core_expr_collections_IOrderedCollection: boolean = true
            public _is_org_iets3_core_expr_base_ICollectionType: boolean = true
            public _is_org_iets3_core_expr_base_IHasBaseType: boolean = true
                            
                        }
                        
                        
                        export interface N_IOrderedCollectionOp extends N_ICollectionOp {
                            _is_org_iets3_core_expr_collections_IOrderedCollectionOp: boolean
                            
                        }
                        
                        export namespace N_IOrderedCollectionOp {
                            export function isInstance(node: ITypedNode): node is N_IOrderedCollectionOp {
                                return '_is_org_iets3_core_expr_collections_IOrderedCollectionOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IOrderedCollectionOp extends TypedNode implements N_IOrderedCollectionOp {
                            public _is_org_iets3_core_expr_collections_IOrderedCollectionOp: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
                            
                        }
                        
                        
                        export interface N_FirstOp extends N_NoArgCollectionOp, N_IElementTyped, N_IOrderedCollectionOp {
                            _is_org_iets3_core_expr_collections_FirstOp: boolean
                            
                        }
                        
                        export namespace N_FirstOp {
                            export function isInstance(node: ITypedNode): node is N_FirstOp {
                                return '_is_org_iets3_core_expr_collections_FirstOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FirstOp extends TypedNode implements N_FirstOp {
                            public _is_org_iets3_core_expr_collections_FirstOp: boolean = true
            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_collections_IElementTyped: boolean = true
            public _is_org_iets3_core_expr_collections_IOrderedCollectionOp: boolean = true
                                            public set shortDescription(value: string | undefined) {
                                this.node.setPropertyValue("shortDescription", value)
                            }
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
                        
                        
                        export interface N_IElementTyped extends N_ICollectionOp {
                            _is_org_iets3_core_expr_collections_IElementTyped: boolean
                            
                        }
                        
                        export namespace N_IElementTyped {
                            export function isInstance(node: ITypedNode): node is N_IElementTyped {
                                return '_is_org_iets3_core_expr_collections_IElementTyped' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IElementTyped extends TypedNode implements N_IElementTyped {
                            public _is_org_iets3_core_expr_collections_IElementTyped: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
                            
                        }
                        
                        
                        export interface N_LastOp extends N_NoArgCollectionOp, N_IElementTyped, N_IOrderedCollectionOp {
                            _is_org_iets3_core_expr_collections_LastOp: boolean
                            
                        }
                        
                        export namespace N_LastOp {
                            export function isInstance(node: ITypedNode): node is N_LastOp {
                                return '_is_org_iets3_core_expr_collections_LastOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LastOp extends TypedNode implements N_LastOp {
                            public _is_org_iets3_core_expr_collections_LastOp: boolean = true
            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_collections_IElementTyped: boolean = true
            public _is_org_iets3_core_expr_collections_IOrderedCollectionOp: boolean = true
                                            public set shortDescription(value: string | undefined) {
                                this.node.setPropertyValue("shortDescription", value)
                            }
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
                        
                        
                        export interface N_AtOp extends N_OneArgCollectionOp, N_IElementTyped, N_IOrderedCollectionOp, L_org_iets3_core_expr_base.N_IMayAllowEffect {
                            _is_org_iets3_core_expr_collections_AtOp: boolean
                            
                        }
                        
                        export namespace N_AtOp {
                            export function isInstance(node: ITypedNode): node is N_AtOp {
                                return '_is_org_iets3_core_expr_collections_AtOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AtOp extends TypedNode implements N_AtOp {
                            public _is_org_iets3_core_expr_collections_AtOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_collections_IElementTyped: boolean = true
            public _is_org_iets3_core_expr_collections_IOrderedCollectionOp: boolean = true
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
                        
                        
                        export interface N_OneArgCollectionOp extends L_jetbrains_mps_lang_core.N_BaseConcept, N_ICollectionOp {
                            _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean
                            arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_OneArgCollectionOp {
                            export function isInstance(node: ITypedNode): node is N_OneArgCollectionOp {
                                return '_is_org_iets3_core_expr_collections_OneArgCollectionOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_OneArgCollectionOp extends TypedNode implements N_OneArgCollectionOp {
                            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
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
                            public arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "arg")
                        }
                        
                        
                        export interface N_IContextTypedCollOp extends N_ICollectionOp {
                            _is_org_iets3_core_expr_collections_IContextTypedCollOp: boolean
                            
                        }
                        
                        export namespace N_IContextTypedCollOp {
                            export function isInstance(node: ITypedNode): node is N_IContextTypedCollOp {
                                return '_is_org_iets3_core_expr_collections_IContextTypedCollOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IContextTypedCollOp extends TypedNode implements N_IContextTypedCollOp {
                            public _is_org_iets3_core_expr_collections_IContextTypedCollOp: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
                            
                        }
                        
                        
                        export interface N_MapOp extends N_OneArgCollectionOp, L_org_iets3_core_expr_lambda.N_IShortLambdaContainer, N_IProvideIndex, L_org_iets3_core_expr_base.N_IMayAllowEffect, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_collections_MapOp: boolean
                            
                        }
                        
                        export namespace N_MapOp {
                            export function isInstance(node: ITypedNode): node is N_MapOp {
                                return '_is_org_iets3_core_expr_collections_MapOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MapOp extends TypedNode implements N_MapOp {
                            public _is_org_iets3_core_expr_collections_MapOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_lambda_IShortLambdaContainer: boolean = true
            public _is_org_iets3_core_expr_collections_IProvideIndex: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
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
                        
                        
                        export interface N_WhereOp extends N_OneArgPredicateCollectionOp, N_IContextTypedCollOp, N_IProvideIndex, L_org_iets3_core_expr_base.N_IMayHaveEffect, L_org_iets3_core_expr_base.N_IMayAllowEffect {
                            _is_org_iets3_core_expr_collections_WhereOp: boolean
                            
                        }
                        
                        export namespace N_WhereOp {
                            export function isInstance(node: ITypedNode): node is N_WhereOp {
                                return '_is_org_iets3_core_expr_collections_WhereOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_WhereOp extends TypedNode implements N_WhereOp {
                            public _is_org_iets3_core_expr_collections_WhereOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgPredicateCollectionOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_lambda_IShortLambdaContainer: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_core_expr_collections_IContextTypedCollOp: boolean = true
            public _is_org_iets3_core_expr_collections_IProvideIndex: boolean = true
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
                        
                        
                        export interface N_DistinctOp extends N_NoArgCollectionOp, N_IContextTypedCollOp {
                            _is_org_iets3_core_expr_collections_DistinctOp: boolean
                            
                        }
                        
                        export namespace N_DistinctOp {
                            export function isInstance(node: ITypedNode): node is N_DistinctOp {
                                return '_is_org_iets3_core_expr_collections_DistinctOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_DistinctOp extends TypedNode implements N_DistinctOp {
                            public _is_org_iets3_core_expr_collections_DistinctOp: boolean = true
            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_collections_IContextTypedCollOp: boolean = true
                                            public set shortDescription(value: string | undefined) {
                                this.node.setPropertyValue("shortDescription", value)
                            }
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
                        
                        
                        export interface N_AsImmutableListOp extends N_NoArgCollectionOp {
                            _is_org_iets3_core_expr_collections_AsImmutableListOp: boolean
                            
                        }
                        
                        export namespace N_AsImmutableListOp {
                            export function isInstance(node: ITypedNode): node is N_AsImmutableListOp {
                                return '_is_org_iets3_core_expr_collections_AsImmutableListOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AsImmutableListOp extends TypedNode implements N_AsImmutableListOp {
                            public _is_org_iets3_core_expr_collections_AsImmutableListOp: boolean = true
            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
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
                        }
                        
                        
                        export interface N_ContainsOp extends N_OneCollBaseTypedArgCollectionOp {
                            _is_org_iets3_core_expr_collections_ContainsOp: boolean
                            
                        }
                        
                        export namespace N_ContainsOp {
                            export function isInstance(node: ITypedNode): node is N_ContainsOp {
                                return '_is_org_iets3_core_expr_collections_ContainsOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ContainsOp extends TypedNode implements N_ContainsOp {
                            public _is_org_iets3_core_expr_collections_ContainsOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneCollBaseTypedArgCollectionOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                        
                        
                        export interface N_OneCollBaseTypedArgCollectionOp extends N_OneArgCollectionOp, L_org_iets3_core_expr_base.N_IMayAllowEffect {
                            _is_org_iets3_core_expr_collections_OneCollBaseTypedArgCollectionOp: boolean
                            
                        }
                        
                        export namespace N_OneCollBaseTypedArgCollectionOp {
                            export function isInstance(node: ITypedNode): node is N_OneCollBaseTypedArgCollectionOp {
                                return '_is_org_iets3_core_expr_collections_OneCollBaseTypedArgCollectionOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_OneCollBaseTypedArgCollectionOp extends TypedNode implements N_OneCollBaseTypedArgCollectionOp {
                            public _is_org_iets3_core_expr_collections_OneCollBaseTypedArgCollectionOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                        
                        
                        export interface N_OneArgPredicateCollectionOp extends N_OneArgCollectionOp, L_org_iets3_core_expr_lambda.N_IShortLambdaContainer, L_org_iets3_core_expr_base.N_IMayAllowEffect, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_collections_OneArgPredicateCollectionOp: boolean
                            
                        }
                        
                        export namespace N_OneArgPredicateCollectionOp {
                            export function isInstance(node: ITypedNode): node is N_OneArgPredicateCollectionOp {
                                return '_is_org_iets3_core_expr_collections_OneArgPredicateCollectionOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_OneArgPredicateCollectionOp extends TypedNode implements N_OneArgPredicateCollectionOp {
                            public _is_org_iets3_core_expr_collections_OneArgPredicateCollectionOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_lambda_IShortLambdaContainer: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
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
                        
                        
                        export interface N_AnyOp extends N_OneArgPredicateCollectionOp {
                            _is_org_iets3_core_expr_collections_AnyOp: boolean
                            
                        }
                        
                        export namespace N_AnyOp {
                            export function isInstance(node: ITypedNode): node is N_AnyOp {
                                return '_is_org_iets3_core_expr_collections_AnyOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AnyOp extends TypedNode implements N_AnyOp {
                            public _is_org_iets3_core_expr_collections_AnyOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgPredicateCollectionOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_lambda_IShortLambdaContainer: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
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
                        
                        
                        export interface N_AllOp extends N_OneArgPredicateCollectionOp {
                            _is_org_iets3_core_expr_collections_AllOp: boolean
                            
                        }
                        
                        export namespace N_AllOp {
                            export function isInstance(node: ITypedNode): node is N_AllOp {
                                return '_is_org_iets3_core_expr_collections_AllOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AllOp extends TypedNode implements N_AllOp {
                            public _is_org_iets3_core_expr_collections_AllOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgPredicateCollectionOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_lambda_IShortLambdaContainer: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
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
                        
                        
                        export interface N_SetType extends N_CollectionType {
                            _is_org_iets3_core_expr_collections_SetType: boolean
                            
                        }
                        
                        export namespace N_SetType {
                            export function isInstance(node: ITypedNode): node is N_SetType {
                                return '_is_org_iets3_core_expr_collections_SetType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SetType extends TypedNode implements N_SetType {
                            public _is_org_iets3_core_expr_collections_SetType: boolean = true
            public _is_org_iets3_core_expr_collections_CollectionType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_ICollectionType: boolean = true
            public _is_org_iets3_core_expr_base_IHasBaseType: boolean = true
            public _is_org_iets3_core_expr_base_ITypeSupportsDefaultValue: boolean = true
                                            public sizeConstraint: SingleChildAccessor<N_CollectionSizeSpec> = new SingleChildAccessor(this.node, "sizeConstraint")
                            public baseType: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "baseType")
                            public set shortDescription(value: string | undefined) {
                                this.node.setPropertyValue("shortDescription", value)
                            }
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
                        
                        
                        export interface N_SetLiteral extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_IStructuredSyntax, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_collections_SetLiteral: boolean
                            typeConstraint: SingleChildAccessor<N_ElementTypeConstraintSingle>
            elements: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_SetLiteral {
                            export function isInstance(node: ITypedNode): node is N_SetLiteral {
                                return '_is_org_iets3_core_expr_collections_SetLiteral' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SetLiteral extends TypedNode implements N_SetLiteral {
                            public _is_org_iets3_core_expr_collections_SetLiteral: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public typeConstraint: SingleChildAccessor<N_ElementTypeConstraintSingle> = new SingleChildAccessor(this.node, "typeConstraint")
                            public elements: ChildListAccessor<L_org_iets3_core_expr_base.N_Expression> = new ChildListAccessor(this.node, "elements")
                        }
                        
                        
                        export interface N_AsImmutableSetOp extends N_NoArgCollectionOp {
                            _is_org_iets3_core_expr_collections_AsImmutableSetOp: boolean
                            
                        }
                        
                        export namespace N_AsImmutableSetOp {
                            export function isInstance(node: ITypedNode): node is N_AsImmutableSetOp {
                                return '_is_org_iets3_core_expr_collections_AsImmutableSetOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AsImmutableSetOp extends TypedNode implements N_AsImmutableSetOp {
                            public _is_org_iets3_core_expr_collections_AsImmutableSetOp: boolean = true
            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
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
                        }
                        
                        
                        export interface N_BracketOp extends L_org_iets3_core_expr_base.N_UnaryExpression {
                            _is_org_iets3_core_expr_collections_BracketOp: boolean
                            index: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_BracketOp {
                            export function isInstance(node: ITypedNode): node is N_BracketOp {
                                return '_is_org_iets3_core_expr_collections_BracketOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_BracketOp extends TypedNode implements N_BracketOp {
                            public _is_org_iets3_core_expr_collections_BracketOp: boolean = true
            public _is_org_iets3_core_expr_base_UnaryExpression: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                                            public expr: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "expr")
                            public set shortDescription(value: string | undefined) {
                                this.node.setPropertyValue("shortDescription", value)
                            }
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
                            public index: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "index")
                        }
                        
                        
                        export interface N_MapType extends N_MapLikeType, L_org_iets3_core_expr_base.N_ITypeSupportsDefaultValue {
                            _is_org_iets3_core_expr_collections_MapType: boolean
                            keyType: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
            valueType: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
                        }
                        
                        export namespace N_MapType {
                            export function isInstance(node: ITypedNode): node is N_MapType {
                                return '_is_org_iets3_core_expr_collections_MapType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MapType extends TypedNode implements N_MapType {
                            public _is_org_iets3_core_expr_collections_MapType: boolean = true
            public _is_org_iets3_core_expr_collections_MapLikeType: boolean = true
            public _is_org_iets3_core_expr_base_Type: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_jetbrains_mps_lang_core_IType: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_org_iets3_core_expr_base_ITypeSupportsDefaultValue: boolean = true
                                            public keyType_DEPRECATED: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "keyType_DEPRECATED")
                            public valueType_DEPRECATED: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "valueType_DEPRECATED")
                            public set shortDescription(value: string | undefined) {
                                this.node.setPropertyValue("shortDescription", value)
                            }
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
                            public valueType: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "valueType")
                        }
                        
                        
                        export interface N_MapLiteral extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_IStructuredSyntax, L_com_mbeddr_mpsutil_interpreter.N_ICanHaveTestCoverage, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_collections_MapLiteral: boolean
                            typeConstraint: SingleChildAccessor<N_ElementTypeConstraintMap>
            elements: ChildListAccessor<N_KeyValuePair>
                        }
                        
                        export namespace N_MapLiteral {
                            export function isInstance(node: ITypedNode): node is N_MapLiteral {
                                return '_is_org_iets3_core_expr_collections_MapLiteral' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MapLiteral extends TypedNode implements N_MapLiteral {
                            public _is_org_iets3_core_expr_collections_MapLiteral: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
            public _is_org_iets3_core_expr_base_IStructuredSyntax: boolean = true
            public _is_org_iets3_core_expr_base_IWantNewLine: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ICanHaveTestCoverage: boolean = true
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
                            public typeConstraint: SingleChildAccessor<N_ElementTypeConstraintMap> = new SingleChildAccessor(this.node, "typeConstraint")
                            public elements: ChildListAccessor<N_KeyValuePair> = new ChildListAccessor(this.node, "elements")
                        }
                        
                        
                        export interface N_KeyValuePair extends L_org_iets3_core_expr_base.N_Expression, L_org_iets3_core_expr_base.N_IMayAllowEffect, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_collections_KeyValuePair: boolean
                            key: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
            val: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_KeyValuePair {
                            export function isInstance(node: ITypedNode): node is N_KeyValuePair {
                                return '_is_org_iets3_core_expr_collections_KeyValuePair' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_KeyValuePair extends TypedNode implements N_KeyValuePair {
                            public _is_org_iets3_core_expr_collections_KeyValuePair: boolean = true
            public _is_org_iets3_core_expr_base_Expression: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_com_mbeddr_core_base_ICommentable: boolean = true
            public _is_com_mbeddr_core_base_IDocumentable: boolean = true
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
                            public key: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "key")
                            public val: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "val")
                        }
                        
                        
                        export interface N_MapWithOp extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IMapOneArgOp {
                            _is_org_iets3_core_expr_collections_MapWithOp: boolean
                            
                        }
                        
                        export namespace N_MapWithOp {
                            export function isInstance(node: ITypedNode): node is N_MapWithOp {
                                return '_is_org_iets3_core_expr_collections_MapWithOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MapWithOp extends TypedNode implements N_MapWithOp {
                            public _is_org_iets3_core_expr_collections_MapWithOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_IMapOneArgOp: boolean = true
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
                            public arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "arg")
                        }
                        
                        
                        export interface N_MapWithoutOp extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IMapOneArgOp {
                            _is_org_iets3_core_expr_collections_MapWithoutOp: boolean
                            
                        }
                        
                        export namespace N_MapWithoutOp {
                            export function isInstance(node: ITypedNode): node is N_MapWithoutOp {
                                return '_is_org_iets3_core_expr_collections_MapWithoutOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MapWithoutOp extends TypedNode implements N_MapWithoutOp {
                            public _is_org_iets3_core_expr_collections_MapWithoutOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_IMapOneArgOp: boolean = true
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
                            public arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "arg")
                        }
                        
                        
                        export interface N_MaxOp extends N_NoArgCollectionOp, N_IElementTyped, L_org_iets3_core_expr_base.N_ISSConstrainedValue {
                            _is_org_iets3_core_expr_collections_MaxOp: boolean
                            
                        }
                        
                        export namespace N_MaxOp {
                            export function isInstance(node: ITypedNode): node is N_MaxOp {
                                return '_is_org_iets3_core_expr_collections_MaxOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MaxOp extends TypedNode implements N_MaxOp {
                            public _is_org_iets3_core_expr_collections_MaxOp: boolean = true
            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_collections_IElementTyped: boolean = true
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
                        }
                        
                        
                        export interface N_SumOp extends N_NoArgCollectionOp, N_IElementTyped {
                            _is_org_iets3_core_expr_collections_SumOp: boolean
                            
                        }
                        
                        export namespace N_SumOp {
                            export function isInstance(node: ITypedNode): node is N_SumOp {
                                return '_is_org_iets3_core_expr_collections_SumOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SumOp extends TypedNode implements N_SumOp {
                            public _is_org_iets3_core_expr_collections_SumOp: boolean = true
            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_collections_IElementTyped: boolean = true
                                            public set shortDescription(value: string | undefined) {
                                this.node.setPropertyValue("shortDescription", value)
                            }
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
                        
                        
                        export interface N_FirstNOp extends N_OneArgCollectionOp, N_IContextTypedCollOp, N_IOrderedCollectionOp {
                            _is_org_iets3_core_expr_collections_FirstNOp: boolean
                            
                        }
                        
                        export namespace N_FirstNOp {
                            export function isInstance(node: ITypedNode): node is N_FirstNOp {
                                return '_is_org_iets3_core_expr_collections_FirstNOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FirstNOp extends TypedNode implements N_FirstNOp {
                            public _is_org_iets3_core_expr_collections_FirstNOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_collections_IContextTypedCollOp: boolean = true
            public _is_org_iets3_core_expr_collections_IOrderedCollectionOp: boolean = true
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
                        
                        
                        export interface N_LastNOp extends N_OneArgCollectionOp, N_IContextTypedCollOp, N_IOrderedCollectionOp {
                            _is_org_iets3_core_expr_collections_LastNOp: boolean
                            
                        }
                        
                        export namespace N_LastNOp {
                            export function isInstance(node: ITypedNode): node is N_LastNOp {
                                return '_is_org_iets3_core_expr_collections_LastNOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_LastNOp extends TypedNode implements N_LastNOp {
                            public _is_org_iets3_core_expr_collections_LastNOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_collections_IContextTypedCollOp: boolean = true
            public _is_org_iets3_core_expr_collections_IOrderedCollectionOp: boolean = true
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
                        
                        
                        export interface N_SimpleSortOp extends N_NoArgCollectionOp, N_IOrderedCollectionOp {
                            _is_org_iets3_core_expr_collections_SimpleSortOp: boolean
                            order: string | undefined
                        }
                        
                        export namespace N_SimpleSortOp {
                            export function isInstance(node: ITypedNode): node is N_SimpleSortOp {
                                return '_is_org_iets3_core_expr_collections_SimpleSortOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SimpleSortOp extends TypedNode implements N_SimpleSortOp {
                            public _is_org_iets3_core_expr_collections_SimpleSortOp: boolean = true
            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_collections_IOrderedCollectionOp: boolean = true
                                            public set shortDescription(value: string | undefined) {
                                this.node.setPropertyValue("shortDescription", value)
                            }
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
                            public set order(value: string | undefined) {
                                this.node.setPropertyValue("order", value)
                            }
                            public get order(): string | undefined {
                                return this.node.getPropertyValue("order")
                            }
                        }
                        
                        
                        export interface N_MinOp extends N_NoArgCollectionOp, N_IElementTyped, L_org_iets3_core_expr_base.N_ISSConstrainedValue {
                            _is_org_iets3_core_expr_collections_MinOp: boolean
                            
                        }
                        
                        export namespace N_MinOp {
                            export function isInstance(node: ITypedNode): node is N_MinOp {
                                return '_is_org_iets3_core_expr_collections_MinOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MinOp extends TypedNode implements N_MinOp {
                            public _is_org_iets3_core_expr_collections_MinOp: boolean = true
            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_collections_IElementTyped: boolean = true
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
                        }
                        
                        
                        export interface N_ListWithOp extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IListOneArgOp {
                            _is_org_iets3_core_expr_collections_ListWithOp: boolean
                            
                        }
                        
                        export namespace N_ListWithOp {
                            export function isInstance(node: ITypedNode): node is N_ListWithOp {
                                return '_is_org_iets3_core_expr_collections_ListWithOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ListWithOp extends TypedNode implements N_ListWithOp {
                            public _is_org_iets3_core_expr_collections_ListWithOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_IListOneArgOp: boolean = true
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
                            public arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "arg")
                        }
                        
                        
                        export interface N_SetWithOp extends L_jetbrains_mps_lang_core.N_BaseConcept, N_ISetOneArgOp {
                            _is_org_iets3_core_expr_collections_SetWithOp: boolean
                            
                        }
                        
                        export namespace N_SetWithOp {
                            export function isInstance(node: ITypedNode): node is N_SetWithOp {
                                return '_is_org_iets3_core_expr_collections_SetWithOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SetWithOp extends TypedNode implements N_SetWithOp {
                            public _is_org_iets3_core_expr_collections_SetWithOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ISetOneArgOp: boolean = true
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
                            public arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "arg")
                        }
                        
                        
                        export interface N_ElementTypeConstraintSingle extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_collections_ElementTypeConstraintSingle: boolean
                            typeConstraint: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
                        }
                        
                        export namespace N_ElementTypeConstraintSingle {
                            export function isInstance(node: ITypedNode): node is N_ElementTypeConstraintSingle {
                                return '_is_org_iets3_core_expr_collections_ElementTypeConstraintSingle' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ElementTypeConstraintSingle extends TypedNode implements N_ElementTypeConstraintSingle {
                            public _is_org_iets3_core_expr_collections_ElementTypeConstraintSingle: boolean = true
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
                            public typeConstraint: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "typeConstraint")
                        }
                        
                        
                        export interface N_ElementTypeConstraintMap extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_collections_ElementTypeConstraintMap: boolean
                            typeConstraint1: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
            typeConstraint2: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
                        }
                        
                        export namespace N_ElementTypeConstraintMap {
                            export function isInstance(node: ITypedNode): node is N_ElementTypeConstraintMap {
                                return '_is_org_iets3_core_expr_collections_ElementTypeConstraintMap' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ElementTypeConstraintMap extends TypedNode implements N_ElementTypeConstraintMap {
                            public _is_org_iets3_core_expr_collections_ElementTypeConstraintMap: boolean = true
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
                            public typeConstraint1: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "typeConstraint1")
                            public typeConstraint2: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "typeConstraint2")
                        }
                        
                        
                        export interface N_CollectionSizeSpec extends L_jetbrains_mps_lang_core.N_BaseConcept {
                            _is_org_iets3_core_expr_collections_CollectionSizeSpec: boolean
                            min: string | undefined
            max: string | undefined
                        }
                        
                        export namespace N_CollectionSizeSpec {
                            export function isInstance(node: ITypedNode): node is N_CollectionSizeSpec {
                                return '_is_org_iets3_core_expr_collections_CollectionSizeSpec' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_CollectionSizeSpec extends TypedNode implements N_CollectionSizeSpec {
                            public _is_org_iets3_core_expr_collections_CollectionSizeSpec: boolean = true
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
                            public set min(value: string | undefined) {
                                this.node.setPropertyValue("min", value)
                            }
                            public get min(): string | undefined {
                                return this.node.getPropertyValue("min")
                            }
                            public set max(value: string | undefined) {
                                this.node.setPropertyValue("max", value)
                            }
                            public get max(): string | undefined {
                                return this.node.getPropertyValue("max")
                            }
                        }
                        
                        
                        export interface N_UpToTarget extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_collections_UpToTarget: boolean
                            max: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_UpToTarget {
                            export function isInstance(node: ITypedNode): node is N_UpToTarget {
                                return '_is_org_iets3_core_expr_collections_UpToTarget' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_UpToTarget extends TypedNode implements N_UpToTarget {
                            public _is_org_iets3_core_expr_collections_UpToTarget: boolean = true
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
                            public max: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "max")
                        }
                        
                        
                        export interface N_UnpackOptionsOp extends N_NoArgCollectionOp, N_IContextTypedCollOp {
                            _is_org_iets3_core_expr_collections_UnpackOptionsOp: boolean
                            
                        }
                        
                        export namespace N_UnpackOptionsOp {
                            export function isInstance(node: ITypedNode): node is N_UnpackOptionsOp {
                                return '_is_org_iets3_core_expr_collections_UnpackOptionsOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_UnpackOptionsOp extends TypedNode implements N_UnpackOptionsOp {
                            public _is_org_iets3_core_expr_collections_UnpackOptionsOp: boolean = true
            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_collections_IContextTypedCollOp: boolean = true
                                            public set shortDescription(value: string | undefined) {
                                this.node.setPropertyValue("shortDescription", value)
                            }
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
                        
                        
                        export interface N_IndexExpr extends L_org_iets3_core_expr_base.N_Expression {
                            _is_org_iets3_core_expr_collections_IndexExpr: boolean
                            
                        }
                        
                        export namespace N_IndexExpr {
                            export function isInstance(node: ITypedNode): node is N_IndexExpr {
                                return '_is_org_iets3_core_expr_collections_IndexExpr' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IndexExpr extends TypedNode implements N_IndexExpr {
                            public _is_org_iets3_core_expr_collections_IndexExpr: boolean = true
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
                        
            
            export interface N_IProvideIndex extends ITypedNode {
                _is_org_iets3_core_expr_collections_IProvideIndex: boolean
                
            }
            
            export namespace N_IProvideIndex {
                export function isInstance(node: ITypedNode): node is N_IProvideIndex {
                    return '_is_org_iets3_core_expr_collections_IProvideIndex' in node;
                }
            }
            
            export class _N_TypedImpl_IProvideIndex extends TypedNode implements N_IProvideIndex {
                public _is_org_iets3_core_expr_collections_IProvideIndex: boolean = true
                
            }
            
                        
                        export interface N_ForeachOp extends N_OneArgCollectionOp, N_IContextTypedCollOp, L_org_iets3_core_expr_lambda.N_IShortLambdaContainer, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_collections_ForeachOp: boolean
                            
                        }
                        
                        export namespace N_ForeachOp {
                            export function isInstance(node: ITypedNode): node is N_ForeachOp {
                                return '_is_org_iets3_core_expr_collections_ForeachOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ForeachOp extends TypedNode implements N_ForeachOp {
                            public _is_org_iets3_core_expr_collections_ForeachOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_collections_IContextTypedCollOp: boolean = true
            public _is_org_iets3_core_expr_lambda_IShortLambdaContainer: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
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
                        
                        
                        export interface N_FlattenOp extends N_NoArgCollectionOp {
                            _is_org_iets3_core_expr_collections_FlattenOp: boolean
                            
                        }
                        
                        export namespace N_FlattenOp {
                            export function isInstance(node: ITypedNode): node is N_FlattenOp {
                                return '_is_org_iets3_core_expr_collections_FlattenOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FlattenOp extends TypedNode implements N_FlattenOp {
                            public _is_org_iets3_core_expr_collections_FlattenOp: boolean = true
            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
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
                        }
                        
                        
                        export interface N_AsSingletonList extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget {
                            _is_org_iets3_core_expr_collections_AsSingletonList: boolean
                            
                        }
                        
                        export namespace N_AsSingletonList {
                            export function isInstance(node: ITypedNode): node is N_AsSingletonList {
                                return '_is_org_iets3_core_expr_collections_AsSingletonList' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AsSingletonList extends TypedNode implements N_AsSingletonList {
                            public _is_org_iets3_core_expr_collections_AsSingletonList: boolean = true
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
                        
                        
                        export interface N_AbstractStringListJoiner extends N_OneCollBaseTypedArgCollectionOp {
                            _is_org_iets3_core_expr_collections_AbstractStringListJoiner: boolean
                            
                        }
                        
                        export namespace N_AbstractStringListJoiner {
                            export function isInstance(node: ITypedNode): node is N_AbstractStringListJoiner {
                                return '_is_org_iets3_core_expr_collections_AbstractStringListJoiner' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AbstractStringListJoiner extends TypedNode implements N_AbstractStringListJoiner {
                            public _is_org_iets3_core_expr_collections_AbstractStringListJoiner: boolean = true
            public _is_org_iets3_core_expr_collections_OneCollBaseTypedArgCollectionOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                        
                        
                        export interface N_StringJoinOp extends N_AbstractStringListJoiner {
                            _is_org_iets3_core_expr_collections_StringJoinOp: boolean
                            
                        }
                        
                        export namespace N_StringJoinOp {
                            export function isInstance(node: ITypedNode): node is N_StringJoinOp {
                                return '_is_org_iets3_core_expr_collections_StringJoinOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_StringJoinOp extends TypedNode implements N_StringJoinOp {
                            public _is_org_iets3_core_expr_collections_StringJoinOp: boolean = true
            public _is_org_iets3_core_expr_collections_AbstractStringListJoiner: boolean = true
            public _is_org_iets3_core_expr_collections_OneCollBaseTypedArgCollectionOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                        
                        
                        export interface N_StringTerminateOp extends N_AbstractStringListJoiner {
                            _is_org_iets3_core_expr_collections_StringTerminateOp: boolean
                            
                        }
                        
                        export namespace N_StringTerminateOp {
                            export function isInstance(node: ITypedNode): node is N_StringTerminateOp {
                                return '_is_org_iets3_core_expr_collections_StringTerminateOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_StringTerminateOp extends TypedNode implements N_StringTerminateOp {
                            public _is_org_iets3_core_expr_collections_StringTerminateOp: boolean = true
            public _is_org_iets3_core_expr_collections_AbstractStringListJoiner: boolean = true
            public _is_org_iets3_core_expr_collections_OneCollBaseTypedArgCollectionOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                        
                        
                        export interface N_SetWithoutOp extends L_jetbrains_mps_lang_core.N_BaseConcept, N_ISetOneArgOp {
                            _is_org_iets3_core_expr_collections_SetWithoutOp: boolean
                            
                        }
                        
                        export namespace N_SetWithoutOp {
                            export function isInstance(node: ITypedNode): node is N_SetWithoutOp {
                                return '_is_org_iets3_core_expr_collections_SetWithoutOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SetWithoutOp extends TypedNode implements N_SetWithoutOp {
                            public _is_org_iets3_core_expr_collections_SetWithoutOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ISetOneArgOp: boolean = true
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
                            public arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "arg")
                        }
                        
                        
                        export interface N_IsNotEmptyOp extends N_NoArgCollectionOp {
                            _is_org_iets3_core_expr_collections_IsNotEmptyOp: boolean
                            
                        }
                        
                        export namespace N_IsNotEmptyOp {
                            export function isInstance(node: ITypedNode): node is N_IsNotEmptyOp {
                                return '_is_org_iets3_core_expr_collections_IsNotEmptyOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IsNotEmptyOp extends TypedNode implements N_IsNotEmptyOp {
                            public _is_org_iets3_core_expr_collections_IsNotEmptyOp: boolean = true
            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
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
                        }
                        
                        
                        export interface N_FoldLeftOp extends N_FoldOp, N_IProvideIndex {
                            _is_org_iets3_core_expr_collections_FoldLeftOp: boolean
                            
                        }
                        
                        export namespace N_FoldLeftOp {
                            export function isInstance(node: ITypedNode): node is N_FoldLeftOp {
                                return '_is_org_iets3_core_expr_collections_FoldLeftOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FoldLeftOp extends TypedNode implements N_FoldLeftOp {
                            public _is_org_iets3_core_expr_collections_FoldLeftOp: boolean = true
            public _is_org_iets3_core_expr_collections_FoldOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_org_iets3_core_expr_collections_IProvideIndex: boolean = true
                                            public seed: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "seed")
                            public combiner: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "combiner")
                            public set shortDescription(value: string | undefined) {
                                this.node.setPropertyValue("shortDescription", value)
                            }
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
                        
                        
                        export interface N_FoldOp extends L_jetbrains_mps_lang_core.N_BaseConcept, N_ICollectionOp, L_org_iets3_core_expr_base.N_IMayAllowEffect {
                            _is_org_iets3_core_expr_collections_FoldOp: boolean
                            seed: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
            combiner: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_FoldOp {
                            export function isInstance(node: ITypedNode): node is N_FoldOp {
                                return '_is_org_iets3_core_expr_collections_FoldOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FoldOp extends TypedNode implements N_FoldOp {
                            public _is_org_iets3_core_expr_collections_FoldOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                            public seed: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "seed")
                            public combiner: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "combiner")
                        }
                        
                        
                        export interface N_AsMapOp extends N_NoArgCollectionOp {
                            _is_org_iets3_core_expr_collections_AsMapOp: boolean
                            
                        }
                        
                        export namespace N_AsMapOp {
                            export function isInstance(node: ITypedNode): node is N_AsMapOp {
                                return '_is_org_iets3_core_expr_collections_AsMapOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AsMapOp extends TypedNode implements N_AsMapOp {
                            public _is_org_iets3_core_expr_collections_AsMapOp: boolean = true
            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
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
                        }
                        
                        
                        export interface N_MapSizeOp extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget {
                            _is_org_iets3_core_expr_collections_MapSizeOp: boolean
                            
                        }
                        
                        export namespace N_MapSizeOp {
                            export function isInstance(node: ITypedNode): node is N_MapSizeOp {
                                return '_is_org_iets3_core_expr_collections_MapSizeOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MapSizeOp extends TypedNode implements N_MapSizeOp {
                            public _is_org_iets3_core_expr_collections_MapSizeOp: boolean = true
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
                        
                        
                        export interface N_FindFirstOp extends N_OneArgPredicateCollectionOp, L_org_iets3_core_expr_base.N_IMayHaveEffect, L_org_iets3_core_expr_base.N_IMayAllowEffect {
                            _is_org_iets3_core_expr_collections_FindFirstOp: boolean
                            
                        }
                        
                        export namespace N_FindFirstOp {
                            export function isInstance(node: ITypedNode): node is N_FindFirstOp {
                                return '_is_org_iets3_core_expr_collections_FindFirstOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_FindFirstOp extends TypedNode implements N_FindFirstOp {
                            public _is_org_iets3_core_expr_collections_FindFirstOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgPredicateCollectionOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_lambda_IShortLambdaContainer: boolean = true
            public _is_org_iets3_core_expr_base_IMayAllowEffect: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
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
                        
                        
                        export interface N_ListWithAllOp extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IMayHaveEffect, N_IListOneArgOp {
                            _is_org_iets3_core_expr_collections_ListWithAllOp: boolean
                            
                        }
                        
                        export namespace N_ListWithAllOp {
                            export function isInstance(node: ITypedNode): node is N_ListWithAllOp {
                                return '_is_org_iets3_core_expr_collections_ListWithAllOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ListWithAllOp extends TypedNode implements N_ListWithAllOp {
                            public _is_org_iets3_core_expr_collections_ListWithAllOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
            public _is_org_iets3_core_expr_collections_IListOneArgOp: boolean = true
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
                            public arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "arg")
                        }
                        
                        
                        export interface N_MapLikeType extends L_org_iets3_core_expr_base.N_Type {
                            _is_org_iets3_core_expr_collections_MapLikeType: boolean
                            keyType_DEPRECATED: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
            valueType_DEPRECATED: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type>
                        }
                        
                        export namespace N_MapLikeType {
                            export function isInstance(node: ITypedNode): node is N_MapLikeType {
                                return '_is_org_iets3_core_expr_collections_MapLikeType' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MapLikeType extends TypedNode implements N_MapLikeType {
                            public _is_org_iets3_core_expr_collections_MapLikeType: boolean = true
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
                            public keyType_DEPRECATED: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "keyType_DEPRECATED")
                            public valueType_DEPRECATED: SingleChildAccessor<L_org_iets3_core_expr_base.N_Type> = new SingleChildAccessor(this.node, "valueType_DEPRECATED")
                        }
                        
                        
                        export interface N_ListInsertOp extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget {
                            _is_org_iets3_core_expr_collections_ListInsertOp: boolean
                            index: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
            arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_ListInsertOp {
                            export function isInstance(node: ITypedNode): node is N_ListInsertOp {
                                return '_is_org_iets3_core_expr_collections_ListInsertOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ListInsertOp extends TypedNode implements N_ListInsertOp {
                            public _is_org_iets3_core_expr_collections_ListInsertOp: boolean = true
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
                            public index: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "index")
                            public arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "arg")
                        }
                        
                        
                        export interface N_MapKeysOp extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget {
                            _is_org_iets3_core_expr_collections_MapKeysOp: boolean
                            
                        }
                        
                        export namespace N_MapKeysOp {
                            export function isInstance(node: ITypedNode): node is N_MapKeysOp {
                                return '_is_org_iets3_core_expr_collections_MapKeysOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MapKeysOp extends TypedNode implements N_MapKeysOp {
                            public _is_org_iets3_core_expr_collections_MapKeysOp: boolean = true
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
                        
                        
                        export interface N_MapValuesOp extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget {
                            _is_org_iets3_core_expr_collections_MapValuesOp: boolean
                            
                        }
                        
                        export namespace N_MapValuesOp {
                            export function isInstance(node: ITypedNode): node is N_MapValuesOp {
                                return '_is_org_iets3_core_expr_collections_MapValuesOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MapValuesOp extends TypedNode implements N_MapValuesOp {
                            public _is_org_iets3_core_expr_collections_MapValuesOp: boolean = true
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
                        
                        
                        export interface N_ListWithoutOp extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IListOneArgOp {
                            _is_org_iets3_core_expr_collections_ListWithoutOp: boolean
                            
                        }
                        
                        export namespace N_ListWithoutOp {
                            export function isInstance(node: ITypedNode): node is N_ListWithoutOp {
                                return '_is_org_iets3_core_expr_collections_ListWithoutOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ListWithoutOp extends TypedNode implements N_ListWithoutOp {
                            public _is_org_iets3_core_expr_collections_ListWithoutOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_IListOneArgOp: boolean = true
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
                            public arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "arg")
                        }
                        
                        
                        export interface N_MapContainsKeyOp extends L_jetbrains_mps_lang_core.N_BaseConcept, N_IMapOneArgOp {
                            _is_org_iets3_core_expr_collections_MapContainsKeyOp: boolean
                            
                        }
                        
                        export namespace N_MapContainsKeyOp {
                            export function isInstance(node: ITypedNode): node is N_MapContainsKeyOp {
                                return '_is_org_iets3_core_expr_collections_MapContainsKeyOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_MapContainsKeyOp extends TypedNode implements N_MapContainsKeyOp {
                            public _is_org_iets3_core_expr_collections_MapContainsKeyOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_IMapOneArgOp: boolean = true
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
                            public arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "arg")
                        }
                        
                        
                        export interface N_IMapOneArgOp extends L_org_iets3_core_expr_base.N_IDotTarget, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_collections_IMapOneArgOp: boolean
                            arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_IMapOneArgOp {
                            export function isInstance(node: ITypedNode): node is N_IMapOneArgOp {
                                return '_is_org_iets3_core_expr_collections_IMapOneArgOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IMapOneArgOp extends TypedNode implements N_IMapOneArgOp {
                            public _is_org_iets3_core_expr_collections_IMapOneArgOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                                            public arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "arg")
                        }
                        
                        
                        export interface N_ISetOneArgOp extends L_org_iets3_core_expr_base.N_IDotTarget, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_collections_ISetOneArgOp: boolean
                            arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_ISetOneArgOp {
                            export function isInstance(node: ITypedNode): node is N_ISetOneArgOp {
                                return '_is_org_iets3_core_expr_collections_ISetOneArgOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ISetOneArgOp extends TypedNode implements N_ISetOneArgOp {
                            public _is_org_iets3_core_expr_collections_ISetOneArgOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                                            public arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "arg")
                        }
                        
                        
                        export interface N_IListOneArgOp extends L_org_iets3_core_expr_base.N_IDotTarget, L_org_iets3_core_expr_base.N_IMayHaveEffect {
                            _is_org_iets3_core_expr_collections_IListOneArgOp: boolean
                            arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_IListOneArgOp {
                            export function isInstance(node: ITypedNode): node is N_IListOneArgOp {
                                return '_is_org_iets3_core_expr_collections_IListOneArgOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IListOneArgOp extends TypedNode implements N_IListOneArgOp {
                            public _is_org_iets3_core_expr_collections_IListOneArgOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_base_IMayHaveEffect: boolean = true
                                            public arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "arg")
                        }
                        
                        
                        export interface N_AllWithIndexOp extends N_TwoArgPredicateCollectionOp {
                            _is_org_iets3_core_expr_collections_AllWithIndexOp: boolean
                            
                        }
                        
                        export namespace N_AllWithIndexOp {
                            export function isInstance(node: ITypedNode): node is N_AllWithIndexOp {
                                return '_is_org_iets3_core_expr_collections_AllWithIndexOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AllWithIndexOp extends TypedNode implements N_AllWithIndexOp {
                            public _is_org_iets3_core_expr_collections_AllWithIndexOp: boolean = true
            public _is_org_iets3_core_expr_collections_TwoArgPredicateCollectionOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                        
                        
                        export interface N_TwoArgPredicateCollectionOp extends N_OneArgCollectionOp {
                            _is_org_iets3_core_expr_collections_TwoArgPredicateCollectionOp: boolean
                            
                        }
                        
                        export namespace N_TwoArgPredicateCollectionOp {
                            export function isInstance(node: ITypedNode): node is N_TwoArgPredicateCollectionOp {
                                return '_is_org_iets3_core_expr_collections_TwoArgPredicateCollectionOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TwoArgPredicateCollectionOp extends TypedNode implements N_TwoArgPredicateCollectionOp {
                            public _is_org_iets3_core_expr_collections_TwoArgPredicateCollectionOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                        
                        
                        export interface N_AnyWithIndexOp extends N_TwoArgPredicateCollectionOp {
                            _is_org_iets3_core_expr_collections_AnyWithIndexOp: boolean
                            
                        }
                        
                        export namespace N_AnyWithIndexOp {
                            export function isInstance(node: ITypedNode): node is N_AnyWithIndexOp {
                                return '_is_org_iets3_core_expr_collections_AnyWithIndexOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_AnyWithIndexOp extends TypedNode implements N_AnyWithIndexOp {
                            public _is_org_iets3_core_expr_collections_AnyWithIndexOp: boolean = true
            public _is_org_iets3_core_expr_collections_TwoArgPredicateCollectionOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
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
                        
                        
                        export interface N_TailOp extends N_NoArgCollectionOp, N_IContextTypedCollOp, N_IOrderedCollectionOp {
                            _is_org_iets3_core_expr_collections_TailOp: boolean
                            
                        }
                        
                        export namespace N_TailOp {
                            export function isInstance(node: ITypedNode): node is N_TailOp {
                                return '_is_org_iets3_core_expr_collections_TailOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_TailOp extends TypedNode implements N_TailOp {
                            public _is_org_iets3_core_expr_collections_TailOp: boolean = true
            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_collections_IContextTypedCollOp: boolean = true
            public _is_org_iets3_core_expr_collections_IOrderedCollectionOp: boolean = true
                                            public set shortDescription(value: string | undefined) {
                                this.node.setPropertyValue("shortDescription", value)
                            }
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
                        
                        
                        export interface N_ReverseOp extends N_NoArgCollectionOp, N_IContextTypedCollOp, N_IOrderedCollectionOp {
                            _is_org_iets3_core_expr_collections_ReverseOp: boolean
                            
                        }
                        
                        export namespace N_ReverseOp {
                            export function isInstance(node: ITypedNode): node is N_ReverseOp {
                                return '_is_org_iets3_core_expr_collections_ReverseOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ReverseOp extends TypedNode implements N_ReverseOp {
                            public _is_org_iets3_core_expr_collections_ReverseOp: boolean = true
            public _is_org_iets3_core_expr_collections_NoArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_collections_IContextTypedCollOp: boolean = true
            public _is_org_iets3_core_expr_collections_IOrderedCollectionOp: boolean = true
                                            public set shortDescription(value: string | undefined) {
                                this.node.setPropertyValue("shortDescription", value)
                            }
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
                        
                        
                        export interface N_SetUnionOp extends L_jetbrains_mps_lang_core.N_BaseConcept, N_ISetOneArgOp {
                            _is_org_iets3_core_expr_collections_SetUnionOp: boolean
                            
                        }
                        
                        export namespace N_SetUnionOp {
                            export function isInstance(node: ITypedNode): node is N_SetUnionOp {
                                return '_is_org_iets3_core_expr_collections_SetUnionOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SetUnionOp extends TypedNode implements N_SetUnionOp {
                            public _is_org_iets3_core_expr_collections_SetUnionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ISetOneArgOp: boolean = true
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
                            public arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "arg")
                        }
                        
                        
                        export interface N_SetDiffOp extends L_jetbrains_mps_lang_core.N_BaseConcept, N_ISetOneArgOp {
                            _is_org_iets3_core_expr_collections_SetDiffOp: boolean
                            
                        }
                        
                        export namespace N_SetDiffOp {
                            export function isInstance(node: ITypedNode): node is N_SetDiffOp {
                                return '_is_org_iets3_core_expr_collections_SetDiffOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_SetDiffOp extends TypedNode implements N_SetDiffOp {
                            public _is_org_iets3_core_expr_collections_SetDiffOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ISetOneArgOp: boolean = true
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
                            public arg: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "arg")
                        }
                        
                        
                        export interface N_ListPickOp extends L_jetbrains_mps_lang_core.N_BaseConcept, L_org_iets3_core_expr_base.N_IDotTarget {
                            _is_org_iets3_core_expr_collections_ListPickOp: boolean
                            selectorList: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression>
                        }
                        
                        export namespace N_ListPickOp {
                            export function isInstance(node: ITypedNode): node is N_ListPickOp {
                                return '_is_org_iets3_core_expr_collections_ListPickOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_ListPickOp extends TypedNode implements N_ListPickOp {
                            public _is_org_iets3_core_expr_collections_ListPickOp: boolean = true
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
                            public selectorList: SingleChildAccessor<L_org_iets3_core_expr_base.N_Expression> = new SingleChildAccessor(this.node, "selectorList")
                        }
                        
                        
                        export interface N_IndexOfOp extends N_OneArgCollectionOp, N_IOrderedCollectionOp {
                            _is_org_iets3_core_expr_collections_IndexOfOp: boolean
                            
                        }
                        
                        export namespace N_IndexOfOp {
                            export function isInstance(node: ITypedNode): node is N_IndexOfOp {
                                return '_is_org_iets3_core_expr_collections_IndexOfOp' in node;
                            }
                        }
                        
                        export class _N_TypedImpl_IndexOfOp extends TypedNode implements N_IndexOfOp {
                            public _is_org_iets3_core_expr_collections_IndexOfOp: boolean = true
            public _is_org_iets3_core_expr_collections_OneArgCollectionOp: boolean = true
            public _is_jetbrains_mps_lang_core_BaseConcept: boolean = true
            public _is_org_iets3_core_expr_collections_ICollectionOp: boolean = true
            public _is_org_iets3_core_expr_base_IDotTarget: boolean = true
            public _is_com_mbeddr_mpsutil_interpreter_ITracerFrame: boolean = true
            public _is_org_iets3_core_expr_collections_IOrderedCollectionOp: boolean = true
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
            }