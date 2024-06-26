<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:55f8a465-ad26-4085-929c-e6ecac9c376d(org.modelix.mps.spreadsheets.typesystem)">
  <persistence version="9" />
  <languages>
    <use id="7a5dda62-9140-4668-ab76-d5ed1746f2b2" name="jetbrains.mps.lang.typesystem" version="5" />
    <devkit ref="00000000-0000-4000-0000-1de82b3a4936(jetbrains.mps.devkit.aspect.typesystem)" />
  </languages>
  <imports>
    <import index="ur0y" ref="r:3d732d81-423c-436c-bbe7-ad9d1315b222(org.modelix.mps.spreadsheets.structure)" implicit="true" />
    <import index="xmo0" ref="r:cf52b83d-c083-46cc-8500-855d35cfb3ac(org.modelix.mps.spreadsheets.behavior)" implicit="true" />
  </imports>
  <registry>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1197027756228" name="jetbrains.mps.baseLanguage.structure.DotExpression" flags="nn" index="2OqwBi">
        <child id="1197027771414" name="operand" index="2Oq$k0" />
        <child id="1197027833540" name="operation" index="2OqNvi" />
      </concept>
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
      <concept id="1204053956946" name="jetbrains.mps.baseLanguage.structure.IMethodCall" flags="ngI" index="1ndlxa">
        <reference id="1068499141037" name="baseMethodDeclaration" index="37wK5l" />
      </concept>
    </language>
    <language id="7a5dda62-9140-4668-ab76-d5ed1746f2b2" name="jetbrains.mps.lang.typesystem">
      <concept id="1185788614172" name="jetbrains.mps.lang.typesystem.structure.NormalTypeClause" flags="ng" index="mw_s8">
        <child id="1185788644032" name="normalType" index="mwGJk" />
      </concept>
      <concept id="1195213580585" name="jetbrains.mps.lang.typesystem.structure.AbstractCheckingRule" flags="ig" index="18hYwZ">
        <child id="1195213635060" name="body" index="18ibNy" />
      </concept>
      <concept id="1174642788531" name="jetbrains.mps.lang.typesystem.structure.ConceptReference" flags="ig" index="1YaCAy">
        <reference id="1174642800329" name="concept" index="1YaFvo" />
      </concept>
      <concept id="1174643105530" name="jetbrains.mps.lang.typesystem.structure.InferenceRule" flags="ig" index="1YbPZF" />
      <concept id="1174648085619" name="jetbrains.mps.lang.typesystem.structure.AbstractRule" flags="ng" index="1YuPPy">
        <child id="1174648101952" name="applicableNode" index="1YuTPh" />
      </concept>
      <concept id="1174650418652" name="jetbrains.mps.lang.typesystem.structure.ApplicableNodeReference" flags="nn" index="1YBJjd">
        <reference id="1174650432090" name="applicableNode" index="1YBMHb" />
      </concept>
      <concept id="1174657487114" name="jetbrains.mps.lang.typesystem.structure.TypeOfExpression" flags="nn" index="1Z2H0r">
        <child id="1174657509053" name="term" index="1Z2MuG" />
      </concept>
      <concept id="1174658326157" name="jetbrains.mps.lang.typesystem.structure.CreateEquationStatement" flags="nn" index="1Z5TYs" />
      <concept id="1174660718586" name="jetbrains.mps.lang.typesystem.structure.AbstractEquationStatement" flags="nn" index="1Zf1VF">
        <child id="1174660783413" name="leftExpression" index="1ZfhK$" />
        <child id="1174660783414" name="rightExpression" index="1ZfhKB" />
      </concept>
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="1179409122411" name="jetbrains.mps.lang.smodel.structure.Node_ConceptMethodCall" flags="nn" index="2qgKlT" />
      <concept id="1138056143562" name="jetbrains.mps.lang.smodel.structure.SLinkAccess" flags="nn" index="3TrEf2">
        <reference id="1138056516764" name="link" index="3Tt5mk" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1133920641626" name="jetbrains.mps.lang.core.structure.BaseConcept" flags="ng" index="2VYdi">
        <property id="1193676396447" name="virtualPackage" index="3GE5qa" />
      </concept>
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
  </registry>
  <node concept="1YbPZF" id="2ti6llKUVjA">
    <property role="TrG5h" value="typeof_ColumnReference" />
    <property role="3GE5qa" value="formular" />
    <node concept="3clFbS" id="2ti6llKUVjB" role="18ibNy">
      <node concept="1Z5TYs" id="2ti6llKUVwh" role="3cqZAp">
        <node concept="mw_s8" id="2ti6llKUVw_" role="1ZfhKB">
          <node concept="1Z2H0r" id="2ti6llKUVwx" role="mwGJk">
            <node concept="2OqwBi" id="2ti6llKUVCQ" role="1Z2MuG">
              <node concept="1YBJjd" id="2ti6llKUVwQ" role="2Oq$k0">
                <ref role="1YBMHb" node="2ti6llKUVjD" resolve="n" />
              </node>
              <node concept="3TrEf2" id="2ti6llKUVON" role="2OqNvi">
                <ref role="3Tt5mk" to="ur0y:2ti6llKUmc1" resolve="column" />
              </node>
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="2ti6llKUVwk" role="1ZfhK$">
          <node concept="1Z2H0r" id="2ti6llKUVjM" role="mwGJk">
            <node concept="1YBJjd" id="2ti6llKUVlG" role="1Z2MuG">
              <ref role="1YBMHb" node="2ti6llKUVjD" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="2ti6llKUVjD" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="ur0y:2ti6llKUmc0" resolve="ColumnReference" />
    </node>
  </node>
  <node concept="1YbPZF" id="2ti6llKUWrV">
    <property role="TrG5h" value="typeof_Column" />
    <property role="3GE5qa" value="table" />
    <node concept="3clFbS" id="2ti6llKUWrW" role="18ibNy">
      <node concept="1Z5TYs" id="2ti6llKUWAZ" role="3cqZAp">
        <node concept="mw_s8" id="2ti6llKUWBj" role="1ZfhKB">
          <node concept="1Z2H0r" id="2ti6llKUWBf" role="mwGJk">
            <node concept="2OqwBi" id="2ti6llKUWJ_" role="1Z2MuG">
              <node concept="1YBJjd" id="2ti6llKUWB$" role="2Oq$k0">
                <ref role="1YBMHb" node="2ti6llKUWrY" resolve="n" />
              </node>
              <node concept="3TrEf2" id="2ti6llKUWUU" role="2OqNvi">
                <ref role="3Tt5mk" to="ur0y:1pvyisdbPV7" resolve="content" />
              </node>
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="2ti6llKUWB2" role="1ZfhK$">
          <node concept="1Z2H0r" id="2ti6llKUWs9" role="mwGJk">
            <node concept="1YBJjd" id="2ti6llKUWu3" role="1Z2MuG">
              <ref role="1YBMHb" node="2ti6llKUWrY" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="2ti6llKUWrY" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="ur0y:1pvyisdbPV3" resolve="Column" />
    </node>
  </node>
  <node concept="1YbPZF" id="2ti6llKUWXz">
    <property role="TrG5h" value="typeof_PropertyColumnContent" />
    <property role="3GE5qa" value="table" />
    <node concept="3clFbS" id="2ti6llKUWX$" role="18ibNy">
      <node concept="1Z5TYs" id="2ti6llKUX8D" role="3cqZAp">
        <node concept="mw_s8" id="2ti6llKUX8X" role="1ZfhKB">
          <node concept="1Z2H0r" id="2ti6llKUX8T" role="mwGJk">
            <node concept="2OqwBi" id="2ti6llKUXhf" role="1Z2MuG">
              <node concept="1YBJjd" id="2ti6llKUX9e" role="2Oq$k0">
                <ref role="1YBMHb" node="2ti6llKUWXA" resolve="n" />
              </node>
              <node concept="3TrEf2" id="2ti6llKUXs$" role="2OqNvi">
                <ref role="3Tt5mk" to="ur0y:1pvyisdbcXK" resolve="property" />
              </node>
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="2ti6llKUX8G" role="1ZfhK$">
          <node concept="1Z2H0r" id="2ti6llKUWXN" role="mwGJk">
            <node concept="1YBJjd" id="2ti6llKUWZH" role="1Z2MuG">
              <ref role="1YBMHb" node="2ti6llKUWXA" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="2ti6llKUWXA" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="ur0y:1pvyisdbcXE" resolve="PropertyColumnContent" />
    </node>
  </node>
  <node concept="1YbPZF" id="2ti6llKUXvf">
    <property role="TrG5h" value="typeof_EntityProperty" />
    <property role="3GE5qa" value="entity" />
    <node concept="3clFbS" id="2ti6llKUXvg" role="18ibNy">
      <node concept="1Z5TYs" id="2ti6llKUXG1" role="3cqZAp">
        <node concept="mw_s8" id="2ti6llKUXGj" role="1ZfhKB">
          <node concept="2OqwBi" id="M50tyu8EGI" role="mwGJk">
            <node concept="2OqwBi" id="2ti6llKUXOe" role="2Oq$k0">
              <node concept="1YBJjd" id="2ti6llKUXGh" role="2Oq$k0">
                <ref role="1YBMHb" node="2ti6llKUXvi" resolve="n" />
              </node>
              <node concept="3TrEf2" id="2ti6llKUXZx" role="2OqNvi">
                <ref role="3Tt5mk" to="ur0y:1pvyisd9B78" resolve="type" />
              </node>
            </node>
            <node concept="2qgKlT" id="M50tyu8EUM" role="2OqNvi">
              <ref role="37wK5l" to="xmo0:M50tyu8BPz" resolve="getJavaType" />
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="2ti6llKUXG4" role="1ZfhK$">
          <node concept="1Z2H0r" id="2ti6llKUXvx" role="mwGJk">
            <node concept="1YBJjd" id="2ti6llKUXxr" role="1Z2MuG">
              <ref role="1YBMHb" node="2ti6llKUXvi" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="2ti6llKUXvi" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="ur0y:1pvyisd9B6Q" resolve="EntityProperty" />
    </node>
  </node>
</model>

