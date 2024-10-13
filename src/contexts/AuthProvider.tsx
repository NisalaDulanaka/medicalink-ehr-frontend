import { useEffect, useState } from "react";
import { authContext, IAuthContextProviderProps, useAuthContext } from "./authContextUtils";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const AuthWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  const { setAuthData } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
      return;
    }

    setAuthData({
      token,
      userName: Cookies.get("userName") || "",
      refreshToken: Cookies.get("refreshToken") || "",
    })
  }, []);

  return (
    <>
      {children}
    </>
  )
}

export const AuthContextProvider:React.FC<IAuthContextProviderProps> = ({children}) => {
  const [credentials, setCredentials] = useState<{
    token?: string;
    userName?: string;
    refreshToken?: string;
  } | undefined>();

  const setAuthData = (data: {
    token: string;
    userName: string;
    refreshToken: string;
  }) => {
    setCredentials(data);
  };

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
