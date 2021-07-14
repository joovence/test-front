import { useCallback, useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

export const useRequest = (
  method: AxiosRequestConfig["method"],
  url: string,
  immediate = true,
  body?: any
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState([]);

  const execute = useCallback(async () => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios({
          method: method,
          url: `https://tech-test.joovence.dev/api/${url}`,
          data: body
        });

        const data = await response?.data;
        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  useEffect(() => {
    if (immediate) execute();
  }, [url, method, body, immediate, execute]);

  return { isLoading, apiData, execute };
};
