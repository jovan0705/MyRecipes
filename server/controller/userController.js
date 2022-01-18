const { Recipe } = require('../models')

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
        const response = await Recipe.findAll({where: {userId}, raw: true})
        res.status(200).json(response)
    } catch (err) {
        next(err)
    }
}

module.exports = { getRecipes, getUserFavouritedRecipes }