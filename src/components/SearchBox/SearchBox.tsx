import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import Input from '../Input';
import './SearchBox.css';
import { useDebounce } from '../../hooks/use-debounce';
import { useClickOutside } from '../../hooks/use-click-outside';
import Dropdown from '../Dropdown';

type Props = {
  callback: (query: string) => any;
  itemCallback: any;
};

const SearchBox = ({ callback, itemCallback }: Props) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => {
    setShowList(false);
  });

  const [showList, setShowList] = useState(false);
  const [loader, setLoader] = useState(false);
  const [items, setItems] = useState<{ title: string; value: string }[]>([]);

  useEffect(() => {
    fetch(debouncedQuery);
  }, [debouncedQuery]);

  const fetch = async (value: any) => {
    if (!value) {
      setShowList(false);
      setItems([]);
      return;
    }
    setLoader(true);
    const data = await callback(value);
    setItems(data);
    setShowList(true);
    setLoader(false);
  };

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div style={{ width: 200, position: 'relative' }} ref={ref}>
      <Input onChange={handleChange} showLoader={loader} value={query}></Input>
      {showList && (
        <Dropdown
          items={items}
          callback={item => {
            itemCallback(item);
            setShowList(false);
          }}
        ></Dropdown>
      )}
    </div>
  );
};

export default SearchBox;
