import axios from 'axios';

import actionTypes from './actionTypes';

export function login(user:any) {
  return async (dispatch:any) => {
    try {
      const { data } = await axios.post('http://192.168.0.24:5000/login', user);
      return dispatch({
        type: actionTypes.AUTH_LOGIN,
        user: data
      });
    } catch (error:any) {
      if (error?.response?.status === 401) {
        return dispatch({
          type: actionTypes.AUTH_LOGIN_ERROR,
          message: error.message
        });
      }
      return dispatch({
        type: actionTypes.ERROR_GENERIC,
        message: error.message
      });
    }
  };
}

export function logOut() {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
}
