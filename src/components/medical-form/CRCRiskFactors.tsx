import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Typography,
} from "@mui/material";

interface RiskFactor {
  label: string;
  name: keyof Values;
}

interface Values {
  alcohol: string;
  smoking: string;
  fruitsAndVegetables: string;
  deepFriedFood: string;
  processedMeat: string;
  lowFiberDiet: string;
  overweight: string;
  elderlyAge: string;
  familyHistory: string;
  sedentaryLife: string;
  bowelDisease: string;
}

const CRCRiskFactors: React.FC = () => {
  const [values, setValues] = useState<Values>({
    alcohol: "",
    smoking: "",
    fruitsAndVegetables: "",
    deepFriedFood: "",
    processedMeat: "",
    lowFiberDiet: "",
    overweight: "",
    elderlyAge: "",
    familyHistory: "",
    sedentaryLife: "",
    bowelDisease: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const riskFactors: RiskFactor[] = [
    { label: "Excessive consumption of alcohol", name: "alcohol" },
    { label: "Smoking", name: "smoking" },
    {
      label: "Inadequate consumption of vegetables and fruit",
      name: "fruitsAndVegetables",
    },
    {
      label: "Excessive consumption of deep fried food",
      name: "deepFriedFood",
    },
    { label: "Excessive consumption of processed meat", name: "processedMeat" },
    { label: "Low fiber diet", name: "lowFiberDiet" },
    { label: "Being overweight", name: "overweight" },
    { label: "Elderly age (age >70 years)", name: "elderlyAge" },
    {
      label: "Having a close relative with CRC (family history)",
      name: "familyHistory",
    },
    { label: "Sedentary life", name: "sedentaryLife" },
    { label: "Inflammatory Bowel Disease", name: "bowelDisease" },
  ];

  return (
    <div>
      <Typography variant="h6">CRC Risk Factors</Typography>
      <Grid container spacing={2}>
        {riskFactors.map((factor) => (
          <Grid item xs={12} sm={6} key={factor.name}>
            <FormControl component="fieldset">
              <FormLabel>{factor.label}</FormLabel>
              <RadioGroup
                row
                name={factor.name}
                value={values[factor.name]}
                onChange={handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CRCRiskFactors;
