import { TextWeightType, TitleType } from "../../../atoms/Text/TextsTypes";
import Title from "../../../atoms/Text/Title";
import DeleteUserForm from "../../Forms/DeleteUserForm";
import ForgotPasswordForm from "../../Forms/ForgotPasswordForm";
import Modal from "../Modal";

interface DeleteUserModalProps {
  onClose: () => void;
  onSubmitCallback: (comment: string) => Promise<void>;
}

const DeleteUserModal = ({
  onClose,
  onSubmitCallback,
}: DeleteUserModalProps) => {
  return (
    <Modal onClose={onClose} key={"loginModal"}>
      <div className="grid grid-cols-12 gap-5 px-5 py-7">
        <div className="col-span-12">
          <Title
            color="black"
            text="Eliminar usuario"
            weight={TextWeightType.SemiBold}
            titleType={TitleType.H3}
            className="col-span-12"
          />
        </div>
        <DeleteUserForm
          className="col-span-12 flex flex-col gap-6"
          onSubmitCallback={onSubmitCallback}
        />
      </div>
    </Modal>
  );
};

export default DeleteUserModal;
