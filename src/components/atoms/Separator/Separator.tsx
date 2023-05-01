import React from "react";

type SeparatorProps = {
  text?: string;
  extraHRClasses?: string;
  extraContainerClasses?: string;
  extraTextClasses?: string;
};

const Separator: React.FC<SeparatorProps> = ({
  text,
  extraHRClasses,
  extraContainerClasses,
  extraTextClasses,
}) => {
  return (
    <div
      className={`col-span-12 flex w-full items-center justify-center gap-5 ${extraContainerClasses}`}
    >
      <hr className={`border-1 w-full border-gray-light ${extraHRClasses}`} />
      {text && (
        <>
          <span
            className={`whitespace-nowrap text-sm text-gray ${extraTextClasses}`}
          >
            {text}
          </span>
          <hr
            className={`border-1 w-full border-gray-light ${extraHRClasses}`}
          />
        </>
      )}
    </div>
  );
};

export default Separator;
