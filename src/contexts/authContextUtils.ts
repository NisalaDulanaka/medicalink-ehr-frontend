import { createContext, useContext } from "react";

interface IAuthContextProps {
  setAuthData: (data: {
    token: string;
    userName: string;
    refreshToken: string;
  }) => void;
  token?: string;
  userName?: string;
  refreshToken?: string;
}

export interface IAuthContextProviderProps {
  children: React.ReactNode;
}

export const authContext = createContext<IAuthContextProps | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(authContext);

  if (!context) {
    throw new Error("Cannot use auth context outside of a provider");
  }
  return context;
};
