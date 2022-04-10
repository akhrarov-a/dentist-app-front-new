import { make } from 'redux-chill';
import { Login } from '@api';

/**
 * Log in
 * */
const logIn = make('[auth] sign in')
  .stage((payload: Login) => payload)
  .stage('success')
  .stage('fail');

/**
 * Log out
 */
const logOut = make('[auth] log out');

export { logOut, logIn };
