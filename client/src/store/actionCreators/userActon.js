import {
  SET_USER,
  SET_USER_LOADING,
  SET_USER_ERROR,
  SET_FEEDS,
  SET_USER_ALREADYRATED,
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

const setFeeds = (payload) => {
  return { type: SET_FEEDS, payload };
}

const setUserAlreadyRated = (payload) => {
  return { type: SET_USER_ALREADYRATED, payload };
}

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
  return async (dispatch) => {
    try {
      dispatch(setUserAlreadyRated(false))
      const { data: rating } = await baseUrl.post(
        `/recipes/${id}/rate`,
        payload,
        { headers: { access_token: localStorage.access_token } }
      );
      console.log(rating);
      dispatch(setUserAlreadyRated(true))
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchFeeds = () => {
  return async (dispatch) => {
    try {
      const { data: feeds } = await baseUrl.get("/recipes/feeds");
      console.log(feeds, "feedsssssssssssss");
      dispatch(setFeeds(feeds));
      return feeds;
    } catch (err) {
      console.log(err);
    } finally {
      console.log("feeds");
    }
  };
};


export const editProfile = (id, userdata) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await baseUrl.put(`users/editprofile/${id}`, userdata, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      return data;
    } catch (err) {
      dispatch(setUserError(err));
      errorAlert(err.response.data.message);
      throw new Error(err.response.data.message);
    }
  }
}
export const successTopUp = () => {
  return async (dispatch, getState) => {
    dispatch(setUserLoading(true));
    dispatch(setUserError(null));

    try {
      const { data } = await baseUrl.patch(`/users/successTopUp`);
      return data;
    } catch (err) {
      dispatch(setUserError(err.message));

    } finally {
      dispatch(setUserLoading(false));
    }
  }
}

