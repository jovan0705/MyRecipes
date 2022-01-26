import { baseUrl } from "../../apis/baseUrl";
import {
  SET_USERS,
  SET_USERS_ERROR,
  SET_USERS_LOADING,
  SET_USER_FOLLOWING,
} from "../actionTypes";

const setUsers = (payload) => {
  return { type: SET_USERS, payload };
};

const setUsersError = (payload) => {
  return { type: SET_USERS_ERROR, payload };
};

const setUsersLoading = (payload) => {
  return { type: SET_USERS_LOADING, payload };
};

const setUserFollowing = (payload) => {
  return { type: SET_USER_FOLLOWING, payload };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const { data: users } = await baseUrl.get("/users");
      dispatch(setUsers(users));
      return users;
    } catch (err) {
      dispatch(setUsersError(err.response.data.message));
    } finally {
      dispatch(setUsersLoading(false));
    }
  };
};

export const doFollow = (id) => {
  return async () => {
    const targetId = id;
    try {
      const { data: user } = await baseUrl.post("/users/follows", { targetId });
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
};

export const doUnfollow = (id) => {
  return async () => {
    try {
      const { data: user } = await baseUrl.delete(`/users/unfollow/${id}`);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchUserFollowing = () => {
  return async (dispatch) => {
    try {
      const { data: users } = await baseUrl.get("/users/followings");
      dispatch(setUserFollowing(users));
      return users;
    } catch (err) {
      console.log(err);
    } finally {
      console.log("user following");
    }
  };
};
