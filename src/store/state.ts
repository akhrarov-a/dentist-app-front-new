import { GeneralState } from '@general';
import { RouterState } from '@router';
import { AuthState } from '@auth';

/**
 * App state
 */
type State = {
  general: GeneralState;
  router: RouterState;
  auth: AuthState;
};

export { State };
