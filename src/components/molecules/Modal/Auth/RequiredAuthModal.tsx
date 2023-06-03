import Button from "../../../atoms/Buttons/Button";
import Paragraph from "../../../atoms/Text/Paragraph";
import { TextWeightType } from "../../../atoms/Text/TextsTypes";
import Title from "../../../atoms/Text/Title";
import Modal from "../Modal";

interface RequiredAuthModalProps {
  onClose: () => void;
  handleLoginClick: () => void;
}

const RequiredAuthModal = ({
  onClose,
  handleLoginClick,
}: RequiredAuthModalProps) => {
  return (
    <Modal onClose={onClose} key={"authModal"}>
      <div className="flex flex-col gap-3 p-5">
        <Title
          color="black"
          text="¡Ingresa a tu cuenta para continuar!"
          className="text-center"
          weight={TextWeightType.SemiBold}
        />
        <Paragraph color="gray" className="text-center text-[11px]">
          Para poder crear una receta, o guardarla como favorita, compartir o
          dejar comentarios, debes ingresar a tu cuenta.
        </Paragraph>
        <Button
          onClick={() => {
            onClose();
            handleLoginClick();
          }}
          color="primary"
        >
          Ingresa a tu cuenta o registrate
        </Button>
      </div>
    </Modal>
  );
};

export default RequiredAuthModal;
