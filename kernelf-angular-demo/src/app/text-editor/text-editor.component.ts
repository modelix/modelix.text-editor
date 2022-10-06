import { Component, OnInit } from '@angular/core';
import * as kernelf from 'kernelf-editor';
import SampleJson from '../../assets/test.in.expr.os.strings_tests.json';
import {DomSanitizer} from "@angular/platform-browser";
import { PipeTransform, Pipe } from "@angular/core";

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public renderKernelf(): string {
    let data = JSON.stringify(SampleJson)
    let htmlText = kernelf.org.modelix.editor.kernelf.KernelfAPI.renderJsonAsHtmlText(data);
    return htmlText;
  }
}

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value: string) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
