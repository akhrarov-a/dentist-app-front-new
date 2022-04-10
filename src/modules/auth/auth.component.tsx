import React, { FC } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';

/**
 * <Auth />
 */
const Auth: FC<RouteComponentProps> = ({ match: { path, url } }) => (
  <Switch>
    <Route path={`${path}/login`} render={() => <h1>Login</h1>} />
    <Redirect to={`${url}/login`} />
  </Switch>
);

export { Auth };
