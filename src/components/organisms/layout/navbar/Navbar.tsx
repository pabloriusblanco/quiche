import { useAuth } from "../../../../hooks/useAuth";
import useModal from "../../../../hooks/useModal";
import useSpinner from "../../../../hooks/useSpinner";
import Button from "../../../atoms/Buttons/Button";
import Icon from "../../../atoms/Icons/Icons";
import LinkBasic from "../../../atoms/Link/LinkBasic";
import LinkContainer from "../../../atoms/Link/LinkContainer";
import ProfileModal from "../../../molecules/Auth/ProfileModal";
import RequiredAuthModal from "../../../molecules/Auth/RequiredAuthModal";
import WelcomeModal from "../../../molecules/Auth/WelcomeModal";
import LoginForm from "../../../molecules/Forms/LoginForm";
import RegisterForm from "../../../molecules/Forms/RegisterForm";
import Modal from "../../../molecules/Modal/Modal";
import Spinner from "../../../molecules/Modal/Spinner";
import NavLinksContainer from "./NavLinksContainer";

const Navbar: React.FC = () => {
  const loginModal = useModal();
  const registerModal = useModal();
  const welcomeModal = useModal();
  const spinnerModal = useSpinner();
  const auth = useAuth();

  const handleLoginClick = () => {
    loginModal.openModal();
  };

  const handleRegisterClick = () => {
    registerModal.openModal();
  };

  const login = async (email: string, password: string) => {
    loginModal.closeModal();
    spinnerModal.startLoading();
    const result = await auth.signIn(email, password);
    if (result.success) {
      spinnerModal.stopLoading();
      welcomeModal.openModal();
    } else {
      console.log(result);
      spinnerModal.stopLoading();
    }
  };

  const logout = async () => {
    spinnerModal.startLoading();
    const result = await auth.signOut();
    if (result.success) {
      console.log("loggedOUT", auth.isAuthenticated);
      spinnerModal.stopLoading();
    }
  };

  return (
    <>
      {/* <GoogleOAuthProvider clientId="36326234671-nju0jvcnqshbokbfc3qe1tl55gd5vdhv.apps.googleusercontent.com"> */}
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
                onClick={handleLoginClick}
              >
                Ingresar
              </Button>
            )}
            {auth.isAuthenticated && (
              <ProfileModal logout={logout} username={auth.username} />
            )}
          </NavLinksContainer>
        </div>
      </nav>
      {loginModal.isOpen && (
        <Modal onClose={loginModal.closeModal} key={"loginModal"}>
          <LoginForm
            closeModal={loginModal.closeModal}
            handleRegisterClick={handleRegisterClick}
            onSubmitCallback={login}
          />
        </Modal>
      )}
      {registerModal.isOpen && (
        <Modal onClose={registerModal.closeModal} key={"registerModal"}>
          <RegisterForm
            onSubmit={(values) => console.log("register: ", values)}
            closeModal={registerModal.closeModal}
            handleLoginClick={handleLoginClick}
          />
        </Modal>
      )}
      {welcomeModal.isOpen && auth.isAuthenticated && (
        <WelcomeModal
          onClose={welcomeModal.closeModal}
          username={auth.username}
        />
      )}
      {spinnerModal.isLoading && <Spinner />}
      {auth.showingAuthModal && (
        <RequiredAuthModal onClose={auth.toggleAuthModal}
        handleLoginClick={handleLoginClick} />
      )}
      {/* </GoogleOAuthProvider> */}
    </>
  );
};

export default Navbar;
