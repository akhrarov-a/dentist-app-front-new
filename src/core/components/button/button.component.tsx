import React, { FC } from 'react';
import classNames from 'classnames';
import { capitalize } from '../../utils';
import { ButtonProps } from './button.props';
import styles from './button.scss';

/**
 * <Button />
 */
const Button: FC<ButtonProps> = ({
  className,
  fullWidth,
  theme,
  disabled,
  children,
  ...props
}) => (
  <button
    className={classNames(
      styles.button,
      styles[`buttonTheme${capitalize(theme)}`],
      className,
      { [styles.buttonDisabled]: disabled },
      { [styles.buttonFullWidth]: fullWidth }
    )}
    disabled={disabled}
    {...(props as any)}
  >
    {children}
  </button>
);

/**
 * <Button /> default props
 */
Button.defaultProps = {
  theme: 'primary',
  fullWidth: false
};

export { Button };
