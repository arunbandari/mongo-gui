import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cloneDeep, includes, set } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  // constrcutor
  constructor(private Api: ApiService, private fb: FormBuilder) { }
  title = 'ui';
  docs: any;
  activeTabIndex = 0;
  dbs = {
    totalSize: 0,
    databases: [],
  };
  isLoadingDbs = false;
  isInSearchMode = false;
  searchText: string;
  menuData: any;
  stats = {
    databases: 0,
    collections: 0,
    size: 0,
  };
  /* Forms related stuff */
  // Forms
  addDBForm!: FormGroup;
  addTableForm!: FormGroup;
  dropTableForm!: FormGroup;
  dropDataBaseForm!: FormGroup;
  /* tab related operations */
  tabs = [];
  /* collection related operations */
  // create new collection
  addTableLoader = false;
  // drop collection
  dropTableLoader = false;
  // drop database
  dropDataBaseLoader = false;
  // add database
  addDBLoader = false;
  /* methods to open & close Modals */
  addDB = false;
  addTable = false;
  dropTable = false;
  dropDataBase = false;
  active = 'databases';
  db: any;

  /* side-nav */
  getDatabases() {
    this.isLoadingDbs = true;
    this.Api.getDbs()
      .subscribe(
        (res: any) => {
          this.dbs = res;
          this.computeStats();
          this.filter();
          if (this.active === 'collections') this.showCollections(this.db);
        }
      )
      .add(() => {
        this.isLoadingDbs = false;
      });
  }
  reloadSideNav() {
    this.getDatabases();
  }
  computeStats() {
    this.stats.databases = this.dbs.databases.length;
    this.stats.collections = this.dbs.databases.reduce(
      (count, db) => count + db.collections.length,
      0
    );
    this.stats.size = this.dbs.totalSize;
  }

  mustMatch(controlName, matchingControlName) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  initForms() {
    this.addTableForm = this.fb.group({
      database: [null, [Validators.required]],
      collection: [null, [Validators.required]],
    });
    this.addDBForm = this.fb.group({
      database: [null, [Validators.required]],
      collection: [null, [Validators.required]],
    });
    this.dropTableForm = this.fb.group(
      {
        database: [null, [Validators.required]],
        collection: [null, [Validators.required]],
        confirmCollection: [null, [Validators.required]],
      },
      {
        validators: this.mustMatch('collection', 'confirmCollection'),
      }
    );
    this.dropDataBaseForm = this.fb.group(
      {
        database: [null, [Validators.required]],
        confirmDataBase: [null, [Validators.required]],
      },
      {
        validators: this.mustMatch('database', 'confirmDataBase'),
      }
    );
  }
  ngOnInit() {
    this.getDatabases();
    this.initForms();
  }

  expand(e, database) {
    if (includes(e.target.classList, 'collection_item')) return;
    this.closeAllTabs();
    e.stopPropagation();
    e.target.classList.toggle('open');
    this.showCollections(database);
  }

  filter() {
    this.isInSearchMode = true;
    this.menuData = cloneDeep(this.dbs.databases);
    if (!this.searchText) {
      this.isInSearchMode = false;
      return;
    }
    const pattern = new RegExp(`.*${this.searchText}.*`, 'i');
    this.menuData = this.menuData
      .map((db) => {
        db.collections = db.collections.filter((col) => pattern.test(col.name));
        return db;
      })
      .filter((db) => db.collections.length);
  }

  activateTab(index) {
    this.activeTabIndex = index;
  }
  openTab(database, collection) {
    const id = `${database}.${collection}`;
    const tabIndex = this.tabs.findIndex((tab) => tab.id === id);
    if (tabIndex > -1) {
      this.activateTab(tabIndex);
      return;
    }
    this.tabs.push({
      id,
      database,
      collection,
    });
    this.activateTab(this.tabs.length - 1);
  }
  closeTab(id) {
    this.active = 'databases';
    const idx = this.tabs.findIndex((tab) => tab.id === id);
    this.tabs.splice(idx, 1);
    if (this.tabs.length) {
      this.activeTabIndex = this.tabs.length - 1;
    }
  }
  showCollections(database) {
    this.Api.getCollections(database.name)
      .subscribe((res:any) => {
        set(database, 'collections', res);
        this.db = database;
        this.active = 'collections';
      });
  }
  closeTabsByDataBase(database) {
    this.tabs = this.tabs.filter((tab) => tab.database !== database);
  }
  closeAllTabs() {
    this.tabs = [];
  }
  openDashBoard() {
    this.active = 'databases';
    this.closeAllTabs();
  }
  createTable() {
    if (!this.addTableForm.valid) { return; }

    this.addTableLoader = true;

    const body = this.addTableForm.value;
    this.Api.createCollection(body)
      .subscribe(() => {
        this.getDatabases(); // re-renders side nav
        this.openTab(body.database, body.collection);
        this.closeModal('addTable');
      })
      .add(() => {
        this.addTableLoader = false;
      });
  }
  dropCollection() {
    if (!this.dropTableForm.valid) { return; }

    this.dropTableLoader = true;

    const body = this.dropTableForm.value;
    this.Api.dropCollection(body)
      .subscribe(() => {
        this.getDatabases(); // re-render side nav
        this.closeTab(`${body.database}.${body.collection}`);
        this.closeModal('dropTable');
      })
      .add(() => {
        this.dropTableLoader = false;
      });
  }
  dropDB() {
    if (!this.dropDataBaseForm.valid) { return; }

    this.dropDataBaseLoader = true;

    const body = this.dropDataBaseForm.value;
    this.Api.dropDB(body)
      .subscribe(() => {
        this.getDatabases(); // re-render side-nav
        this.closeTabsByDataBase(body.database);
        this.closeModal('dropDataBase');
      })
      .add(() => {
        this.dropDataBaseLoader = false;
      });
  }
  addDataBase() {
    if (!this.addDBForm.valid) { return; }

    this.addDBLoader = true;

    const body = this.addDBForm.value;
    this.Api.createCollection(body)
      .subscribe(() => {
        this.getDatabases(); // re-render side-nav
        this.openTab(body.database, body.collection);
        this.closeModal('addDB');
      })
      .add(() => {
        this.addDBLoader = false;
      });
  }

  closeModal(title) {
    this[title] = false;
  }

  openModal(title, options) {
    // initializes values
    if (title === 'addTable') {
      this.addTableForm.reset();
      this.addTableForm.controls.database.setValue(options.database);
    }
    if (title === 'addDB') {
      this.addDBForm.reset();
    }
    if (title === 'dropTable') {
      this.dropTableForm.reset();
      this.dropTableForm.controls.database.setValue(options.database);
      this.dropTableForm.controls.collection.setValue(options.collection);
    }
    if (title === 'dropDataBase') {
      this.dropDataBaseForm.reset();
      this.dropDataBaseForm.controls.database.setValue(options.database);
    }
    // opens modal
    this[title] = true;
  }
}
