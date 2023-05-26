import { Post } from "../../../../../types/Recipe";
import Icon, { IconsNames } from "../../../../atoms/Icons/Icons";
import TooltipIcons from "../../../../atoms/Icons/TooltipIcons/TooltipIcons";

interface RecipeResultSearchHomeProps {
  recipes: Post[];
}

const RecipeResultSearchHome = ({ recipes }: RecipeResultSearchHomeProps) => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <h6 className="col-span-12 text-xs font-bold">Recetas:</h6>
      {recipes.map((post, index) => (
        <a
          key={post.id}
          href={`/recetas/${post.id}`}
          className="col-span-12 flex items-center justify-start"
        >
          <div className="flex min-w-[40px] flex-row items-center justify-between">
            <p className="mr-0.5 text-[12px] font-[600]">{post.rating}</p>
            <div>
              <Icon name="star" className="mb-[2px] h-4 fill-primary" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="mx-2 truncate text-[12px]">{` - ${post.recipe.name} - `}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="h-4 overflow-hidden text-ellipsis text-[12px] text-gray">{`${post.recipe.description}`}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center space-x-2">
              <TooltipIcons
                tag="category"
                tagKey={post.recipe.mainCategory.icon}
                id={`${post.id}_cat_${index}`}
              />
              <TooltipIcons
                tag="difficulty"
                tagKey={post.recipe.difficulty.icon}
                id={`${post.id}_diff_${index}`}
              />
              <TooltipIcons
                tag="time"
                tagKey={post.recipe.time.icon}
                id={`${post.id}_time_${index}`}
              />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default RecipeResultSearchHome;
