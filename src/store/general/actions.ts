import { make } from 'redux-chill';

/**
 * Set authorized
 */
const setAuthorized = make('[general] set authorized').stage(
  (value: boolean) => value
);

export { setAuthorized };
