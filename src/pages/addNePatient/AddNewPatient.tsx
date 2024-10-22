import { TextField, Button, Box } from "@mui/material";
import {
  FormControlLabel,
  Radio,
} from "@mui/material";
import AppForm, { AppFormField, AppSelectField } from "../../components/app-form/AppForm";
import { IRegisterPatientRequest } from "../../models/patientModels";
import { registerPatient } from "../../services/patientServices";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import registerPatientSchema from "../../utils/validations/registerPatientSchema";
import { SelectFieldTypes, TextInputTypes } from "../../utils/interfaces";

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
  const form = useForm<IRegisterPatientRequest>({
    resolver: zodResolver(registerPatientSchema),
    defaultValues: initialPatientInfo,
    mode: "all",
  });
  const onSubmit = async (patientInfo: IRegisterPatientRequest) => {
    console.log(patientInfo);
    const response = await registerPatient(patientInfo);
    if (response?.success) {
      //setPatientInfo(initialPatientInfo);
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
        padding: 5,
      }}
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        className="grid grid-cols-12 gap-y-4 gap-x-6"
      >
        <div className="col-span-full">
          <h2>Register New Patient</h2>
        </div>

        <div className="col-span-full md:col-span-6">
          <AppFormField
            controller={form.control}
            type={TextInputTypes.TEXT}
            label="NIC Number"
            name="nic"
          />
        </div>

        <div className="col-span-full md:col-span-6">
          <AppFormField
            controller={form.control}
            type={TextInputTypes.TEXT}
            label="Given Name"
            name="givenName"
          />
        </div>

        <div className="col-span-full md:col-span-6">
          <AppFormField
            controller={form.control}
            type={TextInputTypes.TEXT}
            label="Family Name"
            name="familyName"
          />
        </div>

        <div className="col-span-full md:col-span-6 px-2">
          <AppSelectField
          controller={form.control}
          type={SelectFieldTypes.RADIO}
          name="gender"
          label="Gender"
          >
            <FormControlLabel value="MALE" control={<Radio />} label="Male" />
            <FormControlLabel
              value="FEMALE"
              control={<Radio />}
              label="Female"
            />
          </AppSelectField>
        </div>

        <div className="col-span-full md:col-span-6">
          <AppFormField
            controller={form.control}
            type={TextInputTypes.DATE}
            label="Date of Birth"
            name="dateOfBirth"
          />
        </div>

        <div className="col-span-full md:col-span-6">
          <TextField fullWidth label="Age" variant="outlined" type="number" />
        </div>

        <div className="col-span-full md:col-span-6">
          <AppFormField
            controller={form.control}
            type={TextInputTypes.TEXT}
            label="Contact Number"
            placeholder="+94000000000"
            name="telecom"
          />
        </div>

        <div className="col-span-full md:col-span-6">
          <AppFormField
            controller={form.control}
            type={TextInputTypes.TEXT}
            label="District"
            name="district"
          />
        </div>

        <div className="col-span-full md:col-span-6">
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </div>
      </AppForm>
    </Box>
  );
};

export default RegisterNewPatient;
