const ObjectID = require('mongodb').ObjectID;

const Model = require('../models');

const getModel = (req) => {
    const dbName = req.params.dbName;
    const collectionName = req.params.collectionName;
    return new Model(dbName, collectionName);
}

function middleware (req, res, next) {
    const body = req.body;
    const params = req.params;
    let documentId = body._id || params.documentId;
    if (documentId) {
        if (ObjectID.isValid(documentId)) documentId = ObjectID(documentId);
        req.documentId = documentId;
        delete body._id;
    }
    next();
}

function find (req, res, next) {
    const filter = req.query;
    const model = getModel(req);
    model.find({}, filter)
        .toArray()
        .then(data => res.send(data))
        .catch(err => next(err));
}

function findOne (req, res, next) {
    const model = getModel(req);
    const documentId = req.documentId;
    const query = documentId ? { _id: documentId } : {};
    model.findOne(query)
        .then(data => res.send(data))
        .catch(err => next(err));
}

function insertOne (req, res, next) {
    const body = req.body;
    const model = getModel(req);
    model.insertOne(body)
        .then(data => res.send(data))
        .catch(err => next(err));
}

function updateOne (req, res, next) {
    const model = getModel(req);
    const documentId = req.documentId;
    model.updateOne({ _id: documentId }, { $set: req.body })
        .then(data => res.send(data))
        .catch(err => next(err));
}

function replaceOne (req, res, next) {
    const model = getModel(req);
    const documentId = req.documentId;
    model.replaceOne({ _id: documentId }, req.body)
        .then(data => res.send(data))
        .catch(err => next(err));
}

function deleteOne (req, res, next) {
    const model = getModel(req);
    const documentId = req.documentId;
    model.deleteOne({ _id: documentId })
        .then(data => res.send(data))
        .catch(err => next(err));
}

function filter (req, res, next) {
    const model = getModel(req);
    const query = req.body;
    if (req.documentId && req.documentId !== 'filter') query._id = req.documentId;
    model.find(query)
        .toArray()
        .then(data => res.send(data))
        .catch(err => next(err));
}
  
module.exports = {
    middleware,
    find,
    findOne,
    filter,
    insertOne,
    updateOne,
    replaceOne,
    deleteOne,
};