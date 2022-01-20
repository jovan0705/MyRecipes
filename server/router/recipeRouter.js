const router = require('express').Router()
const { getRecipes, getUserFavouritedRecipes, getLoggedInUserRecipes, getRecipeDetail } = require('../controller/recipeController')

// fetch all recipes 
router.get('/', getRecipes)
// fetch all user favourited recipes (untested)
router.get('/favourite', getUserFavouritedRecipes)
// fetch all logged in user recipes 
router.get('/own', getLoggedInUserRecipes)
// fetch recipe detail
router.get('/:id', getRecipeDetail)

module.exports = router