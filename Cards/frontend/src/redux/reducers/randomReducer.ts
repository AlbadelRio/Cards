import actionTypes from '../actions/actionTypes';

export default function randomPackCardReducer(random = [], action:any) {
  let newRandom = random;
  switch (action.type) {
    case actionTypes.GETRANDOM_PACKCARD:
      newRandom = action.random;
      break;
    default:
      break;
  }

  return newRandom;
}
