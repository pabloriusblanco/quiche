/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as comments } from "./assets/comments.svg";
import { ReactComponent as quiche } from "./assets/quiche.svg";
import { ReactComponent as ingredients } from "./assets/ingredients.svg";
import { ReactComponent as steps } from "./assets/steps.svg";
import { ReactComponent as userchecked } from "./assets/userchecked.svg";
import { ReactComponent as recipes } from "./assets/recipes.svg";
import { ReactComponent as likes } from "./assets/likes.svg";
import { ReactComponent as star } from "./assets/star.svg";
import { ReactComponent as logout } from "./assets/logout.svg";
import { ReactComponent as breakfast } from "./assets/categories/breakfast.svg";
import { ReactComponent as lunch } from "./assets/categories/lunch.svg";
import { ReactComponent as easy } from "./assets/easy.svg";
import { ReactComponent as regular } from "./assets/regular.svg";
import { ReactComponent as hard } from "./assets/hard.svg";
import { ReactComponent as short } from "./assets/short.svg";
import { ReactComponent as medium } from "./assets/medium.svg";
import { ReactComponent as long } from "./assets/long.svg";
import { ReactComponent as arrowleft } from "./assets/arrowleft.svg";
import { ReactComponent as arrowright } from "./assets/arrowright.svg";
import { ReactComponent as dinner } from "./assets/categories/pizza.svg";
import { ReactComponent as search } from "./assets/search.svg";
import { ReactComponent as arabic } from "./assets/categories/arabic.svg";
import { ReactComponent as asian } from "./assets/categories/asian.svg";
import { ReactComponent as burger } from "./assets/categories/burger.svg";
import { ReactComponent as celiac } from "./assets/categories/celiac.svg";
import { ReactComponent as chicken } from "./assets/categories/chicken.svg";
import { ReactComponent as dessert } from "./assets/categories/dessert.svg";
import { ReactComponent as drink } from "./assets/categories/drink.svg";
import { ReactComponent as fish } from "./assets/categories/fish.svg";
import { ReactComponent as haram } from "./assets/categories/haram.svg";
import { ReactComponent as italian } from "./assets/categories/italian.svg";
import { ReactComponent as kosher } from "./assets/categories/kosher.svg";
import { ReactComponent as lowcalories } from "./assets/categories/lowcalories.svg";
import { ReactComponent as meat } from "./assets/categories/meat.svg";
import { ReactComponent as cow } from "./assets/categories/meat.svg";
import { ReactComponent as nolactose } from "./assets/categories/nolactose.svg";
import { ReactComponent as nomeat } from "./assets/categories/nomeat.svg";
import { ReactComponent as nooxalate } from "./assets/categories/nooxalate.svg";
import { ReactComponent as nonuts } from "./assets/categories/nopeanuts.svg";
import { ReactComponent as noshellfish } from "./assets/categories/noshellfish.svg";
import { ReactComponent as pasta } from "./assets/categories/pasta.svg";
import { ReactComponent as pizza } from "./assets/categories/pizza.svg";
import { ReactComponent as pork } from "./assets/categories/pork.svg";
import { ReactComponent as salad } from "./assets/categories/salad.svg";
import { ReactComponent as snack } from "./assets/categories/snack.svg";
import { ReactComponent as sushi } from "./assets/categories/sushi.svg";
import { ReactComponent as teatime } from "./assets/categories/teatime.svg";
import { ReactComponent as vegan } from "./assets/categories/vegan.svg";
import { ReactComponent as vegetarian } from "./assets/categories/vegetarian.svg";

// eslint-disable-next-line react-refresh/only-export-components
const iconsMap = {
  quiche,
  userchecked,
  likes,
  recipes,
  logout,
  comments,
  star,
  easy,
  regular,
  hard,
  short,
  medium,
  long,
  breakfast,
  lunch,
  dinner,
  arrowleft,
  arrowright,
  search,
  arabic,
  asian,
  burger,
  celiac,
  chicken,
  dessert,
  drink,
  fish,
  haram,
  italian,
  kosher,
  lowcalories,
  meat,
  cow,
  nolactose,
  nomeat,
  nooxalate,
  nonuts,
  noshellfish,
  pasta,
  pizza,
  pork,
  salad,
  snack,
  sushi,
  teatime,
  vegan,
  vegetarian,
  ingredients,
  steps,
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

const Icon = ({
  name,
  clickable,
  onClick,
  className = "",
  svgProp,
}: IconProps) => {
  const IconToRender = iconsMap[name];

  const handleClick = () => {
    if (clickable && onClick) onClick();
  };

  if (!IconToRender) return null;
  return (
    <IconToRender
      {...svgProp}
      className={`h-4 transition-all ${className}`}
      onClick={handleClick}
    />
  );
};

export default Icon;
