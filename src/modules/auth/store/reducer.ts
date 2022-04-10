import { reducer } from 'redux-chill';
import { startUp } from '@general/actions';
import { AuthState } from './state';
import { logIn, logOut } from './actions';

/**
 * Auth reducer
 */
const authReducer = reducer(new AuthState())
  .on([logIn, logOut, startUp.success, logIn.success], state => {
    state.isError = false;
  })
  .on(logIn.fail, state => {
    state.isError = true;
  });

export { authReducer };
