import { AxiosRequestConfig } from 'axios';

/**
 * Test service
 */
class TestService {
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
    baseURL: '', // TODO: Set base url
    headers: {
      Authorization: '' // TODO: Set authorization header
    }
  });

  /**
   * Get test
   */
  public getTest = () =>
    this.api({
      url: '/test'
    });
}

export { TestService };
