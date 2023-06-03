import { useAuth } from "../../../hooks/useAuth";
import { Comment } from "../../../types/Recipe";

type RecipeSimilarProps = {
  type: "ingredients" | "categories";
};

const RecipeSimilar = ({ type }: RecipeSimilarProps) => {
  return <div className="flex flex-col gap-5">{type}</div>;
};

export default RecipeSimilar;
