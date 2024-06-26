<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:c1a0a82f-59f5-4c31-97ed-4a00419f7584(org.modelix.mps.webaspect.runtime.plugin)">
  <persistence version="9" />
  <languages>
    <use id="28f9e497-3b42-4291-aeba-0a1039153ab1" name="jetbrains.mps.lang.plugin" version="6" />
    <use id="ef7bf5ac-d06c-4342-b11d-e42104eb9343" name="jetbrains.mps.lang.plugin.standalone" version="0" />
    <use id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel" version="19" />
    <use id="63650c59-16c8-498a-99c8-005c7ee9515d" name="jetbrains.mps.lang.access" version="0" />
    <use id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage" version="12" />
    <use id="f159adf4-3c93-40f9-9c5a-1f245a8697af" name="jetbrains.mps.lang.aspect" version="2" />
  </languages>
  <imports />
  <registry>
    <language id="982eb8df-2c96-4bd7-9963-11712ea622e5" name="jetbrains.mps.lang.resources">
      <concept id="8974276187400029883" name="jetbrains.mps.lang.resources.structure.FileIcon" flags="ng" index="1QGGSu">
        <property id="2756621024541341363" name="file" index="1iqoE4" />
      </concept>
    </language>
    <language id="ef7bf5ac-d06c-4342-b11d-e42104eb9343" name="jetbrains.mps.lang.plugin.standalone">
      <concept id="7520713872864775836" name="jetbrains.mps.lang.plugin.standalone.structure.StandalonePluginDescriptor" flags="ng" index="2DaZZR" />
    </language>
    <language id="f159adf4-3c93-40f9-9c5a-1f245a8697af" name="jetbrains.mps.lang.aspect">
      <concept id="3433054418424672374" name="jetbrains.mps.lang.aspect.structure.SimpleLanguageAspectDescriptor" flags="ng" index="3vrhyV">
        <child id="6106419185511570295" name="mainLanguages" index="QG$2i" />
        <child id="8222125370833980146" name="devkit" index="TkT64" />
        <child id="3433054418425083029" name="icon" index="3vqPLo" />
      </concept>
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="8222125370833354011" name="jetbrains.mps.lang.smodel.structure.DevkitPointer" flags="ng" index="T9mpH">
        <property id="8222125370833354012" name="devkitName" index="T9mpE" />
        <property id="8222125370833354013" name="devkitId" index="T9mpF" />
      </concept>
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
  <node concept="2DaZZR" id="52qyf6p21Hb" />
  <node concept="3vrhyV" id="52qyf6p2bi0">
    <property role="TrG5h" value="modelix" />
    <node concept="T9mpH" id="52qyf6p2bi1" role="TkT64">
      <property role="T9mpF" value="46d68387-81c7-4c54-9dd2-2717eb3f009b" />
      <property role="T9mpE" value="org.modelix.mps.webaspect.devkit" />
    </node>
    <node concept="2V$Bhx" id="52qyf6p2bi3" role="QG$2i">
      <property role="2V$B1T" value="c7b55726-1795-47bd-aa21-714ac1e30f21" />
      <property role="2V$B1Q" value="org.modelix.mps.notation" />
    </node>
    <node concept="2V$Bhx" id="52qyf6p2bi8" role="QG$2i">
      <property role="2V$B1T" value="67accce2-9676-4728-9e9c-8b15ea30d924" />
      <property role="2V$B1Q" value="org.modelix.mps.react" />
    </node>
    <node concept="1QGGSu" id="52qyf6p2bit" role="3vqPLo">
      <property role="1iqoE4" value="${module}/icons/modelix.png" />
    </node>
  </node>
</model>

