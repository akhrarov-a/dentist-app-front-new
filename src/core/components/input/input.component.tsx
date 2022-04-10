import React from 'react';
import classNames from 'classnames';
import { hoc } from '../../utils';
import { useInputProps } from './input.props';
import styles from './input.scss';
import { Error } from '@core/components/error';

/**
 * <Input />
 */
const Input = hoc(
  useInputProps,
  ({
    className,
    label,
    isError,
    error,
    focused,
    hasValue,
    _onBlur,
    _onFocus,
    ...props
  }) => (
    <div
      className={classNames(styles.container, {
        [styles.containerWithError]: !!error
      })}
    >
      <label
        className={classNames(styles.label, {
          [styles.labelFocused]: focused,
          [styles.labelHasValue]: hasValue,
          [styles.labelError]: (isError || !!error) && !focused
        })}
      >
        {label}
      </label>
      <input
        className={classNames(styles.input, className, {
          [styles.inputError]: isError || !!error
        })}
        onFocus={_onFocus}
        onBlur={_onBlur}
        {...props}
      />
      <Error className={styles.error} isError={!!error} error={error} />
    </div>
  )
);

export { Input };
