import {Component, Input, OnInit} from '@angular/core';
import { org } from 'kernelf-editor';
import SampleJson from "../../assets/test.in.expr.os.strings_tests.json";
import {L_org_modelix_model_repositoryconcepts} from "../../gen/L_org_modelix_model_repositoryconcepts";
import {LanguageRegistry} from "../../../../../modelix.core/ts-model-api";

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  @Input()
  public node: any | undefined; // org.modelix.model.api.INode

  constructor() { }

  ngOnInit(): void {
    if (this.node === undefined) {
      let data = JSON.stringify(SampleJson)
      this.node = org.modelix.editor.kernelf.KernelfAPI.loadModelFromJson(data)
    }
  }

  public getModules(): Array<L_org_modelix_model_repositoryconcepts.Module> {
    if (this.node === undefined) return []
    let modelixNodes: Array<any> = org.modelix.editor.kernelf.KernelfAPI.getModules(this.node);
    return modelixNodes.map(n => LanguageRegistry.INSTANCE.wrapNode(org.modelix.model.api.nodeToJs(n)) as L_org_modelix_model_repositoryconcepts.Module)
  }
}
