import actionTypes from '../actions/actionTypes';

export default function subscribeToPackCardReducer(subscrite:boolean = false, action:any) {
  let newSubscrite = subscrite;
  switch (action.type) {
    case actionTypes.ADD_SUBSCRIPTOR_PACKCARD:
      newSubscrite = true;
      break;
    default: newSubscrite = false;
      break;
  }
  return newSubscrite;
}
