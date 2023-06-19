import React, { ReactNode } from "react";
import { ColorTypes } from "../../../utils/Colors";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color?: ColorTypes;
  buttonStyle?: "filled" | "outlined";
  extraClasses?: string;
}

const calculateButtonStyle = (
  buttonStyle: "filled" | "outlined",
  color: ColorTypes | "default"
) => {
  switch (buttonStyle) {
    case "filled":
      return `bg-${color} hover:bg-${color}-light text-white`;
    case "outlined":
      return `bg-transparent text-[400] hover:text-[600] text-${color} border border-${color} hover:bg-${color} hover:text-white`;
    default:
      return ``;
  }
};

const Button = ({
  children,
  color,
  extraClasses = "",
  buttonStyle = "filled",
  ...props
}: ButtonProps) => {
  const classes = `${extraClasses} rounded-xl px-4 py-2 font-medium transition-all `;
  const buttonStyleCalculated = calculateButtonStyle(
    buttonStyle,
    color ? color : "default"
  );

  return (
    <button className={`${classes} ${buttonStyleCalculated}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
