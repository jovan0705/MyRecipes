const router = require('express').Router();
const Controller = require('../controller/ingridientController');

router.get('/', Controller.getIngredients);
router.post('/', Controller.addIngredient);
router.get('/:ingredientId', Controller.findIngredientById);
router.put('/:ingredientId', Controller.editIngredient);
router.delete('/:ingredientId', Controller.deleteIngredient);

module.exports = router;