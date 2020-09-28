import {
  createAction,
  handleActions
} from 'redux-actions';

const GETPLAN = 'getPlan';
const LOADED = 'loaded'

export const getPlan = createAction(GETPLAN)
export const loaded = createAction(LOADED)

const initialState = {
  flights: [],
  blogPostings: [],
  userPostings: [],
  load : false
};

export default handleActions({
  [GETPLAN]: (state, action) => ({
    flights: action.payload.flights,
    blogPostings: action.payload.blogPostings,
    userPostings: action.payload.userPostings,
    load : state.load
  }),
  [LOADED] : (state, action) => ({ 
    flights: state.flights,
    blogPostings: state.blogPostings,
    userPostings: state.userPostings,
    load : !state.load
  })
}, initialState);