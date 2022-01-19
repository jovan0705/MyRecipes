const classRouter = require('./classRouter')
const userRouter = require('./userRouter')
const router = require('express').Router()

// router.use(userRouter)
router.use('/users', userRouter)
router.use(classRouter)

module.exports = router