import { useFormik } from "formik";
import Button from "../../atoms/Buttons/Button";
import Input from "../../atoms/Inputs/Input";
import InputErrorText from "../../atoms/Inputs/InputErrorText";
import Label from "../../atoms/Inputs/Label";
import { ForgotPasswordValidationForm } from "./validations/ForgotPasswordValidationForm";

interface ForgotPasswordFormProps {
  onSubmitCallback: (comment: string) => Promise<void>;
  className?: string;
}

const ForgotPasswordForm = ({
  onSubmitCallback,
  className,
}: ForgotPasswordFormProps) => {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: ForgotPasswordValidationForm,
    onSubmit: (values) => {
      onSubmitCallback(values.username);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={className ? className : ""}>
      <div className="col-span-12 flex flex-col">
        <Label htmlFor="email">Username</Label>
        <Input
          type="username"
          id="username"
          name="username"
          placeholder="Juan89"
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

export default ForgotPasswordForm;
