import downloadPhone from "../../../assets/images/downloadPhone.png";
import PersonImage from "../../../assets/images/quicheApp-person.jpg";
import PhoneImage from "../../../assets/images/quicheApp-phone.png";
import Paragraph from "../../atoms/Text/Paragraph";

const BannerQuicheApp = () => {
  return (
    <section
      className="bannerQuicheAppSection flex w-full md:h-[240px] lg:h-[210px] xl:h-[300px] 2xl:h-[346px]"
      style={{
        background: "linear-gradient(90deg, #F0BA23 41.37%, #F09E23 101.59%)",
      }}
    >
      <div className="relative hidden lg:flex">
        <img src={PersonImage} alt="person looking at his phone" />
      </div>
      <div className="2xl:-translate-x-[1/4] relative hidden h-full lg:flex lg:-translate-x-[80px] xl:-translate-x-[90px] 2xl:-translate-x-[100px] ">
        <div className="absolute bottom-0 h-3/4 rounded-t-[25px]  bg-[#F09E23] lg:w-[120px] xl:w-[160px]  "></div>
        <div className="absolute bottom-0 h-1/2 -translate-x-[35px] rounded-t-[25px] bg-black lg:w-[60px] xl:w-[95px] xl:-translate-x-[45px]"></div>
      </div>
      <div className="relative flex -translate-y-[16px] md:h-[260px] md:translate-x-2/4 lg:h-[220px] lg:-translate-x-[100px] xl:h-[300px] xl:-translate-x-[115px] 2xl:h-[346px] 2xl:-translate-x-[150px]">
        <img src={PhoneImage} alt="mobile phone showing quiche app" />
      </div>

      <div className="absolute z-50 h-[220px] w-full md:h-[240px] lg:h-[210px] xl:h-[300px] 2xl:h-[346px]">
        <div className="container relative h-full">
          <div className="relative flex h-full w-full items-center justify-center lg:absolute lg:justify-end ">
            <div className="flex w-[260px] flex-col items-center gap-2 md:ml-10 lg:ml-0 lg:w-[240px] lg:items-end xl:w-1/4 xl:gap-4">
              <Paragraph
                color="black"
                className="text-center font-bold lg:text-right lg:text-[12px] xl:text-[18px]"
              >
                Cada vez falta menos para llevar tu comunidad favorita a todos
                lados
              </Paragraph>
              <div className="border-y-4 border-white/50 pb-2 pt-1 ">
                <h6 className="text-[30px] font-bold leading-snug tracking-wider text-white xl:text-[35px]">
                  Quiche App
                </h6>
                <Paragraph
                  color="white"
                  className="text-center text-[9px] font-[500] capitalize tracking-wider xl:text-[10px] 2xl:text-[11px]"
                >
                  TU LUGAR, TUS RECETAS, TU COMUNIDAD
                </Paragraph>
              </div>
              <div>
                <Paragraph
                  color="black"
                  className="mb-2 mr-1 hidden text-right text-[11px] font-[500] capitalize tracking-wider lg:hidden xl:block"
                >
                  PROXIMAMENTE
                </Paragraph>
                <img
                  className="w-[200px] "
                  src={downloadPhone}
                  alt="dietary restrictions image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerQuicheApp;
