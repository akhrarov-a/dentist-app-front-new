import { GeneralSaga } from './general';
import { RouterSaga } from './router';
import { AuthSaga } from '@auth';

/**
 * App sagas
 */
const sagas = [new RouterSaga(), new AuthSaga(), new GeneralSaga()];

export { sagas };
