import { TextWeightType, TitleType } from "../../atoms/Text/TextsTypes";
import Title from "../../atoms/Text/Title";

type LoginFormContainerProps = {
  children?: React.ReactNode;
};

const LoginFormContainer: React.FC<LoginFormContainerProps> = ({
  children,
}: LoginFormContainerProps) => {
  return (
    <div className="grid grid-cols-12 gap-5 px-5 py-7">
      <div className="col-span-12">
        <Title
          color="black"
          text="Iniciar sesión"
          weight={TextWeightType.SemiBold}
          titleType={TitleType.H3}
          extraClasses="col-span-12"
        />
        <p className="text-[12px] text-gray">
          ¡Ingresa el Email y Password que utilizaste para
          registrarte o utiliza tu cuenta de Google!
        </p>
      </div>
      {children}
    </div>
  );
};

export default LoginFormContainer;
