import BackgroundImage from "../../../assets/images/background.jpg";
import Icon from "../../atoms/Icons/Icons";

type BackgroundHeaderProps = {
  sectionHeight?: string;
  iconWidth?: string;
};

const BackgroundHeader = ({
  sectionHeight = "322px",
  iconWidth = "194px",
}: BackgroundHeaderProps) => {
  return (
    <section
      className="background-header relative flex w-full items-center justify-center border-b-8 border-b-primary"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "repeat",
        backgroundOrigin: "center",
        backgroundPosition: "center",
        height: sectionHeight,
      }}
    >
      <div className="mb-12" style={{ width: iconWidth }}>
        <Icon name="quiche" className="h-full fill-primary" />
      </div>
    </section>
  );
};

export default BackgroundHeader;
