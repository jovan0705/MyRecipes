import {
  SET_RECIPE_DETAIL,
  SET_RECIPE_DETAIL_ERROR,
  SET_RECIPE_DETAIL_LOADING,
} from "../actionTypes";

const initialState = {
  recipe: [],
  recipeError: null,
  recipeLoading: true,
};

const recipeDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RECIPE_DETAIL:
      return {
        ...state,
        recipe: payload,
      };

    case SET_RECIPE_DETAIL_ERROR:
      return {
        ...state,
        recipeError: payload,
      };

    case SET_RECIPE_DETAIL_LOADING:
      return {
        ...state,
        recipeLoading: payload,
      };

    default:
      return state;
  }
};

export default recipeDetailReducer;
