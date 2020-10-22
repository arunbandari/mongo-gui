const ObjectID = require('mongodb').ObjectID;
const BSON = require('bson');
const Model = require('../models');

const getModel = (req) => {
    const dbName = req.params.dbName;
    const collectionName = req.params.collectionName;
    return new Model(dbName, collectionName);
}

const sendResponse = (dbOperation, req, res, next) => {
    dbOperation
        .then(data => {
            if (req.query.ContentType === 'bson') data = JSON.stringify(BSON.serialize(data));
            res.send(data);
        })
        .catch(err => next(err));
}

function middleware (req, res, next) {
    req.body = (req.query.incomingType === 'bson') ? BSON.deserialize(Buffer.from(req.body)) : req.body
    const body = req.body;
    const params = req.params;
    let documentId = body._id || params.documentId;
    if (documentId && documentId !== 'filter') {
        if (ObjectID.isValid(documentId)) documentId = ObjectID(documentId);
        req.documentId = documentId;
        delete body._id;
    } else {
        req.documentId = '';
    }
    next();
}

function find (req, res, next) {
    const filter = req.query;
    const model = getModel(req);
    const dbOperation = model.find({}, filter).toArray();
    sendResponse(dbOperation, req, res, next);
}

function findOne (req, res, next) {
    const model = getModel(req);
    const documentId = req.documentId;
    const query = documentId ? { _id: documentId } : {};
    const dbOperation = model.findOne(query);
    sendResponse(dbOperation, req, res, next);
}

function insertOne (req, res, next) {
    const body = req.body;
    const model = getModel(req);
    const dbOperation = model.insertOne(body);
    sendResponse(dbOperation, req, res, next);
}

function updateOne (req, res, next) {
    const model = getModel(req);
    const documentId = req.documentId;
    const dbOperation = model.updateOne({ _id: documentId }, { $set: req.body });
    sendResponse(dbOperation, req, res, next);
}

function replaceOne (req, res, next) {
    const model = getModel(req);
    const documentId = req.documentId;
    const dbOperation = model.replaceOne({ _id: documentId }, req.body)
    sendResponse(dbOperation, req, res, next);
}

function deleteOne (req, res, next) {
    const model = getModel(req);
    const documentId = req.documentId;
    const dbOperation = model.deleteOne({ _id: documentId });
    sendResponse(dbOperation, req, res, next);
}

function filter (req, res, next) {
    const model = getModel(req);
    const query = req.body || {};
    const options = req.query || {};
    const skip = Number(options.skip) || 0;
    const documentId = req.documentId;
    if (documentId) query._id = documentId;
    const getDocuments = model.find(query, options).toArray();
    const getCount = model.countDocuments(query, options);
    Promise.all([getDocuments, getCount])
      .then(([documents, count]) => {
        let data = { documents, count, from: skip + 1, to: skip + documents.length };
        if (req.query.ContentType === 'bson') data = JSON.stringify(BSON.serialize(data));
        res.send(data);
      })
      .catch(err => next(err));
}

function stats (req, res, next) {
    const model = getModel(req);
    const dbOperation = model.stats();
    sendResponse(dbOperation, req, res, next);
}

function count(req, res, next) {
    const model = getModel(req);
    const query = req.body || {};
    const options = req.query || {};
    const dbOperation = model.countDocuments(query, options);
    dbOperation
        .then(data => {
            data = JSON.parse('{"count" : ' + data + ' }');
            if (req.query.ContentType === 'bson') data = JSON.stringify(BSON.serialize(
                    data
                ));
                res.send(data);
        })
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
    stats,
    count
};
