type InputErrorTextProps = {
  children: React.ReactNode;
  className?: string;
};

/** @params className - Has a default value of "relative flex justify-end" */
const InputErrorText = ({ children, className = "relative flex justify-end"}: InputErrorTextProps) => {
  return (
    <div className={className}>
      <span className="absolute text-right text-[12px] text-danger">{children}</span>
    </div>
  );
};

export default InputErrorText;
