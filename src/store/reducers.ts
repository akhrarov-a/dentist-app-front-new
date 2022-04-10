import { routerReducer } from '@router';
import { generalReducer } from '@general';
import { authReducer } from '@auth/store';

/**
 * App reducers
 */
const reducers = {
  router: routerReducer,
  general: generalReducer,
  auth: authReducer
};

export { reducers };
