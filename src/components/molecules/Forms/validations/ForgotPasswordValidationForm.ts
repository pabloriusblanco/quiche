import * as Yup from "yup";

export const ForgotPasswordValidationForm = Yup.object({
  username: Yup.string()
    .min(4, "El usuario debe contener al menos 4 carateres")
    .required("Por favor ingrese su nombre"),
});

export const SubmitNewPasswordValidationForm = Yup.object({
  code: Yup.string()
    .min(6, "El código debe contener al menos 6 carateres")
    .required("Por favor ingrese el código de verificación"),
  username: Yup.string()
    .min(4, "El usuario debe contener al menos 4 carateres")
    .required("Por favor ingrese su nombre"),
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
