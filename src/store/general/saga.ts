import { call, put } from 'redux-saga/effects';
import { Payload, Saga } from 'redux-chill';
import moment from 'moment';
import { StoreContext } from '@store';
import { getUser, startUp } from './actions';

/**
 * General saga
 */
class GeneralSaga {
  /**
   * Start up
   */
  @Saga(startUp)
  public *start() {
    const expireDate: any = localStorage.getItem('expireDate');

    if (!expireDate) return;

    const isAfter = moment().isAfter(expireDate);

    if (isAfter) return;

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
}

export { GeneralSaga };
