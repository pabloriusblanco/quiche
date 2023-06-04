import { useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { useResultModal } from "../../../../hooks/useResultModal";
import { useSpinner } from "../../../../hooks/useSpinner";
import { TextWeightType, TitleType } from "../../../atoms/Text/TextsTypes";
import Title from "../../../atoms/Text/Title";
import SubmitNewPasswordForm from "../../Forms/SubmitNewPasswordForm";
import Modal from "../Modal";
import Paragraph from "../../../atoms/Text/Paragraph";
import ForgotPasswordForm from "../../Forms/ForgotPasswordForm";

interface ForgotPasswordModalProps {
  closeModal: () => void;
}

const ForgotPasswordModal = ({ closeModal }: ForgotPasswordModalProps) => {
  const auth = useAuth();
  const spinnerModal = useSpinner();
  const resultModal = useResultModal();
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [username, setUsername] = useState("");

  const forgotPassword = async (username: string) => {
    setUsername(username);
    spinnerModal.startLoading({ text: "Enviando código de verificación" });
    const result = await auth.forgotPassword(username);
    if (result.success) {
      setIsCodeSent(true);
      spinnerModal.stopLoading();
    } else {
      closeModal();
      spinnerModal.stopLoading();
      resultModal.showResultModal("danger", {
        showIcon: true,
        message: result.message,
      });
    }
  };

  const submitNewPassword = async (
    code: string,
    username: string,
    password: string
  ) => {
    spinnerModal.startLoading({ text: "Enviando código de verificación" });
    const result = await auth.submitNewPassword(username, code, password);
    if (result.success) {
      spinnerModal.stopLoading();
      resultModal.showResultModal("success", {
        showIcon: true,
        message: result.message,
      });
    } else {
      spinnerModal.stopLoading();
      resultModal.showResultModal("danger", {
        showIcon: true,
        title: "Error",
        message: result.message,
      });
    }
  };

  return (
    <Modal onClose={closeModal} key={"loginModal"}>
      {!isCodeSent && (
        <div className="grid grid-cols-12 gap-5 px-5 py-7">
          <div className="col-span-12">
            <Title
              color="black"
              text="Recuperar contraseña"
              weight={TextWeightType.SemiBold}
              titleType={TitleType.H3}
              className="col-span-12 "
            />
            <Paragraph color="gray" className=" text-[12px]">
              Ingresa tu nombre de usuario para recuperar tu contraseña. <br />
              Recibirás un código de verificación en tu correo electrónico.{" "}
            </Paragraph>
          </div>
          <ForgotPasswordForm
            className="col-span-12 flex flex-col gap-6"
            onSubmitCallback={forgotPassword}
          />
        </div>
      )}
      {isCodeSent && (
        <div className="grid grid-cols-12 gap-5 px-5 py-7">
          <div className="col-span-12">
            <Title
              color="black"
              text="Recuperar contraseña"
              weight={TextWeightType.SemiBold}
              titleType={TitleType.H3}
              className="col-span-12"
            />
            <Paragraph color="gray" className=" text-[12px]">
              Ingresa tu username, el código de verificación y tu nueva
              contraseña.
            </Paragraph>
          </div>
          <SubmitNewPasswordForm
            username={username}
            className="col-span-12 flex flex-col gap-6"
            onSubmitCallback={submitNewPassword}
          />
        </div>
      )}
    </Modal>
  );
};

export default ForgotPasswordModal;
