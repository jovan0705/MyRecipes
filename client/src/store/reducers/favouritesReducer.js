import {
  SET_FAVOURITES,
  SET_FAVOURITES_ERROR,
  SET_FAVOURITES_LOADING,
} from "../actionTypes";

const initialState = {
  favourites: [],
  favouritesErrror: null,
  favouritesLoading: true,
};

const favouriteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FAVOURITES:
      return {
        ...state,
        favourites: payload,
      };

    case SET_FAVOURITES_ERROR:
      return {
        ...state,
        favouritesError: payload,
      };

    case SET_FAVOURITES_LOADING:
      return {
        ...state,
        favouritesLoading: payload,
      };
    default:
      return state;
  }
};

export default favouriteReducer;
