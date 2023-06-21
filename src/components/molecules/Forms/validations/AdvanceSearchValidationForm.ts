import * as Yup from "yup";

export const AdvanceSearchValidationForm = Yup.object({
  name: Yup.string().min(4, "El nombre debe tener al menos 4 caracteres"),
  username: Yup.string().min(
    4,
    "El username del autor debe tener al menos 4 caracteres"
  ),
  timeFrom: Yup.number()
    .typeError("El tiempo mínimo debe ser un numero")
    .max(9999, "El tiempo mínimo debe ser menor"),
  timeTo: Yup.number()
    .typeError("El tiempo máximo debe ser un numero")
    .test(
      "timeTo",
      "El tiempo máximo debe ser mayor o igual al tiempo de inicio",
      function (value) {
        const timeFrom = this.resolve(Yup.ref("timeFrom")) as number;
        if (
          timeFrom !== undefined &&
          timeFrom !== null &&
          value !== undefined
        ) {
          return value !== undefined && value !== null && value >= timeFrom;
        }
        return true;
      }
    )
    .max(9999, "El tiempo máximo debe ser menor"),
});
