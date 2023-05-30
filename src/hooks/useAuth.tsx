import { Amplify, Auth } from "aws-amplify";
import React, { createContext, useContext, useEffect, useState } from "react";
import awsmobile from "../aws-exports";
import { api } from "../api";
import Cookies from "js-cookie";

Amplify.configure(awsmobile);

interface UseAuth {
  isLoading: boolean;
  isAuthenticated: boolean;
  username: string;
  showingAuthModal: boolean;
  toggleAuthModal: () => void;
  signIn: (email: string, password: string) => Promise<Result>;
  signOut: () => Promise<Result>;
  signUp: (
    username: string,
    name: string,
    lastname: string,
    email: string,
    phone: string,
    password: string
  ) => Promise<Result>;
}

interface Result {
  success: boolean;
  message: any;
}

type Props = {
  children?: React.ReactNode;
};

const authContext = createContext({} as UseAuth);

export const ProvideAuth: React.FC<Props> = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = (): UseAuth => {
  const [isLoading, setIsLoading] = useState(true);
  const [showingAuthModal, setShowingAuthModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((result) => {
        Cookies.set(
          "authorization",
          result.signInUserSession.idToken.jwtToken,
          {
            path: "/",
          }
        );
        setUsername(result.username);
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch(() => {
        setUsername("");
        setIsAuthenticated(false);
        setIsLoading(false);
      });
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const result = await Auth.signIn(email, password);
      Cookies.set("authorization", result.signInUserSession.idToken.jwtToken, {
        path: "/",
      });
      api.defaults.headers.common["Authorization"] =
        result.signInUserSession.idToken.jwtToken;
      setUsername(result.username);
      setIsAuthenticated(true);
      return { success: true, message: result };
    } catch (error) {
      return {
        success: false,
        message: error,
      };
    }
  };

  const signUp = async (
    username: string,
    name: string,
    lastname: string,
    email: string,
    phone: string,
    password: string
  ) => {
    console.log("try SignUp", username, name, lastname, email, phone, password);
    try {
      await Auth.signUp({
        username: username,
        password: password,
        attributes: {
          email: email,
          phone_number: phone,
          given_name: name,
          family_name: lastname,
        },
      });
      return { success: true, message: "" };
    } catch (error) {
      return {
        success: false,
        message: error,
      };
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      Cookies.remove("authorization");
      setUsername("");
      setIsAuthenticated(false);
      return { success: true, message: "logout" };
    } catch (error) {
      return {
        success: false,
        message: error,
      };
    }
  };

  const toggleAuthModal = () => {
    setShowingAuthModal(!showingAuthModal);
  };

  return {
    isLoading,
    isAuthenticated,
    username,
    showingAuthModal,
    toggleAuthModal,
    signIn,
    signOut,
    signUp,
  };
};
