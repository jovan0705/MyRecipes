import {
  SET_RECIPES,
  SET_RECIPES_ERROR,
  SET_RECIPES_LOADING,
} from "../actionTypes";

const initialState = {
  recipes: [],
  recipesError: null,
  recipesLoading: true,
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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

    default:
      return state;
  }
};
