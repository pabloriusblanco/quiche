import { useAuth } from "../../../../hooks/useAuth";
import useModal from "../../../../hooks/useModal";
import { useSpinner } from "../../../../hooks/useSpinner";
import Button from "../../../atoms/Buttons/Button";
import Icon from "../../../atoms/Icons/Icons";
import LinkBasic from "../../../atoms/Link/LinkBasic";
import LinkContainer from "../../../atoms/Link/LinkContainer";
import AuthFlow from "../../../molecules/Modal/Auth/AuthFlow";
import CodeConfirmationModal from "../../../molecules/Modal/Auth/CodeConfirmationModal";
import ForgotPasswordModal from "../../../molecules/Modal/Auth/ForgotPasswordModal";
import ProfileModal from "../../../molecules/Modal/Auth/ProfileModal";
import RequiredAuthModal from "../../../molecules/Modal/Auth/RequiredAuthModal";
import NavLinksContainer from "./NavLinksContainer";

const Navbar: React.FC = () => {
  const loginModal = useModal();
  const spinnerModal = useSpinner();
  const forgotPasswordModal = useModal();
  const registerModal = useModal();
  const auth = useAuth();

  const forgotPassword = async (email: string) => {
    forgotPasswordModal.closeModal();
    spinnerModal.startLoading({ text: "Enviando código de verificación" });
    const result = await auth.forgotPassword(email);
    if (result.success) {
      console.log("succes", result);
      spinnerModal.stopLoading();
    } else {
      console.log("error", result);
      spinnerModal.stopLoading();
    }
  };

  return (
    <>
      <nav className="shadow-light relative z-[1] bg-white p-0 lg:p-4">
        <div className="container flex items-center justify-between">
          <LinkContainer className="w-[106px]" to="/">
            <Icon
              name="quiche"
              className="h-full fill-primary hover:fill-primary-light"
            />
          </LinkContainer>
          <NavLinksContainer>
            <LinkBasic to="/">Home</LinkBasic>
            <LinkBasic to="/">Buscar Recetas</LinkBasic>
            <LinkBasic to="/">Crear Recetas</LinkBasic>
            <LinkBasic to="/">Nosotros</LinkBasic>
            {!auth.isAuthenticated && (
              <Button
                buttonStyle="outlined"
                color="primary"
                onClick={loginModal.openModal}
              >
                Ingresar
              </Button>
            )}
            {auth.isAuthenticated && <ProfileModal />}
          </NavLinksContainer>
        </div>
      </nav>
      <AuthFlow
        loginModal={loginModal}
        registerModal={registerModal}
        forgotPasswordModal={forgotPasswordModal}
      />

      {forgotPasswordModal.isOpen && (
        <ForgotPasswordModal
          onClose={forgotPasswordModal.closeModal}
          onSubmitCallback={forgotPassword}
        />
      )}
      {auth.showingAuthModal && (
        <RequiredAuthModal
          onClose={auth.toggleAuthModal}
          handleLoginClick={loginModal.openModal}
        />
      )}
    </>
  );
};

export default Navbar;
