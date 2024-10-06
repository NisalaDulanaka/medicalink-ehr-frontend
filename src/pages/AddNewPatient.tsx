import { TextField, Button, Grid, Box } from "@mui/material";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const RegisterNewPatient: React.FC = () => {
  const handleSubmit = () => {
    // Submit
    console.log("Form submitted");
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        // bgcolor: "#F5F9FF",
        minHeight: "100vh",
        padding: 5,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <h2>Register New Patient</h2>
        </Grid>

        <Grid item xs={12}>
          <TextField fullWidth label="Identifier" variant="outlined" required />
        </Grid>

        <Grid item xs={12}>
          <TextField fullWidth label="Given Name" variant="outlined" required />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Family Name"
            variant="outlined"
            required
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel>Gender</FormLabel>
            <RadioGroup row name="gender">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Date of Birth"
            variant="outlined"
            type="date"
            defaultValue=""
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Age" variant="outlined" type="number" />
        </Grid>

        <Grid item xs={12}>
          <TextField fullWidth label="Telecom" variant="outlined" required />
        </Grid>

        <Grid item xs={12}>
          <TextField fullWidth label="District" variant="outlined" required />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterNewPatient;
