const express = require('express');
const {projects} = require('../data.json');

const router = express.Router();

router.get('/', (req, res) => {
    const {id} = req.params;
    if (!id) {
        res.redirect('../');
    }
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.render('project', projects.find(project => project.id === id));
});

module.exports = router;