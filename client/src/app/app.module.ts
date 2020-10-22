import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DocumentComponent } from './document/document.component';
import { CollectionComponent } from './collection/collection.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { Type, HasMoreText, IsExpandable, FormatValue } from './common/pipes/pipes';
import { FileSizePipe } from './common/pipes/file-size.pipe';
import { HttpErrorInterceptor } from './common/interceptors/http-error.interceptor';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

// const editorConif : NgxMonacoEditorConfig = {
//   onMonacoLoad: () => {
//     monaco.languages.register({ id: 'bson' });
//     monaco.editor.defineTheme('bson', {
//       base: 'vs',
//       inherit: false,
//       rules: [
//         { token: 'ObjectId', foreground: 'ff0000' },
//         { token: 'String', foreground: '872322' },
//         { token: 'Number', foreground: 'FFA500' }
//       ],
//       colors: undefined
//     });
//     monaco.languages.setLanguageConfiguration('bson', {
//       autoClosingPairs: [{open: '{', close: '}'},{open: '(', close: ')'}],
//       autoCloseBefore: 'a',
//       folding: {
//         markers: {
//           start: /^{/,
//           end: /}/,
//         },
//         offSide: true
//       },
//       brackets: [['{', '}'], ['(', ')']],
//     });
//     monaco.languages.registerCompletionItemProvider('bson', {
//       provideCompletionItems: (model, position, context, token) => {
//         const word = model.getWordUntilPosition(position);
//         const suggestions : monaco.languages.CompletionItem[] = [{
//           label: 'ObjectId',
// 		    	kind: monaco.languages.CompletionItemKind.Keyword,
// 			    insertText: 'ObjectId("${1}")',
//           insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
//           range: {
//             startLineNumber: position.lineNumber,
//             endLineNumber: position.lineNumber,
//             startColumn: word.startColumn,
//             endColumn: word.endColumn
//           }
//         }];
//         return { suggestions: suggestions };
//       }
//     });
//     monaco.languages.setMonarchTokensProvider('bson', {
//       tokenizer: {
//         root: [
//           [/ObjectId/, "ObjectId"],
//           [/\".*\"/, "String"],
//           [/\d/, "Number"]
//         ]
//       }
//     });
//   }
// };

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    Type,
    IsExpandable,
    HasMoreText,
    FormatValue,
    FileSizePipe,
    CollectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    MonacoEditorModule.forRoot(),
  ],
  providers: [ApiService, { provide: NZ_I18N, useValue: en_US }, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
