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
    <import index="8xo1" ref="r:41b64586-29ed-47f5-b907-44be07261bbc(org.modelix.mps.react.structure)" />
    <import index="tpee" ref="r:00000000-0000-4000-0000-011c895902ca(jetbrains.mps.baseLanguage.structure)" />
    <import index="z60i" ref="6354ebe7-c22a-4a0f-ac54-50b52ab9b065/java:java.awt(JDK/)" />
    <import index="zdk4" ref="r:e8408387-58e6-408f-90ce-310136ba006d(org.modelix.mps.react.behavior)" implicit="true" />
    <import index="tp25" ref="r:00000000-0000-4000-0000-011c89590301(jetbrains.mps.lang.smodel.structure)" implicit="true" />
    <import index="wyt6" ref="6354ebe7-c22a-4a0f-ac54-50b52ab9b065/java:java.lang(JDK/)" implicit="true" />
  </imports>
  <registry>
    <language id="af65afd8-f0dd-4942-87d9-63a55f2a9db1" name="jetbrains.mps.lang.behavior">
      <concept id="6496299201655527393" name="jetbrains.mps.lang.behavior.structure.LocalBehaviorMethodCall" flags="nn" index="BsUDl" />
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
      <concept id="8118189177080264853" name="jetbrains.mps.baseLanguage.structure.AlternativeType" flags="ig" index="nSUau">
        <child id="8118189177080264854" name="alternative" index="nSUat" />
      </concept>
      <concept id="1154032098014" name="jetbrains.mps.baseLanguage.structure.AbstractLoopStatement" flags="nn" index="2LF5Ji">
        <child id="1154032183016" name="body" index="2LFqv$" />
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
      <concept id="1070475926800" name="jetbrains.mps.baseLanguage.structure.StringLiteral" flags="nn" index="Xl_RD">
        <property id="1070475926801" name="value" index="Xl_RC" />
      </concept>
      <concept id="4952749571008284462" name="jetbrains.mps.baseLanguage.structure.CatchVariable" flags="ng" index="XOnhg" />
      <concept id="1081236700937" name="jetbrains.mps.baseLanguage.structure.StaticMethodCall" flags="nn" index="2YIFZM">
        <reference id="1144433194310" name="classConcept" index="1Pybhc" />
      </concept>
      <concept id="1070533707846" name="jetbrains.mps.baseLanguage.structure.StaticFieldReference" flags="nn" index="10M0yZ">
        <reference id="1144433057691" name="classifier" index="1PxDUh" />
      </concept>
      <concept id="1070534058343" name="jetbrains.mps.baseLanguage.structure.NullLiteral" flags="nn" index="10Nm6u" />
      <concept id="1070534644030" name="jetbrains.mps.baseLanguage.structure.BooleanType" flags="in" index="10P_77" />
      <concept id="1068431474542" name="jetbrains.mps.baseLanguage.structure.VariableDeclaration" flags="ng" index="33uBYm">
        <child id="1068431790190" name="initializer" index="33vP2m" />
      </concept>
      <concept id="1068498886296" name="jetbrains.mps.baseLanguage.structure.VariableReference" flags="nn" index="37vLTw">
        <reference id="1068581517664" name="variableDeclaration" index="3cqZAo" />
      </concept>
      <concept id="1068498886292" name="jetbrains.mps.baseLanguage.structure.ParameterDeclaration" flags="ir" index="37vLTG" />
      <concept id="1068498886294" name="jetbrains.mps.baseLanguage.structure.AssignmentExpression" flags="nn" index="37vLTI" />
      <concept id="1225271177708" name="jetbrains.mps.baseLanguage.structure.StringType" flags="in" index="17QB3L" />
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
      <concept id="1068580123159" name="jetbrains.mps.baseLanguage.structure.IfStatement" flags="nn" index="3clFbJ">
        <child id="1068580123160" name="condition" index="3clFbw" />
        <child id="1068580123161" name="ifTrue" index="3clFbx" />
      </concept>
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
      <concept id="1068580320020" name="jetbrains.mps.baseLanguage.structure.IntegerConstant" flags="nn" index="3cmrfG">
        <property id="1068580320021" name="value" index="3cmrfH" />
      </concept>
      <concept id="1068581242875" name="jetbrains.mps.baseLanguage.structure.PlusExpression" flags="nn" index="3cpWs3" />
      <concept id="1068581242878" name="jetbrains.mps.baseLanguage.structure.ReturnStatement" flags="nn" index="3cpWs6">
        <child id="1068581517676" name="expression" index="3cqZAk" />
      </concept>
      <concept id="1068581242864" name="jetbrains.mps.baseLanguage.structure.LocalVariableDeclarationStatement" flags="nn" index="3cpWs8">
        <child id="1068581242865" name="localVariableDeclaration" index="3cpWs9" />
      </concept>
      <concept id="1068581242863" name="jetbrains.mps.baseLanguage.structure.LocalVariableDeclaration" flags="nr" index="3cpWsn" />
      <concept id="1081506762703" name="jetbrains.mps.baseLanguage.structure.GreaterThanExpression" flags="nn" index="3eOSWO" />
      <concept id="1204053956946" name="jetbrains.mps.baseLanguage.structure.IMethodCall" flags="ngI" index="1ndlxa">
        <reference id="1068499141037" name="baseMethodDeclaration" index="37wK5l" />
        <child id="1068499141038" name="actualArgument" index="37wK5m" />
      </concept>
      <concept id="1107535904670" name="jetbrains.mps.baseLanguage.structure.ClassifierType" flags="in" index="3uibUv">
        <reference id="1107535924139" name="classifier" index="3uigEE" />
      </concept>
      <concept id="1081773326031" name="jetbrains.mps.baseLanguage.structure.BinaryOperation" flags="nn" index="3uHJSO">
        <child id="1081773367579" name="rightExpression" index="3uHU7w" />
        <child id="1081773367580" name="leftExpression" index="3uHU7B" />
      </concept>
      <concept id="3093926081414150598" name="jetbrains.mps.baseLanguage.structure.MultipleCatchClause" flags="ng" index="3uVAMA">
        <child id="8276990574895933173" name="catchBody" index="1zc67A" />
        <child id="8276990574895933172" name="throwable" index="1zc67B" />
      </concept>
      <concept id="1073239437375" name="jetbrains.mps.baseLanguage.structure.NotEqualsExpression" flags="nn" index="3y3z36" />
      <concept id="1178549954367" name="jetbrains.mps.baseLanguage.structure.IVisible" flags="ngI" index="1B3ioH">
        <child id="1178549979242" name="visibility" index="1B3o_S" />
      </concept>
      <concept id="5351203823916750322" name="jetbrains.mps.baseLanguage.structure.TryUniversalStatement" flags="nn" index="3J1_TO">
        <child id="8276990574886367510" name="catchClause" index="1zxBo5" />
        <child id="8276990574886367508" name="body" index="1zxBo7" />
      </concept>
      <concept id="1146644602865" name="jetbrains.mps.baseLanguage.structure.PublicVisibility" flags="nn" index="3Tm1VV" />
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
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="4705942098322467729" name="jetbrains.mps.lang.smodel.structure.EnumMemberReference" flags="ng" index="21nZrQ">
        <reference id="4705942098322467736" name="decl" index="21nZrZ" />
      </concept>
      <concept id="1177026924588" name="jetbrains.mps.lang.smodel.structure.RefConcept_Reference" flags="nn" index="chp4Y">
        <reference id="1177026940964" name="conceptDeclaration" index="cht4Q" />
      </concept>
      <concept id="1138411891628" name="jetbrains.mps.lang.smodel.structure.SNodeOperation" flags="nn" index="eCIE_">
        <child id="1144104376918" name="parameter" index="1xVPHs" />
      </concept>
      <concept id="1140725362528" name="jetbrains.mps.lang.smodel.structure.Link_SetTargetOperation" flags="nn" index="2oxUTD">
        <child id="1140725362529" name="linkTarget" index="2oxUTC" />
      </concept>
      <concept id="1179409122411" name="jetbrains.mps.lang.smodel.structure.Node_ConceptMethodCall" flags="nn" index="2qgKlT" />
      <concept id="1138661924179" name="jetbrains.mps.lang.smodel.structure.Property_SetOperation" flags="nn" index="tyxLq">
        <child id="1138662048170" name="value" index="tz02z" />
      </concept>
      <concept id="1138757581985" name="jetbrains.mps.lang.smodel.structure.Link_SetNewChildOperation" flags="nn" index="zfrQC" />
      <concept id="1145383075378" name="jetbrains.mps.lang.smodel.structure.SNodeListType" flags="in" index="2I9FWS">
        <reference id="1145383142433" name="elementConcept" index="2I9WkF" />
      </concept>
      <concept id="1171305280644" name="jetbrains.mps.lang.smodel.structure.Node_GetDescendantsOperation" flags="nn" index="2Rf3mk" />
      <concept id="1145567426890" name="jetbrains.mps.lang.smodel.structure.SNodeListCreator" flags="nn" index="2T8Vx0">
        <child id="1145567471833" name="createdType" index="2T96Bj" />
      </concept>
      <concept id="1144101972840" name="jetbrains.mps.lang.smodel.structure.OperationParm_Concept" flags="ng" index="1xMEDy">
        <child id="1207343664468" name="conceptArgument" index="ri$Ld" />
      </concept>
      <concept id="1144146199828" name="jetbrains.mps.lang.smodel.structure.Node_CopyOperation" flags="nn" index="1$rogu" />
      <concept id="1140131837776" name="jetbrains.mps.lang.smodel.structure.Node_ReplaceWithAnotherOperation" flags="nn" index="1P9Npp">
        <child id="1140131861877" name="replacementNode" index="1P9ThW" />
      </concept>
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
      <concept id="1133920641626" name="jetbrains.mps.lang.core.structure.BaseConcept" flags="ng" index="2VYdi">
        <property id="1193676396447" name="virtualPackage" index="3GE5qa" />
      </concept>
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
    <language id="83888646-71ce-4f1c-9c53-c54016f6ad4f" name="jetbrains.mps.baseLanguage.collections">
      <concept id="540871147943773365" name="jetbrains.mps.baseLanguage.collections.structure.SingleArgumentSequenceOperation" flags="nn" index="25WWJ4">
        <child id="540871147943773366" name="argument" index="25WWJ7" />
      </concept>
      <concept id="1151689724996" name="jetbrains.mps.baseLanguage.collections.structure.SequenceType" flags="in" index="A3Dl8">
        <child id="1151689745422" name="elementType" index="A3Ik2" />
      </concept>
      <concept id="1153943597977" name="jetbrains.mps.baseLanguage.collections.structure.ForEachStatement" flags="nn" index="2Gpval">
        <child id="1153944400369" name="variable" index="2Gsz3X" />
        <child id="1153944424730" name="inputSequence" index="2GsD0m" />
      </concept>
      <concept id="1153944193378" name="jetbrains.mps.baseLanguage.collections.structure.ForEachVariable" flags="nr" index="2GrKxI" />
      <concept id="1153944233411" name="jetbrains.mps.baseLanguage.collections.structure.ForEachVariableReference" flags="nn" index="2GrUjf">
        <reference id="1153944258490" name="variable" index="2Gs0qQ" />
      </concept>
      <concept id="1160612413312" name="jetbrains.mps.baseLanguage.collections.structure.AddElementOperation" flags="nn" index="TSZUe" />
      <concept id="1162935959151" name="jetbrains.mps.baseLanguage.collections.structure.GetSizeOperation" flags="nn" index="34oBXx" />
    </language>
  </registry>
  <node concept="13h7C7" id="2vPZMAngLC_">
    <property role="3GE5qa" value="util" />
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
    <property role="3GE5qa" value="interfaces" />
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
    <node concept="13i0hz" id="G39ofCXoEe" role="13h7CS">
      <property role="13i0iv" value="true" />
      <property role="13i0it" value="true" />
      <property role="TrG5h" value="currentChildren" />
      <node concept="3Tm1VV" id="G39ofCXoEf" role="1B3o_S" />
      <node concept="A3Dl8" id="G39ofCXoX4" role="3clF45">
        <node concept="3Tqbb2" id="G39ofCXpfT" role="A3Ik2">
          <ref role="ehGHo" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
        </node>
      </node>
      <node concept="3clFbS" id="G39ofCXoEh" role="3clF47" />
    </node>
    <node concept="13hLZK" id="2vPZMAnsypT" role="13h7CW">
      <node concept="3clFbS" id="2vPZMAnsypU" role="2VODD2" />
    </node>
  </node>
  <node concept="13h7C7" id="2vPZMAnsysh">
    <property role="3GE5qa" value="interfaces" />
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
    <node concept="13i0hz" id="G39ofD11Wd" role="13h7CS">
      <property role="13i0it" value="true" />
      <property role="TrG5h" value="currentChildren" />
      <ref role="13i0hy" node="G39ofCXoEe" resolve="currentChildren" />
      <node concept="3clFbS" id="G39ofD11Wg" role="3clF47">
        <node concept="3cpWs6" id="G39ofD12DC" role="3cqZAp">
          <node concept="2OqwBi" id="G39ofD12P$" role="3cqZAk">
            <node concept="13iPFW" id="G39ofD12DK" role="2Oq$k0" />
            <node concept="3Tsc0h" id="G39ofD13kK" role="2OqNvi">
              <ref role="3TtcxE" to="zaxg:2vPZMAmEVPK" resolve="children" />
            </node>
          </node>
        </node>
      </node>
      <node concept="A3Dl8" id="G39ofD12j4" role="3clF45">
        <node concept="3Tqbb2" id="G39ofD12j5" role="A3Ik2">
          <ref role="ehGHo" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
        </node>
      </node>
      <node concept="3Tm1VV" id="G39ofD12j6" role="1B3o_S" />
    </node>
  </node>
  <node concept="13h7C7" id="2vPZMAn_p7C">
    <ref role="13h7C2" to="zaxg:2vPZMAmDmtP" resolve="Label" />
    <node concept="13hLZK" id="2vPZMAn_p7D" role="13h7CW">
      <node concept="3clFbS" id="2vPZMAn_p7E" role="2VODD2">
        <node concept="3clFbF" id="G39ofC8M45" role="3cqZAp">
          <node concept="2OqwBi" id="G39ofC8Odu" role="3clFbG">
            <node concept="2OqwBi" id="G39ofC8Mfl" role="2Oq$k0">
              <node concept="13iPFW" id="G39ofC8M43" role="2Oq$k0" />
              <node concept="3TrEf2" id="G39ofC8O3p" role="2OqNvi">
                <ref role="3Tt5mk" to="zaxg:G39ofC8uZm" resolve="typography" />
              </node>
            </node>
            <node concept="zfrQC" id="G39ofC8On2" role="2OqNvi" />
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
    <property role="3GE5qa" value="interfaces" />
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
    <node concept="13i0hz" id="G39ofD13GV" role="13h7CS">
      <property role="13i0it" value="true" />
      <property role="TrG5h" value="currentChildren" />
      <ref role="13i0hy" node="G39ofCXoEe" resolve="currentChildren" />
      <node concept="3clFbS" id="G39ofD13GY" role="3clF47">
        <node concept="3cpWs8" id="G39ofD1d0$" role="3cqZAp">
          <node concept="3cpWsn" id="G39ofD1d0_" role="3cpWs9">
            <property role="TrG5h" value="l" />
            <node concept="2I9FWS" id="G39ofD1cHy" role="1tU5fm">
              <ref role="2I9WkF" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
            </node>
            <node concept="2ShNRf" id="G39ofD1d0A" role="33vP2m">
              <node concept="2T8Vx0" id="G39ofD1d0B" role="2ShVmc">
                <node concept="2I9FWS" id="G39ofD1d0C" role="2T96Bj">
                  <ref role="2I9WkF" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
                </node>
              </node>
            </node>
          </node>
        </node>
        <node concept="3clFbJ" id="G39ofD19Q5" role="3cqZAp">
          <node concept="3clFbS" id="G39ofD19Q7" role="3clFbx">
            <node concept="3clFbF" id="G39ofD1elT" role="3cqZAp">
              <node concept="2OqwBi" id="G39ofD1gz$" role="3clFbG">
                <node concept="37vLTw" id="G39ofD1elR" role="2Oq$k0">
                  <ref role="3cqZAo" node="G39ofD1d0_" resolve="l" />
                </node>
                <node concept="TSZUe" id="G39ofD1ifR" role="2OqNvi">
                  <node concept="2OqwBi" id="G39ofD1iVp" role="25WWJ7">
                    <node concept="13iPFW" id="G39ofD1iCA" role="2Oq$k0" />
                    <node concept="3TrEf2" id="G39ofD1jGY" role="2OqNvi">
                      <ref role="3Tt5mk" to="zaxg:2vPZMAnIaRX" resolve="child" />
                    </node>
                  </node>
                </node>
              </node>
            </node>
          </node>
          <node concept="3y3z36" id="G39ofD6EWj" role="3clFbw">
            <node concept="2OqwBi" id="G39ofD1a0i" role="3uHU7B">
              <node concept="13iPFW" id="G39ofD19Qa" role="2Oq$k0" />
              <node concept="3TrEf2" id="G39ofD1aw7" role="2OqNvi">
                <ref role="3Tt5mk" to="zaxg:2vPZMAnIaRX" resolve="child" />
              </node>
            </node>
            <node concept="10Nm6u" id="G39ofD1byI" role="3uHU7w" />
          </node>
        </node>
        <node concept="3cpWs6" id="G39ofD1bQc" role="3cqZAp">
          <node concept="37vLTw" id="G39ofD1d0D" role="3cqZAk">
            <ref role="3cqZAo" node="G39ofD1d0_" resolve="l" />
          </node>
        </node>
      </node>
      <node concept="A3Dl8" id="G39ofD1412" role="3clF45">
        <node concept="3Tqbb2" id="G39ofD1413" role="A3Ik2">
          <ref role="ehGHo" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
        </node>
      </node>
      <node concept="3Tm1VV" id="G39ofD1414" role="1B3o_S" />
    </node>
    <node concept="13hLZK" id="2vPZMAnIaZl" role="13h7CW">
      <node concept="3clFbS" id="2vPZMAnIaZm" role="2VODD2" />
    </node>
  </node>
  <node concept="13h7C7" id="2vPZMAnZU_y">
    <ref role="13h7C2" to="zaxg:2vPZMAnZ0ck" resolve="State" />
    <node concept="13hLZK" id="2vPZMAnZU_z" role="13h7CW">
      <node concept="3clFbS" id="2vPZMAnZU_$" role="2VODD2" />
    </node>
    <node concept="13i0hz" id="2vPZMAnZU_P" role="13h7CS">
      <property role="TrG5h" value="stateVariables" />
      <ref role="13i0hy" to="zdk4:2vPZMAnZU19" resolve="stateVariables" />
      <node concept="3Tm1VV" id="2vPZMAnZU_Q" role="1B3o_S" />
      <node concept="3clFbS" id="2vPZMAnZU_U" role="3clF47">
        <node concept="3clFbF" id="2vPZMAnZUAe" role="3cqZAp">
          <node concept="2OqwBi" id="2vPZMAnZURc" role="3clFbG">
            <node concept="13iPFW" id="2vPZMAnZUAd" role="2Oq$k0" />
            <node concept="3Tsc0h" id="2vPZMAo5Ex$" role="2OqNvi">
              <ref role="3TtcxE" to="zaxg:2vPZMAnZ0cp" resolve="variables" />
            </node>
          </node>
        </node>
      </node>
      <node concept="A3Dl8" id="2vPZMAnZU_V" role="3clF45">
        <node concept="3Tqbb2" id="2vPZMAnZU_W" role="A3Ik2">
          <ref role="ehGHo" to="8xo1:4Dhs5NildkH" resolve="StateVariable" />
        </node>
      </node>
    </node>
  </node>
  <node concept="13h7C7" id="2vPZMAory6T">
    <ref role="13h7C2" to="zaxg:2vPZMAolrZd" resolve="ShowAndEdit" />
    <node concept="13hLZK" id="2vPZMAory6U" role="13h7CW">
      <node concept="3clFbS" id="2vPZMAory6V" role="2VODD2" />
    </node>
    <node concept="13i0hz" id="2vPZMAory7c" role="13h7CS">
      <property role="TrG5h" value="readonlyVersion" />
      <node concept="3Tm1VV" id="2vPZMAory7d" role="1B3o_S" />
      <node concept="3clFbS" id="2vPZMAory7f" role="3clF47">
        <node concept="3cpWs8" id="2vPZMAorEfe" role="3cqZAp">
          <node concept="3cpWsn" id="2vPZMAorEff" role="3cpWs9">
            <property role="TrG5h" value="copiedChild" />
            <node concept="3Tqbb2" id="2vPZMAorEeF" role="1tU5fm">
              <ref role="ehGHo" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
            </node>
            <node concept="2OqwBi" id="2vPZMAorEfg" role="33vP2m">
              <node concept="2OqwBi" id="2vPZMAorEfh" role="2Oq$k0">
                <node concept="13iPFW" id="2vPZMAorEfi" role="2Oq$k0" />
                <node concept="3TrEf2" id="2vPZMAorEfj" role="2OqNvi">
                  <ref role="3Tt5mk" to="zaxg:2vPZMAnIaRX" resolve="child" />
                </node>
              </node>
              <node concept="1$rogu" id="2vPZMAorEfk" role="2OqNvi" />
            </node>
          </node>
        </node>
        <node concept="2Gpval" id="2vPZMAorC0K" role="3cqZAp">
          <node concept="2GrKxI" id="2vPZMAorC0M" role="2Gsz3X">
            <property role="TrG5h" value="w" />
          </node>
          <node concept="2OqwBi" id="2vPZMAorCI3" role="2GsD0m">
            <node concept="37vLTw" id="2vPZMAorC6Y" role="2Oq$k0">
              <ref role="3cqZAo" node="2vPZMAorEff" resolve="copiedChild" />
            </node>
            <node concept="2Rf3mk" id="2vPZMAorEtt" role="2OqNvi">
              <node concept="1xMEDy" id="2vPZMAorEtv" role="1xVPHs">
                <node concept="chp4Y" id="2vPZMAorEw0" role="ri$Ld">
                  <ref role="cht4Q" to="zaxg:2vPZMAolc2A" resolve="IWidget" />
                </node>
              </node>
            </node>
          </node>
          <node concept="3clFbS" id="2vPZMAorC0Q" role="2LFqv$">
            <node concept="3cpWs8" id="2vPZMAoujQ9" role="3cqZAp">
              <node concept="3cpWsn" id="2vPZMAoujQa" role="3cpWs9">
                <property role="TrG5h" value="value" />
                <node concept="3Tqbb2" id="2vPZMAoujLs" role="1tU5fm">
                  <ref role="ehGHo" to="tpee:fz3vP1J" resolve="Expression" />
                </node>
                <node concept="2OqwBi" id="2vPZMAoujQb" role="33vP2m">
                  <node concept="2OqwBi" id="2vPZMAoujQc" role="2Oq$k0">
                    <node concept="2GrUjf" id="2vPZMAoujQd" role="2Oq$k0">
                      <ref role="2Gs0qQ" node="2vPZMAorC0M" resolve="w" />
                    </node>
                    <node concept="3TrEf2" id="2vPZMAoujQe" role="2OqNvi">
                      <ref role="3Tt5mk" to="zaxg:2vPZMAmvsgs" resolve="data" />
                    </node>
                  </node>
                  <node concept="2qgKlT" id="2vPZMAoujQf" role="2OqNvi">
                    <ref role="37wK5l" node="2vPZMAoudvY" resolve="dataReadExpression" />
                  </node>
                </node>
              </node>
            </node>
            <node concept="3clFbF" id="2vPZMAouk2B" role="3cqZAp">
              <node concept="2OqwBi" id="2vPZMAoukgT" role="3clFbG">
                <node concept="2GrUjf" id="2vPZMAouk2_" role="2Oq$k0">
                  <ref role="2Gs0qQ" node="2vPZMAorC0M" resolve="w" />
                </node>
                <node concept="1P9Npp" id="2vPZMAoukC6" role="2OqNvi">
                  <node concept="2pJPEk" id="2vPZMAoukFr" role="1P9ThW">
                    <node concept="2pJPED" id="2vPZMAoBY$Z" role="2pJPEn">
                      <ref role="2pJxaS" to="zaxg:2vPZMAnIaRS" resolve="Box" />
                      <node concept="2pIpSj" id="2vPZMAoBYCq" role="2pJxcM">
                        <ref role="2pIpSl" to="zaxg:2vPZMAnIaRX" resolve="child" />
                        <node concept="2pJPED" id="2vPZMAoukFt" role="28nt2d">
                          <ref role="2pJxaS" to="zaxg:2vPZMAmDmtP" resolve="Label" />
                          <node concept="2pIpSj" id="2vPZMAoukMa" role="2pJxcM">
                            <ref role="2pIpSl" to="zaxg:2vPZMAmDsnU" resolve="value" />
                            <node concept="36biLy" id="2vPZMAoukPw" role="28nt2d">
                              <node concept="37vLTw" id="2vPZMAoukSM" role="36biLW">
                                <ref role="3cqZAo" node="2vPZMAoujQa" resolve="value" />
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
          </node>
        </node>
        <node concept="3clFbF" id="2vPZMAorECC" role="3cqZAp">
          <node concept="37vLTw" id="2vPZMAorECA" role="3clFbG">
            <ref role="3cqZAo" node="2vPZMAorEff" resolve="copiedChild" />
          </node>
        </node>
      </node>
      <node concept="3Tqbb2" id="2vPZMAory7N" role="3clF45">
        <ref role="ehGHo" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
      </node>
    </node>
  </node>
  <node concept="13h7C7" id="2vPZMAoudvF">
    <property role="3GE5qa" value="util" />
    <ref role="13h7C2" to="zaxg:2vPZMAmvsgl" resolve="NodePropRef" />
    <node concept="13i0hz" id="2vPZMAoudvY" role="13h7CS">
      <property role="TrG5h" value="dataReadExpression" />
      <node concept="3Tm1VV" id="2vPZMAoudvZ" role="1B3o_S" />
      <node concept="3Tqbb2" id="2vPZMAoudwi" role="3clF45">
        <ref role="ehGHo" to="tpee:fz3vP1J" resolve="Expression" />
      </node>
      <node concept="3clFbS" id="2vPZMAoudw1" role="3clF47">
        <node concept="3clFbF" id="2vPZMAoudyA" role="3cqZAp">
          <node concept="2pJPEk" id="2vPZMAoudy$" role="3clFbG">
            <node concept="2pJPED" id="2vPZMAoudy_" role="2pJPEn">
              <ref role="2pJxaS" to="tpee:hqOqwz4" resolve="DotExpression" />
              <node concept="2pIpSj" id="2vPZMAoud_S" role="2pJxcM">
                <ref role="2pIpSl" to="tpee:hqOq$gm" resolve="operand" />
                <node concept="36biLy" id="2vPZMAoudAl" role="28nt2d">
                  <node concept="2OqwBi" id="2vPZMAouenv" role="36biLW">
                    <node concept="2OqwBi" id="2vPZMAoue76" role="2Oq$k0">
                      <node concept="13iPFW" id="2vPZMAoudAQ" role="2Oq$k0" />
                      <node concept="3TrEf2" id="2vPZMAoueeX" role="2OqNvi">
                        <ref role="3Tt5mk" to="zaxg:2vPZMAmvsgm" resolve="node" />
                      </node>
                    </node>
                    <node concept="1$rogu" id="2vPZMAoueGw" role="2OqNvi" />
                  </node>
                </node>
              </node>
              <node concept="2pIpSj" id="2vPZMAoueMR" role="2pJxcM">
                <ref role="2pIpSl" to="tpee:hqOqNr4" resolve="operation" />
                <node concept="2pJPED" id="2vPZMAoui$x" role="28nt2d">
                  <ref role="2pJxaS" to="tp25:gzTrcDJ" resolve="SPropertyAccess" />
                  <node concept="2pIpSj" id="2vPZMAoui_n" role="2pJxcM">
                    <ref role="2pIpSl" to="tp25:gzTsBJd" resolve="property" />
                    <node concept="36biLy" id="2vPZMAouiCq" role="28nt2d">
                      <node concept="2OqwBi" id="2vPZMAouiPG" role="36biLW">
                        <node concept="13iPFW" id="2vPZMAouiDk" role="2Oq$k0" />
                        <node concept="3TrEf2" id="2vPZMAouiYU" role="2OqNvi">
                          <ref role="3Tt5mk" to="zaxg:2vPZMAmvsgn" resolve="property" />
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
    </node>
    <node concept="13hLZK" id="2vPZMAoudvG" role="13h7CW">
      <node concept="3clFbS" id="2vPZMAoudvH" role="2VODD2" />
    </node>
  </node>
  <node concept="13h7C7" id="cqTc8J2fEv">
    <property role="3GE5qa" value="util" />
    <ref role="13h7C2" to="zaxg:2vPZMAmGCtk" resolve="LayoutVertical" />
    <node concept="13hLZK" id="cqTc8J2fEw" role="13h7CW">
      <node concept="3clFbS" id="cqTc8J2fEx" role="2VODD2">
        <node concept="3clFbF" id="cqTc8J2lz6" role="3cqZAp">
          <node concept="2OqwBi" id="cqTc8J2mEK" role="3clFbG">
            <node concept="2OqwBi" id="cqTc8J2lKy" role="2Oq$k0">
              <node concept="13iPFW" id="cqTc8J2lz4" role="2Oq$k0" />
              <node concept="3TrEf2" id="cqTc8J2mgN" role="2OqNvi">
                <ref role="3Tt5mk" to="zaxg:cqTc8J2l4k" resolve="align" />
              </node>
            </node>
            <node concept="zfrQC" id="cqTc8J2nog" role="2OqNvi" />
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="13h7C7" id="cqTc8J2nH6">
    <property role="3GE5qa" value="util" />
    <ref role="13h7C2" to="zaxg:cqTc8J2hYz" resolve="Alignment" />
    <node concept="13hLZK" id="cqTc8J2nH7" role="13h7CW">
      <node concept="3clFbS" id="cqTc8J2nH8" role="2VODD2">
        <node concept="3clFbF" id="cqTc8J2nHq" role="3cqZAp">
          <node concept="2OqwBi" id="cqTc8J2oFD" role="3clFbG">
            <node concept="2OqwBi" id="cqTc8J2nQO" role="2Oq$k0">
              <node concept="13iPFW" id="cqTc8J2nHp" role="2Oq$k0" />
              <node concept="3TrcHB" id="cqTc8J2nYw" role="2OqNvi">
                <ref role="3TsBF5" to="zaxg:cqTc8J2hY_" resolve="horizontal" />
              </node>
            </node>
            <node concept="tyxLq" id="cqTc8J2oN1" role="2OqNvi">
              <node concept="21nZrQ" id="cqTc8J2oPy" role="tz02z">
                <ref role="21nZrZ" to="zaxg:cqTc8J2hI8" resolve="left" />
              </node>
            </node>
          </node>
        </node>
        <node concept="3clFbF" id="cqTc8J2oQ8" role="3cqZAp">
          <node concept="2OqwBi" id="cqTc8J2oQ9" role="3clFbG">
            <node concept="2OqwBi" id="cqTc8J2oQa" role="2Oq$k0">
              <node concept="13iPFW" id="cqTc8J2oQb" role="2Oq$k0" />
              <node concept="3TrcHB" id="cqTc8J2oQc" role="2OqNvi">
                <ref role="3TsBF5" to="zaxg:cqTc8J2hY$" resolve="vertical" />
              </node>
            </node>
            <node concept="tyxLq" id="cqTc8J2oQd" role="2OqNvi">
              <node concept="21nZrQ" id="cqTc8J2oQe" role="tz02z">
                <ref role="21nZrZ" to="zaxg:cqTc8J1POm" resolve="top" />
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="13h7C7" id="cqTc8J2sWX">
    <property role="3GE5qa" value="util" />
    <ref role="13h7C2" to="zaxg:2vPZMAmEVPF" resolve="LayoutHorizontal" />
    <node concept="13hLZK" id="cqTc8J2sWY" role="13h7CW">
      <node concept="3clFbS" id="cqTc8J2sWZ" role="2VODD2">
        <node concept="3clFbF" id="cqTc8J2sXg" role="3cqZAp">
          <node concept="2OqwBi" id="cqTc8J2sXi" role="3clFbG">
            <node concept="2OqwBi" id="cqTc8J2sXj" role="2Oq$k0">
              <node concept="13iPFW" id="cqTc8J2sXk" role="2Oq$k0" />
              <node concept="3TrEf2" id="cqTc8J2sXl" role="2OqNvi">
                <ref role="3Tt5mk" to="zaxg:cqTc8J2sSH" resolve="align" />
              </node>
            </node>
            <node concept="zfrQC" id="cqTc8J2sXm" role="2OqNvi" />
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="13h7C7" id="G39ofC8Oo5">
    <property role="3GE5qa" value="util" />
    <ref role="13h7C2" to="zaxg:cqTc8Jo1wo" resolve="Typography" />
    <node concept="13hLZK" id="G39ofC8Oo6" role="13h7CW">
      <node concept="3clFbS" id="G39ofC8Oo7" role="2VODD2" />
    </node>
  </node>
  <node concept="13h7C7" id="G39ofCIEhF">
    <property role="3GE5qa" value="util" />
    <ref role="13h7C2" to="zaxg:cqTc8Jo1wp" resolve="Color" />
    <node concept="13i0hz" id="G39ofCIE$w" role="13h7CS">
      <property role="TrG5h" value="colorString" />
      <node concept="3Tm1VV" id="G39ofCIE$x" role="1B3o_S" />
      <node concept="17QB3L" id="G39ofCIERm" role="3clF45" />
      <node concept="3clFbS" id="G39ofCIE$z" role="3clF47">
        <node concept="3clFbF" id="G39ofCIFJv" role="3cqZAp">
          <node concept="3cpWs3" id="G39ofCIH$I" role="3clFbG">
            <node concept="2OqwBi" id="G39ofCIJ4r" role="3uHU7w">
              <node concept="13iPFW" id="G39ofCIItd" role="2Oq$k0" />
              <node concept="3TrcHB" id="G39ofCIJv4" role="2OqNvi">
                <ref role="3TsBF5" to="zaxg:cqTc8Jo1wq" resolve="value" />
              </node>
            </node>
            <node concept="Xl_RD" id="G39ofCIIah" role="3uHU7B">
              <property role="Xl_RC" value="#" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="13i0hz" id="G39ofCILfK" role="13h7CS">
      <property role="TrG5h" value="color" />
      <node concept="3Tm1VV" id="G39ofCILfL" role="1B3o_S" />
      <node concept="3uibUv" id="G39ofCILQW" role="3clF45">
        <ref role="3uigEE" to="z60i:~Color" resolve="Color" />
      </node>
      <node concept="3clFbS" id="G39ofCILfN" role="3clF47">
        <node concept="3J1_TO" id="G39ofCIOZU" role="3cqZAp">
          <node concept="3uVAMA" id="G39ofCIQuZ" role="1zxBo5">
            <node concept="XOnhg" id="G39ofCIQv0" role="1zc67B">
              <property role="TrG5h" value="t" />
              <node concept="nSUau" id="G39ofCIQv1" role="1tU5fm">
                <node concept="3uibUv" id="G39ofCIQMg" role="nSUat">
                  <ref role="3uigEE" to="wyt6:~Throwable" resolve="Throwable" />
                </node>
              </node>
            </node>
            <node concept="3clFbS" id="G39ofCIQv2" role="1zc67A">
              <node concept="3cpWs6" id="G39ofCIRoZ" role="3cqZAp">
                <node concept="10M0yZ" id="G39ofCIRYU" role="3cqZAk">
                  <ref role="3cqZAo" to="z60i:~Color.black" resolve="black" />
                  <ref role="1PxDUh" to="z60i:~Color" resolve="Color" />
                </node>
              </node>
            </node>
          </node>
          <node concept="3clFbS" id="G39ofCIOZW" role="1zxBo7">
            <node concept="3cpWs6" id="G39ofCIPj8" role="3cqZAp">
              <node concept="2YIFZM" id="G39ofCIPja" role="3cqZAk">
                <ref role="37wK5l" to="z60i:~Color.decode(java.lang.String)" resolve="decode" />
                <ref role="1Pybhc" to="z60i:~Color" resolve="Color" />
                <node concept="BsUDl" id="G39ofCIPjb" role="37wK5m">
                  <ref role="37wK5l" node="G39ofCIE$w" resolve="colorString" />
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="13hLZK" id="G39ofCIEhG" role="13h7CW">
      <node concept="3clFbS" id="G39ofCIEhH" role="2VODD2" />
    </node>
  </node>
</model>

