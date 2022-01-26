import { combineReducers } from "redux";
import recipeReducer from "./recipeReducer";
import categoryReducer from "./categoryReducer";
import classReducer from "./classReducer";
import userReducer from "./userReducer";
import ingredientsReducer from "./ingredientsReducer";
import recipeDetailReducer from "./recipeDetailReducer";
import favouritesReducer from "./favouritesReducer";
import userRecipesReducer from "./userRecipesReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  recipeReducer,
  categoryReducer,
  classReducer,
  ingredientsReducer,
  userReducer,
  recipeDetailReducer,
  favouritesReducer,
  userRecipesReducer,
  usersReducer,
});

export default rootReducer;
