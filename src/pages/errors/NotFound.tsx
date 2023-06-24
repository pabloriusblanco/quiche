import Lottie from "lottie-react";
import animationData from "../../assets/lottie/404.json";
import Button from "../../components/atoms/Buttons/Button";
import LinkBasic from "../../components/atoms/Link/LinkBasic";
import Paragraph from "../../components/atoms/Text/Paragraph";
import {
  TextWeightType,
  TitleType,
} from "../../components/atoms/Text/TextsTypes";
import Title from "../../components/atoms/Text/Title";

const NotFound = () => {
  return (
    <>
      {/* <BackgroundHeader />
      <HomeSearch /> */}
      <section className="container flex h-full items-center justify-center">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6 flex justify-end">
            <div className="relative flex h-[300px] w-[320px] items-center justify-center overflow-hidden bg-black">
              <div className="absolute">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  style={{ width: 400, height: 400 }}
                  renderer="svg"
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-span-6 flex flex-col items-start justify-center gap-4">
            <Title
              weight={TextWeightType.Bold}
              titleType={TitleType.H2}
              text="Página no encontrada"
              color="black"
              className="w-fit"
            />
            <Paragraph color="gray" className="w-1/2 text-[12px]">
              La página que estás buscando no existe o ha sido eliminada. Pulsa
              el botón de abajo para volver a la página principal.
            </Paragraph>
            <LinkBasic to="/">
              <Button buttonStyle="filled" color="primary">
                Página principal
              </Button>
            </LinkBasic>
          </div>
        </div>
      </section>
      {/* <BannerQuicheApp /> */}
    </>
  );
};

export default NotFound;
