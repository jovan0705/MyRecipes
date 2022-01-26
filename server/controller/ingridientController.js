const { Ingredient } = require('../models');

class Controller {
    static async getIngredients(req, res, next) {
        try {
            const response = await Ingredient.findAll();
            res.status(200).json(response);
        } catch (err) {
            next(err);
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
            next(err);
        }
    }

    static async findIngredientById(req, res, next) {
        try {
            const { ingredientId } = req.params;

            const response = await Ingredient.findByPk(ingredientId);
            if(!response) {
                throw {name: 'notFound'}
            }

            res.status(200).json({response});
        } catch (err) {
            next(err);
        }
    }

    static async editIngredient(req, res, next) {
        try {
            const { ingredientId } = req.params;
            const data = {
                name: req.body.name,
                calorie: req.body.calorie
            };

            const response = await Ingredient.update(data, {
                where: {
                    id: ingredientId
                },
                returning: true
            });

            res.status(200).json({edited: response[1][0]});
        } catch (err) {
            next(err);
        }
    }

    static async deleteIngredient(req, res, next) {
        try {
            const { ingredientId } = req.params;

            const foundIngredient = await Ingredient.findByPk(ingredientId);
            if(!foundIngredient) {
                throw {name: 'badRequest'};
            };

            await Ingredient.destroy({
                where: {
                    id: ingredientId,
                }
            });

            res.status(200).json({message: `Delete ${foundIngredient.name} from ingridient list`});
        } catch (err) {
            next(err);
        }
    }
}

module.exports = Controller;