const classController = require('../controller/classController')
const classRouter = require('express').Router()

const instanceMulter = require('./middlewares/multer')
const imageKitUpload = require('./middlewares/imageKit')

classRouter.get('/', classController.fetchClasses)
classRouter.get('/:userId', classController.fetchClassesByUser)
classRouter.post('/add', instanceMulter.single('imageFile'), imageKitUpload, classController.addClass)
classRouter.put('/edit/:classId', instanceMulter.single('imageFile'), imageKitUpload, classController.editClass)
classRouter.delete('/delete/:classId', classController.deleteClass)
classRouter.get('/detail/:classId', classController.fetchClass)

module.exports = classRouter