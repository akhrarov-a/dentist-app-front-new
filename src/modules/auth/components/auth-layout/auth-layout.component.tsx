import React, { FC } from 'react';
import styles from './auth-layout.scss';

/**
 * <AuthLayout />
 */
const AuthLayout: FC = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export { AuthLayout };
