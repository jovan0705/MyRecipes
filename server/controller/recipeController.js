const {
  User,
  Recipe,
  UserFavoritedRecipe,
  RecipeRating,
  Category,
  RecipeIngredients,
  Ingredient,
} = require("../models");

const getRecipes = async (req, res, next) => {
  try {
    // untuk sementara belum ada paginasi

    const response = await Recipe.findAll({
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
      ],
    });
    if (!response) throw { name: "notFound" };
    res.status(200).json(response);
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
        ],
      },
    });
    if (!response) throw { name: "notFound" };
    const payload = response.map((recipe) => {
      return recipe.Recipe;
    });
    res.status(200).json({ favoritedRecipes: payload });
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
      ],
    });
    if (!response) throw { name: "notFound" };
    res.status(200).json({ userCreatedRecipes: response });
  } catch (err) {
    next(err);
  }
};

const getRecipeDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await Recipe.findByPk(id, {
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
    });
    if (!response) throw { name: "notFound" };
    const ingredients = await RecipeIngredients.findAll({
      where: { recipeId: id },
      include: Ingredient,
    });
    console.log(ingredients);
    const ingredientPayload = await ingredients.map((ingredient) => {
      return ingredient.Ingredient.name;
    });
    res.status(200).json({ recipe: response, ingredients: ingredientPayload });
  } catch (err) {
    next(err);
  }
};

const createRecipe = async (req, res, next) => {
  try {
    // asumsi struktur tipe data step adalah array dan totalCalories sudah tertotal pas mengirimkan data input ke server
    let { name, steps, totalCalories, categoryId, ingredients } = req.body;
    ingredients = ingredients.split(",");
    console.log(req.body, "<<<<<<<<<<<BODYNYA");
    console.log(req.additionalData, "<<<<<<<<<<<BODYNYA");
    if (!name) throw { name: "emptyName" };
    if (!steps) throw { name: "emptySteps" };
    if (!totalCalories) throw { name: "emptyTotalCalories" };
    if (!categoryId) throw { name: "emptyCategoryId" };
    const newSteps = steps.split(",").map((step) => {
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

    console.log(response.id);
    console.log(
      ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
      ingredients,
      "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
    );
    const payload = await ingredients.map((ingredientId) => {
      return {
        recipeId: response.id,
        ingredientId: +ingredientId,
        weight: 0,
      };
    });
    console.log(payload, "><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    const createIngredients = await RecipeIngredients.bulkCreate(payload, {
      raw: true,
    });
    if (!createIngredients) throw err;


    res.status(201).json(response);
  } catch (err) {
    console.log(">>>>>>>>>>>>>ERROR " + err);
    next(err);
  }
};

const editRecipe = async (req, res, next) => {
  try {
    // asumsi struktur tipe data step adalah array dan totalCalories sudah tertotal pas mengirimkan data input ke server
    const { name, steps, totalCalories } = req.body;
    const newSteps = steps.split(",").map((step) => {
      return step;
    });
    const id = req.params.id;
    const userId = req.user.id;
    const imageUrl = req.additionalData;

    const found = await Recipe.findByPk(id);
    if (!found) throw { name: "notFound" };

    const response = await Recipe.update(
      { name, steps: newSteps, totalCalories, imageUrl },
      { where: { id, userId } }
    );
    if (!response) throw { name: "errorUpdateRecipe" };

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

module.exports = {
  getRecipes,
  getUserFavouritedRecipes,
  getLoggedInUserRecipes,
  getRecipeDetail,
  createRecipe,
  editRecipe,
  deleteRecipe,
  createUserRating,
  addFavourite,
  deleteFavourite,
};
