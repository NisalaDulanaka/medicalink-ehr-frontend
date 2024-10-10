import { TextField, Grid, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const RegisterNewPatient: React.FC = () => {
  //   const handleSearch = () => {
  //     // Submit
  //     console.log("Search for patient");
  //   };

  //   Placeholder patients
  const options = [
    { label: "200311513520 Chiranga Shalitha", id: 1 },
    { label: "200346546546 Nisala Develigoda", id: 2 },
    { label: "200356756745 Chathusha Mendis", id: 3 },
    { label: "200456756757 Seneli Jayasinghe", id: 4 },
  ];

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
          <h2>Find Existing Patient</h2>
        </Grid>

        <Grid item xs={12}>
          {/* Use textfield for search bar with search icon or use autocomplete */}
          {/* <TextField fullWidth label="Search" variant="outlined" /> */}
          <Autocomplete
            disablePortal
            options={options}
            fullWidth
            renderInput={(params) => <TextField {...params} label="Search" />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterNewPatient;
