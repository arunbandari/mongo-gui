const ObjectID = require('mongodb').ObjectID;

const Model = require('../models');

const getModel = (req) => {
    const dbName = req.params.dbName;
    const collectionName = req.params.collectionName;
    return new Model(dbName, collectionName);
}

const sendResponse = (dbOperation, res, next) => {
    dbOperation
        .then(data => res.send(data))
        .catch(err => next(err));
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
    const dbOperation = model.find({}, filter).toArray();
    sendResponse(dbOperation, res, next);
}

function findOne (req, res, next) {
    const model = getModel(req);
    const documentId = req.documentId;
    const query = documentId ? { _id: documentId } : {};
    const dbOperation = model.findOne(query);
    sendResponse(dbOperation, res, next);
}

function insertOne (req, res, next) {
    const body = req.body;
    const model = getModel(req);
    const dbOperation = model.insertOne(body);
    sendResponse(dbOperation, res, next);
}

function updateOne (req, res, next) {
    const model = getModel(req);
    const documentId = req.documentId;
    const dbOperation = model.updateOne({ _id: documentId }, { $set: req.body });
    sendResponse(dbOperation, res, next);
}

function replaceOne (req, res, next) {
    const model = getModel(req);
    const documentId = req.documentId;
    const dbOperation = model.replaceOne({ _id: documentId }, req.body)
    sendResponse(dbOperation, res, next);
}

function deleteOne (req, res, next) {
    const model = getModel(req);
    const documentId = req.documentId;
    const dbOperation = model.deleteOne({ _id: documentId });
    sendResponse(dbOperation, res, next);
}

function filter (req, res, next) {
    const model = getModel(req);
    const query = req.body;
    if (req.documentId && req.documentId !== 'filter') query._id = req.documentId;
    const dbOperation = model.find(query).toArray();
    sendResponse(dbOperation, res, next);
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