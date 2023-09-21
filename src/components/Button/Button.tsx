import React, { CSSProperties, Key, ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  children: ReactNode;
  key?: Key;
  type?: 'primary' | 'secondary';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  style?: CSSProperties;
};

const Button = ({
  children,
  key,
  className,
  style,
  size = 'md',
  onClick,
}: ButtonProps) => {
  const classNameComputed = ['nk-button', className, `size-${size}`]
    .filter(Boolean)
    .join(' ');

  return (
    <button
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
