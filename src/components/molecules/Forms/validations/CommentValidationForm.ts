import * as Yup from "yup";

export const CommentValidationForm = Yup.object({
  comment: Yup.string()
    .min(20, "El comentario debe tener al menos 20 caracteres")
    .max(500, "El comentario debe tener como máximo 500 caracteres")
    .required("Por favor ingrese su comentario"),
});
