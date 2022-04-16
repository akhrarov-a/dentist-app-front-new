import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { hoc, register } from '@core';
import { Layout } from './components';
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
    {authorized ? (
      <Layout>
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/patients' component={Patients} />
          <Redirect to='/dashboard' />
        </Switch>
      </Layout>
    ) : (
      <Switch>
        <Route path='/auth' component={Auth} />
        <Redirect to='/auth' />
      </Switch>
    )}
  </React.Suspense>
));

export { App };
