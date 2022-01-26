const router = require("express").Router();
const instanceMulter = require("../middlewares/multer");
const imageKitUpload = require("../middlewares/imageKit");
const userAuthorization = require("../middlewares/authorization");
const {
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
  deleteFavourite
} = require("../controller/recipeController");

// fetch all recipes
router.get("/", getRecipes);
// fetch all user favourited recipes (untested)
router.get("/favourites", getUserFavouritedRecipes);
// fetch all logged in user recipes
router.get("/own", getLoggedInUserRecipes);
// fetch recipe detail
router.get("/:id", getRecipeDetail);
// create recipe
router.post(
  "/",
  instanceMulter.single("imageFile"),
  imageKitUpload,
  createRecipe
);
// edit recipe
router.put("/:id", instanceMulter.single("imageFile"), imageKitUpload, editRecipe);
// delete recipe
// authorizationnya dihapus dulu gara2 bikin error pas test
router.delete("/:id", deleteRecipe);
// create rating
router.post('/:id/rate', createUserRating)
// get rating
router.get('/:id/rate', getRatings)

router.post('/favourite/:recipeId', addFavourite)
router.delete('/favourite/:recipeId', deleteFavourite)

module.exports = router;
