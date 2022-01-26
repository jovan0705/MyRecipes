import {
  SET_INGREDIENTS,
  INGREDIENTS_DETAIL,
  SET_INGREDIENTS_ERROR,
  SET_INGREDIENTS_LOADING,
} from "../actionTypes";

const initialState = {
  ingredients: [],
  ingredientsDetail: {},
  ingredientsError: null,
  ingredientsLoading: true,
};

const ingredientsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INGREDIENTS:
      return {
        ...state,
        ingredients: payload,
      };

    case INGREDIENTS_DETAIL:
      return {
        ...state,
        ingredientsDetail: payload,
      };

    case SET_INGREDIENTS_ERROR:
      return {
        ...state,
        ingredientsError: payload,
      };

    case SET_INGREDIENTS_LOADING:
      return {
        ...state,
        ingredientsLoading: payload,
      };
    default:
      return state;
  }
};

export default ingredientsReducer;
