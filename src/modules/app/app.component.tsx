import React from 'react';
import { Switch } from 'react-router-dom';
import { hoc } from '@core';
import { useAppProps } from './app.props';

/**
 * Lazy imports
 */
// const Auth = register('auth', () => import('@auth'));

/**
 * <App />
 */
const App = hoc(useAppProps, () => (
  <div>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>{/*<Route path='/auth' component={Auth} />*/}</Switch>
    </React.Suspense>
  </div>
));

export { App };
