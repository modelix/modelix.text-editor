<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:85d6c7b2-9d55-4c1f-8c9b-e9fb64542a11(org.modelix.mps.react.muicomponents.typesystem)">
  <persistence version="9" />
  <languages>
    <use id="7a5dda62-9140-4668-ab76-d5ed1746f2b2" name="jetbrains.mps.lang.typesystem" version="5" />
    <devkit ref="00000000-0000-4000-0000-1de82b3a4936(jetbrains.mps.devkit.aspect.typesystem)" />
  </languages>
  <imports>
    <import index="tp25" ref="r:00000000-0000-4000-0000-011c89590301(jetbrains.mps.lang.smodel.structure)" />
    <import index="zaxg" ref="r:c4183f14-1033-4ade-be7c-1beadb184134(org.modelix.mps.react.muicomponents.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
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
      <concept id="1081516740877" name="jetbrains.mps.baseLanguage.structure.NotExpression" flags="nn" index="3fqX7Q">
        <child id="1081516765348" name="expression" index="3fr31v" />
      </concept>
    </language>
    <language id="7a5dda62-9140-4668-ab76-d5ed1746f2b2" name="jetbrains.mps.lang.typesystem">
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
      <concept id="1176544042499" name="jetbrains.mps.lang.typesystem.structure.Node_TypeOperation" flags="nn" index="3JvlWi" />
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
      <concept id="1177026924588" name="jetbrains.mps.lang.smodel.structure.RefConcept_Reference" flags="nn" index="chp4Y">
        <reference id="1177026940964" name="conceptDeclaration" index="cht4Q" />
      </concept>
      <concept id="1139621453865" name="jetbrains.mps.lang.smodel.structure.Node_IsInstanceOfOperation" flags="nn" index="1mIQ4w">
        <child id="1177027386292" name="conceptArgument" index="cj9EA" />
      </concept>
      <concept id="1138056143562" name="jetbrains.mps.lang.smodel.structure.SLinkAccess" flags="nn" index="3TrEf2">
        <reference id="1138056516764" name="link" index="3Tt5mk" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
  </registry>
  <node concept="18kY7G" id="2vPZMAmv$Ba">
    <property role="TrG5h" value="check_NodePropRef" />
    <node concept="3clFbS" id="2vPZMAmv$Bb" role="18ibNy">
      <node concept="3clFbJ" id="2vPZMAmv$CL" role="3cqZAp">
        <node concept="3fqX7Q" id="2vPZMAmv_jV" role="3clFbw">
          <node concept="2OqwBi" id="2vPZMAmv_jX" role="3fr31v">
            <node concept="2OqwBi" id="2vPZMAmv_jY" role="2Oq$k0">
              <node concept="2OqwBi" id="2vPZMAmzZB3" role="2Oq$k0">
                <node concept="1YBJjd" id="2vPZMAmv_jZ" role="2Oq$k0">
                  <ref role="1YBMHb" node="2vPZMAmv$Bd" resolve="npr" />
                </node>
                <node concept="3TrEf2" id="2vPZMAmzZLF" role="2OqNvi">
                  <ref role="3Tt5mk" to="zaxg:2vPZMAmvsgm" resolve="node" />
                </node>
              </node>
              <node concept="3JvlWi" id="2vPZMAmv_k0" role="2OqNvi" />
            </node>
            <node concept="1mIQ4w" id="2vPZMAmv_k1" role="2OqNvi">
              <node concept="chp4Y" id="2vPZMAmv_k2" role="cj9EA">
                <ref role="cht4Q" to="tp25:gzTqbfa" resolve="SNodeType" />
              </node>
            </node>
          </node>
        </node>
        <node concept="3clFbS" id="2vPZMAmv$CN" role="3clFbx">
          <node concept="2MkqsV" id="2vPZMAmv_kE" role="3cqZAp">
            <node concept="Xl_RD" id="2vPZMAmv_kN" role="2MkJ7o">
              <property role="Xl_RC" value="must be a node" />
            </node>
            <node concept="2OqwBi" id="2vPZMAmv_sU" role="1urrMF">
              <node concept="1YBJjd" id="2vPZMAmv_l6" role="2Oq$k0">
                <ref role="1YBMHb" node="2vPZMAmv$Bd" resolve="npr" />
              </node>
              <node concept="3TrEf2" id="2vPZMAmv_AN" role="2OqNvi">
                <ref role="3Tt5mk" to="zaxg:2vPZMAmvsgm" resolve="node" />
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="2vPZMAmv$Bd" role="1YuTPh">
      <property role="TrG5h" value="npr" />
      <ref role="1YaFvo" to="zaxg:2vPZMAmvsgl" resolve="NodePropRef" />
    </node>
  </node>
</model>

