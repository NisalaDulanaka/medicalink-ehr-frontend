import React from "react";
import { useTabContext } from "../components/navigation/tab-navigation/tabUtils";
import { Button, Box, Grid } from "@mui/material";
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import MedicalInformationOutlinedIcon from "@mui/icons-material/MedicalInformationOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import CCDForm from "../components/medical-form/CCDForm";
import IBDForm from "../components/medical-form/IBDForm";

const Home: React.FC = () => {
  const { addTab } = useTabContext();

  return (
    <Box
      sx={{
        flexGrow: 1,
        // bgcolor: "#F5F9FF",
        minHeight: "100vh",
        margin: 5,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={
              <MedicalInformationOutlinedIcon
                sx={{ color: "#0277bd", width: "30px", height: "30px" }}
              />
            }
            onClick={() =>
              addTab({
                title: "Colorectal Cancer - University of Colombo",
                path: "/research-forms/ccdform",
                element: <CCDForm />,
              })
            }
            sx={{
              height: "60px",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "black",
            }}
            href=""
            target=""
          >
            Colorectal Cancer - University of Colombo
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={
              <VaccinesOutlinedIcon
                sx={{ color: "#0277bd", width: "30px", height: "30px" }}
              />
            }
            onClick={() =>
              addTab({
                title: "Infectious Bowel Disease - University of Colombo",
                path: "/research-forms/ibdform",
                element: <IBDForm />,
              })
            }
            sx={{
              height: "60px",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "black",
            }}
            href=""
            target=""
          >
            Infectious Bowel Disease - University of Colombo
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={
              <LocalHospitalOutlinedIcon
                sx={{ color: "#0277bd", width: "30px", height: "30px" }}
              />
            }
            sx={{
              height: "60px",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "black",
            }}
            href=""
            target=""
          >
            EAGLE 2
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={
              <LocalHospitalOutlinedIcon
                sx={{ color: "#0277bd", width: "30px", height: "30px" }}
              />
            }
            sx={{
              height: "60px",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "black",
            }}
            href=""
            target=""
          >
            TENTACLE
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={
              <LocalHospitalOutlinedIcon
                sx={{ color: "#0277bd", width: "30px", height: "30px" }}
              />
            }
            sx={{
              height: "60px",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "black",
            }}
            href=""
            target=""
          >
            GOAL TRAUMA
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={
              <LocalHospitalOutlinedIcon
                sx={{ color: "#0277bd", width: "30px", height: "30px" }}
              />
            }
            sx={{
              height: "60px",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "black",
            }}
            href=""
            target=""
          >
            BLANK
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
