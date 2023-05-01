import useModal from "../../../hooks/useModal";
import { TextWeightType, TitleType } from "../../atoms/Text/TextsTypes";
import Title from "../../atoms/Text/Title";
import RegisterForm from "./RegisterForm";

type LoginFormContainerProps = {
  children?: React.ReactNode;
};

const LoginFormContainer: React.FC<LoginFormContainerProps> = ({
  children,  
}: LoginFormContainerProps) => {
  const { openModal, closeModal } = useModal({
    children: (
      <RegisterForm
        onSubmit={() => {
          console.log("submit");
        }}
      />
    ),
  });

  const handleRegisterClick = () => {
    openModal();
  };

  return (
    <div className="grid grid-cols-12 gap-5 px-5 py-7">
      <Title
        color="black"
        text="Iniciar sesión"
        weight={TextWeightType.SemiBold}
        titleType={TitleType.H3}
        extraClasses="col-span-12"
      />
      <p className="col-span-12 text-sm text-gray">
        Inicia sesión ingresando el Email y Password que utilizaste para
        registrarte o utiliza tu cuenta de Google!
      </p>
      {children}
      <div className="col-span-12">
        <p
          className="col-span-12 cursor-pointer text-right text-sm text-gray"
          onClick={handleRegisterClick}
        >
          ¿No tienes cuenta? Registrate
        </p>
      </div>
    </div>
  );
};

export default LoginFormContainer;
