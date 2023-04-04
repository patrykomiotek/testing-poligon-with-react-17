import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

type Status<M> = {
  data: M;
  isLoading: false;
  isError: false;
} | {
  data: undefined;
  isLoading: true;
  isError: false;
} | {
  data: undefined;
  isLoading: false;
  isError: true;
}

export const useApi = <T>(callback: () => Promise<AxiosResponse<T>>) => {
  const [state, setState] = useState<Status<T>>({
    data: undefined,
    isLoading: true,
    isError: false,
  });

  const loadData = async () => {
    // API request
    try {
      const response = await callback();
      setState({
        data: response.data,
        isLoading: false,
        isError: false,
      });
    } catch (error) {
      setState({
        data: undefined,
        isLoading: false,
        isError: true,
      });
    }
  }

  useEffect(() => {
    loadData();
    // set state
  }, []);

  return state;
}