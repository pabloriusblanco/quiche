import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
}

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    // Llamada a la API para obtener los detalles de la receta con el ID correspondiente
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`/api/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="my-8 text-3xl font-bold">{recipe.name}</h1>
      <div className="my-4">
        <h2 className="mb-2 text-xl font-bold">Ingredientes</h2>
        <ul className="list-inside list-disc">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="my-4">
        <h2 className="mb-2 text-xl font-bold">Instrucciones</h2>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
