import { TextWeightType, TitleType } from "../../atoms/Text/TextsTypes";
import Title from "../../atoms/Text/Title";

type RegisterFormContainerProps = {
  children?: React.ReactNode;
};

const RegisterFormContainer: React.FC<RegisterFormContainerProps> = ({
  children,
}: RegisterFormContainerProps) => {
  return (
    <div className="grid grid-cols-12 gap-5 px-5 py-7">
      <Title
        color="black"
        text="Registrarse"
        weight={TextWeightType.SemiBold}
        titleType={TitleType.H3}
        extraClasses="col-span-12"
      />
      <p className="col-span-12 text-sm text-gray">
        Completa el formulario de registro para crear tu cuenta.
      </p>
      {children}
    </div>
  );
};

export default RegisterFormContainer;
