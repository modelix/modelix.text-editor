<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:c7b3ed23-5210-481b-98bd-6694ae8b3516(org.modelix.mps.baseLanguageInsideKotlin.editor)">
  <persistence version="9" />
  <languages>
    <use id="18bc6592-03a6-4e29-a83a-7ff23bde13ba" name="jetbrains.mps.lang.editor" version="14" />
    <use id="aee9cad2-acd4-4608-aef2-0004f6a1cdbd" name="jetbrains.mps.lang.actions" version="4" />
    <devkit ref="fbc25dd2-5da4-483a-8b19-70928e1b62d7(jetbrains.mps.devkit.general-purpose)" />
  </languages>
  <imports>
    <import index="j33e" ref="r:4b957436-4ade-4da9-bdbc-7588a2d8af7d(org.modelix.mps.baseLanguageInsideKotlin.structure)" implicit="true" />
    <import index="tpco" ref="r:00000000-0000-4000-0000-011c89590284(jetbrains.mps.lang.core.editor)" implicit="true" />
  </imports>
  <registry>
    <language id="18bc6592-03a6-4e29-a83a-7ff23bde13ba" name="jetbrains.mps.lang.editor">
      <concept id="1071666914219" name="jetbrains.mps.lang.editor.structure.ConceptEditorDeclaration" flags="ig" index="24kQdi" />
      <concept id="1140524381322" name="jetbrains.mps.lang.editor.structure.CellModel_ListWithRole" flags="ng" index="2czfm3">
        <property id="1140524450557" name="separatorText" index="2czwfO" />
        <child id="1140524464360" name="cellLayout" index="2czzBx" />
      </concept>
      <concept id="1237303669825" name="jetbrains.mps.lang.editor.structure.CellLayout_Indent" flags="nn" index="l2Vlx" />
      <concept id="1237307900041" name="jetbrains.mps.lang.editor.structure.IndentLayoutIndentStyleClassItem" flags="ln" index="lj46D" />
      <concept id="1237308012275" name="jetbrains.mps.lang.editor.structure.IndentLayoutNewLineStyleClassItem" flags="ln" index="ljvvj" />
      <concept id="1237385578942" name="jetbrains.mps.lang.editor.structure.IndentLayoutOnNewLineStyleClassItem" flags="ln" index="pVoyu" />
      <concept id="1080736578640" name="jetbrains.mps.lang.editor.structure.BaseEditorComponent" flags="ig" index="2wURMF">
        <child id="1080736633877" name="cellModel" index="2wV5jI" />
      </concept>
      <concept id="1078939183254" name="jetbrains.mps.lang.editor.structure.CellModel_Component" flags="sg" stub="3162947552742194261" index="PMmxH">
        <reference id="1078939183255" name="editorComponent" index="PMmxG" />
      </concept>
      <concept id="1186414536763" name="jetbrains.mps.lang.editor.structure.BooleanStyleSheetItem" flags="ln" index="VOi$J">
        <property id="1186414551515" name="flag" index="VOm3f" />
      </concept>
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
      <concept id="1073390211982" name="jetbrains.mps.lang.editor.structure.CellModel_RefNodeList" flags="sg" stub="2794558372793454595" index="3F2HdR" />
      <concept id="1166049232041" name="jetbrains.mps.lang.editor.structure.AbstractComponent" flags="ng" index="1XWOmA">
        <reference id="1166049300910" name="conceptDeclaration" index="1XX52x" />
      </concept>
    </language>
  </registry>
  <node concept="24kQdi" id="1edLqv8Ou4D">
    <ref role="1XX52x" to="j33e:1edLqv8Ou4p" resolve="BaseLanguageFunctionInKotlin" />
    <node concept="3EZMnI" id="1edLqv8Ou4F" role="2wV5jI">
      <node concept="PMmxH" id="1edLqv8Ou4P" role="3EZMnx">
        <ref role="PMmxG" to="tpco:2wZex4PafBj" resolve="alias" />
      </node>
      <node concept="3F0ifn" id="1edLqv8Ou4U" role="3EZMnx">
        <property role="3F0ifm" value="(" />
      </node>
      <node concept="3F2HdR" id="1edLqv8Ou5c" role="3EZMnx">
        <property role="2czwfO" value="," />
        <ref role="1NtTu8" to="j33e:1edLqv8Ou4y" resolve="parameterDeclarations" />
        <node concept="l2Vlx" id="1edLqv8Ou5e" role="2czzBx" />
      </node>
      <node concept="3F0ifn" id="1edLqv8Ou52" role="3EZMnx">
        <property role="3F0ifm" value=")" />
      </node>
      <node concept="3F0ifn" id="1edLqv8Ou8g" role="3EZMnx">
        <property role="3F0ifm" value=":" />
      </node>
      <node concept="3F1sOY" id="1edLqv8Ou8O" role="3EZMnx">
        <ref role="1NtTu8" to="j33e:1edLqv8Ou7U" resolve="baseLanguageReturnType" />
      </node>
      <node concept="l2Vlx" id="1edLqv8Ou4I" role="2iSdaV" />
      <node concept="3F0ifn" id="1edLqv8Ou5r" role="3EZMnx">
        <property role="3F0ifm" value="(" />
      </node>
      <node concept="3F2HdR" id="1edLqv8Ou5X" role="3EZMnx">
        <property role="2czwfO" value="," />
        <ref role="1NtTu8" to="j33e:1edLqv8Ou4_" resolve="parameterValues" />
        <node concept="l2Vlx" id="1edLqv8Ou5Z" role="2czzBx" />
      </node>
      <node concept="3F0ifn" id="1edLqv8Ou5F" role="3EZMnx">
        <property role="3F0ifm" value=")" />
      </node>
      <node concept="3F0ifn" id="1edLqv8Ou6k" role="3EZMnx">
        <property role="3F0ifm" value="{" />
        <node concept="ljvvj" id="1edLqv8Ou7k" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
      </node>
      <node concept="3F1sOY" id="1edLqv8Ou6G" role="3EZMnx">
        <ref role="1NtTu8" to="j33e:1edLqv8Ou4u" resolve="body" />
        <node concept="lj46D" id="1edLqv8Ou7o" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
      </node>
      <node concept="3F0ifn" id="1edLqv8Ou76" role="3EZMnx">
        <property role="3F0ifm" value="}" />
        <node concept="pVoyu" id="1edLqv8Ou7m" role="3F10Kt">
          <property role="VOm3f" value="true" />
        </node>
      </node>
    </node>
  </node>
</model>

