import { api } from ".";
import { Ingredient } from "../types/Recipe";

export async function getAllIngredientsByName(displayName: string): Promise<Ingredient[]> {
  const response = await api.get(`Ingredient/GetAllByName/?DisplayName=${displayName}`);
  return response.data.data;
}
