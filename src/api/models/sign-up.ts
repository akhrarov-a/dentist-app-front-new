import { UserRole } from './user';

/**
 * Sign up
 */
type SignUp = {
  /**
   * Username
   */
  username: string;

  /**
   * Email
   */
  email: string;

  /**
   * Password
   */
  password: string;

  /**
   * Firstname
   */
  firstname: string;

  /**
   * Lastname
   */
  lastname: string;

  /**
   * Phone number
   */
  phoneNumber: string;

  /**
   * Role
   */
  role: UserRole;
};

export { SignUp };
