import React from 'react';
import { Button, hoc, Input } from '@core';
import { useLoginProps } from './login.props';
import styles from './login.scss';
import { Error } from '@core/components/error';

/**
 * <Login />
 */
const Login = hoc(useLoginProps, ({ t, form, isError }) => (
  <div className={styles.container}>
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
    <Button onClick={form.submitForm}>{t('auth.form.submit')}</Button>
  </div>
));

export { Login };
