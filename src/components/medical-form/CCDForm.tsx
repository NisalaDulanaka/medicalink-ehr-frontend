import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Typography } from "@mui/material";
import { Grid, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CRCRiskFactors from "./CRCRiskFactors";
import Divider from "@mui/material/Divider";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const IBDForm = () => {
  return (
    <div className="m-5">
      <Typography align="center">CHIRANGA SHALITHA, 21Y Male</Typography>
      <Divider sx={{ fontWeight: 600, marginTop: 2, marginBottom: 2 }}>
      Colorectal Cancer Database - Form
      </Divider>
      <Typography fontWeight={600}>Section A - Identification</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>
            Dear Esteemed Colleagues, We invite you to contribute your clinical
            data to our colorectal cancer database and join our collaborative
            research efforts, offering you the opportunity to be recognized as a
            co-author in resulting publications. Please complete all questions
            of the patient identification section. You may complete the other
            parts if time permits, or we will gather the information on your
            behalf. Warm regards, Prof Dakshitha Wickramasinghe, Professor in
            Surgery, University Surgical Unit.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Ward No."
            variant="outlined"
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Consultant Name"
            variant="outlined"
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="BHT number"
            variant="outlined"
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", flexDirection: "column" }}>
          <label>BHT - Add up to 10 supported files. Max 10 MB per file.</label>
        </Grid>
        <Grid item xs={12}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Add File
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name/Initials"
            variant="outlined"
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField select fullWidth label="Gender" variant="outlined">
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Age" variant="outlined" defaultValue="" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Date of Birth"
            variant="outlined"
            type="date"
            defaultValue=""
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="NIC" variant="outlined" defaultValue="" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Contact / Phone"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+94</InputAdornment>
              ),
            }}
            variant="outlined"
            defaultValue=""
          />
        </Grid>
      </Grid>
      <Typography>Section B - History</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Address (general area e.g. kadawatha)"
            variant="outlined"
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="Education Level  (If a Minor - Parent's Education Level)"
            variant="outlined"
          >
            <MenuItem value="Higher education">Higher education</MenuItem>
            <MenuItem value="Advanced level">Advanced level (ALs)</MenuItem>
            <MenuItem value="Ordinary level">Ordinary level (OLs)</MenuItem>
            <MenuItem value="Primary education">Primary education</MenuItem>
            <MenuItem value="Grade 8">Grade 8</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Occupation"
            variant="outlined"
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="Monthly Income / Financial Status"
            variant="outlined"
          >
            <MenuItem value="no income">No income</MenuItem>
            <MenuItem value="Less than 25k">Less than 25,000</MenuItem>
            <MenuItem value="25,000 - 50,000">25,000 - 50,000</MenuItem>
            <MenuItem value="50,000 - 75,000">50,000 - 75,000</MenuItem>
            <MenuItem value="75k-100k">75,000 - 100,000</MenuItem>
            <MenuItem value="100k-200k">100,000 - 200,000</MenuItem>
            <MenuItem value="Greater than 200k">Greater than 200,000</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField select fullWidth label="Married" variant="outlined">
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField select fullWidth label="Children" variant="outlined">
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <CRCRiskFactors />
        </Grid>
      </Grid>
      <Typography>Section C - Additional Information</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="I know that I have enough money in savings, retirement, or assets to cover the costs of my treatment"
            variant="outlined"
          >
            <MenuItem value="not at all">Not at all</MenuItem>
            <MenuItem value="a little bit">A little bit</MenuItem>
            <MenuItem value="somewhat">Somewhat</MenuItem>
            <MenuItem value="quite a bit">Quite a bit</MenuItem>
            <MenuItem value="very much">Very much</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="My out-of-pocket medical expenses are more than I thought they would be"
            variant="outlined"
          >
            <MenuItem value="not at all">Not at all</MenuItem>
            <MenuItem value="a little bit">A little bit</MenuItem>
            <MenuItem value="somewhat">Somewhat</MenuItem>
            <MenuItem value="quite a bit">Quite a bit</MenuItem>
            <MenuItem value="Very much">Very much</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="I worry about the financial problems I will have in the future as a result of my illness or treatment"
            variant="outlined"
          >
            <MenuItem value="not at all">Not at all</MenuItem>
            <MenuItem value="a little bit">A little bit</MenuItem>
            <MenuItem value="somewhat">Somewhat</MenuItem>
            <MenuItem value="quite a bit">Quite a bit</MenuItem>
            <MenuItem value="Very much">Very much</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="I feel I have no choice about the amount of money I spend on care"
            variant="outlined"
          >
            <MenuItem value="not at all">Not at all</MenuItem>
            <MenuItem value="a little bit">A little bit</MenuItem>
            <MenuItem value="somewhat">Somewhat</MenuItem>
            <MenuItem value="quite a bit">Quite a bit</MenuItem>
            <MenuItem value="Very much">Very much</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="I am frustrated that I cannot work or contribute as much as I usually do"
            variant="outlined"
          >
            <MenuItem value="not at all">Not at all</MenuItem>
            <MenuItem value="a little bit">A little bit</MenuItem>
            <MenuItem value="somewhat">Somewhat</MenuItem>
            <MenuItem value="quite a bit">Quite a bit</MenuItem>
            <MenuItem value="Very much">Very much</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="I am satisfied with my current financial situation"
            variant="outlined"
          >
            <MenuItem value="not at all">Not at all</MenuItem>
            <MenuItem value="a little bit">A little bit</MenuItem>
            <MenuItem value="somewhat">Somewhat</MenuItem>
            <MenuItem value="quite a bit">Quite a bit</MenuItem>
            <MenuItem value="Very much">Very much</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="I am able to meet my monthly expenses"
            variant="outlined"
          >
            <MenuItem value="not at all">Not at all</MenuItem>
            <MenuItem value="a little bit">A little bit</MenuItem>
            <MenuItem value="somewhat">Somewhat</MenuItem>
            <MenuItem value="quite a bit">Quite a bit</MenuItem>
            <MenuItem value="Very much">Very much</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="I feel financially stressed"
            variant="outlined"
          >
            <MenuItem value="not at all">Not at all</MenuItem>
            <MenuItem value="a little bit">A little bit</MenuItem>
            <MenuItem value="somewhat">Somewhat</MenuItem>
            <MenuItem value="quite a bit">Quite a bit</MenuItem>
            <MenuItem value="Very much">Very much</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="I am concerned about keeping my job and income, including paid work at home"
            variant="outlined"
          >
            <MenuItem value="not at all">Not at all</MenuItem>
            <MenuItem value="a little bit">A little bit</MenuItem>
            <MenuItem value="somewhat">Somewhat</MenuItem>
            <MenuItem value="quite a bit">Quite a bit</MenuItem>
            <MenuItem value="Very much">Very much</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="My cancer or treatment has reduced my satisfaction with my present financial situation"
            variant="outlined"
          >
            <MenuItem value="not at all">Not at all</MenuItem>
            <MenuItem value="a little bit">A little bit</MenuItem>
            <MenuItem value="somewhat">Somewhat</MenuItem>
            <MenuItem value="quite a bit">Quite a bit</MenuItem>
            <MenuItem value="Very much">Very much</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="I feel in control of my financial situation"
            variant="outlined"
          >
            <MenuItem value="not at all">Not at all</MenuItem>
            <MenuItem value="a little bit">A little bit</MenuItem>
            <MenuItem value="somewhat">Somewhat</MenuItem>
            <MenuItem value="quite a bit">Quite a bit</MenuItem>
            <MenuItem value="Very much">Very much</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="My illness has been a financial hardship to my family and me"
            variant="outlined"
          >
            <MenuItem value="not at all">Not at all</MenuItem>
            <MenuItem value="a little bit">A little bit</MenuItem>
            <MenuItem value="somewhat">Somewhat</MenuItem>
            <MenuItem value="quite a bit">Quite a bit</MenuItem>
            <MenuItem value="Very much">Very much</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            fullWidth
            label="What has been the main financial concern?"
            variant="outlined"
          >
            <MenuItem value="investigations">Investigations</MenuItem>
            <MenuItem value="channeling charges">Channeling charges</MenuItem>
            <MenuItem value="medicine">Medicine</MenuItem>
            <MenuItem value="transportation">Transportation</MenuItem>
            <MenuItem value="nutrition">Nutrition</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="If other, specify"
            variant="outlined"
            defaultValue=""
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Exacerbators"
            variant="outlined"
            defaultValue=""
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button variant="outlined">Reset</Button>
        <Button variant="contained">Submit</Button>
      </Grid>
    </div>
  );
};

export default IBDForm;
