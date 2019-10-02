const express = require('express');
const {projects} = require('../data.json');

const router = express.Router();

router.get('/', (req, res) => {
    const name = "Brandon Sean White"
    res.render('about', {name});
});

module.exports = router;