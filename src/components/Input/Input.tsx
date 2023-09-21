import React, { useState } from 'react';
import './Input.css';

type InputProps = {
  className?: string;
  placeholder?: string;
  type?: 'text' | 'password';
  size?: 'sm' | 'md' | 'lg';
  close?: boolean;
  onChange?: (value: string) => void;
};

const Input = ({
  className,
  placeholder,
  close,
  size = 'md',
  type = 'text',
  onChange,
}: InputProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const computedClass = [
    'nk-input-box',
    className,
    focused ? 'focused' : null,
    `size-${size}`,
  ]
    .filter(Boolean)
    .join(' ');

  const change: (value: string) => void = value => {
    setValue(value);
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
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={e => change(e.target.value)}
      ></input>
      {close && value && (
        <span className="close-action" onClick={() => change('')}>
          ✕
        </span>
      )}
    </div>
  );
};

export default Input;
