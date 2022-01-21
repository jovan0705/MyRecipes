const classController = require('../controller/classController')
const classRouter = require('express').Router()

const instanceMulter = require('../middlewares/multer')
const imageKitUpload = require('../middlewares/imageKit')
// ini buat admin, ditambahkan admin authorization nanti
classRouter.get('/', classController.fetchClasses)
classRouter.post('/add', instanceMulter.single('imageFile'), imageKitUpload, classController.addClass)
classRouter.put('/edit/:classId', instanceMulter.single('imageFile'), imageKitUpload, classController.editClass)
classRouter.delete('/delete/:classId', classController.deleteClass)

// ini buat user
classRouter.get('/myClass', classController.fetchUserClasses)
classRouter.delete('/cancel/:classId', classController.cancelClass)
classRouter.post('/register/:classId', classController.registerClass)
classRouter.get('/detail/:classId', classController.fetchClass)

module.exports = classRouter