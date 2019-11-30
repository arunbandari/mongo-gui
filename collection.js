const express = require('express');
const router = express.Router({ mergeParams: true });
const documentsRoute = require('./document');

// middleware to get the reference to the specified collection
router.use('/:collectionName', (req, res, next) => {
    const collectionName = req.params.collectionName;
    const collection = req.db.collection(collectionName);
    if (!collection) return next(new Error(`No collection found with name - ${collectionName}`));
    req.collection = collection;
    next();
});

// performs operations on the specified collection
router.use('/:collectionName/documents', documentsRoute);

// returns all the collections available
router.get('/', (req, res, next) => {
    req.db.listCollections().toArray((err, cols) => {
        if (err) return next(err);
        const collections = cols.map(col => ({
            name: col.name,
        }));
        res.send({ collections });
    });
});

module.exports = router