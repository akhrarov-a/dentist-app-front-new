import { GeneralState } from './general';
import { RouterState } from './router';

/**
 * App state
 */
type State = {
  general: GeneralState;
  router: RouterState;
};

export { State };
