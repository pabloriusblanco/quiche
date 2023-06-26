import { useFormik } from "formik";
import React from "react";
import Button from "../../../atoms/Buttons/Button";
import InputErrorText from "../../../atoms/Inputs/InputErrorText";
import Label from "../../../atoms/Inputs/Label";
import { loginFormValidation } from "../validations/LoginFormValidation";
import Input from "../../../atoms/Inputs/Input";


interface LoginFormProps {
  onSubmitCallback: (username: string, password: string) => Promise<void>;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmitCallback }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginFormValidation,
    onSubmit: (values) => {
      onSubmitCallback(values.username, values.password);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="col-span-12 grid grid-cols-12 gap-5"
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
      <div className="col-span-12">
        <Label htmlFor="password">Password</Label>
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
      <Button
        color={!formik.isValid ? "gray" : "primary"}
        type="submit"
        extraClasses="col-span-12 w-full"
      >
        Iniciar Sesión
      </Button>
      {/* <Separator text="o utiliza" /> */}
      {/* <ButtonGoogleSignIn
          extraClasses="col-span-12 w-full"
          closeModal={closeModal}
        /> */}
    </form>
  );
};

export default LoginForm;
