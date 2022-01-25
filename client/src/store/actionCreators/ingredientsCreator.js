import {
  SET_INGREDIENTS,
  SET_INGREDIENTS_ERROR,
  SET_INGREDIENTS_LOADING,
} from "../actionTypes";
import { baseUrl } from "../../apis/baseUrl";

const setIngredients = (payload) => {
  return { type: SET_INGREDIENTS, payload };
};

const setIngredientsError = (payload) => {
  return { type: SET_INGREDIENTS_ERROR, payload };
};

const setIngredientsLoading = (payload) => {
  return { type: SET_INGREDIENTS_LOADING, payload };
};

export const fetchIngredients = () => {
  return async (dispatch) => {
    dispatch(setIngredientsLoading(true));
    dispatch(setIngredientsError(null));
    try {
      const { data: ingredients } = await baseUrl.get("/ingredients", {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch(setIngredients(ingredients));
    } catch (err) {
      dispatch(setIngredientsError(err.message));
    } finally {
      dispatch(setIngredientsLoading(false));
    }
  };
};
