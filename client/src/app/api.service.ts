import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  apiRoot = environment.apiRoot;
  BASE_URL = `${this.apiRoot}/databases`;

  getDbs() {
    return this.http.get(`${this.BASE_URL}?includeCollections=true`);
  }
  getCollections(dbName) {
    return this.http.get(`${this.BASE_URL}/${dbName}/collections`);
  }
  getDocumentsByCollection(dbName, collectionName) {
    return this.http.get(
      `${this.BASE_URL}/${dbName}/collections/${collectionName}/documents?limit=10&ContentType=ejson`
    );
  }
  filterDocumentsByQuery(dbName, collectionName, query, pageIndex = 1) {
    return this.http.post(
      `${
        this.BASE_URL
      }/${dbName}/collections/${collectionName}/documents/filter?limit=10&skip=${
        (pageIndex - 1) * 10
      }&ContentType=ejson&incomingType=ejson`,
      query
    );
  }
  getDocumentCount(dbName, collectionName, query) {
    return this.http.post(
      `${this.BASE_URL}/${dbName}/collections/${collectionName}/documents/count?incomingType=ejson&ContentType=ejson`,
      query
    );
  }
  deleteDocumentById(dbName, collectionName, document) {
    return this.http.post(
      `${this.BASE_URL}/${dbName}/collections/${collectionName}/documents/delete?incomingType=ejson`,
      document
    );
  }
  // updateDocument(dbName, collectionName, document) {
  //   return this.http.put(
  //     `${this.BASE_URL}/${dbName}/collections/${collectionName}/documents?incomingType=ejson`,
  //     document
  //   );
  // }
  // createDocument(dbName, collectionName, document) {
  //   return this.http.post(
  //     `${this.BASE_URL}/${dbName}/collections/${collectionName}/documents?incomingType=ejson`,
  //     document
  //   );
  // }
  createDocuments(dbName, collectionName, document) {
    return this.http.post(
      `${this.BASE_URL}/${dbName}/collections/${collectionName}/documents?incomingType=ejson`,
      document
    );
  }
  createCollection(body) {
    return this.http.post(
      `${this.BASE_URL}/${body.database}/collections`,
      body
    );
  }
  dropCollection(body) {
    return this.http.post(
      `${this.BASE_URL}/${body.database}/collections/delete`,
      body
    );
  }
  dropDB(body) {
    return this.http.delete(`${this.BASE_URL}/${body.database}`);
  }
  aggregate(dbName, collectionName, query) {
    return this.http.post(
      `${this.BASE_URL}/${dbName}/collections/${collectionName}/documents/aggregate?ContentType=ejson&incomingType=ejson`,
      query
    );
  }
}
