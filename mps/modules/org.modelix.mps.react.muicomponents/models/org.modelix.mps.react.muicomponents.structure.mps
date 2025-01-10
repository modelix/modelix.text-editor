<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:c4183f14-1033-4ade-be7c-1beadb184134(org.modelix.mps.react.muicomponents.structure)">
  <persistence version="9" />
  <languages>
    <devkit ref="78434eb8-b0e5-444b-850d-e7c4ad2da9ab(jetbrains.mps.devkit.aspect.structure)" />
  </languages>
  <imports>
    <import index="tpce" ref="r:00000000-0000-4000-0000-011c89590292(jetbrains.mps.lang.structure.structure)" />
    <import index="8xo1" ref="r:41b64586-29ed-47f5-b907-44be07261bbc(org.modelix.mps.react.structure)" />
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
    <import index="tpee" ref="r:00000000-0000-4000-0000-011c895902ca(jetbrains.mps.baseLanguage.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="c72da2b9-7cce-4447-8389-f407dc1158b7" name="jetbrains.mps.lang.structure">
      <concept id="1169125787135" name="jetbrains.mps.lang.structure.structure.AbstractConceptDeclaration" flags="ig" index="PkWjJ">
        <property id="6714410169261853888" name="conceptId" index="EcuMT" />
        <property id="4628067390765956802" name="abstract" index="R5$K7" />
        <property id="5092175715804935370" name="conceptAlias" index="34LRSv" />
        <child id="1071489727083" name="linkDeclaration" index="1TKVEi" />
        <child id="1071489727084" name="propertyDeclaration" index="1TKVEl" />
      </concept>
      <concept id="1169125989551" name="jetbrains.mps.lang.structure.structure.InterfaceConceptDeclaration" flags="ig" index="PlHQZ">
        <child id="1169127546356" name="extends" index="PrDN$" />
      </concept>
      <concept id="1169127622168" name="jetbrains.mps.lang.structure.structure.InterfaceConceptReference" flags="ig" index="PrWs8">
        <reference id="1169127628841" name="intfc" index="PrY4T" />
      </concept>
      <concept id="1071489090640" name="jetbrains.mps.lang.structure.structure.ConceptDeclaration" flags="ig" index="1TIwiD">
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
  <node concept="1TIwiD" id="2vPZMAmvnIB">
    <property role="EcuMT" value="2879488090856848295" />
    <property role="TrG5h" value="TextField" />
    <property role="34LRSv" value="textfield" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="2vPZMAmvnIC" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAmEVPG" resolve="IMUIComponent" />
    </node>
    <node concept="1TJgyj" id="2vPZMAmvsgs" role="1TKVEi">
      <property role="IQ2ns" value="2879488090856866844" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="data" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="2vPZMAmvsgl" resolve="NodePropRef" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAmvsgl">
    <property role="EcuMT" value="2879488090856866837" />
    <property role="TrG5h" value="NodePropRef" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="1TJgyj" id="2vPZMAmvsgm" role="1TKVEi">
      <property role="IQ2ns" value="2879488090856866838" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="node" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" to="tpee:fz3vP1J" resolve="Expression" />
    </node>
    <node concept="1TJgyj" id="2vPZMAmvsgn" role="1TKVEi">
      <property role="IQ2ns" value="2879488090856866839" />
      <property role="20kJfa" value="property" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" to="tpce:f_TJgxF" resolve="PropertyDeclaration" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAmDmtP">
    <property role="EcuMT" value="2879488090859464565" />
    <property role="TrG5h" value="Label" />
    <property role="34LRSv" value="label" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="1TJgyj" id="2vPZMAmDsnU" role="1TKVEi">
      <property role="IQ2ns" value="2879488090859488762" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="value" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" to="tpee:fz3vP1J" resolve="Expression" />
    </node>
    <node concept="PrWs8" id="2vPZMAmDs9r" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAmEVPG" resolve="IMUIComponent" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAmEVPF">
    <property role="EcuMT" value="2879488090859879787" />
    <property role="TrG5h" value="LayoutHorizontal" />
    <property role="34LRSv" value="horizontal" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="2vPZMAmEVPN" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAmEVPI" resolve="IMUILayoutComponent" />
    </node>
  </node>
  <node concept="PlHQZ" id="2vPZMAmEVPG">
    <property role="EcuMT" value="2879488090859879788" />
    <property role="TrG5h" value="IMUIComponent" />
    <node concept="PrWs8" id="2vPZMAmEVPH" role="PrDN$">
      <ref role="PrY4T" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
    </node>
  </node>
  <node concept="PlHQZ" id="2vPZMAmEVPI">
    <property role="EcuMT" value="2879488090859879790" />
    <property role="TrG5h" value="IMUILayoutComponent" />
    <node concept="PrWs8" id="2vPZMAmEVPJ" role="PrDN$">
      <ref role="PrY4T" node="2vPZMAmEVPG" resolve="IMUIComponent" />
    </node>
    <node concept="1TJgyj" id="2vPZMAmEVPK" role="1TKVEi">
      <property role="IQ2ns" value="2879488090859879792" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="children" />
      <property role="20lbJX" value="fLJekj5/_0__n" />
      <ref role="20lvS9" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAmGCtk">
    <property role="EcuMT" value="2879488090860324692" />
    <property role="TrG5h" value="LayoutVertical" />
    <property role="34LRSv" value="vertical" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="2vPZMAmGCtl" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAmEVPI" resolve="IMUILayoutComponent" />
    </node>
    <node concept="1TJgyi" id="2vPZMAmGN8u" role="1TKVEl">
      <property role="IQ2nx" value="2879488090860368414" />
      <property role="TrG5h" value="gap" />
      <ref role="AX2Wp" to="tpck:fKAOsGN" resolve="string" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAmJaEH">
    <property role="EcuMT" value="2879488090860989101" />
    <property role="TrG5h" value="Header" />
    <property role="34LRSv" value="header" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="2vPZMAmJaEI" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAmEVPG" resolve="IMUIComponent" />
    </node>
    <node concept="1TJgyi" id="2vPZMAmJaEJ" role="1TKVEl">
      <property role="IQ2nx" value="2879488090860989103" />
      <property role="TrG5h" value="level" />
      <ref role="AX2Wp" to="tpck:fKAQMTA" resolve="integer" />
    </node>
    <node concept="1TJgyj" id="2vPZMAmJaEK" role="1TKVEi">
      <property role="IQ2ns" value="2879488090860989104" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="text" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" to="tpee:fz3vP1J" resolve="Expression" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAmMlUm">
    <property role="EcuMT" value="2879488090861821590" />
    <property role="TrG5h" value="Space" />
    <property role="34LRSv" value="space" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="2vPZMAmMlUn" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAmEVPG" resolve="IMUIComponent" />
    </node>
  </node>
  <node concept="PlHQZ" id="2vPZMAmYEO7">
    <property role="EcuMT" value="2879488090865052935" />
    <property role="TrG5h" value="IMUIAction" />
    <node concept="PrWs8" id="2vPZMAmYEO8" role="PrDN$">
      <ref role="PrY4T" node="2vPZMAmEVPG" resolve="IMUIComponent" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAmYEOa">
    <property role="EcuMT" value="2879488090865052938" />
    <property role="TrG5h" value="ButtonLabel" />
    <property role="R5$K7" value="true" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
  </node>
  <node concept="1TIwiD" id="2vPZMAmYEOb">
    <property role="EcuMT" value="2879488090865052939" />
    <property role="TrG5h" value="ButtonLabelText" />
    <property role="34LRSv" value="text" />
    <ref role="1TJDcQ" node="2vPZMAmYEOa" resolve="ButtonLabel" />
    <node concept="1TJgyi" id="2vPZMAmYEOc" role="1TKVEl">
      <property role="IQ2nx" value="2879488090865052940" />
      <property role="TrG5h" value="text" />
      <ref role="AX2Wp" to="tpck:fKAOsGN" resolve="string" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAmYEO_">
    <property role="EcuMT" value="2879488090865052965" />
    <property role="TrG5h" value="Button" />
    <property role="34LRSv" value="button" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="2vPZMAmYEOA" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAmYEO7" resolve="IMUIAction" />
    </node>
    <node concept="1TJgyj" id="2vPZMAmYEOB" role="1TKVEi">
      <property role="IQ2ns" value="2879488090865052967" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="label" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="2vPZMAmYEOa" resolve="ButtonLabel" />
    </node>
    <node concept="1TJgyj" id="2vPZMAneuaN" role="1TKVEi">
      <property role="IQ2ns" value="2879488090869195443" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="command" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="2vPZMAneuaB" resolve="Command" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAn8wb$">
    <property role="EcuMT" value="2879488090867630820" />
    <property role="TrG5h" value="ButtonLabelIcon" />
    <property role="34LRSv" value="icon" />
    <ref role="1TJDcQ" node="2vPZMAmYEOa" resolve="ButtonLabel" />
    <node concept="1TJgyi" id="2vPZMAn8wb_" role="1TKVEl">
      <property role="IQ2nx" value="2879488090867630821" />
      <property role="TrG5h" value="icon" />
      <ref role="AX2Wp" to="tpck:fKAOsGN" resolve="string" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAneuaB">
    <property role="EcuMT" value="2879488090869195431" />
    <property role="TrG5h" value="Command" />
    <property role="34LRSv" value="do" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="1TJgyj" id="2vPZMAneuaC" role="1TKVEi">
      <property role="IQ2ns" value="2879488090869195432" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="statements" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" to="tpee:fzclF80" resolve="StatementList" />
    </node>
  </node>
</model>

