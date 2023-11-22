<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:2fe6cd77-4aa8-40a0-b3ed-e4eb6d6a496f(org.modelix.mps.notation.generator.templates@generator)">
  <persistence version="9" />
  <languages>
    <use id="6b3888c1-9802-44d8-8baf-f8e6c33ed689" name="jetbrains.mps.kotlin" version="11" />
    <use id="2405a196-e75d-462c-938b-ae8e3fac20aa" name="jetbrains.mps.baseLanguage.kotlinRefs" version="0" />
    <use id="eb56ebf4-df56-438e-af06-fc1cd08b495a" name="jetbrains.mps.kotlin.smodel" version="0" />
    <use id="b17a9ec8-44a5-40a1-9216-058d277424eb" name="jetbrains.mps.kotlin.internal" version="0" />
    <use id="9e4ff22b-60f1-43ef-a50b-f9f0fcec22e0" name="jetbrains.mps.kotlin.javaRefs" version="0" />
    <devkit ref="a2eb3a43-fcc2-4200-80dc-c60110c4862d(jetbrains.mps.devkit.templates)" />
  </languages>
  <imports>
    <import index="f8gn" ref="r:37580d55-803b-40f6-8108-d95a9fce8d6e(org.modelix.mps.notation.structure)" />
    <import index="i6vs" ref="771cf896-ab1b-409b-93b4-48c3bbb6b23f/kotlinJvm:org.modelix.aspects(org.modelix.mps.editor.ssr.stubs/)" />
    <import index="dbfy" ref="771cf896-ab1b-409b-93b4-48c3bbb6b23f/kotlinJvm:org.modelix.editor(org.modelix.mps.editor.ssr.stubs/)" />
  </imports>
  <registry>
    <language id="b401a680-8325-4110-8fd3-84331ff25bef" name="jetbrains.mps.lang.generator">
      <concept id="1095416546421" name="jetbrains.mps.lang.generator.structure.MappingConfiguration" flags="ig" index="bUwia">
        <child id="1167514678247" name="rootMappingRule" index="3lj3bC" />
      </concept>
      <concept id="1168619357332" name="jetbrains.mps.lang.generator.structure.RootTemplateAnnotation" flags="lg" index="n94m4">
        <reference id="1168619429071" name="applicableConcept" index="n9lRv" />
      </concept>
      <concept id="1167169308231" name="jetbrains.mps.lang.generator.structure.BaseMappingRule" flags="ng" index="30H$t8">
        <reference id="1167169349424" name="applicableConcept" index="30HIoZ" />
      </concept>
      <concept id="1167514355419" name="jetbrains.mps.lang.generator.structure.Root_MappingRule" flags="lg" index="3lhOvk">
        <reference id="1167514355421" name="template" index="3lhOvi" />
      </concept>
    </language>
    <language id="6b3888c1-9802-44d8-8baf-f8e6c33ed689" name="jetbrains.mps.kotlin">
      <concept id="5622728304609204267" name="jetbrains.mps.kotlin.structure.EmptyDeclaration" flags="ng" index="eKYAL" />
      <concept id="1991556721070973461" name="jetbrains.mps.kotlin.structure.EmptyStatement" flags="ng" index="AQkLs" />
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
      <concept id="2936055411798373537" name="jetbrains.mps.kotlin.structure.PropertyDeclaration" flags="ng" index="1XD09Q">
        <child id="1314219036499436525" name="declaration" index="TDYyH" />
      </concept>
      <concept id="2936055411798373439" name="jetbrains.mps.kotlin.structure.AbstractFunctionCall" flags="ng" index="1XD0bC">
        <reference id="1991556721072067817" name="function" index="AarEw" />
      </concept>
      <concept id="2936055411798373745" name="jetbrains.mps.kotlin.structure.VariableDeclaration" flags="ng" index="1XD0eA" />
      <concept id="2936055411798373753" name="jetbrains.mps.kotlin.structure.ValueArgument" flags="ng" index="1XD0eI">
        <child id="2936055411798374692" name="expression" index="1XD0ZN" />
      </concept>
      <concept id="2936055411798373655" name="jetbrains.mps.kotlin.structure.LambdaLiteral" flags="ng" index="1XD0f0" />
      <concept id="2936055411798373673" name="jetbrains.mps.kotlin.structure.KotlinFile" flags="ng" index="1XD0fY">
        <child id="2936055411798374537" name="declarations" index="1XD0Tu" />
      </concept>
      <concept id="2936055411798373333" name="jetbrains.mps.kotlin.structure.NullLiteral" flags="ng" index="1XD0k2" />
      <concept id="2936055411798373223" name="jetbrains.mps.kotlin.structure.PropertyDefaultAssignement" flags="ng" index="1XD0mK">
        <child id="2936055411798373866" name="expression" index="1XD0cX" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1133920641626" name="jetbrains.mps.lang.core.structure.BaseConcept" flags="ng" index="2VYdi">
        <child id="5169995583184591170" name="smodelAttribute" index="lGtFl" />
      </concept>
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
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
            <node concept="1XD0k2" id="63DBII8pWg8" role="1XD0ZN" />
          </node>
          <node concept="1XD0f0" id="63DBII8pWiQ" role="1XD06E">
            <node concept="1NbEFs" id="63DBII8qceh" role="THmaL">
              <ref role="AarEw" to="dbfy:~#org/modelix/aspects/LanguageAspectsBuilder&lt;*&gt;.editor[org/modelix/metamodel/ITypedNode,org/modelix/metamodel/IConceptOfTypedNode&lt;0&gt;](1,kotlin/Function1&lt;CellTemplateBuilder&lt;0,1&gt;,kotlin/Unit&gt;)" resolve="editor" />
              <node concept="1XD0eI" id="63DBII8qcei" role="TWiod">
                <node concept="1XD0k2" id="63DBII8qcej" role="1XD0ZN" />
              </node>
              <node concept="1XD0f0" id="63DBII8qcek" role="1XD06E">
                <node concept="AQkLs" id="63DBII8qcem" role="THmaL" />
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

