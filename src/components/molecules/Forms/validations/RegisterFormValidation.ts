import * as Yup from "yup";

export const registerFormValidationSchema = Yup.object({
  name: Yup.string().required("Por favor ingrese su nombre"),
  lastname: Yup.string().required("Por favor ingrese su apellido"),
  email: Yup.string()
    .email("Dirección de correo electrónico inválida")
    .required("Por favor ingrese su dirección de correo electrónico"),
  phone: Yup.string().required("Por favor ingrese su número de teléfono"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("Por favor ingrese su contraseña"),
  repeat_password: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Las contraseñas deben coincidir")
    .required("Por favor repita su contraseña"),
});
