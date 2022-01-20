const router = require('express').Router();
const Controller = require('../controller/categoryController');
const instanceMulter = require('../middlewares/multer');
const imageKitUpload = require('../middlewares/imageKit');

router.get('/', Controller.getCategories);
router.post('/', instanceMulter.single('imageUrl'), imageKitUpload, Controller.addCategory);
router.get('/:categoryId', Controller.findCategoryById);
router.put('/:categoryId', instanceMulter.single('imageUrl'), imageKitUpload,Controller.editCategory);
router.delete('/:categoryId', Controller.deleteCategory);

module.exports = router;