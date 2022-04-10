import { make } from 'redux-chill';
import { User } from '@api';

/**
 * Start up
 */
const startUp = make('[general] start up')
  .stage('success')
  .stage('fail');

/**
 * Get user
 */
const getUser = make('[general] get user')
  .stage('success', (payload: User) => payload)
  .stage('finish');

export { startUp, getUser };
