import {Component, Input, OnInit} from '@angular/core';
import { org } from "@modelix/kernelf-editor";
import N_Model = org.modelix.model.repositoryconcepts.N_Model

@Component({
  selector: 'app-explorer-model',
  templateUrl: './explorer-model.component.html',
  styleUrls: ['./explorer-model.component.scss']
})
export class ExplorerModelComponent implements OnInit {

  @Input()
  public node!: N_Model;

  constructor() { }

  ngOnInit(): void {
  }
}
