<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:496767df-6299-4a8a-8db7-2556f090e2b6(ReactDemoLanguage.editor)">
  <persistence version="9" />
  <languages>
    <use id="18bc6592-03a6-4e29-a83a-7ff23bde13ba" name="jetbrains.mps.lang.editor" version="14" />
    <use id="aee9cad2-acd4-4608-aef2-0004f6a1cdbd" name="jetbrains.mps.lang.actions" version="4" />
    <devkit ref="fbc25dd2-5da4-483a-8b19-70928e1b62d7(jetbrains.mps.devkit.general-purpose)" />
  </languages>
  <imports>
    <import index="oyym" ref="r:1570828e-e9a4-47ff-95d9-80c800704647(ReactDemoLanguage.structure)" implicit="true" />
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="18bc6592-03a6-4e29-a83a-7ff23bde13ba" name="jetbrains.mps.lang.editor">
      <concept id="1071666914219" name="jetbrains.mps.lang.editor.structure.ConceptEditorDeclaration" flags="ig" index="24kQdi" />
      <concept id="1140524381322" name="jetbrains.mps.lang.editor.structure.CellModel_ListWithRole" flags="ng" index="2czfm3">
        <child id="1140524464360" name="cellLayout" index="2czzBx" />
      </concept>
      <concept id="1106270549637" name="jetbrains.mps.lang.editor.structure.CellLayout_Horizontal" flags="nn" index="2iRfu4" />
      <concept id="1106270571710" name="jetbrains.mps.lang.editor.structure.CellLayout_Vertical" flags="nn" index="2iRkQZ" />
      <concept id="1080736578640" name="jetbrains.mps.lang.editor.structure.BaseEditorComponent" flags="ig" index="2wURMF">
        <child id="1080736633877" name="cellModel" index="2wV5jI" />
      </concept>
      <concept id="1186414928363" name="jetbrains.mps.lang.editor.structure.SelectableStyleSheetItem" flags="ln" index="VPM3Z" />
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
      <concept id="1073389658414" name="jetbrains.mps.lang.editor.structure.CellModel_Property" flags="sg" stub="730538219796134133" index="3F0A7n" />
      <concept id="1219418625346" name="jetbrains.mps.lang.editor.structure.IStyleContainer" flags="ngI" index="3F0Thp">
        <child id="1219418656006" name="styleItem" index="3F10Kt" />
      </concept>
      <concept id="1073390211982" name="jetbrains.mps.lang.editor.structure.CellModel_RefNodeList" flags="sg" stub="2794558372793454595" index="3F2HdR" />
      <concept id="1198256887712" name="jetbrains.mps.lang.editor.structure.CellModel_Indent" flags="ng" index="3XFhqQ" />
      <concept id="1166049232041" name="jetbrains.mps.lang.editor.structure.AbstractComponent" flags="ng" index="1XWOmA">
        <reference id="1166049300910" name="conceptDeclaration" index="1XX52x" />
      </concept>
    </language>
  </registry>
  <node concept="24kQdi" id="2vPZMAmurkq">
    <ref role="1XX52x" to="oyym:2CeLAhmF5rC" resolve="ReactRoot" />
    <node concept="3EZMnI" id="2vPZMAmurku" role="2wV5jI">
      <node concept="2iRkQZ" id="2vPZMAmurkv" role="2iSdaV" />
      <node concept="3EZMnI" id="2vPZMAmuDuJ" role="3EZMnx">
        <node concept="2iRfu4" id="2vPZMAmuDuK" role="2iSdaV" />
        <node concept="3F0ifn" id="2vPZMAmurks" role="3EZMnx">
          <property role="3F0ifm" value="Root" />
        </node>
        <node concept="3F0A7n" id="2vPZMAmuDuM" role="3EZMnx">
          <ref role="1NtTu8" to="tpck:h0TrG11" resolve="name" />
        </node>
      </node>
      <node concept="3EZMnI" id="2vPZMAmurkx" role="3EZMnx">
        <node concept="VPM3Z" id="2vPZMAmurkz" role="3F10Kt" />
        <node concept="3XFhqQ" id="2vPZMAmurkB" role="3EZMnx" />
        <node concept="3F2HdR" id="2vPZMAmurkE" role="3EZMnx">
          <ref role="1NtTu8" to="oyym:2vPZMAmue7o" resolve="elements" />
          <node concept="2iRkQZ" id="2vPZMAmurkH" role="2czzBx" />
        </node>
        <node concept="2iRfu4" id="2vPZMAmurkA" role="2iSdaV" />
      </node>
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAmurkJ">
    <ref role="1XX52x" to="oyym:2vPZMAmue7m" resolve="Element" />
    <node concept="3F0A7n" id="2vPZMAmurkL" role="2wV5jI">
      <ref role="1NtTu8" to="oyym:2vPZMAmue7n" resolve="label" />
    </node>
  </node>
  <node concept="24kQdi" id="2vPZMAnpuJj">
    <ref role="1XX52x" to="oyym:2vPZMAnpuJg" resolve="TreeNode" />
    <node concept="3EZMnI" id="2vPZMAnpuJs" role="2wV5jI">
      <node concept="2iRkQZ" id="2vPZMAnpuJt" role="2iSdaV" />
      <node concept="3EZMnI" id="2vPZMAnpuJl" role="3EZMnx">
        <node concept="2iRfu4" id="2vPZMAnpuJm" role="2iSdaV" />
        <node concept="3F0ifn" id="2vPZMAnpuJn" role="3EZMnx">
          <property role="3F0ifm" value="tree" />
        </node>
        <node concept="3F0A7n" id="2vPZMAnpuJq" role="3EZMnx">
          <ref role="1NtTu8" to="tpck:h0TrG11" resolve="name" />
        </node>
        <node concept="3F0ifn" id="2vPZMAnR$_X" role="3EZMnx">
          <property role="3F0ifm" value="|" />
        </node>
        <node concept="3F0A7n" id="2vPZMAnR$A0" role="3EZMnx">
          <ref role="1NtTu8" to="oyym:2vPZMAnR$xd" resolve="a" />
        </node>
        <node concept="3F0ifn" id="5E6heSJzhEM" role="3EZMnx">
          <property role="3F0ifm" value="|" />
        </node>
        <node concept="3F0A7n" id="5E6heSJzhEI" role="3EZMnx">
          <ref role="1NtTu8" to="oyym:2vPZMAoMgd3" resolve="b" />
        </node>
      </node>
      <node concept="3EZMnI" id="2vPZMAnpuJv" role="3EZMnx">
        <node concept="VPM3Z" id="2vPZMAnpuJx" role="3F10Kt" />
        <node concept="3XFhqQ" id="2vPZMAnpuJ_" role="3EZMnx" />
        <node concept="3F2HdR" id="2vPZMAnpuJC" role="3EZMnx">
          <ref role="1NtTu8" to="oyym:2vPZMAnpuJi" resolve="children" />
          <node concept="2iRkQZ" id="2vPZMAnpuJF" role="2czzBx" />
        </node>
        <node concept="2iRfu4" id="2vPZMAnpuJ$" role="2iSdaV" />
      </node>
    </node>
  </node>
</model>

