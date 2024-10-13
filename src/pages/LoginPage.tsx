import { TextField, Button, Grid, Box, Typography } from "@mui/material";
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
    const data = await userLogin(
      loginData.username,
      loginData.password,
    );
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
    <>
      <Box
        sx={{
          flexGrow: 1,
          // bgcolor: "#F5F9FF",
          minHeight: "100vh",
          margin: 5,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Grid item xs={6}>
            <Typography>Email or Identifier*</Typography>
            <TextField fullWidth label="" variant="outlined" required placeholder="example@example.com" onChange={(e) => {
              setLoggingData({ ...loginData, username: e.target.value });
            }}/>
          </Grid>

          <Grid item xs={6}>
            <Typography>Password*</Typography>
            <TextField fullWidth label="" variant="outlined" placeholder="password" required onChange={(e) => {
              setLoggingData({ ...loginData, password: e.target.value });
            }}/>
          </Grid>
          <Grid item xs={6} sx={{ gap: 2 }}>
            <Button variant="contained" onClick={() => onSubmit()}>Log In</Button>
            <Typography>Or</Typography>
            <Button variant="outlined">Create Account</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LoginPage;
