import { Location } from 'history';

/**
 * Router state
 */
class RouterState {
  /**
   * Previous
   */
  previous: Location = null;

  /**
   * Location
   */
  location: Location = null;
}

export { RouterState };
