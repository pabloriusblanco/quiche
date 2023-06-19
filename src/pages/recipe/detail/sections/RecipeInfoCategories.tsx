import ButtonCategoryWithIcon from "../../../../components/atoms/Buttons/ButtonCategoryWithIcon";
import { ResponseSubCategory } from "../../../../types/Api";
import { Category, Post } from "../../../../types/Recipe";

type RecipeInfoCategoriesProps = {
  mainCategory: Category;
  subCategories?: ResponseSubCategory[];
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
          key={subcategory.category.id}
          iconName={subcategory.category.icon}
          categoryName={subcategory.category.displayName}
        />
      ))}
    </div>
  );
};

export default RecipeInfoCategories;
