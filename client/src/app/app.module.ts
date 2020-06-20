import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Document } from './document/document.component';
import { CollectionComponent } from './collection/collection.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { Type, HasMoreText, IsExpandable, FormatValue } from './common/pipes/pipes'
import { FileSizePipe } from './common/pipes/file-size.pipe'
import { HttpErrorInterceptor } from './common/interceptors/http-error.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    Document,
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
  ],
  providers: [ApiService, { provide: NZ_I18N, useValue: en_US }, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
