<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:556a62c9-5ef1-4934-8b7b-92d967dd5126(org.modelix.mps.react.typesystem)">
  <persistence version="9" />
  <languages>
    <use id="7a5dda62-9140-4668-ab76-d5ed1746f2b2" name="jetbrains.mps.lang.typesystem" version="5" />
    <devkit ref="00000000-0000-4000-0000-1de82b3a4936(jetbrains.mps.devkit.aspect.typesystem)" />
  </languages>
  <imports>
    <import index="tp25" ref="r:00000000-0000-4000-0000-011c89590301(jetbrains.mps.lang.smodel.structure)" />
    <import index="tpce" ref="r:00000000-0000-4000-0000-011c89590292(jetbrains.mps.lang.structure.structure)" />
    <import index="f2e5" ref="208eaf68-fd3a-497a-a4b6-4923ff457c3b/java:kotlinx.serialization.json(org.modelix.mps.editor.common.stubs/)" />
    <import index="8xo1" ref="r:41b64586-29ed-47f5-b907-44be07261bbc(org.modelix.mps.react.structure)" implicit="true" />
    <import index="tpee" ref="r:00000000-0000-4000-0000-011c895902ca(jetbrains.mps.baseLanguage.structure)" implicit="true" />
    <import index="f2e6" ref="83a7cbdc-dd9d-4dad-be97-957aa1b07375/java:kotlinx.serialization.json(org.modelix.mps.react.ssr.stubs/)" implicit="true" />
  </imports>
  <registry>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1082485599095" name="jetbrains.mps.baseLanguage.structure.BlockStatement" flags="nn" index="9aQIb">
        <child id="1082485599096" name="statements" index="9aQI4" />
      </concept>
      <concept id="4836112446988635817" name="jetbrains.mps.baseLanguage.structure.UndefinedType" flags="in" index="2jxLKc" />
      <concept id="1197027756228" name="jetbrains.mps.baseLanguage.structure.DotExpression" flags="nn" index="2OqwBi">
        <child id="1197027771414" name="operand" index="2Oq$k0" />
        <child id="1197027833540" name="operation" index="2OqNvi" />
      </concept>
      <concept id="1145552977093" name="jetbrains.mps.baseLanguage.structure.GenericNewExpression" flags="nn" index="2ShNRf">
        <child id="1145553007750" name="creator" index="2ShVmc" />
      </concept>
      <concept id="1068431474542" name="jetbrains.mps.baseLanguage.structure.VariableDeclaration" flags="ng" index="33uBYm">
        <child id="1068431790190" name="initializer" index="33vP2m" />
      </concept>
      <concept id="1068431790189" name="jetbrains.mps.baseLanguage.structure.Type" flags="in" index="33vP2l" />
      <concept id="1068498886296" name="jetbrains.mps.baseLanguage.structure.VariableReference" flags="nn" index="37vLTw">
        <reference id="1068581517664" name="variableDeclaration" index="3cqZAo" />
      </concept>
      <concept id="4972933694980447171" name="jetbrains.mps.baseLanguage.structure.BaseVariableDeclaration" flags="ng" index="19Szcq">
        <child id="5680397130376446158" name="type" index="1tU5fm" />
      </concept>
      <concept id="1068580123159" name="jetbrains.mps.baseLanguage.structure.IfStatement" flags="nn" index="3clFbJ">
        <child id="1082485599094" name="ifFalseStatement" index="9aQIa" />
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
      <concept id="1107535904670" name="jetbrains.mps.baseLanguage.structure.ClassifierType" flags="in" index="3uibUv">
        <reference id="1107535924139" name="classifier" index="3uigEE" />
      </concept>
    </language>
    <language id="3a13115c-633c-4c5c-bbcc-75c4219e9555" name="jetbrains.mps.lang.quotation">
      <concept id="1196350785110" name="jetbrains.mps.lang.quotation.structure.AbstractAntiquotation" flags="ngI" index="2c44t0">
        <child id="1196350785111" name="expression" index="2c44t1" />
      </concept>
      <concept id="1196350785112" name="jetbrains.mps.lang.quotation.structure.Antiquotation" flags="ng" index="2c44te" />
      <concept id="1196350785113" name="jetbrains.mps.lang.quotation.structure.Quotation" flags="nn" index="2c44tf">
        <child id="1196350785114" name="quotedNode" index="2c44tc" />
      </concept>
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
      <concept id="1185805035213" name="jetbrains.mps.lang.typesystem.structure.WhenConcreteStatement" flags="nn" index="nvevp">
        <child id="1185805047793" name="body" index="nvhr_" />
        <child id="1185805056450" name="argument" index="nvjzm" />
        <child id="1205761991995" name="argumentRepresentator" index="2X0Ygz" />
      </concept>
      <concept id="1205762105978" name="jetbrains.mps.lang.typesystem.structure.WhenConcreteVariableDeclaration" flags="ng" index="2X1qdy" />
      <concept id="1205762656241" name="jetbrains.mps.lang.typesystem.structure.WhenConcreteVariableReference" flags="nn" index="2X3wrD">
        <reference id="1205762683928" name="whenConcreteVar" index="2X3Bk0" />
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
        <property id="1206359757216" name="checkOnly" index="3wDh2S" />
        <child id="1174660783413" name="leftExpression" index="1ZfhK$" />
        <child id="1174660783414" name="rightExpression" index="1ZfhKB" />
      </concept>
      <concept id="1174663239020" name="jetbrains.mps.lang.typesystem.structure.CreateGreaterThanInequationStatement" flags="nn" index="1ZoDhX" />
      <concept id="1174665551739" name="jetbrains.mps.lang.typesystem.structure.TypeVarDeclaration" flags="ng" index="1ZxtTE" />
      <concept id="1174666260556" name="jetbrains.mps.lang.typesystem.structure.TypeVarReference" flags="nn" index="1Z$b5t">
        <reference id="1174666276259" name="typeVarDeclaration" index="1Z$eMM" />
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
      <concept id="1139621453865" name="jetbrains.mps.lang.smodel.structure.Node_IsInstanceOfOperation" flags="nn" index="1mIQ4w">
        <child id="1177027386292" name="conceptArgument" index="cj9EA" />
      </concept>
      <concept id="1172008320231" name="jetbrains.mps.lang.smodel.structure.Node_IsNotNullOperation" flags="nn" index="3x8VRR" />
      <concept id="1144101972840" name="jetbrains.mps.lang.smodel.structure.OperationParm_Concept" flags="ng" index="1xMEDy">
        <child id="1207343664468" name="conceptArgument" index="ri$Ld" />
      </concept>
      <concept id="1180636770613" name="jetbrains.mps.lang.smodel.structure.SNodeCreator" flags="nn" index="3zrR0B">
        <child id="1180636770616" name="createdType" index="3zrR0E" />
      </concept>
      <concept id="1140137987495" name="jetbrains.mps.lang.smodel.structure.SNodeTypeCastExpression" flags="nn" index="1PxgMI" />
      <concept id="1138055754698" name="jetbrains.mps.lang.smodel.structure.SNodeType" flags="in" index="3Tqbb2">
        <reference id="1138405853777" name="concept" index="ehGHo" />
      </concept>
      <concept id="1138056143562" name="jetbrains.mps.lang.smodel.structure.SLinkAccess" flags="nn" index="3TrEf2">
        <reference id="1138056516764" name="link" index="3Tt5mk" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1133920641626" name="jetbrains.mps.lang.core.structure.BaseConcept" flags="ng" index="2VYdi">
        <property id="1193676396447" name="virtualPackage" index="3GE5qa" />
        <child id="5169995583184591170" name="smodelAttribute" index="lGtFl" />
      </concept>
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
    <language id="83888646-71ce-4f1c-9c53-c54016f6ad4f" name="jetbrains.mps.baseLanguage.collections">
      <concept id="1151689724996" name="jetbrains.mps.baseLanguage.collections.structure.SequenceType" flags="in" index="A3Dl8">
        <child id="1151689745422" name="elementType" index="A3Ik2" />
      </concept>
    </language>
  </registry>
  <node concept="1YbPZF" id="7GLg2tFsMPr">
    <property role="TrG5h" value="typeof_ComponentNodeExpression" />
    <node concept="3clFbS" id="7GLg2tFsMPs" role="18ibNy">
      <node concept="3cpWs8" id="22f9nDgOGz$" role="3cqZAp">
        <node concept="3cpWsn" id="22f9nDgOGz_" role="3cpWs9">
          <property role="TrG5h" value="concept" />
          <node concept="3Tqbb2" id="22f9nDgOGxm" role="1tU5fm">
            <ref role="ehGHo" to="tpce:h0PkWnZ" resolve="AbstractConceptDeclaration" />
          </node>
          <node concept="2OqwBi" id="22f9nDgOGzA" role="33vP2m">
            <node concept="2OqwBi" id="22f9nDgOGzB" role="2Oq$k0">
              <node concept="1YBJjd" id="22f9nDgOGzC" role="2Oq$k0">
                <ref role="1YBMHb" node="7GLg2tFsMPu" resolve="n" />
              </node>
              <node concept="2Xjw5R" id="22f9nDgOGzD" role="2OqNvi">
                <node concept="1xMEDy" id="22f9nDgOGzE" role="1xVPHs">
                  <node concept="chp4Y" id="22f9nDgOGzF" role="ri$Ld">
                    <ref role="cht4Q" to="8xo1:7GLg2tFqfQu" resolve="ConceptRenderer" />
                  </node>
                </node>
              </node>
            </node>
            <node concept="3TrEf2" id="22f9nDgOGzG" role="2OqNvi">
              <ref role="3Tt5mk" to="8xo1:7dm8yUsMfNE" resolve="concept" />
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
              <ref role="1YBMHb" node="7GLg2tFsMPu" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="7GLg2tFsMPu" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="8xo1:7GLg2tFsMII" resolve="ComponentNodeExpression" />
    </node>
  </node>
  <node concept="1YbPZF" id="1pvyisdeoSK">
    <property role="TrG5h" value="typeof_ForEachComponent" />
    <node concept="3clFbS" id="1pvyisdeoSL" role="18ibNy">
      <node concept="3cpWs8" id="h9LU$tc" role="3cqZAp">
        <node concept="3cpWsn" id="h9LU$td" role="3cpWs9">
          <property role="TrG5h" value="inputSequence" />
          <node concept="3Tqbb2" id="h9LU$te" role="1tU5fm">
            <ref role="ehGHo" to="tpee:fz3vP1J" resolve="Expression" />
          </node>
          <node concept="2OqwBi" id="hxx$Y4J" role="33vP2m">
            <node concept="1YBJjd" id="h9LUg_8" role="2Oq$k0">
              <ref role="1YBMHb" node="1pvyisdeoSN" resolve="n" />
            </node>
            <node concept="3TrEf2" id="h9LUitl" role="2OqNvi">
              <ref role="3Tt5mk" to="8xo1:1pvyisdcGKI" resolve="input" />
            </node>
          </node>
        </node>
      </node>
      <node concept="3clFbJ" id="h9LUfRi" role="3cqZAp">
        <node concept="3clFbS" id="h9LUfRj" role="3clFbx">
          <node concept="1ZxtTE" id="7Uo2cspnQLL" role="3cqZAp">
            <property role="TrG5h" value="inSeqType" />
          </node>
          <node concept="1Z5TYs" id="7Uo2cspnQMb" role="3cqZAp">
            <node concept="mw_s8" id="7Uo2cspnQMf" role="1ZfhKB">
              <node concept="1Z2H0r" id="7Uo2cspnQMg" role="mwGJk">
                <node concept="37vLTw" id="3GM_nagTudU" role="1Z2MuG">
                  <ref role="3cqZAo" node="h9LU$td" resolve="inputSequence" />
                </node>
              </node>
            </node>
            <node concept="mw_s8" id="7Uo2cspnQMe" role="1ZfhK$">
              <node concept="1Z$b5t" id="7Uo2cspnQLP" role="mwGJk">
                <ref role="1Z$eMM" node="7Uo2cspnQLL" resolve="inSeqType" />
              </node>
            </node>
          </node>
          <node concept="nvevp" id="7Uo2cspnQLC" role="3cqZAp">
            <node concept="3clFbS" id="7Uo2cspnQLD" role="nvhr_">
              <node concept="3clFbJ" id="T$VDKoUS2R" role="3cqZAp">
                <node concept="3clFbS" id="T$VDKoUS2S" role="3clFbx">
                  <node concept="1Z5TYs" id="hfpUxeH" role="3cqZAp">
                    <node concept="mw_s8" id="T$VDKoUS3q" role="1ZfhKB">
                      <node concept="2OqwBi" id="T$VDKoUS46" role="mwGJk">
                        <node concept="1PxgMI" id="T$VDKoUS3K" role="2Oq$k0">
                          <node concept="2X3wrD" id="T$VDKoUS3r" role="1m5AlR">
                            <ref role="2X3Bk0" node="7Uo2cspnQLF" resolve="IST" />
                          </node>
                          <node concept="chp4Y" id="714IaVdGYCG" role="3oSUPX">
                            <ref role="cht4Q" to="tpee:f_0Q1BR" resolve="ArrayType" />
                          </node>
                        </node>
                        <node concept="3TrEf2" id="T$VDKoUS4c" role="2OqNvi">
                          <ref role="3Tt5mk" to="tpee:f_0Q1BS" resolve="componentType" />
                        </node>
                      </node>
                    </node>
                    <node concept="mw_s8" id="hgnxd4J" role="1ZfhK$">
                      <node concept="1Z2H0r" id="hfpUiyn" role="mwGJk">
                        <node concept="1YBJjd" id="1pvyisdepHq" role="1Z2MuG">
                          <ref role="1YBMHb" node="1pvyisdeoSN" resolve="n" />
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="2OqwBi" id="T$VDKoUS3g" role="3clFbw">
                  <node concept="2X3wrD" id="T$VDKoUS2V" role="2Oq$k0">
                    <ref role="2X3Bk0" node="7Uo2cspnQLF" resolve="IST" />
                  </node>
                  <node concept="1mIQ4w" id="T$VDKoUS3l" role="2OqNvi">
                    <node concept="chp4Y" id="T$VDKoUS3n" role="cj9EA">
                      <ref role="cht4Q" to="tpee:f_0Q1BR" resolve="ArrayType" />
                    </node>
                  </node>
                </node>
                <node concept="9aQIb" id="T$VDKoUS3o" role="9aQIa">
                  <node concept="3clFbS" id="T$VDKoUS3p" role="9aQI4">
                    <node concept="1ZxtTE" id="hfpTQfl" role="3cqZAp">
                      <property role="TrG5h" value="elementType" />
                    </node>
                    <node concept="1ZoDhX" id="2P1z38GOyKi" role="3cqZAp">
                      <property role="3wDh2S" value="false" />
                      <node concept="mw_s8" id="7Uo2cspnQN6" role="1ZfhKB">
                        <node concept="2X3wrD" id="7Uo2cspnQN7" role="mwGJk">
                          <ref role="2X3Bk0" node="7Uo2cspnQLF" resolve="IST" />
                        </node>
                      </node>
                      <node concept="mw_s8" id="T$VDKoUS4d" role="1ZfhK$">
                        <node concept="2c44tf" id="T$VDKoUS4e" role="mwGJk">
                          <node concept="A3Dl8" id="T$VDKoUS4g" role="2c44tc">
                            <node concept="33vP2l" id="T$VDKoUS4h" role="A3Ik2">
                              <node concept="2c44te" id="T$VDKoUS4i" role="lGtFl">
                                <node concept="1Z$b5t" id="T$VDKoUS4k" role="2c44t1">
                                  <ref role="1Z$eMM" node="hfpTQfl" resolve="elementType" />
                                </node>
                              </node>
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                    <node concept="1Z5TYs" id="3cMB_4iXlTE" role="3cqZAp">
                      <node concept="mw_s8" id="3cMB_4iXlTH" role="1ZfhK$">
                        <node concept="1Z2H0r" id="3cMB_4iXlfE" role="mwGJk">
                          <node concept="1YBJjd" id="1pvyisdepIl" role="1Z2MuG">
                            <ref role="1YBMHb" node="1pvyisdeoSN" resolve="n" />
                          </node>
                        </node>
                      </node>
                      <node concept="mw_s8" id="3cMB_4iXJKw" role="1ZfhKB">
                        <node concept="1Z$b5t" id="3cMB_4iXJKu" role="mwGJk">
                          <ref role="1Z$eMM" node="hfpTQfl" resolve="elementType" />
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="2X1qdy" id="7Uo2cspnQLF" role="2X0Ygz">
              <property role="TrG5h" value="IST" />
              <node concept="2jxLKc" id="7Uo2cspnQLG" role="1tU5fm" />
            </node>
            <node concept="1Z$b5t" id="7Uo2cspnQN3" role="nvjzm">
              <ref role="1Z$eMM" node="7Uo2cspnQLL" resolve="inSeqType" />
            </node>
          </node>
        </node>
        <node concept="2OqwBi" id="hxx$VdO" role="3clFbw">
          <node concept="37vLTw" id="3GM_nagTvGu" role="2Oq$k0">
            <ref role="3cqZAo" node="h9LU$td" resolve="inputSequence" />
          </node>
          <node concept="3x8VRR" id="hfpTDAg" role="2OqNvi" />
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="1pvyisdeoSN" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="8xo1:1pvyisdcGJV" resolve="ForEachComponent" />
    </node>
  </node>
  <node concept="1YbPZF" id="1pvyisdepIA">
    <property role="TrG5h" value="typeof_ForEachInteratorVariableReference" />
    <node concept="3clFbS" id="1pvyisdepIB" role="18ibNy">
      <node concept="1Z5TYs" id="1pvyisdepTU" role="3cqZAp">
        <node concept="mw_s8" id="1pvyisdepUe" role="1ZfhKB">
          <node concept="1Z2H0r" id="1pvyisdepUa" role="mwGJk">
            <node concept="2OqwBi" id="1pvyisdeq2I" role="1Z2MuG">
              <node concept="1YBJjd" id="1pvyisdepUv" role="2Oq$k0">
                <ref role="1YBMHb" node="1pvyisdepID" resolve="n" />
              </node>
              <node concept="3TrEf2" id="1pvyisdeqe2" role="2OqNvi">
                <ref role="3Tt5mk" to="8xo1:1pvyisddd6e" resolve="forEach" />
              </node>
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="1pvyisdepTX" role="1ZfhK$">
          <node concept="1Z2H0r" id="1pvyisdepIQ" role="mwGJk">
            <node concept="1YBJjd" id="1pvyisdepKK" role="1Z2MuG">
              <ref role="1YBMHb" node="1pvyisdepID" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="1pvyisdepID" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="8xo1:1pvyisddd6d" resolve="ForEachInteratorVariableReference" />
    </node>
  </node>
  <node concept="1YbPZF" id="4Dhs5NhTXM$">
    <property role="TrG5h" value="typeof_NamedRendererParameterReference" />
    <property role="3GE5qa" value="named-renderer" />
    <node concept="3clFbS" id="4Dhs5NhTXM_" role="18ibNy">
      <node concept="1Z5TYs" id="4Dhs5NhTXZ3" role="3cqZAp">
        <node concept="mw_s8" id="4Dhs5NhTXZn" role="1ZfhKB">
          <node concept="1Z2H0r" id="4Dhs5NhTXZj" role="mwGJk">
            <node concept="2OqwBi" id="4Dhs5NhTY94" role="1Z2MuG">
              <node concept="1YBJjd" id="4Dhs5NhTXZC" role="2Oq$k0">
                <ref role="1YBMHb" node="4Dhs5NhTXMB" resolve="n" />
              </node>
              <node concept="3TrEf2" id="4Dhs5NhTYmL" role="2OqNvi">
                <ref role="3Tt5mk" to="8xo1:4Dhs5NhTbdX" resolve="decl" />
              </node>
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="4Dhs5NhTXZ6" role="1ZfhK$">
          <node concept="1Z2H0r" id="4Dhs5NhTXMQ" role="mwGJk">
            <node concept="1YBJjd" id="4Dhs5NhTXOO" role="1Z2MuG">
              <ref role="1YBMHb" node="4Dhs5NhTXMB" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="4Dhs5NhTXMB" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="8xo1:4Dhs5NhTbdW" resolve="NamedRendererParameterReference" />
    </node>
  </node>
  <node concept="1YbPZF" id="4Dhs5NhU2nR">
    <property role="TrG5h" value="typeof_NamedRendererParameter" />
    <property role="3GE5qa" value="named-renderer" />
    <node concept="3clFbS" id="4Dhs5NhU2nS" role="18ibNy">
      <node concept="1Z5TYs" id="4Dhs5NhU2yM" role="3cqZAp">
        <node concept="mw_s8" id="4Dhs5NhU2z4" role="1ZfhKB">
          <node concept="2OqwBi" id="4Dhs5NhU2Gy" role="mwGJk">
            <node concept="1YBJjd" id="4Dhs5NhU2z2" role="2Oq$k0">
              <ref role="1YBMHb" node="4Dhs5NhU2nU" resolve="n" />
            </node>
            <node concept="3TrEf2" id="4Dhs5NhU2Ue" role="2OqNvi">
              <ref role="3Tt5mk" to="8xo1:4Dhs5NhRRr2" resolve="type" />
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="4Dhs5NhU2yP" role="1ZfhK$">
          <node concept="1Z2H0r" id="4Dhs5NhU2ob" role="mwGJk">
            <node concept="1YBJjd" id="4Dhs5NhU2or" role="1Z2MuG">
              <ref role="1YBMHb" node="4Dhs5NhU2nU" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="4Dhs5NhU2nU" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="8xo1:4Dhs5NhRRqU" resolve="NamedRendererParameter" />
    </node>
  </node>
  <node concept="1YbPZF" id="4Dhs5NhVjsk">
    <property role="TrG5h" value="typeof_CustomHandlerParameterReference" />
    <property role="3GE5qa" value="function" />
    <node concept="3clFbS" id="4Dhs5NhVjsl" role="18ibNy">
      <node concept="1Z5TYs" id="4Dhs5NhVjCT" role="3cqZAp">
        <node concept="mw_s8" id="4Dhs5NhVjDd" role="1ZfhKB">
          <node concept="1Z2H0r" id="4Dhs5NhVjD9" role="mwGJk">
            <node concept="2OqwBi" id="4Dhs5NhVjMU" role="1Z2MuG">
              <node concept="1YBJjd" id="4Dhs5NhVjDu" role="2Oq$k0">
                <ref role="1YBMHb" node="4Dhs5NhVjsn" resolve="n" />
              </node>
              <node concept="3TrEf2" id="4Dhs5NhVk1g" role="2OqNvi">
                <ref role="3Tt5mk" to="8xo1:4Dhs5NhURAi" resolve="decl" />
              </node>
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="4Dhs5NhVjCW" role="1ZfhK$">
          <node concept="1Z2H0r" id="4Dhs5NhVjsG" role="mwGJk">
            <node concept="1YBJjd" id="4Dhs5NhVjuE" role="1Z2MuG">
              <ref role="1YBMHb" node="4Dhs5NhVjsn" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="4Dhs5NhVjsn" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="8xo1:4Dhs5NhURAh" resolve="CustomHandlerParameterReference" />
    </node>
  </node>
  <node concept="1YbPZF" id="4Dhs5NhVk58">
    <property role="TrG5h" value="typeof_CustomHandlerParameter" />
    <property role="3GE5qa" value="function" />
    <node concept="3clFbS" id="4Dhs5NhVk59" role="18ibNy">
      <node concept="1Z5TYs" id="4Dhs5NhVkg7" role="3cqZAp">
        <node concept="mw_s8" id="4Dhs5NhVkgp" role="1ZfhKB">
          <node concept="2ShNRf" id="4Dhs5NhVkDY" role="mwGJk">
            <node concept="3zrR0B" id="4Dhs5NhVlRV" role="2ShVmc">
              <node concept="3Tqbb2" id="4Dhs5NhVlRX" role="3zrR0E">
                <ref role="ehGHo" to="tpee:hP7QB7G" resolve="StringType" />
              </node>
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="4Dhs5NhVkga" role="1ZfhK$">
          <node concept="1Z2H0r" id="4Dhs5NhVk5w" role="mwGJk">
            <node concept="1YBJjd" id="4Dhs5NhVk5K" role="1Z2MuG">
              <ref role="1YBMHb" node="4Dhs5NhVk5b" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="4Dhs5NhVk5b" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="8xo1:4_K3r3dnx5y" resolve="CustomHandlerParameter" />
    </node>
  </node>
  <node concept="1YbPZF" id="4Dhs5NinJJs">
    <property role="TrG5h" value="typeof_StateVariableReference" />
    <node concept="3clFbS" id="4Dhs5NinJJt" role="18ibNy">
      <node concept="1Z5TYs" id="4Dhs5NinJZ_" role="3cqZAp">
        <node concept="mw_s8" id="4Dhs5NinJZT" role="1ZfhKB">
          <node concept="1Z2H0r" id="4Dhs5NinJZP" role="mwGJk">
            <node concept="2OqwBi" id="4Dhs5NinK9A" role="1Z2MuG">
              <node concept="1YBJjd" id="4Dhs5NinK0a" role="2Oq$k0">
                <ref role="1YBMHb" node="4Dhs5NinJJv" resolve="n" />
              </node>
              <node concept="3TrEf2" id="4Dhs5NinKnj" role="2OqNvi">
                <ref role="3Tt5mk" to="8xo1:4Dhs5NilDPP" resolve="decl" />
              </node>
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="4Dhs5NinJZC" role="1ZfhK$">
          <node concept="1Z2H0r" id="4Dhs5NinJJW" role="mwGJk">
            <node concept="1YBJjd" id="4Dhs5NinJLU" role="1Z2MuG">
              <ref role="1YBMHb" node="4Dhs5NinJJv" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="4Dhs5NinJJv" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="8xo1:4Dhs5NilDPI" resolve="StateVariableReference" />
    </node>
  </node>
  <node concept="1YbPZF" id="4Dhs5NinKrb">
    <property role="TrG5h" value="typeof_StateVariable" />
    <node concept="3clFbS" id="4Dhs5NinKrc" role="18ibNy">
      <node concept="1Z5TYs" id="4Dhs5NinKDK" role="3cqZAp">
        <node concept="mw_s8" id="4Dhs5NinKE2" role="1ZfhKB">
          <node concept="2OqwBi" id="4Dhs5NinKNw" role="mwGJk">
            <node concept="1YBJjd" id="4Dhs5NinKE0" role="2Oq$k0">
              <ref role="1YBMHb" node="4Dhs5NinKre" resolve="n" />
            </node>
            <node concept="3TrEf2" id="4Dhs5NinL1c" role="2OqNvi">
              <ref role="3Tt5mk" to="8xo1:4Dhs5NildkQ" resolve="type" />
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="4Dhs5NinKDN" role="1ZfhK$">
          <node concept="1Z2H0r" id="4Dhs5NinKrH" role="mwGJk">
            <node concept="1YBJjd" id="4Dhs5NinKtF" role="1Z2MuG">
              <ref role="1YBMHb" node="4Dhs5NinKre" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="4Dhs5NinKre" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="8xo1:4Dhs5NildkH" resolve="StateVariable" />
    </node>
  </node>
  <node concept="1YbPZF" id="1hCkroLy_9n">
    <property role="TrG5h" value="typeof_IncrementalPolymorhpicFunctionParameterReference" />
    <property role="3GE5qa" value="incrementalFunction" />
    <node concept="3clFbS" id="1hCkroLy_9o" role="18ibNy">
      <node concept="1Z5TYs" id="1hCkroLy_ks" role="3cqZAp">
        <node concept="mw_s8" id="1hCkroLy_kK" role="1ZfhKB">
          <node concept="1Z2H0r" id="1hCkroLy_kG" role="mwGJk">
            <node concept="2OqwBi" id="1hCkroLy_u_" role="1Z2MuG">
              <node concept="1YBJjd" id="1hCkroLy_l1" role="2Oq$k0">
                <ref role="1YBMHb" node="1hCkroLy_9q" resolve="n" />
              </node>
              <node concept="3TrEf2" id="1hCkroLy_GV" role="2OqNvi">
                <ref role="3Tt5mk" to="8xo1:1hCkroLxGy4" resolve="decl" />
              </node>
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="1hCkroLy_kv" role="1ZfhK$">
          <node concept="1Z2H0r" id="1hCkroLy_9P" role="mwGJk">
            <node concept="1YBJjd" id="1hCkroLy_a5" role="1Z2MuG">
              <ref role="1YBMHb" node="1hCkroLy_9q" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="1hCkroLy_9q" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="8xo1:1hCkroLrV8u" resolve="IncrementalPolymorhpicFunctionParameterReference" />
    </node>
  </node>
  <node concept="1YbPZF" id="1hCkroLy_KS">
    <property role="TrG5h" value="typeof_IncrementalPolymorhpicFunctionParameter" />
    <property role="3GE5qa" value="incrementalFunction" />
    <node concept="3clFbS" id="1hCkroLy_KT" role="18ibNy">
      <node concept="1Z5TYs" id="1hCkroLy_VZ" role="3cqZAp">
        <node concept="mw_s8" id="1hCkroLy_Wh" role="1ZfhKB">
          <node concept="2OqwBi" id="1hCkroLyA6H" role="mwGJk">
            <node concept="1YBJjd" id="1hCkroLy_Wf" role="2Oq$k0">
              <ref role="1YBMHb" node="1hCkroLy_KV" resolve="n" />
            </node>
            <node concept="3TrEf2" id="1hCkroLyAkl" role="2OqNvi">
              <ref role="3Tt5mk" to="8xo1:1hCkroLsgra" resolve="type" />
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="1hCkroLy_W2" role="1ZfhK$">
          <node concept="1Z2H0r" id="1hCkroLy_Lo" role="mwGJk">
            <node concept="1YBJjd" id="1hCkroLy_LC" role="1Z2MuG">
              <ref role="1YBMHb" node="1hCkroLy_KV" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="1hCkroLy_KV" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="8xo1:1hCkroLrV8c" resolve="IncrementalPolymorhpicFunctionParameter" />
    </node>
  </node>
  <node concept="1YbPZF" id="1hCkroL_fDM">
    <property role="TrG5h" value="typeof_IncrementalPolymorhpicFunctionCall" />
    <property role="3GE5qa" value="incrementalFunction" />
    <node concept="3clFbS" id="1hCkroL_fDN" role="18ibNy">
      <node concept="1Z5TYs" id="1hCkroL_fQD" role="3cqZAp">
        <node concept="mw_s8" id="1hCkroL_fQV" role="1ZfhKB">
          <node concept="2OqwBi" id="1hCkroL_hb0" role="mwGJk">
            <node concept="2OqwBi" id="1hCkroL_gLH" role="2Oq$k0">
              <node concept="1YBJjd" id="1hCkroL_gBk" role="2Oq$k0">
                <ref role="1YBMHb" node="1hCkroL_fDP" resolve="n" />
              </node>
              <node concept="3TrEf2" id="1hCkroL_gZk" role="2OqNvi">
                <ref role="3Tt5mk" to="8xo1:1hCkroLrV8H" resolve="decl" />
              </node>
            </node>
            <node concept="3TrEf2" id="1hCkroL_hvM" role="2OqNvi">
              <ref role="3Tt5mk" to="8xo1:1hCkroLvL9s" resolve="returnType" />
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="1hCkroL_fQG" role="1ZfhK$">
          <node concept="1Z2H0r" id="1hCkroL_fEk" role="mwGJk">
            <node concept="1YBJjd" id="1hCkroL_fE$" role="1Z2MuG">
              <ref role="1YBMHb" node="1hCkroL_fDP" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="1hCkroL_fDP" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="8xo1:1hCkroLrV8G" resolve="IncrementalPolymorhpicFunctionCall" />
    </node>
  </node>
  <node concept="1YbPZF" id="425sFRq4coc">
    <property role="TrG5h" value="typeof_CustomAction" />
    <node concept="3clFbS" id="425sFRq4cod" role="18ibNy">
      <node concept="1Z5TYs" id="425sFRq4cAN" role="3cqZAp">
        <node concept="mw_s8" id="425sFRq4cB7" role="1ZfhKB">
          <node concept="2c44tf" id="425sFRq4cB3" role="mwGJk">
            <node concept="3uibUv" id="425sFRq4cCc" role="2c44tc">
              <ref role="3uigEE" to="f2e6:~JsonObject" resolve="JsonObject" />
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="425sFRq4cAQ" role="1ZfhK$">
          <node concept="1Z2H0r" id="425sFRq4coK" role="mwGJk">
            <node concept="1YBJjd" id="425sFRq4cqI" role="1Z2MuG">
              <ref role="1YBMHb" node="425sFRq4cof" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="425sFRq4cof" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="8xo1:425sFRq4c48" resolve="CustomAction" />
    </node>
  </node>
  <node concept="1YbPZF" id="425sFRq68wK">
    <property role="TrG5h" value="typeof_CustomActionList" />
    <node concept="3clFbS" id="425sFRq68wL" role="18ibNy">
      <node concept="1Z5TYs" id="425sFRq68zT" role="3cqZAp">
        <node concept="mw_s8" id="425sFRq68zU" role="1ZfhKB">
          <node concept="2c44tf" id="425sFRq68zV" role="mwGJk">
            <node concept="3uibUv" id="425sFRq68zW" role="2c44tc">
              <ref role="3uigEE" to="f2e5:~JsonArray" resolve="JsonArray" />
            </node>
          </node>
        </node>
        <node concept="mw_s8" id="425sFRq68zX" role="1ZfhK$">
          <node concept="1Z2H0r" id="425sFRq68zY" role="mwGJk">
            <node concept="1YBJjd" id="425sFRq68zZ" role="1Z2MuG">
              <ref role="1YBMHb" node="425sFRq68wN" resolve="n" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="1YaCAy" id="425sFRq68wN" role="1YuTPh">
      <property role="TrG5h" value="n" />
      <ref role="1YaFvo" to="8xo1:425sFRq68vS" resolve="CustomActionList" />
    </node>
  </node>
</model>
