<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:2f03a0c4-ecda-4da5-926b-92cba019727a(org.modelix.mps.notation.typesystem)">
  <persistence version="9" />
  <languages>
    <use id="7a5dda62-9140-4668-ab76-d5ed1746f2b2" name="jetbrains.mps.lang.typesystem" version="5" />
    <devkit ref="00000000-0000-4000-0000-1de82b3a4936(jetbrains.mps.devkit.aspect.typesystem)" />
  </languages>
  <imports>
    <import index="tpce" ref="r:00000000-0000-4000-0000-011c89590292(jetbrains.mps.lang.structure.structure)" />
    <import index="tp25" ref="r:00000000-0000-4000-0000-011c89590301(jetbrains.mps.lang.smodel.structure)" />
    <import index="f8gn" ref="r:37580d55-803b-40f6-8108-d95a9fce8d6e(org.modelix.mps.notation.structure)" implicit="true" />
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
      <concept id="1068431474542" name="jetbrains.mps.baseLanguage.structure.VariableDeclaration" flags="ng" index="33uBYm">
        <child id="1068431790190" name="initializer" index="33vP2m" />
      </concept>
      <concept id="1068498886296" name="jetbrains.mps.baseLanguage.structure.VariableReference" flags="nn" index="37vLTw">
        <reference id="1068581517664" name="variableDeclaration" index="3cqZAo" />
      </concept>
      <concept id="1225271221393" name="jetbrains.mps.baseLanguage.structure.NPENotEqualsExpression" flags="nn" index="17QLQc" />
      <concept id="4972933694980447171" name="jetbrains.mps.baseLanguage.structure.BaseVariableDeclaration" flags="ng" index="19Szcq">
        <child id="5680397130376446158" name="type" index="1tU5fm" />
      </concept>
      <concept id="1068580123159" name="jetbrains.mps.baseLanguage.structure.IfStatement" flags="nn" index="3clFbJ">
        <child id="1068580123160" name="condition" index="3clFbw" />
        <child id="1068580123161" name="ifTrue" index="3clFbx" />
      </concept>
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
      <concept id="1068581242864" name="jetbrains.mps.baseLanguage.structure.LocalVariableDeclarationStatement" flags="nn" index="3cpWs8">
        <child id="1068581242865" name="localVariableDeclaration" index="3cpWs9" />
      </concept>
      <concept id="1068581242863" name="jetbrains.mps.baseLanguage.structure.LocalVariableDeclaration" flags="nr" index="3cpWsn" />
      <concept id="1081773326031" name="jetbrains.mps.baseLanguage.structure.BinaryOperation" flags="nn" index="3uHJSO">
        <child id="1081773367579" name="rightExpression" index="3uHU7w" />
        <child id="1081773367580" name="leftExpression" index="3uHU7B" />
      </concept>
    </language>
    <language id="3a13115c-633c-4c5c-bbcc-75c4219e9555" name="jetbrains.mps.lang.quotation">
      <concept id="5455284157994012186" name="jetbrains.mps.lang.quotation.structure.NodeBuilderInitLink" flags="ng" index="2pIpSj">
        <reference id="5455284157994012188" name="link" index="2pIpSl" />
        <child id="1595412875168045827" name="initValue" index="28nt2d" />
      </concept>
      <concept id="5455284157993863837" name="jetbrains.mps.lang.quotation.structure.NodeBuilder" flags="nn" index="2pJPEk">
        <child id="5455284157993863838" name="quotedNode" index="2pJPEn" />
      </concept>
      <concept id="5455284157993863840" name="jetbrains.mps.lang.quotation.structure.NodeBuilderNode" flags="nn" index="2pJPED">
        <reference id="5455284157993910961" name="concept" index="2pJxaS" />
        <child id="5455284157993911099" name="values" index="2pJxcM" />
      </concept>
      <concept id="8182547171709752110" name="jetbrains.mps.lang.quotation.structure.NodeBuilderExpression" flags="nn" index="36biLy">
        <child id="8182547171709752112" name="expression" index="36biLW" />
      </concept>
    </language>
    <language id="7a5dda62-9140-4668-ab76-d5ed1746f2b2" name="jetbrains.mps.lang.typesystem">
      <concept id="1185788614172" name="jetbrains.mps.lang.typesystem.structure.NormalTypeClause" flags="ng" index="mw_s8">
        <child id="1185788644032" name="normalType" index="mwGJk" />
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
      <concept id="1177026924588" name="jetbrains.mps.lang.smodel.structure.RefConcept_Reference" flags="nn" index="chp4Y">
        <reference id="1177026940964" name="conceptDeclaration" index="cht4Q" />
      </concept>
      <concept id="1138411891628" name="jetbrains.mps.lang.smodel.structure.SNodeOperation" flags="nn" index="eCIE_">
        <child id="1144104376918" name="parameter" index="1xVPHs" />
      </concept>
      <concept id="2396822768958367367" name="jetbrains.mps.lang.smodel.structure.AbstractTypeCastExpression" flags="nn" index="$5XWr">
        <child id="6733348108486823193" name="leftExpression" index="1m5AlR" />
        <child id="3906496115198199033" name="conceptArgument" index="3oSUPX" />
      </concept>
      <concept id="1171407110247" name="jetbrains.mps.lang.smodel.structure.Node_GetAncestorOperation" flags="nn" index="2Xjw5R" />
      <concept id="1139613262185" name="jetbrains.mps.lang.smodel.structure.Node_GetParentOperation" flags="nn" index="1mfA1w" />
      <concept id="1144100932627" name="jetbrains.mps.lang.smodel.structure.OperationParm_Inclusion" flags="ng" index="1xIGOp" />
      <concept id="1144101972840" name="jetbrains.mps.lang.smodel.structure.OperationParm_Concept" flags="ng" index="1xMEDy">
        <child id="1207343664468" name="conceptArgument" index="ri$Ld" />
      </concept>
      <concept id="1140137987495" name="jetbrains.mps.lang.smodel.structure.SNodeTypeCastExpression" flags="nn" index="1PxgMI">
        <property id="1238684351431" name="asCast" index="1BlNFB" />
      </concept>
      <concept id="1138055754698" name="jetbrains.mps.lang.smodel.structure.SNodeType" flags="in" index="3Tqbb2">
        <reference id="1138405853777" name="concept" index="ehGHo" />
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
        <property id="1193676396447" name="virtualPackage" index="3GE5qa" />
      </concept>
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
    <language id="83888646-71ce-4f1c-9c53-c54016f6ad4f" name="jetbrains.mps.baseLanguage.collections">
      <concept id="1165525191778" name="jetbrains.mps.baseLanguage.collections.structure.GetFirstOperation" flags="nn" index="1uHKPH" />
    </language>
  </registry>
  <node concept="1YbPZF" id="22f9nDgOFCs">
    <property role="TrG5h" value="typeof_BL_NotationNodeExpression" />
    <property role="3GE5qa" value="expressions" />
    <node concept="3clFbS" id="22f9nDgOFCt" role="18ibNy">
      <node concept="3cpWs8" id="22f9nDgOGz$" role="3cqZAp">
        <node concept="3cpWsn" id="22f9nDgOGz_" role="3cpWs9">
          <property role="TrG5h" value="concept" />
          <node concept="3Tqbb2" id="22f9nDgOGxm" role="1tU5fm">
            <ref role="ehGHo" to="tpce:h0PkWnZ" resolve="AbstractConceptDeclaration" />
          </node>
          <node concept="2OqwBi" id="22f9nDgOGzA" role="33vP2m">
            <node concept="2OqwBi" id="22f9nDgOGzB" role="2Oq$k0">
              <node concept="1YBJjd" id="22f9nDgOGzC" role="2Oq$k0">
                <ref role="1YBMHb" node="22f9nDgOFCv" resolve="n" />
              </node>
              <node concept="2Xjw5R" id="22f9nDgOGzD" role="2OqNvi">
                <node concept="1xMEDy" id="22f9nDgOGzE" role="1xVPHs">
                  <node concept="chp4Y" id="22f9nDgOGzF" role="ri$Ld">
                    <ref role="cht4Q" to="f8gn:7dm8yUsMfHH" resolve="ConceptNotation" />
                  </node>
                </node>
              </node>
            </node>
            <node concept="3TrEf2" id="22f9nDgOGzG" role="2OqNvi">
              <ref role="3Tt5mk" to="f8gn:7dm8yUsMfNE" resolve="concept" />
            </node>
          </node>
        </node>
      </node>
      <node concept="1Z5TYs" id="22f9nDgOFOj" role="3cqZAp">
        <node concept="mw_s8" id="22f9nDgOFO_" role="1ZfhKB">
          <node concept="2pJPEk" id="22f9nDgOG$K" role="mwGJk">
            <node concept="2pJPED" id="22f9nDgOG$M" role="2pJPEn">
              <ref role="2pJxaS" to="tp25:gzTqbfa" resolve="SNodeType" />
              <node concept="2pIpSj" id="22f9nDgOGFi" role="2pJxcM">
                <ref role="2pIpSl" to="tp25:g$ehGDh" resolve="concept" />
                <node concept="36biLy" id="22f9nDgOGFv" role="28nt2d">
                  <node concept="37vLTw" id="22f9nDgOGFE" role="36biLW">
                    <ref role="3cqZAo" node="22f9nDgOGz_" resolve="concept" />
                  </node>
                </node>
              </node>
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="22f9nDgOFOm" role="1ZfhK$">
          <node concept="1Z2H0r" id="22f9nDgOFCC" role="mwGJk">
            <node concept="1YBJjd" id="22f9nDgOFEy" role="1Z2MuG">
              <ref role="1YBMHb" node="22f9nDgOFCv" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="22f9nDgOFCv" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="f8gn:22f9nDgNr2y" resolve="BL_NotationNodeExpression" />
    </node>
  </node>
  <node concept="1YbPZF" id="22f9nDgOKgd">
    <property role="TrG5h" value="typeof_BL_ReferenceTargetExpression" />
    <property role="3GE5qa" value="expressions" />
    <node concept="3clFbS" id="22f9nDgOKge" role="18ibNy">
      <node concept="3cpWs8" id="22f9nDgOLNX" role="3cqZAp">
        <node concept="3cpWsn" id="22f9nDgOLNY" role="3cpWs9">
          <property role="TrG5h" value="targetConcept" />
          <node concept="3Tqbb2" id="22f9nDgOLNU" role="1tU5fm">
            <ref role="ehGHo" to="tpce:h0PkWnZ" resolve="AbstractConceptDeclaration" />
          </node>
          <node concept="2OqwBi" id="22f9nDgOLNZ" role="33vP2m">
            <node concept="2OqwBi" id="22f9nDgOLO0" role="2Oq$k0">
              <node concept="2OqwBi" id="22f9nDgOLO1" role="2Oq$k0">
                <node concept="1YBJjd" id="22f9nDgOLO2" role="2Oq$k0">
                  <ref role="1YBMHb" node="22f9nDgOKgg" resolve="n" />
                </node>
                <node concept="2Xjw5R" id="22f9nDgOLO3" role="2OqNvi">
                  <node concept="1xMEDy" id="22f9nDgOLO4" role="1xVPHs">
                    <node concept="chp4Y" id="22f9nDgOLO5" role="ri$Ld">
                      <ref role="cht4Q" to="f8gn:ziPuhEA2a_" resolve="ReferenceCell" />
                    </node>
                  </node>
                  <node concept="1xIGOp" id="22f9nDgOLO6" role="1xVPHs" />
                </node>
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
      <node concept="1Z5TYs" id="22f9nDgOLYl" role="3cqZAp">
        <node concept="mw_s8" id="22f9nDgOLYQ" role="1ZfhKB">
          <node concept="2pJPEk" id="22f9nDgOLYM" role="mwGJk">
            <node concept="2pJPED" id="22f9nDgOLYO" role="2pJPEn">
              <ref role="2pJxaS" to="tp25:gzTqbfa" resolve="SNodeType" />
              <node concept="2pIpSj" id="22f9nDgOLZ1" role="2pJxcM">
                <ref role="2pIpSl" to="tp25:g$ehGDh" resolve="concept" />
                <node concept="36biLy" id="22f9nDgOM0e" role="28nt2d">
                  <node concept="37vLTw" id="22f9nDgOM0p" role="36biLW">
                    <ref role="3cqZAo" node="22f9nDgOLNY" resolve="targetConcept" />
                  </node>
                </node>
              </node>
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="22f9nDgOLYo" role="1ZfhK$">
          <node concept="1Z2H0r" id="22f9nDgOKgt" role="mwGJk">
            <node concept="1YBJjd" id="22f9nDgOKin" role="1Z2MuG">
              <ref role="1YBMHb" node="22f9nDgOKgg" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="22f9nDgOKgg" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="f8gn:22f9nDgOIIh" resolve="BL_ReferenceTargetExpression" />
    </node>
  </node>
  <node concept="18kY7G" id="4cpiv6osU2Y">
    <property role="TrG5h" value="check_IndentCell" />
    <node concept="3clFbS" id="4cpiv6osU2Z" role="18ibNy">
      <node concept="3clFbJ" id="4cpiv6osU3b" role="3cqZAp">
        <node concept="17QLQc" id="4cpiv6osZvW" role="3clFbw">
          <node concept="1YBJjd" id="4cpiv6osZxA" role="3uHU7w">
            <ref role="1YBMHb" node="4cpiv6osU31" resolve="n" />
          </node>
          <node concept="2OqwBi" id="4cpiv6osXhh" role="3uHU7B">
            <node concept="2OqwBi" id="4cpiv6osV13" role="2Oq$k0">
              <node concept="1PxgMI" id="4cpiv6osUAj" role="2Oq$k0">
                <property role="1BlNFB" value="true" />
                <node concept="chp4Y" id="4cpiv6osUPY" role="3oSUPX">
                  <ref role="cht4Q" to="f8gn:CUW2QYKJtX" resolve="StaticCollectionCell" />
                </node>
                <node concept="2OqwBi" id="4cpiv6osUeh" role="1m5AlR">
                  <node concept="1YBJjd" id="4cpiv6osU3n" role="2Oq$k0">
                    <ref role="1YBMHb" node="4cpiv6osU31" resolve="n" />
                  </node>
                  <node concept="1mfA1w" id="4cpiv6osUr_" role="2OqNvi" />
                </node>
              </node>
              <node concept="3Tsc0h" id="4cpiv6osVfl" role="2OqNvi">
                <ref role="3TtcxE" to="f8gn:CUW2QYKJ$J" resolve="cells" />
              </node>
            </node>
            <node concept="1uHKPH" id="4cpiv6osYXD" role="2OqNvi" />
          </node>
        </node>
        <node concept="3clFbS" id="4cpiv6osU3d" role="3clFbx">
          <node concept="2MkqsV" id="4cpiv6osZyY" role="3cqZAp">
            <node concept="Xl_RD" id="4cpiv6osZza" role="2MkJ7o">
              <property role="Xl_RC" value="Must be the first cell in a static collection" />
            </node>
            <node concept="1YBJjd" id="4cpiv6osZzT" role="1urrMF">
              <ref role="1YBMHb" node="4cpiv6osU31" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="4cpiv6osU31" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="f8gn:CUW2QYMXaO" resolve="IndentCell" />
    </node>
  </node>
</model>

