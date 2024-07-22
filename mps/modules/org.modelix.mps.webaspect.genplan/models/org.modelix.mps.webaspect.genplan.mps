<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:184047e0-0f39-454d-9ffe-ea892e7db656(org.modelix.mps.webaspect.genplan)">
  <persistence version="9" />
  <languages>
    <use id="7ab1a6fa-0a11-4b95-9e48-75f363d6cb00" name="jetbrains.mps.lang.generator.plan" version="2" />
  </languages>
  <imports />
  <registry>
    <language id="7ab1a6fa-0a11-4b95-9e48-75f363d6cb00" name="jetbrains.mps.lang.generator.plan">
      <concept id="1152961914448136207" name="jetbrains.mps.lang.generator.plan.structure.LanguageEntry" flags="ng" index="2Qf6Nf">
        <child id="1152961914448136208" name="language" index="2Qf6Ng" />
      </concept>
      <concept id="1820634577908471803" name="jetbrains.mps.lang.generator.plan.structure.Plan" flags="ng" index="2VgMpV">
        <child id="1820634577908471815" name="steps" index="2VgMA7" />
      </concept>
      <concept id="1820634577908471810" name="jetbrains.mps.lang.generator.plan.structure.Transform" flags="ng" index="2VgMA2">
        <property id="2209292798354050154" name="individualStepPerGenerator" index="1s431M" />
        <child id="1152961914448142326" name="entries" index="2Qf7GQ" />
      </concept>
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="3542851458883438784" name="jetbrains.mps.lang.smodel.structure.LanguageId" flags="nn" index="2V$Bhx">
        <property id="3542851458883439831" name="namespace" index="2V$B1Q" />
        <property id="3542851458883439832" name="languageId" index="2V$B1T" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
  </registry>
  <node concept="2VgMpV" id="22f9nDgQKqh">
    <property role="TrG5h" value="ModelixWebAspectGenPlan" />
    <node concept="2VgMA2" id="22f9nDgQKqK" role="2VgMA7">
      <property role="1s431M" value="true" />
      <node concept="2Qf6Nf" id="22f9nDgQKqL" role="2Qf7GQ">
        <node concept="2V$Bhx" id="22f9nDgQKqM" role="2Qf6Ng">
          <property role="2V$B1T" value="c7b55726-1795-47bd-aa21-714ac1e30f21" />
          <property role="2V$B1Q" value="org.modelix.mps.notation" />
        </node>
      </node>
      <node concept="2Qf6Nf" id="54VjPcDeUFN" role="2Qf7GQ">
        <node concept="2V$Bhx" id="54VjPcDeUFT" role="2Qf6Ng">
          <property role="2V$B1T" value="67accce2-9676-4728-9e9c-8b15ea30d924" />
          <property role="2V$B1Q" value="org.modelix.mps.react" />
        </node>
      </node>
    </node>
    <node concept="2VgMA2" id="22f9nDgQKqj" role="2VgMA7">
      <property role="1s431M" value="true" />
      <node concept="2Qf6Nf" id="22f9nDgQKqm" role="2Qf7GQ">
        <node concept="2V$Bhx" id="22f9nDgQKqT" role="2Qf6Ng">
          <property role="2V$B1T" value="8f2def56-7502-4f14-994f-472d404e528c" />
          <property role="2V$B1Q" value="org.modelix.mps.baseLanguage2kotlin" />
        </node>
      </node>
    </node>
    <node concept="2VgMA2" id="1edLqv8OPSq" role="2VgMA7">
      <property role="1s431M" value="true" />
      <node concept="2Qf6Nf" id="1edLqv8OPSE" role="2Qf7GQ">
        <node concept="2V$Bhx" id="1edLqv8OPSI" role="2Qf6Ng">
          <property role="2V$B1T" value="cc24a92d-c78e-4016-a5d4-902df7135727" />
          <property role="2V$B1Q" value="org.modelix.mps.baseLanguageInsideKotlin" />
        </node>
      </node>
    </node>
    <node concept="2VgMA2" id="22f9nDgQNo1" role="2VgMA7">
      <property role="1s431M" value="true" />
      <node concept="2Qf6Nf" id="22f9nDgQNo2" role="2Qf7GQ">
        <node concept="2V$Bhx" id="22f9nDgQNod" role="2Qf6Ng">
          <property role="2V$B1T" value="6b3888c1-9802-44d8-8baf-f8e6c33ed689" />
          <property role="2V$B1Q" value="jetbrains.mps.kotlin" />
        </node>
      </node>
      <node concept="2Qf6Nf" id="22f9nDgQNof" role="2Qf7GQ">
        <node concept="2V$Bhx" id="22f9nDgQNol" role="2Qf6Ng">
          <property role="2V$B1T" value="eb56ebf4-df56-438e-af06-fc1cd08b495a" />
          <property role="2V$B1Q" value="jetbrains.mps.kotlin.smodel" />
        </node>
      </node>
      <node concept="2Qf6Nf" id="22f9nDgQVgk" role="2Qf7GQ">
        <node concept="2V$Bhx" id="22f9nDgQVgs" role="2Qf6Ng">
          <property role="2V$B1T" value="b17a9ec8-44a5-40a1-9216-058d277424eb" />
          <property role="2V$B1Q" value="jetbrains.mps.kotlin.internal" />
        </node>
      </node>
    </node>
    <node concept="2VgMA2" id="1edLqv8PKEM" role="2VgMA7">
      <property role="1s431M" value="true" />
      <node concept="2Qf6Nf" id="1edLqv8PKF5" role="2Qf7GQ">
        <node concept="2V$Bhx" id="1edLqv8PKF9" role="2Qf6Ng">
          <property role="2V$B1T" value="7866978e-a0f0-4cc7-81bc-4d213d9375e1" />
          <property role="2V$B1Q" value="jetbrains.mps.lang.smodel" />
        </node>
      </node>
      <node concept="2Qf6Nf" id="1edLqv8PKFb" role="2Qf7GQ">
        <node concept="2V$Bhx" id="1edLqv8PKFh" role="2Qf6Ng">
          <property role="2V$B1T" value="f3061a53-9226-4cc5-a443-f952ceaf5816" />
          <property role="2V$B1Q" value="jetbrains.mps.baseLanguage" />
        </node>
      </node>
      <node concept="2Qf6Nf" id="5zC25uAyVUC" role="2Qf7GQ">
        <node concept="2V$Bhx" id="5zC25uAyVUK" role="2Qf6Ng">
          <property role="2V$B1T" value="df345b11-b8c7-4213-ac66-48d2a9b75d88" />
          <property role="2V$B1Q" value="jetbrains.mps.baseLanguageInternal" />
        </node>
      </node>
    </node>
  </node>
</model>

