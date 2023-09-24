import React, { CSSProperties, Key, ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  children: ReactNode;
  key?: Key;
  type?: 'primary' | 'secondary';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled: boolean;
  onClick?: () => void;
  style?: CSSProperties;
};

const Button = ({
  children,
  key,
  className,
  style,
  size = 'md',
  disabled = false,
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
