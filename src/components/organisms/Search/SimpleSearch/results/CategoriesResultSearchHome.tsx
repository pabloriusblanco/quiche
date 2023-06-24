import { useNavigate } from "react-router-dom";
import { SimpleSearchResponsePostCategories } from "../../../../../types/Api";
import Icon, { IconsNames } from "../../../../atoms/Icons/Icons";

interface CategoryResultSearchHomeProps {
  categories: SimpleSearchResponsePostCategories[];
}

const CategoryResultSearchHome = ({
  categories,
}: CategoryResultSearchHomeProps) => {
  const navigate = useNavigate();

  const navigateToSearch = (id: string) => {
    navigate("/search?category=" + id);
  };

  return (
    <div className="mt-4 grid grid-cols-12 gap-2">
      <h6 className="col-span-12 text-xs font-bold">Categorías:</h6>
      {categories.map((category) => (
        <a
          key={category.id}
          className="col-span-12 flex cursor-pointer items-center justify-start"
          onClick={() => navigateToSearch(category.id)}
        >
          <div className="flex items-center justify-between">
            <Icon
              name={category.icon as IconsNames}
              className="mr-2 h-4 shrink-0 fill-primary"
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
