import {Component, Input, OnInit} from '@angular/core';
import { org, jetbrains } from 'kernelf-editor';
import {DomSanitizer} from "@angular/platform-browser";
import { PipeTransform, Pipe } from "@angular/core";

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  @Input()
  public node!: jetbrains.mps.lang.core.N_BaseConcept

  constructor() {
  }

  ngOnInit(): void {
  }

  public renderEditor(): string {
    return org.modelix.editor.kernelf.KernelfAPI.renderNodeAsHtmlText(this.node.unwrap());
  }

  public getTitle(): string {
    return org.modelix.editor.kernelf.KernelfAPI.nodeToString(this.node)
  }
}

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value: string) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
