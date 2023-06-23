import { deleteRegisteredUser } from "../../../../api/auth/register";
import useModal from "../../../../hooks/useModal";
import { useSpinner } from "../../../../hooks/useSpinner";
import Button from "../../../atoms/Buttons/Button";
import Paragraph from "../../../atoms/Text/Paragraph";
import DeleteUserModal from "../../../molecules/Modal/Auth/DeleteUserModal";
import GoToTopButton from "./GoToTopButton";

const Footer = () => {
  const deleteUserModal = useModal();
  const spinnerModal = useSpinner(); 

  const deleteUser = async (username: string) => {
    deleteUserModal.closeModal();
    spinnerModal.startLoading({ text: "Eliminando usuario"});
    await deleteRegisteredUser(username)
      .then((res) => {
        alert("Usuario eliminado correctamente");
        console.log(res);
        spinnerModal.stopLoading();
      })
      .catch((err) => {
        spinnerModal.stopLoading();
        console.error(err);
      });
  };

  return (
    <footer
      className="mt-10  p-5 text-center"
      style={{
        background: "linear-gradient(90deg, #F0BA23 41.37%, #F09E23 101.59%)",
      }}
    >
      <GoToTopButton />
      <Paragraph color="white">{`© ${new Date().getFullYear()} Copyright: Quiche y QuicheApp son una marca registrada. Todos los derechos reservados.`}</Paragraph>
      {process.env.ENVIROMENT === "local" && (
        <>
          {deleteUserModal.isOpen && (
            <DeleteUserModal
              onClose={deleteUserModal.closeModal}
              onSubmitCallback={deleteUser}
            />
          )}

          <Button color="secondary" onClick={deleteUserModal.openModal}>
            Delete User
          </Button>
        </>
      )}
    </footer>
  );
};

export default Footer;
