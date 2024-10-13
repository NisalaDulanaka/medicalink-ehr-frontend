import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const LoginPage = () => {
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
            <TextField fullWidth label="" variant="outlined" required />
          </Grid>

          <Grid item xs={6}>
            <Typography>Password*</Typography>
            <TextField fullWidth label="" variant="outlined" required />
          </Grid>
          <Grid item xs={6} sx={{ gap: 2 }}>
            <Button variant="contained">Log In</Button>
            <Typography>Or</Typography>
            <Button variant="outlined">Create Account</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LoginPage;
