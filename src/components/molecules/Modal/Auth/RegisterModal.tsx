import { useAuth } from "../../../../hooks/useAuth";
import { useResultModal } from "../../../../hooks/useResultModal";
import { useSpinner } from "../../../../hooks/useSpinner";

import RegisterForm, {
  PreloadRegisterValues,
} from "../../Forms/Auth/RegisterForm";
import Modal from "../Modal";
import { registerResultMapper } from "./ResultsConfigAuth/ResultsAuthContents";

interface RegisterModalProps {
  closeModal: () => void;
  openModal: () => void;
  handleLoginClick: () => void;
  registerPreloadedValues: PreloadRegisterValues;
  setPreloadedValues: (preloadedValues: PreloadRegisterValues) => void;
}

const RegisterModal = ({
  openModal,
  closeModal,
  handleLoginClick,
  registerPreloadedValues,
  setPreloadedValues,
}: RegisterModalProps) => {
  const auth = useAuth();
  const spinnerModal = useSpinner();
  const resultModal = useResultModal();

  const register = async (
    username: string,
    name: string,
    lastname: string,
    email: string,
    password: string
  ) => {
    closeModal();
    spinnerModal.startLoading({ text: "Registrando usuario" });
    setPreloadedValues({
      username: username,
      name: name,
      lastname: lastname,
      email: email,
    });
    const result = await auth.signUp(username, name, lastname, email, password);
    registerResultMapper(
      result,
      resultModal,
      spinnerModal,
      setPreloadedValues,
      openModal
    );
  };

  return (
    <Modal onClose={closeModal} key={"loginModal"}>
      <div className="grid grid-cols-12 gap-5">
        <RegisterForm
          preloadedValues={registerPreloadedValues}
          closeModal={closeModal}
          handleLoginClick={handleLoginClick}
          onSubmitCallback={register}
        />
      </div>
    </Modal>
  );
};

export default RegisterModal;
