<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:c4183f14-1033-4ade-be7c-1beadb184134(org.modelix.mps.react.muicomponents.structure)">
  <persistence version="9" />
  <languages>
    <use id="c72da2b9-7cce-4447-8389-f407dc1158b7" name="jetbrains.mps.lang.structure" version="9" />
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
      <concept id="3348158742936976480" name="jetbrains.mps.lang.structure.structure.EnumerationMemberDeclaration" flags="ng" index="25R33">
        <property id="1421157252384165432" name="memberId" index="3tVfz5" />
      </concept>
      <concept id="3348158742936976479" name="jetbrains.mps.lang.structure.structure.EnumerationDeclaration" flags="ng" index="25R3W">
        <reference id="1075010451642646892" name="defaultMember" index="1H5jkz" />
        <child id="3348158742936976577" name="members" index="25R1y" />
      </concept>
      <concept id="1082978164218" name="jetbrains.mps.lang.structure.structure.DataTypeDeclaration" flags="ng" index="AxPO6">
        <property id="7791109065626895363" name="datatypeId" index="3F6X1D" />
      </concept>
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
      <concept id="1133920641626" name="jetbrains.mps.lang.core.structure.BaseConcept" flags="ng" index="2VYdi">
        <property id="1193676396447" name="virtualPackage" index="3GE5qa" />
      </concept>
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
    <node concept="PrWs8" id="2vPZMAolc6p" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAolc2A" resolve="IWidget" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAmvsgl">
    <property role="EcuMT" value="2879488090856866837" />
    <property role="TrG5h" value="NodePropRef" />
    <property role="3GE5qa" value="util" />
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
    <node concept="1TJgyj" id="G39ofC8uZm" role="1TKVEi">
      <property role="IQ2ns" value="793519207812820950" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="typography" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="G39ofC9AxO" resolve="TypographyRef" />
    </node>
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
    <property role="3GE5qa" value="util" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="1TJgyi" id="cqTc8J2sSJ" role="1TKVEl">
      <property role="IQ2nx" value="223742654172220975" />
      <property role="TrG5h" value="gap" />
      <ref role="AX2Wp" to="tpck:fKAOsGN" resolve="string" />
    </node>
    <node concept="1TJgyj" id="cqTc8J2sSH" role="1TKVEi">
      <property role="IQ2ns" value="223742654172220973" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="align" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="cqTc8J2hYz" resolve="Alignment" />
    </node>
    <node concept="PrWs8" id="2vPZMAmEVPN" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAmEVPI" resolve="IMUILayoutComponent" />
    </node>
  </node>
  <node concept="PlHQZ" id="2vPZMAmEVPG">
    <property role="EcuMT" value="2879488090859879788" />
    <property role="TrG5h" value="IMUIComponent" />
    <property role="3GE5qa" value="interfaces" />
    <node concept="PrWs8" id="2vPZMAmEVPH" role="PrDN$">
      <ref role="PrY4T" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
    </node>
  </node>
  <node concept="PlHQZ" id="2vPZMAmEVPI">
    <property role="EcuMT" value="2879488090859879790" />
    <property role="TrG5h" value="IMUILayoutComponent" />
    <property role="3GE5qa" value="interfaces" />
    <node concept="PrWs8" id="2vPZMAmEVPJ" role="PrDN$">
      <ref role="PrY4T" node="2vPZMAnsysd" resolve="IContainerMultiComponent" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAmGCtk">
    <property role="EcuMT" value="2879488090860324692" />
    <property role="TrG5h" value="LayoutVertical" />
    <property role="34LRSv" value="vertical" />
    <property role="3GE5qa" value="util" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="2vPZMAmGCtl" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAmEVPI" resolve="IMUILayoutComponent" />
    </node>
    <node concept="1TJgyi" id="2vPZMAmGN8u" role="1TKVEl">
      <property role="IQ2nx" value="2879488090860368414" />
      <property role="TrG5h" value="gap" />
      <ref role="AX2Wp" to="tpck:fKAOsGN" resolve="string" />
    </node>
    <node concept="1TJgyj" id="cqTc8J2l4k" role="1TKVEi">
      <property role="IQ2ns" value="223742654172188948" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="align" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="cqTc8J2hYz" resolve="Alignment" />
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
    <node concept="1TJgyj" id="G39ofCeJi6" role="1TKVEi">
      <property role="IQ2ns" value="793519207814460550" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="typography" />
      <ref role="20lvS9" node="G39ofC9AxO" resolve="TypographyRef" />
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
    <property role="3GE5qa" value="interfaces" />
    <node concept="PrWs8" id="2vPZMAmYEO8" role="PrDN$">
      <ref role="PrY4T" node="2vPZMAmEVPG" resolve="IMUIComponent" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAmYEOa">
    <property role="EcuMT" value="2879488090865052938" />
    <property role="TrG5h" value="ButtonLabel" />
    <property role="R5$K7" value="true" />
    <property role="3GE5qa" value="util" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
  </node>
  <node concept="1TIwiD" id="2vPZMAmYEOb">
    <property role="EcuMT" value="2879488090865052939" />
    <property role="TrG5h" value="ButtonLabelText" />
    <property role="34LRSv" value="text" />
    <property role="3GE5qa" value="util" />
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
    <property role="3GE5qa" value="util" />
    <ref role="1TJDcQ" node="2vPZMAmYEOa" resolve="ButtonLabel" />
    <node concept="1TJgyj" id="2vPZMAnBVHD" role="1TKVEi">
      <property role="IQ2ns" value="2879488090875870057" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="icon" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="2vPZMAnBVdU" resolve="Icon" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAneuaB">
    <property role="EcuMT" value="2879488090869195431" />
    <property role="TrG5h" value="Command" />
    <property role="34LRSv" value="do" />
    <property role="3GE5qa" value="util" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="1TJgyj" id="2vPZMAneuaC" role="1TKVEi">
      <property role="IQ2ns" value="2879488090869195432" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="statements" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" to="tpee:fzclF80" resolve="StatementList" />
    </node>
  </node>
  <node concept="PlHQZ" id="2vPZMAnsypR">
    <property role="EcuMT" value="2879488090872882807" />
    <property role="TrG5h" value="ICanWrap" />
    <property role="3GE5qa" value="interfaces" />
  </node>
  <node concept="PlHQZ" id="2vPZMAnsysd">
    <property role="EcuMT" value="2879488090872882957" />
    <property role="TrG5h" value="IContainerMultiComponent" />
    <property role="3GE5qa" value="interfaces" />
    <node concept="PrWs8" id="2vPZMAnsyse" role="PrDN$">
      <ref role="PrY4T" node="2vPZMAmEVPG" resolve="IMUIComponent" />
    </node>
    <node concept="PrWs8" id="2vPZMAnsysf" role="PrDN$">
      <ref role="PrY4T" node="2vPZMAnsypR" resolve="ICanWrap" />
    </node>
    <node concept="1TJgyj" id="2vPZMAmEVPK" role="1TKVEi">
      <property role="IQ2ns" value="2879488090859879792" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="children" />
      <property role="20lbJX" value="fLJekj5/_0__n" />
      <ref role="20lvS9" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
    </node>
  </node>
  <node concept="25R3W" id="2vPZMAn_7Nl">
    <property role="3F6X1D" value="2879488090875133141" />
    <property role="TrG5h" value="FontStyle" />
    <property role="3GE5qa" value="util" />
    <ref role="1H5jkz" node="2vPZMAn_7Nm" resolve="plain" />
    <node concept="25R33" id="2vPZMAn_7Nm" role="25R1y">
      <property role="3tVfz5" value="2879488090875133142" />
      <property role="TrG5h" value="plain" />
    </node>
    <node concept="25R33" id="2vPZMAn_7Nn" role="25R1y">
      <property role="3tVfz5" value="2879488090875133143" />
      <property role="TrG5h" value="bold" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAnBVdN">
    <property role="EcuMT" value="2879488090875868019" />
    <property role="TrG5h" value="Accordion" />
    <property role="34LRSv" value="accordion" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="2vPZMAnBVdO" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAnsysd" resolve="IContainerMultiComponent" />
    </node>
    <node concept="1TJgyj" id="2vPZMAnEJvM" role="1TKVEi">
      <property role="IQ2ns" value="2879488090876606450" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="icon" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="2vPZMAnBVdU" resolve="Icon" />
    </node>
    <node concept="1TJgyj" id="2vPZMAnBVdP" role="1TKVEi">
      <property role="IQ2ns" value="2879488090875868021" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="summary" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAnBVdU">
    <property role="EcuMT" value="2879488090875868026" />
    <property role="TrG5h" value="Icon" />
    <property role="34LRSv" value="icon" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="1TJgyi" id="2vPZMAnBVdV" role="1TKVEl">
      <property role="IQ2nx" value="2879488090875868027" />
      <property role="TrG5h" value="name" />
      <ref role="AX2Wp" to="tpck:fKAOsGN" resolve="string" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAnIaRS">
    <property role="EcuMT" value="2879488090877505016" />
    <property role="TrG5h" value="Box" />
    <property role="34LRSv" value="box" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="2vPZMAnIc9c" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAnIaRU" resolve="IContainerSingleComponent" />
    </node>
    <node concept="1TJgyj" id="G39ofDbatJ" role="1TKVEi">
      <property role="IQ2ns" value="793519207830300527" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="borderAndShade" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="G39ofDaJgc" resolve="BorderAndShadeRef" />
    </node>
  </node>
  <node concept="PlHQZ" id="2vPZMAnIaRU">
    <property role="EcuMT" value="2879488090877505018" />
    <property role="TrG5h" value="IContainerSingleComponent" />
    <property role="3GE5qa" value="interfaces" />
    <node concept="1TJgyj" id="2vPZMAnIaRX" role="1TKVEi">
      <property role="IQ2ns" value="2879488090877505021" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="child" />
      <ref role="20lvS9" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
    </node>
    <node concept="PrWs8" id="2vPZMAnIaRV" role="PrDN$">
      <ref role="PrY4T" node="2vPZMAmEVPG" resolve="IMUIComponent" />
    </node>
    <node concept="PrWs8" id="2vPZMAnIaRW" role="PrDN$">
      <ref role="PrY4T" node="2vPZMAnsypR" resolve="ICanWrap" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAnZ0ck">
    <property role="EcuMT" value="2879488090881917716" />
    <property role="TrG5h" value="State" />
    <property role="34LRSv" value="state" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="2vPZMAnZ0cn" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAnZ0cm" resolve="IInvisible" />
    </node>
    <node concept="PrWs8" id="2vPZMAnZ0co" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAnsysd" resolve="IContainerMultiComponent" />
    </node>
    <node concept="PrWs8" id="2vPZMAnZU_x" role="PzmwI">
      <ref role="PrY4T" to="8xo1:2vPZMAnZU0P" resolve="IHasState" />
    </node>
    <node concept="1TJgyj" id="2vPZMAnZ0cp" role="1TKVEi">
      <property role="IQ2ns" value="2879488090881917721" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="variables" />
      <property role="20lbJX" value="fLJekj5/_0__n" />
      <ref role="20lvS9" to="8xo1:4Dhs5NildkH" resolve="StateVariable" />
    </node>
  </node>
  <node concept="PlHQZ" id="2vPZMAnZ0cm">
    <property role="EcuMT" value="2879488090881917718" />
    <property role="TrG5h" value="IInvisible" />
    <property role="3GE5qa" value="interfaces" />
  </node>
  <node concept="PlHQZ" id="2vPZMAolbCE">
    <property role="EcuMT" value="2879488090887731754" />
    <property role="TrG5h" value="ISingleDataBinding" />
    <property role="3GE5qa" value="interfaces" />
    <node concept="1TJgyj" id="2vPZMAmvsgs" role="1TKVEi">
      <property role="IQ2ns" value="2879488090856866844" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="data" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="2vPZMAmvsgl" resolve="NodePropRef" />
    </node>
  </node>
  <node concept="PlHQZ" id="2vPZMAolc2A">
    <property role="EcuMT" value="2879488090887733414" />
    <property role="TrG5h" value="IWidget" />
    <property role="3GE5qa" value="interfaces" />
    <node concept="PrWs8" id="2vPZMAolc2B" role="PrDN$">
      <ref role="PrY4T" node="2vPZMAmEVPG" resolve="IMUIComponent" />
    </node>
    <node concept="PrWs8" id="2vPZMAolc2C" role="PrDN$">
      <ref role="PrY4T" node="2vPZMAolbCE" resolve="ISingleDataBinding" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAolrZd">
    <property role="EcuMT" value="2879488090887798733" />
    <property role="TrG5h" value="ShowAndEdit" />
    <property role="34LRSv" value="showAndEdit" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="2vPZMAolrZe" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAnIaRU" resolve="IContainerSingleComponent" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAonvgy">
    <property role="EcuMT" value="2879488090888336418" />
    <property role="TrG5h" value="PlainDiv" />
    <property role="34LRSv" value="seq" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="2vPZMAonvgz" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAnsysd" resolve="IContainerMultiComponent" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAoGIbo">
    <property role="EcuMT" value="2879488090893902552" />
    <property role="TrG5h" value="LabelWidgetPair" />
    <property role="34LRSv" value="lwp" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="2vPZMAoGIbp" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAmEVPG" resolve="IMUIComponent" />
    </node>
    <node concept="1TJgyj" id="2vPZMAoGIbq" role="1TKVEi">
      <property role="IQ2ns" value="2879488090893902554" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="label" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" to="tpee:fz3vP1J" resolve="Expression" />
    </node>
    <node concept="1TJgyj" id="2vPZMAoGIbr" role="1TKVEi">
      <property role="IQ2ns" value="2879488090893902555" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="widget" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="2vPZMAolc2A" resolve="IWidget" />
    </node>
  </node>
  <node concept="25R3W" id="cqTc8J1POl">
    <property role="3F6X1D" value="223742654172060949" />
    <property role="TrG5h" value="AlignmentVertical" />
    <property role="3GE5qa" value="util" />
    <ref role="1H5jkz" node="cqTc8J1POm" resolve="top" />
    <node concept="25R33" id="cqTc8J1POm" role="25R1y">
      <property role="3tVfz5" value="223742654172060950" />
      <property role="TrG5h" value="top" />
    </node>
    <node concept="25R33" id="cqTc8J1POn" role="25R1y">
      <property role="3tVfz5" value="223742654172060951" />
      <property role="TrG5h" value="center" />
    </node>
  </node>
  <node concept="25R3W" id="cqTc8J2hI7">
    <property role="3F6X1D" value="223742654172175239" />
    <property role="TrG5h" value="HorizontalAligment" />
    <property role="3GE5qa" value="util" />
    <ref role="1H5jkz" node="cqTc8J2hI8" resolve="left" />
    <node concept="25R33" id="cqTc8J2hI8" role="25R1y">
      <property role="3tVfz5" value="223742654172175240" />
      <property role="TrG5h" value="left" />
    </node>
    <node concept="25R33" id="cqTc8J2hI9" role="25R1y">
      <property role="3tVfz5" value="223742654172175241" />
      <property role="TrG5h" value="center" />
    </node>
  </node>
  <node concept="1TIwiD" id="cqTc8J2hYz">
    <property role="EcuMT" value="223742654172176291" />
    <property role="TrG5h" value="Alignment" />
    <property role="3GE5qa" value="util" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="1TJgyi" id="cqTc8J2hY$" role="1TKVEl">
      <property role="IQ2nx" value="223742654172176292" />
      <property role="TrG5h" value="vertical" />
      <ref role="AX2Wp" node="cqTc8J1POl" resolve="DirectionVertical" />
    </node>
    <node concept="1TJgyi" id="cqTc8J2hY_" role="1TKVEl">
      <property role="IQ2nx" value="223742654172176293" />
      <property role="TrG5h" value="horizontal" />
      <ref role="AX2Wp" node="cqTc8J2hI7" resolve="DirectionHorizontal" />
    </node>
  </node>
  <node concept="1TIwiD" id="cqTc8Jo1wo">
    <property role="EcuMT" value="223742654177875992" />
    <property role="3GE5qa" value="util" />
    <property role="TrG5h" value="Typography" />
    <property role="34LRSv" value="typography" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="1TJgyj" id="cqTc8Jo1wr" role="1TKVEi">
      <property role="IQ2ns" value="223742654177875995" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="color" />
      <ref role="20lvS9" node="cqTc8Jo1wp" resolve="Color" />
    </node>
    <node concept="1TJgyi" id="G39ofC6yKY" role="1TKVEl">
      <property role="IQ2nx" value="793519207812312126" />
      <property role="TrG5h" value="style" />
      <ref role="AX2Wp" node="2vPZMAn_7Nl" resolve="FontStyle" />
    </node>
    <node concept="1TJgyi" id="G39ofC7ZUu" role="1TKVEl">
      <property role="IQ2nx" value="793519207812693662" />
      <property role="TrG5h" value="size" />
      <ref role="AX2Wp" to="tpck:fKAOsGN" resolve="string" />
    </node>
    <node concept="PrWs8" id="G39ofC9AxG" role="PzmwI">
      <ref role="PrY4T" to="tpck:h0TrEE$" resolve="INamedConcept" />
    </node>
    <node concept="PrWs8" id="G39ofC9AxH" role="PzmwI">
      <ref role="PrY4T" to="8xo1:7GLg2tFqfQG" resolve="IReactModuleContent" />
    </node>
  </node>
  <node concept="1TIwiD" id="cqTc8Jo1wp">
    <property role="EcuMT" value="223742654177875993" />
    <property role="3GE5qa" value="util" />
    <property role="TrG5h" value="Color" />
    <property role="34LRSv" value="#" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="1TJgyi" id="cqTc8Jo1wq" role="1TKVEl">
      <property role="IQ2nx" value="223742654177875994" />
      <property role="TrG5h" value="value" />
      <ref role="AX2Wp" to="tpck:fKAOsGN" resolve="string" />
    </node>
  </node>
  <node concept="1TIwiD" id="G39ofC9AxO">
    <property role="EcuMT" value="793519207813113972" />
    <property role="3GE5qa" value="util" />
    <property role="TrG5h" value="TypographyRef" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="1TJgyj" id="G39ofC9AxP" role="1TKVEi">
      <property role="IQ2ns" value="793519207813113973" />
      <property role="20kJfa" value="typography" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="cqTc8Jo1wo" resolve="Typography" />
    </node>
  </node>
  <node concept="1TIwiD" id="G39ofD9OMC">
    <property role="EcuMT" value="793519207829949608" />
    <property role="3GE5qa" value="util" />
    <property role="TrG5h" value="BorderAndShade" />
    <property role="34LRSv" value="borderAndShade" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="1TJgyi" id="G39ofD9Po3" role="1TKVEl">
      <property role="IQ2nx" value="793519207829952003" />
      <property role="TrG5h" value="borderWidth" />
      <ref role="AX2Wp" to="tpck:fKAOsGN" resolve="string" />
    </node>
    <node concept="1TJgyi" id="G39ofD9Qyy" role="1TKVEl">
      <property role="IQ2nx" value="793519207829956770" />
      <property role="TrG5h" value="padding" />
      <ref role="AX2Wp" to="tpck:fKAOsGN" resolve="string" />
    </node>
    <node concept="1TJgyi" id="G39ofDh217" role="1TKVEl">
      <property role="IQ2nx" value="793519207831838791" />
      <property role="TrG5h" value="margin" />
      <ref role="AX2Wp" to="tpck:fKAOsGN" resolve="string" />
    </node>
    <node concept="1TJgyj" id="G39ofD9Rq9" role="1TKVEi">
      <property role="IQ2ns" value="793519207829960329" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="borderColor" />
      <ref role="20lvS9" node="cqTc8Jo1wp" resolve="Color" />
    </node>
    <node concept="1TJgyj" id="G39ofD9RZe" role="1TKVEi">
      <property role="IQ2ns" value="793519207829962702" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="shadeColor" />
      <ref role="20lvS9" node="cqTc8Jo1wp" resolve="Color" />
    </node>
    <node concept="PrWs8" id="G39ofD9XM$" role="PzmwI">
      <ref role="PrY4T" to="8xo1:7GLg2tFqfQG" resolve="IReactModuleContent" />
    </node>
    <node concept="PrWs8" id="G39ofDak1K" role="PzmwI">
      <ref role="PrY4T" to="tpck:h0TrEE$" resolve="INamedConcept" />
    </node>
  </node>
  <node concept="1TIwiD" id="G39ofDaJgc">
    <property role="EcuMT" value="793519207830189068" />
    <property role="3GE5qa" value="util" />
    <property role="TrG5h" value="BorderAndShadeRef" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="1TJgyj" id="G39ofDaJPh" role="1TKVEi">
      <property role="IQ2ns" value="793519207830191441" />
      <property role="20kJfa" value="borderAndShade" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="G39ofD9OMC" resolve="BorderAndShade" />
    </node>
  </node>
  <node concept="1TIwiD" id="2NkZbYeZWAz">
    <property role="EcuMT" value="3230484732399569315" />
    <property role="TrG5h" value="TreeNode" />
    <property role="34LRSv" value="tree node" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="2NkZbYeZXbY" role="PzmwI">
      <ref role="PrY4T" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
    </node>
    <node concept="1TJgyj" id="2NkZbYeZXux" role="1TKVEi">
      <property role="IQ2ns" value="3230484732399572897" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="idExpr" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" to="tpee:fz3vP1J" resolve="Expression" />
    </node>
    <node concept="1TJgyj" id="2NkZbYeZY3A" role="1TKVEi">
      <property role="IQ2ns" value="3230484732399575270" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="labelExpr" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" to="tpee:fz3vP1J" resolve="Expression" />
    </node>
    <node concept="1TJgyj" id="2NkZbYeZYm9" role="1TKVEi">
      <property role="IQ2ns" value="3230484732399576457" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="childrenExpr" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" to="tpee:fz3vP1J" resolve="Expression" />
    </node>
    <node concept="1TJgyj" id="2NkZbYfIvCh" role="1TKVEi">
      <property role="IQ2ns" value="3230484732411771409" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="typography" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="G39ofC9AxO" resolve="TypographyRef" />
    </node>
  </node>
  <node concept="1TIwiD" id="2NkZbYfax87">
    <property role="EcuMT" value="3230484732402340359" />
    <property role="TrG5h" value="TreeView" />
    <property role="34LRSv" value="tree view" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="2NkZbYfaxHc" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAnIaRU" resolve="IContainerSingleComponent" />
    </node>
    <node concept="1TJgyj" id="2NkZbYfaDge" role="1TKVEi">
      <property role="IQ2ns" value="3230484732402373646" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="selectionStateTracker" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" to="8xo1:4Dhs5NilDPI" resolve="StateVariableReference" />
    </node>
  </node>
  <node concept="1TIwiD" id="2iVdnDeRY63">
    <property role="EcuMT" value="2646768005435875715" />
    <property role="TrG5h" value="Checkbox" />
    <property role="34LRSv" value="checkbox" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" />
    <node concept="PrWs8" id="2iVdnDeRYGe" role="PzmwI">
      <ref role="PrY4T" node="2vPZMAolc2A" resolve="IWidget" />
    </node>
  </node>
</model>

