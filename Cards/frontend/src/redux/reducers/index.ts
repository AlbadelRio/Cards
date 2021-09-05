import { combineReducers } from 'redux';
import auth from './authReducer';
import packardsReducer from './packardsReducer';
import tokensReducer from './tokensReducer';

export default combineReducers({
  auth,
  packardsReducer,
  tokensReducer

});
