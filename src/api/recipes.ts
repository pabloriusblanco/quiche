import { api } from './index';

export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

export async function getRecipes(): Promise<Recipe[]> {
  const response = await api.get('/recipes');
  return response.data;
}

export async function getRecipe(id: number): Promise<Recipe> {
  const response = await api.get(`/recipes/${id}`);
  return response.data;
}

export async function createRecipe(recipe: Recipe): Promise<Recipe> {
  const response = await api.post('/recipes', recipe);
  return response.data;
}

export async function updateRecipe(recipe: Recipe): Promise<Recipe> {
  const response = await api.put(`/recipes/${recipe.id}`, recipe);
  return response.data;
}

export async function deleteRecipe(id: number): Promise<void> {
  await api.delete(`/recipes/${id}`);
}
