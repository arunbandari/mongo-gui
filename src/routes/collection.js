const express = require('express');
const router = express.Router({ mergeParams: true });

const commonCtrl = require('../controllers/common');
const documentCtrl = require('../controllers/document');
const documentsRoute = require('./document');

router.get('/:collectionName/stats', documentCtrl.stats);

// document middleware
router.use('/:collectionName/documents', documentsRoute);

// returns all the collections available in the specified database
router.get('/', commonCtrl.listCollections);

// create new collection
router.post('/', commonCtrl.createCollection);

//drop collection
router.post('/delete', commonCtrl.dropCollection);

module.exports = router;
