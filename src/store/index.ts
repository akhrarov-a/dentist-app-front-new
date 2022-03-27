import { enviroment } from '@env';
import { History } from 'history';
import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore
} from 'redux';
import { run } from 'redux-chill';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { getContext } from './context';
import { reducers } from './reducers';
import { sagas } from './sagas';

/**
 * Custom store methods
 */
declare module 'redux' {
  interface Store {
    register: (name: string, reducer, sagas: any[]) => any;
  }
}

/**
 * Create redux store
 */
const createStore = (history: History) => {
  const sagaMiddleware = createSagaMiddleware({
    onError: error =>
      enviroment.development && console.log(error, 'Saga error occured')
  });
  const applied = applyMiddleware(sagaMiddleware);
  const reducer = combineReducers(reducers);
  const store = reduxCreateStore(
    reducer,
    enviroment.development ? composeWithDevTools(applied) : applied
  );
  const modules = {};
  const context = getContext(history, store);

  run(sagaMiddleware, sagas, context);

  store.register = (name, reducer, sagas) => {
    if (modules[name]) return;

    if (reducer) {
      modules[name] = reducer;

      store.replaceReducer(
        combineReducers({
          ...reducers,
          ...modules
        })
      );
    }

    if (sagas) {
      run(sagaMiddleware, sagas, context);
    }
  };

  return store;
};

export * from './state';
export { createStore };
