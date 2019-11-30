const express = require('express');
const router = express.Router({ mergeParams: true });
const collectionsRoute = require('./collection');

// middleware to get the reference to the specified database
router.use('/:dbName', (req, res, next) => {
  const app = req.app;
  const dbName = req.params.dbName;
  const db = app.mongo.db(dbName);
  if (!db) return next(new Error(`No db found with name - ${dbName}`));
  req.db = db;
  next();
});

//collection middleware
router.use('/:dbName/collections', collectionsRoute);

// returns all the databases available
router.get('/', (req, res) => {
  const adminDb = req.app.mongo.db('test').admin();
  adminDb.listDatabases({}, (err, dbs) => {
    res.send(dbs);
  });
});

module.exports = router