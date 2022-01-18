import {
  SET_RECIPES,
  SET_RECIPES_ERROR,
  SET_RECIPES_LOADING,
} from "../actionTypes";
import { baseUrl } from "../../apis/baseUrl";

//Recipes

const setRecipes = (payload) => {
  return { type: SET_RECIPES, payload };
};

const setRecipesError = (payload) => {
  return { type: SET_RECIPES_ERROR, payload };
};

const setRecipesLoading = (payload) => {
  return { type: SET_RECIPES_LOADING, payload };
};

export const fetchRecipes = () => {
  return async (dispatch) => {
    dispatch(setRecipesLoading(true));
    dispatch(setRecipesError(null));
    try {
      const { data: recipes } = await baseUrl.get("/recipes");
      dispatch(setRecipes(recipes));
    } catch (err) {
      dispatch(setRecipesError(err.response.data.message));
    } finally {
      dispatch(setRecipesLoading(false));
    }
  };
};
