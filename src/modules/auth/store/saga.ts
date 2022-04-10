import { call, put } from 'redux-saga/effects';
import { Payload, Saga } from 'redux-chill';
import { StoreContext } from '@store';
import { deleteCookie, setCookie } from '@core';
import { getUser } from '@general/actions';
import { logIn, logOut } from './actions';

/**
 * Auth saga
 */
class AuthSaga {
  /**
   * Log in
   */
  @Saga(logIn)
  public *logIn(
    { username, password }: Payload<typeof logIn>,
    { auth }: StoreContext
  ) {
    try {
      const {
        data: { accessToken, expires }
      } = yield call(auth.logIn, { username, password });

      yield call(setCookie, {
        name: 'idToken',
        value: accessToken,
        options: {
          secure: true,
          'max-age': expires
        }
      });

      yield put(logIn.success());
      yield put(getUser());
    } catch (error) {
      console.log(error);

      yield put(logIn.fail());
    }
  }

  /**
   * Log out
   */
  @Saga(logOut)
  public *logOut() {
    yield call(deleteCookie, 'idToken');
    sessionStorage.removeItem('authorized');
  }
}

export { AuthSaga };
