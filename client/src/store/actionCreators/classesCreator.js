import {
  SET_CLASSES,
  SET_USER_CLASSES,
  SET_CLASSES_DETAIL,
  SET_CLASSES_ERROR,
  SET_CLASSES_LOADING,
  SET_USER_CLASS,
} from "../actionTypes";
import { baseUrl, uploadFile } from "../../apis/baseUrl";

const setClasses = (payload) => {
  return { type: SET_CLASSES, payload };
};
const setUserClasses = (payload) => {
  return { type: SET_USER_CLASSES, payload };
};
const setClassesDetail = (payload) => {
  return { type: SET_CLASSES_DETAIL, payload };
};

const setClassesError = (payload) => {
  return { type: SET_CLASSES_ERROR, payload };
};

const setClassesLoading = (payload) => {
  return { type: SET_CLASSES_LOADING, payload };
};

const setUserClasses = (payload) => {
  return { type: SET_USER_CLASS, payload };
};

export const fetchClasses = () => {
  return async (dispatch) => {
    try {
      const { data: classes } = await baseUrl.get("/class", {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch(setClasses(classes));
    } catch (err) {
      dispatch(setClassesError(err.message));
    } finally {
      dispatch(setClassesLoading(false));
    }
  };
};

export const fetchUserClasses = () => {
  return async (dispatch) => {
    try {
      const { data: classes } = await baseUrl.get("/class/myClass", {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch(setUserClasses(classes));
    } catch (err) {
      dispatch(setClassesError(err.message));
    } finally {
      dispatch(setClassesLoading(false));
    }
  };
};

export const registerClass = (classId) => {
  return async (dispatch) => {
    try {
      const data = await baseUrl.post(`/class/register/${classId}`, {
        headers: {
          access_token: localStorage.access_token,
        },
      })
      return data
    } catch (err) {
      dispatch(setClassesError(err.message));
      return err
    }
  }
}

export const fetchClassesDetail = (id) => {
  return async (dispatch) => {
    try {
      const { data: classes } = await baseUrl.get(`/class/detail/${id}`, {
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch(setClassesDetail(classes));
      return classes;
    } catch (err) {
      dispatch(setClassesError(err.message));
    } finally {
      dispatch(setClassesLoading(false));
    }
  };
};

export const addClass = (formData) => {
  return async (dispatch, getState) => {
    dispatch(setClassesLoading(true));
    dispatch(setClassesError(null));
    try {
      const { data: classData } = await uploadFile.post("/class/add", formData);
      const { classReducer } = getState();
      const { classes } = classReducer;
      const newClasses = [...classes, classData];

      dispatch(setClasses(newClasses));
      return classData;
    } catch (err) {
      dispatch(setClassesError(err.message));
    } finally {
      dispatch(setClassesLoading(false));
    }
  };
};

export const updateClass = (id, formData) => {
  return async (dispatch, getState) => {
    dispatch(setClassesLoading(true));
    dispatch(setClassesError(null));
    try {
      // console.log(formData, '<<<<<<<<<<<<<<<')
      const { data: classData } = await uploadFile.put(
        `/class/edit/${id}`,
        formData
      );

      dispatch(fetchClasses());
      return classData;
    } catch (err) {
      dispatch(setClassesError(err.message));
    } finally {
      dispatch(setClassesLoading(false));
    }
  };
};

export const deleteClass = (id) => {
  return async (dispatch, getState) => {
    dispatch(setClassesLoading(true));
    dispatch(setClassesError(null));

    try {
      const { data } = await baseUrl.delete(`/class/delete/${id}`);

      const { classReducer } = getState();
      const { classes } = classReducer;
      const newClasses = classes.filter((el) => el.id !== id);
      dispatch(setClasses(newClasses));

      return data;
    } catch (err) {
      dispatch(setClassesError(err.message));
    } finally {
      dispatch(setClassesLoading(false));
    }
  };
};


