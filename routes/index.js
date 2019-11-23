/******************************************
    Treehouse Techdegree:
    FSJS project 6 - Static Node.js and Express Site
    Name: Brandon White
    Date of Last Modification: 23/11/2019
******************************************/

const express = require('express');
const {projects} = require('../data.json');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {projects});
});

module.exports = router;