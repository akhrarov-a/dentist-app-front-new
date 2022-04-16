import { Languages, User } from '@api';

/**
 * General state
 */
class GeneralState {
  /**
   * Authorized
   */
  // authorized: boolean = !!sessionStorage.getItem('authorized') ?? false;
  public authorized = false;

  /**
   * User
   */
  public user: User | null = null;

  /**
   * Language
   */
  public language: Languages = Languages.EN;
}

export { GeneralState };
