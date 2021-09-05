import axios from 'axios';

import actionTypes from './actionTypes';

type User= {
  email:string,
  password:string
}

export function login(user:any) {
  console.log(user);
  return async (dispatch:any) => {
    console.log(dispatch);
    try {
      const { data } = await axios.post('http://192.168.0.23:5000/login', user);
      console.log(data);
      return dispatch({
        type: actionTypes.AUTH_LOGIN,
        user: data
      });
    } catch (error:any) {
      console.log(error);
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
