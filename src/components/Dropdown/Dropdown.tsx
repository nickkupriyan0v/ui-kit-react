import React, { FC } from 'react';
import './Dropdown.css';

type Props<T> = {
  items: T[];
  callback: (item: T) => void;
};

const Dropdown: FC<Props<object>> = ({ items, callback }) => {
  return (
    <div className="nkDropdown">
      {items.map((item: any) => (
        <div
          className="nkDropdownItem"
          key={item.value}
          onClick={() => callback(item)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
