import {
  SET_RECIPE_DETAIL,
  SET_RECIPE_DETAIL_ERROR,
  SET_RECIPE_DETAIL_LOADING,
} from "../actionTypes";
import { baseUrl } from "../../apis/baseUrl";

const setRecipe = (payload) => {
  return { type: SET_RECIPE_DETAIL, payload };
};

const setRecipeError = (payload) => {
  return { type: SET_RECIPE_DETAIL_ERROR, payload };
};

const setRecipeLoading = (payload) => {
  return { type: SET_RECIPE_DETAIL_LOADING, payload };
};

export const fetchRecipe = (id) => {
  return async (dispatch) => {
    dispatch(setRecipeLoading(true));
    dispatch(setRecipeError(null));
    try {
      const { data: recipe } = await baseUrl.get(`/recipes/${id}`, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch(setRecipe(recipe));
    } catch (err) {
      dispatch(setRecipeError(err.message));
    } finally {
      dispatch(setRecipeLoading(false));
    }
  };
};
