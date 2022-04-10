import { reducer } from 'redux-chill';
import { logIn, logOut } from '@auth/store';
import { GeneralState } from './state';
import { getUser } from './actions';

/**
 * General reducer
 */
const generalReducer = reducer(new GeneralState())
  .on(logIn.success, state => {
    state.authorized = true;
  })
  .on([logIn.fail, logOut], state => {
    state.authorized = false;
    state.user = null;
  })
  .on(getUser.success, (state, payload) => {
    state.user = payload;
  });

export { generalReducer };
