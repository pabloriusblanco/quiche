import React, { useEffect, useState } from "react";
import Button from "../../../atoms/Buttons/Button";

const GoToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / 20; // Adjust the scrolling speed here

    const animateScroll = () => {
      window.scrollBy(0, scrollStep);

      if (window.scrollY > 0) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
  };

  const isVisibleClass = isVisible ? "opacity-100" : "opacity-0";

  return (
    <Button
      buttonStyle="filled"
      color="primary"
      extraClasses={`text-white z-50 fixed right-10 bottom-10 text-[12px] ${isVisibleClass}`}
      onClick={scrollToTop}
    >
      Ir arriba
    </Button>
  );
};

export default GoToTopButton;
