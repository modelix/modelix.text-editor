import {Component, Input, OnInit} from '@angular/core';
import { KernelfApiJS, org } from 'modelix.text-editor-kernelf-editor';
import Model_iets3_strings from "../../assets/test.in.expr.os.strings@tests.json";
import Model_iets3_base from "../../assets/test.in.expr.os.base@tests.json";
import {
  isOfConcept_Model, isOfConcept_Module, isOfConcept_Repository,
  N_Module
} from "../../gen/L_org_modelix_model_repositoryconcepts";
import {ITypedNode, LanguageRegistry} from "@modelix/ts-model-api";
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {SelectionChange} from '@angular/cdk/collections';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  @Input()
  public node: any | undefined; // org.modelix.model.api.INode
  private observableChildren: Map<ITypedNode, BehaviorSubject<ITypedNode[]>> = new Map()

  treeControl: NestedTreeControl<ITypedNode> = new NestedTreeControl<ITypedNode>((node: ITypedNode) => {
    let observable = this.observableChildren.get(node)
    if (!observable) {
      observable = new BehaviorSubject<ITypedNode[]>(this.getVisibleChildren(node))
      this.observableChildren.set(node, observable)
    }
    return observable
  });
  dataSource: MatTreeNestedDataSource<ITypedNode> = new MatTreeNestedDataSource<ITypedNode>();

  constructor() {
    this.treeControl.expansionModel.changed.subscribe(change => {
      for (let node of change.added) {
        let observable = this.observableChildren.get(node)
        if (observable) {
          observable.next(this.getVisibleChildren(node))
        }
      }
    });
  }

  public getVisibleChildren(node: ITypedNode): ITypedNode[] {
    if (this.isExpanded(node)) {
      return node.unwrap().getAllChildren().map(child => LanguageRegistry.INSTANCE.wrapNode(child));
    } else {
      return [];
    }
  }

  ngOnInit(): void {
    if (this.node === undefined) {
      let jsonModels = [
        JSON.stringify(Model_iets3_strings),
        JSON.stringify(Model_iets3_base),
      ];
      KernelfApiJS.connectToModelServer(jsonModels, node => {
        this.node = node;
        this.dataSource.data = [LanguageRegistry.INSTANCE.wrapNode(KernelfApiJS.getNodeConverter().nodeToJs(this.node))]
      })
    }
  }

  public isExpanded(node: ITypedNode): boolean {
    return this.treeControl.isExpanded(node)
  }

  public getModules(): Array<N_Module> {
    if (this.node === undefined) return []
    let modules: Array<any /* INode */> = KernelfApiJS.getModules(this.node);
    return modules.map(n => LanguageRegistry.INSTANCE.wrapNode(org.modelix.model.api.JSNodeConverter.nodeToJs(n)) as N_Module)
  }

  hasChild = (_: number, node: ITypedNode) => (isOfConcept_Repository(node) || isOfConcept_Module(node) || isOfConcept_Model(node)) && node.unwrap().getAllChildren().length > 0;

  getLabel(node: ITypedNode): string {
    return KernelfApiJS.nodeToString(node)
  }
}
