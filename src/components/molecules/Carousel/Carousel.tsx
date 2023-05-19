import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { SampleNextArrow, SamplePrevArrow } from "./Arrows";
import { carouselSettingOptions } from "./CarouselConfig";

interface CarouselProps {
  children: React.ReactNode;
  config: "default" | "small" | "medium" | "large" | "full";
}

const Carousel = ({ children, config = "default" }: CarouselProps) => {
  const settings = {
    ...carouselSettingOptions[config],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {React.Children.map(children, (child) => (
        <>{child}</>
      ))}
    </Slider>
  );
};

export default Carousel;
