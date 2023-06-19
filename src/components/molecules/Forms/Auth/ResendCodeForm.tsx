import { useFormik } from "formik";
import Button from "../../../atoms/Buttons/Button";
import InputErrorText from "../../../atoms/Inputs/InputErrorText";
import { ResendCodeValidationForm } from "../validations/ResendCodeValidationForm";
import Input from "../../../atoms/Inputs/Input";


interface ResendCodeFormProps {
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

const ResendCodeForm = ({
  onSubmitCallback,
  className,
}: ResendCodeFormProps) => {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: ResendCodeValidationForm,
    onSubmit: (values) => {
      onSubmitCallback(values.username);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={className ? className : ""}>
      <div className="col-span-12 flex flex-col">
        <Input
          type="username"
          id="username"
          name="username"
          placeholder="Juan94"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          validationError={!!formik.errors.username && formik.touched.username}
        />
        {formik.errors.username && formik.touched.username && (
          <InputErrorText>{formik.errors.username}</InputErrorText>
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

export default ResendCodeForm;
