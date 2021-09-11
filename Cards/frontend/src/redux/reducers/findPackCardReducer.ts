import actionTypes from '../actions/actionTypes';

export default function findPackCardReducer(packCards = [], action:any) {
  let currentPackCard:any = packCards;
  switch (action.type) {
    case actionTypes.FIND_PACKCARD:
      currentPackCard = action.newPackard;
      break;
    default:
      break;
  }
  return currentPackCard;
}
