<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:383e1b0d-970c-48d5-b830-f4e4c5a7925c(org.modelix.mps.spreadsheets.constraints)">
  <persistence version="9" />
  <languages>
    <use id="5dae8159-ab99-46bb-a40d-0cee30ee7018" name="jetbrains.mps.lang.constraints.rules.kinds" version="0" />
    <use id="ea3159bf-f48e-4720-bde2-86dba75f0d34" name="jetbrains.mps.lang.context.defs" version="0" />
    <use id="e51810c5-7308-4642-bcb6-469e61b5dd18" name="jetbrains.mps.lang.constraints.msg.specification" version="0" />
    <use id="134c38d4-e3af-4d9e-b069-1c7df0a4005d" name="jetbrains.mps.lang.constraints.rules.skeleton" version="0" />
    <use id="b3551702-269c-4f05-ba61-58060cef4292" name="jetbrains.mps.lang.rulesAndMessages" version="0" />
    <use id="3f4bc5f5-c6c1-4a28-8b10-c83066ffa4a1" name="jetbrains.mps.lang.constraints" version="6" />
    <use id="13744753-c81f-424a-9c1b-cf8943bf4e86" name="jetbrains.mps.lang.sharedConcepts" version="0" />
    <use id="3ad5badc-1d9c-461c-b7b1-fa2fcd0a0ae7" name="jetbrains.mps.lang.context" version="0" />
    <use id="ad93155d-79b2-4759-b10c-55123e763903" name="jetbrains.mps.lang.messages" version="0" />
    <devkit ref="00000000-0000-4000-0000-5604ebd4f22c(jetbrains.mps.devkit.aspect.constraints)" />
  </languages>
  <imports>
    <import index="o8zo" ref="r:314576fc-3aee-4386-a0a5-a38348ac317d(jetbrains.mps.scope)" />
    <import index="ur0y" ref="r:3d732d81-423c-436c-bbe7-ad9d1315b222(org.modelix.mps.spreadsheets.structure)" implicit="true" />
    <import index="xmo0" ref="r:cf52b83d-c083-46cc-8500-855d35cfb3ac(org.modelix.mps.spreadsheets.behavior)" implicit="true" />
    <import index="wyt6" ref="6354ebe7-c22a-4a0f-ac54-50b52ab9b065/java:java.lang(JDK/)" implicit="true" />
  </imports>
  <registry>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1188207840427" name="jetbrains.mps.baseLanguage.structure.AnnotationInstance" flags="nn" index="2AHcQZ">
        <reference id="1188208074048" name="annotation" index="2AI5Lk" />
      </concept>
      <concept id="1188208481402" name="jetbrains.mps.baseLanguage.structure.HasAnnotation" flags="ngI" index="2AJDlI">
        <child id="1188208488637" name="annotation" index="2AJF6D" />
      </concept>
      <concept id="1197027756228" name="jetbrains.mps.baseLanguage.structure.DotExpression" flags="nn" index="2OqwBi">
        <child id="1197027771414" name="operand" index="2Oq$k0" />
        <child id="1197027833540" name="operation" index="2OqNvi" />
      </concept>
      <concept id="1145552977093" name="jetbrains.mps.baseLanguage.structure.GenericNewExpression" flags="nn" index="2ShNRf">
        <child id="1145553007750" name="creator" index="2ShVmc" />
      </concept>
      <concept id="1137021947720" name="jetbrains.mps.baseLanguage.structure.ConceptFunction" flags="in" index="2VMwT0">
        <child id="1137022507850" name="body" index="2VODD2" />
      </concept>
      <concept id="1182160077978" name="jetbrains.mps.baseLanguage.structure.AnonymousClassCreator" flags="nn" index="YeOm9">
        <child id="1182160096073" name="cls" index="YeSDq" />
      </concept>
      <concept id="1081236700937" name="jetbrains.mps.baseLanguage.structure.StaticMethodCall" flags="nn" index="2YIFZM">
        <reference id="1144433194310" name="classConcept" index="1Pybhc" />
      </concept>
      <concept id="1513279640923991009" name="jetbrains.mps.baseLanguage.structure.IGenericClassCreator" flags="ngI" index="366HgL">
        <property id="1513279640906337053" name="inferTypeParams" index="373rjd" />
      </concept>
      <concept id="1068498886296" name="jetbrains.mps.baseLanguage.structure.VariableReference" flags="nn" index="37vLTw">
        <reference id="1068581517664" name="variableDeclaration" index="3cqZAo" />
      </concept>
      <concept id="1068498886292" name="jetbrains.mps.baseLanguage.structure.ParameterDeclaration" flags="ir" index="37vLTG" />
      <concept id="1225271177708" name="jetbrains.mps.baseLanguage.structure.StringType" flags="in" index="17QB3L" />
      <concept id="4972933694980447171" name="jetbrains.mps.baseLanguage.structure.BaseVariableDeclaration" flags="ng" index="19Szcq">
        <child id="5680397130376446158" name="type" index="1tU5fm" />
      </concept>
      <concept id="1068580123132" name="jetbrains.mps.baseLanguage.structure.BaseMethodDeclaration" flags="ng" index="3clF44">
        <child id="1068580123133" name="returnType" index="3clF45" />
        <child id="1068580123134" name="parameter" index="3clF46" />
        <child id="1068580123135" name="body" index="3clF47" />
      </concept>
      <concept id="1068580123165" name="jetbrains.mps.baseLanguage.structure.InstanceMethodDeclaration" flags="ig" index="3clFb_" />
      <concept id="1068580123155" name="jetbrains.mps.baseLanguage.structure.ExpressionStatement" flags="nn" index="3clFbF">
        <child id="1068580123156" name="expression" index="3clFbG" />
      </concept>
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
      <concept id="1204053956946" name="jetbrains.mps.baseLanguage.structure.IMethodCall" flags="ngI" index="1ndlxa">
        <reference id="1068499141037" name="baseMethodDeclaration" index="37wK5l" />
        <child id="1068499141038" name="actualArgument" index="37wK5m" />
      </concept>
      <concept id="1107461130800" name="jetbrains.mps.baseLanguage.structure.Classifier" flags="ng" index="3pOWGL">
        <property id="521412098689998745" name="nonStatic" index="2bfB8j" />
        <child id="5375687026011219971" name="member" index="jymVt" unordered="true" />
      </concept>
      <concept id="1178549954367" name="jetbrains.mps.baseLanguage.structure.IVisible" flags="ngI" index="1B3ioH">
        <child id="1178549979242" name="visibility" index="1B3o_S" />
      </concept>
      <concept id="1146644602865" name="jetbrains.mps.baseLanguage.structure.PublicVisibility" flags="nn" index="3Tm1VV" />
      <concept id="1170345865475" name="jetbrains.mps.baseLanguage.structure.AnonymousClass" flags="ig" index="1Y3b0j">
        <reference id="1170346070688" name="classifier" index="1Y3XeK" />
      </concept>
    </language>
    <language id="3f4bc5f5-c6c1-4a28-8b10-c83066ffa4a1" name="jetbrains.mps.lang.constraints">
      <concept id="8966504967485224688" name="jetbrains.mps.lang.constraints.structure.ConstraintFunctionParameter_contextNode" flags="nn" index="2rP1CM" />
      <concept id="5564765827938091039" name="jetbrains.mps.lang.constraints.structure.ConstraintFunction_ReferentSearchScope_Scope" flags="ig" index="3dgokm" />
      <concept id="1213093968558" name="jetbrains.mps.lang.constraints.structure.ConceptConstraints" flags="ng" index="1M2fIO">
        <reference id="1213093996982" name="concept" index="1M2myG" />
        <child id="1213100494875" name="referent" index="1Mr941" />
      </concept>
      <concept id="1148687176410" name="jetbrains.mps.lang.constraints.structure.NodeReferentConstraint" flags="ng" index="1N5Pfh">
        <reference id="1148687202698" name="applicableLink" index="1N5Vy1" />
        <child id="1148687345559" name="searchScopeFactory" index="1N6uqs" />
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
      <concept id="2396822768958367367" name="jetbrains.mps.lang.smodel.structure.AbstractTypeCastExpression" flags="nn" index="$5XWr">
        <child id="6733348108486823193" name="leftExpression" index="1m5AlR" />
        <child id="3906496115198199033" name="conceptArgument" index="3oSUPX" />
      </concept>
      <concept id="1171407110247" name="jetbrains.mps.lang.smodel.structure.Node_GetAncestorOperation" flags="nn" index="2Xjw5R" />
      <concept id="1144100932627" name="jetbrains.mps.lang.smodel.structure.OperationParm_Inclusion" flags="ng" index="1xIGOp" />
      <concept id="1144101972840" name="jetbrains.mps.lang.smodel.structure.OperationParm_Concept" flags="ng" index="1xMEDy">
        <child id="1207343664468" name="conceptArgument" index="ri$Ld" />
      </concept>
      <concept id="1140137987495" name="jetbrains.mps.lang.smodel.structure.SNodeTypeCastExpression" flags="nn" index="1PxgMI" />
      <concept id="1138055754698" name="jetbrains.mps.lang.smodel.structure.SNodeType" flags="in" index="3Tqbb2" />
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
  </registry>
  <node concept="1M2fIO" id="1pvyisdb_yO">
    <property role="3GE5qa" value="table" />
    <ref role="1M2myG" to="ur0y:1pvyisdbcXE" resolve="PropertyColumnContent" />
    <node concept="1N5Pfh" id="1pvyisdb_yP" role="1Mr941">
      <ref role="1N5Vy1" to="ur0y:1pvyisdbcXK" resolve="property" />
      <node concept="3dgokm" id="1pvyisdb_zt" role="1N6uqs">
        <node concept="3clFbS" id="1pvyisdb_zu" role="2VODD2">
          <node concept="3clFbF" id="1pvyisdbBTl" role="3cqZAp">
            <node concept="2YIFZM" id="1pvyisdbGvn" role="3clFbG">
              <ref role="37wK5l" to="o8zo:4IP40Bi3eAf" resolve="forNamedElements" />
              <ref role="1Pybhc" to="o8zo:4IP40Bi3e_R" resolve="ListScope" />
              <node concept="2OqwBi" id="1pvyisdbGvo" role="37wK5m">
                <node concept="2OqwBi" id="425sFRq3pdf" role="2Oq$k0">
                  <node concept="2OqwBi" id="425sFRq3orL" role="2Oq$k0">
                    <node concept="2OqwBi" id="1pvyisdbGvq" role="2Oq$k0">
                      <node concept="2rP1CM" id="1pvyisdbGvr" role="2Oq$k0" />
                      <node concept="2Xjw5R" id="1pvyisdbGvs" role="2OqNvi">
                        <node concept="1xMEDy" id="1pvyisdbGvt" role="1xVPHs">
                          <node concept="chp4Y" id="1pvyisdbGvu" role="ri$Ld">
                            <ref role="cht4Q" to="ur0y:1pvyisdaIsw" resolve="TableView" />
                          </node>
                        </node>
                        <node concept="1xIGOp" id="1pvyisdbGvv" role="1xVPHs" />
                      </node>
                    </node>
                    <node concept="3TrEf2" id="425sFRq3oS7" role="2OqNvi">
                      <ref role="3Tt5mk" to="ur0y:425sFRpXgEX" resolve="data" />
                    </node>
                  </node>
                  <node concept="3TrEf2" id="425sFRq3pyl" role="2OqNvi">
                    <ref role="3Tt5mk" to="ur0y:425sFRpZjWo" resolve="entity" />
                  </node>
                </node>
                <node concept="3Tsc0h" id="1pvyisdbGvx" role="2OqNvi">
                  <ref role="3TtcxE" to="ur0y:1pvyisd9EKq" resolve="properties" />
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="1M2fIO" id="1pvyisdcCG7">
    <property role="3GE5qa" value="table-data" />
    <ref role="1M2myG" to="ur0y:1pvyisdbcVs" resolve="PropertyCellData" />
    <node concept="1N5Pfh" id="1pvyisdcCG8" role="1Mr941">
      <ref role="1N5Vy1" to="ur0y:1pvyisdbcVv" resolve="property" />
      <node concept="3dgokm" id="1pvyisdcCHE" role="1N6uqs">
        <node concept="3clFbS" id="1pvyisdcCHG" role="2VODD2">
          <node concept="3clFbF" id="1pvyisdcCLa" role="3cqZAp">
            <node concept="2YIFZM" id="1pvyisdcF1c" role="3clFbG">
              <ref role="37wK5l" to="o8zo:4IP40Bi3eAf" resolve="forNamedElements" />
              <ref role="1Pybhc" to="o8zo:4IP40Bi3e_R" resolve="ListScope" />
              <node concept="2OqwBi" id="1pvyisdcEfi" role="37wK5m">
                <node concept="2OqwBi" id="1pvyisdcDLz" role="2Oq$k0">
                  <node concept="2OqwBi" id="1pvyisdcDmE" role="2Oq$k0">
                    <node concept="2OqwBi" id="1pvyisdcCXH" role="2Oq$k0">
                      <node concept="2rP1CM" id="1pvyisdcCL9" role="2Oq$k0" />
                      <node concept="2Xjw5R" id="1pvyisdcD6m" role="2OqNvi">
                        <node concept="1xMEDy" id="1pvyisdcD6o" role="1xVPHs">
                          <node concept="chp4Y" id="1pvyisdcD8O" role="ri$Ld">
                            <ref role="cht4Q" to="ur0y:1pvyisdbcVq" resolve="TableDataInstance" />
                          </node>
                        </node>
                        <node concept="1xIGOp" id="1pvyisdcDci" role="1xVPHs" />
                      </node>
                    </node>
                    <node concept="3TrEf2" id="1pvyisdcDxH" role="2OqNvi">
                      <ref role="3Tt5mk" to="ur0y:425sFRpWrQg" resolve="declaration" />
                    </node>
                  </node>
                  <node concept="3TrEf2" id="1pvyisdcE08" role="2OqNvi">
                    <ref role="3Tt5mk" to="ur0y:425sFRpZjWo" resolve="entity" />
                  </node>
                </node>
                <node concept="3Tsc0h" id="1pvyisdcEuI" role="2OqNvi">
                  <ref role="3TtcxE" to="ur0y:1pvyisd9EKq" resolve="properties" />
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="1M2fIO" id="2ti6llKUmch">
    <property role="3GE5qa" value="formular" />
    <ref role="1M2myG" to="ur0y:2ti6llKUmc0" resolve="ColumnReference" />
    <node concept="1N5Pfh" id="2ti6llKUmci" role="1Mr941">
      <ref role="1N5Vy1" to="ur0y:2ti6llKUmc1" resolve="column" />
      <node concept="3dgokm" id="2ti6llKUmdG" role="1N6uqs">
        <node concept="3clFbS" id="2ti6llKUmdH" role="2VODD2">
          <node concept="3clFbF" id="2ti6llKU_M_" role="3cqZAp">
            <node concept="2ShNRf" id="2ti6llKU_Mx" role="3clFbG">
              <node concept="YeOm9" id="2ti6llKUADz" role="2ShVmc">
                <node concept="1Y3b0j" id="2ti6llKUADA" role="YeSDq">
                  <property role="2bfB8j" value="true" />
                  <property role="373rjd" value="true" />
                  <ref role="1Y3XeK" to="o8zo:4IP40Bi3e_R" resolve="ListScope" />
                  <ref role="37wK5l" to="o8zo:4IP40Bi3e_T" resolve="ListScope" />
                  <node concept="2OqwBi" id="2ti6llKUB0t" role="37wK5m">
                    <node concept="2OqwBi" id="2ti6llKUB0u" role="2Oq$k0">
                      <node concept="2rP1CM" id="2ti6llKUB0v" role="2Oq$k0" />
                      <node concept="2Xjw5R" id="2ti6llKUB0w" role="2OqNvi">
                        <node concept="1xMEDy" id="2ti6llKUB0x" role="1xVPHs">
                          <node concept="chp4Y" id="2ti6llKUB0y" role="ri$Ld">
                            <ref role="cht4Q" to="ur0y:1pvyisdaIsw" resolve="TableView" />
                          </node>
                        </node>
                        <node concept="1xIGOp" id="2ti6llKUB0z" role="1xVPHs" />
                      </node>
                    </node>
                    <node concept="3Tsc0h" id="2ti6llKUB0$" role="2OqNvi">
                      <ref role="3TtcxE" to="ur0y:1pvyisdbcXH" resolve="columns" />
                    </node>
                  </node>
                  <node concept="3Tm1VV" id="2ti6llKUADB" role="1B3o_S" />
                  <node concept="3clFb_" id="2ti6llKUAE2" role="jymVt">
                    <property role="TrG5h" value="getName" />
                    <node concept="17QB3L" id="2ti6llKUAE3" role="3clF45" />
                    <node concept="3Tm1VV" id="2ti6llKUAE4" role="1B3o_S" />
                    <node concept="37vLTG" id="2ti6llKUAE6" role="3clF46">
                      <property role="TrG5h" value="child" />
                      <node concept="3Tqbb2" id="2ti6llKUAE7" role="1tU5fm" />
                    </node>
                    <node concept="3clFbS" id="2ti6llKUAE8" role="3clF47">
                      <node concept="3clFbF" id="2ti6llKUBvh" role="3cqZAp">
                        <node concept="2OqwBi" id="2ti6llKUC4n" role="3clFbG">
                          <node concept="1PxgMI" id="2ti6llKUBJZ" role="2Oq$k0">
                            <node concept="chp4Y" id="2ti6llKUBOY" role="3oSUPX">
                              <ref role="cht4Q" to="ur0y:1pvyisdbPV3" resolve="Column" />
                            </node>
                            <node concept="37vLTw" id="2ti6llKUBvg" role="1m5AlR">
                              <ref role="3cqZAo" node="2ti6llKUAE6" resolve="child" />
                            </node>
                          </node>
                          <node concept="2qgKlT" id="425sFRpP_kr" role="2OqNvi">
                            <ref role="37wK5l" to="xmo0:1gyl2moVSFk" resolve="getColumnLabel" />
                          </node>
                        </node>
                      </node>
                    </node>
                    <node concept="2AHcQZ" id="2ti6llKUAEa" role="2AJF6D">
                      <ref role="2AI5Lk" to="wyt6:~Override" resolve="Override" />
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
</model>

