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
      const { data: ingredients } = await baseUrl.get("/ingredients");
      dispatch(setIngredients(ingredients));
    } catch (err) {
      dispatch(setIngredientsError(err.message));
    } finally {
      dispatch(setIngredientsLoading(false));
    }
  };
};

export const addIngredient = (formData) => {
  return async (dispatch, getState) => {
    dispatch(setIngredientsLoading(true));
    dispatch(setIngredientsError(null));
    try {
      const {data: ingredient} = await baseUrl.post('/ingredients', formData)
      const { ingredientsReducer } = getState()
      const { ingredients } = ingredientsReducer
      const newIngredients = [...ingredients, ingredient]

      dispatch(setIngredients(newIngredients))
      return ingredients
    } catch (err) {
      dispatch(setIngredientsError(err.message));
    } finally {
      dispatch(setIngredientsLoading(false));
    }
  }
}

export const deleteIngredient = (id) => {
  return async (dispatch, getState) => {
    dispatch(setIngredientsLoading(true));
    dispatch(setIngredientsError(null));

    try {
      const { data } = await baseUrl.delete(`/ingredients/${id}`)

      const { ingredientsReducer } = getState()
      const { ingredients } = ingredientsReducer
      const newIngredients = ingredients.filter(el => el.id !== id)
      dispatch(setIngredients(newIngredients))
      
      return data

    } catch (err) {
      dispatch(setIngredientsError(err.message));
    } finally {
      dispatch(setIngredientsLoading(false));
    }
  }
}
