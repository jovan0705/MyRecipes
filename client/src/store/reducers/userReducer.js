
import {
  SET_USER,
  SET_USER_ERROR,
  SET_USER_LOADING,
  SET_FEEDS,
  SET_USER_ALREADYRATED
} from "../actionTypes";

const initialState = {
  user: {},
  userError: null,
  userLoading: false,
  feeds: [],
  feedsError: null,
  feedsLoading: true,
  userAlreadyRated: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
      };

    case SET_USER_ERROR:
      return {
        ...state,
        userError: payload,
      };

    case SET_USER_LOADING:
      return {
        ...state,
        userLoading: payload,
      };

    case SET_FEEDS:
      return {
        ...state,
        feeds: payload,
      };

    case SET_USER_ALREADYRATED:
      return {
        ...state,
        userAlreadyRated: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
