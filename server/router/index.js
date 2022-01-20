const router = require('express').Router()
const classRouter = require('./classRouter')
const ingredients = require('./ingredientsRouter');
const categories = require('./categoriesRouter');

router.use('/ingredients', ingredients);
router.use('/categories', categories);
router.use('/class', classRouter)

module.exports = router