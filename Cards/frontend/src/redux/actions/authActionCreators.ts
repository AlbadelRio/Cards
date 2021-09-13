import axios from 'axios';
import { ENV_VAR } from '@env';
import actionTypes from './actionTypes';

type User= {
  email:string,
  password:string
}

export function login(user:User) {
  return async (dispatch:any) => {
    try {
      const { data } = await axios.post(ENV_VAR.concat('/login'), user);
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
export function userRefreshToken(refreshToken:string) {
  return async (dispatch:any) => {
    try {
      const { data } = await axios.post(ENV_VAR.concat('/refreshToken'), { refreshToken });
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
