import { PostResponse } from "../types/Api";

export const downloadIngredients = (post: PostResponse) => {
  let content = `# ${post.recipe.name}\n\n`;
  content += post.recipe.recipesIngredients
    .map((ingredient) => {
      return `${ingredient.ingredient.displayName}  x${ingredient.quantity}`;
    })
    .join("\n");
  content += `\n\n----------------\n\n`;

  const element = document.createElement("a");
  const file = new Blob([content], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = `${post.recipe.name}-ingredientes.txt`;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
