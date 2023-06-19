import { SimpleSearchResponsePostCategories } from "../../../../../types/Api";
import { Category } from "../../../../../types/Recipe";
import Icon, { IconsNames } from "../../../../atoms/Icons/Icons";

interface CategoryResultSearchHomeProps {
  categories: SimpleSearchResponsePostCategories[];
}

const CategoryResultSearchHome = ({
  categories,
}: CategoryResultSearchHomeProps) => {
  return (
    <div className="mt-4 grid grid-cols-12 gap-2">
      <h6 className="col-span-12 text-xs font-bold">Categorías:</h6>
      {categories.map((category) => (
        <a
          key={category.id}
          href={`/recetas/${category.id}`}
          className="col-span-12 flex items-center justify-start"
        >
          <div className="flex items-center justify-between">
            <Icon
              name={category.icon as IconsNames}
              className="mr-2 h-4 fill-primary shrink-0"
            />
            <div className="flex items-center justify-between">
              <p className="mx-2 truncate text-[12px]">{` - ${category.displayName} - `}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="h-4 overflow-hidden text-ellipsis text-[12px] text-gray">{`${category.description}`}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CategoryResultSearchHome;
