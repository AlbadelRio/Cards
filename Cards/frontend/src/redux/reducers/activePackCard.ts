import actionTypes from '../actions/actionTypes';

export default function currentPackCardReducer(packCards = [], action:any) {
  let currentPackCard:any = packCards;
  switch (action.type) {
    case actionTypes.CREATE_PACKCARD:
      currentPackCard = action.newPackard;
      break;
    default:
      break;
  }
  return currentPackCard;
}
