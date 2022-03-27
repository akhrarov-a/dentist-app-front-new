import { reducer } from 'redux-chill';
import { GeneralState } from './state';

/**
 * General reducer
 */
const generalReducer = reducer(new GeneralState());

export { generalReducer };
