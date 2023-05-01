import { GoogleOAuthProvider } from "@react-oauth/google";
import MemoQuicheLogoPrimary from "../../../../assets/logos/quiche-logo-primary";
import useModal from "../../../../hooks/useModal";
import Button from "../../../atoms/Buttons/Button";
import LinkBasic from "../../../atoms/Link/LinkBasic";
import LinkContainer from "../../../atoms/Link/LinkContainer";
import LoginForm from "../../../molecules/Forms/LoginForm";
import NavLinksContainer from "./NavLinksContainer";
import Modal from "../../../molecules/Modal/Modal";
import { useState } from "react";
import RegisterForm from "../../../molecules/Forms/RegisterForm";

const Navbar: React.FC = () => {
  const loginModal = useModal();
  const registerModal = useModal();

  const handleLoginClick = () => {
    loginModal.openModal();
  };

  const handleRegisterClick = () => {
    registerModal.openModal();
  };

  return (
    <GoogleOAuthProvider clientId="36326234671-nju0jvcnqshbokbfc3qe1tl55gd5vdhv.apps.googleusercontent.com">
      <nav className="shadow-light bg-white p-4">
        <div className="sm:px-6 mx-auto flex max-w-7xl items-center justify-between px-2 lg:px-8">
          <LinkContainer className="w-[106px]" to="/">
            <MemoQuicheLogoPrimary fill="primary" hover="primary-light" />
          </LinkContainer>
          <NavLinksContainer>
            <LinkBasic to="/">Home</LinkBasic>
            <LinkBasic to="/">Buscar Recetas</LinkBasic>
            <LinkBasic to="/">Crear Recetas</LinkBasic>
            <LinkBasic to="/">Nosotros</LinkBasic>
            <Button buttonType="primary" onClick={handleLoginClick}>
              {" "}
              Login{" "}
            </Button>
          </NavLinksContainer>
        </div>
      </nav>
      {loginModal.isOpen && (
        <Modal onClose={loginModal.closeModal} key={"loginModal"}>
          <LoginForm
            onSubmit={() => console.log("login")}
            closeModal={loginModal.closeModal}
            handleRegisterClick={handleRegisterClick}
          />
        </Modal>
      )}
      {registerModal.isOpen && (
        <Modal onClose={registerModal.closeModal} key={"registerModal"}>
          <RegisterForm
            onSubmit={() => console.log("register")}
            closeModal={registerModal.closeModal}
            handleLoginClick={handleLoginClick}
          />
        </Modal>
      )}
    </GoogleOAuthProvider>
  );
};

export default Navbar;
