import { api } from "..";

export async function testAuth(): Promise<any> {
  const response = await api.get("Test/Test");
  return response.data;
}

export async function testRecipesGetAll(): Promise<any> {
  const response = await api.get("Recipe/GetAll");
  return response.data;
}
