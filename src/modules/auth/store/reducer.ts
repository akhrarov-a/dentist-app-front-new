import { reducer } from 'redux-chill';
import { startUp } from '@general/actions';
import { AuthState } from './state';
import { logIn, logOut } from './actions';

/**
 * Auth reducer
 */
const authReducer = reducer(new AuthState())
  .on([startUp.success, logIn.success], state => {
    state.error = null;
  })
  .on(logIn, state => {
    state.error = null;
  })
  .on(logIn.fail, (state, error) => {
    state.error = error;
  })
  .on(logOut, state => {
    state.error = null;
  });

export { authReducer };
