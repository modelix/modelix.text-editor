<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:3c6900e1-3563-489d-a542-86dadfd9e6db(org.modelix.mps.baseLanguage2kotlin.editor)">
  <persistence version="9" />
  <languages>
    <use id="18bc6592-03a6-4e29-a83a-7ff23bde13ba" name="jetbrains.mps.lang.editor" version="14" />
    <use id="aee9cad2-acd4-4608-aef2-0004f6a1cdbd" name="jetbrains.mps.lang.actions" version="4" />
    <devkit ref="fbc25dd2-5da4-483a-8b19-70928e1b62d7(jetbrains.mps.devkit.general-purpose)" />
  </languages>
  <imports>
    <import index="tpco" ref="r:00000000-0000-4000-0000-011c89590284(jetbrains.mps.lang.core.editor)" />
    <import index="f8gn" ref="r:37580d55-803b-40f6-8108-d95a9fce8d6e(org.modelix.mps.notation.structure)" />
    <import index="ya4x" ref="r:2bbee5fa-3e86-4d20-a22d-b5d5f139bede(org.modelix.mps.baseLanguage2kotlin.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="18bc6592-03a6-4e29-a83a-7ff23bde13ba" name="jetbrains.mps.lang.editor">
      <concept id="1071666914219" name="jetbrains.mps.lang.editor.structure.ConceptEditorDeclaration" flags="ig" index="24kQdi" />
      <concept id="1237303669825" name="jetbrains.mps.lang.editor.structure.CellLayout_Indent" flags="nn" index="l2Vlx" />
      <concept id="1080736578640" name="jetbrains.mps.lang.editor.structure.BaseEditorComponent" flags="ig" index="2wURMF">
        <child id="1080736633877" name="cellModel" index="2wV5jI" />
      </concept>
      <concept id="1078939183254" name="jetbrains.mps.lang.editor.structure.CellModel_Component" flags="sg" stub="3162947552742194261" index="PMmxH">
        <reference id="1078939183255" name="editorComponent" index="PMmxG" />
      </concept>
      <concept id="1186414536763" name="jetbrains.mps.lang.editor.structure.BooleanStyleSheetItem" flags="ln" index="VOi$J">
        <property id="1186414551515" name="flag" index="VOm3f" />
      </concept>
      <concept id="1233758997495" name="jetbrains.mps.lang.editor.structure.PunctuationLeftStyleClassItem" flags="ln" index="11L4FC" />
      <concept id="1233759184865" name="jetbrains.mps.lang.editor.structure.PunctuationRightStyleClassItem" flags="ln" index="11LMrY" />
      <concept id="1139848536355" name="jetbrains.mps.lang.editor.structure.CellModel_WithRole" flags="ng" index="1$h60E">
        <reference id="1140103550593" name="relationDeclaration" index="1NtTu8" />
      </concept>
      <concept id="1073389446423" name="jetbrains.mps.lang.editor.structure.CellModel_Collection" flags="sn" stub="3013115976261988961" index="3EZMnI">
        <child id="1106270802874" name="cellLayout" index="2iSdaV" />
        <child id="1073389446424" name="childCellModel" index="3EZMnx" />
      </concept>
      <concept id="1073389577006" name="jetbrains.mps.lang.editor.structure.CellModel_Constant" flags="sn" stub="3610246225209162225" index="3F0ifn">
        <property id="1073389577007" name="text" index="3F0ifm" />
      </concept>
      <concept id="1219418625346" name="jetbrains.mps.lang.editor.structure.IStyleContainer" flags="ngI" index="3F0Thp">
        <child id="1219418656006" name="styleItem" index="3F10Kt" />
      </concept>
      <concept id="1073389882823" name="jetbrains.mps.lang.editor.structure.CellModel_RefNode" flags="sg" stub="730538219795960754" index="3F1sOY" />
      <concept id="1166049232041" name="jetbrains.mps.lang.editor.structure.AbstractComponent" flags="ng" index="1XWOmA">
        <reference id="1166049300910" name="conceptDeclaration" index="1XX52x" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1133920641626" name="jetbrains.mps.lang.core.structure.BaseConcept" flags="ng" index="2VYdi">
        <property id="1193676396447" name="virtualPackage" index="3GE5qa" />
      </concept>
    </language>
  </registry>
  <node concept="24kQdi" id="22f9nDgO5gA">
    <property role="3GE5qa" value="expressions" />
    <ref role="1XX52x" to="ya4x:22f9nDgNaE0" resolve="BaseLanguageExpressionWrapper" />
    <node concept="3EZMnI" id="22f9nDgNaEr" role="2wV5jI">
      <node concept="PMmxH" id="22f9nDgNaEy" role="3EZMnx">
        <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
      </node>
      <node concept="3F0ifn" id="22f9nDgNaEB" role="3EZMnx">
        <property role="3F0ifm" value="/" />
        <node concept="11L4FC" id="22f9nDgNaEQ" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
        <node concept="11LMrY" id="22f9nDgNaEV" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
      </node>
      <node concept="l2Vlx" id="22f9nDgNaEu" role="2iSdaV" />
      <node concept="3F1sOY" id="22f9nDgNaF5" role="3EZMnx">
        <ref role="1NtTu8" to="ya4x:22f9nDgNaE3" resolve="expression" />
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="22f9nDgO5gM">
    <property role="3GE5qa" value="expressions" />
    <ref role="1XX52x" to="ya4x:22f9nDgNaE5" resolve="KotlinExpressionWrapper" />
    <node concept="3EZMnI" id="22f9nDgO5gO" role="2wV5jI">
      <node concept="PMmxH" id="22f9nDgO5gP" role="3EZMnx">
        <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
      </node>
      <node concept="3F0ifn" id="22f9nDgO5gQ" role="3EZMnx">
        <property role="3F0ifm" value="/" />
        <node concept="11L4FC" id="22f9nDgO5gR" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
        <node concept="11LMrY" id="22f9nDgO5gS" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
      </node>
      <node concept="l2Vlx" id="22f9nDgO5gT" role="2iSdaV" />
      <node concept="3F1sOY" id="22f9nDgO5gU" role="3EZMnx">
        <ref role="1NtTu8" to="ya4x:22f9nDgNaE8" resolve="expression" />
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="22f9nDgPjTF">
    <property role="3GE5qa" value="expressions" />
    <ref role="1XX52x" to="ya4x:22f9nDgPjTA" resolve="ConvertToKotlin" />
    <node concept="3EZMnI" id="22f9nDgPjTK" role="2wV5jI">
      <node concept="3F0ifn" id="22f9nDgPjTM" role="3EZMnx">
        <property role="3F0ifm" value="covertToKotlin(" />
      </node>
      <node concept="3F1sOY" id="22f9nDgPjU2" role="3EZMnx">
        <ref role="1NtTu8" to="ya4x:22f9nDgPjTD" resolve="expression" />
      </node>
      <node concept="3F0ifn" id="22f9nDgPjTU" role="3EZMnx">
        <property role="3F0ifm" value=")" />
      </node>
      <node concept="l2Vlx" id="22f9nDgPjTN" role="2iSdaV" />
    </node>
  </node>
</model>
