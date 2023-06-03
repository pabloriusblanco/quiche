import * as Yup from "yup";

export const registerFormValidationSchema = Yup.object({
  username: Yup.string()
    .min(4, "El usuario debe contener al menos 4 carateres")
    .required("Por favor ingrese su nombre"),
  name: Yup.string()
    .min(3, "El nombre debe contener al menos 3 carateres")
    .required("Por favor ingrese su nombre"),
  lastname: Yup.string().required("Por favor ingrese su apellido"),
  email: Yup.string()
    .email("Dirección de correo electrónico inválida")
    .required("Por favor ingrese su dirección de correo electrónico"),
  // phone: Yup.string().required("Por favor ingrese su número de teléfono"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
      "La contraseña debe contener al menos una letra mayúscula, una minúscula, un número"
    )
    .required("Por favor ingrese su contraseña"),
  repeat_password: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Las contraseñas deben coincidir")
    .required("Por favor repita su contraseña"),
});
