import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ui';
  docs: any;
  activeTabIndex = 0;
  dbs = {
    totalSize: 0,
    databases: [],
  };
  isLoadingDbs = false;
  isInSearchMode: boolean = false;
  searchText: string;
  menuData: any;
  stats = {
    databases: 0,
    collections: 0,
    size: 0,
  };

  /* side-nav */
  getDatabases() {
    this.isLoadingDbs = true;
    this.Api.getDbs()
      .subscribe(
        (res: any) => {
          this.dbs = res;
          this.computeStats();
          this.filter();
        },
        (error) => {
          alert(JSON.stringify(error));
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
  /* Forms related stuff */
  // Forms
  addDBForm!: FormGroup;
  addTableForm!: FormGroup;
  dropTableForm!: FormGroup;
  dropDataBaseForm!: FormGroup;

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
  // constrcutor
  constructor(private Api: ApiService, private fb: FormBuilder) {}
  ngOnInit() {
    this.getDatabases();
    this.initForms();
  }

  expand(e) {
    e.stopPropagation();
    e.target.classList.toggle('open');
  }

  filter() {
    this.isInSearchMode = true;
    this.menuData = _.cloneDeep(this.dbs.databases);
    if (!this.searchText) {
      this.isInSearchMode = false;
      return;
    }
    const pattern = new RegExp(`.*${this.searchText}.*`, 'i');
    this.menuData = this.menuData
      .map((db) => {
        db.collections = db.collections.filter((col) => pattern.test(col));
        return db;
      })
      .filter((db) => db.collections.length);
  }
  /* tab related operations */
  tabs = [];

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
    const idx = this.tabs.findIndex((tab) => tab.id === id);
    this.tabs.splice(idx, 1);
    if (this.tabs.length) {
      this.activeTabIndex = this.tabs.length - 1;
    }
  }
  openFirstTable(database) {
    this.openTab(database.name, database.collections[0]);
  }
  closeTabsByDataBase(database) {
    this.tabs = this.tabs.filter((tab) => tab.database !== database);
  }
  closeAllTabs() {
    this.tabs = [];
  }
  openDashBoard() {
    this.closeAllTabs();
  }
  /* collection related operations */
  // create new collection
  addTableLoader: boolean = false;
  createTable() {
    if (!this.addTableForm.valid) return;

    this.addTableLoader = true;

    const body = this.addTableForm.value;
    this.Api.createCollection(body)
      .subscribe(
        () => {
          this.getDatabases(); // re-renders side nav
          this.openTab(body.database, body.collection);
          this.closeModal('addTable');
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      )
      .add(() => {
        this.addTableLoader = false;
      });
  }
  // drop collection
  dropTableLoader: boolean = false;
  dropCollection() {
    if (!this.dropTableForm.valid) return;

    this.dropTableLoader = true;

    const body = this.dropTableForm.value;
    this.Api.dropCollection(body)
      .subscribe(
        () => {
          this.getDatabases(); // re-render side nav
          this.closeTab(`${body.database}.${body.collection}`);
          this.closeModal('dropTable');
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      )
      .add(() => {
        this.dropTableLoader = false;
      });
  }
  // drop database
  dropDataBaseLoader: boolean = false;
  dropDB() {
    if (!this.dropDataBaseForm.valid) return;

    this.dropDataBaseLoader = true;

    const body = this.dropDataBaseForm.value;
    this.Api.dropDB(body)
      .subscribe(
        () => {
          this.getDatabases(); // re-render side-nav
          this.closeTabsByDataBase(body.database);
          this.closeModal('dropDataBase');
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      )
      .add(() => {
        this.dropDataBaseLoader = false;
      });
  }
  // add database
  addDBLoader: boolean = false;
  addDataBase() {
    if (!this.addDBForm.valid) return;

    this.addDBLoader = true;

    const body = this.addDBForm.value;
    this.Api.createCollection(body)
      .subscribe(
        () => {
          this.getDatabases(); // re-render side-nav
          this.openTab(body.database, body.collection);
          this.closeModal('addDB');
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      )
      .add(() => {
        this.addDBLoader = false;
      });
  }
  /* methods to open & close Modals */
  addDB: boolean = false;
  addTable: boolean = false;
  dropTable: boolean = false;
  dropDataBase: boolean = false;

  closeModal(title) {
    this[title] = false;
  }

  openModal(title, options) {
    // initializes values
    console.log(options);
    if (title === 'addTable') {
      this.addTableForm.reset();
      this.addTableForm.controls['database'].setValue(options.database);
    }
    if (title === 'addDB') {
      this.addDBForm.reset();
    }
    if (title === 'dropTable') {
      this.dropTableForm.reset();
      this.dropTableForm.controls['database'].setValue(options.database);
      this.dropTableForm.controls['collection'].setValue(options.collection);
    }
    if (title === 'dropDataBase') {
      this.dropDataBaseForm.reset();
      this.dropDataBaseForm.controls['database'].setValue(options.database);
    }
    // opens modal
    this[title] = true;
  }
}
