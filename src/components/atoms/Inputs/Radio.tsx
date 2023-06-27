import { InputHTMLAttributes } from "react";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  className?: string;
}

const Radio = ({ id, name, className = "", ...props }: RadioProps) => {
  return (
    <input
      id={id}
      type="radio"
      name={name}
      autoComplete="off"
      className={`h-3 w-3 cursor-pointer appearance-none rounded-full border border-gray checked:border-primary checked:bg-primary-light checked:ring-1 checked:ring-primary checked:ring-offset-0 focus:outline-none ${className}`}
      {...props}
    />
  );
};

export default Radio;
