import { ButtonHTMLAttributes } from 'react';

/**
 * <Button /> props
 */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Theme
   */
  theme?: 'primary' | 'secondary' | 'tertiary';

  /**
   * Full width
   */
  fullWidth?: boolean;
};

export { ButtonProps };
