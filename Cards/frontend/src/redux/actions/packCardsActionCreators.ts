import axios from 'axios';

import actionTypes from './actionTypes';

export function loadPackcards() {
  return async (dispatch:any) => {
    const { data } = await axios.get('http://192.168.0.24:5000/api/packCards');
    return dispatch({
      type: actionTypes.LOAD_PACKARDS,
      packCards: data
    });
  };
}

export function getRandomPackCardBySubject(subject:string) {
  return async (dispatch:any) => {
    const { data } = await axios.get(`http://192.168.0.24:5000/api/packCards?subject=${subject}`);
    return dispatch({
      type: actionTypes.GETRANDOM_PACKCARD,
      randomPackCard: data
    });
  };
}
