<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:44d56dac-a204-4926-8f4e-cd6684c153aa(ReactDemoLanguage.behavior)">
  <persistence version="9" />
  <languages>
    <use id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel" version="19" />
    <use id="af65afd8-f0dd-4942-87d9-63a55f2a9db1" name="jetbrains.mps.lang.behavior" version="2" />
    <devkit ref="fbc25dd2-5da4-483a-8b19-70928e1b62d7(jetbrains.mps.devkit.general-purpose)" />
  </languages>
  <imports>
    <import index="oyym" ref="r:1570828e-e9a4-47ff-95d9-80c800704647(ReactDemoLanguage.structure)" implicit="true" />
    <import index="mhbf" ref="8865b7a8-5271-43d3-884c-6fd1d9cfdd34/java:org.jetbrains.mps.openapi.model(MPS.OpenAPI/)" implicit="true" />
    <import index="wyt6" ref="6354ebe7-c22a-4a0f-ac54-50b52ab9b065/java:java.lang(JDK/)" implicit="true" />
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="af65afd8-f0dd-4942-87d9-63a55f2a9db1" name="jetbrains.mps.lang.behavior">
      <concept id="1225194240794" name="jetbrains.mps.lang.behavior.structure.ConceptBehavior" flags="ng" index="13h7C7">
        <reference id="1225194240799" name="concept" index="13h7C2" />
        <child id="1225194240805" name="method" index="13h7CS" />
        <child id="1225194240801" name="constructor" index="13h7CW" />
      </concept>
      <concept id="1225194413805" name="jetbrains.mps.lang.behavior.structure.ConceptConstructorDeclaration" flags="in" index="13hLZK" />
      <concept id="1225194472830" name="jetbrains.mps.lang.behavior.structure.ConceptMethodDeclaration" flags="ng" index="13i0hz" />
      <concept id="1225194691553" name="jetbrains.mps.lang.behavior.structure.ThisNodeExpression" flags="nn" index="13iPFW" />
    </language>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="4836112446988635817" name="jetbrains.mps.baseLanguage.structure.UndefinedType" flags="in" index="2jxLKc" />
      <concept id="1202948039474" name="jetbrains.mps.baseLanguage.structure.InstanceMethodCallOperation" flags="nn" index="liA8E" />
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
      <concept id="1068498886296" name="jetbrains.mps.baseLanguage.structure.VariableReference" flags="nn" index="37vLTw">
        <reference id="1068581517664" name="variableDeclaration" index="3cqZAo" />
      </concept>
      <concept id="1068498886292" name="jetbrains.mps.baseLanguage.structure.ParameterDeclaration" flags="ir" index="37vLTG" />
      <concept id="1225271177708" name="jetbrains.mps.baseLanguage.structure.StringType" flags="in" index="17QB3L" />
      <concept id="1225271283259" name="jetbrains.mps.baseLanguage.structure.NPEEqualsExpression" flags="nn" index="17R0WA" />
      <concept id="4972933694980447171" name="jetbrains.mps.baseLanguage.structure.BaseVariableDeclaration" flags="ng" index="19Szcq">
        <child id="5680397130376446158" name="type" index="1tU5fm" />
      </concept>
      <concept id="1068580123132" name="jetbrains.mps.baseLanguage.structure.BaseMethodDeclaration" flags="ng" index="3clF44">
        <child id="1068580123133" name="returnType" index="3clF45" />
        <child id="1068580123134" name="parameter" index="3clF46" />
        <child id="1068580123135" name="body" index="3clF47" />
      </concept>
      <concept id="1068580123155" name="jetbrains.mps.baseLanguage.structure.ExpressionStatement" flags="nn" index="3clFbF">
        <child id="1068580123156" name="expression" index="3clFbG" />
      </concept>
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
      <concept id="1068581242875" name="jetbrains.mps.baseLanguage.structure.PlusExpression" flags="nn" index="3cpWs3" />
      <concept id="1204053956946" name="jetbrains.mps.baseLanguage.structure.IMethodCall" flags="ngI" index="1ndlxa">
        <reference id="1068499141037" name="baseMethodDeclaration" index="37wK5l" />
      </concept>
      <concept id="1081773326031" name="jetbrains.mps.baseLanguage.structure.BinaryOperation" flags="nn" index="3uHJSO">
        <child id="1081773367579" name="rightExpression" index="3uHU7w" />
        <child id="1081773367580" name="leftExpression" index="3uHU7B" />
      </concept>
      <concept id="1178549954367" name="jetbrains.mps.baseLanguage.structure.IVisible" flags="ngI" index="1B3ioH">
        <child id="1178549979242" name="visibility" index="1B3o_S" />
      </concept>
      <concept id="1146644602865" name="jetbrains.mps.baseLanguage.structure.PublicVisibility" flags="nn" index="3Tm1VV" />
    </language>
    <language id="fd392034-7849-419d-9071-12563d152375" name="jetbrains.mps.baseLanguage.closures">
      <concept id="2524418899405758586" name="jetbrains.mps.baseLanguage.closures.structure.InferredClosureParameterDeclaration" flags="ig" index="gl6BB" />
      <concept id="1199569711397" name="jetbrains.mps.baseLanguage.closures.structure.ClosureLiteral" flags="nn" index="1bVj0M">
        <child id="1199569906740" name="parameter" index="1bW2Oz" />
        <child id="1199569916463" name="body" index="1bW5cS" />
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
      <concept id="1145404486709" name="jetbrains.mps.lang.smodel.structure.SemanticDowncastExpression" flags="nn" index="2JrnkZ">
        <child id="1145404616321" name="leftExpression" index="2JrQYb" />
      </concept>
      <concept id="1171305280644" name="jetbrains.mps.lang.smodel.structure.Node_GetDescendantsOperation" flags="nn" index="2Rf3mk" />
      <concept id="1144101972840" name="jetbrains.mps.lang.smodel.structure.OperationParm_Concept" flags="ng" index="1xMEDy">
        <child id="1207343664468" name="conceptArgument" index="ri$Ld" />
      </concept>
      <concept id="1138055754698" name="jetbrains.mps.lang.smodel.structure.SNodeType" flags="in" index="3Tqbb2">
        <reference id="1138405853777" name="concept" index="ehGHo" />
      </concept>
      <concept id="1138056022639" name="jetbrains.mps.lang.smodel.structure.SPropertyAccess" flags="nn" index="3TrcHB">
        <reference id="1138056395725" name="property" index="3TsBF5" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
    <language id="83888646-71ce-4f1c-9c53-c54016f6ad4f" name="jetbrains.mps.baseLanguage.collections">
      <concept id="1204796164442" name="jetbrains.mps.baseLanguage.collections.structure.InternalSequenceOperation" flags="nn" index="23sCx2">
        <child id="1204796294226" name="closure" index="23t8la" />
      </concept>
      <concept id="1225727723840" name="jetbrains.mps.baseLanguage.collections.structure.FindFirstOperation" flags="nn" index="1z4cxt" />
    </language>
  </registry>
  <node concept="13h7C7" id="2NkZbYeubXp">
    <ref role="13h7C2" to="oyym:G39ofDDj5m" resolve="NewTree" />
    <node concept="13i0hz" id="2NkZbYeucg$" role="13h7CS">
      <property role="TrG5h" value="itemByID" />
      <node concept="3Tm1VV" id="2NkZbYeucg_" role="1B3o_S" />
      <node concept="3Tqbb2" id="2NkZbYeuczq" role="3clF45">
        <ref role="ehGHo" to="oyym:2NkZbYerWzG" resolve="NewTreeItem" />
      </node>
      <node concept="3clFbS" id="2NkZbYeucgB" role="3clF47">
        <node concept="3clFbF" id="2NkZbYeueT8" role="3cqZAp">
          <node concept="2OqwBi" id="2NkZbYeuk26" role="3clFbG">
            <node concept="2OqwBi" id="2NkZbYeuf5h" role="2Oq$k0">
              <node concept="13iPFW" id="2NkZbYeueT7" role="2Oq$k0" />
              <node concept="2Rf3mk" id="2NkZbYeufx6" role="2OqNvi">
                <node concept="1xMEDy" id="2NkZbYeufx8" role="1xVPHs">
                  <node concept="chp4Y" id="2NkZbYeug93" role="ri$Ld">
                    <ref role="cht4Q" to="oyym:2NkZbYerWzG" resolve="NewTreeItem" />
                  </node>
                </node>
              </node>
            </node>
            <node concept="1z4cxt" id="2NkZbYeum8D" role="2OqNvi">
              <node concept="1bVj0M" id="2NkZbYeum8F" role="23t8la">
                <node concept="3clFbS" id="2NkZbYeum8G" role="1bW5cS">
                  <node concept="3clFbF" id="2NkZbYeumwZ" role="3cqZAp">
                    <node concept="17R0WA" id="2NkZbYeur3H" role="3clFbG">
                      <node concept="37vLTw" id="2NkZbYeurrr" role="3uHU7w">
                        <ref role="3cqZAo" node="2NkZbYeudIl" resolve="id" />
                      </node>
                      <node concept="2OqwBi" id="2NkZbYeumLt" role="3uHU7B">
                        <node concept="37vLTw" id="2NkZbYeumwY" role="2Oq$k0">
                          <ref role="3cqZAo" node="2NkZbYeum8H" resolve="it" />
                        </node>
                        <node concept="2qgKlT" id="6r1E9h1uO9H" role="2OqNvi">
                          <ref role="37wK5l" node="6r1E9h1u$O_" resolve="id" />
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="gl6BB" id="2NkZbYeum8H" role="1bW2Oz">
                  <property role="TrG5h" value="it" />
                  <node concept="2jxLKc" id="2NkZbYeum8I" role="1tU5fm" />
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
      <node concept="37vLTG" id="2NkZbYeudIl" role="3clF46">
        <property role="TrG5h" value="id" />
        <node concept="17QB3L" id="2NkZbYeudIk" role="1tU5fm" />
      </node>
    </node>
    <node concept="13hLZK" id="2NkZbYeubXq" role="13h7CW">
      <node concept="3clFbS" id="2NkZbYeubXr" role="2VODD2" />
    </node>
  </node>
  <node concept="13h7C7" id="6r1E9h1u$xK">
    <ref role="13h7C2" to="oyym:2NkZbYerWzG" resolve="NewTreeItem" />
    <node concept="13i0hz" id="6r1E9h1u$O_" role="13h7CS">
      <property role="TrG5h" value="id" />
      <node concept="3Tm1VV" id="6r1E9h1u$OA" role="1B3o_S" />
      <node concept="17QB3L" id="6r1E9h1u_7r" role="3clF45" />
      <node concept="3clFbS" id="6r1E9h1u$OC" role="3clF47">
        <node concept="3clFbF" id="6r1E9h1A$lo" role="3cqZAp">
          <node concept="2OqwBi" id="6r1E9h1ABXk" role="3clFbG">
            <node concept="2OqwBi" id="6r1E9h1AAPi" role="2Oq$k0">
              <node concept="2JrnkZ" id="6r1E9h1AAzR" role="2Oq$k0">
                <node concept="13iPFW" id="6r1E9h1A$lm" role="2JrQYb" />
              </node>
              <node concept="liA8E" id="6r1E9h1ABiK" role="2OqNvi">
                <ref role="37wK5l" to="mhbf:~SNode.getNodeId()" resolve="getNodeId" />
              </node>
            </node>
            <node concept="liA8E" id="6r1E9h1ACz3" role="2OqNvi">
              <ref role="37wK5l" to="wyt6:~Object.toString()" resolve="toString" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="13i0hz" id="6r1E9h1uLsU" role="13h7CS">
      <property role="TrG5h" value="label" />
      <node concept="3Tm1VV" id="6r1E9h1uLsV" role="1B3o_S" />
      <node concept="17QB3L" id="6r1E9h1uLsW" role="3clF45" />
      <node concept="3clFbS" id="6r1E9h1uLsX" role="3clF47">
        <node concept="3clFbF" id="2iVdnDeMyk1" role="3cqZAp">
          <node concept="3cpWs3" id="2iVdnDeMFSJ" role="3clFbG">
            <node concept="2OqwBi" id="2iVdnDeMGTk" role="3uHU7w">
              <node concept="13iPFW" id="2iVdnDeMGd9" role="2Oq$k0" />
              <node concept="3TrcHB" id="2iVdnDeMHn0" role="2OqNvi">
                <ref role="3TsBF5" to="oyym:2NkZbYerY0J" resolve="b" />
              </node>
            </node>
            <node concept="3cpWs3" id="2iVdnDeMEkA" role="3uHU7B">
              <node concept="3cpWs3" id="2iVdnDeMCdp" role="3uHU7B">
                <node concept="3cpWs3" id="2iVdnDeM$ls" role="3uHU7B">
                  <node concept="2OqwBi" id="2iVdnDeMywa" role="3uHU7B">
                    <node concept="13iPFW" id="2iVdnDeMyjY" role="2Oq$k0" />
                    <node concept="3TrcHB" id="2iVdnDeMyWn" role="2OqNvi">
                      <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
                    </node>
                  </node>
                  <node concept="Xl_RD" id="2iVdnDeM$lv" role="3uHU7w">
                    <property role="Xl_RC" value="-" />
                  </node>
                </node>
                <node concept="2OqwBi" id="2iVdnDeMC_R" role="3uHU7w">
                  <node concept="13iPFW" id="2iVdnDeMCds" role="2Oq$k0" />
                  <node concept="3TrcHB" id="2iVdnDeMD43" role="2OqNvi">
                    <ref role="3TsBF5" to="oyym:2NkZbYerXrE" resolve="a" />
                  </node>
                </node>
              </node>
              <node concept="Xl_RD" id="2iVdnDeMEkD" role="3uHU7w">
                <property role="Xl_RC" value="-" />
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="13hLZK" id="6r1E9h1u$xL" role="13h7CW">
      <node concept="3clFbS" id="6r1E9h1u$xM" role="2VODD2" />
    </node>
  </node>
</model>

