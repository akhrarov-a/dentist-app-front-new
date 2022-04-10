import React, { FC } from 'react';
import classNames from 'classnames';
import { ErrorProps } from './error.props';
import styles from './error.scss';

/**
 * <Error />
 */
const Error: FC<ErrorProps> = ({ className, isError, error }) =>
  isError && (
    <div className={classNames(styles.error, className)}>
      <div className={styles.errorSign}>!</div>
      <p>{error}</p>
    </div>
  );

export { Error };
