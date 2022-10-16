import {Component, Input, OnInit} from '@angular/core';
import { org, jetbrains } from 'kernelf-editor';

@Component({
  selector: 'app-explorer-model',
  templateUrl: './explorer-model.component.html',
  styleUrls: ['./explorer-model.component.scss']
})
export class ExplorerModelComponent implements OnInit {

  @Input()
  public node!: org.modelix.model.repositoryconcepts.N_Model;

  constructor() { }

  ngOnInit(): void {
  }

  public getRootNodes(): Array<jetbrains.mps.lang.core.N_BaseConcept> {
    return this.node.rootNodes.asArray();
  }
}
