import * as Yup from "yup";

export const CodeConfirmationValidationForm = Yup.object({
  code: Yup.string()
    .min(6, "El código debe tener 6 caracteres")
    .required("Por favor ingrese su código de confirmación"),
});
