<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:56bceec5-c44e-4909-98e4-c1ab78723462(org.modelix.mps.spreadsheets.sandbox.finance)">
  <persistence version="9" />
  <languages>
    <use id="bb2e9d6d-8d62-447e-ba8f-a73deac8346b" name="org.modelix.mps.spreadsheets" version="0" />
  </languages>
  <imports />
  <registry>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ngI" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
    <language id="bb2e9d6d-8d62-447e-ba8f-a73deac8346b" name="org.modelix.mps.spreadsheets">
      <concept id="3522652784678266139" name="org.modelix.mps.spreadsheets.structure.GenericSpreadsheetRow" flags="ng" index="9aLWg">
        <child id="3522652784678266144" name="cells" index="9aLWF" />
      </concept>
      <concept id="3522652784678266140" name="org.modelix.mps.spreadsheets.structure.GenericSpreadsheetCell" flags="ng" index="9aLWn">
        <property id="3522652784678613796" name="text" index="9bs$J" />
      </concept>
      <concept id="3522652784676294112" name="org.modelix.mps.spreadsheets.structure.GenericSpreadsheetData" flags="ng" index="9ijvF">
        <property id="3522652784678266146" name="columns" index="9aLWD" />
        <reference id="3522652784676373439" name="declaration" index="9jZAO" />
        <child id="3522652784678266141" name="rows" index="9aLWm" />
      </concept>
      <concept id="3522652784675195905" name="org.modelix.mps.spreadsheets.structure.GenericSpreadsheetDeclaration" flags="ng" index="9uvoa" />
      <concept id="4649248350060789135" name="org.modelix.mps.spreadsheets.structure.TableDataDeclaration" flags="ng" index="2ptcWM">
        <reference id="4649248350061543192" name="entity" index="2pu4Q_" />
      </concept>
      <concept id="1612157992439946854" name="org.modelix.mps.spreadsheets.structure.DocumentData" flags="ng" index="rrLt1">
        <reference id="1612157992439993003" name="document" index="rrHIc" />
        <child id="1612157992439946858" name="contentData" index="rrLtd" />
      </concept>
      <concept id="1612157992439865027" name="org.modelix.mps.spreadsheets.structure.Column" flags="ng" index="rsdv$">
        <child id="1612157992439865031" name="content" index="rsdvw" />
      </concept>
      <concept id="1612157992439697258" name="org.modelix.mps.spreadsheets.structure.PropertyColumnContent" flags="ng" index="rsOpd">
        <reference id="1612157992439697264" name="property" index="rsOpn" />
      </concept>
      <concept id="1612157992439697240" name="org.modelix.mps.spreadsheets.structure.StringValue" flags="ng" index="rsOpZ">
        <property id="1612157992439697242" name="value" index="rsOpX" />
      </concept>
      <concept id="1612157992439697116" name="org.modelix.mps.spreadsheets.structure.PropertyCellData" flags="ng" index="rsOvV">
        <reference id="1612157992439697119" name="property" index="rsOvS" />
        <child id="1612157992439697121" name="value" index="rsOv6" />
      </concept>
      <concept id="1612157992439697115" name="org.modelix.mps.spreadsheets.structure.RowData" flags="ng" index="rsOvW">
        <child id="1612157992440017546" name="cells" index="rrzIH" />
      </concept>
      <concept id="1612157992439697114" name="org.modelix.mps.spreadsheets.structure.TableDataInstance" flags="ng" index="rsOvX">
        <reference id="4649248350060789136" name="declaration" index="2ptcWH" />
        <child id="1612157992440017543" name="rows" index="rrzIw" />
      </concept>
      <concept id="1612157992439572256" name="org.modelix.mps.spreadsheets.structure.TableView" flags="ng" index="rtmS7">
        <reference id="4649248350061005501" name="data" index="2ps7w0" />
        <child id="1612157992439697261" name="columns" index="rsOpa" />
      </concept>
      <concept id="1612157992439280054" name="org.modelix.mps.spreadsheets.structure.EntityProperty" flags="ng" index="ruvyh">
        <child id="1612157992439280072" name="type" index="ruvzJ" />
      </concept>
      <concept id="1612157992439280053" name="org.modelix.mps.spreadsheets.structure.Entity" flags="ng" index="ruvyi">
        <child id="1612157992439295002" name="properties" index="ruikX" />
      </concept>
      <concept id="1612157992439280061" name="org.modelix.mps.spreadsheets.structure.StringType" flags="ng" index="ruvyq" />
      <concept id="1612157992439124919" name="org.modelix.mps.spreadsheets.structure.Document" flags="ng" index="ruTEg">
        <child id="1612157992439566670" name="content" index="rtlxD" />
      </concept>
    </language>
  </registry>
  <node concept="ruTEg" id="33yYwGTAKIu">
    <property role="TrG5h" value="Ratenplan" />
    <node concept="9uvoa" id="33yYwGTEWRn" role="rtlxD">
      <property role="TrG5h" value="Parameters" />
    </node>
    <node concept="2ptcWM" id="33yYwGTAKIy" role="rtlxD">
      <property role="TrG5h" value="Kreditparameter" />
      <ref role="2pu4Q_" node="33yYwGTAKI$" resolve="Kredit" />
    </node>
    <node concept="rtmS7" id="33yYwGTAKIC" role="rtlxD">
      <property role="TrG5h" value="Ratenplan" />
      <ref role="2ps7w0" node="33yYwGTAKIy" resolve="Kreditparameter" />
      <node concept="rsdv$" id="626dl709xdi" role="rsOpa">
        <node concept="rsOpd" id="626dl709xdj" role="rsdvw">
          <ref role="rsOpn" node="626dl709xdg" resolve="Datum" />
        </node>
      </node>
      <node concept="rsdv$" id="33yYwGTAKII" role="rsOpa">
        <node concept="rsOpd" id="33yYwGTAKIJ" role="rsdvw">
          <ref role="rsOpn" node="33yYwGTAKIG" resolve="Restschulden" />
        </node>
      </node>
      <node concept="rsdv$" id="626dl709xgh" role="rsOpa">
        <node concept="rsOpd" id="626dl709xgi" role="rsdvw">
          <ref role="rsOpn" node="626dl709xgf" resolve="Rate" />
        </node>
      </node>
      <node concept="rsdv$" id="33yYwGTAKJ4" role="rsOpa">
        <node concept="rsOpd" id="33yYwGTAKJ5" role="rsdvw">
          <ref role="rsOpn" node="33yYwGTAKJ2" resolve="Zinsen" />
        </node>
      </node>
      <node concept="rsdv$" id="626dl709xf_" role="rsOpa">
        <node concept="rsOpd" id="626dl709xfA" role="rsdvw">
          <ref role="rsOpn" node="626dl709xfz" resolve="Tilgung" />
        </node>
      </node>
      <node concept="rsdv$" id="626dl709xfT" role="rsOpa">
        <node concept="rsOpd" id="626dl709xfU" role="rsdvw">
          <ref role="rsOpn" node="626dl709xfR" resolve="Neue Restschulden" />
        </node>
      </node>
    </node>
  </node>
  <node concept="rrLt1" id="33yYwGTAKIv">
    <ref role="rrHIc" node="33yYwGTAKIu" resolve="Ratenplan" />
    <node concept="9ijvF" id="33yYwGTF$CZ" role="rrLtd">
      <property role="9aLWD" value="2" />
      <ref role="9jZAO" node="33yYwGTEWRn" resolve="Parameters" />
      <node concept="9aLWg" id="33yYwGTR6_f" role="9aLWm">
        <node concept="9aLWn" id="33yYwGTR6_k" role="9aLWF">
          <property role="9bs$J" value="Kreditsumme" />
        </node>
        <node concept="9aLWn" id="33yYwGTR6_o" role="9aLWF">
          <property role="9bs$J" value="3000" />
        </node>
      </node>
      <node concept="9aLWg" id="33yYwGTR6_h" role="9aLWm">
        <node concept="9aLWn" id="33yYwGTR6_l" role="9aLWF">
          <property role="9bs$J" value="Laufzeit (Monate)" />
        </node>
        <node concept="9aLWn" id="33yYwGTR6_p" role="9aLWF">
          <property role="9bs$J" value="?" />
        </node>
      </node>
      <node concept="9aLWg" id="626dl6ZXEFV" role="9aLWm">
        <node concept="9aLWn" id="626dl702nWQ" role="9aLWF">
          <property role="9bs$J" value="Auszahlung" />
        </node>
        <node concept="9aLWn" id="626dl702nWR" role="9aLWF">
          <property role="9bs$J" value="01.06.2024" />
        </node>
      </node>
      <node concept="9aLWg" id="626dl709xgF" role="9aLWm">
        <node concept="9aLWn" id="626dl709xgQ" role="9aLWF">
          <property role="9bs$J" value="Rate" />
        </node>
        <node concept="9aLWn" id="626dl709xgS" role="9aLWF">
          <property role="9bs$J" value="300" />
        </node>
      </node>
    </node>
    <node concept="rsOvX" id="33yYwGTAKIw" role="rrLtd">
      <ref role="2ptcWH" node="33yYwGTAKIy" resolve="Kreditparameter" />
      <node concept="rsOvW" id="33yYwGTR6_A" role="rrzIw">
        <node concept="rsOvV" id="626dl709xdb" role="rrzIH">
          <ref role="rsOvS" node="33yYwGTAKIG" resolve="Restschulden" />
          <node concept="rsOpZ" id="626dl709xdc" role="rsOv6">
            <property role="rsOpX" value="=Parameters.A2" />
          </node>
        </node>
        <node concept="rsOvV" id="626dl709xdw" role="rrzIH">
          <ref role="rsOvS" node="626dl709xdg" resolve="Datum" />
          <node concept="rsOpZ" id="626dl709xdx" role="rsOv6">
            <property role="rsOpX" value="=Parameters.A4" />
          </node>
        </node>
      </node>
      <node concept="rsOvW" id="33yYwGTR6_C" role="rrzIw">
        <node concept="rsOvV" id="626dl709xd6" role="rrzIH">
          <ref role="rsOvS" node="33yYwGTAKIG" resolve="Restschulden" />
          <node concept="rsOpZ" id="626dl709xd7" role="rsOv6">
            <property role="rsOpX" value="=F2" />
          </node>
        </node>
        <node concept="rsOvV" id="626dl709xdB" role="rrzIH">
          <ref role="rsOvS" node="626dl709xdg" resolve="Datum" />
          <node concept="rsOpZ" id="626dl709xdC" role="rsOv6">
            <property role="rsOpX" value="=A2 + 1Month" />
          </node>
        </node>
      </node>
      <node concept="rsOvW" id="626dl709xdI" role="rrzIw">
        <node concept="rsOvV" id="4QEFofEVwO8" role="rrzIH">
          <ref role="rsOvS" node="33yYwGTAKIG" resolve="Restschulden" />
          <node concept="rsOpZ" id="4QEFofEVwO9" role="rsOv6">
            <property role="rsOpX" value="Q" />
          </node>
        </node>
      </node>
      <node concept="rsOvW" id="4QEFofEVwNQ" role="rrzIw">
        <node concept="rsOvV" id="4QEFofEVwO3" role="rrzIH">
          <ref role="rsOvS" node="33yYwGTAKIG" resolve="Restschulden" />
          <node concept="rsOpZ" id="4QEFofEVwO4" role="rsOv6">
            <property role="rsOpX" value="X" />
          </node>
        </node>
      </node>
    </node>
  </node>
  <node concept="ruvyi" id="33yYwGTAKI$">
    <property role="TrG5h" value="Kredit" />
    <node concept="ruvyh" id="33yYwGTAKIG" role="ruikX">
      <property role="TrG5h" value="Restschulden" />
      <node concept="ruvyq" id="33yYwGTAKIH" role="ruvzJ" />
    </node>
    <node concept="ruvyh" id="33yYwGTAKJ2" role="ruikX">
      <property role="TrG5h" value="Zinsen" />
      <node concept="ruvyq" id="33yYwGTAKJ3" role="ruvzJ" />
    </node>
    <node concept="ruvyh" id="626dl709xdg" role="ruikX">
      <property role="TrG5h" value="Datum" />
      <node concept="ruvyq" id="626dl709xdh" role="ruvzJ" />
    </node>
    <node concept="ruvyh" id="626dl709xfz" role="ruikX">
      <property role="TrG5h" value="Tilgung" />
      <node concept="ruvyq" id="626dl709xf$" role="ruvzJ" />
    </node>
    <node concept="ruvyh" id="626dl709xfR" role="ruikX">
      <property role="TrG5h" value="Neue Restschulden" />
      <node concept="ruvyq" id="626dl709xfS" role="ruvzJ" />
    </node>
    <node concept="ruvyh" id="626dl709xgf" role="ruikX">
      <property role="TrG5h" value="Rate" />
      <node concept="ruvyq" id="626dl709xgg" role="ruvzJ" />
    </node>
  </node>
</model>

