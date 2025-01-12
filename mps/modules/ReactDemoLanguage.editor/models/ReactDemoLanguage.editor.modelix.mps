<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:ca22fd82-7665-4880-b185-e4971be354c1(ReactDemoLanguage.editor.modelix)">
  <persistence version="9" />
  <languages>
    <use id="67accce2-9676-4728-9e9c-8b15ea30d924" name="org.modelix.mps.react" version="0" />
    <use id="09a61cec-0c2d-4a90-b590-25e493b12f35" name="org.modelix.mps.react.muicomponents" version="0" />
    <devkit ref="fbc25dd2-5da4-483a-8b19-70928e1b62d7(jetbrains.mps.devkit.general-purpose)" />
  </languages>
  <imports>
    <import index="oyym" ref="r:1570828e-e9a4-47ff-95d9-80c800704647(ReactDemoLanguage.structure)" />
    <import index="1ut2" ref="208eaf68-fd3a-497a-a4b6-4923ff457c3b/java:org.modelix.model.mpsadapters.tomps(org.modelix.mps.editor.common.stubs/)" />
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="67accce2-9676-4728-9e9c-8b15ea30d924" name="org.modelix.mps.react">
      <concept id="8374592933087336196" name="org.modelix.mps.react.structure.IfComp" flags="ng" index="274_3y">
        <child id="8374592933087336198" name="condition" index="274_3w" />
        <child id="8374592933087336199" name="child" index="274_3x" />
      </concept>
      <concept id="8876946878574570414" name="org.modelix.mps.react.structure.ComponentNodeExpression" flags="ng" index="ggAI9" />
      <concept id="8876946878573696709" name="org.modelix.mps.react.structure.ReactModule" flags="ng" index="gl9ry">
        <child id="8876946878573903290" name="content" index="gmrQt" />
      </concept>
      <concept id="8876946878573903262" name="org.modelix.mps.react.structure.ConceptRenderer" flags="ng" index="gmrQT">
        <reference id="8310867745953086698" name="concept" index="3JBHV4" />
        <child id="8876946878573903455" name="component" index="gmrTS" />
      </concept>
      <concept id="1612157992440222093" name="org.modelix.mps.react.structure.ForEachInteratorVariableReference" flags="ng" index="rqPyE">
        <reference id="1612157992440222094" name="forEach" index="rqPyD" />
      </concept>
      <concept id="1612157992440089595" name="org.modelix.mps.react.structure.ForEachComponent" flags="ng" index="rrkbs">
        <child id="1612157992440089646" name="input" index="rrkk9" />
        <child id="1612157992440089600" name="component" index="rrkkB" />
      </concept>
      <concept id="5355184975880615610" name="org.modelix.mps.react.structure.NamedRendererParameter" flags="ng" index="2rzwrA">
        <child id="5355184975880615618" name="type" index="2rzwqu" />
      </concept>
      <concept id="5355184975880615607" name="org.modelix.mps.react.structure.NamedRenderer" flags="ng" index="2rzwrF" />
      <concept id="5355184975880958844" name="org.modelix.mps.react.structure.NamedRendererParameterReference" flags="ng" index="2rHscw">
        <reference id="5355184975880958845" name="decl" index="2rHscx" />
      </concept>
      <concept id="5355184975881056557" name="org.modelix.mps.react.structure.NamedRendererBase" flags="ng" index="2rHO5L">
        <child id="5355184975881056561" name="parameters" index="2rHO5H" />
        <child id="5355184975881056562" name="component" index="2rHO5I" />
      </concept>
      <concept id="2833354970324905743" name="org.modelix.mps.react.structure.RenderNode" flags="ng" index="1nBVpq">
        <child id="2833354970324905746" name="nodeToRender" index="1nBVp7" />
      </concept>
    </language>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1197027756228" name="jetbrains.mps.baseLanguage.structure.DotExpression" flags="nn" index="2OqwBi">
        <child id="1197027771414" name="operand" index="2Oq$k0" />
        <child id="1197027833540" name="operation" index="2OqNvi" />
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
      <concept id="1068581242875" name="jetbrains.mps.baseLanguage.structure.PlusExpression" flags="nn" index="3cpWs3" />
      <concept id="1081773326031" name="jetbrains.mps.baseLanguage.structure.BinaryOperation" flags="nn" index="3uHJSO">
        <child id="1081773367579" name="rightExpression" index="3uHU7w" />
        <child id="1081773367580" name="leftExpression" index="3uHU7B" />
      </concept>
    </language>
    <language id="09a61cec-0c2d-4a90-b590-25e493b12f35" name="org.modelix.mps.react.muicomponents">
      <concept id="223742654172176291" name="org.modelix.mps.react.muicomponents.structure.Alignment" flags="ng" index="G4ZHx" />
      <concept id="2879488090877505018" name="org.modelix.mps.react.muicomponents.structure.IContainerSingleComponent" flags="ngI" index="2Kjlbj">
        <child id="2879488090877505021" name="child" index="2Kjlbk" />
      </concept>
      <concept id="2879488090875868026" name="org.modelix.mps.react.muicomponents.structure.Icon" flags="ng" index="2Kq$Lj">
        <property id="2879488090875868027" name="name" index="2Kq$Li" />
      </concept>
      <concept id="2879488090875868019" name="org.modelix.mps.react.muicomponents.structure.Accordion" flags="ng" index="2Kq$Lq">
        <child id="2879488090876606450" name="icon" index="2KnKzr" />
        <child id="2879488090875868021" name="summary" index="2Kq$Ls" />
      </concept>
      <concept id="2879488090872882957" name="org.modelix.mps.react.muicomponents.structure.IContainerMultiComponent" flags="ngI" index="2KxXw$">
        <child id="2879488090859879792" name="children" index="2Ln$9p" />
      </concept>
      <concept id="2879488090869195431" name="org.modelix.mps.react.muicomponents.structure.Command" flags="ng" index="2KN1Qe">
        <child id="2879488090869195432" name="statements" index="2KN1Q1" />
      </concept>
      <concept id="2879488090867630820" name="org.modelix.mps.react.muicomponents.structure.ButtonLabelIcon" flags="ng" index="2KPZRd">
        <child id="2879488090875870057" name="icon" index="2Kq$h0" />
      </concept>
      <concept id="2879488090865052965" name="org.modelix.mps.react.muicomponents.structure.Button" flags="ng" index="2L3P8c">
        <child id="2879488090869195443" name="command" index="2KN1Qq" />
        <child id="2879488090865052967" name="label" index="2L3P8e" />
      </concept>
      <concept id="2879488090865052939" name="org.modelix.mps.react.muicomponents.structure.ButtonLabelText" flags="ng" index="2L3P8y">
        <property id="2879488090865052940" name="text" index="2L3P8_" />
      </concept>
      <concept id="2879488090861821590" name="org.modelix.mps.react.muicomponents.structure.Space" flags="ng" index="2Lfa6Z" />
      <concept id="2879488090860324692" name="org.modelix.mps.react.muicomponents.structure.LayoutVertical" flags="ng" index="2LhRxX">
        <property id="2879488090860368414" name="gap" index="2LhGOR" />
        <child id="223742654172188948" name="align" index="G4Vnm" />
      </concept>
      <concept id="2879488090860989101" name="org.modelix.mps.react.muicomponents.structure.Header" flags="ng" index="2Lilm4">
        <property id="2879488090860989103" name="level" index="2Lilm6" />
        <child id="2879488090860989104" name="text" index="2Lilmp" />
      </concept>
      <concept id="2879488090859464565" name="org.modelix.mps.react.muicomponents.structure.Label" flags="ng" index="2Lk9xs">
        <property id="2879488090875133144" name="style" index="2KoofL" />
        <child id="2879488090859488762" name="value" index="2Lk3Fj" />
      </concept>
      <concept id="2879488090859879787" name="org.modelix.mps.react.muicomponents.structure.LayoutHorizontal" flags="ng" index="2Ln$92">
        <child id="223742654172220973" name="align" index="G4MFJ" />
      </concept>
      <concept id="2879488090856866837" name="org.modelix.mps.react.muicomponents.structure.NodePropRef" flags="ng" index="2Ly3GW">
        <reference id="2879488090856866839" name="property" index="2Ly3GY" />
        <child id="2879488090856866838" name="node" index="2Ly3GZ" />
      </concept>
      <concept id="2879488090856848295" name="org.modelix.mps.react.muicomponents.structure.TextField" flags="ng" index="2Ly8ie" />
      <concept id="2879488090893902552" name="org.modelix.mps.react.muicomponents.structure.LabelWidgetPair" flags="ng" index="2ZhLRL">
        <child id="2879488090893902555" name="widget" index="2ZhLRM" />
        <child id="2879488090893902554" name="label" index="2ZhLRN" />
      </concept>
      <concept id="2879488090887798733" name="org.modelix.mps.react.muicomponents.structure.ShowAndEdit" flags="ng" index="2ZC43$" />
      <concept id="2879488090887731754" name="org.modelix.mps.react.muicomponents.structure.ISingleDataBinding" flags="ngI" index="2ZCkk3">
        <child id="2879488090856866844" name="data" index="2Ly3GP" />
      </concept>
    </language>
    <language id="3a13115c-633c-4c5c-bbcc-75c4219e9555" name="jetbrains.mps.lang.quotation">
      <concept id="5455284157993911077" name="jetbrains.mps.lang.quotation.structure.NodeBuilderInitProperty" flags="ng" index="2pJxcG">
        <reference id="5455284157993911078" name="property" index="2pJxcJ" />
        <child id="1595412875168045201" name="initValue" index="28ntcv" />
      </concept>
      <concept id="5455284157993863837" name="jetbrains.mps.lang.quotation.structure.NodeBuilder" flags="nn" index="2pJPEk">
        <child id="5455284157993863838" name="quotedNode" index="2pJPEn" />
      </concept>
      <concept id="5455284157993863840" name="jetbrains.mps.lang.quotation.structure.NodeBuilderNode" flags="nn" index="2pJPED">
        <reference id="5455284157993910961" name="concept" index="2pJxaS" />
        <child id="5455284157993911099" name="values" index="2pJxcM" />
      </concept>
      <concept id="6985522012210254362" name="jetbrains.mps.lang.quotation.structure.NodeBuilderPropertyExpression" flags="nn" index="WxPPo">
        <child id="6985522012210254363" name="expression" index="WxPPp" />
      </concept>
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="1179168000618" name="jetbrains.mps.lang.smodel.structure.Node_GetIndexInParentOperation" flags="nn" index="2bSWHS" />
      <concept id="1138055754698" name="jetbrains.mps.lang.smodel.structure.SNodeType" flags="in" index="3Tqbb2">
        <reference id="1138405853777" name="concept" index="ehGHo" />
      </concept>
      <concept id="1138056022639" name="jetbrains.mps.lang.smodel.structure.SPropertyAccess" flags="nn" index="3TrcHB">
        <reference id="1138056395725" name="property" index="3TsBF5" />
      </concept>
      <concept id="1138056282393" name="jetbrains.mps.lang.smodel.structure.SLinkListAccess" flags="nn" index="3Tsc0h">
        <reference id="1138056546658" name="link" index="3TtcxE" />
      </concept>
      <concept id="1228341669568" name="jetbrains.mps.lang.smodel.structure.Node_DetachOperation" flags="nn" index="3YRAZt" />
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
    <language id="83888646-71ce-4f1c-9c53-c54016f6ad4f" name="jetbrains.mps.baseLanguage.collections">
      <concept id="540871147943773365" name="jetbrains.mps.baseLanguage.collections.structure.SingleArgumentSequenceOperation" flags="nn" index="25WWJ4">
        <child id="540871147943773366" name="argument" index="25WWJ7" />
      </concept>
      <concept id="1160612413312" name="jetbrains.mps.baseLanguage.collections.structure.AddElementOperation" flags="nn" index="TSZUe" />
      <concept id="1176501494711" name="jetbrains.mps.baseLanguage.collections.structure.IsNotEmptyOperation" flags="nn" index="3GX2aA" />
    </language>
  </registry>
  <node concept="gl9ry" id="2CeLAhmFoil">
    <property role="TrG5h" value="ReactDemo" />
    <node concept="gmrQT" id="cqTc8JdncD" role="gmrQt">
      <ref role="3JBHV4" to="oyym:cqTc8JdjJa" resolve="Blank" />
      <node concept="2LhRxX" id="cqTc8Jdne7" role="gmrTS">
        <node concept="G4ZHx" id="cqTc8Jdne8" role="G4Vnm" />
        <node concept="2Ln$92" id="cqTc8Jgee4" role="2Ln$9p">
          <node concept="G4ZHx" id="cqTc8Jgee5" role="G4MFJ" />
          <node concept="2Lk9xs" id="cqTc8Jdnea" role="2Ln$9p">
            <property role="2KoofL" value="2vPZMAn_7Nm/plain" />
            <node concept="Xl_RD" id="cqTc8Jdnec" role="2Lk3Fj">
              <property role="Xl_RC" value="L1a" />
            </node>
          </node>
          <node concept="2Lk9xs" id="cqTc8Jgeec" role="2Ln$9p">
            <property role="2KoofL" value="2vPZMAn_7Nm/plain" />
            <node concept="Xl_RD" id="cqTc8Jgeed" role="2Lk3Fj">
              <property role="Xl_RC" value="L1b" />
            </node>
          </node>
        </node>
        <node concept="2Ln$92" id="cqTc8JhWeY" role="2Ln$9p">
          <node concept="G4ZHx" id="cqTc8JhWeZ" role="G4MFJ" />
          <node concept="2Lk9xs" id="cqTc8Jdnej" role="2Ln$9p">
            <property role="2KoofL" value="2vPZMAn_7Nm/plain" />
            <node concept="Xl_RD" id="cqTc8Jdnek" role="2Lk3Fj">
              <property role="Xl_RC" value="L2a" />
            </node>
          </node>
          <node concept="2Lk9xs" id="cqTc8JhWf3" role="2Ln$9p">
            <property role="2KoofL" value="2vPZMAn_7Nm/plain" />
            <node concept="Xl_RD" id="cqTc8JhWf4" role="2Lk3Fj">
              <property role="Xl_RC" value="L2b" />
            </node>
          </node>
        </node>
        <node concept="2Lk9xs" id="cqTc8Jdner" role="2Ln$9p">
          <property role="2KoofL" value="2vPZMAn_7Nm/plain" />
          <node concept="Xl_RD" id="cqTc8Jdnes" role="2Lk3Fj">
            <property role="Xl_RC" value="L3" />
          </node>
        </node>
      </node>
    </node>
    <node concept="gmrQT" id="2vPZMAolDxT" role="gmrQt">
      <ref role="3JBHV4" to="oyym:2vPZMAnU5R$" resolve="ReadOrEdit" />
      <node concept="2Kq$Lq" id="2vPZMAozXI7" role="gmrTS">
        <node concept="2Kq$Lj" id="2vPZMAozXI8" role="2KnKzr">
          <property role="2Kq$Li" value="mui.icons.ExpandMore" />
        </node>
        <node concept="2ZC43$" id="2vPZMAoxq$3" role="2Ln$9p">
          <node concept="2LhRxX" id="2vPZMAoxq$5" role="2Kjlbk">
            <node concept="2ZhLRL" id="2vPZMAoGW9t" role="2Ln$9p">
              <node concept="Xl_RD" id="2vPZMAoGW9F" role="2ZhLRN">
                <property role="Xl_RC" value="a" />
              </node>
              <node concept="2Ly8ie" id="2vPZMAox$ZG" role="2ZhLRM">
                <node concept="2Ly3GW" id="2vPZMAox$ZI" role="2Ly3GP">
                  <ref role="2Ly3GY" to="oyym:2vPZMAnWa4r" resolve="a" />
                  <node concept="ggAI9" id="2vPZMAox$ZM" role="2Ly3GZ" />
                </node>
              </node>
            </node>
            <node concept="2ZhLRL" id="2vPZMAoGW9S" role="2Ln$9p">
              <node concept="Xl_RD" id="2vPZMAoGW9T" role="2ZhLRN">
                <property role="Xl_RC" value="b" />
              </node>
              <node concept="2Ly8ie" id="2vPZMAoGW9U" role="2ZhLRM">
                <node concept="2Ly3GW" id="2vPZMAoGW9V" role="2Ly3GP">
                  <ref role="2Ly3GY" to="oyym:2vPZMAnWa4s" resolve="b" />
                  <node concept="ggAI9" id="2vPZMAoGW9W" role="2Ly3GZ" />
                </node>
              </node>
            </node>
            <node concept="2ZhLRL" id="2vPZMAoGWac" role="2Ln$9p">
              <node concept="Xl_RD" id="2vPZMAoGWad" role="2ZhLRN">
                <property role="Xl_RC" value="c" />
              </node>
              <node concept="2Ly8ie" id="2vPZMAoGWae" role="2ZhLRM">
                <node concept="2Ly3GW" id="2vPZMAoGWaf" role="2Ly3GP">
                  <ref role="2Ly3GY" to="oyym:2vPZMAnWa4t" resolve="c" />
                  <node concept="ggAI9" id="2vPZMAoGWag" role="2Ly3GZ" />
                </node>
              </node>
            </node>
            <node concept="G4ZHx" id="cqTc8J49IY" role="G4Vnm" />
          </node>
        </node>
        <node concept="2Lk9xs" id="2vPZMAo$R5W" role="2Kq$Ls">
          <property role="2KoofL" value="2vPZMAn_7Nn/bold" />
          <node concept="Xl_RD" id="2vPZMAo$R6b" role="2Lk3Fj">
            <property role="Xl_RC" value="Beispiel" />
          </node>
        </node>
      </node>
    </node>
    <node concept="gmrQT" id="2vPZMAnsypp" role="gmrQt">
      <ref role="3JBHV4" to="oyym:2vPZMAnpuJg" resolve="TreeNode" />
      <node concept="2LhRxX" id="cqTc8J49w0" role="gmrTS">
        <node concept="2Lilm4" id="7gSxYrNcfdk" role="2Ln$9p">
          <property role="2Lilm6" value="5" />
          <node concept="3cpWs3" id="7gSxYrNcggs" role="2Lilmp">
            <node concept="2OqwBi" id="7gSxYrNcgC$" role="3uHU7w">
              <node concept="ggAI9" id="7gSxYrNcgg$" role="2Oq$k0" />
              <node concept="3TrcHB" id="7gSxYrNcgL$" role="2OqNvi">
                <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
              </node>
            </node>
            <node concept="Xl_RD" id="7gSxYrNcfgL" role="3uHU7B">
              <property role="Xl_RC" value="Node " />
            </node>
          </node>
        </node>
        <node concept="2ZC43$" id="2vPZMAoMgLx" role="2Ln$9p">
          <node concept="2LhRxX" id="cqTc8J49mf" role="2Kjlbk">
            <node concept="2ZhLRL" id="2vPZMAoMgNu" role="2Ln$9p">
              <node concept="Xl_RD" id="2vPZMAoMgNx" role="2ZhLRN">
                <property role="Xl_RC" value="a" />
              </node>
              <node concept="2Ly8ie" id="2vPZMAoMgNC" role="2ZhLRM">
                <node concept="2Ly3GW" id="2vPZMAoMgNE" role="2Ly3GP">
                  <ref role="2Ly3GY" to="oyym:2vPZMAnR$xd" resolve="a" />
                  <node concept="ggAI9" id="7gSxYrNcSEV" role="2Ly3GZ" />
                </node>
              </node>
            </node>
            <node concept="2ZhLRL" id="2vPZMAoMh8q" role="2Ln$9p">
              <node concept="Xl_RD" id="2vPZMAoMh8r" role="2ZhLRN">
                <property role="Xl_RC" value="b" />
              </node>
              <node concept="2Ly8ie" id="2vPZMAoMh8s" role="2ZhLRM">
                <node concept="2Ly3GW" id="2vPZMAoMh8t" role="2Ly3GP">
                  <ref role="2Ly3GY" to="oyym:2vPZMAoMgd3" resolve="b" />
                  <node concept="ggAI9" id="7gSxYrNcSFm" role="2Ly3GZ" />
                </node>
              </node>
            </node>
            <node concept="G4ZHx" id="cqTc8J49mg" role="G4Vnm" />
          </node>
        </node>
        <node concept="274_3y" id="cqTc8IWbPK" role="2Ln$9p">
          <node concept="2OqwBi" id="7gSxYrNcjtB" role="274_3w">
            <node concept="2OqwBi" id="7gSxYrNch9A" role="2Oq$k0">
              <node concept="ggAI9" id="7gSxYrNch1o" role="2Oq$k0" />
              <node concept="3Tsc0h" id="7gSxYrNchiz" role="2OqNvi">
                <ref role="3TtcxE" to="oyym:2vPZMAnpuJi" resolve="children" />
              </node>
            </node>
            <node concept="3GX2aA" id="7gSxYrNclgg" role="2OqNvi" />
          </node>
          <node concept="2Kq$Lq" id="2vPZMAnF2pM" role="274_3x">
            <node concept="rrkbs" id="2vPZMAnF2qe" role="2Ln$9p">
              <property role="TrG5h" value="c" />
              <node concept="2OqwBi" id="2vPZMAnF2qf" role="rrkk9">
                <node concept="ggAI9" id="2vPZMAnF2qg" role="2Oq$k0" />
                <node concept="3Tsc0h" id="2vPZMAnF2qh" role="2OqNvi">
                  <ref role="3TtcxE" to="oyym:2vPZMAnpuJi" resolve="children" />
                </node>
              </node>
              <node concept="1nBVpq" id="2vPZMAnF2qi" role="rrkkB">
                <node concept="rqPyE" id="2vPZMAnF2qj" role="1nBVp7">
                  <ref role="rqPyD" node="2vPZMAnF2qe" resolve="c" />
                </node>
              </node>
            </node>
            <node concept="2Kq$Lj" id="2vPZMAnF2pN" role="2KnKzr">
              <property role="2Kq$Li" value="mui.icons.ExpandMore" />
            </node>
            <node concept="2Lk9xs" id="7gSxYrNcS$G" role="2Kq$Ls">
              <property role="2KoofL" value="2vPZMAn_7Nm/plain" />
              <node concept="Xl_RD" id="7gSxYrNcSBh" role="2Lk3Fj">
                <property role="Xl_RC" value="Children" />
              </node>
            </node>
          </node>
        </node>
        <node concept="G4ZHx" id="cqTc8J49w1" role="G4Vnm" />
      </node>
    </node>
    <node concept="gmrQT" id="2vPZMAmGHZh" role="gmrQt">
      <ref role="3JBHV4" to="oyym:2CeLAhmF5rC" resolve="ReactRoot" />
      <node concept="2LhRxX" id="cqTc8J48rG" role="gmrTS">
        <property role="2LhGOR" value="20px" />
        <node concept="2Lilm4" id="2vPZMAmJgxt" role="2Ln$9p">
          <property role="2Lilm6" value="3" />
          <node concept="2OqwBi" id="2vPZMAmJgF4" role="2Lilmp">
            <node concept="ggAI9" id="2vPZMAmJgzw" role="2Oq$k0" />
            <node concept="3TrcHB" id="2vPZMAmJgMw" role="2OqNvi">
              <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
            </node>
          </node>
        </node>
        <node concept="2Ln$92" id="2vPZMAmPw0_" role="2Ln$9p">
          <node concept="2Lk9xs" id="2vPZMAmPw4D" role="2Ln$9p">
            <property role="2KoofL" value="2vPZMAn_7Nm/plain" />
            <node concept="Xl_RD" id="2vPZMAmPw4K" role="2Lk3Fj">
              <property role="Xl_RC" value="Name of the thing" />
            </node>
          </node>
          <node concept="2Ly8ie" id="2vPZMAmG_uT" role="2Ln$9p">
            <node concept="2Ly3GW" id="2vPZMAmG_uV" role="2Ly3GP">
              <ref role="2Ly3GY" to="tpck:h0TrG11" resolve="name" />
              <node concept="ggAI9" id="2vPZMAmG_x3" role="2Ly3GZ" />
            </node>
          </node>
          <node concept="G4ZHx" id="cqTc8J47He" role="G4MFJ" />
        </node>
        <node concept="rrkbs" id="2vPZMAmufRw" role="2Ln$9p">
          <property role="TrG5h" value="e" />
          <node concept="2OqwBi" id="2vPZMAmug38" role="rrkk9">
            <node concept="ggAI9" id="2vPZMAmufTC" role="2Oq$k0" />
            <node concept="3Tsc0h" id="2vPZMAmuga_" role="2OqNvi">
              <ref role="3TtcxE" to="oyym:2vPZMAmue7o" resolve="elements" />
            </node>
          </node>
          <node concept="1nBVpq" id="2vPZMAnsmiE" role="rrkkB">
            <node concept="rqPyE" id="2vPZMAnsm$I" role="1nBVp7">
              <ref role="rqPyD" node="2vPZMAmufRw" resolve="e" />
            </node>
          </node>
        </node>
        <node concept="2L3P8c" id="2vPZMAmYWbs" role="2Ln$9p">
          <node concept="2L3P8y" id="2vPZMAmZ3TM" role="2L3P8e">
            <property role="2L3P8_" value="Add" />
          </node>
          <node concept="2KN1Qe" id="2vPZMAneBr9" role="2KN1Qq">
            <node concept="3clFbS" id="2vPZMAneBra" role="2KN1Q1">
              <node concept="3clFbF" id="2vPZMAnqLaB" role="3cqZAp">
                <node concept="2OqwBi" id="2vPZMAnqLaC" role="3clFbG">
                  <node concept="2OqwBi" id="2vPZMAnqLaD" role="2Oq$k0">
                    <node concept="ggAI9" id="2vPZMAnqLaE" role="2Oq$k0" />
                    <node concept="3Tsc0h" id="2vPZMAnqLaF" role="2OqNvi">
                      <ref role="3TtcxE" to="oyym:2vPZMAmue7o" resolve="elements" />
                    </node>
                  </node>
                  <node concept="TSZUe" id="2vPZMAnqLaG" role="2OqNvi">
                    <node concept="2pJPEk" id="2vPZMAnqLaH" role="25WWJ7">
                      <node concept="2pJPED" id="2vPZMAnqLaI" role="2pJPEn">
                        <ref role="2pJxaS" to="oyym:2vPZMAmue7m" resolve="Element" />
                        <node concept="2pJxcG" id="2vPZMAnqLaJ" role="2pJxcM">
                          <ref role="2pJxcJ" to="oyym:2vPZMAmue7n" resolve="label" />
                          <node concept="WxPPo" id="2vPZMAnqLaK" role="28ntcv">
                            <node concept="Xl_RD" id="2vPZMAnqLaL" role="WxPPp">
                              <property role="Xl_RC" value="added2" />
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
        <node concept="G4ZHx" id="cqTc8J48rH" role="G4Vnm" />
      </node>
    </node>
    <node concept="2rzwrF" id="2vPZMAnkzxm" role="gmrQt">
      <property role="TrG5h" value="rr" />
      <node concept="2Ln$92" id="2vPZMAnl7aU" role="2rHO5I">
        <node concept="2Lk9xs" id="2vPZMAnl7aW" role="2Ln$9p">
          <property role="2KoofL" value="2vPZMAn_7Nm/plain" />
          <node concept="3cpWs3" id="2vPZMAnl7aX" role="2Lk3Fj">
            <node concept="2OqwBi" id="2vPZMAnl7aY" role="3uHU7w">
              <node concept="2rHscw" id="2vPZMAnl7dt" role="2Oq$k0">
                <ref role="2rHscx" node="2vPZMAnkzyO" resolve="e" />
              </node>
              <node concept="2bSWHS" id="2vPZMAnl7b0" role="2OqNvi" />
            </node>
            <node concept="Xl_RD" id="2vPZMAnl7b1" role="3uHU7B">
              <property role="Xl_RC" value="Named Number " />
            </node>
          </node>
        </node>
        <node concept="2Lfa6Z" id="2vPZMAnl7b2" role="2Ln$9p" />
        <node concept="2Ly8ie" id="2vPZMAnl7b3" role="2Ln$9p">
          <node concept="2Ly3GW" id="2vPZMAnl7b4" role="2Ly3GP">
            <ref role="2Ly3GY" to="oyym:2vPZMAmue7n" resolve="label" />
            <node concept="2rHscw" id="2vPZMAnl7dJ" role="2Ly3GZ">
              <ref role="2rHscx" node="2vPZMAnkzyO" resolve="e" />
            </node>
          </node>
        </node>
        <node concept="2L3P8c" id="2vPZMAnl7b6" role="2Ln$9p">
          <node concept="2KN1Qe" id="2vPZMAnl7b8" role="2KN1Qq">
            <node concept="3clFbS" id="2vPZMAnl7b9" role="2KN1Q1">
              <node concept="3clFbF" id="2vPZMAnl7ba" role="3cqZAp">
                <node concept="2OqwBi" id="2vPZMAnl7bb" role="3clFbG">
                  <node concept="2rHscw" id="2vPZMAnl7dN" role="2Oq$k0">
                    <ref role="2rHscx" node="2vPZMAnkzyO" resolve="e" />
                  </node>
                  <node concept="3YRAZt" id="2vPZMAnl7bd" role="2OqNvi" />
                </node>
              </node>
            </node>
          </node>
          <node concept="2KPZRd" id="2vPZMAnEJvc" role="2L3P8e">
            <node concept="2Kq$Lj" id="2vPZMAnEJvg" role="2Kq$h0">
              <property role="2Kq$Li" value="mui.icons.Delete" />
            </node>
          </node>
        </node>
        <node concept="G4ZHx" id="cqTc8J47Hd" role="G4MFJ" />
      </node>
      <node concept="2rzwrA" id="2vPZMAnkzyO" role="2rHO5H">
        <property role="TrG5h" value="e" />
        <node concept="3Tqbb2" id="2vPZMAnkzyW" role="2rzwqu">
          <ref role="ehGHo" to="oyym:2vPZMAmue7m" resolve="Element" />
        </node>
      </node>
    </node>
    <node concept="gmrQT" id="2vPZMAnl6TK" role="gmrQt">
      <ref role="3JBHV4" to="oyym:2vPZMAmue7m" resolve="Element" />
      <node concept="2Ln$92" id="2vPZMAnl6TL" role="gmrTS">
        <node concept="2Lk9xs" id="2vPZMAnl6TM" role="2Ln$9p">
          <property role="2KoofL" value="2vPZMAn_7Nm/plain" />
          <node concept="3cpWs3" id="2vPZMAnl6TN" role="2Lk3Fj">
            <node concept="2OqwBi" id="2vPZMAnl6TO" role="3uHU7w">
              <node concept="ggAI9" id="2vPZMAnl6TP" role="2Oq$k0" />
              <node concept="2bSWHS" id="2vPZMAnl6TQ" role="2OqNvi" />
            </node>
            <node concept="Xl_RD" id="2vPZMAnl6TR" role="3uHU7B">
              <property role="Xl_RC" value="Number " />
            </node>
          </node>
        </node>
        <node concept="2Lfa6Z" id="2vPZMAnl6TS" role="2Ln$9p" />
        <node concept="2Ly8ie" id="2vPZMAnl6TT" role="2Ln$9p">
          <node concept="2Ly3GW" id="2vPZMAnl6TU" role="2Ly3GP">
            <ref role="2Ly3GY" to="oyym:2vPZMAmue7n" resolve="label" />
            <node concept="ggAI9" id="2vPZMAnl6TV" role="2Ly3GZ" />
          </node>
        </node>
        <node concept="2L3P8c" id="2vPZMAnl6TW" role="2Ln$9p">
          <node concept="2KPZRd" id="2vPZMAnEJvw" role="2L3P8e">
            <node concept="2Kq$Lj" id="2vPZMAnDoXN" role="2Kq$h0">
              <property role="2Kq$Li" value="mui.icons.Delete" />
            </node>
          </node>
          <node concept="2KN1Qe" id="2vPZMAnl6TY" role="2KN1Qq">
            <node concept="3clFbS" id="2vPZMAnl6TZ" role="2KN1Q1">
              <node concept="3clFbF" id="2vPZMAnl6U0" role="3cqZAp">
                <node concept="2OqwBi" id="2vPZMAnl6U1" role="3clFbG">
                  <node concept="ggAI9" id="2vPZMAnl6U2" role="2Oq$k0" />
                  <node concept="3YRAZt" id="2vPZMAnl6U3" role="2OqNvi" />
                </node>
              </node>
            </node>
          </node>
        </node>
        <node concept="G4ZHx" id="cqTc8J3C99" role="G4MFJ" />
      </node>
    </node>
  </node>
</model>

