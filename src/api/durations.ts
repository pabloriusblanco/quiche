import { api } from ".";
import { DurationResponse } from "../types/Api";

export async function getAllDurations(): Promise<DurationResponse[]> {
  const response = await api.get(`Duration/GetAll`);
  return response.data.data;
}
