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
  showingConfirmationModal: boolean;
  showingAuthModal: boolean;
  toggleAuthModal: () => void;
  toggleConfirmationModal: () => void;
  signIn: (email: string, password: string) => Promise<Result>;
  signOut: () => Promise<Result>;
  resendConfirmationCode: (username: string) => Promise<Result>;
  forgotPassword: (username: string) => Promise<Result>;
  signUp: (
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
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
  const [showingConfirmationModal, setShowingConfirmationModal] =
    useState(false);
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
      .catch((error) => {
        Cookies.remove("authorization");
        setUsername("");
        setIsAuthenticated(false);
        setIsLoading(false);
      });
  }, []);

  const signIn = async (username: string, password: string) => {
    try {
      const result = await Auth.signIn(username, password);
      Cookies.set("authorization", result.signInUserSession.idToken.jwtToken, {
        path: "/",
      });
      setUsername(result.username);
      setIsAuthenticated(true);
      return { success: true, message: result as any };
    } catch (error: any) {
      if (error.code === "UserNotConfirmedException") {
        setUsername(username);
        toggleConfirmationModal();
      }
      if (error.code === "NotAuthorizedException") {
        return {
          code: "NotAuthorizedException",
          success: false,
          message: "Nombre de usuario o contraseña incorrectos",
        };
      }
      return {
        success: false,
        message: error,
      };
    }
  };


  const resendConfirmationCode = async (username: string) => {
    try {
      await Auth.resendSignUp(username);
      return { success: true, message: "" };
    } catch (error) {
      return {
        success: false,
        message: error,
      };
    }
  };

  const forgotPassword = async (username: string) => {
    try {
      const result = await Auth.forgotPassword(username);
      return { success: true, message: result };
    } catch (error) {
      return {
        success: false,
        message: error,
      };
    }
  };

  const signUp = async (
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    try {
      const result = await api.post("Auth/Register", {
        userName,
        firstName,
        lastName,
        email,
        password,
      });
      return { success: true, message: result };
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

  const toggleConfirmationModal = () => {
    setShowingConfirmationModal(!showingConfirmationModal);
  };

  return {
    isLoading,
    isAuthenticated,
    username,
    showingConfirmationModal,
    showingAuthModal,
    toggleAuthModal,
    toggleConfirmationModal,
    signIn,
    signOut,
    signUp,
    resendConfirmationCode,
    forgotPassword,
  };
};
