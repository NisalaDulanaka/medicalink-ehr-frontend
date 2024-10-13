import { useEffect, useState } from "react";
import { authContext, IAuthContextProviderProps } from "./authContextUtils";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { api } from "../services/config";

export const AuthContextProvider:React.FC<IAuthContextProviderProps> = ({children}) => {
  const [credentials, setCredentials] = useState<{
    token: string;
    expiresIn: number;
    refreshToken: string;
    userName?: string;
  } | undefined>();
  const navigate = useNavigate();

  const setAuthData = (data: {
    token: string;
    expiresIn: number;
    refreshToken: string;
    userName?: string;
  }) => {
    setCredentials(data);
  };
  
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const expiration = Cookies.get("expiration");
    setAuthData({
      token,
      userName: Cookies.get("userName") || "",
      refreshToken: Cookies.get("refreshToken") || "",
      expiresIn: expiration? Number.parseInt(expiration) : 0,
    })
  }, []);

  useEffect(() => {
    if (!credentials) return;
    // Set cookies
    const expirationInDays = credentials.expiresIn / (1000 * 60 * 60 * 24);
    Cookies.set("token", credentials.token, { expires: expirationInDays });
    Cookies.set("refreshToken", credentials.refreshToken, { expires: expirationInDays });
    Cookies.set("expiration", credentials.expiresIn.toString(), { expires: expirationInDays })
    Cookies.set("userName", credentials.userName || "", { expires: expirationInDays });

    api.defaults.headers.common["Authorization"] = `Bearer ${credentials.token}`;
  }, [credentials]);

    return (
      <authContext.Provider value={{
        userName: credentials?.userName,
        token: credentials?.token,
        refreshToken: credentials?.refreshToken,
        setAuthData,
      }}>
        {children}
      </authContext.Provider>
    );
};
