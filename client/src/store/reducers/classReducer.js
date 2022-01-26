import {
  SET_CLASSES,
  SET_CLASSES_DETAIL,
  SET_CLASSES_ERROR,
  SET_CLASSES_LOADING,
  SET_USER_CLASS,
} from "../actionTypes";

const initialState = {
  classes: [],
  classDetail: {},
  classesError: null,
  classesLoading: true,
  userClasses: [],
};

const classReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //! Categories
    case SET_CLASSES:
      return {
        ...state,
        classes: payload,
      };

    case SET_CLASSES_DETAIL:
      return {
        ...state,
        classDetail: payload,
      };

    case SET_CLASSES_ERROR:
      return {
        ...state,
        classesError: payload,
      };

    case SET_CLASSES_LOADING:
      return {
        ...state,
        classesLoading: payload,
      };

    case SET_USER_CLASS:
      return {
        ...state,
        userClasses: [],
      };

    default:
      return state;
  }
};

export default classReducer;
