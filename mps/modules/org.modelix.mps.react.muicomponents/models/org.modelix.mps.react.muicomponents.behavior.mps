<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:2c5a8407-fd65-4ea4-b95e-a8f8fee129c0(org.modelix.mps.react.muicomponents.behavior)">
  <persistence version="9" />
  <languages>
    <use id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel" version="19" />
    <use id="af65afd8-f0dd-4942-87d9-63a55f2a9db1" name="jetbrains.mps.lang.behavior" version="2" />
    <devkit ref="fbc25dd2-5da4-483a-8b19-70928e1b62d7(jetbrains.mps.devkit.general-purpose)" />
  </languages>
  <imports>
    <import index="zaxg" ref="r:c4183f14-1033-4ade-be7c-1beadb184134(org.modelix.mps.react.muicomponents.structure)" />
    <import index="tpee" ref="r:00000000-0000-4000-0000-011c895902ca(jetbrains.mps.baseLanguage.structure)" implicit="true" />
    <import index="8xo1" ref="r:41b64586-29ed-47f5-b907-44be07261bbc(org.modelix.mps.react.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="af65afd8-f0dd-4942-87d9-63a55f2a9db1" name="jetbrains.mps.lang.behavior">
      <concept id="1225194240794" name="jetbrains.mps.lang.behavior.structure.ConceptBehavior" flags="ng" index="13h7C7">
        <reference id="1225194240799" name="concept" index="13h7C2" />
        <child id="1225194240805" name="method" index="13h7CS" />
        <child id="1225194240801" name="constructor" index="13h7CW" />
      </concept>
      <concept id="1225194413805" name="jetbrains.mps.lang.behavior.structure.ConceptConstructorDeclaration" flags="in" index="13hLZK" />
      <concept id="1225194472830" name="jetbrains.mps.lang.behavior.structure.ConceptMethodDeclaration" flags="ng" index="13i0hz">
        <property id="1225194472832" name="isVirtual" index="13i0it" />
        <property id="1225194472834" name="isAbstract" index="13i0iv" />
        <reference id="1225194472831" name="overriddenMethod" index="13i0hy" />
      </concept>
      <concept id="1225194691553" name="jetbrains.mps.lang.behavior.structure.ThisNodeExpression" flags="nn" index="13iPFW" />
    </language>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1215693861676" name="jetbrains.mps.baseLanguage.structure.BaseAssignmentExpression" flags="nn" index="d038R">
        <child id="1068498886297" name="rValue" index="37vLTx" />
        <child id="1068498886295" name="lValue" index="37vLTJ" />
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
      <concept id="1070534644030" name="jetbrains.mps.baseLanguage.structure.BooleanType" flags="in" index="10P_77" />
      <concept id="1068431474542" name="jetbrains.mps.baseLanguage.structure.VariableDeclaration" flags="ng" index="33uBYm">
        <child id="1068431790190" name="initializer" index="33vP2m" />
      </concept>
      <concept id="1068498886296" name="jetbrains.mps.baseLanguage.structure.VariableReference" flags="nn" index="37vLTw">
        <reference id="1068581517664" name="variableDeclaration" index="3cqZAo" />
      </concept>
      <concept id="1068498886292" name="jetbrains.mps.baseLanguage.structure.ParameterDeclaration" flags="ir" index="37vLTG" />
      <concept id="1068498886294" name="jetbrains.mps.baseLanguage.structure.AssignmentExpression" flags="nn" index="37vLTI" />
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
      <concept id="1068580320020" name="jetbrains.mps.baseLanguage.structure.IntegerConstant" flags="nn" index="3cmrfG">
        <property id="1068580320021" name="value" index="3cmrfH" />
      </concept>
      <concept id="1068581242864" name="jetbrains.mps.baseLanguage.structure.LocalVariableDeclarationStatement" flags="nn" index="3cpWs8">
        <child id="1068581242865" name="localVariableDeclaration" index="3cpWs9" />
      </concept>
      <concept id="1068581242863" name="jetbrains.mps.baseLanguage.structure.LocalVariableDeclaration" flags="nr" index="3cpWsn" />
      <concept id="1081506762703" name="jetbrains.mps.baseLanguage.structure.GreaterThanExpression" flags="nn" index="3eOSWO" />
      <concept id="1081773326031" name="jetbrains.mps.baseLanguage.structure.BinaryOperation" flags="nn" index="3uHJSO">
        <child id="1081773367579" name="rightExpression" index="3uHU7w" />
        <child id="1081773367580" name="leftExpression" index="3uHU7B" />
      </concept>
      <concept id="1178549954367" name="jetbrains.mps.baseLanguage.structure.IVisible" flags="ngI" index="1B3ioH">
        <child id="1178549979242" name="visibility" index="1B3o_S" />
      </concept>
      <concept id="1146644602865" name="jetbrains.mps.baseLanguage.structure.PublicVisibility" flags="nn" index="3Tm1VV" />
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="4705942098322467729" name="jetbrains.mps.lang.smodel.structure.EnumMemberReference" flags="ng" index="21nZrQ">
        <reference id="4705942098322467736" name="decl" index="21nZrZ" />
      </concept>
      <concept id="1140725362528" name="jetbrains.mps.lang.smodel.structure.Link_SetTargetOperation" flags="nn" index="2oxUTD">
        <child id="1140725362529" name="linkTarget" index="2oxUTC" />
      </concept>
      <concept id="1138661924179" name="jetbrains.mps.lang.smodel.structure.Property_SetOperation" flags="nn" index="tyxLq">
        <child id="1138662048170" name="value" index="tz02z" />
      </concept>
      <concept id="1138757581985" name="jetbrains.mps.lang.smodel.structure.Link_SetNewChildOperation" flags="nn" index="zfrQC" />
      <concept id="1138055754698" name="jetbrains.mps.lang.smodel.structure.SNodeType" flags="in" index="3Tqbb2">
        <reference id="1138405853777" name="concept" index="ehGHo" />
      </concept>
      <concept id="1138056022639" name="jetbrains.mps.lang.smodel.structure.SPropertyAccess" flags="nn" index="3TrcHB">
        <reference id="1138056395725" name="property" index="3TsBF5" />
      </concept>
      <concept id="1138056143562" name="jetbrains.mps.lang.smodel.structure.SLinkAccess" flags="nn" index="3TrEf2">
        <reference id="1138056516764" name="link" index="3Tt5mk" />
      </concept>
      <concept id="1138056282393" name="jetbrains.mps.lang.smodel.structure.SLinkListAccess" flags="nn" index="3Tsc0h">
        <reference id="1138056546658" name="link" index="3TtcxE" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
    <language id="83888646-71ce-4f1c-9c53-c54016f6ad4f" name="jetbrains.mps.baseLanguage.collections">
      <concept id="540871147943773365" name="jetbrains.mps.baseLanguage.collections.structure.SingleArgumentSequenceOperation" flags="nn" index="25WWJ4">
        <child id="540871147943773366" name="argument" index="25WWJ7" />
      </concept>
      <concept id="1160612413312" name="jetbrains.mps.baseLanguage.collections.structure.AddElementOperation" flags="nn" index="TSZUe" />
      <concept id="1162935959151" name="jetbrains.mps.baseLanguage.collections.structure.GetSizeOperation" flags="nn" index="34oBXx" />
    </language>
  </registry>
  <node concept="13h7C7" id="2vPZMAngLC_">
    <ref role="13h7C2" to="zaxg:2vPZMAneuaB" resolve="Command" />
    <node concept="13i0hz" id="2vPZMAngLCS" role="13h7CS">
      <property role="TrG5h" value="layoutMultiline" />
      <node concept="3Tm1VV" id="2vPZMAngLCT" role="1B3o_S" />
      <node concept="10P_77" id="2vPZMAngLDc" role="3clF45" />
      <node concept="3clFbS" id="2vPZMAngLCV" role="3clF47">
        <node concept="3clFbF" id="2vPZMAngLDZ" role="3cqZAp">
          <node concept="3eOSWO" id="2vPZMAngXHh" role="3clFbG">
            <node concept="3cmrfG" id="2vPZMAngXHk" role="3uHU7w">
              <property role="3cmrfH" value="1" />
            </node>
            <node concept="2OqwBi" id="2vPZMAngQxR" role="3uHU7B">
              <node concept="2OqwBi" id="2vPZMAngMfi" role="2Oq$k0">
                <node concept="2OqwBi" id="2vPZMAngLPe" role="2Oq$k0">
                  <node concept="13iPFW" id="2vPZMAngLDY" role="2Oq$k0" />
                  <node concept="3TrEf2" id="2vPZMAngLWU" role="2OqNvi">
                    <ref role="3Tt5mk" to="zaxg:2vPZMAneuaC" resolve="statements" />
                  </node>
                </node>
                <node concept="3Tsc0h" id="2vPZMAngMA_" role="2OqNvi">
                  <ref role="3TtcxE" to="tpee:fzcqZ_x" resolve="statement" />
                </node>
              </node>
              <node concept="34oBXx" id="2vPZMAngUw1" role="2OqNvi" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="13hLZK" id="2vPZMAngLCA" role="13h7CW">
      <node concept="3clFbS" id="2vPZMAngLCB" role="2VODD2" />
    </node>
  </node>
  <node concept="13h7C7" id="2vPZMAnsypS">
    <ref role="13h7C2" to="zaxg:2vPZMAnsypR" resolve="ICanWrap" />
    <node concept="13i0hz" id="2vPZMAnsyqb" role="13h7CS">
      <property role="13i0iv" value="true" />
      <property role="13i0it" value="true" />
      <property role="TrG5h" value="wrap" />
      <node concept="3Tm1VV" id="2vPZMAnsyqc" role="1B3o_S" />
      <node concept="3Tqbb2" id="2vPZMAnsyqv" role="3clF45">
        <ref role="ehGHo" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
      </node>
      <node concept="3clFbS" id="2vPZMAnsyqe" role="3clF47" />
      <node concept="37vLTG" id="2vPZMAnsyri" role="3clF46">
        <property role="TrG5h" value="wrapped" />
        <node concept="3Tqbb2" id="2vPZMAnsyrh" role="1tU5fm">
          <ref role="ehGHo" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
        </node>
      </node>
    </node>
    <node concept="13hLZK" id="2vPZMAnsypT" role="13h7CW">
      <node concept="3clFbS" id="2vPZMAnsypU" role="2VODD2" />
    </node>
  </node>
  <node concept="13h7C7" id="2vPZMAnsysh">
    <ref role="13h7C2" to="zaxg:2vPZMAnsysd" resolve="IContainerMultiComponent" />
    <node concept="13hLZK" id="2vPZMAnsysi" role="13h7CW">
      <node concept="3clFbS" id="2vPZMAnsysj" role="2VODD2" />
    </node>
    <node concept="13i0hz" id="2vPZMAnsys$" role="13h7CS">
      <property role="13i0it" value="true" />
      <property role="TrG5h" value="wrap" />
      <ref role="13i0hy" node="2vPZMAnsyqb" resolve="wrap" />
      <node concept="3clFbS" id="2vPZMAnsysB" role="3clF47">
        <node concept="3clFbF" id="2vPZMAnsytv" role="3cqZAp">
          <node concept="2OqwBi" id="2vPZMAns_qQ" role="3clFbG">
            <node concept="2OqwBi" id="2vPZMAnsyFd" role="2Oq$k0">
              <node concept="13iPFW" id="2vPZMAnsytu" role="2Oq$k0" />
              <node concept="3Tsc0h" id="2vPZMAnsyRH" role="2OqNvi">
                <ref role="3TtcxE" to="zaxg:2vPZMAmEVPK" resolve="children" />
              </node>
            </node>
            <node concept="TSZUe" id="2vPZMAnsDD_" role="2OqNvi">
              <node concept="37vLTw" id="2vPZMAnsDIp" role="25WWJ7">
                <ref role="3cqZAo" node="2vPZMAnsysS" resolve="wrapped" />
              </node>
            </node>
          </node>
        </node>
      </node>
      <node concept="37vLTG" id="2vPZMAnsysS" role="3clF46">
        <property role="TrG5h" value="wrapped" />
        <node concept="3Tqbb2" id="2vPZMAnsysT" role="1tU5fm">
          <ref role="ehGHo" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
        </node>
      </node>
      <node concept="3Tqbb2" id="2vPZMAnsysU" role="3clF45">
        <ref role="ehGHo" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
      </node>
      <node concept="3Tm1VV" id="2vPZMAnsysV" role="1B3o_S" />
    </node>
  </node>
  <node concept="13h7C7" id="2vPZMAn_p7C">
    <ref role="13h7C2" to="zaxg:2vPZMAmDmtP" resolve="Label" />
    <node concept="13hLZK" id="2vPZMAn_p7D" role="13h7CW">
      <node concept="3clFbS" id="2vPZMAn_p7E" role="2VODD2">
        <node concept="3clFbF" id="2vPZMAn_p7W" role="3cqZAp">
          <node concept="2OqwBi" id="2vPZMAn_pBw" role="3clFbG">
            <node concept="2OqwBi" id="2vPZMAn_piU" role="2Oq$k0">
              <node concept="13iPFW" id="2vPZMAn_p7V" role="2Oq$k0" />
              <node concept="3TrcHB" id="2vPZMAn_ptB" role="2OqNvi">
                <ref role="3TsBF5" to="zaxg:2vPZMAn_7No" resolve="style" />
              </node>
            </node>
            <node concept="tyxLq" id="2vPZMAn_pLg" role="2OqNvi">
              <node concept="21nZrQ" id="2vPZMAn_pLS" role="tz02z">
                <ref role="21nZrZ" to="zaxg:2vPZMAn_7Nm" resolve="plain" />
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="13h7C7" id="2vPZMAnEJvN">
    <ref role="13h7C2" to="zaxg:2vPZMAnBVdN" resolve="Accordion" />
    <node concept="13hLZK" id="2vPZMAnEJvO" role="13h7CW">
      <node concept="3clFbS" id="2vPZMAnEJvP" role="2VODD2">
        <node concept="3cpWs8" id="2vPZMAnEOb$" role="3cqZAp">
          <node concept="3cpWsn" id="2vPZMAnEOb_" role="3cpWs9">
            <property role="TrG5h" value="i" />
            <node concept="3Tqbb2" id="2vPZMAnEObg" role="1tU5fm">
              <ref role="ehGHo" to="zaxg:2vPZMAnBVdU" resolve="Icon" />
            </node>
            <node concept="2OqwBi" id="2vPZMAnEObA" role="33vP2m">
              <node concept="2OqwBi" id="2vPZMAnEObB" role="2Oq$k0">
                <node concept="13iPFW" id="2vPZMAnEObC" role="2Oq$k0" />
                <node concept="3TrEf2" id="2vPZMAnEObD" role="2OqNvi">
                  <ref role="3Tt5mk" to="zaxg:2vPZMAnEJvM" resolve="icon" />
                </node>
              </node>
              <node concept="zfrQC" id="2vPZMAnEObE" role="2OqNvi" />
            </node>
          </node>
        </node>
        <node concept="3clFbF" id="2vPZMAnENrp" role="3cqZAp">
          <node concept="37vLTI" id="2vPZMAnEPKJ" role="3clFbG">
            <node concept="2OqwBi" id="2vPZMAnEOo7" role="37vLTJ">
              <node concept="37vLTw" id="2vPZMAnEObF" role="2Oq$k0">
                <ref role="3cqZAo" node="2vPZMAnEOb_" resolve="i" />
              </node>
              <node concept="3TrcHB" id="2vPZMAnEOvQ" role="2OqNvi">
                <ref role="3TsBF5" to="zaxg:2vPZMAnBVdV" resolve="name" />
              </node>
            </node>
            <node concept="Xl_RD" id="2vPZMAnENhx" role="37vLTx">
              <property role="Xl_RC" value="mui.icons.ExpandMore" />
            </node>
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="13h7C7" id="2vPZMAnIaZk">
    <ref role="13h7C2" to="zaxg:2vPZMAnIaRU" resolve="IContainerSingleComponent" />
    <node concept="13i0hz" id="2vPZMAnIaZB" role="13h7CS">
      <property role="13i0it" value="true" />
      <property role="TrG5h" value="wrap" />
      <ref role="13i0hy" node="2vPZMAnsyqb" resolve="wrap" />
      <node concept="3clFbS" id="2vPZMAnIaZC" role="3clF47">
        <node concept="3clFbF" id="2vPZMAnIaZD" role="3cqZAp">
          <node concept="2OqwBi" id="2vPZMAnIaZE" role="3clFbG">
            <node concept="2OqwBi" id="2vPZMAnIaZF" role="2Oq$k0">
              <node concept="13iPFW" id="2vPZMAnIaZG" role="2Oq$k0" />
              <node concept="3TrEf2" id="2vPZMAnIbyh" role="2OqNvi">
                <ref role="3Tt5mk" to="zaxg:2vPZMAnIaRX" resolve="child" />
              </node>
            </node>
            <node concept="2oxUTD" id="2vPZMAnIc4u" role="2OqNvi">
              <node concept="37vLTw" id="2vPZMAnIc5L" role="2oxUTC">
                <ref role="3cqZAo" node="2vPZMAnIaZK" resolve="wrapped" />
              </node>
            </node>
          </node>
        </node>
      </node>
      <node concept="37vLTG" id="2vPZMAnIaZK" role="3clF46">
        <property role="TrG5h" value="wrapped" />
        <node concept="3Tqbb2" id="2vPZMAnIaZL" role="1tU5fm">
          <ref role="ehGHo" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
        </node>
      </node>
      <node concept="3Tqbb2" id="2vPZMAnIaZM" role="3clF45">
        <ref role="ehGHo" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
      </node>
      <node concept="3Tm1VV" id="2vPZMAnIaZN" role="1B3o_S" />
    </node>
    <node concept="13hLZK" id="2vPZMAnIaZl" role="13h7CW">
      <node concept="3clFbS" id="2vPZMAnIaZm" role="2VODD2" />
    </node>
  </node>
</model>

