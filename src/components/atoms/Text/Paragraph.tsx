import React from "react";
import { TextWeightType, TitleType } from "./TextsTypes";
import { ColorTypes } from "../../../utils/Colors";

type ParagraphProps = {
  children: React.ReactNode;
  color?: ColorTypes | string;
  letterSpacing?: string;
  weight?: TextWeightType;
  className?: string;
};

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  color = 'black',
  weight = TextWeightType.Normal,
  letterSpacing = "normal",
  className = "",
}) => {
  return (
    <p
      style={{ letterSpacing: letterSpacing }}
      className={`text-${color} ${weight} ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
