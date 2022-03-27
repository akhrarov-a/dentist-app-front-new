import './styles/global.scss';
import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { createStore } from '@store';
import { App } from '@app';
import { Provider } from './provider';
import { init } from './localization';

/**
 * History
 */
const history = createBrowserHistory();

/**
 * Store
 */
const store = createStore(history);

/**
 * Setup
 */
const setup = async () => {
  await init();

  render(
    <Provider store={store} history={history}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
};

/**
 * Start
 */
setup();
