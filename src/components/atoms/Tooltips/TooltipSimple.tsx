import { Tooltip } from "react-tooltip";

type TooltipSimpleProps = {
  id: string;
  title?: string;
  text?: string;
  children?: React.ReactNode;
  place?: "top" | "bottom" | "left" | "right";
};

const TooltipSimple = ({
  id,
  title,
  text,
  children,
  place,
}: TooltipSimpleProps) => {
  return (
    <Tooltip
      id={id}
      className="rounded-lg bg-black opacity-[80] shadow-light z-50"
      place={place}
    >
      <div className="max-w-[200px]">
        {title && <p className="text-[11px] font-[600] text-white">{title}</p>}
        {text && <p className="text-[11px] text-white">{text}</p>}
        {children && children}
      </div>
    </Tooltip>
  );
};

export default TooltipSimple;
