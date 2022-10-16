import {Component, Input, OnInit} from '@angular/core';
import { org } from 'kernelf-editor';
import SampleJson from "../../assets/test.in.expr.os.strings_tests.json";

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  @Input()
  public node: org.modelix.model.api.INode | undefined;

  constructor() { }

  ngOnInit(): void {
    if (this.node === undefined) {
      let data = JSON.stringify(SampleJson)
      this.node = org.modelix.editor.kernelf.KernelfAPI.loadModelFromJson(data)
    }
  }

  public getModules(): Array<org.modelix.model.repositoryconcepts.N_Module> {
    if (this.node === undefined) return []
    return org.modelix.editor.kernelf.KernelfAPI.getModules(this.node)
  }
}
