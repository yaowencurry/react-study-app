import { combineReducers } from 'redux';
import user from './modules/user';
import counter from './modules/counter';
import music from './modules/music';
import { loginState } from "./modules/user";

const rootReducer = combineReducers({
  user,
  counter,
  ...music,
  loginState
})
export default rootReducer