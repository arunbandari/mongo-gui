const express = require('express');
const router = express.Router({ mergeParams: true });
const collectionsRoute = require('./collection');

// gets the reference to the specified database
router.use('/:dbName', (req, res, next) => {
  const app = req.app;
  const dbName = req.params.dbName;
  const db = app.mongo && app.mongo.db(dbName);
  if (!db) return next(new Error(`No database found - ${dbName}`));
  req.db = db;
  next();
});

// collection middleware
router.use('/:dbName/collections', collectionsRoute);

// returns all the databases available
router.get('/', (req, res) => {
  const adminDB = req.app.mongo.db('test').admin();
  adminDB.listDatabases({}, (err, data) => {
    if (err) return next(err);
    if (!req.query.includeCollections) return res.send(data);
    const promises = data.databases.map(db => new Promise((resolve) => {
      const collection = req.app.mongo.db(db.name);
      collection.listCollections().toArray((error, collections) => {
        if (error) return next(error);
        collections = collections.map(col => col.name);
        db.collections = collections;
        resolve();
      });
    }));
    Promise.all(promises)
      .then(() => res.send(data))
      .catch(err => next(err));
  });
});

module.exports = router