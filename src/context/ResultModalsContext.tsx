import { createContext } from "react";

export interface ResultModalContent {
  title?: React.ReactNode;
  message?: React.ReactNode;
  confirmText?: React.ReactNode;
  cancelText?: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  showIcon?: boolean;
  allowClose?: boolean;
}

export type ResultModalType = "success" | "danger" | "warning" | "info";

export interface ResultModalsContextType {
  showingResultModal: boolean;
  content: ResultModalContent;
  showResultModal: (type: ResultModalType, content: ResultModalContent) => void;
  hideResultModal: () => void;
  modalType: ResultModalType;
}

export const ResultModalContext = createContext<ResultModalsContextType>({
  showingResultModal: false,
  content: {},
  showResultModal: () => undefined,
  hideResultModal: () => undefined,
  modalType: "success",
});
