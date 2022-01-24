import {
  SET_CLASSES,
  SET_CLASSES_ERROR,
  SET_CLASSES_LOADING,
} from "../actionTypes";
import { baseUrl } from "../../apis/baseUrl";

const setClasses = (payload) => {
  return { type: SET_CLASSES, payload };
};

const setClassesError = (payload) => {
  return { type: SET_CLASSES_ERROR, payload };
};

const setClassesLoading = (payload) => {
  return { type: SET_CLASSES_LOADING, payload };
};

export const fetchClasses = () => {
  return async (dispatch) => {
    try {
      const { data: classes } = await baseUrl.get("/class");
      dispatch(setClasses(classes));
    } catch (err) {
      dispatch(setClassesError(err.message));
    } finally {
      dispatch(setClassesLoading(false));
    }
  };
};
