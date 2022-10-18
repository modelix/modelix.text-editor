import {Component, Input, OnInit} from '@angular/core';
import {L_org_modelix_model_repositoryconcepts} from "../../gen/L_org_modelix_model_repositoryconcepts";

@Component({
  selector: 'app-explorer-model',
  templateUrl: './explorer-model.component.html',
  styleUrls: ['./explorer-model.component.scss']
})
export class ExplorerModelComponent implements OnInit {

  @Input()
  public node!: L_org_modelix_model_repositoryconcepts.N_Model;

  constructor() { }

  ngOnInit(): void {
  }
}
