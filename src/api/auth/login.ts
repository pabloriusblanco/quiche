// Login.ts file is used to handle the login request from the client side with axios.

import axios from "axios";

export const login = async (email: string, password: string) => {
  const url = `${process.env.API_URL}/auth/login`;
  const response = await axios.post(url, { email, password });
  return response.data;
}
