import { SimpleSearchResponsePost } from "../../../../../types/Api";
import Icon from "../../../../atoms/Icons/Icons";

interface RecipeResultSearchHomeProps {
  recipes: SimpleSearchResponsePost[];
}

const RecipeResultSearchHome = ({ recipes }: RecipeResultSearchHomeProps) => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <h6 className="col-span-12 text-xs font-bold">Recetas:</h6>
      {recipes.map((post, index) => (
        <a
          key={post.id}
          href={`/recipe/${post.id}`}
          className="col-span-12 flex items-center justify-start"
        >
          <div className="flex min-w-[40px] flex-row items-center justify-end">
            <p className="mr-2 text-[12px] text-right font-[600]">{post.rating}</p>
            <div>
              <Icon name="star" className="mb-[2px] h-4 fill-primary" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="mx-2 truncate text-[12px]">{` - ${post.displayName} - `}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="h-4 overflow-hidden text-ellipsis text-[12px] text-gray">{`${post.description}`}</p>
          </div>
          <div className="flex items-center justify-between">
            {/* <div className="flex items-center justify-center space-x-2">
              <TooltipIcons
                tag="category"
                tagKey={post.}
                id={`${post.id}_cat_${index}`}
              />
              <TooltipIcons
                tag="difficulty"
                tagKey={post.recipe.difficulty.icon}
                id={`${post.id}_diff_${index}`}
              />
              <TooltipIcons
                tag="time"
                tagKey={post.recipe.time.reference.icon}
                id={`${post.id}_time_${index}`}
              />
            </div> */}
          </div>
        </a>
      ))}
    </div>
  );
};

export default RecipeResultSearchHome;
