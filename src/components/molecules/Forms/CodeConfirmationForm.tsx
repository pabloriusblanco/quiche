import { useFormik } from "formik";
import Button from "../../atoms/Buttons/Button";
import Input from "../../atoms/Inputs/Input";
import InputErrorText from "../../atoms/Inputs/InputErrorText";
import { CodeConfirmationValidationForm } from "./validations/CodeConfirmationValidationForm";

interface CodeConfirmationFormProps {
  onSubmitCallback: (comment: string) => void;
  className?: string;
}

// const confirmSignUpWithCode = async (code: string) => {
//   auth.toggleConfirmationModal();
//   spinnerModal.startLoading({ text: "Confirmando código de verificación"});
//   const result = await auth.confirmSignUp(auth.username, code);
//   if (result.success) {
//     console.log("succes", result);
//     spinnerModal.stopLoading();
//   } else {
//     console.log("error", result);
//     spinnerModal.stopLoading();
//   }
// };

const CodeConfirmationForm = ({
  onSubmitCallback,
  className,
}: CodeConfirmationFormProps) => {
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: CodeConfirmationValidationForm,
    onSubmit: (values) => {
      onSubmitCallback(values.code);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={className ? className : ""}>
      <div className="col-span-12 flex flex-col">
        <Input
          type="text"
          id="code"
          name="code"
          placeholder="Código de seis dígitos"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.code}
          validationError={!!formik.errors.code && formik.touched.code}
        />
        {formik.errors.code && formik.touched.code && (
          <InputErrorText>{formik.errors.code}</InputErrorText>
        )}
      </div>
      <Button
        color={!formik.isValid ? "gray" : "primary"}
        type="submit"
        extraClasses="w-full"
      >
        Enviar
      </Button>
    </form>
  );
};

export default CodeConfirmationForm;
