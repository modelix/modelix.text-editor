import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { PipeTransform, Pipe } from "@angular/core";
import { org, jetbrains, KernelfApiJS, TypedNodeConverter} from "@modelix/kernelf-editor";
import {isOfConcept_INamedConcept} from "../../gen/L_jetbrains_mps_lang_core";
import N_INamedConcept = jetbrains.mps.lang.core.N_INamedConcept;
import ITypedNode = org.modelix.metamodel.ITypedNode;
import INode = org.modelix.model.api.INode;

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class TextEditorComponent implements OnInit {

  @ViewChild('editorContainer') editorContainer: ElementRef | undefined;

  private nodeToLoad: any; // org.modelix.model.api.INode or TypedNode or INodeJS
  private loadedNode: any;

  constructor() {
  }

  @Input()
  set node(value: any) {
    this.nodeToLoad = value;
    this.updateEditor();
  }

  get node(): any {
    return this.nodeToLoad;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.updateEditor();
  }

  private updateEditor() {
    if (this.nodeToLoad !== this.loadedNode && this.editorContainer) {
      let unwrappedNode = this.getUnwrappedNode();
      if (unwrappedNode) {
        let dom = KernelfApiJS.renderAndUpdateNodeAsDom(unwrappedNode);
        let nativeElement: HTMLElement = this.editorContainer.nativeElement;
        nativeElement.innerHTML = ""
        nativeElement.appendChild(dom);
      }
      this.loadedNode = this.nodeToLoad;
    }
  }

  public get nodeName(): string {
    let name = this.getNamedConcept()?.name;
    return name === undefined ? "" : name
  }

  public set nodeName(value: string) {
    if (this.nodeName !== value) {
      let named = this.getNamedConcept();
      if (named !== undefined) named.name = value
    }
  }

  public getUnwrappedNode(): INode {
    return KernelfApiJS.getNodeConverter().toINode(this.node)
  }

  public getTypedNode(): ITypedNode {
    return TypedNodeConverter.toTypedNode(this.node)
  }

  public getTitle(): string {
    return KernelfApiJS.nodeToString(this.getUnwrappedNode())
  }

  public getNamedConcept(): N_INamedConcept | undefined {
    let typedNode = this.getTypedNode();
    return isOfConcept_INamedConcept(typedNode) ? typedNode : undefined
  }
}

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value: string) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
