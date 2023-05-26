import { Ingredient } from "../../../../../types/Recipe";
import Icon from "../../../../atoms/Icons/Icons";

interface IngredientsResultSearchHomeProps {
  ingredients: Ingredient[];
}

const IngredientsResultSearchHome = ({
  ingredients,
}: IngredientsResultSearchHomeProps) => {
  return (
    <div className="mt-4 grid grid-cols-12 gap-2">
      <h6 className="col-span-12 text-xs font-bold">Ingredientes:</h6>
      {ingredients.map((ingredient) => (
        <a
          key={ingredient.id}
          href={`/recetas/${ingredient.id}`}
          className="col-span-12 flex items-center justify-start"
        >
          <div className="flex items-center justify-between">
            <Icon name="arrowright" className="mr-2 h-3 fill-primary" />
            <p className=" text-[12px]">{ingredient.displayName}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default IngredientsResultSearchHome;
