import {Component, Input, OnInit} from '@angular/core';
import {org, Nullable} from "@modelix/kernelf-editor";
import N_Module = org.modelix.model.repositoryconcepts.N_Module;
import N_Model = org.modelix.model.repositoryconcepts.N_Model;

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
