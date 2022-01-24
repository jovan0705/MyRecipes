import {
  SET_CLASSES,
  SET_CLASSES_ERROR,
  SET_CLASSES_LOADING,
  SET_CATEGORIES,
  SET_CATEGORIES_ERROR,
  SET_CATEGORIES_LOADING,
  SET_RECIPES,
  SET_RECIPES_ERROR,
  SET_RECIPES_LOADING,
} from "../actionTypes";

const initialState = {
  recipes: [],
  recipesError: null,
  recipesLoading: true,
  categories: [],
  categoriesError: null,
  categoriesLoadig: true,
  classes: [],
  classesError: null,
  classesLoading: true,
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //! Recipes
    case SET_RECIPES:
      return {
        ...state,
        recipes: payload,
      };

    case SET_RECIPES_ERROR:
      return {
        ...state,
        recipesError: payload,
      };

    case SET_RECIPES_LOADING:
      return {
        ...state,
        recipesLoading: payload,
      };

    //! Categories
    case SET_CATEGORIES:
      return {
        ...state,
        categories: [],
      };

    case SET_CATEGORIES_ERROR:
      return {
        ...state,
        categoriesError: payload,
      };

    case SET_CATEGORIES_LOADING:
      return {
        ...state,
        categoriesLoading: payload,
      };

    //! Classes

    case SET_CLASSES:
      return {
        ...state,
        classes: payload,
      };

    case SET_CLASSES_ERROR:
      return {
        ...state,
        classesError: payload,
      };

    case SET_CLASSES_LOADING:
      return {
        ...state,
        classesLoading: payload,
      };

    default:
      return state;
  }
};
