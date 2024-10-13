import React from "react";
import { Button, Box, Grid } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CalculateIcon from "@mui/icons-material/Calculate";
import BookIcon from "@mui/icons-material/Book";
import MedicalInformationOutlinedIcon from "@mui/icons-material/MedicalInformationOutlined";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useTabContext } from "../components/navigation/tab-navigation/tabUtils";
import SearchPatient from "./SearchPatient";
import AddNewPatient from "./AddNewPatient";
import SchedulingTaskFlow from "./SchedulingTaskFlow";
import ResearchForms from "./ResearchForms";

const HomePage: React.FC = () => {
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
              <PersonAddIcon
                sx={{ color: "#0277bd", width: "30px", height: "30px" }}
              />
            }
            onClick={() =>
              addTab({
                title: "Add New Patient",
                path: "/patient-new",
                element: <AddNewPatient />,
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
            Add New Patient
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={
              <SearchIcon
                sx={{ color: "#0277bd", width: "30px", height: "30px" }}
              />
            }
            sx={{
              height: "60px",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "black",
            }}
            onClick={() =>
              addTab({
                title: "Search Patient",
                path: "/patient-search",
                element: <SearchPatient />,
              })
            }
          >
            Find Existing Patient
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={
              <ScheduleIcon
                sx={{ color: "#0277bd", width: "30px", height: "30px" }}
              />
            }
            onClick={() =>
              addTab({
                title: "Scheduling / Task Flow",
                path: "/scheduling",
                element: <SchedulingTaskFlow />,
              })
            }
            sx={{
              height: "60px",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "black",
            }}
          >
            Scheduling / Task Flow
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={
              <CalculateIcon
                sx={{ color: "#0277bd", width: "30px", height: "30px" }}
              />
            }
            sx={{
              height: "60px",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "black",
            }}
          >
            Clinical Calculators
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={
              <BookIcon
                sx={{ color: "#0277bd", width: "30px", height: "30px" }}
              />
            }
            sx={{
              height: "60px",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "black",
            }}
          >
            Guidelines
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button
            variant="outlined"
            fullWidth
            startIcon={
              <BarChartIcon
                sx={{ color: "#0277bd", width: "30px", height: "30px" }}
              />
            }
            sx={{
              height: "60px",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "black",
            }}
          >
            Research Statistics
          </Button>
        </Grid>

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
                title: "Research Forms",
                path: "/research-forms",
                element: <ResearchForms />,
              })
            }
            sx={{
              height: "60px",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "black",
            }}
          >
            Research Forms - SHOULD GO IN PATIENT HOME
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
