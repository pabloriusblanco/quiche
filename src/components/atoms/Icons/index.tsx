/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as comments } from "./assets/comments.svg";
import { ReactComponent as quiche } from "./assets/quiche.svg";
import { ReactComponent as likes } from "./assets/likes.svg";
import { ReactComponent as star } from "./assets/star.svg";
import { ReactComponent as breakfast } from "./assets/breakfast.svg";
import { ReactComponent as lunch } from "./assets/lunch.svg";
import { ReactComponent as easy } from "./assets/easy.svg";
import { ReactComponent as regular } from "./assets/regular.svg";
import { ReactComponent as hard } from "./assets/hard.svg";
import { ReactComponent as short } from "./assets/short.svg";
import { ReactComponent as arrowleft } from "./assets/arrowleft.svg";
import { ReactComponent as arrowright } from "./assets/arrowright.svg";
import { ReactComponent as dinner } from "./assets/pizza.svg";
import { ReactComponent as search } from "./assets/search.svg";

const iconsMap = {
  quiche,
  likes,
  comments,
  star,
  easy,
  regular,
  hard,
  short,
  breakfast,
  lunch,
  dinner,
  arrowleft,
  arrowright,
  search,
} as const;

export type IconsMap = typeof iconsMap;
export type IconsNames = keyof IconsMap;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconsNames;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
  svgProp?: React.SVGProps<SVGSVGElement>;
}

const Icon = ({ name, clickable, onClick, className, svgProp }: IconProps) => {
  const IconToRender = iconsMap[name];

  const handleClick = () => {
    if (clickable && onClick) onClick();
  };

  if (!IconToRender) return null;
  return (
    <IconToRender
      {...svgProp}
      className={`h-4 transition-all ${className ? className : ""}`}
      onClick={handleClick}
    />
  );
};

export default Icon;
