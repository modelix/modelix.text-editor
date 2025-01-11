<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:aa998379-0c8f-43bc-9b20-8be77bb6d537(ReactDemoLanguage.sandbox.m1)">
  <persistence version="9" />
  <languages>
    <use id="dce965c2-af99-4a0c-9895-485700f46864" name="ReactDemoLanguage" version="-1" />
  </languages>
  <imports />
  <registry>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
    <language id="dce965c2-af99-4a0c-9895-485700f46864" name="ReactDemoLanguage">
      <concept id="2879488090880630244" name="ReactDemoLanguage.structure.ReadOrEdit" flags="ng" index="2K7qbd">
        <property id="2879488090881171739" name="a" index="2K1lSM" />
        <property id="2879488090881171741" name="c" index="2K1lSO" />
        <property id="2879488090881171740" name="b" index="2K1lSP" />
      </concept>
      <concept id="2879488090872081360" name="ReactDemoLanguage.structure.TreeNode" flags="ng" index="2K$1jT">
        <property id="2879488090879969357" name="a" index="2KaVt$" />
        <property id="2879488090895352643" name="b" index="2ZffLE" />
        <child id="2879488090872081362" name="children" index="2K$1jV" />
      </concept>
      <concept id="2879488090856546774" name="ReactDemoLanguage.structure.Element" flags="ng" index="2LzhVZ">
        <property id="2879488090856546775" name="label" index="2LzhVY" />
      </concept>
      <concept id="3030577733520086760" name="ReactDemoLanguage.structure.ReactRoot" flags="ng" index="1WCD2c">
        <child id="2879488090856546776" name="elements" index="2LzhVL" />
      </concept>
    </language>
  </registry>
  <node concept="1WCD2c" id="2vPZMAn5iOK">
    <property role="TrG5h" value="Example" />
    <node concept="2LzhVZ" id="2vPZMAnqKH2" role="2LzhVL">
      <property role="2LzhVY" value="added" />
    </node>
    <node concept="2LzhVZ" id="2vPZMAnqKH3" role="2LzhVL">
      <property role="2LzhVY" value="ChangeTheName" />
    </node>
    <node concept="2LzhVZ" id="2vPZMAnqKH4" role="2LzhVL">
      <property role="2LzhVY" value="added" />
    </node>
    <node concept="2LzhVZ" id="2vPZMAnqWLE" role="2LzhVL">
      <property role="2LzhVY" value="added1" />
    </node>
  </node>
  <node concept="2K$1jT" id="2vPZMAnpySp">
    <property role="TrG5h" value="N1" />
    <property role="2KaVt$" value="a2" />
    <property role="2ZffLE" value="b1" />
    <node concept="2K$1jT" id="2vPZMAnpySr" role="2K$1jV">
      <property role="TrG5h" value="N21" />
      <property role="2KaVt$" value="a4" />
      <property role="2ZffLE" value="b2" />
      <node concept="2K$1jT" id="2vPZMAnTPM4" role="2K$1jV">
        <property role="TrG5h" value="N4" />
        <property role="2KaVt$" value="a3" />
        <property role="2ZffLE" value="b2" />
      </node>
    </node>
  </node>
  <node concept="2K7qbd" id="2vPZMAnU8vT">
    <property role="2K1lSM" value="ds4" />
    <property role="2K1lSP" value="b3" />
    <property role="2K1lSO" value="c" />
  </node>
</model>

