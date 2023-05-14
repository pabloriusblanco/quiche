/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as comments } from "./assets/comments.svg";
import { ReactComponent as likes } from "./assets/likes.svg";
import { ReactComponent as star } from "./assets/star.svg";
import { ReactComponent as lunch } from "./assets/lunch.svg";
import { ReactComponent as easy } from "./assets/easy.svg";
import { ReactComponent as short } from "./assets/short.svg";

const iconsMap = {
  likes,
  comments,
  star,
  easy,
  short,
  lunch,
} as const;

export type IconsMap = typeof iconsMap;
export type IconsNames = keyof IconsMap;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconsNames;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
  svgProp?: React.SVGProps<SVGSVGElement>;
  extraProps?: any;
}

const Icon = ({
  name,
  clickable,
  onClick,
  className,
  svgProp,
  extraProps,
}: IconProps) => {
  const IconToRender = iconsMap[name];
  
  const handleClick = () => {
    if (clickable && onClick) onClick();
  };

  if (!IconToRender) return null;
  return (
    <IconToRender
      {...svgProp}
      {...extraProps}
      className={`h-4 transition-all ${className ? className : ""}`}
      onClick={handleClick}
    />
  );
};

export default Icon;
