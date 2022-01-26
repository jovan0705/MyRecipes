import {
  SET_USERS,
  SET_USERS_ERROR,
  SET_USERS_LOADING,
  SET_USER_FOLLOWING,
} from "../actionTypes";

const initialState = {
  users: [],
  usersLoading: true,
  usersError: false,
  userFollowing: [],
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        users: payload,
      };

    case SET_USERS_ERROR:
      return {
        ...state,
        usersError: payload,
      };

    case SET_USERS_LOADING:
      return {
        ...state,
        usersLoading: payload,
      };

    case SET_USER_FOLLOWING:
      return {
        ...state,
        userFollowing: payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
