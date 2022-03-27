import { GeneralSaga } from './general';
import { RouterSaga } from './router';

/**
 * App sagas
 */
const sagas = [new RouterSaga(), new GeneralSaga()];

export { sagas };
