import React, { FC } from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { Patient, PatientsList } from './pages';

/**
 * <Patients />
 */
const Patients: FC<RouteComponentProps> = ({ match: { path, url } }) => (
  <Switch>
    <Route path={`${path}/:id`} component={Patient} />
    <Route path={`${path}`} component={PatientsList} />
    <Redirect to={url} />
  </Switch>
);

export { Patients };
