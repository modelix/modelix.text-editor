<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:2cb00ef0-c1cd-4baf-9a64-9a1d8dd699f5(org.modelix.mps.spreadsheets.notation.modelix)">
  <persistence version="9" />
  <languages>
    <devkit ref="46d68387-81c7-4c54-9dd2-2717eb3f009b(org.modelix.mps.webaspect.devkit)" />
  </languages>
  <imports>
    <import index="ur0y" ref="r:3d732d81-423c-436c-bbe7-ad9d1315b222(org.modelix.mps.spreadsheets.structure)" />
    <import index="xmo0" ref="r:cf52b83d-c083-46cc-8500-855d35cfb3ac(org.modelix.mps.spreadsheets.behavior)" implicit="true" />
  </imports>
  <registry>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1197027756228" name="jetbrains.mps.baseLanguage.structure.DotExpression" flags="nn" index="2OqwBi">
        <child id="1197027771414" name="operand" index="2Oq$k0" />
        <child id="1197027833540" name="operation" index="2OqNvi" />
      </concept>
      <concept id="1204053956946" name="jetbrains.mps.baseLanguage.structure.IMethodCall" flags="ngI" index="1ndlxa">
        <reference id="1068499141037" name="baseMethodDeclaration" index="37wK5l" />
      </concept>
    </language>
    <language id="8f2def56-7502-4f14-994f-472d404e528c" name="org.modelix.mps.baseLanguage2kotlin">
      <concept id="2346135138155145856" name="org.modelix.mps.baseLanguage2kotlin.structure.BaseLanguageExpressionWrapper" flags="ng" index="1KgSZU">
        <child id="2346135138155145859" name="expression" index="1KgSZT" />
      </concept>
    </language>
    <language id="c7b55726-1795-47bd-aa21-714ac1e30f21" name="org.modelix.mps.notation">
      <concept id="635805674430276261" name="org.modelix.mps.notation.structure.ReferenceCell" flags="ng" index="1yiJt1">
        <reference id="635805674430276264" name="link" index="1yiJtc" />
        <child id="2346135138154959868" name="renderTarget" index="1KhJq6" />
      </concept>
      <concept id="8310867745953062360" name="org.modelix.mps.notation.structure.NotationModule" flags="ng" index="3JBFZQ">
        <child id="8310867745953085065" name="content" index="3JBHiB" />
      </concept>
      <concept id="8310867745953086317" name="org.modelix.mps.notation.structure.ConceptNotation" flags="ng" index="3JBH_3">
        <reference id="8310867745953086698" name="concept" index="3JBHV4" />
        <child id="8310867745953087407" name="cell" index="3JBHQ1" />
      </concept>
      <concept id="2346135138155555729" name="org.modelix.mps.notation.structure.BL_ReferenceTargetExpression" flags="ng" index="1KnsVF" />
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="1179409122411" name="jetbrains.mps.lang.smodel.structure.Node_ConceptMethodCall" flags="nn" index="2qgKlT" />
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
  </registry>
  <node concept="3JBFZQ" id="72hS3ltD5dh">
    <property role="TrG5h" value="SpreadsheetsNotation" />
    <node concept="3JBH_3" id="72hS3ltD5dk" role="3JBHiB">
      <ref role="3JBHV4" to="ur0y:2ti6llKUmc0" resolve="ColumnReference" />
      <node concept="1yiJt1" id="72hS3ltFkcB" role="3JBHQ1">
        <ref role="1yiJtc" to="ur0y:2ti6llKUmc1" resolve="column" />
        <node concept="1KgSZU" id="1edLqv8Jwq_" role="1KhJq6">
          <node concept="2OqwBi" id="1edLqv8JwxC" role="1KgSZT">
            <node concept="1KnsVF" id="1edLqv8JwqD" role="2Oq$k0" />
            <node concept="2qgKlT" id="1edLqv8JylR" role="2OqNvi">
              <ref role="37wK5l" to="xmo0:1gyl2moVSFk" resolve="getColumnLabel" />
            </node>
          </node>
        </node>
      </node>
    </node>
  </node>
</model>

