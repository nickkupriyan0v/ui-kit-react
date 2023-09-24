import React, { useState } from 'react';
import './Input.css';

type InputProps = {
  className?: string;
  placeholder?: string;
  type?: 'text' | 'password';
  size?: 'sm' | 'md' | 'lg';
  close?: boolean;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
};

const Input = ({
  className,
  placeholder,
  close,
  value,
  size = 'md',
  type = 'text',
  disabled = false,
  onChange,
}: InputProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [data, setData] = useState<string | undefined>(value);
  const computedClass = [
    'nk-input-box',
    className,
    focused ? 'focused' : null,
    `size-${size}`,
    disabled ? 'disabled' : null,
  ]
    .filter(Boolean)
    .join(' ');

  const change: (value: string) => void = value => {
    setData(value);
    if (onChange) {
      onChange(value);
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
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={e => change(e.target.value)}
      ></input>
      {close && data && (
        <span className="close-action" onClick={() => change('')}>
          ✕
        </span>
      )}
    </div>
  );
};

export default Input;
