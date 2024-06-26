<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:4b957436-4ade-4da9-bdbc-7588a2d8af7d(org.modelix.mps.baseLanguageInsideKotlin.structure)">
  <persistence version="9" />
  <languages>
    <devkit ref="78434eb8-b0e5-444b-850d-e7c4ad2da9ab(jetbrains.mps.devkit.aspect.structure)" />
  </languages>
  <imports>
    <import index="hcm8" ref="r:72a7bf00-0175-42ca-b99b-fe8519b6a16f(jetbrains.mps.kotlin.structure)" />
    <import index="tpee" ref="r:00000000-0000-4000-0000-011c895902ca(jetbrains.mps.baseLanguage.structure)" />
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="c72da2b9-7cce-4447-8389-f407dc1158b7" name="jetbrains.mps.lang.structure">
      <concept id="1169125787135" name="jetbrains.mps.lang.structure.structure.AbstractConceptDeclaration" flags="ig" index="PkWjJ">
        <property id="6714410169261853888" name="conceptId" index="EcuMT" />
        <property id="5092175715804935370" name="conceptAlias" index="34LRSv" />
        <child id="1071489727083" name="linkDeclaration" index="1TKVEi" />
      </concept>
      <concept id="1169127622168" name="jetbrains.mps.lang.structure.structure.InterfaceConceptReference" flags="ig" index="PrWs8">
        <reference id="1169127628841" name="intfc" index="PrY4T" />
      </concept>
      <concept id="1071489090640" name="jetbrains.mps.lang.structure.structure.ConceptDeclaration" flags="ig" index="1TIwiD">
        <reference id="1071489389519" name="extends" index="1TJDcQ" />
        <child id="1169129564478" name="implements" index="PzmwI" />
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
  <node concept="1TIwiD" id="1edLqv8Ou4p">
    <property role="EcuMT" value="1408999582856241433" />
    <property role="TrG5h" value="BaseLanguageFunctionInKotlin" />
    <property role="34LRSv" value="extractBaseLanguageFunction" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="1edLqv8Ou4u" role="1TKVEi">
      <property role="IQ2ns" value="1408999582856241438" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="body" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" to="tpee:fzclF80" resolve="StatementList" />
    </node>
    <node concept="1TJgyj" id="1edLqv8Ou4y" role="1TKVEi">
      <property role="IQ2ns" value="1408999582856241442" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="parameterDeclarations" />
      <property role="20lbJX" value="fLJekj5/_0__n" />
      <ref role="20lvS9" to="tpee:fz7vLUk" resolve="ParameterDeclaration" />
    </node>
    <node concept="1TJgyj" id="1edLqv8Ou4_" role="1TKVEi">
      <property role="IQ2ns" value="1408999582856241445" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="parameterValues" />
      <property role="20lbJX" value="fLJekj5/_0__n" />
      <ref role="20lvS9" to="hcm8:2yYXHtl6Jjg" resolve="IExpression" />
    </node>
    <node concept="1TJgyj" id="1edLqv8Ou7U" role="1TKVEi">
      <property role="IQ2ns" value="1408999582856241658" />
      <property role="20lmBu" value="fLJjDmT/aggregation" />
      <property role="20kJfa" value="baseLanguageReturnType" />
      <property role="20lbJX" value="fLJekj4/_1" />
      <ref role="20lvS9" to="tpee:fz3vP1H" resolve="Type" />
    </node>
    <node concept="PrWs8" id="1edLqv8Ou4s" role="PzmwI">
      <ref role="PrY4T" to="hcm8:2yYXHtl6Jjg" resolve="IExpression" />
    </node>
  </node>
</model>

