const router = require('express').Router()
const userRouter = require('./userRouter')
const classRouter = require('./classRouter')
const ingredients = require('./ingredientsRouter');
const categories = require('./categoriesRouter');

router.use('/users', userRouter)
router.use('/ingredients', ingredients);
router.use('/categories', categories);
router.use('/class', classRouter)


module.exports = router