import { ResultModalContent } from "../../../../../context/ResultModalsContext";

export type RegisterErrorCodeAttributes = {
  code: string;
  message: string;
  action: string;
};

export const registerErrorCodes: {
  [key: string]: RegisterErrorCodeAttributes;
} = {
  MailAlreadyExist: {
    code: "MailAlreadyExist",
    message: "",
    action: "reOpenModal",
  },
  UserNameAlreadyExist: {
    code: "UserNameAlreadyExist",
    message: "",
    action: "reOpenModal",
  },
  UserNameAndMailAlreadyExist: {
    code: "UserNameAndMailAlreadyExist",
    message: "",
    action: "reOpenModal",
  },
  InternalServerError: {
    code: "InternalServerError",
    message: "",
    action: "reOpenModal",
  },
  Default: {
    code: "serverError",
    message:
      "No hemos podido registrar el usuario. Intenta nuevamente más tarde.",
    action: "reOpenModal",
  },
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
