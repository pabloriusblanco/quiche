import * as Yup from "yup";

export const loginFormValidation = Yup.object({
  // username: Yup.string()
  //   .min(4, "El usuario debe contener al menos 4 carateres")
  //   .required("Por favor ingrese su nombre")
  //   .required("Por favor ingrese su nombre"),
  email: Yup.string()
    .email("Dirección de correo electrónico inválida")
    .required("Por favor ingrese su dirección de correo electrónico"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("Por favor ingrese su contraseña"),
});
