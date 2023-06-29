import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";
import useModal from "../../../../hooks/useModal";
import Button from "../../../atoms/Buttons/Button";
import Icon from "../../../atoms/Icons/Icons";
import LinkBasic from "../../../atoms/Link/LinkBasic";
import LinkContainer from "../../../atoms/Link/LinkContainer";
import Paragraph from "../../../atoms/Text/Paragraph";
import AuthFlow from "../../../molecules/Modal/Auth/AuthFlow";
import ProfileModal from "../../../molecules/Modal/Auth/ProfileModal";
import RequiredAuthModal from "../../../molecules/Modal/Auth/RequiredAuthModal";
import NavLinksContainer from "./NavLinksContainer";
import "./navbar.css";

const Navbar: React.FC = () => {
  const loginModal = useModal();
  const forgotPasswordModal = useModal();
  const resendCodeModal = useModal();
  const registerModal = useModal();
  const auth = useAuth();
  const navigate = useNavigate();
  const [isThereADraft, setIsThereADraft] = useState(false);
  const [showingDraftAlert, setShowingDraftAlert] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("recipeDraft")) {
      setIsThereADraft(true);
      setShowingDraftAlert(true);
    }
  }, []);

  return (
    <>
      <nav className="shadow-light relative z-[15] bg-white p-0 lg:p-4">
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
      {isThereADraft && (
        <div className="relative z-10 h-0">
          <div
            className={`py-2 text-center text-[12px] transition-all duration-300 ${
              showingDraftAlert
                ? "bg-gradient-to-r from-primary to-[#F09E23] opacity-100"
                : "bg-transparent"
            }`}
          >
            <div
              className={`container relative flex h-[25px] items-center justify-start gap-2 `}
            >
              <div
                className={`cursor-pointer rounded-full border-2 duration-300 ${
                  showingDraftAlert
                    ? " border-primary bg-transparent p-1"
                    : " border-primary-light bg-primary p-1"
                }`}
                onClick={() => {
                  setShowingDraftAlert(!showingDraftAlert);
                }}
              >
                <div className="flex items-center justify-center">
                  <Icon
                    name="info"
                    className={`relative z-10 w-4 fill-white ${
                      showingDraftAlert ? "" : ""
                    }`}
                  />
                  <span
                    className={`${
                      showingDraftAlert ? "hidden" : "block"
                    } z-5 absolute h-6 w-6 animate-ping rounded-full bg-primary opacity-75`}
                  ></span>
                </div>
              </div>
              <div
                className={`flex items-center transition-all duration-75 ${
                  showingDraftAlert ? "opacity-100" : "opacity-0"
                } overflow-hidden`}
              >
                <div className="mr-4 flex items-center">
                  <Paragraph color="black" className="text-[12px] text-white">
                    ¡Hay un <span className="font-medium"> borrador </span> de
                    receta!
                  </Paragraph>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      setShowingDraftAlert(false);
                      navigate("/recipe/create?recipeDraft=true");
                    }}
                    extraClasses="text-[11px] !py-1 bg-white hover:bg-primary-light !text-black hover:!text-white"
                  >
                    Continuar con mi receta
                  </Button>
                  <Button
                    color="danger"
                    extraClasses="text-[11px] !py-1"
                    onClick={() => {
                      localStorage.removeItem("recipeDraft");
                      setIsThereADraft(false);
                    }}
                  >
                    Eliminar borrador
                  </Button>
                </div>
                <div
                  className="absolute right-0 rounded-full border border-white"
                  onClick={() => {
                    setShowingDraftAlert(false);
                  }}
                >
                  <Icon
                    name="closeIcon"
                    className="w-4 cursor-pointer fill-white p-[4px] transition-all hover:w-[18px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
