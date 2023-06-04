import { Amplify, Auth } from "aws-amplify";
import React, { createContext, useContext, useEffect, useState } from "react";
import awsmobile from "../aws-exports";
import { api } from "../api";
import Cookies from "js-cookie";
import { loginErrorCodes } from "../components/molecules/Modal/Auth/ResultsConfigAuth/LoginResultsMapper";
import { type } from "os";

Amplify.configure(awsmobile);

interface UseAuth {
  isLoading: boolean;
  isAuthenticated: boolean;
  username: string;
  showingAuthModal: boolean;
  toggleAuthModal: () => void;
  signIn: (email: string, password: string) => Promise<AuthResult>;
  signOut: () => Promise<AuthResult>;
  resendConfirmationLink: (username: string) => Promise<AuthResult>;
  forgotPassword: (username: string) => Promise<AuthResult>;
  submitNewPassword: (
    code: string,
    username: string,
    password: string
  ) => Promise<AuthResult>;
  signUp: (
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => Promise<AuthResult>;
}

export interface AuthResult {
  success: boolean;
  code: string;
  message: string;
  action?: string;
  data: any;
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
      return {
        success: true,
        code: "logged in",
        message: `Bienvenido ${result.username}`,
        action: undefined,
        data: result,
      };
    } catch (error: any) {
      console.dir("catch sign in", error);
      console.dir(error);
      const response =
        loginErrorCodes[error.code as keyof typeof loginErrorCodes];
      return {
        success: false,
        code: response.code,
        message: response.message,
        action: response.action,
        data: error,
      };
    }
  };

  const resendConfirmationLink = async (username: string) => {
    try {
      const result = await Auth.resendSignUp(username);
      return {
        success: true,
        code: "resendedConfirmationCode",
        message: "Se ha enviado un link de verificación a tu correo",
        action: undefined,
        data: result,
      };
    } catch (error) {
      console.dir("catch resend confirmation link", error);
      return {
        success: false,
        code: "resendedConfirmationCodeError",
        message: "No se ha enviado un link de verificación a tu correo",
        action: undefined,
        data: error,
      };
    }
  };

  const forgotPassword = async (username: string) => {
    try {
      const result = await Auth.forgotPassword(username);
      return {
        success: true,
        code: "forgotPasswordSendCode",
        message: "Se ha enviado un código a tu correo",
        action: undefined,
        data: result,
      };
    } catch (error) {
      console.dir("catch forgot password", error);
      console.dir(error);
      return {
        success: false,
        code: "forgotPasswordSendCodeError",
        message:
          "No hemos podido enviar un código a tu correo. Intenta nuevamente más tarde.",
        action: undefined,
        data: error,
      };
    }
  };

  const submitNewPassword = async (
    code: string,
    username: string,
    password: string
  ) => {
    console.log("submit new password", code, username, password);

    try {
      const result = await Auth.forgotPasswordSubmit(username, code, password);
      console.dir(result);
      return {
        success: true,
        code: "forgotPasswordSubmit",
        message:
          "Se ha cambiado la contraseña correctamente. Ya puedes ingresar.",
        action: undefined,
        data: result,
      };
    } catch (error) {
      console.dir("catch submit new password", error);
      console.dir(error);
      return {
        success: false,
        code: "forgotPasswordSubmitError",
        message:
          "Hubo un error al cambiar la contraseña. Intenta nuevamente más tarde.",
        action: undefined,
        data: error,
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
      return {
        success: true,
        code: "RegisteredUser",
        message: "Usuario registrado correctamente",
        action: undefined,
        data: result,
      };
    } catch (error: any) {
      console.dir("catch signup", error);
      console.dir(error);
      const message = (error: any) => {
        if (error.response) {
          return error.response.data;
        }
        if (error.message) {
          return error.message;
        }
        return "No hemos podido registrar el usuario. Intenta nuevamente más tarde.";
      };
      return {
        success: false,
        code: "RegisteredUserError",
        message: message(error),
        action: undefined,
        data: error,
      };
    }
  };

  const signOut = async () => {
    try {
      const result = await Auth.signOut();
      Cookies.remove("authorization");
      setUsername("");
      setIsAuthenticated(false);
      return {
        success: true,
        code: "LoggedOutUser",
        message: "Usuario deslogueado correctamente",
        action: undefined,
        data: result,
      };
    } catch (error) {
      console.dir("catch logout", error);
      return {
        success: false,
        code: "LoggedOutUserError",
        message: "Usuario deslogueado incorrectamente",
        action: undefined,
        data: error,
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
    resendConfirmationLink,
    forgotPassword,
    submitNewPassword,
  };
};
