import { Dispatch, SetStateAction, useContext } from 'react';

import { LoadingContext } from '../contexts/loadingContext';

interface useLoadingData {
  setLoading: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
}

const useLoading = (): useLoadingData => {
  const loadingContext = useContext(LoadingContext);

  const [loading, setLoading] = loadingContext.loadingState;

  if (!loadingContext) {
    throw new Error('useLoading must be used within an LoadingProvider.');
  }

  return { loading, setLoading };
};

export default useLoading;
