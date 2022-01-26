import {
  SET_RECIPES,
  SET_RECIPES_ERROR,
  SET_RECIPES_LOADING,
  SET_RECIPE_POST_STATUS,
} from "../actionTypes";

const initialState = {
  recipes: [],
  recipesError: null,
  recipesLoading: true,
  posting: false,
};

const recipeReducer = (state = initialState, { type, payload }) => {
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

    case SET_RECIPE_POST_STATUS:
      return {
        ...state,
        posting: payload,
      };

    default:
      return state;
  }
};

export default recipeReducer;
