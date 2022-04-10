import React, { Fragment } from 'react';
import { Button, Error, hoc, Input } from '@core';
import { useLoginProps } from './login.props';

/**
 * <Login />
 */
const Login = hoc(useLoginProps, ({ t, form, isError }) => (
  <Fragment>
    <Input
      name='username'
      type='text'
      label={t('auth.form.username.label')}
      onChange={form.handleChange}
      value={form.values.username}
      isError={form.touched.username && !!form.errors.username}
      error={form.errors.username}
    />
    <Input
      name='password'
      type='password'
      label={t('auth.form.password.label')}
      onChange={form.handleChange}
      value={form.values.password}
      isError={form.touched.password && !!form.errors.password}
      error={form.errors.password}
    />
    <Error isError={isError} error={t('auth.form.invalidCredentials')} />
    <Button onClick={form.submitForm} fullWidth>
      {t('auth.form.submit')}
    </Button>
  </Fragment>
));

export { Login };
