import React, { LabelHTMLAttributes, ReactNode } from "react";
import { ColorTypes } from "../../../utils/Colors";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  labelType?: ColorTypes;
}

const Label: React.FC<LabelProps> = ({ labelType = "black", ...props }) => {
  return (
    <label
      className={`mb-1 block text-[12px] font-medium text-${labelType}`}
      {...props}
    />
  );
};

export default Label;
