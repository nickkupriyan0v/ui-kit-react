import React, { CSSProperties, Key, ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  key?: Key;
  disabled?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
};

const Button = ({
  children,
  type = 'button',
  size = 'md',
  className,
  key,
  disabled = false,
  style,
  onClick,
}: ButtonProps) => {
  const classNameComputed = [
    'nk-button',
    className,
    `size-${size}`,
    disabled ? 'disabled' : null,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      disabled={disabled}
      style={style}
      key={key}
      className={classNameComputed}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
