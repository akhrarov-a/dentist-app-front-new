import { routerReducer } from './router';
import { generalReducer } from './general';

/**
 * App reducers
 */
const reducers = {
  router: routerReducer,
  general: generalReducer
};

export { reducers };
