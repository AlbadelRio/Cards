import actionTypes from '../actions/actionTypes';

interface Action {
    type:String,
    packCards:[],
    randomPackCard:[]
}
export default function packardsReducer(packCards = [], action:Action) {
  let packCardResult = packCards;
  switch (action.type) {
    case actionTypes.LOAD_PACKARDS:
      packCardResult = action.packCards;
      break;
    case actionTypes.GETRANDOM_PACKCARD:
      packCardResult = action.randomPackCard;
      break;
    default:
      break;
  }
  return packCardResult;
}
