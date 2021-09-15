import axios from 'axios';
import { ENV_VAR } from '@env';
import { userRefreshToken } from './authActionCreators';
import actionTypes from './actionTypes';

export function createCard(token:any, refreshtoken:any, activePackCard:string, body:any) {
  return async (dispatch:any) => {
    if (token) {
      const { data } = await axios.post(ENV_VAR.concat(`/api/cards/${activePackCard}`), body, {
        headers: { Authorization: `Bearer ${token}` }
      });
      dispatch({
        type: actionTypes.CREATE_CARD,
        newCard: data

      });
    }
    return userRefreshToken(refreshtoken);
  };
}

export function updateCard(token:any, refreshtoken:any, activeCard:string, body:any) {
  return async (dispatch:any) => {
    if (token) {
      const { data } = await axios.put(ENV_VAR.concat(`/api/cards/${activeCard}`), body, {
        headers: { Authorization: `Bearer ${token}` }
      });
      dispatch({
        type: actionTypes.UPDATE_CARD,
        newCard: data

      });
    }
    return userRefreshToken(refreshtoken);
  };
}
