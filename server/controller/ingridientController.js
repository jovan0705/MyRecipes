const { Ingredient } = require('../models');

class Controller {
    static async getIngredients(req, res, next) {
        try {
            const response = await Ingredient.findAll();
            res.status(200).json(response);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    static async addIngredient(req, res, next) {
        try {
            const data = {
                name: req.body.name,
                calorie: req.body.calorie
            };

            const response = await Ingredient.create(data);

            res.status(201).json({response});
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    static async findIngredientById(req, res, next) {
        try {
            const { ingredientId } = req.params;

            const response = await Ingredient.findByPk(ingredientId);
            

            res.status(200).json({response});
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    static async editIngredient(req, res, next) {
        try {
            const { ingredientId } = req.params;
            const data = {
                name: req.body.name,
                calorie: req.body.calorie
            };

            const foundIngredient = await Ingredient.findByPk(ingredientId);
            if(!foundIngredient) {
                throw {name: 'BadRequest'};
            };

            const response = await Ingredient.update(data, {
                where: {
                    id: ingredientId
                },
                returning: true
            });

            res.status(200).json({edited: response[1][0]});
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

    static async deleteIngredient(req, res, next) {
        try {
            const { ingredientId } = req.params;

            const foundIngredient = await Ingredient.findByPk(ingredientId);
            if(!foundIngredient) {
                throw {name: 'BadRequest'};
            };

            await Ingredient.destroy({
                where: {
                    id: ingredientId,
                }
            });

            res.status(200).json(`Delete ${foundIngredient.name} from ingridient list`);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}

module.exports = Controller;