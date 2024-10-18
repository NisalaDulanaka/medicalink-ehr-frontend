import { Box, LinearProgress } from "@mui/material";
import appLogo from "../../assets/images/bluelogo.png";

const AppLoader: React.FC = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="flex flex-col items-center gap-y-4">
        <img src={appLogo} alt="" className="w-[500px]" />
        <Box sx={{ width: "250px" }}>
          <LinearProgress />
        </Box>
      </div>
    </div>
  );
};

export default AppLoader;
