import downloadPhone from "../../../assets/images/downloadPhone.png";
import PersonImage from "../../../assets/images/quicheApp-person.jpg";
import PhoneImage from "../../../assets/images/quicheApp-phone.jpg";
import Paragraph from "../../atoms/Text/Paragraph";

const BannerQuicheApp = () => {
  return (
    <section
      className="flex h-[378px] w-full"
      style={{
        background: "linear-gradient(90deg, #F0BA23 41.37%, #F09E23 101.59%)",
      }}
    >
      <div className="relative flex">
        <img src={PersonImage} alt="dietary restrictions image" />
      </div>
      <div className="relative flex h-full -translate-x-[165px]">
        <div className="absolute bottom-0 h-3/4 w-[230px] rounded-t-[25px] bg-[#F09E23]"></div>
        <div className="absolute bottom-0 h-1/2 w-[95px] -translate-x-[45px] rounded-t-[25px] bg-black"></div>
      </div>
      <div className="relative flex h-[378px] -translate-x-[200px] -translate-y-[16px]">
        <img src={PhoneImage} alt="dietary restrictions image" />
      </div>

      <div className="absolute z-50 h-[378px] w-full">
        <div className="container relative h-full">
          <div className="absolute flex h-full w-full items-center justify-end ">
            <div className="flex w-1/4 flex-col items-end space-y-4">
              <Paragraph
                color="black"
                className="text-right text-[18px] font-bold"
              >
                Cada vez falta menos para llevar tu comunidad favorita a todos
                lados
              </Paragraph>
              <div className="border-y-4 border-white/50 pb-2 pt-1 ">
                <h6 className="text-[35px] font-bold leading-snug tracking-wider text-white">
                  Quiche App
                </h6>
                <Paragraph
                  color="white"
                  className="text-center text-[11px] font-[500] capitalize tracking-wider"
                >
                  TU LUGAR, TUS RECETAS, TU COMUNIDAD
                </Paragraph>
              </div>
              <div className="">
                <Paragraph
                  color="black"
                  className="mb-2 mr-1 text-right text-[11px] font-[500] capitalize tracking-wider"
                >
                  PROXIMAMENTE
                </Paragraph>
                <img src={downloadPhone} alt="dietary restrictions image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerQuicheApp;
