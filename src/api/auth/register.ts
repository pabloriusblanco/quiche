// register.ts file is used to handle the register request from the client side with axios.

import axios from "axios";

export const register = async (
  name: string,
  lastname: string,
  email: string,
  phone: string | null = null,
  password: string
) => {
  const url = `${process.env.API_URL}/auth/register`;
  const response = await axios.post(url, {
    name,
    lastname,
    email,
    phone,
    password,
  });
  return response.data;
};
