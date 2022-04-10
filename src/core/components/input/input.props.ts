import { InputHTMLAttributes, useState } from 'react';

/**
 * <Input /> props type
 */
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * Label
   */
  label?: string;
};

/**
 * <Input /> props
 */
const useInputProps = ({ value, onFocus, onBlur }: InputProps) => {
  const [focused, setFocused] = useState(false);

  const hasValue = !!value;

  const _onFocus = event => {
    setFocused(true);

    onFocus?.(event);
  };

  const _onBlur = event => {
    setFocused(false);

    onBlur?.(event);
  };

  return {
    focused,
    hasValue,
    _onFocus,
    _onBlur
  };
};

export { useInputProps };
