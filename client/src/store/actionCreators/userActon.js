import {
  FETCH_USER,
  SET_USER_LOADING,
  SET_USER_ERROR,
} from "../actionTypes/index";
import { baseUrl } from "../../apis/baseUrl";
import { successAlert, errorAlert } from "../../helpers/alerts";

const setUserError = (payload) => {
  return { type: SET_USER_ERROR, payload };
};

const setUserLoading = (payload) => {
  return { type: SET_USER_LOADING, payload };
};

export const login = (loginData) => {
  return async (dispatch, getState) => {
    dispatch(setUserLoading(true));
    dispatch(setUserError(null));
    try {
      const { data } = await baseUrl.post("/login", loginData);
      return data;
    } catch (err) {
      dispatch(setUserError(err));
      errorAlert(err.response.data.message);
      throw new Error(err.response.data.message);
    } finally {
      dispatch(setUserLoading(false));
    }
  };
};

export const registerUser = (registerData) => {
  return async (dispatch, getState) => {
    dispatch(setUserLoading(true));
    dispatch(setUserError(null));
    try {
      const { data: user } = await baseUrl.post("/userregister", registerData);
      return user;
    } catch (err) {
      dispatch(setUserError(err.response.data.message));
      errorAlert(err.response.data.message);
      throw new Error(err.response.data.message);
    } finally {
      dispatch(setUserLoading(false));
    }
  };
};
