const dataAccessAdapter = require('../db/dataAccessAdapter');

function listDatabases (req, res, next) {
    const adminDB = dataAccessAdapter.ConnectToDb('test').admin();
    adminDB.listDatabases({})
      .then(data => {
        if (!req.query.includeCollections) return res.send(data);
        const promises = data.databases.map(db => new Promise((resolve, reject) => {
        const database = dataAccessAdapter.ConnectToDb(db.name);
        database.listCollections().toArray()
          .then(collections => {
            collections = collections.map(col => col.name).sort();
            db.collections = collections;
            resolve();
          })
          .catch(reject);
        }));
  
        Promise.all(promises)
          .then(() => res.send(data))
          .catch(err => res.status(400).send(err.toString()));
      })
      .catch(next);
}

function listCollections (req, res, next) {
    const dbName = req.params.dbName;
    const db = dataAccessAdapter.ConnectToDb(dbName);
    db.listCollections().toArray()
      .then(res.send)
      .catch(next);
}

function createCollection(req, res, next) {
  const dbName = req.body.database || req.params.dbName;
  const collectionName = req.body.collection;
  const db = dataAccessAdapter.ConnectToDb(dbName);
  db.createCollection(collectionName)
    .then(() => res.send({ message:  `A new collection: ${collectionName} has been added to database: ${dbName}` }))
    .catch(next);
}

function dropCollection(req, res, next) {
  const dbName = req.body.database;
  const collectionName = req.body.collection;
  const db = dataAccessAdapter.ConnectToDb(dbName);
  db.collection(collectionName).drop()
    .then(() => res.send({ message:  'success' }))
    .catch(next);
}

function dropDB(req, res, next) {
  const dbName = req.params.dbName;
  const db = dataAccessAdapter.ConnectToDb(dbName);
  db.dropDatabase()
    .then(() => res.send({ message:  'success' }))
    .catch(next);
}

module.exports = {
    listDatabases,
    listCollections,
    createCollection,
    dropCollection,
    dropDB
}