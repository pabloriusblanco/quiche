import { useState } from "react";

const useSpinner = () => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return {
    startLoading,
    stopLoading,
    isLoading,
  };
};

export default useSpinner;
