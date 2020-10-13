import { useCallback, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type useDebounceProps = (...args: any[]) => any;

const useDebounce = (
  callback: useDebounceProps,
  time = 1000,
): useDebounceProps => {
  const [timer, setTimer] = useState<number | undefined>();

  return useCallback(
    (...args) => {
      clearTimeout(timer);
      setTimer(setTimeout(() => callback(...args), time));
    },
    [callback, time, timer],
  );
};

export default useDebounce;
