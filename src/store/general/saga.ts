import { call, put } from 'redux-saga/effects';
import { Payload, Saga } from 'redux-chill';
import { StoreContext } from '@store';
import { getCookie } from '@core';
import i18n from 'i18next';
import { logOut } from '@auth/store';
import { getUser, setLanguage, startUp } from './actions';

/**
 * General saga
 */
class GeneralSaga {
  /**
   * Start up
   */
  @Saga(startUp)
  public *start() {
    const token = getCookie('idToken');

    if (!token) {
      yield put(logOut());

      return;
    }

    yield put(startUp.success());
    yield put(getUser());
  }

  /**
   * Get user
   */
  @Saga(getUser)
  public *getUser(_: Payload<typeof getUser>, { auth }: StoreContext) {
    try {
      const {
        data: { user }
      } = yield call(auth.getUser);

      yield put(getUser.success(user));
    } catch (err) {
      console.log(err.message);
    } finally {
      yield put(getUser.finish());
    }
  }

  /**
   * Set language
   */
  @Saga(setLanguage)
  public *setLanguage(language: Payload<typeof getUser>) {
    try {
      yield i18n.changeLanguage(language);
    } catch (err) {
      console.log(err.message);
    }
  }
}

export { GeneralSaga };
