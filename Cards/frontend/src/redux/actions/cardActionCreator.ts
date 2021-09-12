import axios from 'axios';
import { userRefreshToken } from './authActionCreators';
import actionTypes from './actionTypes';

export default function createCard(token:any, refreshtoken:any, activePackCard:string, body:any) {
  console.log('action', activePackCard);
  return async (dispatch:any) => {
    if (token) {
      const { data } = await axios.post(`http://192.168.0.24:5000/api/cards/${activePackCard}`, body, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(data);
      dispatch({
        type: actionTypes.CREATE_CARD,
        newCard: data

      });
    }
    return userRefreshToken(refreshtoken);
  };
}

export function updateCard(token:any, refreshtoken:any, activeCard:string, body:any) {
  console.log('hola');
  return async (dispatch:any) => {
    if (token) {
      const { data } = await axios.put(`http://192.168.0.24:5000/api/cards/${activeCard}`, body, {
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
