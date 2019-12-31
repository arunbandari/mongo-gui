const express = require('express');
const router = express.Router({ mergeParams: true });

const commonCtrl = require('../controllers/common');
const documentsRoute = require('./document');

// document middleware
router.use('/:collectionName/documents', documentsRoute);

// returns all the collections available in the specified database
router.get('/', commonCtrl.listCollections);

module.exports = router;
