import { useEffect, useState } from "react";

export const useDebounce = (value: any, delay: number, cb: Function) => {
  const [debouncedValue, setDebouncedValue] = useState();

  useEffect(() => {
    let timerId: any = null;
    timerId = setTimeout(() => {
      setDebouncedValue(value);
      cb(value);
    }, delay);

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [value, cb, delay]);

  return {
    debouncedValue,
  };
};
