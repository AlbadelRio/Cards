import actionTypes from '../actions/actionTypes';

export default function authReducer(
  authInitialState:any = false,
  action:any
) {
  let nextAuthState = authInitialState;

  switch (action.type) {
    case actionTypes.AUTH_LOGIN:

      nextAuthState = {
        isValidPassword: true,
        user: action.user
      };
      break;

    case actionTypes.AUTH_LOGOUT:
      nextAuthState = authInitialState;
      break;

    default:
      break;
  }
  return nextAuthState;
}
