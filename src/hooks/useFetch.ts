import { useEffect, useState } from "react";

export type UseFetchProps<T> = {
  url: string;
  config?: T;
};
export const useFetch = <T>({ url, config }: UseFetchProps<T>) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setIsLoading(true);

      try {
        const response = await fetch(url, config || {});
        const data = await response.json();

        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, [url, config]);

  return {
    data,
    error,
    isLoading,
  };
};
