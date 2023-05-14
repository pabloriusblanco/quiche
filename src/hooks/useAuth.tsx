import { Amplify, Auth } from "aws-amplify";
import React, { createContext, useContext, useEffect, useState } from "react";
import awsmobile from "../aws-exports";
import { log } from "console";

Amplify.configure(awsmobile);

interface UseAuth {
  isLoading: boolean;
  isAuthenticated: boolean;
  username: string;
  signIn: (email: string, password: string) => Promise<Result>;
  signOut: () => void;
  signUp: (
    name: string,
    lastname: string,
    email: string,
    phone: string,
    password: string
  ) => Promise<Result>;
}

interface Result {
  success: boolean;
  message: string;
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((result) => {
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
      setUsername(result.username);
      setIsAuthenticated(true);
      console.log(result);      
      return { success: true, message: "" };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "LOGIN FAIL",
      };
    }
  };

  const signUp = async (
    name: string,
    lastname: string,
    email: string,
    phone: string,
    password: string
  ) => {
    console.log("try SignUp", name, lastname, email, phone, password);
    try {
      await Auth.signUp({
        username: email,
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
      console.log(error);
      return {
        success: false,
        message: "SIGNUP FAIL",
      };
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUsername("");
      setIsAuthenticated(false);
      return { success: true, message: "" };
    } catch (error) {
      return {
        success: false,
        message: "LOGOUT FAIL",
      };
    }
  };

  return {
    isLoading,
    isAuthenticated,
    username,
    signIn,
    signOut,
    signUp,
  };
};
