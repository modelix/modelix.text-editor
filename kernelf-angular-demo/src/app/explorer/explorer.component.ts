import {Component, Input, OnInit} from '@angular/core';
import Model_iets3_strings from "../../assets/test.in.expr.os.strings@tests.json";
import Model_iets3_base from "../../assets/test.in.expr.os.base@tests.json";
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {SelectionChange} from '@angular/cdk/collections';
import {BehaviorSubject} from "rxjs";
import {
  isOfConcept_Model,
  isOfConcept_Module,
  isOfConcept_Repository
} from "../../gen/L_org_modelix_model_repositoryconcepts";
import {KernelfApiJS, org, TypedNodeConverter} from "@modelix/kernelf-editor";
import ITypedNode = org.modelix.metamodel.ITypedNode;
import INode = org.modelix.model.api.INode;
import N_Module = org.modelix.model.repositoryconcepts.N_Module;

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  @Input()
  public node: any | undefined; // org.modelix.model.api.INode
  private observableChildren: Map<ITypedNode, BehaviorSubject<ITypedNode[]>> = new Map()
  selectedNode: ITypedNode | undefined

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
      return node.unwrap().getAllChildrenAsArray().map(child => TypedNodeConverter.toTypedNode(child));
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
        this.dataSource.data = [TypedNodeConverter.toTypedNode(this.node)]
      })
    }
  }

  public isExpanded(node: ITypedNode): boolean {
    return this.treeControl.isExpanded(node)
  }

  public getModules(): Array<N_Module> {
    if (this.node === undefined) return []
    let modules: Array<INode> = KernelfApiJS.getModules(this.node);
    return modules.map(n => TypedNodeConverter.toTypedNode(n) as N_Module)
  }

  hasChild = (_: number, node: ITypedNode) => (isOfConcept_Repository(node) || isOfConcept_Module(node) || isOfConcept_Model(node)) && node.unwrap().getAllChildrenAsArray().length > 0;

  getLabel(node: ITypedNode): string {
    return KernelfApiJS.nodeToString(node)
  }

  editNode(node: ITypedNode) {
    this.selectedNode = node
  }
}
