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
import { Type, HasMoreText, IsExpandable, FormatValue } from './common/pipes/pipes';
import { FileSizePipe } from './common/pipes/file-size.pipe';
import { HttpErrorInterceptor } from './common/interceptors/http-error.interceptor';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
registerLocaleData(en);

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
    NzNotificationModule,
    NzModalModule,
    NzDrawerModule,
    NzEmptyModule,
    NzButtonModule,
    NzSpinModule,
    NzPaginationModule,
    NzUploadModule,
    NzDropDownModule,
    NzSelectModule,
    NzTagModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzFormModule,
    NzTableModule,
    NzTabsModule,
    NzDescriptionsModule,
    NzToolTipModule,
    NzInputModule,
    NzMessageModule,
    NzSliderModule,
    NzRadioModule,
    NzCodeEditorModule,
  ],
  providers: [ApiService, { provide: NZ_I18N, useValue: en_US }, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
