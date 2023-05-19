import React, { InputHTMLAttributes, Ref } from "react";

// input props type that extends from input html attributes and add extra props

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  validationError?: boolean;
  forwardedRef?: Ref<HTMLInputElement>
}

const Input: React.FC<InputProps> = ({ validationError, ...props }) => {
  const borderClasses = validationError
    ? "border-danger hover:border-danger-dark focus:border-danger-dark focus-visible:border-danger-dark"
    : "border-gray hover:border-primary focus:border-primary focus-visible:border-primary";

  return (
    <input
      autoComplete="off"
      className={`w-full rounded-xl border px-3 py-[10px] text-[12px] text-black placeholder:text-[12px] placeholder:italic placeholder:text-gray focus:outline-none ${borderClasses}`}
      {...props}
    />
  );
};

export default Input;
