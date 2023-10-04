import { Component } from '@angular/core';
import {ITypedNode, LanguageRegistry} from "@modelix/ts-model-api";
import { org } from "@modelix/kernelf-editor";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kernelf-angular-demo';
}

LanguageRegistry.INSTANCE.wrapperCache = (node: ITypedNode) => org.modelix.model.api.NodeAdapterCache.getCachedWrapper(node, ()=>node)
