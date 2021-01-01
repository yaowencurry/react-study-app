import { combineReducers } from 'redux';
import user from './modules/user';
import counter from './modules/counter';
import { loginState } from "./modules/user";

const rootReducer = combineReducers({
  user,
  counter,
  loginState
})
export default rootReducer