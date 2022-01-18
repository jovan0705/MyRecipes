const { Recipe } = require('../models')

const getRecipes = async (req, res, next) => {
    try {
        const response = await Recipe.findAll()

        // belum ada error handler
        if (!response) throw {name: 'Error'}

        res.status(200).json(response)
    } catch (err) {
        next(err)
    }
}

module.exports = { getRecipes }