import { api } from "..";

export const registerUser = async (
  userName: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const response = await api.post("Auth/Register", {
    userName,
    firstName,
    lastName,
    email,
    password,
  });
  return response.data;
};

export const deleteRegisteredUser = async (username: string) => {
  const response = await api.post("Auth/DeleteUser", {
    userName: username,
  });
  return response.data;
};

export async function testRecipesGetAll(): Promise<any> {
  const response = await api.get("Recipe/GetAll");
  return response.data;
}
