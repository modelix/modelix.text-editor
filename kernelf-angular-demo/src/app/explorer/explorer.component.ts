import {Component, Input, OnInit} from '@angular/core';
import { KernelfApiJS, org } from 'modelix.text-editor-kernelf-editor';
import Model_iets3_strings from "../../assets/test.in.expr.os.strings@tests.json";
import Model_iets3_base from "../../assets/test.in.expr.os.base@tests.json";
import {N_Module} from "../../gen/L_org_modelix_model_repositoryconcepts";
import {LanguageRegistry} from "@modelix/ts-model-api";

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
      let jsonModels = [
        JSON.stringify(Model_iets3_strings),
        JSON.stringify(Model_iets3_base),
      ];
      this.node = KernelfApiJS.connectToModelServer(jsonModels, node => this.node = node)
    }
  }

  public getModules(): Array<N_Module> {
    if (this.node === undefined) return []
    let modules: Array<any /* INode */> = KernelfApiJS.getModules(this.node);
    return modules.map(n => LanguageRegistry.INSTANCE.wrapNode(org.modelix.model.api.JSNodeConverter.nodeToJs(n)) as N_Module)
  }
}
