import { useState } from "react";
import { useModalProps } from "../../../../hooks/useModal";
import LoginModal from "../../../molecules/Modal/Auth/LoginModal";

import { PreloadRegisterValues } from "../../Forms/Auth/RegisterForm";
import ForgotPasswordModal from "./ForgotPasswordModal";
import RegisterModal from "./RegisterModal";
import ResendCodeConfirmationModal from "./ResendCodeConfirmationModal";

type AuthFlowProps = {
  loginModal: useModalProps;
  forgotPasswordModal: useModalProps;
  registerModal: useModalProps;
  resendCodeModal: useModalProps;
};

const AuthFlow = ({
  loginModal,
  forgotPasswordModal,
  registerModal,
  resendCodeModal,
}: AuthFlowProps) => {
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
          openModal={loginModal.openModal}
          closeModal={loginModal.closeModal}
          registerOpen={registerModal.openModal}
          forgotPasswordOpen={() => forgotPasswordModal.openModal()}
          resendCodeOpen={() => resendCodeModal.openModal()}
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
      {resendCodeModal.isOpen && (
        <ResendCodeConfirmationModal closeModal={resendCodeModal.closeModal} />
      )}
      {forgotPasswordModal.isOpen && (
        <ForgotPasswordModal closeModal={forgotPasswordModal.closeModal} />
      )}
    </>
  );
};

export default AuthFlow;
