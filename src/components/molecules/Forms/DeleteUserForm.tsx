import React from "react";
import Button from "../../atoms/Buttons/Button";
// import ButtonGoogleSignIn from "../../atoms/Buttons/ButtonGoogleSignIn";
import { useFormik } from "formik";
import Input from "../../atoms/Inputs/Input";
import InputErrorText from "../../atoms/Inputs/InputErrorText";
import Label from "../../atoms/Inputs/Label";
import { ForgotPasswordValidationForm } from "./validations/ForgotPasswordValidationForm";

interface DeleteUserFormProps {
  onSubmitCallback: (username: string) => Promise<void>;
  className?: string;
}

const DeleteUserForm: React.FC<DeleteUserFormProps> = ({
  onSubmitCallback,
  className,
}) => {
  const formik = useFormik({
    initialValues: {
      username: "pablodev",
    },
    validationSchema: ForgotPasswordValidationForm,
    onSubmit: (values) => {
      onSubmitCallback(values.username);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={className ? className : "col-span-12 grid grid-cols-12 gap-5"}
    >
      <div className="col-span-12">
        <Label htmlFor="username">Usuario</Label>
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
        extraClasses="col-span-12 w-full"
      >
        Eliminar Usuario
      </Button>
    </form>
  );
};

export default DeleteUserForm;
