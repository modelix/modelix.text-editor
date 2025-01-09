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
  </imports>
  <registry>
    <language id="67accce2-9676-4728-9e9c-8b15ea30d924" name="org.modelix.mps.react">
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
      <concept id="1068581242875" name="jetbrains.mps.baseLanguage.structure.PlusExpression" flags="nn" index="3cpWs3" />
      <concept id="1081773326031" name="jetbrains.mps.baseLanguage.structure.BinaryOperation" flags="nn" index="3uHJSO">
        <child id="1081773367579" name="rightExpression" index="3uHU7w" />
        <child id="1081773367580" name="leftExpression" index="3uHU7B" />
      </concept>
    </language>
    <language id="09a61cec-0c2d-4a90-b590-25e493b12f35" name="org.modelix.mps.react.muicomponents">
      <concept id="2879488090861821590" name="org.modelix.mps.react.muicomponents.structure.Space" flags="ng" index="2Lfa6Z" />
      <concept id="2879488090860324692" name="org.modelix.mps.react.muicomponents.structure.VerticalLayout" flags="ng" index="2LhRxX">
        <property id="2879488090860368414" name="gap" index="2LhGOR" />
      </concept>
      <concept id="2879488090860989101" name="org.modelix.mps.react.muicomponents.structure.Header" flags="ng" index="2Lilm4">
        <property id="2879488090860989103" name="level" index="2Lilm6" />
        <child id="2879488090860989104" name="text" index="2Lilmp" />
      </concept>
      <concept id="2879488090859464565" name="org.modelix.mps.react.muicomponents.structure.Label" flags="ng" index="2Lk9xs">
        <child id="2879488090859488762" name="value" index="2Lk3Fj" />
      </concept>
      <concept id="2879488090859879787" name="org.modelix.mps.react.muicomponents.structure.HorizontalLayout" flags="ng" index="2Ln$92" />
      <concept id="2879488090859879790" name="org.modelix.mps.react.muicomponents.structure.IMUILayoutComponent" flags="ngI" index="2Ln$97">
        <child id="2879488090859879792" name="children" index="2Ln$9p" />
      </concept>
      <concept id="2879488090856866837" name="org.modelix.mps.react.muicomponents.structure.NodePropRef" flags="ng" index="2Ly3GW">
        <reference id="2879488090856866839" name="property" index="2Ly3GY" />
        <child id="2879488090856866838" name="node" index="2Ly3GZ" />
      </concept>
      <concept id="2879488090856848295" name="org.modelix.mps.react.muicomponents.structure.TextField" flags="ng" index="2Ly8ie">
        <child id="2879488090856866844" name="data" index="2Ly3GP" />
      </concept>
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="1179168000618" name="jetbrains.mps.lang.smodel.structure.Node_GetIndexInParentOperation" flags="nn" index="2bSWHS" />
      <concept id="1138056022639" name="jetbrains.mps.lang.smodel.structure.SPropertyAccess" flags="nn" index="3TrcHB">
        <reference id="1138056395725" name="property" index="3TsBF5" />
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
  <node concept="gl9ry" id="2CeLAhmFoil">
    <property role="TrG5h" value="ReactDemo" />
    <node concept="gmrQT" id="2vPZMAmGHZh" role="gmrQt">
      <ref role="3JBHV4" to="oyym:2CeLAhmF5rC" resolve="ReactRoot" />
      <node concept="2LhRxX" id="2vPZMAmGHZk" role="gmrTS">
        <property role="2LhGOR" value="20px" />
        <node concept="2Lilm4" id="2vPZMAmJgxt" role="2Ln$9p">
          <property role="2Lilm6" value="2" />
          <node concept="2OqwBi" id="2vPZMAmJgF4" role="2Lilmp">
            <node concept="ggAI9" id="2vPZMAmJgzw" role="2Oq$k0" />
            <node concept="3TrcHB" id="2vPZMAmJgMw" role="2OqNvi">
              <ref role="3TsBF5" to="oyym:2u4zLgG12gd" resolve="name" />
            </node>
          </node>
        </node>
        <node concept="2Ln$92" id="2vPZMAmPw0_" role="2Ln$9p">
          <node concept="2Lk9xs" id="2vPZMAmPw4D" role="2Ln$9p">
            <node concept="Xl_RD" id="2vPZMAmPw4K" role="2Lk3Fj">
              <property role="Xl_RC" value="Name of the thing" />
            </node>
          </node>
          <node concept="2Ly8ie" id="2vPZMAmG_uT" role="2Ln$9p">
            <node concept="2Ly3GW" id="2vPZMAmG_uV" role="2Ly3GP">
              <ref role="2Ly3GY" to="oyym:2u4zLgG12gd" resolve="name" />
              <node concept="ggAI9" id="2vPZMAmG_x3" role="2Ly3GZ" />
            </node>
          </node>
        </node>
        <node concept="rrkbs" id="2vPZMAmufRw" role="2Ln$9p">
          <property role="TrG5h" value="e" />
          <node concept="2OqwBi" id="2vPZMAmug38" role="rrkk9">
            <node concept="ggAI9" id="2vPZMAmufTC" role="2Oq$k0" />
            <node concept="3Tsc0h" id="2vPZMAmuga_" role="2OqNvi">
              <ref role="3TtcxE" to="oyym:2vPZMAmue7o" resolve="elements" />
            </node>
          </node>
          <node concept="1nBVpq" id="2vPZMAmuMyL" role="rrkkB">
            <node concept="rqPyE" id="2vPZMAmuM$B" role="1nBVp7">
              <ref role="rqPyD" node="2vPZMAmufRw" resolve="e" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="gmrQT" id="2vPZMAmuLYE" role="gmrQt">
      <ref role="3JBHV4" to="oyym:2vPZMAmue7m" resolve="Element" />
      <node concept="2Ln$92" id="2vPZMAmF08v" role="gmrTS">
        <node concept="2Lk9xs" id="2vPZMAmDAjg" role="2Ln$9p">
          <node concept="3cpWs3" id="2vPZMAmD_ej" role="2Lk3Fj">
            <node concept="2OqwBi" id="2vPZMAmD__J" role="3uHU7w">
              <node concept="ggAI9" id="2vPZMAmD_em" role="2Oq$k0" />
              <node concept="2bSWHS" id="2vPZMAmDA1Z" role="2OqNvi" />
            </node>
            <node concept="Xl_RD" id="2vPZMAmD$ey" role="3uHU7B">
              <property role="Xl_RC" value="Number " />
            </node>
          </node>
        </node>
        <node concept="2Lfa6Z" id="2vPZMAmMuy0" role="2Ln$9p" />
        <node concept="2Ly8ie" id="2vPZMAmBbY7" role="2Ln$9p">
          <node concept="2Ly3GW" id="2vPZMAmBbY8" role="2Ly3GP">
            <ref role="2Ly3GY" to="oyym:2vPZMAmue7n" resolve="label" />
            <node concept="ggAI9" id="2vPZMAmBbY9" role="2Ly3GZ" />
          </node>
        </node>
      </node>
    </node>
  </node>
</model>

