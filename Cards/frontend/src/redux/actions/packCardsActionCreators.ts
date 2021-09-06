import axios from 'axios';
import { userRefreshToken } from './authActionCreators';
import actionTypes from './actionTypes';

export function loadPackcards(token:any, refreshtoken:any) {
  return async (dispatch:any) => {
    if (token) {
      const { data } = await axios.get('http://192.168.0.103:5000/api/packCards', {
        headers: { Authorization: `Bearer ${token}` }
      });
      return dispatch({
        type: actionTypes.LOAD_PACKCARDS,
        packCards: data
      });
    }
    return userRefreshToken(refreshtoken);
  };
}

export function getRandomPackCardBySubject(subject:string) {
  return async (dispatch:any) => {
    const { data } = await axios.get(`http://192.168.0.103:5000/api/packCards?subject=${subject}`);
    return dispatch({
      type: actionTypes.GETRANDOM_PACKCARD,
      randomPackCard: data
    });
  };
}

export function subscribeToPackCard(token:any, refreshtoken:any, userId:string, packCardId:string) {
  return async (dispatch:any) => {
    await axios.put(`http://192.168.0.103:5000/api/packCards/${packCardId}`, {
      body: { user: userId }
    });
    return dispatch({
      type: actionTypes.ADD_SUBSCRIPTOR_PACKCARD
    });
  };
}
