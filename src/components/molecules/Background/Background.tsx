import BackgroundImage from "../../../assets/images/background.jpg";
import MemoQuicheLogoPrimary from "../../../assets/logos/quiche-logo-primary";
import Icon from "../../atoms/Icons";

const BackgroundHeader = () => {
  return (
    <section
      className="background-header relative flex h-[322px] w-full items-center justify-center border-b-8 border-b-primary"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "repeat",
        backgroundOrigin: "center",
        backgroundPosition: "center",
      }}
    >
      <div className="mb-12 w-[194px]">
        <Icon name="quiche" className="fill-primary h-full" />
      </div>
    </section>
  );
};

export default BackgroundHeader;
