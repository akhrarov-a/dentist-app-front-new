import React, { FC } from 'react';
import { LanguageDropdown } from '@core';
import styles from './auth-layout.scss';

/**
 * <AuthLayout />
 */
const AuthLayout: FC = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.languages}>
      <LanguageDropdown />
    </div>
    <div className={styles.content}>
      <div className={styles.header}>
        <img src={require('img/logo.svg')} alt='Logo' />
        <p>Stomatolog.uz</p>
      </div>
      {children}
    </div>
  </div>
);

export { AuthLayout };
