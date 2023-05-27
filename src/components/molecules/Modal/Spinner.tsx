import Lottie from "lottie-react";
import animationData from "../../../assets/lottie/cooking.json";
import Paragraph from "../../atoms/Text/Paragraph";

interface SpinnerProps {
  lottieHeight?: number;
  lottieWidth?: number;
  children?: React.ReactNode;
}

const Spinner = ({
  children = (
    <Paragraph color="black" className="text-[12px]">
      Procesando su solicitud
    </Paragraph>
  ),
  lottieHeight = 140,
  lottieWidth = 140,
}: SpinnerProps) => {
  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center bg-black bg-opacity-75">
      <div className="fade-in-bottom relative flex flex-col items-center justify-center rounded-2xl bg-white p-5">
        <div className="flex h-20 w-20 items-center justify-center overflow-hidden">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: lottieHeight, height: lottieWidth }}
            renderer="svg"
            rendererSettings={{
              preserveAspectRatio: "xMidYMid slice",
            }}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Spinner;
