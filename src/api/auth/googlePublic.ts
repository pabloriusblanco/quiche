// import axios from "axios";

// interface UserInfo {
//   email: string;
//   family_name: string;
//   given_name: string;
//   id: string;
//   locale: string;
//   name: string;
//   picture: string;
// }

// export const getUserInfo = async (accessToken: string): Promise<UserInfo> => {
//   const url = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`;
//   const headers = {
//     Authorization: `Bearer ${accessToken}`,
//     Accept: "application/json",
//   };
//   const response = await axios.get<UserInfo>(url, { headers });
//   return response.data;
// };
