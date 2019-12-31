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
          .catch(err => next(err));
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

module.exports = {
    listDatabases,
    listCollections,
}