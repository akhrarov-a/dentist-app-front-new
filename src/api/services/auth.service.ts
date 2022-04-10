import { Login, SignUp } from '@api';
import { AxiosRequestConfig } from 'axios';

/**
 * Auth service
 */
class AuthService {
  /**
   * Get axios
   */
  public constructor(
    private create: (
      config: AxiosRequestConfig
    ) => (
      config: AxiosRequestConfig,
      enabled?: boolean,
      disabledToken?: boolean
    ) => any
  ) {}

  /**
   * Api
   */
  public api = this.create({
    withCredentials: true,
    baseURL: '/auth'
  });

  /**
   * Get user
   */
  public getUser = () =>
    this.api({
      method: 'GET',
      url: '/me'
    });

  /**
   * Log in
   */
  public logIn = ({ username, password }: Login) =>
    this.api({
      url: '/signin',
      method: 'POST',
      data: {
        login: username,
        password
      }
    });

  /**
   * Sign up
   */
  public signUp = (data: SignUp) =>
    this.api({
      url: '/signin',
      method: 'POST',
      data
    });
}

export { AuthService };
