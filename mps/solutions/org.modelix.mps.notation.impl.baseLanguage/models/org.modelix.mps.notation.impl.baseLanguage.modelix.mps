<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:9565a1ac-337e-4f9a-93cc-5026eb7e7382(org.modelix.mps.notation.impl.baseLanguage.modelix)">
  <persistence version="9" />
  <languages>
    <use id="c7b55726-1795-47bd-aa21-714ac1e30f21" name="org.modelix.mps.notation" version="0" />
  </languages>
  <imports>
    <import index="tpee" ref="r:00000000-0000-4000-0000-011c895902ca(jetbrains.mps.baseLanguage.structure)" />
  </imports>
  <registry>
    <language id="c7b55726-1795-47bd-aa21-714ac1e30f21" name="org.modelix.mps.notation">
      <concept id="8310867745953158874" name="org.modelix.mps.notation.structure.ConstantCell" flags="ng" index="3JB3jO">
        <property id="8310867745953159745" name="text" index="3JB3xJ" />
      </concept>
      <concept id="8310867745953062360" name="org.modelix.mps.notation.structure.NotationModule" flags="ng" index="3JBFZQ">
        <child id="8310867745953085065" name="content" index="3JBHiB" />
      </concept>
      <concept id="8310867745953086317" name="org.modelix.mps.notation.structure.ConceptNotation" flags="ng" index="3JBH_3">
        <reference id="8310867745953086698" name="concept" index="3JBHV4" />
        <child id="8310867745953087407" name="cell" index="3JBHQ1" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
  </registry>
  <node concept="3JBFZQ" id="63DBII8q9zu">
    <property role="TrG5h" value="BaseLanguageEditor" />
    <node concept="3JBH_3" id="63DBII8q9F5" role="3JBHiB">
      <ref role="3JBHV4" to="tpee:fz12cDA" resolve="ClassConcept" />
      <node concept="3JB3jO" id="63DBII8q9Mk" role="3JBHQ1">
        <property role="3JB3xJ" value="class" />
      </node>
    </node>
  </node>
</model>

