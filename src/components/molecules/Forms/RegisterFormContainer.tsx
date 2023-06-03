import { TextWeightType, TitleType } from "../../atoms/Text/TextsTypes";
import Title from "../../atoms/Text/Title";

type RegisterFormContainerProps = {
  children?: React.ReactNode;
};

const RegisterFormContainer: React.FC<RegisterFormContainerProps> = ({
  children,
}: RegisterFormContainerProps) => {
  return (
    <div className="grid col-span-12 grid-cols-12 gap-5 px-5 py-7">
      <div className="col-span-12">
        <Title
          color="black"
          text="Registrarse"
          weight={TextWeightType.SemiBold}
          titleType={TitleType.H3}
        />
        <p className="text-[12px] text-gray">
          Completa el formulario de registro para crear tu cuenta.
        </p>
      </div>
      {children}
    </div>
  );
};

export default RegisterFormContainer;
