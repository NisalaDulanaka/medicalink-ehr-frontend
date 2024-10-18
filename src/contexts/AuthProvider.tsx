import { useEffect, useState } from "react";
import { authContext, IAuthContextProviderProps } from "./authContextUtils";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { api, setOnTokenRefreshHandlers } from "../services/config";
import { getRefreshToken, setAuthCookies } from "../services/authenticationServices";
import { ILoginResponse } from "../models/loginModels";

export const AuthContextProvider:React.FC<IAuthContextProviderProps> = ({children}) => {
  const [credentials, setCredentials] = useState<{
    token: string;
    expiresIn: number;
    refreshToken: string;
    userName?: string;
  } | undefined>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const setAuthData = (data: {
    token: string;
    expiresIn: number;
    refreshToken: string;
    userName?: string;
  }) => {
    setCredentials(data);
  };

  const onTokenRefresh = (data: ILoginResponse) => {
    setAuthData(data);
    setAuthCookies(data);
  };
  const onTokenRefreshFail = () => navigate("/login");
  const attemptRefreshToken = async (refreshToken: string) => {
    try {
      const data = await getRefreshToken({
        refreshToken,
      });
      if (data) {
        onTokenRefresh(data);
        setIsLoading(false);
      }
    } catch {
      onTokenRefreshFail();
    }
  };
  
  useEffect(() => {
    setOnTokenRefreshHandlers(onTokenRefresh, onTokenRefreshFail);

    const token = Cookies.get("token");
    if (!token) {
      const refreshToken = Cookies.get("refreshToken");
      if (refreshToken) {
        attemptRefreshToken(refreshToken);
      }
      else {
        navigate("/login");
      }
      return;
    }

    const expiration = Cookies.get("expiration");
    setAuthData({
      token,
      userName: Cookies.get("userName") || "",
      refreshToken: Cookies.get("refreshToken") || "",
      expiresIn: expiration? Number.parseInt(expiration) : 0,
    });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!credentials) return;
    // Set cookies
    setAuthCookies({
      ...credentials
    });

    api.defaults.headers.common["Authorization"] = `Bearer ${credentials.token}`;
  }, [credentials]);

    return (
      <authContext.Provider value={{
        userName: credentials?.userName,
        token: credentials?.token,
        refreshToken: credentials?.refreshToken,
        setAuthData,
        isLoading,
        setIsLoading,
      }}>
        {children}
      </authContext.Provider>
    );
};
