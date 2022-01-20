const router = require('express').Router()
const userRouter = require('./userRouter')
const classRouter = require('./classRouter')
const ingredients = require('./ingredientsRouter');
const categories = require('./categoriesRouter');
const userController = require('../controller/userController')
const userAuthentication = require("../middlewares/authentication");
const { errorHandler } = require('../middlewares/errorHandler');

//login dan register
router.post("/login", userController.doLogin);
router.post("/userregister", userController.userRegister);

//authentication
router.use(userAuthentication)

//use yang lain
router.use('/users', userRouter)
router.use('/ingredients', ingredients);
router.use('/categories', categories);
router.use('/class', classRouter)

router.use(errorHandler)


module.exports = router