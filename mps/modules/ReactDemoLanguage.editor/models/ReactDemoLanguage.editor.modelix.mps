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
    <import index="wrwm" ref="r:44d56dac-a204-4926-8f4e-cd6684c153aa(ReactDemoLanguage.behavior)" implicit="true" />
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
      <concept id="5355184975888307501" name="org.modelix.mps.react.structure.StateVariable" flags="ng" index="2o1qlL">
        <child id="5355184975888310505" name="initializer" index="2o1p2P" />
        <child id="5355184975888307510" name="type" index="2o1qlE" />
      </concept>
      <concept id="5355184975888424302" name="org.modelix.mps.react.structure.StateVariableReference" flags="ng" index="2o1YOM">
        <reference id="5355184975888424309" name="decl" index="2o1YOD" />
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
      <concept id="5355184975881978516" name="org.modelix.mps.react.structure.CallNamedRenderer" flags="ng" index="2rDjb8">
        <reference id="5355184975881978525" name="renderer" index="2rDjb1" />
        <child id="5355184975881978527" name="parameterValues" index="2rDjb3" />
      </concept>
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
      <concept id="793519207835900435" name="org.modelix.mps.react.structure.EmptyContent" flags="ng" index="3ywjYg" />
    </language>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1197027756228" name="jetbrains.mps.baseLanguage.structure.DotExpression" flags="nn" index="2OqwBi">
        <child id="1197027771414" name="operand" index="2Oq$k0" />
        <child id="1197027833540" name="operation" index="2OqNvi" />
      </concept>
      <concept id="1070475926800" name="jetbrains.mps.baseLanguage.structure.StringLiteral" flags="nn" index="Xl_RD">
        <property id="1070475926801" name="value" index="Xl_RC" />
      </concept>
      <concept id="1070534058343" name="jetbrains.mps.baseLanguage.structure.NullLiteral" flags="nn" index="10Nm6u" />
      <concept id="1225271177708" name="jetbrains.mps.baseLanguage.structure.StringType" flags="in" index="17QB3L" />
      <concept id="1068580123155" name="jetbrains.mps.baseLanguage.structure.ExpressionStatement" flags="nn" index="3clFbF">
        <child id="1068580123156" name="expression" index="3clFbG" />
      </concept>
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
      <concept id="1068581242875" name="jetbrains.mps.baseLanguage.structure.PlusExpression" flags="nn" index="3cpWs3" />
      <concept id="1204053956946" name="jetbrains.mps.baseLanguage.structure.IMethodCall" flags="ngI" index="1ndlxa">
        <reference id="1068499141037" name="baseMethodDeclaration" index="37wK5l" />
        <child id="1068499141038" name="actualArgument" index="37wK5m" />
      </concept>
      <concept id="1081773326031" name="jetbrains.mps.baseLanguage.structure.BinaryOperation" flags="nn" index="3uHJSO">
        <child id="1081773367579" name="rightExpression" index="3uHU7w" />
        <child id="1081773367580" name="leftExpression" index="3uHU7B" />
      </concept>
      <concept id="1073239437375" name="jetbrains.mps.baseLanguage.structure.NotEqualsExpression" flags="nn" index="3y3z36" />
      <concept id="1163668896201" name="jetbrains.mps.baseLanguage.structure.TernaryOperatorExpression" flags="nn" index="3K4zz7">
        <child id="1163668914799" name="condition" index="3K4Cdx" />
        <child id="1163668922816" name="ifTrue" index="3K4E3e" />
        <child id="1163668934364" name="ifFalse" index="3K4GZi" />
      </concept>
    </language>
    <language id="09a61cec-0c2d-4a90-b590-25e493b12f35" name="org.modelix.mps.react.muicomponents">
      <concept id="3230484732399569315" name="org.modelix.mps.react.muicomponents.structure.TreeNode" flags="ng" index="2yaNks">
        <child id="3230484732399576457" name="childrenExpr" index="2yaL$Q" />
        <child id="3230484732399575270" name="labelExpr" index="2yaLLp" />
        <child id="3230484732399572897" name="idExpr" index="2yaMGu" />
        <child id="3230484732411771409" name="typography" index="2zrgqI" />
      </concept>
      <concept id="3230484732402340359" name="org.modelix.mps.react.muicomponents.structure.TreeView" flags="ng" index="2zZIUS">
        <child id="3230484732402373646" name="selectionStateTracker" index="2zZAyL" />
      </concept>
      <concept id="223742654172176291" name="org.modelix.mps.react.muicomponents.structure.Alignment" flags="ng" index="G4ZHx" />
      <concept id="223742654177875992" name="org.modelix.mps.react.muicomponents.structure.Typography" flags="ng" index="GuJNq">
        <property id="793519207812312126" name="style" index="3z6gAX" />
        <property id="793519207812693662" name="size" index="3z7dGt" />
        <child id="223742654177875995" name="color" index="GuJNp" />
      </concept>
      <concept id="223742654177875993" name="org.modelix.mps.react.muicomponents.structure.Color" flags="ng" index="GuJNr">
        <property id="223742654177875994" name="value" index="GuJNo" />
      </concept>
      <concept id="2879488090881917716" name="org.modelix.mps.react.muicomponents.structure.State" flags="ng" index="2K2vKX">
        <child id="2879488090881917721" name="variables" index="2K2vKK" />
      </concept>
      <concept id="2879488090877505016" name="org.modelix.mps.react.muicomponents.structure.Box" flags="ng" index="2Kjlbh">
        <child id="793519207830300527" name="borderAndShade" index="3ybSbG" />
      </concept>
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
        <child id="793519207814460550" name="typography" index="3zet45" />
      </concept>
      <concept id="2879488090859464565" name="org.modelix.mps.react.muicomponents.structure.Label" flags="ng" index="2Lk9xs">
        <child id="2879488090859488762" name="value" index="2Lk3Fj" />
        <child id="793519207812820950" name="typography" index="3z8GDl" />
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
      <concept id="793519207829949608" name="org.modelix.mps.react.muicomponents.structure.BorderAndShade" flags="ng" index="3y96$F">
        <property id="793519207829956770" name="padding" index="3y94Ox" />
        <property id="793519207831838791" name="margin" index="3yhKn4" />
        <child id="793519207829962702" name="shadeColor" index="3y95Dd" />
      </concept>
      <concept id="793519207830189068" name="org.modelix.mps.react.muicomponents.structure.BorderAndShadeRef" flags="ng" index="3yat6f">
        <reference id="793519207830191441" name="borderAndShade" index="3yatzi" />
      </concept>
      <concept id="793519207813113972" name="org.modelix.mps.react.muicomponents.structure.TypographyRef" flags="ng" index="3z9kRR">
        <reference id="793519207813113973" name="typography" index="3z9kRQ" />
      </concept>
      <concept id="2646768005435875715" name="org.modelix.mps.react.muicomponents.structure.Checkbox" flags="ng" index="1EpdjT" />
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
      <concept id="1177026924588" name="jetbrains.mps.lang.smodel.structure.RefConcept_Reference" flags="nn" index="chp4Y">
        <reference id="1177026940964" name="conceptDeclaration" index="cht4Q" />
      </concept>
      <concept id="1138411891628" name="jetbrains.mps.lang.smodel.structure.SNodeOperation" flags="nn" index="eCIE_">
        <child id="1144104376918" name="parameter" index="1xVPHs" />
      </concept>
      <concept id="1179409122411" name="jetbrains.mps.lang.smodel.structure.Node_ConceptMethodCall" flags="nn" index="2qgKlT" />
      <concept id="1171305280644" name="jetbrains.mps.lang.smodel.structure.Node_GetDescendantsOperation" flags="nn" index="2Rf3mk" />
      <concept id="1144101972840" name="jetbrains.mps.lang.smodel.structure.OperationParm_Concept" flags="ng" index="1xMEDy">
        <child id="1207343664468" name="conceptArgument" index="ri$Ld" />
      </concept>
      <concept id="1138055754698" name="jetbrains.mps.lang.smodel.structure.SNodeType" flags="in" index="3Tqbb2">
        <reference id="1138405853777" name="concept" index="ehGHo" />
      </concept>
      <concept id="1138056022639" name="jetbrains.mps.lang.smodel.structure.SPropertyAccess" flags="nn" index="3TrcHB">
        <reference id="1138056395725" name="property" index="3TsBF5" />
      </concept>
      <concept id="1138056143562" name="jetbrains.mps.lang.smodel.structure.SLinkAccess" flags="nn" index="3TrEf2">
        <reference id="1138056516764" name="link" index="3Tt5mk" />
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
      <concept id="1162935959151" name="jetbrains.mps.baseLanguage.collections.structure.GetSizeOperation" flags="nn" index="34oBXx" />
      <concept id="1176501494711" name="jetbrains.mps.baseLanguage.collections.structure.IsNotEmptyOperation" flags="nn" index="3GX2aA" />
    </language>
  </registry>
  <node concept="gl9ry" id="2CeLAhmFoil">
    <property role="TrG5h" value="ReactDemo" />
    <node concept="GuJNq" id="G39ofCcQdA" role="gmrQt">
      <property role="3z6gAX" value="2vPZMAn_7Nn/bold" />
      <property role="TrG5h" value="label" />
    </node>
    <node concept="GuJNq" id="G39ofCeJ0i" role="gmrQt">
      <property role="3z6gAX" value="2vPZMAn_7Nn/bold" />
      <property role="TrG5h" value="accTitle" />
      <node concept="GuJNr" id="G39ofC$PXV" role="GuJNp">
        <property role="GuJNo" value="cccccc" />
      </node>
    </node>
    <node concept="GuJNq" id="G39ofCDoe4" role="gmrQt">
      <property role="3z6gAX" value="2vPZMAn_7Nn/bold" />
      <property role="TrG5h" value="title" />
      <property role="3z7dGt" value="20px" />
      <node concept="GuJNr" id="G39ofCDoe5" role="GuJNp">
        <property role="GuJNo" value="ffffff" />
      </node>
    </node>
    <node concept="GuJNq" id="2NkZbYfIWum" role="gmrQt">
      <property role="TrG5h" value="tree" />
      <property role="3z6gAX" value="2vPZMAn_7Nn/bold" />
      <node concept="GuJNr" id="2NkZbYfIWun" role="GuJNp">
        <property role="GuJNo" value="777777" />
      </node>
    </node>
    <node concept="3ywjYg" id="G39ofDxW$3" role="gmrQt" />
    <node concept="3y96$F" id="G39ofDajJ8" role="gmrQt">
      <property role="TrG5h" value="greyBox" />
      <property role="3y94Ox" value="5px 20px" />
      <node concept="GuJNr" id="G39ofDaHwS" role="3y95Dd">
        <property role="GuJNo" value="cccccc" />
      </node>
    </node>
    <node concept="3y96$F" id="G39ofDbEQO" role="gmrQt">
      <property role="TrG5h" value="default" />
      <property role="3y94Ox" value="5px 20px" />
      <property role="3yhKn4" value="10px 10px" />
    </node>
    <node concept="3y96$F" id="2NkZbYfBifG" role="gmrQt">
      <property role="TrG5h" value="inset" />
      <property role="3yhKn4" value="10px 10px" />
    </node>
    <node concept="3ywjYg" id="G39ofDxX99" role="gmrQt" />
    <node concept="gmrQT" id="2iVdnDeSIrm" role="gmrQt">
      <ref role="3JBHV4" to="oyym:2iVdnDeS_Ov" resolve="WidgetTest" />
      <node concept="2LhRxX" id="2iVdnDeSJ5l" role="gmrTS">
        <node concept="G4ZHx" id="2iVdnDeSJ5m" role="G4Vnm" />
        <node concept="2Ly8ie" id="2iVdnDeSJoi" role="2Ln$9p">
          <node concept="2Ly3GW" id="2iVdnDeSJoj" role="2Ly3GP">
            <ref role="2Ly3GY" to="oyym:2iVdnDeSAqk" resolve="text" />
            <node concept="ggAI9" id="2iVdnDeSJFf" role="2Ly3GZ" />
          </node>
        </node>
        <node concept="1EpdjT" id="1Lliyakr07C" role="2Ln$9p">
          <node concept="2Ly3GW" id="1Lliyakr07E" role="2Ly3GP">
            <ref role="2Ly3GY" to="oyym:2iVdnDeSBj3" resolve="bool" />
            <node concept="ggAI9" id="1Lliyakr0qs" role="2Ly3GZ" />
          </node>
        </node>
      </node>
    </node>
    <node concept="3ywjYg" id="2iVdnDeSI4z" role="gmrQt" />
    <node concept="gmrQT" id="2NkZbYes9wI" role="gmrQt">
      <ref role="3JBHV4" to="oyym:2NkZbYerWzG" resolve="NewTreeItem" />
      <node concept="2yaNks" id="2NkZbYf1JnU" role="gmrTS">
        <node concept="2OqwBi" id="2NkZbYf2cQ$" role="2yaMGu">
          <node concept="ggAI9" id="2NkZbYf2cGj" role="2Oq$k0" />
          <node concept="2qgKlT" id="6r1E9h1uMTc" role="2OqNvi">
            <ref role="37wK5l" to="wrwm:6r1E9h1u$O_" resolve="id" />
          </node>
        </node>
        <node concept="2OqwBi" id="2NkZbYf2Byr" role="2yaLLp">
          <node concept="ggAI9" id="2NkZbYf2Bo7" role="2Oq$k0" />
          <node concept="2qgKlT" id="6r1E9h1uNqQ" role="2OqNvi">
            <ref role="37wK5l" to="wrwm:6r1E9h1uLsU" resolve="label" />
          </node>
        </node>
        <node concept="2OqwBi" id="2NkZbYf2CpZ" role="2yaL$Q">
          <node concept="ggAI9" id="2NkZbYf2Chu" role="2Oq$k0" />
          <node concept="3Tsc0h" id="2NkZbYf2CQa" role="2OqNvi">
            <ref role="3TtcxE" to="oyym:2NkZbYerZtr" resolve="children" />
          </node>
        </node>
        <node concept="3z9kRR" id="2NkZbYfIY0$" role="2zrgqI">
          <ref role="3z9kRQ" node="2NkZbYfIWum" resolve="tree" />
        </node>
      </node>
    </node>
    <node concept="3ywjYg" id="2NkZbYes9e7" role="gmrQt" />
    <node concept="gmrQT" id="G39ofDDoLq" role="gmrQt">
      <ref role="3JBHV4" to="oyym:G39ofDDj5m" resolve="NewTree" />
      <node concept="2K2vKX" id="2NkZbYelUlb" role="gmrTS">
        <node concept="2Ln$92" id="7UgNnd6lmB1" role="2Ln$9p">
          <node concept="G4ZHx" id="7UgNnd6lmB2" role="G4MFJ" />
          <node concept="2Kjlbh" id="2NkZbYfBk86" role="2Ln$9p">
            <node concept="2LhRxX" id="2NkZbYeXy7R" role="2Kjlbk">
              <node concept="G4ZHx" id="2NkZbYeXy7S" role="G4Vnm" />
              <node concept="2Kjlbh" id="2NkZbYeXz5X" role="2Ln$9p">
                <node concept="3yat6f" id="2NkZbYeXz5Z" role="3ybSbG">
                  <ref role="3yatzi" node="G39ofDajJ8" resolve="greyBox" />
                </node>
                <node concept="2Lk9xs" id="2NkZbYeXzFx" role="2Kjlbk">
                  <node concept="3z9kRR" id="2NkZbYeXzFy" role="3z8GDl">
                    <ref role="3z9kRQ" node="G39ofCDoe4" resolve="title" />
                  </node>
                  <node concept="3cpWs3" id="6r1E9h1EIBC" role="2Lk3Fj">
                    <node concept="Xl_RD" id="6r1E9h1EIBF" role="3uHU7w">
                      <property role="Xl_RC" value=" items" />
                    </node>
                    <node concept="3cpWs3" id="6r1E9h1EzoA" role="3uHU7B">
                      <node concept="Xl_RD" id="2NkZbYeXzY8" role="3uHU7B">
                        <property role="Xl_RC" value="Tree with " />
                      </node>
                      <node concept="2OqwBi" id="6r1E9h1EBvU" role="3uHU7w">
                        <node concept="2OqwBi" id="6r1E9h1E$3F" role="2Oq$k0">
                          <node concept="ggAI9" id="6r1E9h1EzFA" role="2Oq$k0" />
                          <node concept="2Rf3mk" id="6r1E9h1E$vz" role="2OqNvi">
                            <node concept="1xMEDy" id="6r1E9h1E$v_" role="1xVPHs">
                              <node concept="chp4Y" id="6r1E9h1E_2h" role="ri$Ld">
                                <ref role="cht4Q" to="oyym:2NkZbYerWzG" resolve="NewTreeItem" />
                              </node>
                            </node>
                          </node>
                        </node>
                        <node concept="34oBXx" id="6r1E9h1EEfX" role="2OqNvi" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="2zZIUS" id="2NkZbYfb6$k" role="2Ln$9p">
                <node concept="2o1YOM" id="2NkZbYfb6$m" role="2zZAyL">
                  <ref role="2o1YOD" node="2NkZbYelUCj" resolve="selected" />
                </node>
                <node concept="1nBVpq" id="2NkZbYfb79B" role="2Kjlbk">
                  <node concept="2OqwBi" id="2NkZbYfb7$p" role="1nBVp7">
                    <node concept="ggAI9" id="2NkZbYfb7sb" role="2Oq$k0" />
                    <node concept="3TrEf2" id="2NkZbYfb89J" role="2OqNvi">
                      <ref role="3Tt5mk" to="oyym:2NkZbYerYSm" resolve="root" />
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="3yat6f" id="2NkZbYfBkr_" role="3ybSbG">
              <ref role="3yatzi" node="2NkZbYfBifG" resolve="inset" />
            </node>
          </node>
          <node concept="2Kjlbh" id="2NkZbYfBkIe" role="2Ln$9p">
            <node concept="2LhRxX" id="2NkZbYeSQpf" role="2Kjlbk">
              <node concept="G4ZHx" id="2NkZbYeSQpg" role="G4Vnm" />
              <node concept="2Kjlbh" id="2NkZbYeVdbO" role="2Ln$9p">
                <node concept="2Lk9xs" id="2NkZbYeSR06" role="2Kjlbk">
                  <node concept="3z9kRR" id="2NkZbYeSR07" role="3z8GDl">
                    <ref role="3z9kRQ" node="G39ofCDoe4" resolve="title" />
                  </node>
                  <node concept="3K4zz7" id="2NkZbYfG6k0" role="2Lk3Fj">
                    <node concept="2o1YOM" id="2NkZbYfG6VI" role="3K4E3e">
                      <ref role="2o1YOD" node="2NkZbYelUCj" resolve="selected" />
                    </node>
                    <node concept="Xl_RD" id="2NkZbYfG7fs" role="3K4GZi" />
                    <node concept="3y3z36" id="2NkZbYfG5fV" role="3K4Cdx">
                      <node concept="10Nm6u" id="2NkZbYfG6iT" role="3uHU7w" />
                      <node concept="2o1YOM" id="2NkZbYeSSTO" role="3uHU7B">
                        <ref role="2o1YOD" node="2NkZbYelUCj" resolve="selected" />
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="3yat6f" id="2NkZbYeVdzw" role="3ybSbG">
                  <ref role="3yatzi" node="G39ofDajJ8" resolve="greyBox" />
                </node>
              </node>
              <node concept="274_3y" id="2NkZbYe$Am8" role="2Ln$9p">
                <node concept="3y3z36" id="2NkZbYe$B4c" role="274_3w">
                  <node concept="10Nm6u" id="2NkZbYe$Bxv" role="3uHU7w" />
                  <node concept="2o1YOM" id="2NkZbYe$ADt" role="3uHU7B">
                    <ref role="2o1YOD" node="2NkZbYelUCj" resolve="selected" />
                  </node>
                </node>
                <node concept="2Kjlbh" id="2NkZbYfG3_k" role="274_3x">
                  <node concept="2rDjb8" id="2NkZbYeylyX" role="2Kjlbk">
                    <ref role="2rDjb1" node="2NkZbYeutqw" resolve="edit" />
                    <node concept="2OqwBi" id="2NkZbYeubwB" role="2rDjb3">
                      <node concept="ggAI9" id="2NkZbYeubkk" role="2Oq$k0" />
                      <node concept="2qgKlT" id="2NkZbYeus7r" role="2OqNvi">
                        <ref role="37wK5l" to="wrwm:2NkZbYeucg$" resolve="itemByID" />
                        <node concept="2o1YOM" id="2NkZbYeKxC9" role="37wK5m">
                          <ref role="2o1YOD" node="2NkZbYelUCj" resolve="selected" />
                        </node>
                      </node>
                    </node>
                  </node>
                  <node concept="3yat6f" id="2NkZbYfG3T3" role="3ybSbG">
                    <ref role="3yatzi" node="2NkZbYfBifG" resolve="inset" />
                  </node>
                </node>
              </node>
            </node>
            <node concept="3yat6f" id="2NkZbYfBl1G" role="3ybSbG">
              <ref role="3yatzi" node="2NkZbYfBifG" resolve="inset" />
            </node>
          </node>
        </node>
        <node concept="2o1qlL" id="2NkZbYelUCj" role="2K2vKK">
          <property role="TrG5h" value="selected" />
          <node concept="17QB3L" id="2NkZbYeKvRD" role="2o1qlE" />
          <node concept="10Nm6u" id="2NkZbYe$CI9" role="2o1p2P" />
        </node>
      </node>
    </node>
    <node concept="3ywjYg" id="G39ofDDouN" role="gmrQt" />
    <node concept="2rzwrF" id="2NkZbYeutqw" role="gmrQt">
      <property role="TrG5h" value="edit" />
      <node concept="2rzwrA" id="2NkZbYeuu0i" role="2rHO5H">
        <property role="TrG5h" value="n" />
        <node concept="3Tqbb2" id="2NkZbYeuvDE" role="2rzwqu">
          <ref role="ehGHo" to="oyym:2NkZbYerWzG" resolve="NewTreeItem" />
        </node>
      </node>
      <node concept="2ZC43$" id="2NkZbYeuwO0" role="2rHO5I">
        <node concept="2LhRxX" id="2NkZbYeu_db" role="2Kjlbk">
          <node concept="G4ZHx" id="2NkZbYeu_dc" role="G4Vnm" />
          <node concept="2ZhLRL" id="2NkZbYeuyQ0" role="2Ln$9p">
            <node concept="Xl_RD" id="2NkZbYeuz8H" role="2ZhLRN">
              <property role="Xl_RC" value="a" />
            </node>
            <node concept="2Ly8ie" id="2NkZbYeuzrm" role="2ZhLRM">
              <node concept="2Ly3GW" id="2NkZbYeuzro" role="2Ly3GP">
                <ref role="2Ly3GY" to="oyym:2NkZbYerXrE" resolve="a" />
                <node concept="2rHscw" id="2NkZbYeuzHY" role="2Ly3GZ">
                  <ref role="2rHscx" node="2NkZbYeuu0i" resolve="n" />
                </node>
              </node>
            </node>
          </node>
          <node concept="2ZhLRL" id="2NkZbYeu_vT" role="2Ln$9p">
            <node concept="Xl_RD" id="2NkZbYeu_vU" role="2ZhLRN">
              <property role="Xl_RC" value="b" />
            </node>
            <node concept="2Ly8ie" id="2NkZbYeu_vV" role="2ZhLRM">
              <node concept="2Ly3GW" id="2NkZbYeu_vW" role="2Ly3GP">
                <ref role="2Ly3GY" to="oyym:2NkZbYerY0J" resolve="b" />
                <node concept="2rHscw" id="2NkZbYeu_vX" role="2Ly3GZ">
                  <ref role="2rHscx" node="2NkZbYeuu0i" resolve="n" />
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="3ywjYg" id="2NkZbYeut64" role="gmrQt" />
    <node concept="gmrQT" id="2vPZMAnsypp" role="gmrQt">
      <ref role="3JBHV4" to="oyym:2vPZMAnpuJg" resolve="TreeNode" />
      <node concept="2LhRxX" id="cqTc8J49w0" role="gmrTS">
        <node concept="2Kjlbh" id="G39ofCTwdv" role="2Ln$9p">
          <node concept="2Lilm4" id="7gSxYrNcfdk" role="2Kjlbk">
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
            <node concept="3z9kRR" id="G39ofCf_dC" role="3zet45">
              <ref role="3z9kRQ" node="G39ofCDoe4" resolve="title" />
            </node>
          </node>
          <node concept="3yat6f" id="G39ofDb$NC" role="3ybSbG">
            <ref role="3yatzi" node="G39ofDajJ8" resolve="greyBox" />
          </node>
        </node>
        <node concept="2Kjlbh" id="G39ofDy0Qk" role="2Ln$9p">
          <node concept="3yat6f" id="G39ofDy0Qm" role="3ybSbG">
            <ref role="3yatzi" node="G39ofDbEQO" resolve="default" />
          </node>
          <node concept="2ZC43$" id="2vPZMAoMgLx" role="2Kjlbk">
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
              <node concept="Xl_RD" id="7gSxYrNcSBh" role="2Lk3Fj">
                <property role="Xl_RC" value="Children" />
              </node>
              <node concept="3z9kRR" id="G39ofCeJ1J" role="3z8GDl">
                <ref role="3z9kRQ" node="G39ofCeJ0i" resolve="accTitle" />
              </node>
            </node>
          </node>
        </node>
        <node concept="G4ZHx" id="cqTc8J49w1" role="G4Vnm" />
      </node>
    </node>
    <node concept="3ywjYg" id="G39ofDy0ep" role="gmrQt" />
    <node concept="gmrQT" id="cqTc8JdncD" role="gmrQt">
      <ref role="3JBHV4" to="oyym:cqTc8JdjJa" resolve="Blank" />
      <node concept="2LhRxX" id="cqTc8Jdne7" role="gmrTS">
        <node concept="G4ZHx" id="cqTc8Jdne8" role="G4Vnm" />
        <node concept="2Ln$92" id="cqTc8Jgee4" role="2Ln$9p">
          <node concept="G4ZHx" id="cqTc8Jgee5" role="G4MFJ" />
          <node concept="2Lk9xs" id="cqTc8Jdnea" role="2Ln$9p">
            <node concept="Xl_RD" id="cqTc8Jdnec" role="2Lk3Fj">
              <property role="Xl_RC" value="L1a" />
            </node>
            <node concept="3z9kRR" id="G39ofCcQdG" role="3z8GDl">
              <ref role="3z9kRQ" node="G39ofCcQdA" resolve="label" />
            </node>
          </node>
          <node concept="2Lk9xs" id="cqTc8Jgeec" role="2Ln$9p">
            <node concept="Xl_RD" id="cqTc8Jgeed" role="2Lk3Fj">
              <property role="Xl_RC" value="L1b" />
            </node>
            <node concept="3z9kRR" id="G39ofCeJ0d" role="3z8GDl">
              <ref role="3z9kRQ" node="G39ofCcQdA" resolve="label" />
            </node>
          </node>
        </node>
        <node concept="2Ln$92" id="cqTc8JhWeY" role="2Ln$9p">
          <node concept="G4ZHx" id="cqTc8JhWeZ" role="G4MFJ" />
          <node concept="2Lk9xs" id="cqTc8Jdnej" role="2Ln$9p">
            <node concept="Xl_RD" id="cqTc8Jdnek" role="2Lk3Fj">
              <property role="Xl_RC" value="L2a" />
            </node>
            <node concept="3z9kRR" id="G39ofCeJ0e" role="3z8GDl">
              <ref role="3z9kRQ" node="G39ofCcQdA" resolve="label" />
            </node>
          </node>
          <node concept="2Lk9xs" id="cqTc8JhWf3" role="2Ln$9p">
            <node concept="Xl_RD" id="cqTc8JhWf4" role="2Lk3Fj">
              <property role="Xl_RC" value="L2b" />
            </node>
            <node concept="3z9kRR" id="G39ofCeJ0f" role="3z8GDl">
              <ref role="3z9kRQ" node="G39ofCcQdA" resolve="label" />
            </node>
          </node>
        </node>
        <node concept="2Lk9xs" id="cqTc8Jdner" role="2Ln$9p">
          <node concept="Xl_RD" id="cqTc8Jdnes" role="2Lk3Fj">
            <property role="Xl_RC" value="L3" />
          </node>
          <node concept="3z9kRR" id="G39ofCeJ0h" role="3z8GDl">
            <ref role="3z9kRQ" node="G39ofCcQdA" resolve="label" />
          </node>
        </node>
      </node>
    </node>
    <node concept="3ywjYg" id="G39ofDxXrK" role="gmrQt" />
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
          <node concept="Xl_RD" id="2vPZMAo$R6b" role="2Lk3Fj">
            <property role="Xl_RC" value="Beispiel" />
          </node>
          <node concept="3z9kRR" id="G39ofCeJ1I" role="3z8GDl">
            <ref role="3z9kRQ" node="G39ofCeJ0i" resolve="accTitll" />
          </node>
        </node>
      </node>
    </node>
    <node concept="3ywjYg" id="G39ofDxXIn" role="gmrQt" />
    <node concept="3ywjYg" id="G39ofDxY0Y" role="gmrQt" />
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
            <node concept="Xl_RD" id="2vPZMAmPw4K" role="2Lk3Fj">
              <property role="Xl_RC" value="Name of the thing" />
            </node>
            <node concept="3z9kRR" id="G39ofCeJ1K" role="3z8GDl">
              <ref role="3z9kRQ" node="G39ofCcQdA" resolve="label" />
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
    <node concept="3ywjYg" id="G39ofDxYj_" role="gmrQt" />
    <node concept="2rzwrF" id="2vPZMAnkzxm" role="gmrQt">
      <property role="TrG5h" value="rr" />
      <node concept="2Ln$92" id="2vPZMAnl7aU" role="2rHO5I">
        <node concept="2Lk9xs" id="2vPZMAnl7aW" role="2Ln$9p">
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
          <node concept="3z9kRR" id="G39ofCeJ1L" role="3z8GDl">
            <ref role="3z9kRQ" node="G39ofCcQdA" resolve="label" />
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
    <node concept="3ywjYg" id="G39ofDxYAc" role="gmrQt" />
    <node concept="gmrQT" id="2vPZMAnl6TK" role="gmrQt">
      <ref role="3JBHV4" to="oyym:2vPZMAmue7m" resolve="Element" />
      <node concept="2Ln$92" id="2vPZMAnl6TL" role="gmrTS">
        <node concept="2Lk9xs" id="2vPZMAnl6TM" role="2Ln$9p">
          <node concept="3cpWs3" id="2vPZMAnl6TN" role="2Lk3Fj">
            <node concept="2OqwBi" id="2vPZMAnl6TO" role="3uHU7w">
              <node concept="ggAI9" id="2vPZMAnl6TP" role="2Oq$k0" />
              <node concept="2bSWHS" id="2vPZMAnl6TQ" role="2OqNvi" />
            </node>
            <node concept="Xl_RD" id="2vPZMAnl6TR" role="3uHU7B">
              <property role="Xl_RC" value="Number " />
            </node>
          </node>
          <node concept="3z9kRR" id="G39ofCeJ1M" role="3z8GDl">
            <ref role="3z9kRQ" node="G39ofCcQdA" resolve="label" />
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

