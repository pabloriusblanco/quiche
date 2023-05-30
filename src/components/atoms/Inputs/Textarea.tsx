import { InputHTMLAttributes, Ref, TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  validationError?: boolean;
}

const Textarea = ({ validationError, ...props }: TextareaProps) => {
  const borderClasses = validationError
    ? "border-danger hover:border-danger-dark focus:border-danger-dark focus-visible:border-danger-dark"
    : "border-gray hover:border-primary focus:border-primary focus-visible:border-primary";

  return (
    <textarea
      autoComplete="off"
      className={`w-full rounded-xl border px-3 py-[10px] text-[12px] text-black placeholder:text-[12px] placeholder:italic placeholder:text-gray focus:outline-none ${borderClasses}`}
      {...props}
    />
  );
};

export default Textarea;
