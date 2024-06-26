<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:3d732d81-423c-436c-bbe7-ad9d1315b222(org.modelix.mps.spreadsheets.structure)">
  <persistence version="9" />
  <languages>
    <devkit ref="78434eb8-b0e5-444b-850d-e7c4ad2da9ab(jetbrains.mps.devkit.aspect.structure)" />
  </languages>
  <imports>
    <import index="tpee" ref="r:00000000-0000-4000-0000-011c895902ca(jetbrains.mps.baseLanguage.structure)" />
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="c72da2b9-7cce-4447-8389-f407dc1158b7" name="jetbrains.mps.lang.structure">
      <concept id="1224240836180" name="jetbrains.mps.lang.structure.structure.DeprecatedNodeAnnotation" flags="ig" index="asaX9" />
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
      <concept id="1133920641626" name="jetbrains.mps.lang.core.structure.BaseConcept" flags="ng" index="2VYdi">
        <property id="1193676396447" name="virtualPackage" index="3GE5qa" />
        <child id="5169995583184591170" name="smodelAttribute" index="lGtFl" />
      </concept>
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
  </registry>
  <node concept="1TIwiD" id="1pvyisd91eR">
    <property role="EcuMT" value="1612157992439124919" />
    <property role="TrG5h" value="Document" />
    <property role="34LRSv" value="document" />
    <property role="19KtqR" value="true" />
    <property role="3GE5qa" value="document" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="1pvyisdaH5e" role="1TKVEi">
      <property role="IQ2ns" value="1612157992439566670" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="content" />
      <property role="20lbJX" value="fLJekj5/_0__n" />
      <ref role="20lvS9" node="1pvyisdaH5g" resolve="IDocumentContent" />
    </node>
    <node concept="PrWs8" id="1pvyisdaHv3" role="PzmwI">
      <ref role="PrY4T" to="tpck:h0TrEE$" resolve="INamedConcept" />
    </node>
  </node>
  <node concept="1TIwiD" id="1pvyisd9B6P">
    <property role="EcuMT" value="1612157992439280053" />
    <property role="TrG5h" value="Entity" />
    <property role="34LRSv" value="entity" />
    <property role="3GE5qa" value="entity" />
    <property role="19KtqR" value="true" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="1pvyisd9EKq" role="1TKVEi">
      <property role="IQ2ns" value="1612157992439295002" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="properties" />
      <property role="20lbJX" value="fLJekj5/_0__n" />
      <ref role="20lvS9" node="1pvyisd9B6Q" resolve="EntityProperty" />
    </node>
    <node concept="1TJgyj" id="1pvyisdaoEn" role="1TKVEi">
      <property role="IQ2ns" value="1612157992439483031" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="extends" />
      <property role="20lbJX" value="fLJekj5/_0__n" />
      <ref role="20lvS9" node="1pvyisdaoE6" resolve="EntityReference" />
    </node>
    <node concept="PrWs8" id="1pvyisd9B6R" role="PzmwI">
      <ref role="PrY4T" to="tpck:h0TrEE$" resolve="INamedConcept" />
    </node>
  </node>
  <node concept="1TIwiD" id="1pvyisd9B6Q">
    <property role="EcuMT" value="1612157992439280054" />
    <property role="TrG5h" value="EntityProperty" />
    <property role="34LRSv" value="property" />
    <property role="3GE5qa" value="entity" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="1pvyisd9B78" role="1TKVEi">
      <property role="IQ2ns" value="1612157992439280072" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="type" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="1pvyisd9B6W" resolve="IEntityPropertyType" />
    </node>
    <node concept="PrWs8" id="1pvyisd9B6T" role="PzmwI">
      <ref role="PrY4T" to="tpck:h0TrEE$" resolve="INamedConcept" />
    </node>
  </node>
  <node concept="PlHQZ" id="1pvyisd9B6W">
    <property role="TrG5h" value="IEntityPropertyType" />
    <property role="EcuMT" value="1612157992439280059" />
    <property role="3GE5qa" value="entity" />
  </node>
  <node concept="1TIwiD" id="1pvyisd9B6X">
    <property role="EcuMT" value="1612157992439280061" />
    <property role="TrG5h" value="StringType" />
    <property role="34LRSv" value="string" />
    <property role="3GE5qa" value="entity" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="PrWs8" id="1pvyisd9B6Y" role="PzmwI">
      <ref role="PrY4T" node="1pvyisd9B6W" resolve="IEntityPropertyType" />
    </node>
  </node>
  <node concept="1TIwiD" id="1pvyisd9B72">
    <property role="EcuMT" value="1612157992439280066" />
    <property role="TrG5h" value="IntegerType" />
    <property role="3GE5qa" value="entity" />
    <property role="34LRSv" value="integer" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="PrWs8" id="1pvyisd9B73" role="PzmwI">
      <ref role="PrY4T" node="1pvyisd9B6W" resolve="IEntityPropertyType" />
    </node>
  </node>
  <node concept="1TIwiD" id="1pvyisd9B75">
    <property role="EcuMT" value="1612157992439280069" />
    <property role="TrG5h" value="EntityContainmentType" />
    <property role="3GE5qa" value="entity" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="1pvyisd9B76" role="1TKVEi">
      <property role="IQ2ns" value="1612157992439280070" />
      <property role="20kJfa" value="entity" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="1pvyisd9B6P" resolve="Entity" />
    </node>
    <node concept="PrWs8" id="1pvyisda9rh" role="PzmwI">
      <ref role="PrY4T" node="1pvyisd9B6W" resolve="IEntityPropertyType" />
    </node>
  </node>
  <node concept="1TIwiD" id="1pvyisda9Gd">
    <property role="EcuMT" value="1612157992439421709" />
    <property role="TrG5h" value="EntityRenferenceType" />
    <property role="34LRSv" value="-&gt;" />
    <property role="3GE5qa" value="entity" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="1pvyisda9Gg" role="1TKVEi">
      <property role="IQ2ns" value="1612157992439421712" />
      <property role="20kJfa" value="entity" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="1pvyisd9B6P" resolve="Entity" />
    </node>
    <node concept="PrWs8" id="1pvyisda9Ge" role="PzmwI">
      <ref role="PrY4T" node="1pvyisd9B6W" resolve="IEntityPropertyType" />
    </node>
  </node>
  <node concept="1TIwiD" id="1pvyisdaoE6">
    <property role="EcuMT" value="1612157992439483014" />
    <property role="3GE5qa" value="entity" />
    <property role="TrG5h" value="EntityReference" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="1pvyisdaoE7" role="1TKVEi">
      <property role="IQ2ns" value="1612157992439483015" />
      <property role="20kJfa" value="entity" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="1pvyisd9B6P" resolve="Entity" />
    </node>
  </node>
  <node concept="1TIwiD" id="1pvyisdavuv">
    <property role="EcuMT" value="1612157992439510943" />
    <property role="3GE5qa" value="entity" />
    <property role="TrG5h" value="ListType" />
    <property role="34LRSv" value="list" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="1pvyisdavuy" role="1TKVEi">
      <property role="IQ2ns" value="1612157992439510946" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="elementType" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="1pvyisd9B6W" resolve="IEntityPropertyType" />
    </node>
    <node concept="PrWs8" id="1pvyisdavuw" role="PzmwI">
      <ref role="PrY4T" node="1pvyisd9B6W" resolve="IEntityPropertyType" />
    </node>
  </node>
  <node concept="1TIwiD" id="1pvyisdaAg_">
    <property role="EcuMT" value="1612157992439538725" />
    <property role="3GE5qa" value="entity" />
    <property role="TrG5h" value="BooleanType" />
    <property role="34LRSv" value="boolean" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="PrWs8" id="1pvyisdaAgB" role="PzmwI">
      <ref role="PrY4T" node="1pvyisd9B6W" resolve="IEntityPropertyType" />
    </node>
  </node>
  <node concept="PlHQZ" id="1pvyisdaH5g">
    <property role="EcuMT" value="1612157992439566672" />
    <property role="TrG5h" value="IDocumentContent" />
    <property role="3GE5qa" value="document" />
  </node>
  <node concept="1TIwiD" id="1pvyisdaIsw">
    <property role="EcuMT" value="1612157992439572256" />
    <property role="TrG5h" value="TableView" />
    <property role="34LRSv" value="table view" />
    <property role="3GE5qa" value="table" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="1pvyisdbcXH" role="1TKVEi">
      <property role="IQ2ns" value="1612157992439697261" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="columns" />
      <property role="20lbJX" value="fLJekj5/_0__n" />
      <ref role="20lvS9" node="1pvyisdbPV3" resolve="Column" />
    </node>
    <node concept="1TJgyj" id="1pvyisdaIsz" role="1TKVEi">
      <property role="IQ2ns" value="1612157992439572259" />
      <property role="20kJfa" value="entity" />
      <ref role="20lvS9" node="1pvyisd9B6P" resolve="Entity" />
      <node concept="asaX9" id="425sFRq1exY" role="lGtFl" />
    </node>
    <node concept="1TJgyj" id="425sFRpXgEX" role="1TKVEi">
      <property role="IQ2ns" value="4649248350061005501" />
      <property role="20kJfa" value="data" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="425sFRpWrQf" resolve="TableDataDeclaration" />
    </node>
    <node concept="PrWs8" id="1pvyisdaIsx" role="PzmwI">
      <ref role="PrY4T" node="1pvyisdaH5g" resolve="IDocumentContent" />
    </node>
    <node concept="PrWs8" id="1pvyisdc9TI" role="PzmwI">
      <ref role="PrY4T" to="tpck:h0TrEE$" resolve="INamedConcept" />
    </node>
  </node>
  <node concept="1TIwiD" id="1pvyisdbcVq">
    <property role="EcuMT" value="1612157992439697114" />
    <property role="TrG5h" value="TableDataInstance" />
    <property role="3GE5qa" value="table-data" />
    <property role="34LRSv" value="table data instance" />
    <property role="19KtqR" value="true" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="1pvyisdcra7" role="1TKVEi">
      <property role="IQ2ns" value="1612157992440017543" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="rows" />
      <property role="20lbJX" value="fLJekj5/_0__n" />
      <ref role="20lvS9" node="1pvyisdbcVr" resolve="RowData" />
    </node>
    <node concept="PrWs8" id="1pvyisdc9TC" role="PzmwI">
      <ref role="PrY4T" node="1pvyisdc9TB" resolve="IDocumentContentData" />
    </node>
    <node concept="1TJgyj" id="1pvyisdc9TG" role="1TKVEi">
      <property role="IQ2ns" value="1612157992439946860" />
      <property role="20kJfa" value="table" />
      <ref role="20lvS9" node="1pvyisdaIsw" resolve="TableView" />
      <node concept="asaX9" id="425sFRpWrQG" role="lGtFl" />
    </node>
    <node concept="1TJgyj" id="425sFRpWrQg" role="1TKVEi">
      <property role="IQ2ns" value="4649248350060789136" />
      <property role="20kJfa" value="declaration" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="425sFRpWrQf" resolve="TableDataDeclaration" />
    </node>
  </node>
  <node concept="1TIwiD" id="1pvyisdbcVr">
    <property role="EcuMT" value="1612157992439697115" />
    <property role="3GE5qa" value="table-data" />
    <property role="TrG5h" value="RowData" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="1pvyisdcraa" role="1TKVEi">
      <property role="IQ2ns" value="1612157992440017546" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="cells" />
      <property role="20lbJX" value="fLJekj5/_0__n" />
      <ref role="20lvS9" node="1pvyisdbcVs" resolve="PropertyCellData" />
    </node>
  </node>
  <node concept="1TIwiD" id="1pvyisdbcVs">
    <property role="EcuMT" value="1612157992439697116" />
    <property role="3GE5qa" value="table-data" />
    <property role="TrG5h" value="PropertyCellData" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="1pvyisdbcVx" role="1TKVEi">
      <property role="IQ2ns" value="1612157992439697121" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="value" />
      <ref role="20lvS9" node="1pvyisdbcXp" resolve="IValue" />
    </node>
    <node concept="1TJgyj" id="1pvyisdbcVv" role="1TKVEi">
      <property role="IQ2ns" value="1612157992439697119" />
      <property role="20kJfa" value="property" />
      <ref role="20lvS9" node="1pvyisd9B6Q" resolve="EntityProperty" />
    </node>
  </node>
  <node concept="1TIwiD" id="1pvyisdbcXo">
    <property role="EcuMT" value="1612157992439697240" />
    <property role="TrG5h" value="StringValue" />
    <property role="3GE5qa" value="value" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyi" id="1pvyisdbcXq" role="1TKVEl">
      <property role="IQ2nx" value="1612157992439697242" />
      <property role="TrG5h" value="value" />
      <ref role="AX2Wp" to="tpck:fKAOsGN" resolve="string" />
    </node>
    <node concept="PrWs8" id="1pvyisdbcXs" role="PzmwI">
      <ref role="PrY4T" node="1pvyisdbcXp" resolve="IValue" />
    </node>
  </node>
  <node concept="PlHQZ" id="1pvyisdbcXp">
    <property role="EcuMT" value="1612157992439697241" />
    <property role="TrG5h" value="IValue" />
    <property role="3GE5qa" value="value" />
  </node>
  <node concept="1TIwiD" id="1pvyisdbcXu">
    <property role="EcuMT" value="1612157992439697246" />
    <property role="TrG5h" value="IntegerValue" />
    <property role="3GE5qa" value="value" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyi" id="1pvyisdbcXx" role="1TKVEl">
      <property role="IQ2nx" value="1612157992439697249" />
      <property role="TrG5h" value="value" />
      <ref role="AX2Wp" to="tpck:fKAQMTA" resolve="integer" />
    </node>
    <node concept="PrWs8" id="1pvyisdbcXv" role="PzmwI">
      <ref role="PrY4T" node="1pvyisdbcXp" resolve="IValue" />
    </node>
  </node>
  <node concept="1TIwiD" id="1pvyisdbcXz">
    <property role="EcuMT" value="1612157992439697251" />
    <property role="TrG5h" value="BooleanValue" />
    <property role="3GE5qa" value="value" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyi" id="1pvyisdbcXA" role="1TKVEl">
      <property role="IQ2nx" value="1612157992439697254" />
      <property role="TrG5h" value="value" />
      <ref role="AX2Wp" to="tpck:fKAQMTB" resolve="boolean" />
    </node>
    <node concept="PrWs8" id="1pvyisdbcX$" role="PzmwI">
      <ref role="PrY4T" node="1pvyisdbcXp" resolve="IValue" />
    </node>
  </node>
  <node concept="1TIwiD" id="1pvyisdbcXE">
    <property role="EcuMT" value="1612157992439697258" />
    <property role="3GE5qa" value="table" />
    <property role="TrG5h" value="PropertyColumnContent" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="1pvyisdbcXK" role="1TKVEi">
      <property role="IQ2ns" value="1612157992439697264" />
      <property role="20kJfa" value="property" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="1pvyisd9B6Q" resolve="EntityProperty" />
    </node>
    <node concept="PrWs8" id="1pvyisdbPV$" role="PzmwI">
      <ref role="PrY4T" node="1pvyisdbPV4" resolve="IColumnContent" />
    </node>
  </node>
  <node concept="1TIwiD" id="1pvyisdbPV3">
    <property role="EcuMT" value="1612157992439865027" />
    <property role="3GE5qa" value="table" />
    <property role="TrG5h" value="Column" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="1pvyisdbPV7" role="1TKVEi">
      <property role="IQ2ns" value="1612157992439865031" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="content" />
      <ref role="20lvS9" node="1pvyisdbPV4" resolve="IColumnContent" />
    </node>
    <node concept="PrWs8" id="2ti6llKUOsQ" role="PzmwI">
      <ref role="PrY4T" to="tpck:69Qfsw3InJo" resolve="ISmartReferent" />
    </node>
  </node>
  <node concept="PlHQZ" id="1pvyisdbPV4">
    <property role="EcuMT" value="1612157992439865028" />
    <property role="3GE5qa" value="table" />
    <property role="TrG5h" value="IColumnContent" />
  </node>
  <node concept="1TIwiD" id="1pvyisdc9TA">
    <property role="EcuMT" value="1612157992439946854" />
    <property role="3GE5qa" value="table-data" />
    <property role="TrG5h" value="DocumentData" />
    <property role="19KtqR" value="true" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="1pvyisdclaF" role="1TKVEi">
      <property role="IQ2ns" value="1612157992439993003" />
      <property role="20kJfa" value="document" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="1pvyisd91eR" resolve="Document" />
    </node>
    <node concept="1TJgyj" id="1pvyisdc9TE" role="1TKVEi">
      <property role="IQ2ns" value="1612157992439946858" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="contentData" />
      <property role="20lbJX" value="fLJekj5/_0__n" />
      <ref role="20lvS9" node="1pvyisdc9TB" resolve="IDocumentContentData" />
    </node>
  </node>
  <node concept="PlHQZ" id="1pvyisdc9TB">
    <property role="EcuMT" value="1612157992439946855" />
    <property role="3GE5qa" value="table-data" />
    <property role="TrG5h" value="IDocumentContentData" />
  </node>
  <node concept="1TIwiD" id="2ti6llKUloG">
    <property role="EcuMT" value="2833354970326717996" />
    <property role="TrG5h" value="FormularColumnContent" />
    <property role="34LRSv" value="formular" />
    <property role="3GE5qa" value="formular" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="2ti6llKUloJ" role="1TKVEi">
      <property role="IQ2ns" value="2833354970326717999" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="formular" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" to="tpee:fz3vP1J" resolve="Expression" />
    </node>
    <node concept="PrWs8" id="2ti6llKUloH" role="PzmwI">
      <ref role="PrY4T" node="1pvyisdbPV4" resolve="IColumnContent" />
    </node>
    <node concept="PrWs8" id="M50tyu7Vyo" role="PzmwI">
      <ref role="PrY4T" to="tpck:h0TrEE$" resolve="INamedConcept" />
    </node>
  </node>
  <node concept="1TIwiD" id="2ti6llKUmc0">
    <property role="EcuMT" value="2833354970326721280" />
    <property role="3GE5qa" value="formular" />
    <property role="TrG5h" value="ColumnReference" />
    <ref role="1TJDcQ" to="tpee:fz3vP1J" resolve="Expression" />
    <node concept="1TJgyj" id="2ti6llKUmc1" role="1TKVEi">
      <property role="IQ2ns" value="2833354970326721281" />
      <property role="20kJfa" value="column" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="1pvyisdbPV3" resolve="Column" />
    </node>
  </node>
  <node concept="1TIwiD" id="425sFRpWrQf">
    <property role="EcuMT" value="4649248350060789135" />
    <property role="3GE5qa" value="table-data" />
    <property role="TrG5h" value="TableDataDeclaration" />
    <property role="34LRSv" value="table data declaration" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="425sFRpZjWo" role="1TKVEi">
      <property role="IQ2ns" value="4649248350061543192" />
      <property role="20kJfa" value="entity" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="1pvyisd9B6P" resolve="Entity" />
    </node>
    <node concept="PrWs8" id="425sFRpXfL1" role="PzmwI">
      <ref role="PrY4T" node="1pvyisdaH5g" resolve="IDocumentContent" />
    </node>
    <node concept="PrWs8" id="425sFRpXfL3" role="PzmwI">
      <ref role="PrY4T" to="tpck:h0TrEE$" resolve="INamedConcept" />
    </node>
  </node>
  <node concept="1TIwiD" id="33yYwGTAKK1">
    <property role="EcuMT" value="3522652784675195905" />
    <property role="TrG5h" value="GenericSpreadsheetDeclaration" />
    <property role="34LRSv" value="generic spreadsheet" />
    <property role="3GE5qa" value="generic-spreadsheet" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="PrWs8" id="33yYwGTCGcE" role="PzmwI">
      <ref role="PrY4T" node="1pvyisdaH5g" resolve="IDocumentContent" />
    </node>
    <node concept="PrWs8" id="33yYwGTCGcG" role="PzmwI">
      <ref role="PrY4T" to="tpck:h0TrEE$" resolve="INamedConcept" />
    </node>
  </node>
  <node concept="1TIwiD" id="33yYwGTEWRw">
    <property role="EcuMT" value="3522652784676294112" />
    <property role="3GE5qa" value="generic-spreadsheet" />
    <property role="TrG5h" value="GenericSpreadsheetData" />
    <property role="34LRSv" value="generic spreadsheet data" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyi" id="33yYwGTMuky" role="1TKVEl">
      <property role="IQ2nx" value="3522652784678266146" />
      <property role="TrG5h" value="columns" />
      <ref role="AX2Wp" to="tpck:fKAQMTA" resolve="integer" />
    </node>
    <node concept="1TJgyj" id="33yYwGTMukt" role="1TKVEi">
      <property role="IQ2ns" value="3522652784678266141" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="rows" />
      <property role="20lbJX" value="fLJekj5/_0__n" />
      <ref role="20lvS9" node="33yYwGTMukr" resolve="GenericSpreadsheetRow" />
    </node>
    <node concept="1TJgyj" id="33yYwGTFgeZ" role="1TKVEi">
      <property role="IQ2ns" value="3522652784676373439" />
      <property role="20kJfa" value="declaration" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" node="33yYwGTAKK1" resolve="GenericSpreadsheetDeclaration" />
    </node>
    <node concept="PrWs8" id="33yYwGTEWRx" role="PzmwI">
      <ref role="PrY4T" node="1pvyisdc9TB" resolve="IDocumentContentData" />
    </node>
  </node>
  <node concept="1TIwiD" id="33yYwGTMukr">
    <property role="EcuMT" value="3522652784678266139" />
    <property role="3GE5qa" value="generic-spreadsheet" />
    <property role="TrG5h" value="GenericSpreadsheetRow" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="33yYwGTMukw" role="1TKVEi">
      <property role="IQ2ns" value="3522652784678266144" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="cells" />
      <property role="20lbJX" value="fLJekj5/_0__n" />
      <ref role="20lvS9" node="33yYwGTMuks" resolve="GenericSpreadsheetCell" />
    </node>
  </node>
  <node concept="1TIwiD" id="33yYwGTMuks">
    <property role="EcuMT" value="3522652784678266140" />
    <property role="3GE5qa" value="generic-spreadsheet" />
    <property role="TrG5h" value="GenericSpreadsheetCell" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyi" id="33yYwGTNNc$" role="1TKVEl">
      <property role="IQ2nx" value="3522652784678613796" />
      <property role="TrG5h" value="text" />
      <ref role="AX2Wp" to="tpck:fKAOsGN" resolve="string" />
    </node>
  </node>
</model>

