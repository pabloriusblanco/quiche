import ButtonCategoryWithIcon from "../../../../components/atoms/Buttons/ButtonCategoryWithIcon";
import { ResponseSubCategory } from "../../../../types/Api";
import { Category, Post } from "../../../../types/Recipe";

type RecipeInfoCategoriesProps = {
  mainCategory: Category;
  subCategories?: ResponseSubCategory[];
  className?: string;
  buttonClassName?: string;
  textClassName?: string;
};

const RecipeInfoCategories = ({
  mainCategory,
  subCategories = [],
  className = "flex-wrap justify-center gap-2 px-5",
  buttonClassName,
  textClassName,
}: RecipeInfoCategoriesProps) => {
  return (
    <div className={`flex w-full items-center ${className}`}>
      <ButtonCategoryWithIcon
        categoryId={mainCategory.id}
        iconName={mainCategory.icon}
        categoryName={mainCategory.displayName}
        className={buttonClassName}
        textClassName={textClassName}
      />
      {subCategories.map((subcategory) => (
        <ButtonCategoryWithIcon
          categoryId={subcategory.category.id}
          key={subcategory.category.id}
          iconName={subcategory.category.icon}
          categoryName={subcategory.category.displayName}
          className={buttonClassName}
          textClassName={textClassName}
        />
      ))}
    </div>
  );
};

export default RecipeInfoCategories;
