import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      autoComplete="off"
      className="w-full rounded-xl border border-gray px-3 py-[10px] text-[12px] text-black placeholder:text-[12px] placeholder:italic placeholder:text-gray hover:border-primary focus:border-primary focus:outline-none focus-visible:border-primary"
      {...props}
    />
  );
};

export default Input;
