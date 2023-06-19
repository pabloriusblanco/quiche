import React, { LabelHTMLAttributes, ReactNode } from "react";
import { ColorTypes } from "../../../utils/Colors";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  labelType?: ColorTypes;
  extraClasses?: string;
}

const Label: React.FC<LabelProps> = ({
  labelType = "black",
  extraClasses = "mb-1",
  ...props
}) => {
  return (
    <label
      className={`${extraClasses} w-fit block text-[12px] font-medium text-${labelType}`}
      {...props}
    />
  );
};

export default Label;
