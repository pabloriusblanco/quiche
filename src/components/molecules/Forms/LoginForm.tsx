import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import Button from "../../atoms/Buttons/Button";
import ButtonGoogleSignIn from "../../atoms/Buttons/ButtonGoogleSignIn";
import Input from "../../atoms/Inputs/Input";
import Label from "../../atoms/Inputs/Label";
import Separator from "../../atoms/Separator/Separator";
import LoginFormContainer from "./LoginFormContainer";

interface LoginFormProps {
  onSubmit: (values: { email: string; password: string }) => void;
  closeModal: () => void;
  handleRegisterClick: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  closeModal,
  handleRegisterClick,
}) => {
  const auth = useAuth(); 
  const navigate = useNavigate();

  const executeSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { email, password } = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    const result = await auth.signIn(email, password);
    if (result.success) {
      console.log(result);
      closeModal();
    } else {
      console.log(result);
      alert(result.message);
    }
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   const values = {
  //     email: formData.get("email") as string,
  //     password: formData.get("password") as string,
  //   };
  //   onSubmit(values);
  // };

  return (
    <LoginFormContainer key={"loginFormContainer"}>
      <form
        onSubmit={executeSignIn}
        className="col-span-12 grid grid-cols-12 gap-5"
      >
        <div className="col-span-12">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            defaultValue={"pabloriusblanco@gmail.com"}
            placeholder="juanperez@ejemplo.com"
            required
          />
        </div>
        <div className="col-span-12">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="*******"
            defaultValue={"101693518573633141042"}
            required
          />
        </div>
        <Button
          color="primary"
          type="submit"
          className="w-full col-span-12"
        >
          Iniciar Sesión
        </Button>
        <Separator text="o utiliza" />
        <ButtonGoogleSignIn
          extraClasses="col-span-12 w-full"
          closeModal={closeModal}
        />
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
