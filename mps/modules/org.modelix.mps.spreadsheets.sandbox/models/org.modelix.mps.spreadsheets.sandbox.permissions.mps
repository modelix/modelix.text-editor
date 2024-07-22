<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:0504f20b-ce68-45b3-9a7e-3b50c057323a(org.modelix.mps.spreadsheets.sandbox.permissions)">
  <persistence version="9" />
  <languages>
    <use id="bb2e9d6d-8d62-447e-ba8f-a73deac8346b" name="org.modelix.mps.spreadsheets" version="0" />
    <devkit ref="fbc25dd2-5da4-483a-8b19-70928e1b62d7(jetbrains.mps.devkit.general-purpose)" />
  </languages>
  <imports>
    <import index="wyt6" ref="6354ebe7-c22a-4a0f-ac54-50b52ab9b065/java:java.lang(JDK/)" />
  </imports>
  <registry>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1202948039474" name="jetbrains.mps.baseLanguage.structure.InstanceMethodCallOperation" flags="nn" index="liA8E" />
      <concept id="1465982738277781862" name="jetbrains.mps.baseLanguage.structure.PlaceholderMember" flags="nn" index="2tJIrI" />
      <concept id="1197027756228" name="jetbrains.mps.baseLanguage.structure.DotExpression" flags="nn" index="2OqwBi">
        <child id="1197027771414" name="operand" index="2Oq$k0" />
        <child id="1197027833540" name="operation" index="2OqNvi" />
      </concept>
      <concept id="1070534370425" name="jetbrains.mps.baseLanguage.structure.IntegerType" flags="in" index="10Oyi0" />
      <concept id="1068390468198" name="jetbrains.mps.baseLanguage.structure.ClassConcept" flags="ig" index="312cEu" />
      <concept id="1068498886296" name="jetbrains.mps.baseLanguage.structure.VariableReference" flags="nn" index="37vLTw">
        <reference id="1068581517664" name="variableDeclaration" index="3cqZAo" />
      </concept>
      <concept id="1068498886292" name="jetbrains.mps.baseLanguage.structure.ParameterDeclaration" flags="ir" index="37vLTG" />
      <concept id="4972933694980447171" name="jetbrains.mps.baseLanguage.structure.BaseVariableDeclaration" flags="ng" index="19Szcq">
        <child id="5680397130376446158" name="type" index="1tU5fm" />
      </concept>
      <concept id="1068580123132" name="jetbrains.mps.baseLanguage.structure.BaseMethodDeclaration" flags="ng" index="3clF44">
        <child id="1068580123133" name="returnType" index="3clF45" />
        <child id="1068580123134" name="parameter" index="3clF46" />
        <child id="1068580123135" name="body" index="3clF47" />
      </concept>
      <concept id="1068580123165" name="jetbrains.mps.baseLanguage.structure.InstanceMethodDeclaration" flags="ig" index="3clFb_" />
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
      <concept id="1068581242875" name="jetbrains.mps.baseLanguage.structure.PlusExpression" flags="nn" index="3cpWs3" />
      <concept id="1068581242878" name="jetbrains.mps.baseLanguage.structure.ReturnStatement" flags="nn" index="3cpWs6">
        <child id="1068581517676" name="expression" index="3cqZAk" />
      </concept>
      <concept id="1068581517677" name="jetbrains.mps.baseLanguage.structure.VoidType" flags="in" index="3cqZAl" />
      <concept id="1204053956946" name="jetbrains.mps.baseLanguage.structure.IMethodCall" flags="ngI" index="1ndlxa">
        <reference id="1068499141037" name="baseMethodDeclaration" index="37wK5l" />
      </concept>
      <concept id="1107461130800" name="jetbrains.mps.baseLanguage.structure.Classifier" flags="ng" index="3pOWGL">
        <child id="5375687026011219971" name="member" index="jymVt" unordered="true" />
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
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1133920641626" name="jetbrains.mps.lang.core.structure.BaseConcept" flags="ng" index="2VYdi">
        <property id="1193676396447" name="virtualPackage" index="3GE5qa" />
      </concept>
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
    <language id="bb2e9d6d-8d62-447e-ba8f-a73deac8346b" name="org.modelix.mps.spreadsheets">
      <concept id="4649248350060789135" name="org.modelix.mps.spreadsheets.structure.TableDataDeclaration" flags="ng" index="2ptcWM">
        <reference id="4649248350061543192" name="entity" index="2pu4Q_" />
      </concept>
      <concept id="1612157992439946854" name="org.modelix.mps.spreadsheets.structure.DocumentData" flags="ng" index="rrLt1">
        <reference id="1612157992439993003" name="document" index="rrHIc" />
        <child id="1612157992439946858" name="contentData" index="rrLtd" />
      </concept>
      <concept id="1612157992439865027" name="org.modelix.mps.spreadsheets.structure.Column" flags="ng" index="rsdv$">
        <child id="1612157992439865031" name="content" index="rsdvw" />
      </concept>
      <concept id="1612157992439697258" name="org.modelix.mps.spreadsheets.structure.PropertyColumnContent" flags="ng" index="rsOpd">
        <reference id="1612157992439697264" name="property" index="rsOpn" />
      </concept>
      <concept id="1612157992439697240" name="org.modelix.mps.spreadsheets.structure.StringValue" flags="ng" index="rsOpZ">
        <property id="1612157992439697242" name="value" index="rsOpX" />
      </concept>
      <concept id="1612157992439697116" name="org.modelix.mps.spreadsheets.structure.PropertyCellData" flags="ng" index="rsOvV">
        <reference id="1612157992439697119" name="property" index="rsOvS" />
        <child id="1612157992439697121" name="value" index="rsOv6" />
      </concept>
      <concept id="1612157992439697115" name="org.modelix.mps.spreadsheets.structure.RowData" flags="ng" index="rsOvW">
        <child id="1612157992440017546" name="cells" index="rrzIH" />
      </concept>
      <concept id="1612157992439697114" name="org.modelix.mps.spreadsheets.structure.TableDataInstance" flags="ng" index="rsOvX">
        <reference id="4649248350060789136" name="declaration" index="2ptcWH" />
        <child id="1612157992440017543" name="rows" index="rrzIw" />
      </concept>
      <concept id="1612157992439572256" name="org.modelix.mps.spreadsheets.structure.TableView" flags="ng" index="rtmS7">
        <reference id="4649248350061005501" name="data" index="2ps7w0" />
        <child id="1612157992439697261" name="columns" index="rsOpa" />
      </concept>
      <concept id="1612157992439280054" name="org.modelix.mps.spreadsheets.structure.EntityProperty" flags="ng" index="ruvyh">
        <child id="1612157992439280072" name="type" index="ruvzJ" />
      </concept>
      <concept id="1612157992439280053" name="org.modelix.mps.spreadsheets.structure.Entity" flags="ng" index="ruvyi">
        <child id="1612157992439295002" name="properties" index="ruikX" />
      </concept>
      <concept id="1612157992439280061" name="org.modelix.mps.spreadsheets.structure.StringType" flags="ng" index="ruvyq" />
      <concept id="1612157992439124919" name="org.modelix.mps.spreadsheets.structure.Document" flags="ng" index="ruTEg">
        <child id="1612157992439566670" name="content" index="rtlxD" />
      </concept>
      <concept id="2833354970326717996" name="org.modelix.mps.spreadsheets.structure.FormularColumnContent" flags="ng" index="1nIOXT">
        <child id="2833354970326717999" name="formular" index="1nIOXU" />
      </concept>
      <concept id="2833354970326721280" name="org.modelix.mps.spreadsheets.structure.ColumnReference" flags="ng" index="1nIRDl">
        <reference id="2833354970326721281" name="column" index="1nIRDk" />
      </concept>
    </language>
  </registry>
  <node concept="ruvyi" id="1hCkroLn2ZX">
    <property role="TrG5h" value="Resource" />
    <property role="3GE5qa" value="authorization" />
    <node concept="ruvyh" id="1hCkroLn2ZY" role="ruikX">
      <property role="TrG5h" value="name" />
      <node concept="ruvyq" id="1hCkroLn306" role="ruvzJ" />
    </node>
    <node concept="ruvyh" id="1hCkroLoXRL" role="ruikX">
      <property role="TrG5h" value="Parent" />
      <node concept="ruvyq" id="1hCkroLoXRM" role="ruvzJ" />
    </node>
    <node concept="ruvyh" id="1hCkroLoXR$" role="ruikX">
      <property role="TrG5h" value="Permissions" />
      <node concept="ruvyq" id="1hCkroLoXR_" role="ruvzJ" />
    </node>
  </node>
  <node concept="ruTEg" id="1hCkroLpKAB">
    <property role="TrG5h" value="Authorization" />
    <property role="3GE5qa" value="authorization" />
    <node concept="2ptcWM" id="425sFRpXgEu" role="rtlxD">
      <property role="TrG5h" value="ResourcesData" />
      <ref role="2pu4Q_" node="1hCkroLn2ZX" resolve="Resource" />
    </node>
    <node concept="rtmS7" id="1hCkroLn2ZI" role="rtlxD">
      <property role="TrG5h" value="Resources" />
      <ref role="2ps7w0" node="425sFRpXgEu" resolve="ResourcesData" />
      <node concept="rsdv$" id="1hCkroLn30b" role="rsOpa">
        <node concept="rsOpd" id="1hCkroLn30e" role="rsdvw">
          <ref role="rsOpn" node="1hCkroLn2ZY" resolve="name" />
        </node>
      </node>
      <node concept="rsdv$" id="1hCkroLoXRN" role="rsOpa">
        <node concept="rsOpd" id="1hCkroLoXRO" role="rsdvw">
          <ref role="rsOpn" node="1hCkroLoXRL" resolve="Parent" />
        </node>
      </node>
      <node concept="rsdv$" id="1hCkroLoXRA" role="rsOpa">
        <node concept="rsOpd" id="1hCkroLoXRB" role="rsdvw">
          <ref role="rsOpn" node="1hCkroLoXR$" resolve="Permissions" />
        </node>
      </node>
    </node>
    <node concept="2ptcWM" id="425sFRpXxXY" role="rtlxD">
      <property role="TrG5h" value="PermissionsData" />
      <ref role="2pu4Q_" node="1hCkroLpKDU" resolve="Permission" />
    </node>
    <node concept="rtmS7" id="1hCkroLpKE5" role="rtlxD">
      <property role="TrG5h" value="Permissions" />
      <ref role="2ps7w0" node="425sFRpXxXY" resolve="PermissionsData" />
      <node concept="rsdv$" id="1hCkroLpKG8" role="rsOpa">
        <node concept="rsOpd" id="1hCkroLpKGb" role="rsdvw">
          <ref role="rsOpn" node="1hCkroLpKFV" resolve="name" />
        </node>
      </node>
      <node concept="rsdv$" id="1hCkroLpKGQ" role="rsOpa">
        <node concept="rsOpd" id="1hCkroLpKGV" role="rsdvw">
          <ref role="rsOpn" node="1hCkroLpKGB" resolve="resource" />
        </node>
      </node>
      <node concept="rsdv$" id="1hCkroLpKPE" role="rsOpa">
        <node concept="rsOpd" id="1hCkroLpKPL" role="rsdvw">
          <ref role="rsOpn" node="1hCkroLpKP4" resolve="includedIn" />
        </node>
      </node>
      <node concept="rsdv$" id="1hCkroLpKPT" role="rsOpa">
        <node concept="rsOpd" id="1hCkroLpKQ2" role="rsdvw">
          <ref role="rsOpn" node="1hCkroLpKPl" resolve="includes" />
        </node>
      </node>
    </node>
    <node concept="2ptcWM" id="425sFRpXxYY" role="rtlxD">
      <property role="TrG5h" value="RolesData" />
      <ref role="2pu4Q_" node="1hCkroLpKDV" resolve="Role" />
    </node>
    <node concept="rtmS7" id="1hCkroLpKEp" role="rtlxD">
      <property role="TrG5h" value="Roles" />
      <ref role="2ps7w0" node="425sFRpXxYY" resolve="RolesData" />
      <node concept="rsdv$" id="1hCkroLpKGj" role="rsOpa">
        <node concept="rsOpd" id="1hCkroLpKGm" role="rsdvw">
          <ref role="rsOpn" node="1hCkroLpKFC" resolve="name" />
        </node>
      </node>
    </node>
    <node concept="2ptcWM" id="425sFRpXy00" role="rtlxD">
      <property role="TrG5h" value="UsersData" />
      <ref role="2pu4Q_" node="1hCkroLpKIE" resolve="User" />
    </node>
    <node concept="rtmS7" id="1hCkroLpKIW" role="rtlxD">
      <property role="TrG5h" value="Users" />
      <ref role="2ps7w0" node="425sFRpXy00" resolve="UsersData" />
      <node concept="rsdv$" id="1hCkroLpKJE" role="rsOpa">
        <node concept="rsOpd" id="1hCkroLpKJH" role="rsdvw">
          <ref role="rsOpn" node="1hCkroLpKJe" resolve="email" />
        </node>
      </node>
      <node concept="rsdv$" id="1hCkroLpKJP" role="rsOpa">
        <node concept="rsOpd" id="1hCkroLpKJU" role="rsdvw">
          <ref role="rsOpn" node="1hCkroLpKJr" resolve="name" />
        </node>
      </node>
      <node concept="rsdv$" id="1hCkroLpKOG" role="rsOpa">
        <node concept="rsOpd" id="1hCkroLpKON" role="rsdvw">
          <ref role="rsOpn" node="1hCkroLpKOr" resolve="roles" />
        </node>
      </node>
      <node concept="rsdv$" id="2Wgzv600$ee" role="rsOpa">
        <node concept="rsOpd" id="2Wgzv600$ef" role="rsdvw">
          <ref role="rsOpn" node="2Wgzv600$ec" resolve="Age" />
        </node>
      </node>
      <node concept="rsdv$" id="M50tyu7Vy7" role="rsOpa">
        <node concept="1nIOXT" id="M50tyu7Vyg" role="rsdvw">
          <property role="TrG5h" value="Name Length" />
          <node concept="2OqwBi" id="11VqaHP3hHh" role="1nIOXU">
            <node concept="1nIRDl" id="vaVstE5EZi" role="2Oq$k0">
              <ref role="1nIRDk" node="1hCkroLpKJP" />
            </node>
            <node concept="liA8E" id="11VqaHP3i6P" role="2OqNvi">
              <ref role="37wK5l" to="wyt6:~String.length()" resolve="length" />
            </node>
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="rrLt1" id="1hCkroLpKAC">
    <property role="3GE5qa" value="authorization" />
    <ref role="rrHIc" node="1hCkroLpKAB" resolve="Authorization" />
    <node concept="rsOvX" id="1hCkroLn35W" role="rrLtd">
      <ref role="2ptcWH" node="425sFRpXgEu" resolve="ResourcesData" />
      <node concept="rsOvW" id="1hCkroLoXR6" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLoXR8" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLn2ZY" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLoXR9" role="rsOv6">
            <property role="rsOpX" value="Model Server" />
          </node>
        </node>
      </node>
      <node concept="rsOvW" id="1hCkroLoXRd" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLoXRi" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLn2ZY" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLoXRj" role="rsOv6">
            <property role="rsOpX" value="Repository" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLoXS1" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLoXRL" resolve="Parent" />
          <node concept="rsOpZ" id="1hCkroLoXS2" role="rsOv6">
            <property role="rsOpX" value="Model Server" />
          </node>
        </node>
      </node>
      <node concept="rsOvW" id="1hCkroLoXRn" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLoXRv" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLn2ZY" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLoXRw" role="rsOv6">
            <property role="rsOpX" value="Branch" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLoXS8" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLoXRL" resolve="Parent" />
          <node concept="rsOpZ" id="1hCkroLoXS9" role="rsOv6">
            <property role="rsOpX" value="Repository" />
          </node>
        </node>
      </node>
    </node>
    <node concept="rsOvX" id="1hCkroLpKEO" role="rrLtd">
      <ref role="2ptcWH" node="425sFRpXxXY" resolve="PermissionsData" />
      <node concept="rsOvW" id="1hCkroLpKGw" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLpKH3" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKFV" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLpKH4" role="rsOv6">
            <property role="rsOpX" value="read" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLpKH8" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKGB" resolve="resource" />
          <node concept="rsOpZ" id="1hCkroLpKH9" role="rsOv6">
            <property role="rsOpX" value="Branch" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLpKQa" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKP4" resolve="includedIn" />
          <node concept="rsOpZ" id="1hCkroLpKQb" role="rsOv6">
            <property role="rsOpX" value="Branch/write, Repository/read" />
          </node>
        </node>
      </node>
      <node concept="rsOvW" id="1hCkroLpKIn" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLpKIu" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKFV" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLpKIv" role="rsOv6">
            <property role="rsOpX" value="write" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLpKIz" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKGB" resolve="resource" />
          <node concept="rsOpZ" id="1hCkroLpKI$" role="rsOv6">
            <property role="rsOpX" value="Branch" />
          </node>
        </node>
      </node>
      <node concept="rsOvW" id="1hCkroLpKQj" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLpKQx" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKFV" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLpKQy" role="rsOv6">
            <property role="rsOpX" value="read" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLpKQA" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKGB" resolve="resource" />
          <node concept="rsOpZ" id="1hCkroLpKQB" role="rsOv6">
            <property role="rsOpX" value="Repository" />
          </node>
        </node>
      </node>
    </node>
    <node concept="rsOvX" id="1hCkroLpKFm" role="rrLtd">
      <ref role="2ptcWH" node="425sFRpXxYY" resolve="RolesData" />
      <node concept="rsOvW" id="1hCkroLpKGu" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLpKGy" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKFC" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLpKGz" role="rsOv6">
            <property role="rsOpX" value="Server Admin" />
          </node>
        </node>
      </node>
    </node>
    <node concept="rsOvX" id="1hCkroLpKKx" role="rrLtd">
      <ref role="2ptcWH" node="425sFRpXy00" resolve="UsersData" />
      <node concept="rsOvW" id="1hCkroLpKMv" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLpKO3" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKJe" resolve="email" />
          <node concept="rsOpZ" id="1hCkroLpKO4" role="rsOv6">
            <property role="rsOpX" value="mmustermann@example.com" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLpKO8" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKJr" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLpKO9" role="rsOv6">
            <property role="rsOpX" value="Max Mustermann" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLpKOV" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKOr" resolve="roles" />
          <node concept="rsOpZ" id="1hCkroLpKOW" role="rsOv6">
            <property role="rsOpX" value="Server Admin" />
          </node>
        </node>
        <node concept="rsOvV" id="2Wgzv600$eE" role="rrzIH">
          <ref role="rsOvS" node="2Wgzv600$ec" resolve="Age" />
          <node concept="rsOpZ" id="2Wgzv600$eF" role="rsOv6">
            <property role="rsOpX" value="10" />
          </node>
        </node>
      </node>
      <node concept="rsOvW" id="1hCkroLpKO0" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLpKOf" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKJe" resolve="email" />
          <node concept="rsOpZ" id="1hCkroLpKOg" role="rsOv6">
            <property role="rsOpX" value="modelix@itemis.de" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLpKOk" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKJr" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLpKOl" role="rsOv6">
            <property role="rsOpX" value="Modelix" />
          </node>
        </node>
        <node concept="rsOvV" id="2Wgzv600$eR" role="rrzIH">
          <ref role="rsOvS" node="2Wgzv600$ec" resolve="Age" />
          <node concept="rsOpZ" id="2Wgzv600$eS" role="rsOv6">
            <property role="rsOpX" value="20" />
          </node>
        </node>
      </node>
      <node concept="rsOvW" id="1hCkroLr8QN" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLr8R3" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKJe" resolve="email" />
          <node concept="rsOpZ" id="1hCkroLr8R4" role="rsOv6">
            <property role="rsOpX" value="emustermann@example.com" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLr8R8" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKJr" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLr8R9" role="rsOv6">
            <property role="rsOpX" value="Erika Mustermann" />
          </node>
        </node>
        <node concept="rsOvV" id="2Wgzv600$f0" role="rrzIH">
          <ref role="rsOvS" node="2Wgzv600$ec" resolve="Age" />
          <node concept="rsOpZ" id="2Wgzv600$f1" role="rsOv6">
            <property role="rsOpX" value="30" />
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="ruvyi" id="1hCkroLpKDU">
    <property role="3GE5qa" value="authorization" />
    <property role="TrG5h" value="Permission" />
    <node concept="ruvyh" id="1hCkroLpKFV" role="ruikX">
      <property role="TrG5h" value="name" />
      <node concept="ruvyq" id="1hCkroLpKG3" role="ruvzJ" />
    </node>
    <node concept="ruvyh" id="1hCkroLpKGB" role="ruikX">
      <property role="TrG5h" value="resource" />
      <node concept="ruvyq" id="1hCkroLpKGL" role="ruvzJ" />
    </node>
    <node concept="ruvyh" id="1hCkroLpKP4" role="ruikX">
      <property role="TrG5h" value="includedIn" />
      <node concept="ruvyq" id="1hCkroLpKPg" role="ruvzJ" />
    </node>
    <node concept="ruvyh" id="1hCkroLpKPl" role="ruikX">
      <property role="TrG5h" value="includes" />
      <node concept="ruvyq" id="1hCkroLpKP_" role="ruvzJ" />
    </node>
  </node>
  <node concept="ruvyi" id="1hCkroLpKDV">
    <property role="3GE5qa" value="authorization" />
    <property role="TrG5h" value="Role" />
    <node concept="ruvyh" id="1hCkroLpKFC" role="ruikX">
      <property role="TrG5h" value="name" />
      <node concept="ruvyq" id="1hCkroLpKFK" role="ruvzJ" />
    </node>
  </node>
  <node concept="ruvyi" id="1hCkroLpKIE">
    <property role="3GE5qa" value="authorization" />
    <property role="TrG5h" value="User" />
    <node concept="ruvyh" id="1hCkroLpKJe" role="ruikX">
      <property role="TrG5h" value="email" />
      <node concept="ruvyq" id="1hCkroLpKJm" role="ruvzJ" />
    </node>
    <node concept="ruvyh" id="1hCkroLpKJr" role="ruikX">
      <property role="TrG5h" value="name" />
      <node concept="ruvyq" id="1hCkroLpKJ_" role="ruvzJ" />
    </node>
    <node concept="ruvyh" id="1hCkroLpKOr" role="ruikX">
      <property role="TrG5h" value="roles" />
      <node concept="ruvyq" id="1hCkroLpKOB" role="ruvzJ" />
    </node>
    <node concept="ruvyh" id="2Wgzv600$ec" role="ruikX">
      <property role="TrG5h" value="Age" />
      <node concept="ruvyq" id="2Wgzv600$ed" role="ruvzJ" />
    </node>
  </node>
  <node concept="ruvyi" id="1hCkroLpKQH">
    <property role="3GE5qa" value="authorization" />
    <property role="TrG5h" value="AuthorizationTestCase" />
  </node>
  <node concept="rrLt1" id="1hCkroLr8PZ">
    <property role="3GE5qa" value="authorization" />
    <ref role="rrHIc" node="1hCkroLpKAB" resolve="Authorization" />
    <node concept="rsOvX" id="1hCkroLr8Q0" role="rrLtd">
      <ref role="2ptcWH" node="425sFRpXgEu" resolve="ResourcesData" />
      <node concept="rsOvW" id="1hCkroLr8Q1" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLr8Q2" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLn2ZY" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLr8Q3" role="rsOv6">
            <property role="rsOpX" value="Model Server" />
          </node>
        </node>
      </node>
      <node concept="rsOvW" id="1hCkroLr8Q4" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLr8Q5" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLn2ZY" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLr8Q6" role="rsOv6">
            <property role="rsOpX" value="Repository" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLr8Q7" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLoXRL" resolve="Parent" />
          <node concept="rsOpZ" id="1hCkroLr8Q8" role="rsOv6">
            <property role="rsOpX" value="Model Server" />
          </node>
        </node>
      </node>
      <node concept="rsOvW" id="1hCkroLr8Q9" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLr8Qa" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLn2ZY" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLr8Qb" role="rsOv6">
            <property role="rsOpX" value="Branch" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLr8Qc" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLoXRL" resolve="Parent" />
          <node concept="rsOpZ" id="1hCkroLr8Qd" role="rsOv6">
            <property role="rsOpX" value="Repository" />
          </node>
        </node>
      </node>
    </node>
    <node concept="rsOvX" id="1hCkroLr8Qe" role="rrLtd">
      <ref role="2ptcWH" node="425sFRpXxXY" resolve="PermissionsData" />
      <node concept="rsOvW" id="1hCkroLr8Qf" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLr8Qg" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKFV" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLr8Qh" role="rsOv6">
            <property role="rsOpX" value="read" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLr8Qi" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKGB" resolve="resource" />
          <node concept="rsOpZ" id="1hCkroLr8Qj" role="rsOv6">
            <property role="rsOpX" value="Branch" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLr8Qk" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKP4" resolve="includedIn" />
          <node concept="rsOpZ" id="1hCkroLr8Ql" role="rsOv6">
            <property role="rsOpX" value="Branch/write, Repository/read" />
          </node>
        </node>
      </node>
      <node concept="rsOvW" id="1hCkroLr8Qm" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLr8Qn" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKFV" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLr8Qo" role="rsOv6">
            <property role="rsOpX" value="write" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLr8Qp" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKGB" resolve="resource" />
          <node concept="rsOpZ" id="1hCkroLr8Qq" role="rsOv6">
            <property role="rsOpX" value="Branch" />
          </node>
        </node>
      </node>
      <node concept="rsOvW" id="1hCkroLr8Qr" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLr8Qs" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKFV" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLr8Qt" role="rsOv6">
            <property role="rsOpX" value="read" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLr8Qu" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKGB" resolve="resource" />
          <node concept="rsOpZ" id="1hCkroLr8Qv" role="rsOv6">
            <property role="rsOpX" value="Repository" />
          </node>
        </node>
      </node>
    </node>
    <node concept="rsOvX" id="1hCkroLr8Qw" role="rrLtd">
      <ref role="2ptcWH" node="425sFRpXxYY" resolve="RolesData" />
      <node concept="rsOvW" id="1hCkroLr8Qx" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLr8Qy" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKFC" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLr8Qz" role="rsOv6">
            <property role="rsOpX" value="Server Admin" />
          </node>
        </node>
      </node>
    </node>
    <node concept="rsOvX" id="1hCkroLr8Q$" role="rrLtd">
      <ref role="2ptcWH" node="425sFRpXy00" resolve="UsersData" />
      <node concept="rsOvW" id="1hCkroLr8Q_" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLr8QA" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKJe" resolve="email" />
          <node concept="rsOpZ" id="1hCkroLr8QB" role="rsOv6">
            <property role="rsOpX" value="mmustermann@example.com" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLr8QC" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKJr" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLr8QD" role="rsOv6">
            <property role="rsOpX" value="Max Mustermann" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLr8QE" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKOr" resolve="roles" />
          <node concept="rsOpZ" id="1hCkroLr8QF" role="rsOv6">
            <property role="rsOpX" value="Server Admin" />
          </node>
        </node>
      </node>
      <node concept="rsOvW" id="1hCkroLr8QI" role="rrzIw">
        <node concept="rsOvV" id="1hCkroLr8QJ" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKJe" resolve="email" />
          <node concept="rsOpZ" id="1hCkroLr8QK" role="rsOv6">
            <property role="rsOpX" value="modelix@itemis.de" />
          </node>
        </node>
        <node concept="rsOvV" id="1hCkroLr8QL" role="rrzIH">
          <ref role="rsOvS" node="1hCkroLpKJr" resolve="name" />
          <node concept="rsOpZ" id="1hCkroLr8QM" role="rsOv6">
            <property role="rsOpX" value="Modelix" />
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="312cEu" id="67j$1x53G4c">
    <property role="TrG5h" value="MathSandbox" />
    <node concept="3clFb_" id="67j$1x53G4O" role="jymVt">
      <property role="TrG5h" value="plus" />
      <node concept="3cqZAl" id="67j$1x53G4Q" role="3clF45" />
      <node concept="3Tm1VV" id="67j$1x53G4R" role="1B3o_S" />
      <node concept="3clFbS" id="67j$1x53G4S" role="3clF47" />
    </node>
    <node concept="3clFb_" id="67j$1x53G6f" role="jymVt">
      <property role="TrG5h" value="minuwbbxtjjlsss" />
      <node concept="37vLTG" id="RYBraoAJpy" role="3clF46">
        <property role="TrG5h" value="a" />
        <node concept="10Oyi0" id="RYBraoAJTm" role="1tU5fm" />
      </node>
      <node concept="3cqZAl" id="67j$1x53G6h" role="3clF45" />
      <node concept="3Tm1VV" id="67j$1x53G6i" role="1B3o_S" />
      <node concept="3clFbS" id="67j$1x53G6j" role="3clF47" />
    </node>
    <node concept="2tJIrI" id="5V0cDfz3aJp" role="jymVt" />
    <node concept="3clFb_" id="5V0cDfz3aL0" role="jymVt">
      <property role="TrG5h" value="mul" />
      <node concept="37vLTG" id="5V0cDfz3aN5" role="3clF46">
        <property role="TrG5h" value="a" />
        <node concept="10Oyi0" id="5V0cDfz3aO4" role="1tU5fm" />
      </node>
      <node concept="37vLTG" id="5V0cDfz3aOw" role="3clF46">
        <property role="TrG5h" value="b" />
        <node concept="10Oyi0" id="5V0cDfz3aPz" role="1tU5fm" />
      </node>
      <node concept="10Oyi0" id="5V0cDfz3ew4" role="3clF45" />
      <node concept="3Tm1VV" id="5V0cDfz3aL3" role="1B3o_S" />
      <node concept="3clFbS" id="5V0cDfz3aL4" role="3clF47">
        <node concept="3cpWs6" id="5V0cDfz3aQw" role="3cqZAp">
          <node concept="3cpWs3" id="5V0cDfz3dXi" role="3cqZAk">
            <node concept="37vLTw" id="5V0cDfz3dXt" role="3uHU7w">
              <ref role="3cqZAo" node="5V0cDfz3aOw" resolve="b" />
            </node>
            <node concept="37vLTw" id="5V0cDfz3aSB" role="3uHU7B">
              <ref role="3cqZAo" node="5V0cDfz3aN5" resolve="a" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="3Tm1VV" id="67j$1x53G4d" role="1B3o_S" />
  </node>
</model>

