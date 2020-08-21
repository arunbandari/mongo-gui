import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { serialize, deserialize, EJSON } from 'bson';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  @Input() database: any;
  @Input() collection: any;
  data: any;
  filter: any;
  loading = false;
  pageIndex = 1;
  showEditor = false;
  documentEditorMode = 'create';
  documentBeingEdited: any;
  error: { status: boolean; desc: string } = { status: false, desc: '' };
  constructor(private API: ApiService, private message: NzMessageService, private notification: NzNotificationService) { }

  ngOnInit() {
    this.query();
  }
  query() {
    try {
      this.loading = true;
      const filter = this.filter ? JSON.parse(this.filter) : {};
      this.API.filterDocumentsByQuery(
        this.database,
        this.collection,
        filter,
        this.pageIndex
      )
        .subscribe(
          (documents: any) => {
            this.data = deserialize(Buffer.from(documents.data));
          }
        )
        .add(() => {
          this.loading = false;
        });
    } catch (err) {
      alert('Invalid JSON query!!');
      this.loading = false;
    }
  }
  uiQuery() {
    this.pageIndex = 1;
    this.query();
  }
  deleteDocument(id) {
    this.API.deleteDocumentById(this.database, this.collection, id).subscribe(
      () => {
        this.message.info('Deleted!');
        this.data.count -= 1;
        if (!(this.data.count % 10))
        {
          if (this.pageIndex != 1)
            this.pageIndex -= 1;
        }
        this.query();
      }
    );
  }

  updateDocument() {
    try {
      this.error.status = false;
      this.error.desc = '';
      const orignalDocument = serialize(
        EJSON.deserialize(JSON.parse(this.documentBeingEdited))
      );
      // const method = this.documentEditorMode === 'create' ? this.API.createDocument : this.API.updateDocument
      if (this.documentEditorMode === 'create') {
        this.API.createDocument(
          this.database,
          this.collection,
          orignalDocument
        ).subscribe(
          (response) => {
            this.closeEditor();
            this.message.success('A new document has been added');
            this.query();
          }
        );
      } else {
        this.API.updateDocument(
          this.database,
          this.collection,
          orignalDocument
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
