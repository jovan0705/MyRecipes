import {
  SET_RECIPES,
  SET_RECIPES_ERROR,
  SET_RECIPES_LOADING,
  SET_RECIPE_POST_STATUS,
  SET_RECIPE_FILTER
} from "../actionTypes";
import { baseUrl, uploadFile } from "../../apis/baseUrl";
import { errorAlert } from "../../helpers/alerts";

const setRecipes = (payload) => {
  return { type: SET_RECIPES, payload };
};

const setRecipesError = (payload) => {
  return { type: SET_RECIPES_ERROR, payload };
};

const setRecipesLoading = (payload) => {
  return { type: SET_RECIPES_LOADING, payload };
};

const setRecipePostStatus = (payload) => {
  return { type: SET_RECIPE_POST_STATUS, payload };
};

export const setFilter = (payload) => {
  return {type: SET_RECIPE_FILTER, payload}
}

export const fetchRecipes = (filter) => {
  return async (dispatch) => {
    dispatch(setRecipesLoading(true));
    dispatch(setRecipesError(null));
    try {
      if (filter === "") {     
        const { data: recipes } = await baseUrl.get("/recipes", {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        dispatch(setRecipes(recipes));
      } else {
        const { data: recipes } = await baseUrl.get(`/recipes/${filter}`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        dispatch(setRecipes(recipes));
      }
    } catch (err) {
      dispatch(setRecipesError(err.message));
    } finally {
      dispatch(setRecipesLoading(false));
    }
  };
};

export const postRecipe = (fd) => {
  return async (dispatch) => {
    try {
      dispatch(setRecipePostStatus(true));
      const { data: recipe } = await uploadFile.post("/recipes", fd, {headers: {
        access_token: localStorage.access_token
      }});
      return recipe;
    } catch (err) {
      errorAlert(err.response.data.message);
      throw new Error(err.response.data.message);
    } finally {
      dispatch(setRecipePostStatus(false));
    }
  };
};

export const updateRecipe = (id, fd) => {
  return async (dispatch) => {
    try {
      dispatch(setRecipePostStatus(true));
      const { data: recipe } = await uploadFile.put(`/recipes/${id}`, fd, {headers: {
        access_token: localStorage.access_token
      }});
      return recipe;
    } catch (err) {
      errorAlert(err.response.data.message);
      throw new Error(err.response.data.message);
    } finally {
      dispatch(setRecipePostStatus(false));
    }
  };
};

export const likeRecipe = (id) => {
  return async (dispatch) => {
    try {
      const { data: recipe } = await baseUrl.post(`/recipes/favourite/${id}`, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      return recipe;
    } catch (err) {
      console.log(err);
    }
  };
};

export const unlikeRecipe = (id) => {
  return async () => {
    try {
      const { data: recipe } = await baseUrl.delete(
        `/recipes/favourite/${id}`,
        {
          headers: {
            access_token: localStorage.access_token,
          },
        }
      );
      return recipe;
    } catch (err) {
      console.log(err);
    }
  };
};
