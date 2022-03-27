import { reducer } from 'redux-chill';
import { RouterState } from './state';
import { setLocation } from './actions';

/**
 * Router reducer
 */
const routerReducer = reducer(new RouterState()).on(
  setLocation,
  (state, location) => {
    state.previous = state.location;
    state.location = location;
  }
);

export { routerReducer };
