import { Button, Typography } from "@mui/material";
import { ILoginRequest } from "../models/loginModels";
import { useAuthContext } from "../contexts/authContextUtils";
import { userLogin } from "../services/authenticationServices";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../utils/validations/loginSchema";
import AppForm, { AppFormField } from "../components/app-form/AppForm";
import { TextInputTypes } from "../utils/interfaces";

const LoginPage = () => {
  const { setAuthData, setIsLoading } = useAuthContext();
  const navigate = useNavigate();
  const form = useForm<ILoginRequest>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "all",
  });

  const onSubmit = async (loginData: ILoginRequest) => {
    const data = await userLogin(loginData.username, loginData.password);
    console.log("Response data =", data);
    console.log("request data", loginData);
    if (data) {
      setIsLoading(false);
      setAuthData({
        ...data,
        userName: loginData.username,
      });
      navigate("/");
    }
  };

  return (
    <div className="flex h-[100vh]">
      <div className="hidden md:block flex-initial h-full md:w-[300px] lg:w-[500px] bg-[#256ad8]"></div>
      <AppForm
        form={form}
        onSubmit={onSubmit}
        className="flex-auto flex flex-col gap-y-5 justify-center px-8 md:px-20"
      >
        <div>
          <Typography>Email or Identifier*</Typography>
          <AppFormField
            controller={form.control}
            type={TextInputTypes.TEXT}
            name="username"
          />
        </div>

        <div>
          <Typography>Password*</Typography>
          <AppFormField
            controller={form.control}
            type={TextInputTypes.PASSWORD}
            name="password"
          />
        </div>
        <div className="flex flex-col gap-y-4 items-center md:items-start pt-4 md:pt-0">
          <Button
            variant="contained"
            type="submit"
            className="w-full md:w-fit md:!px-14"
          >
            Log In
          </Button>
          <div className="relative w-full md:w-fit flex justify-center">
            <Typography className="relative z-10 w-fit bg-white px-2">Or</Typography>
            <div className="block md:hidden absolute top-1/2 w-full h-0 border-[0.2px] border-slate-400"></div>
          </div>
          <Button 
          variant="outlined"
          className="w-full md:w-fit"
          >Create Account</Button>
        </div>
      </AppForm>
    </div>
  );
};

export default LoginPage;
