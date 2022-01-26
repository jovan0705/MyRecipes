import {
  SET_CATEGORIES,
  SET_CATEGORIES_ERROR,
  SET_CATEGORIES_LOADING,
  CATEGORY_DETAIL
} from "../actionTypes";

const initialState = {
  categories: [],
  categoriesDetail: {},
  categoriesError: null,
  categoriesLoading: true,
};

const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //! Categories
    case SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    case CATEGORY_DETAIL:
      return {
        ...state,
        categoriesDetail: payload,
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

    default:
      return state;
  }
};

export default categoryReducer;
