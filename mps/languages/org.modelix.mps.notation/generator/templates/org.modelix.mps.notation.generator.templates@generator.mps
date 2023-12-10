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
    <devkit ref="a2eb3a43-fcc2-4200-80dc-c60110c4862d(jetbrains.mps.devkit.templates)" />
    <devkit ref="3605c367-b661-48bf-8131-d9bd75494e4d(jetbrains.mps.devkit.kotlin)" />
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
    <import index="vzxy" ref="r:e4815086-4c30-49cb-8870-1731d8a054ca(jetbrains.mps.kotlin.smodel.structure)" />
    <import index="tpcn" ref="r:00000000-0000-4000-0000-011c8959028b(jetbrains.mps.lang.structure.behavior)" />
    <import index="hcm8" ref="r:72a7bf00-0175-42ca-b99b-fe8519b6a16f(jetbrains.mps.kotlin.structure)" />
    <import index="8jio" ref="771cf896-ab1b-409b-93b4-48c3bbb6b23f/kotlinJvm:org.modelix.editor.ssr.mps(org.modelix.mps.editor.ssr.stubs/)" />
    <import index="wsib" ref="r:d1d5cd51-6710-43f8-bd5b-f958da6e1ca2(org.modelix.mps.notation.behavior)" implicit="true" />
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
    <import index="tpce" ref="r:00000000-0000-4000-0000-011c89590292(jetbrains.mps.lang.structure.structure)" implicit="true" />
    <import index="tpcu" ref="r:00000000-0000-4000-0000-011c89590282(jetbrains.mps.lang.core.behavior)" implicit="true" />
    <import index="1xrd" ref="b50d89c0-0fb9-4105-b652-222148c26a9b/kotlin:kotlin.collections(jetbrains.mps.kotlin.stdlib/)" implicit="true" />
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
      <concept id="1225271408483" name="jetbrains.mps.baseLanguage.structure.IsNotEmptyOperation" flags="nn" index="17RvpY" />
      <concept id="1068580123155" name="jetbrains.mps.baseLanguage.structure.ExpressionStatement" flags="nn" index="3clFbF">
        <child id="1068580123156" name="expression" index="3clFbG" />
      </concept>
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
      <concept id="1068580320020" name="jetbrains.mps.baseLanguage.structure.IntegerConstant" flags="nn" index="3cmrfG">
        <property id="1068580320021" name="value" index="3cmrfH" />
      </concept>
      <concept id="1081516740877" name="jetbrains.mps.baseLanguage.structure.NotExpression" flags="nn" index="3fqX7Q">
        <child id="1081516765348" name="expression" index="3fr31v" />
      </concept>
      <concept id="1204053956946" name="jetbrains.mps.baseLanguage.structure.IMethodCall" flags="ngI" index="1ndlxa">
        <reference id="1068499141037" name="baseMethodDeclaration" index="37wK5l" />
        <child id="1068499141038" name="actualArgument" index="37wK5m" />
      </concept>
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
        <child id="1167514678247" name="rootMappingRule" index="3lj3bC" />
      </concept>
      <concept id="1177093525992" name="jetbrains.mps.lang.generator.structure.InlineTemplate_RuleConsequence" flags="lg" index="gft3U">
        <child id="1177093586806" name="templateNode" index="gfFT$" />
      </concept>
      <concept id="1168619357332" name="jetbrains.mps.lang.generator.structure.RootTemplateAnnotation" flags="lg" index="n94m4">
        <reference id="1168619429071" name="applicableConcept" index="n9lRv" />
      </concept>
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
      <concept id="1167514355419" name="jetbrains.mps.lang.generator.structure.Root_MappingRule" flags="lg" index="3lhOvk">
        <reference id="1167514355421" name="template" index="3lhOvi" />
      </concept>
      <concept id="1167756080639" name="jetbrains.mps.lang.generator.structure.PropertyMacro_GetPropertyValue" flags="in" index="3zFVjK" />
      <concept id="1167770111131" name="jetbrains.mps.lang.generator.structure.ReferenceMacro_GetReferent" flags="in" index="3$xsQk" />
      <concept id="1167945743726" name="jetbrains.mps.lang.generator.structure.IfMacro_Condition" flags="in" index="3IZrLx" />
      <concept id="1167951910403" name="jetbrains.mps.lang.generator.structure.SourceSubstituteMacro_SourceNodesQuery" flags="in" index="3JmXsc" />
      <concept id="1168024337012" name="jetbrains.mps.lang.generator.structure.SourceSubstituteMacro_SourceNodeQuery" flags="in" index="3NFfHV" />
      <concept id="1118773211870" name="jetbrains.mps.lang.generator.structure.IfMacro" flags="ln" index="1W57fq">
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
      <concept id="2936055411798373655" name="jetbrains.mps.kotlin.structure.LambdaLiteral" flags="ng" index="1XD0f0" />
      <concept id="2936055411798373641" name="jetbrains.mps.kotlin.structure.AnonymousInitializer" flags="ng" index="1XD0fu" />
      <concept id="2936055411798373673" name="jetbrains.mps.kotlin.structure.KotlinFile" flags="ng" index="1XD0fY">
        <child id="2936055411798374537" name="declarations" index="1XD0Tu" />
      </concept>
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
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="1177026924588" name="jetbrains.mps.lang.smodel.structure.RefConcept_Reference" flags="nn" index="chp4Y">
        <reference id="1177026940964" name="conceptDeclaration" index="cht4Q" />
      </concept>
      <concept id="1179409122411" name="jetbrains.mps.lang.smodel.structure.Node_ConceptMethodCall" flags="nn" index="2qgKlT" />
      <concept id="4693937538533521280" name="jetbrains.mps.lang.smodel.structure.OfConceptOperation" flags="ng" index="v3k3i">
        <child id="4693937538533538124" name="requestedConcept" index="v3oSu" />
      </concept>
      <concept id="1139621453865" name="jetbrains.mps.lang.smodel.structure.Node_IsInstanceOfOperation" flags="nn" index="1mIQ4w">
        <child id="1177027386292" name="conceptArgument" index="cj9EA" />
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
    <language id="83888646-71ce-4f1c-9c53-c54016f6ad4f" name="jetbrains.mps.baseLanguage.collections">
      <concept id="1172650591544" name="jetbrains.mps.baseLanguage.collections.structure.SkipOperation" flags="nn" index="7r0gD">
        <child id="1172658456740" name="elementsToSkip" index="7T0AP" />
      </concept>
      <concept id="1165525191778" name="jetbrains.mps.baseLanguage.collections.structure.GetFirstOperation" flags="nn" index="1uHKPH" />
    </language>
  </registry>
  <node concept="bUwia" id="3hw8cNzhJ6K">
    <property role="TrG5h" value="main" />
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
                        <node concept="3clFbF" id="1NttIwKSx9t" role="3cqZAp">
                          <node concept="2OqwBi" id="1NttIwKSxAn" role="3clFbG">
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
              </node>
              <node concept="1W57fq" id="CUW2QYP56h" role="lGtFl">
                <node concept="3IZrLx" id="CUW2QYP56i" role="3IZSJc">
                  <node concept="3clFbS" id="CUW2QYP56j" role="2VODD2">
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
                          <node concept="2OqwBi" id="2KBRAcSs_t3" role="2Oq$k0">
                            <node concept="30H73N" id="2KBRAcSs_t4" role="2Oq$k0" />
                            <node concept="3TrEf2" id="2KBRAcSs_t5" role="2OqNvi">
                              <ref role="3Tt5mk" to="f8gn:CUW2QYMipn" resolve="link" />
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
                        <node concept="2OqwBi" id="2KBRAcSs_tb" role="3clFbG">
                          <node concept="30H73N" id="2KBRAcSs_tc" role="2Oq$k0" />
                          <node concept="3TrEf2" id="2KBRAcSs_td" role="2OqNvi">
                            <ref role="3Tt5mk" to="f8gn:CUW2QYMipn" resolve="link" />
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
            <ref role="AarEw" to="dbfy:~CellTemplateBuilder#org/modelix/model/api/IChildLink.vertical(kotlin/Function1&lt;CellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;)" resolve="vertical" />
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
                          <node concept="2OqwBi" id="CUW2QYP18W" role="2Oq$k0">
                            <node concept="30H73N" id="CUW2QYP18X" role="2Oq$k0" />
                            <node concept="3TrEf2" id="CUW2QYP18Y" role="2OqNvi">
                              <ref role="3Tt5mk" to="f8gn:CUW2QYMipn" resolve="link" />
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
                        <node concept="2OqwBi" id="CUW2QYP194" role="3clFbG">
                          <node concept="30H73N" id="CUW2QYP195" role="2Oq$k0" />
                          <node concept="3TrEf2" id="CUW2QYP196" role="2OqNvi">
                            <ref role="3Tt5mk" to="f8gn:CUW2QYMipn" resolve="link" />
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
                          <node concept="2OqwBi" id="ziPuhEDw_b" role="2Oq$k0">
                            <node concept="30H73N" id="ziPuhEDw_c" role="2Oq$k0" />
                            <node concept="3TrEf2" id="ziPuhEDw_d" role="2OqNvi">
                              <ref role="3Tt5mk" to="f8gn:ziPuhEA4oM" resolve="link" />
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
                        <node concept="2OqwBi" id="ziPuhEDw_j" role="3clFbG">
                          <node concept="30H73N" id="ziPuhEDw_k" role="2Oq$k0" />
                          <node concept="3TrEf2" id="ziPuhEDw_l" role="2OqNvi">
                            <ref role="3Tt5mk" to="f8gn:ziPuhEA4oM" resolve="link" />
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
                          <node concept="2OqwBi" id="4dQjfTHX66u" role="2Oq$k0">
                            <node concept="30H73N" id="4dQjfTHX66v" role="2Oq$k0" />
                            <node concept="3TrEf2" id="4dQjfTHX66w" role="2OqNvi">
                              <ref role="3Tt5mk" to="f8gn:ziPuhEA2aC" resolve="link" />
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
                        <node concept="2OqwBi" id="4dQjfTHX66A" role="3clFbG">
                          <node concept="30H73N" id="4dQjfTHX66B" role="2Oq$k0" />
                          <node concept="3TrEf2" id="4dQjfTHX66C" role="2OqNvi">
                            <ref role="3Tt5mk" to="f8gn:ziPuhEA2aC" resolve="link" />
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
    <node concept="3lhOvk" id="63DBII8qadT" role="3lj3bC">
      <ref role="30HIoZ" to="f8gn:7dm8yUsM9Ro" resolve="NotationModule" />
      <ref role="3lhOvi" node="63DBII8pVW4" resolve="AspectsDescriptor" />
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
            <ref role="AarEw" to="dbfy:~EditorAspect.conceptEditor(org/modelix/model/api/IConcept,kotlin/Function1&lt;CellTemplateBuilder&lt;org/modelix/model/api/INode,org/modelix/model/api/IConcept&gt;,kotlin/Unit&gt;)" resolve="conceptEditor" />
            <node concept="1XD0eI" id="1ixZ$UHlX_H" role="TWiod">
              <node concept="1NbEFs" id="1ixZ$UHlXAB" role="1XD0ZN">
                <ref role="AarEw" to="1g18:~MPSConcept.new(org/jetbrains/mps/openapi/language/SAbstractConcept)" resolve="MPSConcept" />
                <node concept="1XD0eI" id="1ixZ$UHlXAC" role="TWiod">
                  <node concept="1XD0a7" id="1ixZ$UHlXAD" role="1XD0ZN">
                    <node concept="2yQVVM" id="1ixZ$UHlXAE" role="1XD07G">
                      <ref role="2yQV70" to="2k9e:~MetaAdapterFactory.getConcept(jetbrains.mps.smodel.adapter.ids.SConceptId,java.lang.String)" resolve="getConcept" />
                      <node concept="1XD0eI" id="1ixZ$UHlXAF" role="TWiod">
                        <node concept="1XD0a7" id="1ixZ$UHlXAG" role="1XD0ZN">
                          <node concept="2yQVVM" id="1ixZ$UHlXAH" role="1XD07G">
                            <ref role="2yQV70" to="e8bb:~SConceptId.deserialize(java.lang.String)" resolve="deserialize" />
                            <node concept="1XD0eI" id="1ixZ$UHlXAI" role="TWiod">
                              <node concept="1XD08G" id="1ixZ$UHlXAJ" role="1XD0ZN">
                                <node concept="Df6$J" id="1ixZ$UHlXAK" role="Df6Hu">
                                  <node concept="21VMdE" id="1ixZ$UHlXAL" role="Df7GE">
                                    <property role="21VMdD" value="serializedConceptId" />
                                    <node concept="17Uvod" id="1ixZ$UHlXAM" role="lGtFl">
                                      <property role="2qtEX9" value="content" />
                                      <property role="P4ACc" value="6b3888c1-9802-44d8-8baf-f8e6c33ed689/1243006380188575965/1243006380188575966" />
                                      <node concept="3zFVjK" id="1ixZ$UHlXAN" role="3zH0cK">
                                        <node concept="3clFbS" id="1ixZ$UHlXAO" role="2VODD2">
                                          <node concept="3clFbF" id="1ixZ$UHlXAP" role="3cqZAp">
                                            <node concept="2OqwBi" id="1ixZ$UHlXAQ" role="3clFbG">
                                              <node concept="2YIFZM" id="1ixZ$UHlXAR" role="2Oq$k0">
                                                <ref role="37wK5l" to="e8bb:~MetaIdByDeclaration.getConceptId(org.jetbrains.mps.openapi.model.SNode)" resolve="getConceptId" />
                                                <ref role="1Pybhc" to="e8bb:~MetaIdByDeclaration" resolve="MetaIdByDeclaration" />
                                                <node concept="2OqwBi" id="1ixZ$UHlXAS" role="37wK5m">
                                                  <node concept="30H73N" id="1ixZ$UHlXAT" role="2Oq$k0" />
                                                  <node concept="3TrEf2" id="1ixZ$UHlXAU" role="2OqNvi">
                                                    <ref role="3Tt5mk" to="f8gn:7dm8yUsMfNE" resolve="concept" />
                                                  </node>
                                                </node>
                                              </node>
                                              <node concept="liA8E" id="1ixZ$UHlXAV" role="2OqNvi">
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
                          <node concept="1XD0em" id="1ixZ$UHlXAW" role="21Pmik">
                            <node concept="2EYIWN" id="1ixZ$UHlXAX" role="1XD0Sn">
                              <ref role="2EYIUZ" to="e8bb:~SConceptId" resolve="SConceptId" />
                            </node>
                          </node>
                        </node>
                      </node>
                      <node concept="1XD0eI" id="1ixZ$UHlXAY" role="TWiod">
                        <node concept="1XD08G" id="1ixZ$UHlXAZ" role="1XD0ZN">
                          <node concept="Df6$J" id="1ixZ$UHlXB0" role="Df6Hu">
                            <node concept="21VMdE" id="1ixZ$UHlXB1" role="Df7GE">
                              <property role="21VMdD" value="conceptName" />
                              <node concept="17Uvod" id="1ixZ$UHlXB2" role="lGtFl">
                                <property role="2qtEX9" value="content" />
                                <property role="P4ACc" value="6b3888c1-9802-44d8-8baf-f8e6c33ed689/1243006380188575965/1243006380188575966" />
                                <node concept="3zFVjK" id="1ixZ$UHlXB3" role="3zH0cK">
                                  <node concept="3clFbS" id="1ixZ$UHlXB4" role="2VODD2">
                                    <node concept="3clFbF" id="1ixZ$UHlXB5" role="3cqZAp">
                                      <node concept="2OqwBi" id="1ixZ$UHlXB6" role="3clFbG">
                                        <node concept="2OqwBi" id="1ixZ$UHlXB7" role="2Oq$k0">
                                          <node concept="30H73N" id="1ixZ$UHlXB8" role="2Oq$k0" />
                                          <node concept="3TrEf2" id="1ixZ$UHlXB9" role="2OqNvi">
                                            <ref role="3Tt5mk" to="f8gn:7dm8yUsMfNE" resolve="concept" />
                                          </node>
                                        </node>
                                        <node concept="2qgKlT" id="1ixZ$UHlXBa" role="2OqNvi">
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
                    <node concept="1XD0em" id="1ixZ$UHlXBb" role="21Pmik">
                      <node concept="2EYIWN" id="1ixZ$UHlXBc" role="1XD0Sn">
                        <ref role="2EYIUZ" to="2k9e:~MetaAdapterFactory" resolve="MetaAdapterFactory" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="1XD0f0" id="1ixZ$UHlY6w" role="1XD06E">
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
                <node concept="3clFbF" id="1ixZ$UHlZlJ" role="3cqZAp">
                  <node concept="2OqwBi" id="1ixZ$UHlZlK" role="3clFbG">
                    <node concept="2OqwBi" id="1ixZ$UHlZlL" role="2Oq$k0">
                      <node concept="3Tsc0h" id="1ixZ$UHlZlM" role="2OqNvi">
                        <ref role="3TtcxE" to="f8gn:7dm8yUsMfq9" resolve="content" />
                      </node>
                      <node concept="30H73N" id="1ixZ$UHlZlN" role="2Oq$k0" />
                    </node>
                    <node concept="v3k3i" id="1ixZ$UHlZlO" role="2OqNvi">
                      <node concept="chp4Y" id="1ixZ$UHlZlP" role="v3oSu">
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
    <node concept="n94m4" id="63DBII8pVW5" role="lGtFl">
      <ref role="n9lRv" to="f8gn:7dm8yUsM9Ro" resolve="NotationModule" />
    </node>
  </node>
</model>

