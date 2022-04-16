import React from 'react';
import classNames from 'classnames';
import { hoc } from '../../utils';
import { Error } from '../error';
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
    inputRef,
    onBlur,
    onFocus,
    _onBlur,
    _onFocus,
    onLabelClick,
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
        onClick={onLabelClick}
      >
        {label}
      </label>
      <input
        ref={inputRef}
        className={classNames(styles.input, className, {
          [styles.inputHasValue]: hasValue,
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
