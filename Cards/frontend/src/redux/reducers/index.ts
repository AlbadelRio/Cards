import { combineReducers } from 'redux';
import auth from './authReducer';
import packardsReducer from './packardsReducer';
import tokensReducer from './tokensReducer';
import subscribeToPackCardReducer from './subscribeReducer';
import currentPackCardReducer from './activePackCard';
import findPackCardReducer from './findPackCardReducer';
import cardsReducer from './cardsReducers';
import randomPackCardReducer from './randomReducer';

export default combineReducers({
  auth,
  packardsReducer,
  tokensReducer,
  subscribeToPackCardReducer,
  currentPackCardReducer,
  findPackCardReducer,
  cardsReducer,
  randomPackCardReducer

});
