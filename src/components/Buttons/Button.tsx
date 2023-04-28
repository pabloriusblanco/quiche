import React, { ReactNode } from "react";
import { ColorTypes } from "../../utils/colors";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonType?: ColorTypes;
}

const Button = ({
  children,
  buttonType = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`rounded-md px-4 py-2 font-medium text-white bg-${buttonType} hover:bg-${buttonType}-light transition-all`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
