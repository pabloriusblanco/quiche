import { useState } from "react";
import Modal from "../components/molecules/Modal/Modal";

interface UseModalProps {
  children: React.ReactNode;
}

const useModal = ({ children }: UseModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const ModalWrapper = () => {
    return <Modal onClose={closeModal}>{children}</Modal>;
  };

  return {
    openModal,
    closeModal,
    ModalWrapper,
    isOpen,
  };
};

export default useModal;
