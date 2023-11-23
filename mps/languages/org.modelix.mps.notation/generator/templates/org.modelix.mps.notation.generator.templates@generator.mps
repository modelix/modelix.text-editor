<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:2fe6cd77-4aa8-40a0-b3ed-e4eb6d6a496f(org.modelix.mps.notation.generator.templates@generator)">
  <persistence version="9" />
  <languages>
    <use id="6b3888c1-9802-44d8-8baf-f8e6c33ed689" name="jetbrains.mps.kotlin" version="11" />
    <use id="2405a196-e75d-462c-938b-ae8e3fac20aa" name="jetbrains.mps.baseLanguage.kotlinRefs" version="0" />
    <use id="eb56ebf4-df56-438e-af06-fc1cd08b495a" name="jetbrains.mps.kotlin.smodel" version="0" />
    <use id="b17a9ec8-44a5-40a1-9216-058d277424eb" name="jetbrains.mps.kotlin.internal" version="0" />
    <use id="9e4ff22b-60f1-43ef-a50b-f9f0fcec22e0" name="jetbrains.mps.kotlin.javaRefs" version="0" />
    <use id="b401a680-8325-4110-8fd3-84331ff25bef" name="jetbrains.mps.lang.generator" version="4" />
    <devkit ref="a2eb3a43-fcc2-4200-80dc-c60110c4862d(jetbrains.mps.devkit.templates)" />
  </languages>
  <imports>
    <import index="f8gn" ref="r:37580d55-803b-40f6-8108-d95a9fce8d6e(org.modelix.mps.notation.structure)" />
    <import index="i6vs" ref="771cf896-ab1b-409b-93b4-48c3bbb6b23f/kotlinJvm:org.modelix.aspects(org.modelix.mps.editor.ssr.stubs/)" />
    <import index="dbfy" ref="771cf896-ab1b-409b-93b4-48c3bbb6b23f/kotlinJvm:org.modelix.editor(org.modelix.mps.editor.ssr.stubs/)" />
    <import index="1g18" ref="771cf896-ab1b-409b-93b4-48c3bbb6b23f/kotlinJvm:org.modelix.model.mpsadapters(org.modelix.mps.editor.ssr.stubs/)" />
    <import index="vndm" ref="6ed54515-acc8-4d1e-a16c-9fd6cfe951ea/java:jetbrains.mps.smodel.language(MPS.Core/)" />
    <import index="2k9e" ref="6ed54515-acc8-4d1e-a16c-9fd6cfe951ea/java:jetbrains.mps.smodel.adapter.structure(MPS.Core/)" />
    <import index="e8bb" ref="6ed54515-acc8-4d1e-a16c-9fd6cfe951ea/java:jetbrains.mps.smodel.adapter.ids(MPS.Core/)" />
    <import index="lui2" ref="8865b7a8-5271-43d3-884c-6fd1d9cfdd34/java:org.jetbrains.mps.openapi.module(MPS.OpenAPI/)" />
    <import index="w1kc" ref="6ed54515-acc8-4d1e-a16c-9fd6cfe951ea/java:jetbrains.mps.smodel(MPS.Core/)" />
    <import index="pjrh" ref="6ed54515-acc8-4d1e-a16c-9fd6cfe951ea/java:jetbrains.mps.smodel.adapter(MPS.Core/)" />
    <import index="c17a" ref="8865b7a8-5271-43d3-884c-6fd1d9cfdd34/java:org.jetbrains.mps.openapi.language(MPS.OpenAPI/)" />
    <import index="b15i" ref="771cf896-ab1b-409b-93b4-48c3bbb6b23f/kotlinJvm:org.modelix.model.api(org.modelix.mps.editor.ssr.stubs/)" />
    <import index="mhbf" ref="8865b7a8-5271-43d3-884c-6fd1d9cfdd34/java:org.jetbrains.mps.openapi.model(MPS.OpenAPI/)" implicit="true" />
    <import index="tpcu" ref="r:00000000-0000-4000-0000-011c89590282(jetbrains.mps.lang.core.behavior)" implicit="true" />
  </imports>
  <registry>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1202948039474" name="jetbrains.mps.baseLanguage.structure.InstanceMethodCallOperation" flags="nn" index="liA8E" />
      <concept id="1197027756228" name="jetbrains.mps.baseLanguage.structure.DotExpression" flags="nn" index="2OqwBi">
        <child id="1197027771414" name="operand" index="2Oq$k0" />
        <child id="1197027833540" name="operation" index="2OqNvi" />
      </concept>
      <concept id="1137021947720" name="jetbrains.mps.baseLanguage.structure.ConceptFunction" flags="in" index="2VMwT0">
        <child id="1137022507850" name="body" index="2VODD2" />
      </concept>
      <concept id="1081236700937" name="jetbrains.mps.baseLanguage.structure.StaticMethodCall" flags="nn" index="2YIFZM">
        <reference id="1144433194310" name="classConcept" index="1Pybhc" />
      </concept>
      <concept id="1070534934090" name="jetbrains.mps.baseLanguage.structure.CastExpression" flags="nn" index="10QFUN">
        <child id="1070534934091" name="type" index="10QFUM" />
        <child id="1070534934092" name="expression" index="10QFUP" />
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
      <concept id="1068581242864" name="jetbrains.mps.baseLanguage.structure.LocalVariableDeclarationStatement" flags="nn" index="3cpWs8">
        <child id="1068581242865" name="localVariableDeclaration" index="3cpWs9" />
      </concept>
      <concept id="1068581242863" name="jetbrains.mps.baseLanguage.structure.LocalVariableDeclaration" flags="nr" index="3cpWsn" />
      <concept id="1204053956946" name="jetbrains.mps.baseLanguage.structure.IMethodCall" flags="ngI" index="1ndlxa">
        <reference id="1068499141037" name="baseMethodDeclaration" index="37wK5l" />
        <child id="1068499141038" name="actualArgument" index="37wK5m" />
      </concept>
      <concept id="1107535904670" name="jetbrains.mps.baseLanguage.structure.ClassifierType" flags="in" index="3uibUv">
        <reference id="1107535924139" name="classifier" index="3uigEE" />
      </concept>
    </language>
    <language id="b401a680-8325-4110-8fd3-84331ff25bef" name="jetbrains.mps.lang.generator">
      <concept id="1095416546421" name="jetbrains.mps.lang.generator.structure.MappingConfiguration" flags="ig" index="bUwia">
        <child id="1167514678247" name="rootMappingRule" index="3lj3bC" />
      </concept>
      <concept id="1168619357332" name="jetbrains.mps.lang.generator.structure.RootTemplateAnnotation" flags="lg" index="n94m4">
        <reference id="1168619429071" name="applicableConcept" index="n9lRv" />
      </concept>
      <concept id="1167169188348" name="jetbrains.mps.lang.generator.structure.TemplateFunctionParameter_sourceNode" flags="nn" index="30H73N" />
      <concept id="1167169308231" name="jetbrains.mps.lang.generator.structure.BaseMappingRule" flags="ng" index="30H$t8">
        <reference id="1167169349424" name="applicableConcept" index="30HIoZ" />
      </concept>
      <concept id="1087833241328" name="jetbrains.mps.lang.generator.structure.PropertyMacro" flags="ln" index="17Uvod">
        <child id="1167756362303" name="propertyValueFunction" index="3zH0cK" />
      </concept>
      <concept id="1167514355419" name="jetbrains.mps.lang.generator.structure.Root_MappingRule" flags="lg" index="3lhOvk">
        <reference id="1167514355421" name="template" index="3lhOvi" />
      </concept>
      <concept id="1167756080639" name="jetbrains.mps.lang.generator.structure.PropertyMacro_GetPropertyValue" flags="in" index="3zFVjK" />
      <concept id="1167951910403" name="jetbrains.mps.lang.generator.structure.SourceSubstituteMacro_SourceNodesQuery" flags="in" index="3JmXsc" />
      <concept id="1118786554307" name="jetbrains.mps.lang.generator.structure.LoopMacro" flags="ln" index="1WS0z7">
        <child id="1167952069335" name="sourceNodesQuery" index="3Jn$fo" />
      </concept>
    </language>
    <language id="9e4ff22b-60f1-43ef-a50b-f9f0fcec22e0" name="jetbrains.mps.kotlin.javaRefs">
      <concept id="2420378304458348492" name="jetbrains.mps.kotlin.javaRefs.structure.JavaMethodCall" flags="ng" index="2yQVVM">
        <reference id="2420378304458348798" name="method" index="2yQV70" />
      </concept>
      <concept id="7565185111013327093" name="jetbrains.mps.kotlin.javaRefs.structure.JavaClassType" flags="ng" index="2EYIWN">
        <reference id="7565185111013327225" name="javaClass" index="2EYIUZ" />
      </concept>
    </language>
    <language id="6b3888c1-9802-44d8-8baf-f8e6c33ed689" name="jetbrains.mps.kotlin">
      <concept id="1243006380186890016" name="jetbrains.mps.kotlin.structure.UnaryExpression" flags="ng" index="21Pmin">
        <child id="1243006380186890019" name="operand" index="21Pmik" />
      </concept>
      <concept id="1243006380188575965" name="jetbrains.mps.kotlin.structure.StringLiteralRaw" flags="ng" index="21VMdE">
        <property id="1243006380188575966" name="content" index="21VMdD" />
      </concept>
      <concept id="5622728304609204267" name="jetbrains.mps.kotlin.structure.EmptyDeclaration" flags="ng" index="eKYAL" />
      <concept id="1991556721070973461" name="jetbrains.mps.kotlin.structure.EmptyStatement" flags="ng" index="AQkLs" />
      <concept id="6389031306614148912" name="jetbrains.mps.kotlin.structure.StringLiteralLine" flags="ng" index="Df6$J">
        <child id="6389031306614152501" name="parts" index="Df7GE" />
      </concept>
      <concept id="1314219036499415210" name="jetbrains.mps.kotlin.structure.AbstractPropertyDeclaration" flags="ng" index="TDTJE">
        <property id="2936055411806090009" name="isReadonly" index="1Xb$ne" />
        <child id="2936055411798374330" name="assignment" index="1XD05H" />
      </concept>
      <concept id="1314219036498225646" name="jetbrains.mps.kotlin.structure.IStatementHolder" flags="ngI" index="THmaI">
        <child id="1314219036498225649" name="statements" index="THmaL" />
      </concept>
      <concept id="6565639133219057675" name="jetbrains.mps.kotlin.structure.IArguments" flags="ngI" index="TWioa">
        <child id="6565639133219057676" name="arguments" index="TWiod" />
      </concept>
      <concept id="7027413324315184167" name="jetbrains.mps.kotlin.structure.ILambdaAsArgument" flags="ngI" index="3$8iW8">
        <child id="2936055411798374269" name="lambda" index="1XD06E" />
      </concept>
      <concept id="4662566628538083705" name="jetbrains.mps.kotlin.structure.FunctionCallExpression" flags="ng" index="1NbEFs" />
      <concept id="2936055411798373627" name="jetbrains.mps.kotlin.structure.StringLiteral" flags="ng" index="1XD08G">
        <child id="6389031306614148417" name="lines" index="Df6Hu" />
      </concept>
      <concept id="2936055411798373537" name="jetbrains.mps.kotlin.structure.PropertyDeclaration" flags="ng" index="1XD09Q">
        <child id="1314219036499436525" name="declaration" index="TDYyH" />
      </concept>
      <concept id="2936055411798373456" name="jetbrains.mps.kotlin.structure.NavigationOperation" flags="ng" index="1XD0a7">
        <child id="2936055411798374203" name="target" index="1XD07G" />
      </concept>
      <concept id="2936055411798373439" name="jetbrains.mps.kotlin.structure.AbstractFunctionCall" flags="ng" index="1XD0bC">
        <reference id="1991556721072067817" name="function" index="AarEw" />
      </concept>
      <concept id="2936055411798373697" name="jetbrains.mps.kotlin.structure.ReceiverType" flags="ng" index="1XD0em">
        <child id="2936055411798374592" name="type" index="1XD0Sn" />
      </concept>
      <concept id="2936055411798373745" name="jetbrains.mps.kotlin.structure.VariableDeclaration" flags="ng" index="1XD0eA" />
      <concept id="2936055411798373753" name="jetbrains.mps.kotlin.structure.ValueArgument" flags="ng" index="1XD0eI">
        <child id="2936055411798374692" name="expression" index="1XD0ZN" />
      </concept>
      <concept id="2936055411798373655" name="jetbrains.mps.kotlin.structure.LambdaLiteral" flags="ng" index="1XD0f0" />
      <concept id="2936055411798373673" name="jetbrains.mps.kotlin.structure.KotlinFile" flags="ng" index="1XD0fY">
        <child id="2936055411798374537" name="declarations" index="1XD0Tu" />
      </concept>
      <concept id="2936055411798373223" name="jetbrains.mps.kotlin.structure.PropertyDefaultAssignement" flags="ng" index="1XD0mK">
        <child id="2936055411798373866" name="expression" index="1XD0cX" />
      </concept>
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="1177026924588" name="jetbrains.mps.lang.smodel.structure.RefConcept_Reference" flags="nn" index="chp4Y">
        <reference id="1177026940964" name="conceptDeclaration" index="cht4Q" />
      </concept>
      <concept id="1179409122411" name="jetbrains.mps.lang.smodel.structure.Node_ConceptMethodCall" flags="nn" index="2qgKlT" />
      <concept id="4693937538533521280" name="jetbrains.mps.lang.smodel.structure.OfConceptOperation" flags="ng" index="v3k3i">
        <child id="4693937538533538124" name="requestedConcept" index="v3oSu" />
      </concept>
      <concept id="1143234257716" name="jetbrains.mps.lang.smodel.structure.Node_GetModelOperation" flags="nn" index="I4A8Y" />
      <concept id="1145404486709" name="jetbrains.mps.lang.smodel.structure.SemanticDowncastExpression" flags="nn" index="2JrnkZ">
        <child id="1145404616321" name="leftExpression" index="2JrQYb" />
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
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
    <language id="83888646-71ce-4f1c-9c53-c54016f6ad4f" name="jetbrains.mps.baseLanguage.collections">
      <concept id="1165525191778" name="jetbrains.mps.baseLanguage.collections.structure.GetFirstOperation" flags="nn" index="1uHKPH" />
    </language>
  </registry>
  <node concept="bUwia" id="3hw8cNzhJ6K">
    <property role="TrG5h" value="main" />
    <node concept="3lhOvk" id="63DBII8qadT" role="3lj3bC">
      <ref role="30HIoZ" to="f8gn:7dm8yUsM9Ro" resolve="NotationModule" />
      <ref role="3lhOvi" node="63DBII8pVW4" resolve="EditorAspect" />
    </node>
  </node>
  <node concept="1XD0fY" id="63DBII8pVW4">
    <property role="TrG5h" value="EditorAspect" />
    <node concept="eKYAL" id="63DBII8pVZv" role="1XD0Tu" />
    <node concept="1XD09Q" id="63DBII8pW1k" role="1XD0Tu">
      <property role="1Xb$ne" value="true" />
      <node concept="1XD0eA" id="63DBII8pW1m" role="TDYyH">
        <property role="TrG5h" value="generatedEditor" />
      </node>
      <node concept="1XD0mK" id="63DBII8pW2j" role="1XD05H">
        <node concept="1NbEFs" id="63DBII8pWcj" role="1XD0cX">
          <ref role="AarEw" to="i6vs:~.languageAspects[org/modelix/model/api/ILanguage](0,kotlin/Function1&lt;LanguageAspectsBuilder&lt;0&gt;,kotlin/Unit&gt;)" resolve="languageAspects" />
          <node concept="1XD0eI" id="63DBII8pWe2" role="TWiod">
            <node concept="1NbEFs" id="6rwk8dPxst5" role="1XD0ZN">
              <ref role="AarEw" to="1g18:~MPSLanguage.new(org/jetbrains/mps/openapi/language/SLanguage)" resolve="MPSLanguage" />
              <node concept="1XD0eI" id="6rwk8dPxERu" role="TWiod">
                <node concept="1XD0a7" id="6rwk8dPxWcB" role="1XD0ZN">
                  <node concept="2yQVVM" id="6rwk8dPxWfG" role="1XD07G">
                    <ref role="2yQV70" to="2k9e:~MetaAdapterFactory.getLanguage(jetbrains.mps.smodel.adapter.ids.SLanguageId,java.lang.String)" resolve="getLanguage" />
                    <node concept="1XD0eI" id="6rwk8dPxWng" role="TWiod">
                      <node concept="1XD0a7" id="6rwk8dPxWqd" role="1XD0ZN">
                        <node concept="2yQVVM" id="6rwk8dPxWre" role="1XD07G">
                          <ref role="2yQV70" to="e8bb:~SLanguageId.deserialize(java.lang.String)" resolve="deserialize" />
                          <node concept="1XD0eI" id="6rwk8dPxWrD" role="TWiod">
                            <node concept="1XD08G" id="6rwk8dPxWrC" role="1XD0ZN">
                              <node concept="Df6$J" id="6rwk8dPxWrJ" role="Df6Hu">
                                <node concept="21VMdE" id="6rwk8dPxWrI" role="Df7GE">
                                  <property role="21VMdD" value="serializedId" />
                                  <node concept="17Uvod" id="6rwk8dPxYZg" role="lGtFl">
                                    <property role="2qtEX9" value="content" />
                                    <property role="P4ACc" value="6b3888c1-9802-44d8-8baf-f8e6c33ed689/1243006380188575965/1243006380188575966" />
                                    <node concept="3zFVjK" id="6rwk8dPxYZh" role="3zH0cK">
                                      <node concept="3clFbS" id="6rwk8dPxYZi" role="2VODD2">
                                        <node concept="3cpWs8" id="6rwk8dPyf$w" role="3cqZAp">
                                          <node concept="3cpWsn" id="6rwk8dPyf$x" role="3cpWs9">
                                            <property role="TrG5h" value="lang" />
                                            <node concept="3uibUv" id="6rwk8dPyfxY" role="1tU5fm">
                                              <ref role="3uigEE" to="w1kc:~Language" resolve="Language" />
                                            </node>
                                            <node concept="10QFUN" id="6rwk8dPyiuo" role="33vP2m">
                                              <node concept="2OqwBi" id="6rwk8dPyiu9" role="10QFUP">
                                                <node concept="2JrnkZ" id="6rwk8dPyiua" role="2Oq$k0">
                                                  <node concept="2OqwBi" id="6rwk8dPyiub" role="2JrQYb">
                                                    <node concept="2OqwBi" id="6rwk8dPyiuc" role="2Oq$k0">
                                                      <node concept="2OqwBi" id="6rwk8dPyiud" role="2Oq$k0">
                                                        <node concept="2OqwBi" id="6rwk8dPyiue" role="2Oq$k0">
                                                          <node concept="2OqwBi" id="6rwk8dPyiuf" role="2Oq$k0">
                                                            <node concept="30H73N" id="6rwk8dPyiug" role="2Oq$k0" />
                                                            <node concept="3Tsc0h" id="6rwk8dPyiuh" role="2OqNvi">
                                                              <ref role="3TtcxE" to="f8gn:7dm8yUsMfq9" resolve="content" />
                                                            </node>
                                                          </node>
                                                          <node concept="v3k3i" id="6rwk8dPyiui" role="2OqNvi">
                                                            <node concept="chp4Y" id="6rwk8dPyiuj" role="v3oSu">
                                                              <ref role="cht4Q" to="f8gn:7dm8yUsMfHH" resolve="ConceptNotation" />
                                                            </node>
                                                          </node>
                                                        </node>
                                                        <node concept="1uHKPH" id="6rwk8dPyiuk" role="2OqNvi" />
                                                      </node>
                                                      <node concept="3TrEf2" id="6rwk8dPyiul" role="2OqNvi">
                                                        <ref role="3Tt5mk" to="f8gn:7dm8yUsMfNE" resolve="concept" />
                                                      </node>
                                                    </node>
                                                    <node concept="I4A8Y" id="6rwk8dPyium" role="2OqNvi" />
                                                  </node>
                                                </node>
                                                <node concept="liA8E" id="6rwk8dPyiun" role="2OqNvi">
                                                  <ref role="37wK5l" to="mhbf:~SModel.getModule()" resolve="getModule" />
                                                </node>
                                              </node>
                                              <node concept="3uibUv" id="6rwk8dPyiu8" role="10QFUM">
                                                <ref role="3uigEE" to="w1kc:~Language" resolve="Language" />
                                              </node>
                                            </node>
                                          </node>
                                        </node>
                                        <node concept="3clFbF" id="6rwk8dPylcy" role="3cqZAp">
                                          <node concept="2OqwBi" id="6rwk8dPylyD" role="3clFbG">
                                            <node concept="2YIFZM" id="6rwk8dPylhR" role="2Oq$k0">
                                              <ref role="37wK5l" to="e8bb:~MetaIdByDeclaration.getLanguageId(jetbrains.mps.smodel.Language)" resolve="getLanguageId" />
                                              <ref role="1Pybhc" to="e8bb:~MetaIdByDeclaration" resolve="MetaIdByDeclaration" />
                                              <node concept="37vLTw" id="6rwk8dPylnd" role="37wK5m">
                                                <ref role="3cqZAo" node="6rwk8dPyf$x" resolve="lang" />
                                              </node>
                                            </node>
                                            <node concept="liA8E" id="6rwk8dPymPQ" role="2OqNvi">
                                              <ref role="37wK5l" to="e8bb:~SLanguageId.serialize()" resolve="serialize" />
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
                        <node concept="1XD0em" id="6rwk8dPxWnf" role="21Pmik">
                          <node concept="2EYIWN" id="6rwk8dPxWne" role="1XD0Sn">
                            <ref role="2EYIUZ" to="e8bb:~SLanguageId" resolve="SLanguageId" />
                          </node>
                        </node>
                      </node>
                    </node>
                    <node concept="1XD0eI" id="6rwk8dPxYNG" role="TWiod">
                      <node concept="1XD08G" id="6rwk8dPxYQx" role="1XD0ZN">
                        <node concept="Df6$J" id="6rwk8dPxYQX" role="Df6Hu">
                          <node concept="21VMdE" id="6rwk8dPxYQW" role="Df7GE">
                            <property role="21VMdD" value="name" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                  <node concept="1XD0em" id="6rwk8dPxW3x" role="21Pmik">
                    <node concept="2EYIWN" id="6rwk8dPxW3q" role="1XD0Sn">
                      <ref role="2EYIUZ" to="2k9e:~MetaAdapterFactory" resolve="MetaAdapterFactory" />
                    </node>
                  </node>
                </node>
              </node>
            </node>
          </node>
          <node concept="1XD0f0" id="63DBII8pWiQ" role="1XD06E">
            <node concept="AQkLs" id="6rwk8dPyoNY" role="THmaL" />
            <node concept="1NbEFs" id="63DBII8qceh" role="THmaL">
              <ref role="AarEw" to="dbfy:~#org/modelix/aspects/LanguageAspectsBuilder&lt;*&gt;.editor[org/modelix/metamodel/ITypedNode,org/modelix/metamodel/IConceptOfTypedNode&lt;0&gt;](1,kotlin/Function1&lt;CellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;)" resolve="editor" />
              <node concept="1XD0eI" id="6rwk8dPynv3" role="TWiod">
                <node concept="1NbEFs" id="6rwk8dPyoa3" role="1XD0ZN">
                  <ref role="AarEw" to="1g18:~MPSConcept.new(org/jetbrains/mps/openapi/language/SAbstractConcept)" resolve="MPSConcept" />
                  <node concept="1XD0eI" id="6rwk8dPyoe_" role="TWiod">
                    <node concept="1XD0a7" id="6rwk8dPyoov" role="1XD0ZN">
                      <node concept="2yQVVM" id="6rwk8dPyou2" role="1XD07G">
                        <ref role="2yQV70" to="2k9e:~MetaAdapterFactory.getConcept(jetbrains.mps.smodel.adapter.ids.SConceptId,java.lang.String)" resolve="getConcept" />
                        <node concept="1XD0eI" id="6rwk8dPyozA" role="TWiod">
                          <node concept="1XD0a7" id="6rwk8dPyoAt" role="1XD0ZN">
                            <node concept="2yQVVM" id="6rwk8dPyoCG" role="1XD07G">
                              <ref role="2yQV70" to="e8bb:~SConceptId.deserialize(java.lang.String)" resolve="deserialize" />
                              <node concept="1XD0eI" id="6rwk8dPyoDv" role="TWiod">
                                <node concept="1XD08G" id="6rwk8dPyoDu" role="1XD0ZN">
                                  <node concept="Df6$J" id="6rwk8dPyoEN" role="Df6Hu">
                                    <node concept="21VMdE" id="6rwk8dPyoEM" role="Df7GE">
                                      <property role="21VMdD" value="serializedConceptId" />
                                      <node concept="17Uvod" id="6rwk8dPytMr" role="lGtFl">
                                        <property role="2qtEX9" value="content" />
                                        <property role="P4ACc" value="6b3888c1-9802-44d8-8baf-f8e6c33ed689/1243006380188575965/1243006380188575966" />
                                        <node concept="3zFVjK" id="6rwk8dPytMs" role="3zH0cK">
                                          <node concept="3clFbS" id="6rwk8dPytMt" role="2VODD2">
                                            <node concept="3clFbF" id="6rwk8dPyu8k" role="3cqZAp">
                                              <node concept="2OqwBi" id="6rwk8dPyy3c" role="3clFbG">
                                                <node concept="2YIFZM" id="6rwk8dPyuDJ" role="2Oq$k0">
                                                  <ref role="37wK5l" to="e8bb:~MetaIdByDeclaration.getConceptId(org.jetbrains.mps.openapi.model.SNode)" resolve="getConceptId" />
                                                  <ref role="1Pybhc" to="e8bb:~MetaIdByDeclaration" resolve="MetaIdByDeclaration" />
                                                  <node concept="2OqwBi" id="6rwk8dPyva4" role="37wK5m">
                                                    <node concept="30H73N" id="6rwk8dPyuIH" role="2Oq$k0" />
                                                    <node concept="3TrEf2" id="6rwk8dPyxLv" role="2OqNvi">
                                                      <ref role="3Tt5mk" to="f8gn:7dm8yUsMfNE" resolve="concept" />
                                                    </node>
                                                  </node>
                                                </node>
                                                <node concept="liA8E" id="6rwk8dPy$vQ" role="2OqNvi">
                                                  <ref role="37wK5l" to="e8bb:~SConceptId.serialize()" resolve="serialize" />
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
                              <node concept="1XD0eI" id="6rwk8dPyoIY" role="TWiod">
                                <node concept="1XD08G" id="6rwk8dPyoKF" role="1XD0ZN">
                                  <node concept="Df6$J" id="6rwk8dPyoL7" role="Df6Hu">
                                    <node concept="21VMdE" id="6rwk8dPyoL6" role="Df7GE">
                                      <property role="21VMdD" value="conceptName" />
                                      <node concept="17Uvod" id="6rwk8dPySdU" role="lGtFl">
                                        <property role="2qtEX9" value="content" />
                                        <property role="P4ACc" value="6b3888c1-9802-44d8-8baf-f8e6c33ed689/1243006380188575965/1243006380188575966" />
                                        <node concept="3zFVjK" id="6rwk8dPySdV" role="3zH0cK">
                                          <node concept="3clFbS" id="6rwk8dPySdW" role="2VODD2">
                                            <node concept="3clFbF" id="6rwk8dPySo1" role="3cqZAp">
                                              <node concept="2OqwBi" id="6rwk8dPyXbC" role="3clFbG">
                                                <node concept="2OqwBi" id="6rwk8dPySOw" role="2Oq$k0">
                                                  <node concept="30H73N" id="6rwk8dPySo0" role="2Oq$k0" />
                                                  <node concept="3TrEf2" id="6rwk8dPyVEM" role="2OqNvi">
                                                    <ref role="3Tt5mk" to="f8gn:7dm8yUsMfNE" resolve="concept" />
                                                  </node>
                                                </node>
                                                <node concept="2qgKlT" id="6rwk8dPyXDO" role="2OqNvi">
                                                  <ref role="37wK5l" to="tpcu:hEwIO9y" resolve="getFqName" />
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
                            <node concept="1XD0em" id="6rwk8dPyoz_" role="21Pmik">
                              <node concept="2EYIWN" id="6rwk8dPyoz$" role="1XD0Sn">
                                <ref role="2EYIUZ" to="e8bb:~SConceptId" resolve="SConceptId" />
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                      <node concept="1XD0em" id="6rwk8dPyoe$" role="21Pmik">
                        <node concept="2EYIWN" id="6rwk8dPyoez" role="1XD0Sn">
                          <ref role="2EYIUZ" to="2k9e:~MetaAdapterFactory" resolve="MetaAdapterFactory" />
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="1XD0f0" id="63DBII8qcek" role="1XD06E">
                <node concept="AQkLs" id="6rwk8dPyXN_" role="THmaL" />
                <node concept="AQkLs" id="6rwk8dPz1hF" role="THmaL" />
              </node>
              <node concept="1WS0z7" id="6rwk8dPyoTh" role="lGtFl">
                <node concept="3JmXsc" id="6rwk8dPyoTk" role="3Jn$fo">
                  <node concept="3clFbS" id="6rwk8dPyoTl" role="2VODD2">
                    <node concept="3clFbF" id="6rwk8dPyoTr" role="3cqZAp">
                      <node concept="2OqwBi" id="6rwk8dPyrEe" role="3clFbG">
                        <node concept="2OqwBi" id="6rwk8dPyoTm" role="2Oq$k0">
                          <node concept="3Tsc0h" id="6rwk8dPyoTp" role="2OqNvi">
                            <ref role="3TtcxE" to="f8gn:7dm8yUsMfq9" resolve="content" />
                          </node>
                          <node concept="30H73N" id="6rwk8dPyoTq" role="2Oq$k0" />
                        </node>
                        <node concept="v3k3i" id="6rwk8dPytre" role="2OqNvi">
                          <node concept="chp4Y" id="6rwk8dPytx8" role="v3oSu">
                            <ref role="cht4Q" to="f8gn:7dm8yUsMfHH" resolve="ConceptNotation" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="AQkLs" id="63DBII8pWru" role="THmaL" />
          </node>
        </node>
      </node>
    </node>
    <node concept="eKYAL" id="63DBII8pVZx" role="1XD0Tu" />
    <node concept="n94m4" id="63DBII8pVW5" role="lGtFl">
      <ref role="n9lRv" to="f8gn:7dm8yUsM9Ro" resolve="NotationModule" />
    </node>
  </node>
</model>

