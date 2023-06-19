import { useFormik } from "formik";
import Input from "../../../atoms/Inputs/Input";
import Button from "../../../atoms/Buttons/Button";
import InputErrorText from "../../../atoms/Inputs/InputErrorText";
import Label from "../../../atoms/Inputs/Label";
import { SubmitNewPasswordValidationForm } from "../validations/ForgotPasswordValidationForm";

interface SubmitNewPasswordFormProps {
  onSubmitCallback: (
    code: string,
    username: string,
    password: string
  ) => Promise<void>;
  username: string;
  className?: string;
}

export const SubmitNewPasswordForm = ({
  onSubmitCallback,
  username = "",
  className,
}: SubmitNewPasswordFormProps) => {
  const formik = useFormik({
    initialValues: {
      code: "",
      username: username,
      password: "",
      repeat_password: "",
    },
    validationSchema: SubmitNewPasswordValidationForm,
    onSubmit: (values) => {
      onSubmitCallback(values.code, values.username, values.password);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={className ? className : ""}>
      <div className="col-span-12 flex flex-col">
        <Label htmlFor="email">Código</Label>
        <Input
          type="text"
          id="code"
          name="code"
          placeholder="Código de verificación de 6 dígitos"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.code}
          validationError={!!formik.errors.code && formik.touched.code}
        />
        {formik.errors.code && formik.touched.code && (
          <InputErrorText>{formik.errors.code}</InputErrorText>
        )}
      </div>
      <div className="col-span-12 flex flex-col">
        <Label htmlFor="email">Username</Label>
        <Input
          type="text"
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
      <div className="col-span-12">
        <Label htmlFor="password">Nuevo Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="*******"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          // defaultValue="12345678"
          validationError={!!formik.errors.password && formik.touched.password}
        />
        {formik.errors.password && formik.touched.password && (
          <InputErrorText>{formik.errors.password}</InputErrorText>
        )}
      </div>
      <div className="col-span-12">
        <Label htmlFor="repeat_password">Repita Nuevo Password</Label>
        <Input
          type="password"
          id="repeat_password"
          name="repeat_password"
          placeholder="*******"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repeat_password}
          // defaultValue="12345678"
          validationError={
            !!formik.errors.repeat_password && formik.touched.repeat_password
          }
        />
        {formik.errors.repeat_password && formik.touched.repeat_password && (
          <InputErrorText>{formik.errors.repeat_password}</InputErrorText>
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

export default SubmitNewPasswordForm;
