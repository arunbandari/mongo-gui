const express = require('express');
const router = express.Router({ mergeParams: true });

const documentCtrl = require('../controllers/document');

router.use('/(:documentId)?', documentCtrl.middleware);

// findAll
router.get('/', documentCtrl.find);

// findById or findOne
router.get('(/:documentId)?', documentCtrl.findOne);

// filter
router.post('/filter', documentCtrl.filter);

// createOne
router.post('/', documentCtrl.insertOne);

// updateOne
router.patch('/(:documentId)?', documentCtrl.updateOne);

// replaceOne
router.put('/(:documentId)?', documentCtrl.replaceOne);

// deleteOne
router.delete('/(:documentId)?', documentCtrl.deleteOne);

module.exports = router;
