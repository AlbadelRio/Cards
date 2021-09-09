import axios from 'axios';
import { userRefreshToken } from './authActionCreators';
import actionTypes from './actionTypes';

export default function createCard(token:any, refreshtoken:any, activePackCard:string, body:any) {
  console.log('action', activePackCard);
  return async (dispatch:any) => {
    console.log(token);
    if (token) {
      const { data } = await axios.post(`http://192.168.0.103:5000/api/cards/${activePackCard}`, body, {
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
