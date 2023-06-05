import { ResultModalContent } from "../../../../../context/ResultModalsContext";

export const loginErrorCodes = {
  UserNotConfirmedException: {
    code: "UserNotConfirmedException",
    message: "El usuario que ingresaste no está confirmado",
    action: "resendConfirmationCode",
  },
  NotAuthorizedException: {
    code: "NotAuthorizedException",
    message: "Nombre de usuario o contraseña incorrectos",
    action: "reOpenModal",
  },
};

export const loginModalSuccessContent = (
  username: string
): ResultModalContent => {
  return {
    title: (
      <>
        ¡Bienvenido <span className="text-primary">{username}</span>!
      </>
    ),
    message: (
      <>
        Ya puedes empezar a crear tus recetas, o buscar las que más te gusten.{" "}
        <br />
        Desde tu perfil podrás ver las recetas que has creado, y las que has
        guardado como favoritas.
      </>
    ),
    cancelText: "Empezar",
    showIcon: true,
  };
};
