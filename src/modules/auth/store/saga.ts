import moment from 'moment';
import { call, put } from 'redux-saga/effects';
import { Payload, Saga } from 'redux-chill';
import { StoreContext } from '@store';
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
        data: { accessToken, expiresIn }
      } = yield call(auth.logIn, { username, password });

      const expireDate = moment()
        .add(expiresIn, 'seconds')
        .format();

      yield call([localStorage, localStorage.setItem], 'idToken', accessToken);
      yield call(
        [localStorage, localStorage.setItem],
        'expireDate',
        expireDate
      );

      yield put(logIn.success());
      yield put(getUser());
    } catch (err) {
      yield put(logIn.fail('Invalid Credentials'));
    }
  }

  /**
   * Log out
   */
  @Saga(logOut)
  public *logOut() {
    localStorage.removeItem('idToken');
    localStorage.removeItem('expireDate');
  }
}

export { AuthSaga };
