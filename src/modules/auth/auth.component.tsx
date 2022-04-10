import React, { FC } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { AuthLayout } from './components';
import { Login } from './pages';

/**
 * <Auth />
 */
const Auth: FC<RouteComponentProps> = ({ match: { path, url } }) => (
  <AuthLayout>
    <Switch>
      <Route path={`${path}/login`} component={Login} />
      <Redirect to={`${url}/login`} />
    </Switch>
  </AuthLayout>
);

export { Auth };
