import { ResponsiveObject } from "react-slick";

interface SliderSettings {
  arrows?: boolean;
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;  
  swipeToSlide?: boolean,
  cssEase?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out";
  responsive?: ResponsiveObject[];
}

type carouselSettingOptionsType = {
  [key: string]: SliderSettings;
};

export const carouselSettingOptions: carouselSettingOptionsType = {
  default: {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    cssEase: "ease-in-out",
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  },
};
