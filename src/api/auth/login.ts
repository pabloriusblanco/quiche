// import { User } from "../../context/user/UserContext";
// import { api } from "../index";

// export interface LoginResponse {
//   accessToken: string;
//   refreshToken: string;
//   user: User;
// }

// export const getUserInfo = async (accessToken: string): Promise<User> => {
//   const headers = {
//     Authorization: `Bearer ${accessToken}`,
//   };

//   try {
//     const response = await api.get("/api/user", { headers });
//     return response.data;
//   } catch (error) {
//     console.error("getUserInfo error:", error);
//     throw error;
//   }
// };

// export const refreshAccessToken = async (
//   refreshToken: string
// ): Promise<LoginResponse> => {
//   const url = "/auth/refresh";
//   const response = await api.post(url, { refreshToken });
//   return response.data.accessToken;
// };

// export const login = async (
//   email: string,
//   password: string
// ): Promise<LoginResponse> => {
//   const url = "/auth/login";
//   // const response = await api.post(url, { email, password });
//   // return response.data;
  
//   return new Promise<LoginResponse>((resolve, reject) => {
//     setTimeout(() => {
//       resolve(mockLoginResponse);
//     }, 1000);
//   });
// };

// const mockLoginResponse: LoginResponse = {
//   accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
//   refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCZ9",
//   user: {
//     id: "12345678",
//     name: "Pablo Rius Blanco",
//     email: "pabloriusblanco@gmail.com",
//     family_name: "Rius Blanco",
//     given_name: "Pablo",
//     locale: "es"
//   },
// };
