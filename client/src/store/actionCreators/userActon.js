import {
  SET_USER,
  SET_USER_LOADING,
  SET_USER_ERROR,
} from "../actionTypes/index";
import { baseUrl } from "../../apis/baseUrl";
import { successAlert, errorAlert } from "../../helpers/alerts";

const setUser = (payload) => {
  return { type: SET_USER, payload };
};

const setUserError = (payload) => {
  return { type: SET_USER_ERROR, payload };
};

const setUserLoading = (payload) => {
  return { type: SET_USER_LOADING, payload };
};

export const fetchUserProfile = () => {
  return async (dispatch) => {
    try {
      const { data: user } = await baseUrl.get("/users/profile", {
        headers: { access_token: localStorage.access_token },
      });
      dispatch(setUser(user));
      
    } catch (err) {
      console.log(err);
    } finally {
      console.log("masukk");
    }
  };
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

export const registerAdmin = (registerData) => {
  return async (dispatch, getState) => {
    dispatch(setUserLoading(true));
    dispatch(setUserError(null));
    try {
      const { data: user } = await baseUrl.post(
        "/users/adminregister",
        registerData
      );
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

export const doTopUp = (amount) => {
  const payload = { amount };
  return async () => {
    try {
      const { data } = await baseUrl.post("/users/topup", payload, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };
};

export const doRating = (id, payload) => {
  return async () => {
    try {
      const { data: rating } = await baseUrl.post(
        `/recipes/${id}/rate`,
        payload,
        { headers: { access_token: localStorage.access_token } }
      );
      console.log(rating);
    } catch (err) {
      console.log(err);
    }
  };
};
