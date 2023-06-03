import { useState } from "react";

export type useModalProps = {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
};

const useModal = (): useModalProps => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return {
    openModal,
    closeModal,
    isOpen,
  };
};

export default useModal;
