import Button from "../../atoms/Buttons/Button";
import Paragraph from "../../atoms/Text/Paragraph";
import { TextWeightType } from "../../atoms/Text/TextsTypes";
import Title from "../../atoms/Text/Title";
import Modal from "../Modal/Modal";

interface WelcomeModalProps {
  onClose: () => void;
  username: string;
}

const WelcomeModal = ({ onClose, username }: WelcomeModalProps) => {
  return (
    <Modal onClose={onClose} key={"registerModal"}>
      <div className="flex flex-col gap-2 p-5">
        <Title
          color="black"
          text={
            <>
              ¡Bienvenido <span className="text-primary">${username}</span>!
            </>
          }
          className="text-center"
          weight={TextWeightType.SemiBold}
        />
        <Paragraph color="gray" className="text-center text-[11px]">
          Ya puedes empezar a crear tus recetas, o buscar las que más te gusten.
        </Paragraph>
        <Paragraph color="gray" className="text-center text-[11px]">
          Desde tu perfil podrás ver las recetas que has creado, y las que has
          guardado como favoritas.
        </Paragraph>
        <Button color="primary" onClick={onClose} extraClasses="mt-4">
          Comenzar
        </Button>
      </div>
    </Modal>
  );
};

export default WelcomeModal;
