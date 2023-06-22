import { useContext, useState } from "react";
import {
  ResultModalContent,
  ResultModalContext,
  ResultModalType,
} from "../context/ResultModalsContext";

type Props = {
  children?: React.ReactNode;
};

export const useResultModal = () => {
  return useContext(ResultModalContext);
};

export const ResultModalProvider: React.FC<Props> = ({ children }) => {
  const resultModal = useProviderResultModal();
  return (
    <ResultModalContext.Provider value={resultModal}>
      {children}
    </ResultModalContext.Provider>
  );
};

const useProviderResultModal = () => {
  const [showingResultModal, setShowingResultModal] = useState(false);
  const [content, setContent] = useState<ResultModalContent>({});
  const [modalType, setModalType] = useState<ResultModalType>("success");

  const showResultModal = (
    type: ResultModalType,
    content: ResultModalContent
  ) => {
    setModalType(type);
    setShowingResultModal(true);
    setContent(content);
  };

  const hideResultModal = () => {
    setShowingResultModal(false);
    setContent({});
  };

  return {
    showingResultModal,
    showResultModal,
    hideResultModal,
    content,
    modalType,
  };
};
