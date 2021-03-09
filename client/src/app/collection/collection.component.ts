import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import {  EJSON } from 'bson';
import { NzNotificationService } from 'ng-zorro-antd';
import * as _ from 'lodash'; 
interface simpleSearch {
  key: any,
  value: any,
  type: string
}

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  @Input() database: any;
  @Input() collection: any;
  data: any;
  filter = '';
  ejsonFilter:any;
  loading = false;
  pageIndex = 1;
  showEditor = false;
  documentEditorMode = 'create';
  documentBeingEdited: any;
  searchMode = 'simple';
  searchObj: simpleSearch = {
    key: '',
    value: '',
    type: 'String'
  };
  showAdvancedSearchForm = false;
  error: { status: boolean; desc: string } = { status: false, desc: '' };
  constructor(private API: ApiService, private message: NzMessageService, private notification: NzNotificationService) { }

  editorOptions = {
    theme: 'vs',
    language: 'json',
    suggest: {
      showIcons: false,
    },
    contextmenu: false,
    codeLens: false,
    renderLineHighlight: 'none'
  };
  code: string= '{}';
  ngOnInit() {
    this.query();
  }
  query() {
    // console.log(this.code, '#####');
    this.loading = true;
    this.API.filterDocumentsByQuery(
      this.database,
      this.collection,
      this.ejsonFilter || EJSON.serialize({}),
      this.pageIndex
    )
    .subscribe(
      (documents: any) => {
        this.data = EJSON.deserialize(documents);
        if (this.searchMode === 'advanced') this.closeAdvancedSearchForm();
      }
    )
    .add(() => {
      this.loading = false;
    });
  }
  getQuery() {
    if (this.searchMode === 'simple') {
      if (!this.searchObj.key) return '{}';
      let key = this.searchObj.key;
      let value = this.searchObj.value;
      if (this.searchObj.type === 'ObjectId') value = { "$oid": value };
      if (this.searchObj.type === 'Date') value = { "$date": value };
      if (this.searchObj.type === 'Number') value = { "$numberInt": value };
      if (this.searchObj.type === 'Boolean') {
        if (value === 'true') value = true;
        else {
          value = false;
          this.searchObj.value = "false";
        }
      }
      return JSON.stringify({ [key] : value });
    }
    else return this.filter;
  }
  uiQuery() {
    this.pageIndex = 1;
    this.filter = this.getQuery();
    try {
      this.ejsonFilter = EJSON.serialize(JSON.parse(this.filter));
    } catch (err) {
      alert('Invalid query');
    }
    this.query();
  }

  clearFilter() {
    this.filter = '';
    this.ejsonFilter = EJSON.serialize({});
    this.searchObj = {
      key: '',
      value: '',
      type: 'String'
    };
    this.query();
  }

  deleteDocument(doc) {
    this.API.deleteDocumentById(this.database, this.collection, EJSON.serialize(_.pick(doc, '_id'))).subscribe(
      () => {
        try{
            this.API.getDocumentCount(this.database, this.collection, (this.filter ? JSON.parse(this.filter) : {})).subscribe((res: any) => {
                this.message.info('Deleted!');
                this.data = EJSON.deserialize(res);
                if ((this.pageIndex * 10) >= this.data.count)
                  this.pageIndex = Math.ceil(this.data.count / 10);
                if (this.data.count === 0) this.pageIndex = 1;
                this.query();
            });
      } catch(err) {
        alert('Invalid JSON query!!');
        this.loading = false;
      }
     }
    );
  }

  updateDocument() {
    try {
      this.error.status = false;
      this.error.desc = '';
      const originalDocument = EJSON.serialize(JSON.parse(this.documentBeingEdited));
      // const method = this.documentEditorMode === 'create' ? this.API.createDocument : this.API.updateDocument
      if (this.documentEditorMode === 'create') {
        this.API.createDocuments(
          this.database,
          this.collection,
          originalDocument
        ).subscribe(
          (response) => {
            try{
              this.API.getDocumentCount(this.database, this.collection, (this.filter ? JSON.parse(this.filter) : {})).subscribe((res: any) => {
                this.closeEditor();
                this.message.success('A new document has been added');
                this.data = EJSON.deserialize(res);
                this.pageIndex = Math.ceil(this.data.count / 10);
                this.query();
              });
            } catch(err) {
                alert('Invalid JSON query!!');
                this.loading = false;
            }
          }
        );
      } else {
        this.API.updateDocument(
          this.database,
          this.collection,
          originalDocument
        ).subscribe(
          (response) => {
            this.closeEditor();
            this.message.success('The document has been updated');
            this.query();
          }
        );
      }
    } catch (err) {
      this.error.status = true;
      this.error.desc = err;
    }
  }

  openEditor(doc, mode): void {
    this.documentEditorMode = mode || 'create';
    this.showEditor = true;
    this.documentBeingEdited = JSON.stringify(
      EJSON.serialize(doc),
      undefined,
      4
    );
  }

  closeEditor(): void {
    this.showEditor = false;
    this.documentBeingEdited = '';
  }
  openAdvancedSearchForm() {
    this.showAdvancedSearchForm = true;
  }
  closeAdvancedSearchForm() {
    this.showAdvancedSearchForm = false;
  }
  copyToClipboard(text: string) {
    text = JSON.stringify(text);
    const txtArea = document.createElement('textarea');
    txtArea.style.position = 'fixed';
    txtArea.style.top = '0';
    txtArea.style.left = '0';
    txtArea.style.opacity = '0';
    txtArea.value = text;
    document.body.appendChild(txtArea);
    txtArea.select();
    try {
      const result = document.execCommand('copy');
      if (result) {
        this.message.success('Copied!');
      }
    } catch (err) { }
    document.body.removeChild(txtArea);
  }
}
