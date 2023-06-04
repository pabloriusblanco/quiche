import { useAuth } from "../../../../hooks/useAuth";
import { useResultModal } from "../../../../hooks/useResultModal";
import Paragraph from "../../../atoms/Text/Paragraph";
import { TextWeightType } from "../../../atoms/Text/TextsTypes";
import Title from "../../../atoms/Text/Title";
import ResendCodeForm from "../../Forms/ResendCodeForm";
import Modal from "../Modal";

interface ResendCodeConfirmationModalProps {
  closeModal: () => void;
}

const ResendCodeConfirmationModal = ({
  closeModal,
}: ResendCodeConfirmationModalProps) => {
  const auth = useAuth();
  const resultModal = useResultModal();

  const resendCode = async (username: string) => {
    closeModal();
    const result = await auth.resendConfirmationLink(username);
    if (result.success) {
      resultModal.showResultModal("success", {
        showIcon: true,
        confirmText: "Entendido",
        title: "¡Listo!",
        message:
          "Se ha enviado un nuevo link de confirmación a tu correo electrónico.",
      });
    } else {
      resultModal.showResultModal("danger", {
        showIcon: true,
        confirmText: "Entendido",
        title: "¡Ups!",
        message:
          "No se ha podido enviar un nuevo link de confirmación a tu correo electrónico. Intenta de nuevo más tarde.",
      });
    }
  };

  return (
    <Modal onClose={closeModal} key={"redendCode"}>
      <div className="flex flex-col gap-5 p-5">
        <Title
          color="black"
          text={"Confirma tu correo electrónico"}
          className="text-center"
          weight={TextWeightType.SemiBold}
        />
        <Paragraph color="gray" className="text-center text-[11px]">
          ¡Falta poco para que puedas empezar a crear tus recetas!
          <br />
          Haz click en el botón de abajo para volver un nuevo link de
          confirmación al correo electrónico que registraste.
          <br />
          ¡No olvides revisar tu bandeja de spam!
        </Paragraph>
        <ResendCodeForm
          onSubmitCallback={resendCode}
          className="flex flex-col gap-6"
        />
      </div>
    </Modal>
  );
};

export default ResendCodeConfirmationModal;
