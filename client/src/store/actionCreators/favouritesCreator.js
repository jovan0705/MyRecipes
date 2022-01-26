import { baseUrl } from "../../apis/baseUrl";
import {
  SET_FAVOURITES,
  SET_FAVOURITES_ERROR,
  SET_FAVOURITES_LOADING,
} from "../actionTypes";

const setFavoruites = (payload) => {
  return { type: SET_FAVOURITES, payload };
};

const setFavoruitesError = (payload) => {
  return { type: SET_FAVOURITES_ERROR, payload };
};

const setFavoruitesLoading = (payload) => {
  return { type: SET_FAVOURITES_LOADING, payload };
};

export const fetchFavourites = () => {
  return async (dispatch) => {
    try {
      const { data: favourites } = await baseUrl.get("/recipes/favourites", {
        headers: { access_token: localStorage.access_token },
      });
      dispatch(setFavoruites(favourites));
      return favourites
    } catch (err) {
      dispatch(setFavoruitesError(err));
    } finally {
      dispatch(setFavoruitesLoading(false));
    }
  };
};
