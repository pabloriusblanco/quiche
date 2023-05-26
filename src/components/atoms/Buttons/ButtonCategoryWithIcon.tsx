import Icon, { IconsNames } from "../Icons/Icons";
import LinkContainer from "../Link/LinkContainer";
import Paragraph from "../Text/Paragraph";

interface ButtonCategoryWithIconProps {
  iconName: IconsNames;
  categoryName: string;
}

const ButtonCategoryWithIcon = ({
  iconName,
  categoryName,
}: ButtonCategoryWithIconProps) => {
  return (
    <div key={iconName} className="col-span-1 ">
      <LinkContainer to={`/search/${iconName}`}>
        <div
          className="group flex w-44 items-center justify-center gap-2 rounded-lg
                   bg-gray-light px-5 py-2.5 transition-all hover:bg-primary"
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
            className="-translate-x-3 truncate text-[11px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-white"
          >
            {categoryName}
          </Paragraph>
        </div>
      </LinkContainer>
    </div>
  );
};

export default ButtonCategoryWithIcon;
