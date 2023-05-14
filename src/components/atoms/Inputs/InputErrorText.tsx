type InputErrorTextProps = {
  children: React.ReactNode;
};

const InputErrorText = ({ children }: InputErrorTextProps) => {
  return (
    <div className="relative flex justify-end">
      <span className="absolute text-[12px] text-danger">{children}</span>
    </div>
  );
};

export default InputErrorText;
