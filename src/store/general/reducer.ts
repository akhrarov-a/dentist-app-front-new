import { reducer } from 'redux-chill';
import { GeneralState } from './state';
import { setAuthorized } from './actions';

/**
 * General reducer
 */
const generalReducer = reducer(new GeneralState()).on(
  setAuthorized,
  (state, payload) => {
    state.authorized = payload;
  }
);

export { generalReducer };
