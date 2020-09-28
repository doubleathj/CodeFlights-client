import { combineReducers } from 'redux';
import loginModal from './loginModal';
import signupModal from './signupModal'
import isLogin from './isLogin'
import user from './user'
import destinations from './destinations'
export default combineReducers({
  loginModal,
  signupModal,
  isLogin,
  user,
  destinations
});