const { Recipe, UserFavoritedRecipe } = require('../models')

const getRecipes = async (req, res, next) => {
    try {
        const response = await Recipe.findAll()
        res.status(200).json(response)
    } catch (err) {
        next(err)
    }
}

const getUserFavouritedRecipes = async (req, res, next) => {
    try {
        // asumsi userId didapatkan dari req.user yang dimana terassign pada proses authentication
        const userId = req.user.id
        const response = await UserFavoritedRecipe.findAll({
            where: {userId}, 
            raw: true,
        })
        // const recipes = await Recipe.findAll({
        //     where: {
        //         id: response.some()
        //     }
        // })
        res.status(200).json(response)
    } catch (err) {
        next(err)
    }
}

const getLoggedInUserRecipes = async (req, res, next) => {
    try {
        const userId = req.user.id
        const response = await Recipe.findAll({where: {userId}})
        res.status(200).json(response)
    } catch (err) {
        next(err)
    }
}

const getRecipeDetail = async (req, res, next) => {
    try {
        const { id } = req.params
        const response = await Recipe.findByPk(id)
        res.status(200).json(response)
    } catch (err) {
        next(err)
    }
}

module.exports = { getRecipes, getUserFavouritedRecipes, getLoggedInUserRecipes, getRecipeDetail }