import { InputHTMLAttributes, useRef, useState } from 'react';

/**
 * <Input /> props type
 */
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * Label
   */
  label?: string;

  /**
   * Is error
   */
  isError?: boolean;

  /**
   * Error
   */
  error?: string;
};

/**
 * <Input /> props
 */
const useInputProps = ({ value, onFocus, onBlur }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>();

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

  const onLabelClick = () => {
    inputRef.current.focus();
  };

  return {
    inputRef,
    focused,
    hasValue,
    _onFocus,
    _onBlur,
    onLabelClick
  };
};

export { useInputProps };
