import { useAuth } from "../../../../hooks/useAuth";
import useModal from "../../../../hooks/useModal";
import { useSpinner } from "../../../../hooks/useSpinner";
import Button from "../../../atoms/Buttons/Button";
import Icon from "../../../atoms/Icons/Icons";
import LinkBasic from "../../../atoms/Link/LinkBasic";
import LinkContainer from "../../../atoms/Link/LinkContainer";
import AuthFlow from "../../../molecules/Modal/Auth/AuthFlow";
import ForgotPasswordModal from "../../../molecules/Modal/Auth/ForgotPasswordModal";
import ProfileModal from "../../../molecules/Modal/Auth/ProfileModal";
import RequiredAuthModal from "../../../molecules/Modal/Auth/RequiredAuthModal";
import NavLinksContainer from "./NavLinksContainer";

const Navbar: React.FC = () => {
  const loginModal = useModal();
  const forgotPasswordModal = useModal();
  const resendCodeModal = useModal();
  const registerModal = useModal();
  const auth = useAuth();

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
            <LinkBasic to="/search">Buscar Recetas</LinkBasic>
            <LinkBasic to="/recipe/create">Crear Recetas</LinkBasic>
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
        resendCodeModal={resendCodeModal}
      />
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
