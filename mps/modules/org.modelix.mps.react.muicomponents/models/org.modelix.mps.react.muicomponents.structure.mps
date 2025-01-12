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
    <node concept="1TJgyi" id="2vPZMAn_7No" role="1TKVEl">
      <property role="IQ2nx" value="2879488090875133144" />
      <property role="TrG5h" value="style" />
      <ref role="AX2Wp" node="2vPZMAn_7Nl" resolve="LabelStyle" />
    </node>
  </node>
  <node concept="1TIwiD" id="2vPZMAmEVPF">
    <property role="EcuMT" value="2879488090859879787" />
    <property role="TrG5h" value="LayoutHorizontal" />
    <property role="34LRSv" value="horizontal" />
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
    <node concept="PrWs8" id="2vPZMAmEVPH" role="PrDN$">
      <ref role="PrY4T" to="8xo1:7GLg2tFqfT1" resolve="IReactComponent" />
    </node>
  </node>
  <node concept="PlHQZ" id="2vPZMAmEVPI">
    <property role="EcuMT" value="2879488090859879790" />
    <property role="TrG5h" value="IMUILayoutComponent" />
    <node concept="PrWs8" id="2vPZMAmEVPJ" role="PrDN$">
      <ref role="PrY4T" node="2vPZMAnsysd" resolve="IContainerMultiComponent" />
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
  </node>
  <node concept="PlHQZ" id="2vPZMAnsysd">
    <property role="EcuMT" value="2879488090872882957" />
    <property role="TrG5h" value="IContainerMultiComponent" />
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
    <property role="TrG5h" value="LabelStyle" />
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
  </node>
  <node concept="PlHQZ" id="2vPZMAnIaRU">
    <property role="EcuMT" value="2879488090877505018" />
    <property role="TrG5h" value="IContainerSingleComponent" />
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
  </node>
  <node concept="PlHQZ" id="2vPZMAolbCE">
    <property role="EcuMT" value="2879488090887731754" />
    <property role="TrG5h" value="ISingleDataBinding" />
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
</model>

