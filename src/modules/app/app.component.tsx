import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { hoc, register } from '@core';
import { useAppProps } from './app.props';

/**
 * Lazy imports
 */
const Auth = register('auth', () => import('@auth'));

/**
 * <App />
 */
const App = hoc(useAppProps, ({ authorized }) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    {authorized ? (
      <Switch>
        <Route path='/dashboard' render={() => <h1>Dashboard</h1>} />
        <Redirect to='/dashboard' />
      </Switch>
    ) : (
      <Switch>
        <Route path='/auth' component={Auth} />
        <Redirect to='/auth' />
      </Switch>
    )}
  </React.Suspense>
));

export { App };
