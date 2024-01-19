const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Generic model for your collection
const DataModel = mongoose.model('DataModel', new mongoose.Schema({}, { strict: false }), 'Collection0');

router.get('/', async (req, res) => {
    try {
        const data = await DataModel.find({});
        res.json(data);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
