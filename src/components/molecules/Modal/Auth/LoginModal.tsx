import { useAuth } from "../../../../hooks/useAuth";
import { useResultModal } from "../../../../hooks/useResultModal";
import { useSpinner } from "../../../../hooks/useSpinner";
import { TextWeightType, TitleType } from "../../../atoms/Text/TextsTypes";
import Title from "../../../atoms/Text/Title";
import LoginForm from "../../Forms/LoginForm";
import Modal from "../Modal";
import { loginModalSuccessContent } from "./ResultsConfigAuth/ResultsAuthContents";

interface LoginModalProps {
  closeModal: () => void;
  handleRegisterClick: () => void;
  handleForgotPasswordClick: () => void;
}

const LoginModal = ({
  closeModal,
  handleRegisterClick,
  handleForgotPasswordClick,
}: LoginModalProps) => {
  const auth = useAuth();
  const spinnerModal = useSpinner();
  const resultModal = useResultModal();

  const login = async (email: string, password: string) => {
    closeModal();
    spinnerModal.startLoading({ text: "Iniciando sesión" });
    const result = await auth.signIn(email, password);
    if (result.success) {
      spinnerModal.stopLoading();
      resultModal.showResultModal(
        "success",
        loginModalSuccessContent(result.message.username)
      );
    } else {
      console.log(result);
      spinnerModal.stopLoading();
    }
  };

  return (
    <Modal onClose={closeModal} key={"loginModal"}>
      <div className="grid grid-cols-12 gap-5 px-5 py-7">
        <div className="col-span-12">
          <Title
            color="black"
            text="Iniciar sesión"
            weight={TextWeightType.SemiBold}
            titleType={TitleType.H3}
            className="col-span-12"
          />
          <p className="text-[12px] text-gray">
            ¡Ingresa el Email y Password que utilizaste para registrarte
            {/* o utiliza tu cuenta de Google */}!
          </p>
        </div>
        <LoginForm onSubmitCallback={login} />
        <div className="col-span-12">
          <p className="col-span-12 cursor-pointer text-right text-sm text-gray">
            ¿No tienes cuenta?
            <span
              className="ml-1 text-primary underline"
              onClick={() => {
                closeModal();
                handleRegisterClick();
              }}
            >
              Regístrate
            </span>
          </p>
        </div>
        <div className="col-span-12">
          <p className="col-span-12 cursor-pointer text-right text-sm text-gray">
            <span
              className="ml-1 text-primary underline"
              onClick={() => {
                closeModal();
                handleForgotPasswordClick();
              }}
            >
              ¿Olvidaste tu contraseña?
            </span>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
