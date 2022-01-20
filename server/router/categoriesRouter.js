const router = require('express').Router();
const Controller = require('../controller/categoryController');

router.get('/', Controller.getCategories);
router.post('/', Controller.addCategory);
router.get('/:categoryId', Controller.findCategoryById);
router.put('/:categoryId', Controller.editCategory);
router.delete('/:categoryId', Controller.deleteCategory);

module.exports = router;