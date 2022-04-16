/**
 * User role
 */
enum UserRole {
  ADMIN = 'ADMIN',
  DENTIST = 'DENTIST',
  PATIENT = 'PATIENT'
}

/**
 * User
 */
type User = {
  /**
   * Id
   */
  id: number;

  /**
   * Avatar
   */
  avatar: string;

  /**
   * Username
   */
  username: string;

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
   * Email
   */
  email: string;

  /**
   * Role
   */
  role: UserRole;
};

export { User, UserRole };
