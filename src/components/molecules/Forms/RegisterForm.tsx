import Button from "../../atoms/Buttons/Button";
import Input from "../../atoms/Inputs/Input";
import Label from "../../atoms/Inputs/Label";
import RegisterFormContainer from "./RegisterFormContainer";

type RegisterFormProps = {
  onSubmit: (values: { email: string; password: string }) => void;
  closeModal: () => void;
  handleLoginClick: () => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  closeModal,
  handleLoginClick,
}: RegisterFormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    onSubmit(values);
  };

  return (
    <RegisterFormContainer>
      <form
        onSubmit={handleSubmit}
        className="col-span-12 grid grid-cols-12 gap-5"
      >
        <div className="col-span-12">
          <Label htmlFor="name">Nombre</Label>
          <Input type="name" id="name" placeholder="Juan" required />
        </div>
        <div className="col-span-12">
          <Label htmlFor="lastname">Apellido</Label>
          <Input type="lastname" id="lastname" placeholder="Perez" required />
        </div>
        <div className="col-span-12">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="juanperez@ejemplo.com"
            required
          />
        </div>
        <div className="col-span-12">
          <Label htmlFor="phone">Teléfono</Label>
          <Input type="phone" id="phone" placeholder="541166778899" />
        </div>
        <div className="col-span-12">
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="*******" required />
        </div>
        <div className="col-span-12">
          <Label htmlFor="repeat_password">Repeat Password</Label>
          <Input
            type="password"
            id="repeat_password"
            placeholder="*******"
            required
          />
        </div>
        <Button
          buttonType="primary"
          type="submit"
          extraClasses="w-full col-span-12"
        >
          Regístrate
        </Button>
        <div className="col-span-12">
          <p className="col-span-12 cursor-pointer text-right text-sm text-gray">
            ¿Ya tienes cuenta?
            <span
              className="ml-1 text-primary underline"
              onClick={() => {
                closeModal();
                handleLoginClick();
              }}
            >
              Inicia Sesión
            </span>
          </p>
        </div>
      </form>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
