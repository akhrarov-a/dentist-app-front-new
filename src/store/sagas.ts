import { GeneralSaga } from '@general';
import { RouterSaga } from '@router';
import { AuthSaga } from '@auth/store';

/**
 * App sagas
 */
const sagas = [new RouterSaga(), new GeneralSaga(), new AuthSaga()];

export { sagas };
