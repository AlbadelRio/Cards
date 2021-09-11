import actionTypes from '../actions/actionTypes';

export default function CardReducer(card = {}, action:any) {
  let newCard:any = card;
  switch (action.type) {
    case actionTypes.CREATE_CARD:
      newCard = action.newCard;
      break;
    case actionTypes.UPDATE_CARD:
      newCard = action.newCard;
      break;

    default:
      break;
  }
  return newCard;
}
