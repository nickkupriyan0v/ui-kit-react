import React, { CSSProperties, ReactNode } from 'react';
import './Loader.css';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const Loader = ({ size = 'md', children, className, style }: Props) => {
  const classNames = ['loader', `loader-size-${size}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
};

export default Loader;
