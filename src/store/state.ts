import { GeneralState } from '@general';
import { RouterState } from '@router';
import { AuthState } from '@auth/store';

/**
 * App state
 */
type State = {
  general: GeneralState;
  router: RouterState;
  auth: AuthState;
};

export { State };
