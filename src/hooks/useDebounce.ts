import { DebouncedFunc } from 'lodash';
import { useEffect, useState } from 'react';
import debounce from '../util/debounce';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type useDebounceProps = (...args: any[]) => any;

const useDebounce = (
  callback: useDebounceProps,
  time = 1000,
): useDebounceProps => {
  const [debounceFn, setDebounceFn] = useState<DebouncedFunc<useDebounceProps>>(
    debounce(callback, time),
  );

  useEffect(() => {
    setDebounceFn((prevDebounc: DebouncedFunc<useDebounceProps>) => {
      if (prevDebounc) {
        prevDebounc.cancel();
      }

      return debounce(callback, time);
    });
  }, [callback, time]);

  return debounceFn;
};

export default useDebounce;
