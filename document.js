const express = require('express');
const ObjectID = require('mongodb').ObjectID;
const router = express.Router({ mergeParams: true });

router.use('/(:documentId)?', (req, res, next) => {
    const body = req.body;
    const params = req.params;
    const id = body._id || params.documentId;
    if (id) {
        if (!ObjectID.isValid(id)) return next(new Error('Error: invalid object id'));
        const documentId = ObjectID(id);
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
    req.collection.find({}).toArray((err, docs) => {
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

module.exports = router