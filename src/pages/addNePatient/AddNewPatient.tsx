import { TextField, Button, Grid, Box } from "@mui/material";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";
import { IRegisterPatientRequest } from "../../models/patientModels";
import { validateDOB, validateGender, validateName, validateNic, validateTelecom } from ".";
import { registerPatient } from "../../services/patientServices";

const initialPatientInfo = {
  nic: "",
  gender: "MALE",
  familyName: "",
  givenName: "",
  dateOfBirth: "",
  telecom: "",
  district: "",
};

const RegisterNewPatient: React.FC = () => {
  const [patientInfo, setPatientInfo] = useState<IRegisterPatientRequest>(initialPatientInfo);
  const [infoErrors, setInfoErrors] = useState({
    nic: "",
    gender: "",
    familyName: "",
    givenName: "",
    dateOfBirth: "",
    telecom: "",
    district: "",
  });

  const nicValidate = (nic: string) => {
    const validation = validateNic(nic);
    setInfoErrors({
      ...infoErrors,
      nic: validation || "",
    });
    return validation;
  };
  const familyNameValidate = (name: string) => {
    const validation = validateName(name);
    setInfoErrors({
      ...infoErrors,
      familyName: validation || "",
    });
    return validation;
  };
  const givenNameValidate = (name: string) => {
    const validation = validateName(name);
    setInfoErrors({
      ...infoErrors,
      givenName: validation || "",
    });
    return validation;
  };
  const dobValidate = (dob: string) => {
    const validation = validateDOB(dob);
    setInfoErrors({
      ...infoErrors,
      dateOfBirth: validation || "",
    });
    return validation;
  };
  const genderValidate = (gender: string) => {
    const validation = validateGender(gender)
    setInfoErrors({
      ...infoErrors,
      gender: validation || "",
    });
    return validation;
  };
  const telecomValidate = (telecom: string) => {
    const validation = validateTelecom(telecom);
    setInfoErrors({
      ...infoErrors,
      telecom: validation || "",
    });
    return validation;
  };
  const districtValidate = (district: string) => {
    const validation = validateName(district);
    setInfoErrors({
      ...infoErrors,
      district: validation || "",
    });
    return validation;
  };

  const validatePatientInfo = () => {
    let valid = !nicValidate(patientInfo.nic);
    valid = !familyNameValidate(patientInfo.familyName) && valid;
    valid = !givenNameValidate(patientInfo.givenName) && valid;
    valid = !dobValidate(patientInfo.dateOfBirth) && valid;
    valid = !genderValidate(patientInfo.gender) && valid;
    valid = !telecomValidate(patientInfo.telecom) && valid;
    valid = !districtValidate(patientInfo.district) && valid;

    return valid;
  }

  const handleSubmit = async () => {
    // Submit
    if (!validatePatientInfo()) {
      console.log("Please check your inputs");
      return;
    }
    console.log(patientInfo);
    const response = await registerPatient(patientInfo);
    if (response?.success) {
      setPatientInfo(initialPatientInfo);
      alert(response.message);
    } else {
      alert("Could not register patient");
    }
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
      <Grid container rowSpacing={3} columnSpacing={5} justifyContent="center">
        <Grid item xs={12}>
          <h2>Register New Patient</h2>
        </Grid>

        <Grid item xs={12} lg={6}>
          <TextField
            fullWidth
            label="Identifier"
            variant="outlined"
            required
            error={!!infoErrors.nic}
            helperText={infoErrors.nic}
            onChange={(e) => {
              nicValidate(e.target.value);
              setPatientInfo({
                ...patientInfo,
                nic: e.target.value,
              });
            }
            }
            onBlur={(e) => nicValidate(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <TextField
            fullWidth
            label="Given Name"
            variant="outlined"
            required
            error={!!infoErrors.givenName}
            helperText={infoErrors.givenName}
            onChange={(e) => {
              givenNameValidate(e.target.value);
              setPatientInfo({
                ...patientInfo,
                givenName: e.target.value,
              });
            }
            }
            onBlur={(e) => givenNameValidate(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <TextField
            fullWidth
            label="Family Name"
            variant="outlined"
            required
            error={!!infoErrors.familyName}
            helperText={infoErrors.familyName}
            onChange={(e) => {
              familyNameValidate(e.target.value);
              setPatientInfo({
                ...patientInfo,
                familyName: e.target.value,
              });
            }
            }
            onBlur={(e) => familyNameValidate(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <FormControl component="fieldset" error={!!infoErrors.gender}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row name="gender">
              <FormControlLabel value="MALE" control={<Radio />} label="Male" />
              <FormControlLabel
                value="FEMALE"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} lg={6}>
          <TextField
            required
            fullWidth
            label="Date of Birth"
            variant="outlined"
            type="date"
            defaultValue=""
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              dobValidate(e.target.value);
              setPatientInfo({
                ...patientInfo,
                dateOfBirth: e.target.value,
              });
            }
            }
            onBlur={(e) => validateDOB(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <TextField fullWidth label="Age" variant="outlined" type="number" />
        </Grid>

        <Grid item xs={12} lg={6}>
          <TextField
            fullWidth
            label="Telecom"
            variant="outlined"
            required
            error={!!infoErrors.telecom}
            helperText={infoErrors.telecom}
            onChange={(e) => {
              telecomValidate(e.target.value);
              setPatientInfo({
                ...patientInfo,
                telecom: e.target.value,
              })
            }}
            onBlur={(e) => telecomValidate(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <TextField
            fullWidth
            label="District"
            variant="outlined"
            required
            error={!!infoErrors.district}
            helperText={infoErrors.district}
            onChange={(e) => {
              districtValidate(e.target.value);
              setPatientInfo({
                ...patientInfo,
                district: e.target.value,
              });
            }}
            onBlur={(e) => districtValidate(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterNewPatient;
