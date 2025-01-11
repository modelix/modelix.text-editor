<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:4ee90d89-861f-4bf3-9fa8-cf4ca2342e77(org.modelix.mps.react.muicomponents.editor)">
  <persistence version="9" />
  <languages>
    <use id="18bc6592-03a6-4e29-a83a-7ff23bde13ba" name="jetbrains.mps.lang.editor" version="14" />
    <use id="aee9cad2-acd4-4608-aef2-0004f6a1cdbd" name="jetbrains.mps.lang.actions" version="4" />
    <devkit ref="fbc25dd2-5da4-483a-8b19-70928e1b62d7(jetbrains.mps.devkit.general-purpose)" />
  </languages>
  <imports>
    <import index="vpip" ref="r:fcc69b83-3584-4a79-833a-d9dc948b6fd7(org.modelix.mps.react.editor)" />
    <import index="zaxg" ref="r:c4183f14-1033-4ade-be7c-1beadb184134(org.modelix.mps.react.muicomponents.structure)" />
    <import index="tpco" ref="r:00000000-0000-4000-0000-011c89590284(jetbrains.mps.lang.core.editor)" implicit="true" />
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
    <import index="7923" ref="r:2c5a8407-fd65-4ea4-b95e-a8f8fee129c0(org.modelix.mps.react.muicomponents.behavior)" implicit="true" />
  </imports>
  <registry>
    <language id="18bc6592-03a6-4e29-a83a-7ff23bde13ba" name="jetbrains.mps.lang.editor">
      <concept id="1071666914219" name="jetbrains.mps.lang.editor.structure.ConceptEditorDeclaration" flags="ig" index="24kQdi" />
      <concept id="1140524381322" name="jetbrains.mps.lang.editor.structure.CellModel_ListWithRole" flags="ng" index="2czfm3">
        <child id="1140524464360" name="cellLayout" index="2czzBx" />
        <child id="1140524464359" name="emptyCellModel" index="2czzBI" />
      </concept>
      <concept id="1106270549637" name="jetbrains.mps.lang.editor.structure.CellLayout_Horizontal" flags="nn" index="2iRfu4" />
      <concept id="1106270571710" name="jetbrains.mps.lang.editor.structure.CellLayout_Vertical" flags="nn" index="2iRkQZ" />
      <concept id="1237303669825" name="jetbrains.mps.lang.editor.structure.CellLayout_Indent" flags="nn" index="l2Vlx" />
      <concept id="1237307900041" name="jetbrains.mps.lang.editor.structure.IndentLayoutIndentStyleClassItem" flags="ln" index="lj46D" />
      <concept id="1142886221719" name="jetbrains.mps.lang.editor.structure.QueryFunction_NodeCondition" flags="in" index="pkWqt" />
      <concept id="1142886811589" name="jetbrains.mps.lang.editor.structure.ConceptFunctionParameter_node" flags="nn" index="pncrf" />
      <concept id="1237385578942" name="jetbrains.mps.lang.editor.structure.IndentLayoutOnNewLineStyleClassItem" flags="ln" index="pVoyu" />
      <concept id="1080736578640" name="jetbrains.mps.lang.editor.structure.BaseEditorComponent" flags="ig" index="2wURMF">
        <child id="1080736633877" name="cellModel" index="2wV5jI" />
      </concept>
      <concept id="1239814640496" name="jetbrains.mps.lang.editor.structure.CellLayout_VerticalGrid" flags="nn" index="2EHx9g" />
      <concept id="1160493135005" name="jetbrains.mps.lang.editor.structure.CellMenuPart_PropertyValues_GetValues" flags="in" index="MLZmj" />
      <concept id="1164824717996" name="jetbrains.mps.lang.editor.structure.CellMenuDescriptor" flags="ng" index="OXEIz">
        <child id="1164824815888" name="cellMenuPart" index="OY2wv" />
      </concept>
      <concept id="1164833692343" name="jetbrains.mps.lang.editor.structure.CellMenuPart_PropertyValues" flags="ng" index="PvTIS">
        <child id="1164833692344" name="valuesFunction" index="PvTIR" />
      </concept>
      <concept id="1078939183254" name="jetbrains.mps.lang.editor.structure.CellModel_Component" flags="sg" stub="3162947552742194261" index="PMmxH">
        <reference id="1078939183255" name="editorComponent" index="PMmxG" />
      </concept>
      <concept id="1186414536763" name="jetbrains.mps.lang.editor.structure.BooleanStyleSheetItem" flags="ln" index="VOi$J">
        <property id="1186414551515" name="flag" index="VOm3f" />
        <child id="1223387335081" name="query" index="3n$kyP" />
      </concept>
      <concept id="1186414928363" name="jetbrains.mps.lang.editor.structure.SelectableStyleSheetItem" flags="ln" index="VPM3Z" />
      <concept id="1233758997495" name="jetbrains.mps.lang.editor.structure.PunctuationLeftStyleClassItem" flags="ln" index="11L4FC" />
      <concept id="1233759184865" name="jetbrains.mps.lang.editor.structure.PunctuationRightStyleClassItem" flags="ln" index="11LMrY" />
      <concept id="1088013125922" name="jetbrains.mps.lang.editor.structure.CellModel_RefCell" flags="sg" stub="730538219795941030" index="1iCGBv">
        <child id="1088186146602" name="editorComponent" index="1sWHZn" />
      </concept>
      <concept id="1381004262292414836" name="jetbrains.mps.lang.editor.structure.ICellStyle" flags="ngI" index="1k5N5V">
        <reference id="1381004262292426837" name="parentStyleClass" index="1k5W1q" />
      </concept>
      <concept id="1223387125302" name="jetbrains.mps.lang.editor.structure.QueryFunction_Boolean" flags="in" index="3nzxsE" />
      <concept id="1088185857835" name="jetbrains.mps.lang.editor.structure.InlineEditorComponent" flags="ig" index="1sVBvm" />
      <concept id="1139848536355" name="jetbrains.mps.lang.editor.structure.CellModel_WithRole" flags="ng" index="1$h60E">
        <property id="1140017977771" name="readOnly" index="1Intyy" />
        <property id="1140114345053" name="allowEmptyText" index="1O74Pk" />
        <reference id="1140103550593" name="relationDeclaration" index="1NtTu8" />
      </concept>
      <concept id="1073389214265" name="jetbrains.mps.lang.editor.structure.EditorCellModel" flags="ng" index="3EYTF0">
        <child id="1142887637401" name="renderingCondition" index="pqm2j" />
        <child id="1164826688380" name="menuDescriptor" index="P5bDN" />
      </concept>
      <concept id="1073389446423" name="jetbrains.mps.lang.editor.structure.CellModel_Collection" flags="sn" stub="3013115976261988961" index="3EZMnI">
        <child id="1106270802874" name="cellLayout" index="2iSdaV" />
        <child id="1073389446424" name="childCellModel" index="3EZMnx" />
      </concept>
      <concept id="1073389577006" name="jetbrains.mps.lang.editor.structure.CellModel_Constant" flags="sn" stub="3610246225209162225" index="3F0ifn">
        <property id="1082639509531" name="nullText" index="ilYzB" />
        <property id="1073389577007" name="text" index="3F0ifm" />
      </concept>
      <concept id="1073389658414" name="jetbrains.mps.lang.editor.structure.CellModel_Property" flags="sg" stub="730538219796134133" index="3F0A7n" />
      <concept id="1219418625346" name="jetbrains.mps.lang.editor.structure.IStyleContainer" flags="ngI" index="3F0Thp">
        <child id="1219418656006" name="styleItem" index="3F10Kt" />
      </concept>
      <concept id="1073389882823" name="jetbrains.mps.lang.editor.structure.CellModel_RefNode" flags="sg" stub="730538219795960754" index="3F1sOY" />
      <concept id="1073390211982" name="jetbrains.mps.lang.editor.structure.CellModel_RefNodeList" flags="sg" stub="2794558372793454595" index="3F2HdR" />
      <concept id="1198256887712" name="jetbrains.mps.lang.editor.structure.CellModel_Indent" flags="ng" index="3XFhqQ" />
      <concept id="1166049232041" name="jetbrains.mps.lang.editor.structure.AbstractComponent" flags="ng" index="1XWOmA">
        <reference id="1166049300910" name="conceptDeclaration" index="1XX52x" />
      </concept>
    </language>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
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
      <concept id="1081236700937" name="jetbrains.mps.baseLanguage.structure.StaticMethodCall" flags="nn" index="2YIFZM">
        <reference id="1144433194310" name="classConcept" index="1Pybhc" />
      </concept>
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
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="1179409122411" name="jetbrains.mps.lang.smodel.structure.Node_ConceptMethodCall" flags="nn" index="2qgKlT" />
    </language>
  </registry>
  <node concept="24kQdi" id="2vPZMAmvsgt">
    <ref role="1XX52x" to="zaxg:2vPZMAmvnIB" resolve="TextField" />
    <node concept="3EZMnI" id="2vPZMAmvsgy" role="2wV5jI">
      <node concept="2iRfu4" id="2vPZMAmvsgz" role="2iSdaV" />
      <node concept="PMmxH" id="2vPZMAmvsgv" role="3EZMnx">
        <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
        <ref role="1k5W1q" to="vpip:2vPZMAnOoz_" resolve="RComponent" />
      </node>
      <node concept="3F1sOY" id="2vPZMAmvsgA" role="3EZMnx">
        <ref role="1NtTu8" to="zaxg:2vPZMAmvsgs" resolve="data" />
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAmvsgC">
    <ref role="1XX52x" to="zaxg:2vPZMAmvsgl" resolve="NodePropRef" />
    <node concept="3EZMnI" id="2vPZMAmvsgG" role="2wV5jI">
      <node concept="2iRfu4" id="2vPZMAmvsgH" role="2iSdaV" />
      <node concept="3F1sOY" id="2vPZMAmvsgE" role="3EZMnx">
        <ref role="1NtTu8" to="zaxg:2vPZMAmvsgm" resolve="node" />
      </node>
      <node concept="3F0ifn" id="2vPZMAmvsgJ" role="3EZMnx">
        <property role="3F0ifm" value="-&gt;" />
        <node concept="11L4FC" id="2vPZMAmx_GB" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
        <node concept="11LMrY" id="2vPZMAmx_GD" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
      </node>
      <node concept="1iCGBv" id="2vPZMAmvsgM" role="3EZMnx">
        <ref role="1NtTu8" to="zaxg:2vPZMAmvsgn" resolve="property" />
        <node concept="1sVBvm" id="2vPZMAmvsgO" role="1sWHZn">
          <node concept="3F0A7n" id="2vPZMAmvsgS" role="2wV5jI">
            <property role="1Intyy" value="true" />
            <ref role="1NtTu8" to="tpck:h0TrG11" resolve="name" />
            <ref role="1k5W1q" to="vpip:2vPZMAmxCQV" resolve="RConcept" />
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAmDmtU">
    <ref role="1XX52x" to="zaxg:2vPZMAmDmtP" resolve="Label" />
    <node concept="3EZMnI" id="2vPZMAmDmtW" role="2wV5jI">
      <node concept="2iRfu4" id="2vPZMAmDmtX" role="2iSdaV" />
      <node concept="PMmxH" id="2vPZMAmDmtY" role="3EZMnx">
        <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
        <ref role="1k5W1q" to="vpip:2vPZMAnOoz_" resolve="RComponent" />
      </node>
      <node concept="3F0ifn" id="2vPZMAn_7Nq" role="3EZMnx">
        <property role="3F0ifm" value="[" />
        <node concept="11L4FC" id="2vPZMAn_7Ny" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
        <node concept="11LMrY" id="2vPZMAn_7N$" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
      </node>
      <node concept="3F0A7n" id="2vPZMAn_7Nw" role="3EZMnx">
        <ref role="1NtTu8" to="zaxg:2vPZMAn_7No" resolve="style" />
      </node>
      <node concept="3F0ifn" id="2vPZMAn_7Nt" role="3EZMnx">
        <property role="3F0ifm" value="]" />
        <node concept="11L4FC" id="2vPZMAn_7NA" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
      </node>
      <node concept="3F1sOY" id="2vPZMAmDmtZ" role="3EZMnx">
        <ref role="1NtTu8" to="zaxg:2vPZMAmDsnU" resolve="value" />
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAmEWcY">
    <ref role="1XX52x" to="zaxg:2vPZMAmEVPF" resolve="LayoutHorizontal" />
    <node concept="3EZMnI" id="2vPZMAmEWd8" role="2wV5jI">
      <node concept="2iRkQZ" id="2vPZMAmEWd9" role="2iSdaV" />
      <node concept="3EZMnI" id="2vPZMAmEWd3" role="3EZMnx">
        <node concept="2iRfu4" id="2vPZMAmEWd4" role="2iSdaV" />
        <node concept="PMmxH" id="2vPZMAmEWd2" role="3EZMnx">
          <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
          <ref role="1k5W1q" to="vpip:2vPZMAnOoz_" resolve="RComponent" />
        </node>
        <node concept="3F0ifn" id="2vPZMAmEWd6" role="3EZMnx">
          <property role="3F0ifm" value="{" />
        </node>
      </node>
      <node concept="3EZMnI" id="2vPZMAmEWdc" role="3EZMnx">
        <node concept="VPM3Z" id="2vPZMAmEWde" role="3F10Kt" />
        <node concept="3XFhqQ" id="2vPZMAmEWdi" role="3EZMnx" />
        <node concept="3F2HdR" id="2vPZMAmEWdl" role="3EZMnx">
          <ref role="1NtTu8" to="zaxg:2vPZMAmEVPK" resolve="children" />
          <node concept="2iRkQZ" id="2vPZMAmEWdq" role="2czzBx" />
        </node>
        <node concept="2iRfu4" id="2vPZMAmEWdh" role="2iSdaV" />
      </node>
      <node concept="3F0ifn" id="2vPZMAmEWda" role="3EZMnx">
        <property role="3F0ifm" value="}" />
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAmGCtm">
    <ref role="1XX52x" to="zaxg:2vPZMAmGCtk" resolve="LayoutVertical" />
    <node concept="3EZMnI" id="2vPZMAmGCto" role="2wV5jI">
      <node concept="2iRkQZ" id="2vPZMAmGCtp" role="2iSdaV" />
      <node concept="3EZMnI" id="2vPZMAmGCtq" role="3EZMnx">
        <node concept="2iRfu4" id="2vPZMAmGCtr" role="2iSdaV" />
        <node concept="PMmxH" id="2vPZMAmGCts" role="3EZMnx">
          <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
          <ref role="1k5W1q" to="vpip:2vPZMAnOoz_" resolve="RComponent" />
        </node>
        <node concept="3F0A7n" id="2vPZMAmGN8z" role="3EZMnx">
          <property role="1O74Pk" value="true" />
          <ref role="1NtTu8" to="zaxg:2vPZMAmGN8u" resolve="gap" />
          <ref role="1k5W1q" to="vpip:2vPZMAnwE1f" resolve="RHTMLOrJsOrCSS" />
        </node>
        <node concept="3F0ifn" id="2vPZMAmGCtt" role="3EZMnx">
          <property role="3F0ifm" value="{" />
        </node>
      </node>
      <node concept="3EZMnI" id="2vPZMAmGCtu" role="3EZMnx">
        <node concept="VPM3Z" id="2vPZMAmGCtv" role="3F10Kt" />
        <node concept="3XFhqQ" id="2vPZMAmGCtw" role="3EZMnx" />
        <node concept="3F2HdR" id="2vPZMAmGCtx" role="3EZMnx">
          <ref role="1NtTu8" to="zaxg:2vPZMAmEVPK" resolve="children" />
          <node concept="2iRkQZ" id="2vPZMAmGCty" role="2czzBx" />
        </node>
        <node concept="2iRfu4" id="2vPZMAmGCtz" role="2iSdaV" />
      </node>
      <node concept="3F0ifn" id="2vPZMAmGCt$" role="3EZMnx">
        <property role="3F0ifm" value="}" />
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAmJaEL">
    <ref role="1XX52x" to="zaxg:2vPZMAmJaEH" resolve="Header" />
    <node concept="3EZMnI" id="2vPZMAmJaEP" role="2wV5jI">
      <node concept="2iRfu4" id="2vPZMAmJaEQ" role="2iSdaV" />
      <node concept="3F0ifn" id="2vPZMAmJaEN" role="3EZMnx">
        <property role="3F0ifm" value="header" />
        <ref role="1k5W1q" to="vpip:2vPZMAnOoz_" resolve="RComponent" />
      </node>
      <node concept="3F0ifn" id="2vPZMAmJaES" role="3EZMnx">
        <property role="3F0ifm" value="&lt;" />
        <ref role="1k5W1q" to="vpip:2vPZMAmxCQO" resolve="RKeyword" />
        <node concept="11L4FC" id="2vPZMAmJaF0" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
        <node concept="11LMrY" id="2vPZMAmJaF4" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
      </node>
      <node concept="3F0A7n" id="2vPZMAmJaEY" role="3EZMnx">
        <ref role="1NtTu8" to="zaxg:2vPZMAmJaEJ" resolve="level" />
        <ref role="1k5W1q" to="vpip:2vPZMAnwE1f" resolve="RHTMLOrJsOrCSS" />
      </node>
      <node concept="3F0ifn" id="2vPZMAmJaEW" role="3EZMnx">
        <property role="3F0ifm" value="&gt;" />
        <ref role="1k5W1q" to="vpip:2vPZMAmxCQO" resolve="RKeyword" />
        <node concept="11L4FC" id="2vPZMAmJaF6" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
      </node>
      <node concept="3F1sOY" id="2vPZMAmJaF8" role="3EZMnx">
        <ref role="1NtTu8" to="zaxg:2vPZMAmJaEK" resolve="text" />
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAmMpdP">
    <ref role="1XX52x" to="zaxg:2vPZMAmMlUm" resolve="Space" />
    <node concept="PMmxH" id="2vPZMAmMpdT" role="2wV5jI">
      <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
      <ref role="1k5W1q" to="vpip:2vPZMAnOoz_" resolve="RComponent" />
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAmYEOd">
    <ref role="1XX52x" to="zaxg:2vPZMAmYEOb" resolve="ButtonLabelText" />
    <node concept="3EZMnI" id="2vPZMAmYEOg" role="2wV5jI">
      <node concept="2iRfu4" id="2vPZMAmYEOh" role="2iSdaV" />
      <node concept="PMmxH" id="2vPZMAmYEOf" role="3EZMnx">
        <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
        <ref role="1k5W1q" to="vpip:2vPZMAnOoz_" resolve="RComponent" />
      </node>
      <node concept="3F0ifn" id="2vPZMAmYEOj" role="3EZMnx">
        <property role="3F0ifm" value="[" />
        <node concept="11L4FC" id="2vPZMAmYEOr" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
        <node concept="11LMrY" id="2vPZMAmYEOw" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
      </node>
      <node concept="3F0A7n" id="2vPZMAmYEOp" role="3EZMnx">
        <ref role="1NtTu8" to="zaxg:2vPZMAmYEOc" resolve="text" />
      </node>
      <node concept="3F0ifn" id="2vPZMAmYEOm" role="3EZMnx">
        <property role="3F0ifm" value="]" />
        <node concept="11L4FC" id="2vPZMAmYEOy" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAmYWc2">
    <ref role="1XX52x" to="zaxg:2vPZMAmYEO_" resolve="Button" />
    <node concept="3EZMnI" id="2vPZMAmYWc5" role="2wV5jI">
      <node concept="2iRfu4" id="2vPZMAmYWc6" role="2iSdaV" />
      <node concept="PMmxH" id="2vPZMAmYWc4" role="3EZMnx">
        <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
        <ref role="1k5W1q" to="vpip:2vPZMAnOoz_" resolve="RComponent" />
      </node>
      <node concept="3F1sOY" id="2vPZMAmYWc8" role="3EZMnx">
        <ref role="1NtTu8" to="zaxg:2vPZMAmYEOB" resolve="label" />
      </node>
      <node concept="3F1sOY" id="2vPZMAneuaU" role="3EZMnx">
        <ref role="1NtTu8" to="zaxg:2vPZMAneuaN" resolve="command" />
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAn8wH8">
    <ref role="1XX52x" to="zaxg:2vPZMAn8wb$" resolve="ButtonLabelIcon" />
    <node concept="3EZMnI" id="2vPZMAn8wHa" role="2wV5jI">
      <node concept="2iRfu4" id="2vPZMAn8wHb" role="2iSdaV" />
      <node concept="PMmxH" id="2vPZMAn8wHc" role="3EZMnx">
        <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
        <ref role="1k5W1q" to="vpip:2vPZMAnOoz_" resolve="RComponent" />
      </node>
      <node concept="3F0ifn" id="2vPZMAn8wHd" role="3EZMnx">
        <property role="3F0ifm" value="[" />
        <node concept="11L4FC" id="2vPZMAn8wHe" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
        <node concept="11LMrY" id="2vPZMAn8wHf" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
      </node>
      <node concept="3F1sOY" id="2vPZMAnBVXu" role="3EZMnx">
        <ref role="1NtTu8" to="zaxg:2vPZMAnBVHD" resolve="icon" />
      </node>
      <node concept="3F0ifn" id="2vPZMAn8wHh" role="3EZMnx">
        <property role="3F0ifm" value="]" />
        <node concept="11L4FC" id="2vPZMAn8wHi" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAneuaD">
    <ref role="1XX52x" to="zaxg:2vPZMAneuaB" resolve="Command" />
    <node concept="3EZMnI" id="2vPZMAnhbMR" role="2wV5jI">
      <ref role="1k5W1q" to="vpip:2vPZMAn1cgK" resolve="RCode" />
      <node concept="2iRfu4" id="2vPZMAnhbMS" role="2iSdaV" />
      <node concept="3EZMnI" id="2vPZMAneuaI" role="3EZMnx">
        <node concept="l2Vlx" id="2vPZMAngqbn" role="2iSdaV" />
        <node concept="PMmxH" id="2vPZMAneuaH" role="3EZMnx">
          <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
          <ref role="1k5W1q" to="vpip:2vPZMAmxCQO" resolve="RKeyword" />
        </node>
        <node concept="3F0ifn" id="2vPZMAngqbq" role="3EZMnx">
          <property role="3F0ifm" value="{" />
          <node concept="pkWqt" id="2vPZMAngqbs" role="pqm2j">
            <node concept="3clFbS" id="2vPZMAngqbt" role="2VODD2">
              <node concept="3clFbF" id="2vPZMAngqoZ" role="3cqZAp">
                <node concept="2OqwBi" id="2vPZMAngYWV" role="3clFbG">
                  <node concept="pncrf" id="2vPZMAngY$v" role="2Oq$k0" />
                  <node concept="2qgKlT" id="2vPZMAngZh2" role="2OqNvi">
                    <ref role="37wK5l" to="7923:2vPZMAngLCS" resolve="layoutMultiline" />
                  </node>
                </node>
              </node>
            </node>
          </node>
        </node>
        <node concept="3F1sOY" id="2vPZMAneuaL" role="3EZMnx">
          <ref role="1NtTu8" to="zaxg:2vPZMAneuaC" resolve="statements" />
          <node concept="lj46D" id="2vPZMAnh16u" role="3F10Kt">
            <property role="VOm3f" value="true" />
            <node concept="3nzxsE" id="2vPZMAnh19F" role="3n$kyP">
              <node concept="3clFbS" id="2vPZMAnh19G" role="2VODD2">
                <node concept="3clFbF" id="2vPZMAnh19I" role="3cqZAp">
                  <node concept="2OqwBi" id="2vPZMAnh19K" role="3clFbG">
                    <node concept="pncrf" id="2vPZMAnh19L" role="2Oq$k0" />
                    <node concept="2qgKlT" id="2vPZMAnh19M" role="2OqNvi">
                      <ref role="37wK5l" to="7923:2vPZMAngLCS" resolve="layoutMultiline" />
                    </node>
                  </node>
                </node>
              </node>
            </node>
          </node>
          <node concept="pVoyu" id="2vPZMAngZZo" role="3F10Kt">
            <property role="VOm3f" value="true" />
            <node concept="3nzxsE" id="2vPZMAngZZp" role="3n$kyP">
              <node concept="3clFbS" id="2vPZMAngZZq" role="2VODD2">
                <node concept="3clFbF" id="2vPZMAnh0cU" role="3cqZAp">
                  <node concept="2OqwBi" id="2vPZMAnh0cV" role="3clFbG">
                    <node concept="pncrf" id="2vPZMAnh0cW" role="2Oq$k0" />
                    <node concept="2qgKlT" id="2vPZMAnh0cX" role="2OqNvi">
                      <ref role="37wK5l" to="7923:2vPZMAngLCS" resolve="layoutMultiline" />
                    </node>
                  </node>
                </node>
              </node>
            </node>
          </node>
        </node>
        <node concept="3F0ifn" id="2vPZMAngZy3" role="3EZMnx">
          <property role="3F0ifm" value="}" />
          <node concept="pkWqt" id="2vPZMAngZyQ" role="pqm2j">
            <node concept="3clFbS" id="2vPZMAngZyR" role="2VODD2">
              <node concept="3clFbF" id="2vPZMAngZyT" role="3cqZAp">
                <node concept="2OqwBi" id="2vPZMAngZyU" role="3clFbG">
                  <node concept="pncrf" id="2vPZMAngZyV" role="2Oq$k0" />
                  <node concept="2qgKlT" id="2vPZMAngZyW" role="2OqNvi">
                    <ref role="37wK5l" to="7923:2vPZMAngLCS" resolve="layoutMultiline" />
                  </node>
                </node>
              </node>
            </node>
          </node>
          <node concept="pVoyu" id="2vPZMAngZYA" role="3F10Kt">
            <property role="VOm3f" value="true" />
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAnBVdW">
    <ref role="1XX52x" to="zaxg:2vPZMAnBVdU" resolve="Icon" />
    <node concept="3EZMnI" id="2vPZMAnBVdZ" role="2wV5jI">
      <node concept="2iRfu4" id="2vPZMAnBVe0" role="2iSdaV" />
      <node concept="PMmxH" id="2vPZMAnBVdY" role="3EZMnx">
        <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
        <ref role="1k5W1q" to="vpip:2vPZMAmxCQO" resolve="RKeyword" />
      </node>
      <node concept="3F0ifn" id="2vPZMAnBVe2" role="3EZMnx">
        <property role="3F0ifm" value="/" />
        <node concept="11L4FC" id="2vPZMAnBVe8" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
        <node concept="11LMrY" id="2vPZMAnBVea" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
      </node>
      <node concept="3F0A7n" id="2vPZMAnBVed" role="3EZMnx">
        <ref role="1NtTu8" to="zaxg:2vPZMAnBVdV" resolve="name" />
        <ref role="1k5W1q" to="vpip:2vPZMAnwE1f" resolve="RHTMLOrJsOrCSS" />
        <node concept="OXEIz" id="2vPZMAnBVtQ" role="P5bDN">
          <node concept="PvTIS" id="2vPZMAnBVtR" role="OY2wv">
            <node concept="MLZmj" id="2vPZMAnBVtS" role="PvTIR">
              <node concept="3clFbS" id="2vPZMAnBVtT" role="2VODD2">
                <node concept="3clFbF" id="2vPZMAnBVtU" role="3cqZAp">
                  <node concept="2YIFZM" id="2vPZMAnBVtV" role="3clFbG">
                    <ref role="37wK5l" to="vpip:2vPZMAn8yu1" resolve="listOfReactComponentNamesStartingWith" />
                    <ref role="1Pybhc" to="vpip:2vPZMAn8x2M" resolve="ReactComponentProvider" />
                    <node concept="Xl_RD" id="2vPZMAnBVtW" role="37wK5m">
                      <property role="Xl_RC" value="mui.icons" />
                    </node>
                  </node>
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
      <node concept="3F0ifn" id="2vPZMAnBVe5" role="3EZMnx">
        <property role="3F0ifm" value="/" />
        <node concept="11L4FC" id="2vPZMAnBVe7" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAnEQ4m">
    <ref role="1XX52x" to="zaxg:2vPZMAnBVdN" resolve="Accordion" />
    <node concept="3EZMnI" id="2vPZMAnEQ4p" role="2wV5jI">
      <node concept="2iRfu4" id="2vPZMAnEQ4q" role="2iSdaV" />
      <node concept="PMmxH" id="2vPZMAnEQ4o" role="3EZMnx">
        <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
        <ref role="1k5W1q" to="vpip:2vPZMAnOoz_" resolve="RComponent" />
      </node>
      <node concept="3EZMnI" id="2vPZMAnEQ4$" role="3EZMnx">
        <node concept="2iRkQZ" id="2vPZMAnEQ4_" role="2iSdaV" />
        <node concept="3EZMnI" id="2vPZMAnEQ4K" role="3EZMnx">
          <node concept="2iRfu4" id="2vPZMAnEQ4L" role="2iSdaV" />
          <node concept="3F0ifn" id="2vPZMAnEQ4M" role="3EZMnx">
            <property role="3F0ifm" value="icon:   " />
            <ref role="1k5W1q" to="vpip:2vPZMAnQeIL" resolve="RComponentSub" />
          </node>
          <node concept="3F1sOY" id="2vPZMAnEQ4P" role="3EZMnx">
            <ref role="1NtTu8" to="zaxg:2vPZMAnEJvM" resolve="icon" />
          </node>
        </node>
        <node concept="3EZMnI" id="2vPZMAnEQ4y" role="3EZMnx">
          <node concept="2iRfu4" id="2vPZMAnEQ4z" role="2iSdaV" />
          <node concept="3F0ifn" id="2vPZMAnEQ4s" role="3EZMnx">
            <property role="3F0ifm" value="summary:" />
            <ref role="1k5W1q" to="vpip:2vPZMAnQeIL" resolve="RComponentSub" />
          </node>
          <node concept="3F1sOY" id="2vPZMAnEQ4v" role="3EZMnx">
            <ref role="1NtTu8" to="zaxg:2vPZMAnBVdP" resolve="summary" />
          </node>
        </node>
        <node concept="3EZMnI" id="2vPZMAnEQ4A" role="3EZMnx">
          <node concept="2iRfu4" id="2vPZMAnEQ4B" role="2iSdaV" />
          <node concept="3F0ifn" id="2vPZMAnEQ4C" role="3EZMnx">
            <property role="3F0ifm" value="details:" />
            <ref role="1k5W1q" to="vpip:2vPZMAnQeIL" resolve="RComponentSub" />
          </node>
          <node concept="3F2HdR" id="2vPZMAnEQ4F" role="3EZMnx">
            <ref role="1NtTu8" to="zaxg:2vPZMAmEVPK" resolve="children" />
            <node concept="2iRkQZ" id="2vPZMAnEQ4I" role="2czzBx" />
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAnIc9d">
    <ref role="1XX52x" to="zaxg:2vPZMAnIaRS" resolve="Box" />
    <node concept="3EZMnI" id="2vPZMAnK4v$" role="2wV5jI">
      <node concept="2iRkQZ" id="2vPZMAnK4v_" role="2iSdaV" />
      <node concept="3EZMnI" id="2vPZMAnIc9k" role="3EZMnx">
        <node concept="2iRfu4" id="2vPZMAnIc9l" role="2iSdaV" />
        <node concept="PMmxH" id="2vPZMAnIc9j" role="3EZMnx">
          <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
          <ref role="1k5W1q" to="vpip:2vPZMAnOoz_" resolve="RComponent" />
        </node>
        <node concept="3F0ifn" id="2vPZMAnIc9n" role="3EZMnx">
          <property role="3F0ifm" value="{" />
          <ref role="1k5W1q" to="vpip:2vPZMAmxCQO" resolve="RKeyword" />
        </node>
      </node>
      <node concept="3EZMnI" id="2vPZMAnK4vB" role="3EZMnx">
        <node concept="2iRfu4" id="2vPZMAnK4vC" role="2iSdaV" />
        <node concept="3XFhqQ" id="2vPZMAnK4vE" role="3EZMnx" />
        <node concept="3F1sOY" id="2vPZMAnIc9q" role="3EZMnx">
          <ref role="1NtTu8" to="zaxg:2vPZMAnIaRX" resolve="child" />
        </node>
      </node>
      <node concept="3F0ifn" id="2vPZMAnK4vA" role="3EZMnx">
        <property role="3F0ifm" value="}" />
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAnZ0cq">
    <ref role="1XX52x" to="zaxg:2vPZMAnZ0ck" resolve="State" />
    <node concept="3EZMnI" id="2vPZMAnZ0cz" role="2wV5jI">
      <node concept="2iRkQZ" id="2vPZMAnZ0c$" role="2iSdaV" />
      <node concept="3EZMnI" id="2vPZMAnZ1Ao" role="3EZMnx">
        <node concept="2iRfu4" id="2vPZMAnZ1Ap" role="2iSdaV" />
        <node concept="3EZMnI" id="2vPZMAnZ0cu" role="3EZMnx">
          <ref role="1k5W1q" to="vpip:2vPZMAn1cgK" resolve="RBehaviorCode" />
          <node concept="2iRfu4" id="2vPZMAnZ0cv" role="2iSdaV" />
          <node concept="3F0ifn" id="2vPZMAnZ0cs" role="3EZMnx">
            <property role="3F0ifm" value="state" />
            <ref role="1k5W1q" to="vpip:2vPZMAnOoz_" resolve="RComponent" />
          </node>
          <node concept="3F2HdR" id="2vPZMAnZ0cK" role="3EZMnx">
            <ref role="1NtTu8" to="zaxg:2vPZMAnZ0cp" resolve="variables" />
            <node concept="2EHx9g" id="2vPZMAnZ0cN" role="2czzBx" />
            <node concept="3F0ifn" id="2vPZMAnZ0cP" role="2czzBI">
              <property role="3F0ifm" value="" />
              <property role="ilYzB" value="&lt;variables&gt;" />
            </node>
          </node>
        </node>
        <node concept="3F0ifn" id="2vPZMAnZ0cx" role="3EZMnx">
          <property role="3F0ifm" value="{" />
        </node>
      </node>
      <node concept="3EZMnI" id="2vPZMAnZ0cB" role="3EZMnx">
        <node concept="VPM3Z" id="2vPZMAnZ0cD" role="3F10Kt" />
        <node concept="3XFhqQ" id="2vPZMAnZ0cH" role="3EZMnx" />
        <node concept="2iRfu4" id="2vPZMAnZ0cG" role="2iSdaV" />
        <node concept="3F2HdR" id="2vPZMAnZ0cR" role="3EZMnx">
          <ref role="1NtTu8" to="zaxg:2vPZMAmEVPK" resolve="children" />
          <node concept="2iRkQZ" id="2vPZMAnZ0cU" role="2czzBx" />
        </node>
      </node>
      <node concept="3F0ifn" id="2vPZMAnZ0c_" role="3EZMnx">
        <property role="3F0ifm" value="}" />
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAolrZf">
    <ref role="1XX52x" to="zaxg:2vPZMAolrZd" resolve="ShowAndEdit" />
    <node concept="3EZMnI" id="2vPZMAolrZq" role="2wV5jI">
      <node concept="2iRkQZ" id="2vPZMAolrZr" role="2iSdaV" />
      <node concept="3EZMnI" id="2vPZMAolrZk" role="3EZMnx">
        <node concept="2iRfu4" id="2vPZMAolrZl" role="2iSdaV" />
        <node concept="PMmxH" id="2vPZMAolrZj" role="3EZMnx">
          <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
          <ref role="1k5W1q" to="vpip:2vPZMAnOoz_" resolve="RComponent" />
        </node>
        <node concept="3F0ifn" id="2vPZMAolrZo" role="3EZMnx">
          <property role="3F0ifm" value="{" />
        </node>
      </node>
      <node concept="3EZMnI" id="2vPZMAolrZw" role="3EZMnx">
        <node concept="2iRfu4" id="2vPZMAolrZx" role="2iSdaV" />
        <node concept="3XFhqQ" id="2vPZMAolrZt" role="3EZMnx" />
        <node concept="3F1sOY" id="2vPZMAorDiK" role="3EZMnx">
          <ref role="1NtTu8" to="zaxg:2vPZMAnIaRX" resolve="child" />
        </node>
      </node>
      <node concept="3F0ifn" id="2vPZMAolrZv" role="3EZMnx">
        <property role="3F0ifm" value="}" />
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAonvg$">
    <ref role="1XX52x" to="zaxg:2vPZMAonvgy" resolve="PlainDiv" />
    <node concept="3EZMnI" id="2vPZMAonvgB" role="2wV5jI">
      <node concept="2iRkQZ" id="2vPZMAonvgC" role="2iSdaV" />
      <node concept="3EZMnI" id="2vPZMAonvgD" role="3EZMnx">
        <node concept="2iRfu4" id="2vPZMAonvgE" role="2iSdaV" />
        <node concept="PMmxH" id="2vPZMAonvgF" role="3EZMnx">
          <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
          <ref role="1k5W1q" to="vpip:2vPZMAnOoz_" resolve="RComponent" />
        </node>
        <node concept="3F0ifn" id="2vPZMAonvgG" role="3EZMnx">
          <property role="3F0ifm" value="{" />
        </node>
      </node>
      <node concept="3EZMnI" id="2vPZMAonvgH" role="3EZMnx">
        <node concept="2iRfu4" id="2vPZMAonvgI" role="2iSdaV" />
        <node concept="3XFhqQ" id="2vPZMAonvgJ" role="3EZMnx" />
        <node concept="3F2HdR" id="2vPZMAonvgK" role="3EZMnx">
          <ref role="1NtTu8" to="zaxg:2vPZMAmEVPK" resolve="children" />
          <node concept="2iRkQZ" id="2vPZMAonvgL" role="2czzBx" />
        </node>
      </node>
      <node concept="3F0ifn" id="2vPZMAonvgM" role="3EZMnx">
        <property role="3F0ifm" value="}" />
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAoGIbs">
    <ref role="1XX52x" to="zaxg:2vPZMAoGIbo" resolve="LabelWidgetPair" />
    <node concept="3EZMnI" id="2vPZMAoGIbx" role="2wV5jI">
      <node concept="2iRfu4" id="2vPZMAoGIby" role="2iSdaV" />
      <node concept="PMmxH" id="2vPZMAoGIbw" role="3EZMnx">
        <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
        <ref role="1k5W1q" to="vpip:2vPZMAnOoz_" resolve="RComponent" />
      </node>
      <node concept="3F1sOY" id="2vPZMAoGIb$" role="3EZMnx">
        <ref role="1NtTu8" to="zaxg:2vPZMAoGIbq" resolve="label" />
      </node>
      <node concept="3F0ifn" id="2vPZMAoGIbB" role="3EZMnx">
        <property role="3F0ifm" value="with" />
        <ref role="1k5W1q" to="vpip:2vPZMAnQeIL" resolve="RComponentSub" />
      </node>
      <node concept="3F1sOY" id="2vPZMAoGIbE" role="3EZMnx">
        <ref role="1NtTu8" to="zaxg:2vPZMAoGIbr" resolve="widget" />
      </node>
    </node>
  </node>
</model>

