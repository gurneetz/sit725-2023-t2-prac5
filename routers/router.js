const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', (req, res) => {
    controller.getAllCats(req, res);
});

router.post('/', (req, res) => {
    controller.postCat(req, res);
});

module.exports = router;
