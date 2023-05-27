import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../atoms/Buttons/Button";
// import ButtonGoogleSignIn from "../../atoms/Buttons/ButtonGoogleSignIn";
import { useFormik } from "formik";
import Input from "../../atoms/Inputs/Input";
import InputErrorText from "../../atoms/Inputs/InputErrorText";
import Label from "../../atoms/Inputs/Label";
import LoginFormContainer from "./LoginFormContainer";
import { loginFormValidation } from "./validations/LoginFormValidation";

interface LoginFormProps {
  onSubmitCallback: (email: string, password: string) => Promise<void>;
  closeModal: () => void;
  handleRegisterClick: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  closeModal,
  handleRegisterClick,
  onSubmitCallback,
}) => {
  const formik = useFormik({
    initialValues: {
      // username: "",
      email: "test1@hotmail.com",
      password: "123@Password!",
    },
    validationSchema: loginFormValidation,
    onSubmit: (values) => {
      onSubmitCallback(values.email, values.password);
    },
  });

  return (
    <LoginFormContainer key={"loginFormContainer"}>
      <form
        onSubmit={formik.handleSubmit}
        className="col-span-12 grid grid-cols-12 gap-5"
      >
        <div className="col-span-12">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="juanperez@ejemplo.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            validationError={!!formik.errors.email && formik.touched.email}
          />
          {formik.errors.email && formik.touched.email && (
            <InputErrorText>{formik.errors.email}</InputErrorText>
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
            validationError={
              !!formik.errors.password && formik.touched.password
            }
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
        <div className="col-span-12">
          <p className="col-span-12 cursor-pointer text-right text-sm text-gray">
            ¿No tienes cuenta?
            <span
              className="ml-1 text-primary underline"
              onClick={() => {
                closeModal();
                handleRegisterClick();
              }}
            >
              Regístrate
            </span>
          </p>
        </div>
      </form>
    </LoginFormContainer>
  );
};

export default LoginForm;
