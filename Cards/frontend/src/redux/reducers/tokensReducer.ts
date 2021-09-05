/* eslint-disable no-unused-vars */
import actionTypes from '../actions/actionTypes';

type Action = {
    type:string,
    data:any
}

type Token = {
    token?: string,
    refreshToken?:string
}

export default function tokensReducer(tokens = {}, action:any) {
  console.log('action tokensReducer');
  console.log(action.type);
  console.log(action.user);
  let newTokens:any = tokens;

  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      newTokens = {
        token: action.user.token,
        refreshToken: action.user.refreshToken
      };
      console.log(newTokens);
      console.log(action.user.refreshToken);
      break;

    case actionTypes.REFRESH_TOKEN:
      newTokens = {
        ...newTokens,
        token: action.data.token
      };
      break;

    default:
      break;
  }
  console.log(`newtokens:${{ newTokens }}`);
  return newTokens;
}
