import BackgroundImage from "../../../assets/images/background.jpg";
import MemoQuicheLogoPrimary from "../../../assets/logos/quiche-logo-primary";

const BackgroundHeader = () => {
  return (
    <div
      className="background-header relative flex h-[322px] w-full items-center justify-center border-b-8 border-b-primary"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "repeat",
        backgroundOrigin: "center",
        backgroundPosition: "center",
      }}
    >
      <div className="mb-12 w-[194px]">
        <MemoQuicheLogoPrimary fill="primary" />
      </div>
    </div>
  );
};

export default BackgroundHeader;
