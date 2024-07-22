<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:2cab633f-129d-4418-816f-f4df33c28737(org.modelix.mps.baseLanguageInsideKotlin.generator.templates@generator)">
  <persistence version="9" />
  <languages>
    <use id="d7706f63-9be2-479c-a3da-ae92af1e64d5" name="jetbrains.mps.lang.generator.generationContext" version="2" />
    <use id="6b3888c1-9802-44d8-8baf-f8e6c33ed689" name="jetbrains.mps.kotlin" version="11" />
    <use id="9e4ff22b-60f1-43ef-a50b-f9f0fcec22e0" name="jetbrains.mps.kotlin.javaRefs" version="0" />
    <devkit ref="a2eb3a43-fcc2-4200-80dc-c60110c4862d(jetbrains.mps.devkit.templates)" />
  </languages>
  <imports>
    <import index="j33e" ref="r:4b957436-4ade-4da9-bdbc-7588a2d8af7d(org.modelix.mps.baseLanguageInsideKotlin.structure)" />
    <import index="0" ref="b50d89c0-0fb9-4105-b652-222148c26a9b/kotlin:kotlin(jetbrains.mps.kotlin.stdlib/)" implicit="true" />
    <import index="tpee" ref="r:00000000-0000-4000-0000-011c895902ca(jetbrains.mps.baseLanguage.structure)" implicit="true" />
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1197027756228" name="jetbrains.mps.baseLanguage.structure.DotExpression" flags="nn" index="2OqwBi">
        <child id="1197027771414" name="operand" index="2Oq$k0" />
        <child id="1197027833540" name="operation" index="2OqNvi" />
      </concept>
      <concept id="1137021947720" name="jetbrains.mps.baseLanguage.structure.ConceptFunction" flags="in" index="2VMwT0">
        <child id="1137022507850" name="body" index="2VODD2" />
      </concept>
      <concept id="1070475926800" name="jetbrains.mps.baseLanguage.structure.StringLiteral" flags="nn" index="Xl_RD">
        <property id="1070475926801" name="value" index="Xl_RC" />
      </concept>
      <concept id="1081236700938" name="jetbrains.mps.baseLanguage.structure.StaticMethodDeclaration" flags="ig" index="2YIFZL" />
      <concept id="1070534370425" name="jetbrains.mps.baseLanguage.structure.IntegerType" flags="in" index="10Oyi0" />
      <concept id="1068390468198" name="jetbrains.mps.baseLanguage.structure.ClassConcept" flags="ig" index="312cEu" />
      <concept id="1068498886296" name="jetbrains.mps.baseLanguage.structure.VariableReference" flags="nn" index="37vLTw">
        <reference id="1068581517664" name="variableDeclaration" index="3cqZAo" />
      </concept>
      <concept id="1068498886292" name="jetbrains.mps.baseLanguage.structure.ParameterDeclaration" flags="ir" index="37vLTG" />
      <concept id="1225271177708" name="jetbrains.mps.baseLanguage.structure.StringType" flags="in" index="17QB3L" />
      <concept id="4972933694980447171" name="jetbrains.mps.baseLanguage.structure.BaseVariableDeclaration" flags="ng" index="19Szcq">
        <child id="5680397130376446158" name="type" index="1tU5fm" />
      </concept>
      <concept id="1068580123132" name="jetbrains.mps.baseLanguage.structure.BaseMethodDeclaration" flags="ng" index="3clF44">
        <child id="1068580123133" name="returnType" index="3clF45" />
        <child id="1068580123134" name="parameter" index="3clF46" />
        <child id="1068580123135" name="body" index="3clF47" />
      </concept>
      <concept id="1068580123155" name="jetbrains.mps.baseLanguage.structure.ExpressionStatement" flags="nn" index="3clFbF">
        <child id="1068580123156" name="expression" index="3clFbG" />
      </concept>
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
      <concept id="1068581242875" name="jetbrains.mps.baseLanguage.structure.PlusExpression" flags="nn" index="3cpWs3" />
      <concept id="1068581242878" name="jetbrains.mps.baseLanguage.structure.ReturnStatement" flags="nn" index="3cpWs6">
        <child id="1068581517676" name="expression" index="3cqZAk" />
      </concept>
      <concept id="1107461130800" name="jetbrains.mps.baseLanguage.structure.Classifier" flags="ng" index="3pOWGL">
        <child id="5375687026011219971" name="member" index="jymVt" unordered="true" />
      </concept>
      <concept id="1081773326031" name="jetbrains.mps.baseLanguage.structure.BinaryOperation" flags="nn" index="3uHJSO">
        <child id="1081773367579" name="rightExpression" index="3uHU7w" />
        <child id="1081773367580" name="leftExpression" index="3uHU7B" />
      </concept>
      <concept id="1178549954367" name="jetbrains.mps.baseLanguage.structure.IVisible" flags="ngI" index="1B3ioH">
        <child id="1178549979242" name="visibility" index="1B3o_S" />
      </concept>
      <concept id="1146644602865" name="jetbrains.mps.baseLanguage.structure.PublicVisibility" flags="nn" index="3Tm1VV" />
    </language>
    <language id="b401a680-8325-4110-8fd3-84331ff25bef" name="jetbrains.mps.lang.generator">
      <concept id="1114706874351" name="jetbrains.mps.lang.generator.structure.CopySrcNodeMacro" flags="ln" index="29HgVG">
        <child id="1168024447342" name="sourceNodeQuery" index="3NFExx" />
      </concept>
      <concept id="1114729360583" name="jetbrains.mps.lang.generator.structure.CopySrcListMacro" flags="ln" index="2b32R4">
        <child id="1168278589236" name="sourceNodesQuery" index="2P8S$" />
      </concept>
      <concept id="1095416546421" name="jetbrains.mps.lang.generator.structure.MappingConfiguration" flags="ig" index="bUwia">
        <child id="1167088157977" name="createRootRule" index="2VS0gm" />
        <child id="1167328349397" name="reductionMappingRule" index="3acgRq" />
      </concept>
      <concept id="1168619357332" name="jetbrains.mps.lang.generator.structure.RootTemplateAnnotation" flags="lg" index="n94m4" />
      <concept id="1095672379244" name="jetbrains.mps.lang.generator.structure.TemplateFragment" flags="ng" index="raruj" />
      <concept id="1167087469898" name="jetbrains.mps.lang.generator.structure.CreateRootRule" flags="lg" index="2VPoh5">
        <reference id="1167087469901" name="templateNode" index="2VPoh2" />
      </concept>
      <concept id="1167169188348" name="jetbrains.mps.lang.generator.structure.TemplateFunctionParameter_sourceNode" flags="nn" index="30H73N" />
      <concept id="1167169308231" name="jetbrains.mps.lang.generator.structure.BaseMappingRule" flags="ng" index="30H$t8">
        <reference id="1167169349424" name="applicableConcept" index="30HIoZ" />
      </concept>
      <concept id="1087833241328" name="jetbrains.mps.lang.generator.structure.PropertyMacro" flags="ln" index="17Uvod">
        <child id="1167756362303" name="propertyValueFunction" index="3zH0cK" />
      </concept>
      <concept id="1167327847730" name="jetbrains.mps.lang.generator.structure.Reduction_MappingRule" flags="lg" index="3aamgX">
        <child id="1169672767469" name="ruleConsequence" index="1lVwrX" />
      </concept>
      <concept id="1167756080639" name="jetbrains.mps.lang.generator.structure.PropertyMacro_GetPropertyValue" flags="in" index="3zFVjK" />
      <concept id="1167951910403" name="jetbrains.mps.lang.generator.structure.SourceSubstituteMacro_SourceNodesQuery" flags="in" index="3JmXsc" />
      <concept id="8900764248744213868" name="jetbrains.mps.lang.generator.structure.InlineTemplateWithContext_RuleConsequence" flags="lg" index="1Koe21">
        <child id="8900764248744213871" name="contentNode" index="1Koe22" />
      </concept>
      <concept id="1168024337012" name="jetbrains.mps.lang.generator.structure.SourceSubstituteMacro_SourceNodeQuery" flags="in" index="3NFfHV" />
      <concept id="1118786554307" name="jetbrains.mps.lang.generator.structure.LoopMacro" flags="ln" index="1WS0z7">
        <child id="1167952069335" name="sourceNodesQuery" index="3Jn$fo" />
      </concept>
    </language>
    <language id="9e4ff22b-60f1-43ef-a50b-f9f0fcec22e0" name="jetbrains.mps.kotlin.javaRefs">
      <concept id="2420378304458348492" name="jetbrains.mps.kotlin.javaRefs.structure.JavaMethodCall" flags="ng" index="2yQVVM">
        <reference id="2420378304458348798" name="method" index="2yQV70" />
      </concept>
      <concept id="7565185111013327093" name="jetbrains.mps.kotlin.javaRefs.structure.JavaClassType" flags="ng" index="2EYIWN">
        <reference id="7565185111013327225" name="javaClass" index="2EYIUZ" />
      </concept>
    </language>
    <language id="6b3888c1-9802-44d8-8baf-f8e6c33ed689" name="jetbrains.mps.kotlin">
      <concept id="1243006380186890016" name="jetbrains.mps.kotlin.structure.UnaryExpression" flags="ng" index="21Pmin">
        <child id="1243006380186890019" name="operand" index="21Pmik" />
      </concept>
      <concept id="5401033615058672984" name="jetbrains.mps.kotlin.structure.ComponentDeclaration" flags="ng" index="2Rs4SG" />
      <concept id="1314219036499415210" name="jetbrains.mps.kotlin.structure.AbstractPropertyDeclaration" flags="ng" index="TDTJE">
        <property id="2936055411806090009" name="isReadonly" index="1Xb$ne" />
      </concept>
      <concept id="1314219036499415225" name="jetbrains.mps.kotlin.structure.LocalPropertyDeclaration" flags="ng" index="TDTJT" />
      <concept id="1314219036498225646" name="jetbrains.mps.kotlin.structure.IStatementHolder" flags="ngI" index="THmaI">
        <child id="1314219036498225649" name="statements" index="THmaL" />
      </concept>
      <concept id="6565639133219057675" name="jetbrains.mps.kotlin.structure.IArguments" flags="ngI" index="TWioa">
        <child id="6565639133219057676" name="arguments" index="TWiod" />
      </concept>
      <concept id="5533310174484620657" name="jetbrains.mps.kotlin.structure.VariableRefExpression" flags="ng" index="UZU4S">
        <reference id="5533310174484620658" name="target" index="UZU4V" />
      </concept>
      <concept id="409518875564192849" name="jetbrains.mps.kotlin.structure.IDeconstructingDeclarations" flags="ngI" index="1BvddI">
        <child id="5401033615058696817" name="variables" index="2Rs2$5" />
      </concept>
      <concept id="6664176324866782072" name="jetbrains.mps.kotlin.structure.IClassReference" flags="ngI" index="1SePDR">
        <reference id="6664176324866782075" name="class" index="1SePDO" />
      </concept>
      <concept id="2936055411798373599" name="jetbrains.mps.kotlin.structure.ClassType" flags="ng" index="1XD088" />
      <concept id="2936055411798373456" name="jetbrains.mps.kotlin.structure.NavigationOperation" flags="ng" index="1XD0a7">
        <child id="2936055411798374203" name="target" index="1XD07G" />
      </concept>
      <concept id="2936055411798373428" name="jetbrains.mps.kotlin.structure.FunctionDeclaration" flags="ng" index="1XD0bz" />
      <concept id="2936055411798373697" name="jetbrains.mps.kotlin.structure.ReceiverType" flags="ng" index="1XD0em">
        <child id="2936055411798374592" name="type" index="1XD0Sn" />
      </concept>
      <concept id="2936055411798373745" name="jetbrains.mps.kotlin.structure.VariableDeclaration" flags="ng" index="1XD0eA">
        <child id="2936055411798374679" name="type" index="1XD0Z0" />
      </concept>
      <concept id="2936055411798373753" name="jetbrains.mps.kotlin.structure.ValueArgument" flags="ng" index="1XD0eI">
        <child id="2936055411798374692" name="expression" index="1XD0ZN" />
      </concept>
    </language>
    <language id="d7706f63-9be2-479c-a3da-ae92af1e64d5" name="jetbrains.mps.lang.generator.generationContext">
      <concept id="1187483539462121947" name="jetbrains.mps.lang.generator.generationContext.structure.GenerationContextOp_CreateIndexedName" flags="nn" index="32eq0B">
        <child id="1187483539462121948" name="baseName" index="32eq0w" />
      </concept>
      <concept id="1216860049635" name="jetbrains.mps.lang.generator.generationContext.structure.TemplateFunctionParameter_generationContext" flags="nn" index="1iwH7S" />
      <concept id="1217004708011" name="jetbrains.mps.lang.generator.generationContext.structure.GenerationContextOp_GetInputModel" flags="nn" index="1r8y6K" />
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="1177026924588" name="jetbrains.mps.lang.smodel.structure.RefConcept_Reference" flags="nn" index="chp4Y">
        <reference id="1177026940964" name="conceptDeclaration" index="cht4Q" />
      </concept>
      <concept id="1171323947159" name="jetbrains.mps.lang.smodel.structure.Model_NodesOperation" flags="nn" index="2SmgA7">
        <child id="1758937410080001570" name="conceptArgument" index="1dBWTz" />
      </concept>
      <concept id="1138056022639" name="jetbrains.mps.lang.smodel.structure.SPropertyAccess" flags="nn" index="3TrcHB">
        <reference id="1138056395725" name="property" index="3TsBF5" />
      </concept>
      <concept id="1138056143562" name="jetbrains.mps.lang.smodel.structure.SLinkAccess" flags="nn" index="3TrEf2">
        <reference id="1138056516764" name="link" index="3Tt5mk" />
      </concept>
      <concept id="1138056282393" name="jetbrains.mps.lang.smodel.structure.SLinkListAccess" flags="nn" index="3Tsc0h">
        <reference id="1138056546658" name="link" index="3TtcxE" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1133920641626" name="jetbrains.mps.lang.core.structure.BaseConcept" flags="ng" index="2VYdi">
        <child id="5169995583184591170" name="smodelAttribute" index="lGtFl" />
      </concept>
      <concept id="3364660638048049750" name="jetbrains.mps.lang.core.structure.PropertyAttribute" flags="ng" index="A9Btg">
        <property id="1757699476691236117" name="name_DebugInfo" index="2qtEX9" />
        <property id="1341860900487648621" name="propertyId" index="P4ACc" />
      </concept>
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
  </registry>
  <node concept="bUwia" id="1edLqv8Ou4o">
    <property role="TrG5h" value="main" />
    <node concept="2VPoh5" id="1edLqv8OPB3" role="2VS0gm">
      <ref role="2VPoh2" node="1edLqv8OuQ7" resolve="JavaExpressions" />
    </node>
    <node concept="3aamgX" id="1edLqv8OLkh" role="3acgRq">
      <ref role="30HIoZ" to="j33e:1edLqv8Ou4p" resolve="BaseLanguageFunctionInKotlin" />
      <node concept="1Koe21" id="1edLqv8OLkl" role="1lVwrX">
        <node concept="1XD0bz" id="1edLqv8OLkr" role="1Koe22">
          <property role="TrG5h" value="f" />
          <node concept="TDTJT" id="1edLqv8OLlR" role="THmaL">
            <property role="1Xb$ne" value="true" />
            <node concept="2Rs4SG" id="1edLqv8OLlS" role="2Rs2$5">
              <property role="TrG5h" value="p1" />
              <node concept="1XD088" id="1edLqv8OLm3" role="1XD0Z0">
                <ref role="1SePDO" to="0:~kotlin/Int" resolve="Int" />
              </node>
            </node>
          </node>
          <node concept="1XD0a7" id="1edLqv8OLlh" role="THmaL">
            <node concept="2yQVVM" id="1edLqv8OLls" role="1XD07G">
              <ref role="2yQV70" node="1edLqv8OuRR" resolve="expression" />
              <node concept="1XD0eI" id="1edLqv8ONCW" role="TWiod">
                <node concept="UZU4S" id="1edLqv8ONDI" role="1XD0ZN">
                  <ref role="UZU4V" node="1edLqv8OLlS" resolve="p1" />
                </node>
                <node concept="2b32R4" id="1edLqv8OOb4" role="lGtFl">
                  <node concept="3JmXsc" id="1edLqv8OOb7" role="2P8S$">
                    <node concept="3clFbS" id="1edLqv8OOb8" role="2VODD2">
                      <node concept="3clFbF" id="1edLqv8OObe" role="3cqZAp">
                        <node concept="2OqwBi" id="1edLqv8OOb9" role="3clFbG">
                          <node concept="3Tsc0h" id="1edLqv8OObc" role="2OqNvi">
                            <ref role="3TtcxE" to="j33e:1edLqv8Ou4_" resolve="parameterValues" />
                          </node>
                          <node concept="30H73N" id="1edLqv8OObd" role="2Oq$k0" />
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
            <node concept="1XD0em" id="1edLqv8OLl5" role="21Pmik">
              <node concept="2EYIWN" id="1edLqv8OLl3" role="1XD0Sn">
                <ref role="2EYIUZ" node="1edLqv8OuQ7" resolve="JavaExpressions" />
              </node>
            </node>
            <node concept="raruj" id="1edLqv8ON4e" role="lGtFl" />
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="312cEu" id="1edLqv8OuQ7">
    <property role="TrG5h" value="JavaExpressions" />
    <node concept="2YIFZL" id="1edLqv8OuRR" role="jymVt">
      <property role="TrG5h" value="expression" />
      <node concept="37vLTG" id="1edLqv8OuTc" role="3clF46">
        <property role="TrG5h" value="p1" />
        <node concept="10Oyi0" id="1edLqv8OuTF" role="1tU5fm">
          <node concept="29HgVG" id="1edLqv8OEkP" role="lGtFl">
            <node concept="3NFfHV" id="1edLqv8OEkQ" role="3NFExx">
              <node concept="3clFbS" id="1edLqv8OEkR" role="2VODD2">
                <node concept="3clFbF" id="1edLqv8OEkX" role="3cqZAp">
                  <node concept="2OqwBi" id="1edLqv8OEkS" role="3clFbG">
                    <node concept="3TrEf2" id="1edLqv8OEkV" role="2OqNvi">
                      <ref role="3Tt5mk" to="tpee:4VkOLwjf83e" resolve="type" />
                    </node>
                    <node concept="30H73N" id="1edLqv8OEkW" role="2Oq$k0" />
                  </node>
                </node>
              </node>
            </node>
          </node>
        </node>
        <node concept="1WS0z7" id="1edLqv8ODja" role="lGtFl">
          <node concept="3JmXsc" id="1edLqv8ODjd" role="3Jn$fo">
            <node concept="3clFbS" id="1edLqv8ODje" role="2VODD2">
              <node concept="3clFbF" id="1edLqv8ODjk" role="3cqZAp">
                <node concept="2OqwBi" id="1edLqv8ODjf" role="3clFbG">
                  <node concept="3Tsc0h" id="1edLqv8ODji" role="2OqNvi">
                    <ref role="3TtcxE" to="j33e:1edLqv8Ou4y" resolve="parameterDeclarations" />
                  </node>
                  <node concept="30H73N" id="1edLqv8ODjj" role="2Oq$k0" />
                </node>
              </node>
            </node>
          </node>
        </node>
        <node concept="17Uvod" id="1edLqv8OF8h" role="lGtFl">
          <property role="2qtEX9" value="name" />
          <property role="P4ACc" value="ceab5195-25ea-4f22-9b92-103b95ca8c0c/1169194658468/1169194664001" />
          <node concept="3zFVjK" id="1edLqv8OF8k" role="3zH0cK">
            <node concept="3clFbS" id="1edLqv8OF8l" role="2VODD2">
              <node concept="3clFbF" id="1edLqv8OF8r" role="3cqZAp">
                <node concept="2OqwBi" id="1edLqv8OF8m" role="3clFbG">
                  <node concept="3TrcHB" id="1edLqv8OF8p" role="2OqNvi">
                    <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
                  </node>
                  <node concept="30H73N" id="1edLqv8OF8q" role="2Oq$k0" />
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
      <node concept="3clFbS" id="1edLqv8OuRk" role="3clF47">
        <node concept="3cpWs6" id="1edLqv8OuUu" role="3cqZAp">
          <node concept="3cpWs3" id="1edLqv8OvWS" role="3cqZAk">
            <node concept="37vLTw" id="1edLqv8OvX7" role="3uHU7w">
              <ref role="3cqZAo" node="1edLqv8OuTc" resolve="p1" />
            </node>
            <node concept="Xl_RD" id="1edLqv8OuV_" role="3uHU7B" />
          </node>
          <node concept="2b32R4" id="1edLqv8Oy3B" role="lGtFl">
            <node concept="3JmXsc" id="1edLqv8Oy3E" role="2P8S$">
              <node concept="3clFbS" id="1edLqv8Oy3F" role="2VODD2">
                <node concept="3clFbF" id="1edLqv8Oy3L" role="3cqZAp">
                  <node concept="2OqwBi" id="1edLqv8O$Tu" role="3clFbG">
                    <node concept="2OqwBi" id="1edLqv8Oy3G" role="2Oq$k0">
                      <node concept="3TrEf2" id="1edLqv8OzFq" role="2OqNvi">
                        <ref role="3Tt5mk" to="j33e:1edLqv8Ou4u" resolve="body" />
                      </node>
                      <node concept="30H73N" id="1edLqv8Oy3K" role="2Oq$k0" />
                    </node>
                    <node concept="3Tsc0h" id="1edLqv8O_pV" role="2OqNvi">
                      <ref role="3TtcxE" to="tpee:fzcqZ_x" resolve="statement" />
                    </node>
                  </node>
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
      <node concept="17QB3L" id="1edLqv8OuSK" role="3clF45">
        <node concept="29HgVG" id="1edLqv8OJXu" role="lGtFl">
          <node concept="3NFfHV" id="1edLqv8OJXv" role="3NFExx">
            <node concept="3clFbS" id="1edLqv8OJXw" role="2VODD2">
              <node concept="3clFbF" id="1edLqv8OJXA" role="3cqZAp">
                <node concept="2OqwBi" id="1edLqv8OJXx" role="3clFbG">
                  <node concept="3TrEf2" id="1edLqv8OJX$" role="2OqNvi">
                    <ref role="3Tt5mk" to="j33e:1edLqv8Ou7U" resolve="baseLanguageReturnType" />
                  </node>
                  <node concept="30H73N" id="1edLqv8OJX_" role="2Oq$k0" />
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
      <node concept="3Tm1VV" id="1edLqv8OuRj" role="1B3o_S" />
      <node concept="1WS0z7" id="1edLqv8OwvC" role="lGtFl">
        <node concept="3JmXsc" id="1edLqv8OwvD" role="3Jn$fo">
          <node concept="3clFbS" id="1edLqv8OwvE" role="2VODD2">
            <node concept="3clFbF" id="1edLqv8OwC8" role="3cqZAp">
              <node concept="2OqwBi" id="1edLqv8OxeM" role="3clFbG">
                <node concept="2OqwBi" id="1edLqv8OwVa" role="2Oq$k0">
                  <node concept="1iwH7S" id="1edLqv8OwC7" role="2Oq$k0" />
                  <node concept="1r8y6K" id="1edLqv8Ox1V" role="2OqNvi" />
                </node>
                <node concept="2SmgA7" id="1edLqv8Oxln" role="2OqNvi">
                  <node concept="chp4Y" id="1edLqv8Oxwp" role="1dBWTz">
                    <ref role="cht4Q" to="j33e:1edLqv8Ou4p" resolve="BaseLanguageFunctionInKotlin" />
                  </node>
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
      <node concept="17Uvod" id="1edLqv8OHI1" role="lGtFl">
        <property role="2qtEX9" value="name" />
        <property role="P4ACc" value="ceab5195-25ea-4f22-9b92-103b95ca8c0c/1169194658468/1169194664001" />
        <node concept="3zFVjK" id="1edLqv8OHI2" role="3zH0cK">
          <node concept="3clFbS" id="1edLqv8OHI3" role="2VODD2">
            <node concept="3clFbF" id="1edLqv8OIv5" role="3cqZAp">
              <node concept="2OqwBi" id="1edLqv8OITk" role="3clFbG">
                <node concept="1iwH7S" id="1edLqv8OIv4" role="2Oq$k0" />
                <node concept="32eq0B" id="1edLqv8OJ8E" role="2OqNvi">
                  <node concept="Xl_RD" id="1edLqv8OJyg" role="32eq0w">
                    <property role="Xl_RC" value="expression" />
                  </node>
                </node>
              </node>
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="3Tm1VV" id="1edLqv8OuQ8" role="1B3o_S" />
    <node concept="n94m4" id="1edLqv8OuQ9" role="lGtFl" />
  </node>
</model>

