import { ResultModalContent } from "../../../../../context/ResultModalsContext";

export const registerErrorCodes = {
  // UserNotConfirmedException: {
  //   code: "UserNotConfirmedException",
  //   message: "El usuario que ingresaste no está confirmado",
  //   action: "resendConfirmationCode",
  // },
  // NotAuthorizedException: {
  //   code: "NotAuthorizedException",
  //   message: "Nombre de usuario o contraseña incorrectos",
  //   action: "reOpenModal",
  // },
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
