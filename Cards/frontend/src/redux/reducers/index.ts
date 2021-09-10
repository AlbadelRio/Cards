import { combineReducers } from 'redux';
import auth from './authReducer';
import packardsReducer from './packardsReducer';
import tokensReducer from './tokensReducer';
import subscribeToPackCardReducer from './subscribeReducer';
import currentPackCardReducer from './activePackCard';
import findPackCardReducer from './findPackCardReducer';

export default combineReducers({
  auth,
  packardsReducer,
  tokensReducer,
  subscribeToPackCardReducer,
  currentPackCardReducer,
  findPackCardReducer

});
