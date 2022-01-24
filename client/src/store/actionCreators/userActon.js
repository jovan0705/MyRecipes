import { FETCH_USER, SET_USER_LOADING, SET_USER_ERROR} from '../actionTypes/index'
import { baseUrl } from "../../apis/baseUrl";

const setUserError = (payload) => {
    return { type: SET_USER_ERROR, payload };
  };
  
  const setUserLoading = (payload) => {
    return { type: SET_USER_LOADING, payload };
  };

export const login = (loginData) => {
    return async (dispatch, getState) => {
        dispatch(setUserLoading(true))
        dispatch(setUserError(null))
        try {
            const {data} = await baseUrl.post('/login', loginData)
            return data
        } catch (err) {
            console.log(err)
            dispatch(setUserError(err))
        } finally {
            dispatch(setUserLoading(false))
        }
    }
}

export const registerUser = (registerData) => {
    return async (dispatch, getState) => {
        dispatch(setUserLoading(true))
        dispatch(setUserError(null))
        try {
            const {data} = await baseUrl.post('/userregister', registerData)
            return data
        } catch (err) {
            console.log(err)
            dispatch(setUserError(err))
        } finally {
            dispatch(setUserLoading(false))
        }
    }
}
