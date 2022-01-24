import {
  SET_CATEGORIES,
  SET_CATEGORIES_ERROR,
  SET_CATEGORIES_LOADING,
} from "../actionTypes";
import { baseUrl } from "../../apis/baseUrl";

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
      dispatch(setCategories(categories.response));
    } catch (err) {
      dispatch(setCategoriesError(err.message));
    } finally {
      dispatch(setCategoriesLoading(false));
    }
  };
};
