import {
  SET_CATEGORIES,
  CATEGORY_DETAIL,
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

const setCategoryDetail = (payload) => {
  return { type: CATEGORY_DETAIL, payload };
}

export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(setCategoriesLoading(true));
    dispatch(setCategoriesError(null));
    try {
      const { data: categories } = await baseUrl.get("/categories", {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch(setCategories(categories.response));
    } catch (err) {
      dispatch(setCategoriesError(err.message));
    } finally {
      dispatch(setCategoriesLoading(false));
    }
  };
};

export const fetchCategoriesById = (id) => {
  return async (dispatch) => {
    dispatch(setCategoriesLoading(true));
    dispatch(setCategoriesError(null));
    try {
      const { data: categories } = await baseUrl.get(`/categories/${id}`);
      dispatch(setCategoryDetail(categories.response));
    } catch (err) {
      dispatch(setCategoriesError(err.message));
    } finally {
      dispatch(setCategoriesLoading(false));
    }
  };
};

export const addCategory = (formData) => {
  return async (dispatch, getState) => {
    dispatch(setCategoriesLoading(true));
    dispatch(setCategoriesError(null));
    try {
      const {data: category} = await baseUrl.post('/categories', formData)
      const { categoryReducer } = getState()
      const { categories } = categoryReducer
      const newCategories = [...categories, category]

      dispatch(setCategories(newCategories))
      return category
    } catch (err) {
      dispatch(setCategoriesError(err.message));
    } finally {
      dispatch(setCategoriesLoading(false));
    }
  }
}

export const updateCategory = (id, formData) => {
  return async (dispatch, getState) => {
    dispatch(setCategoriesLoading(true));
    dispatch(setCategoriesError(null));
    try {
      const {data: category} = await baseUrl.put(`/categories/${id}`, formData)

      dispatch(fetchCategories())
      return category
    } catch (err) {
      dispatch(setCategoriesError(err.message));
    } finally {
      dispatch(setCategoriesLoading(false));
    }
  }
}

export const deleteCategory = (id) => {
  return async (dispatch, getState) => {
    dispatch(setCategoriesLoading(true));
    dispatch(setCategoriesError(null));

    try {
      const { data } = await baseUrl.delete(`/categories/${id}`)

      const { categoryReducer } = getState()
      const { categories } = categoryReducer
      const newCategories = categories.filter(el => el.id !== id)
      dispatch(setCategories(newCategories))
      
      return data

    } catch (err) {
      dispatch(setCategoriesError(err.message));
    } finally {
      dispatch(setCategoriesLoading(false));
    }
  }
}