import { useNavigate } from "react-router-dom";
import { SimpleSearchResponsePostIngredients } from "../../../../../types/Api";
import Icon from "../../../../atoms/Icons/Icons";

interface IngredientsResultSearchHomeProps {
  ingredients: SimpleSearchResponsePostIngredients[];
}

const IngredientsResultSearchHome = ({
  ingredients,
}: IngredientsResultSearchHomeProps) => {
  const navigate = useNavigate();

  const navigateToSearch = (
    ingredient: SimpleSearchResponsePostIngredients
  ) => {
    navigate("/search?ingredientid=" + ingredient.id + "&ingredientname=" + ingredient.displayName);
  };

  return (
    <div className="mt-4 grid grid-cols-12 gap-2">
      <h6 className="col-span-12 text-xs font-bold">Ingredientes:</h6>
      {ingredients.map((ingredient) => (
        <a
          key={ingredient.id}
          className="col-span-12 flex cursor-pointer items-center justify-start"
          onClick={() => navigateToSearch(ingredient)}
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
