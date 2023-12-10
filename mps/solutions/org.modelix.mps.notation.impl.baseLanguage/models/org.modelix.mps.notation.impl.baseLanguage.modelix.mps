<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:9565a1ac-337e-4f9a-93cc-5026eb7e7382(org.modelix.mps.notation.impl.baseLanguage.modelix)">
  <persistence version="9" />
  <languages>
    <use id="c7b55726-1795-47bd-aa21-714ac1e30f21" name="org.modelix.mps.notation" version="0" />
  </languages>
  <imports>
    <import index="tpee" ref="r:00000000-0000-4000-0000-011c895902ca(jetbrains.mps.baseLanguage.structure)" />
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="c7b55726-1795-47bd-aa21-714ac1e30f21" name="org.modelix.mps.notation">
      <concept id="737165568293720756" name="org.modelix.mps.notation.structure.IndentCell" flags="ng" index="2OWiap" />
      <concept id="737165568293545234" name="org.modelix.mps.notation.structure.ChildrenCollectionCell" flags="ng" index="2OWXkZ">
        <property id="737165568293546540" name="separator" index="2OWXC1" />
        <reference id="737165568293545559" name="link" index="2OWXpU" />
        <child id="737165568293546266" name="layout" index="2OWX$R" />
      </concept>
      <concept id="737165568293140349" name="org.modelix.mps.notation.structure.StaticCollectionCell" flags="ng" index="2OY0tg">
        <child id="737165568293140783" name="cells" index="2OY0$2" />
        <child id="737165568293146993" name="layout" index="2OYu5s" />
      </concept>
      <concept id="737165568293187226" name="org.modelix.mps.notation.structure.PropertyCell" flags="ng" index="2OYlUR">
        <reference id="737165568293187552" name="property" index="2OYlZd" />
      </concept>
      <concept id="737165568293143389" name="org.modelix.mps.notation.structure.VerticalLayout" flags="ng" index="2OYvdK" />
      <concept id="635805674430182962" name="org.modelix.mps.notation.structure.ConceptAliasCell" flags="ng" index="1yh6fm" />
      <concept id="635805674430247673" name="org.modelix.mps.notation.structure.OptionalCell" flags="ng" index="1yhmst">
        <child id="635805674430247677" name="cell" index="1yhmsp" />
      </concept>
      <concept id="635805674430285347" name="org.modelix.mps.notation.structure.RemoveSpace" flags="ng" index="1yiDf7" />
      <concept id="635805674430285358" name="org.modelix.mps.notation.structure.SingleChildCell" flags="ng" index="1yiDfa">
        <reference id="635805674430285362" name="link" index="1yiDfm" />
      </concept>
      <concept id="635805674430276261" name="org.modelix.mps.notation.structure.ReferenceCell" flags="ng" index="1yiJt1">
        <reference id="635805674430276264" name="link" index="1yiJtc" />
      </concept>
      <concept id="8310867745953158874" name="org.modelix.mps.notation.structure.ConstantCell" flags="ng" index="3JB3jO">
        <property id="8310867745953159745" name="text" index="3JB3xJ" />
      </concept>
      <concept id="8310867745953062360" name="org.modelix.mps.notation.structure.NotationModule" flags="ng" index="3JBFZQ">
        <child id="8310867745953085065" name="content" index="3JBHiB" />
      </concept>
      <concept id="8310867745953086317" name="org.modelix.mps.notation.structure.ConceptNotation" flags="ng" index="3JBH_3">
        <reference id="8310867745953086698" name="concept" index="3JBHV4" />
        <child id="8310867745953087407" name="cell" index="3JBHQ1" />
      </concept>
      <concept id="8310867745953085772" name="org.modelix.mps.notation.structure.EmptyLine" flags="ng" index="3JBHHy" />
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
  </registry>
  <node concept="3JBFZQ" id="63DBII8q9zu">
    <property role="TrG5h" value="BaseLanguageEditor" />
    <node concept="3JBH_3" id="63DBII8q9F5" role="3JBHiB">
      <ref role="3JBHV4" to="tpee:fz12cDA" resolve="ClassConcept" />
      <node concept="2OY0tg" id="CUW2QYKUQU" role="3JBHQ1">
        <node concept="2OY0tg" id="CUW2QYMX13" role="2OY0$2">
          <node concept="3JB3jO" id="63DBII8q9Mk" role="2OY0$2">
            <property role="3JB3xJ" value="class" />
          </node>
          <node concept="2OYlUR" id="CUW2QYMi3M" role="2OY0$2">
            <ref role="2OYlZd" to="tpck:h0TrG11" resolve="name" />
          </node>
          <node concept="3JB3jO" id="CUW2QYMicm" role="2OY0$2">
            <property role="3JB3xJ" value="{" />
          </node>
        </node>
        <node concept="2OY0tg" id="CUW2QYMX7Z" role="2OY0$2">
          <node concept="2OWiap" id="CUW2QYNjjz" role="2OY0$2" />
          <node concept="2OWXkZ" id="CUW2QYMNqb" role="2OY0$2">
            <ref role="2OWXpU" to="tpee:4EqhHTp4Mw3" resolve="member" />
            <node concept="2OYvdK" id="CUW2QYNjnP" role="2OWX$R" />
          </node>
        </node>
        <node concept="2OY0tg" id="CUW2QYMX53" role="2OY0$2">
          <node concept="3JB3jO" id="CUW2QYMiec" role="2OY0$2">
            <property role="3JB3xJ" value="}" />
          </node>
        </node>
        <node concept="2OYvdK" id="CUW2QYMWYo" role="2OYu5s" />
      </node>
    </node>
    <node concept="3JBH_3" id="ziPuhECZaR" role="3JBHiB">
      <ref role="3JBHV4" to="tpee:fIYIFWa" resolve="StaticMethodDeclaration" />
      <node concept="2OY0tg" id="ziPuhECZcS" role="3JBHQ1">
        <node concept="2OYvdK" id="ziPuhECZcV" role="2OYu5s" />
        <node concept="2OY0tg" id="ziPuhECZcX" role="2OY0$2">
          <node concept="1yiDfa" id="ziPuhECZcZ" role="2OY0$2">
            <ref role="1yiDfm" to="tpee:h9B3oxE" resolve="visibility" />
          </node>
          <node concept="3JB3jO" id="ziPuhECZds" role="2OY0$2">
            <property role="3JB3xJ" value="static" />
          </node>
          <node concept="1yiDfa" id="ziPuhEDfkR" role="2OY0$2">
            <ref role="1yiDfm" to="tpee:fzclF7X" resolve="returnType" />
          </node>
          <node concept="2OYlUR" id="ziPuhEDflt" role="2OY0$2">
            <ref role="2OYlZd" to="tpck:h0TrG11" resolve="name" />
          </node>
          <node concept="1yiDf7" id="ziPuhEDfmf" role="2OY0$2" />
          <node concept="3JB3jO" id="ziPuhEDflL" role="2OY0$2">
            <property role="3JB3xJ" value="(" />
          </node>
          <node concept="1yiDf7" id="ziPuhEDfmx" role="2OY0$2" />
          <node concept="2OWXkZ" id="ziPuhEDtDB" role="2OY0$2">
            <property role="2OWXC1" value="," />
            <ref role="2OWXpU" to="tpee:fzclF7Y" resolve="parameter" />
          </node>
          <node concept="1yiDf7" id="ziPuhEDfmX" role="2OY0$2" />
          <node concept="3JB3jO" id="ziPuhEDflZ" role="2OY0$2">
            <property role="3JB3xJ" value=")" />
          </node>
          <node concept="3JB3jO" id="ziPuhEDtFs" role="2OY0$2">
            <property role="3JB3xJ" value="{" />
          </node>
        </node>
        <node concept="2OY0tg" id="ziPuhEDtHh" role="2OY0$2">
          <node concept="2OWiap" id="ziPuhEDtHy" role="2OY0$2" />
          <node concept="1yiDfa" id="ziPuhEDtHB" role="2OY0$2">
            <ref role="1yiDfm" to="tpee:fzclF7Z" resolve="body" />
          </node>
        </node>
        <node concept="2OY0tg" id="ziPuhEDtFR" role="2OY0$2">
          <node concept="3JB3jO" id="ziPuhEDtG6" role="2OY0$2">
            <property role="3JB3xJ" value="}" />
          </node>
        </node>
      </node>
    </node>
    <node concept="3JBH_3" id="ziPuhEDtEq" role="3JBHiB">
      <ref role="3JBHV4" to="tpee:fz7vLUk" resolve="ParameterDeclaration" />
      <node concept="2OY0tg" id="ziPuhEDtEW" role="3JBHQ1">
        <node concept="1yiDfa" id="ziPuhEDtEZ" role="2OY0$2">
          <ref role="1yiDfm" to="tpee:4VkOLwjf83e" resolve="type" />
        </node>
        <node concept="2OYlUR" id="ziPuhEDtF4" role="2OY0$2">
          <ref role="2OYlZd" to="tpck:h0TrG11" resolve="name" />
        </node>
      </node>
    </node>
    <node concept="3JBHHy" id="ziPuhECZ9A" role="3JBHiB" />
    <node concept="3JBH_3" id="ziPuhEDtIu" role="3JBHiB">
      <ref role="3JBHV4" to="tpee:fzclF8j" resolve="ExpressionStatement" />
      <node concept="2OY0tg" id="ziPuhEDtJa" role="3JBHQ1">
        <node concept="1yiDfa" id="ziPuhEDtJd" role="2OY0$2">
          <ref role="1yiDfm" to="tpee:fzclF8k" resolve="expression" />
        </node>
        <node concept="1yiDf7" id="ziPuhEDtJq" role="2OY0$2" />
        <node concept="3JB3jO" id="ziPuhEDtJi" role="2OY0$2">
          <property role="3JB3xJ" value=";" />
        </node>
      </node>
    </node>
    <node concept="3JBHHy" id="ziPuhEDFaI" role="3JBHiB" />
    <node concept="3JBH_3" id="ziPuhEDFcb" role="3JBHiB">
      <ref role="3JBHV4" to="tpee:gFTlX_I" resolve="Visibility" />
      <node concept="1yh6fm" id="ziPuhEDFcX" role="3JBHQ1" />
    </node>
    <node concept="3JBHHy" id="42C8o9nAQBb" role="3JBHiB" />
    <node concept="3JBH_3" id="42C8o9nAQCI" role="3JBHiB">
      <ref role="3JBHV4" to="tpee:gWaQbR$" resolve="PrimitiveType" />
      <node concept="1yh6fm" id="42C8o9nAQDz" role="3JBHQ1" />
    </node>
    <node concept="3JBH_3" id="42C8o9nAV8H" role="3JBHiB">
      <ref role="3JBHV4" to="tpee:hP7QB7G" resolve="StringType" />
      <node concept="1yh6fm" id="42C8o9nAV8I" role="3JBHQ1" />
    </node>
    <node concept="3JBH_3" id="42C8o9nAVj2" role="3JBHiB">
      <ref role="3JBHV4" to="tpee:f_0Q1BR" resolve="ArrayType" />
      <node concept="2OY0tg" id="42C8o9nAVjV" role="3JBHQ1">
        <node concept="1yiDfa" id="42C8o9nAVjY" role="2OY0$2">
          <ref role="1yiDfm" to="tpee:f_0Q1BS" resolve="componentType" />
        </node>
        <node concept="1yiDf7" id="42C8o9nAVk$" role="2OY0$2" />
        <node concept="3JB3jO" id="42C8o9nAVk3" role="2OY0$2">
          <property role="3JB3xJ" value="[]" />
        </node>
      </node>
    </node>
    <node concept="3JBH_3" id="42C8o9nAVvn" role="3JBHiB">
      <ref role="3JBHV4" to="tpee:fzclF80" resolve="StatementList" />
      <node concept="2OWXkZ" id="42C8o9nAVwl" role="3JBHQ1">
        <ref role="2OWXpU" to="tpee:fzcqZ_x" resolve="statement" />
        <node concept="2OYvdK" id="42C8o9nAVwo" role="2OWX$R" />
      </node>
    </node>
    <node concept="3JBH_3" id="42C8o9nAVxo" role="3JBHiB">
      <ref role="3JBHV4" to="tpee:hqOqwz4" resolve="DotExpression" />
      <node concept="2OY0tg" id="42C8o9nAVyp" role="3JBHQ1">
        <node concept="1yiDfa" id="42C8o9nAVys" role="2OY0$2">
          <ref role="1yiDfm" to="tpee:hqOq$gm" resolve="operand" />
        </node>
        <node concept="1yiDf7" id="42C8o9nAVyN" role="2OY0$2" />
        <node concept="3JB3jO" id="42C8o9nAVyx" role="2OY0$2">
          <property role="3JB3xJ" value="." />
        </node>
        <node concept="1yiDf7" id="42C8o9nAVyZ" role="2OY0$2" />
        <node concept="1yiDfa" id="42C8o9nAVyD" role="2OY0$2">
          <ref role="1yiDfm" to="tpee:hqOqNr4" resolve="operation" />
        </node>
      </node>
    </node>
    <node concept="3JBH_3" id="26N7cZTMFhU" role="3JBHiB">
      <ref role="3JBHV4" to="tpee:fzcpWvK" resolve="LocalVariableDeclarationStatement" />
      <node concept="2OY0tg" id="26N7cZTMFj1" role="3JBHQ1">
        <node concept="1yiDfa" id="26N7cZTMFj4" role="2OY0$2">
          <ref role="1yiDfm" to="tpee:fzcpWvL" resolve="localVariableDeclaration" />
        </node>
        <node concept="1yiDf7" id="26N7cZTMFjd" role="2OY0$2" />
        <node concept="3JB3jO" id="26N7cZTMFji" role="2OY0$2">
          <property role="3JB3xJ" value=";" />
        </node>
      </node>
    </node>
    <node concept="3JBH_3" id="26N7cZTMFxK" role="3JBHiB">
      <ref role="3JBHV4" to="tpee:fzcpWvJ" resolve="LocalVariableDeclaration" />
      <node concept="2OY0tg" id="26N7cZTMFyW" role="3JBHQ1">
        <node concept="1yiDfa" id="26N7cZTMFyZ" role="2OY0$2">
          <ref role="1yiDfm" to="tpee:4VkOLwjf83e" resolve="type" />
        </node>
        <node concept="2OYlUR" id="26N7cZTMFz4" role="2OY0$2">
          <ref role="2OYlZd" to="tpck:h0TrG11" resolve="name" />
        </node>
        <node concept="1yhmst" id="26N7cZTMFzc" role="2OY0$2">
          <node concept="2OY0tg" id="26N7cZTMFzt" role="1yhmsp">
            <node concept="3JB3jO" id="26N7cZTMFzw" role="2OY0$2">
              <property role="3JB3xJ" value="=" />
            </node>
            <node concept="1yiDfa" id="26N7cZTMFz_" role="2OY0$2">
              <ref role="1yiDfm" to="tpee:fz3vP1I" resolve="initializer" />
            </node>
          </node>
        </node>
      </node>
    </node>
    <node concept="3JBH_3" id="26N7cZTNRvx" role="3JBHiB">
      <ref role="3JBHV4" to="tpee:fJuHJVf" resolve="BinaryOperation" />
      <node concept="2OY0tg" id="26N7cZTNRwP" role="3JBHQ1">
        <node concept="1yiDfa" id="26N7cZTNRwS" role="2OY0$2">
          <ref role="1yiDfm" to="tpee:fJuHU4s" resolve="leftExpression" />
        </node>
        <node concept="1yh6fm" id="26N7cZTNRwX" role="2OY0$2" />
        <node concept="1yiDfa" id="26N7cZTNRx5" role="2OY0$2">
          <ref role="1yiDfm" to="tpee:fJuHU4r" resolve="rightExpression" />
        </node>
      </node>
    </node>
    <node concept="3JBH_3" id="26N7cZTNRMx" role="3JBHiB">
      <ref role="3JBHV4" to="tpee:fzcmrck" resolve="IntegerConstant" />
      <node concept="2OYlUR" id="26N7cZTNRNU" role="3JBHQ1">
        <ref role="2OYlZd" to="tpee:fzcmrcl" resolve="value" />
      </node>
    </node>
    <node concept="3JBH_3" id="4dQjfTHX1VY" role="3JBHiB">
      <ref role="3JBHV4" to="tpee:hiAHcMF" resolve="AnnotationInstance" />
      <node concept="2OY0tg" id="4dQjfTHX1Xp" role="3JBHQ1">
        <node concept="3JB3jO" id="4dQjfTHX1Xs" role="2OY0$2">
          <property role="3JB3xJ" value="@" />
        </node>
        <node concept="1yiJt1" id="4dQjfTHX1Xx" role="2OY0$2">
          <ref role="1yiJtc" to="tpee:hiAI5P0" resolve="annotation" />
        </node>
        <node concept="1yhmst" id="4dQjfTHX2kb" role="2OY0$2">
          <node concept="2OY0tg" id="4dQjfTHX2ki" role="1yhmsp">
            <node concept="3JB3jO" id="4dQjfTHX2kl" role="2OY0$2">
              <property role="3JB3xJ" value="(" />
            </node>
            <node concept="2OWXkZ" id="4dQjfTHX2ky" role="2OY0$2">
              <ref role="2OWXpU" to="tpee:hiB76_Z" resolve="value" />
            </node>
            <node concept="3JB3jO" id="4dQjfTHX2kq" role="2OY0$2">
              <property role="3JB3xJ" value=")" />
            </node>
          </node>
        </node>
      </node>
    </node>
  </node>
</model>

