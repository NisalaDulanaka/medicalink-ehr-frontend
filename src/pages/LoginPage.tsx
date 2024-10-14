import { TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import { ILoginRequest } from "../models/loginModels";
import { useAuthContext } from "../contexts/authContextUtils";
import { userLogin } from "../services/authenticationServices";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { setAuthData } = useAuthContext();
  const navigate = useNavigate();
  const [loginData, setLoggingData] = useState<ILoginRequest>({
    username: "",
    password: "",
  });

  const onSubmit = async () => {
    const data = await userLogin(loginData.username, loginData.password);
    console.log("Response data =", data);
    console.log("request data", loginData);
    if (data) {
      setAuthData({
        ...data,
        userName: loginData.username,
      });
      navigate("/");
    }
  };

  return (
    <div className="flex h-[100vh]">
      <div className="hidden md:block flex-initial h-full w-[500px] bg-[#256ad8]"></div>
      <div className="flex-auto flex flex-col gap-y-5 justify-center px-8 md:px-20">
        <div>
          <Typography>Email or Identifier*</Typography>
          <TextField
            sx={{
              maxWidth: "800px",
            }}
            fullWidth
            label=""
            variant="outlined"
            required
            placeholder="example@example.com"
            onChange={(e) => {
              setLoggingData({ ...loginData, username: e.target.value });
            }}
          />
        </div>

        <div>
          <Typography>Password*</Typography>
          <TextField
            sx={{
              maxWidth: "800px",
            }}
            fullWidth
            label=""
            variant="outlined"
            placeholder="password"
            required
            onChange={(e) => {
              setLoggingData({ ...loginData, password: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col gap-y-4 items-start">
          <Button variant="contained" sx={{paddingLeft: "50px", paddingRight: "50px"}} onClick={() => onSubmit()}>
            Log In
          </Button>
          <Typography>Or</Typography>
          <Button variant="outlined">Create Account</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
