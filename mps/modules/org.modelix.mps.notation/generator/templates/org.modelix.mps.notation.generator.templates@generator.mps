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
    <use id="c7b55726-1795-47bd-aa21-714ac1e30f21" name="org.modelix.mps.notation" version="0" />
    <use id="d7706f63-9be2-479c-a3da-ae92af1e64d5" name="jetbrains.mps.lang.generator.generationContext" version="2" />
    <use id="df345b11-b8c7-4213-ac66-48d2a9b75d88" name="jetbrains.mps.baseLanguageInternal" version="0" />
    <use id="cc24a92d-c78e-4016-a5d4-902df7135727" name="org.modelix.mps.baseLanguageInsideKotlin" version="0" />
    <devkit ref="a2eb3a43-fcc2-4200-80dc-c60110c4862d(jetbrains.mps.devkit.templates)" />
    <devkit ref="3605c367-b661-48bf-8131-d9bd75494e4d(jetbrains.mps.devkit.kotlin)" />
  </languages>
  <imports>
    <import index="f8gn" ref="r:37580d55-803b-40f6-8108-d95a9fce8d6e(org.modelix.mps.notation.structure)" />
    <import index="i6vs" ref="771cf896-ab1b-409b-93b4-48c3bbb6b23f/kotlinJvm:org.modelix.aspects(org.modelix.mps.editor.ssr.stubs/)" />
    <import index="dbfy" ref="771cf896-ab1b-409b-93b4-48c3bbb6b23f/kotlinJvm:org.modelix.editor(org.modelix.mps.editor.ssr.stubs/)" />
    <import index="1g18" ref="208eaf68-fd3a-497a-a4b6-4923ff457c3b/kotlinJvm:org.modelix.model.mpsadapters(org.modelix.mps.editor.common.stubs/)" />
    <import index="vndm" ref="6ed54515-acc8-4d1e-a16c-9fd6cfe951ea/java:jetbrains.mps.smodel.language(MPS.Core/)" />
    <import index="2k9e" ref="6ed54515-acc8-4d1e-a16c-9fd6cfe951ea/java:jetbrains.mps.smodel.adapter.structure(MPS.Core/)" />
    <import index="e8bb" ref="6ed54515-acc8-4d1e-a16c-9fd6cfe951ea/java:jetbrains.mps.smodel.adapter.ids(MPS.Core/)" />
    <import index="lui2" ref="8865b7a8-5271-43d3-884c-6fd1d9cfdd34/java:org.jetbrains.mps.openapi.module(MPS.OpenAPI/)" />
    <import index="w1kc" ref="6ed54515-acc8-4d1e-a16c-9fd6cfe951ea/java:jetbrains.mps.smodel(MPS.Core/)" />
    <import index="pjrh" ref="6ed54515-acc8-4d1e-a16c-9fd6cfe951ea/java:jetbrains.mps.smodel.adapter(MPS.Core/)" />
    <import index="c17a" ref="8865b7a8-5271-43d3-884c-6fd1d9cfdd34/java:org.jetbrains.mps.openapi.language(MPS.OpenAPI/)" />
    <import index="b15i" ref="208eaf68-fd3a-497a-a4b6-4923ff457c3b/kotlinJvm:org.modelix.model.api(org.modelix.mps.editor.common.stubs/)" />
    <import index="tpcn" ref="r:00000000-0000-4000-0000-011c8959028b(jetbrains.mps.lang.structure.behavior)" />
    <import index="hcm8" ref="r:72a7bf00-0175-42ca-b99b-fe8519b6a16f(jetbrains.mps.kotlin.structure)" />
    <import index="8jio" ref="771cf896-ab1b-409b-93b4-48c3bbb6b23f/kotlinJvm:org.modelix.editor.ssr.mps(org.modelix.mps.editor.ssr.stubs/)" />
    <import index="ya4x" ref="r:2bbee5fa-3e86-4d20-a22d-b5d5f139bede(org.modelix.mps.baseLanguage2kotlin.structure)" />
    <import index="18ew" ref="6ed54515-acc8-4d1e-a16c-9fd6cfe951ea/java:jetbrains.mps.util(MPS.Core/)" />
    <import index="j33e" ref="r:4b957436-4ade-4da9-bdbc-7588a2d8af7d(org.modelix.mps.baseLanguageInsideKotlin.structure)" />
    <import index="qjbp" ref="208eaf68-fd3a-497a-a4b6-4923ff457c3b/kotlinJvm:org.modelix.model.mpsadapters.tomps(org.modelix.mps.editor.common.stubs/)" />
    <import index="wsib" ref="r:d1d5cd51-6710-43f8-bd5b-f958da6e1ca2(org.modelix.mps.notation.behavior)" implicit="true" />
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
    <import index="tpce" ref="r:00000000-0000-4000-0000-011c89590292(jetbrains.mps.lang.structure.structure)" implicit="true" />
    <import index="1xrd" ref="b50d89c0-0fb9-4105-b652-222148c26a9b/kotlin:kotlin.collections(jetbrains.mps.kotlin.stdlib/)" implicit="true" />
    <import index="tpcu" ref="r:00000000-0000-4000-0000-011c89590282(jetbrains.mps.lang.core.behavior)" implicit="true" />
  </imports>
  <registry>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1080223426719" name="jetbrains.mps.baseLanguage.structure.OrExpression" flags="nn" index="22lmx$" />
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
      <concept id="1081236700937" name="jetbrains.mps.baseLanguage.structure.StaticMethodCall" flags="nn" index="2YIFZM">
        <reference id="1144433194310" name="classConcept" index="1Pybhc" />
      </concept>
      <concept id="1070534058343" name="jetbrains.mps.baseLanguage.structure.NullLiteral" flags="nn" index="10Nm6u" />
      <concept id="1068498886292" name="jetbrains.mps.baseLanguage.structure.ParameterDeclaration" flags="ir" index="37vLTG" />
      <concept id="1225271177708" name="jetbrains.mps.baseLanguage.structure.StringType" flags="in" index="17QB3L" />
      <concept id="1225271408483" name="jetbrains.mps.baseLanguage.structure.IsNotEmptyOperation" flags="nn" index="17RvpY" />
      <concept id="4972933694980447171" name="jetbrains.mps.baseLanguage.structure.BaseVariableDeclaration" flags="ng" index="19Szcq">
        <child id="5680397130376446158" name="type" index="1tU5fm" />
      </concept>
      <concept id="1068580123152" name="jetbrains.mps.baseLanguage.structure.EqualsExpression" flags="nn" index="3clFbC" />
      <concept id="1068580123155" name="jetbrains.mps.baseLanguage.structure.ExpressionStatement" flags="nn" index="3clFbF">
        <child id="1068580123156" name="expression" index="3clFbG" />
      </concept>
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
      <concept id="1068580320020" name="jetbrains.mps.baseLanguage.structure.IntegerConstant" flags="nn" index="3cmrfG">
        <property id="1068580320021" name="value" index="3cmrfH" />
      </concept>
      <concept id="1068581242878" name="jetbrains.mps.baseLanguage.structure.ReturnStatement" flags="nn" index="3cpWs6">
        <child id="1068581517676" name="expression" index="3cqZAk" />
      </concept>
      <concept id="1079359253375" name="jetbrains.mps.baseLanguage.structure.ParenthesizedExpression" flags="nn" index="1eOMI4">
        <child id="1079359253376" name="expression" index="1eOMHV" />
      </concept>
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
      <concept id="1163668896201" name="jetbrains.mps.baseLanguage.structure.TernaryOperatorExpression" flags="nn" index="3K4zz7">
        <child id="1163668914799" name="condition" index="3K4Cdx" />
        <child id="1163668922816" name="ifTrue" index="3K4E3e" />
        <child id="1163668934364" name="ifFalse" index="3K4GZi" />
      </concept>
      <concept id="6329021646629104954" name="jetbrains.mps.baseLanguage.structure.SingleLineComment" flags="nn" index="3SKdUt">
        <child id="8356039341262087992" name="line" index="1aUNEU" />
      </concept>
      <concept id="1080120340718" name="jetbrains.mps.baseLanguage.structure.AndExpression" flags="nn" index="1Wc70l" />
    </language>
    <language id="8f2def56-7502-4f14-994f-472d404e528c" name="org.modelix.mps.baseLanguage2kotlin">
      <concept id="2346135138155708006" name="org.modelix.mps.baseLanguage2kotlin.structure.ConvertToKotlin" flags="ng" index="1KmxGs">
        <child id="2346135138155708009" name="expression" index="1KmxGj" />
      </concept>
    </language>
    <language id="b401a680-8325-4110-8fd3-84331ff25bef" name="jetbrains.mps.lang.generator">
      <concept id="1510949579266781519" name="jetbrains.mps.lang.generator.structure.TemplateCallMacro" flags="ln" index="5jKBG">
        <child id="1510949579266801461" name="sourceNodeQuery" index="5jGum" />
      </concept>
      <concept id="1114706874351" name="jetbrains.mps.lang.generator.structure.CopySrcNodeMacro" flags="ln" index="29HgVG">
        <child id="1168024447342" name="sourceNodeQuery" index="3NFExx" />
      </concept>
      <concept id="1219952072943" name="jetbrains.mps.lang.generator.structure.DropRootRule" flags="lg" index="aNPBN">
        <reference id="1219952338328" name="applicableConcept" index="aOQi4" />
      </concept>
      <concept id="1114729360583" name="jetbrains.mps.lang.generator.structure.CopySrcListMacro" flags="ln" index="2b32R4">
        <child id="1168278589236" name="sourceNodesQuery" index="2P8S$" />
      </concept>
      <concept id="1095416546421" name="jetbrains.mps.lang.generator.structure.MappingConfiguration" flags="ig" index="bUwia">
        <child id="1219952894531" name="dropRootRule" index="aQYdv" />
        <child id="1167088157977" name="createRootRule" index="2VS0gm" />
        <child id="1167328349397" name="reductionMappingRule" index="3acgRq" />
      </concept>
      <concept id="1177093525992" name="jetbrains.mps.lang.generator.structure.InlineTemplate_RuleConsequence" flags="lg" index="gft3U">
        <child id="1177093586806" name="templateNode" index="gfFT$" />
      </concept>
      <concept id="1168619357332" name="jetbrains.mps.lang.generator.structure.RootTemplateAnnotation" flags="lg" index="n94m4" />
      <concept id="1095672379244" name="jetbrains.mps.lang.generator.structure.TemplateFragment" flags="ng" index="raruj" />
      <concept id="1722980698497626400" name="jetbrains.mps.lang.generator.structure.ITemplateCall" flags="ngI" index="v9R3L">
        <reference id="1722980698497626483" name="template" index="v9R2y" />
      </concept>
      <concept id="1167087469898" name="jetbrains.mps.lang.generator.structure.CreateRootRule" flags="lg" index="2VPoh5">
        <reference id="1167087469901" name="templateNode" index="2VPoh2" />
      </concept>
      <concept id="1167168920554" name="jetbrains.mps.lang.generator.structure.BaseMappingRule_Condition" flags="in" index="30G5F_" />
      <concept id="1167169188348" name="jetbrains.mps.lang.generator.structure.TemplateFunctionParameter_sourceNode" flags="nn" index="30H73N" />
      <concept id="1167169308231" name="jetbrains.mps.lang.generator.structure.BaseMappingRule" flags="ng" index="30H$t8">
        <reference id="1167169349424" name="applicableConcept" index="30HIoZ" />
        <child id="1167169362365" name="conditionFunction" index="30HLyM" />
      </concept>
      <concept id="1092059087312" name="jetbrains.mps.lang.generator.structure.TemplateDeclaration" flags="ig" index="13MO4I">
        <reference id="1168285871518" name="applicableConcept" index="3gUMe" />
        <child id="1092060348987" name="contentNode" index="13RCb5" />
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
        <child id="1194989344771" name="alternativeConsequence" index="UU_$l" />
        <child id="1167945861827" name="conditionFunction" index="3IZSJc" />
      </concept>
      <concept id="1118786554307" name="jetbrains.mps.lang.generator.structure.LoopMacro" flags="ln" index="1WS0z7">
        <child id="1167952069335" name="sourceNodesQuery" index="3Jn$fo" />
      </concept>
      <concept id="1088761943574" name="jetbrains.mps.lang.generator.structure.ReferenceMacro" flags="ln" index="1ZhdrF">
        <child id="1167770376702" name="referentFunction" index="3$ytzL" />
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
      <concept id="7996321249597408849" name="jetbrains.mps.kotlin.structure.IInheritExplicitly" flags="ngI" index="6Oumu">
        <child id="1991556721067228837" name="superclasses" index="AST3G" />
      </concept>
      <concept id="5622728304609204267" name="jetbrains.mps.kotlin.structure.EmptyDeclaration" flags="ng" index="eKYAL" />
      <concept id="1991556721070973461" name="jetbrains.mps.kotlin.structure.EmptyStatement" flags="ng" index="AQkLs" />
      <concept id="6389031306614148912" name="jetbrains.mps.kotlin.structure.StringLiteralLine" flags="ng" index="Df6$J">
        <child id="6389031306614152501" name="parts" index="Df7GE" />
      </concept>
      <concept id="2324909103759097704" name="jetbrains.mps.kotlin.structure.IWithClassBody" flags="ngI" index="KS$fF">
        <child id="2324909103759097705" name="members" index="KS$fE" />
      </concept>
      <concept id="2324909103760650644" name="jetbrains.mps.kotlin.structure.SuperClassSpecifier" flags="ng" index="KYwOn">
        <reference id="2324909103760650645" name="target" index="KYwOm" />
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
      <concept id="5533310174484620657" name="jetbrains.mps.kotlin.structure.VariableRefExpression" flags="ng" index="UZU4S">
        <reference id="5533310174484620658" name="target" index="UZU4V" />
      </concept>
      <concept id="7027413324315184167" name="jetbrains.mps.kotlin.structure.ILambdaAsArgument" flags="ngI" index="3$8iW8">
        <child id="2936055411798374269" name="lambda" index="1XD06E" />
      </concept>
      <concept id="4662566628538082515" name="jetbrains.mps.kotlin.structure.FunctionCallTarget" flags="ng" index="1NbEtQ" />
      <concept id="4662566628538083705" name="jetbrains.mps.kotlin.structure.FunctionCallExpression" flags="ng" index="1NbEFs" />
      <concept id="6664176324866782072" name="jetbrains.mps.kotlin.structure.IClassReference" flags="ngI" index="1SePDR">
        <reference id="6664176324866782075" name="class" index="1SePDO" />
      </concept>
      <concept id="2936055411798373599" name="jetbrains.mps.kotlin.structure.ClassType" flags="ng" index="1XD088" />
      <concept id="2936055411798373627" name="jetbrains.mps.kotlin.structure.StringLiteral" flags="ng" index="1XD08G">
        <child id="6389031306614148417" name="lines" index="Df6Hu" />
      </concept>
      <concept id="2936055411798373537" name="jetbrains.mps.kotlin.structure.PropertyDeclaration" flags="ng" index="1XD09Q">
        <child id="1314219036499436525" name="declaration" index="TDYyH" />
      </concept>
      <concept id="2936055411798373456" name="jetbrains.mps.kotlin.structure.NavigationOperation" flags="ng" index="1XD0a7">
        <child id="2936055411798374203" name="target" index="1XD07G" />
      </concept>
      <concept id="2936055411798373428" name="jetbrains.mps.kotlin.structure.FunctionDeclaration" flags="ng" index="1XD0bz">
        <property id="4908873499999643325" name="isOverride" index="3qOnjd" />
      </concept>
      <concept id="2936055411798373439" name="jetbrains.mps.kotlin.structure.AbstractFunctionCall" flags="ng" index="1XD0bC">
        <reference id="1991556721072067817" name="function" index="AarEw" />
      </concept>
      <concept id="2936055411798373784" name="jetbrains.mps.kotlin.structure.ThisExpression" flags="ng" index="1XD0df" />
      <concept id="2936055411798373697" name="jetbrains.mps.kotlin.structure.ReceiverType" flags="ng" index="1XD0em">
        <child id="2936055411798374592" name="type" index="1XD0Sn" />
      </concept>
      <concept id="2936055411798373745" name="jetbrains.mps.kotlin.structure.VariableDeclaration" flags="ng" index="1XD0eA">
        <child id="2936055411798374679" name="type" index="1XD0Z0" />
      </concept>
      <concept id="2936055411798373753" name="jetbrains.mps.kotlin.structure.ValueArgument" flags="ng" index="1XD0eI">
        <reference id="1243006380188956795" name="parameter" index="21Xffc" />
        <child id="2936055411798374692" name="expression" index="1XD0ZN" />
      </concept>
      <concept id="2936055411798373655" name="jetbrains.mps.kotlin.structure.LambdaLiteral" flags="ng" index="1XD0f0">
        <child id="1243006380186866155" name="parameters" index="21PhDs" />
      </concept>
      <concept id="2936055411798373641" name="jetbrains.mps.kotlin.structure.AnonymousInitializer" flags="ng" index="1XD0fu" />
      <concept id="2936055411798373673" name="jetbrains.mps.kotlin.structure.KotlinFile" flags="ng" index="1XD0fY">
        <child id="2936055411798374537" name="declarations" index="1XD0Tu" />
      </concept>
      <concept id="2936055411798373333" name="jetbrains.mps.kotlin.structure.NullLiteral" flags="ng" index="1XD0k2" />
      <concept id="2936055411798373327" name="jetbrains.mps.kotlin.structure.BooleanLiteral" flags="ng" index="1XD0ko" />
      <concept id="2936055411798373223" name="jetbrains.mps.kotlin.structure.PropertyDefaultAssignement" flags="ng" index="1XD0mK">
        <child id="2936055411798373866" name="expression" index="1XD0cX" />
      </concept>
      <concept id="2936055411798373220" name="jetbrains.mps.kotlin.structure.ObjectDeclaration" flags="ng" index="1XD0mN" />
    </language>
    <language id="c7b55726-1795-47bd-aa21-714ac1e30f21" name="org.modelix.mps.notation">
      <concept id="737165568294088373" name="org.modelix.mps.notation.structure.WithIdentCell" flags="ng" index="2OUTUo">
        <child id="737165568294090056" name="cells" index="2OUSl_" />
      </concept>
      <concept id="8310867745953158874" name="org.modelix.mps.notation.structure.ConstantCell" flags="ng" index="3JB3jO" />
    </language>
    <language id="d7706f63-9be2-479c-a3da-ae92af1e64d5" name="jetbrains.mps.lang.generator.generationContext">
      <concept id="1216860049635" name="jetbrains.mps.lang.generator.generationContext.structure.TemplateFunctionParameter_generationContext" flags="nn" index="1iwH7S" />
      <concept id="1217004708011" name="jetbrains.mps.lang.generator.generationContext.structure.GenerationContextOp_GetInputModel" flags="nn" index="1r8y6K" />
    </language>
    <language id="eb56ebf4-df56-438e-af06-fc1cd08b495a" name="jetbrains.mps.kotlin.smodel">
      <concept id="3181756179490075795" name="jetbrains.mps.kotlin.smodel.structure.PropertyReference" flags="ng" index="kjMFK">
        <reference id="3181756179490075797" name="link" index="kjMFQ" />
        <reference id="3181756179490075796" name="concept" index="kjMFR" />
      </concept>
      <concept id="3181756179480673613" name="jetbrains.mps.kotlin.smodel.structure.LinkReference" flags="ng" index="rZEcI">
        <reference id="3181756179480675986" name="concept" index="rZ_zL" />
        <reference id="3181756179480675489" name="link" index="rZ_F2" />
      </concept>
    </language>
    <language id="cc24a92d-c78e-4016-a5d4-902df7135727" name="org.modelix.mps.baseLanguageInsideKotlin">
      <concept id="1408999582856241433" name="org.modelix.mps.baseLanguageInsideKotlin.structure.BaseLanguageFunctionInKotlin" flags="ng" index="3rn2iY">
        <child id="1408999582856241658" name="baseLanguageReturnType" index="3rn2ht" />
        <child id="1408999582856241445" name="parameterValues" index="3rn2i2" />
        <child id="1408999582856241442" name="parameterDeclarations" index="3rn2i5" />
        <child id="1408999582856241438" name="body" index="3rn2iT" />
      </concept>
    </language>
    <language id="df345b11-b8c7-4213-ac66-48d2a9b75d88" name="jetbrains.mps.baseLanguageInternal">
      <concept id="1176743162354" name="jetbrains.mps.baseLanguageInternal.structure.InternalVariableReference" flags="nn" index="3VmV3z">
        <property id="1176743296073" name="name" index="3VnrPo" />
        <child id="1176743202636" name="type" index="3Vn4Tt" />
      </concept>
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="1177026924588" name="jetbrains.mps.lang.smodel.structure.RefConcept_Reference" flags="nn" index="chp4Y">
        <reference id="1177026940964" name="conceptDeclaration" index="cht4Q" />
      </concept>
      <concept id="1138411891628" name="jetbrains.mps.lang.smodel.structure.SNodeOperation" flags="nn" index="eCIE_">
        <child id="1144104376918" name="parameter" index="1xVPHs" />
      </concept>
      <concept id="1179409122411" name="jetbrains.mps.lang.smodel.structure.Node_ConceptMethodCall" flags="nn" index="2qgKlT" />
      <concept id="4693937538533521280" name="jetbrains.mps.lang.smodel.structure.OfConceptOperation" flags="ng" index="v3k3i">
        <child id="4693937538533538124" name="requestedConcept" index="v3oSu" />
      </concept>
      <concept id="2396822768958367367" name="jetbrains.mps.lang.smodel.structure.AbstractTypeCastExpression" flags="nn" index="$5XWr">
        <child id="6733348108486823193" name="leftExpression" index="1m5AlR" />
        <child id="3906496115198199033" name="conceptArgument" index="3oSUPX" />
      </concept>
      <concept id="1171315804604" name="jetbrains.mps.lang.smodel.structure.Model_RootsOperation" flags="nn" index="2RRcyG">
        <child id="6750920497477046361" name="conceptArgument" index="3MHsoP" />
      </concept>
      <concept id="1171407110247" name="jetbrains.mps.lang.smodel.structure.Node_GetAncestorOperation" flags="nn" index="2Xjw5R" />
      <concept id="3562215692195599741" name="jetbrains.mps.lang.smodel.structure.SLinkImplicitSelect" flags="nn" index="13MTOL">
        <reference id="3562215692195600259" name="link" index="13MTZf" />
      </concept>
      <concept id="1139621453865" name="jetbrains.mps.lang.smodel.structure.Node_IsInstanceOfOperation" flags="nn" index="1mIQ4w">
        <child id="1177027386292" name="conceptArgument" index="cj9EA" />
      </concept>
      <concept id="1171999116870" name="jetbrains.mps.lang.smodel.structure.Node_IsNullOperation" flags="nn" index="3w_OXm" />
      <concept id="1172008320231" name="jetbrains.mps.lang.smodel.structure.Node_IsNotNullOperation" flags="nn" index="3x8VRR" />
      <concept id="1144100932627" name="jetbrains.mps.lang.smodel.structure.OperationParm_Inclusion" flags="ng" index="1xIGOp" />
      <concept id="1144101972840" name="jetbrains.mps.lang.smodel.structure.OperationParm_Concept" flags="ng" index="1xMEDy">
        <child id="1207343664468" name="conceptArgument" index="ri$Ld" />
      </concept>
      <concept id="1140137987495" name="jetbrains.mps.lang.smodel.structure.SNodeTypeCastExpression" flags="nn" index="1PxgMI" />
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
    <language id="c7fb639f-be78-4307-89b0-b5959c3fa8c8" name="jetbrains.mps.lang.text">
      <concept id="155656958578482948" name="jetbrains.mps.lang.text.structure.Word" flags="nn" index="3oM_SD">
        <property id="155656958578482949" name="value" index="3oM_SC" />
      </concept>
      <concept id="2535923850359271782" name="jetbrains.mps.lang.text.structure.Line" flags="nn" index="1PaTwC">
        <child id="2535923850359271783" name="elements" index="1PaTwD" />
      </concept>
    </language>
    <language id="83888646-71ce-4f1c-9c53-c54016f6ad4f" name="jetbrains.mps.baseLanguage.collections">
      <concept id="1172650591544" name="jetbrains.mps.baseLanguage.collections.structure.SkipOperation" flags="nn" index="7r0gD">
        <child id="1172658456740" name="elementsToSkip" index="7T0AP" />
      </concept>
      <concept id="1165525191778" name="jetbrains.mps.baseLanguage.collections.structure.GetFirstOperation" flags="nn" index="1uHKPH" />
    </language>
  </registry>
  <node concept="bUwia" id="3hw8cNzhJ6K">
    <property role="TrG5h" value="main" />
    <node concept="aNPBN" id="54VjPcDfUlX" role="aQYdv">
      <ref role="aOQi4" to="f8gn:7dm8yUsM9Ro" resolve="NotationModule" />
    </node>
    <node concept="2VPoh5" id="22f9nDgLfkO" role="2VS0gm">
      <ref role="2VPoh2" node="63DBII8pVW4" resolve="AspectsDescriptor" />
    </node>
    <node concept="3aamgX" id="1NttIwKSwMa" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:7dm8yUsMxrq" resolve="ConstantCell" />
      <node concept="gft3U" id="1NttIwKSwOK" role="1lVwrX">
        <node concept="1NbEFs" id="1NttIwKSwOQ" role="gfFT$">
          <ref role="AarEw" to="dbfy:~CellTemplateBuilder.constant(kotlin/String,kotlin/Function1&lt;CellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;)" resolve="constant" />
          <node concept="1XD0eI" id="1NttIwKSwOR" role="TWiod">
            <node concept="1XD08G" id="1NttIwKSwOS" role="1XD0ZN">
              <node concept="Df6$J" id="1NttIwKSwOT" role="Df6Hu">
                <node concept="21VMdE" id="1NttIwKSwOU" role="Df7GE">
                  <property role="21VMdD" value="abc" />
                  <node concept="17Uvod" id="1NttIwKSwOV" role="lGtFl">
                    <property role="2qtEX9" value="content" />
                    <property role="P4ACc" value="6b3888c1-9802-44d8-8baf-f8e6c33ed689/1243006380188575965/1243006380188575966" />
                    <node concept="3zFVjK" id="1NttIwKSwOW" role="3zH0cK">
                      <node concept="3clFbS" id="1NttIwKSwOX" role="2VODD2">
                        <node concept="3clFbF" id="4JzlXapj_Ln" role="3cqZAp">
                          <node concept="2YIFZM" id="4JzlXapjAtU" role="3clFbG">
                            <ref role="37wK5l" to="18ew:~NameUtil.escapeString(java.lang.String)" resolve="escapeString" />
                            <ref role="1Pybhc" to="18ew:~NameUtil" resolve="NameUtil" />
                            <node concept="2OqwBi" id="1NttIwKSxAn" role="37wK5m">
                              <node concept="30H73N" id="1NttIwKSx9s" role="2Oq$k0" />
                              <node concept="3TrcHB" id="1NttIwKSxPc" role="2OqNvi">
                                <ref role="3TsBF5" to="f8gn:7dm8yUsMxD1" resolve="text" />
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
    </node>
    <node concept="3aamgX" id="ziPuhEDCPl" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:ziPuhEA4oz" resolve="RemoveSpace" />
      <node concept="gft3U" id="ziPuhEDCPm" role="1lVwrX">
        <node concept="1NbEFs" id="ziPuhEDCPn" role="gfFT$">
          <ref role="AarEw" to="dbfy:~CellTemplateBuilder.noSpace()" resolve="noSpace" />
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="4dQjfTHYE8u" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:4dQjfTHYohE" resolve="NewLineCell" />
      <node concept="gft3U" id="4dQjfTHYE8v" role="1lVwrX">
        <node concept="1NbEFs" id="4dQjfTHYE8w" role="gfFT$">
          <ref role="AarEw" to="dbfy:~CellTemplateBuilder.newLine()" resolve="newLine" />
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="42C8o9n_Q$D" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:ziPuhE_FoM" resolve="ConceptAliasCell" />
      <node concept="gft3U" id="42C8o9n_Q$E" role="1lVwrX">
        <node concept="1NbEFs" id="42C8o9n_Q$F" role="gfFT$">
          <ref role="AarEw" to="dbfy:~CellTemplateBuilder.conceptAlias(kotlin/Function1&lt;CellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;)" resolve="conceptAlias" />
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="3CJpHJsa$LZ" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:ziPuhEAsOy" resolve="SubstituteCell" />
      <node concept="gft3U" id="3CJpHJsa$M0" role="1lVwrX">
        <node concept="1NbEFs" id="3CJpHJsa$M1" role="gfFT$">
          <ref role="AarEw" to="dbfy:~NotationRootCellTemplateBuilder.completionText(kotlin/String)" resolve="completionText" />
          <node concept="1XD0eI" id="3CJpHJsaFK3" role="TWiod">
            <node concept="1XD08G" id="3CJpHJsaFK2" role="1XD0ZN">
              <node concept="Df6$J" id="3CJpHJsaFK8" role="Df6Hu">
                <node concept="21VMdE" id="3CJpHJsaFK7" role="Df7GE">
                  <property role="21VMdD" value="text" />
                  <node concept="17Uvod" id="3CJpHJsaFKb" role="lGtFl">
                    <property role="2qtEX9" value="content" />
                    <property role="P4ACc" value="6b3888c1-9802-44d8-8baf-f8e6c33ed689/1243006380188575965/1243006380188575966" />
                    <node concept="3zFVjK" id="3CJpHJsaFKc" role="3zH0cK">
                      <node concept="3clFbS" id="3CJpHJsaFKd" role="2VODD2">
                        <node concept="3SKdUt" id="3CJpHJsaPA6" role="3cqZAp">
                          <node concept="1PaTwC" id="3CJpHJsaPA7" role="1aUNEU">
                            <node concept="3oM_SD" id="3CJpHJsaPTH" role="1PaTwD">
                              <property role="3oM_SC" value="empty" />
                            </node>
                            <node concept="3oM_SD" id="3CJpHJsaPTO" role="1PaTwD">
                              <property role="3oM_SC" value="string" />
                            </node>
                            <node concept="3oM_SD" id="3CJpHJsaPTY" role="1PaTwD">
                              <property role="3oM_SC" value="hides" />
                            </node>
                            <node concept="3oM_SD" id="3CJpHJsaPU8" role="1PaTwD">
                              <property role="3oM_SC" value="the" />
                            </node>
                            <node concept="3oM_SD" id="3CJpHJsaPUh" role="1PaTwD">
                              <property role="3oM_SC" value="entry." />
                            </node>
                            <node concept="3oM_SD" id="3CJpHJsaQes" role="1PaTwD">
                              <property role="3oM_SC" value="null" />
                            </node>
                            <node concept="3oM_SD" id="3CJpHJsaQfg" role="1PaTwD">
                              <property role="3oM_SC" value="would" />
                            </node>
                            <node concept="3oM_SD" id="3CJpHJsaQgy" role="1PaTwD">
                              <property role="3oM_SC" value="have" />
                            </node>
                            <node concept="3oM_SD" id="3CJpHJsaQgK" role="1PaTwD">
                              <property role="3oM_SC" value="no" />
                            </node>
                            <node concept="3oM_SD" id="3CJpHJsaQgX" role="1PaTwD">
                              <property role="3oM_SC" value="effect." />
                            </node>
                          </node>
                        </node>
                        <node concept="3clFbF" id="3CJpHJsaJVK" role="3cqZAp">
                          <node concept="3K4zz7" id="3CJpHJsaO8f" role="3clFbG">
                            <node concept="Xl_RD" id="3CJpHJsaOrx" role="3K4E3e">
                              <property role="Xl_RC" value="" />
                            </node>
                            <node concept="3clFbC" id="3CJpHJsaLJ3" role="3K4Cdx">
                              <node concept="10Nm6u" id="3CJpHJsaMY9" role="3uHU7w" />
                              <node concept="2OqwBi" id="3CJpHJsaGu$" role="3uHU7B">
                                <node concept="30H73N" id="3CJpHJsaG0p" role="2Oq$k0" />
                                <node concept="3TrcHB" id="3CJpHJsaID4" role="2OqNvi">
                                  <ref role="3TsBF5" to="f8gn:ziPuhEAsOB" resolve="text" />
                                </node>
                              </node>
                            </node>
                            <node concept="2OqwBi" id="3CJpHJsaOIz" role="3K4GZi">
                              <node concept="30H73N" id="3CJpHJsaOI$" role="2Oq$k0" />
                              <node concept="3TrcHB" id="3CJpHJsaOI_" role="2OqNvi">
                                <ref role="3TsBF5" to="f8gn:ziPuhEAsOB" resolve="text" />
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
    </node>
    <node concept="3aamgX" id="26N7cZTNAnB" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:ziPuhE_VbT" resolve="OptionalCell" />
      <node concept="gft3U" id="26N7cZTNAnC" role="1lVwrX">
        <node concept="1NbEFs" id="26N7cZTNAnD" role="gfFT$">
          <ref role="AarEw" to="dbfy:~CellTemplateBuilder.optional(kotlin/Function1&lt;CellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;)" resolve="optional" />
          <node concept="1XD0f0" id="26N7cZTNFTB" role="1XD06E">
            <node concept="AQkLs" id="26N7cZTNFTD" role="THmaL">
              <node concept="29HgVG" id="26N7cZTNFTJ" role="lGtFl">
                <node concept="3NFfHV" id="26N7cZTNFTK" role="3NFExx">
                  <node concept="3clFbS" id="26N7cZTNFTL" role="2VODD2">
                    <node concept="3clFbF" id="26N7cZTNFTR" role="3cqZAp">
                      <node concept="2OqwBi" id="26N7cZTNFTM" role="3clFbG">
                        <node concept="3TrEf2" id="26N7cZTNFTP" role="2OqNvi">
                          <ref role="3Tt5mk" to="f8gn:ziPuhE_VbX" resolve="cell" />
                        </node>
                        <node concept="30H73N" id="26N7cZTNFTQ" role="2Oq$k0" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="AQkLs" id="26N7cZTNG0g" role="THmaL" />
          </node>
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="CUW2QYNQYQ" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:CUW2QYKUUq" resolve="PropertyCell" />
      <node concept="gft3U" id="CUW2QYNQYR" role="1lVwrX">
        <node concept="1XD0a7" id="CUW2QYNT33" role="gfFT$">
          <node concept="1NbEtQ" id="CUW2QYNUUM" role="1XD07G">
            <ref role="AarEw" to="dbfy:~CellTemplateBuilder#org/modelix/model/api/IProperty.cell(kotlin/Function1&lt;PropertyCellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;)" resolve="cell" />
          </node>
          <node concept="1NbEFs" id="CUW2QYO8M8" role="21Pmik">
            <ref role="AarEw" to="1g18:~MPSProperty.new(jetbrains/mps/smodel/adapter/structure/property/SPropertyAdapter)" resolve="MPSProperty" />
            <node concept="1XD0eI" id="CUW2QYO8N8" role="TWiod">
              <node concept="kjMFK" id="2KBRAcSrbtN" role="1XD0ZN">
                <ref role="kjMFR" to="hcm8:2yYXHtl6Jjv" resolve="ClassType" />
                <ref role="kjMFQ" to="hcm8:5q426iHwzIm" resolve="isNullable" />
                <node concept="1ZhdrF" id="2KBRAcSrbwP" role="lGtFl">
                  <property role="2qtEX8" value="concept" />
                  <property role="P3scX" value="eb56ebf4-df56-438e-af06-fc1cd08b495a/3181756179490075795/3181756179490075796" />
                  <node concept="3$xsQk" id="2KBRAcSrbwQ" role="3$ytzL">
                    <node concept="3clFbS" id="2KBRAcSrbwR" role="2VODD2">
                      <node concept="3clFbF" id="2KBRAcSrbxA" role="3cqZAp">
                        <node concept="2OqwBi" id="2KBRAcSrcqI" role="3clFbG">
                          <node concept="2OqwBi" id="2KBRAcSrbP0" role="2Oq$k0">
                            <node concept="30H73N" id="2KBRAcSrbx_" role="2Oq$k0" />
                            <node concept="3TrEf2" id="2KBRAcSrc5K" role="2OqNvi">
                              <ref role="3Tt5mk" to="f8gn:CUW2QYKUZw" resolve="property" />
                            </node>
                          </node>
                          <node concept="2qgKlT" id="2KBRAcSrcLu" role="2OqNvi">
                            <ref role="37wK5l" to="tpcn:2OF3rgRewqT" resolve="getConceptDeclaration" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="1ZhdrF" id="2KBRAcSrcXe" role="lGtFl">
                  <property role="2qtEX8" value="link" />
                  <property role="P3scX" value="eb56ebf4-df56-438e-af06-fc1cd08b495a/3181756179490075795/3181756179490075797" />
                  <node concept="3$xsQk" id="2KBRAcSrcXf" role="3$ytzL">
                    <node concept="3clFbS" id="2KBRAcSrcXg" role="2VODD2">
                      <node concept="3clFbF" id="2KBRAcSrcZR" role="3cqZAp">
                        <node concept="2OqwBi" id="2KBRAcSrdjh" role="3clFbG">
                          <node concept="30H73N" id="2KBRAcSrcZQ" role="2Oq$k0" />
                          <node concept="3TrEf2" id="2KBRAcSrd$1" role="2OqNvi">
                            <ref role="3Tt5mk" to="f8gn:CUW2QYKUZw" resolve="property" />
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
    <node concept="3aamgX" id="4dQjfTHZOAl" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:ziPuhE_FrH" resolve="FlagCell" />
      <node concept="gft3U" id="4dQjfTHZOAm" role="1lVwrX">
        <node concept="1XD0a7" id="4dQjfTHZOAn" role="gfFT$">
          <node concept="1NbEtQ" id="4dQjfTHZOAo" role="1XD07G">
            <ref role="AarEw" to="dbfy:~CellTemplateBuilder#org/modelix/model/api/IProperty.flagCell(kotlin/String?,kotlin/Function1&lt;CellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;)" resolve="flagCell" />
            <node concept="1XD0eI" id="2pWg6rnXRNe" role="TWiod">
              <node concept="1XD08G" id="2pWg6rnXXbD" role="1XD0ZN">
                <node concept="Df6$J" id="2pWg6rnXXbH" role="Df6Hu">
                  <node concept="21VMdE" id="2pWg6rnXXbG" role="Df7GE">
                    <property role="21VMdD" value="text" />
                    <node concept="17Uvod" id="2pWg6rnXXbK" role="lGtFl">
                      <property role="2qtEX9" value="content" />
                      <property role="P4ACc" value="6b3888c1-9802-44d8-8baf-f8e6c33ed689/1243006380188575965/1243006380188575966" />
                      <node concept="3zFVjK" id="2pWg6rnXXbL" role="3zH0cK">
                        <node concept="3clFbS" id="2pWg6rnXXbM" role="2VODD2">
                          <node concept="3clFbF" id="2pWg6rnXXrZ" role="3cqZAp">
                            <node concept="2OqwBi" id="2pWg6rnXXST" role="3clFbG">
                              <node concept="30H73N" id="2pWg6rnXXrY" role="2Oq$k0" />
                              <node concept="3TrcHB" id="2pWg6rnXY62" role="2OqNvi">
                                <ref role="3TsBF5" to="f8gn:ziPuhE_FrL" resolve="text" />
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="1W57fq" id="2pWg6rnXYD0" role="lGtFl">
                  <node concept="3IZrLx" id="2pWg6rnXYD1" role="3IZSJc">
                    <node concept="3clFbS" id="2pWg6rnXYD2" role="2VODD2">
                      <node concept="3clFbF" id="2pWg6rnXYRc" role="3cqZAp">
                        <node concept="2OqwBi" id="2pWg6rnY1g3" role="3clFbG">
                          <node concept="2OqwBi" id="2pWg6rnXZht" role="2Oq$k0">
                            <node concept="30H73N" id="2pWg6rnXYRb" role="2Oq$k0" />
                            <node concept="3TrcHB" id="2pWg6rnXZFE" role="2OqNvi">
                              <ref role="3TsBF5" to="f8gn:ziPuhE_FrL" resolve="text" />
                            </node>
                          </node>
                          <node concept="17RvpY" id="2pWg6rnY1Wk" role="2OqNvi" />
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
          </node>
          <node concept="1NbEFs" id="4dQjfTHZOAp" role="21Pmik">
            <ref role="AarEw" to="1g18:~MPSProperty.new(jetbrains/mps/smodel/adapter/structure/property/SPropertyAdapter)" resolve="MPSProperty" />
            <node concept="1XD0eI" id="4dQjfTHZOAq" role="TWiod">
              <node concept="kjMFK" id="4dQjfTHZOAr" role="1XD0ZN">
                <ref role="kjMFR" to="hcm8:2yYXHtl6Jjv" resolve="ClassType" />
                <ref role="kjMFQ" to="hcm8:5q426iHwzIm" resolve="isNullable" />
                <node concept="1ZhdrF" id="4dQjfTHZOAs" role="lGtFl">
                  <property role="2qtEX8" value="concept" />
                  <property role="P3scX" value="eb56ebf4-df56-438e-af06-fc1cd08b495a/3181756179490075795/3181756179490075796" />
                  <node concept="3$xsQk" id="4dQjfTHZOAt" role="3$ytzL">
                    <node concept="3clFbS" id="4dQjfTHZOAu" role="2VODD2">
                      <node concept="3clFbF" id="4dQjfTHZOAv" role="3cqZAp">
                        <node concept="2OqwBi" id="4dQjfTHZOAw" role="3clFbG">
                          <node concept="2OqwBi" id="4dQjfTHZOAx" role="2Oq$k0">
                            <node concept="30H73N" id="4dQjfTHZOAy" role="2Oq$k0" />
                            <node concept="3TrEf2" id="4dQjfTHZOAz" role="2OqNvi">
                              <ref role="3Tt5mk" to="f8gn:ziPuhE_FrT" resolve="property" />
                            </node>
                          </node>
                          <node concept="2qgKlT" id="4dQjfTHZOA$" role="2OqNvi">
                            <ref role="37wK5l" to="tpcn:2OF3rgRewqT" resolve="getConceptDeclaration" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="1ZhdrF" id="4dQjfTHZOA_" role="lGtFl">
                  <property role="2qtEX8" value="link" />
                  <property role="P3scX" value="eb56ebf4-df56-438e-af06-fc1cd08b495a/3181756179490075795/3181756179490075797" />
                  <node concept="3$xsQk" id="4dQjfTHZOAA" role="3$ytzL">
                    <node concept="3clFbS" id="4dQjfTHZOAB" role="2VODD2">
                      <node concept="3clFbF" id="4dQjfTHZOAC" role="3cqZAp">
                        <node concept="2OqwBi" id="4dQjfTHZOAD" role="3clFbG">
                          <node concept="30H73N" id="4dQjfTHZOAE" role="2Oq$k0" />
                          <node concept="3TrEf2" id="4dQjfTHZOAF" role="2OqNvi">
                            <ref role="3Tt5mk" to="f8gn:ziPuhE_FrT" resolve="property" />
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
    <node concept="3aamgX" id="CUW2QYOQW4" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:CUW2QYMiki" resolve="ChildrenCollectionCell" />
      <node concept="gft3U" id="CUW2QYOQW5" role="1lVwrX">
        <node concept="1XD0a7" id="CUW2QYOQW6" role="gfFT$">
          <node concept="1NbEtQ" id="CUW2QYOQW7" role="1XD07G">
            <ref role="AarEw" to="dbfy:~CellTemplateBuilder#org/modelix/model/api/IChildLink.horizontal(kotlin/String?,kotlin/Function1&lt;ChildCellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;)" resolve="horizontal" />
            <node concept="1XD0eI" id="CUW2QYP3Um" role="TWiod">
              <ref role="21Xffc" to="dbfy:~CellTemplateBuilder#org/modelix/model/api/IChildLink.horizontal(kotlin/String?,kotlin/Function1&lt;ChildCellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;).separator" resolve="separator" />
              <node concept="1XD08G" id="CUW2QYP3UE" role="1XD0ZN">
                <node concept="Df6$J" id="CUW2QYP3Y6" role="Df6Hu">
                  <node concept="21VMdE" id="CUW2QYP3Y5" role="Df7GE">
                    <property role="21VMdD" value="separator" />
                    <node concept="17Uvod" id="CUW2QYP40F" role="lGtFl">
                      <property role="2qtEX9" value="content" />
                      <property role="P4ACc" value="6b3888c1-9802-44d8-8baf-f8e6c33ed689/1243006380188575965/1243006380188575966" />
                      <node concept="3zFVjK" id="CUW2QYP40G" role="3zH0cK">
                        <node concept="3clFbS" id="CUW2QYP40H" role="2VODD2">
                          <node concept="3clFbF" id="CUW2QYP4hK" role="3cqZAp">
                            <node concept="2OqwBi" id="CUW2QYP4IE" role="3clFbG">
                              <node concept="30H73N" id="CUW2QYP4hJ" role="2Oq$k0" />
                              <node concept="3TrcHB" id="CUW2QYP4Zl" role="2OqNvi">
                                <ref role="3TsBF5" to="f8gn:CUW2QYMiCG" resolve="separator" />
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="1W57fq" id="22f9nDgLDS1" role="lGtFl">
                  <node concept="3IZrLx" id="22f9nDgLDS2" role="3IZSJc">
                    <node concept="3clFbS" id="22f9nDgLDS3" role="2VODD2">
                      <node concept="3clFbF" id="CUW2QYP5lj" role="3cqZAp">
                        <node concept="2OqwBi" id="CUW2QYP8Xa" role="3clFbG">
                          <node concept="2OqwBi" id="CUW2QYP5$N" role="2Oq$k0">
                            <node concept="30H73N" id="CUW2QYP5li" role="2Oq$k0" />
                            <node concept="3TrcHB" id="CUW2QYP5F0" role="2OqNvi">
                              <ref role="3TsBF5" to="f8gn:CUW2QYMiCG" resolve="separator" />
                            </node>
                          </node>
                          <node concept="17RvpY" id="CUW2QYP9Rg" role="2OqNvi" />
                        </node>
                      </node>
                    </node>
                  </node>
                  <node concept="gft3U" id="22f9nDgLEpd" role="UU_$l">
                    <node concept="1XD0k2" id="22f9nDgLEt0" role="gfFT$" />
                  </node>
                </node>
              </node>
            </node>
            <node concept="1XD0f0" id="6xJrM0NrToY" role="1XD06E">
              <node concept="1NbEFs" id="6xJrM0NrU3f" role="THmaL">
                <ref role="AarEw" to="dbfy:~ChildCellTemplateBuilder.separator(kotlin/Function1&lt;CellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;)" resolve="separator" />
                <node concept="1XD0f0" id="6xJrM0NrU3g" role="1XD06E">
                  <node concept="AQkLs" id="6xJrM0NrU3h" role="THmaL">
                    <node concept="29HgVG" id="6xJrM0NrU3i" role="lGtFl">
                      <node concept="3NFfHV" id="6xJrM0NrU3j" role="3NFExx">
                        <node concept="3clFbS" id="6xJrM0NrU3k" role="2VODD2">
                          <node concept="3clFbF" id="6xJrM0NrU3l" role="3cqZAp">
                            <node concept="2OqwBi" id="6xJrM0NrU3m" role="3clFbG">
                              <node concept="3TrEf2" id="6xJrM0NrU3n" role="2OqNvi">
                                <ref role="3Tt5mk" to="f8gn:6xJrM0NrOsd" resolve="separatorCell" />
                              </node>
                              <node concept="30H73N" id="6xJrM0NrU3o" role="2Oq$k0" />
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                  <node concept="AQkLs" id="6xJrM0NrZhx" role="THmaL" />
                </node>
                <node concept="1W57fq" id="6xJrM0NrZv0" role="lGtFl">
                  <node concept="3IZrLx" id="6xJrM0NrZv1" role="3IZSJc">
                    <node concept="3clFbS" id="6xJrM0NrZv2" role="2VODD2">
                      <node concept="3clFbF" id="6xJrM0NrZPH" role="3cqZAp">
                        <node concept="2OqwBi" id="6xJrM0Ns1Oa" role="3clFbG">
                          <node concept="2OqwBi" id="6xJrM0Ns0fY" role="2Oq$k0">
                            <node concept="30H73N" id="6xJrM0NrZPG" role="2Oq$k0" />
                            <node concept="3TrEf2" id="6xJrM0Ns1my" role="2OqNvi">
                              <ref role="3Tt5mk" to="f8gn:6xJrM0NrOsd" resolve="separatorCell" />
                            </node>
                          </node>
                          <node concept="3x8VRR" id="6xJrM0Ns2hr" role="2OqNvi" />
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="1NbEFs" id="m1OUzpjPHc" role="THmaL">
                <ref role="AarEw" to="dbfy:~ChildCellTemplateBuilder.newLineConcept(org/modelix/model/api/IConcept)" resolve="newLineConcept" />
                <node concept="1XD0eI" id="m1OUzpjPHd" role="TWiod">
                  <node concept="1XD0k2" id="1pzCNySbu8_" role="1XD0ZN">
                    <node concept="5jKBG" id="1pzCNySbu8A" role="lGtFl">
                      <ref role="v9R2y" node="1pzCNySbqH2" resolve="template_SConcept_as_IConcept" />
                      <node concept="3NFfHV" id="1pzCNySbu8B" role="5jGum">
                        <node concept="3clFbS" id="1pzCNySbu8C" role="2VODD2">
                          <node concept="3clFbF" id="1pzCNySbu8D" role="3cqZAp">
                            <node concept="2OqwBi" id="1pzCNySbu8E" role="3clFbG">
                              <node concept="30H73N" id="1pzCNySbu8F" role="2Oq$k0" />
                              <node concept="3TrEf2" id="1pzCNySbu8G" role="2OqNvi">
                                <ref role="3Tt5mk" to="f8gn:CUW2QYMiut" resolve="subconceptToInsert" />
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="1W57fq" id="m1OUzpjPHh" role="lGtFl">
                  <node concept="3IZrLx" id="m1OUzpjPHi" role="3IZSJc">
                    <node concept="3clFbS" id="m1OUzpjPHj" role="2VODD2">
                      <node concept="3clFbF" id="m1OUzpjPHk" role="3cqZAp">
                        <node concept="2OqwBi" id="m1OUzpjPHl" role="3clFbG">
                          <node concept="2OqwBi" id="m1OUzpjPHm" role="2Oq$k0">
                            <node concept="30H73N" id="m1OUzpjPHn" role="2Oq$k0" />
                            <node concept="3TrEf2" id="m1OUzpjPHo" role="2OqNvi">
                              <ref role="3Tt5mk" to="f8gn:CUW2QYMiut" resolve="subconceptToInsert" />
                            </node>
                          </node>
                          <node concept="3x8VRR" id="m1OUzpjTgx" role="2OqNvi" />
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
          </node>
          <node concept="1NbEFs" id="CUW2QYOQW8" role="21Pmik">
            <ref role="AarEw" to="1g18:~MPSChildLink.new(org/jetbrains/mps/openapi/language/SContainmentLink)" resolve="MPSChildLink" />
            <node concept="1XD0eI" id="CUW2QYOQW9" role="TWiod">
              <node concept="rZEcI" id="2KBRAcSs_sX" role="1XD0ZN">
                <ref role="rZ_zL" to="hcm8:2yYXHtl6Jjv" resolve="ClassType" />
                <ref role="rZ_F2" to="hcm8:5LVUgW$gbdV" resolve="class" />
                <node concept="1ZhdrF" id="2KBRAcSs_sY" role="lGtFl">
                  <property role="2qtEX8" value="concept" />
                  <property role="P3scX" value="eb56ebf4-df56-438e-af06-fc1cd08b495a/3181756179480673613/3181756179480675986" />
                  <node concept="3$xsQk" id="2KBRAcSs_sZ" role="3$ytzL">
                    <node concept="3clFbS" id="2KBRAcSs_t0" role="2VODD2">
                      <node concept="3clFbF" id="2KBRAcSs_t1" role="3cqZAp">
                        <node concept="2OqwBi" id="2KBRAcSs_t2" role="3clFbG">
                          <node concept="2OqwBi" id="6xJrM0Nr4eV" role="2Oq$k0">
                            <node concept="2OqwBi" id="2KBRAcSs_t3" role="2Oq$k0">
                              <node concept="30H73N" id="2KBRAcSs_t4" role="2Oq$k0" />
                              <node concept="3TrEf2" id="2KBRAcSs_t5" role="2OqNvi">
                                <ref role="3Tt5mk" to="f8gn:CUW2QYMipn" resolve="link" />
                              </node>
                            </node>
                            <node concept="2qgKlT" id="6xJrM0Nr4Ln" role="2OqNvi">
                              <ref role="37wK5l" to="tpcn:hEwIf_V" resolve="getGenuineLink" />
                            </node>
                          </node>
                          <node concept="2qgKlT" id="2KBRAcSs_t6" role="2OqNvi">
                            <ref role="37wK5l" to="tpcn:7jb4LXpbWaP" resolve="getConceptDeclaration" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="1ZhdrF" id="2KBRAcSs_t7" role="lGtFl">
                  <property role="2qtEX8" value="link" />
                  <property role="P3scX" value="eb56ebf4-df56-438e-af06-fc1cd08b495a/3181756179480673613/3181756179480675489" />
                  <node concept="3$xsQk" id="2KBRAcSs_t8" role="3$ytzL">
                    <node concept="3clFbS" id="2KBRAcSs_t9" role="2VODD2">
                      <node concept="3clFbF" id="2KBRAcSs_ta" role="3cqZAp">
                        <node concept="2OqwBi" id="6xJrM0Nr5Lc" role="3clFbG">
                          <node concept="2OqwBi" id="2KBRAcSs_tb" role="2Oq$k0">
                            <node concept="30H73N" id="2KBRAcSs_tc" role="2Oq$k0" />
                            <node concept="3TrEf2" id="2KBRAcSs_td" role="2OqNvi">
                              <ref role="3Tt5mk" to="f8gn:CUW2QYMipn" resolve="link" />
                            </node>
                          </node>
                          <node concept="2qgKlT" id="6xJrM0Nr61G" role="2OqNvi">
                            <ref role="37wK5l" to="tpcn:hEwIf_V" resolve="getGenuineLink" />
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
      <node concept="30G5F_" id="CUW2QYOYEN" role="30HLyM">
        <node concept="3clFbS" id="CUW2QYOYEO" role="2VODD2">
          <node concept="3clFbF" id="CUW2QYOZ38" role="3cqZAp">
            <node concept="3fqX7Q" id="42C8o9nB1Cf" role="3clFbG">
              <node concept="2OqwBi" id="42C8o9nB1Ch" role="3fr31v">
                <node concept="2OqwBi" id="42C8o9nB1Ci" role="2Oq$k0">
                  <node concept="30H73N" id="42C8o9nB1Cj" role="2Oq$k0" />
                  <node concept="3TrEf2" id="42C8o9nB1Ck" role="2OqNvi">
                    <ref role="3Tt5mk" to="f8gn:CUW2QYMi$q" resolve="layout" />
                  </node>
                </node>
                <node concept="2qgKlT" id="42C8o9nB1Cl" role="2OqNvi">
                  <ref role="37wK5l" to="wsib:CUW2QYKKme" resolve="isVertical" />
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="CUW2QYP18K" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:CUW2QYMiki" resolve="ChildrenCollectionCell" />
      <node concept="gft3U" id="CUW2QYP18L" role="1lVwrX">
        <node concept="1XD0a7" id="CUW2QYP18M" role="gfFT$">
          <node concept="1NbEtQ" id="CUW2QYP18N" role="1XD07G">
            <ref role="AarEw" to="dbfy:~CellTemplateBuilder#org/modelix/model/api/IChildLink.vertical(kotlin/Function1&lt;ChildCellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;)" resolve="vertical" />
            <node concept="1XD0f0" id="1pzCNySd5q8" role="1XD06E">
              <node concept="1NbEFs" id="1pzCNySbFDm" role="THmaL">
                <ref role="AarEw" to="dbfy:~ChildCellTemplateBuilder.newLineConcept(org/modelix/model/api/IConcept)" resolve="newLineConcept" />
                <node concept="1XD0eI" id="1pzCNySbFDn" role="TWiod">
                  <node concept="1XD0k2" id="1pzCNySbFDo" role="1XD0ZN">
                    <node concept="5jKBG" id="1pzCNySbFDp" role="lGtFl">
                      <ref role="v9R2y" node="1pzCNySbqH2" resolve="template_SConcept_as_IConcept" />
                      <node concept="3NFfHV" id="1pzCNySbFDq" role="5jGum">
                        <node concept="3clFbS" id="1pzCNySbFDr" role="2VODD2">
                          <node concept="3clFbF" id="1pzCNySbFDs" role="3cqZAp">
                            <node concept="2OqwBi" id="1pzCNySbFDt" role="3clFbG">
                              <node concept="30H73N" id="1pzCNySbFDu" role="2Oq$k0" />
                              <node concept="3TrEf2" id="1pzCNySbFDv" role="2OqNvi">
                                <ref role="3Tt5mk" to="f8gn:CUW2QYMiut" resolve="subconceptToInsert" />
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="1W57fq" id="1pzCNySbFDw" role="lGtFl">
                  <node concept="3IZrLx" id="1pzCNySbFDx" role="3IZSJc">
                    <node concept="3clFbS" id="1pzCNySbFDy" role="2VODD2">
                      <node concept="3clFbF" id="1pzCNySbFDz" role="3cqZAp">
                        <node concept="2OqwBi" id="1pzCNySbFD$" role="3clFbG">
                          <node concept="2OqwBi" id="1pzCNySbFD_" role="2Oq$k0">
                            <node concept="30H73N" id="1pzCNySbFDA" role="2Oq$k0" />
                            <node concept="3TrEf2" id="1pzCNySbFDB" role="2OqNvi">
                              <ref role="3Tt5mk" to="f8gn:CUW2QYMiut" resolve="subconceptToInsert" />
                            </node>
                          </node>
                          <node concept="3x8VRR" id="1pzCNySbFDC" role="2OqNvi" />
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="AQkLs" id="1pzCNySd5K3" role="THmaL" />
            </node>
          </node>
          <node concept="1NbEFs" id="CUW2QYP18O" role="21Pmik">
            <ref role="AarEw" to="1g18:~MPSChildLink.new(org/jetbrains/mps/openapi/language/SContainmentLink)" resolve="MPSChildLink" />
            <node concept="1XD0eI" id="CUW2QYP18P" role="TWiod">
              <node concept="rZEcI" id="CUW2QYP18Q" role="1XD0ZN">
                <ref role="rZ_zL" to="hcm8:2yYXHtl6Jjv" resolve="ClassType" />
                <ref role="rZ_F2" to="hcm8:5LVUgW$gbdV" resolve="class" />
                <node concept="1ZhdrF" id="CUW2QYP18R" role="lGtFl">
                  <property role="2qtEX8" value="concept" />
                  <property role="P3scX" value="eb56ebf4-df56-438e-af06-fc1cd08b495a/3181756179480673613/3181756179480675986" />
                  <node concept="3$xsQk" id="CUW2QYP18S" role="3$ytzL">
                    <node concept="3clFbS" id="CUW2QYP18T" role="2VODD2">
                      <node concept="3clFbF" id="CUW2QYP18U" role="3cqZAp">
                        <node concept="2OqwBi" id="CUW2QYP18V" role="3clFbG">
                          <node concept="2OqwBi" id="6xJrM0Nr6vG" role="2Oq$k0">
                            <node concept="2OqwBi" id="CUW2QYP18W" role="2Oq$k0">
                              <node concept="30H73N" id="CUW2QYP18X" role="2Oq$k0" />
                              <node concept="3TrEf2" id="CUW2QYP18Y" role="2OqNvi">
                                <ref role="3Tt5mk" to="f8gn:CUW2QYMipn" resolve="link" />
                              </node>
                            </node>
                            <node concept="2qgKlT" id="6xJrM0Nr6xx" role="2OqNvi">
                              <ref role="37wK5l" to="tpcn:hEwIf_V" resolve="getGenuineLink" />
                            </node>
                          </node>
                          <node concept="2qgKlT" id="CUW2QYP18Z" role="2OqNvi">
                            <ref role="37wK5l" to="tpcn:7jb4LXpbWaP" resolve="getConceptDeclaration" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="1ZhdrF" id="CUW2QYP190" role="lGtFl">
                  <property role="2qtEX8" value="link" />
                  <property role="P3scX" value="eb56ebf4-df56-438e-af06-fc1cd08b495a/3181756179480673613/3181756179480675489" />
                  <node concept="3$xsQk" id="CUW2QYP191" role="3$ytzL">
                    <node concept="3clFbS" id="CUW2QYP192" role="2VODD2">
                      <node concept="3clFbF" id="CUW2QYP193" role="3cqZAp">
                        <node concept="2OqwBi" id="6xJrM0Nr6QI" role="3clFbG">
                          <node concept="2OqwBi" id="CUW2QYP194" role="2Oq$k0">
                            <node concept="30H73N" id="CUW2QYP195" role="2Oq$k0" />
                            <node concept="3TrEf2" id="CUW2QYP196" role="2OqNvi">
                              <ref role="3Tt5mk" to="f8gn:CUW2QYMipn" resolve="link" />
                            </node>
                          </node>
                          <node concept="2qgKlT" id="6xJrM0Nr6RH" role="2OqNvi">
                            <ref role="37wK5l" to="tpcn:hEwIf_V" resolve="getGenuineLink" />
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
    <node concept="3aamgX" id="ziPuhEDw$F" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:ziPuhEA4oI" resolve="SingleChildCell" />
      <node concept="gft3U" id="ziPuhEDw$G" role="1lVwrX">
        <node concept="1XD0a7" id="ziPuhEDw$H" role="gfFT$">
          <node concept="1NbEtQ" id="ziPuhEDw$I" role="1XD07G">
            <ref role="AarEw" to="dbfy:~CellTemplateBuilder#org/modelix/model/api/IChildLink.cell(kotlin/Function1&lt;CellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;)" resolve="cell" />
          </node>
          <node concept="1NbEFs" id="ziPuhEDw_3" role="21Pmik">
            <ref role="AarEw" to="1g18:~MPSChildLink.new(org/jetbrains/mps/openapi/language/SContainmentLink)" resolve="MPSChildLink" />
            <node concept="1XD0eI" id="ziPuhEDw_4" role="TWiod">
              <node concept="rZEcI" id="ziPuhEDw_5" role="1XD0ZN">
                <ref role="rZ_zL" to="hcm8:2yYXHtl6Jjv" resolve="ClassType" />
                <ref role="rZ_F2" to="hcm8:5LVUgW$gbdV" resolve="class" />
                <node concept="1ZhdrF" id="ziPuhEDw_6" role="lGtFl">
                  <property role="2qtEX8" value="concept" />
                  <property role="P3scX" value="eb56ebf4-df56-438e-af06-fc1cd08b495a/3181756179480673613/3181756179480675986" />
                  <node concept="3$xsQk" id="ziPuhEDw_7" role="3$ytzL">
                    <node concept="3clFbS" id="ziPuhEDw_8" role="2VODD2">
                      <node concept="3clFbF" id="ziPuhEDw_9" role="3cqZAp">
                        <node concept="2OqwBi" id="ziPuhEDw_a" role="3clFbG">
                          <node concept="2OqwBi" id="6xJrM0Nr7nx" role="2Oq$k0">
                            <node concept="2OqwBi" id="ziPuhEDw_b" role="2Oq$k0">
                              <node concept="30H73N" id="ziPuhEDw_c" role="2Oq$k0" />
                              <node concept="3TrEf2" id="ziPuhEDw_d" role="2OqNvi">
                                <ref role="3Tt5mk" to="f8gn:ziPuhEA4oM" resolve="link" />
                              </node>
                            </node>
                            <node concept="2qgKlT" id="6xJrM0Nr7ow" role="2OqNvi">
                              <ref role="37wK5l" to="tpcn:hEwIf_V" resolve="getGenuineLink" />
                            </node>
                          </node>
                          <node concept="2qgKlT" id="ziPuhEDw_e" role="2OqNvi">
                            <ref role="37wK5l" to="tpcn:7jb4LXpbWaP" resolve="getConceptDeclaration" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="1ZhdrF" id="ziPuhEDw_f" role="lGtFl">
                  <property role="2qtEX8" value="link" />
                  <property role="P3scX" value="eb56ebf4-df56-438e-af06-fc1cd08b495a/3181756179480673613/3181756179480675489" />
                  <node concept="3$xsQk" id="ziPuhEDw_g" role="3$ytzL">
                    <node concept="3clFbS" id="ziPuhEDw_h" role="2VODD2">
                      <node concept="3clFbF" id="ziPuhEDw_i" role="3cqZAp">
                        <node concept="2OqwBi" id="6xJrM0Nr7Jj" role="3clFbG">
                          <node concept="2OqwBi" id="ziPuhEDw_j" role="2Oq$k0">
                            <node concept="30H73N" id="ziPuhEDw_k" role="2Oq$k0" />
                            <node concept="3TrEf2" id="ziPuhEDw_l" role="2OqNvi">
                              <ref role="3Tt5mk" to="f8gn:ziPuhEA4oM" resolve="link" />
                            </node>
                          </node>
                          <node concept="2qgKlT" id="6xJrM0Nr7Ki" role="2OqNvi">
                            <ref role="37wK5l" to="tpcn:hEwIf_V" resolve="getGenuineLink" />
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
    <node concept="3aamgX" id="4dQjfTHX66i" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:ziPuhEA2a_" resolve="ReferenceCell" />
      <node concept="gft3U" id="4dQjfTHX66j" role="1lVwrX">
        <node concept="1XD0a7" id="4dQjfTHX66k" role="gfFT$">
          <node concept="1NbEtQ" id="4dQjfTHX66l" role="1XD07G">
            <ref role="AarEw" to="dbfy:~CellTemplateBuilder#org/modelix/model/api/IChildLink.cell(kotlin/Function1&lt;CellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;)" resolve="cell" />
            <node concept="1XD0eI" id="4dQjfTHX7Hh" role="TWiod">
              <node concept="1XD0f0" id="4dQjfTHX7Hg" role="1XD0ZN">
                <node concept="1NbEFs" id="4dQjfTHX7JP" role="THmaL">
                  <ref role="AarEw" to="b15i:~INode.getPropertyValue(IProperty)" resolve="getPropertyValue" />
                  <node concept="1XD0eI" id="4dQjfTHXaSY" role="TWiod">
                    <node concept="1NbEFs" id="4dQjfTHXaT2" role="1XD0ZN">
                      <ref role="AarEw" to="1g18:~MPSProperty.new(jetbrains/mps/smodel/adapter/structure/property/SPropertyAdapter)" resolve="MPSProperty" />
                      <node concept="1XD0eI" id="4dQjfTHXaT3" role="TWiod">
                        <node concept="kjMFK" id="4dQjfTHXbFD" role="1XD0ZN">
                          <ref role="kjMFR" to="tpck:h0TrEE$" resolve="INamedConcept" />
                          <ref role="kjMFQ" to="tpck:h0TrG11" resolve="name" />
                        </node>
                      </node>
                    </node>
                  </node>
                  <node concept="1W57fq" id="22f9nDgPeek" role="lGtFl">
                    <node concept="3IZrLx" id="22f9nDgPeel" role="3IZSJc">
                      <node concept="3clFbS" id="22f9nDgPeem" role="2VODD2">
                        <node concept="3clFbF" id="22f9nDgPeua" role="3cqZAp">
                          <node concept="2OqwBi" id="22f9nDgPfqF" role="3clFbG">
                            <node concept="2OqwBi" id="22f9nDgPeSr" role="2Oq$k0">
                              <node concept="30H73N" id="22f9nDgPeu9" role="2Oq$k0" />
                              <node concept="3TrEf2" id="22f9nDgPf7O" role="2OqNvi">
                                <ref role="3Tt5mk" to="f8gn:22f9nDgMtfW" resolve="renderTarget" />
                              </node>
                            </node>
                            <node concept="3w_OXm" id="22f9nDgPfMj" role="2OqNvi" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="3rn2iY" id="1edLqv8OXnc" role="THmaL">
                  <node concept="37vLTG" id="1edLqv8Pxxo" role="3rn2i5">
                    <property role="TrG5h" value="referenceTarget" />
                    <node concept="3Tqbb2" id="1edLqv8PxWT" role="1tU5fm">
                      <ref role="ehGHo" to="tpck:gw2VY9q" resolve="BaseConcept" />
                      <node concept="1ZhdrF" id="1edLqv8PyTG" role="lGtFl">
                        <property role="2qtEX8" value="concept" />
                        <property role="P3scX" value="7866978e-a0f0-4cc7-81bc-4d213d9375e1/1138055754698/1138405853777" />
                        <node concept="3$xsQk" id="1edLqv8PyTH" role="3$ytzL">
                          <node concept="3clFbS" id="1edLqv8PyTI" role="2VODD2">
                            <node concept="3clFbF" id="1edLqv8PyYV" role="3cqZAp">
                              <node concept="2OqwBi" id="1edLqv8P_Nq" role="3clFbG">
                                <node concept="2OqwBi" id="1edLqv8PziD" role="2Oq$k0">
                                  <node concept="30H73N" id="1edLqv8PyYU" role="2Oq$k0" />
                                  <node concept="3TrEf2" id="1edLqv8P_ib" role="2OqNvi">
                                    <ref role="3Tt5mk" to="f8gn:ziPuhEA2aC" resolve="link" />
                                  </node>
                                </node>
                                <node concept="3TrEf2" id="1edLqv8PAhK" role="2OqNvi">
                                  <ref role="3Tt5mk" to="tpce:fA0lvVK" resolve="target" />
                                </node>
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                  <node concept="3clFbS" id="1edLqv8OXne" role="3rn2iT">
                    <node concept="3cpWs6" id="1edLqv8OXK3" role="3cqZAp">
                      <node concept="Xl_RD" id="1edLqv8OXKb" role="3cqZAk">
                        <property role="Xl_RC" value="" />
                        <node concept="29HgVG" id="1edLqv8OXKj" role="lGtFl">
                          <node concept="3NFfHV" id="1edLqv8OXKk" role="3NFExx">
                            <node concept="3clFbS" id="1edLqv8OXKl" role="2VODD2">
                              <node concept="3clFbF" id="1edLqv8OXKr" role="3cqZAp">
                                <node concept="2OqwBi" id="1edLqv8Ps_3" role="3clFbG">
                                  <node concept="1PxgMI" id="1edLqv8Psdp" role="2Oq$k0">
                                    <node concept="chp4Y" id="1edLqv8Psn8" role="3oSUPX">
                                      <ref role="cht4Q" to="ya4x:22f9nDgNaE0" resolve="BaseLanguageExpressionWrapper" />
                                    </node>
                                    <node concept="2OqwBi" id="1edLqv8OXKm" role="1m5AlR">
                                      <node concept="3TrEf2" id="1edLqv8OXKp" role="2OqNvi">
                                        <ref role="3Tt5mk" to="f8gn:22f9nDgMtfW" resolve="renderTarget" />
                                      </node>
                                      <node concept="30H73N" id="1edLqv8OXKq" role="2Oq$k0" />
                                    </node>
                                  </node>
                                  <node concept="3TrEf2" id="1edLqv8PsUZ" role="2OqNvi">
                                    <ref role="3Tt5mk" to="ya4x:22f9nDgNaE3" resolve="expression" />
                                  </node>
                                </node>
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                  <node concept="17QB3L" id="1edLqv8OXK0" role="3rn2ht" />
                  <node concept="1W57fq" id="1edLqv8OXZr" role="lGtFl">
                    <node concept="3IZrLx" id="1edLqv8OXZs" role="3IZSJc">
                      <node concept="3clFbS" id="1edLqv8OXZt" role="2VODD2">
                        <node concept="3clFbF" id="1edLqv8OY0G" role="3cqZAp">
                          <node concept="1Wc70l" id="1edLqv8Pmas" role="3clFbG">
                            <node concept="2OqwBi" id="1edLqv8PnNg" role="3uHU7w">
                              <node concept="2OqwBi" id="1edLqv8PmQB" role="2Oq$k0">
                                <node concept="30H73N" id="1edLqv8Pmg0" role="2Oq$k0" />
                                <node concept="3TrEf2" id="1edLqv8Pnxh" role="2OqNvi">
                                  <ref role="3Tt5mk" to="f8gn:22f9nDgMtfW" resolve="renderTarget" />
                                </node>
                              </node>
                              <node concept="1mIQ4w" id="1edLqv8PoXE" role="2OqNvi">
                                <node concept="chp4Y" id="1edLqv8PpmA" role="cj9EA">
                                  <ref role="cht4Q" to="ya4x:22f9nDgNaE0" resolve="BaseLanguageExpressionWrapper" />
                                </node>
                              </node>
                            </node>
                            <node concept="2OqwBi" id="1edLqv8OY0H" role="3uHU7B">
                              <node concept="2OqwBi" id="1edLqv8OY0I" role="2Oq$k0">
                                <node concept="30H73N" id="1edLqv8OY0J" role="2Oq$k0" />
                                <node concept="3TrEf2" id="1edLqv8OY0K" role="2OqNvi">
                                  <ref role="3Tt5mk" to="f8gn:22f9nDgMtfW" resolve="renderTarget" />
                                </node>
                              </node>
                              <node concept="3x8VRR" id="1edLqv8OY0L" role="2OqNvi" />
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                  <node concept="1NbEFs" id="vaVstE5wzt" role="3rn2i2">
                    <ref role="AarEw" to="qjbp:~ModelixNodeAsMPSNode.new(org/modelix/model/api/INode)" resolve="ModelixNodeAsMPSNode" />
                    <node concept="1XD0eI" id="vaVstE5x85" role="TWiod">
                      <node concept="1XD0df" id="vaVstE5x84" role="1XD0ZN" />
                    </node>
                  </node>
                </node>
                <node concept="1KmxGs" id="22f9nDgPKm9" role="THmaL">
                  <node concept="10Nm6u" id="22f9nDgPKnY" role="1KmxGj">
                    <node concept="29HgVG" id="22f9nDgPKo5" role="lGtFl">
                      <node concept="3NFfHV" id="22f9nDgPKo6" role="3NFExx">
                        <node concept="3clFbS" id="22f9nDgPKo7" role="2VODD2">
                          <node concept="3clFbF" id="22f9nDgPKod" role="3cqZAp">
                            <node concept="2OqwBi" id="22f9nDgPKo8" role="3clFbG">
                              <node concept="3TrEf2" id="22f9nDgPKob" role="2OqNvi">
                                <ref role="3Tt5mk" to="f8gn:22f9nDgMtfW" resolve="renderTarget" />
                              </node>
                              <node concept="30H73N" id="22f9nDgPKoc" role="2Oq$k0" />
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                  <node concept="1W57fq" id="22f9nDgQk0a" role="lGtFl">
                    <node concept="3IZrLx" id="22f9nDgQk0b" role="3IZSJc">
                      <node concept="3clFbS" id="22f9nDgQk0c" role="2VODD2">
                        <node concept="3clFbF" id="22f9nDgQk1n" role="3cqZAp">
                          <node concept="1Wc70l" id="1edLqv8PqUo" role="3clFbG">
                            <node concept="3fqX7Q" id="1edLqv8Prjg" role="3uHU7w">
                              <node concept="1eOMI4" id="1edLqv8Prji" role="3fr31v">
                                <node concept="2OqwBi" id="1edLqv8ProI" role="1eOMHV">
                                  <node concept="2OqwBi" id="1edLqv8ProJ" role="2Oq$k0">
                                    <node concept="30H73N" id="1edLqv8ProK" role="2Oq$k0" />
                                    <node concept="3TrEf2" id="1edLqv8ProL" role="2OqNvi">
                                      <ref role="3Tt5mk" to="f8gn:22f9nDgMtfW" resolve="renderTarget" />
                                    </node>
                                  </node>
                                  <node concept="1mIQ4w" id="1edLqv8ProM" role="2OqNvi">
                                    <node concept="chp4Y" id="1edLqv8ProN" role="cj9EA">
                                      <ref role="cht4Q" to="ya4x:22f9nDgNaE0" resolve="BaseLanguageExpressionWrapper" />
                                    </node>
                                  </node>
                                </node>
                              </node>
                            </node>
                            <node concept="2OqwBi" id="22f9nDgQkTx" role="3uHU7B">
                              <node concept="2OqwBi" id="22f9nDgQkrC" role="2Oq$k0">
                                <node concept="30H73N" id="22f9nDgQk1m" role="2Oq$k0" />
                                <node concept="3TrEf2" id="22f9nDgQkFt" role="2OqNvi">
                                  <ref role="3Tt5mk" to="f8gn:22f9nDgMtfW" resolve="renderTarget" />
                                </node>
                              </node>
                              <node concept="3x8VRR" id="22f9nDgQl8f" role="2OqNvi" />
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
          <node concept="1NbEFs" id="4dQjfTHX66m" role="21Pmik">
            <ref role="AarEw" to="1g18:~MPSReferenceLink.new(org/jetbrains/mps/openapi/language/SReferenceLink)" resolve="MPSReferenceLink" />
            <node concept="1XD0eI" id="4dQjfTHX66n" role="TWiod">
              <node concept="rZEcI" id="4dQjfTHX66o" role="1XD0ZN">
                <ref role="rZ_zL" to="hcm8:2yYXHtl6Jjv" resolve="ClassType" />
                <ref role="rZ_F2" to="hcm8:5LVUgW$gbdV" resolve="class" />
                <node concept="1ZhdrF" id="4dQjfTHX66p" role="lGtFl">
                  <property role="2qtEX8" value="concept" />
                  <property role="P3scX" value="eb56ebf4-df56-438e-af06-fc1cd08b495a/3181756179480673613/3181756179480675986" />
                  <node concept="3$xsQk" id="4dQjfTHX66q" role="3$ytzL">
                    <node concept="3clFbS" id="4dQjfTHX66r" role="2VODD2">
                      <node concept="3clFbF" id="4dQjfTHX66s" role="3cqZAp">
                        <node concept="2OqwBi" id="4dQjfTHX66t" role="3clFbG">
                          <node concept="2OqwBi" id="6xJrM0NqqLX" role="2Oq$k0">
                            <node concept="2OqwBi" id="4dQjfTHX66u" role="2Oq$k0">
                              <node concept="30H73N" id="4dQjfTHX66v" role="2Oq$k0" />
                              <node concept="3TrEf2" id="4dQjfTHX66w" role="2OqNvi">
                                <ref role="3Tt5mk" to="f8gn:ziPuhEA2aC" resolve="link" />
                              </node>
                            </node>
                            <node concept="2qgKlT" id="6xJrM0Nqrhq" role="2OqNvi">
                              <ref role="37wK5l" to="tpcn:hEwIf_V" resolve="getGenuineLink" />
                            </node>
                          </node>
                          <node concept="2qgKlT" id="4dQjfTHX66x" role="2OqNvi">
                            <ref role="37wK5l" to="tpcn:7jb4LXpbWaP" resolve="getConceptDeclaration" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="1ZhdrF" id="4dQjfTHX66y" role="lGtFl">
                  <property role="2qtEX8" value="link" />
                  <property role="P3scX" value="eb56ebf4-df56-438e-af06-fc1cd08b495a/3181756179480673613/3181756179480675489" />
                  <node concept="3$xsQk" id="4dQjfTHX66z" role="3$ytzL">
                    <node concept="3clFbS" id="4dQjfTHX66$" role="2VODD2">
                      <node concept="3clFbF" id="4dQjfTHX66_" role="3cqZAp">
                        <node concept="2OqwBi" id="6xJrM0NqwCL" role="3clFbG">
                          <node concept="2OqwBi" id="4dQjfTHX66A" role="2Oq$k0">
                            <node concept="30H73N" id="4dQjfTHX66B" role="2Oq$k0" />
                            <node concept="3TrEf2" id="4dQjfTHX66C" role="2OqNvi">
                              <ref role="3Tt5mk" to="f8gn:ziPuhEA2aC" resolve="link" />
                            </node>
                          </node>
                          <node concept="2qgKlT" id="6xJrM0NqxdK" role="2OqNvi">
                            <ref role="37wK5l" to="tpcn:hEwIf_V" resolve="getGenuineLink" />
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
      <node concept="30G5F_" id="4dQjfTHXrtt" role="30HLyM">
        <node concept="3clFbS" id="4dQjfTHXrtu" role="2VODD2">
          <node concept="3clFbF" id="4dQjfTHXrwq" role="3cqZAp">
            <node concept="2OqwBi" id="4dQjfTHXtAq" role="3clFbG">
              <node concept="2OqwBi" id="4dQjfTHXsQB" role="2Oq$k0">
                <node concept="2OqwBi" id="4dQjfTHXrUF" role="2Oq$k0">
                  <node concept="30H73N" id="4dQjfTHXrwp" role="2Oq$k0" />
                  <node concept="3TrEf2" id="4dQjfTHXs7O" role="2OqNvi">
                    <ref role="3Tt5mk" to="f8gn:ziPuhEA2aC" resolve="link" />
                  </node>
                </node>
                <node concept="3TrEf2" id="4dQjfTHXtdB" role="2OqNvi">
                  <ref role="3Tt5mk" to="tpce:fA0lvVK" resolve="target" />
                </node>
              </node>
              <node concept="1mIQ4w" id="4dQjfTHXtZl" role="2OqNvi">
                <node concept="chp4Y" id="4dQjfTHXu2z" role="cj9EA">
                  <ref role="cht4Q" to="tpck:h0TrEE$" resolve="INamedConcept" />
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="1edLqv8PAVG" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:22f9nDgOIIh" resolve="BL_ReferenceTargetExpression" />
      <node concept="30G5F_" id="1edLqv8PAVJ" role="30HLyM">
        <node concept="3clFbS" id="1edLqv8PAVK" role="2VODD2">
          <node concept="3clFbF" id="1edLqv8PAVL" role="3cqZAp">
            <node concept="22lmx$" id="2k1jtbCJzbi" role="3clFbG">
              <node concept="2OqwBi" id="2k1jtbCJ$Wk" role="3uHU7w">
                <node concept="2OqwBi" id="2k1jtbCJzTD" role="2Oq$k0">
                  <node concept="30H73N" id="2k1jtbCJzx6" role="2Oq$k0" />
                  <node concept="2Xjw5R" id="2k1jtbCJ$aE" role="2OqNvi">
                    <node concept="1xMEDy" id="2k1jtbCJ$aG" role="1xVPHs">
                      <node concept="chp4Y" id="2k1jtbCJ$rW" role="ri$Ld">
                        <ref role="cht4Q" to="ya4x:22f9nDgNaE0" resolve="BaseLanguageExpressionWrapper" />
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="3x8VRR" id="2k1jtbCJ_fj" role="2OqNvi" />
              </node>
              <node concept="2OqwBi" id="1edLqv8PAVM" role="3uHU7B">
                <node concept="2OqwBi" id="1edLqv8PAVN" role="2Oq$k0">
                  <node concept="30H73N" id="1edLqv8PAVO" role="2Oq$k0" />
                  <node concept="2Xjw5R" id="1edLqv8PAVP" role="2OqNvi">
                    <node concept="1xMEDy" id="1edLqv8PAVQ" role="1xVPHs">
                      <node concept="chp4Y" id="1edLqv8PAVR" role="ri$Ld">
                        <ref role="cht4Q" to="j33e:1edLqv8Ou4p" resolve="BaseLanguageFunctionInKotlin" />
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="3x8VRR" id="1edLqv8PAVS" role="2OqNvi" />
              </node>
            </node>
          </node>
        </node>
      </node>
      <node concept="1Koe21" id="1edLqv8PFGW" role="1lVwrX">
        <node concept="3rn2iY" id="1edLqv8PEgc" role="1Koe22">
          <node concept="37vLTG" id="1edLqv8PEgd" role="3rn2i5">
            <property role="TrG5h" value="referenceTarget" />
            <node concept="3Tqbb2" id="1edLqv8PEge" role="1tU5fm">
              <ref role="ehGHo" to="tpck:gw2VY9q" resolve="BaseConcept" />
            </node>
          </node>
          <node concept="3clFbS" id="1edLqv8PEgo" role="3rn2iT">
            <node concept="3cpWs6" id="1edLqv8PEgp" role="3cqZAp">
              <node concept="3VmV3z" id="1edLqv8PFhH" role="3cqZAk">
                <property role="3VnrPo" value="referenceTarget" />
                <node concept="3Tqbb2" id="1edLqv8PFhR" role="3Vn4Tt">
                  <ref role="ehGHo" to="tpck:gw2VY9q" resolve="BaseConcept" />
                  <node concept="1ZhdrF" id="2k1jtbCIqN2" role="lGtFl">
                    <property role="2qtEX8" value="concept" />
                    <property role="P3scX" value="7866978e-a0f0-4cc7-81bc-4d213d9375e1/1138055754698/1138405853777" />
                    <node concept="3$xsQk" id="2k1jtbCIqN3" role="3$ytzL">
                      <node concept="3clFbS" id="2k1jtbCIqN4" role="2VODD2">
                        <node concept="3clFbF" id="2k1jtbCJnYJ" role="3cqZAp">
                          <node concept="2OqwBi" id="22f9nDgOLNZ" role="3clFbG">
                            <node concept="2OqwBi" id="22f9nDgOLO0" role="2Oq$k0">
                              <node concept="2OqwBi" id="22f9nDgOLO1" role="2Oq$k0">
                                <node concept="2Xjw5R" id="22f9nDgOLO3" role="2OqNvi">
                                  <node concept="1xMEDy" id="22f9nDgOLO4" role="1xVPHs">
                                    <node concept="chp4Y" id="22f9nDgOLO5" role="ri$Ld">
                                      <ref role="cht4Q" to="f8gn:ziPuhEA2a_" resolve="ReferenceCell" />
                                    </node>
                                  </node>
                                  <node concept="1xIGOp" id="22f9nDgOLO6" role="1xVPHs" />
                                </node>
                                <node concept="30H73N" id="2k1jtbCJorB" role="2Oq$k0" />
                              </node>
                              <node concept="3TrEf2" id="22f9nDgOLO7" role="2OqNvi">
                                <ref role="3Tt5mk" to="f8gn:ziPuhEA2aC" resolve="link" />
                              </node>
                            </node>
                            <node concept="3TrEf2" id="22f9nDgOLO8" role="2OqNvi">
                              <ref role="3Tt5mk" to="tpce:fA0lvVK" resolve="target" />
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="raruj" id="1edLqv8PFOx" role="lGtFl" />
              </node>
            </node>
          </node>
          <node concept="17QB3L" id="1edLqv8PEgA" role="3rn2ht" />
          <node concept="1XD0df" id="1edLqv8PEgR" role="3rn2i2" />
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="22f9nDgPg0F" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:22f9nDgOIIh" resolve="BL_ReferenceTargetExpression" />
      <node concept="gft3U" id="22f9nDgPncm" role="1lVwrX">
        <node concept="1XD0df" id="22f9nDgPndc" role="gfFT$" />
      </node>
      <node concept="30G5F_" id="22f9nDgPgUU" role="30HLyM">
        <node concept="3clFbS" id="22f9nDgPgUV" role="2VODD2">
          <node concept="3clFbF" id="22f9nDgPgXE" role="3cqZAp">
            <node concept="2OqwBi" id="22f9nDgPmHz" role="3clFbG">
              <node concept="2OqwBi" id="22f9nDgPhn1" role="2Oq$k0">
                <node concept="30H73N" id="22f9nDgPgXD" role="2Oq$k0" />
                <node concept="2Xjw5R" id="22f9nDgPi0h" role="2OqNvi">
                  <node concept="1xMEDy" id="22f9nDgPi0j" role="1xVPHs">
                    <node concept="chp4Y" id="22f9nDgPmqt" role="ri$Ld">
                      <ref role="cht4Q" to="ya4x:22f9nDgPjTA" resolve="ConvertToKotlin" />
                    </node>
                  </node>
                </node>
              </node>
              <node concept="3x8VRR" id="22f9nDgPn5X" role="2OqNvi" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="CUW2QYOA2M" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:CUW2QYKJtX" resolve="StaticCollectionCell" />
      <node concept="gft3U" id="CUW2QYOHxg" role="1lVwrX">
        <node concept="2OUTUo" id="CUW2QYOIpp" role="gfFT$">
          <node concept="3JB3jO" id="CUW2QYOIrZ" role="2OUSl_">
            <node concept="2b32R4" id="CUW2QYOItJ" role="lGtFl">
              <node concept="3JmXsc" id="CUW2QYOItM" role="2P8S$">
                <node concept="3clFbS" id="CUW2QYOItN" role="2VODD2">
                  <node concept="3clFbF" id="CUW2QYOItT" role="3cqZAp">
                    <node concept="2OqwBi" id="CUW2QYOLed" role="3clFbG">
                      <node concept="2OqwBi" id="CUW2QYOItO" role="2Oq$k0">
                        <node concept="3Tsc0h" id="CUW2QYOItR" role="2OqNvi">
                          <ref role="3TtcxE" to="f8gn:CUW2QYKJ$J" resolve="cells" />
                        </node>
                        <node concept="30H73N" id="CUW2QYOItS" role="2Oq$k0" />
                      </node>
                      <node concept="7r0gD" id="CUW2QYOMBw" role="2OqNvi">
                        <node concept="3cmrfG" id="CUW2QYOMCu" role="7T0AP">
                          <property role="3cmrfH" value="1" />
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
      <node concept="30G5F_" id="CUW2QYOAqx" role="30HLyM">
        <node concept="3clFbS" id="CUW2QYOAqy" role="2VODD2">
          <node concept="3clFbF" id="CUW2QYOAx3" role="3cqZAp">
            <node concept="2OqwBi" id="CUW2QYOG6d" role="3clFbG">
              <node concept="2OqwBi" id="CUW2QYODG7" role="2Oq$k0">
                <node concept="2OqwBi" id="CUW2QYOAVk" role="2Oq$k0">
                  <node concept="30H73N" id="CUW2QYOAx2" role="2Oq$k0" />
                  <node concept="3Tsc0h" id="CUW2QYOB9t" role="2OqNvi">
                    <ref role="3TtcxE" to="f8gn:CUW2QYKJ$J" resolve="cells" />
                  </node>
                </node>
                <node concept="1uHKPH" id="CUW2QYOFuD" role="2OqNvi" />
              </node>
              <node concept="1mIQ4w" id="CUW2QYOH3A" role="2OqNvi">
                <node concept="chp4Y" id="CUW2QYOHrg" role="cj9EA">
                  <ref role="cht4Q" to="f8gn:CUW2QYMXaO" resolve="IndentCell" />
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="CUW2QYNC_f" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:CUW2QYOmUP" resolve="WithIdentCell" />
      <node concept="gft3U" id="CUW2QYNC_g" role="1lVwrX">
        <node concept="1NbEFs" id="CUW2QYNC_h" role="gfFT$">
          <ref role="AarEw" to="dbfy:~CellTemplateBuilder.indented(kotlin/Function1&lt;CellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;)" resolve="indented" />
          <node concept="1XD0f0" id="CUW2QYNENP" role="1XD06E">
            <node concept="AQkLs" id="CUW2QYNHt0" role="THmaL">
              <node concept="2b32R4" id="CUW2QYNHwv" role="lGtFl">
                <node concept="3JmXsc" id="CUW2QYNHwy" role="2P8S$">
                  <node concept="3clFbS" id="CUW2QYNHwz" role="2VODD2">
                    <node concept="3clFbF" id="CUW2QYNHwD" role="3cqZAp">
                      <node concept="2OqwBi" id="CUW2QYNHw$" role="3clFbG">
                        <node concept="3Tsc0h" id="CUW2QYNHwB" role="2OqNvi">
                          <ref role="3TtcxE" to="f8gn:CUW2QYOnl8" resolve="cells" />
                        </node>
                        <node concept="30H73N" id="CUW2QYNHwC" role="2Oq$k0" />
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
    <node concept="3aamgX" id="CUW2QYOypp" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:CUW2QYKJtX" resolve="StaticCollectionCell" />
      <node concept="gft3U" id="CUW2QYOypq" role="1lVwrX">
        <node concept="1NbEFs" id="CUW2QYOypr" role="gfFT$">
          <ref role="AarEw" to="dbfy:~CellTemplateBuilder.vertical(kotlin/Function1&lt;CellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;)" resolve="vertical" />
          <node concept="1XD0f0" id="CUW2QYOyps" role="1XD06E">
            <node concept="AQkLs" id="CUW2QYOypt" role="THmaL">
              <node concept="2b32R4" id="CUW2QYOypu" role="lGtFl">
                <node concept="3JmXsc" id="CUW2QYOypv" role="2P8S$">
                  <node concept="3clFbS" id="CUW2QYOypw" role="2VODD2">
                    <node concept="3clFbF" id="CUW2QYOypx" role="3cqZAp">
                      <node concept="2OqwBi" id="CUW2QYOypy" role="3clFbG">
                        <node concept="3Tsc0h" id="CUW2QYOypz" role="2OqNvi">
                          <ref role="3TtcxE" to="f8gn:CUW2QYKJ$J" resolve="cells" />
                        </node>
                        <node concept="30H73N" id="CUW2QYOyp$" role="2Oq$k0" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
      <node concept="30G5F_" id="CUW2QYOyp_" role="30HLyM">
        <node concept="3clFbS" id="CUW2QYOypA" role="2VODD2">
          <node concept="3clFbF" id="CUW2QYOypB" role="3cqZAp">
            <node concept="2OqwBi" id="CUW2QYOypC" role="3clFbG">
              <node concept="30H73N" id="CUW2QYOypD" role="2Oq$k0" />
              <node concept="2qgKlT" id="CUW2QYOypE" role="2OqNvi">
                <ref role="37wK5l" to="wsib:CUW2QYKLam" resolve="isVerticalLayout" />
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="CUW2QYNJix" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:CUW2QYKJtX" resolve="StaticCollectionCell" />
      <node concept="gft3U" id="CUW2QYNJiy" role="1lVwrX">
        <node concept="1NbEFs" id="CUW2QYNJiz" role="gfFT$">
          <ref role="AarEw" to="dbfy:~CellTemplateBuilder.horizontal(kotlin/Function1&lt;CellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;)" resolve="horizontal" />
          <node concept="1XD0f0" id="CUW2QYNJi$" role="1XD06E">
            <node concept="AQkLs" id="CUW2QYNJi_" role="THmaL">
              <node concept="2b32R4" id="CUW2QYNJiA" role="lGtFl">
                <node concept="3JmXsc" id="CUW2QYNJiB" role="2P8S$">
                  <node concept="3clFbS" id="CUW2QYNJiC" role="2VODD2">
                    <node concept="3clFbF" id="CUW2QYNJiD" role="3cqZAp">
                      <node concept="2OqwBi" id="CUW2QYNJiE" role="3clFbG">
                        <node concept="3Tsc0h" id="CUW2QYNJiF" role="2OqNvi">
                          <ref role="3TtcxE" to="f8gn:CUW2QYKJ$J" resolve="cells" />
                        </node>
                        <node concept="30H73N" id="CUW2QYNJiG" role="2Oq$k0" />
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
    <node concept="3aamgX" id="22f9nDgRKSe" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:ziPuhE_FoY" resolve="BL_ExpressionCell" />
      <node concept="gft3U" id="22f9nDgRLae" role="1lVwrX">
        <node concept="1NbEFs" id="22f9nDgRLaf" role="gfFT$">
          <ref role="AarEw" to="dbfy:~CellTemplateBuilder.horizontal(kotlin/Function1&lt;CellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;)" resolve="horizontal" />
          <node concept="1XD0f0" id="22f9nDgRLag" role="1XD06E">
            <node concept="1NbEFs" id="22f9nDgRMjz" role="THmaL">
              <ref role="AarEw" to="dbfy:~CellTemplateBuilder.withNode(kotlin/Function1&lt;CellTemplateBuilder.WithNodeContext,kotlin/Unit&gt;)" resolve="withNode" />
              <node concept="1XD0f0" id="22f9nDgRMj$" role="1XD06E">
                <node concept="1NbEFs" id="22f9nDgRQ9O" role="THmaL">
                  <ref role="AarEw" to="dbfy:~CellTemplateBuilder.modelAccess(kotlin/Function1&lt;ModelAccessBuilder,kotlin/Unit&gt;)" resolve="modelAccess" />
                  <node concept="1XD0f0" id="22f9nDgRQ9P" role="1XD06E">
                    <node concept="1NbEFs" id="22f9nDgRUp$" role="THmaL">
                      <ref role="AarEw" to="dbfy:~ModelAccessBuilder.get(kotlin/Function0&lt;kotlin/String?&gt;)" resolve="get" />
                      <node concept="1XD0f0" id="22f9nDgRUp_" role="1XD06E">
                        <node concept="1KmxGs" id="22f9nDgRU5Z" role="THmaL">
                          <node concept="10Nm6u" id="22f9nDgRU81" role="1KmxGj">
                            <node concept="29HgVG" id="22f9nDgRU87" role="lGtFl">
                              <node concept="3NFfHV" id="22f9nDgRU88" role="3NFExx">
                                <node concept="3clFbS" id="22f9nDgRU89" role="2VODD2">
                                  <node concept="3clFbF" id="22f9nDgRU8f" role="3cqZAp">
                                    <node concept="2OqwBi" id="22f9nDgRU8a" role="3clFbG">
                                      <node concept="3TrEf2" id="22f9nDgRU8d" role="2OqNvi">
                                        <ref role="3Tt5mk" to="f8gn:ziPuhE_Fp2" resolve="expression" />
                                      </node>
                                      <node concept="30H73N" id="22f9nDgRU8e" role="2Oq$k0" />
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
          </node>
        </node>
      </node>
    </node>
    <node concept="3aamgX" id="22f9nDgS1RE" role="3acgRq">
      <ref role="30HIoZ" to="f8gn:22f9nDgNr2y" resolve="BL_NotationNodeExpression" />
      <node concept="gft3U" id="22f9nDgS50R" role="1lVwrX">
        <node concept="3VmV3z" id="22f9nDgS50Z" role="gfFT$">
          <property role="3VnrPo" value="node" />
          <node concept="3Tqbb2" id="22f9nDgS519" role="3Vn4Tt" />
        </node>
      </node>
    </node>
  </node>
  <node concept="1XD0fY" id="63DBII8pVW4">
    <property role="TrG5h" value="AspectsDescriptor" />
    <node concept="eKYAL" id="63DBII8pVZv" role="1XD0Tu" />
    <node concept="1XD0mN" id="1ixZ$UHlP6U" role="1XD0Tu">
      <property role="TrG5h" value="AspectsDescriptor" />
      <node concept="1XD09Q" id="1ixZ$UHlQH3" role="KS$fE">
        <property role="1Xb$ne" value="true" />
        <node concept="1XD0eA" id="1ixZ$UHlQH5" role="TDYyH">
          <property role="TrG5h" value="editorAspect" />
          <node concept="1XD088" id="1ixZ$UHlQRm" role="1XD0Z0">
            <ref role="1SePDO" to="dbfy:~org/modelix/editor/EditorAspect" resolve="EditorAspect" />
          </node>
        </node>
        <node concept="1XD0mK" id="1ixZ$UHlQJE" role="1XD05H">
          <node concept="1NbEFs" id="1ixZ$UHlQOj" role="1XD0cX">
            <ref role="AarEw" to="dbfy:~EditorAspect.new()" resolve="EditorAspect" />
          </node>
        </node>
      </node>
      <node concept="1XD0fu" id="1ixZ$UHlR6j" role="KS$fE">
        <node concept="1XD0a7" id="1ixZ$UHlRcY" role="THmaL">
          <node concept="1NbEtQ" id="1ixZ$UHlTBU" role="1XD07G">
            <ref role="AarEw" to="dbfy:~EditorAspect.conceptEditor(org/modelix/model/api/IConcept,kotlin/Boolean,kotlin/Function1&lt;NotationRootCellTemplateBuilder&lt;org/modelix/model/api/INode,org/modelix/model/api/IConcept&gt;,kotlin/Unit&gt;)" resolve="conceptEditor" />
            <node concept="1XD0eI" id="1ixZ$UHlX_H" role="TWiod">
              <node concept="1XD0k2" id="1pzCNySbtjH" role="1XD0ZN">
                <node concept="5jKBG" id="1pzCNySbtpc" role="lGtFl">
                  <ref role="v9R2y" node="1pzCNySbqH2" resolve="template_SConcept_as_IConcept" />
                  <node concept="3NFfHV" id="1pzCNySbtuv" role="5jGum">
                    <node concept="3clFbS" id="1pzCNySbtuw" role="2VODD2">
                      <node concept="3clFbF" id="1pzCNySbtu$" role="3cqZAp">
                        <node concept="2OqwBi" id="1ixZ$UHlXAS" role="3clFbG">
                          <node concept="30H73N" id="1ixZ$UHlXAT" role="2Oq$k0" />
                          <node concept="3TrEf2" id="1ixZ$UHlXAU" role="2OqNvi">
                            <ref role="3Tt5mk" to="f8gn:7dm8yUsMfNE" resolve="concept" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="1XD0eI" id="1zXwHaHuDXc" role="TWiod">
              <node concept="1XD0ko" id="1zXwHaHuEr0" role="1XD0ZN">
                <node concept="17Uvod" id="1zXwHaHuEre" role="lGtFl">
                  <property role="2qtEX9" value="value" />
                  <property role="P4ACc" value="6b3888c1-9802-44d8-8baf-f8e6c33ed689/2936055411798373327/2936055411798374017" />
                  <node concept="3zFVjK" id="1zXwHaHuErf" role="3zH0cK">
                    <node concept="3clFbS" id="1zXwHaHuErg" role="2VODD2">
                      <node concept="3clFbF" id="1zXwHaHvEn8" role="3cqZAp">
                        <node concept="2OqwBi" id="1zXwHaHvEKY" role="3clFbG">
                          <node concept="30H73N" id="1zXwHaHvEn7" role="2Oq$k0" />
                          <node concept="3TrcHB" id="1zXwHaHvGR7" role="2OqNvi">
                            <ref role="3TsBF5" to="f8gn:1zXwHaHuRnq" resolve="applicableToSubconcepts" />
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="1XD0f0" id="1ixZ$UHlY6w" role="1XD06E">
              <node concept="1NbEFs" id="2YOUMOf_FCX" role="THmaL">
                <ref role="AarEw" to="dbfy:~NotationRootCellTemplateBuilder.condition(kotlin/Function1&lt;org/modelix/model/api/INode,kotlin/Boolean&gt;)" resolve="condition" />
                <node concept="1XD0f0" id="2YOUMOf_FMv" role="1XD06E">
                  <node concept="1XD0eA" id="2YOUMOf_J5f" role="21PhDs">
                    <property role="TrG5h" value="node" />
                  </node>
                  <node concept="1KmxGs" id="2YOUMOfA0iO" role="THmaL">
                    <node concept="10Nm6u" id="2YOUMOfA0iS" role="1KmxGj">
                      <node concept="29HgVG" id="2YOUMOfA0j2" role="lGtFl">
                        <node concept="3NFfHV" id="2YOUMOfA0j7" role="3NFExx">
                          <node concept="3clFbS" id="2YOUMOfA0j8" role="2VODD2">
                            <node concept="3clFbF" id="2YOUMOfA0lo" role="3cqZAp">
                              <node concept="2OqwBi" id="2YOUMOfA0yh" role="3clFbG">
                                <node concept="30H73N" id="2YOUMOfA0ln" role="2Oq$k0" />
                                <node concept="3TrEf2" id="2YOUMOfA1El" role="2OqNvi">
                                  <ref role="3Tt5mk" to="f8gn:7dm8yUsMfZC" resolve="condition" />
                                </node>
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="1W57fq" id="2YOUMOf_JeE" role="lGtFl">
                  <node concept="3IZrLx" id="2YOUMOf_JeF" role="3IZSJc">
                    <node concept="3clFbS" id="2YOUMOf_JeG" role="2VODD2">
                      <node concept="3clFbF" id="2YOUMOf_JtB" role="3cqZAp">
                        <node concept="2OqwBi" id="2YOUMOf_PmH" role="3clFbG">
                          <node concept="2OqwBi" id="2YOUMOf_JRt" role="2Oq$k0">
                            <node concept="30H73N" id="2YOUMOf_JtA" role="2Oq$k0" />
                            <node concept="3TrEf2" id="2YOUMOf_LXW" role="2OqNvi">
                              <ref role="3Tt5mk" to="f8gn:7dm8yUsMfZC" resolve="condition" />
                            </node>
                          </node>
                          <node concept="3x8VRR" id="2YOUMOf_P_U" role="2OqNvi" />
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
              <node concept="AQkLs" id="1ixZ$UHlY6x" role="THmaL">
                <node concept="29HgVG" id="1ixZ$UHlY6y" role="lGtFl">
                  <node concept="3NFfHV" id="1ixZ$UHlY6z" role="3NFExx">
                    <node concept="3clFbS" id="1ixZ$UHlY6$" role="2VODD2">
                      <node concept="3clFbF" id="1ixZ$UHlY6_" role="3cqZAp">
                        <node concept="2OqwBi" id="1ixZ$UHlY6A" role="3clFbG">
                          <node concept="3TrEf2" id="1ixZ$UHlY6B" role="2OqNvi">
                            <ref role="3Tt5mk" to="f8gn:7dm8yUsMfYJ" resolve="cell" />
                          </node>
                          <node concept="30H73N" id="1ixZ$UHlY6C" role="2Oq$k0" />
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
          </node>
          <node concept="UZU4S" id="1ixZ$UHlRaS" role="21Pmik">
            <ref role="UZU4V" node="1ixZ$UHlQH5" resolve="editorAspect" />
          </node>
          <node concept="1WS0z7" id="1ixZ$UHlYUn" role="lGtFl">
            <node concept="3JmXsc" id="1ixZ$UHlYUq" role="3Jn$fo">
              <node concept="3clFbS" id="1ixZ$UHlYUr" role="2VODD2">
                <node concept="3clFbF" id="22f9nDgKT5m" role="3cqZAp">
                  <node concept="2OqwBi" id="22f9nDgL5NT" role="3clFbG">
                    <node concept="2OqwBi" id="22f9nDgL0kn" role="2Oq$k0">
                      <node concept="2OqwBi" id="22f9nDgKUt7" role="2Oq$k0">
                        <node concept="2OqwBi" id="22f9nDgKTZF" role="2Oq$k0">
                          <node concept="1iwH7S" id="22f9nDgKT5l" role="2Oq$k0" />
                          <node concept="1r8y6K" id="22f9nDgKUd9" role="2OqNvi" />
                        </node>
                        <node concept="2RRcyG" id="22f9nDgKWSF" role="2OqNvi">
                          <node concept="chp4Y" id="22f9nDgKWZN" role="3MHsoP">
                            <ref role="cht4Q" to="f8gn:7dm8yUsM9Ro" resolve="NotationModule" />
                          </node>
                        </node>
                      </node>
                      <node concept="13MTOL" id="22f9nDgL2HP" role="2OqNvi">
                        <ref role="13MTZf" to="f8gn:7dm8yUsMfq9" resolve="content" />
                      </node>
                    </node>
                    <node concept="v3k3i" id="22f9nDgL7aT" role="2OqNvi">
                      <node concept="chp4Y" id="22f9nDgL7ln" role="v3oSu">
                        <ref role="cht4Q" to="f8gn:7dm8yUsMfHH" resolve="ConceptNotation" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
      <node concept="1XD0bz" id="1ixZ$UHlPK8" role="KS$fE">
        <property role="TrG5h" value="createAspects" />
        <property role="3qOnjd" value="true" />
        <node concept="1NbEFs" id="1ixZ$UHlQuI" role="THmaL">
          <ref role="AarEw" to="1xrd:~.listOf&lt;1&gt;(*0)" resolve="listOf" />
          <node concept="1XD0eI" id="1ixZ$UHlQBK" role="TWiod">
            <node concept="UZU4S" id="1ixZ$UHlQWU" role="1XD0ZN">
              <ref role="UZU4V" node="1ixZ$UHlQH5" resolve="editorAspect" />
            </node>
          </node>
        </node>
      </node>
      <node concept="KYwOn" id="1ixZ$UHlPFI" role="AST3G">
        <ref role="KYwOm" to="8jio:~org/modelix/editor/ssr/mps/ILanguageAspectsDescriptor" resolve="ILanguageAspectsDescriptor" />
      </node>
    </node>
    <node concept="eKYAL" id="1ixZ$UHlOD0" role="1XD0Tu" />
    <node concept="eKYAL" id="63DBII8pVZx" role="1XD0Tu" />
    <node concept="n94m4" id="63DBII8pVW5" role="lGtFl" />
  </node>
  <node concept="13MO4I" id="1pzCNySbqH2">
    <property role="TrG5h" value="template_SConcept_as_IConcept" />
    <ref role="3gUMe" to="tpce:h0PkWnZ" resolve="AbstractConceptDeclaration" />
    <node concept="1NbEFs" id="1pzCNySbqH4" role="13RCb5">
      <ref role="AarEw" to="1g18:~MPSConcept.new(org/jetbrains/mps/openapi/language/SAbstractConcept)" resolve="MPSConcept" />
      <node concept="1XD0eI" id="1pzCNySbqH5" role="TWiod">
        <node concept="1XD0a7" id="1pzCNySbqH6" role="1XD0ZN">
          <node concept="2yQVVM" id="1pzCNySbqH7" role="1XD07G">
            <ref role="2yQV70" to="2k9e:~MetaAdapterFactory.getConcept(jetbrains.mps.smodel.adapter.ids.SConceptId,java.lang.String)" resolve="getConcept" />
            <node concept="1XD0eI" id="1pzCNySbqH8" role="TWiod">
              <node concept="1XD0a7" id="1pzCNySbqH9" role="1XD0ZN">
                <node concept="2yQVVM" id="1pzCNySbqHa" role="1XD07G">
                  <ref role="2yQV70" to="e8bb:~SConceptId.deserialize(java.lang.String)" resolve="deserialize" />
                  <node concept="1XD0eI" id="1pzCNySbqHb" role="TWiod">
                    <node concept="1XD08G" id="1pzCNySbqHc" role="1XD0ZN">
                      <node concept="Df6$J" id="1pzCNySbqHd" role="Df6Hu">
                        <node concept="21VMdE" id="1pzCNySbqHe" role="Df7GE">
                          <property role="21VMdD" value="serializedConceptId" />
                          <node concept="17Uvod" id="1pzCNySbqHf" role="lGtFl">
                            <property role="2qtEX9" value="content" />
                            <property role="P4ACc" value="6b3888c1-9802-44d8-8baf-f8e6c33ed689/1243006380188575965/1243006380188575966" />
                            <node concept="3zFVjK" id="1pzCNySbqHg" role="3zH0cK">
                              <node concept="3clFbS" id="1pzCNySbqHh" role="2VODD2">
                                <node concept="3clFbF" id="1pzCNySbqHi" role="3cqZAp">
                                  <node concept="2OqwBi" id="1pzCNySbqHj" role="3clFbG">
                                    <node concept="2YIFZM" id="1pzCNySbqHk" role="2Oq$k0">
                                      <ref role="37wK5l" to="e8bb:~MetaIdByDeclaration.getConceptId(org.jetbrains.mps.openapi.model.SNode)" resolve="getConceptId" />
                                      <ref role="1Pybhc" to="e8bb:~MetaIdByDeclaration" resolve="MetaIdByDeclaration" />
                                      <node concept="30H73N" id="1pzCNySbqHm" role="37wK5m" />
                                    </node>
                                    <node concept="liA8E" id="1pzCNySbqHo" role="2OqNvi">
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
                </node>
                <node concept="1XD0em" id="1pzCNySbqHp" role="21Pmik">
                  <node concept="2EYIWN" id="1pzCNySbqHq" role="1XD0Sn">
                    <ref role="2EYIUZ" to="e8bb:~SConceptId" resolve="SConceptId" />
                  </node>
                </node>
              </node>
            </node>
            <node concept="1XD0eI" id="1pzCNySbqHr" role="TWiod">
              <node concept="1XD08G" id="1pzCNySbqHs" role="1XD0ZN">
                <node concept="Df6$J" id="1pzCNySbqHt" role="Df6Hu">
                  <node concept="21VMdE" id="1pzCNySbqHu" role="Df7GE">
                    <property role="21VMdD" value="conceptName" />
                    <node concept="17Uvod" id="1pzCNySbqHv" role="lGtFl">
                      <property role="2qtEX9" value="content" />
                      <property role="P4ACc" value="6b3888c1-9802-44d8-8baf-f8e6c33ed689/1243006380188575965/1243006380188575966" />
                      <node concept="3zFVjK" id="1pzCNySbqHw" role="3zH0cK">
                        <node concept="3clFbS" id="1pzCNySbqHx" role="2VODD2">
                          <node concept="3clFbF" id="1pzCNySbqHy" role="3cqZAp">
                            <node concept="2OqwBi" id="1pzCNySbqHz" role="3clFbG">
                              <node concept="30H73N" id="1pzCNySbqH_" role="2Oq$k0" />
                              <node concept="2qgKlT" id="1pzCNySbqHB" role="2OqNvi">
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
          <node concept="1XD0em" id="1pzCNySbqHC" role="21Pmik">
            <node concept="2EYIWN" id="1pzCNySbqHD" role="1XD0Sn">
              <ref role="2EYIUZ" to="2k9e:~MetaAdapterFactory" resolve="MetaAdapterFactory" />
            </node>
          </node>
        </node>
      </node>
      <node concept="raruj" id="1pzCNySbrAM" role="lGtFl" />
    </node>
  </node>
</model>

