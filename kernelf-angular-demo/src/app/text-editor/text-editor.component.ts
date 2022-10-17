import {Component, Input, OnInit} from '@angular/core';
import { org } from 'kernelf-editor';
import {DomSanitizer} from "@angular/platform-browser";
import { PipeTransform, Pipe } from "@angular/core";
import {TypedNode} from "../../../../../modelix.core/ts-model-api";

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  @Input()
  public node!: any; // org.modelix.model.api.INode or TypedNode

  constructor() {
  }

  ngOnInit(): void {
  }

  public getUnwrappedNode(): any {
    return this.node instanceof TypedNode ? this.node.node : this.node
  }

  public renderEditor(): string {
    return org.modelix.editor.kernelf.KernelfAPI.renderNodeAsHtmlText(this.getUnwrappedNode());
  }

  public getTitle(): string {
    return org.modelix.editor.kernelf.KernelfAPI.nodeToString(this.getUnwrappedNode())
  }
}

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value: string) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
