<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:b94f7f48-1129-46aa-96e6-6e08cb81f727(org.modelix.mps.react.muicomponents.intentions)">
  <persistence version="9" />
  <languages>
    <use id="d7a92d38-f7db-40d0-8431-763b0c3c9f20" name="jetbrains.mps.lang.intentions" version="1" />
    <devkit ref="fbc25dd2-5da4-483a-8b19-70928e1b62d7(jetbrains.mps.devkit.general-purpose)" />
  </languages>
  <imports>
    <import index="zaxg" ref="r:c4183f14-1033-4ade-be7c-1beadb184134(org.modelix.mps.react.muicomponents.structure)" implicit="true" />
    <import index="8xo1" ref="r:41b64586-29ed-47f5-b907-44be07261bbc(org.modelix.mps.react.structure)" implicit="true" />
    <import index="7923" ref="r:2c5a8407-fd65-4ea4-b95e-a8f8fee129c0(org.modelix.mps.react.muicomponents.behavior)" implicit="true" />
    <import index="c17a" ref="8865b7a8-5271-43d3-884c-6fd1d9cfdd34/java:org.jetbrains.mps.openapi.language(MPS.OpenAPI/)" implicit="true" />
  </imports>
  <registry>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1082485599095" name="jetbrains.mps.baseLanguage.structure.BlockStatement" flags="nn" index="9aQIb">
        <child id="1082485599096" name="statements" index="9aQI4" />
      </concept>
      <concept id="1215693861676" name="jetbrains.mps.baseLanguage.structure.BaseAssignmentExpression" flags="nn" index="d038R">
        <child id="1068498886297" name="rValue" index="37vLTx" />
        <child id="1068498886295" name="lValue" index="37vLTJ" />
      </concept>
      <concept id="1202948039474" name="jetbrains.mps.baseLanguage.structure.InstanceMethodCallOperation" flags="nn" index="liA8E" />
      <concept id="1154032098014" name="jetbrains.mps.baseLanguage.structure.AbstractLoopStatement" flags="nn" index="2LF5Ji">
        <child id="1154032183016" name="body" index="2LFqv$" />
      </concept>
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
      <concept id="1068431474542" name="jetbrains.mps.baseLanguage.structure.VariableDeclaration" flags="ng" index="33uBYm">
        <child id="1068431790190" name="initializer" index="33vP2m" />
      </concept>
      <concept id="1068498886296" name="jetbrains.mps.baseLanguage.structure.VariableReference" flags="nn" index="37vLTw">
        <reference id="1068581517664" name="variableDeclaration" index="3cqZAo" />
      </concept>
      <concept id="1068498886294" name="jetbrains.mps.baseLanguage.structure.AssignmentExpression" flags="nn" index="37vLTI" />
      <concept id="4972933694980447171" name="jetbrains.mps.baseLanguage.structure.BaseVariableDeclaration" flags="ng" index="19Szcq">
        <child id="5680397130376446158" name="type" index="1tU5fm" />
      </concept>
      <concept id="1068580123155" name="jetbrains.mps.baseLanguage.structure.ExpressionStatement" flags="nn" index="3clFbF">
        <child id="1068580123156" name="expression" index="3clFbG" />
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
      <concept id="1081516740877" name="jetbrains.mps.baseLanguage.structure.NotExpression" flags="nn" index="3fqX7Q">
        <child id="1081516765348" name="expression" index="3fr31v" />
      </concept>
      <concept id="1204053956946" name="jetbrains.mps.baseLanguage.structure.IMethodCall" flags="ngI" index="1ndlxa">
        <reference id="1068499141037" name="baseMethodDeclaration" index="37wK5l" />
      </concept>
    </language>
    <language id="d7a92d38-f7db-40d0-8431-763b0c3c9f20" name="jetbrains.mps.lang.intentions">
      <concept id="1192794744107" name="jetbrains.mps.lang.intentions.structure.IntentionDeclaration" flags="ig" index="2S6QgY" />
      <concept id="1192794782375" name="jetbrains.mps.lang.intentions.structure.DescriptionBlock" flags="in" index="2S6ZIM" />
      <concept id="1192795771125" name="jetbrains.mps.lang.intentions.structure.IsApplicableBlock" flags="in" index="2SaL7w" />
      <concept id="1192795911897" name="jetbrains.mps.lang.intentions.structure.ExecuteBlock" flags="in" index="2Sbjvc" />
      <concept id="1192796902958" name="jetbrains.mps.lang.intentions.structure.ConceptFunctionParameter_node" flags="nn" index="2Sf5sV" />
      <concept id="2522969319638091381" name="jetbrains.mps.lang.intentions.structure.BaseIntentionDeclaration" flags="ig" index="2ZfUlf">
        <reference id="2522969319638198290" name="forConcept" index="2ZfgGC" />
        <child id="2522969319638198291" name="executeFunction" index="2ZfgGD" />
        <child id="2522969319638093995" name="isApplicableFunction" index="2ZfVeh" />
        <child id="2522969319638093993" name="descriptionFunction" index="2ZfVej" />
      </concept>
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="1179409122411" name="jetbrains.mps.lang.smodel.structure.Node_ConceptMethodCall" flags="nn" index="2qgKlT" />
      <concept id="1143224066846" name="jetbrains.mps.lang.smodel.structure.Node_InsertNextSiblingOperation" flags="nn" index="HtI8k">
        <child id="1143224066849" name="insertedNode" index="HtI8F" />
      </concept>
      <concept id="7504436213544206332" name="jetbrains.mps.lang.smodel.structure.Node_ContainingLinkOperation" flags="nn" index="2NL2c5" />
      <concept id="1140131837776" name="jetbrains.mps.lang.smodel.structure.Node_ReplaceWithAnotherOperation" flags="nn" index="1P9Npp">
        <child id="1140131861877" name="replacementNode" index="1P9ThW" />
      </concept>
      <concept id="1138055754698" name="jetbrains.mps.lang.smodel.structure.SNodeType" flags="in" index="3Tqbb2">
        <reference id="1138405853777" name="concept" index="ehGHo" />
      </concept>
      <concept id="1138056022639" name="jetbrains.mps.lang.smodel.structure.SPropertyAccess" flags="nn" index="3TrcHB">
        <reference id="1138056395725" name="property" index="3TsBF5" />
      </concept>
      <concept id="1228341669568" name="jetbrains.mps.lang.smodel.structure.Node_DetachOperation" flags="nn" index="3YRAZt" />
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
      <concept id="1151688443754" name="jetbrains.mps.baseLanguage.collections.structure.ListType" flags="in" index="_YKpA">
        <child id="1151688676805" name="elementType" index="_ZDj9" />
      </concept>
      <concept id="1151702311717" name="jetbrains.mps.baseLanguage.collections.structure.ToListOperation" flags="nn" index="ANE8D" />
      <concept id="1153943597977" name="jetbrains.mps.baseLanguage.collections.structure.ForEachStatement" flags="nn" index="2Gpval">
        <child id="1153944400369" name="variable" index="2Gsz3X" />
        <child id="1153944424730" name="inputSequence" index="2GsD0m" />
      </concept>
      <concept id="1153944193378" name="jetbrains.mps.baseLanguage.collections.structure.ForEachVariable" flags="nr" index="2GrKxI" />
      <concept id="1153944233411" name="jetbrains.mps.baseLanguage.collections.structure.ForEachVariableReference" flags="nn" index="2GrUjf">
        <reference id="1153944258490" name="variable" index="2Gs0qQ" />
      </concept>
      <concept id="1175845471038" name="jetbrains.mps.baseLanguage.collections.structure.ReverseOperation" flags="nn" index="35Qw8J" />
      <concept id="1165525191778" name="jetbrains.mps.baseLanguage.collections.structure.GetFirstOperation" flags="nn" index="1uHKPH" />
      <concept id="1176501494711" name="jetbrains.mps.baseLanguage.collections.structure.IsNotEmptyOperation" flags="nn" index="3GX2aA" />
    </language>
  </registry>
  <node concept="2S6QgY" id="G39ofCWVCV">
    <property role="3GE5qa" value="interfaces" />
    <property role="TrG5h" value="unwrap" />
    <ref role="2ZfgGC" to="zaxg:2vPZMAnsypR" resolve="ICanWrap" />
    <node concept="2S6ZIM" id="G39ofCWVCW" role="2ZfVej">
      <node concept="3clFbS" id="G39ofCWVCX" role="2VODD2">
        <node concept="3clFbF" id="G39ofCWZDS" role="3cqZAp">
          <node concept="Xl_RD" id="G39ofCWZDR" role="3clFbG">
            <property role="Xl_RC" value="Unwrap" />
          </node>
        </node>
      </node>
    </node>
    <node concept="2Sbjvc" id="G39ofCWVCY" role="2ZfgGD">
      <node concept="3clFbS" id="G39ofCWVCZ" role="2VODD2">
        <node concept="3clFbJ" id="G39ofCX6NS" role="3cqZAp">
          <node concept="3clFbS" id="G39ofCX6NU" role="3clFbx">
            <node concept="3cpWs8" id="G39ofCXFiV" role="3cqZAp">
              <node concept="3cpWsn" id="G39ofCXFiW" role="3cpWs9">
                <property role="TrG5h" value="all" />
                <node concept="_YKpA" id="G39ofCXEZ$" role="1tU5fm">
                  <node concept="3Tqbb2" id="G39ofCXEZB" role="_ZDj9">
                    <ref role="ehGHo" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
                  </node>
                </node>
                <node concept="2OqwBi" id="G39ofCXM3z" role="33vP2m">
                  <node concept="2OqwBi" id="G39ofCXFiX" role="2Oq$k0">
                    <node concept="2OqwBi" id="G39ofCXFiY" role="2Oq$k0">
                      <node concept="2Sf5sV" id="G39ofCXFiZ" role="2Oq$k0" />
                      <node concept="2qgKlT" id="G39ofCXFj0" role="2OqNvi">
                        <ref role="37wK5l" to="7923:G39ofCXoEe" resolve="currentChildren" />
                      </node>
                    </node>
                    <node concept="ANE8D" id="G39ofCXFj1" role="2OqNvi" />
                  </node>
                  <node concept="35Qw8J" id="G39ofCXPGH" role="2OqNvi" />
                </node>
              </node>
            </node>
            <node concept="2Gpval" id="G39ofCXQp9" role="3cqZAp">
              <node concept="2GrKxI" id="G39ofCXQpb" role="2Gsz3X">
                <property role="TrG5h" value="c" />
              </node>
              <node concept="37vLTw" id="G39ofCXQIH" role="2GsD0m">
                <ref role="3cqZAo" node="G39ofCXFiW" resolve="all" />
              </node>
              <node concept="3clFbS" id="G39ofCXQpf" role="2LFqv$">
                <node concept="3clFbF" id="G39ofCXG$w" role="3cqZAp">
                  <node concept="2OqwBi" id="G39ofCXGJ7" role="3clFbG">
                    <node concept="2Sf5sV" id="G39ofCXG$v" role="2Oq$k0" />
                    <node concept="HtI8k" id="G39ofCXHaS" role="2OqNvi">
                      <node concept="2GrUjf" id="G39ofCXRpF" role="HtI8F">
                        <ref role="2Gs0qQ" node="G39ofCXQpb" resolve="c" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="3clFbF" id="G39ofCXS3r" role="3cqZAp">
              <node concept="2OqwBi" id="G39ofCXSgN" role="3clFbG">
                <node concept="2Sf5sV" id="G39ofCXS3q" role="2Oq$k0" />
                <node concept="3YRAZt" id="G39ofCXSG$" role="2OqNvi" />
              </node>
            </node>
          </node>
          <node concept="2OqwBi" id="G39ofCX5kZ" role="3clFbw">
            <node concept="2OqwBi" id="G39ofCX06F" role="2Oq$k0">
              <node concept="2Sf5sV" id="G39ofCWZXl" role="2Oq$k0" />
              <node concept="2NL2c5" id="G39ofCX4ha" role="2OqNvi" />
            </node>
            <node concept="liA8E" id="G39ofCX6cR" role="2OqNvi">
              <ref role="37wK5l" to="c17a:~SAbstractLink.isMultiple()" resolve="isMultiple" />
            </node>
          </node>
          <node concept="9aQIb" id="G39ofCXzkV" role="9aQIa">
            <node concept="3clFbS" id="G39ofCXzkW" role="9aQI4">
              <node concept="3clFbF" id="G39ofCX$hP" role="3cqZAp">
                <node concept="2OqwBi" id="G39ofCX$sb" role="3clFbG">
                  <node concept="2Sf5sV" id="G39ofCX$hO" role="2Oq$k0" />
                  <node concept="1P9Npp" id="G39ofCX$Sp" role="2OqNvi">
                    <node concept="2OqwBi" id="G39ofCXAgn" role="1P9ThW">
                      <node concept="2OqwBi" id="G39ofCX_bz" role="2Oq$k0">
                        <node concept="2Sf5sV" id="G39ofCX_b$" role="2Oq$k0" />
                        <node concept="2qgKlT" id="G39ofCX_b_" role="2OqNvi">
                          <ref role="37wK5l" to="7923:G39ofCXoEe" resolve="currentChildren" />
                        </node>
                      </node>
                      <node concept="1uHKPH" id="G39ofCXBK$" role="2OqNvi" />
                    </node>
                  </node>
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="2SaL7w" id="G39ofCXmhq" role="2ZfVeh">
      <node concept="3clFbS" id="G39ofCXmhr" role="2VODD2">
        <node concept="3clFbF" id="G39ofCXmNr" role="3cqZAp">
          <node concept="2OqwBi" id="G39ofCXuAm" role="3clFbG">
            <node concept="2OqwBi" id="G39ofCXna1" role="2Oq$k0">
              <node concept="2Sf5sV" id="G39ofCXmNq" role="2Oq$k0" />
              <node concept="2qgKlT" id="G39ofCXtDj" role="2OqNvi">
                <ref role="37wK5l" to="7923:G39ofCXoEe" resolve="currentChildren" />
              </node>
            </node>
            <node concept="3GX2aA" id="G39ofCXx8B" role="2OqNvi" />
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="2S6QgY" id="2CLPJ2uD_Px">
    <property role="3GE5qa" value="output" />
    <property role="TrG5h" value="toggleFeatureUnspecific" />
    <ref role="2ZfgGC" to="zaxg:7$1mkeArAgt" resolve="ErrorReporting" />
    <node concept="2S6ZIM" id="2CLPJ2uD_Py" role="2ZfVej">
      <node concept="3clFbS" id="2CLPJ2uD_Pz" role="2VODD2">
        <node concept="3clFbF" id="2CLPJ2uDCa_" role="3cqZAp">
          <node concept="Xl_RD" id="2CLPJ2uDCa$" role="3clFbG">
            <property role="Xl_RC" value="Toggle Feature-unspecific /g" />
          </node>
        </node>
      </node>
    </node>
    <node concept="2Sbjvc" id="2CLPJ2uD_P$" role="2ZfgGD">
      <node concept="3clFbS" id="2CLPJ2uD_P_" role="2VODD2">
        <node concept="3clFbF" id="2CLPJ2uDCz4" role="3cqZAp">
          <node concept="37vLTI" id="2CLPJ2uDFOq" role="3clFbG">
            <node concept="3fqX7Q" id="2CLPJ2uDGl4" role="37vLTx">
              <node concept="2OqwBi" id="2CLPJ2uDHi8" role="3fr31v">
                <node concept="2Sf5sV" id="2CLPJ2uDGSd" role="2Oq$k0" />
                <node concept="3TrcHB" id="2CLPJ2uDHPN" role="2OqNvi">
                  <ref role="3TsBF5" to="zaxg:2CLPJ2uDwEt" resolve="onlyFeatureUnspecific" />
                </node>
              </node>
            </node>
            <node concept="2OqwBi" id="2CLPJ2uDCJC" role="37vLTJ">
              <node concept="2Sf5sV" id="2CLPJ2uDCz3" role="2Oq$k0" />
              <node concept="3TrcHB" id="2CLPJ2uDDks" role="2OqNvi">
                <ref role="3TsBF5" to="zaxg:2CLPJ2uDwEt" resolve="onlyFeatureUnspecific" />
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
  </node>
</model>

