import axios from 'axios';

import actionTypes from './actionTypes';

type User= {
  email:string,
  password:string
}

export function login(user:User) {
  console.log(user);
  return async (dispatch:any) => {
    console.log(dispatch);
    try {
      const { data } = await axios.post('http://192.168.0.103:5000/login', user);
      console.log('login:');
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
export function userRefreshToken(refreshToken:string) {
  return async (dispatch:any) => {
    try {
      console.log('aaaa');
      const { data } = await axios.post('http://192.168.0.103:5000/refreshToken', { refreshToken });
      console.log('data userRefreshToken');

      console.log(data);
      return dispatch({
        type: actionTypes.REFRESH_TOKEN,
        token: data
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
