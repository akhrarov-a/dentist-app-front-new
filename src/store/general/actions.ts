import { make } from 'redux-chill';
import { Languages, User } from '@api';

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

/**
 * Set language
 */
const setLanguage = make('[general] set language').stage(
  (language: Languages) => language
);

export { startUp, getUser, setLanguage };
