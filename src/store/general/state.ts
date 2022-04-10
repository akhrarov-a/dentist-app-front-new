import { User } from '@api';

/**
 * General state
 */
class GeneralState {
  /**
   * Authorized
   */
  authorized: boolean = !!sessionStorage.getItem('authorized') ?? false;

  /**
   * User
   */
  public user: User | null = null;
}

export { GeneralState };
