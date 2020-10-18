import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const request = async () => {
    setIsLoading(true);
    const response = await apiFunc();
    setIsLoading(false);

    if (!response.ok) {
      return setHasError(true);
    }

    setHasError(false);
    setData(response.data);
  };

  return { data, hasError, isLoading, request };
};
