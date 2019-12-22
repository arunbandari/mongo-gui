const express = require('express');
const ObjectID = require('mongodb').ObjectID;
const router = express.Router({ mergeParams: true });

router.use('/(:documentId)?', (req, res, next) => {
    const body = req.body;
    const params = req.params;
    let documentId = body._id || params.documentId;
    if (documentId) {
        if (ObjectID.isValid(documentId)) documentId = ObjectID(documentId);
        req.documentId = documentId;
        delete body._id;
    }
    next();
});

// createOne
router.post('/', (req, res, next) => {
    const body = req.body;
    req.collection.insertOne(body, (err, response) => {
        if (err) return next(err);
        res.send(response);
    });
});

// findAll
router.get('/', (req, res, next) => {
    req.collection.find().toArray((err, docs) => {
        if (err) return next(err);
        res.send(docs);
    });
});

// findById or findOne
router.get('(/:documentId)?', (req, res, next) => {
    const documentId = req.documentId;
    const query = documentId ? { _id: documentId } : {};
    req.collection.findOne(query, (err, document) => {
        if (err) return next(err);
        res.send(document);
    });
});

// updateOne
router.patch('/(:documentId)?', (req, res, next) => {
    const documentId = req.documentId;
    req.collection.updateOne({ _id: documentId }, { $set: req.body }, (err, response) => {
        if (err) return next(err);
        res.send(response);
    });
});

// replaceOne
router.put('/(:documentId)?', (req, res, next) => {
    const documentId = req.documentId;
    req.collection.replaceOne({ _id: documentId }, req.body, (err, response) => {
        if (err) return next(err);
        res.send(response);
    });
});

// deleteOne
router.delete('/(:documentId)?', (req, res, next) => {
    const documentId = req.documentId;
    req.collection.deleteOne({ _id: documentId }, (err, response) => {
        if (err) return next(err);
        res.send(response);
    });
});

// filter
router.post('/filter', (req, res, next) => {
    const query = req.body;
    if (req.documentId && req.documentId !== 'filter') query._id = req.documentId;
    req.collection.find(query).toArray((err, docs) => {
        if (err) return next(err);
        res.send(docs);
    });
});

module.exports = router