const ObjectID = require('mongodb').ObjectID;
const EJSON = require('bson').EJSON;
const openai = require('../services/openai');  
const Model = require('../models');


const getModel = (req) => {
  const dbName = req.params.dbName;
  const collectionName = req.params.collectionName;
  return new Model(dbName, collectionName);
};

const sendResponse = (dbOperation, req, res, next) => {
  dbOperation
    .then((data) => {
      if (req.query.ContentType === 'ejson')
        data = JSON.stringify(EJSON.serialize(data));
      res.send(data);
    })
    .catch((err) => res.status(400).send(err.toString()));
};

function middleware(req, res, next) {
  try {
    req.body =
      req.query.incomingType === 'ejson' ?
        EJSON.deserialize(req.body) :
        req.body;
    if (!(req.body instanceof Array)) {
      req.documentId =
        req.body._id === null ?
          null :
          req.body._id || req.params.documentId || ObjectID();
      if (req.documentId === 'filter') req.documentId = '';
    }
    next();
  } catch (err) {
    res.status(400).send(err.toString());
  }
}

function find(req, res, next) {
  const model = getModel(req);
  const filter = req.body || {};
  const options = req.query || {};
  const dbOperation = model.find(filter, options).toArray();
  sendResponse(dbOperation, req, res, next);
}

function findOne(req, res, next) {
  const model = getModel(req);
  const documentId = req.documentId;
  const query = documentId ? {_id: documentId} : {};
  const dbOperation = model.findOne(query);
  sendResponse(dbOperation, req, res, next);
}

// function insertOne(req, res, next) {
//   const body = req.body;
//   const model = getModel(req);
//   const dbOperation = model.insertOne(body);
//   sendResponse(dbOperation, req, res, next);
// }

function bulkWrite(req, res, next) {
  const body = Array.isArray(req.body) ? req.body : [req.body];
  const operations = [];
  body.forEach((document) => {
    document._id =
      document._id === null ?
        null :
        document._id || req.documentId || ObjectID();
    operations.push({
      replaceOne: {
        filter: {
          _id: document._id,
        },
        replacement: document,
        upsert: true,
      },
    });
  });
  const model = getModel(req);
  const dbOperation = model.bulkWrite(operations);
  sendResponse(dbOperation, req, res, next);
}

// function updateOne(req, res, next) {
//   const model = getModel(req);
//   const documentId = req.documentId;
//   const dbOperation = model.updateOne({ _id: documentId }, { $set: req.body });
//   sendResponse(dbOperation, req, res, next);
// }

function replaceOne(req, res, next) {
  const model = getModel(req);
  const documentId = req.documentId;
  const dbOperation = model.replaceOne({_id: documentId}, req.body);
  sendResponse(dbOperation, req, res, next);
}

function deleteOne(req, res, next) {
  const model = getModel(req);
  const documentId = req.documentId;
  const dbOperation = model.deleteOne({_id: documentId});
  sendResponse(dbOperation, req, res, next);
}

const getQueryFromPrompt = async (req) => {
  try {
    // if (req.query.queryType !== 'prompt' || !req.query.prompt) return null;
    const model = getModel(req);
    const data = await model.aggregate([
      {
          $project: {
              arrayOfKeyValues: {$objectToArray: "$$ROOT"}
          }
      },
      {
          $unwind: "$arrayOfKeyValues"
      },
      {
          $group: {
              _id: {
                  key: "$arrayOfKeyValues.k",
                  type: {$type: "$arrayOfKeyValues.v"}
              }
          }
      },
      {
          $group: {
              _id: null,
              allKeysAndTypes: {
                  $addToSet: {
                      key: "$_id.key",
                      type: "$_id.type"
                  }
              }
          }
      }
    ]).toArray();
    const query = await openai.getQuery(data[0].allKeysAndTypes, req.body.prompt);
    console.log(query);
    return query;
  } catch (err) {
    console.log(err);
    return null;
  }
}

const filter = async (req, res, next) => {
  let query = {};
  try {
    const model = getModel(req);
    query = req.body || {};
    const options = req.query || {};
    const skip = Number(options.skip) || 0;
    const documentId = req.documentId;
    if (documentId) query._id = documentId;
    const documents = await model.find(query, options).toArray();
    const count = await model.countDocuments(query, options);
    // const [documents, count] = await Promise.all([getDocuments, getCount])
    let data = {
      documents,
      count,
      from: skip + 1,
      to: skip + documents.length,
      query,
    };
    if (req.query.ContentType === 'ejson')
    data = EJSON.stringify(data, {relaxed: false});
    res.send(data);
  } catch (err) {
    if (req.query.queryType === 'prompt') err.message = 'Please improve the prompt';
    return next(err);
  }
}

function stats(req, res, next) {
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
    .then((data) => {
      data = JSON.parse('{"count" : ' + data + ' }');
      if (req.query.ContentType === 'ejson')
        data = JSON.stringify(EJSON.serialize(data));
      res.send(data);
    })
    .catch((err) => res.status(400).send(err.toString()));
}

function aggregate(req, res, next) {
  const model = getModel(req);
  const query = req.body || [];
  const dbOperation = model.aggregate(query).toArray();
  sendResponse(dbOperation, req, res, next);
}

async function generateQuery(req, res, next) {
  const query = await getQueryFromPrompt(req);
  res.send(query);
}

module.exports = {
  middleware,
  find,
  findOne,
  filter,
  // insertOne,
  bulkWrite,
  // updateOne,
  replaceOne,
  deleteOne,
  stats,
  count,
  aggregate,
  generateQuery,
};
