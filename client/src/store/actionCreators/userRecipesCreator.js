import {
  SET_USER_RECIPES,
  SET_USER_RECIPES_ERROR,
  SET_USER_RECIPES_LOADING,
} from "../actionTypes";
import { baseUrl } from "../../apis/baseUrl";

const setUserRecipes = (payload) => {
  return { type: SET_USER_RECIPES, payload };
};

const setUserRecipesError = (payload) => {
  return { type: SET_USER_RECIPES_ERROR, payload };
};

const setUserRecipesLoading = (payload) => {
  return { type: SET_USER_RECIPES_LOADING, payload };
};

export const fetchUserRecipes = () => {
  return async (dispatch) => {
    try {
      const { data: userRecipes } = await baseUrl.get("/recipes/own", {
        headers: { access_token: localStorage.access_token },
      });
      dispatch(setUserRecipes(userRecipes));
    } catch (err) {
      setUserRecipesError(err);
    } finally {
      dispatch(setUserRecipesLoading(false));
    }
  };
};
