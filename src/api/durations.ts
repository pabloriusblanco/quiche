import { api } from ".";
import { DurationReference } from "../types/Recipe";

export async function getAllDurations(): Promise<DurationReference[]> {
  const response = await api.get(`Duration/GetAll`);
  return response.data.data;
}
