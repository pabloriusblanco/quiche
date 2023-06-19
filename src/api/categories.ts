import { api } from ".";
import { Category } from "../types/Recipe";

export async function getAllCategories(): Promise<Category[]> {
  const response = await api.get(`Categories/GetAll`);
  return response.data.data;
}
