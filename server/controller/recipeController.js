const {
  User,
  Recipe,
  UserFavoritedRecipe,
  RecipeRating,
  Category,
  RecipeIngredients,
  Ingredient,
  UserFollow,
} = require("../models");
const { Op } = require("sequelize");
const convertToArray = require("../helpers/sequelizePostgresArrayConverter");

const getRecipes = async (req, res, next) => {
  try {
    // untuk sementara belum ada paginasi
    const { search, categoryId } = req.query;
    let filter = {};
    if (search) {
      filter.name = { [Op.iLike]: `%${search}%` };
    }
    if (categoryId) {
      filter = {
        ...filter,
        categoryId,
      };
    }

    const response = await Recipe.findAll({
      where: filter,
      include: [
        {
          model: User,
          attributes: {
            exclude: [
              "password",
              "role",
              "profilePict",
              "balance",
              "description",
              "createdAt",
              "updatedAt",
            ],
          },
        },
        {
          model: Category,
          attributes: {
            exclude: ["imageUrl", "createdAt", "updatedAt"],
          },
        },
        {
          model: RecipeRating,
          include: {
            model: User,
            attributes: {
              exclude: [
                "password",
                "role",
                "profilePict",
                "balance",
                "description",
                "createdAt",
                "updatedAt",
              ],
            },
          },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        }
      ],
    });
    if (!response) throw { name: "notFound" };

    const newResponse = await response.map((resp) => {
      const newSteps = convertToArray(resp.dataValues.steps);
      const newResp = {
        ...resp.dataValues,
        steps: newSteps,
      };
      return newResp;
    });
    res.status(200).json(newResponse);
  } catch (err) {
    next(err);
  }
};

const getUserFavouritedRecipes = async (req, res, next) => {
  try {
    // asumsi userId didapatkan dari req.user yang dimana terassign pada proses authentication
    const userId = req.user.id;
    const response = await UserFavoritedRecipe.findAll({
      where: { userId },
      include: {
        model: Recipe,
        include: [
          {
            model: User,
            attributes: {
              exclude: [
                "password",
                "role",
                "profilePict",
                "balance",
                "description",
                "createdAt",
                "updatedAt",
              ],
            },
          },
          {
            model: Category,
            attributes: {
              exclude: ["imageUrl", "createdAt", "updatedAt"],
            },
          },
          {
            model: RecipeRating,
            include: {
              model: User,
              attributes: {
                exclude: [
                  "password",
                  "role",
                  "profilePict",
                  "balance",
                  "description",
                  "createdAt",
                  "updatedAt",
                ],
              },
            },
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
      },
    });
    if (!response) throw { name: "notFound" };
    const payload = response.map((recipe) => {
      return recipe.Recipe;
    });

    const newResponse = await payload.map((resp) => {
      const newSteps = convertToArray(resp.dataValues.steps);
      const newResp = {
        ...resp.dataValues,
        steps: newSteps,
      };
      return newResp;
    });
    res.status(200).json({ favoritedRecipes: newResponse });
  } catch (err) {
    next(err);
  }
};

const getLoggedInUserRecipes = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const response = await Recipe.findAll({
      where: { userId },
      include: [
        {
          model: User,
          attributes: {
            exclude: [
              "password",
              "role",
              "profilePict",
              "balance",
              "description",
              "createdAt",
              "updatedAt",
            ],
          },
        },
        {
          model: Category,
          attributes: {
            exclude: ["imageUrl", "createdAt", "updatedAt"],
          },
        },
        {
          model: RecipeRating,
          include: {
            model: User,
            attributes: {
              exclude: [
                "password",
                "role",
                "profilePict",
                "balance",
                "description",
                "createdAt",
                "updatedAt",
              ],
            },
          },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });
    if (!response) throw { name: "notFound" };

    // const newSteps = convertToArray(response.dataValues.steps)
    // const recipePayload = {
    //   ...response.dataValues,
    //   steps: newSteps
    // }
    const newResponse = await response.map((resp) => {
      const newSteps = convertToArray(resp.dataValues.steps);
      const newResp = {
        ...resp.dataValues,
        steps: newSteps,
      };
      return newResp;
    });
    res.status(200).json({ userCreatedRecipes: newResponse });
  } catch (err) {
    next(err);
  }
};

const getRecipeDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await Recipe.findByPk(id, {
      include: [
        {
          model: User,
          attributes: {
            exclude: [
              "password",
              "role",
              "profilePict",
              "balance",
              "description",
              "createdAt",
              "updatedAt",
            ],
          },
        },
        {
          model: Category,
          attributes: {
            exclude: ["imageUrl", "createdAt", "updatedAt"],
          },
        },
        {
          model: RecipeRating,
          include: {
            model: User,
            attributes: {
              exclude: [
                "password",
                "role",
                "balance",
                "description",
                "createdAt",
                "updatedAt",
              ],
            },
          },
          attributes: {
            exclude: ["updatedAt"],
          },
        }
      ],
    });
    if (!response) throw { name: "notFound" };
    const ingredients = await RecipeIngredients.findAll({
      where: { recipeId: id },
      include: Ingredient,
    });
    const ingredientPayload = await ingredients.map((ingredient) => {
      return ingredient.Ingredient.name;
    });

    const newSteps = convertToArray(response.dataValues.steps);
    const recipePayload = {
      ...response.dataValues,
      steps: newSteps,
    };
    res
      .status(200)
      .json({ recipe: recipePayload, ingredients: ingredientPayload });
  } catch (err) {
    next(err);
  }
};

const createRecipe = async (req, res, next) => {
  try {
    // asumsi struktur tipe data step adalah array dan totalCalories sudah tertotal pas mengirimkan data input ke server
    let { name, steps, totalCalories, categoryId, ingredients } = req.body;
    ingredients = ingredients.split(",");
    if (!name) throw { name: "emptyName" };
    if (!steps) throw { name: "emptySteps" };
    if (!totalCalories) throw { name: "emptyTotalCalories" };
    if (!categoryId) throw { name: "emptyCategoryId" };
    const newSteps = steps.split("~").map((step) => {
      return step;
    });
    const userId = req.user.id;
    const imageUrl = req.additionalData;

    if (!imageUrl) throw { name: "emptyImage" };

    const response = await Recipe.create({
      name,
      steps: newSteps,
      totalCalories,
      userId,
      categoryId,
      imageUrl,
    });
    if (!response) throw { name: "errorCreateRecipe" };
    const payload = await ingredients.map((ingredientId) => {
      return {
        recipeId: response.id,
        ingredientId: +ingredientId,
        weight: 0,
      };
    });
    const createIngredients = await RecipeIngredients.bulkCreate(payload, {
      raw: true,
    });
    if (!createIngredients) throw err;

    const stepsPayload = convertToArray(response.dataValues.steps);
    const responsePayload = {
      ...response.dataValues,
      steps: stepsPayload,
    };
    res.status(201).json(responsePayload);
  } catch (err) {
    next(err);
  }
};

const editRecipe = async (req, res, next) => {
  try {
    // asumsi struktur tipe data step adalah array dan totalCalories sudah tertotal pas mengirimkan data input ke server
    let { name, steps, totalCalories, ingredients } = req.body;

    if(ingredients) {
      ingredients = ingredients.split(",");
    }
    const newSteps = steps.split(",").map((step) => {
      return step;
    });
    const id = req.params.id;
    const userId = req.user.id;
    const imageUrl = req.additionalData;

    const found = await Recipe.findByPk(id);
    if (!found) throw { name: "notFound" };

    const resp = await Recipe.update(
      { name, steps: newSteps, totalCalories, imageUrl },
      { where: { id, userId },
        returning: true }
    );
    const response = resp[1][0].dataValues
    if (!response) throw { name: "errorUpdateRecipe" };
    // console.log(response, 'INI RESPONSE')
    
    if(ingredients) {
      const payload = await ingredients.map((ingredientId) => {
        return {
          recipeId: response.id,
          ingredientId: +ingredientId,
          weight: 0,
        };
      });
      console.log(payload, 'INI PAYLOAD')
      const createIngredients = await RecipeIngredients.bulkCreate(payload, {
        raw: true,
      });
    }
    res.status(200).json({ message: "Edit Successful" });
  } catch (err) {
    next(err);
  }
};

const deleteRecipe = async (req, res, next) => {
  try {
    const { id } = req.params;
    const found = await Recipe.findByPk(id);
    if (!found) throw { name: "notFound" };
    const response = await Recipe.destroy({ where: { id } });
    if (!response) throw { name: "errorDeleteRecipe" };
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (err) {
    next(err);
  }
};

const createUserRating = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const recipeId = req.params.id;
    const { rating, review } = req.body;
    if (!rating || !review) throw { name: "badRequest" };

    // check jika user sudah pernah review
    const isRated = await RecipeRating.findOne({ where: { userId, recipeId } });
    if (isRated) throw { name: "isRated" };

    const response = await RecipeRating.create({
      userId,
      recipeId,
      rating,
      review,
    });
    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
};

const getRatings = async (req, res, next) => {
  try {
    const recipeId = req.params.id;
    const response = await RecipeRating.findAll({
      include: User,
      Recipe,
      where: { recipeId },
    });
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

const addFavourite = async (req, res, next) => {
  try {
    const { recipeId } = req.params;
    const userId = req.user.id;
    const isExist = await UserFavoritedRecipe.findOne({
      where: {
        userId,
        recipeId,
      },
    });
    if (isExist) {
      throw { name: "ALREADY_FAVORITED" };
    } else {
      await UserFavoritedRecipe.create({ userId, recipeId });
      res.status(201).json({ message: "Recipe Favorited" });
    }
  } catch (err) {
    next(err);
  }
};

const deleteFavourite = async (req, res, next) => {
  try {
    const { recipeId } = req.params;
    const userId = req.user.id;
    const isExist = await UserFavoritedRecipe.findOne({
      where: {
        userId,
        recipeId,
      },
    });
    if (!isExist) {
      throw { name: "NOT_FAVORITED" };
    } else {
      await UserFavoritedRecipe.destroy({
        where: {
          userId,
          recipeId,
        },
      });
      res.status(200).json({ message: "Recipe Unfavorited" });
    }
  } catch (err) {
    next(err);
  }
};

const feeds = async (req, res, next) => {
  try {
    const followingList = await UserFollow.findAll({where: {followerId: req.user.id}});

    const followedUser = followingList.map((el) => ({userId: el.followingId}));
    if (!followedUser) {
      res.status(200).json([])
    } else {
      let filter = {[Op.or]: followedUser}
      const recipes = await Recipe.findAll({
        where: filter,
        include: [{ model: User, attributes: ["name", "username", "profilePict"] }],
      });
  
      res.status(200).json(recipes);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getRecipes,
  getUserFavouritedRecipes,
  getLoggedInUserRecipes,
  getRecipeDetail,
  createRecipe,
  editRecipe,
  deleteRecipe,
  createUserRating,
  getRatings,
  addFavourite,
  deleteFavourite,
  feeds,
};
