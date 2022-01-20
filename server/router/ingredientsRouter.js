const router = require('express').Router();
const Controller = require('../controller/ingridientController');

router.get('/', Controller.getIngredients);
router.post('/', Controller.addIngredient);
router.get('/:ingridientId', Controller.findIngredientById);
router.put('/:ingridientId', Controller.editIngredient);
router.delete('/:ingridientId', Controller.deleteIngredient);

module.exports = router;