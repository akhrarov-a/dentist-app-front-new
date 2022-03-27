import { ButtonHTMLAttributes } from 'react';

/**
 * <Button /> props
 */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Theme
   */
  theme?: 'primary' | 'secondary' | 'tertiary';
};

export { ButtonProps };
