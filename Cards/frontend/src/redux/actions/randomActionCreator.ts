import axios from 'axios';
import { ENV_VAR } from '@env';
import { userRefreshToken } from './authActionCreators';
import actionTypes from './actionTypes';

export default function getRandomPackCardBySubject(token:any, refreshtoken:any, subject:string) {
  return async (dispatch:any) => {
    if (token) {
      const { data } = await axios.get(ENV_VAR.concat(`/api/packCards?subject=${subject}`), {
        headers: { Authorization: `Bearer ${token}` }
      });
      return dispatch({
        type: actionTypes.GETRANDOM_PACKCARD,
        randomPackCard: data
      });
    }
    return userRefreshToken(refreshtoken);
  };
}
