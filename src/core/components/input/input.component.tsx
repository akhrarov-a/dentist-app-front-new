import React from 'react';
import classNames from 'classnames';
import { hoc } from '../../utils';
import { useInputProps } from './input.props';
import styles from './input.scss';

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
    <div className={styles.container}>
      <label
        className={classNames(styles.label, {
          [styles.labelFocused]: focused,
          [styles.labelHasValue]: hasValue
        })}
      >
        {label}
      </label>
      <input
        className={classNames(styles.input, className, {
          [styles.inputError]: isError || !!error,
          [styles.inputHasErrorMessage]: !!error
        })}
        onFocus={_onFocus}
        onBlur={_onBlur}
        {...props}
      />
      {!!error && (
        <div className={styles.error}>
          <div className={styles.errorSign}>!</div>
          <p className={styles.errorText}>{error}</p>
        </div>
      )}
    </div>
  )
);

export { Input };
