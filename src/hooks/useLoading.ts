import {
  Dispatch,
  SetStateAction,
  useContext,
  useCallback,
  useMemo,
} from 'react';

import { LoadingContext } from '../contexts/loadingContext';

interface useLoadingData {
  setLoading: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
}

const useLoading = (): useLoadingData => {
  const loadingContext = useContext(LoadingContext);

  const [loadingState, setLoadingState] = loadingContext.loadingState;

  const loading = useMemo(() => !!loadingState, [loadingState]);

  const setLoading = useCallback(
    (loadingValue) => {
      setLoadingState((prevValue: number) => {
        if (loadingValue) {
          return prevValue + 1;
        }
        return prevValue - 1 < 0 ? 0 : prevValue - 1;
      });
    },
    [setLoadingState],
  );

  if (!loadingContext) {
    throw new Error('useLoading must be used within an LoadingProvider.');
  }

  return { loading, setLoading };
};

export default useLoading;
