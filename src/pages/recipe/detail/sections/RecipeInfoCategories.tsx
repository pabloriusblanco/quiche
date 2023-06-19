import ButtonCategoryWithIcon from "../../../../components/atoms/Buttons/ButtonCategoryWithIcon";
import { Category, Post } from "../../../../types/Recipe";

type RecipeInfoCategoriesProps = {
  mainCategory: Category;
  subCategories?: Category[];
};

const RecipeInfoCategories = ({
  mainCategory,
  subCategories = [],
}: RecipeInfoCategoriesProps) => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2 px-5">
      <ButtonCategoryWithIcon
        iconName={mainCategory.icon}
        categoryName={mainCategory.displayName}
      />
      {subCategories.map((subcategory) => (
        <ButtonCategoryWithIcon
          key={subcategory.icon}
          iconName={subcategory.icon}
          categoryName={subcategory.displayName}
        />
      ))}
    </div>
  );
};

export default RecipeInfoCategories;
