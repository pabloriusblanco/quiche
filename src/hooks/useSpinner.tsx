import { useContext, useState } from "react";
import { SpinnerContent, SpinnerContext } from "../context/SpinnerContext";

type Props = {
  children?: React.ReactNode;
};

export const useSpinner = () => {
  return useContext(SpinnerContext);
};

export const SpinnerProvider: React.FC<Props> = ({ children }) => {
  const spinner = useProviderSpinner();
  return (
    <SpinnerContext.Provider value={spinner}>
      {children}
    </SpinnerContext.Provider>
  );
};

const useProviderSpinner = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [spinnerContent, setSpinnerContent] = useState<SpinnerContent>({
    text: "Procesando su solicitud...",
  });

  const startLoading = (content: SpinnerContent) => {
    setIsLoading(true);
    if (content) {
      setSpinnerContent(content);
    }
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return {
    startLoading,
    stopLoading,
    isLoading,
    spinnerContent,
  };
};
