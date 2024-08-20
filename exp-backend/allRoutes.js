const express = require('express');
const router = express.Router();
const search = require('../models/information');


const { findItem, placeItem } = require('../controllers/allControllers');

router.get('/items', findItem)
router.post('/wantItem', placeItem)


module.exports = router;