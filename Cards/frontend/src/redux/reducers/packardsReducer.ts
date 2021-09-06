import actionTypes from '../actions/actionTypes';

type Action = {
    type:String,
    packCards:[],
    randomPackCard:[],
    message:string
}
export default function packardsReducer(packCards:any, action:Action) {
  let packCardResult = packCards;
  switch (action.type) {
    case actionTypes.LOAD_PACKCARDS:
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
