import * as Yup from "yup";

export const ResendCodeValidationForm = Yup.object({
  username: Yup.string()
    .min(4, "El usuario debe contener al menos 4 carateres")
    .required("Por favor ingrese su nombre de usuario"),
});
