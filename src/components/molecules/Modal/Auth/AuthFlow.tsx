import { useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { useModalProps } from "../../../../hooks/useModal";
import { useResultModal } from "../../../../hooks/useResultModal";
import { useSpinner } from "../../../../hooks/useSpinner";
import LoginModal from "../../../molecules/Modal/Auth/LoginModal";
import RegisterModal from "./RegisterModal";
import {
  PreloadRegisterValues,
  RegisterValues,
} from "../../Forms/RegisterForm";

type AuthFlowProps = {
  loginModal: useModalProps;
  forgotPasswordModal: useModalProps;
  registerModal: useModalProps;
};

const AuthFlow = ({
  loginModal,
  forgotPasswordModal,
  registerModal,
}: AuthFlowProps) => {
  const spinnerModal = useSpinner();
  const resultModal = useResultModal();
  const auth = useAuth();
  const [registerPreloadedValues, setRegisterPreloadedValues] =
    useState<PreloadRegisterValues>({
      username: "",
      name: "",
      lastname: "",
      email: "",
    });

  const setPreloadedValues = (preloadedValues: PreloadRegisterValues) => {
    const { username, name, lastname, email } = preloadedValues;
    setRegisterPreloadedValues({
      username: username,
      name: name,
      lastname: lastname,
      email: email,
    });
  };

  return (
    <>
      {loginModal.isOpen && (
        <LoginModal
          closeModal={loginModal.closeModal}
          handleRegisterClick={registerModal.openModal}
          handleForgotPasswordClick={() => forgotPasswordModal.openModal()}
        />
      )}
      {registerModal.isOpen && (
        <RegisterModal
          registerPreloadedValues={registerPreloadedValues}
          setPreloadedValues={setPreloadedValues}
          openModal={registerModal.openModal}
          closeModal={registerModal.closeModal}
          handleLoginClick={loginModal.openModal}
        />
      )}
    </>
  );
};

export default AuthFlow;
