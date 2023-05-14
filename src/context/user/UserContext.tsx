import { createContext } from "react";

export interface User {
  id: string;
  name: string;
  family_name: string;
  given_name: string;
  locale: string;
  email: string;
}

export interface UserContextType {
  user: User | null;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleLogin: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleLogout: () => {},
});
