import { GoogleOAuthProvider } from "@react-oauth/google";
import MemoQuicheLogoPrimary from "../../../../assets/logos/quiche-logo-primary";
import useModal from "../../../../hooks/useModal";
import { useUser } from "../../../../hooks/useUser";
import Button from "../../../atoms/Buttons/Button";
import LinkBasic from "../../../atoms/Link/LinkBasic";
import LinkContainer from "../../../atoms/Link/LinkContainer";
import LoginForm from "../../../molecules/Forms/LoginForm";
import RegisterForm from "../../../molecules/Forms/RegisterForm";
import Modal from "../../../molecules/Modal/Modal";
import NavLinksContainer from "./NavLinksContainer";
import { ProvideAuth } from "../../../../hooks/useAuth";
import Icon from "../../../atoms/Icons";

const Navbar: React.FC = () => {
  const loginModal = useModal();
  const registerModal = useModal();
  const welcomeModal = useModal();
  const { user, handleLogin, handleLogout } = useUser();

  const handleLoginClick = () => {
    loginModal.openModal();
  };

  const handleRegisterClick = () => {
    registerModal.openModal();
  };

  return (
    <ProvideAuth>
      <GoogleOAuthProvider clientId="36326234671-nju0jvcnqshbokbfc3qe1tl55gd5vdhv.apps.googleusercontent.com">
        <nav className="shadow-light relative z-50 bg-white p-0 lg:p-4">
          <div className="container flex items-center justify-between">
            <LinkContainer className="w-[106px]" to="/">
              <Icon name="quiche" className="h-full fill-primary hover:fill-primary-light" />
            </LinkContainer>
            <NavLinksContainer>
              <LinkBasic to="/">Home</LinkBasic>
              <LinkBasic to="/">Buscar Recetas</LinkBasic>
              <LinkBasic to="/">Crear Recetas</LinkBasic>
              <LinkBasic to="/">Nosotros</LinkBasic>
              {!user && (
                <Button color="primary" onClick={handleLoginClick}>
                  {" "}
                  Login{" "}
                </Button>
              )}
              {user && (
                <Button color="primary" onClick={handleLogout}>
                  {" "}
                  Cerrar Sesión{" "}
                </Button>
              )}
            </NavLinksContainer>
          </div>
        </nav>
        {loginModal.isOpen && (
          <Modal onClose={loginModal.closeModal} key={"loginModal"}>
            <LoginForm
              onSubmit={(user) => {
                handleLogin(user.email, user.password)
                  .then((res) => {
                    loginModal.closeModal();
                    setTimeout(() => {
                      welcomeModal.openModal();
                    }, 500);
                  })
                  .catch((err) => console.log("err: ", err));
              }}
              closeModal={loginModal.closeModal}
              handleRegisterClick={handleRegisterClick}
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
        {welcomeModal.isOpen && user && (
          <Modal onClose={welcomeModal.closeModal} key={"registerModal"}>
            <div className="w-full p-8">
              <p className="text-center text-gray">
                ¡Bienvenido {user?.given_name}!
              </p>
            </div>
          </Modal>
        )}
      </GoogleOAuthProvider>
    </ProvideAuth>
  );
};

export default Navbar;
