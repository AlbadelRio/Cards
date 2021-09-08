import actionTypes from '../actions/actionTypes';

export default function packardsReducer(packCards = [], action:any) {
  let packCardResult:any = packCards;
  switch (action.type) {
    case actionTypes.LOAD_PACKCARDS:
      packCardResult = action.packCards;
      break;
    case actionTypes.CREATE_PACKCARD:
      packCardResult = [...packCardResult, action.newPackCard];
      break;
    default:
      break;
  }
  return packCardResult;
}
