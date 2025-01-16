<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:cbee52f2-fd64-4c0b-85a5-0f8e551b805a(ReactDemoLanguage.typesystem)">
  <persistence version="9" />
  <languages>
    <use id="7a5dda62-9140-4668-ab76-d5ed1746f2b2" name="jetbrains.mps.lang.typesystem" version="5" />
    <devkit ref="00000000-0000-4000-0000-1de82b3a4936(jetbrains.mps.devkit.aspect.typesystem)" />
  </languages>
  <imports>
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
    <import index="wyt6" ref="6354ebe7-c22a-4a0f-ac54-50b52ab9b065/java:java.lang(JDK/)" implicit="true" />
    <import index="oyym" ref="r:1570828e-e9a4-47ff-95d9-80c800704647(ReactDemoLanguage.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1202948039474" name="jetbrains.mps.baseLanguage.structure.InstanceMethodCallOperation" flags="nn" index="liA8E" />
      <concept id="1197027756228" name="jetbrains.mps.baseLanguage.structure.DotExpression" flags="nn" index="2OqwBi">
        <child id="1197027771414" name="operand" index="2Oq$k0" />
        <child id="1197027833540" name="operation" index="2OqNvi" />
      </concept>
      <concept id="1070475926800" name="jetbrains.mps.baseLanguage.structure.StringLiteral" flags="nn" index="Xl_RD">
        <property id="1070475926801" name="value" index="Xl_RC" />
      </concept>
      <concept id="1068580123159" name="jetbrains.mps.baseLanguage.structure.IfStatement" flags="nn" index="3clFbJ">
        <child id="1068580123160" name="condition" index="3clFbw" />
        <child id="1068580123161" name="ifTrue" index="3clFbx" />
      </concept>
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
      <concept id="1204053956946" name="jetbrains.mps.baseLanguage.structure.IMethodCall" flags="ngI" index="1ndlxa">
        <reference id="1068499141037" name="baseMethodDeclaration" index="37wK5l" />
        <child id="1068499141038" name="actualArgument" index="37wK5m" />
      </concept>
    </language>
    <language id="7a5dda62-9140-4668-ab76-d5ed1746f2b2" name="jetbrains.mps.lang.typesystem">
      <concept id="1207055528241" name="jetbrains.mps.lang.typesystem.structure.WarningStatement" flags="nn" index="a7r0C">
        <child id="1207055552304" name="warningText" index="a7wSD" />
      </concept>
      <concept id="1175517767210" name="jetbrains.mps.lang.typesystem.structure.ReportErrorStatement" flags="nn" index="2MkqsV">
        <child id="1175517851849" name="errorString" index="2MkJ7o" />
      </concept>
      <concept id="1195213580585" name="jetbrains.mps.lang.typesystem.structure.AbstractCheckingRule" flags="ig" index="18hYwZ">
        <child id="1195213635060" name="body" index="18ibNy" />
      </concept>
      <concept id="1195214364922" name="jetbrains.mps.lang.typesystem.structure.NonTypesystemRule" flags="ig" index="18kY7G" />
      <concept id="3937244445246642777" name="jetbrains.mps.lang.typesystem.structure.AbstractReportStatement" flags="ng" index="1urrMJ">
        <child id="3937244445246642781" name="nodeToReport" index="1urrMF" />
      </concept>
      <concept id="1174642788531" name="jetbrains.mps.lang.typesystem.structure.ConceptReference" flags="ig" index="1YaCAy">
        <reference id="1174642800329" name="concept" index="1YaFvo" />
      </concept>
      <concept id="1174648085619" name="jetbrains.mps.lang.typesystem.structure.AbstractRule" flags="ng" index="1YuPPy">
        <child id="1174648101952" name="applicableNode" index="1YuTPh" />
      </concept>
      <concept id="1174650418652" name="jetbrains.mps.lang.typesystem.structure.ApplicableNodeReference" flags="nn" index="1YBJjd">
        <reference id="1174650432090" name="applicableNode" index="1YBMHb" />
      </concept>
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="1138056022639" name="jetbrains.mps.lang.smodel.structure.SPropertyAccess" flags="nn" index="3TrcHB">
        <reference id="1138056395725" name="property" index="3TsBF5" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
  </registry>
  <node concept="18kY7G" id="3d2g73CmYRo">
    <property role="TrG5h" value="check_ErrorChecking" />
    <node concept="3clFbS" id="3d2g73CmYRp" role="18ibNy">
      <node concept="3clFbJ" id="3d2g73CmZaq" role="3cqZAp">
        <node concept="2OqwBi" id="3d2g73Cn1NB" role="3clFbw">
          <node concept="2OqwBi" id="3d2g73CmZUv" role="2Oq$k0">
            <node concept="1YBJjd" id="3d2g73CmZtt" role="2Oq$k0">
              <ref role="1YBMHb" node="3d2g73CmYRr" resolve="errorChecking" />
            </node>
            <node concept="3TrcHB" id="3d2g73Cn0oI" role="2OqNvi">
              <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
            </node>
          </node>
          <node concept="liA8E" id="3d2g73Cn33p" role="2OqNvi">
            <ref role="37wK5l" to="wyt6:~String.contains(java.lang.CharSequence)" resolve="contains" />
            <node concept="Xl_RD" id="3d2g73Cn33r" role="37wK5m">
              <property role="Xl_RC" value="error" />
            </node>
          </node>
        </node>
        <node concept="3clFbS" id="3d2g73CmZas" role="3clFbx">
          <node concept="2MkqsV" id="3d2g73Cn3x9" role="3cqZAp">
            <node concept="Xl_RD" id="3d2g73Cn3Oc" role="2MkJ7o">
              <property role="Xl_RC" value="this has an error" />
            </node>
            <node concept="1YBJjd" id="3d2g73Cn47y" role="1urrMF">
              <ref role="1YBMHb" node="3d2g73CmYRr" resolve="errorChecking" />
            </node>
          </node>
          <node concept="a7r0C" id="7aqy6W7iScc" role="3cqZAp">
            <node concept="Xl_RD" id="7aqy6W7iSce" role="a7wSD">
              <property role="Xl_RC" value="and a second one" />
            </node>
            <node concept="1YBJjd" id="7aqy6W7iScf" role="1urrMF">
              <ref role="1YBMHb" node="3d2g73CmYRr" resolve="errorChecking" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="3d2g73CmYRr" role="1YuTPh">
      <property role="TrG5h" value="errorChecking" />
      <ref role="1YaFvo" to="oyym:3d2g73CmXYi" resolve="ErrorChecking" />
    </node>
  </node>
</model>

