<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:28533761-329d-45b1-be1d-d9be00525f41(org.modelix.mps.react.muicomponents.generator.templates@generator)">
  <persistence version="9" />
  <languages>
    <use id="67accce2-9676-4728-9e9c-8b15ea30d924" name="org.modelix.mps.react" version="0" />
    <use id="b401a680-8325-4110-8fd3-84331ff25bef" name="jetbrains.mps.lang.generator" version="4" />
    <use id="09a61cec-0c2d-4a90-b590-25e493b12f35" name="org.modelix.mps.react.muicomponents" version="0" />
    <use id="d7706f63-9be2-479c-a3da-ae92af1e64d5" name="jetbrains.mps.lang.generator.generationContext" version="2" />
    <devkit ref="a2eb3a43-fcc2-4200-80dc-c60110c4862d(jetbrains.mps.devkit.templates)" />
  </languages>
  <imports>
    <import index="zaxg" ref="r:c4183f14-1033-4ade-be7c-1beadb184134(org.modelix.mps.react.muicomponents.structure)" />
    <import index="8xo1" ref="r:41b64586-29ed-47f5-b907-44be07261bbc(org.modelix.mps.react.structure)" />
    <import index="oyym" ref="r:1570828e-e9a4-47ff-95d9-80c800704647(ReactDemoLanguage.structure)" />
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" />
    <import index="tpee" ref="r:00000000-0000-4000-0000-011c895902ca(jetbrains.mps.baseLanguage.structure)" implicit="true" />
    <import index="7923" ref="r:2c5a8407-fd65-4ea4-b95e-a8f8fee129c0(org.modelix.mps.react.muicomponents.behavior)" implicit="true" />
  </imports>
  <registry>
    <language id="67accce2-9676-4728-9e9c-8b15ea30d924" name="org.modelix.mps.react">
      <concept id="5291744615171232095" name="org.modelix.mps.react.structure.CustomHandler" flags="ng" index="24bxNJ">
        <child id="5291744615171248062" name="body" index="24b$8e" />
      </concept>
      <concept id="8876946878574570414" name="org.modelix.mps.react.structure.ComponentNodeExpression" flags="ng" index="ggAI9" />
      <concept id="8876946878574531757" name="org.modelix.mps.react.structure.TextComponent" flags="ng" index="ggXia">
        <child id="8876946878574531775" name="value" index="ggXio" />
      </concept>
      <concept id="8876946878574742630" name="org.modelix.mps.react.structure.JsCode" flags="ng" index="gh8L1">
        <property id="8876946878574742644" name="code" index="gh8Lj" />
      </concept>
      <concept id="8876946878574735527" name="org.modelix.mps.react.structure.JsFunctionPropertyValue" flags="ng" index="ghf20">
        <child id="8876946878574735559" name="parameters" index="ghf3w" />
        <child id="8876946878574737562" name="implementation" index="ghfyX" />
      </concept>
      <concept id="8876946878574735543" name="org.modelix.mps.react.structure.JsFunctionParameter" flags="ng" index="ghf2g" />
      <concept id="8876946878574735510" name="org.modelix.mps.react.structure.PropertyChangeHandler" flags="ng" index="ghf2L">
        <reference id="8876946878574742616" name="property" index="gh8LZ" />
        <child id="8876946878574742646" name="value" index="gh8Lh" />
        <child id="8876946878574742620" name="node" index="gh8LV" />
      </concept>
      <concept id="8876946878574654557" name="org.modelix.mps.react.structure.PrimitivePropertyValue" flags="ng" index="ghjhU">
        <child id="8876946878574654571" name="value" index="ghjhc" />
      </concept>
      <concept id="8876946878575278069" name="org.modelix.mps.react.structure.JsonObjectValue" flags="ng" index="gjbvi">
        <child id="8876946878575278146" name="members" index="gjbx_" />
      </concept>
      <concept id="8876946878575278085" name="org.modelix.mps.react.structure.JsonObjectMember" flags="ng" index="gjbwy">
        <property id="8876946878575278099" name="key" index="gjbwO" />
        <child id="8876946878575278101" name="value" index="gjbwM" />
      </concept>
      <concept id="8876946878573903262" name="org.modelix.mps.react.structure.ConceptRenderer" flags="ng" index="gmrQT">
        <reference id="8310867745953086698" name="concept" index="3JBHV4" />
        <child id="8876946878573903455" name="component" index="gmrTS" />
      </concept>
      <concept id="8876946878573903439" name="org.modelix.mps.react.structure.GenericReactComponent" flags="ng" index="gmrTC">
        <property id="8876946878573977569" name="componentType" index="gmPZ6" />
        <child id="8876946878574187978" name="properties" index="gn1nH" />
        <child id="8876946878574187976" name="children" index="gn1nJ" />
        <child id="5355184975888307549" name="stateVariables" index="2o1qk1" />
      </concept>
      <concept id="8876946878574187981" name="org.modelix.mps.react.structure.Property" flags="ng" index="gn1nE">
        <property id="8876946878574187995" name="propertyName" index="gn1nW" />
        <child id="8876946878574187997" name="value" index="gn1nU" />
      </concept>
      <concept id="5355184975888307501" name="org.modelix.mps.react.structure.StateVariable" flags="ng" index="2o1qlL">
        <child id="5355184975888310505" name="initializer" index="2o1p2P" />
        <child id="5355184975888307510" name="type" index="2o1qlE" />
      </concept>
      <concept id="5355184975888424302" name="org.modelix.mps.react.structure.StateVariableReference" flags="ng" index="2o1YOM">
        <reference id="5355184975888424309" name="decl" index="2o1YOD" />
      </concept>
      <concept id="8861973540082802718" name="org.modelix.mps.react.structure.ComponentPropertyValue" flags="ng" index="rtYR_">
        <child id="8861973540082802734" name="component" index="rtYRl" />
      </concept>
      <concept id="2833354970324652966" name="org.modelix.mps.react.structure.When" flags="ng" index="1nAWFN">
        <child id="2833354970324652969" name="else" index="1nAWFW" />
        <child id="2833354970324652971" name="cases" index="1nAWFY" />
      </concept>
      <concept id="2833354970324652974" name="org.modelix.mps.react.structure.WhenCase" flags="ng" index="1nAWFV">
        <child id="2833354970324652977" name="compnent" index="1nAWF$" />
        <child id="2833354970324652975" name="condition" index="1nAWFU" />
      </concept>
      <concept id="2833354970324905743" name="org.modelix.mps.react.structure.RenderNode" flags="ng" index="1nBVpq">
        <child id="2833354970324905746" name="nodeToRender" index="1nBVp7" />
      </concept>
    </language>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1215693861676" name="jetbrains.mps.baseLanguage.structure.BaseAssignmentExpression" flags="nn" index="d038R">
        <child id="1068498886297" name="rValue" index="37vLTx" />
        <child id="1068498886295" name="lValue" index="37vLTJ" />
      </concept>
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
      <concept id="1070534644030" name="jetbrains.mps.baseLanguage.structure.BooleanType" flags="in" index="10P_77" />
      <concept id="1068498886294" name="jetbrains.mps.baseLanguage.structure.AssignmentExpression" flags="nn" index="37vLTI" />
      <concept id="1225271408483" name="jetbrains.mps.baseLanguage.structure.IsNotEmptyOperation" flags="nn" index="17RvpY" />
      <concept id="1068580123155" name="jetbrains.mps.baseLanguage.structure.ExpressionStatement" flags="nn" index="3clFbF">
        <child id="1068580123156" name="expression" index="3clFbG" />
      </concept>
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
      <concept id="1068580123137" name="jetbrains.mps.baseLanguage.structure.BooleanConstant" flags="nn" index="3clFbT">
        <property id="1068580123138" name="value" index="3clFbU" />
      </concept>
      <concept id="1068581242875" name="jetbrains.mps.baseLanguage.structure.PlusExpression" flags="nn" index="3cpWs3" />
      <concept id="1204053956946" name="jetbrains.mps.baseLanguage.structure.IMethodCall" flags="ngI" index="1ndlxa">
        <reference id="1068499141037" name="baseMethodDeclaration" index="37wK5l" />
      </concept>
      <concept id="1081773326031" name="jetbrains.mps.baseLanguage.structure.BinaryOperation" flags="nn" index="3uHJSO">
        <child id="1081773367579" name="rightExpression" index="3uHU7w" />
        <child id="1081773367580" name="leftExpression" index="3uHU7B" />
      </concept>
      <concept id="1163668896201" name="jetbrains.mps.baseLanguage.structure.TernaryOperatorExpression" flags="nn" index="3K4zz7">
        <child id="1163668914799" name="condition" index="3K4Cdx" />
        <child id="1163668922816" name="ifTrue" index="3K4E3e" />
        <child id="1163668934364" name="ifFalse" index="3K4GZi" />
      </concept>
    </language>
    <language id="09a61cec-0c2d-4a90-b590-25e493b12f35" name="org.modelix.mps.react.muicomponents">
      <concept id="223742654172176291" name="org.modelix.mps.react.muicomponents.structure.Alignment" flags="ng" index="G4ZHx" />
      <concept id="2879488090881917716" name="org.modelix.mps.react.muicomponents.structure.State" flags="ng" index="2K2vKX">
        <child id="2879488090881917721" name="variables" index="2K2vKK" />
      </concept>
      <concept id="2879488090877505016" name="org.modelix.mps.react.muicomponents.structure.Box" flags="ng" index="2Kjlbh" />
      <concept id="2879488090877505018" name="org.modelix.mps.react.muicomponents.structure.IContainerSingleComponent" flags="ngI" index="2Kjlbj">
        <child id="2879488090877505021" name="child" index="2Kjlbk" />
      </concept>
      <concept id="2879488090875868026" name="org.modelix.mps.react.muicomponents.structure.Icon" flags="ng" index="2Kq$Lj">
        <property id="2879488090875868027" name="name" index="2Kq$Li" />
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
      <concept id="2879488090861821590" name="org.modelix.mps.react.muicomponents.structure.Space" flags="ng" index="2Lfa6Z" />
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
      <concept id="2879488090887731754" name="org.modelix.mps.react.muicomponents.structure.ISingleDataBinding" flags="ngI" index="2ZCkk3">
        <child id="2879488090856866844" name="data" index="2Ly3GP" />
      </concept>
      <concept id="2879488090888336418" name="org.modelix.mps.react.muicomponents.structure.PlainDiv" flags="ng" index="2ZE0Gb" />
    </language>
    <language id="b401a680-8325-4110-8fd3-84331ff25bef" name="jetbrains.mps.lang.generator">
      <concept id="1114706874351" name="jetbrains.mps.lang.generator.structure.CopySrcNodeMacro" flags="ln" index="29HgVG">
        <child id="1168024447342" name="sourceNodeQuery" index="3NFExx" />
      </concept>
      <concept id="1114729360583" name="jetbrains.mps.lang.generator.structure.CopySrcListMacro" flags="ln" index="2b32R4">
        <child id="1168278589236" name="sourceNodesQuery" index="2P8S$" />
      </concept>
      <concept id="1095416546421" name="jetbrains.mps.lang.generator.structure.MappingConfiguration" flags="ig" index="bUwia">
        <child id="1167328349397" name="reductionMappingRule" index="3acgRq" />
      </concept>
      <concept id="1095672379244" name="jetbrains.mps.lang.generator.structure.TemplateFragment" flags="ng" index="raruj" />
      <concept id="1167168920554" name="jetbrains.mps.lang.generator.structure.BaseMappingRule_Condition" flags="in" index="30G5F_" />
      <concept id="1167169188348" name="jetbrains.mps.lang.generator.structure.TemplateFunctionParameter_sourceNode" flags="nn" index="30H73N" />
      <concept id="1167169308231" name="jetbrains.mps.lang.generator.structure.BaseMappingRule" flags="ng" index="30H$t8">
        <reference id="1167169349424" name="applicableConcept" index="30HIoZ" />
        <child id="1167169362365" name="conditionFunction" index="30HLyM" />
      </concept>
      <concept id="1087833241328" name="jetbrains.mps.lang.generator.structure.PropertyMacro" flags="ln" index="17Uvod">
        <child id="1167756362303" name="propertyValueFunction" index="3zH0cK" />
      </concept>
      <concept id="1167327847730" name="jetbrains.mps.lang.generator.structure.Reduction_MappingRule" flags="lg" index="3aamgX">
        <child id="1169672767469" name="ruleConsequence" index="1lVwrX" />
      </concept>
      <concept id="1167756080639" name="jetbrains.mps.lang.generator.structure.PropertyMacro_GetPropertyValue" flags="in" index="3zFVjK" />
      <concept id="1167770111131" name="jetbrains.mps.lang.generator.structure.ReferenceMacro_GetReferent" flags="in" index="3$xsQk" />
      <concept id="1167945743726" name="jetbrains.mps.lang.generator.structure.IfMacro_Condition" flags="in" index="3IZrLx" />
      <concept id="1167951910403" name="jetbrains.mps.lang.generator.structure.SourceSubstituteMacro_SourceNodesQuery" flags="in" index="3JmXsc" />
      <concept id="8900764248744213868" name="jetbrains.mps.lang.generator.structure.InlineTemplateWithContext_RuleConsequence" flags="lg" index="1Koe21">
        <child id="8900764248744213871" name="contentNode" index="1Koe22" />
      </concept>
      <concept id="1168024337012" name="jetbrains.mps.lang.generator.structure.SourceSubstituteMacro_SourceNodeQuery" flags="in" index="3NFfHV" />
      <concept id="1118773211870" name="jetbrains.mps.lang.generator.structure.IfMacro" flags="ln" index="1W57fq">
        <child id="1167945861827" name="conditionFunction" index="3IZSJc" />
      </concept>
      <concept id="1088761943574" name="jetbrains.mps.lang.generator.structure.ReferenceMacro" flags="ln" index="1ZhdrF">
        <child id="1167770376702" name="referentFunction" index="3$ytzL" />
      </concept>
    </language>
    <language id="d7706f63-9be2-479c-a3da-ae92af1e64d5" name="jetbrains.mps.lang.generator.generationContext">
      <concept id="1218047638031" name="jetbrains.mps.lang.generator.generationContext.structure.GenerationContextOp_CreateUniqueName" flags="nn" index="2piZGk">
        <child id="1218047638032" name="baseName" index="2piZGb" />
      </concept>
      <concept id="1216860049635" name="jetbrains.mps.lang.generator.generationContext.structure.TemplateFunctionParameter_generationContext" flags="nn" index="1iwH7S" />
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="4705942098322609812" name="jetbrains.mps.lang.smodel.structure.EnumMember_IsOperation" flags="ng" index="21noJN">
        <child id="4705942098322609813" name="member" index="21noJM" />
      </concept>
      <concept id="4705942098322467729" name="jetbrains.mps.lang.smodel.structure.EnumMemberReference" flags="ng" index="21nZrQ">
        <reference id="4705942098322467736" name="decl" index="21nZrZ" />
      </concept>
      <concept id="1177026924588" name="jetbrains.mps.lang.smodel.structure.RefConcept_Reference" flags="nn" index="chp4Y">
        <reference id="1177026940964" name="conceptDeclaration" index="cht4Q" />
      </concept>
      <concept id="1179409122411" name="jetbrains.mps.lang.smodel.structure.Node_ConceptMethodCall" flags="nn" index="2qgKlT" />
      <concept id="2396822768958367367" name="jetbrains.mps.lang.smodel.structure.AbstractTypeCastExpression" flags="nn" index="$5XWr">
        <child id="6733348108486823193" name="leftExpression" index="1m5AlR" />
        <child id="3906496115198199033" name="conceptArgument" index="3oSUPX" />
      </concept>
      <concept id="1139621453865" name="jetbrains.mps.lang.smodel.structure.Node_IsInstanceOfOperation" flags="nn" index="1mIQ4w">
        <child id="1177027386292" name="conceptArgument" index="cj9EA" />
      </concept>
      <concept id="1140137987495" name="jetbrains.mps.lang.smodel.structure.SNodeTypeCastExpression" flags="nn" index="1PxgMI" />
      <concept id="1138056022639" name="jetbrains.mps.lang.smodel.structure.SPropertyAccess" flags="nn" index="3TrcHB">
        <reference id="1138056395725" name="property" index="3TsBF5" />
      </concept>
      <concept id="1138056143562" name="jetbrains.mps.lang.smodel.structure.SLinkAccess" flags="nn" index="3TrEf2">
        <reference id="1138056516764" name="link" index="3Tt5mk" />
      </concept>
      <concept id="1138056282393" name="jetbrains.mps.lang.smodel.structure.SLinkListAccess" flags="nn" index="3Tsc0h">
        <reference id="1138056546658" name="link" index="3TtcxE" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1133920641626" name="jetbrains.mps.lang.core.structure.BaseConcept" flags="ng" index="2VYdi">
        <child id="5169995583184591170" name="smodelAttribute" index="lGtFl" />
      </concept>
      <concept id="3364660638048049750" name="jetbrains.mps.lang.core.structure.PropertyAttribute" flags="ng" index="A9Btg">
        <property id="1757699476691236117" name="name_DebugInfo" index="2qtEX9" />
        <property id="1341860900487648621" name="propertyId" index="P4ACc" />
      </concept>
      <concept id="3364660638048049745" name="jetbrains.mps.lang.core.structure.LinkAttribute" flags="ng" index="A9Btn">
        <property id="1757699476691236116" name="role_DebugInfo" index="2qtEX8" />
        <property id="1341860900488019036" name="linkId" index="P3scX" />
      </concept>
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
  </registry>
  <node concept="bUwia" id="2vPZMAmvnIA">
    <property role="TrG5h" value="main" />
    <node concept="3aamgX" id="2vPZMAonvTI" role="3acgRq">
      <ref role="30HIoZ" to="zaxg:2vPZMAonvgy" resolve="PlainDiv" />
      <node concept="1Koe21" id="2vPZMAonvTJ" role="1lVwrX">
        <node concept="gmrQT" id="2vPZMAonvTK" role="1Koe22">
          <ref role="3JBHV4" to="tpee:fz12cDA" resolve="ClassConcept" />
          <node concept="gmrTC" id="2vPZMAonvTL" role="gmrTS">
            <property role="gmPZ6" value="html.div" />
            <node concept="raruj" id="2vPZMAonvTM" role="lGtFl" />
            <node concept="gmrTC" id="2vPZMAonvTN" role="gn1nJ">
              <property role="gmPZ6" value="mui.Icon" />
              <node concept="2b32R4" id="2vPZMAonvTO" role="lGtFl">
                <node concept="3JmXsc" id="2vPZMAonvTP" role="2P8S$">
                  <node concept="3clFbS" id="2vPZMAonvTQ" role="2VODD2">
                    <node concept="3clFbF" id="2vPZMAonvTR" role="3cqZAp">
                      <node concept="2OqwBi" id="2vPZMAonvTS" role="3clFbG">
                        <node concept="3Tsc0h" id="2vPZMAonvTT" role="2OqNvi">
                          <ref role="3TtcxE" to="zaxg:2vPZMAmEVPK" resolve="children" />
                        </node>
                        <node concept="30H73N" id="2vPZMAonvTU" role="2Oq$k0" />
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
    <node concept="3aamgX" id="2vPZMAolREo" role="3acgRq">
      <ref role="30HIoZ" to="zaxg:2vPZMAolrZd" resolve="ShowAndEdit" />
      <node concept="1Koe21" id="2vPZMAolRIa" role="1lVwrX">
        <node concept="gmrQT" id="2vPZMAolRIb" role="1Koe22">
          <ref role="3JBHV4" to="tpee:fz12cDA" resolve="ClassConcept" />
          <node concept="2K2vKX" id="2vPZMAonu5L" role="gmrTS">
            <node concept="2o1qlL" id="2vPZMAonujy" role="2K2vKK">
              <property role="TrG5h" value="editing" />
              <node concept="10P_77" id="2vPZMAonuwv" role="2o1qlE" />
              <node concept="3clFbT" id="2vPZMAonuwz" role="2o1p2P" />
              <node concept="17Uvod" id="5E6heSJvFl$" role="lGtFl">
                <property role="2qtEX9" value="name" />
                <property role="P4ACc" value="ceab5195-25ea-4f22-9b92-103b95ca8c0c/1169194658468/1169194664001" />
                <node concept="3zFVjK" id="5E6heSJvFl_" role="3zH0cK">
                  <node concept="3clFbS" id="5E6heSJvFlA" role="2VODD2">
                    <node concept="3clFbF" id="5E6heSJvFAe" role="3cqZAp">
                      <node concept="2OqwBi" id="5E6heSJvFKG" role="3clFbG">
                        <node concept="1iwH7S" id="5E6heSJvFAd" role="2Oq$k0" />
                        <node concept="2piZGk" id="5E6heSJvFWP" role="2OqNvi">
                          <node concept="Xl_RD" id="5E6heSJvGdj" role="2piZGb">
                            <property role="Xl_RC" value="editflag" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="1nAWFN" id="2vPZMAonuOH" role="2Ln$9p">
              <node concept="1nAWFV" id="2vPZMAonuSj" role="1nAWFY">
                <node concept="2o1YOM" id="2vPZMAonuSm" role="1nAWFU">
                  <ref role="2o1YOD" node="2vPZMAonujy" resolve="editing" />
                </node>
                <node concept="2ZE0Gb" id="2vPZMAonOpB" role="1nAWF$">
                  <node concept="2Ln$92" id="2vPZMAopMjv" role="2Ln$9p">
                    <node concept="gmrTC" id="2vPZMAolRIe" role="2Ln$9p">
                      <property role="gmPZ6" value="mui.Icon" />
                      <node concept="29HgVG" id="2vPZMAosd6R" role="lGtFl">
                        <node concept="3NFfHV" id="2vPZMAosd6S" role="3NFExx">
                          <node concept="3clFbS" id="2vPZMAosd6T" role="2VODD2">
                            <node concept="3clFbF" id="2vPZMAosdaG" role="3cqZAp">
                              <node concept="2OqwBi" id="2vPZMAosdnA" role="3clFbG">
                                <node concept="30H73N" id="2vPZMAosdaF" role="2Oq$k0" />
                                <node concept="3TrEf2" id="2vPZMAosdPu" role="2OqNvi">
                                  <ref role="3Tt5mk" to="zaxg:2vPZMAnIaRX" resolve="child" />
                                </node>
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                    <node concept="2L3P8c" id="2vPZMAonP8t" role="2Ln$9p">
                      <node concept="2KPZRd" id="2vPZMAonPc9" role="2L3P8e">
                        <node concept="2Kq$Lj" id="2vPZMAonPcb" role="2Kq$h0">
                          <property role="2Kq$Li" value="mui.icons.Save" />
                        </node>
                      </node>
                      <node concept="2KN1Qe" id="2vPZMAonP8x" role="2KN1Qq">
                        <node concept="3clFbS" id="2vPZMAonP8z" role="2KN1Q1">
                          <node concept="3clFbF" id="2vPZMAonPce" role="3cqZAp">
                            <node concept="37vLTI" id="2vPZMAonQqy" role="3clFbG">
                              <node concept="3clFbT" id="2vPZMAonQqM" role="37vLTx" />
                              <node concept="2o1YOM" id="2vPZMAonPcd" role="37vLTJ">
                                <ref role="2o1YOD" node="2vPZMAonujy" resolve="editing" />
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                    <node concept="G4ZHx" id="cqTc8JaaMU" role="G4MFJ" />
                  </node>
                </node>
              </node>
              <node concept="2ZE0Gb" id="2vPZMAonQr4" role="1nAWFW">
                <node concept="2Ln$92" id="2vPZMAorxSX" role="2Ln$9p">
                  <node concept="gmrTC" id="2vPZMAorxT1" role="2Ln$9p">
                    <property role="gmPZ6" value="mui.Icon" />
                    <node concept="29HgVG" id="2vPZMAosbI9" role="lGtFl">
                      <node concept="3NFfHV" id="2vPZMAosbIa" role="3NFExx">
                        <node concept="3clFbS" id="2vPZMAosbIb" role="2VODD2">
                          <node concept="3clFbF" id="2vPZMAosbQj" role="3cqZAp">
                            <node concept="2OqwBi" id="2vPZMAosc4P" role="3clFbG">
                              <node concept="30H73N" id="2vPZMAosbQi" role="2Oq$k0" />
                              <node concept="2qgKlT" id="2vPZMAoscNx" role="2OqNvi">
                                <ref role="37wK5l" to="7923:2vPZMAory7c" resolve="readonlyVersion" />
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                  <node concept="2L3P8c" id="2vPZMAonQuD" role="2Ln$9p">
                    <node concept="2KPZRd" id="2vPZMAonQuE" role="2L3P8e">
                      <node concept="2Kq$Lj" id="2vPZMAonQuF" role="2Kq$h0">
                        <property role="2Kq$Li" value="mui.icons.Edit" />
                      </node>
                    </node>
                    <node concept="2KN1Qe" id="2vPZMAonQuG" role="2KN1Qq">
                      <node concept="3clFbS" id="2vPZMAonQuH" role="2KN1Q1">
                        <node concept="3clFbF" id="2vPZMAonQuI" role="3cqZAp">
                          <node concept="37vLTI" id="2vPZMAonQuJ" role="3clFbG">
                            <node concept="3clFbT" id="2vPZMAonQuK" role="37vLTx">
                              <property role="3clFbU" value="true" />
                            </node>
                            <node concept="2o1YOM" id="2vPZMAonQuL" role="37vLTJ">
                              <ref role="2o1YOD" node="2vPZMAonujy" resolve="editing" />
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                  <node concept="G4ZHx" id="cqTc8JaaPl" role="G4MFJ" />
                </node>
              </node>
            </node>
            <node concept="raruj" id="2vPZMAonu5N" role="lGtFl" />
          </node>
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="2vPZMAo6kCJ" role="3acgRq">
      <ref role="30HIoZ" to="zaxg:2vPZMAnZ0ck" resolve="State" />
      <node concept="1Koe21" id="2vPZMAo6kGx" role="1lVwrX">
        <node concept="gmrQT" id="2vPZMAo6kGy" role="1Koe22">
          <ref role="3JBHV4" to="tpee:fz12cDA" resolve="ClassConcept" />
          <node concept="gmrTC" id="2vPZMAo6kGz" role="gmrTS">
            <property role="gmPZ6" value="html.div" />
            <node concept="raruj" id="2vPZMAo6kH6" role="lGtFl" />
            <node concept="gmrTC" id="2vPZMAo6l$a" role="gn1nJ">
              <property role="gmPZ6" value="mui.Icon" />
              <node concept="2b32R4" id="2vPZMAo6l$c" role="lGtFl">
                <node concept="3JmXsc" id="2vPZMAo6l$f" role="2P8S$">
                  <node concept="3clFbS" id="2vPZMAo6l$g" role="2VODD2">
                    <node concept="3clFbF" id="2vPZMAo6l$m" role="3cqZAp">
                      <node concept="2OqwBi" id="2vPZMAo6l$h" role="3clFbG">
                        <node concept="3Tsc0h" id="2vPZMAo6l$k" role="2OqNvi">
                          <ref role="3TtcxE" to="zaxg:2vPZMAmEVPK" resolve="children" />
                        </node>
                        <node concept="30H73N" id="2vPZMAo6l$l" role="2Oq$k0" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="2o1qlL" id="2vPZMAo6lC1" role="2o1qk1">
              <property role="TrG5h" value="x" />
              <node concept="10P_77" id="2vPZMAo6lPg" role="2o1qlE" />
              <node concept="3clFbT" id="2vPZMAo6lPk" role="2o1p2P" />
              <node concept="2b32R4" id="2vPZMAohMhl" role="lGtFl">
                <node concept="3JmXsc" id="2vPZMAohMhm" role="2P8S$">
                  <node concept="3clFbS" id="2vPZMAohMhn" role="2VODD2">
                    <node concept="3clFbF" id="2vPZMAohOnW" role="3cqZAp">
                      <node concept="2OqwBi" id="2vPZMAohOJP" role="3clFbG">
                        <node concept="30H73N" id="2vPZMAohOnV" role="2Oq$k0" />
                        <node concept="3Tsc0h" id="2vPZMAohPTF" role="2OqNvi">
                          <ref role="3TtcxE" to="zaxg:2vPZMAnZ0cp" resolve="variables" />
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
    <node concept="3aamgX" id="2vPZMAnGAIz" role="3acgRq">
      <ref role="30HIoZ" to="zaxg:2vPZMAnBVdN" resolve="Accordion" />
      <node concept="1Koe21" id="2vPZMAnGAMl" role="1lVwrX">
        <node concept="gmrQT" id="2vPZMAnGAMp" role="1Koe22">
          <ref role="3JBHV4" to="tpee:fz12cDA" resolve="ClassConcept" />
          <node concept="gmrTC" id="2vPZMAny23u" role="gmrTS">
            <property role="gmPZ6" value="mui.Accordion" />
            <node concept="gmrTC" id="2vPZMAny23w" role="gn1nJ">
              <property role="gmPZ6" value="mui.AccordionSummary" />
              <node concept="2Lk9xs" id="2vPZMAn_rY8" role="gn1nJ">
                <property role="2KoofL" value="2vPZMAn_7Nn/bold" />
                <node concept="2OqwBi" id="2vPZMAn_s6y" role="2Lk3Fj">
                  <node concept="ggAI9" id="2vPZMAn_rYk" role="2Oq$k0" />
                  <node concept="3TrcHB" id="2vPZMAn_sfv" role="2OqNvi">
                    <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
                  </node>
                </node>
                <node concept="29HgVG" id="2vPZMAnGICg" role="lGtFl">
                  <node concept="3NFfHV" id="2vPZMAnGICh" role="3NFExx">
                    <node concept="3clFbS" id="2vPZMAnGICi" role="2VODD2">
                      <node concept="3clFbF" id="2vPZMAnGICo" role="3cqZAp">
                        <node concept="2OqwBi" id="2vPZMAnGICj" role="3clFbG">
                          <node concept="3TrEf2" id="2vPZMAnGICm" role="2OqNvi">
                            <ref role="3Tt5mk" to="zaxg:2vPZMAnBVdP" resolve="summary" />
                          </node>
                          <node concept="30H73N" id="2vPZMAnGICn" role="2Oq$k0" />
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="gn1nE" id="2vPZMAnzL2R" role="gn1nH">
                <property role="gn1nW" value="expandIcon" />
                <node concept="rtYR_" id="2vPZMAnzL31" role="gn1nU">
                  <node concept="gmrTC" id="2vPZMAnzL34" role="rtYRl">
                    <property role="gmPZ6" value="mui.icons.ExpandMore" />
                    <node concept="17Uvod" id="2vPZMAnGCIs" role="lGtFl">
                      <property role="2qtEX9" value="componentType" />
                      <property role="P4ACc" value="67accce2-9676-4728-9e9c-8b15ea30d924/8876946878573903439/8876946878573977569" />
                      <node concept="3zFVjK" id="2vPZMAnGCIt" role="3zH0cK">
                        <node concept="3clFbS" id="2vPZMAnGCIu" role="2VODD2">
                          <node concept="3clFbF" id="2vPZMAnGDD3" role="3cqZAp">
                            <node concept="2OqwBi" id="2vPZMAnGGoH" role="3clFbG">
                              <node concept="2OqwBi" id="2vPZMAnGE7L" role="2Oq$k0">
                                <node concept="30H73N" id="2vPZMAnGDD2" role="2Oq$k0" />
                                <node concept="3TrEf2" id="2vPZMAnGFIN" role="2OqNvi">
                                  <ref role="3Tt5mk" to="zaxg:2vPZMAnEJvM" resolve="icon" />
                                </node>
                              </node>
                              <node concept="3TrcHB" id="2vPZMAnGHpp" role="2OqNvi">
                                <ref role="3TsBF5" to="zaxg:2vPZMAnBVdV" resolve="name" />
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
            <node concept="gmrTC" id="2vPZMAny2kW" role="gn1nJ">
              <property role="gmPZ6" value="mui.AccordionDetails" />
              <node concept="1nBVpq" id="2vPZMAnGLpV" role="gn1nJ">
                <node concept="ggAI9" id="2vPZMAnGLpX" role="1nBVp7" />
                <node concept="2b32R4" id="2vPZMAnGLq3" role="lGtFl">
                  <node concept="3JmXsc" id="2vPZMAnGLq6" role="2P8S$">
                    <node concept="3clFbS" id="2vPZMAnGLq7" role="2VODD2">
                      <node concept="3clFbF" id="2vPZMAnGLqd" role="3cqZAp">
                        <node concept="2OqwBi" id="2vPZMAnGLq8" role="3clFbG">
                          <node concept="3Tsc0h" id="2vPZMAnGLqb" role="2OqNvi">
                            <ref role="3TtcxE" to="zaxg:2vPZMAmEVPK" resolve="children" />
                          </node>
                          <node concept="30H73N" id="2vPZMAnGLqc" role="2Oq$k0" />
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="raruj" id="2vPZMAnGC1X" role="lGtFl" />
          </node>
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="2vPZMAm$jBB" role="3acgRq">
      <ref role="30HIoZ" to="zaxg:2vPZMAmvnIB" resolve="TextBox" />
      <node concept="1Koe21" id="2vPZMAm$k04" role="1lVwrX">
        <node concept="gmrQT" id="2vPZMAm$k08" role="1Koe22">
          <ref role="3JBHV4" to="tpee:fz12cDA" resolve="ClassConcept" />
          <node concept="gmrTC" id="2vPZMAm$k0a" role="gmrTS">
            <property role="gmPZ6" value="mui.TextField" />
            <node concept="gn1nE" id="2vPZMAmuLZ0" role="gn1nH">
              <property role="gn1nW" value="onChange" />
              <node concept="ghf20" id="2vPZMAmuLZ1" role="gn1nU">
                <node concept="ghf2L" id="2vPZMAmuLZ2" role="ghfyX">
                  <ref role="gh8LZ" to="tpck:h0TrG11" resolve="name" />
                  <node concept="gh8L1" id="2vPZMAmuLZ3" role="gh8Lh">
                    <property role="gh8Lj" value="event.target.value" />
                  </node>
                  <node concept="ggAI9" id="2vPZMAmuMuP" role="gh8LV">
                    <node concept="29HgVG" id="2vPZMAm$nMN" role="lGtFl">
                      <node concept="3NFfHV" id="2vPZMAm$nMO" role="3NFExx">
                        <node concept="3clFbS" id="2vPZMAm$nMP" role="2VODD2">
                          <node concept="3clFbF" id="2vPZMAm$nMV" role="3cqZAp">
                            <node concept="2OqwBi" id="2vPZMAm$o8V" role="3clFbG">
                              <node concept="2OqwBi" id="2vPZMAm$nMQ" role="2Oq$k0">
                                <node concept="3TrEf2" id="2vPZMAm$nMT" role="2OqNvi">
                                  <ref role="3Tt5mk" to="zaxg:2vPZMAmvsgs" resolve="context" />
                                </node>
                                <node concept="30H73N" id="2vPZMAm$nMU" role="2Oq$k0" />
                              </node>
                              <node concept="3TrEf2" id="2vPZMAm$p9G" role="2OqNvi">
                                <ref role="3Tt5mk" to="zaxg:2vPZMAmvsgm" resolve="node" />
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                  <node concept="1ZhdrF" id="2vPZMAm$lpX" role="lGtFl">
                    <property role="2qtEX8" value="property" />
                    <property role="P3scX" value="67accce2-9676-4728-9e9c-8b15ea30d924/8876946878574735510/8876946878574742616" />
                    <node concept="3$xsQk" id="2vPZMAm$lpY" role="3$ytzL">
                      <node concept="3clFbS" id="2vPZMAm$lpZ" role="2VODD2">
                        <node concept="3clFbF" id="2vPZMAm$lrg" role="3cqZAp">
                          <node concept="2OqwBi" id="2vPZMAm$mSC" role="3clFbG">
                            <node concept="2OqwBi" id="2vPZMAm$lFF" role="2Oq$k0">
                              <node concept="30H73N" id="2vPZMAm$lrf" role="2Oq$k0" />
                              <node concept="3TrEf2" id="2vPZMAm$mvK" role="2OqNvi">
                                <ref role="3Tt5mk" to="zaxg:2vPZMAmvsgs" resolve="context" />
                              </node>
                            </node>
                            <node concept="3TrEf2" id="2vPZMAm$nJ2" role="2OqNvi">
                              <ref role="3Tt5mk" to="zaxg:2vPZMAmvsgn" resolve="property" />
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="ghf2g" id="2vPZMAmuLZ5" role="ghf3w">
                  <property role="TrG5h" value="event" />
                </node>
              </node>
            </node>
            <node concept="gn1nE" id="2vPZMAmuLZ6" role="gn1nH">
              <property role="gn1nW" value="value" />
              <node concept="ghjhU" id="2vPZMAmuLZ7" role="gn1nU">
                <node concept="2OqwBi" id="2vPZMAmuLZ8" role="ghjhc">
                  <node concept="ggAI9" id="2vPZMAmuMuZ" role="2Oq$k0">
                    <node concept="29HgVG" id="2vPZMAm$pbm" role="lGtFl">
                      <node concept="3NFfHV" id="2vPZMAm$pbn" role="3NFExx">
                        <node concept="3clFbS" id="2vPZMAm$pbo" role="2VODD2">
                          <node concept="3clFbF" id="2vPZMAm$pbu" role="3cqZAp">
                            <node concept="2OqwBi" id="2vPZMAm$pvN" role="3clFbG">
                              <node concept="2OqwBi" id="2vPZMAm$pbp" role="2Oq$k0">
                                <node concept="3TrEf2" id="2vPZMAm$pbs" role="2OqNvi">
                                  <ref role="3Tt5mk" to="zaxg:2vPZMAmvsgs" resolve="context" />
                                </node>
                                <node concept="30H73N" id="2vPZMAm$pbt" role="2Oq$k0" />
                              </node>
                              <node concept="3TrEf2" id="2vPZMAm$qLH" role="2OqNvi">
                                <ref role="3Tt5mk" to="zaxg:2vPZMAmvsgm" resolve="node" />
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                  <node concept="3TrcHB" id="2vPZMAmuLZa" role="2OqNvi">
                    <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
                    <node concept="1ZhdrF" id="2vPZMAm$sdz" role="lGtFl">
                      <property role="2qtEX8" value="property" />
                      <property role="P3scX" value="7866978e-a0f0-4cc7-81bc-4d213d9375e1/1138056022639/1138056395725" />
                      <node concept="3$xsQk" id="2vPZMAm$sd$" role="3$ytzL">
                        <node concept="3clFbS" id="2vPZMAm$sd_" role="2VODD2">
                          <node concept="3clFbF" id="2vPZMAm$sfe" role="3cqZAp">
                            <node concept="2OqwBi" id="2vPZMAm$sfg" role="3clFbG">
                              <node concept="2OqwBi" id="2vPZMAm$sfh" role="2Oq$k0">
                                <node concept="30H73N" id="2vPZMAm$sfi" role="2Oq$k0" />
                                <node concept="3TrEf2" id="2vPZMAm$sfj" role="2OqNvi">
                                  <ref role="3Tt5mk" to="zaxg:2vPZMAmvsgs" resolve="context" />
                                </node>
                              </node>
                              <node concept="3TrEf2" id="2vPZMAm$sfk" role="2OqNvi">
                                <ref role="3Tt5mk" to="zaxg:2vPZMAmvsgn" resolve="property" />
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
            <node concept="raruj" id="2vPZMAm$lpc" role="lGtFl" />
          </node>
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="2vPZMAmF0VF" role="3acgRq">
      <ref role="30HIoZ" to="zaxg:2vPZMAmEVPF" resolve="HorizontalLayout" />
      <node concept="1Koe21" id="2vPZMAmF0VG" role="1lVwrX">
        <node concept="gmrQT" id="2vPZMAmF0VH" role="1Koe22">
          <ref role="3JBHV4" to="tpee:fz12cDA" resolve="ClassConcept" />
          <node concept="gmrTC" id="2vPZMAmEHF_" role="gmrTS">
            <property role="gmPZ6" value="mui.Stack" />
            <node concept="gn1nE" id="cqTc8Jl0h6" role="gn1nH">
              <property role="gn1nW" value="direction" />
              <node concept="ghjhU" id="cqTc8Jl0xR" role="gn1nU">
                <node concept="Xl_RD" id="cqTc8Jl0xQ" role="ghjhc">
                  <property role="Xl_RC" value="row" />
                </node>
              </node>
            </node>
            <node concept="gn1nE" id="cqTc8Jl0H6" role="gn1nH">
              <property role="gn1nW" value="gap" />
              <node concept="ghjhU" id="cqTc8Jl0H7" role="gn1nU">
                <node concept="Xl_RD" id="cqTc8Jl0H8" role="ghjhc">
                  <property role="Xl_RC" value="gap" />
                  <node concept="17Uvod" id="cqTc8Jl0H9" role="lGtFl">
                    <property role="2qtEX9" value="value" />
                    <property role="P4ACc" value="f3061a53-9226-4cc5-a443-f952ceaf5816/1070475926800/1070475926801" />
                    <node concept="3zFVjK" id="cqTc8Jl0Ha" role="3zH0cK">
                      <node concept="3clFbS" id="cqTc8Jl0Hb" role="2VODD2">
                        <node concept="3clFbF" id="cqTc8Jl0Hc" role="3cqZAp">
                          <node concept="2OqwBi" id="cqTc8Jl0Hd" role="3clFbG">
                            <node concept="3TrcHB" id="cqTc8Jl0He" role="2OqNvi">
                              <ref role="3TsBF5" to="zaxg:cqTc8J2sSJ" resolve="gap" />
                            </node>
                            <node concept="30H73N" id="cqTc8Jl0Hf" role="2Oq$k0" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="1W57fq" id="cqTc8Jl0Hg" role="lGtFl">
                <node concept="3IZrLx" id="cqTc8Jl0Hh" role="3IZSJc">
                  <node concept="3clFbS" id="cqTc8Jl0Hi" role="2VODD2">
                    <node concept="3clFbF" id="cqTc8Jl0Hj" role="3cqZAp">
                      <node concept="2OqwBi" id="cqTc8Jl0Hk" role="3clFbG">
                        <node concept="2OqwBi" id="cqTc8Jl0Hl" role="2Oq$k0">
                          <node concept="30H73N" id="cqTc8Jl0Hm" role="2Oq$k0" />
                          <node concept="3TrcHB" id="cqTc8Jl0Hn" role="2OqNvi">
                            <ref role="3TsBF5" to="zaxg:cqTc8J2sSJ" resolve="gap" />
                          </node>
                        </node>
                        <node concept="17RvpY" id="cqTc8Jl0Ho" role="2OqNvi" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="gn1nE" id="cqTc8J2tEr" role="gn1nH">
              <property role="gn1nW" value="sx" />
              <node concept="gjbvi" id="cqTc8J2tEs" role="gn1nU">
                <node concept="gjbwy" id="cqTc8J2tEw" role="gjbx_">
                  <property role="gjbwO" value="alignItems" />
                  <node concept="ghjhU" id="cqTc8J2tEx" role="gjbwM">
                    <node concept="Xl_RD" id="cqTc8J2tEy" role="ghjhc">
                      <property role="Xl_RC" value="left" />
                      <node concept="17Uvod" id="cqTc8J2tEz" role="lGtFl">
                        <property role="2qtEX9" value="value" />
                        <property role="P4ACc" value="f3061a53-9226-4cc5-a443-f952ceaf5816/1070475926800/1070475926801" />
                        <node concept="3zFVjK" id="cqTc8J2tE$" role="3zH0cK">
                          <node concept="3clFbS" id="cqTc8J2tE_" role="2VODD2">
                            <node concept="3clFbF" id="cqTc8J2tEA" role="3cqZAp">
                              <node concept="3K4zz7" id="cqTc8J2tEB" role="3clFbG">
                                <node concept="Xl_RD" id="cqTc8J2tEC" role="3K4E3e">
                                  <property role="Xl_RC" value="flex-start" />
                                </node>
                                <node concept="Xl_RD" id="cqTc8J2tED" role="3K4GZi">
                                  <property role="Xl_RC" value="center" />
                                </node>
                                <node concept="2OqwBi" id="cqTc8J2tEE" role="3K4Cdx">
                                  <node concept="2OqwBi" id="cqTc8J2tEF" role="2Oq$k0">
                                    <node concept="2OqwBi" id="cqTc8J2tEG" role="2Oq$k0">
                                      <node concept="30H73N" id="cqTc8J2tEH" role="2Oq$k0" />
                                      <node concept="3TrEf2" id="cqTc8J2tEI" role="2OqNvi">
                                        <ref role="3Tt5mk" to="zaxg:cqTc8J2sSH" resolve="align" />
                                      </node>
                                    </node>
                                    <node concept="3TrcHB" id="cqTc8J2tEJ" role="2OqNvi">
                                      <ref role="3TsBF5" to="zaxg:cqTc8J2hY$" resolve="vertical" />
                                    </node>
                                  </node>
                                  <node concept="21noJN" id="cqTc8J2tEK" role="2OqNvi">
                                    <node concept="21nZrQ" id="cqTc8J2tEL" role="21noJM">
                                      <ref role="21nZrZ" to="zaxg:cqTc8J1POm" resolve="top" />
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
                <node concept="gjbwy" id="cqTc8J2tEM" role="gjbx_">
                  <property role="gjbwO" value="justifyContent" />
                  <node concept="ghjhU" id="cqTc8J2tEN" role="gjbwM">
                    <node concept="Xl_RD" id="cqTc8J2tEO" role="ghjhc">
                      <property role="Xl_RC" value="top" />
                      <node concept="17Uvod" id="cqTc8J2tEP" role="lGtFl">
                        <property role="2qtEX9" value="value" />
                        <property role="P4ACc" value="f3061a53-9226-4cc5-a443-f952ceaf5816/1070475926800/1070475926801" />
                        <node concept="3zFVjK" id="cqTc8J2tEQ" role="3zH0cK">
                          <node concept="3clFbS" id="cqTc8J2tER" role="2VODD2">
                            <node concept="3clFbF" id="cqTc8J2tES" role="3cqZAp">
                              <node concept="3K4zz7" id="cqTc8J2tET" role="3clFbG">
                                <node concept="Xl_RD" id="cqTc8J2tEU" role="3K4E3e">
                                  <property role="Xl_RC" value="flex-start" />
                                </node>
                                <node concept="Xl_RD" id="cqTc8J2tEV" role="3K4GZi">
                                  <property role="Xl_RC" value="center" />
                                </node>
                                <node concept="2OqwBi" id="cqTc8J2tEW" role="3K4Cdx">
                                  <node concept="2OqwBi" id="cqTc8J2tEX" role="2Oq$k0">
                                    <node concept="2OqwBi" id="cqTc8J2tEY" role="2Oq$k0">
                                      <node concept="30H73N" id="cqTc8J2tEZ" role="2Oq$k0" />
                                      <node concept="3TrEf2" id="cqTc8J2tF0" role="2OqNvi">
                                        <ref role="3Tt5mk" to="zaxg:cqTc8J2sSH" resolve="align" />
                                      </node>
                                    </node>
                                    <node concept="3TrcHB" id="cqTc8J2tF1" role="2OqNvi">
                                      <ref role="3TsBF5" to="zaxg:cqTc8J2hY_" resolve="horizontal" />
                                    </node>
                                  </node>
                                  <node concept="21noJN" id="cqTc8J2tF2" role="2OqNvi">
                                    <node concept="21nZrQ" id="cqTc8J2tF3" role="21noJM">
                                      <ref role="21nZrZ" to="zaxg:cqTc8J2hI8" resolve="left" />
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
              </node>
            </node>
            <node concept="ggXia" id="2vPZMAmF1io" role="gn1nJ">
              <node concept="Xl_RD" id="2vPZMAmF1iq" role="ggXio">
                <property role="Xl_RC" value="Dummy" />
              </node>
              <node concept="2b32R4" id="2vPZMAmF1iz" role="lGtFl">
                <node concept="3JmXsc" id="2vPZMAmF1iA" role="2P8S$">
                  <node concept="3clFbS" id="2vPZMAmF1iB" role="2VODD2">
                    <node concept="3clFbF" id="2vPZMAmF1iH" role="3cqZAp">
                      <node concept="2OqwBi" id="2vPZMAmF1iC" role="3clFbG">
                        <node concept="3Tsc0h" id="2vPZMAmF1iF" role="2OqNvi">
                          <ref role="3TtcxE" to="zaxg:2vPZMAmEVPK" resolve="children" />
                        </node>
                        <node concept="30H73N" id="2vPZMAmF1iG" role="2Oq$k0" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="raruj" id="2vPZMAmF1mo" role="lGtFl" />
          </node>
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="2vPZMAmGCt_" role="3acgRq">
      <ref role="30HIoZ" to="zaxg:2vPZMAmGCtk" resolve="VerticalLayout" />
      <node concept="1Koe21" id="2vPZMAmGCtA" role="1lVwrX">
        <node concept="gmrQT" id="2vPZMAmGCtB" role="1Koe22">
          <ref role="3JBHV4" to="tpee:fz12cDA" resolve="ClassConcept" />
          <node concept="gmrTC" id="2vPZMAmGCtC" role="gmrTS">
            <property role="gmPZ6" value="mui.Stack" />
            <node concept="gn1nE" id="cqTc8JkUia" role="gn1nH">
              <property role="gn1nW" value="direction" />
              <node concept="ghjhU" id="2vPZMAmGCtG" role="gn1nU">
                <node concept="Xl_RD" id="2vPZMAmGCtH" role="ghjhc">
                  <property role="Xl_RC" value="column" />
                </node>
              </node>
            </node>
            <node concept="gn1nE" id="cqTc8JkVr5" role="gn1nH">
              <property role="gn1nW" value="gap" />
              <node concept="ghjhU" id="cqTc8JkVKb" role="gn1nU">
                <node concept="Xl_RD" id="cqTc8JkVKc" role="ghjhc">
                  <property role="Xl_RC" value="gap" />
                  <node concept="17Uvod" id="cqTc8JkVKd" role="lGtFl">
                    <property role="2qtEX9" value="value" />
                    <property role="P4ACc" value="f3061a53-9226-4cc5-a443-f952ceaf5816/1070475926800/1070475926801" />
                    <node concept="3zFVjK" id="cqTc8JkVKe" role="3zH0cK">
                      <node concept="3clFbS" id="cqTc8JkVKf" role="2VODD2">
                        <node concept="3clFbF" id="cqTc8JkVKg" role="3cqZAp">
                          <node concept="2OqwBi" id="cqTc8JkVKh" role="3clFbG">
                            <node concept="3TrcHB" id="cqTc8JkVKi" role="2OqNvi">
                              <ref role="3TsBF5" to="zaxg:2vPZMAmGN8u" resolve="gap" />
                            </node>
                            <node concept="30H73N" id="cqTc8JkVKj" role="2Oq$k0" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="1W57fq" id="cqTc8JkWhy" role="lGtFl">
                <node concept="3IZrLx" id="cqTc8JkWhz" role="3IZSJc">
                  <node concept="3clFbS" id="cqTc8JkWh$" role="2VODD2">
                    <node concept="3clFbF" id="cqTc8JkWvF" role="3cqZAp">
                      <node concept="2OqwBi" id="cqTc8JkYuO" role="3clFbG">
                        <node concept="2OqwBi" id="cqTc8JkWJA" role="2Oq$k0">
                          <node concept="30H73N" id="cqTc8JkWvE" role="2Oq$k0" />
                          <node concept="3TrcHB" id="cqTc8JkWZ0" role="2OqNvi">
                            <ref role="3TsBF5" to="zaxg:2vPZMAmGN8u" resolve="gap" />
                          </node>
                        </node>
                        <node concept="17RvpY" id="cqTc8JkZLk" role="2OqNvi" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="gn1nE" id="2vPZMAmGCtD" role="gn1nH">
              <property role="gn1nW" value="sx" />
              <node concept="gjbvi" id="2vPZMAmGCtE" role="gn1nU">
                <node concept="gjbwy" id="2vPZMAmGCtI" role="gjbx_">
                  <property role="gjbwO" value="alignItems" />
                  <node concept="ghjhU" id="2vPZMAmGCtJ" role="gjbwM">
                    <node concept="Xl_RD" id="2vPZMAmGCtK" role="ghjhc">
                      <property role="Xl_RC" value="left" />
                      <node concept="17Uvod" id="cqTc8J2s9W" role="lGtFl">
                        <property role="2qtEX9" value="value" />
                        <property role="P4ACc" value="f3061a53-9226-4cc5-a443-f952ceaf5816/1070475926800/1070475926801" />
                        <node concept="3zFVjK" id="cqTc8J2s9X" role="3zH0cK">
                          <node concept="3clFbS" id="cqTc8J2s9Y" role="2VODD2">
                            <node concept="3clFbF" id="cqTc8J2sav" role="3cqZAp">
                              <node concept="3K4zz7" id="cqTc8J2sax" role="3clFbG">
                                <node concept="Xl_RD" id="cqTc8J2say" role="3K4E3e">
                                  <property role="Xl_RC" value="flex-start" />
                                </node>
                                <node concept="Xl_RD" id="cqTc8J2saz" role="3K4GZi">
                                  <property role="Xl_RC" value="center" />
                                </node>
                                <node concept="2OqwBi" id="cqTc8J2sa$" role="3K4Cdx">
                                  <node concept="2OqwBi" id="cqTc8J2sa_" role="2Oq$k0">
                                    <node concept="2OqwBi" id="cqTc8J2saA" role="2Oq$k0">
                                      <node concept="30H73N" id="cqTc8J2saB" role="2Oq$k0" />
                                      <node concept="3TrEf2" id="cqTc8J2saC" role="2OqNvi">
                                        <ref role="3Tt5mk" to="zaxg:cqTc8J2l4k" resolve="align" />
                                      </node>
                                    </node>
                                    <node concept="3TrcHB" id="cqTc8J2saD" role="2OqNvi">
                                      <ref role="3TsBF5" to="zaxg:cqTc8J2hY_" resolve="horizontal" />
                                    </node>
                                  </node>
                                  <node concept="21noJN" id="cqTc8J2saE" role="2OqNvi">
                                    <node concept="21nZrQ" id="cqTc8J2saF" role="21noJM">
                                      <ref role="21nZrZ" to="zaxg:cqTc8J2hI8" resolve="left" />
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
                <node concept="gjbwy" id="2vPZMAmNwea" role="gjbx_">
                  <property role="gjbwO" value="justifyContent" />
                  <node concept="ghjhU" id="2vPZMAmNwhb" role="gjbwM">
                    <node concept="Xl_RD" id="2vPZMAmNwha" role="ghjhc">
                      <property role="Xl_RC" value="top" />
                      <node concept="17Uvod" id="cqTc8J1R7w" role="lGtFl">
                        <property role="2qtEX9" value="value" />
                        <property role="P4ACc" value="f3061a53-9226-4cc5-a443-f952ceaf5816/1070475926800/1070475926801" />
                        <node concept="3zFVjK" id="cqTc8J1R7x" role="3zH0cK">
                          <node concept="3clFbS" id="cqTc8J1R7y" role="2VODD2">
                            <node concept="3clFbF" id="cqTc8J1RnJ" role="3cqZAp">
                              <node concept="3K4zz7" id="cqTc8J1U9D" role="3clFbG">
                                <node concept="Xl_RD" id="cqTc8J1Uaa" role="3K4E3e">
                                  <property role="Xl_RC" value="flex-start" />
                                </node>
                                <node concept="Xl_RD" id="cqTc8J1UbM" role="3K4GZi">
                                  <property role="Xl_RC" value="center" />
                                </node>
                                <node concept="2OqwBi" id="cqTc8J1Syq" role="3K4Cdx">
                                  <node concept="2OqwBi" id="cqTc8J2rfX" role="2Oq$k0">
                                    <node concept="2OqwBi" id="cqTc8J1S7r" role="2Oq$k0">
                                      <node concept="30H73N" id="cqTc8J1RnI" role="2Oq$k0" />
                                      <node concept="3TrEf2" id="cqTc8J2qB$" role="2OqNvi">
                                        <ref role="3Tt5mk" to="zaxg:cqTc8J2l4k" resolve="align" />
                                      </node>
                                    </node>
                                    <node concept="3TrcHB" id="cqTc8J2rPW" role="2OqNvi">
                                      <ref role="3TsBF5" to="zaxg:cqTc8J2hY$" resolve="vertical" />
                                    </node>
                                  </node>
                                  <node concept="21noJN" id="cqTc8J1SGS" role="2OqNvi">
                                    <node concept="21nZrQ" id="cqTc8J1SGU" role="21noJM">
                                      <ref role="21nZrZ" to="zaxg:cqTc8J1POm" resolve="top" />
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
              </node>
            </node>
            <node concept="ggXia" id="2vPZMAmGCtL" role="gn1nJ">
              <node concept="Xl_RD" id="2vPZMAmGCtM" role="ggXio">
                <property role="Xl_RC" value="Dummy" />
              </node>
              <node concept="2b32R4" id="2vPZMAmGCtN" role="lGtFl">
                <node concept="3JmXsc" id="2vPZMAmGCtO" role="2P8S$">
                  <node concept="3clFbS" id="2vPZMAmGCtP" role="2VODD2">
                    <node concept="3clFbF" id="2vPZMAmGCtQ" role="3cqZAp">
                      <node concept="2OqwBi" id="2vPZMAmGCtR" role="3clFbG">
                        <node concept="3Tsc0h" id="2vPZMAmGCtS" role="2OqNvi">
                          <ref role="3TtcxE" to="zaxg:2vPZMAmEVPK" resolve="children" />
                        </node>
                        <node concept="30H73N" id="2vPZMAmGCtT" role="2Oq$k0" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="raruj" id="2vPZMAmGCtU" role="lGtFl" />
          </node>
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="2vPZMAmDmGr" role="3acgRq">
      <ref role="30HIoZ" to="zaxg:2vPZMAnIaRS" resolve="Box" />
      <node concept="1Koe21" id="2vPZMAmDmGs" role="1lVwrX">
        <node concept="gmrQT" id="2vPZMAmDmGt" role="1Koe22">
          <ref role="3JBHV4" to="tpee:fz12cDA" resolve="ClassConcept" />
          <node concept="gmrTC" id="2vPZMAmDmGu" role="gmrTS">
            <property role="gmPZ6" value="mui.Box" />
            <node concept="gn1nE" id="2vPZMAmDH75" role="gn1nH">
              <property role="gn1nW" value="sx" />
              <node concept="gjbvi" id="2vPZMAmDH87" role="gn1nU">
                <node concept="gjbwy" id="2vPZMAmDH89" role="gjbx_">
                  <property role="gjbwO" value="mt" />
                  <node concept="ghjhU" id="2vPZMAmDH8c" role="gjbwM">
                    <node concept="Xl_RD" id="2vPZMAmDH8b" role="ghjhc">
                      <property role="Xl_RC" value="2" />
                    </node>
                  </node>
                </node>
                <node concept="gjbwy" id="2vPZMAmEP1Y" role="gjbx_">
                  <property role="gjbwO" value="alignItems" />
                  <node concept="ghjhU" id="2vPZMAmEP21" role="gjbwM">
                    <node concept="Xl_RD" id="2vPZMAmEP20" role="ghjhc">
                      <property role="Xl_RC" value="center" />
                    </node>
                  </node>
                </node>
                <node concept="gjbwy" id="2vPZMAmDH8n" role="gjbx_">
                  <property role="gjbwO" value="height" />
                  <node concept="ghjhU" id="2vPZMAmDH8q" role="gjbwM">
                    <node concept="Xl_RD" id="2vPZMAmDH8p" role="ghjhc">
                      <property role="Xl_RC" value="56px" />
                    </node>
                  </node>
                </node>
                <node concept="gjbwy" id="2vPZMAmDH8C" role="gjbx_">
                  <property role="gjbwO" value="display" />
                  <node concept="ghjhU" id="2vPZMAmDH8F" role="gjbwM">
                    <node concept="Xl_RD" id="2vPZMAmDH8E" role="ghjhc">
                      <property role="Xl_RC" value="flex" />
                    </node>
                  </node>
                </node>
                <node concept="gjbwy" id="2vPZMAmDH8N" role="gjbx_">
                  <property role="gjbwO" value="padding" />
                  <node concept="ghjhU" id="2vPZMAmDH8Q" role="gjbwM">
                    <node concept="Xl_RD" id="2vPZMAmDH8P" role="ghjhc">
                      <property role="Xl_RC" value="0 14px" />
                    </node>
                  </node>
                </node>
                <node concept="gjbwy" id="2vPZMAmDH9t" role="gjbx_">
                  <property role="gjbwO" value="backgroundColor" />
                  <node concept="ghjhU" id="2vPZMAmDH9w" role="gjbwM">
                    <node concept="Xl_RD" id="2vPZMAmDH9v" role="ghjhc">
                      <property role="Xl_RC" value="transparent" />
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="raruj" id="2vPZMAmDmHe" role="lGtFl" />
            <node concept="ggXia" id="2vPZMAmDHz9" role="gn1nJ">
              <node concept="2OqwBi" id="2vPZMAnIsFw" role="ggXio">
                <node concept="ggAI9" id="2vPZMAnIsmU" role="2Oq$k0" />
                <node concept="3TrcHB" id="2vPZMAnItgU" role="2OqNvi">
                  <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
                </node>
              </node>
              <node concept="29HgVG" id="2vPZMAnIth8" role="lGtFl">
                <node concept="3NFfHV" id="2vPZMAnIth9" role="3NFExx">
                  <node concept="3clFbS" id="2vPZMAnItha" role="2VODD2">
                    <node concept="3clFbF" id="2vPZMAnIthg" role="3cqZAp">
                      <node concept="2OqwBi" id="2vPZMAnIthb" role="3clFbG">
                        <node concept="3TrEf2" id="2vPZMAnIthe" role="2OqNvi">
                          <ref role="3Tt5mk" to="zaxg:2vPZMAnIaRX" resolve="child" />
                        </node>
                        <node concept="30H73N" id="2vPZMAnIthf" role="2Oq$k0" />
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
    <node concept="3aamgX" id="2vPZMAn_Y3G" role="3acgRq">
      <ref role="30HIoZ" to="zaxg:2vPZMAmDmtP" resolve="Label" />
      <node concept="1Koe21" id="2vPZMAn_Y3H" role="1lVwrX">
        <node concept="gmrQT" id="2vPZMAn_Y3I" role="1Koe22">
          <ref role="3JBHV4" to="tpee:fz12cDA" resolve="ClassConcept" />
          <node concept="gmrTC" id="2vPZMAn_Y3J" role="gmrTS">
            <property role="gmPZ6" value="mui.Typography" />
            <node concept="gn1nE" id="2vPZMAn_Y3K" role="gn1nH">
              <property role="gn1nW" value="sx" />
              <node concept="gjbvi" id="2vPZMAn_Y3L" role="gn1nU">
                <node concept="gjbwy" id="2vPZMAn_Y3M" role="gjbx_">
                  <property role="gjbwO" value="fontWeight" />
                  <node concept="ghjhU" id="2vPZMAn_Y3N" role="gjbwM">
                    <node concept="Xl_RD" id="2vPZMAn_Y3O" role="ghjhc">
                      <property role="Xl_RC" value="bold" />
                    </node>
                  </node>
                  <node concept="1W57fq" id="2vPZMAn_Y3P" role="lGtFl">
                    <node concept="3IZrLx" id="2vPZMAn_Y3Q" role="3IZSJc">
                      <node concept="3clFbS" id="2vPZMAn_Y3R" role="2VODD2">
                        <node concept="3clFbF" id="2vPZMAn_Y3S" role="3cqZAp">
                          <node concept="2OqwBi" id="2vPZMAn_Y3T" role="3clFbG">
                            <node concept="2OqwBi" id="2vPZMAn_Y3U" role="2Oq$k0">
                              <node concept="30H73N" id="2vPZMAn_Y3V" role="2Oq$k0" />
                              <node concept="3TrcHB" id="2vPZMAn_Y3W" role="2OqNvi">
                                <ref role="3TsBF5" to="zaxg:2vPZMAn_7No" resolve="style" />
                              </node>
                            </node>
                            <node concept="21noJN" id="2vPZMAn_Y3X" role="2OqNvi">
                              <node concept="21nZrQ" id="2vPZMAn_Y3Y" role="21noJM">
                                <ref role="21nZrZ" to="zaxg:2vPZMAn_7Nn" resolve="bold" />
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
            <node concept="raruj" id="2vPZMAn_Y4k" role="lGtFl" />
            <node concept="ggXia" id="2vPZMAn_Y4l" role="gn1nJ">
              <node concept="3cpWs3" id="2vPZMAn_Y4m" role="ggXio">
                <node concept="Xl_RD" id="2vPZMAn_Y4n" role="3uHU7w">
                  <property role="Xl_RC" value="" />
                </node>
                <node concept="2OqwBi" id="2vPZMAn_Y4o" role="3uHU7B">
                  <node concept="ggAI9" id="2vPZMAn_Y4p" role="2Oq$k0" />
                  <node concept="3TrcHB" id="2vPZMAn_Y4q" role="2OqNvi">
                    <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
                  </node>
                  <node concept="29HgVG" id="2vPZMAn_Y4r" role="lGtFl">
                    <node concept="3NFfHV" id="2vPZMAn_Y4s" role="3NFExx">
                      <node concept="3clFbS" id="2vPZMAn_Y4t" role="2VODD2">
                        <node concept="3clFbF" id="2vPZMAn_Y4u" role="3cqZAp">
                          <node concept="2OqwBi" id="2vPZMAn_Y4v" role="3clFbG">
                            <node concept="3TrEf2" id="2vPZMAn_Y4w" role="2OqNvi">
                              <ref role="3Tt5mk" to="zaxg:2vPZMAmDsnU" resolve="value" />
                            </node>
                            <node concept="30H73N" id="2vPZMAn_Y4x" role="2Oq$k0" />
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
    </node>
    <node concept="3aamgX" id="2vPZMAmMn0S" role="3acgRq">
      <ref role="30HIoZ" to="zaxg:2vPZMAmMlUm" resolve="Space" />
      <node concept="1Koe21" id="2vPZMAmMn0T" role="1lVwrX">
        <node concept="gmrQT" id="2vPZMAmMn0U" role="1Koe22">
          <ref role="3JBHV4" to="tpee:fz12cDA" resolve="ClassConcept" />
          <node concept="gmrTC" id="2vPZMAmMn0V" role="gmrTS">
            <property role="gmPZ6" value="mui.Box" />
            <node concept="gn1nE" id="2vPZMAmMn0W" role="gn1nH">
              <property role="gn1nW" value="sx" />
              <node concept="gjbvi" id="2vPZMAmMn0X" role="gn1nU">
                <node concept="gjbwy" id="2vPZMAmMn0Y" role="gjbx_">
                  <property role="gjbwO" value="mt" />
                  <node concept="ghjhU" id="2vPZMAmMn0Z" role="gjbwM">
                    <node concept="Xl_RD" id="2vPZMAmMn10" role="ghjhc">
                      <property role="Xl_RC" value="2" />
                    </node>
                  </node>
                </node>
                <node concept="gjbwy" id="2vPZMAmMn11" role="gjbx_">
                  <property role="gjbwO" value="alignItems" />
                  <node concept="ghjhU" id="2vPZMAmMn12" role="gjbwM">
                    <node concept="Xl_RD" id="2vPZMAmMn13" role="ghjhc">
                      <property role="Xl_RC" value="center" />
                    </node>
                  </node>
                </node>
                <node concept="gjbwy" id="2vPZMAmMn14" role="gjbx_">
                  <property role="gjbwO" value="height" />
                  <node concept="ghjhU" id="2vPZMAmMn15" role="gjbwM">
                    <node concept="Xl_RD" id="2vPZMAmMn16" role="ghjhc">
                      <property role="Xl_RC" value="56px" />
                    </node>
                  </node>
                </node>
                <node concept="gjbwy" id="2vPZMAmMn17" role="gjbx_">
                  <property role="gjbwO" value="display" />
                  <node concept="ghjhU" id="2vPZMAmMn18" role="gjbwM">
                    <node concept="Xl_RD" id="2vPZMAmMn19" role="ghjhc">
                      <property role="Xl_RC" value="flex" />
                    </node>
                  </node>
                </node>
                <node concept="gjbwy" id="2vPZMAmMn1a" role="gjbx_">
                  <property role="gjbwO" value="padding" />
                  <node concept="ghjhU" id="2vPZMAmMn1b" role="gjbwM">
                    <node concept="Xl_RD" id="2vPZMAmMn1c" role="ghjhc">
                      <property role="Xl_RC" value="0 14px" />
                    </node>
                  </node>
                </node>
                <node concept="gjbwy" id="2vPZMAmMn1d" role="gjbx_">
                  <property role="gjbwO" value="typography" />
                  <node concept="ghjhU" id="2vPZMAmMn1e" role="gjbwM">
                    <node concept="Xl_RD" id="2vPZMAmMn1f" role="ghjhc">
                      <property role="Xl_RC" value="body1" />
                    </node>
                  </node>
                </node>
                <node concept="gjbwy" id="2vPZMAmMn1g" role="gjbx_">
                  <property role="gjbwO" value="backgroundColor" />
                  <node concept="ghjhU" id="2vPZMAmMn1h" role="gjbwM">
                    <node concept="Xl_RD" id="2vPZMAmMn1i" role="ghjhc">
                      <property role="Xl_RC" value="transparent" />
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="raruj" id="2vPZMAmMn1j" role="lGtFl" />
            <node concept="ggXia" id="2vPZMAmMn1k" role="gn1nJ">
              <node concept="Xl_RD" id="2vPZMAmMn1m" role="ggXio">
                <property role="Xl_RC" value=" " />
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="2vPZMAmYGI_" role="3acgRq">
      <ref role="30HIoZ" to="zaxg:2vPZMAmYEO_" resolve="Button" />
      <node concept="1Koe21" id="2vPZMAmYGIB" role="1lVwrX">
        <node concept="gmrQT" id="2vPZMAmYGIC" role="1Koe22">
          <ref role="3JBHV4" to="tpee:fz12cDA" resolve="ClassConcept" />
          <node concept="gmrTC" id="2vPZMAmYGID" role="gmrTS">
            <property role="gmPZ6" value="mui.Button" />
            <node concept="gn1nE" id="2vPZMAn6sdF" role="gn1nH">
              <property role="gn1nW" value="variant" />
              <node concept="ghjhU" id="2vPZMAn6sfo" role="gn1nU">
                <node concept="Xl_RD" id="2vPZMAn6sfn" role="ghjhc">
                  <property role="Xl_RC" value="contained" />
                </node>
              </node>
            </node>
            <node concept="gn1nE" id="2vPZMAn5kVM" role="gn1nH">
              <property role="gn1nW" value="onClick" />
              <node concept="ghf20" id="2vPZMAn5kWN" role="gn1nU">
                <node concept="24bxNJ" id="2vPZMAn5kWQ" role="ghfyX">
                  <node concept="3clFbS" id="2vPZMAn5kWS" role="24b$8e" />
                </node>
                <node concept="29HgVG" id="2vPZMAn5lMu" role="lGtFl">
                  <node concept="3NFfHV" id="2vPZMAn5lMv" role="3NFExx">
                    <node concept="3clFbS" id="2vPZMAn5lMw" role="2VODD2">
                      <node concept="3clFbF" id="2vPZMAn5lN3" role="3cqZAp">
                        <node concept="2OqwBi" id="2vPZMAn5m0N" role="3clFbG">
                          <node concept="30H73N" id="2vPZMAn5lN2" role="2Oq$k0" />
                          <node concept="3TrEf2" id="2vPZMAn5mqc" role="2OqNvi">
                            <ref role="3Tt5mk" to="zaxg:2vPZMAneuaN" resolve="command" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="raruj" id="2vPZMAmYGJ9" role="lGtFl" />
            <node concept="ggXia" id="2vPZMAmYGJa" role="gn1nJ">
              <node concept="Xl_RD" id="2vPZMAmYJQF" role="ggXio">
                <property role="Xl_RC" value="text" />
                <node concept="17Uvod" id="2vPZMAmYJQM" role="lGtFl">
                  <property role="2qtEX9" value="value" />
                  <property role="P4ACc" value="f3061a53-9226-4cc5-a443-f952ceaf5816/1070475926800/1070475926801" />
                  <node concept="3zFVjK" id="2vPZMAmYJQN" role="3zH0cK">
                    <node concept="3clFbS" id="2vPZMAmYJQO" role="2VODD2">
                      <node concept="3clFbF" id="2vPZMAmYJRk" role="3cqZAp">
                        <node concept="2OqwBi" id="2vPZMAmYMix" role="3clFbG">
                          <node concept="1PxgMI" id="2vPZMAmYM4N" role="2Oq$k0">
                            <node concept="chp4Y" id="2vPZMAmYM5F" role="3oSUPX">
                              <ref role="cht4Q" to="zaxg:2vPZMAmYEOb" resolve="TextButtonLabel" />
                            </node>
                            <node concept="2OqwBi" id="2vPZMAmYKl8" role="1m5AlR">
                              <node concept="30H73N" id="2vPZMAmYJRj" role="2Oq$k0" />
                              <node concept="3TrEf2" id="2vPZMAmYKJ6" role="2OqNvi">
                                <ref role="3Tt5mk" to="zaxg:2vPZMAmYEOB" resolve="label" />
                              </node>
                            </node>
                          </node>
                          <node concept="3TrcHB" id="2vPZMAmYMXP" role="2OqNvi">
                            <ref role="3TsBF5" to="zaxg:2vPZMAmYEOc" resolve="text" />
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
      <node concept="30G5F_" id="2vPZMAmYHTs" role="30HLyM">
        <node concept="3clFbS" id="2vPZMAmYHTt" role="2VODD2">
          <node concept="3clFbF" id="2vPZMAmYHWn" role="3cqZAp">
            <node concept="2OqwBi" id="2vPZMAmYJmt" role="3clFbG">
              <node concept="2OqwBi" id="2vPZMAmYIny" role="2Oq$k0">
                <node concept="30H73N" id="2vPZMAmYHWm" role="2Oq$k0" />
                <node concept="3TrEf2" id="2vPZMAmYIKV" role="2OqNvi">
                  <ref role="3Tt5mk" to="zaxg:2vPZMAmYEOB" resolve="label" />
                </node>
              </node>
              <node concept="1mIQ4w" id="2vPZMAmYJxv" role="2OqNvi">
                <node concept="chp4Y" id="2vPZMAmYJ$h" role="cj9EA">
                  <ref role="cht4Q" to="zaxg:2vPZMAmYEOb" resolve="TextButtonLabel" />
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="2vPZMAn9K7w" role="3acgRq">
      <ref role="30HIoZ" to="zaxg:2vPZMAmYEO_" resolve="Button" />
      <node concept="1Koe21" id="2vPZMAn9K7x" role="1lVwrX">
        <node concept="gmrQT" id="2vPZMAn9K7y" role="1Koe22">
          <ref role="3JBHV4" to="tpee:fz12cDA" resolve="ClassConcept" />
          <node concept="gmrTC" id="2vPZMAn9K7z" role="gmrTS">
            <property role="gmPZ6" value="mui.Button" />
            <node concept="gn1nE" id="2vPZMAnf3Bb" role="gn1nH">
              <property role="gn1nW" value="onClick" />
              <node concept="ghf20" id="2vPZMAnf3Bc" role="gn1nU">
                <node concept="24bxNJ" id="2vPZMAnf3Bd" role="ghfyX">
                  <node concept="3clFbS" id="2vPZMAnf3Be" role="24b$8e" />
                </node>
                <node concept="29HgVG" id="2vPZMAnf3Bf" role="lGtFl">
                  <node concept="3NFfHV" id="2vPZMAnf3Bg" role="3NFExx">
                    <node concept="3clFbS" id="2vPZMAnf3Bh" role="2VODD2">
                      <node concept="3clFbF" id="2vPZMAnf3Bi" role="3cqZAp">
                        <node concept="2OqwBi" id="2vPZMAnf3Bj" role="3clFbG">
                          <node concept="30H73N" id="2vPZMAnf3Bk" role="2Oq$k0" />
                          <node concept="3TrEf2" id="2vPZMAnf3Bl" role="2OqNvi">
                            <ref role="3Tt5mk" to="zaxg:2vPZMAneuaN" resolve="command" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="raruj" id="2vPZMAn9K7M" role="lGtFl" />
            <node concept="gmrTC" id="2vPZMAmXCLq" role="gn1nJ">
              <property role="gmPZ6" value="mui.icons.Delete" />
              <node concept="17Uvod" id="2vPZMAn9KPq" role="lGtFl">
                <property role="2qtEX9" value="componentType" />
                <property role="P4ACc" value="67accce2-9676-4728-9e9c-8b15ea30d924/8876946878573903439/8876946878573977569" />
                <node concept="3zFVjK" id="2vPZMAn9KPr" role="3zH0cK">
                  <node concept="3clFbS" id="2vPZMAn9KPs" role="2VODD2">
                    <node concept="3clFbF" id="2vPZMAn9KPT" role="3cqZAp">
                      <node concept="2OqwBi" id="2vPZMAnBZ3o" role="3clFbG">
                        <node concept="2OqwBi" id="2vPZMAn9MZk" role="2Oq$k0">
                          <node concept="1PxgMI" id="2vPZMAn9Mxi" role="2Oq$k0">
                            <node concept="chp4Y" id="2vPZMAn9Mya" role="3oSUPX">
                              <ref role="cht4Q" to="zaxg:2vPZMAn8wb$" resolve="ButtonLabelIcon" />
                            </node>
                            <node concept="2OqwBi" id="2vPZMAn9LjH" role="1m5AlR">
                              <node concept="30H73N" id="2vPZMAn9KPS" role="2Oq$k0" />
                              <node concept="3TrEf2" id="2vPZMAn9LHF" role="2OqNvi">
                                <ref role="3Tt5mk" to="zaxg:2vPZMAmYEOB" resolve="label" />
                              </node>
                            </node>
                          </node>
                          <node concept="3TrEf2" id="2vPZMAnBY$H" role="2OqNvi">
                            <ref role="3Tt5mk" to="zaxg:2vPZMAnBVHD" resolve="icon" />
                          </node>
                        </node>
                        <node concept="3TrcHB" id="2vPZMAnBZd_" role="2OqNvi">
                          <ref role="3TsBF5" to="zaxg:2vPZMAnBVdV" resolve="name" />
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
      <node concept="30G5F_" id="2vPZMAn9K80" role="30HLyM">
        <node concept="3clFbS" id="2vPZMAn9K81" role="2VODD2">
          <node concept="3clFbF" id="2vPZMAn9K82" role="3cqZAp">
            <node concept="2OqwBi" id="2vPZMAn9K83" role="3clFbG">
              <node concept="2OqwBi" id="2vPZMAn9K84" role="2Oq$k0">
                <node concept="30H73N" id="2vPZMAn9K85" role="2Oq$k0" />
                <node concept="3TrEf2" id="2vPZMAn9K86" role="2OqNvi">
                  <ref role="3Tt5mk" to="zaxg:2vPZMAmYEOB" resolve="label" />
                </node>
              </node>
              <node concept="1mIQ4w" id="2vPZMAn9K87" role="2OqNvi">
                <node concept="chp4Y" id="2vPZMAn9K88" role="cj9EA">
                  <ref role="cht4Q" to="zaxg:2vPZMAn8wb$" resolve="IconButtonLabel" />
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="2vPZMAnf3VY" role="3acgRq">
      <ref role="30HIoZ" to="zaxg:2vPZMAneuaB" resolve="Command" />
      <node concept="1Koe21" id="2vPZMAnf3ZK" role="1lVwrX">
        <node concept="gmrQT" id="2vPZMAnf3ZL" role="1Koe22">
          <ref role="3JBHV4" to="tpee:fz12cDA" resolve="ClassConcept" />
          <node concept="gmrTC" id="2vPZMAnf3ZM" role="gmrTS">
            <property role="gmPZ6" value="mui.Button" />
            <node concept="gn1nE" id="2vPZMAnf3ZN" role="gn1nH">
              <property role="gn1nW" value="onClick" />
              <node concept="ghf20" id="2vPZMAnf3ZO" role="gn1nU">
                <node concept="24bxNJ" id="2vPZMAnf3ZP" role="ghfyX">
                  <node concept="3clFbS" id="2vPZMAnf3ZQ" role="24b$8e">
                    <node concept="3clFbF" id="2vPZMAnf4qk" role="3cqZAp">
                      <node concept="37vLTI" id="2vPZMAnf8vA" role="3clFbG">
                        <node concept="Xl_RD" id="2vPZMAnf8vS" role="37vLTx">
                          <property role="Xl_RC" value="Hello" />
                        </node>
                        <node concept="2OqwBi" id="2vPZMAnf4Rk" role="37vLTJ">
                          <node concept="ggAI9" id="2vPZMAnf4qj" role="2Oq$k0" />
                          <node concept="3TrcHB" id="2vPZMAnf5sI" role="2OqNvi">
                            <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
                          </node>
                        </node>
                      </node>
                      <node concept="2b32R4" id="2vPZMAnf9fl" role="lGtFl">
                        <node concept="3JmXsc" id="2vPZMAnf9fo" role="2P8S$">
                          <node concept="3clFbS" id="2vPZMAnf9fp" role="2VODD2">
                            <node concept="3clFbF" id="2vPZMAnf9fv" role="3cqZAp">
                              <node concept="2OqwBi" id="2vPZMAnfa77" role="3clFbG">
                                <node concept="2OqwBi" id="2vPZMAnf9fq" role="2Oq$k0">
                                  <node concept="3TrEf2" id="2vPZMAnf9H_" role="2OqNvi">
                                    <ref role="3Tt5mk" to="zaxg:2vPZMAneuaC" resolve="statements" />
                                  </node>
                                  <node concept="30H73N" id="2vPZMAnf9fu" role="2Oq$k0" />
                                </node>
                                <node concept="3Tsc0h" id="2vPZMAnfaOp" role="2OqNvi">
                                  <ref role="3TtcxE" to="tpee:fzcqZ_x" resolve="statement" />
                                </node>
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="raruj" id="2vPZMAnf4qi" role="lGtFl" />
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="2vPZMAmJi98" role="3acgRq">
      <ref role="30HIoZ" to="zaxg:2vPZMAmJaEH" resolve="Header" />
      <node concept="1Koe21" id="2vPZMAmJi99" role="1lVwrX">
        <node concept="gmrQT" id="2vPZMAmJi9a" role="1Koe22">
          <ref role="3JBHV4" to="tpee:fz12cDA" resolve="ClassConcept" />
          <node concept="gmrTC" id="2vPZMAmJi9b" role="gmrTS">
            <property role="gmPZ6" value="mui.Typography" />
            <node concept="gn1nE" id="2vPZMAmJj2X" role="gn1nH">
              <property role="gn1nW" value="variant" />
              <node concept="ghjhU" id="2vPZMAmJjsD" role="gn1nU">
                <node concept="3cpWs3" id="2vPZMAmU4Zx" role="ghjhc">
                  <node concept="Xl_RD" id="2vPZMAmJjsC" role="3uHU7B">
                    <property role="Xl_RC" value="h" />
                  </node>
                  <node concept="Xl_RD" id="2vPZMAmU69p" role="3uHU7w">
                    <property role="Xl_RC" value="1" />
                    <node concept="17Uvod" id="2vPZMAmU6a1" role="lGtFl">
                      <property role="2qtEX9" value="value" />
                      <property role="P4ACc" value="f3061a53-9226-4cc5-a443-f952ceaf5816/1070475926800/1070475926801" />
                      <node concept="3zFVjK" id="2vPZMAmU6a2" role="3zH0cK">
                        <node concept="3clFbS" id="2vPZMAmU6a3" role="2VODD2">
                          <node concept="3clFbF" id="2vPZMAmU6aH" role="3cqZAp">
                            <node concept="3cpWs3" id="2vPZMAmUfhF" role="3clFbG">
                              <node concept="Xl_RD" id="2vPZMAmUfhJ" role="3uHU7w">
                                <property role="Xl_RC" value="" />
                              </node>
                              <node concept="2OqwBi" id="2vPZMAmU6oh" role="3uHU7B">
                                <node concept="30H73N" id="2vPZMAmU6aG" role="2Oq$k0" />
                                <node concept="3TrcHB" id="2vPZMAmU6YC" role="2OqNvi">
                                  <ref role="3TsBF5" to="zaxg:2vPZMAmJaEJ" resolve="level" />
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
            <node concept="gn1nE" id="2vPZMAmUg8R" role="gn1nH">
              <property role="gn1nW" value="component" />
              <node concept="ghjhU" id="2vPZMAmUg8S" role="gn1nU">
                <node concept="3cpWs3" id="2vPZMAmUg8T" role="ghjhc">
                  <node concept="Xl_RD" id="2vPZMAmUg8U" role="3uHU7B">
                    <property role="Xl_RC" value="h" />
                  </node>
                  <node concept="Xl_RD" id="2vPZMAmUg8V" role="3uHU7w">
                    <property role="Xl_RC" value="1" />
                    <node concept="17Uvod" id="2vPZMAmUg8W" role="lGtFl">
                      <property role="2qtEX9" value="value" />
                      <property role="P4ACc" value="f3061a53-9226-4cc5-a443-f952ceaf5816/1070475926800/1070475926801" />
                      <node concept="3zFVjK" id="2vPZMAmUg8X" role="3zH0cK">
                        <node concept="3clFbS" id="2vPZMAmUg8Y" role="2VODD2">
                          <node concept="3clFbF" id="2vPZMAmUg8Z" role="3cqZAp">
                            <node concept="3cpWs3" id="2vPZMAmUg90" role="3clFbG">
                              <node concept="Xl_RD" id="2vPZMAmUg91" role="3uHU7w">
                                <property role="Xl_RC" value="" />
                              </node>
                              <node concept="2OqwBi" id="2vPZMAmUg92" role="3uHU7B">
                                <node concept="30H73N" id="2vPZMAmUg93" role="2Oq$k0" />
                                <node concept="3TrcHB" id="2vPZMAmUg94" role="2OqNvi">
                                  <ref role="3TsBF5" to="zaxg:2vPZMAmJaEJ" resolve="level" />
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
            <node concept="gn1nE" id="2vPZMAmLi55" role="gn1nH">
              <property role="gn1nW" value="gutterBottom" />
              <node concept="ghjhU" id="2vPZMAmLi78" role="gn1nU">
                <node concept="Xl_RD" id="2vPZMAmLi77" role="ghjhc">
                  <property role="Xl_RC" value="" />
                </node>
              </node>
            </node>
            <node concept="raruj" id="2vPZMAmJi9z" role="lGtFl" />
            <node concept="ggXia" id="2vPZMAmJi9$" role="gn1nJ">
              <node concept="3cpWs3" id="2vPZMAmJi9_" role="ggXio">
                <node concept="Xl_RD" id="2vPZMAmJi9A" role="3uHU7w">
                  <property role="Xl_RC" value="" />
                </node>
                <node concept="2OqwBi" id="2vPZMAmJi9B" role="3uHU7B">
                  <node concept="ggAI9" id="2vPZMAmJi9C" role="2Oq$k0" />
                  <node concept="3TrcHB" id="2vPZMAmJi9D" role="2OqNvi">
                    <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
                  </node>
                  <node concept="29HgVG" id="2vPZMAmJi9E" role="lGtFl">
                    <node concept="3NFfHV" id="2vPZMAmJi9F" role="3NFExx">
                      <node concept="3clFbS" id="2vPZMAmJi9G" role="2VODD2">
                        <node concept="3clFbF" id="2vPZMAmJi9H" role="3cqZAp">
                          <node concept="2OqwBi" id="2vPZMAmJi9I" role="3clFbG">
                            <node concept="3TrEf2" id="2vPZMAmJi9J" role="2OqNvi">
                              <ref role="3Tt5mk" to="zaxg:2vPZMAmJaEK" resolve="text" />
                            </node>
                            <node concept="30H73N" id="2vPZMAmJi9K" role="2Oq$k0" />
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
    </node>
  </node>
  <node concept="bUwia" id="2vPZMAoHzWc">
    <property role="TrG5h" value="beforeMain" />
    <node concept="3aamgX" id="2vPZMAoHPSX" role="3acgRq">
      <ref role="30HIoZ" to="zaxg:2vPZMAoGIbo" resolve="LabelWidgetPair" />
      <node concept="1Koe21" id="2vPZMAoHPT0" role="1lVwrX">
        <node concept="gmrQT" id="2vPZMAoHPT4" role="1Koe22">
          <ref role="3JBHV4" to="tpee:fz12cDA" resolve="ClassConcept" />
          <node concept="2Ln$92" id="2vPZMAoHPT6" role="gmrTS">
            <node concept="raruj" id="2vPZMAoHPT8" role="lGtFl" />
            <node concept="2Kjlbh" id="2vPZMAoJZEo" role="2Ln$9p">
              <node concept="2Lk9xs" id="2vPZMAoHPT9" role="2Kjlbk">
                <property role="2KoofL" value="2vPZMAn_7Nn/bold" />
                <node concept="Xl_RD" id="2vPZMAoHPTb" role="2Lk3Fj">
                  <property role="Xl_RC" value="a" />
                  <node concept="29HgVG" id="2vPZMAoHPTp" role="lGtFl">
                    <node concept="3NFfHV" id="2vPZMAoHPTq" role="3NFExx">
                      <node concept="3clFbS" id="2vPZMAoHPTr" role="2VODD2">
                        <node concept="3clFbF" id="2vPZMAoHPTx" role="3cqZAp">
                          <node concept="2OqwBi" id="2vPZMAoHPTs" role="3clFbG">
                            <node concept="3TrEf2" id="2vPZMAoHPTv" role="2OqNvi">
                              <ref role="3Tt5mk" to="zaxg:2vPZMAoGIbq" resolve="label" />
                            </node>
                            <node concept="30H73N" id="2vPZMAoHPTw" role="2Oq$k0" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="2Lfa6Z" id="2vPZMAoHQg2" role="2Ln$9p" />
            <node concept="2Ly8ie" id="2vPZMAoHQxP" role="2Ln$9p">
              <node concept="2Ly3GW" id="2vPZMAoHQxR" role="2Ly3GP">
                <ref role="2Ly3GY" to="tpck:h0TrG11" resolve="name" />
                <node concept="ggAI9" id="2vPZMAoHQEN" role="2Ly3GZ" />
              </node>
              <node concept="29HgVG" id="2vPZMAoHQO3" role="lGtFl">
                <node concept="3NFfHV" id="2vPZMAoHQO4" role="3NFExx">
                  <node concept="3clFbS" id="2vPZMAoHQO5" role="2VODD2">
                    <node concept="3clFbF" id="2vPZMAoHQOb" role="3cqZAp">
                      <node concept="2OqwBi" id="2vPZMAoHQO6" role="3clFbG">
                        <node concept="3TrEf2" id="2vPZMAoHQO9" role="2OqNvi">
                          <ref role="3Tt5mk" to="zaxg:2vPZMAoGIbr" resolve="widget" />
                        </node>
                        <node concept="30H73N" id="2vPZMAoHQOa" role="2Oq$k0" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="G4ZHx" id="cqTc8J6ZLc" role="G4MFJ" />
          </node>
        </node>
      </node>
    </node>
  </node>
</model>

