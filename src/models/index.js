const dataAccessAdapter = require('../db/dataAccessAdapter');

class Model {
  constructor(dbName, collectionName) {
    this.collection = dataAccessAdapter.ConnectToCollection(dbName, collectionName);
  }

  find(query, filter = {}) {
    let records = this.collection.find(query);
    if (filter.limit) {
        records = records.limit(+filter.limit);
    }
    if (filter.skip) {
        records = records.skip(+filter.skip);
    }
    return records;
  }

  findOne(query) {
    return this.collection.findOne(query);
  }

  insertOne(data) {
    return this.collection.insertOne(data);
  }

  updateOne(query, data) {
    return this.collection.updateOne(query, data);
  }

  replaceOne(query, data) {
    return this.collection.replaceOne(query, data);
  }

  deleteOne(query) {
    return this.collection.deleteOne(query);
  }
}

module.exports = Model;