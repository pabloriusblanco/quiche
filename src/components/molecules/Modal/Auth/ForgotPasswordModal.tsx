import { TextWeightType, TitleType } from "../../../atoms/Text/TextsTypes";
import Title from "../../../atoms/Text/Title";
import ForgotPasswordForm from "../../Forms/ForgotPasswordForm";
import LoginForm from "../../Forms/LoginForm";
import Modal from "../Modal";

interface ForgotPasswordModalProps {
  onClose: () => void;
  onSubmitCallback: (comment: string) => Promise<void>;
}

const ForgotPasswordModal = ({
  onClose,
  onSubmitCallback,
}: ForgotPasswordModalProps) => {
  return (
    <Modal onClose={onClose} key={"loginModal"}>
      <div className="grid grid-cols-12 gap-5 px-5 py-7">
        <div className="col-span-12">
          <Title
            color="black"
            text="Recuperar contraseña"
            weight={TextWeightType.SemiBold}
            titleType={TitleType.H3}
            className="col-span-12"
          />
          <p className="text-[12px] text-gray">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            maxime pariatur qui quia voluptates distinctio eaque a ullam cum
            quidem!
            {/* o utiliza tu cuenta de Google */}!
          </p>
        </div>
        <ForgotPasswordForm
          className="col-span-12 flex flex-col gap-6"
          onSubmitCallback={onSubmitCallback}
        />
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
