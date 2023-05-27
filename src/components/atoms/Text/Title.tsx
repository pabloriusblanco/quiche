import React from "react";
import { TextWeightType, TitleType } from "./TextsTypes";
import { ColorTypes } from "../../../utils/Colors";

type TitleProps = {
  titleType?: TitleType;
  text: React.ReactNode;
  color: ColorTypes | string;
  weight: TextWeightType;
  className?: string;
};

const Title = ({
  titleType = TitleType.H3,
  text = "",
  color,
  weight,
  className,
}: TitleProps) => {
  const classes = `font-${weight} text-${color} ${className}`;
  let title: JSX.Element = <></>;
  switch (titleType) {
    case "h1":
      title = <h1 className={`text-2xl ${classes}`}>{text}</h1>;
      break;
    case "h2":
      title = <h2 className={`text-xl ${classes}`}>{text}</h2>;
      break;
    case "h3":
      title = <h3 className={`text-lg ${classes}`}>{text}</h3>;
      break;
    case "h4":
      title = <h4 className={`text-base ${classes}`}>{text}</h4>;
      break;
    case "h5":
      title = <h5 className={`text-sm ${classes}`}>{text}</h5>;
      break;
    case "h6":
      title = <h6 className={`text-xs ${classes}`}>{text}</h6>;
      break;
  }
  return title;
};

export default Title;
