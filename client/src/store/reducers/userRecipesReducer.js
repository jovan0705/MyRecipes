import {
  SET_USER_RECIPES,
  SET_USER_RECIPES_ERROR,
  SET_USER_RECIPES_LOADING,
} from "../actionTypes";

const initialState = {
  userRecipes: [],
  userRecipesError: null,
  userRecipesLoading: true,
};

const userRecipesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_RECIPES:
      return {
        ...state,
        userRecipes: payload,
      };

    case SET_USER_RECIPES_ERROR:
      return {
        ...state,
        userRecipesError: payload,
      };

    case SET_USER_RECIPES_LOADING:
      return {
        ...state,
        userRecipesLoading: payload,
      };

    default:
      return state;
  }
};

export default userRecipesReducer;
