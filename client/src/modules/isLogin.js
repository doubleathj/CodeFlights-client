import { createAction, handleActions } from 'redux-actions';

const ISLOGIN = 'loginStatus';

export const loginStatus = createAction(ISLOGIN)

const initialState = {
  loginStatus: false
};

export default handleActions({
  [ISLOGIN] : ( { loginStatus } )=> ({ loginStatus: !loginStatus })
  } , initialState);