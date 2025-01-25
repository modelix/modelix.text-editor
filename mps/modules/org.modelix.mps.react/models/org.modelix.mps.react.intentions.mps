<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:33859a29-0ff7-4c7b-aefb-d307a74a69bf(org.modelix.mps.react.intentions)">
  <persistence version="9" />
  <languages>
    <use id="d7a92d38-f7db-40d0-8431-763b0c3c9f20" name="jetbrains.mps.lang.intentions" version="1" />
    <devkit ref="fbc25dd2-5da4-483a-8b19-70928e1b62d7(jetbrains.mps.devkit.general-purpose)" />
  </languages>
  <imports>
    <import index="8xo1" ref="r:41b64586-29ed-47f5-b907-44be07261bbc(org.modelix.mps.react.structure)" />
    <import index="tpee" ref="r:00000000-0000-4000-0000-011c895902ca(jetbrains.mps.baseLanguage.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
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
      <concept id="1068580123155" name="jetbrains.mps.baseLanguage.structure.ExpressionStatement" flags="nn" index="3clFbF">
        <child id="1068580123156" name="expression" index="3clFbG" />
      </concept>
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
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
      <concept id="1139184414036" name="jetbrains.mps.lang.smodel.structure.LinkList_AddNewChildOperation" flags="nn" index="WFELt" />
      <concept id="1140131837776" name="jetbrains.mps.lang.smodel.structure.Node_ReplaceWithAnotherOperation" flags="nn" index="1P9Npp">
        <child id="1140131861877" name="replacementNode" index="1P9ThW" />
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
  <node concept="2S6QgY" id="1XYAF4MsvJD">
    <property role="TrG5h" value="wrapWithIf" />
    <ref role="2ZfgGC" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
    <node concept="2S6ZIM" id="1XYAF4MsvJE" role="2ZfVej">
      <node concept="3clFbS" id="1XYAF4MsvJF" role="2VODD2">
        <node concept="3clFbF" id="1XYAF4MsvJG" role="3cqZAp">
          <node concept="Xl_RD" id="1XYAF4MsvJH" role="3clFbG">
            <property role="Xl_RC" value="Wrap with if" />
          </node>
        </node>
      </node>
    </node>
    <node concept="2Sbjvc" id="1XYAF4MsvJI" role="2ZfgGD">
      <node concept="3clFbS" id="1XYAF4MsvJJ" role="2VODD2">
        <node concept="3clFbF" id="1XYAF4MsvJK" role="3cqZAp">
          <node concept="2OqwBi" id="1XYAF4MsvJL" role="3clFbG">
            <node concept="2Sf5sV" id="1XYAF4MsvJM" role="2Oq$k0" />
            <node concept="1P9Npp" id="1XYAF4MsvJN" role="2OqNvi">
              <node concept="2pJPEk" id="1XYAF4MsvJO" role="1P9ThW">
                <node concept="2pJPED" id="1XYAF4MsvJP" role="2pJPEn">
                  <ref role="2pJxaS" to="8xo1:7gSxYrNaHs4" resolve="IfComp" />
                  <node concept="2pIpSj" id="1XYAF4MsA5I" role="2pJxcM">
                    <ref role="2pIpSl" to="8xo1:7gSxYrNaHs6" resolve="condition" />
                    <node concept="2pJPED" id="1XYAF4MsApt" role="28nt2d">
                      <ref role="2pJxaS" to="tpee:fz3vP1J" resolve="Expression" />
                    </node>
                  </node>
                  <node concept="2pIpSj" id="1XYAF4MsvJQ" role="2pJxcM">
                    <ref role="2pIpSl" to="8xo1:7gSxYrNaHs7" resolve="child" />
                    <node concept="36biLy" id="1XYAF4MsvJS" role="28nt2d">
                      <node concept="2Sf5sV" id="1XYAF4MsvJT" role="36biLW" />
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
  <node concept="2S6QgY" id="1XYAF4MsxRa">
    <property role="TrG5h" value="wrapWithWhen" />
    <ref role="2ZfgGC" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
    <node concept="2S6ZIM" id="1XYAF4MsxRb" role="2ZfVej">
      <node concept="3clFbS" id="1XYAF4MsxRc" role="2VODD2">
        <node concept="3clFbF" id="1XYAF4MsxRd" role="3cqZAp">
          <node concept="Xl_RD" id="1XYAF4MsxRe" role="3clFbG">
            <property role="Xl_RC" value="Wrap with when" />
          </node>
        </node>
      </node>
    </node>
    <node concept="2Sbjvc" id="1XYAF4MsxRf" role="2ZfgGD">
      <node concept="3clFbS" id="1XYAF4MsxRg" role="2VODD2">
        <node concept="3clFbF" id="1XYAF4MsxRh" role="3cqZAp">
          <node concept="2OqwBi" id="1XYAF4MsxRi" role="3clFbG">
            <node concept="2Sf5sV" id="1XYAF4MsxRj" role="2Oq$k0" />
            <node concept="1P9Npp" id="1XYAF4MsxRk" role="2OqNvi">
              <node concept="2pJPEk" id="1XYAF4MsxRl" role="1P9ThW">
                <node concept="2pJPED" id="1XYAF4MsxRm" role="2pJPEn">
                  <ref role="2pJxaS" to="8xo1:2ti6llKMteA" resolve="When" />
                  <node concept="2pIpSj" id="1XYAF4MsD_o" role="2pJxcM">
                    <ref role="2pIpSl" to="8xo1:2ti6llKMteD" resolve="else" />
                    <node concept="36biLy" id="1XYAF4Ms$TJ" role="28nt2d">
                      <node concept="2Sf5sV" id="1XYAF4Ms_d9" role="36biLW" />
                    </node>
                  </node>
                  <node concept="2pIpSj" id="1XYAF4MszFW" role="2pJxcM">
                    <ref role="2pIpSl" to="8xo1:2ti6llKMteF" resolve="cases" />
                    <node concept="36be1Y" id="1XYAF4MszZy" role="28nt2d" />
                  </node>
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
  </node>
</model>

