import { Post } from "../types/Recipe";
import { api } from "./index";

export async function getRecipes(): Promise<Post[]> {
  const response = await api.get("/recipes");
  return response.data;
}

export async function getMonthRecipes(): Promise<Post[]> {
  const response = await api.get("/month-recipes");
  return response.data;
}

export async function getRecipe(id: number): Promise<Post> {
  const response = await api.get(`/recipes/${id}`);
  return response.data;
}

export async function createRecipe(recipe: Post): Promise<Post> {
  const response = await api.post("/recipes", recipe);
  return response.data;
}

export async function updateRecipe(recipe: Post): Promise<Post> {
  const response = await api.put(`/recipes/${recipe.id}`, recipe);
  return response.data;
}

export async function deleteRecipe(id: number): Promise<void> {
  await api.delete(`/recipes/${id}`);
}
