<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:ca22fd82-7665-4880-b185-e4971be354c1(ReactDemoLanguage.editor.modelix)">
  <persistence version="9" />
  <languages>
    <use id="67accce2-9676-4728-9e9c-8b15ea30d924" name="org.modelix.mps.react" version="0" />
    <devkit ref="fbc25dd2-5da4-483a-8b19-70928e1b62d7(jetbrains.mps.devkit.general-purpose)" />
  </languages>
  <imports>
    <import index="oyym" ref="r:1570828e-e9a4-47ff-95d9-80c800704647(ReactDemoLanguage.structure)" />
  </imports>
  <registry>
    <language id="67accce2-9676-4728-9e9c-8b15ea30d924" name="org.modelix.mps.react">
      <concept id="8876946878574570414" name="org.modelix.mps.react.structure.ComponentNodeExpression" flags="ng" index="ggAI9" />
      <concept id="8876946878574531757" name="org.modelix.mps.react.structure.TextComponent" flags="ng" index="ggXia">
        <child id="8876946878574531775" name="value" index="ggXio" />
      </concept>
      <concept id="8876946878574742630" name="org.modelix.mps.react.structure.JsCode" flags="ng" index="gh8L1">
        <property id="8876946878574742644" name="code" index="gh8Lj" />
      </concept>
      <concept id="8876946878574735527" name="org.modelix.mps.react.structure.JsFunctionPropertyValue" flags="ng" index="ghf20">
        <child id="8876946878574735559" name="parameters" index="ghf3w" />
        <child id="8876946878574737562" name="implementation" index="ghfyX" />
      </concept>
      <concept id="8876946878574735543" name="org.modelix.mps.react.structure.JsFunctionParameter" flags="ng" index="ghf2g" />
      <concept id="8876946878574735510" name="org.modelix.mps.react.structure.PropertyChangeHandler" flags="ng" index="ghf2L">
        <reference id="8876946878574742616" name="property" index="gh8LZ" />
        <child id="8876946878574742646" name="value" index="gh8Lh" />
        <child id="8876946878574742620" name="node" index="gh8LV" />
      </concept>
      <concept id="8876946878574654557" name="org.modelix.mps.react.structure.PrimitivePropertyValue" flags="ng" index="ghjhU">
        <child id="8876946878574654571" name="value" index="ghjhc" />
      </concept>
      <concept id="8876946878575278069" name="org.modelix.mps.react.structure.JsonObjectValue" flags="ng" index="gjbvi">
        <child id="8876946878575278146" name="members" index="gjbx_" />
      </concept>
      <concept id="8876946878575278085" name="org.modelix.mps.react.structure.JsonObjectMember" flags="ng" index="gjbwy">
        <property id="8876946878575278099" name="key" index="gjbwO" />
        <child id="8876946878575278101" name="value" index="gjbwM" />
      </concept>
      <concept id="8876946878573696709" name="org.modelix.mps.react.structure.ReactModule" flags="ng" index="gl9ry">
        <child id="8876946878573903290" name="content" index="gmrQt" />
      </concept>
      <concept id="8876946878573903262" name="org.modelix.mps.react.structure.ConceptRenderer" flags="ng" index="gmrQT">
        <reference id="8310867745953086698" name="concept" index="3JBHV4" />
        <child id="8876946878573903455" name="component" index="gmrTS" />
      </concept>
      <concept id="8876946878573903439" name="org.modelix.mps.react.structure.GenericReactComponent" flags="ng" index="gmrTC">
        <property id="8876946878573977569" name="componentType" index="gmPZ6" />
        <child id="8876946878574187978" name="properties" index="gn1nH" />
        <child id="8876946878574187976" name="children" index="gn1nJ" />
      </concept>
      <concept id="8876946878574187981" name="org.modelix.mps.react.structure.Property" flags="ng" index="gn1nE">
        <property id="8876946878574187995" name="propertyName" index="gn1nW" />
        <child id="8876946878574187997" name="value" index="gn1nU" />
      </concept>
      <concept id="1612157992440222093" name="org.modelix.mps.react.structure.ForEachInteratorVariableReference" flags="ng" index="rqPyE">
        <reference id="1612157992440222094" name="forEach" index="rqPyD" />
      </concept>
      <concept id="1612157992440089595" name="org.modelix.mps.react.structure.ForEachComponent" flags="ng" index="rrkbs">
        <child id="1612157992440089646" name="input" index="rrkk9" />
        <child id="1612157992440089600" name="component" index="rrkkB" />
      </concept>
    </language>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1197027756228" name="jetbrains.mps.baseLanguage.structure.DotExpression" flags="nn" index="2OqwBi">
        <child id="1197027771414" name="operand" index="2Oq$k0" />
        <child id="1197027833540" name="operation" index="2OqNvi" />
      </concept>
      <concept id="1070475926800" name="jetbrains.mps.baseLanguage.structure.StringLiteral" flags="nn" index="Xl_RD">
        <property id="1070475926801" name="value" index="Xl_RC" />
      </concept>
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="1138056022639" name="jetbrains.mps.lang.smodel.structure.SPropertyAccess" flags="nn" index="3TrcHB">
        <reference id="1138056395725" name="property" index="3TsBF5" />
      </concept>
      <concept id="1138056282393" name="jetbrains.mps.lang.smodel.structure.SLinkListAccess" flags="nn" index="3Tsc0h">
        <reference id="1138056546658" name="link" index="3TtcxE" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
  </registry>
  <node concept="gl9ry" id="2CeLAhmFoil">
    <property role="TrG5h" value="react.markus" />
    <node concept="gmrQT" id="2CeLAhmFoim" role="gmrQt">
      <ref role="3JBHV4" to="oyym:2CeLAhmF5rC" resolve="MarkusRoot" />
      <node concept="gmrTC" id="2CeLAhmFoin" role="gmrTS">
        <property role="gmPZ6" value="html.div" />
        <node concept="gmrTC" id="2vPZMAmu7rs" role="gn1nJ">
          <property role="gmPZ6" value="html.h1" />
          <node concept="ggXia" id="2vPZMAmucMn" role="gn1nJ">
            <node concept="2OqwBi" id="2vPZMAmuzZD" role="ggXio">
              <node concept="ggAI9" id="2vPZMAmuzS5" role="2Oq$k0" />
              <node concept="3TrcHB" id="2vPZMAmu$75" role="2OqNvi">
                <ref role="3TsBF5" to="oyym:2u4zLgG12gd" resolve="name" />
              </node>
            </node>
          </node>
        </node>
        <node concept="gmrTC" id="2vPZMAmqUZW" role="gn1nJ">
          <property role="gmPZ6" value="mui.TextField" />
          <node concept="gn1nE" id="2vPZMAmqX_5" role="gn1nH">
            <property role="gn1nW" value="onChange" />
            <node concept="ghf20" id="2vPZMAmqX_f" role="gn1nU">
              <node concept="ghf2L" id="2vPZMAmsrlr" role="ghfyX">
                <ref role="gh8LZ" to="oyym:2u4zLgG12gd" resolve="name" />
                <node concept="gh8L1" id="2vPZMAmsrlt" role="gh8Lh">
                  <property role="gh8Lj" value="event.target.value" />
                </node>
              </node>
              <node concept="ghf2g" id="2vPZMAmqX_i" role="ghf3w">
                <property role="TrG5h" value="event" />
              </node>
            </node>
          </node>
          <node concept="gn1nE" id="2vPZMAmqV49" role="gn1nH">
            <property role="gn1nW" value="value" />
            <node concept="ghjhU" id="2vPZMAmqV4d" role="gn1nU">
              <node concept="2OqwBi" id="2vPZMAmqVbL" role="ghjhc">
                <node concept="ggAI9" id="2vPZMAmqV4b" role="2Oq$k0" />
                <node concept="3TrcHB" id="2vPZMAmqWWy" role="2OqNvi">
                  <ref role="3TsBF5" to="oyym:2u4zLgG12gd" resolve="name" />
                </node>
              </node>
            </node>
          </node>
        </node>
        <node concept="gmrTC" id="2vPZMAmuggc" role="gn1nJ">
          <property role="gmPZ6" value="html.ul" />
          <node concept="rrkbs" id="2vPZMAmufRw" role="gn1nJ">
            <property role="TrG5h" value="e" />
            <node concept="gmrTC" id="2vPZMAmugpO" role="rrkkB">
              <property role="gmPZ6" value="html.li" />
              <node concept="gmrTC" id="2vPZMAmukR7" role="gn1nJ">
                <property role="gmPZ6" value="mui.TextField" />
                <node concept="gn1nE" id="2vPZMAmukR8" role="gn1nH">
                  <property role="gn1nW" value="onChange" />
                  <node concept="ghf20" id="2vPZMAmukR9" role="gn1nU">
                    <node concept="ghf2L" id="2vPZMAmukRa" role="ghfyX">
                      <ref role="gh8LZ" to="oyym:2vPZMAmue7n" resolve="label" />
                      <node concept="gh8L1" id="2vPZMAmukRb" role="gh8Lh">
                        <property role="gh8Lj" value="event.target.value" />
                      </node>
                      <node concept="rqPyE" id="2vPZMAmukVM" role="gh8LV">
                        <ref role="rqPyD" node="2vPZMAmufRw" resolve="e" />
                      </node>
                    </node>
                    <node concept="ghf2g" id="2vPZMAmukRc" role="ghf3w">
                      <property role="TrG5h" value="event" />
                    </node>
                  </node>
                </node>
                <node concept="gn1nE" id="2vPZMAmukRd" role="gn1nH">
                  <property role="gn1nW" value="value" />
                  <node concept="ghjhU" id="2vPZMAmukRe" role="gn1nU">
                    <node concept="2OqwBi" id="2vPZMAmuldK" role="ghjhc">
                      <node concept="rqPyE" id="2vPZMAmul6d" role="2Oq$k0">
                        <ref role="rqPyD" node="2vPZMAmufRw" resolve="e" />
                      </node>
                      <node concept="3TrcHB" id="2vPZMAmulW0" role="2OqNvi">
                        <ref role="3TsBF5" to="oyym:2vPZMAmue7n" resolve="label" />
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="2OqwBi" id="2vPZMAmug38" role="rrkk9">
              <node concept="ggAI9" id="2vPZMAmufTC" role="2Oq$k0" />
              <node concept="3Tsc0h" id="2vPZMAmuga_" role="2OqNvi">
                <ref role="3TtcxE" to="oyym:2vPZMAmue7o" resolve="elements" />
              </node>
            </node>
          </node>
        </node>
        <node concept="gn1nE" id="2vPZMAmu2ja" role="gn1nH">
          <property role="gn1nW" value="style" />
          <node concept="gjbvi" id="2vPZMAmu2l9" role="gn1nU">
            <node concept="gjbwy" id="2vPZMAmu2lb" role="gjbx_">
              <property role="gjbwO" value="display" />
              <node concept="ghjhU" id="2vPZMAmu2le" role="gjbwM">
                <node concept="Xl_RD" id="2vPZMAmu2ld" role="ghjhc">
                  <property role="Xl_RC" value="flex" />
                </node>
              </node>
            </node>
            <node concept="gjbwy" id="2vPZMAmu2lm" role="gjbx_">
              <property role="gjbwO" value="flexDirection" />
              <node concept="ghjhU" id="2vPZMAmu2lp" role="gjbwM">
                <node concept="Xl_RD" id="2vPZMAmu2lo" role="ghjhc">
                  <property role="Xl_RC" value="column" />
                </node>
              </node>
            </node>
            <node concept="gjbwy" id="2vPZMAmu6eD" role="gjbx_">
              <property role="gjbwO" value="gap" />
              <node concept="ghjhU" id="2vPZMAmu6eG" role="gjbwM">
                <node concept="Xl_RD" id="2vPZMAmu6eF" role="ghjhc">
                  <property role="Xl_RC" value="20px" />
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
  </node>
</model>

