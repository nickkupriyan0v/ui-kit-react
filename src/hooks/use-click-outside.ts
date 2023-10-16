import { RefObject, useEffect } from 'react';

export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void
) => {
  const handleClick = (event: any) => {
    if (!ref.current?.contains(event.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  });
};
