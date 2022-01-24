import {
  SET_CATEGORIES,
  SET_CATEGORIES_ERROR,
  SET_CATEGORIES_LOADING,
  SET_CLASSES,
  SET_CLASSES_ERROR,
  SET_CLASSES_LOADING,
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

// Categories

const setCategories = (payload) => {
  return { type: SET_CATEGORIES, payload };
};

const setCategoriesError = (payload) => {
  return { type: SET_CATEGORIES_ERROR, payload };
};

const setCategoriesLoading = (payload) => {
  return { type: SET_CATEGORIES_LOADING, payload };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(setCategoriesLoading(true));
    dispatch(setCategoriesError(null));
    try {
      const { data: categories } = await baseUrl.get("/categories");
      dispatch(setCategories(categories));
    } catch (err) {
      dispatch(setCategoriesError(err.response.data.message));
    } finally {
      dispatch(setCategoriesLoading(false));
    }
  };
};

// Classes

const setClasses = (payload) => {
  return { type: SET_CLASSES, payload };
};

const setClassesError = (payload) => {
  return { type: SET_CLASSES_ERROR, payload };
};

const setClassesLoading = (payload) => {
  return { type: SET_CLASSES_LOADING, payload };
};

export const fetchClasses = () => {
  return async (dispatch) => {
    try {
      const { data: classes } = await baseUrl.get("/classes");
      dispatch(setClasses(classes));
    } catch (err) {
      dispatch(setClassesError(err.response.data.message));
    } finally {
      dispatch(setClassesLoading(false));
    }
  };
};

// Login
const doLogin = (payload) => {
  return async () => {
    try {
      const { data: user } = await baseUrl.post("/users/login", payload);
      localStorage.access_token = user.access_token;
    } catch (err) {
      console.log(err);
    }
  };
};
