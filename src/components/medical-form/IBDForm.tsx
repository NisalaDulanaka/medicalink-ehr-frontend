import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Typography } from "@mui/material";
import { Grid, MenuItem, Checkbox, FormControlLabel } from "@mui/material";

const IBDForm = () => {
  return (
    <div className="m-5">
      <Typography className="underline">
        Inflammatory Bowel Disease - Form
      </Typography>
      <Accordion className="mt-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Section A - Personal Information
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="First Name"
                variant="outlined"
                defaultValue=""
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Last Name"
                variant="outlined"
                defaultValue=""
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
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

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Date of Birth"
                variant="outlined"
                type="date"
                defaultValue=""
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                select
                fullWidth
                label="Gender"
                variant="outlined"
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">
                  Other
                </MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Home Address"
                variant="outlined"
                defaultValue=""
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Apartment, Suite, etc."
                variant="outlined"
                defaultValue=""
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                defaultValue=""
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="District"
                variant="outlined"
                defaultValue=""
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                disabled
                label="Country / Region"
                variant="outlined"
                defaultValue="Sri Lanka"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox />} label="Organ donor" />
              <FormControlLabel
                control={<Checkbox />}
                label="Do not resuscitate"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
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
                label="Monthly Income"
                variant="outlined"
              >
                <MenuItem value="Less than 25k">Less than 25k</MenuItem>
                <MenuItem value="25k-50k">25k-50k</MenuItem>
                <MenuItem value="50k-75k">50k-75k</MenuItem>
                <MenuItem value="75k-100k">75k-100k</MenuItem>
                <MenuItem value="100k-200k">100k-200k</MenuItem>
                <MenuItem value="Greater than 200k">Greater than 200k</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Section B - History & Symptoms of IBD
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Family History of Inflammatory Bowel Disease"
                variant="outlined"
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First symptom of IBD"
                variant="outlined"
                type="date"
                defaultValue=""
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First presentation to healthcare services"
                variant="outlined"
                type="date"
                defaultValue=""
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First presentation to specialist services"
                variant="outlined"
                type="date"
                defaultValue=""
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First UGIE"
                variant="outlined"
                type="date"
                defaultValue=""
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First colonoscopy"
                variant="outlined"
                type="date"
                defaultValue=""
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First diagnosis of IBD"
                variant="outlined"
                type="date"
                defaultValue=""
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Started on steroids"
                variant="outlined"
                type="date"
                defaultValue=""
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Started on DMARDs"
                variant="outlined"
                type="date"
                defaultValue=""
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Started on biologics"
                variant="outlined"
                type="date"
                defaultValue=""
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField select fullWidth label="IBD" variant="outlined">
                <MenuItem value="uc">UC</MenuItem>
                <MenuItem value="cd">CD</MenuItem>
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
              <TextField select fullWidth label="Fam hx" variant="outlined">
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Frequent use of NSAIDs"
                variant="outlined"
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Diagnosed pychiatric comorbidities"
                variant="outlined"
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Breastfed during"
                variant="outlined"
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="If breastfed for how long? (months)"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Consumption of water as child"
                variant="outlined"
              >
                <MenuItem value="boiled">Boiled</MenuItem>
                <MenuItem value="filtered">Filtered</MenuItem>
                <MenuItem value="tapline">Tapline</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField select fullWidth label="OCP use" variant="outlined">
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Living area"
                variant="outlined"
              >
                <MenuItem value="urban">Urban</MenuItem>
                <MenuItem value="residential">Residential</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField select fullWidth label="Smoking" variant="outlined">
                <MenuItem value="current">Current</MenuItem>
                <MenuItem value="non smoker">Non smoker</MenuItem>
                <MenuItem value="ex smoker">Ex smoker</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Cigarettes per day (if applicable)"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Years of cigarettes (if applicable)"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Childhood- how many people per bathroom"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Childhood- number of people in the house"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Frequent infectious diseases in childhood"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Vaccination in childhood"
                variant="outlined"
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Appendicectomy"
                variant="outlined"
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Sugary beverages"
                variant="outlined"
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="several times a week">
                  Several times a week
                </MenuItem>
                <MenuItem value="once a week">Once a week</MenuItem>
                <MenuItem value="rarely">Rarely</MenuItem>
                <MenuItem value="never">Never</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Foods with refined sugar"
                variant="outlined"
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="several times a week">
                  Several times a week
                </MenuItem>
                <MenuItem value="once a week">Once a week</MenuItem>
                <MenuItem value="rarely">Rarely</MenuItem>
                <MenuItem value="never">Never</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Fruits vegetables"
                variant="outlined"
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="several times a week">
                  Several times a week
                </MenuItem>
                <MenuItem value="once a week">Once a week</MenuItem>
                <MenuItem value="rarely">Rarely</MenuItem>
                <MenuItem value="never">Never</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="High fiber foods"
                variant="outlined"
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="several times a week">
                  Several times a week
                </MenuItem>
                <MenuItem value="once a week">Once a week</MenuItem>
                <MenuItem value="rarely">Rarely</MenuItem>
                <MenuItem value="never">Never</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Fatty foods"
                variant="outlined"
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="several times a week">
                  Several times a week
                </MenuItem>
                <MenuItem value="once a week">Once a week</MenuItem>
                <MenuItem value="rarely">Rarely</MenuItem>
                <MenuItem value="never">Never</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/*  Use defaultExpanded if necessary*/}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Section C - Additional Information
        </AccordionSummary>
        <AccordionDetails>
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
                <MenuItem value="channeling charges">
                  Channeling charges
                </MenuItem>
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
        </AccordionDetails>
        <AccordionActions>
          <Button variant="outlined">Reset</Button>
          <Button variant="contained">Submit</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
};

export default IBDForm;
