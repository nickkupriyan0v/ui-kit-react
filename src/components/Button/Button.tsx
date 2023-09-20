import React, { Key, ReactNode } from 'react';
import './Button.css';

type ButtonProps = {
  children: ReactNode;
  key?: Key;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, key, className, onClick }: ButtonProps) => {
  const classNameComputed = className ? className + 'button' : 'button';

  return (
    <button key={key} className={classNameComputed} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
