import { ResultModalContent } from "../../../../../context/ResultModalsContext";

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

export const registerModalSuccessContent = (): ResultModalContent => {
  return {
    title: <>¡Bienvenid@!</>,
    message: (
      <>
        ¡Falta poco para que puedas empezar a crear tus recetas!
        <br />
        <br />
        Te hemos enviado un link de confirmación a tu correo electrónico. Por
        favor, revisa tu bandeja de entrada, y haz click en el link para
        confirmar tu cuenta.
        <br />
        <br />
        Si no encuentras el correo, revisa tu bandeja de Spam.
      </>
    ),
    showIcon: true,
  };
};

export const registerModalErrorContent = (
  message: string,
  openModal: () => void
): ResultModalContent => {
  return {
    title: "Ha sucedio un error",
    message: message,
    showIcon: true,
    onCancel: openModal,
  };
};
