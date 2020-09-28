import { createAction, handleActions } from 'redux-actions';

const USERINFO = 'userinfo';

export const userinfo = createAction(USERINFO, (data) => data);

const initialState = {
  userinfo: {},
};

export default handleActions(
  {
    [USERINFO]: (state, action) => state.set('userinfo', action.payload),
  },
  initialState
);
