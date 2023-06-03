import { createContext } from "react";

export type SpinnerContent = {
  text?: React.ReactNode;
};

export interface SpinnerContextType {
  isLoading: boolean;
  startLoading: (content: SpinnerContent) => void;
  stopLoading: () => void;
  spinnerContent: SpinnerContent;
}

export const SpinnerContext = createContext<SpinnerContextType>({
  isLoading: false,
  startLoading: () => undefined,
  stopLoading: () => undefined,
  spinnerContent: {},
});
