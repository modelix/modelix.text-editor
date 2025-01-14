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
      <concept id="3230484732390131948" name="ReactDemoLanguage.structure.NewTreeItem" flags="ng" index="2yINhj">
        <property id="3230484732390137903" name="b" index="2yILMg" />
        <property id="3230484732390135530" name="a" index="2yIMDl" />
        <child id="3230484732390143835" name="children" index="2yIKJ$" />
      </concept>
      <concept id="223742654175067082" name="ReactDemoLanguage.structure.Blank" flags="ng" index="GbXW8" />
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
      <concept id="793519207838200150" name="ReactDemoLanguage.structure.NewTree" flags="ng" index="3yDxjl">
        <child id="3230484732390141462" name="root" index="2yILaD" />
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
    <property role="2KaVt$" value="a23" />
    <property role="2ZffLE" value="b14" />
    <node concept="2K$1jT" id="2vPZMAnpySr" role="2K$1jV">
      <property role="TrG5h" value="N21" />
      <property role="2KaVt$" value="a43" />
      <property role="2ZffLE" value="b2" />
      <node concept="2K$1jT" id="2vPZMAnTPM4" role="2K$1jV">
        <property role="TrG5h" value="N4" />
        <property role="2KaVt$" value="a34" />
        <property role="2ZffLE" value="b2" />
      </node>
    </node>
  </node>
  <node concept="2K7qbd" id="2vPZMAnU8vT">
    <property role="2K1lSM" value="ds4" />
    <property role="2K1lSP" value="b3d" />
    <property role="2K1lSO" value="c" />
  </node>
  <node concept="GbXW8" id="cqTc8Jdncm" />
  <node concept="3yDxjl" id="2NkZbYeu4Ux">
    <property role="TrG5h" value="Tree" />
    <node concept="2yINhj" id="2NkZbYeu4Uy" role="2yILaD">
      <property role="TrG5h" value="A" />
      <property role="2yIMDl" value="a" />
      <property role="2yILMg" value="b" />
      <node concept="2yINhj" id="2NkZbYeu5M9" role="2yIKJ$">
        <property role="TrG5h" value="B1" />
        <property role="2yIMDl" value="b" />
        <property role="2yILMg" value="b" />
        <node concept="2yINhj" id="2NkZbYeu7eP" role="2yIKJ$">
          <property role="TrG5h" value="C" />
          <property role="2yIMDl" value="cx" />
          <property role="2yILMg" value="cx" />
        </node>
      </node>
      <node concept="2yINhj" id="2NkZbYeu6ne" role="2yIKJ$">
        <property role="TrG5h" value="B2" />
        <property role="2yIMDl" value="b" />
        <property role="2yILMg" value="b" />
      </node>
    </node>
  </node>
</model>

