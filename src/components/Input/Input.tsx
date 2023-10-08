import React, { ChangeEvent, useEffect, useState } from 'react';
import './Input.css';
import Loader from '../Loader/Loader';

type InputProps = {
  className?: string;
  placeholder?: string;
  type?: 'text' | 'password';
  size?: 'sm' | 'md' | 'lg';
  clear?: boolean;
  value?: string;
  disabled?: boolean;
  name?: string;
  showLoader?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  className,
  placeholder,
  clear,
  value,
  size = 'md',
  type = 'text',
  disabled = false,
  name,
  showLoader,
  onChange,
}: InputProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [data, setData] = useState<string | undefined>(value);

  useEffect(() => {
    setData(value);
  }, [value]);

  const computedClass = [
    'nk-input-box',
    className,
    focused ? 'focused' : null,
    `input-size-${size}`,
    disabled ? 'disabled' : null,
  ]
    .filter(Boolean)
    .join(' ');

  const change: (event: ChangeEvent<HTMLInputElement>) => void = event => {
    setData(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={computedClass}>
      <input
        className="nk-input"
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        value={data}
        name={name}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={e => change(e)}
      ></input>
      {clear && data && (
        <span className="close-action" onClick={() => setData('')}>
          ✕
        </span>
      )}
      {showLoader && <Loader size="sm" className="inputLoader" />}
    </div>
  );
};

export default Input;
