import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  apiRoot = environment.apiRoot;
  BASE_URL = `${this.apiRoot}/databases`;

  getDbs() {
    return this.http.get(
      `${this.BASE_URL}?includeCollections=true`
    );
  }
  getDocumentsByCollection(dbName, collectionName) {
    return this.http.get(
      `${this.BASE_URL}/${dbName}/collections/${collectionName}/documents?limit=10&ContentType=bson`
    );
  }
  filterDocumentsByQuery(dbName, collectionName, query, pageIndex = 1) {
    return this.http.post(
      `${this.BASE_URL}/${dbName}/collections/${collectionName}/documents/filter?limit=10&skip=${
      (pageIndex - 1) * 10
      }&ContentType=bson`,
      query
    );
  }
  deleteDocumentById(dbName, collectionName, id) {
    return this.http.delete(
      `${this.BASE_URL}/${dbName}/collections/${collectionName}/documents/${id}`
    );
  }
  updateDocument(dbName, collectionName, document) {
    return this.http.put(
      `${this.BASE_URL}/${dbName}/collections/${collectionName}/documents?incomingType=bson`,
      document
    );
  }
  createDocument(dbName, collectionName, document) {
    return this.http.post(
      `${this.BASE_URL}/${dbName}/collections/${collectionName}/documents?incomingType=bson`,
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
    return this.http.delete(
      `${this.BASE_URL}/${body.database}/collections/${body.collection}`
    );
  }

  dropDB(body) {
    return this.http.delete(`${this.BASE_URL}/${body.database}`);
  }
}
