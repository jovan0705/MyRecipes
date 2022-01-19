const router = require('express').Router();
const ingridients = require('./ingredient');

router.use('/ingridients', ingridients);

module.exports = router;