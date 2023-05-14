import { useContext } from "react";
import { UserContext, UserContextType } from "../context/user/UserContext";

export const useUser = (): UserContextType => useContext(UserContext);
