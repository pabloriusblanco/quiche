import Button from "../../atoms/Buttons/Button";
import Input from "../../atoms/Inputs/Input";
import { TextWeightType, TitleType } from "../../atoms/Text/TextsTypes";
import Title from "../../atoms/Text/Title";

type RegisterFormProps = {
  onSubmit: (values: { email: string; password: string }) => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
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
    <div className="grid grid-cols-12 gap-5 px-5 py-7">
      <Title
        color="black"
        text="Regístrate"
        weight={TextWeightType.SemiBold}
        titleType={TitleType.H3}
        extraClasses="col-span-12"
      />
      <form onSubmit={handleSubmit} className="col-span-12">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12">
            <Input name="email" type="email" />
          </div>
          <div className="col-span-12">
            <Input name="password" type="password" />
          </div>
          <div className="col-span-12">
            <Button type="submit" buttonType="primary">
              Registrate
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
