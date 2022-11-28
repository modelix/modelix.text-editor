import {Component, Input, OnInit} from '@angular/core';
import { org, Nullable } from 'kernelf-editor';
import {
  N_Model,
  N_Module
} from "../../gen/L_org_modelix_model_repositoryconcepts";

@Component({
  selector: 'app-explorer-module',
  templateUrl: './explorer-module.component.html',
  styleUrls: ['./explorer-module.component.scss']
})
export class ExplorerModuleComponent implements OnInit {

  @Input()
  public node!: N_Module;

  constructor() {

  }

  public getModels(): Array<N_Model> {
    return this.node.models.asArray()
  }

  public getName(): Nullable<string> {
    try {
      throw Error(".name")
    } catch (e) {
      console.log(e)
    }
    let name = this.node.name;
    console.log("Module name: " + name)
    return name
  }

  ngOnInit(): void {
  }

}
