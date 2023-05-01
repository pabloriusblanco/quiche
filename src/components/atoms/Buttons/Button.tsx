import React, { ReactNode } from "react";
import { ColorTypes } from "../../../utils/Colors";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  buttonType: ColorTypes;
  extraClasses?: string;
}

const Button = ({
  children,
  buttonType = "primary",
  extraClasses = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`rounded-xl px-4 py-2 font-medium text-white bg-${buttonType} hover:bg-${buttonType}-light transition-all ${extraClasses}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
