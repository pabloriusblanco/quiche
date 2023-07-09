import { useNavigate } from "react-router-dom";
import Icon, { IconsNames } from "../Icons/Icons";
import LinkContainer from "../Link/LinkContainer";
import Paragraph from "../Text/Paragraph";

interface ButtonCategoryWithIconProps {
  categoryId: string;
  iconName: IconsNames;
  categoryName: string;
  className?: string;
  textClassName?: string;
}

const ButtonCategoryWithIcon = ({
  categoryId,
  iconName,
  categoryName,
  className,
  textClassName,
}: ButtonCategoryWithIconProps) => {
  const navigate = useNavigate();

  return (
    <div
      key={iconName}
      className="col-span-1 cursor-pointer"
      onClick={() => navigate(`/search?category=${categoryId}`)}
    >
      <div
        className={`group flex w-44 items-center justify-center gap-2 rounded-lg
        bg-gray-light px-5 py-2.5 transition-all hover:bg-primary ${className}`}
      >
        <Icon
          name={iconName}
          key={`CategoriesHome_${iconName}`}
          className="w-4 fill-white opacity-0 transition-all duration-300 group-hover:block
                       group-hover:text-white group-hover:opacity-100"
        />
        <Paragraph
          color="black-light"
          letterSpacing="2px"
          className={`-translate-x-3 truncate text-[11px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-white ${textClassName}`}
        >
          {categoryName}
        </Paragraph>
      </div>
    </div>
  );
};

export default ButtonCategoryWithIcon;
