import * as Yup from "yup";

const MAX_IMAGE_SIZE = 768;

export const imageValidationErrorsDictionary = {
  imageDimensions: "Alto y ancho deben ser menores a 768px.",
  "file-invalid-type": "La imagen debe ser de tipo .jpg o .jpeg.",
  "file-too-large": "La imagen debe pesar menos de 1MB.",
};

export const createRecipeValidationForm = Yup.object({
  image: Yup.mixed()
    .required("La imagen es requerida.")
    .test(
      "imageDimensions",
      imageValidationErrorsDictionary["imageDimensions"],
      function (value) {
        return evaluateImageDimensions(value);
      }
    ),
  name: Yup.string()
    .required("El título es requerido.")
    .min(5, "El título debe tener al menos 5 caracteres.")
    .max(50, "El título debe tener menos de 50 caracteres."),
  description: Yup.string()
    .required("La descripción es requerida.")
    .min(20, "La descripción debe tener al menos 20 caracteres.")
    .max(255, "La descripción debe tener menos de 255 caracteres."),
  mainCategoryId: Yup.string().required("La categoría principal es requerida."),
  subcategories: Yup.array().of(Yup.string()),
  difficultyId: Yup.string().required("La dificultad es requerida."),
  prepTime: Yup.number()
    .typeError("El tiempo de preparación debe ser un numero")
    .required("El tiempo de prepración es requerido."),
  ingredients: Yup.array().min(
    1,
    "Debes agregar al menos un ingrediente a tu receta"
  ),
  instructions: Yup.string()
    .min(50, "Da más detalles en los pasos.")
    .max(5000, "Da menos detalles en los pasos.")
    .required("Los pasos son requeridos."),
});

const evaluateImageDimensions = (image: any): Promise<boolean> => {
  if (!image) return Promise.resolve(false);
  if (typeof image === "string") return Promise.resolve(true);
  return new Promise<boolean>((resolve) => {
    const imageObj = new Image();
    imageObj.src = URL.createObjectURL(image);
    imageObj.onload = () => {
      const isWithinLimits =
        imageObj.width <= MAX_IMAGE_SIZE && imageObj.height <= MAX_IMAGE_SIZE;
      resolve(isWithinLimits);
    };
  });
};

// const evaluateImageType = (image: any): Promise<boolean> => {
//   if (!image) return Promise.resolve(false);
//   return new Promise<boolean>((resolve) => {
//     const isJpegOrJpg =
//       image.type === "image/jpeg" || image.type === "image/jpg";
//     resolve(isJpegOrJpg);
//   });
// };
// const evaluateImageSize = (image: any): Promise<boolean> => {
//   if (!image) return Promise.resolve(false);
//   return new Promise<boolean>((resolve) => {
//     const isWithinLimits = image.size <= 1024 * 1024 * 1;
//     resolve(isWithinLimits);
//   });
// };

export const tooltipsForValidation = {
  image: (
    <>
      <>‣ Procura que la imagen este centrada y sea cuadrada.</>
      <br />
      <>‣ La imagen no debe medir más de 768px de alto y 768px de ancho.</>
      <br />
      <>‣ Debe ser de tipo .jpg o .jpeg y debe pesar menos de 1MB.</>
    </>
  ),
  mainCategory:
    "La categoría principal tendrá prioridad en las búsquedas y para destacar tu receta.",
  secondaryCategories:
    "Puedes seleccionar hasta cuatro categorías secundarias. ¡Ayudarán a los usuarios a encontrar tu receta!",
  difficulty: "Dinos que tan díficil te parece realizar esta receta.",
  ingredients: (
    <>
      <>Agrega los ingredientes que necesitas para realizar tu receta.</>
      <br />
      <>
        ¡Pon los más importantes primero! De esa forma tu receta aparecerá más
        frecuentemente como recomendada.
      </>
    </>
  ),
  saveAsDraft: "Guarda tu receta para terminarla más tarde. ¡No te preocupes!",
};
