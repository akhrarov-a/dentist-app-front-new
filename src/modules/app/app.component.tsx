import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { hoc, LanguageDropdown, register } from '@core';
import { useAppProps } from './app.props';

/**
 * Lazy imports
 */
const Auth = register('auth', () => import('@auth'));
const Dashboard = register('dashboard', () => import('@dashboard'));
const Patients = register('patients', () => import('@patients'));

/**
 * <App />
 */
const App = hoc(useAppProps, ({ authorized }) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <LanguageDropdown />
    {authorized ? (
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/patients' component={Patients} />
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
