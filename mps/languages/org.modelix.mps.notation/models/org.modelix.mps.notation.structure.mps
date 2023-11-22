<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:37580d55-803b-40f6-8108-d95a9fce8d6e(org.modelix.mps.notation.structure)">
  <persistence version="9" />
  <languages>
    <devkit ref="78434eb8-b0e5-444b-850d-e7c4ad2da9ab(jetbrains.mps.devkit.aspect.structure)" />
  </languages>
  <imports>
    <import index="tpce" ref="r:00000000-0000-4000-0000-011c89590292(jetbrains.mps.lang.structure.structure)" />
    <import index="hcm8" ref="r:72a7bf00-0175-42ca-b99b-fe8519b6a16f(jetbrains.mps.kotlin.structure)" />
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="c72da2b9-7cce-4447-8389-f407dc1158b7" name="jetbrains.mps.lang.structure">
      <concept id="1169125787135" name="jetbrains.mps.lang.structure.structure.AbstractConceptDeclaration" flags="ig" index="PkWjJ">
        <property id="6714410169261853888" name="conceptId" index="EcuMT" />
        <property id="5092175715804935370" name="conceptAlias" index="34LRSv" />
        <child id="1071489727083" name="linkDeclaration" index="1TKVEi" />
        <child id="1071489727084" name="propertyDeclaration" index="1TKVEl" />
      </concept>
      <concept id="1169125989551" name="jetbrains.mps.lang.structure.structure.InterfaceConceptDeclaration" flags="ig" index="PlHQZ" />
      <concept id="1169127622168" name="jetbrains.mps.lang.structure.structure.InterfaceConceptReference" flags="ig" index="PrWs8">
        <reference id="1169127628841" name="intfc" index="PrY4T" />
      </concept>
      <concept id="1071489090640" name="jetbrains.mps.lang.structure.structure.ConceptDeclaration" flags="ig" index="1TIwiD">
        <property id="1096454100552" name="rootable" index="19KtqR" />
        <reference id="1071489389519" name="extends" index="1TJDcQ" />
        <child id="1169129564478" name="implements" index="PzmwI" />
      </concept>
      <concept id="1071489288299" name="jetbrains.mps.lang.structure.structure.PropertyDeclaration" flags="ig" index="1TJgyi">
        <property id="241647608299431129" name="propertyId" index="IQ2nx" />
        <reference id="1082985295845" name="dataType" index="AX2Wp" />
      </concept>
      <concept id="1071489288298" name="jetbrains.mps.lang.structure.structure.LinkDeclaration" flags="ig" index="1TJgyj">
        <property id="1071599776563" name="role" index="20kJfa" />
        <property id="1071599893252" name="sourceCardinality" index="20lbJX" />
        <property id="1071599937831" name="metaClass" index="20lmBu" />
        <property id="241647608299431140" name="linkId" index="IQ2ns" />
        <reference id="1071599976176" name="target" index="20lvS9" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
  </registry>
  <node concept="1TIwiD" id="7dm8yUsM9Ro">
    <property role="EcuMT" value="8310867745953062360" />
    <property role="TrG5h" value="NotationModule" />
    <property role="19KtqR" value="true" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="1TJgyj" id="7dm8yUsMfq9" role="1TKVEi">
      <property role="IQ2ns" value="8310867745953085065" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="content" />
      <property role="20lbJX" value="fLJekj5/_0__n" />
      <ref role="20lvS9" node="7dm8yUsMflU" resolve="INotationModuleContent" />
    </node>
    <node concept="PrWs8" id="7dm8yUsMfwV" role="PzmwI">
      <ref role="PrY4T" to="tpck:h0TrEE$" resolve="INamedConcept" />
    </node>
  </node>
  <node concept="PlHQZ" id="7dm8yUsMflU">
    <property role="EcuMT" value="8310867745953084794" />
    <property role="TrG5h" value="INotationModuleContent" />
  </node>
  <node concept="1TIwiD" id="7dm8yUsMf_c">
    <property role="EcuMT" value="8310867745953085772" />
    <property role="TrG5h" value="EmptyLine" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="7dm8yUsMfEi" role="PzmwI">
      <ref role="PrY4T" node="7dm8yUsMflU" resolve="INotationModuleContent" />
    </node>
  </node>
  <node concept="1TIwiD" id="7dm8yUsMfHH">
    <property role="EcuMT" value="8310867745953086317" />
    <property role="TrG5h" value="ConceptNotation" />
    <property role="34LRSv" value="notation" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="1TJgyj" id="7dm8yUsMfYJ" role="1TKVEi">
      <property role="IQ2ns" value="8310867745953087407" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="cell" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="7dm8yUsMxhg" resolve="ICell" />
    </node>
    <node concept="1TJgyj" id="7dm8yUsMfZC" role="1TKVEi">
      <property role="IQ2ns" value="8310867745953087464" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="condition" />
      <ref role="20lvS9" to="hcm8:2yYXHtl6Jjg" resolve="IExpression" />
    </node>
    <node concept="1TJgyj" id="7dm8yUsMfNE" role="1TKVEi">
      <property role="IQ2ns" value="8310867745953086698" />
      <property role="20kJfa" value="concept" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" to="tpce:h0PkWnZ" resolve="AbstractConceptDeclaration" />
    </node>
    <node concept="PrWs8" id="7dm8yUsMfLW" role="PzmwI">
      <ref role="PrY4T" node="7dm8yUsMflU" resolve="INotationModuleContent" />
    </node>
  </node>
  <node concept="PlHQZ" id="7dm8yUsMxhg">
    <property role="EcuMT" value="8310867745953158224" />
    <property role="TrG5h" value="ICell" />
  </node>
  <node concept="1TIwiD" id="7dm8yUsMxrq">
    <property role="EcuMT" value="8310867745953158874" />
    <property role="TrG5h" value="ConstantCell" />
    <property role="34LRSv" value="&quot;" />
    <ref role="1TJDcQ" node="7dm8yUsMxww" resolve="Cell" />
    <node concept="1TJgyi" id="7dm8yUsMxD1" role="1TKVEl">
      <property role="IQ2nx" value="8310867745953159745" />
      <property role="TrG5h" value="text" />
      <ref role="AX2Wp" to="tpck:fKAOsGN" resolve="string" />
    </node>
  </node>
  <node concept="1TIwiD" id="7dm8yUsMxww">
    <property role="EcuMT" value="8310867745953159200" />
    <property role="TrG5h" value="Cell" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="7dm8yUsMxzU" role="PzmwI">
      <ref role="PrY4T" node="7dm8yUsMxhg" resolve="ICell" />
    </node>
  </node>
</model>

