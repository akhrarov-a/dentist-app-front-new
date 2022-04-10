import { User } from '@api';

/**
 * General state
 */
class GeneralState {
  /**
   * Authorized
   */
  authorized: boolean;

  /**
   * User
   */
  public user: User | null = null;
}

export { GeneralState };
