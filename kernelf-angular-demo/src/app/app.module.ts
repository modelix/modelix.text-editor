import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SafeHtmlPipe, TextEditorComponent} from './text-editor/text-editor.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { ExplorerModuleComponent } from './explorer-module/explorer-module.component';
import { ExplorerModelComponent } from './explorer-model/explorer-model.component';
import {registerLanguages} from "../gen";
import {FormsModule} from "@angular/forms";
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    SafeHtmlPipe,
    ExplorerComponent,
    ExplorerModuleComponent,
    ExplorerModelComponent
  ],
  imports: [
    BrowserModule,
//        AppRoutingModule,
    FormsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLanguages()
