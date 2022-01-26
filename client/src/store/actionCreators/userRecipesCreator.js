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
      dispatch(setUserRecipesError(err));
    } finally {
      dispatch(setUserRecipesLoading(false));
    }
  };
};

export const deleteRecipe = (id) => {
  return async (dispatch, getState) => {
    try {
      const { data: recipe } = await baseUrl.delete(`/recipes/${id}`, {
        headers: { access_token: localStorage.access_token },
      });

      const { userRecipesReducer } = getState();
      console.log(userRecipesReducer.userRecipes.userCreatedRecipes);
      const newUserRecipes =
        userRecipesReducer.userRecipes.userCreatedRecipes.filter(
          (el) => el.id != id
        );
      dispatch(setUserRecipes(newUserRecipes));
      return newUserRecipes;
    } catch (err) {
      console.log(err);
    }
  };
};
