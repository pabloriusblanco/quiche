import { CustomArrowProps } from "react-slick";
import Icon from "../../atoms/Icons/Icons";

interface SampleArrowProps extends CustomArrowProps {
  className?: string;
}

export const SampleNextArrow = (props: SampleArrowProps) => {
  const { className, onClick } = props;
  return (
    <div
      className={`shadow-light z-10 flex h-8 w-8 translate-x-2 items-center justify-center rounded-full border border-gray bg-white hover:bg-white ${className}`}
      onClick={onClick}
    >
      <Icon
        name="arrowright"
        className="h-[16px] fill-black hover:fill-black-dark"
      />
    </div>
  );
};

export const SamplePrevArrow = (props: SampleArrowProps) => {
  const { className, onClick } = props;
  return (
    <div
      className={`shadow-light z-10 flex h-8 w-8 translate-x-0 items-center justify-center rounded-full border border-gray bg-white hover:bg-white ${className}`}
      onClick={onClick}
    >
      <Icon
        name="arrowleft"
        className="h-[16px] fill-black hover:fill-black-dark"
      />
    </div>
  );
};
