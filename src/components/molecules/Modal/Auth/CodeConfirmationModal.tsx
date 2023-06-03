import Paragraph from "../../../atoms/Text/Paragraph";
import { TextWeightType } from "../../../atoms/Text/TextsTypes";
import Title from "../../../atoms/Text/Title";
import CodeConfirmationForm from "../../Forms/CodeConfirmationForm";
import Modal from "../Modal";

interface CodeConfirmationModalProps {
  onClose: () => void;
  onSubmitCallback: (code: string) => void;
}

const CodeConfirmationModal = ({
  onClose,
  onSubmitCallback,
}: CodeConfirmationModalProps) => {
  return (
    <Modal onClose={onClose} key={"registerModal"}>
      <div className="flex flex-col gap-5 p-5">
        <Title
          color="black"
          text={"¡Bienvenid@!"}
          className="text-center"
          weight={TextWeightType.SemiBold}
        />
        <Paragraph color="gray" className="text-center text-[11px]">
          ¡Falta poco para que puedas empezar a crear tus recetas!
          <br />
          Te hemos enviado un código de confirmación a tu correo electrónico.
          Por favor, ingrésalo a continuación.
        </Paragraph>
        <CodeConfirmationForm
          onSubmitCallback={onSubmitCallback}
          className="flex flex-col gap-5"
        />
      </div>
    </Modal>
  );
};

export default CodeConfirmationModal;
