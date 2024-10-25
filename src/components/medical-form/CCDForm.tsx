import { Button, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { pink } from "@mui/material/colors";
import AppForm, { AppFormField } from "../app-form/AppForm";
import { TextInputTypes } from "../../utils/interfaces";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ccdFormSchema from "../../utils/validations/ccdFormSchema";
import { ICCDFormRequest } from "../../models/researchFormModels";

const IBDForm = () => {
  const form = useForm<ICCDFormRequest>({
    resolver: zodResolver(ccdFormSchema),
    defaultValues: undefined,
    mode: "all",
  });

  const onSubmit = (data: ICCDFormRequest) => {
    console.log(data);
  };

  return (
    <div className="flex-1 p-8 md:p-16">
      <div className="flex flex-col items-center">
        <Avatar sx={{ bgcolor: pink[500], width: 56, height: 56 }}>CS</Avatar>
        <Typography>CHIRANGA SHALITHA, 21Y Male</Typography>
      </div>
      <div className="mt-5">
        <Typography align="center" fontSize={19} fontWeight={600}>
          Colorectal Cancer Database - Form
        </Typography>
      </div>
      <AppForm form={form} className="mt-8" onSubmit={onSubmit}>
        <div className="grid grid-cols-12 gap-y-7 gap-x-6">
          <div className="col-span-full md:col-span-6">
            <AppFormField
              controller={form.control}
              type={TextInputTypes.TEXT}
              label="Electronic Consent"
              name="electronicConsent"
            />
          </div>

          <div className="col-span-full md:col-span-6">
            <AppFormField
              controller={form.control}
              type={TextInputTypes.DATE}
              label="Date"
              name="consentDate"
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

          <div className="col-span-full pt-4">
            <h2 className="text-lg font-medium">Current Encounter</h2>
          </div>

          <div className="col-span-full md:col-span-6">
            <AppFormField
              controller={form.control}
              type={TextInputTypes.TEXT}
              label="Clinic/BHT Number"
              name="clinicNumber"
            />
          </div>

          <div className="col-span-full md:col-span-6">
            <AppFormField
              controller={form.control}
              type={TextInputTypes.DATE}
              label="Ward No"
              name="wardNo"
            />
          </div>

          <div className="col-span-full md:col-span-6">
            <AppFormField
              controller={form.control}
              type={TextInputTypes.TEXT}
              label="Contact Name"
              placeholder="+94000000000"
              name="contactNumber"
            />
          </div>

          <div className="col-span-full pt-4">
            <h2 className="text-lg font-medium">Demographic</h2>
          </div>

          <div className="col-span-full md:col-span-6">
            <AppFormField
              controller={form.control}
              type={TextInputTypes.TEXT}
              label="Ethnicity"
              name="ethnicity"
            />
          </div>

          <div className="col-span-full md:col-span-6">
            <AppFormField
              controller={form.control}
              type={TextInputTypes.DATE}
              label="Education"
              name="education"
            />
          </div>

          <div className="col-span-full md:col-span-6">
            <AppFormField
              controller={form.control}
              type={TextInputTypes.TEXT}
              label="Occupation"
              placeholder="Software Engineer"
              name="occupation"
            />
          </div>

          <div className="col-span-full md:col-span-6">
            <AppFormField
              controller={form.control}
              type={TextInputTypes.TEXT}
              label="Finances"
              placeholder="50000"
              name="finance"
            />
          </div>

          <div className="col-span-full pt-4">
            <h2 className="text-lg font-medium">Attachments</h2>
          </div>

          <div className="col-span-full">
            <AppFormField // TODO: Change this to a file input
              controller={form.control}
              type={TextInputTypes.TEXT}
              label="Attachment"
              name="finance"
            />

            <div className="flex flex-col items-end mt-2">
              <h3 className="text-j">
                Click "upload" to temporarily save the attachment.
              </h3>
              <Button variant="contained" color="info" type="submit">
                <CloudUploadIcon />
                <span className="ms-2">Upload</span>
              </Button>
            </div>
          </div>

          <div className="col-span-full md:col-span-6">
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </div>
        </div>
      </AppForm>
    </div>
  );
};

export default IBDForm;
