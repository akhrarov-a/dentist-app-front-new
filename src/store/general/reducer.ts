import { reducer } from 'redux-chill';
import { logIn, logOut } from '@auth/store';
import { GeneralState } from './state';
import { getUser, startUp } from './actions';

/**
 * General reducer
 */
const generalReducer = reducer(new GeneralState())
  .on([startUp.success, logIn.success], state => {
    state.authorized = true;

    sessionStorage.setItem('authorized', 'true');
  })
  .on([logIn.fail, logOut], state => {
    state.authorized = false;
    state.user = null;

    sessionStorage.removeItem('authorized');
  })
  .on(getUser.success, (state, payload) => {
    state.user = payload;
  });

export { generalReducer };
