import React, { useEffect, useState } from "react";
import { User, UserContext } from "./UserContext";
import { login, refreshAccessToken } from "../../api/auth/login";
import { useCookies as UseCookies } from "react-cookie";

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cookies, setCookie, removeCookie] = UseCookies([
    "accessToken",
    "refreshToken",
  ]);

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");

    console.log("Use Effect accessToken: ", accessToken);
    console.log("Use Effect refreshToken: ", refreshToken);

    if (accessToken && refreshToken) {
      refreshAccessToken(refreshToken)
        .then(
          (data: { accessToken: string; refreshToken: string; user: User }) => {
            setAuthCookies(data.accessToken, data.refreshToken);
            setUser(data.user);
          }
        )
        .catch(() => {
          removeAuthCookies();
          alert("Your session has expired. Please log in again.");
        });
    }
  }, []);

  const setAuthCookies = (accessToken: string, refreshToken: string) => {
    const expirationDate = new Date(new Date().getTime() + 3600 * 1000); // 1 hour
    setCookie("accessToken", accessToken, {
      expires: expirationDate,
      path: "/",
    });
    setCookie("refreshToken", refreshToken, {
      expires: expirationDate,
      path: "/",
    });
  };

  const removeAuthCookies = () => {
    removeCookie("accessToken", { path: "/" });
    removeCookie("refreshToken", { path: "/" });
  };

  const getCookie = (name: string) => {
    const cookieMatch = document.cookie.match(`(^|;)\\s*${name}=([^;]+)`);
    return cookieMatch ? cookieMatch.pop() : "";
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await login(email, password);
      setAuthCookies(response.accessToken, response.refreshToken);
      setUser(response.user);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = () => {
    removeAuthCookies();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
