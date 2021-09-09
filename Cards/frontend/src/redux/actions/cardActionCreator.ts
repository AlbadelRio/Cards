import axios from 'axios';
import { userRefreshToken } from './authActionCreators';
import actionTypes from './actionTypes';

export default function createCard(token:any, refreshtoken:any, body:any) {
  return async (dispatch:any) => {
    if (token) {
      const { data } = await axios.post('http://192.168.0.103:5000/api/cards', body, {
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
