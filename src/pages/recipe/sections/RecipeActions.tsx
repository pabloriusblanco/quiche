import { useAuth } from "../../../hooks/useAuth";
import { Comment } from "../../../types/Recipe";

type RecipeActionsProps = {
  //   comments: Comment[];
};

const RecipeActions = () => {
  const auth = useAuth();

  return <div className="flex flex-col gap-5">ACTIONS</div>;
};

export default RecipeActions;
