import Icon, { IconsNames } from "../Icons/Icons";
import LinkContainer from "../Link/LinkContainer";
import Paragraph from "../Text/Paragraph";

interface ButtonCategoryWithIconProps {
  iconName: IconsNames;
  categoryName: string;
}

const ButtonCategoryWithIconLarge = ({
  iconName,
  categoryName,
}: ButtonCategoryWithIconProps) => {
  return (
    <div key={iconName} className="col-span-1 ">
      <LinkContainer to={`/search/${iconName}`}>
        <div
          className="group flex h-[90px] w-full flex-col items-center justify-center rounded-lg
                   bg-gray-light transition-all hover:bg-primary"
        >
          <Icon
            name={iconName}
            key={`CategoriesHome_${iconName}`}
            className="h-6 fill-white opacity-0 transition-all duration-300 group-hover:block
                       group-hover:text-white group-hover:opacity-100"
          />
          <Paragraph
            color="gray"
            letterSpacing="2px"
            className="-translate-y-[10px] transition-all duration-300 
                      group-hover:translate-y-1 group-hover:text-white"
          >
            {categoryName}
          </Paragraph>
        </div>
      </LinkContainer>
    </div>
  );
};

export default ButtonCategoryWithIconLarge;
