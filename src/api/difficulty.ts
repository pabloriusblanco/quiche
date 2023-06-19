import { api } from ".";
import { Difficulty } from "../types/Recipe";

export async function getAllDifficulties(): Promise<Difficulty[]> {
  const response = await api.get(`DifficultyLevel/GetAll`);
  return response.data.data;
}
