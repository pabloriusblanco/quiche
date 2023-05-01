import React, { useState } from "react";
import ButtonGoogleSignIn from "../../atoms/Buttons/ButtonGoogleSignIn";
import Input from "../../atoms/Inputs/Input";
import Label from "../../atoms/Inputs/Label";
import Button from "../../atoms/Buttons/Button";
import LoginFormContainer from "./LoginFormContainer";
import Separator from "../../atoms/Separator/Separator";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  closeModal: () => void;
  handleRegisterClick: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  closeModal,
  handleRegisterClick,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <LoginFormContainer key={"loginFormContainer"}>
      <form
        onSubmit={handleSubmit}
        className="col-span-12 grid grid-cols-12 gap-5"
      >
        <div className="col-span-12">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="juanperez@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-span-12">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button
          buttonType="primary"
          type="submit"
          extraClasses="w-full col-span-12"
        >
          Iniciar Sesión
        </Button>
        <Separator text="o utiliza" />
        <ButtonGoogleSignIn extraClasses="col-span-12 w-full" />
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
