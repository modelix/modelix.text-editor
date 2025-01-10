<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:33859a29-0ff7-4c7b-aefb-d307a74a69bf(org.modelix.mps.react.intentions)">
  <persistence version="9" />
  <languages>
    <use id="d7a92d38-f7db-40d0-8431-763b0c3c9f20" name="jetbrains.mps.lang.intentions" version="1" />
    <devkit ref="fbc25dd2-5da4-483a-8b19-70928e1b62d7(jetbrains.mps.devkit.general-purpose)" />
  </languages>
  <imports>
    <import index="8xo1" ref="r:41b64586-29ed-47f5-b907-44be07261bbc(org.modelix.mps.react.structure)" />
    <import index="zaxg" ref="r:c4183f14-1033-4ade-be7c-1beadb184134(org.modelix.mps.react.muicomponents.structure)" />
    <import index="c17a" ref="8865b7a8-5271-43d3-884c-6fd1d9cfdd34/java:org.jetbrains.mps.openapi.language(MPS.OpenAPI/)" implicit="true" />
    <import index="7923" ref="r:2c5a8407-fd65-4ea4-b95e-a8f8fee129c0(org.modelix.mps.react.muicomponents.behavior)" implicit="true" />
  </imports>
  <registry>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="4836112446988635817" name="jetbrains.mps.baseLanguage.structure.UndefinedType" flags="in" index="2jxLKc" />
      <concept id="1202948039474" name="jetbrains.mps.baseLanguage.structure.InstanceMethodCallOperation" flags="nn" index="liA8E" />
      <concept id="1197027756228" name="jetbrains.mps.baseLanguage.structure.DotExpression" flags="nn" index="2OqwBi">
        <child id="1197027771414" name="operand" index="2Oq$k0" />
        <child id="1197027833540" name="operation" index="2OqNvi" />
      </concept>
      <concept id="1137021947720" name="jetbrains.mps.baseLanguage.structure.ConceptFunction" flags="in" index="2VMwT0">
        <child id="1137022507850" name="body" index="2VODD2" />
      </concept>
      <concept id="1070475926800" name="jetbrains.mps.baseLanguage.structure.StringLiteral" flags="nn" index="Xl_RD">
        <property id="1070475926801" name="value" index="Xl_RC" />
      </concept>
      <concept id="1068431474542" name="jetbrains.mps.baseLanguage.structure.VariableDeclaration" flags="ng" index="33uBYm">
        <child id="1068431790190" name="initializer" index="33vP2m" />
      </concept>
      <concept id="1068498886296" name="jetbrains.mps.baseLanguage.structure.VariableReference" flags="nn" index="37vLTw">
        <reference id="1068581517664" name="variableDeclaration" index="3cqZAo" />
      </concept>
      <concept id="4972933694980447171" name="jetbrains.mps.baseLanguage.structure.BaseVariableDeclaration" flags="ng" index="19Szcq">
        <child id="5680397130376446158" name="type" index="1tU5fm" />
      </concept>
      <concept id="1068580123155" name="jetbrains.mps.baseLanguage.structure.ExpressionStatement" flags="nn" index="3clFbF">
        <child id="1068580123156" name="expression" index="3clFbG" />
      </concept>
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
      <concept id="1068581242875" name="jetbrains.mps.baseLanguage.structure.PlusExpression" flags="nn" index="3cpWs3" />
      <concept id="1068581242864" name="jetbrains.mps.baseLanguage.structure.LocalVariableDeclarationStatement" flags="nn" index="3cpWs8">
        <child id="1068581242865" name="localVariableDeclaration" index="3cpWs9" />
      </concept>
      <concept id="1068581242863" name="jetbrains.mps.baseLanguage.structure.LocalVariableDeclaration" flags="nr" index="3cpWsn" />
      <concept id="1081516740877" name="jetbrains.mps.baseLanguage.structure.NotExpression" flags="nn" index="3fqX7Q">
        <child id="1081516765348" name="expression" index="3fr31v" />
      </concept>
      <concept id="1204053956946" name="jetbrains.mps.baseLanguage.structure.IMethodCall" flags="ngI" index="1ndlxa">
        <reference id="1068499141037" name="baseMethodDeclaration" index="37wK5l" />
        <child id="1068499141038" name="actualArgument" index="37wK5m" />
      </concept>
      <concept id="1081773326031" name="jetbrains.mps.baseLanguage.structure.BinaryOperation" flags="nn" index="3uHJSO">
        <child id="1081773367579" name="rightExpression" index="3uHU7w" />
        <child id="1081773367580" name="leftExpression" index="3uHU7B" />
      </concept>
    </language>
    <language id="fd392034-7849-419d-9071-12563d152375" name="jetbrains.mps.baseLanguage.closures">
      <concept id="2524418899405758586" name="jetbrains.mps.baseLanguage.closures.structure.InferredClosureParameterDeclaration" flags="ig" index="gl6BB" />
      <concept id="1199569711397" name="jetbrains.mps.baseLanguage.closures.structure.ClosureLiteral" flags="nn" index="1bVj0M">
        <child id="1199569906740" name="parameter" index="1bW2Oz" />
        <child id="1199569916463" name="body" index="1bW5cS" />
      </concept>
    </language>
    <language id="d7a92d38-f7db-40d0-8431-763b0c3c9f20" name="jetbrains.mps.lang.intentions">
      <concept id="1192794744107" name="jetbrains.mps.lang.intentions.structure.IntentionDeclaration" flags="ig" index="2S6QgY" />
      <concept id="1192794782375" name="jetbrains.mps.lang.intentions.structure.DescriptionBlock" flags="in" index="2S6ZIM" />
      <concept id="1192795911897" name="jetbrains.mps.lang.intentions.structure.ExecuteBlock" flags="in" index="2Sbjvc" />
      <concept id="1192796902958" name="jetbrains.mps.lang.intentions.structure.ConceptFunctionParameter_node" flags="nn" index="2Sf5sV" />
      <concept id="2522969319638091381" name="jetbrains.mps.lang.intentions.structure.BaseIntentionDeclaration" flags="ig" index="2ZfUlf">
        <reference id="2522969319638198290" name="forConcept" index="2ZfgGC" />
        <child id="2522969319638198291" name="executeFunction" index="2ZfgGD" />
        <child id="2522969319638093993" name="descriptionFunction" index="2ZfVej" />
      </concept>
      <concept id="1240316299033" name="jetbrains.mps.lang.intentions.structure.QueryBlock" flags="in" index="38BcoT">
        <child id="1240393479918" name="paramType" index="3ddBve" />
      </concept>
      <concept id="1240322627579" name="jetbrains.mps.lang.intentions.structure.IntentionParameter" flags="nn" index="38Zlrr" />
      <concept id="1240395258925" name="jetbrains.mps.lang.intentions.structure.ParameterizedIntentionDeclaration" flags="ig" index="3dkpOd">
        <child id="1240395532443" name="queryFunction" index="3dlsAV" />
      </concept>
    </language>
    <language id="3a13115c-633c-4c5c-bbcc-75c4219e9555" name="jetbrains.mps.lang.quotation">
      <concept id="5455284157994012186" name="jetbrains.mps.lang.quotation.structure.NodeBuilderInitLink" flags="ng" index="2pIpSj">
        <reference id="5455284157994012188" name="link" index="2pIpSl" />
        <child id="1595412875168045827" name="initValue" index="28nt2d" />
      </concept>
      <concept id="5455284157993863837" name="jetbrains.mps.lang.quotation.structure.NodeBuilder" flags="nn" index="2pJPEk">
        <child id="5455284157993863838" name="quotedNode" index="2pJPEn" />
      </concept>
      <concept id="5455284157993863840" name="jetbrains.mps.lang.quotation.structure.NodeBuilderNode" flags="nn" index="2pJPED">
        <reference id="5455284157993910961" name="concept" index="2pJxaS" />
        <child id="5455284157993911099" name="values" index="2pJxcM" />
      </concept>
      <concept id="8182547171709738802" name="jetbrains.mps.lang.quotation.structure.NodeBuilderList" flags="nn" index="36be1Y">
        <child id="8182547171709738803" name="nodes" index="36be1Z" />
      </concept>
      <concept id="8182547171709752110" name="jetbrains.mps.lang.quotation.structure.NodeBuilderExpression" flags="nn" index="36biLy">
        <child id="8182547171709752112" name="expression" index="36biLW" />
      </concept>
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="1177026924588" name="jetbrains.mps.lang.smodel.structure.RefConcept_Reference" flags="nn" index="chp4Y">
        <reference id="1177026940964" name="conceptDeclaration" index="cht4Q" />
      </concept>
      <concept id="1179409122411" name="jetbrains.mps.lang.smodel.structure.Node_ConceptMethodCall" flags="nn" index="2qgKlT" />
      <concept id="2396822768958367367" name="jetbrains.mps.lang.smodel.structure.AbstractTypeCastExpression" flags="nn" index="$5XWr">
        <child id="6733348108486823193" name="leftExpression" index="1m5AlR" />
        <child id="3906496115198199033" name="conceptArgument" index="3oSUPX" />
      </concept>
      <concept id="1143234257716" name="jetbrains.mps.lang.smodel.structure.Node_GetModelOperation" flags="nn" index="I4A8Y" />
      <concept id="1181949435690" name="jetbrains.mps.lang.smodel.structure.Concept_NewInstance" flags="nn" index="LFhST" />
      <concept id="1181952871644" name="jetbrains.mps.lang.smodel.structure.Concept_GetAllSubConcepts" flags="nn" index="LSoRf">
        <child id="1182506816063" name="smodel" index="1iTxcG" />
      </concept>
      <concept id="1139184414036" name="jetbrains.mps.lang.smodel.structure.LinkList_AddNewChildOperation" flags="nn" index="WFELt" />
      <concept id="2644386474300074836" name="jetbrains.mps.lang.smodel.structure.ConceptIdRefExpression" flags="nn" index="35c_gC">
        <reference id="2644386474300074837" name="conceptDeclaration" index="35c_gD" />
      </concept>
      <concept id="6677504323281689838" name="jetbrains.mps.lang.smodel.structure.SConceptType" flags="in" index="3bZ5Sz">
        <reference id="6677504323281689839" name="conceptDeclaraton" index="3bZ5Sy" />
      </concept>
      <concept id="1140131837776" name="jetbrains.mps.lang.smodel.structure.Node_ReplaceWithAnotherOperation" flags="nn" index="1P9Npp">
        <child id="1140131861877" name="replacementNode" index="1P9ThW" />
      </concept>
      <concept id="1140137987495" name="jetbrains.mps.lang.smodel.structure.SNodeTypeCastExpression" flags="nn" index="1PxgMI" />
      <concept id="1138055754698" name="jetbrains.mps.lang.smodel.structure.SNodeType" flags="in" index="3Tqbb2">
        <reference id="1138405853777" name="concept" index="ehGHo" />
      </concept>
      <concept id="1138056282393" name="jetbrains.mps.lang.smodel.structure.SLinkListAccess" flags="nn" index="3Tsc0h">
        <reference id="1138056546658" name="link" index="3TtcxE" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
    <language id="83888646-71ce-4f1c-9c53-c54016f6ad4f" name="jetbrains.mps.baseLanguage.collections">
      <concept id="1204796164442" name="jetbrains.mps.baseLanguage.collections.structure.InternalSequenceOperation" flags="nn" index="23sCx2">
        <child id="1204796294226" name="closure" index="23t8la" />
      </concept>
      <concept id="1151702311717" name="jetbrains.mps.baseLanguage.collections.structure.ToListOperation" flags="nn" index="ANE8D" />
      <concept id="1202120902084" name="jetbrains.mps.baseLanguage.collections.structure.WhereOperation" flags="nn" index="3zZkjj" />
    </language>
  </registry>
  <node concept="2S6QgY" id="2vPZMAmB6r6">
    <property role="TrG5h" value="wrapWithGeneric" />
    <ref role="2ZfgGC" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
    <node concept="2S6ZIM" id="2vPZMAmB6r7" role="2ZfVej">
      <node concept="3clFbS" id="2vPZMAmB6r8" role="2VODD2">
        <node concept="3clFbF" id="2vPZMAmB6Wv" role="3cqZAp">
          <node concept="Xl_RD" id="2vPZMAmB6Wu" role="3clFbG">
            <property role="Xl_RC" value="Wrap with generic component" />
          </node>
        </node>
      </node>
    </node>
    <node concept="2Sbjvc" id="2vPZMAmB6r9" role="2ZfgGD">
      <node concept="3clFbS" id="2vPZMAmB6ra" role="2VODD2">
        <node concept="3clFbF" id="2vPZMAmB72E" role="3cqZAp">
          <node concept="2OqwBi" id="2vPZMAmB7bZ" role="3clFbG">
            <node concept="2Sf5sV" id="2vPZMAmB72D" role="2Oq$k0" />
            <node concept="1P9Npp" id="2vPZMAmB7le" role="2OqNvi">
              <node concept="2pJPEk" id="2vPZMAmB7sZ" role="1P9ThW">
                <node concept="2pJPED" id="2vPZMAmB7t1" role="2pJPEn">
                  <ref role="2pJxaS" to="8xo1:7GLg2tFqfTf" resolve="GenericReactComponent" />
                  <node concept="2pIpSj" id="2vPZMAmB9xY" role="2pJxcM">
                    <ref role="2pIpSl" to="8xo1:7GLg2tFrln8" resolve="children" />
                    <node concept="36be1Y" id="2vPZMAmB9yE" role="28nt2d">
                      <node concept="36biLy" id="2vPZMAmB9z7" role="36be1Z">
                        <node concept="2Sf5sV" id="2vPZMAmB9zD" role="36biLW" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="2S6QgY" id="2vPZMAmBRry">
    <property role="TrG5h" value="addProperty" />
    <ref role="2ZfgGC" to="8xo1:7GLg2tFqfTf" resolve="GenericReactComponent" />
    <node concept="2S6ZIM" id="2vPZMAmBRrz" role="2ZfVej">
      <node concept="3clFbS" id="2vPZMAmBRr$" role="2VODD2">
        <node concept="3clFbF" id="2vPZMAmBRGg" role="3cqZAp">
          <node concept="Xl_RD" id="2vPZMAmBRGf" role="3clFbG">
            <property role="Xl_RC" value="Add Property" />
          </node>
        </node>
      </node>
    </node>
    <node concept="2Sbjvc" id="2vPZMAmBRr_" role="2ZfgGD">
      <node concept="3clFbS" id="2vPZMAmBRrA" role="2VODD2">
        <node concept="3clFbF" id="2vPZMAmBRWU" role="3cqZAp">
          <node concept="2OqwBi" id="2vPZMAmBV9F" role="3clFbG">
            <node concept="2OqwBi" id="2vPZMAmBS78" role="2Oq$k0">
              <node concept="2Sf5sV" id="2vPZMAmBRWT" role="2Oq$k0" />
              <node concept="3Tsc0h" id="2vPZMAmBSik" role="2OqNvi">
                <ref role="3TtcxE" to="8xo1:7GLg2tFrlna" resolve="properties" />
              </node>
            </node>
            <node concept="WFELt" id="2vPZMAmC04J" role="2OqNvi" />
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="2S6QgY" id="2vPZMAmC1E6">
    <property role="TrG5h" value="addStateVariable" />
    <ref role="2ZfgGC" to="8xo1:7GLg2tFqfTf" resolve="GenericReactComponent" />
    <node concept="2S6ZIM" id="2vPZMAmC1E7" role="2ZfVej">
      <node concept="3clFbS" id="2vPZMAmC1E8" role="2VODD2">
        <node concept="3clFbF" id="2vPZMAmC1UV" role="3cqZAp">
          <node concept="Xl_RD" id="2vPZMAmC1UU" role="3clFbG">
            <property role="Xl_RC" value="Add State Variable" />
          </node>
        </node>
      </node>
    </node>
    <node concept="2Sbjvc" id="2vPZMAmC1E9" role="2ZfgGD">
      <node concept="3clFbS" id="2vPZMAmC1Ea" role="2VODD2">
        <node concept="3clFbF" id="2vPZMAmC1Xu" role="3cqZAp">
          <node concept="2OqwBi" id="2vPZMAmC55v" role="3clFbG">
            <node concept="2OqwBi" id="2vPZMAmC27G" role="2Oq$k0">
              <node concept="2Sf5sV" id="2vPZMAmC1Xt" role="2Oq$k0" />
              <node concept="3Tsc0h" id="2vPZMAmC2iS" role="2OqNvi">
                <ref role="3TtcxE" to="8xo1:4Dhs5Nildlt" resolve="stateVariables" />
              </node>
            </node>
            <node concept="WFELt" id="2vPZMAmC7l$" role="2OqNvi" />
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="2S6QgY" id="2vPZMAmC9lw">
    <property role="TrG5h" value="addChild" />
    <ref role="2ZfgGC" to="8xo1:7GLg2tFqfTf" resolve="GenericReactComponent" />
    <node concept="2S6ZIM" id="2vPZMAmC9lx" role="2ZfVej">
      <node concept="3clFbS" id="2vPZMAmC9ly" role="2VODD2">
        <node concept="3clFbF" id="2vPZMAmC9Ag" role="3cqZAp">
          <node concept="Xl_RD" id="2vPZMAmC9Af" role="3clFbG">
            <property role="Xl_RC" value="Add Child" />
          </node>
        </node>
      </node>
    </node>
    <node concept="2Sbjvc" id="2vPZMAmC9lz" role="2ZfgGD">
      <node concept="3clFbS" id="2vPZMAmC9l$" role="2VODD2">
        <node concept="3clFbF" id="2vPZMAmC9AZ" role="3cqZAp">
          <node concept="2OqwBi" id="2vPZMAmCc8k" role="3clFbG">
            <node concept="2OqwBi" id="2vPZMAmC9Ld" role="2Oq$k0">
              <node concept="2Sf5sV" id="2vPZMAmC9AY" role="2Oq$k0" />
              <node concept="3Tsc0h" id="2vPZMAmC9Wp" role="2OqNvi">
                <ref role="3TtcxE" to="8xo1:7GLg2tFrln8" resolve="children" />
              </node>
            </node>
            <node concept="WFELt" id="2vPZMAmCdQf" role="2OqNvi" />
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="3dkpOd" id="2vPZMAnsO$D">
    <property role="TrG5h" value="wrapGeneric" />
    <ref role="2ZfgGC" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
    <node concept="38BcoT" id="2vPZMAnsO$E" role="3dlsAV">
      <node concept="3bZ5Sz" id="2vPZMAnsZ1h" role="3ddBve">
        <ref role="3bZ5Sy" to="zaxg:2vPZMAnsypR" resolve="ICanWrap" />
      </node>
      <node concept="3clFbS" id="2vPZMAnsO$G" role="2VODD2">
        <node concept="3clFbF" id="2vPZMAnsRHd" role="3cqZAp">
          <node concept="2OqwBi" id="2vPZMAntgN_" role="3clFbG">
            <node concept="2OqwBi" id="2vPZMAnt9_W" role="2Oq$k0">
              <node concept="2OqwBi" id="2vPZMAnsSyL" role="2Oq$k0">
                <node concept="35c_gC" id="2vPZMAnsRHb" role="2Oq$k0">
                  <ref role="35c_gD" to="zaxg:2vPZMAnsypR" resolve="ICanWrap" />
                </node>
                <node concept="LSoRf" id="2vPZMAnsTes" role="2OqNvi">
                  <node concept="2OqwBi" id="2vPZMAnsT$$" role="1iTxcG">
                    <node concept="2Sf5sV" id="2vPZMAnsTqb" role="2Oq$k0" />
                    <node concept="I4A8Y" id="2vPZMAnsTAJ" role="2OqNvi" />
                  </node>
                </node>
              </node>
              <node concept="3zZkjj" id="2vPZMAntcB2" role="2OqNvi">
                <node concept="1bVj0M" id="2vPZMAntcB4" role="23t8la">
                  <node concept="3clFbS" id="2vPZMAntcB5" role="1bW5cS">
                    <node concept="3clFbF" id="2vPZMAntcBg" role="3cqZAp">
                      <node concept="3fqX7Q" id="2vPZMAntnTi" role="3clFbG">
                        <node concept="2OqwBi" id="2vPZMAntnTk" role="3fr31v">
                          <node concept="37vLTw" id="2vPZMAntnTl" role="2Oq$k0">
                            <ref role="3cqZAo" node="2vPZMAntcB6" resolve="it" />
                          </node>
                          <node concept="liA8E" id="2vPZMAntnTm" role="2OqNvi">
                            <ref role="37wK5l" to="c17a:~SAbstractConcept.isAbstract()" resolve="isAbstract" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                  <node concept="gl6BB" id="2vPZMAntcB6" role="1bW2Oz">
                    <property role="TrG5h" value="it" />
                    <node concept="2jxLKc" id="2vPZMAntcB7" role="1tU5fm" />
                  </node>
                </node>
              </node>
            </node>
            <node concept="ANE8D" id="2vPZMAntk6U" role="2OqNvi" />
          </node>
        </node>
      </node>
    </node>
    <node concept="2S6ZIM" id="2vPZMAnsO$H" role="2ZfVej">
      <node concept="3clFbS" id="2vPZMAnsO$I" role="2VODD2">
        <node concept="3clFbF" id="2vPZMAnt2i1" role="3cqZAp">
          <node concept="3cpWs3" id="2vPZMAnt5xq" role="3clFbG">
            <node concept="2OqwBi" id="2vPZMAnt6sO" role="3uHU7w">
              <node concept="38Zlrr" id="2vPZMAnt5y2" role="2Oq$k0" />
              <node concept="liA8E" id="2vPZMAnt6W3" role="2OqNvi">
                <ref role="37wK5l" to="c17a:~SAbstractConcept.getName()" resolve="getName" />
              </node>
            </node>
            <node concept="Xl_RD" id="2vPZMAnt2i0" role="3uHU7B">
              <property role="Xl_RC" value="Wrap with " />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="2Sbjvc" id="2vPZMAnsO$J" role="2ZfgGD">
      <node concept="3clFbS" id="2vPZMAnsO$K" role="2VODD2">
        <node concept="3cpWs8" id="2vPZMAnt17r" role="3cqZAp">
          <node concept="3cpWsn" id="2vPZMAnt17s" role="3cpWs9">
            <property role="TrG5h" value="wrapper" />
            <node concept="3Tqbb2" id="2vPZMAnt16A" role="1tU5fm">
              <ref role="ehGHo" to="zaxg:2vPZMAnsypR" resolve="ICanWrap" />
            </node>
            <node concept="1PxgMI" id="2vPZMAnt17t" role="33vP2m">
              <node concept="chp4Y" id="2vPZMAnt17u" role="3oSUPX">
                <ref role="cht4Q" to="zaxg:2vPZMAnsypR" resolve="ICanWrap" />
              </node>
              <node concept="2OqwBi" id="2vPZMAnt17v" role="1m5AlR">
                <node concept="38Zlrr" id="2vPZMAnt17w" role="2Oq$k0" />
                <node concept="LFhST" id="2vPZMAnt17x" role="2OqNvi" />
              </node>
            </node>
          </node>
        </node>
        <node concept="3clFbF" id="2vPZMAnt1S9" role="3cqZAp">
          <node concept="2OqwBi" id="2vPZMAnt247" role="3clFbG">
            <node concept="2Sf5sV" id="2vPZMAnt1S8" role="2Oq$k0" />
            <node concept="1P9Npp" id="2vPZMAnt7m4" role="2OqNvi">
              <node concept="37vLTw" id="2vPZMAnt7mI" role="1P9ThW">
                <ref role="3cqZAo" node="2vPZMAnt17s" resolve="wrapper" />
              </node>
            </node>
          </node>
        </node>
        <node concept="3clFbF" id="2vPZMAnsZhc" role="3cqZAp">
          <node concept="2OqwBi" id="2vPZMAnt1kw" role="3clFbG">
            <node concept="37vLTw" id="2vPZMAnt17y" role="2Oq$k0">
              <ref role="3cqZAo" node="2vPZMAnt17s" resolve="newNode" />
            </node>
            <node concept="2qgKlT" id="2vPZMAnt1Ig" role="2OqNvi">
              <ref role="37wK5l" to="7923:2vPZMAnsyqb" resolve="wrap" />
              <node concept="2Sf5sV" id="2vPZMAnt1Pl" role="37wK5m" />
            </node>
          </node>
        </node>
      </node>
    </node>
  </node>
</model>

