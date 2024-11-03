import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  TextField,
  Button,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";

const appointments = [
  {
    time: "Today, 18:30 PM",
    id: "6353453346rv",
    name: "Menusan Weerasinghe",
    gender: "M",
    dob: "30/01/1996",
    type: "Facility Visit",
    doctor: "Akeem",
  },
  {
    time: "Today, 19:15 PM",
    id: "20056445654",
    name: "Dinuli Perera",
    gender: "F",
    dob: "19/03/2005",
    type: "OPD Visit",
    doctor: "Randav",
  },
];

const activeVisits = [
  {
    time: "19-Aug-2024, 08:29 AM",
    id: "200445635635",
    name: "Tihnali Rajapaksha",
    gender: "M",
    age: "20/04/2004",
    type: "Facility Visit",
    doctor: "Randav",
  },
  {
    time: "19-Aug-2024, 10:11 PM",
    id: "200453256035",
    name: "Naduni Mittasge",
    gender: "M",
    age: "21/06/2003",
    type: "OPD Visit",
    doctor: "Randav",
  },
  {
    time: "19-Aug-2024, 10:29 PM",
    id: "1556344854kv",
    name: "Savini Rathnayake",
    gender: "M",
    age: "25/11/1999",
    type: "Facility Visit",
    doctor: "Akeem",
  },
];

const Dashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Outpatient Clinic</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ textAlign: { xs: "left", sm: "right" } }}
        >
          <Typography variant="body2">
            {currentTime.toLocaleDateString()}{" "}
            {currentTime.toLocaleTimeString()}
          </Typography>
        </Grid>
      </Grid>

      <Divider sx={{ mb: 2 }} />

      <Typography variant="h6" sx={{ mb: 1 }}>
        Today's Appointments
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Visit Time</TableCell>
              <TableCell>ID Number</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Visit Type</TableCell>
              <TableCell>Dr</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment, index) => (
              <TableRow key={index}>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.id}</TableCell>
                <TableCell>{appointment.name}</TableCell>
                <TableCell>{appointment.gender}</TableCell>
                <TableCell>{appointment.dob}</TableCell>
                <TableCell>{appointment.type}</TableCell>
                <TableCell>{appointment.doctor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" sx={{ mb: 1 }}>
        Active Visits
      </Typography>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField label="Search" variant="outlined" size="small" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select defaultValue="Last 48 hours" size="small" fullWidth>
            <MenuItem value="Last 24 hours">Last 24 hours</MenuItem>
            <MenuItem value="Last 48 hours">Last 48 hours</MenuItem>
            <MenuItem value="Last 7 days">Last 7 days</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={2} sm={2}>
          <Button variant="contained" fullWidth>
            Sort
          </Button>
        </Grid>
        <Grid item xs={2} sm={2}>
          <Button variant="contained" fullWidth>
            Search
          </Button>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Visit Time</TableCell>
              <TableCell>ID Number</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Visit Type</TableCell>
              <TableCell>Dr</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activeVisits.map((visit, index) => (
              <TableRow key={index}>
                <TableCell>{visit.time}</TableCell>
                <TableCell>{visit.id}</TableCell>
                <TableCell>{visit.name}</TableCell>
                <TableCell>{visit.gender}</TableCell>
                <TableCell>{visit.age}</TableCell>
                <TableCell>{visit.type}</TableCell>
                <TableCell>{visit.doctor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;
