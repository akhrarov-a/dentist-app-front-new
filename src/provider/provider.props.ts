import { Store } from 'redux';
import { History } from 'history';

/**
 * <Provider /> props
 */
type ProviderProps = {
  /**
   * App store
   */
  store: Store;
  /**
   * Router history
   */
  history: History;
};

export { ProviderProps };
