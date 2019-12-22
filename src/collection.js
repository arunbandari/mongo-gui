const express = require('express');
const router = express.Router({ mergeParams: true });
const documentsRoute = require('./document');

// middleware to get the reference to the specified collection
router.use('/:collectionName', (req, res, next) => {
    const collectionName = req.params.collectionName;
    const collection = req.db.collection(collectionName);
    if (!collection) return next(new Error(`No collection found - ${req.params.dbName}.${collectionName}`));
    req.collection = collection;
    next();
});

// document middleware
router.use('/:collectionName/documents', documentsRoute);

// returns all the collections available in the specified database
router.get('/', (req, res, next) => {
    req.db.listCollections().toArray((err, collections) => {
        if (err) return next(err);
        res.send(collections);
    });
});

module.exports = router