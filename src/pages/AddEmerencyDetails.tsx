import { TextField, Button, Grid, Box } from "@mui/material";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const AddEmergencyDetails: React.FC = () => {
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
          <h2>Add Emergency Details</h2>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Blood Group"
            variant="outlined"
            required
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel>Do not resuscitate</FormLabel>
            <RadioGroup row name="gender">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel>Organ Donor</FormLabel>
            <RadioGroup row name="gender">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel>Gender</FormLabel>
            <RadioGroup row name="gender">
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <h2>Add Emergency Details</h2>
        </Grid>

        <Grid item xs={12}>
          <TextField fullWidth label="Telecom" variant="outlined" />
        </Grid>

        <Grid item xs={12}>
          <TextField fullWidth label="Relationship" variant="outlined" />
        </Grid>

        <Grid item xs={12}>
          <TextField fullWidth label="Name" variant="outlined" />
        </Grid>

        <Grid item xs={12}>
          <TextField fullWidth label="Gender" variant="outlined" />
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

export default AddEmergencyDetails;
